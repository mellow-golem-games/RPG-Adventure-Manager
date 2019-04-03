(ns rpg-adventure-manager.components.individual.individual
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]))

(defn render [state] ; TODO probably don't want to pass the whole state here but it causes problems with the view since we need that too...
  (fn []
    (let [entity (:singleEntity @state)]
      [:div.View-single.singlePage.viewPage {:class (:view-single (:activeView @state))}
        [:div.View-songle__header.viewPage__header
          [:p {:on-click #(handle-state-change "update-current-view" "view-all-entities")} "x"]]
        [:h2 "Single Page"]
        [:h2 (:name entity)]])))
