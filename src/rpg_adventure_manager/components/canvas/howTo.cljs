(ns rpg-adventure-manager.components.canvas.howTow
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.components.new-header :as header]))

(defn render [active]
  [:div.About.itemPage {:class active}
    (header/render)
    [:div.About.content
      [:h2 "How To Use The Visual Builder"]
      [:p "The visual builder is meant as an easy way to plan out campaigns and adventures in a more visual style.
           It utilizies all the components you've created on the main page to help link together differnt events"]
      [:p "Start by clicking the '+' in the upper right. This will create a component card on the canvas.
           You can move the component card around, as well as pan and zoom on the canvas"]
      [:p "The card comes with a title and place to add details. You can add anything you like here, but
           if you add '@' you'll begin to see entities that match the next letters you type. Tapping one
           will create a link to it, allowing you to quickly open up its details page."]
      [:p "Once you've created multiple cards you can link them together by pressing the 'link' text on the card.
           After pressing this once, the next card you tap will create a link between the two. This will create a
          visual arrow between the two. Each card be linked multiple times."]]])
