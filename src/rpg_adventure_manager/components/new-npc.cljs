(ns rpg-adventure-manager.components.newnpc
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]
              [rpg-adventure-manager.components.new-header :as header]))

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
                       :location ""
                       :usage ""})]
  (fn []
    [:div.New-Npc.itemPage.new {:class (:new-npc (:activeView @state))}
      (header/render)
      [:div.new.content
        [:h2 "Add a New NPC"]
        [:input {:type "text" :placeholder "NPC Name" :on-change #(swap! details conj {:name (-> % .-target .-value)})}]
        [:textarea {:placeholder "Character Description" :on-change #(swap! details conj {:description (-> % .-target .-value)})}]
        [:input {:type "text" :placeholder "Equipment" :on-change #(swap! details conj {:equipment (-> % .-target .-value)})}]
        [:input {:type "text" :placeholder "Traits" :on-change #(swap! details conj {:traits (-> % .-target .-value)})}]
        [:input {:type "text" :placeholder "Flaws" :on-change #(swap! details conj {:flaws (-> % .-target .-value)})}]
        [:input {:type "text" :placeholder "Goals" :on-change #(swap! details conj {:goals (-> % .-target .-value)})}]
        [:textarea {:placeholder "History" :on-change #(swap! details conj {:history (-> % .-target .-value)})}]
        [:input {:type "text" :placeholder "Location" :on-change #(swap! details conj {:location (-> % .-target .-value)})}]
        [:textarea {:placeholder "Usage Details" :on-change #(swap! details conj {:usage (-> % .-target .-value)})}]
        [:button {:on-click #(localforageApi/add-item "npcs" @details)} "Add NPC"]]])))
