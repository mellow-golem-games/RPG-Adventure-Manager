(ns rpg-adventure-manager.newcity
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]
              [rpg-adventure-manager.components.new-header :as header]
              ["localforage" :as localforage]))

; TODO make a heper function to get the current state of any particular page
(defn render [state]
  (let [details (atom {:name "" :description "" :usage ""})]
  (fn []
    [:div.New-City.itemPage.new {:class (:new-city (:activeView @state))}
      (header/render)
      [:div.new.content
        [:h2 "Add a New City"]
        [:input {:type "text" :placeholder "City Name" :on-change #(swap! details conj {:name (-> % .-target .-value)})}]
        [:textarea {:placeholder "Description" :on-change #(swap! details conj {:description (-> % .-target .-value)})}]
        [:textarea {:placeholder "Usage Details" :on-change #(swap! details conj {:usage (-> % .-target .-value)})}]
        [:button {:on-click #(localforageApi/add-item "cities" @details)} "Add City"]]])))
