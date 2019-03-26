(ns rpg-adventure-manager.state
  (:require [reagent.core :as reagent :refer [atom]]))


; Holds a reference to all the current Items in the Database
(defonce state (atom {:text "Hello world!" ;TODO remove this
                      :activeView {  ; This gets erased as state changes but I left it here as a reminder for accepted values
                        :new-city false
                        :new-npc false
                        :new-item false
                        :new-location false
                        :new-hook false
                      }}))

(defn update-current-view [payload]
  "Handles changing the view to the next selected page"
  (swap! state conj {:activeView {(keyword payload) "visible"}}))

(defn update-state-text [payload]
  (swap! state conj {:text payload}))


(defn handle-state-change [action payload]
  "Accept an action function to dispatch and passes it the current payload"
  (let [fn-var ((ns-publics 'rpg-adventure-manager.state) (symbol action))]
               (fn-var payload)))
