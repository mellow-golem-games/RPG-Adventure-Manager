// Compiled by ClojureScript 1.10.238 {}
goog.provide('rpg_adventure_manager.newnpc');
goog.require('cljs.core');
goog.require('rpg_adventure_manager.state');
goog.require('rpg_adventure_manager.scripts.localforageApi');
goog.require('rpg_adventure_manager.components.new_header');
rpg_adventure_manager.newnpc.add_npc = (function rpg_adventure_manager$newnpc$add_npc(details){
return cljs.core.print.call(null,cljs.core.deref.call(null,details));
});
rpg_adventure_manager.newnpc.render = (function rpg_adventure_manager$newnpc$render(state){
var details = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"goals","goals",-1712076283),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"equipment","equipment",790435115),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"usage","usage",-1583752910),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"flaws","flaws",632427295),new cljs.core.Keyword(null,"traits","traits",1778193407)],["","","","","","","","",""]));
return ((function (details){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.New-Npc.itemPage.new","div.New-Npc.itemPage.new",991525420),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"new-npc","new-npc",-348393914).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"activeView","activeView",-879635345).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))], null),rpg_adventure_manager.components.new_header.render.call(null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.new.content","div.new.content",1078457008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Add a New NPC"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"NPC Name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (details){
return (function (p1__31056_SHARP_){
return cljs.core.swap_BANG_.call(null,details,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),p1__31056_SHARP_.target.value], null));
});})(details))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Character Description",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (details){
return (function (p1__31057_SHARP_){
return cljs.core.swap_BANG_.call(null,details,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),p1__31057_SHARP_.target.value], null));
});})(details))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Equipment",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (details){
return (function (p1__31058_SHARP_){
return cljs.core.swap_BANG_.call(null,details,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"equipment","equipment",790435115),p1__31058_SHARP_.target.value], null));
});})(details))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Traits",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (details){
return (function (p1__31059_SHARP_){
return cljs.core.swap_BANG_.call(null,details,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"traits","traits",1778193407),p1__31059_SHARP_.target.value], null));
});})(details))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Flaws",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (details){
return (function (p1__31060_SHARP_){
return cljs.core.swap_BANG_.call(null,details,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flaws","flaws",632427295),p1__31060_SHARP_.target.value], null));
});})(details))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Goals",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (details){
return (function (p1__31061_SHARP_){
return cljs.core.swap_BANG_.call(null,details,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"goals","goals",-1712076283),p1__31061_SHARP_.target.value], null));
});})(details))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"History",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (details){
return (function (p1__31062_SHARP_){
return cljs.core.swap_BANG_.call(null,details,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),p1__31062_SHARP_.target.value], null));
});})(details))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Location",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (details){
return (function (p1__31063_SHARP_){
return cljs.core.swap_BANG_.call(null,details,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location","location",1815599388),p1__31063_SHARP_.target.value], null));
});})(details))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Usage Details",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (details){
return (function (p1__31064_SHARP_){
return cljs.core.swap_BANG_.call(null,details,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"usage","usage",-1583752910),p1__31064_SHARP_.target.value], null));
});})(details))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (details){
return (function (){
return rpg_adventure_manager.scripts.localforageApi.add_item.call(null,"npcs",cljs.core.deref.call(null,details));
});})(details))
], null),"Add NPC"], null)], null)], null);
});
;})(details))
});

//# sourceMappingURL=newnpc.js.map?rel=1561420202696
