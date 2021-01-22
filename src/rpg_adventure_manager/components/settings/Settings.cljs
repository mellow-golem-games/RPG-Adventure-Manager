(ns rpg-adventure-manager.components.settings.Settings
    (:require [reagent.core :as reagent :refer [atom]]
              [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]
              [rpg-adventure-manager.components.new-header :as header]
              [rpg-adventure-manager.components.settings.Houserules :refer [House-rules]]))

(defn delete-rule [rule-name]
  (localforageApi/delete-house-rule rule-name))

; TODO make a heper function to get the current state of any particular page
(defn Settings [state]
  (let [house-rule-add-screen (atom false)]
    (fn [state]
      (print (:rpg-house-rules @state))
      [:div.Settings.viewPage {:class (:settings (:activeView @state))}
        (header/render)
        [House-rules house-rule-add-screen]
        [:div.Settings.content
         [:div.HouseRules-section
          [:div.HouseRules-header
           [:h2 "House Rules"]
           [:div
            [:button {:on-click #(reset! house-rule-add-screen "visible")} "Add Rule"]]]
          [:div.HouseRules-body
           (for [rule (:rpg-house-rules (js->clj @state :keywordize-keys true))]
             [:div
              [:p.deleteNote {:on-click #(delete-rule (:name rule))}"x"]
              [:h2 (:name rule)]
              [:p (:rule rule)]])]]]])))
