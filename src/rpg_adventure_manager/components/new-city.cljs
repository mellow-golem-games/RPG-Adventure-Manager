(ns rpg-adventure-manager.newcity
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]))



; TODO make a heper function to get the current state of any particular page
(defn render [state]
  [:div.New-City.itemPage {:class (:new-city (:activeView @state))}
    [:div.New-City__header.itemPage__header
      [:p {:on-click #(handle-state-change "update-current-view" "")} "x"]]
    [:h2 "This is the new city page"]
    [:input {:type "text" :placeholder "City Name"}]
    [:textarea {:placeholder "description"}]])
