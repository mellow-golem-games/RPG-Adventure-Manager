// Compiled by ClojureScript 1.10.238 {}
goog.provide('rpg_adventure_manager.components.individual.individual');
goog.require('cljs.core');
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
rpg_adventure_manager.components.individual.individual.render = (function rpg_adventure_manager$components$individual$individual$render(state){
return (function (){
var entity = new cljs.core.Keyword(null,"singleEntity","singleEntity",-1978016587).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.View-single.singlePage.viewPage","div.View-single.singlePage.viewPage",436790923),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"view-single","view-single",-302387618).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"activeView","activeView",-879635345).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))], null),rpg_adventure_manager.components.individual.header.render.call(null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.singlePage.body","div.singlePage.body",92946135),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.singlePage.indivHeader","div.singlePage.indivHeader",-2060620852),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entity)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"used","used",-1414786177).cljs$core$IFn$_invoke$arity$1(entity),false))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (entity){
return (function (){
return rpg_adventure_manager.components.individual.individual.toggle_used_state.call(null,entity,new cljs.core.Keyword(null,"activeType","activeType",957025319).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
});})(entity))
], null),"Mark as Used"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (entity){
return (function (){
return rpg_adventure_manager.components.individual.individual.toggle_used_state.call(null,entity,new cljs.core.Keyword(null,"activeType","activeType",957025319).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
});})(entity))
], null),"mark as unused"], null))], null)], null),cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (entity){
return (function rpg_adventure_manager$components$individual$individual$render_$_iter__37409(s__37410){
return (new cljs.core.LazySeq(null,((function (entity){
return (function (){
var s__37410__$1 = s__37410;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37410__$1);
if(temp__5457__auto__){
var s__37410__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37410__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__37410__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__37412 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__37411 = (0);
while(true){
if((i__37411 < size__4291__auto__)){
var key = cljs.core._nth.call(null,c__4290__auto__,i__37411);
cljs.core.chunk_append.call(null,b__37412,((((!(cljs.core._EQ_.call(null,cljs.core.first.call(null,key),new cljs.core.Keyword(null,"used","used",-1414786177)))) && (!(cljs.core._EQ_.call(null,cljs.core.first.call(null,key),new cljs.core.Keyword(null,"name","name",1843675177)))) && (!(cljs.core._EQ_.call(null,cljs.core.first.call(null,key),new cljs.core.Keyword(null,"created","created",-704993748))))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.singlePage.item","div.singlePage.item",1754446609),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name.call(null,cljs.core.first.call(null,key))], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,cljs.core.first.call(null,key))),": "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,key))].join('')], null)], null):null));

var G__37413 = (i__37411 + (1));
i__37411 = G__37413;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37412),rpg_adventure_manager$components$individual$individual$render_$_iter__37409.call(null,cljs.core.chunk_rest.call(null,s__37410__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37412),null);
}
} else {
var key = cljs.core.first.call(null,s__37410__$2);
return cljs.core.cons.call(null,((((!(cljs.core._EQ_.call(null,cljs.core.first.call(null,key),new cljs.core.Keyword(null,"used","used",-1414786177)))) && (!(cljs.core._EQ_.call(null,cljs.core.first.call(null,key),new cljs.core.Keyword(null,"name","name",1843675177)))) && (!(cljs.core._EQ_.call(null,cljs.core.first.call(null,key),new cljs.core.Keyword(null,"created","created",-704993748))))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.singlePage.item","div.singlePage.item",1754446609),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name.call(null,cljs.core.first.call(null,key))], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,cljs.core.first.call(null,key))),": "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,key))].join('')], null)], null):null),rpg_adventure_manager$components$individual$individual$render_$_iter__37409.call(null,cljs.core.rest.call(null,s__37410__$2)));
}
} else {
return null;
}
break;
}
});})(entity))
,null,null));
});})(entity))
;
return iter__4292__auto__.call(null,entity);
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.delete","button.delete",898132078),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (entity){
return (function (){
return rpg_adventure_manager.components.individual.individual.delete_item.call(null,entity,new cljs.core.Keyword(null,"activeType","activeType",957025319).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
});})(entity))
], null),"Delete"], null)], null)], null);
});
});

//# sourceMappingURL=individual.js.map?rel=1556800584560
