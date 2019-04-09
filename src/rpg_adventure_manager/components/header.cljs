(ns rpg-adventure-manager.components.header
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]))

(defn render []
  (fn []
    [:div.Header
      [:h4 "RPG Adventure Manager"]]))
