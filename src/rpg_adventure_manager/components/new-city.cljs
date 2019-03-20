(ns rpg-adventure-manager.newcity
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]))



; TODO make a heper function to get the current state of any particular page
(defn render [state]
  [:div.New-City {:class (:new-city (:activeView @state))}
    [:h2 "This is the new city page"]])
