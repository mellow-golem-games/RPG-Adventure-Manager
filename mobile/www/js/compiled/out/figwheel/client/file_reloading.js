// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29201_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29201_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29202 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29203 = null;
var count__29204 = (0);
var i__29205 = (0);
while(true){
if((i__29205 < count__29204)){
var n = cljs.core._nth.call(null,chunk__29203,i__29205);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29206 = seq__29202;
var G__29207 = chunk__29203;
var G__29208 = count__29204;
var G__29209 = (i__29205 + (1));
seq__29202 = G__29206;
chunk__29203 = G__29207;
count__29204 = G__29208;
i__29205 = G__29209;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29202);
if(temp__5457__auto__){
var seq__29202__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29202__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29202__$1);
var G__29210 = cljs.core.chunk_rest.call(null,seq__29202__$1);
var G__29211 = c__4319__auto__;
var G__29212 = cljs.core.count.call(null,c__4319__auto__);
var G__29213 = (0);
seq__29202 = G__29210;
chunk__29203 = G__29211;
count__29204 = G__29212;
i__29205 = G__29213;
continue;
} else {
var n = cljs.core.first.call(null,seq__29202__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29214 = cljs.core.next.call(null,seq__29202__$1);
var G__29215 = null;
var G__29216 = (0);
var G__29217 = (0);
seq__29202 = G__29214;
chunk__29203 = G__29215;
count__29204 = G__29216;
i__29205 = G__29217;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__29218){
var vec__29219 = p__29218;
var _ = cljs.core.nth.call(null,vec__29219,(0),null);
var v = cljs.core.nth.call(null,vec__29219,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__29222){
var vec__29223 = p__29222;
var k = cljs.core.nth.call(null,vec__29223,(0),null);
var v = cljs.core.nth.call(null,vec__29223,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29235_29243 = cljs.core.seq.call(null,deps);
var chunk__29236_29244 = null;
var count__29237_29245 = (0);
var i__29238_29246 = (0);
while(true){
if((i__29238_29246 < count__29237_29245)){
var dep_29247 = cljs.core._nth.call(null,chunk__29236_29244,i__29238_29246);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29247;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29247));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29247,(depth + (1)),state);
} else {
}


var G__29248 = seq__29235_29243;
var G__29249 = chunk__29236_29244;
var G__29250 = count__29237_29245;
var G__29251 = (i__29238_29246 + (1));
seq__29235_29243 = G__29248;
chunk__29236_29244 = G__29249;
count__29237_29245 = G__29250;
i__29238_29246 = G__29251;
continue;
} else {
var temp__5457__auto___29252 = cljs.core.seq.call(null,seq__29235_29243);
if(temp__5457__auto___29252){
var seq__29235_29253__$1 = temp__5457__auto___29252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29235_29253__$1)){
var c__4319__auto___29254 = cljs.core.chunk_first.call(null,seq__29235_29253__$1);
var G__29255 = cljs.core.chunk_rest.call(null,seq__29235_29253__$1);
var G__29256 = c__4319__auto___29254;
var G__29257 = cljs.core.count.call(null,c__4319__auto___29254);
var G__29258 = (0);
seq__29235_29243 = G__29255;
chunk__29236_29244 = G__29256;
count__29237_29245 = G__29257;
i__29238_29246 = G__29258;
continue;
} else {
var dep_29259 = cljs.core.first.call(null,seq__29235_29253__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29259;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29259));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29259,(depth + (1)),state);
} else {
}


var G__29260 = cljs.core.next.call(null,seq__29235_29253__$1);
var G__29261 = null;
var G__29262 = (0);
var G__29263 = (0);
seq__29235_29243 = G__29260;
chunk__29236_29244 = G__29261;
count__29237_29245 = G__29262;
i__29238_29246 = G__29263;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29239){
var vec__29240 = p__29239;
var seq__29241 = cljs.core.seq.call(null,vec__29240);
var first__29242 = cljs.core.first.call(null,seq__29241);
var seq__29241__$1 = cljs.core.next.call(null,seq__29241);
var x = first__29242;
var xs = seq__29241__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29240,seq__29241,first__29242,seq__29241__$1,x,xs,get_deps__$1){
return (function (p1__29226_SHARP_){
return clojure.set.difference.call(null,p1__29226_SHARP_,x);
});})(vec__29240,seq__29241,first__29242,seq__29241__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29264 = cljs.core.seq.call(null,provides);
var chunk__29265 = null;
var count__29266 = (0);
var i__29267 = (0);
while(true){
if((i__29267 < count__29266)){
var prov = cljs.core._nth.call(null,chunk__29265,i__29267);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29268_29276 = cljs.core.seq.call(null,requires);
var chunk__29269_29277 = null;
var count__29270_29278 = (0);
var i__29271_29279 = (0);
while(true){
if((i__29271_29279 < count__29270_29278)){
var req_29280 = cljs.core._nth.call(null,chunk__29269_29277,i__29271_29279);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29280,prov);


var G__29281 = seq__29268_29276;
var G__29282 = chunk__29269_29277;
var G__29283 = count__29270_29278;
var G__29284 = (i__29271_29279 + (1));
seq__29268_29276 = G__29281;
chunk__29269_29277 = G__29282;
count__29270_29278 = G__29283;
i__29271_29279 = G__29284;
continue;
} else {
var temp__5457__auto___29285 = cljs.core.seq.call(null,seq__29268_29276);
if(temp__5457__auto___29285){
var seq__29268_29286__$1 = temp__5457__auto___29285;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29268_29286__$1)){
var c__4319__auto___29287 = cljs.core.chunk_first.call(null,seq__29268_29286__$1);
var G__29288 = cljs.core.chunk_rest.call(null,seq__29268_29286__$1);
var G__29289 = c__4319__auto___29287;
var G__29290 = cljs.core.count.call(null,c__4319__auto___29287);
var G__29291 = (0);
seq__29268_29276 = G__29288;
chunk__29269_29277 = G__29289;
count__29270_29278 = G__29290;
i__29271_29279 = G__29291;
continue;
} else {
var req_29292 = cljs.core.first.call(null,seq__29268_29286__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29292,prov);


var G__29293 = cljs.core.next.call(null,seq__29268_29286__$1);
var G__29294 = null;
var G__29295 = (0);
var G__29296 = (0);
seq__29268_29276 = G__29293;
chunk__29269_29277 = G__29294;
count__29270_29278 = G__29295;
i__29271_29279 = G__29296;
continue;
}
} else {
}
}
break;
}


