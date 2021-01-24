(ns rpg-adventure-manager.components.settings.Settings
    (:require [reagent.core :as reagent :refer [atom]]
              [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]
              [rpg-adventure-manager.components.new-header :as header]
              [rpg-adventure-manager.components.settings.Houserules :refer [House-rules]]))

(defn delete-rule [rule-name]
  (localforageApi/delete-house-rule rule-name))

(defn get-default-days [settings]
  (if (:days settings)
    (:days settings)
    0))

(defn handle-change-days [val]
  (localforageApi/save-game-days val))

; TODO make a heper function to get the current state of any particular page
(defn Settings [state]
  (let [house-rule-add-screen (atom false)]
    (fn [state]
      [:div.Settings.viewPage {:class (:settings (:activeView @state))}
        (header/render)
        [House-rules house-rule-add-screen]
        [:div.Settings.content
         [:h2 "In-Game Days"]
         [:div.Gamedays-section
          [:div
           [:p "Keep track of the game days that have passed in your campaign."]]
          [:div
           [:input {:type "number"  :value (get-default-days (:rpg-settings (js->clj @state :keywordize-keys true))) :on-change #(handle-change-days (-> % .-target .-value))}]]]
         [:div.HouseRules-section
          [:div.HouseRules-header
           [:h2 "House Rules"]
           [:div
            [:button.HouseRules-button {:on-click #(reset! house-rule-add-screen "visible")} "Add Rule"]]]
          [:div.HouseRules-body
           (for [rule (:rpg-house-rules (js->clj @state :keywordize-keys true))]
             [:div.HouseRule-item {:key (:name rule)}
              [:div.Note-item
               [:p.deleteNote.deleteHouseRule {:on-click #(delete-rule (:name rule))}"x"]
               [:h2 (:name rule)]]
              [:p (:rule rule)]])]]]])))
