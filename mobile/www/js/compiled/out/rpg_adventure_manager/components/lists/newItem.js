// Compiled by ClojureScript 1.10.238 {}
goog.provide('rpg_adventure_manager.components.lists.newitem');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('rpg_adventure_manager.state');
goog.require('rpg_adventure_manager.scripts.localforageApi');
goog.require('rpg_adventure_manager.components.new_header');
if(typeof rpg_adventure_manager.components.lists.newitem.active_list_name !== 'undefined'){
} else {
rpg_adventure_manager.components.lists.newitem.active_list_name = reagent.core.atom.call(null,"");
}
if(typeof rpg_adventure_manager.components.lists.newitem.inputs !== 'undefined'){
} else {
rpg_adventure_manager.components.lists.newitem.inputs = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"1","1",-521621649),""], null));
}
rpg_adventure_manager.components.lists.newitem.update_default_inputs = (function rpg_adventure_manager$components$lists$newitem$update_default_inputs(name,list){

if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,rpg_adventure_manager.components.lists.newitem.active_list_name),name)){
cljs.core.reset_BANG_.call(null,rpg_adventure_manager.components.lists.newitem.inputs,list);

return cljs.core.reset_BANG_.call(null,rpg_adventure_manager.components.lists.newitem.active_list_name,name);
} else {
return null;
}
});
rpg_adventure_manager.components.lists.newitem.handle_input_change = (function rpg_adventure_manager$components$lists$newitem$handle_input_change(key,value){

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,rpg_adventure_manager.components.lists.newitem.inputs)),parseInt(cljs.core.name.call(null,key)))){
cljs.core.swap_BANG_.call(null,rpg_adventure_manager.components.lists.newitem.inputs,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((parseInt(cljs.core.name.call(null,key)) + (1)))].join('')),""]));
} else {
}

return cljs.core.swap_BANG_.call(null,rpg_adventure_manager.components.lists.newitem.inputs,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([key,value]));
});
rpg_adventure_manager.components.lists.newitem.save_list = (function rpg_adventure_manager$components$lists$newitem$save_list(name){

return rpg_adventure_manager.scripts.localforageApi.save_list.call(null,name,cljs.core.deref.call(null,rpg_adventure_manager.components.lists.newitem.inputs));
});
rpg_adventure_manager.components.lists.newitem.render = (function rpg_adventure_manager$components$lists$newitem$render(state){
return (function (){
var list = new cljs.core.Keyword(null,"activeList","activeList",1327514260).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
rpg_adventure_manager.components.lists.newitem.update_default_inputs.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(list),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(list));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Active-List.itemPage.new","div.Active-List.itemPage.new",-636219494),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"active-list","active-list",-1848992403).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"activeView","activeView",-879635345).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))], null),rpg_adventure_manager.components.new_header.render.call(null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.new.content","div.new.content",1078457008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(list)], null),cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (list){
return (function rpg_adventure_manager$components$lists$newitem$render_$_iter__33416(s__33417){
return (new cljs.core.LazySeq(null,((function (list){
return (function (){
var s__33417__$1 = s__33417;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__33417__$1);
if(temp__5457__auto__){
var s__33417__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33417__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__33417__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__33419 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__33418 = (0);
while(true){
if((i__33418 < size__4291__auto__)){
var input = cljs.core._nth.call(null,c__4290__auto__,i__33418);
cljs.core.chunk_append.call(null,b__33419,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,input),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"default-value","default-value",232220170),cljs.core.second.call(null,input),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"List Item",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__33418,input,c__4290__auto__,size__4291__auto__,b__33419,s__33417__$2,temp__5457__auto__,list){
return (function (p1__33415_SHARP_){
return rpg_adventure_manager.components.lists.newitem.handle_input_change.call(null,cljs.core.first.call(null,input),p1__33415_SHARP_.target.value);
});})(i__33418,input,c__4290__auto__,size__4291__auto__,b__33419,s__33417__$2,temp__5457__auto__,list))
], null)], null));

var G__33420 = (i__33418 + (1));
i__33418 = G__33420;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33419),rpg_adventure_manager$components$lists$newitem$render_$_iter__33416.call(null,cljs.core.chunk_rest.call(null,s__33417__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33419),null);
}
} else {
var input = cljs.core.first.call(null,s__33417__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,input),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"default-value","default-value",232220170),cljs.core.second.call(null,input),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"List Item",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (input,s__33417__$2,temp__5457__auto__,list){
return (function (p1__33415_SHARP_){
return rpg_adventure_manager.components.lists.newitem.handle_input_change.call(null,cljs.core.first.call(null,input),p1__33415_SHARP_.target.value);
});})(input,s__33417__$2,temp__5457__auto__,list))
], null)], null),rpg_adventure_manager$components$lists$newitem$render_$_iter__33416.call(null,cljs.core.rest.call(null,s__33417__$2)));
}
} else {
return null;
}
break;
}
});})(list))
,null,null));
});})(list))
;
return iter__4292__auto__.call(null,cljs.core.deref.call(null,rpg_adventure_manager.components.lists.newitem.inputs));
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (list){
return (function (){
return rpg_adventure_manager.components.lists.newitem.save_list.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(list));
});})(list))
], null),"Save List"], null)], null)], null);
});
});

//# sourceMappingURL=newitem.js.map?rel=1558649729532
