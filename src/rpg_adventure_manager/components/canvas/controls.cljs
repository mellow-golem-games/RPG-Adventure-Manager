(ns rpg-adventure-manager.components.canvas.controls
    (:require [reagent.core :as reagent :refer [atom]]
              [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]
              [rpg-adventure-manager.components.new-header :as header]))




(defn render []
   [:div.Controls
      [:p {:on-click #(handle-state-change "add-canvas-component" nil)} "+"]])
