// Compiled by ClojureScript 1.10.238 {}
goog.provide('rpg_adventure_manager.components.lists.list');
goog.require('cljs.core');
goog.require('rpg_adventure_manager.state');
goog.require('rpg_adventure_manager.scripts.localforageApi');
goog.require('rpg_adventure_manager.components.new_header');
goog.require('rpg_adventure_manager.components.lists.newlist');
goog.require('rpg_adventure_manager.components.lists.newitem');
rpg_adventure_manager.components.lists.list.show_active_list = (function rpg_adventure_manager$components$lists$list$show_active_list(list){

rpg_adventure_manager.state.handle_state_change.call(null,"update-current-view","active-list");

return rpg_adventure_manager.state.handle_state_change.call(null,"set-active-list",list);
});
rpg_adventure_manager.components.lists.list.render = (function rpg_adventure_manager$components$lists$list$render(state){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Home-lists","div.Home-lists",-883442095),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg_adventure_manager.components.lists.newlist.render,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg_adventure_manager.components.lists.newitem.render,state], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Home-lists-header","div.Home-lists-header",981828081),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Custom Lists"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return rpg_adventure_manager.state.handle_state_change.call(null,"update-current-view","new-list");
})], null),"Add List"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Home-lists-content","div.Home-lists-content",2110843440),cljs.core.doall.call(null,(function (){var iter__4292__auto__ = (function rpg_adventure_manager$components$lists$list$render_$_iter__28990(s__28991){
return (new cljs.core.LazySeq(null,(function (){
var s__28991__$1 = s__28991;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__28991__$1);
if(temp__5457__auto__){
var s__28991__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28991__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__28991__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__28993 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__28992 = (0);
while(true){
if((i__28992 < size__4291__auto__)){
var list = cljs.core._nth.call(null,c__4290__auto__,i__28992);
cljs.core.chunk_append.call(null,b__28993,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Home-lists-container","div.Home-lists-container",-485567935),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(list)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(list)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__28992,list,c__4290__auto__,size__4291__auto__,b__28993,s__28991__$2,temp__5457__auto__){
return (function (){
return rpg_adventure_manager.components.lists.list.show_active_list.call(null,list);
});})(i__28992,list,c__4290__auto__,size__4291__auto__,b__28993,s__28991__$2,temp__5457__auto__))
], null),"View List"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.delete","button.delete",898132078),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__28992,list,c__4290__auto__,size__4291__auto__,b__28993,s__28991__$2,temp__5457__auto__){
return (function (){
return rpg_adventure_manager.scripts.localforageApi.delete_list.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(list));
});})(i__28992,list,c__4290__auto__,size__4291__auto__,b__28993,s__28991__$2,temp__5457__auto__))
], null),"Delete"], null)], null)], null));

var G__28994 = (i__28992 + (1));
i__28992 = G__28994;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28993),rpg_adventure_manager$components$lists$list$render_$_iter__28990.call(null,cljs.core.chunk_rest.call(null,s__28991__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28993),null);
}
} else {
var list = cljs.core.first.call(null,s__28991__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Home-lists-container","div.Home-lists-container",-485567935),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(list)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(list)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (list,s__28991__$2,temp__5457__auto__){
return (function (){
return rpg_adventure_manager.components.lists.list.show_active_list.call(null,list);
});})(list,s__28991__$2,temp__5457__auto__))
], null),"View List"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.delete","button.delete",898132078),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (list,s__28991__$2,temp__5457__auto__){
return (function (){
return rpg_adventure_manager.scripts.localforageApi.delete_list.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(list));
});})(list,s__28991__$2,temp__5457__auto__))
], null),"Delete"], null)], null)], null),rpg_adventure_manager$components$lists$list$render_$_iter__28990.call(null,cljs.core.rest.call(null,s__28991__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,new cljs.core.Keyword(null,"lists","lists",-884730684).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)));
})())], null)], null);
});
});

//# sourceMappingURL=list.js.map?rel=1558242492594
