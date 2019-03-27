(ns rpg-adventure-manager.newnpc
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]))

(defn add-npc [details]
  (print @details))

; ADD sex and race and profession to the list
(defn render [state]
  (let [details (atom {:name ""
                       :description ""
                       :equipment ""
                       :traits ""
                       :flaws ""
                       :goals ""
                       :history ""
                       :location ""})]
  (fn []
    [:div.New-Npc.itemPage {:class (:new-npc (:activeView @state))}
    [:div.New-Npc__header.itemPage__header
      [:p {:on-click #(handle-state-change "update-current-view" "")} "x"]]
      [:h2 "This is the new NPC page"]
      [:input {:type "text" :placeholder "NPC Name" :on-change #(swap! details conj {:name (-> % .-target .-value)})}]
      [:textarea {:placeholder "Character Description" :on-change #(swap! details conj {:description (-> % .-target .-value)})}]
      [:input {:type "text" :placeholder "Equipment" :on-change #(swap! details conj {:equipment (-> % .-target .-value)})}]
      [:input {:type "text" :placeholder "traits" :on-change #(swap! details conj {:traits (-> % .-target .-value)})}]
      [:input {:type "text" :placeholder "flaws" :on-change #(swap! details conj {:flaws (-> % .-target .-value)})}]
      [:input {:type "text" :placeholder "goals" :on-change #(swap! details conj {:goals (-> % .-target .-value)})}]
      [:textarea {:placeholder "history" :on-change #(swap! details conj {:history (-> % .-target .-value)})}]
      [:input {:type "text" :placeholder "location" :on-change #(swap! details conj {:location (-> % .-target .-value)})}]
      [:button {:on-click #(localforageApi/add-item "npcs" details)} "Add NPC"]])))
