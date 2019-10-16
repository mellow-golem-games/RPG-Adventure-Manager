(ns rpg-adventure-manager.scripts.localforageApi
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              [cljs.core.async :as async :refer [put! chan <! >! close!]]
              [fancy_alert.core :as fancy-alert]))

(defn add-metadata [details]
  "Adds the extra metadata we want to track on each item"
  (conj details {:used false :created (js/Date.)}))

(defn add-metadata-list [details]
  "Adds the extra metadata we want to track on each list"
  (conj details {:used false :created (js/Date.) :items {:1 ""}}))

(defn get-initial-data-by-type [type]
  "Quries an entity from out localstorage and adds it to local store"
  (.then (.getItem (.-localforage js/window) type) (fn [value]
                                                    (handle-state-change "update-entity" {:type type :value value}))))

(defn generate-canvasComponent-id [component]
  "TODO change this to a UUID"
  (conj component {:id (rand-int 1000)}))

(def canvasComponent {
  :id nil
  :title "Title"
  :description "Description"
  :xPos 0
  :yPos 0
  :linkedTo []
})

(defn pull-initial-data []
  "this function gets all the current saved data and pushes it to the store"
  (go (get-initial-data-by-type "cities"))
  (go (get-initial-data-by-type "npcs"))
  (go (get-initial-data-by-type "locations"))
  (go (get-initial-data-by-type "items"))
  (go (get-initial-data-by-type "hooks"))
  (go (get-initial-data-by-type "lists"))
  (go (get-initial-data-by-type "notes"))
  (go (get-initial-data-by-type "canvasComponents")))

; TODO we need to go back and extract the alert settings to a single var since we re-use it so much
; NEXT couple of functions are probably a good case for multimethods
(defn add-item [type details]
  "adds an item to localstorage by pulling current list, conj them together and overwrite"
  (if (clojure.string/blank? (:name details)) ; Name is the only field we require
   (fancy-alert/fancy-alert
     {:text "Name Cannot Be Blank" :hideAfterN false
      :styles {:background "white;" :border "1px solid #9776ec;" :z-index "999;" :color "black;"}
      :buttonProperties {:buttonText "Okay"}})
   (.then (.getItem (.-localforage js/window) type) (fn [value]
                                                     (let [currentStorage (js->clj value :keywordize-keys true)]
                                                       (loop [i 0] ; Little cleaner than doall/for so we only iterate as needed this probably won't get too big anyways
                                                         (if (= (count currentStorage) i) ; This is after we loop through them all to check that the name doesnt exits
                                                           (.then (.setItem (.-localforage js/window) type (clj->js (conj currentStorage (add-metadata details))) (fn [value]
                                                                                                                                                                   (handle-state-change "update-entity" {:type type :value (conj currentStorage (add-metadata details))})
                                                                                                                                                                   (fancy-alert/fancy-alert
                                                                                                                                                                     {:text "Item Saved!" :hideAfterN false
                                                                                                                                                                      :styles {:background "white;" :border "1px solid #9776ec;" :z-index "999;" :color "black;"}
                                                                                                                                                                      :buttonProperties {:buttonText "Okay"}})
                                                                                                                                                                   (handle-state-change "update-current-view" ""))))
                                                           (if (= (:name (nth currentStorage i)) (:name details))
                                                             ; (js/alert "That Name Is Already Taken!")
                                                             (fancy-alert/fancy-alert
                                                               {:text "That Name Is Already Taken!" :hideAfterN false
                                                                :styles {:background "white;" :border "1px solid #9776ec;" :z-index "999;" :color "black;"}
                                                                :buttonProperties {:buttonText "Okay"}})
                                                             (recur (inc i)))))))))) ; TODO we need a better alert box

(defn update-item [type item]
  "updats an item - does so by completly overriding it so it must pass the same item with update details and all fields"
   (.then (.getItem (.-localforage js/window) type) (fn [value]
                                                     (let [currentStorage (js->clj value :keywordize-keys true)]
                                                      (loop [i 0] ; Little cleaner than doall/for so we only iterate as needed this probably won't get too big anyways
                                                        (if (= (:created (nth currentStorage i)) (:created item))
                                                            (.then (.setItem (.-localforage js/window) type (clj->js (conj (assoc currentStorage i item))) (fn [value]
                                                                                                                                                            (handle-state-change "update-entity" {:type type :value (conj currentStorage)})
                                                                                                                                                            (get-initial-data-by-type type) ; we need to reset our main store here with the updated version or
                                                              ; going back to the homepage wll not reflect our recent changes
                                                                                                                                                            (handle-state-change "set-single-entity" item)
                                                                                                                                                            (handle-state-change "set-active-entity" (conj (assoc currentStorage i item)))
                                                                                                                                                            (fancy-alert/fancy-alert
                                                                                                                                                              {:text "Item Updated!" :hideAfterN false
                                                                                                                                                               :styles {:background "white;" :border "1px solid #9776ec;" :z-index "999;" :color "black;"}
                                                                                                                                                               :buttonProperties {:buttonText "Okay"}}))))
                                                            (recur (inc i))))))))


