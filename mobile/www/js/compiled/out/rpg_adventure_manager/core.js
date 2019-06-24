// Compiled by ClojureScript 1.10.238 {}
goog.provide('rpg_adventure_manager.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('rpg_adventure_manager.components.header');
goog.require('rpg_adventure_manager.newcity');
goog.require('rpg_adventure_manager.newnpc');
goog.require('rpg_adventure_manager.newitem');
goog.require('rpg_adventure_manager.newlocation');
goog.require('rpg_adventure_manager.newhook');
goog.require('rpg_adventure_manager.components.all.view');
goog.require('rpg_adventure_manager.components.individual.individual');
goog.require('rpg_adventure_manager.components.lists.list');
goog.require('rpg_adventure_manager.components.shared.alert');
goog.require('rpg_adventure_manager.state');
goog.require('rpg_adventure_manager.scripts.localforageApi');
cljs.core.enable_console_print_BANG_.call(null);
rpg_adventure_manager.scripts.localforageApi.pull_initial_data.call(null);
rpg_adventure_manager.core.show_view_all = (function rpg_adventure_manager$core$show_view_all(entitiesToView,type){
rpg_adventure_manager.state.handle_state_change.call(null,"update-current-view","view-all-entities");

rpg_adventure_manager.state.handle_state_change.call(null,"set-active-entity",entitiesToView);

return rpg_adventure_manager.state.handle_state_change.call(null,"set-active-type",type);
});
rpg_adventure_manager.core.Main = (function rpg_adventure_manager$core$Main(){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Main-Wrapper","div.Main-Wrapper",1010191311),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg_adventure_manager.components.header.render], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Home-content","div.Home-content",1562353845),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.itemContainer","div.itemContainer",-476145363),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.itemContainer__left","div.itemContainer__left",96207002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Cities"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.itemContainer__right","div.itemContainer__right",2043639888),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return rpg_adventure_manager.state.handle_state_change.call(null,"update-current-view","new-city");
})], null),"Add New"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return rpg_adventure_manager.core.show_view_all.call(null,new cljs.core.Keyword(null,"cities","cities",-1295356824).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rpg_adventure_manager.state.state)),"cities");
})], null),"View All"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.itemContainer","div.itemContainer",-476145363),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.itemContainer__left","div.itemContainer__left",96207002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"NPCs"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.itemContainer__right","div.itemContainer__right",2043639888),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return rpg_adventure_manager.state.handle_state_change.call(null,"update-current-view","new-npc");
})], null),"Add New"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return rpg_adventure_manager.core.show_view_all.call(null,new cljs.core.Keyword(null,"npcs","npcs",36258920).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rpg_adventure_manager.state.state)),"npcs");
})], null),"View All"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.itemContainer","div.itemContainer",-476145363),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.itemContainer__left","div.itemContainer__left",96207002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Items"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.itemContainer__right","div.itemContainer__right",2043639888),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return rpg_adventure_manager.state.handle_state_change.call(null,"update-current-view","new-item");
})], null),"Add New"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return rpg_adventure_manager.core.show_view_all.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rpg_adventure_manager.state.state)),"items");
})], null),"View All"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.itemContainer","div.itemContainer",-476145363),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.itemContainer__left","div.itemContainer__left",96207002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Locations"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.itemContainer__right","div.itemContainer__right",2043639888),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return rpg_adventure_manager.state.handle_state_change.call(null,"update-current-view","new-location");
})], null),"Add New"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return rpg_adventure_manager.core.show_view_all.call(null,new cljs.core.Keyword(null,"locations","locations",-435476560).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rpg_adventure_manager.state.state)),"locations");
})], null),"View All"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.itemContainer","div.itemContainer",-476145363),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.itemContainer__left","div.itemContainer__left",96207002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Plot Hooks"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.itemContainer__right","div.itemContainer__right",2043639888),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return rpg_adventure_manager.state.handle_state_change.call(null,"update-current-view","new-hook");
})], null),"Add New"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return rpg_adventure_manager.core.show_view_all.call(null,new cljs.core.Keyword(null,"hooks","hooks",-413590103).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rpg_adventure_manager.state.state)),"hooks");
})], null),"View All"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg_adventure_manager.components.lists.list.render,rpg_adventure_manager.state.state], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"showAlert","showAlert",1274950397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rpg_adventure_manager.state.state))),true))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg_adventure_manager.components.shared.alert.render,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"showAlert","showAlert",1274950397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rpg_adventure_manager.state.state)))], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg_adventure_manager.newcity.render,rpg_adventure_manager.state.state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg_adventure_manager.newnpc.render,rpg_adventure_manager.state.state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg_adventure_manager.newitem.render,rpg_adventure_manager.state.state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg_adventure_manager.newlocation.render,rpg_adventure_manager.state.state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg_adventure_manager.newhook.render,rpg_adventure_manager.state.state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg_adventure_manager.components.all.view.render,rpg_adventure_manager.state.state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg_adventure_manager.components.individual.individual.render,rpg_adventure_manager.state.state], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg_adventure_manager.core.Main], null),document.getElementById("app"));
rpg_adventure_manager.core.on_js_reload = (function rpg_adventure_manager$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1561380005231
