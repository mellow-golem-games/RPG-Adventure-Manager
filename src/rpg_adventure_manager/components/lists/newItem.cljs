(ns rpg-adventure-manager.components.lists.newitem
    (:require [reagent.core :as reagent :refer [atom]]
              [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]
              [rpg-adventure-manager.components.new-header :as header]))


(defonce inputs (atom {:1 ""}))
(defn handle-input-change [key value]
  "on input change adds a new input and updates the local atom with the new value"
  (swap! inputs conj {(keyword (str (inc (js/parseInt (name key))))) ""})
  (swap! inputs conj {key value}))

(defn save-list []
  "Saves teh list"
  (print @inputs))

(defn render [state]
  (fn []
    (let [list (:activeList @state)]
      [:div.Active-List.itemPage.new {:class (:active-list (:activeView @state))}
        (header/render)
        [:div.new.content
          [:h2 (:name list)]
          (doall (for [input @inputs]
            [:input {:type "text" :key (first input) :placeholder "List Name" :on-change #(handle-input-change (first input) (-> % .-target .-value))}]
          ))
          [:button {:on-click #(save-list)} "Save List"]
          ]])))
