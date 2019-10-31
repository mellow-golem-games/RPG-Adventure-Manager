(ns rpg-adventure-manager.components.canvas.howTow
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]))

(defn render [active]
  [:div.howTo.itemPage {:class active}
    [:div.New-City__header.header.itemPage__header
      [:div.headerInner
      [:p {:on-click #(handle-state-change "update-current-view" "canvas")} "x"]]]
    [:div.About.content {:style {:overflow "scroll"}}
      [:h2 "How To Use The Visual Builder"]
      [:p "The visual builder is meant as an easy way to plan out campaigns and adventures in a more visual style.
           It utilizies all the components you've created on the main page to help link together differnt events"]
      [:p "Start by clicking the '+' in the upper right. This will create a component card on the canvas.
           You can move the component card around, as well as pan and zoom on the canvas."]
      [:p "The card comes with a title and place to add details. You can add anything you like here to help you plan your
          campaign. You can also reference your components by typing '@' and then a few letters. This will bring
          up any components that match your characters, and allow you to add a link to it directly in the card.
          This makes it easy to setup story flows, and then quickly reference back to components as you need to."]
      [:p "Once you've created multiple cards you can link them together by pressing the 'link' text on the card.
           After pressing this once, the next card you tap will create a link between the two. This will create a
          visual arrow between the two. Each card be linked multiple times. You can easily remove a link by
          pressing the 'X' that appears along the link."]]])
