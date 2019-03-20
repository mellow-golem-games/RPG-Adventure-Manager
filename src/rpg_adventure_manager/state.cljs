(ns rpg-adventure-manager.state
  (:require [reagent.core :as reagent :refer [atom]]))


; Holds a reference to all the current Items in the Database
(defonce state (atom {:text "Hello world!"
                      :activeView {
                        :new-city false
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
