(ns rpg-adventure-manager.core
    (:require [reagent.core :as reagent :refer [atom]]
              [rpg-adventure-manager.newcity :as newcity]
              [rpg-adventure-manager.newnpc :as newnpc]
              [rpg-adventure-manager.newitem :as newitem]
              [rpg-adventure-manager.newlocation :as newlocation]
              [rpg-adventure-manager.newhook :as newhook]
              [rpg-adventure-manager.state :refer [state handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]))

(enable-console-print!)

; First thing we need to do is pull all the current entities that we have saved
(localforageApi/pull-initial-data)

(defn Main []
  (print @state) ; TODO remove in prod but nice for dev use to see that state is what we expect
  [:div.Main-Wrapper
   [:h4 {:on-click #(handle-state-change "update-current-view" "new-city")} "Add New City"]
   [:h4 {:on-click #(handle-state-change "update-current-view" "new-npc")} "Add New NPC"]
   [:h4 {:on-click #(handle-state-change "update-current-view" "new-item")} "Add New Item"]
   [:h4 {:on-click #(handle-state-change "update-current-view" "new-location")} "Add New Location"]
   [:h4 {:on-click #(handle-state-change "update-current-view" "new-hook")} "Add New Plot Hook"]
   [newcity/render state]
   [newnpc/render state]
   [newitem/render state]
   [newlocation/render state]
   [newhook/render state]])

(reagent/render-component [Main]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
