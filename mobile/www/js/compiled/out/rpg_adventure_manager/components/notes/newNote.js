// Compiled by ClojureScript 1.10.238 {}
goog.provide('rpg_adventure_manager.components.notes.newnote');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('rpg_adventure_manager.state');
goog.require('rpg_adventure_manager.scripts.localforageApi');
goog.require('rpg_adventure_manager.components.new_header');
rpg_adventure_manager.components.notes.newnote.add_note = (function rpg_adventure_manager$components$notes$newnote$add_note(details){
rpg_adventure_manager.scripts.localforageApi.add_note.call(null,cljs.core.deref.call(null,details));

return cljs.core.reset_BANG_.call(null,details,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"note","note",1426297904),""], null));
});
rpg_adventure_manager.components.notes.newnote.render = (function rpg_adventure_manager$components$notes$newnote$render(state){
var details = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"note","note",1426297904),""], null));
return ((function (details){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.New-Note.itemPage.new","div.New-Note.itemPage.new",593560882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"new-note","new-note",-1423104809).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"activeView","activeView",-879635345).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))], null),rpg_adventure_manager.components.new_header.render.call(null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.new.content","div.new.content",1078457008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Add a New Note"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Notes allow you to create one off notes and reminders. Use them to keep track of information that doesn't fit\n            anywhere else"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Note",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,details)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (details){
return (function (p1__31067_SHARP_){
return cljs.core.swap_BANG_.call(null,details,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"note","note",1426297904),p1__31067_SHARP_.target.value], null));
});})(details))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (details){
return (function (){
return rpg_adventure_manager.components.notes.newnote.add_note.call(null,details);
});})(details))
], null),"Add Note"], null)], null)], null);
});
;})(details))
});

//# sourceMappingURL=newnote.js.map?rel=1561420202718
