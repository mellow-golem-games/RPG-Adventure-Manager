(ns rpg-adventure-manager.components.settings.Houserules
    (:require [reagent.core :as reagent :refer [atom]]
              [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]
              [rpg-adventure-manager.components.new-header :as header]))

(defn add-rule [details state]
  ; (print @details)
  (localforageApi/add-house-rule @details)
  (reset! details {:rule "" :name ""})
  (reset! state false))

(defn House-rules [state]
  (let [details (atom {:rule "" :name ""})]
    (fn [state]
      [:div.House-Rules.itemPage.new {:class @state}
        [:div.New-City__header.header.itemPage__header
          [:div.headerInner]
          [:p {:on-click #(reset! state false)} "x"]]
        [:div.new.content
          [:h2 "Add A New House Rules"]
          [:p "Keep track of all your house rules here. Don't ever forget how you ruled in the past again!"]
          [:input {:type "text" :placeholder "Name" :value (:name @details) :on-change #(swap! details conj {:name (-> % .-target .-value)})}]
          [:textarea {:placeholder "Note" :value (:rule @details) :on-change #(swap! details conj {:rule (-> % .-target .-value)})}]
          [:button {:on-click #(add-rule details state)} "Add Rules"]]])))

