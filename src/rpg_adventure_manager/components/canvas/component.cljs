(ns rpg-adventure-manager.components.canvas.component
    (:require [reagent.core :as reagent :refer [atom]]
              [rpg-adventure-manager.state :refer [handle-state-change get-value-from-state]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]
              [rpg-adventure-manager.components.new-header :as header]
              [rpg-adventure-manager.scripts.curve :as curveHelpers]
              [clojure.string :as str]))

(defonce size {
  :h 130
  :w 180
})

(defonce search-list '(
  "cities"
  "npcs"
  "locations"
  "items"
  "hooks"
))

; This is bad practice as it puts this in the global scope, but we need something to hook back
; for dynamically generated <A> theres probably a better way to do this - TODO find a better way
; Note handle-link-click breaks 'cannot find handle' - needs to be one word
(set! js/handlelinkclick (fn [type name]

  (.preventDefault js/event)

  ; Finds the entity as we can't pass it and pushes it to state
  (let [currentEntity (first (filter (fn [entity] ; first as it expect an entity not a list
                        (= (:name entity) name)) (get-value-from-state type)))]
    (handle-state-change "update-canvas-last" true)
    (handle-state-change "update-current-view" "view-single")
    (handle-state-change "set-single-entity" currentEntity))))



(defn handle-search-change [searchVal searchResults]
  (swap! searchResults conj {:results []})  ; reset our atom
  (if (> (count searchVal) 1)
    (doseq [item search-list]
      (let [searchMap (js->clj (get-value-from-state item) :keywordize-keys true)]
        ; Holds the entire map of the entities for each item of the search list
          (doseq [singleEntity searchMap
                  :when searchMap] ; search throug the list of entities
            (if (or (str/includes? (:name singleEntity) searchVal) (str/includes? (:description singleEntity) searchVal))
              (swap! searchResults update-in [:results] merge {:type item :item singleEntity})))))))

(defn initilize-link [id]
  (let [currentLink (get-value-from-state "isLinked")]
    (if currentLink
      (if (= currentLink id)
        (js/alert "Cant link to same point")
        (do
          (handle-state-change "reset-isLinked" nil)
          (localforageApi/add-canvas-component-liking currentLink id)))
      (handle-state-change "set-isLinked" id))))

(defn delete-link [componentId linkId]
  (localforageApi/delete-canvas-component-liking componentId linkId))


(defn update-title [newVal oldVals id]
  (swap! oldVals conj {:title newVal})
  (localforageApi/update-canvas-component-text id {:title newVal :description (:description @oldVals)}))

(defn update-description [newVal oldVals id searchResults]

  ; save the current value so we don't have to query it later
  (swap! searchResults conj {:val newVal})

  ; Check if we have an @ if so put us in searchHelpers
  (if (= (nth newVal (- (.-length newVal) 1)) "@")
    (swap! searchResults conj {:index (- (.-length newVal) 1) :inSearch true}))


  ;Check if we are in search, if so do the stuff
  (if (:inSearch @searchResults)
    (do
    (handle-search-change (subs newVal (+ (:index @searchResults) 1) ) searchResults)))


  (swap! oldVals conj {:description oldVals})
  (localforageApi/update-canvas-component-text id {:title (:title @oldVals) :description newVal}))

(defn get-linked-to-component [id]
  (first (filter (fn [component] ; always return the first one
    (if (= (:id component) id)
      true
      false)) (get-value-from-state "canvasComponents"))))

(defn get-direction-for-top [y]
  (if (> y 0)
    "Top"
    "Bottom"))
(defn get-direction-for-side [x]
  (if (> x 0)
  "Left"
  "Right"))

(defn get-relative-position [point1 point2]
  (let [x (- (:xPos point1) (:xPos point2))
        y(- (:yPos point1) (:yPos point2))]
  (if (> (.abs js/Math x) (.abs js/Math y))
    (get-direction-for-side x)
    (get-direction-for-top y))))

(defn calculate-curve-midpoint []
  "calulates the midpoint of our curve to place our close trigger")

(defn calcuate-point-on-curve [t p1 p2 p3 p4]
  "t(x) = (1-t)^3p1 +  3(1-t)^2tp2 + 3(1-t)t^2p3 + t^3p4 - where: 0 <= t <= 1
    at t(0) = our initial points
    at t(1) = our end point"
    (+
      (* (- 1 t) (- 1 t) (- 1 t) p1)
      (* (- 1 t) (- 1 t) 3 t p2)
      (* (* t t)(- 1 t) 3 p3)
      (* t t t p4)))

(defn get-x-offset [direction]
  "gets offset of the line for the close point"
  (if (or (= direction "Top") (= direction "Bottom"))
    20
    0))

(defn get-y-offset [direction]
  "gets offset of the line for the close point"
  (if (or (= direction "Left") (= direction "Right"))
    20
    0))

