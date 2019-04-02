(ns rpg-adventure-manager.newhook
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]))
              
; TODO make a heper function to get the current state of any particular page
(defn render [state]
  (let [details (atom {:name "" :description "" :characters ""})]
  (fn []
    [:div.New-Hook.itemPage {:class (:new-hook (:activeView @state))}
    [:div.New-Hook__header.itemPage__header
      [:p {:on-click #(handle-state-change "update-current-view" "")} "x"]]
      [:h2 "This is the new Plot Hook page"]
      [:input {:type "text" :placeholder "Plot Hook Name" :on-change #(swap! details conj {:name (-> % .-target .-value)})}]
      [:textarea {:placeholder "Plot Hook Description" :on-change #(swap! details conj {:description (-> % .-target .-value)})}]
      [:input {:type "text" :placeholder "Relevent Characters" :on-change #(swap! details conj {:characters (-> % .-target .-value)})}]
      [:button {:on-click #(localforageApi/add-item "hooks" details)} "Add Hook"]])))
