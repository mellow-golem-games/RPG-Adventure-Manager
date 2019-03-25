(ns rpg-adventure-manager.newnpc
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]))



; ADD sex and race and profession to the list
(defn render [state]
  [:div.New-Npc.itemPage {:class (:new-npc (:activeView @state))}
  [:div.New-Npc__header.itemPage__header
    [:p {:on-click #(handle-state-change "update-current-view" "")} "x"]]
    [:h2 "This is the new NPC page"]
    [:input {:type "text" :placeholder "NPC Name"}]
    [:textarea {:placeholder "Character Description"}]
    [:input {:type "text" :placeholder "Equipment"}]
    [:input {:type "text" :placeholder "traits"}]
    [:input {:type "text" :placeholder "flaws"}]
    [:input {:type "text" :placeholder "goals"}]
    [:textarea {:placeholder "history"}]
    [:input {:type "text" :placeholder "location"}]
    [:button "Add NPC"]])
