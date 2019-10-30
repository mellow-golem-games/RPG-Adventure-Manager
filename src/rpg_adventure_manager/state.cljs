(ns rpg-adventure-manager.state
  (:require [reagent.core :as reagent :refer [atom]]))

; Holds a reference to all the current Items in the Database
; :activeView also contains things like view-all-cities & view-individual-city
(defonce state (atom {:activeView {  ; This gets erased as state changes but I left it here as a reminder for expected values
                                   :new-city false
                                   :new-npc false
                                   :new-item false
                                   :new-location false
                                   :new-hook false
                                   :active-list false
                                   :canvas-howTo false}
                       :showAlert {:visible false :content ""}
                       :activeType ""
                       :activeEntity {}
                       :singleEntity {}
                       :scrollOffset {}
                       :activeList {}
                       :canvasComponents []
                       :canvasLast? false}
                       :isLinked nil))

(defn get-value-from-state [value]
  (js->clj ((keyword value) @state) :keywordize-keys true))

(defn update-scroll-position [val scroll]
  (if scroll
    (do
      (.scrollTo js/window 0 (:scrollOffset @state))))
  (swap! state conj {:scrollOffset val}))


(defn handle-scroll-func [payload]
  (if (= payload "")
    (do
      (.remove (.-classList (.-body js/document)) "hide-scroll")
      (update-scroll-position 0 true)) ; this should be instant
    (do
      (update-scroll-position (.-pageYOffset js/window) false)
      (js/setTimeout #(.add (.-classList (.-body js/document)) "hide-scroll") 100)))) ; here we need to set a short timeout like 50ms)


(defn update-current-view [payload]
  "Handles changing the view to the next selected page"
  (swap! state conj {:activeView {(keyword payload) "visible"}})
  (handle-scroll-func payload))

(defn update-entity [payload]
  "Payload : {:type type :value {object}} - Used to arbitarily update an entity of any type"
  (swap! state conj {(keyword (:type payload)) (:value payload)}))

(defn update-list [payload]
  "completely blows away the current lists"
  (swap! state conj {:lists payload}))

(defn update-note [payload]
  (swap! state conj {:notes payload}))

(defn update-alert [payload]
  "updates alert status to provided value"
  (swap! state conj {:showAlert payload}))

(defn set-active-type [payload]
  "updates the active type"
  (swap! state conj {:activeType payload}))

(defn set-active-entity [payload]
  "Sets the entity to be active to display on view all page - takes all entities to show there []"
  (swap! state conj {:activeEntity payload}))

(defn set-single-entity [payload]
  "sets the entity to view on the single page - single entity {}"
  (swap! state conj {:singleEntity payload}))

(defn set-active-list [payload]
  "Sets the provided list to active"
  (swap! state conj {:activeList payload}))

(defn add-canvas-component [payload]
  (swap! state conj {:canvasComponents payload}))

(defn set-isLinked [payload]
  (swap! state conj {:isLinked payload}))

(defn reset-isLinked []
  (swap! state conj {:isLinked nil}))

(defn update-canvas-last [payload]
  "maintains that the last page was canvas to allow selectively going back to it"
  (swap! state conj {:canvasLast? payload}))

(defn update-canvas-component-pos [payload]
  (let [newComponentsValue (map (fn [component]
    (if (= (:id payload) (:id component))
      (conj component {:yPos (:y payload) :xPos (:x payload)})
      component)) (js->clj (:canvasComponents @state) :keywordize-keys true))]
  (swap! state conj {:canvasComponents newComponentsValue})))

(defn handle-state-change [action payload]
  "Accept an action function to dispatch and passes it the current payload"
  (let [fn-var ((ns-publics 'rpg-adventure-manager.state) (symbol action))]
       (fn-var payload)))
