(ns rpg-adventure-manager.newlocation
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]))



; TODO MAKE liniing functionality that can pull up side by side each page!!!!
(defn render [state]
  [:div.New-Location.itemPage {:class (:new-location (:activeView @state))}
  [:div.New-Location__header.itemPage__header
    [:p {:on-click #(handle-state-change "update-current-view" "")} "x"]]
    [:h2 "This is the new location page"]
    [:input {:type "text" :placeholder "Location Name"}]
    [:textarea {:placeholder "Location Description"}]
    [:text {:type "text" :placeholder "Owner or Residents"}]
    [:text {:type "text" :placeholder "Inventory/Loot"}]])
