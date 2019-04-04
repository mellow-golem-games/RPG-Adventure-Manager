(ns rpg-adventure-manager.newitem
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]))

(defn add-item [details]
  (print @details))

; TODO make a heper function to get the current state of any particular page
(defn render [state]
  (let [details (atom {:name "" :description "" :location ""})]
  (fn []
    [:div.New-Item.itemPage {:class (:new-item (:activeView @state))}
    [:div.New-Item__header.itemPage__header
      [:p {:on-click #(handle-state-change "update-current-view" "")} "x"]]
      [:h2 "This is the new item page"]
      [:input {:type "text" :placeholder "Item Name" :on-change #(swap! details conj {:name (-> % .-target .-value)})}]
      [:textarea {:placeholder "Item Description" :on-change #(swap! details conj {:description (-> % .-target .-value)})}]
      [:input {:type "text" :placeholder "Item Location" :on-change #(swap! details conj {:location (-> % .-target .-value)})}]
      [:button {:on-click #(localforageApi/add-item "items" @details)} "Add Item"]])))
