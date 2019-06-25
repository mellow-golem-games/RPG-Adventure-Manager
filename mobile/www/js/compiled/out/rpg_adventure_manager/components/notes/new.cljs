(ns rpg-adventure-manager.components.notes.new
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]
              [rpg-adventure-manager.components.new-header :as header]))

; TODO make a heper function to get the current state of any particular page
(defn render [state]
  (let [details (atom {:name "" :details ""})]
  (fn []
    [:div.New-Note.itemPage.new {:class (:new-note (:activeView @state))}
      (header/render)
      [:div.new.content
        [:h2 "Add a New Note"]
        [:p "Notes allow you to create one off notes and reminders. Use them to keep track of infomration that doesn't fit
            anywhere else"]
        [:input {:type "text" :placeholder "List Name" :on-change #(swap! details conj {:name (-> % .-target .-value)})}]
        [:textarea {:placeholder "List Name" :on-change #(swap! details conj {:details (-> % .-target .-value)})}]
        [:button {:on-click #(localforageApi/add-list @details)} "Add Note"]]])))