var G__29297 = seq__29264;
var G__29298 = chunk__29265;
var G__29299 = count__29266;
var G__29300 = (i__29267 + (1));
seq__29264 = G__29297;
chunk__29265 = G__29298;
count__29266 = G__29299;
i__29267 = G__29300;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29264);
if(temp__5457__auto__){
var seq__29264__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29264__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29264__$1);
var G__29301 = cljs.core.chunk_rest.call(null,seq__29264__$1);
var G__29302 = c__4319__auto__;
var G__29303 = cljs.core.count.call(null,c__4319__auto__);
var G__29304 = (0);
seq__29264 = G__29301;
chunk__29265 = G__29302;
count__29266 = G__29303;
i__29267 = G__29304;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29264__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29272_29305 = cljs.core.seq.call(null,requires);
var chunk__29273_29306 = null;
var count__29274_29307 = (0);
var i__29275_29308 = (0);
while(true){
if((i__29275_29308 < count__29274_29307)){
var req_29309 = cljs.core._nth.call(null,chunk__29273_29306,i__29275_29308);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29309,prov);


var G__29310 = seq__29272_29305;
var G__29311 = chunk__29273_29306;
var G__29312 = count__29274_29307;
var G__29313 = (i__29275_29308 + (1));
seq__29272_29305 = G__29310;
chunk__29273_29306 = G__29311;
count__29274_29307 = G__29312;
i__29275_29308 = G__29313;
continue;
} else {
var temp__5457__auto___29314__$1 = cljs.core.seq.call(null,seq__29272_29305);
if(temp__5457__auto___29314__$1){
var seq__29272_29315__$1 = temp__5457__auto___29314__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29272_29315__$1)){
var c__4319__auto___29316 = cljs.core.chunk_first.call(null,seq__29272_29315__$1);
var G__29317 = cljs.core.chunk_rest.call(null,seq__29272_29315__$1);
var G__29318 = c__4319__auto___29316;
var G__29319 = cljs.core.count.call(null,c__4319__auto___29316);
var G__29320 = (0);
seq__29272_29305 = G__29317;
chunk__29273_29306 = G__29318;
count__29274_29307 = G__29319;
i__29275_29308 = G__29320;
continue;
} else {
var req_29321 = cljs.core.first.call(null,seq__29272_29315__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29321,prov);


var G__29322 = cljs.core.next.call(null,seq__29272_29315__$1);
var G__29323 = null;
var G__29324 = (0);
var G__29325 = (0);
seq__29272_29305 = G__29322;
chunk__29273_29306 = G__29323;
count__29274_29307 = G__29324;
i__29275_29308 = G__29325;
continue;
}
} else {
}
}
break;
}


