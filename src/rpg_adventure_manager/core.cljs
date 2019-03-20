(ns rpg-adventure-manager.core
    (:require [reagent.core :as reagent :refer [atom]]
              [rpg-adventure-manager.newcity :as newcity]
              [rpg-adventure-manager.state :refer [state handle-state-change]]))

(enable-console-print!)

(println "This text is printed from src/rpg-adventure-manager/core.cljs. Go ahead and edit it and see reloading in action.")

(print @state)

(defn Main []
  [:div.Main-Wrapper
   [:h2 {:on-click #(handle-state-change "update-current-view" "new-city")} "Add New City"]
   [:h1 {:on-click #(handle-state-change "update-state-text" "Hello New World")} (:text @state)]
   [:h3 "Edit this and watch it change!"]
   (newcity/render state)])

(reagent/render-component [Main]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