(defn draw-curve [link component]
  (let [linkToComponent (get-linked-to-component link)]
    (if linkToComponent ; Handle deletes where linked to no longer exists
      (let [startingDirection (get-relative-position component linkToComponent)
            x-initial (curveHelpers/calculate-curve-x-initial size startingDirection) ; Should just be the width
            y-initial (curveHelpers/calculate-curve-y-initial size startingDirection)
            end-x (curveHelpers/calculate-curve-x-end size {:x (:xPos linkToComponent) :y (:yPos linkToComponent)} {:x (:xPos component) :y (:yPos component)} startingDirection) ; Should be x pos of end - the x offset of the original since 0,0 is relative to the first elem
            end-y (curveHelpers/calculate-curve-y-end size {:x (:xPos linkToComponent) :y (:yPos linkToComponent)} {:x (:xPos component) :y (:yPos component)} startingDirection)
            p2x (curveHelpers/caculate-first-control-point-x startingDirection (- end-x x-initial) x-initial)
            p2y (curveHelpers/caculate-first-control-point-y startingDirection (- end-y y-initial) y-initial)
            p3x (curveHelpers/caculate-second-control-point-x startingDirection (- end-x x-initial) x-initial)
            p3y (curveHelpers/caculate-second-control-point-y startingDirection (- end-y y-initial) y-initial)

            ; Close approximations of midpoint - dont think 0.5 is exactly the mid point but
            ; it's close enough for our needs
            close-x (calcuate-point-on-curve 0.5 x-initial p2x p3x end-x)
            close-y (calcuate-point-on-curve 0.5 y-initial p2y p3y end-y)
            x-offset (get-x-offset startingDirection) ; these get an offset for the "X" think its due to the sizing of the p tag and it not being a single point
            y-offset (get-y-offset startingDirection)]
        [:div.Component__linkingBox {:key (rand-int 10000)}
          [:p { :on-click #(delete-link (:id component) link)
                :style {:left (- close-x x-offset) :top (- close-y y-offset)}
                :key  (str (:id linkToComponent) "-" (rand-int 2000))} "X"] ; Used to delet the linking
        [:svg {:height "1px" :width "1px" :overflow "visible" :key  (str (:id linkToComponent) "-" (rand-int 2000))} ;1px prevents clicks and overflow dispalys whole thing
          [:defs
            [:marker {:id "head"
                      :orient "auto"
                      :markerWidth "4"
                      :markerHeight "6"
                      :fill "red"
                      :stroke "white"
                      :refX "2"
                      :refY "2"}
              [:path {:d "M0,0 V4 L2,2 Z" :fill "white"}]
              ]
            ]
          [:path#path {:fill "transparent" :stroke "white" :stroke-width "3"
                  :d (str "M"x-initial","y-initial"
                       C"p2x","p2y"
                      "p3x","p3y"
                       "end-x","end-y"")
                   :marker-end "url(#head)"} ]]]))))

(defn delete-component [id]
  "Deletes a componenet from the canvas"
  (localforageApi/delete-canvas-component id))

(defn handle-focus-after-click [elem]
  "focuses our editable element after linking at the end of the text"
  (let [range (.createRange js/document) selection (.getSelection js/window)]
    (.selectNodeContents range elem)
    (.collapse range false)
      (.removeAllRanges selection)
      (.addRange selection range)))

(defn handle-link [item searchResults id title]
  "Handles adding the link to the dom"
  (let [elem (.getElementById js/document (str "desc-" (:id @searchResults)))
        contentString (str (subs (:val @searchResults) 0 (:index @searchResults) )
              "<a onClick=\"handlelinkclick('"(:type item)"','" (:name (:item item))"')\" contentEditable='false' href='google.com'>"(:name (:item item))"</a>")]
    (set! (.-innerHTML elem) contentString)
    (handle-focus-after-click elem)
  (swap! searchResults conj {:results [] :inSearch false :index nil :val nil}) ; reset for the next search
  (localforageApi/update-canvas-component-text id {:title title :description contentString}))) ; Make sure changes are saved



(defn Component [component]
    (let [componentValues (atom {:title (:title component) :description (:description component)})
          searchResults (atom {:results [] :inSearch false :index nil :val nil :id (rand-int 1000)})]
      (fn [component]
        [:div.Component.draggable {:key (:id component)
                          :data-id (:id component)
                          :data-x (:xPos component)
                          :data-y (:yPos component)
                          :style {:top (:yPos component) :left (:xPos component)
                                  :background "#f4f3ef"
                                  :padding "5px"
                                  :height (:h size)
                                  :width (:w size)}}
           (doall (for [link (:linkedTo component)]
             (draw-curve link component)))
           [:div.Component_inner
             [:div.Component__header {:style {:height (* 0.2 (:h size))}}
               [:button.Component__linkText {:on-click #(initilize-link (:id component))}"Link"]
               [:p.Component__deleteText {:on-click #(delete-component (:id component))} "X"]]
             [:input {:type "text"
                      :style {:height (* 0.2 (:h size))}
                      :default-value (:title @componentValues)
                      :on-change #(update-title (-> % .-target .-value) componentValues (:id component))}]
             [:div.textarea  {:style {:height (* 0.4 (:h size))} :contentEditable "true" :suppressContentEditableWarning "true" :id (str "desc-" (:id @searchResults))
                              :on-input #(update-description (-> % .-target .-innerHTML) componentValues (:id component) searchResults)
                              :dangerouslySetInnerHTML {:__html (:description component)}}]
            (if (> (count (:results @searchResults)) 0)
              [:div.Component__searchResults
                (doall (for [result (:results @searchResults)]
                  [:p {:key (:name (:item result))
                       :on-click #(handle-link result searchResults (:id component) (:title @componentValues))}
                    (str (:type result) " - " (:name (:item result)))]))])]])))

