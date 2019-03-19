(ns rpg-adventure-manager.core
    (:require [reagent.core :as reagent :refer [atom]]
              [rpg-adventure-manager.state :refer [state handle-state-change]]))

(enable-console-print!)

(println "This text is printed from src/rpg-adventure-manager/core.cljs. Go ahead and edit it and see reloading in action.")

(print @state)

(defn hello-world []
  [:div
   [:h1 {:on-click #(handle-state-change "update-state-text" "Hello New World")} (:text @state)]
   [:h3 "Edit this and watch it change!"]])

(reagent/render-component [hello-world]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
