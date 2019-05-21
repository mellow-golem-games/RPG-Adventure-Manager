// Compiled by ClojureScript 1.10.238 {}
goog.provide('rpg_adventure_manager.components.all.view');
goog.require('cljs.core');
goog.require('rpg_adventure_manager.state');
goog.require('rpg_adventure_manager.scripts.localforageApi');
goog.require('rpg_adventure_manager.components.new_header');
rpg_adventure_manager.components.all.view.show_view_all = (function rpg_adventure_manager$components$all$view$show_view_all(entity){
rpg_adventure_manager.state.handle_state_change.call(null,"set-single-entity",entity);

return rpg_adventure_manager.state.handle_state_change.call(null,"update-current-view","view-single");
});
rpg_adventure_manager.components.all.view.render = (function rpg_adventure_manager$components$all$view$render(state){
var asdasd = new cljs.core.Keyword(null,"activeEntity","activeEntity",1254491677).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
return ((function (asdasd){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.View-Cities.viewPage","div.View-Cities.viewPage",-61380150),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"view-all-entities","view-all-entities",304084119).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"activeView","activeView",-879635345).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))], null),rpg_adventure_manager.components.new_header.render.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.View-all-body","div.View-all-body",1838006804),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.View-all-group","div.View-all-group",-1703074608),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Currently In Use"], null),cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (asdasd){
return (function rpg_adventure_manager$components$all$view$render_$_iter__28961(s__28962){
return (new cljs.core.LazySeq(null,((function (asdasd){
return (function (){
var s__28962__$1 = s__28962;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28962__$1);
if(temp__5457__auto__){
var s__28962__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28962__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__28962__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__28964 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__28963 = (0);
while(true){
if((i__28963 < size__4291__auto__)){
var entity = cljs.core._nth.call(null,c__4290__auto__,i__28963);
cljs.core.chunk_append.call(null,b__28964,(cljs.core.truth_(new cljs.core.Keyword(null,"used","used",-1414786177).cljs$core$IFn$_invoke$arity$1(entity))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.View-all-item","div.View-all-item",-947541718),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entity)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entity)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__28963,entity,c__4290__auto__,size__4291__auto__,b__28964,s__28962__$2,temp__5457__auto__,asdasd){
return (function (){
return rpg_adventure_manager.components.all.view.show_view_all.call(null,entity);
});})(i__28963,entity,c__4290__auto__,size__4291__auto__,b__28964,s__28962__$2,temp__5457__auto__,asdasd))
], null),"View"], null)], null)], null):null));

var G__28969 = (i__28963 + (1));
i__28963 = G__28969;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28964),rpg_adventure_manager$components$all$view$render_$_iter__28961.call(null,cljs.core.chunk_rest.call(null,s__28962__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28964),null);
}
} else {
var entity = cljs.core.first.call(null,s__28962__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"used","used",-1414786177).cljs$core$IFn$_invoke$arity$1(entity))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.View-all-item","div.View-all-item",-947541718),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entity)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entity)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (entity,s__28962__$2,temp__5457__auto__,asdasd){
return (function (){
return rpg_adventure_manager.components.all.view.show_view_all.call(null,entity);
});})(entity,s__28962__$2,temp__5457__auto__,asdasd))
], null),"View"], null)], null)], null):null),rpg_adventure_manager$components$all$view$render_$_iter__28961.call(null,cljs.core.rest.call(null,s__28962__$2)));
}
} else {
return null;
}
break;
}
});})(asdasd))
,null,null));
});})(asdasd))
;
return iter__4292__auto__.call(null,new cljs.core.Keyword(null,"activeEntity","activeEntity",1254491677).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.View-all-group","div.View-all-group",-1703074608),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Not In use"], null),cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (asdasd){
return (function rpg_adventure_manager$components$all$view$render_$_iter__28965(s__28966){
return (new cljs.core.LazySeq(null,((function (asdasd){
return (function (){
var s__28966__$1 = s__28966;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28966__$1);
if(temp__5457__auto__){
var s__28966__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28966__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__28966__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__28968 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__28967 = (0);
while(true){
if((i__28967 < size__4291__auto__)){
var entity = cljs.core._nth.call(null,c__4290__auto__,i__28967);
cljs.core.chunk_append.call(null,b__28968,((cljs.core.not.call(null,new cljs.core.Keyword(null,"used","used",-1414786177).cljs$core$IFn$_invoke$arity$1(entity)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.View-all-item","div.View-all-item",-947541718),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entity)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entity)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__28967,entity,c__4290__auto__,size__4291__auto__,b__28968,s__28966__$2,temp__5457__auto__,asdasd){
return (function (){
return rpg_adventure_manager.components.all.view.show_view_all.call(null,entity);
});})(i__28967,entity,c__4290__auto__,size__4291__auto__,b__28968,s__28966__$2,temp__5457__auto__,asdasd))
], null),"View"], null)], null)], null):null));

var G__28970 = (i__28967 + (1));
i__28967 = G__28970;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28968),rpg_adventure_manager$components$all$view$render_$_iter__28965.call(null,cljs.core.chunk_rest.call(null,s__28966__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28968),null);
}
} else {
var entity = cljs.core.first.call(null,s__28966__$2);
return cljs.core.cons.call(null,((cljs.core.not.call(null,new cljs.core.Keyword(null,"used","used",-1414786177).cljs$core$IFn$_invoke$arity$1(entity)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.View-all-item","div.View-all-item",-947541718),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entity)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entity)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (entity,s__28966__$2,temp__5457__auto__,asdasd){
return (function (){
return rpg_adventure_manager.components.all.view.show_view_all.call(null,entity);
});})(entity,s__28966__$2,temp__5457__auto__,asdasd))
], null),"View"], null)], null)], null):null),rpg_adventure_manager$components$all$view$render_$_iter__28965.call(null,cljs.core.rest.call(null,s__28966__$2)));
}
} else {
return null;
}
break;
}
});})(asdasd))
,null,null));
});})(asdasd))
;
return iter__4292__auto__.call(null,new cljs.core.Keyword(null,"activeEntity","activeEntity",1254491677).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)));
})())], null)], null)], null);
});
;})(asdasd))
});

//# sourceMappingURL=view.js.map?rel=1558242492403
