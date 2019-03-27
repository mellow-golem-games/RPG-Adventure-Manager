(ns rpg-adventure-manager.scripts.localforageApi
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              ["localforage" :as localforage]))

(defn add-metadata [details]
  "Adds the extra metadata we want to track on each item"
  (conj details {:used false :created (js/Date.)}))


(defn add-item [type details]
  (.then (.getItem localforage type) (fn [value]
    (let [currentStorage (js->clj value)]
      (.then (.setItem localforage type (clj->js (conj currentStorage (add-metadata @details))) (fn [value]
        (handle-state-change "update-entity" {:type type :value (conj currentStorage (add-metadata @details))})
        (js/alert "Item Saved")  )))))))
