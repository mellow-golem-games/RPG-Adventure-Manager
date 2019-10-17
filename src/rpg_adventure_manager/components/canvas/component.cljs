(ns rpg-adventure-manager.components.canvas.component
    (:require [reagent.core :as reagent :refer [atom]]
              [rpg-adventure-manager.state :refer [handle-state-change get-value-from-state]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]
              [rpg-adventure-manager.components.new-header :as header]
              [rpg-adventure-manager.scripts.curve :as curveHelpers]))

(def size {
  :h 285
  :w 186
})

(defn initilize-link [id]
  (let [currentLink (get-value-from-state "isLinked")]
    (if currentLink
      (if (= currentLink id)
        (js/alert "Cant link to same point")
        (do
          (handle-state-change "reset-isLinked" nil)
          (localforageApi/add-canvas-component-liking currentLink id)))
      (handle-state-change "set-isLinked" id))))


(defn update-title [newVal oldVals id]
  (swap! oldVals conj {:title newVal})
  (localforageApi/update-canvas-component-text id {:title newVal :description (:description @oldVals)}))

(defn update-description [newVal oldVals id]
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

(defn draw-curve [link component]
  (let [linkToComponent (get-linked-to-component link)]
    (if linkToComponent ; Handle deletes where linked to no longer exists
      (let [startingDirection (get-relative-position component linkToComponent)
            x-initial (curveHelpers/calculate-curve-x-initial size startingDirection) ; Should just be the width
            y-initial (curveHelpers/calculate-curve-y-initial size startingDirection)
            end-x (curveHelpers/calculate-curve-x-end size {:x (:xPos linkToComponent) :y (:yPos linkToComponent)} {:x (:xPos component) :y (:yPos component)} startingDirection) ; Should be x pos of end - the x offset of the original since 0,0 is relative to the first elem
            end-y (curveHelpers/calculate-curve-y-end size {:x (:xPos linkToComponent) :y (:yPos linkToComponent)} {:x (:xPos component) :y (:yPos component)} startingDirection)]
        [:svg {:height "1px" :width "1px" :overflow "visible" :key  (str (:id linkToComponent) "-" (rand-int 100))} ;1px prevents clicks and overflow dispalys whole thing
          [:path {:fill "transparent" :stroke "white" :stroke-width "2"
                  :d (str "M"x-initial","y-initial"
                       C"(+ x-initial (/ (- end-x x-initial) 3))","(- y-initial 50)"
                      "(+ x-initial x-initial (/ (- end-x x-initial) 3))","(+ 50 end-y)"
                       "end-x","end-y"")} ]])
    )
  ))

(defn Component [component]
    (let [componentValues (atom {:title (:title component) :description (:description component)})]
      (fn [component]
        [:div.Component.draggable {:key (:id component)
                          :data-id (:id component)
                          :style {:top (:yPos component) :left (:xPos component)
                                  :background "gray"
                                  :padding "5px"
                                  :width "275px"}}
           (doall (for [link (:linkedTo component)]
             (draw-curve link component)))
           [:p {:on-click #(initilize-link (:id component))}"Link Component"]
           [:input {:type "text"
                    :default-value (:title @componentValues)
                    :on-change #(update-title (-> % .-target .-value) componentValues (:id component))}]
           [:textarea {:default-value (:description @componentValues)
                       :on-change #(update-description (-> % .-target .-value) componentValues (:id component))}]])))