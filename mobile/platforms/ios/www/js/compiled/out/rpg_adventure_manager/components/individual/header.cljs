(ns rpg-adventure-manager.components.individual.header
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]))

; Header file for the individual pages

(defn render []
  [:div.New-City__header.header.itemPage__header
    [:div.headerInner
      [:p {:on-click #(handle-state-change "update-current-view" "view-all-entities")} "x"]]])
