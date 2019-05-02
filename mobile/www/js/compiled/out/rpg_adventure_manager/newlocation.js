// Compiled by ClojureScript 1.10.238 {}
goog.provide('rpg_adventure_manager.newlocation');
goog.require('cljs.core');
goog.require('rpg_adventure_manager.state');
goog.require('rpg_adventure_manager.scripts.localforageApi');
goog.require('rpg_adventure_manager.components.new_header');
rpg_adventure_manager.newlocation.add_location = (function rpg_adventure_manager$newlocation$add_location(details){
return cljs.core.print.call(null,cljs.core.deref.call(null,details));
});
rpg_adventure_manager.newlocation.render = (function rpg_adventure_manager$newlocation$render(state){
var details = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"description","description",-1428560544),"",new cljs.core.Keyword(null,"owner","owner",-392611939),"",new cljs.core.Keyword(null,"inventory","inventory",860201871),"",new cljs.core.Keyword(null,"usage","usage",-1583752910),""], null));
return ((function (details){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.New-Location.itemPage.new","div.New-Location.itemPage.new",-80308965),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"new-location","new-location",1729589145).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"activeView","activeView",-879635345).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))], null),rpg_adventure_manager.components.new_header.render.call(null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.new.content","div.new.content",1078457008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Add a New Location"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Location Name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (details){
return (function (p1__37355_SHARP_){
return cljs.core.swap_BANG_.call(null,details,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),p1__37355_SHARP_.target.value], null));
});})(details))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Location Description",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (details){
return (function (p1__37356_SHARP_){
return cljs.core.swap_BANG_.call(null,details,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),p1__37356_SHARP_.target.value], null));
});})(details))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Owner or Residents",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (details){
return (function (p1__37357_SHARP_){
return cljs.core.swap_BANG_.call(null,details,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"owner","owner",-392611939),p1__37357_SHARP_.target.value], null));
});})(details))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Inventory/Loot",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (details){
return (function (p1__37358_SHARP_){
return cljs.core.swap_BANG_.call(null,details,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inventory","inventory",860201871),p1__37358_SHARP_.target.value], null));
});})(details))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Usage Details",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (details){
return (function (p1__37359_SHARP_){
return cljs.core.swap_BANG_.call(null,details,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"usage","usage",-1583752910),p1__37359_SHARP_.target.value], null));
});})(details))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (details){
return (function (){
return rpg_adventure_manager.scripts.localforageApi.add_item.call(null,"locations",cljs.core.deref.call(null,details));
});})(details))
], null),"Add Location"], null)], null)], null);
});
;})(details))
});

//# sourceMappingURL=newlocation.js.map?rel=1556800584323
