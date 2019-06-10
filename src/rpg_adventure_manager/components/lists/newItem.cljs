(ns rpg-adventure-manager.components.lists.newitem
    (:require [reagent.core :as reagent :refer [atom]]
              [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]
              [rpg-adventure-manager.components.new-header :as header]))

(defonce active-list-name (atom ""))
(defonce inputs (atom {:1 ""}))

(defn update-default-inputs [name list]
  "updates are default input with the size of the current list - only fires on list change"
  (if (not= @active-list-name name)
    (do
      (reset! inputs list)
      (reset! active-list-name name))))

(defn handle-input-change [key value]
  "on input change adds a new input and updates the local atom with the new value"
  (if (= (count @inputs) (js/parseInt (name key)))
    (swap! inputs conj {(keyword (str (inc (js/parseInt (name key))))) ""}))
  (swap! inputs conj {key value}))

(defn save-list [name]
  "Saves the list"
  (localforageApi/save-list name @inputs))

(defn render [state]
  (fn []
    (let [list (:activeList @state)]
      (update-default-inputs (:name list)(:items list))
      [:div.Active-List.itemPage.new {:class (:active-list (:activeView @state))}
        (header/render)
        [:div.new.content
          [:h2 (:name list)]
          (doall (for [input @inputs]
            ; input doesnt update default value on update?
            [:input {:key (first input) :type "text" :value (second input) :placeholder "List Item" :on-change #(handle-input-change (first input) (-> % .-target .-value))}]
          ))
          [:button {:on-click #(save-list (:name list))} "Save List"]]])))
