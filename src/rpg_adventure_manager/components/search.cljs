(ns rpg-adventure-manager.components.search
    (:require [reagent.core :as reagent :refer [atom]]
              [rpg-adventure-manager.state :refer [handle-state-change]]
              [clojure.string :as str]))

; These are teh values we go through to search
(defonce search-list '(
  "cities"
  "npcs"
  "locations"
  "items"
  "hooks"
))
; TODO we might want to add notes and lists here too


(defn handle-search-change [searchVal searchResults state]
  (reset! searchResults nil) ; reset our atom
  (if (> (count searchVal) 1)
    (doseq [item search-list]
      (let [searchMap (js->clj ((keyword item) @state) :keywordize-keys true)]
        ; Holds the entire map of the entities for each item of the search list
          (doseq [singleEntity searchMap
                  :when searchMap] ; search throug the list of entities
            (if (or (str/includes? (:name singleEntity) searchVal) (str/includes? (:description singleEntity) searchVal))
              (swap! searchResults conj {:type item :item singleEntity})))))))

(defn handle-search-result-click [state item]
  (handle-state-change "set-active-type" (:type item))
  (handle-state-change "set-active-entity" ((keyword (:type item)) @state))
  (handle-state-change "set-single-entity" (:item item))
  (handle-state-change "update-current-view" "view-single"))

(defn render [state]
  (let [searchResults (atom nil)]
    (fn []
      [:div.Search
        [:h5 "Search Your Enteries: "]
        [:input {:type "text" :on-change #(handle-search-change (-> % .-target .-value) searchResults state)}]
        [:div.SearchResults
          (doall (for [item @searchResults]
            [:p.SearchResults-item {:key (str (:name (:item item)) "-" (:type item))
                 :on-click #(handle-search-result-click state item)}
                (str (:name (:item item)) " - type: " (:type item))]))]])))
