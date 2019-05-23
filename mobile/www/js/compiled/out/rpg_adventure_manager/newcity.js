// Compiled by ClojureScript 1.10.238 {}
goog.provide('rpg_adventure_manager.newcity');
goog.require('cljs.core');
goog.require('rpg_adventure_manager.state');
goog.require('rpg_adventure_manager.scripts.localforageApi');
goog.require('rpg_adventure_manager.components.new_header');
goog.require('module$Applications$server$RPG_Adventure_Manager$node_modules$localforage$dist$localforage');
rpg_adventure_manager.newcity.render = (function rpg_adventure_manager$newcity$render(state){
var details = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"description","description",-1428560544),"",new cljs.core.Keyword(null,"population","population",-1209901867),"",new cljs.core.Keyword(null,"usage","usage",-1583752910),""], null));
return ((function (details){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.New-City.itemPage.new","div.New-City.itemPage.new",-462595308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"new-city","new-city",-867897724).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"activeView","activeView",-879635345).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))], null),rpg_adventure_manager.components.new_header.render.call(null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.new.content","div.new.content",1078457008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Add a New City"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"City Name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (details){
return (function (p1__33446_SHARP_){
return cljs.core.swap_BANG_.call(null,details,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),p1__33446_SHARP_.target.value], null));
});})(details))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Description",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (details){
return (function (p1__33447_SHARP_){
return cljs.core.swap_BANG_.call(null,details,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),p1__33447_SHARP_.target.value], null));
});})(details))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Population",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (details){
return (function (p1__33448_SHARP_){
return cljs.core.swap_BANG_.call(null,details,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"population","population",-1209901867),p1__33448_SHARP_.target.value], null));
});})(details))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Location",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (details){
return (function (p1__33449_SHARP_){
return cljs.core.swap_BANG_.call(null,details,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",1815599388),p1__33449_SHARP_.target.value], null));
});})(details))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Usage Details",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (details){
return (function (p1__33450_SHARP_){
return cljs.core.swap_BANG_.call(null,details,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"usage","usage",-1583752910),p1__33450_SHARP_.target.value], null));
});})(details))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (details){
return (function (){
return rpg_adventure_manager.scripts.localforageApi.add_item.call(null,"cities",cljs.core.deref.call(null,details));
});})(details))
], null),"Add City"], null)], null)], null);
});
;})(details))
});

//# sourceMappingURL=newcity.js.map?rel=1558649729797
