(ns rpg-adventure-manager.components.new-header
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]))

; Header file for the new entity pages
; Made a separate one as having to pass parameters around to conditionally turn off options
; seems like a pain for such a small app

(defn render []
  [:div.New-City__header.header.itemPage__header
    [:div.headerInner
    [:p {:on-click #(handle-state-change "update-current-view" "")} "x"]]])
