(ns rpg-adventure-manager.components.individual.header
    (:require [rpg-adventure-manager.state :refer [handle-state-change get-value-from-state]]))

; Header file for the individual pages
(defn handle-go-back []
  "conditionally handles back button click based on the how we got to this page"
  (if (not (get-value-from-state "canvasLast?"))
    (handle-state-change "update-current-view" "view-all-entities")
    (do
      (handle-state-change "update-canvas-last" false)
      (handle-state-change "update-current-view" "canvas"))))

(defn render []
  [:div.New-City__header.header.itemPage__header
    [:div.headerInner
      [:p {:on-click #(handle-go-back)} "x"]]])
