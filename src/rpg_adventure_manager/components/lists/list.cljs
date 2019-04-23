(ns rpg-adventure-manager.components.lists.list
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]
              [rpg-adventure-manager.components.new-header :as header]
              [rpg-adventure-manager.components.lists.newlist :as newlist]
              [rpg-adventure-manager.components.lists.newitem :as newitem]))

(defn show-active-list [list]
  "Shows the acive list and page"
  (handle-state-change "update-current-view" "active-list")
  (handle-state-change "set-active-list" list))


(defn render [state]
  (fn []
    [:div.Home-lists
      [newlist/render state]
      [newitem/render state]
      [:div.Home-lists-header
        [:h2 "Custom Lists"]
        [:button {:on-click #(handle-state-change "update-current-view" "new-list")} "Add List"]]
      [:div.Home-lists-content
        (doall (for [list (:lists (js->clj @state :keywordize-keys true))]
          [:div.Home-lists-container
            [:p {:on-click #(show-active-list list) :key (:name list)} (:name list)]
            [:button.delete {:on-click #(localforageApi/delete-list (:name list))} "Delete"]]))]]))
