(ns rpg-adventure-manager.scripts.localforageApi
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              ["localforage" :as localforage]))

(defn add-item [type details]
  (.then (.getItem localforage type) (fn [value]
    (let [currentStorage (js->clj value)]
      (.then (.setItem localforage type (clj->js (conj currentStorage @details)) (fn [value]
        (js/alert "Item Saved")  )))))))
