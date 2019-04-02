(ns rpg-adventure-manager.core
    (:require [reagent.core :as reagent :refer [atom]]
              [rpg-adventure-manager.newcity :as newcity]
              [rpg-adventure-manager.newnpc :as newnpc]
              [rpg-adventure-manager.newitem :as newitem]
              [rpg-adventure-manager.newlocation :as newlocation]
              [rpg-adventure-manager.newhook :as newhook]
              [rpg-adventure-manager.components.all.view :as viewall]
              [rpg-adventure-manager.components.shared.alert :as alert]
              [rpg-adventure-manager.state :refer [state handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]))

(enable-console-print!)

; First thing we need to do is pull all the current entities that we have saved
(localforageApi/pull-initial-data)

(defn show-view-all [entitiesToView]
  (handle-state-change "update-current-view" "view-all-cities")
  (handle-state-change "set-active-entity" entitiesToView))

(defn Main []
  ;(print @state) ; TODO remove in prod but nice for dev use to see that state is what we expect
  [:div.Main-Wrapper
    [:div.itemContainer
      [:button {:on-click #(handle-state-change "update-current-view" "new-city")} "Add New City"]
      [:button {:on-click #(show-view-all (:cities @state))} "View All Cities"]]
    [:div.itemContainer
      [:button {:on-click #(handle-state-change "update-current-view" "new-npc")} "Add New NPC"]
      [:button {:on-click #(show-view-all (:npcs @state))} "View All NPCs"]]
    [:div.itemContainer
      [:button {:on-click #(handle-state-change "update-current-view" "new-item")} "Add New Item"]
      [:button {:on-click #(show-view-all (:items @state))} "View All Items"]]
    [:div.itemContainer
      [:button {:on-click #(handle-state-change "update-current-view" "new-location")} "Add New Location"]
      [:button {:on-click #(show-view-all (:locations @state))} "View All Locations"]]
    [:div.itemContainer
      [:button {:on-click #(handle-state-change "update-current-view" "new-hook")} "Add New Plot Hook"]
      [:button {:on-click #(show-view-all (:hooks @state))} "View All Plot Hooks"]]
   (if (= (:visible (:showAlert @state)) true)  ; conditionally show the alert box
    [alert/render (:content (:showAlert @state))])
   [newcity/render state]
   [newnpc/render state]
   [newitem/render state]
   [newlocation/render state]
   [newhook/render state]
   [viewall/render state]])

(reagent/render-component [Main]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
