(ns rpg-adventure-manager.components.canvas.canvas
    (:require [reagent.core :as reagent :refer [atom]]
              [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.scripts.localforageApi :as localforageApi]
              [rpg-adventure-manager.components.new-header :as header]
              [rpg-adventure-manager.components.canvas.controls :as controls]
              ["panzoom" :as panzoom]
              ["displacejs" :as displace]
              ["interactjs" :as interact]))

; We need to setup all our handlers after the componeent has rendered
; TODO test with state - think a rerender will break everything - maybe set a global `handlersSet` ?
; TODO this does break on a reload - probably need a flag to only do this once or some sort of cleanup?
(defn render-canvas []
  (def zoomElem (.querySelector js/document "#Canvas"))
  (if zoomElem
    (do
  (def panHandler (panzoom zoomElem (clj->js {:maxZoom 4 :minZoom 0.1
                                              :minScale 1
                                              :boundsPadding 1 ; it multiplies by this is in the code for panzoom
                                              :bounds true})))

  (defn handle-lower-bounds [event]
    "drag position cannot be lower than 0"
    (let [left (js/parseInt (.-left (.-style event)))
          top (js/parseInt (.-top (.-style event)))]
    (if (< left 0)
        (set! (.-left (.-style event)) 0))
    (if (< top 0)
      (set! (.-top (.-style event)) 0))))

  (defn handle-upper-bounds [event]
    ; TODO set and test upper drag limit
  )

  (defn handleBounds [event]
    "handles calling check for upper and lower bounds"
    (handle-lower-bounds event)
    (handle-upper-bounds event))

  (defn onMoveEventEnd [event]
    ; Extra check - may refactor this - possible to 'throw' it out of bounds
    (handle-lower-bounds event)
    (handle-upper-bounds event)
    (.resume panHandler))

  (defn onMoveEventStart []
    (.pause panHandler)))))

(defn Canvas [state]
  (reagent/create-class                 ;; <-- expects a map of functions
    {:display-name  "canvas"      ;; for more helpful warnings & errors

      :component-did-mount               ;; the name of a lifecycle function
        (fn [this]
          (render-canvas)
          (println "component-did-mount")) ;; your implementation

       :component-did-update              ;; the name of a lifecycle function
        (fn [this old-argv]                ;; reagent provides you the entire "argv", not just the "props"
          (let [elems (array-seq (.getElementsByClassName js/document "draggable"))]
            (doseq [elem elems]
              (displace elem
                (clj->js
                  {:onMouseDown onMoveEventStart
                   :onTouchStart onMoveEventStart
                   :onTouchMove handleBounds
                   :onMouseMove handleBounds
                   :onMouseUp onMoveEventEnd
                   :onTouchStop onMoveEventEnd})))))

        ;; other lifecycle funcs can go in here
        :reagent-render        ;; Note:  is not :render
         (fn [state]           ;; remember to repeat parameters
          (let [canvasComponents (js->clj (:canvasComponents @state) :keywordize-keys true)]
            [:div.Canvas.viewPage {:class (:canvas (:activeView @state))}
              (header/render)
              [:div.CanvasParent
                (controls/render)
                [:div#Canvas
                  (for [component canvasComponents]
                    [:div.draggable {:key (:id component)}
                      [:p (:title component)]
                      [:p (:description component)]
                      [:p (:id component)]])
                  ]]]))}))

; TODO we can probably just work with the abpve canvas - remove this and import the component
(defn render [state]
   [Canvas state])
