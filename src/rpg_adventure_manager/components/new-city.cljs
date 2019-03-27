(ns rpg-adventure-manager.newcity
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]
              ["localforage" :as localforage]))

; TODO make a heper function to get the current state of any particular page
(defn render [state]
  (let [details (atom {:name "" :description ""})]
  (fn []
    [:div.New-City.itemPage {:class (:new-city (:activeView @state))}
      [:div.New-City__header.itemPage__header
        [:p {:on-click #(handle-state-change "update-current-view" "")} "x"]]
      [:h2 "This is the new city page"]
      [:input {:type "text" :placeholder "City Name" :on-change #(swap! details conj {:name (-> % .-target .-value)})}]
      [:textarea {:placeholder "description" :on-change #(swap! details conj {:description (-> % .-target .-value)})}]
      [:button {:on-click #(localforageApi/add-item "cities" details)} "Add City"]])))
