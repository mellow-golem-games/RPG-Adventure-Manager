(ns rpg-adventure-manager.components.notes.newnote
    (:require [reagent.core :as reagent :refer [atom]]
              [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]
              [rpg-adventure-manager.components.new-header :as header]))

(defn add-note [details]
  (localforageApi/add-note @details)
  (reset! details {:note ""})
)

(defn render [state]
  (let [details (atom {:note ""})]
  (fn []
    [:div.New-Note.itemPage.new {:class (:new-note (:activeView @state))}
      (header/render)
      [:div.new.content
        [:h2 "Add a New Note"]
        [:p "Notes allow you to create one off notes and reminders. Use them to keep track of information that doesn't fit
            anywhere else"]
        [:textarea {:placeholder "Note" :value (:note @details) :on-change #(swap! details conj {:note (-> % .-target .-value)})}]
        [:button {:on-click #(add-note details)} "Add Note"]]])))
