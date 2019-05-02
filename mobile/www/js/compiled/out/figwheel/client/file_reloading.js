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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29200_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29200_SHARP_));
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
var seq__29201 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29202 = null;
var count__29203 = (0);
var i__29204 = (0);
while(true){
if((i__29204 < count__29203)){
var n = cljs.core._nth.call(null,chunk__29202,i__29204);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29205 = seq__29201;
var G__29206 = chunk__29202;
var G__29207 = count__29203;
var G__29208 = (i__29204 + (1));
seq__29201 = G__29205;
chunk__29202 = G__29206;
count__29203 = G__29207;
i__29204 = G__29208;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29201);
if(temp__5457__auto__){
var seq__29201__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29201__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29201__$1);
var G__29209 = cljs.core.chunk_rest.call(null,seq__29201__$1);
var G__29210 = c__4319__auto__;
var G__29211 = cljs.core.count.call(null,c__4319__auto__);
var G__29212 = (0);
seq__29201 = G__29209;
chunk__29202 = G__29210;
count__29203 = G__29211;
i__29204 = G__29212;
continue;
} else {
var n = cljs.core.first.call(null,seq__29201__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29213 = cljs.core.next.call(null,seq__29201__$1);
var G__29214 = null;
var G__29215 = (0);
var G__29216 = (0);
seq__29201 = G__29213;
chunk__29202 = G__29214;
count__29203 = G__29215;
i__29204 = G__29216;
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
return cljs.core.some.call(null,(function (p__29217){
var vec__29218 = p__29217;
var _ = cljs.core.nth.call(null,vec__29218,(0),null);
var v = cljs.core.nth.call(null,vec__29218,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__29221){
var vec__29222 = p__29221;
var k = cljs.core.nth.call(null,vec__29222,(0),null);
var v = cljs.core.nth.call(null,vec__29222,(1),null);
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

var seq__29234_29242 = cljs.core.seq.call(null,deps);
var chunk__29235_29243 = null;
var count__29236_29244 = (0);
var i__29237_29245 = (0);
while(true){
if((i__29237_29245 < count__29236_29244)){
var dep_29246 = cljs.core._nth.call(null,chunk__29235_29243,i__29237_29245);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29246;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29246));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29246,(depth + (1)),state);
} else {
}


var G__29247 = seq__29234_29242;
var G__29248 = chunk__29235_29243;
var G__29249 = count__29236_29244;
var G__29250 = (i__29237_29245 + (1));
seq__29234_29242 = G__29247;
chunk__29235_29243 = G__29248;
count__29236_29244 = G__29249;
i__29237_29245 = G__29250;
continue;
} else {
var temp__5457__auto___29251 = cljs.core.seq.call(null,seq__29234_29242);
if(temp__5457__auto___29251){
var seq__29234_29252__$1 = temp__5457__auto___29251;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29234_29252__$1)){
var c__4319__auto___29253 = cljs.core.chunk_first.call(null,seq__29234_29252__$1);
var G__29254 = cljs.core.chunk_rest.call(null,seq__29234_29252__$1);
var G__29255 = c__4319__auto___29253;
var G__29256 = cljs.core.count.call(null,c__4319__auto___29253);
var G__29257 = (0);
seq__29234_29242 = G__29254;
chunk__29235_29243 = G__29255;
count__29236_29244 = G__29256;
i__29237_29245 = G__29257;
continue;
} else {
var dep_29258 = cljs.core.first.call(null,seq__29234_29252__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29258;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29258));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29258,(depth + (1)),state);
} else {
}


var G__29259 = cljs.core.next.call(null,seq__29234_29252__$1);
var G__29260 = null;
var G__29261 = (0);
var G__29262 = (0);
seq__29234_29242 = G__29259;
chunk__29235_29243 = G__29260;
count__29236_29244 = G__29261;
i__29237_29245 = G__29262;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29238){
var vec__29239 = p__29238;
var seq__29240 = cljs.core.seq.call(null,vec__29239);
var first__29241 = cljs.core.first.call(null,seq__29240);
var seq__29240__$1 = cljs.core.next.call(null,seq__29240);
var x = first__29241;
var xs = seq__29240__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29239,seq__29240,first__29241,seq__29240__$1,x,xs,get_deps__$1){
return (function (p1__29225_SHARP_){
return clojure.set.difference.call(null,p1__29225_SHARP_,x);
});})(vec__29239,seq__29240,first__29241,seq__29240__$1,x,xs,get_deps__$1))
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
var seq__29263 = cljs.core.seq.call(null,provides);
var chunk__29264 = null;
var count__29265 = (0);
var i__29266 = (0);
while(true){
if((i__29266 < count__29265)){
var prov = cljs.core._nth.call(null,chunk__29264,i__29266);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29267_29275 = cljs.core.seq.call(null,requires);
var chunk__29268_29276 = null;
var count__29269_29277 = (0);
var i__29270_29278 = (0);
while(true){
if((i__29270_29278 < count__29269_29277)){
var req_29279 = cljs.core._nth.call(null,chunk__29268_29276,i__29270_29278);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29279,prov);


var G__29280 = seq__29267_29275;
var G__29281 = chunk__29268_29276;
var G__29282 = count__29269_29277;
var G__29283 = (i__29270_29278 + (1));
seq__29267_29275 = G__29280;
chunk__29268_29276 = G__29281;
count__29269_29277 = G__29282;
i__29270_29278 = G__29283;
continue;
} else {
var temp__5457__auto___29284 = cljs.core.seq.call(null,seq__29267_29275);
if(temp__5457__auto___29284){
var seq__29267_29285__$1 = temp__5457__auto___29284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29267_29285__$1)){
var c__4319__auto___29286 = cljs.core.chunk_first.call(null,seq__29267_29285__$1);
var G__29287 = cljs.core.chunk_rest.call(null,seq__29267_29285__$1);
var G__29288 = c__4319__auto___29286;
var G__29289 = cljs.core.count.call(null,c__4319__auto___29286);
var G__29290 = (0);
seq__29267_29275 = G__29287;
chunk__29268_29276 = G__29288;
count__29269_29277 = G__29289;
i__29270_29278 = G__29290;
continue;
} else {
var req_29291 = cljs.core.first.call(null,seq__29267_29285__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29291,prov);


var G__29292 = cljs.core.next.call(null,seq__29267_29285__$1);
var G__29293 = null;
var G__29294 = (0);
var G__29295 = (0);
seq__29267_29275 = G__29292;
chunk__29268_29276 = G__29293;
count__29269_29277 = G__29294;
i__29270_29278 = G__29295;
continue;
}
} else {
}
}
break;
}


