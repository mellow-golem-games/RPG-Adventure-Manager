(ns rpg-adventure-manager.components.lists.new
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]
              [rpg-adventure-manager.components.new-header :as header]))

; TODO make a heper function to get the current state of any particular page
(defn render [state]
  (let [details (atom {:name "" :description "" :characters "" :future "" :usage ""})]
  (fn []
    [:div.New-List.itemPage.new {:class (:new-list (:activeView @state))}
      (header/render)
      [:div.new.content
        [:h2 "Add a New List"]
]])))
