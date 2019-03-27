(ns rpg-adventure-manager.scripts.localforageApi
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              [cljs.core.async :as async :refer [put! chan <! >! close!]]
              ["localforage" :as localforage]))

(defn add-metadata [details]
  "Adds the extra metadata we want to track on each item"
  (conj details {:used false :created (js/Date.)}))

(defn get-initial-data-by-type [type]
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
  (.then (.getItem localforage type) (fn [value]
    (let [currentStorage (js->clj value)]
      (.then (.setItem localforage type (clj->js (conj currentStorage (add-metadata @details))) (fn [value]
        (handle-state-change "update-entity" {:type type :value (conj currentStorage (add-metadata @details))})
        (js/alert "Item Saved")  )))))))
