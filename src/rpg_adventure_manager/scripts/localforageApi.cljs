(ns rpg-adventure-manager.scripts.localforageApi
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              [cljs.core.async :as async :refer [put! chan <! >! close!]]
              ["localforage" :as localforage]))

(defn add-metadata [details]
  "Adds the extra metadata we want to track on each item"
  (conj details {:used false :created (js/Date.)}))

(defn get-initial-data-by-type [type]
  "Quries an entity from out localstorage and adds it to local store"
  (.then (.getItem localforage type) (fn [value]
    (handle-state-change "update-entity" {:type type :value value}))))

(defn pull-initial-data []
  "this function gets all the current saved data and pushes it to the store"
  (go (get-initial-data-by-type "cities"))
  (go (get-initial-data-by-type "npcs"))
  (go (get-initial-data-by-type "locations"))
  (go (get-initial-data-by-type "items"))
  (go (get-initial-data-by-type "hooks")))

(defn add-item [type details]
  "adds an item to localstorage by pulling current list, conj them together and overwrite"
  (if (clojure.string/blank? (:name details)) ; Name is the only field we require
    (js/alert "Name Cannot Be Blank!")
    (.then (.getItem localforage type) (fn [value]
      (let [currentStorage (js->clj value :keywordize-keys true)]
        (loop [i 0] ; Little cleaner than doall/for so we only iterate as needed this probably won't get too big anyways
          (if (= (count currentStorage) i) ; This is after we loop through them all to check that the name doesnt exits
            (.then (.setItem localforage type (clj->js (conj currentStorage (add-metadata details))) (fn [value]
              (handle-state-change "update-entity" {:type type :value (conj currentStorage (add-metadata details))})
              (handle-state-change "update-alert" {:visible true :content "Item Saved!"})
              (handle-state-change "update-current-view" ""))))
            (if (= (:name (nth currentStorage i)) (:name details))
              (js/alert "That Name Is Already Taken!")
              (recur (inc i)))))))))) ; TODO we need a better alert box

(defn update-item [type item]
  "updats an item - does so by completly overriding it so it must pass the same item with update details and all fields"
   (.then (.getItem localforage type) (fn [value]
     (let [currentStorage (js->clj value :keywordize-keys true)]
      (loop [i 0] ; Little cleaner than doall/for so we only iterate as needed this probably won't get too big anyways
        (if (= (:name (nth currentStorage i)) (:name item))
            (.then (.setItem localforage type (clj->js (conj (assoc currentStorage i item))) (fn [value]
              (handle-state-change "update-entity" {:type type :value (conj currentStorage)})
              (handle-state-change "set-single-entity" item)
              (handle-state-change "set-active-entity" (conj (assoc currentStorage i item)))
              (handle-state-change "update-alert" {:visible true :content "Item Updated!"}))))
            (recur (inc i))))))))

(defn delete-item [entity type]
  "deletes an item by creating a new list of type without the removed element and overrides storage"
  (.then (.getItem localforage type) (fn [value]
    (let [currentStorage (js->clj value :keywordize-keys true)
          filteredValues (filter (fn [item]
            (not= (:name item) (:name entity))) currentStorage)]
      (.then (.setItem localforage type (clj->js filteredValues) (fn [value]
          (handle-state-change "update-entity" {:type type :value filteredValues})
          (handle-state-change "update-alert" {:visible true :content "Item Deleted!"}))))))))
