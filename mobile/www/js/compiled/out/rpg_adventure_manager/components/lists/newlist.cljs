(ns rpg-adventure-manager.components.lists.newlist
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]
              [rpg-adventure-manager.components.new-header :as header]))

; TODO make a heper function to get the current state of any particular page
(defn render [state]
  (let [details (atom {:name ""})]
  (fn []
    [:div.New-List.itemPage.new {:class (:new-list (:activeView @state))}
      (header/render)
      [:div.new.content
        [:h2 "Add a New List"]
        [:p "Custom lists all you to create lists of anything imaginable for your campaign. Use it to create
          an easy way to keep like data together that does't fit in any of the other categories."]
        [:input {:type "text" :placeholder "List Name" :on-change #(swap! details conj {:name (-> % .-target .-value)})}]
        [:button {:on-click #(localforageApi/add-list @details)} "Add List"]]])))
