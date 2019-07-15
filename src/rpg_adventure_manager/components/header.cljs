(ns rpg-adventure-manager.components.header
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]))

(defn render []
  (fn []
    [:div.Header.home
      [:h4 "RPG Adventure Manager"]
      [:p {:on-click #(handle-state-change "update-current-view" "about")} "i"]]))
