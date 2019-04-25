// Compiled by ClojureScript 1.10.238 {}
goog.provide('rpg_adventure_manager.components.all.cities');
goog.require('cljs.core');
goog.require('rpg_adventure_manager.state');
goog.require('rpg_adventure_manager.scripts.localforageApi');
rpg_adventure_manager.components.all.cities.render = (function rpg_adventure_manager$components$all$cities$render(state){
var cities = cljs.core.deref.call(null,state);
return ((function (cities){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.View-Cities.viewPage","div.View-Cities.viewPage",-61380150),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"view-all-cities","view-all-cities",-1183801973).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"activeView","activeView",-879635345).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.New-Hook__header.viewPage__header","div.New-Hook__header.viewPage__header",1897264488),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cities){
return (function (){
return rpg_adventure_manager.state.handle_state_change.call(null,"update-current-view","");
});})(cities))
], null),"x"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"View All Cities"], null)], null);
});
;})(cities))
});

//# sourceMappingURL=cities.js.map?rel=1554209463606
