(ns rpg-adventure-manager.components.shared.alert
  (:require [rpg-adventure-manager.state :refer [handle-state-change]]))


(defn hide-alert []
  ; timeout for 2 seconds that hides the active class on the element
  (js/setTimeout #(handle-state-change "update-alert" {:visible false :content ""}) 2000))

(defn render [text]
  (fn []
    (hide-alert)
    [:div.Alert.active
      [:h3 text]]))
