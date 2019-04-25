(ns rpg-adventure-manager.components.all.cities
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]))

(defn render [state]
  (let [cities @state]
  (fn []
    [:div.View-Cities.viewPage {:class (:view-all-cities (:activeView @state))}
      [:div.New-Hook__header.viewPage__header
        [:p {:on-click #(handle-state-change "update-current-view" "")} "x"]]
      [:h2 "View All Cities"]])))
