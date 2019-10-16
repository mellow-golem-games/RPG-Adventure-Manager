(ns rpg-adventure-manager.components.canvas.component
    (:require [reagent.core :as reagent :refer [atom]]
              [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]
              [rpg-adventure-manager.components.new-header :as header]))

(defn update-title [newVal oldVals id]
  (swap! oldVals conj {:title newVal})
  (localforageApi/update-canvas-component-text id {:title newVal :description (:description @oldVals)}))

(defn update-description [newVal oldVals id]
  (swap! oldVals conj {:description oldVals})
  (localforageApi/update-canvas-component-text id {:title (:title @oldVals) :description newVal}))

(defn Component [component]
    (let [componentValues (atom {:title (:title component) :description (:description component)})]
      (fn [component]
        [:div.Component.draggable {:key (:id component)
                          :data-id (:id component)
                          :style {:top (:yPos component) :left (:xPos component)
                                  :background "gray"
                                  :padding "5px"
                                  :width "275px"}}
           [:input {:type "text"
                    :default-value (:title @componentValues)
                    :on-change #(update-title (-> % .-target .-value) componentValues (:id component))}]
           [:textarea {:default-value (:description @componentValues)
                       :on-change #(update-description (-> % .-target .-value) componentValues (:id component))}]])))