// Compiled by ClojureScript 1.10.238 {}
goog.provide('rpg_adventure_manager.components.shared.alert');
goog.require('cljs.core');
goog.require('rpg_adventure_manager.state');
rpg_adventure_manager.components.shared.alert.hide_alert = (function rpg_adventure_manager$components$shared$alert$hide_alert(){
return setTimeout((function (){
return rpg_adventure_manager.state.handle_state_change.call(null,"update-alert",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible","visible",-1024216805),false,new cljs.core.Keyword(null,"content","content",15833224),""], null));
}),(2000));
});
rpg_adventure_manager.components.shared.alert.render = (function rpg_adventure_manager$components$shared$alert$render(text){
return (function (){
rpg_adventure_manager.components.shared.alert.hide_alert.call(null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Alert.active","div.Alert.active",720490315),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),text], null)], null);
});
});

//# sourceMappingURL=alert.js.map?rel=1558046468984
