(ns rpg-adventure-manager.components.lists.list
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]
              [rpg-adventure-manager.components.new-header :as header]
              [rpg-adventure-manager.components.lists.newlist :as newlist]))


(defn render [state]
  (let [test ""]
    (fn []
      [:div.Home-lists
        [newlist/render state]
        [:div.Home-lists-header
          [:h2 "Custom Lists"]
          [:button {:on-click #(handle-state-change "update-current-view" "new-list")} "Add List"]]]
      )))