var G__29296 = seq__29263;
var G__29297 = chunk__29264;
var G__29298 = count__29265;
var G__29299 = (i__29266 + (1));
seq__29263 = G__29296;
chunk__29264 = G__29297;
count__29265 = G__29298;
i__29266 = G__29299;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29263);
if(temp__5457__auto__){
var seq__29263__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29263__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29263__$1);
var G__29300 = cljs.core.chunk_rest.call(null,seq__29263__$1);
var G__29301 = c__4319__auto__;
var G__29302 = cljs.core.count.call(null,c__4319__auto__);
var G__29303 = (0);
seq__29263 = G__29300;
chunk__29264 = G__29301;
count__29265 = G__29302;
i__29266 = G__29303;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29263__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29271_29304 = cljs.core.seq.call(null,requires);
var chunk__29272_29305 = null;
var count__29273_29306 = (0);
var i__29274_29307 = (0);
while(true){
if((i__29274_29307 < count__29273_29306)){
var req_29308 = cljs.core._nth.call(null,chunk__29272_29305,i__29274_29307);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29308,prov);


var G__29309 = seq__29271_29304;
var G__29310 = chunk__29272_29305;
var G__29311 = count__29273_29306;
var G__29312 = (i__29274_29307 + (1));
seq__29271_29304 = G__29309;
chunk__29272_29305 = G__29310;
count__29273_29306 = G__29311;
i__29274_29307 = G__29312;
continue;
} else {
var temp__5457__auto___29313__$1 = cljs.core.seq.call(null,seq__29271_29304);
if(temp__5457__auto___29313__$1){
var seq__29271_29314__$1 = temp__5457__auto___29313__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29271_29314__$1)){
var c__4319__auto___29315 = cljs.core.chunk_first.call(null,seq__29271_29314__$1);
var G__29316 = cljs.core.chunk_rest.call(null,seq__29271_29314__$1);
var G__29317 = c__4319__auto___29315;
var G__29318 = cljs.core.count.call(null,c__4319__auto___29315);
var G__29319 = (0);
seq__29271_29304 = G__29316;
chunk__29272_29305 = G__29317;
count__29273_29306 = G__29318;
i__29274_29307 = G__29319;
continue;
} else {
var req_29320 = cljs.core.first.call(null,seq__29271_29314__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29320,prov);


var G__29321 = cljs.core.next.call(null,seq__29271_29314__$1);
var G__29322 = null;
var G__29323 = (0);
var G__29324 = (0);
seq__29271_29304 = G__29321;
chunk__29272_29305 = G__29322;
count__29273_29306 = G__29323;
i__29274_29307 = G__29324;
continue;
}
} else {
}
}
break;
}


