(ns rpg-adventure-manager.components.all.view
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]))

; Handles the show all page
  (defn show-view-all [entity]
    (handle-state-change "update-current-view" "view-single")
    (handle-state-change "set-single-entity" entity))


(defn render [state]
  (let [asdasd (:activeEntity @state)]
  (fn []
    [:div.View-Cities.viewPage {:class (:view-all-entities (:activeView @state))}
      [:div.New-Hook__header.viewPage__header
        [:p {:on-click #(handle-state-change "update-current-view" "")} "x"]]
        [:div.View-all-body
          [:div.View-all-group
            [:h3 "Currently In Use"]
            (doall (for [entity (:activeEntity (js->clj @state :keywordize-keys true))] ; TODO we can bring this down to 1 loop
              (if (:used entity)
              [:div.View-all-item
                [:p {:on-click #(show-view-all entity) :key (:name entity)} (:name entity)]])))]
          [:div.View-all-group
            [:h3 "Not In use"]
            (doall (for [entity (:activeEntity (js->clj @state :keywordize-keys true))]
              (if (not (:used entity))
              [:div.View-all-item
                [:p {:on-click #(show-view-all entity) :key (:name entity)}  (:name entity)]])))]]])))
