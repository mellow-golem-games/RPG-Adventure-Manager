(ns rpg-adventure-manager.components.all.view
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]))

(defn render [state]
  (let [asdasd (:activeEntity @state)]
  (fn []
    [:div.View-Cities.viewPage {:class (:view-all-cities (:activeView @state))}
      [:div.New-Hook__header.viewPage__header
        [:p {:on-click #(handle-state-change "update-current-view" "")} "x"]]
      (doall (for [entity (:activeEntity (js->clj @state :keywordize-keys true))]
        [:p {:key (:name entity)} (:name entity)]))
      [:h2 "View All all"]])))
