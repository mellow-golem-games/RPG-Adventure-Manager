(ns rpg-adventure-manager.newhook
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]
              [rpg-adventure-manager.components.new-header :as header]))

; TODO make a heper function to get the current state of any particular page
(defn render [state]
  (let [details (atom {:name "" :description "" :characters "" :usage ""})]
  (fn []
    [:div.New-Hook.itemPage.new {:class (:new-hook (:activeView @state))}
      (header/render)
      [:div.new.content
        [:h2 "Add a New Plot Hook"]
        [:input {:type "text" :placeholder "Plot Hook Name" :on-change #(swap! details conj {:name (-> % .-target .-value)})}]
        [:textarea {:placeholder "Plot Hook Description" :on-change #(swap! details conj {:description (-> % .-target .-value)})}]
        [:input {:type "text" :placeholder "Relevent Characters" :on-change #(swap! details conj {:characters (-> % .-target .-value)})}]
        [:textarea {:placeholder "Usage Details" :on-change #(swap! details conj {:usage (-> % .-target .-value)})}]
        [:button {:on-click #(localforageApi/add-item "hooks" @details)} "Add Hook"]]])))