(defn delete-item [entity type]
  "deletes an item by creating a new list of type without the removed element and overrides storage"
  (.then (.getItem (.-localforage js/window) type) (fn [value]
                                                    (let [currentStorage (js->clj value :keywordize-keys true)
                                                          filteredValues (filter (fn [item]
                                                                                  (not= (:name item) (:name entity))) currentStorage)]
                                                      (.then (.setItem (.-localforage js/window) type (clj->js filteredValues) (fn [value]
                                                                                                                                (handle-state-change "update-entity" {:type type :value filteredValues})
                                                                                                                                (fancy-alert/fancy-alert
                                                                                                                                  {:text "Item Deleted!" :hideAfterN false
                                                                                                                                   :styles {:background "white;" :border "1px solid #9776ec;" :z-index "999;" :color "black;"}
                                                                                                                                   :buttonProperties {:buttonText "Okay"}}))))))))

; ALL list functions have a bit of code repeating to update the store - probably ````let```` that to resuse
(defn add-list [details]
  "Adds a list to localstorage"
  (if (clojure.string/blank? (:name details)) ; Name is the only field we require
   (fancy-alert/fancy-alert
     {:text "Name Cannot Be Blank!" :hideAfterN false
      :styles {:background "white;" :border "1px solid #9776ec;" :z-index "999;" :color "black;"}
      :buttonProperties {:buttonText "Okay"}})
   (.then (.getItem (.-localforage js/window) "lists") (fn [value]
                                                        (let [currentStorage (js->clj value :keywordize-keys true)]
                                                          (loop [i 0]
                                                            (if (= (count currentStorage) i)
                                                              (.then (.setItem (.-localforage js/window) "lists" (clj->js (conj currentStorage (add-metadata-list details))) (fn [value]
                                                                                                                                                                              (handle-state-change "update-list" (conj currentStorage (add-metadata-list details)))
                                                                                                                                                                              (fancy-alert/fancy-alert
                                                                                                                                                                                {:text "List Saved!" :hideAfterN false
                                                                                                                                                                                 :styles {:background "white;" :border "1px solid #9776ec;" :z-index "999;" :color "black;"}
                                                                                                                                                                                 :buttonProperties {:buttonText "Okay"}})
                                                                                                                                                                              (handle-state-change "update-current-view" ""))))
                                                             (if (= (:name (nth currentStorage i)) (:name details))
                                                              (fancy-alert/fancy-alert
                                                                {:text "That Name Is Already Taken!" :hideAfterN false
                                                                 :styles {:background "white;" :border "1px solid #9776ec;" :z-index "999;" :color "black;"}
                                                                 :buttonProperties {:buttonText "Okay"}})
                                                              (recur (inc i))))))))))

(defn save-list [name list]
  "saves a list to localstorage"
  (.then (.getItem (.-localforage js/window) "lists") (fn [value]
                                                       (let [currentStorage (js->clj value :keywordize-keys true)]
                                                         (loop [i 0]
                                                           (if (= (:name (nth currentStorage i)) name)
                                                             (.then (.setItem (.-localforage js/window) "lists" (clj->js (assoc currentStorage i (conj (nth currentStorage i) {:items list}))) (fn [value]
                                                                                                                                                                                                (handle-state-change "update-list" (assoc currentStorage i (conj (nth currentStorage i) {:items list})))
                                                                                                                                                                                                (fancy-alert/fancy-alert
                                                                                                                                                                                                  {:text "List Updated!" :hideAfterN false
                                                                                                                                                                                                   :styles {:background "white;" :border "1px solid #9776ec;" :z-index "999;" :color "black;"}
                                                                                                                                                                                                   :buttonProperties {:buttonText "Okay"}}))))
                                                             (recur (inc i))))))))

