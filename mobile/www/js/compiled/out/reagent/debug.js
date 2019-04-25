// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__21862__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21862 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21863__i = 0, G__21863__a = new Array(arguments.length -  0);
while (G__21863__i < G__21863__a.length) {G__21863__a[G__21863__i] = arguments[G__21863__i + 0]; ++G__21863__i;}
  args = new cljs.core.IndexedSeq(G__21863__a,0,null);
} 
return G__21862__delegate.call(this,args);};
G__21862.cljs$lang$maxFixedArity = 0;
G__21862.cljs$lang$applyTo = (function (arglist__21864){
var args = cljs.core.seq(arglist__21864);
return G__21862__delegate(args);
});
G__21862.cljs$core$IFn$_invoke$arity$variadic = G__21862__delegate;
return G__21862;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__21865__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21865 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21866__i = 0, G__21866__a = new Array(arguments.length -  0);
while (G__21866__i < G__21866__a.length) {G__21866__a[G__21866__i] = arguments[G__21866__i + 0]; ++G__21866__i;}
  args = new cljs.core.IndexedSeq(G__21866__a,0,null);
} 
return G__21865__delegate.call(this,args);};
G__21865.cljs$lang$maxFixedArity = 0;
G__21865.cljs$lang$applyTo = (function (arglist__21867){
var args = cljs.core.seq(arglist__21867);
return G__21865__delegate(args);
});
G__21865.cljs$core$IFn$_invoke$arity$variadic = G__21865__delegate;
return G__21865;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1553001163593
