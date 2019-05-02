// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30663){
var map__30664 = p__30663;
var map__30664__$1 = ((((!((map__30664 == null)))?(((((map__30664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30664):map__30664);
var m = map__30664__$1;
var n = cljs.core.get.call(null,map__30664__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30664__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30666_30688 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30667_30689 = null;
var count__30668_30690 = (0);
var i__30669_30691 = (0);
while(true){
if((i__30669_30691 < count__30668_30690)){
var f_30692 = cljs.core._nth.call(null,chunk__30667_30689,i__30669_30691);
cljs.core.println.call(null,"  ",f_30692);


var G__30693 = seq__30666_30688;
var G__30694 = chunk__30667_30689;
var G__30695 = count__30668_30690;
var G__30696 = (i__30669_30691 + (1));
seq__30666_30688 = G__30693;
chunk__30667_30689 = G__30694;
count__30668_30690 = G__30695;
i__30669_30691 = G__30696;
continue;
} else {
var temp__5457__auto___30697 = cljs.core.seq.call(null,seq__30666_30688);
if(temp__5457__auto___30697){
var seq__30666_30698__$1 = temp__5457__auto___30697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30666_30698__$1)){
var c__4319__auto___30699 = cljs.core.chunk_first.call(null,seq__30666_30698__$1);
var G__30700 = cljs.core.chunk_rest.call(null,seq__30666_30698__$1);
var G__30701 = c__4319__auto___30699;
var G__30702 = cljs.core.count.call(null,c__4319__auto___30699);
var G__30703 = (0);
seq__30666_30688 = G__30700;
chunk__30667_30689 = G__30701;
count__30668_30690 = G__30702;
i__30669_30691 = G__30703;
continue;
} else {
var f_30704 = cljs.core.first.call(null,seq__30666_30698__$1);
cljs.core.println.call(null,"  ",f_30704);


var G__30705 = cljs.core.next.call(null,seq__30666_30698__$1);
var G__30706 = null;
var G__30707 = (0);
var G__30708 = (0);
seq__30666_30688 = G__30705;
chunk__30667_30689 = G__30706;
count__30668_30690 = G__30707;
i__30669_30691 = G__30708;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30709 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30709);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30709)))?cljs.core.second.call(null,arglists_30709):arglists_30709));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30670_30710 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30671_30711 = null;
var count__30672_30712 = (0);
var i__30673_30713 = (0);
while(true){
if((i__30673_30713 < count__30672_30712)){
var vec__30674_30714 = cljs.core._nth.call(null,chunk__30671_30711,i__30673_30713);
var name_30715 = cljs.core.nth.call(null,vec__30674_30714,(0),null);
var map__30677_30716 = cljs.core.nth.call(null,vec__30674_30714,(1),null);
var map__30677_30717__$1 = ((((!((map__30677_30716 == null)))?(((((map__30677_30716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30677_30716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30677_30716):map__30677_30716);
var doc_30718 = cljs.core.get.call(null,map__30677_30717__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30719 = cljs.core.get.call(null,map__30677_30717__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30715);

cljs.core.println.call(null," ",arglists_30719);

if(cljs.core.truth_(doc_30718)){
cljs.core.println.call(null," ",doc_30718);
} else {
}


var G__30720 = seq__30670_30710;
var G__30721 = chunk__30671_30711;
var G__30722 = count__30672_30712;
var G__30723 = (i__30673_30713 + (1));
seq__30670_30710 = G__30720;
chunk__30671_30711 = G__30721;
count__30672_30712 = G__30722;
i__30673_30713 = G__30723;
continue;
} else {
var temp__5457__auto___30724 = cljs.core.seq.call(null,seq__30670_30710);
if(temp__5457__auto___30724){
var seq__30670_30725__$1 = temp__5457__auto___30724;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30670_30725__$1)){
var c__4319__auto___30726 = cljs.core.chunk_first.call(null,seq__30670_30725__$1);
var G__30727 = cljs.core.chunk_rest.call(null,seq__30670_30725__$1);
var G__30728 = c__4319__auto___30726;
var G__30729 = cljs.core.count.call(null,c__4319__auto___30726);
var G__30730 = (0);
seq__30670_30710 = G__30727;
chunk__30671_30711 = G__30728;
count__30672_30712 = G__30729;
i__30673_30713 = G__30730;
continue;
} else {
var vec__30679_30731 = cljs.core.first.call(null,seq__30670_30725__$1);
var name_30732 = cljs.core.nth.call(null,vec__30679_30731,(0),null);
var map__30682_30733 = cljs.core.nth.call(null,vec__30679_30731,(1),null);
var map__30682_30734__$1 = ((((!((map__30682_30733 == null)))?(((((map__30682_30733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30682_30733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30682_30733):map__30682_30733);
var doc_30735 = cljs.core.get.call(null,map__30682_30734__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30736 = cljs.core.get.call(null,map__30682_30734__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30732);

cljs.core.println.call(null," ",arglists_30736);

if(cljs.core.truth_(doc_30735)){
cljs.core.println.call(null," ",doc_30735);
} else {
}


var G__30737 = cljs.core.next.call(null,seq__30670_30725__$1);
var G__30738 = null;
var G__30739 = (0);
var G__30740 = (0);
seq__30670_30710 = G__30737;
chunk__30671_30711 = G__30738;
count__30672_30712 = G__30739;
i__30673_30713 = G__30740;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__30684 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30685 = null;
var count__30686 = (0);
var i__30687 = (0);
while(true){
if((i__30687 < count__30686)){
var role = cljs.core._nth.call(null,chunk__30685,i__30687);
var temp__5457__auto___30741__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30741__$1)){
var spec_30742 = temp__5457__auto___30741__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30742));
} else {
}


var G__30743 = seq__30684;
var G__30744 = chunk__30685;
var G__30745 = count__30686;
var G__30746 = (i__30687 + (1));
seq__30684 = G__30743;
chunk__30685 = G__30744;
count__30686 = G__30745;
i__30687 = G__30746;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__30684);
if(temp__5457__auto____$1){
var seq__30684__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30684__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30684__$1);
var G__30747 = cljs.core.chunk_rest.call(null,seq__30684__$1);
var G__30748 = c__4319__auto__;
var G__30749 = cljs.core.count.call(null,c__4319__auto__);
var G__30750 = (0);
seq__30684 = G__30747;
chunk__30685 = G__30748;
count__30686 = G__30749;
i__30687 = G__30750;
continue;
} else {
var role = cljs.core.first.call(null,seq__30684__$1);
var temp__5457__auto___30751__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30751__$2)){
var spec_30752 = temp__5457__auto___30751__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30752));
} else {
}


var G__30753 = cljs.core.next.call(null,seq__30684__$1);
var G__30754 = null;
var G__30755 = (0);
var G__30756 = (0);
seq__30684 = G__30753;
chunk__30685 = G__30754;
count__30686 = G__30755;
i__30687 = G__30756;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1556800410906
