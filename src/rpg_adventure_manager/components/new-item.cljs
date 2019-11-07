(ns rpg-adventure-manager.components.newitem
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]
              [rpg-adventure-manager.components.new-header :as header]))

(defn add-item [details]
  (print @details))

; TODO make a heper function to get the current state of any particular page
(defn render [state]
  (let [details (atom {:name "" :description "" :location "" :usage ""})]
  (fn []
    [:div.New-Item.itemPage.new {:class (:new-item (:activeView @state))}
      (header/render)
      [:div.new.content
        [:h2 "Add a New Item"]
        [:input {:type "text" :placeholder "Item Name" :on-change #(swap! details conj {:name (-> % .-target .-value)})}]
        [:textarea {:placeholder "Item Description" :on-change #(swap! details conj {:description (-> % .-target .-value)})}]
        [:input {:type "text" :placeholder "Item Location" :on-change #(swap! details conj {:location (-> % .-target .-value)})}]
        [:textarea {:placeholder "Usage Details" :on-change #(swap! details conj {:usage (-> % .-target .-value)})}]
        [:button {:on-click #(localforageApi/add-item "items" @details)} "Add Item"]]])))
