(ns rpg-adventure-manager.components.about
    (:require [rpg-adventure-manager.state :refer [handle-state-change]]
              [rpg-adventure-manager.components.new-header :as header]))

(defn render [active]
  [:div.About.itemPage {:class active}
    (header/render)
    [:div.About.content
      [:h2 "RPG Adventuer Manager"]
      [:p "RPG Adventure Manage is a simple solution for managing campaigns in Table Top Campaigns.
          Its goal is to provide a simple interface to record and track the various entities present in your game.
          We're always looking to improve; for any suggestions please send us an email!"]
      [:p "RPG Adventure Manager is built and maintained by Mellow Golem Games & Total Web Connections."]
      [:p "WEBSITE: www.mellowgolemgames.com"]
      [:p "WEBSITE: www.totalwebconnections.com.com"]
      [:br]
      [:p str "EMAIL: "][:a {:href "Info@mellowgolemgames.com"} "Info@mellowgolemgames.com"]
      [:br]
      [:p str "EMAIL: "][:a {:href "Info@totalwebconnections.com"} "Info@totalwebconnections.com"]]])
