// Compiled by ClojureScript 1.10.238 {}
goog.provide('rpg_adventure_manager.components.individual.individual');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('rpg_adventure_manager.state');
goog.require('rpg_adventure_manager.scripts.localforageApi');
goog.require('rpg_adventure_manager.components.individual.header');
rpg_adventure_manager.components.individual.individual.toggle_used_state = (function rpg_adventure_manager$components$individual$individual$toggle_used_state(entity,type){

return rpg_adventure_manager.scripts.localforageApi.update_item.call(null,type,cljs.core.conj.call(null,entity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"used","used",-1414786177),cljs.core.not.call(null,new cljs.core.Keyword(null,"used","used",-1414786177).cljs$core$IFn$_invoke$arity$1(entity))], null)));
});
rpg_adventure_manager.components.individual.individual.delete_item = (function rpg_adventure_manager$components$individual$individual$delete_item(entity,type){
rpg_adventure_manager.scripts.localforageApi.delete_item.call(null,entity,type);

return rpg_adventure_manager.state.handle_state_change.call(null,"update-current-view","");
});
rpg_adventure_manager.components.individual.individual.save_edits = (function rpg_adventure_manager$components$individual$individual$save_edits(entity,editing,type){

cljs.core.swap_BANG_.call(null,editing,cljs.core.not);

return rpg_adventure_manager.scripts.localforageApi.update_item.call(null,type,cljs.core.deref.call(null,entity));
});
rpg_adventure_manager.components.individual.individual.render = (function rpg_adventure_manager$components$individual$individual$render(state){
var editing = reagent.core.atom.call(null,false);
return ((function (editing){
return (function (){
var entity = new cljs.core.Keyword(null,"singleEntity","singleEntity",-1978016587).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var details = reagent.core.atom.call(null,entity);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.View-single.singlePage.viewPage","div.View-single.singlePage.viewPage",436790923),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"view-single","view-single",-302387618).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"activeView","activeView",-879635345).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))], null),rpg_adventure_manager.components.individual.header.render.call(null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.singlePage.body","div.singlePage.body",92946135),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.singlePage.indivHeader","div.singlePage.indivHeader",-2060620852),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entity)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"used","used",-1414786177).cljs$core$IFn$_invoke$arity$1(entity),false))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (entity,details,editing){
return (function (){
return rpg_adventure_manager.components.individual.individual.toggle_used_state.call(null,entity,new cljs.core.Keyword(null,"activeType","activeType",957025319).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
});})(entity,details,editing))
], null),"Mark as Used"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (entity,details,editing){
return (function (){
return rpg_adventure_manager.components.individual.individual.toggle_used_state.call(null,entity,new cljs.core.Keyword(null,"activeType","activeType",957025319).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
});})(entity,details,editing))
], null),"Mark Unused"], null)),((cljs.core.not.call(null,cljs.core.deref.call(null,editing)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (entity,details,editing){
return (function (){
return cljs.core.swap_BANG_.call(null,editing,cljs.core.not);
});})(entity,details,editing))
], null),"Edit"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (entity,details,editing){
return (function (){
return rpg_adventure_manager.components.individual.individual.save_edits.call(null,details,editing,new cljs.core.Keyword(null,"activeType","activeType",957025319).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
});})(entity,details,editing))
], null),"Save"], null))], null)], null),cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (entity,details,editing){
return (function rpg_adventure_manager$components$individual$individual$render_$_iter__28998(s__28999){
return (new cljs.core.LazySeq(null,((function (entity,details,editing){
return (function (){
var s__28999__$1 = s__28999;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28999__$1);
if(temp__5457__auto__){
var s__28999__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28999__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__28999__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__29001 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__29000 = (0);
while(true){
if((i__29000 < size__4291__auto__)){
var key = cljs.core._nth.call(null,c__4290__auto__,i__29000);
if(cljs.core.not_EQ_.call(null,cljs.core.first.call(null,key),new cljs.core.Keyword(null,"created","created",-704993748))){
if(cljs.core.not_EQ_.call(null,cljs.core.first.call(null,key),new cljs.core.Keyword(null,"used","used",-1414786177))){
cljs.core.chunk_append.call(null,b__29001,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.singlePage.item","div.singlePage.item",1754446609),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),((cljs.core.not.call(null,cljs.core.deref.call(null,editing)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.singlePageItem.content","div.singlePageItem.content",-1776317036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name.call(null,cljs.core.first.call(null,key))], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,cljs.core.first.call(null,key))),": "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,key))].join('')], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.singlePageItem.edit","div.singlePageItem.edit",-1455651163),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),cljs.core.first.call(null,key),new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),cljs.core.second.call(null,key),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__29000,s__28999__$1,key,c__4290__auto__,size__4291__auto__,b__29001,s__28999__$2,temp__5457__auto__,entity,details,editing){
return (function (p1__28997_SHARP_){
return cljs.core.swap_BANG_.call(null,details,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,key),p1__28997_SHARP_.target.value]));
});})(i__29000,s__28999__$1,key,c__4290__auto__,size__4291__auto__,b__29001,s__28999__$2,temp__5457__auto__,entity,details,editing))
], null)], null)], null))], null));

