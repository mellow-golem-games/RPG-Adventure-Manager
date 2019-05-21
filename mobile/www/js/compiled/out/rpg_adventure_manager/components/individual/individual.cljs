(ns rpg-adventure-manager.components.individual.individual
    (:require [reagent.core :as reagent :refer [atom]]
              [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]
              [rpg-adventure-manager.components.individual.header :as header]))

(defn toggle-used-state [entity type]
  "Marks the given entity as used or unused"
  (localforageApi/update-item type (conj entity {:used (not (:used entity))}))
  ; we need to first swap the value in the local entity then post that entity to localstorate
  ; we then need to make a query to the store to update the state of the current entity
  ; last need to update the single entity property in the store to update this page
  )

(defn delete-item [entity type]
  (localforageApi/delete-item entity type)
  (handle-state-change "update-current-view" ""))

(defn save-edits [entity editing type]
  "Handles saving when an entity is updated"
  (swap! editing not)
  (localforageApi/update-item type @entity)
  )

(defn render [state] ; TODO probably don't want to pass the whole state here but it causes problems with the view since we need that too...
  (let [editing (atom false)]
    (fn []
      (let [entity (:singleEntity @state)
            details (atom entity)]
      [:div.View-single.singlePage.viewPage {:class (:view-single (:activeView @state))}
        (header/render)
        [:div.singlePage.body
          [:div.singlePage.indivHeader
            [:h1 (:name entity)]
            [:div
              (if (= (:used entity) false)
                [:button {:on-click #(toggle-used-state entity (:activeType @state))} "Mark as Used"]
                [:button {:on-click #(toggle-used-state entity (:activeType @state))} "Mark Unused"])
                (if (not @editing)
                  [:button {:on-click #(swap! editing not)} "Edit"]
                  [:button {:on-click #(save-edits details editing (:activeType @state))} "Save"])]]
          (doall (for [key entity
                  :when (not= (first key) :created) ; do not display created for our edit view
                  :when (not= (first key) :used)] ; do not display used in our edit view]
              [:div.singlePage.item {:key key}
                (if (not @editing)
                [:div.singlePageItem.content
                  [:h2 {:key (name (first key))} (str (name (first key)) ": ")]
                  [:p (str (second key))]]
                [:div.singlePageItem.edit
                  [:input {:type "text" :placeholder (first key) :defaultValue (second key)
                    :on-change #(swap! details conj {(first key) (-> % .-target .-value)})}]]) ; end of editing if
              ]))
              [:button.delete {:on-click #(delete-item entity (:activeType @state))} "Delete"]]]))))