var G__29326 = cljs.core.next.call(null,seq__29264__$1);
var G__29327 = null;
var G__29328 = (0);
var G__29329 = (0);
seq__29264 = G__29326;
chunk__29265 = G__29327;
count__29266 = G__29328;
i__29267 = G__29329;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29330_29334 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29331_29335 = null;
var count__29332_29336 = (0);
var i__29333_29337 = (0);
while(true){
if((i__29333_29337 < count__29332_29336)){
var ns_29338 = cljs.core._nth.call(null,chunk__29331_29335,i__29333_29337);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29338);


var G__29339 = seq__29330_29334;
var G__29340 = chunk__29331_29335;
var G__29341 = count__29332_29336;
var G__29342 = (i__29333_29337 + (1));
seq__29330_29334 = G__29339;
chunk__29331_29335 = G__29340;
count__29332_29336 = G__29341;
i__29333_29337 = G__29342;
continue;
} else {
var temp__5457__auto___29343 = cljs.core.seq.call(null,seq__29330_29334);
if(temp__5457__auto___29343){
var seq__29330_29344__$1 = temp__5457__auto___29343;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29330_29344__$1)){
var c__4319__auto___29345 = cljs.core.chunk_first.call(null,seq__29330_29344__$1);
var G__29346 = cljs.core.chunk_rest.call(null,seq__29330_29344__$1);
var G__29347 = c__4319__auto___29345;
var G__29348 = cljs.core.count.call(null,c__4319__auto___29345);
var G__29349 = (0);
seq__29330_29334 = G__29346;
chunk__29331_29335 = G__29347;
count__29332_29336 = G__29348;
i__29333_29337 = G__29349;
continue;
} else {
var ns_29350 = cljs.core.first.call(null,seq__29330_29344__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29350);


var G__29351 = cljs.core.next.call(null,seq__29330_29344__$1);
var G__29352 = null;
var G__29353 = (0);
var G__29354 = (0);
seq__29330_29334 = G__29351;
chunk__29331_29335 = G__29352;
count__29332_29336 = G__29353;
i__29333_29337 = G__29354;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__29355__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29355 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29356__i = 0, G__29356__a = new Array(arguments.length -  0);
while (G__29356__i < G__29356__a.length) {G__29356__a[G__29356__i] = arguments[G__29356__i + 0]; ++G__29356__i;}
  args = new cljs.core.IndexedSeq(G__29356__a,0,null);
} 
return G__29355__delegate.call(this,args);};
G__29355.cljs$lang$maxFixedArity = 0;
G__29355.cljs$lang$applyTo = (function (arglist__29357){
var args = cljs.core.seq(arglist__29357);
return G__29355__delegate(args);
});
G__29355.cljs$core$IFn$_invoke$arity$variadic = G__29355__delegate;
return G__29355;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__29358_SHARP_,p2__29359_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29358_SHARP_)].join('')),p2__29359_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__29360_SHARP_,p2__29361_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29360_SHARP_)].join(''),p2__29361_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29362 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29362.addCallback(((function (G__29362){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29362))
);

G__29362.addErrback(((function (G__29362){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29362))
);

return G__29362;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29363){if((e29363 instanceof Error)){
var e = e29363;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29363;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29364){if((e29364 instanceof Error)){
var e = e29364;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29364;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29365 = cljs.core._EQ_;
var expr__29366 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29365.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29366))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29365.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29366))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29365.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29366))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29365,expr__29366){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29365,expr__29366))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29368,callback){
var map__29369 = p__29368;
var map__29369__$1 = ((((!((map__29369 == null)))?(((((map__29369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29369):map__29369);
var file_msg = map__29369__$1;
var request_url = cljs.core.get.call(null,map__29369__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29369,map__29369__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29369,map__29369__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23749__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23749__auto__){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (c__23749__auto__){
return (function (state_29407){
var state_val_29408 = (state_29407[(1)]);
if((state_val_29408 === (7))){
var inst_29403 = (state_29407[(2)]);
var state_29407__$1 = state_29407;
var statearr_29409_29435 = state_29407__$1;
(statearr_29409_29435[(2)] = inst_29403);

(statearr_29409_29435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (1))){
var state_29407__$1 = state_29407;
var statearr_29410_29436 = state_29407__$1;
(statearr_29410_29436[(2)] = null);

(statearr_29410_29436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (4))){
var inst_29373 = (state_29407[(7)]);
var inst_29373__$1 = (state_29407[(2)]);
var state_29407__$1 = (function (){var statearr_29411 = state_29407;
(statearr_29411[(7)] = inst_29373__$1);

return statearr_29411;
})();
if(cljs.core.truth_(inst_29373__$1)){
var statearr_29412_29437 = state_29407__$1;
(statearr_29412_29437[(1)] = (5));

} else {
var statearr_29413_29438 = state_29407__$1;
(statearr_29413_29438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (15))){
var inst_29386 = (state_29407[(8)]);
var inst_29388 = (state_29407[(9)]);
var inst_29390 = inst_29388.call(null,inst_29386);
var state_29407__$1 = state_29407;
var statearr_29414_29439 = state_29407__$1;
(statearr_29414_29439[(2)] = inst_29390);

(statearr_29414_29439[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (13))){
var inst_29397 = (state_29407[(2)]);
var state_29407__$1 = state_29407;
var statearr_29415_29440 = state_29407__$1;
(statearr_29415_29440[(2)] = inst_29397);

(statearr_29415_29440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (6))){
var state_29407__$1 = state_29407;
var statearr_29416_29441 = state_29407__$1;
(statearr_29416_29441[(2)] = null);

(statearr_29416_29441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (17))){
var inst_29394 = (state_29407[(2)]);
var state_29407__$1 = state_29407;
var statearr_29417_29442 = state_29407__$1;
(statearr_29417_29442[(2)] = inst_29394);

(statearr_29417_29442[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (3))){
var inst_29405 = (state_29407[(2)]);
var state_29407__$1 = state_29407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29407__$1,inst_29405);
} else {
if((state_val_29408 === (12))){
var state_29407__$1 = state_29407;
var statearr_29418_29443 = state_29407__$1;
(statearr_29418_29443[(2)] = null);

(statearr_29418_29443[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (2))){
var state_29407__$1 = state_29407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29407__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29408 === (11))){
var inst_29378 = (state_29407[(10)]);
var inst_29384 = figwheel.client.file_reloading.blocking_load.call(null,inst_29378);
var state_29407__$1 = state_29407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29407__$1,(14),inst_29384);
} else {
if((state_val_29408 === (9))){
var inst_29378 = (state_29407[(10)]);
var state_29407__$1 = state_29407;
if(cljs.core.truth_(inst_29378)){
var statearr_29419_29444 = state_29407__$1;
(statearr_29419_29444[(1)] = (11));

} else {
var statearr_29420_29445 = state_29407__$1;
(statearr_29420_29445[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (5))){
var inst_29379 = (state_29407[(11)]);
var inst_29373 = (state_29407[(7)]);
var inst_29378 = cljs.core.nth.call(null,inst_29373,(0),null);
var inst_29379__$1 = cljs.core.nth.call(null,inst_29373,(1),null);
var state_29407__$1 = (function (){var statearr_29421 = state_29407;
(statearr_29421[(11)] = inst_29379__$1);

(statearr_29421[(10)] = inst_29378);

return statearr_29421;
})();
if(cljs.core.truth_(inst_29379__$1)){
var statearr_29422_29446 = state_29407__$1;
(statearr_29422_29446[(1)] = (8));

} else {
var statearr_29423_29447 = state_29407__$1;
(statearr_29423_29447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (14))){
var inst_29378 = (state_29407[(10)]);
var inst_29388 = (state_29407[(9)]);
var inst_29386 = (state_29407[(2)]);
var inst_29387 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29388__$1 = cljs.core.get.call(null,inst_29387,inst_29378);
var state_29407__$1 = (function (){var statearr_29424 = state_29407;
(statearr_29424[(8)] = inst_29386);

(statearr_29424[(9)] = inst_29388__$1);

return statearr_29424;
})();
if(cljs.core.truth_(inst_29388__$1)){
var statearr_29425_29448 = state_29407__$1;
(statearr_29425_29448[(1)] = (15));

} else {
var statearr_29426_29449 = state_29407__$1;
(statearr_29426_29449[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (16))){
var inst_29386 = (state_29407[(8)]);
var inst_29392 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29386);
var state_29407__$1 = state_29407;
var statearr_29427_29450 = state_29407__$1;
(statearr_29427_29450[(2)] = inst_29392);

(statearr_29427_29450[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (10))){
var inst_29399 = (state_29407[(2)]);
var state_29407__$1 = (function (){var statearr_29428 = state_29407;
(statearr_29428[(12)] = inst_29399);

return statearr_29428;
})();
var statearr_29429_29451 = state_29407__$1;
(statearr_29429_29451[(2)] = null);

(statearr_29429_29451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29408 === (8))){
var inst_29379 = (state_29407[(11)]);
var inst_29381 = eval(inst_29379);
var state_29407__$1 = state_29407;
var statearr_29430_29452 = state_29407__$1;
(statearr_29430_29452[(2)] = inst_29381);

(statearr_29430_29452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23749__auto__))
;
return ((function (switch__23659__auto__,c__23749__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23660__auto__ = null;
var figwheel$client$file_reloading$state_machine__23660__auto____0 = (function (){
var statearr_29431 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29431[(0)] = figwheel$client$file_reloading$state_machine__23660__auto__);

(statearr_29431[(1)] = (1));

return statearr_29431;
});
var figwheel$client$file_reloading$state_machine__23660__auto____1 = (function (state_29407){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_29407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e29432){if((e29432 instanceof Object)){
var ex__23663__auto__ = e29432;
var statearr_29433_29453 = state_29407;
(statearr_29433_29453[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29454 = state_29407;
state_29407 = G__29454;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23660__auto__ = function(state_29407){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23660__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23660__auto____1.call(this,state_29407);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23660__auto____0;
figwheel$client$file_reloading$state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23660__auto____1;
return figwheel$client$file_reloading$state_machine__23660__auto__;
})()
;})(switch__23659__auto__,c__23749__auto__))
})();
var state__23751__auto__ = (function (){var statearr_29434 = f__23750__auto__.call(null);
(statearr_29434[(6)] = c__23749__auto__);

return statearr_29434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(c__23749__auto__))
);

return c__23749__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29456 = arguments.length;
switch (G__29456) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29458,callback){
var map__29459 = p__29458;
var map__29459__$1 = ((((!((map__29459 == null)))?(((((map__29459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29459):map__29459);
var file_msg = map__29459__$1;
var namespace = cljs.core.get.call(null,map__29459__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29459,map__29459__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29459,map__29459__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29461){
var map__29462 = p__29461;
var map__29462__$1 = ((((!((map__29462 == null)))?(((((map__29462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29462):map__29462);
var file_msg = map__29462__$1;
var namespace = cljs.core.get.call(null,map__29462__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29464){
var map__29465 = p__29464;
var map__29465__$1 = ((((!((map__29465 == null)))?(((((map__29465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29465):map__29465);
var file_msg = map__29465__$1;
var namespace = cljs.core.get.call(null,map__29465__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29467,callback){
var map__29468 = p__29467;
var map__29468__$1 = ((((!((map__29468 == null)))?(((((map__29468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29468):map__29468);
var file_msg = map__29468__$1;
var request_url = cljs.core.get.call(null,map__29468__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29468__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23749__auto___29518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23749__auto___29518,out){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (c__23749__auto___29518,out){
return (function (state_29503){
var state_val_29504 = (state_29503[(1)]);
if((state_val_29504 === (1))){
var inst_29477 = cljs.core.seq.call(null,files);
var inst_29478 = cljs.core.first.call(null,inst_29477);
var inst_29479 = cljs.core.next.call(null,inst_29477);
var inst_29480 = files;
var state_29503__$1 = (function (){var statearr_29505 = state_29503;
(statearr_29505[(7)] = inst_29479);

(statearr_29505[(8)] = inst_29478);

(statearr_29505[(9)] = inst_29480);

return statearr_29505;
})();
var statearr_29506_29519 = state_29503__$1;
(statearr_29506_29519[(2)] = null);

(statearr_29506_29519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (2))){
var inst_29486 = (state_29503[(10)]);
var inst_29480 = (state_29503[(9)]);
var inst_29485 = cljs.core.seq.call(null,inst_29480);
var inst_29486__$1 = cljs.core.first.call(null,inst_29485);
var inst_29487 = cljs.core.next.call(null,inst_29485);
var inst_29488 = (inst_29486__$1 == null);
var inst_29489 = cljs.core.not.call(null,inst_29488);
var state_29503__$1 = (function (){var statearr_29507 = state_29503;
(statearr_29507[(10)] = inst_29486__$1);

(statearr_29507[(11)] = inst_29487);

return statearr_29507;
})();
if(inst_29489){
var statearr_29508_29520 = state_29503__$1;
(statearr_29508_29520[(1)] = (4));

} else {
var statearr_29509_29521 = state_29503__$1;
(statearr_29509_29521[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (3))){
var inst_29501 = (state_29503[(2)]);
var state_29503__$1 = state_29503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29503__$1,inst_29501);
} else {
if((state_val_29504 === (4))){
var inst_29486 = (state_29503[(10)]);
var inst_29491 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29486);
var state_29503__$1 = state_29503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29503__$1,(7),inst_29491);
} else {
if((state_val_29504 === (5))){
var inst_29497 = cljs.core.async.close_BANG_.call(null,out);
var state_29503__$1 = state_29503;
var statearr_29510_29522 = state_29503__$1;
(statearr_29510_29522[(2)] = inst_29497);

(statearr_29510_29522[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (6))){
var inst_29499 = (state_29503[(2)]);
var state_29503__$1 = state_29503;
var statearr_29511_29523 = state_29503__$1;
(statearr_29511_29523[(2)] = inst_29499);

(statearr_29511_29523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (7))){
var inst_29487 = (state_29503[(11)]);
var inst_29493 = (state_29503[(2)]);
var inst_29494 = cljs.core.async.put_BANG_.call(null,out,inst_29493);
var inst_29480 = inst_29487;
var state_29503__$1 = (function (){var statearr_29512 = state_29503;
(statearr_29512[(9)] = inst_29480);

(statearr_29512[(12)] = inst_29494);

return statearr_29512;
})();
var statearr_29513_29524 = state_29503__$1;
(statearr_29513_29524[(2)] = null);

(statearr_29513_29524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__23749__auto___29518,out))
;
return ((function (switch__23659__auto__,c__23749__auto___29518,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23660__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23660__auto____0 = (function (){
var statearr_29514 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29514[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23660__auto__);

(statearr_29514[(1)] = (1));

return statearr_29514;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23660__auto____1 = (function (state_29503){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_29503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e29515){if((e29515 instanceof Object)){
var ex__23663__auto__ = e29515;
var statearr_29516_29525 = state_29503;
(statearr_29516_29525[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29526 = state_29503;
state_29503 = G__29526;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23660__auto__ = function(state_29503){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23660__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23660__auto____1.call(this,state_29503);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23660__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23660__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23660__auto__;
})()
;})(switch__23659__auto__,c__23749__auto___29518,out))
})();
var state__23751__auto__ = (function (){var statearr_29517 = f__23750__auto__.call(null);
(statearr_29517[(6)] = c__23749__auto___29518);

return statearr_29517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(c__23749__auto___29518,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29527,opts){
var map__29528 = p__29527;
var map__29528__$1 = ((((!((map__29528 == null)))?(((((map__29528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29528):map__29528);
var eval_body = cljs.core.get.call(null,map__29528__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29528__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29530){var e = e29530;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__29531_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29531_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__29532){
var vec__29533 = p__29532;
var k = cljs.core.nth.call(null,vec__29533,(0),null);
var v = cljs.core.nth.call(null,vec__29533,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29536){
var vec__29537 = p__29536;
var k = cljs.core.nth.call(null,vec__29537,(0),null);
var v = cljs.core.nth.call(null,vec__29537,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29543,p__29544){
var map__29545 = p__29543;
var map__29545__$1 = ((((!((map__29545 == null)))?(((((map__29545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29545):map__29545);
var opts = map__29545__$1;
var before_jsload = cljs.core.get.call(null,map__29545__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29545__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29545__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29546 = p__29544;
var map__29546__$1 = ((((!((map__29546 == null)))?(((((map__29546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29546):map__29546);
var msg = map__29546__$1;
var files = cljs.core.get.call(null,map__29546__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29546__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29546__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23749__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23749__auto__,map__29545,map__29545__$1,opts,before_jsload,on_jsload,reload_dependents,map__29546,map__29546__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (c__23749__auto__,map__29545,map__29545__$1,opts,before_jsload,on_jsload,reload_dependents,map__29546,map__29546__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29700){
var state_val_29701 = (state_29700[(1)]);
if((state_val_29701 === (7))){
var inst_29560 = (state_29700[(7)]);
var inst_29562 = (state_29700[(8)]);
var inst_29563 = (state_29700[(9)]);
var inst_29561 = (state_29700[(10)]);
var inst_29568 = cljs.core._nth.call(null,inst_29561,inst_29563);
var inst_29569 = figwheel.client.file_reloading.eval_body.call(null,inst_29568,opts);
var inst_29570 = (inst_29563 + (1));
var tmp29702 = inst_29560;
var tmp29703 = inst_29562;
var tmp29704 = inst_29561;
var inst_29560__$1 = tmp29702;
var inst_29561__$1 = tmp29704;
var inst_29562__$1 = tmp29703;
var inst_29563__$1 = inst_29570;
var state_29700__$1 = (function (){var statearr_29705 = state_29700;
(statearr_29705[(7)] = inst_29560__$1);

(statearr_29705[(8)] = inst_29562__$1);

(statearr_29705[(9)] = inst_29563__$1);

(statearr_29705[(10)] = inst_29561__$1);

(statearr_29705[(11)] = inst_29569);

return statearr_29705;
})();
var statearr_29706_29789 = state_29700__$1;
(statearr_29706_29789[(2)] = null);

(statearr_29706_29789[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (20))){
var inst_29603 = (state_29700[(12)]);
var inst_29611 = figwheel.client.file_reloading.sort_files.call(null,inst_29603);
var state_29700__$1 = state_29700;
var statearr_29707_29790 = state_29700__$1;
(statearr_29707_29790[(2)] = inst_29611);

(statearr_29707_29790[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (27))){
var state_29700__$1 = state_29700;
var statearr_29708_29791 = state_29700__$1;
(statearr_29708_29791[(2)] = null);

(statearr_29708_29791[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (1))){
var inst_29552 = (state_29700[(13)]);
var inst_29549 = before_jsload.call(null,files);
var inst_29550 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29551 = (function (){return ((function (inst_29552,inst_29549,inst_29550,state_val_29701,c__23749__auto__,map__29545,map__29545__$1,opts,before_jsload,on_jsload,reload_dependents,map__29546,map__29546__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29540_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29540_SHARP_);
});
;})(inst_29552,inst_29549,inst_29550,state_val_29701,c__23749__auto__,map__29545,map__29545__$1,opts,before_jsload,on_jsload,reload_dependents,map__29546,map__29546__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29552__$1 = cljs.core.filter.call(null,inst_29551,files);
var inst_29553 = cljs.core.not_empty.call(null,inst_29552__$1);
var state_29700__$1 = (function (){var statearr_29709 = state_29700;
(statearr_29709[(14)] = inst_29550);

(statearr_29709[(15)] = inst_29549);

(statearr_29709[(13)] = inst_29552__$1);

return statearr_29709;
})();
if(cljs.core.truth_(inst_29553)){
var statearr_29710_29792 = state_29700__$1;
(statearr_29710_29792[(1)] = (2));

} else {
var statearr_29711_29793 = state_29700__$1;
(statearr_29711_29793[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (24))){
var state_29700__$1 = state_29700;
var statearr_29712_29794 = state_29700__$1;
(statearr_29712_29794[(2)] = null);

(statearr_29712_29794[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (39))){
var inst_29653 = (state_29700[(16)]);
var state_29700__$1 = state_29700;
var statearr_29713_29795 = state_29700__$1;
(statearr_29713_29795[(2)] = inst_29653);

(statearr_29713_29795[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (46))){
var inst_29695 = (state_29700[(2)]);
var state_29700__$1 = state_29700;
var statearr_29714_29796 = state_29700__$1;
(statearr_29714_29796[(2)] = inst_29695);

(statearr_29714_29796[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (4))){
var inst_29597 = (state_29700[(2)]);
var inst_29598 = cljs.core.List.EMPTY;
var inst_29599 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29598);
var inst_29600 = (function (){return ((function (inst_29597,inst_29598,inst_29599,state_val_29701,c__23749__auto__,map__29545,map__29545__$1,opts,before_jsload,on_jsload,reload_dependents,map__29546,map__29546__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29541_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29541_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29541_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29541_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_29597,inst_29598,inst_29599,state_val_29701,c__23749__auto__,map__29545,map__29545__$1,opts,before_jsload,on_jsload,reload_dependents,map__29546,map__29546__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29601 = cljs.core.filter.call(null,inst_29600,files);
var inst_29602 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29603 = cljs.core.concat.call(null,inst_29601,inst_29602);
var state_29700__$1 = (function (){var statearr_29715 = state_29700;
(statearr_29715[(17)] = inst_29599);

(statearr_29715[(12)] = inst_29603);

(statearr_29715[(18)] = inst_29597);

return statearr_29715;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29716_29797 = state_29700__$1;
(statearr_29716_29797[(1)] = (16));

} else {
var statearr_29717_29798 = state_29700__$1;
(statearr_29717_29798[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (15))){
var inst_29587 = (state_29700[(2)]);
var state_29700__$1 = state_29700;
var statearr_29718_29799 = state_29700__$1;
(statearr_29718_29799[(2)] = inst_29587);

(statearr_29718_29799[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (21))){
var inst_29613 = (state_29700[(19)]);
var inst_29613__$1 = (state_29700[(2)]);
var inst_29614 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29613__$1);
var state_29700__$1 = (function (){var statearr_29719 = state_29700;
(statearr_29719[(19)] = inst_29613__$1);

return statearr_29719;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29700__$1,(22),inst_29614);
} else {
if((state_val_29701 === (31))){
var inst_29698 = (state_29700[(2)]);
var state_29700__$1 = state_29700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29700__$1,inst_29698);
} else {
if((state_val_29701 === (32))){
var inst_29653 = (state_29700[(16)]);
var inst_29658 = inst_29653.cljs$lang$protocol_mask$partition0$;
var inst_29659 = (inst_29658 & (64));
var inst_29660 = inst_29653.cljs$core$ISeq$;
var inst_29661 = (cljs.core.PROTOCOL_SENTINEL === inst_29660);
var inst_29662 = ((inst_29659) || (inst_29661));
var state_29700__$1 = state_29700;
if(cljs.core.truth_(inst_29662)){
var statearr_29720_29800 = state_29700__$1;
(statearr_29720_29800[(1)] = (35));

} else {
var statearr_29721_29801 = state_29700__$1;
(statearr_29721_29801[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (40))){
var inst_29675 = (state_29700[(20)]);
var inst_29674 = (state_29700[(2)]);
var inst_29675__$1 = cljs.core.get.call(null,inst_29674,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29676 = cljs.core.get.call(null,inst_29674,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29677 = cljs.core.not_empty.call(null,inst_29675__$1);
var state_29700__$1 = (function (){var statearr_29722 = state_29700;
(statearr_29722[(21)] = inst_29676);

(statearr_29722[(20)] = inst_29675__$1);

return statearr_29722;
})();
if(cljs.core.truth_(inst_29677)){
var statearr_29723_29802 = state_29700__$1;
(statearr_29723_29802[(1)] = (41));

} else {
var statearr_29724_29803 = state_29700__$1;
(statearr_29724_29803[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (33))){
var state_29700__$1 = state_29700;
var statearr_29725_29804 = state_29700__$1;
(statearr_29725_29804[(2)] = false);

(statearr_29725_29804[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (13))){
var inst_29573 = (state_29700[(22)]);
var inst_29577 = cljs.core.chunk_first.call(null,inst_29573);
var inst_29578 = cljs.core.chunk_rest.call(null,inst_29573);
var inst_29579 = cljs.core.count.call(null,inst_29577);
var inst_29560 = inst_29578;
var inst_29561 = inst_29577;
var inst_29562 = inst_29579;
var inst_29563 = (0);
var state_29700__$1 = (function (){var statearr_29726 = state_29700;
(statearr_29726[(7)] = inst_29560);

(statearr_29726[(8)] = inst_29562);

(statearr_29726[(9)] = inst_29563);

(statearr_29726[(10)] = inst_29561);

return statearr_29726;
})();
var statearr_29727_29805 = state_29700__$1;
(statearr_29727_29805[(2)] = null);

(statearr_29727_29805[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (22))){
var inst_29617 = (state_29700[(23)]);
var inst_29613 = (state_29700[(19)]);
var inst_29616 = (state_29700[(24)]);
var inst_29621 = (state_29700[(25)]);
var inst_29616__$1 = (state_29700[(2)]);
var inst_29617__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29616__$1);
var inst_29618 = (function (){var all_files = inst_29613;
var res_SINGLEQUOTE_ = inst_29616__$1;
var res = inst_29617__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29617,inst_29613,inst_29616,inst_29621,inst_29616__$1,inst_29617__$1,state_val_29701,c__23749__auto__,map__29545,map__29545__$1,opts,before_jsload,on_jsload,reload_dependents,map__29546,map__29546__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29542_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29542_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29617,inst_29613,inst_29616,inst_29621,inst_29616__$1,inst_29617__$1,state_val_29701,c__23749__auto__,map__29545,map__29545__$1,opts,before_jsload,on_jsload,reload_dependents,map__29546,map__29546__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29619 = cljs.core.filter.call(null,inst_29618,inst_29616__$1);
var inst_29620 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29621__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29620);
var inst_29622 = cljs.core.not_empty.call(null,inst_29621__$1);
var state_29700__$1 = (function (){var statearr_29728 = state_29700;
(statearr_29728[(23)] = inst_29617__$1);

(statearr_29728[(24)] = inst_29616__$1);

(statearr_29728[(26)] = inst_29619);

(statearr_29728[(25)] = inst_29621__$1);

return statearr_29728;
})();
if(cljs.core.truth_(inst_29622)){
var statearr_29729_29806 = state_29700__$1;
(statearr_29729_29806[(1)] = (23));

} else {
var statearr_29730_29807 = state_29700__$1;
(statearr_29730_29807[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (36))){
var state_29700__$1 = state_29700;
var statearr_29731_29808 = state_29700__$1;
(statearr_29731_29808[(2)] = false);

(statearr_29731_29808[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (41))){
var inst_29675 = (state_29700[(20)]);
var inst_29679 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29680 = cljs.core.map.call(null,inst_29679,inst_29675);
var inst_29681 = cljs.core.pr_str.call(null,inst_29680);
var inst_29682 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29681)].join('');
var inst_29683 = figwheel.client.utils.log.call(null,inst_29682);
var state_29700__$1 = state_29700;
var statearr_29732_29809 = state_29700__$1;
(statearr_29732_29809[(2)] = inst_29683);

(statearr_29732_29809[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (43))){
var inst_29676 = (state_29700[(21)]);
var inst_29686 = (state_29700[(2)]);
var inst_29687 = cljs.core.not_empty.call(null,inst_29676);
var state_29700__$1 = (function (){var statearr_29733 = state_29700;
(statearr_29733[(27)] = inst_29686);

return statearr_29733;
})();
if(cljs.core.truth_(inst_29687)){
var statearr_29734_29810 = state_29700__$1;
(statearr_29734_29810[(1)] = (44));

} else {
var statearr_29735_29811 = state_29700__$1;
(statearr_29735_29811[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (29))){
var inst_29617 = (state_29700[(23)]);
var inst_29613 = (state_29700[(19)]);
var inst_29653 = (state_29700[(16)]);
var inst_29616 = (state_29700[(24)]);
var inst_29619 = (state_29700[(26)]);
var inst_29621 = (state_29700[(25)]);
var inst_29649 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29652 = (function (){var all_files = inst_29613;
var res_SINGLEQUOTE_ = inst_29616;
var res = inst_29617;
var files_not_loaded = inst_29619;
var dependencies_that_loaded = inst_29621;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29617,inst_29613,inst_29653,inst_29616,inst_29619,inst_29621,inst_29649,state_val_29701,c__23749__auto__,map__29545,map__29545__$1,opts,before_jsload,on_jsload,reload_dependents,map__29546,map__29546__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29651){
var map__29736 = p__29651;
var map__29736__$1 = ((((!((map__29736 == null)))?(((((map__29736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29736):map__29736);
var namespace = cljs.core.get.call(null,map__29736__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29617,inst_29613,inst_29653,inst_29616,inst_29619,inst_29621,inst_29649,state_val_29701,c__23749__auto__,map__29545,map__29545__$1,opts,before_jsload,on_jsload,reload_dependents,map__29546,map__29546__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29653__$1 = cljs.core.group_by.call(null,inst_29652,inst_29619);
var inst_29655 = (inst_29653__$1 == null);
var inst_29656 = cljs.core.not.call(null,inst_29655);
var state_29700__$1 = (function (){var statearr_29738 = state_29700;
(statearr_29738[(28)] = inst_29649);

(statearr_29738[(16)] = inst_29653__$1);

return statearr_29738;
})();
if(inst_29656){
var statearr_29739_29812 = state_29700__$1;
(statearr_29739_29812[(1)] = (32));

} else {
var statearr_29740_29813 = state_29700__$1;
(statearr_29740_29813[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (44))){
var inst_29676 = (state_29700[(21)]);
var inst_29689 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29676);
var inst_29690 = cljs.core.pr_str.call(null,inst_29689);
var inst_29691 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29690)].join('');
var inst_29692 = figwheel.client.utils.log.call(null,inst_29691);
var state_29700__$1 = state_29700;
var statearr_29741_29814 = state_29700__$1;
(statearr_29741_29814[(2)] = inst_29692);

(statearr_29741_29814[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (6))){
var inst_29594 = (state_29700[(2)]);
var state_29700__$1 = state_29700;
var statearr_29742_29815 = state_29700__$1;
(statearr_29742_29815[(2)] = inst_29594);

(statearr_29742_29815[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (28))){
var inst_29619 = (state_29700[(26)]);
var inst_29646 = (state_29700[(2)]);
var inst_29647 = cljs.core.not_empty.call(null,inst_29619);
var state_29700__$1 = (function (){var statearr_29743 = state_29700;
(statearr_29743[(29)] = inst_29646);

return statearr_29743;
})();
if(cljs.core.truth_(inst_29647)){
var statearr_29744_29816 = state_29700__$1;
(statearr_29744_29816[(1)] = (29));

} else {
var statearr_29745_29817 = state_29700__$1;
(statearr_29745_29817[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (25))){
var inst_29617 = (state_29700[(23)]);
var inst_29633 = (state_29700[(2)]);
var inst_29634 = cljs.core.not_empty.call(null,inst_29617);
var state_29700__$1 = (function (){var statearr_29746 = state_29700;
(statearr_29746[(30)] = inst_29633);

return statearr_29746;
})();
if(cljs.core.truth_(inst_29634)){
var statearr_29747_29818 = state_29700__$1;
(statearr_29747_29818[(1)] = (26));

} else {
var statearr_29748_29819 = state_29700__$1;
(statearr_29748_29819[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (34))){
var inst_29669 = (state_29700[(2)]);
var state_29700__$1 = state_29700;
if(cljs.core.truth_(inst_29669)){
var statearr_29749_29820 = state_29700__$1;
(statearr_29749_29820[(1)] = (38));

} else {
var statearr_29750_29821 = state_29700__$1;
(statearr_29750_29821[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (17))){
var state_29700__$1 = state_29700;
var statearr_29751_29822 = state_29700__$1;
(statearr_29751_29822[(2)] = recompile_dependents);

(statearr_29751_29822[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (3))){
var state_29700__$1 = state_29700;
var statearr_29752_29823 = state_29700__$1;
(statearr_29752_29823[(2)] = null);

(statearr_29752_29823[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (12))){
var inst_29590 = (state_29700[(2)]);
var state_29700__$1 = state_29700;
var statearr_29753_29824 = state_29700__$1;
(statearr_29753_29824[(2)] = inst_29590);

(statearr_29753_29824[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (2))){
var inst_29552 = (state_29700[(13)]);
var inst_29559 = cljs.core.seq.call(null,inst_29552);
var inst_29560 = inst_29559;
var inst_29561 = null;
var inst_29562 = (0);
var inst_29563 = (0);
var state_29700__$1 = (function (){var statearr_29754 = state_29700;
(statearr_29754[(7)] = inst_29560);

(statearr_29754[(8)] = inst_29562);

(statearr_29754[(9)] = inst_29563);

(statearr_29754[(10)] = inst_29561);

return statearr_29754;
})();
var statearr_29755_29825 = state_29700__$1;
(statearr_29755_29825[(2)] = null);

(statearr_29755_29825[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (23))){
var inst_29617 = (state_29700[(23)]);
var inst_29613 = (state_29700[(19)]);
var inst_29616 = (state_29700[(24)]);
var inst_29619 = (state_29700[(26)]);
var inst_29621 = (state_29700[(25)]);
var inst_29624 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29626 = (function (){var all_files = inst_29613;
var res_SINGLEQUOTE_ = inst_29616;
var res = inst_29617;
var files_not_loaded = inst_29619;
var dependencies_that_loaded = inst_29621;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29617,inst_29613,inst_29616,inst_29619,inst_29621,inst_29624,state_val_29701,c__23749__auto__,map__29545,map__29545__$1,opts,before_jsload,on_jsload,reload_dependents,map__29546,map__29546__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29625){
var map__29756 = p__29625;
var map__29756__$1 = ((((!((map__29756 == null)))?(((((map__29756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29756):map__29756);
var request_url = cljs.core.get.call(null,map__29756__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29617,inst_29613,inst_29616,inst_29619,inst_29621,inst_29624,state_val_29701,c__23749__auto__,map__29545,map__29545__$1,opts,before_jsload,on_jsload,reload_dependents,map__29546,map__29546__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29627 = cljs.core.reverse.call(null,inst_29621);
var inst_29628 = cljs.core.map.call(null,inst_29626,inst_29627);
var inst_29629 = cljs.core.pr_str.call(null,inst_29628);
var inst_29630 = figwheel.client.utils.log.call(null,inst_29629);
var state_29700__$1 = (function (){var statearr_29758 = state_29700;
(statearr_29758[(31)] = inst_29624);

return statearr_29758;
})();
var statearr_29759_29826 = state_29700__$1;
(statearr_29759_29826[(2)] = inst_29630);

(statearr_29759_29826[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (35))){
var state_29700__$1 = state_29700;
var statearr_29760_29827 = state_29700__$1;
(statearr_29760_29827[(2)] = true);

(statearr_29760_29827[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (19))){
var inst_29603 = (state_29700[(12)]);
var inst_29609 = figwheel.client.file_reloading.expand_files.call(null,inst_29603);
var state_29700__$1 = state_29700;
var statearr_29761_29828 = state_29700__$1;
(statearr_29761_29828[(2)] = inst_29609);

(statearr_29761_29828[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (11))){
var state_29700__$1 = state_29700;
var statearr_29762_29829 = state_29700__$1;
(statearr_29762_29829[(2)] = null);

(statearr_29762_29829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (9))){
var inst_29592 = (state_29700[(2)]);
var state_29700__$1 = state_29700;
var statearr_29763_29830 = state_29700__$1;
(statearr_29763_29830[(2)] = inst_29592);

(statearr_29763_29830[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (5))){
var inst_29562 = (state_29700[(8)]);
var inst_29563 = (state_29700[(9)]);
var inst_29565 = (inst_29563 < inst_29562);
var inst_29566 = inst_29565;
var state_29700__$1 = state_29700;
if(cljs.core.truth_(inst_29566)){
var statearr_29764_29831 = state_29700__$1;
(statearr_29764_29831[(1)] = (7));

} else {
var statearr_29765_29832 = state_29700__$1;
(statearr_29765_29832[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (14))){
var inst_29573 = (state_29700[(22)]);
var inst_29582 = cljs.core.first.call(null,inst_29573);
var inst_29583 = figwheel.client.file_reloading.eval_body.call(null,inst_29582,opts);
var inst_29584 = cljs.core.next.call(null,inst_29573);
var inst_29560 = inst_29584;
var inst_29561 = null;
var inst_29562 = (0);
var inst_29563 = (0);
var state_29700__$1 = (function (){var statearr_29766 = state_29700;
(statearr_29766[(7)] = inst_29560);

(statearr_29766[(8)] = inst_29562);

(statearr_29766[(9)] = inst_29563);

(statearr_29766[(10)] = inst_29561);

(statearr_29766[(32)] = inst_29583);

return statearr_29766;
})();
var statearr_29767_29833 = state_29700__$1;
(statearr_29767_29833[(2)] = null);

(statearr_29767_29833[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (45))){
var state_29700__$1 = state_29700;
var statearr_29768_29834 = state_29700__$1;
(statearr_29768_29834[(2)] = null);

(statearr_29768_29834[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (26))){
var inst_29617 = (state_29700[(23)]);
var inst_29613 = (state_29700[(19)]);
var inst_29616 = (state_29700[(24)]);
var inst_29619 = (state_29700[(26)]);
var inst_29621 = (state_29700[(25)]);
var inst_29636 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29638 = (function (){var all_files = inst_29613;
var res_SINGLEQUOTE_ = inst_29616;
var res = inst_29617;
var files_not_loaded = inst_29619;
var dependencies_that_loaded = inst_29621;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29617,inst_29613,inst_29616,inst_29619,inst_29621,inst_29636,state_val_29701,c__23749__auto__,map__29545,map__29545__$1,opts,before_jsload,on_jsload,reload_dependents,map__29546,map__29546__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29637){
var map__29769 = p__29637;
var map__29769__$1 = ((((!((map__29769 == null)))?(((((map__29769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29769):map__29769);
var namespace = cljs.core.get.call(null,map__29769__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29769__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29617,inst_29613,inst_29616,inst_29619,inst_29621,inst_29636,state_val_29701,c__23749__auto__,map__29545,map__29545__$1,opts,before_jsload,on_jsload,reload_dependents,map__29546,map__29546__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29639 = cljs.core.map.call(null,inst_29638,inst_29617);
var inst_29640 = cljs.core.pr_str.call(null,inst_29639);
var inst_29641 = figwheel.client.utils.log.call(null,inst_29640);
var inst_29642 = (function (){var all_files = inst_29613;
var res_SINGLEQUOTE_ = inst_29616;
var res = inst_29617;
var files_not_loaded = inst_29619;
var dependencies_that_loaded = inst_29621;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29617,inst_29613,inst_29616,inst_29619,inst_29621,inst_29636,inst_29638,inst_29639,inst_29640,inst_29641,state_val_29701,c__23749__auto__,map__29545,map__29545__$1,opts,before_jsload,on_jsload,reload_dependents,map__29546,map__29546__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29617,inst_29613,inst_29616,inst_29619,inst_29621,inst_29636,inst_29638,inst_29639,inst_29640,inst_29641,state_val_29701,c__23749__auto__,map__29545,map__29545__$1,opts,before_jsload,on_jsload,reload_dependents,map__29546,map__29546__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29643 = setTimeout(inst_29642,(10));
var state_29700__$1 = (function (){var statearr_29771 = state_29700;
(statearr_29771[(33)] = inst_29641);

(statearr_29771[(34)] = inst_29636);

return statearr_29771;
})();
var statearr_29772_29835 = state_29700__$1;
(statearr_29772_29835[(2)] = inst_29643);

(statearr_29772_29835[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (16))){
var state_29700__$1 = state_29700;
var statearr_29773_29836 = state_29700__$1;
(statearr_29773_29836[(2)] = reload_dependents);

(statearr_29773_29836[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (38))){
var inst_29653 = (state_29700[(16)]);
var inst_29671 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29653);
var state_29700__$1 = state_29700;
var statearr_29774_29837 = state_29700__$1;
(statearr_29774_29837[(2)] = inst_29671);

(statearr_29774_29837[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (30))){
var state_29700__$1 = state_29700;
var statearr_29775_29838 = state_29700__$1;
(statearr_29775_29838[(2)] = null);

(statearr_29775_29838[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (10))){
var inst_29573 = (state_29700[(22)]);
var inst_29575 = cljs.core.chunked_seq_QMARK_.call(null,inst_29573);
var state_29700__$1 = state_29700;
if(inst_29575){
var statearr_29776_29839 = state_29700__$1;
(statearr_29776_29839[(1)] = (13));

} else {
var statearr_29777_29840 = state_29700__$1;
(statearr_29777_29840[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (18))){
var inst_29607 = (state_29700[(2)]);
var state_29700__$1 = state_29700;
if(cljs.core.truth_(inst_29607)){
var statearr_29778_29841 = state_29700__$1;
(statearr_29778_29841[(1)] = (19));

} else {
var statearr_29779_29842 = state_29700__$1;
(statearr_29779_29842[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (42))){
var state_29700__$1 = state_29700;
var statearr_29780_29843 = state_29700__$1;
(statearr_29780_29843[(2)] = null);

(statearr_29780_29843[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (37))){
var inst_29666 = (state_29700[(2)]);
var state_29700__$1 = state_29700;
var statearr_29781_29844 = state_29700__$1;
(statearr_29781_29844[(2)] = inst_29666);

(statearr_29781_29844[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (8))){
var inst_29560 = (state_29700[(7)]);
var inst_29573 = (state_29700[(22)]);
var inst_29573__$1 = cljs.core.seq.call(null,inst_29560);
var state_29700__$1 = (function (){var statearr_29782 = state_29700;
(statearr_29782[(22)] = inst_29573__$1);

return statearr_29782;
})();
if(inst_29573__$1){
var statearr_29783_29845 = state_29700__$1;
(statearr_29783_29845[(1)] = (10));

} else {
var statearr_29784_29846 = state_29700__$1;
(statearr_29784_29846[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23749__auto__,map__29545,map__29545__$1,opts,before_jsload,on_jsload,reload_dependents,map__29546,map__29546__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23659__auto__,c__23749__auto__,map__29545,map__29545__$1,opts,before_jsload,on_jsload,reload_dependents,map__29546,map__29546__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23660__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23660__auto____0 = (function (){
var statearr_29785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29785[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23660__auto__);

(statearr_29785[(1)] = (1));

return statearr_29785;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23660__auto____1 = (function (state_29700){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_29700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e29786){if((e29786 instanceof Object)){
var ex__23663__auto__ = e29786;
var statearr_29787_29847 = state_29700;
(statearr_29787_29847[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29848 = state_29700;
state_29700 = G__29848;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23660__auto__ = function(state_29700){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23660__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23660__auto____1.call(this,state_29700);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23660__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23660__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23660__auto__;
})()
;})(switch__23659__auto__,c__23749__auto__,map__29545,map__29545__$1,opts,before_jsload,on_jsload,reload_dependents,map__29546,map__29546__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23751__auto__ = (function (){var statearr_29788 = f__23750__auto__.call(null);
(statearr_29788[(6)] = c__23749__auto__);

return statearr_29788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(c__23749__auto__,map__29545,map__29545__$1,opts,before_jsload,on_jsload,reload_dependents,map__29546,map__29546__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23749__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29851,link){
var map__29852 = p__29851;
var map__29852__$1 = ((((!((map__29852 == null)))?(((((map__29852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29852):map__29852);
var file = cljs.core.get.call(null,map__29852__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__29852,map__29852__$1,file){
return (function (p1__29849_SHARP_,p2__29850_SHARP_){
if(cljs.core._EQ_.call(null,p1__29849_SHARP_,p2__29850_SHARP_)){
return p1__29849_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__29852,map__29852__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29855){
var map__29856 = p__29855;
var map__29856__$1 = ((((!((map__29856 == null)))?(((((map__29856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29856):map__29856);
var match_length = cljs.core.get.call(null,map__29856__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29856__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29854_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29854_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29858_SHARP_,p2__29859_SHARP_){
return cljs.core.assoc.call(null,p1__29858_SHARP_,cljs.core.get.call(null,p2__29859_SHARP_,key),p2__29859_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29860 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29860);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29860);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29861,p__29862){
var map__29863 = p__29861;
var map__29863__$1 = ((((!((map__29863 == null)))?(((((map__29863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29863):map__29863);
var on_cssload = cljs.core.get.call(null,map__29863__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29864 = p__29862;
var map__29864__$1 = ((((!((map__29864 == null)))?(((((map__29864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29864):map__29864);
var files_msg = map__29864__$1;
var files = cljs.core.get.call(null,map__29864__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1557924422739