var G__29325 = cljs.core.next.call(null,seq__29263__$1);
var G__29326 = null;
var G__29327 = (0);
var G__29328 = (0);
seq__29263 = G__29325;
chunk__29264 = G__29326;
count__29265 = G__29327;
i__29266 = G__29328;
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
var seq__29329_29333 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29330_29334 = null;
var count__29331_29335 = (0);
var i__29332_29336 = (0);
while(true){
if((i__29332_29336 < count__29331_29335)){
var ns_29337 = cljs.core._nth.call(null,chunk__29330_29334,i__29332_29336);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29337);


var G__29338 = seq__29329_29333;
var G__29339 = chunk__29330_29334;
var G__29340 = count__29331_29335;
var G__29341 = (i__29332_29336 + (1));
seq__29329_29333 = G__29338;
chunk__29330_29334 = G__29339;
count__29331_29335 = G__29340;
i__29332_29336 = G__29341;
continue;
} else {
var temp__5457__auto___29342 = cljs.core.seq.call(null,seq__29329_29333);
if(temp__5457__auto___29342){
var seq__29329_29343__$1 = temp__5457__auto___29342;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29329_29343__$1)){
var c__4319__auto___29344 = cljs.core.chunk_first.call(null,seq__29329_29343__$1);
var G__29345 = cljs.core.chunk_rest.call(null,seq__29329_29343__$1);
var G__29346 = c__4319__auto___29344;
var G__29347 = cljs.core.count.call(null,c__4319__auto___29344);
var G__29348 = (0);
seq__29329_29333 = G__29345;
chunk__29330_29334 = G__29346;
count__29331_29335 = G__29347;
i__29332_29336 = G__29348;
continue;
} else {
var ns_29349 = cljs.core.first.call(null,seq__29329_29343__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29349);


var G__29350 = cljs.core.next.call(null,seq__29329_29343__$1);
var G__29351 = null;
var G__29352 = (0);
var G__29353 = (0);
seq__29329_29333 = G__29350;
chunk__29330_29334 = G__29351;
count__29331_29335 = G__29352;
i__29332_29336 = G__29353;
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
var G__29354__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29354 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29355__i = 0, G__29355__a = new Array(arguments.length -  0);
while (G__29355__i < G__29355__a.length) {G__29355__a[G__29355__i] = arguments[G__29355__i + 0]; ++G__29355__i;}
  args = new cljs.core.IndexedSeq(G__29355__a,0,null);
} 
return G__29354__delegate.call(this,args);};
G__29354.cljs$lang$maxFixedArity = 0;
G__29354.cljs$lang$applyTo = (function (arglist__29356){
var args = cljs.core.seq(arglist__29356);
return G__29354__delegate(args);
});
G__29354.cljs$core$IFn$_invoke$arity$variadic = G__29354__delegate;
return G__29354;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__29357_SHARP_,p2__29358_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29357_SHARP_)].join('')),p2__29358_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__29359_SHARP_,p2__29360_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29359_SHARP_)].join(''),p2__29360_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29361 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29361.addCallback(((function (G__29361){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29361))
);

G__29361.addErrback(((function (G__29361){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29361))
);

return G__29361;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29362){if((e29362 instanceof Error)){
var e = e29362;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29362;

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
}catch (e29363){if((e29363 instanceof Error)){
var e = e29363;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29363;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29364 = cljs.core._EQ_;
var expr__29365 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29364.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29365))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29364.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29365))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29364.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29365))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29364,expr__29365){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29364,expr__29365))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29367,callback){
var map__29368 = p__29367;
var map__29368__$1 = ((((!((map__29368 == null)))?(((((map__29368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29368):map__29368);
var file_msg = map__29368__$1;
var request_url = cljs.core.get.call(null,map__29368__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29368,map__29368__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29368,map__29368__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__23748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto__){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto__){
return (function (state_29406){
var state_val_29407 = (state_29406[(1)]);
if((state_val_29407 === (7))){
var inst_29402 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
var statearr_29408_29434 = state_29406__$1;
(statearr_29408_29434[(2)] = inst_29402);

(statearr_29408_29434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (1))){
var state_29406__$1 = state_29406;
var statearr_29409_29435 = state_29406__$1;
(statearr_29409_29435[(2)] = null);

(statearr_29409_29435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (4))){
var inst_29372 = (state_29406[(7)]);
var inst_29372__$1 = (state_29406[(2)]);
var state_29406__$1 = (function (){var statearr_29410 = state_29406;
(statearr_29410[(7)] = inst_29372__$1);

return statearr_29410;
})();
if(cljs.core.truth_(inst_29372__$1)){
var statearr_29411_29436 = state_29406__$1;
(statearr_29411_29436[(1)] = (5));

} else {
var statearr_29412_29437 = state_29406__$1;
(statearr_29412_29437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (15))){
var inst_29387 = (state_29406[(8)]);
var inst_29385 = (state_29406[(9)]);
var inst_29389 = inst_29387.call(null,inst_29385);
var state_29406__$1 = state_29406;
var statearr_29413_29438 = state_29406__$1;
(statearr_29413_29438[(2)] = inst_29389);

(statearr_29413_29438[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (13))){
var inst_29396 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
var statearr_29414_29439 = state_29406__$1;
(statearr_29414_29439[(2)] = inst_29396);

(statearr_29414_29439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (6))){
var state_29406__$1 = state_29406;
var statearr_29415_29440 = state_29406__$1;
(statearr_29415_29440[(2)] = null);

(statearr_29415_29440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (17))){
var inst_29393 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
var statearr_29416_29441 = state_29406__$1;
(statearr_29416_29441[(2)] = inst_29393);

(statearr_29416_29441[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (3))){
var inst_29404 = (state_29406[(2)]);
var state_29406__$1 = state_29406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29406__$1,inst_29404);
} else {
if((state_val_29407 === (12))){
var state_29406__$1 = state_29406;
var statearr_29417_29442 = state_29406__$1;
(statearr_29417_29442[(2)] = null);

(statearr_29417_29442[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (2))){
var state_29406__$1 = state_29406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29406__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29407 === (11))){
var inst_29377 = (state_29406[(10)]);
var inst_29383 = figwheel.client.file_reloading.blocking_load.call(null,inst_29377);
var state_29406__$1 = state_29406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29406__$1,(14),inst_29383);
} else {
if((state_val_29407 === (9))){
var inst_29377 = (state_29406[(10)]);
var state_29406__$1 = state_29406;
if(cljs.core.truth_(inst_29377)){
var statearr_29418_29443 = state_29406__$1;
(statearr_29418_29443[(1)] = (11));

} else {
var statearr_29419_29444 = state_29406__$1;
(statearr_29419_29444[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (5))){
var inst_29372 = (state_29406[(7)]);
var inst_29378 = (state_29406[(11)]);
var inst_29377 = cljs.core.nth.call(null,inst_29372,(0),null);
var inst_29378__$1 = cljs.core.nth.call(null,inst_29372,(1),null);
var state_29406__$1 = (function (){var statearr_29420 = state_29406;
(statearr_29420[(10)] = inst_29377);

(statearr_29420[(11)] = inst_29378__$1);

return statearr_29420;
})();
if(cljs.core.truth_(inst_29378__$1)){
var statearr_29421_29445 = state_29406__$1;
(statearr_29421_29445[(1)] = (8));

} else {
var statearr_29422_29446 = state_29406__$1;
(statearr_29422_29446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (14))){
var inst_29377 = (state_29406[(10)]);
var inst_29387 = (state_29406[(8)]);
var inst_29385 = (state_29406[(2)]);
var inst_29386 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29387__$1 = cljs.core.get.call(null,inst_29386,inst_29377);
var state_29406__$1 = (function (){var statearr_29423 = state_29406;
(statearr_29423[(8)] = inst_29387__$1);

(statearr_29423[(9)] = inst_29385);

return statearr_29423;
})();
if(cljs.core.truth_(inst_29387__$1)){
var statearr_29424_29447 = state_29406__$1;
(statearr_29424_29447[(1)] = (15));

} else {
var statearr_29425_29448 = state_29406__$1;
(statearr_29425_29448[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (16))){
var inst_29385 = (state_29406[(9)]);
var inst_29391 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29385);
var state_29406__$1 = state_29406;
var statearr_29426_29449 = state_29406__$1;
(statearr_29426_29449[(2)] = inst_29391);

(statearr_29426_29449[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (10))){
var inst_29398 = (state_29406[(2)]);
var state_29406__$1 = (function (){var statearr_29427 = state_29406;
(statearr_29427[(12)] = inst_29398);

return statearr_29427;
})();
var statearr_29428_29450 = state_29406__$1;
(statearr_29428_29450[(2)] = null);

(statearr_29428_29450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29407 === (8))){
var inst_29378 = (state_29406[(11)]);
var inst_29380 = eval(inst_29378);
var state_29406__$1 = state_29406;
var statearr_29429_29451 = state_29406__$1;
(statearr_29429_29451[(2)] = inst_29380);

(statearr_29429_29451[(1)] = (10));


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
});})(c__23748__auto__))
;
return ((function (switch__23658__auto__,c__23748__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23659__auto__ = null;
var figwheel$client$file_reloading$state_machine__23659__auto____0 = (function (){
var statearr_29430 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29430[(0)] = figwheel$client$file_reloading$state_machine__23659__auto__);

(statearr_29430[(1)] = (1));

return statearr_29430;
});
var figwheel$client$file_reloading$state_machine__23659__auto____1 = (function (state_29406){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_29406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e29431){if((e29431 instanceof Object)){
var ex__23662__auto__ = e29431;
var statearr_29432_29452 = state_29406;
(statearr_29432_29452[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29453 = state_29406;
state_29406 = G__29453;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23659__auto__ = function(state_29406){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23659__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23659__auto____1.call(this,state_29406);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23659__auto____0;
figwheel$client$file_reloading$state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23659__auto____1;
return figwheel$client$file_reloading$state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto__))
})();
var state__23750__auto__ = (function (){var statearr_29433 = f__23749__auto__.call(null);
(statearr_29433[(6)] = c__23748__auto__);

return statearr_29433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto__))
);

return c__23748__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29455 = arguments.length;
switch (G__29455) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29457,callback){
var map__29458 = p__29457;
var map__29458__$1 = ((((!((map__29458 == null)))?(((((map__29458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29458):map__29458);
var file_msg = map__29458__$1;
var namespace = cljs.core.get.call(null,map__29458__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29458,map__29458__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29458,map__29458__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29460){
var map__29461 = p__29460;
var map__29461__$1 = ((((!((map__29461 == null)))?(((((map__29461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29461):map__29461);
var file_msg = map__29461__$1;
var namespace = cljs.core.get.call(null,map__29461__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29463){
var map__29464 = p__29463;
var map__29464__$1 = ((((!((map__29464 == null)))?(((((map__29464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29464):map__29464);
var file_msg = map__29464__$1;
var namespace = cljs.core.get.call(null,map__29464__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29466,callback){
var map__29467 = p__29466;
var map__29467__$1 = ((((!((map__29467 == null)))?(((((map__29467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29467):map__29467);
var file_msg = map__29467__$1;
var request_url = cljs.core.get.call(null,map__29467__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29467__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__23748__auto___29517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto___29517,out){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto___29517,out){
return (function (state_29502){
var state_val_29503 = (state_29502[(1)]);
if((state_val_29503 === (1))){
var inst_29476 = cljs.core.seq.call(null,files);
var inst_29477 = cljs.core.first.call(null,inst_29476);
var inst_29478 = cljs.core.next.call(null,inst_29476);
var inst_29479 = files;
var state_29502__$1 = (function (){var statearr_29504 = state_29502;
(statearr_29504[(7)] = inst_29479);

(statearr_29504[(8)] = inst_29477);

(statearr_29504[(9)] = inst_29478);

return statearr_29504;
})();
var statearr_29505_29518 = state_29502__$1;
(statearr_29505_29518[(2)] = null);

(statearr_29505_29518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29503 === (2))){
var inst_29479 = (state_29502[(7)]);
var inst_29485 = (state_29502[(10)]);
var inst_29484 = cljs.core.seq.call(null,inst_29479);
var inst_29485__$1 = cljs.core.first.call(null,inst_29484);
var inst_29486 = cljs.core.next.call(null,inst_29484);
var inst_29487 = (inst_29485__$1 == null);
var inst_29488 = cljs.core.not.call(null,inst_29487);
var state_29502__$1 = (function (){var statearr_29506 = state_29502;
(statearr_29506[(11)] = inst_29486);

(statearr_29506[(10)] = inst_29485__$1);

return statearr_29506;
})();
if(inst_29488){
var statearr_29507_29519 = state_29502__$1;
(statearr_29507_29519[(1)] = (4));

} else {
var statearr_29508_29520 = state_29502__$1;
(statearr_29508_29520[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29503 === (3))){
var inst_29500 = (state_29502[(2)]);
var state_29502__$1 = state_29502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29502__$1,inst_29500);
} else {
if((state_val_29503 === (4))){
var inst_29485 = (state_29502[(10)]);
var inst_29490 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29485);
var state_29502__$1 = state_29502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29502__$1,(7),inst_29490);
} else {
if((state_val_29503 === (5))){
var inst_29496 = cljs.core.async.close_BANG_.call(null,out);
var state_29502__$1 = state_29502;
var statearr_29509_29521 = state_29502__$1;
(statearr_29509_29521[(2)] = inst_29496);

(statearr_29509_29521[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29503 === (6))){
var inst_29498 = (state_29502[(2)]);
var state_29502__$1 = state_29502;
var statearr_29510_29522 = state_29502__$1;
(statearr_29510_29522[(2)] = inst_29498);

(statearr_29510_29522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29503 === (7))){
var inst_29486 = (state_29502[(11)]);
var inst_29492 = (state_29502[(2)]);
var inst_29493 = cljs.core.async.put_BANG_.call(null,out,inst_29492);
var inst_29479 = inst_29486;
var state_29502__$1 = (function (){var statearr_29511 = state_29502;
(statearr_29511[(7)] = inst_29479);

(statearr_29511[(12)] = inst_29493);

return statearr_29511;
})();
var statearr_29512_29523 = state_29502__$1;
(statearr_29512_29523[(2)] = null);

(statearr_29512_29523[(1)] = (2));


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
});})(c__23748__auto___29517,out))
;
return ((function (switch__23658__auto__,c__23748__auto___29517,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23659__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23659__auto____0 = (function (){
var statearr_29513 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29513[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23659__auto__);

(statearr_29513[(1)] = (1));

return statearr_29513;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23659__auto____1 = (function (state_29502){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_29502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e29514){if((e29514 instanceof Object)){
var ex__23662__auto__ = e29514;
var statearr_29515_29524 = state_29502;
(statearr_29515_29524[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29525 = state_29502;
state_29502 = G__29525;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23659__auto__ = function(state_29502){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23659__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23659__auto____1.call(this,state_29502);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23659__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23659__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto___29517,out))
})();
var state__23750__auto__ = (function (){var statearr_29516 = f__23749__auto__.call(null);
(statearr_29516[(6)] = c__23748__auto___29517);

return statearr_29516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto___29517,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29526,opts){
var map__29527 = p__29526;
var map__29527__$1 = ((((!((map__29527 == null)))?(((((map__29527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29527):map__29527);
var eval_body = cljs.core.get.call(null,map__29527__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29527__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e29529){var e = e29529;
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
return (function (p1__29530_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29530_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__29531){
var vec__29532 = p__29531;
var k = cljs.core.nth.call(null,vec__29532,(0),null);
var v = cljs.core.nth.call(null,vec__29532,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29535){
var vec__29536 = p__29535;
var k = cljs.core.nth.call(null,vec__29536,(0),null);
var v = cljs.core.nth.call(null,vec__29536,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29542,p__29543){
var map__29544 = p__29542;
var map__29544__$1 = ((((!((map__29544 == null)))?(((((map__29544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29544):map__29544);
var opts = map__29544__$1;
var before_jsload = cljs.core.get.call(null,map__29544__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29544__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29544__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29545 = p__29543;
var map__29545__$1 = ((((!((map__29545 == null)))?(((((map__29545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29545):map__29545);
var msg = map__29545__$1;
var files = cljs.core.get.call(null,map__29545__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29545__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29545__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto__,map__29544,map__29544__$1,opts,before_jsload,on_jsload,reload_dependents,map__29545,map__29545__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto__,map__29544,map__29544__$1,opts,before_jsload,on_jsload,reload_dependents,map__29545,map__29545__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29699){
var state_val_29700 = (state_29699[(1)]);
if((state_val_29700 === (7))){
var inst_29560 = (state_29699[(7)]);
var inst_29562 = (state_29699[(8)]);
var inst_29561 = (state_29699[(9)]);
var inst_29559 = (state_29699[(10)]);
var inst_29567 = cljs.core._nth.call(null,inst_29560,inst_29562);
var inst_29568 = figwheel.client.file_reloading.eval_body.call(null,inst_29567,opts);
var inst_29569 = (inst_29562 + (1));
var tmp29701 = inst_29560;
var tmp29702 = inst_29561;
var tmp29703 = inst_29559;
var inst_29559__$1 = tmp29703;
var inst_29560__$1 = tmp29701;
var inst_29561__$1 = tmp29702;
var inst_29562__$1 = inst_29569;
var state_29699__$1 = (function (){var statearr_29704 = state_29699;
(statearr_29704[(7)] = inst_29560__$1);

(statearr_29704[(11)] = inst_29568);

(statearr_29704[(8)] = inst_29562__$1);

(statearr_29704[(9)] = inst_29561__$1);

(statearr_29704[(10)] = inst_29559__$1);

return statearr_29704;
})();
var statearr_29705_29788 = state_29699__$1;
(statearr_29705_29788[(2)] = null);

(statearr_29705_29788[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (20))){
var inst_29602 = (state_29699[(12)]);
var inst_29610 = figwheel.client.file_reloading.sort_files.call(null,inst_29602);
var state_29699__$1 = state_29699;
var statearr_29706_29789 = state_29699__$1;
(statearr_29706_29789[(2)] = inst_29610);

(statearr_29706_29789[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (27))){
var state_29699__$1 = state_29699;
var statearr_29707_29790 = state_29699__$1;
(statearr_29707_29790[(2)] = null);

(statearr_29707_29790[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (1))){
var inst_29551 = (state_29699[(13)]);
var inst_29548 = before_jsload.call(null,files);
var inst_29549 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29550 = (function (){return ((function (inst_29551,inst_29548,inst_29549,state_val_29700,c__23748__auto__,map__29544,map__29544__$1,opts,before_jsload,on_jsload,reload_dependents,map__29545,map__29545__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29539_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29539_SHARP_);
});
;})(inst_29551,inst_29548,inst_29549,state_val_29700,c__23748__auto__,map__29544,map__29544__$1,opts,before_jsload,on_jsload,reload_dependents,map__29545,map__29545__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29551__$1 = cljs.core.filter.call(null,inst_29550,files);
var inst_29552 = cljs.core.not_empty.call(null,inst_29551__$1);
var state_29699__$1 = (function (){var statearr_29708 = state_29699;
(statearr_29708[(14)] = inst_29549);

(statearr_29708[(15)] = inst_29548);

(statearr_29708[(13)] = inst_29551__$1);

return statearr_29708;
})();
if(cljs.core.truth_(inst_29552)){
var statearr_29709_29791 = state_29699__$1;
(statearr_29709_29791[(1)] = (2));

} else {
var statearr_29710_29792 = state_29699__$1;
(statearr_29710_29792[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (24))){
var state_29699__$1 = state_29699;
var statearr_29711_29793 = state_29699__$1;
(statearr_29711_29793[(2)] = null);

(statearr_29711_29793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (39))){
var inst_29652 = (state_29699[(16)]);
var state_29699__$1 = state_29699;
var statearr_29712_29794 = state_29699__$1;
(statearr_29712_29794[(2)] = inst_29652);

(statearr_29712_29794[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (46))){
var inst_29694 = (state_29699[(2)]);
var state_29699__$1 = state_29699;
var statearr_29713_29795 = state_29699__$1;
(statearr_29713_29795[(2)] = inst_29694);

(statearr_29713_29795[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (4))){
var inst_29596 = (state_29699[(2)]);
var inst_29597 = cljs.core.List.EMPTY;
var inst_29598 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29597);
var inst_29599 = (function (){return ((function (inst_29596,inst_29597,inst_29598,state_val_29700,c__23748__auto__,map__29544,map__29544__$1,opts,before_jsload,on_jsload,reload_dependents,map__29545,map__29545__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29540_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29540_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29540_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29540_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_29596,inst_29597,inst_29598,state_val_29700,c__23748__auto__,map__29544,map__29544__$1,opts,before_jsload,on_jsload,reload_dependents,map__29545,map__29545__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29600 = cljs.core.filter.call(null,inst_29599,files);
var inst_29601 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29602 = cljs.core.concat.call(null,inst_29600,inst_29601);
var state_29699__$1 = (function (){var statearr_29714 = state_29699;
(statearr_29714[(17)] = inst_29596);

(statearr_29714[(18)] = inst_29598);

(statearr_29714[(12)] = inst_29602);

return statearr_29714;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29715_29796 = state_29699__$1;
(statearr_29715_29796[(1)] = (16));

} else {
var statearr_29716_29797 = state_29699__$1;
(statearr_29716_29797[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (15))){
var inst_29586 = (state_29699[(2)]);
var state_29699__$1 = state_29699;
var statearr_29717_29798 = state_29699__$1;
(statearr_29717_29798[(2)] = inst_29586);

(statearr_29717_29798[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (21))){
var inst_29612 = (state_29699[(19)]);
var inst_29612__$1 = (state_29699[(2)]);
var inst_29613 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29612__$1);
var state_29699__$1 = (function (){var statearr_29718 = state_29699;
(statearr_29718[(19)] = inst_29612__$1);

return statearr_29718;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29699__$1,(22),inst_29613);
} else {
if((state_val_29700 === (31))){
var inst_29697 = (state_29699[(2)]);
var state_29699__$1 = state_29699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29699__$1,inst_29697);
} else {
if((state_val_29700 === (32))){
var inst_29652 = (state_29699[(16)]);
var inst_29657 = inst_29652.cljs$lang$protocol_mask$partition0$;
var inst_29658 = (inst_29657 & (64));
var inst_29659 = inst_29652.cljs$core$ISeq$;
var inst_29660 = (cljs.core.PROTOCOL_SENTINEL === inst_29659);
var inst_29661 = ((inst_29658) || (inst_29660));
var state_29699__$1 = state_29699;
if(cljs.core.truth_(inst_29661)){
var statearr_29719_29799 = state_29699__$1;
(statearr_29719_29799[(1)] = (35));

} else {
var statearr_29720_29800 = state_29699__$1;
(statearr_29720_29800[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (40))){
var inst_29674 = (state_29699[(20)]);
var inst_29673 = (state_29699[(2)]);
var inst_29674__$1 = cljs.core.get.call(null,inst_29673,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29675 = cljs.core.get.call(null,inst_29673,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29676 = cljs.core.not_empty.call(null,inst_29674__$1);
var state_29699__$1 = (function (){var statearr_29721 = state_29699;
(statearr_29721[(21)] = inst_29675);

(statearr_29721[(20)] = inst_29674__$1);

return statearr_29721;
})();
if(cljs.core.truth_(inst_29676)){
var statearr_29722_29801 = state_29699__$1;
(statearr_29722_29801[(1)] = (41));

} else {
var statearr_29723_29802 = state_29699__$1;
(statearr_29723_29802[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (33))){
var state_29699__$1 = state_29699;
var statearr_29724_29803 = state_29699__$1;
(statearr_29724_29803[(2)] = false);

(statearr_29724_29803[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (13))){
var inst_29572 = (state_29699[(22)]);
var inst_29576 = cljs.core.chunk_first.call(null,inst_29572);
var inst_29577 = cljs.core.chunk_rest.call(null,inst_29572);
var inst_29578 = cljs.core.count.call(null,inst_29576);
var inst_29559 = inst_29577;
var inst_29560 = inst_29576;
var inst_29561 = inst_29578;
var inst_29562 = (0);
var state_29699__$1 = (function (){var statearr_29725 = state_29699;
(statearr_29725[(7)] = inst_29560);

(statearr_29725[(8)] = inst_29562);

(statearr_29725[(9)] = inst_29561);

(statearr_29725[(10)] = inst_29559);

return statearr_29725;
})();
var statearr_29726_29804 = state_29699__$1;
(statearr_29726_29804[(2)] = null);

(statearr_29726_29804[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (22))){
var inst_29615 = (state_29699[(23)]);
var inst_29612 = (state_29699[(19)]);
var inst_29616 = (state_29699[(24)]);
var inst_29620 = (state_29699[(25)]);
var inst_29615__$1 = (state_29699[(2)]);
var inst_29616__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29615__$1);
var inst_29617 = (function (){var all_files = inst_29612;
var res_SINGLEQUOTE_ = inst_29615__$1;
var res = inst_29616__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29615,inst_29612,inst_29616,inst_29620,inst_29615__$1,inst_29616__$1,state_val_29700,c__23748__auto__,map__29544,map__29544__$1,opts,before_jsload,on_jsload,reload_dependents,map__29545,map__29545__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29541_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29541_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29615,inst_29612,inst_29616,inst_29620,inst_29615__$1,inst_29616__$1,state_val_29700,c__23748__auto__,map__29544,map__29544__$1,opts,before_jsload,on_jsload,reload_dependents,map__29545,map__29545__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29618 = cljs.core.filter.call(null,inst_29617,inst_29615__$1);
var inst_29619 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29620__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29619);
var inst_29621 = cljs.core.not_empty.call(null,inst_29620__$1);
var state_29699__$1 = (function (){var statearr_29727 = state_29699;
(statearr_29727[(23)] = inst_29615__$1);

(statearr_29727[(26)] = inst_29618);

(statearr_29727[(24)] = inst_29616__$1);

(statearr_29727[(25)] = inst_29620__$1);

return statearr_29727;
})();
if(cljs.core.truth_(inst_29621)){
var statearr_29728_29805 = state_29699__$1;
(statearr_29728_29805[(1)] = (23));

} else {
var statearr_29729_29806 = state_29699__$1;
(statearr_29729_29806[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (36))){
var state_29699__$1 = state_29699;
var statearr_29730_29807 = state_29699__$1;
(statearr_29730_29807[(2)] = false);

(statearr_29730_29807[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (41))){
var inst_29674 = (state_29699[(20)]);
var inst_29678 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29679 = cljs.core.map.call(null,inst_29678,inst_29674);
var inst_29680 = cljs.core.pr_str.call(null,inst_29679);
var inst_29681 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29680)].join('');
var inst_29682 = figwheel.client.utils.log.call(null,inst_29681);
var state_29699__$1 = state_29699;
var statearr_29731_29808 = state_29699__$1;
(statearr_29731_29808[(2)] = inst_29682);

(statearr_29731_29808[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (43))){
var inst_29675 = (state_29699[(21)]);
var inst_29685 = (state_29699[(2)]);
var inst_29686 = cljs.core.not_empty.call(null,inst_29675);
var state_29699__$1 = (function (){var statearr_29732 = state_29699;
(statearr_29732[(27)] = inst_29685);

return statearr_29732;
})();
if(cljs.core.truth_(inst_29686)){
var statearr_29733_29809 = state_29699__$1;
(statearr_29733_29809[(1)] = (44));

} else {
var statearr_29734_29810 = state_29699__$1;
(statearr_29734_29810[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (29))){
var inst_29615 = (state_29699[(23)]);
var inst_29612 = (state_29699[(19)]);
var inst_29618 = (state_29699[(26)]);
var inst_29652 = (state_29699[(16)]);
var inst_29616 = (state_29699[(24)]);
var inst_29620 = (state_29699[(25)]);
var inst_29648 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29651 = (function (){var all_files = inst_29612;
var res_SINGLEQUOTE_ = inst_29615;
var res = inst_29616;
var files_not_loaded = inst_29618;
var dependencies_that_loaded = inst_29620;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29615,inst_29612,inst_29618,inst_29652,inst_29616,inst_29620,inst_29648,state_val_29700,c__23748__auto__,map__29544,map__29544__$1,opts,before_jsload,on_jsload,reload_dependents,map__29545,map__29545__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29650){
var map__29735 = p__29650;
var map__29735__$1 = ((((!((map__29735 == null)))?(((((map__29735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29735):map__29735);
var namespace = cljs.core.get.call(null,map__29735__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29615,inst_29612,inst_29618,inst_29652,inst_29616,inst_29620,inst_29648,state_val_29700,c__23748__auto__,map__29544,map__29544__$1,opts,before_jsload,on_jsload,reload_dependents,map__29545,map__29545__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29652__$1 = cljs.core.group_by.call(null,inst_29651,inst_29618);
var inst_29654 = (inst_29652__$1 == null);
var inst_29655 = cljs.core.not.call(null,inst_29654);
var state_29699__$1 = (function (){var statearr_29737 = state_29699;
(statearr_29737[(28)] = inst_29648);

(statearr_29737[(16)] = inst_29652__$1);

return statearr_29737;
})();
if(inst_29655){
var statearr_29738_29811 = state_29699__$1;
(statearr_29738_29811[(1)] = (32));

} else {
var statearr_29739_29812 = state_29699__$1;
(statearr_29739_29812[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (44))){
var inst_29675 = (state_29699[(21)]);
var inst_29688 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29675);
var inst_29689 = cljs.core.pr_str.call(null,inst_29688);
var inst_29690 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29689)].join('');
var inst_29691 = figwheel.client.utils.log.call(null,inst_29690);
var state_29699__$1 = state_29699;
var statearr_29740_29813 = state_29699__$1;
(statearr_29740_29813[(2)] = inst_29691);

(statearr_29740_29813[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (6))){
var inst_29593 = (state_29699[(2)]);
var state_29699__$1 = state_29699;
var statearr_29741_29814 = state_29699__$1;
(statearr_29741_29814[(2)] = inst_29593);

(statearr_29741_29814[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (28))){
var inst_29618 = (state_29699[(26)]);
var inst_29645 = (state_29699[(2)]);
var inst_29646 = cljs.core.not_empty.call(null,inst_29618);
var state_29699__$1 = (function (){var statearr_29742 = state_29699;
(statearr_29742[(29)] = inst_29645);

return statearr_29742;
})();
if(cljs.core.truth_(inst_29646)){
var statearr_29743_29815 = state_29699__$1;
(statearr_29743_29815[(1)] = (29));

} else {
var statearr_29744_29816 = state_29699__$1;
(statearr_29744_29816[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (25))){
var inst_29616 = (state_29699[(24)]);
var inst_29632 = (state_29699[(2)]);
var inst_29633 = cljs.core.not_empty.call(null,inst_29616);
var state_29699__$1 = (function (){var statearr_29745 = state_29699;
(statearr_29745[(30)] = inst_29632);

return statearr_29745;
})();
if(cljs.core.truth_(inst_29633)){
var statearr_29746_29817 = state_29699__$1;
(statearr_29746_29817[(1)] = (26));

} else {
var statearr_29747_29818 = state_29699__$1;
(statearr_29747_29818[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (34))){
var inst_29668 = (state_29699[(2)]);
var state_29699__$1 = state_29699;
if(cljs.core.truth_(inst_29668)){
var statearr_29748_29819 = state_29699__$1;
(statearr_29748_29819[(1)] = (38));

} else {
var statearr_29749_29820 = state_29699__$1;
(statearr_29749_29820[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (17))){
var state_29699__$1 = state_29699;
var statearr_29750_29821 = state_29699__$1;
(statearr_29750_29821[(2)] = recompile_dependents);

(statearr_29750_29821[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (3))){
var state_29699__$1 = state_29699;
var statearr_29751_29822 = state_29699__$1;
(statearr_29751_29822[(2)] = null);

(statearr_29751_29822[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (12))){
var inst_29589 = (state_29699[(2)]);
var state_29699__$1 = state_29699;
var statearr_29752_29823 = state_29699__$1;
(statearr_29752_29823[(2)] = inst_29589);

(statearr_29752_29823[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (2))){
var inst_29551 = (state_29699[(13)]);
var inst_29558 = cljs.core.seq.call(null,inst_29551);
var inst_29559 = inst_29558;
var inst_29560 = null;
var inst_29561 = (0);
var inst_29562 = (0);
var state_29699__$1 = (function (){var statearr_29753 = state_29699;
(statearr_29753[(7)] = inst_29560);

(statearr_29753[(8)] = inst_29562);

(statearr_29753[(9)] = inst_29561);

(statearr_29753[(10)] = inst_29559);

return statearr_29753;
})();
var statearr_29754_29824 = state_29699__$1;
(statearr_29754_29824[(2)] = null);

(statearr_29754_29824[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (23))){
var inst_29615 = (state_29699[(23)]);
var inst_29612 = (state_29699[(19)]);
var inst_29618 = (state_29699[(26)]);
var inst_29616 = (state_29699[(24)]);
var inst_29620 = (state_29699[(25)]);
var inst_29623 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29625 = (function (){var all_files = inst_29612;
var res_SINGLEQUOTE_ = inst_29615;
var res = inst_29616;
var files_not_loaded = inst_29618;
var dependencies_that_loaded = inst_29620;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29615,inst_29612,inst_29618,inst_29616,inst_29620,inst_29623,state_val_29700,c__23748__auto__,map__29544,map__29544__$1,opts,before_jsload,on_jsload,reload_dependents,map__29545,map__29545__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29624){
var map__29755 = p__29624;
var map__29755__$1 = ((((!((map__29755 == null)))?(((((map__29755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29755):map__29755);
var request_url = cljs.core.get.call(null,map__29755__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29615,inst_29612,inst_29618,inst_29616,inst_29620,inst_29623,state_val_29700,c__23748__auto__,map__29544,map__29544__$1,opts,before_jsload,on_jsload,reload_dependents,map__29545,map__29545__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29626 = cljs.core.reverse.call(null,inst_29620);
var inst_29627 = cljs.core.map.call(null,inst_29625,inst_29626);
var inst_29628 = cljs.core.pr_str.call(null,inst_29627);
var inst_29629 = figwheel.client.utils.log.call(null,inst_29628);
var state_29699__$1 = (function (){var statearr_29757 = state_29699;
(statearr_29757[(31)] = inst_29623);

return statearr_29757;
})();
var statearr_29758_29825 = state_29699__$1;
(statearr_29758_29825[(2)] = inst_29629);

(statearr_29758_29825[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (35))){
var state_29699__$1 = state_29699;
var statearr_29759_29826 = state_29699__$1;
(statearr_29759_29826[(2)] = true);

(statearr_29759_29826[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (19))){
var inst_29602 = (state_29699[(12)]);
var inst_29608 = figwheel.client.file_reloading.expand_files.call(null,inst_29602);
var state_29699__$1 = state_29699;
var statearr_29760_29827 = state_29699__$1;
(statearr_29760_29827[(2)] = inst_29608);

(statearr_29760_29827[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (11))){
var state_29699__$1 = state_29699;
var statearr_29761_29828 = state_29699__$1;
(statearr_29761_29828[(2)] = null);

(statearr_29761_29828[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (9))){
var inst_29591 = (state_29699[(2)]);
var state_29699__$1 = state_29699;
var statearr_29762_29829 = state_29699__$1;
(statearr_29762_29829[(2)] = inst_29591);

(statearr_29762_29829[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (5))){
var inst_29562 = (state_29699[(8)]);
var inst_29561 = (state_29699[(9)]);
var inst_29564 = (inst_29562 < inst_29561);
var inst_29565 = inst_29564;
var state_29699__$1 = state_29699;
if(cljs.core.truth_(inst_29565)){
var statearr_29763_29830 = state_29699__$1;
(statearr_29763_29830[(1)] = (7));

} else {
var statearr_29764_29831 = state_29699__$1;
(statearr_29764_29831[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (14))){
var inst_29572 = (state_29699[(22)]);
var inst_29581 = cljs.core.first.call(null,inst_29572);
var inst_29582 = figwheel.client.file_reloading.eval_body.call(null,inst_29581,opts);
var inst_29583 = cljs.core.next.call(null,inst_29572);
var inst_29559 = inst_29583;
var inst_29560 = null;
var inst_29561 = (0);
var inst_29562 = (0);
var state_29699__$1 = (function (){var statearr_29765 = state_29699;
(statearr_29765[(7)] = inst_29560);

(statearr_29765[(8)] = inst_29562);

(statearr_29765[(9)] = inst_29561);

(statearr_29765[(32)] = inst_29582);

(statearr_29765[(10)] = inst_29559);

return statearr_29765;
})();
var statearr_29766_29832 = state_29699__$1;
(statearr_29766_29832[(2)] = null);

(statearr_29766_29832[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (45))){
var state_29699__$1 = state_29699;
var statearr_29767_29833 = state_29699__$1;
(statearr_29767_29833[(2)] = null);

(statearr_29767_29833[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (26))){
var inst_29615 = (state_29699[(23)]);
var inst_29612 = (state_29699[(19)]);
var inst_29618 = (state_29699[(26)]);
var inst_29616 = (state_29699[(24)]);
var inst_29620 = (state_29699[(25)]);
var inst_29635 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29637 = (function (){var all_files = inst_29612;
var res_SINGLEQUOTE_ = inst_29615;
var res = inst_29616;
var files_not_loaded = inst_29618;
var dependencies_that_loaded = inst_29620;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29615,inst_29612,inst_29618,inst_29616,inst_29620,inst_29635,state_val_29700,c__23748__auto__,map__29544,map__29544__$1,opts,before_jsload,on_jsload,reload_dependents,map__29545,map__29545__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29636){
var map__29768 = p__29636;
var map__29768__$1 = ((((!((map__29768 == null)))?(((((map__29768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29768):map__29768);
var namespace = cljs.core.get.call(null,map__29768__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29768__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29615,inst_29612,inst_29618,inst_29616,inst_29620,inst_29635,state_val_29700,c__23748__auto__,map__29544,map__29544__$1,opts,before_jsload,on_jsload,reload_dependents,map__29545,map__29545__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29638 = cljs.core.map.call(null,inst_29637,inst_29616);
var inst_29639 = cljs.core.pr_str.call(null,inst_29638);
var inst_29640 = figwheel.client.utils.log.call(null,inst_29639);
var inst_29641 = (function (){var all_files = inst_29612;
var res_SINGLEQUOTE_ = inst_29615;
var res = inst_29616;
var files_not_loaded = inst_29618;
var dependencies_that_loaded = inst_29620;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29615,inst_29612,inst_29618,inst_29616,inst_29620,inst_29635,inst_29637,inst_29638,inst_29639,inst_29640,state_val_29700,c__23748__auto__,map__29544,map__29544__$1,opts,before_jsload,on_jsload,reload_dependents,map__29545,map__29545__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29615,inst_29612,inst_29618,inst_29616,inst_29620,inst_29635,inst_29637,inst_29638,inst_29639,inst_29640,state_val_29700,c__23748__auto__,map__29544,map__29544__$1,opts,before_jsload,on_jsload,reload_dependents,map__29545,map__29545__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29642 = setTimeout(inst_29641,(10));
var state_29699__$1 = (function (){var statearr_29770 = state_29699;
(statearr_29770[(33)] = inst_29635);

(statearr_29770[(34)] = inst_29640);

return statearr_29770;
})();
var statearr_29771_29834 = state_29699__$1;
(statearr_29771_29834[(2)] = inst_29642);

(statearr_29771_29834[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (16))){
var state_29699__$1 = state_29699;
var statearr_29772_29835 = state_29699__$1;
(statearr_29772_29835[(2)] = reload_dependents);

(statearr_29772_29835[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (38))){
var inst_29652 = (state_29699[(16)]);
var inst_29670 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29652);
var state_29699__$1 = state_29699;
var statearr_29773_29836 = state_29699__$1;
(statearr_29773_29836[(2)] = inst_29670);

(statearr_29773_29836[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (30))){
var state_29699__$1 = state_29699;
var statearr_29774_29837 = state_29699__$1;
(statearr_29774_29837[(2)] = null);

(statearr_29774_29837[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (10))){
var inst_29572 = (state_29699[(22)]);
var inst_29574 = cljs.core.chunked_seq_QMARK_.call(null,inst_29572);
var state_29699__$1 = state_29699;
if(inst_29574){
var statearr_29775_29838 = state_29699__$1;
(statearr_29775_29838[(1)] = (13));

} else {
var statearr_29776_29839 = state_29699__$1;
(statearr_29776_29839[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (18))){
var inst_29606 = (state_29699[(2)]);
var state_29699__$1 = state_29699;
if(cljs.core.truth_(inst_29606)){
var statearr_29777_29840 = state_29699__$1;
(statearr_29777_29840[(1)] = (19));

} else {
var statearr_29778_29841 = state_29699__$1;
(statearr_29778_29841[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (42))){
var state_29699__$1 = state_29699;
var statearr_29779_29842 = state_29699__$1;
(statearr_29779_29842[(2)] = null);

(statearr_29779_29842[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (37))){
var inst_29665 = (state_29699[(2)]);
var state_29699__$1 = state_29699;
var statearr_29780_29843 = state_29699__$1;
(statearr_29780_29843[(2)] = inst_29665);

(statearr_29780_29843[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29700 === (8))){
var inst_29572 = (state_29699[(22)]);
var inst_29559 = (state_29699[(10)]);
var inst_29572__$1 = cljs.core.seq.call(null,inst_29559);
var state_29699__$1 = (function (){var statearr_29781 = state_29699;
(statearr_29781[(22)] = inst_29572__$1);

return statearr_29781;
})();
if(inst_29572__$1){
var statearr_29782_29844 = state_29699__$1;
(statearr_29782_29844[(1)] = (10));

} else {
var statearr_29783_29845 = state_29699__$1;
(statearr_29783_29845[(1)] = (11));

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
});})(c__23748__auto__,map__29544,map__29544__$1,opts,before_jsload,on_jsload,reload_dependents,map__29545,map__29545__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23658__auto__,c__23748__auto__,map__29544,map__29544__$1,opts,before_jsload,on_jsload,reload_dependents,map__29545,map__29545__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23659__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23659__auto____0 = (function (){
var statearr_29784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29784[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23659__auto__);

(statearr_29784[(1)] = (1));

return statearr_29784;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23659__auto____1 = (function (state_29699){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_29699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e29785){if((e29785 instanceof Object)){
var ex__23662__auto__ = e29785;
var statearr_29786_29846 = state_29699;
(statearr_29786_29846[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29847 = state_29699;
state_29699 = G__29847;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23659__auto__ = function(state_29699){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23659__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23659__auto____1.call(this,state_29699);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23659__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23659__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto__,map__29544,map__29544__$1,opts,before_jsload,on_jsload,reload_dependents,map__29545,map__29545__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23750__auto__ = (function (){var statearr_29787 = f__23749__auto__.call(null);
(statearr_29787[(6)] = c__23748__auto__);

return statearr_29787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto__,map__29544,map__29544__$1,opts,before_jsload,on_jsload,reload_dependents,map__29545,map__29545__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23748__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29850,link){
var map__29851 = p__29850;
var map__29851__$1 = ((((!((map__29851 == null)))?(((((map__29851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29851):map__29851);
var file = cljs.core.get.call(null,map__29851__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__29851,map__29851__$1,file){
return (function (p1__29848_SHARP_,p2__29849_SHARP_){
if(cljs.core._EQ_.call(null,p1__29848_SHARP_,p2__29849_SHARP_)){
return p1__29848_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__29851,map__29851__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29854){
var map__29855 = p__29854;
var map__29855__$1 = ((((!((map__29855 == null)))?(((((map__29855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29855):map__29855);
var match_length = cljs.core.get.call(null,map__29855__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29855__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29853_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29853_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29857_SHARP_,p2__29858_SHARP_){
return cljs.core.assoc.call(null,p1__29857_SHARP_,cljs.core.get.call(null,p2__29858_SHARP_,key),p2__29858_SHARP_);
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
var loaded_f_datas_29859 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29859);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29859);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29860,p__29861){
var map__29862 = p__29860;
var map__29862__$1 = ((((!((map__29862 == null)))?(((((map__29862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29862):map__29862);
var on_cssload = cljs.core.get.call(null,map__29862__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29863 = p__29861;
var map__29863__$1 = ((((!((map__29863 == null)))?(((((map__29863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29863):map__29863);
var files_msg = map__29863__$1;
var files = cljs.core.get.call(null,map__29863__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1556800408936
