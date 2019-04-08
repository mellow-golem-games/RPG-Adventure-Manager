(ns rpg-adventure-manager.newlocation
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]
              [rpg-adventure-manager.components.new-header :as header]))

(defn add-location [details]
  (print @details))

; TODO MAKE liniing functionality that can pull up side by side each page!!!!
(defn render [state]
  (let [details (atom {:name "" :description "" :owner "" :inventory ""})]
  (fn []
    [:div.New-Location.itemPage.new {:class (:new-location (:activeView @state))}
    (header/render)
    [:div.new.content
      [:h2 "Add a New Location"]
      [:input {:type "text" :placeholder "Location Name" :on-change #(swap! details conj {:name (-> % .-target .-value)})}]
      [:textarea {:placeholder "Location Description" :on-change #(swap! details conj {:description (-> % .-target .-value)})}]
      [:input {:type "text" :placeholder "Owner or Residents" :on-change #(swap! details conj {:owner (-> % .-target .-value)})}]
      [:input {:type "text" :placeholder "Inventory/Loot" :on-change #(swap! details conj {:inventory (-> % .-target .-value)})}]
      [:button {:on-click #(localforageApi/add-item "locations" @details)} "Add Location"]]])))
