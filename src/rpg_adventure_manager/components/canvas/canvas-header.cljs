(ns rpg-adventure-manager.components.canvas.canvas-header
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]))

; Header file for the canvas page
; Made a separate one as having to pass parameters around to conditionally turn off options
; seems like a pain for such a small app

(defn render []
  [:div.New-City__header.header.itemPage__header.canvas-header
    [:div.headerInner.canvasHeader
      [:p {:on-click #(handle-state-change "update-current-view" "")} "x"]
      [:button {:on-click #(localforageApi/add-canvas-component)} "Add Card"]]])
