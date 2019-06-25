// Compiled by ClojureScript 1.10.238 {}
goog.provide('rpg_adventure_manager.components.notes.noteview');
goog.require('cljs.core');
goog.require('rpg_adventure_manager.state');
goog.require('rpg_adventure_manager.scripts.localforageApi');
goog.require('rpg_adventure_manager.components.notes.newnote');
goog.require('rpg_adventure_manager.components.new_header');
rpg_adventure_manager.components.notes.noteview.delete_note = (function rpg_adventure_manager$components$notes$noteview$delete_note(key){
return rpg_adventure_manager.scripts.localforageApi.delete_note.call(null,key);
});
rpg_adventure_manager.components.notes.noteview.render = (function rpg_adventure_manager$components$notes$noteview$render(state){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Home-notes","div.Home-notes",-1311947871),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rpg_adventure_manager.components.notes.newnote.render,state], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Home-notes-header","div.Home-notes-header",453366380),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Notes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return rpg_adventure_manager.state.handle_state_change.call(null,"update-current-view","new-note");
})], null),"Add Note"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Home-notes-content","div.Home-notes-content",1839983926),cljs.core.doall.call(null,(function (){var iter__4292__auto__ = (function rpg_adventure_manager$components$notes$noteview$render_$_iter__31070(s__31071){
return (new cljs.core.LazySeq(null,(function (){
var s__31071__$1 = s__31071;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__31071__$1);
if(temp__5457__auto__){
var s__31071__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31071__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__31071__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__31073 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__31072 = (0);
while(true){
if((i__31072 < size__4291__auto__)){
var note = cljs.core._nth.call(null,c__4290__auto__,i__31072);
cljs.core.chunk_append.call(null,b__31073,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Home-notes-container","div.Home-notes-container",-297497322),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(note)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Note-item","div.Note-item",-7324463),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.deleteNote","p.deleteNote",-913193595),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__31072,note,c__4290__auto__,size__4291__auto__,b__31073,s__31071__$2,temp__5457__auto__){
return (function (){
return rpg_adventure_manager.components.notes.noteview.delete_note.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(note));
});})(i__31072,note,c__4290__auto__,size__4291__auto__,b__31073,s__31071__$2,temp__5457__auto__))
], null),"x"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(note)], null)], null)], null));

var G__31074 = (i__31072 + (1));
i__31072 = G__31074;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31073),rpg_adventure_manager$components$notes$noteview$render_$_iter__31070.call(null,cljs.core.chunk_rest.call(null,s__31071__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31073),null);
}
} else {
var note = cljs.core.first.call(null,s__31071__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Home-notes-container","div.Home-notes-container",-297497322),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(note)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.Note-item","div.Note-item",-7324463),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.deleteNote","p.deleteNote",-913193595),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (note,s__31071__$2,temp__5457__auto__){
return (function (){
return rpg_adventure_manager.components.notes.noteview.delete_note.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(note));
});})(note,s__31071__$2,temp__5457__auto__))
], null),"x"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(note)], null)], null)], null),rpg_adventure_manager$components$notes$noteview$render_$_iter__31070.call(null,cljs.core.rest.call(null,s__31071__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)));
})())], null)], null);
});
});

//# sourceMappingURL=noteview.js.map?rel=1561420202739