var G__29002 = (i__29000 + (1));
i__29000 = G__29002;
continue;
} else {
var G__29003 = (i__29000 + (1));
i__29000 = G__29003;
continue;
}
} else {
var G__29004 = (i__29000 + (1));
i__29000 = G__29004;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29001),rpg_adventure_manager$components$individual$individual$render_$_iter__28998.call(null,cljs.core.chunk_rest.call(null,s__28999__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29001),null);
}
} else {
var key = cljs.core.first.call(null,s__28999__$2);
if(cljs.core.not_EQ_.call(null,cljs.core.first.call(null,key),new cljs.core.Keyword(null,"created","created",-704993748))){
if(cljs.core.not_EQ_.call(null,cljs.core.first.call(null,key),new cljs.core.Keyword(null,"used","used",-1414786177))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.singlePage.item","div.singlePage.item",1754446609),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),((cljs.core.not.call(null,cljs.core.deref.call(null,editing)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.singlePageItem.content","div.singlePageItem.content",-1776317036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name.call(null,cljs.core.first.call(null,key))], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,cljs.core.first.call(null,key))),": "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,key))].join('')], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.singlePageItem.edit","div.singlePageItem.edit",-1455651163),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),cljs.core.first.call(null,key),new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),cljs.core.second.call(null,key),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (s__28999__$1,key,s__28999__$2,temp__5457__auto__,entity,details,editing){
return (function (p1__28997_SHARP_){
return cljs.core.swap_BANG_.call(null,details,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,key),p1__28997_SHARP_.target.value]));
});})(s__28999__$1,key,s__28999__$2,temp__5457__auto__,entity,details,editing))
], null)], null)], null))], null),rpg_adventure_manager$components$individual$individual$render_$_iter__28998.call(null,cljs.core.rest.call(null,s__28999__$2)));
} else {
var G__29005 = cljs.core.rest.call(null,s__28999__$2);
s__28999__$1 = G__29005;
continue;
}
} else {
var G__29006 = cljs.core.rest.call(null,s__28999__$2);
s__28999__$1 = G__29006;
continue;
}
}
} else {
return null;
}
break;
}
});})(entity,details,editing))
,null,null));
});})(entity,details,editing))
;
return iter__4292__auto__.call(null,entity);
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.delete","button.delete",898132078),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (entity,details,editing){
return (function (){
return rpg_adventure_manager.components.individual.individual.delete_item.call(null,entity,new cljs.core.Keyword(null,"activeType","activeType",957025319).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
});})(entity,details,editing))
], null),"Delete"], null)], null)], null);
});
;})(editing))
});

//# sourceMappingURL=individual.js.map?rel=1558242492673