(defn delete-list [name]
  "Deletes a list from localstorage"
  (.then (.getItem (.-localforage js/window) "lists") (fn [value]
                                                       (let [currentStorage (js->clj value :keywordize-keys true)]
                                                         (loop [i 0]
                                                           (if (= (:name (nth currentStorage i)) name)
                                                             (.then (.setItem (.-localforage js/window) "lists" (clj->js (concat (subvec currentStorage 0 i)
                                                                                                                          (subvec currentStorage (inc i)))) (fn [value]
                                                                                                                                                             (handle-state-change "update-list" (concat (subvec currentStorage 0 i)
                                                                                                                                                                                                  (subvec currentStorage (inc i))))
                                                                                                                                                             (fancy-alert/fancy-alert
                                                                                                                                                               {:text "List Deleted!" :hideAfterN false
                                                                                                                                                                :styles {:background "white;" :border "1px solid #9776ec;" :z-index "999;" :color "black;"}
                                                                                                                                                                :buttonProperties {:buttonText "Okay"}}))))
                                                             (recur (inc i))))))))

(defn add-canvas-component []
  "From our canvas builder - adds an item"
  (.then (.getItem (.-localforage js/window) "canvasComponents")
    (fn [value]
      (let [currentStorage (js->clj value :keywordize-keys true)]
        (.then (.setItem (.-localforage js/window) "canvasComponents"
          (clj->js (conj currentStorage (generate-canvasComponent-id canvasComponent))))
            (fn [value]
              (handle-state-change "add-canvas-component" (js->clj value :keywordize-keys true))))))))

(defn update-canvas-component-position [id x y]
  (.then (.getItem (.-localforage js/window) "canvasComponents")
    (fn [value]
      (let [currentStorage (js->clj value :keywordize-keys true)]
        (.then (.setItem (.-localforage js/window) "canvasComponents"
          (clj->js
            (map
              (fn [item]
                (if (= (:id item) id)
                  (conj item {:xPos x :yPos y})
                  item))
              currentStorage))))))))

(defn update-canvas-component-text [id vals]
  "updates the specified id with with the new map of text valus"
  (.then (.getItem (.-localforage js/window) "canvasComponents")
    (fn [value]
      (let [currentStorage (js->clj value :keywordize-keys true)]
        (.then (.setItem (.-localforage js/window) "canvasComponents"
          (clj->js
            (map
              (fn [item]
                (if (= (:id item) id)
                  (conj item {:title (:title vals) :description (:description vals)})
                  item))
              currentStorage))))))))

(defn check-if-key-exists-on-notes [newNote currentStorage]
  (loop [i 0]
    (if (= (count currentStorage) i)
      true
      (if (= (:key newNote) (:key (nth currentStorage i)))
        false
        (recur (inc i))))))

(defn add-note [note]
  (.then (.getItem (.-localforage js/window) "notes")
    (fn [value]
      (let [currentStorage (js->clj value :keywordize-keys true)
            newNote (conj note {:key (rand-int 90000000)})]
        (if (check-if-key-exists-on-notes newNote currentStorage)
          (.then (.setItem (.-localforage js/window) "notes" (clj->js (conj currentStorage newNote)))
            (fn [value]
              (fancy-alert/fancy-alert
                {:text "Note Added!" :hideAfterN false
                 :styles {:background "white;" :border "1px solid #9776ec;" :z-index "999;" :color "black;"}
                 :buttonProperties {:buttonText "Okay"}})
                 (handle-state-change "update-note" (conj currentStorage newNote))))
                 (add-note newNote)))))) ; if we have a dup (never really should) jst call it call again

(defn delete-note [key]
  (.then (.getItem (.-localforage js/window) "notes")
    (fn [value]
      (let [currentStorage (js->clj value :keywordize-keys true)]
        (loop [i 0]
          (if (= (:key (nth currentStorage i)) key)
            (.then (.setItem (.-localforage js/window) "notes" (clj->js (concat (subvec currentStorage 0 i)
                                                                         (subvec currentStorage (inc i)))) (fn [value]
                                                                                                              (fancy-alert/fancy-alert
                                                                                                                {:text "Note Deleted!" :hideAfterN false
                                                                                                                 :styles {:background "white;" :border "1px solid #9776ec;" :z-index "999;" :color "black;"}
                                                                                                                 :buttonProperties {:buttonText "Okay"}})
                                                                                                                  (get-initial-data-by-type "notes"))))
          (recur (inc i))))))))
