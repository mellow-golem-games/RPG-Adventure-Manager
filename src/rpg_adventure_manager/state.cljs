(ns rpg-adventure-manager.state
  (:require
            [reagent.core :as r]))

(defonce state (r/atom {:text "Hello world!"})) ; Holds a reference to all the current Items in the Database

(defn test-state []
  (print "State Test"))

(defn update-state-text [payload]
  (swap! state conj {:text payload}))


(defn handle-state-change [action payload]
  (let [fn-var ((ns-publics 'rpg-adventure-manager.state) (symbol action))]
               (fn-var payload)))
