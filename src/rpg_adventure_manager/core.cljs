(ns rpg-adventure-manager.core
    (:require [reagent.core :as reagent :refer [atom]]
              [rpg-adventure-manager.components.header :as header]
              [rpg-adventure-manager.newcity :as newcity]
              [rpg-adventure-manager.newnpc :as newnpc]
              [rpg-adventure-manager.newitem :as newitem]
              [rpg-adventure-manager.newlocation :as newlocation]
              [rpg-adventure-manager.newhook :as newhook]
              [rpg-adventure-manager.components.all.view :as viewall]
              [rpg-adventure-manager.components.individual.individual :as viewSingle]
              [rpg-adventure-manager.components.lists.list :as listView]
              [rpg-adventure-manager.components.notes.noteview :as noteView]
              [rpg-adventure-manager.components.search :as search]
              [rpg-adventure-manager.components.about :as about]
              [rpg-adventure-manager.components.canvas.canvas :as canvas]
              [rpg-adventure-manager.components.canvas.howTow :as canvasHowTo]
              [rpg-adventure-manager.components.shared.alert :as alert]
              [rpg-adventure-manager.state :refer [state handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]))

(enable-console-print!)

; First thing we need to do is pull all the current entities that we have saved
(localforageApi/pull-initial-data)

; Handles the show all page
(defn show-view-all [entitiesToView type]
  (handle-state-change "update-current-view" "view-all-entities")
  (handle-state-change "set-active-entity" entitiesToView)
  (handle-state-change "set-active-type" type))
; {:class (if ( > (count (:activeType @state)) 2) :hide-scroll)}
(defn Main []
  [:div.Main-Wrapper
    [header/render]
    [:div.ViewSwitcher
      [:button {:on-click #(handle-state-change "update-current-view" "canvas")} "Visual Builder"]]
    [search/render state]
    [about/render (:about (:activeView @state))]
    [canvas/render state]
    [canvasHowTo/render (:canvas-howTo (:activeView @state))]
    [:div.Home-content
      [:div.itemContainer
        [:div.itemContainer__left
          [:h2 "Cities"]]
        [:div.itemContainer__right
          [:button {:on-click #(handle-state-change "update-current-view" "new-city")} "Add New"]
          [:button {:on-click #(show-view-all (:cities @state) "cities")} "View All"]]]
      [:div.itemContainer
        [:div.itemContainer__left
          [:h2 "NPCs"]]
        [:div.itemContainer__right
          [:button {:on-click #(handle-state-change "update-current-view" "new-npc")} "Add New"]
          [:button {:on-click #(show-view-all (:npcs @state) "npcs")} "View All"]]]
      [:div.itemContainer
        [:div.itemContainer__left
          [:h2 "Items"]]
        [:div.itemContainer__right
          [:button {:on-click #(handle-state-change "update-current-view" "new-item")} "Add New"]
          [:button {:on-click #(show-view-all (:items @state) "items")} "View All"]]]
      [:div.itemContainer
        [:div.itemContainer__left
          [:h2 "Locations"]]
        [:div.itemContainer__right
          [:button {:on-click #(handle-state-change "update-current-view" "new-location")} "Add New"]
          [:button {:on-click #(show-view-all (:locations @state) "locations")} "View All"]]]
      [:div.itemContainer
        [:div.itemContainer__left
          [:h2 "Plot Hooks"]]
        [:div.itemContainer__right
          [:button {:on-click #(handle-state-change "update-current-view" "new-hook")} "Add New"]
          [:button {:on-click #(show-view-all (:hooks @state) "hooks")} "View All"]]]]
   [listView/render state]
   [noteView/render state]
   (if (= (:visible (:showAlert @state)) true)  ; conditionally show the alert box
    [alert/render (:content (:showAlert @state))])
   [newcity/render state]
   [newnpc/render state]
   [newitem/render state]
   [newlocation/render state]
   [newhook/render state]
   [viewall/render state]
   [viewSingle/render state]])

(reagent/render-component [Main]
                          (. js/document (getElementById "app")))

(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)

