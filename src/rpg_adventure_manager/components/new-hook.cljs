(ns rpg-adventure-manager.newhook
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]))



; TODO make a heper function to get the current state of any particular page
(defn render [state]
  [:div.New-Hook.itemPage {:class (:new-hook (:activeView @state))}
  [:div.New-Hook__header.itemPage__header
    [:p {:on-click #(handle-state-change "update-current-view" "")} "x"]]
    [:h2 "This is the new Plot Hook page"]
    [:input {:type "text" :placeholder "Plot Hook Name"}]
    [:textarea {:placeholder "Plot Hook Description"}]
    [:input {:type "text" :placeholder "Relevent Characters"}]])
