// Compiled by ClojureScript 1.10.238 {}
goog.provide('rpg_adventure_manager.components.notes.new$');
goog.require('cljs.core');
goog.require('rpg_adventure_manager.state');
goog.require('rpg_adventure_manager.scripts.localforageApi');
goog.require('rpg_adventure_manager.components.new_header');
rpg_adventure_manager.components.notes.new$.render = (function rpg_adventure_manager$components$notes$new$render(state){
var details = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"details","details",1956795411),""], null));
return ((function (details){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.New-Note.itemPage.new","div.New-Note.itemPage.new",593560882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"new-note","new-note",-1423104809).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"activeView","activeView",-879635345).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))], null),rpg_adventure_manager.components.new_header.render.call(null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.new.content","div.new.content",1078457008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Add a New Note"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Notes allow you to create one off notes and reminders. Use them to keep track of infomration that doesn't fit\n            anywhere else"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"List Name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (details){
return (function (p1__28911_SHARP_){
return cljs.core.swap_BANG_.call(null,details,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),p1__28911_SHARP_.target.value], null));
});})(details))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"List Name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (details){
return (function (p1__28912_SHARP_){
return cljs.core.swap_BANG_.call(null,details,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"details","details",1956795411),p1__28912_SHARP_.target.value], null));
});})(details))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (details){
return (function (){
return rpg_adventure_manager.scripts.localforageApi.add_list.call(null,cljs.core.deref.call(null,details));
});})(details))
], null),"Add Note"], null)], null)], null);
});
;})(details))
});

//# sourceMappingURL=new.js.map?rel=1561382410246
