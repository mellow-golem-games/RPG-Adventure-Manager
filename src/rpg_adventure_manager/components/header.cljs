(ns rpg-adventure-manager.components.header
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]))

(defn render [state]
  (fn []
    [:div.Header
      [:h4 "Header Content"]]))
