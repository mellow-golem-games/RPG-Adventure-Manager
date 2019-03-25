(ns rpg-adventure-manager.newitem
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]))



; TODO make a heper function to get the current state of any particular page
(defn render [state]
  [:div.New-Item.itemPage {:class (:new-item (:activeView @state))}
  [:div.New-Item__header.itemPage__header
    [:p {:on-click #(handle-state-change "update-current-view" "")} "x"]]
    [:h2 "This is the new item page"]
    [:input {:type "text" :placeholder "Item Name"}]
    [:textarea {:placeholder "Item Description"}]
    [:input {:type "text" :placeholder "Item Location"}]])
