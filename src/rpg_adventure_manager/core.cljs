(ns rpg-adventure-manager.core
    (:require [reagent.core :as reagent :refer [atom]]
              [rpg-adventure-manager.newcity :as newcity]
              [rpg-adventure-manager.newnpc :as newnpc]
              [rpg-adventure-manager.newitem :as newitem]
              [rpg-adventure-manager.newlocation :as newlocation]
              [rpg-adventure-manager.newhook :as newhook]
              [rpg-adventure-manager.state :refer [state handle-state-change]]
              ["localforage" :as localforage]))

(enable-console-print!)


(defn Main []
  [:div.Main-Wrapper
   [:h4 {:on-click #(handle-state-change "update-current-view" "new-city")} "Add New City"]
   [:h4 {:on-click #(handle-state-change "update-current-view" "new-npc")} "Add New NPC"]
   [:h4 {:on-click #(handle-state-change "update-current-view" "new-item")} "Add New Item"]
   [:h4 {:on-click #(handle-state-change "update-current-view" "new-location")} "Add New Location"]
   [:h4 {:on-click #(handle-state-change "update-current-view" "new-hook")} "Add New Plot Hook"]
   [:h1 {:on-click #(handle-state-change "update-state-text" "Hello New World")} (:text @state)]
   [:h3 "Edit this and watch it change!"]
   (newcity/render state)
   (newnpc/render state)
   (newitem/render state)
   (newlocation/render state)
   (newhook/render state)])

(reagent/render-component [Main]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
