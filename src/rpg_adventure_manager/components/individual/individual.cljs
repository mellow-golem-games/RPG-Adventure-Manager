(ns rpg-adventure-manager.components.individual.individual
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]))

(defn toggle-used-state [entity]
  "Marks the given entity as used or unused"
  (localforageApi/update-item "cities" (conj entity {:used (not (:used entity))}))
  ; we need to first swap the value in the local entity then post that entity to localstorate
  ; we then need to make a query to the store to update the state of the current entity
  ; last need to update the single entity property in the store to update this page
  )


(defn render [state] ; TODO probably don't want to pass the whole state here but it causes problems with the view since we need that too...
  (fn []
    (let [entity (:singleEntity @state)]
      [:div.View-single.singlePage.viewPage {:class (:view-single (:activeView @state))}
        [:div.View-songle__header.viewPage__header
          [:p {:on-click #(handle-state-change "update-current-view" "view-all-entities")} "x"]]
        [:h2 "Single Page"]
        [:h2 (:name entity)]
        (if (= (:used entity) false)
          [:button {:on-click #(toggle-used-state entity)} "Mark as Used"]
          [:button {:on-click #(toggle-used-state entity)} "mark as unused"])
        (doall (for [key entity]
          (if (and (not (= (first key) :used)) (not (= (first key) :created))) ; No display for used and created
            [:h2 {:key (name (first key))} (str (name (first key)) ": " (second key))])))])))
