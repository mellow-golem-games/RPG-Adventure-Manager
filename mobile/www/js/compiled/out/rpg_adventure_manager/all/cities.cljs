(ns rpg-adventure-manager.all.cities
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]))

(defn render [state]
  (let [cities @state]
  (fn []
    [:div.View-Cities.viewPage {:class (:view-all-cities (:activeView @state))}
      [:h2 "View All Cities"]])))
