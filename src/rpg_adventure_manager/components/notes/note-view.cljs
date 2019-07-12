(ns rpg-adventure-manager.components.notes.noteview
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]
              [rpg-adventure-manager.components.notes.newnote :as newnote]
              [rpg-adventure-manager.components.new-header :as header]))

(defn delete-note [key]
  (localforageApi/delete-note key))

(defn render [state]
  (fn []
    [:div.Home-notes
      [newnote/render state]
      [:div.Home-notes-header
        [:h2 "Notes"]
        [:div
         [:button {:on-click #(handle-state-change "update-current-view" "new-note")} "Add Note"]]]
      [:div.Home-notes-content
        (doall (for [note (:notes (js->clj @state :keywordize-keys true))]
          [:div.Home-notes-container {:key (:key note)}
            [:div.Note-item
              [:p.deleteNote {:on-click #(delete-note (:key note))}"x"]
              [:p (:note note)]]]))]]))
