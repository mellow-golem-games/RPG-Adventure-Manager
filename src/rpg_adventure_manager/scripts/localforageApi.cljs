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
  (.then (.getItem localforage type) (fn [value]
    (let [currentStorage (js->clj value)]
      (.then (.setItem localforage type (clj->js (conj currentStorage (add-metadata details))) (fn [value]
        (handle-state-change "update-entity" {:type type :value (conj currentStorage (add-metadata details))})
        (handle-state-change "update-alert" {:visible true :content "Item Saved!"})
        (handle-state-change "update-current-view" "")))))))) ; TODO we need a better alert box

(defn update-item [type item]
  "updats an item - does so by completly overriding it so it must pass the same item with update details and all fields"
   (.then (.getItem localforage type) (fn [value]
     (let [currentStorage (js->clj value :keywordize-keys true)]
      (loop [i 0] ; Little cleaner than doall so we only iterate as needed
        (if (= (:name (nth currentStorage i)) (:name item))
            (.then (.setItem localforage type (clj->js (conj (assoc currentStorage i item))) (fn [value]
              (handle-state-change "update-entity" {:type type :value (conj currentStorage)})
              (handle-state-change "update-alert" {:visible true :content "Item Updated!"}))))
            (recur (inc i)))
      )
     ))))
