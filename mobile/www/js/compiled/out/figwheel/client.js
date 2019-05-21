// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e30952){if((e30952 instanceof Error)){
var e = e30952;
return "Error: Unable to stringify";
} else {
throw e30952;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30955 = arguments.length;
switch (G__30955) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30953_SHARP_){
if(typeof p1__30953_SHARP_ === 'string'){
return p1__30953_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30953_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30958 = arguments.length;
var i__4500__auto___30959 = (0);
while(true){
if((i__4500__auto___30959 < len__4499__auto___30958)){
args__4502__auto__.push((arguments[i__4500__auto___30959]));

var G__30960 = (i__4500__auto___30959 + (1));
i__4500__auto___30959 = G__30960;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30957){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30957));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30962 = arguments.length;
var i__4500__auto___30963 = (0);
while(true){
if((i__4500__auto___30963 < len__4499__auto___30962)){
args__4502__auto__.push((arguments[i__4500__auto___30963]));

var G__30964 = (i__4500__auto___30963 + (1));
i__4500__auto___30963 = G__30964;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30961){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30961));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30965){
var map__30966 = p__30965;
var map__30966__$1 = ((((!((map__30966 == null)))?(((((map__30966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30966):map__30966);
var message = cljs.core.get.call(null,map__30966__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30966__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23749__auto___31045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23749__auto___31045,ch){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (c__23749__auto___31045,ch){
return (function (state_31017){
var state_val_31018 = (state_31017[(1)]);
if((state_val_31018 === (7))){
var inst_31013 = (state_31017[(2)]);
var state_31017__$1 = state_31017;
var statearr_31019_31046 = state_31017__$1;
(statearr_31019_31046[(2)] = inst_31013);

(statearr_31019_31046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31018 === (1))){
var state_31017__$1 = state_31017;
var statearr_31020_31047 = state_31017__$1;
(statearr_31020_31047[(2)] = null);

(statearr_31020_31047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31018 === (4))){
var inst_30970 = (state_31017[(7)]);
var inst_30970__$1 = (state_31017[(2)]);
var state_31017__$1 = (function (){var statearr_31021 = state_31017;
(statearr_31021[(7)] = inst_30970__$1);

return statearr_31021;
})();
if(cljs.core.truth_(inst_30970__$1)){
var statearr_31022_31048 = state_31017__$1;
(statearr_31022_31048[(1)] = (5));

} else {
var statearr_31023_31049 = state_31017__$1;
(statearr_31023_31049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31018 === (15))){
var inst_30977 = (state_31017[(8)]);
var inst_30992 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30977);
var inst_30993 = cljs.core.first.call(null,inst_30992);
var inst_30994 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30993);
var inst_30995 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30994)].join('');
var inst_30996 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30995);
var state_31017__$1 = state_31017;
var statearr_31024_31050 = state_31017__$1;
(statearr_31024_31050[(2)] = inst_30996);

(statearr_31024_31050[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31018 === (13))){
var inst_31001 = (state_31017[(2)]);
var state_31017__$1 = state_31017;
var statearr_31025_31051 = state_31017__$1;
(statearr_31025_31051[(2)] = inst_31001);

(statearr_31025_31051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31018 === (6))){
var state_31017__$1 = state_31017;
var statearr_31026_31052 = state_31017__$1;
(statearr_31026_31052[(2)] = null);

(statearr_31026_31052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31018 === (17))){
var inst_30999 = (state_31017[(2)]);
var state_31017__$1 = state_31017;
var statearr_31027_31053 = state_31017__$1;
(statearr_31027_31053[(2)] = inst_30999);

(statearr_31027_31053[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31018 === (3))){
var inst_31015 = (state_31017[(2)]);
var state_31017__$1 = state_31017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31017__$1,inst_31015);
} else {
if((state_val_31018 === (12))){
var inst_30976 = (state_31017[(9)]);
var inst_30990 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30976,opts);
var state_31017__$1 = state_31017;
if(cljs.core.truth_(inst_30990)){
var statearr_31028_31054 = state_31017__$1;
(statearr_31028_31054[(1)] = (15));

} else {
var statearr_31029_31055 = state_31017__$1;
(statearr_31029_31055[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31018 === (2))){
var state_31017__$1 = state_31017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31017__$1,(4),ch);
} else {
if((state_val_31018 === (11))){
var inst_30977 = (state_31017[(8)]);
var inst_30982 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30983 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30977);
var inst_30984 = cljs.core.async.timeout.call(null,(1000));
var inst_30985 = [inst_30983,inst_30984];
var inst_30986 = (new cljs.core.PersistentVector(null,2,(5),inst_30982,inst_30985,null));
var state_31017__$1 = state_31017;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31017__$1,(14),inst_30986);
} else {
if((state_val_31018 === (9))){
var inst_30977 = (state_31017[(8)]);
var inst_31003 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31004 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30977);
var inst_31005 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31004);
var inst_31006 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31005)].join('');
var inst_31007 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31006);
var state_31017__$1 = (function (){var statearr_31030 = state_31017;
(statearr_31030[(10)] = inst_31003);

return statearr_31030;
})();
var statearr_31031_31056 = state_31017__$1;
(statearr_31031_31056[(2)] = inst_31007);

(statearr_31031_31056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31018 === (5))){
var inst_30970 = (state_31017[(7)]);
var inst_30972 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30973 = (new cljs.core.PersistentArrayMap(null,2,inst_30972,null));
var inst_30974 = (new cljs.core.PersistentHashSet(null,inst_30973,null));
var inst_30975 = figwheel.client.focus_msgs.call(null,inst_30974,inst_30970);
var inst_30976 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30975);
var inst_30977 = cljs.core.first.call(null,inst_30975);
var inst_30978 = figwheel.client.autoload_QMARK_.call(null);
var state_31017__$1 = (function (){var statearr_31032 = state_31017;
(statearr_31032[(8)] = inst_30977);

(statearr_31032[(9)] = inst_30976);

return statearr_31032;
})();
if(cljs.core.truth_(inst_30978)){
var statearr_31033_31057 = state_31017__$1;
(statearr_31033_31057[(1)] = (8));

} else {
var statearr_31034_31058 = state_31017__$1;
(statearr_31034_31058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31018 === (14))){
var inst_30988 = (state_31017[(2)]);
var state_31017__$1 = state_31017;
var statearr_31035_31059 = state_31017__$1;
(statearr_31035_31059[(2)] = inst_30988);

(statearr_31035_31059[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31018 === (16))){
var state_31017__$1 = state_31017;
var statearr_31036_31060 = state_31017__$1;
(statearr_31036_31060[(2)] = null);

(statearr_31036_31060[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31018 === (10))){
var inst_31009 = (state_31017[(2)]);
var state_31017__$1 = (function (){var statearr_31037 = state_31017;
(statearr_31037[(11)] = inst_31009);

return statearr_31037;
})();
var statearr_31038_31061 = state_31017__$1;
(statearr_31038_31061[(2)] = null);

(statearr_31038_31061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31018 === (8))){
var inst_30976 = (state_31017[(9)]);
var inst_30980 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30976,opts);
var state_31017__$1 = state_31017;
if(cljs.core.truth_(inst_30980)){
var statearr_31039_31062 = state_31017__$1;
(statearr_31039_31062[(1)] = (11));

} else {
var statearr_31040_31063 = state_31017__$1;
(statearr_31040_31063[(1)] = (12));

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
});})(c__23749__auto___31045,ch))
;
return ((function (switch__23659__auto__,c__23749__auto___31045,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23660__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23660__auto____0 = (function (){
var statearr_31041 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31041[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23660__auto__);

(statearr_31041[(1)] = (1));

return statearr_31041;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23660__auto____1 = (function (state_31017){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_31017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e31042){if((e31042 instanceof Object)){
var ex__23663__auto__ = e31042;
var statearr_31043_31064 = state_31017;
(statearr_31043_31064[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31065 = state_31017;
state_31017 = G__31065;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23660__auto__ = function(state_31017){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23660__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23660__auto____1.call(this,state_31017);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23660__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23660__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23660__auto__;
})()
;})(switch__23659__auto__,c__23749__auto___31045,ch))
})();
var state__23751__auto__ = (function (){var statearr_31044 = f__23750__auto__.call(null);
(statearr_31044[(6)] = c__23749__auto___31045);

return statearr_31044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(c__23749__auto___31045,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31066_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31066_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31070 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31070){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31068 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31069 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31068,_STAR_print_fn_STAR_31069,sb,base_path_31070){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_31068,_STAR_print_fn_STAR_31069,sb,base_path_31070))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31069;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31068;
}}catch (e31067){if((e31067 instanceof Error)){
var e = e31067;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31070], null));
} else {
var e = e31067;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31070))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31071){
var map__31072 = p__31071;
var map__31072__$1 = ((((!((map__31072 == null)))?(((((map__31072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31072):map__31072);
var opts = map__31072__$1;
var build_id = cljs.core.get.call(null,map__31072__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31072,map__31072__$1,opts,build_id){
return (function (p__31074){
var vec__31075 = p__31074;
var seq__31076 = cljs.core.seq.call(null,vec__31075);
var first__31077 = cljs.core.first.call(null,seq__31076);
var seq__31076__$1 = cljs.core.next.call(null,seq__31076);
var map__31078 = first__31077;
var map__31078__$1 = ((((!((map__31078 == null)))?(((((map__31078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31078):map__31078);
var msg = map__31078__$1;
var msg_name = cljs.core.get.call(null,map__31078__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31076__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31075,seq__31076,first__31077,seq__31076__$1,map__31078,map__31078__$1,msg,msg_name,_,map__31072,map__31072__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31075,seq__31076,first__31077,seq__31076__$1,map__31078,map__31078__$1,msg,msg_name,_,map__31072,map__31072__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31072,map__31072__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31080){
var vec__31081 = p__31080;
var seq__31082 = cljs.core.seq.call(null,vec__31081);
var first__31083 = cljs.core.first.call(null,seq__31082);
var seq__31082__$1 = cljs.core.next.call(null,seq__31082);
var map__31084 = first__31083;
var map__31084__$1 = ((((!((map__31084 == null)))?(((((map__31084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31084):map__31084);
var msg = map__31084__$1;
var msg_name = cljs.core.get.call(null,map__31084__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31082__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31086){
var map__31087 = p__31086;
var map__31087__$1 = ((((!((map__31087 == null)))?(((((map__31087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31087):map__31087);
var on_compile_warning = cljs.core.get.call(null,map__31087__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31087__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31087,map__31087__$1,on_compile_warning,on_compile_fail){
return (function (p__31089){
var vec__31090 = p__31089;
var seq__31091 = cljs.core.seq.call(null,vec__31090);
var first__31092 = cljs.core.first.call(null,seq__31091);
var seq__31091__$1 = cljs.core.next.call(null,seq__31091);
var map__31093 = first__31092;
var map__31093__$1 = ((((!((map__31093 == null)))?(((((map__31093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31093):map__31093);
var msg = map__31093__$1;
var msg_name = cljs.core.get.call(null,map__31093__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31091__$1;
var pred__31095 = cljs.core._EQ_;
var expr__31096 = msg_name;
if(cljs.core.truth_(pred__31095.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31096))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31095.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31096))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31087,map__31087__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23749__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23749__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (c__23749__auto__,msg_hist,msg_names,msg){
return (function (state_31185){
var state_val_31186 = (state_31185[(1)]);
if((state_val_31186 === (7))){
var inst_31105 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
if(cljs.core.truth_(inst_31105)){
var statearr_31187_31234 = state_31185__$1;
(statearr_31187_31234[(1)] = (8));

} else {
var statearr_31188_31235 = state_31185__$1;
(statearr_31188_31235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (20))){
var inst_31179 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
var statearr_31189_31236 = state_31185__$1;
(statearr_31189_31236[(2)] = inst_31179);

(statearr_31189_31236[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (27))){
var inst_31175 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
var statearr_31190_31237 = state_31185__$1;
(statearr_31190_31237[(2)] = inst_31175);

(statearr_31190_31237[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (1))){
var inst_31098 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31185__$1 = state_31185;
if(cljs.core.truth_(inst_31098)){
var statearr_31191_31238 = state_31185__$1;
(statearr_31191_31238[(1)] = (2));

} else {
var statearr_31192_31239 = state_31185__$1;
(statearr_31192_31239[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (24))){
var inst_31177 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
var statearr_31193_31240 = state_31185__$1;
(statearr_31193_31240[(2)] = inst_31177);

(statearr_31193_31240[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (4))){
var inst_31183 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31185__$1,inst_31183);
} else {
if((state_val_31186 === (15))){
var inst_31181 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
var statearr_31194_31241 = state_31185__$1;
(statearr_31194_31241[(2)] = inst_31181);

(statearr_31194_31241[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (21))){
var inst_31134 = (state_31185[(2)]);
var inst_31135 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31136 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31135);
var state_31185__$1 = (function (){var statearr_31195 = state_31185;
(statearr_31195[(7)] = inst_31134);

return statearr_31195;
})();
var statearr_31196_31242 = state_31185__$1;
(statearr_31196_31242[(2)] = inst_31136);

(statearr_31196_31242[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (31))){
var inst_31164 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31185__$1 = state_31185;
if(cljs.core.truth_(inst_31164)){
var statearr_31197_31243 = state_31185__$1;
(statearr_31197_31243[(1)] = (34));

} else {
var statearr_31198_31244 = state_31185__$1;
(statearr_31198_31244[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (32))){
var inst_31173 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
var statearr_31199_31245 = state_31185__$1;
(statearr_31199_31245[(2)] = inst_31173);

(statearr_31199_31245[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (33))){
var inst_31160 = (state_31185[(2)]);
var inst_31161 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31162 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31161);
var state_31185__$1 = (function (){var statearr_31200 = state_31185;
(statearr_31200[(8)] = inst_31160);

return statearr_31200;
})();
var statearr_31201_31246 = state_31185__$1;
(statearr_31201_31246[(2)] = inst_31162);

(statearr_31201_31246[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (13))){
var inst_31119 = figwheel.client.heads_up.clear.call(null);
var state_31185__$1 = state_31185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31185__$1,(16),inst_31119);
} else {
if((state_val_31186 === (22))){
var inst_31140 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31141 = figwheel.client.heads_up.append_warning_message.call(null,inst_31140);
var state_31185__$1 = state_31185;
var statearr_31202_31247 = state_31185__$1;
(statearr_31202_31247[(2)] = inst_31141);

(statearr_31202_31247[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (36))){
var inst_31171 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
var statearr_31203_31248 = state_31185__$1;
(statearr_31203_31248[(2)] = inst_31171);

(statearr_31203_31248[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (29))){
var inst_31151 = (state_31185[(2)]);
var inst_31152 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31153 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31152);
var state_31185__$1 = (function (){var statearr_31204 = state_31185;
(statearr_31204[(9)] = inst_31151);

return statearr_31204;
})();
var statearr_31205_31249 = state_31185__$1;
(statearr_31205_31249[(2)] = inst_31153);

(statearr_31205_31249[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (6))){
var inst_31100 = (state_31185[(10)]);
var state_31185__$1 = state_31185;
var statearr_31206_31250 = state_31185__$1;
(statearr_31206_31250[(2)] = inst_31100);

(statearr_31206_31250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (28))){
var inst_31147 = (state_31185[(2)]);
var inst_31148 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31149 = figwheel.client.heads_up.display_warning.call(null,inst_31148);
var state_31185__$1 = (function (){var statearr_31207 = state_31185;
(statearr_31207[(11)] = inst_31147);

return statearr_31207;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31185__$1,(29),inst_31149);
} else {
if((state_val_31186 === (25))){
var inst_31145 = figwheel.client.heads_up.clear.call(null);
var state_31185__$1 = state_31185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31185__$1,(28),inst_31145);
} else {
if((state_val_31186 === (34))){
var inst_31166 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31185__$1 = state_31185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31185__$1,(37),inst_31166);
} else {
if((state_val_31186 === (17))){
var inst_31125 = (state_31185[(2)]);
var inst_31126 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31127 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31126);
var state_31185__$1 = (function (){var statearr_31208 = state_31185;
(statearr_31208[(12)] = inst_31125);

return statearr_31208;
})();
var statearr_31209_31251 = state_31185__$1;
(statearr_31209_31251[(2)] = inst_31127);

(statearr_31209_31251[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (3))){
var inst_31117 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31185__$1 = state_31185;
if(cljs.core.truth_(inst_31117)){
var statearr_31210_31252 = state_31185__$1;
(statearr_31210_31252[(1)] = (13));

} else {
var statearr_31211_31253 = state_31185__$1;
(statearr_31211_31253[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (12))){
var inst_31113 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
var statearr_31212_31254 = state_31185__$1;
(statearr_31212_31254[(2)] = inst_31113);

(statearr_31212_31254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (2))){
var inst_31100 = (state_31185[(10)]);
var inst_31100__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31185__$1 = (function (){var statearr_31213 = state_31185;
(statearr_31213[(10)] = inst_31100__$1);

return statearr_31213;
})();
if(cljs.core.truth_(inst_31100__$1)){
var statearr_31214_31255 = state_31185__$1;
(statearr_31214_31255[(1)] = (5));

} else {
var statearr_31215_31256 = state_31185__$1;
(statearr_31215_31256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (23))){
var inst_31143 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31185__$1 = state_31185;
if(cljs.core.truth_(inst_31143)){
var statearr_31216_31257 = state_31185__$1;
(statearr_31216_31257[(1)] = (25));

} else {
var statearr_31217_31258 = state_31185__$1;
(statearr_31217_31258[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (35))){
var state_31185__$1 = state_31185;
var statearr_31218_31259 = state_31185__$1;
(statearr_31218_31259[(2)] = null);

(statearr_31218_31259[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (19))){
var inst_31138 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31185__$1 = state_31185;
if(cljs.core.truth_(inst_31138)){
var statearr_31219_31260 = state_31185__$1;
(statearr_31219_31260[(1)] = (22));

} else {
var statearr_31220_31261 = state_31185__$1;
(statearr_31220_31261[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (11))){
var inst_31109 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
var statearr_31221_31262 = state_31185__$1;
(statearr_31221_31262[(2)] = inst_31109);

(statearr_31221_31262[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (9))){
var inst_31111 = figwheel.client.heads_up.clear.call(null);
var state_31185__$1 = state_31185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31185__$1,(12),inst_31111);
} else {
if((state_val_31186 === (5))){
var inst_31102 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31185__$1 = state_31185;
var statearr_31222_31263 = state_31185__$1;
(statearr_31222_31263[(2)] = inst_31102);

(statearr_31222_31263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (14))){
var inst_31129 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31185__$1 = state_31185;
if(cljs.core.truth_(inst_31129)){
var statearr_31223_31264 = state_31185__$1;
(statearr_31223_31264[(1)] = (18));

} else {
var statearr_31224_31265 = state_31185__$1;
(statearr_31224_31265[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (26))){
var inst_31155 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31185__$1 = state_31185;
if(cljs.core.truth_(inst_31155)){
var statearr_31225_31266 = state_31185__$1;
(statearr_31225_31266[(1)] = (30));

} else {
var statearr_31226_31267 = state_31185__$1;
(statearr_31226_31267[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (16))){
var inst_31121 = (state_31185[(2)]);
var inst_31122 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31123 = figwheel.client.heads_up.display_exception.call(null,inst_31122);
var state_31185__$1 = (function (){var statearr_31227 = state_31185;
(statearr_31227[(13)] = inst_31121);

return statearr_31227;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31185__$1,(17),inst_31123);
} else {
if((state_val_31186 === (30))){
var inst_31157 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31158 = figwheel.client.heads_up.display_warning.call(null,inst_31157);
var state_31185__$1 = state_31185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31185__$1,(33),inst_31158);
} else {
if((state_val_31186 === (10))){
var inst_31115 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
var statearr_31228_31268 = state_31185__$1;
(statearr_31228_31268[(2)] = inst_31115);

(statearr_31228_31268[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (18))){
var inst_31131 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31132 = figwheel.client.heads_up.display_exception.call(null,inst_31131);
var state_31185__$1 = state_31185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31185__$1,(21),inst_31132);
} else {
if((state_val_31186 === (37))){
var inst_31168 = (state_31185[(2)]);
var state_31185__$1 = state_31185;
var statearr_31229_31269 = state_31185__$1;
(statearr_31229_31269[(2)] = inst_31168);

(statearr_31229_31269[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31186 === (8))){
var inst_31107 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31185__$1 = state_31185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31185__$1,(11),inst_31107);
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
});})(c__23749__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23659__auto__,c__23749__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23660__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23660__auto____0 = (function (){
var statearr_31230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31230[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23660__auto__);

(statearr_31230[(1)] = (1));

return statearr_31230;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23660__auto____1 = (function (state_31185){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_31185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e31231){if((e31231 instanceof Object)){
var ex__23663__auto__ = e31231;
var statearr_31232_31270 = state_31185;
(statearr_31232_31270[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31271 = state_31185;
state_31185 = G__31271;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23660__auto__ = function(state_31185){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23660__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23660__auto____1.call(this,state_31185);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23660__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23660__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23660__auto__;
})()
;})(switch__23659__auto__,c__23749__auto__,msg_hist,msg_names,msg))
})();
var state__23751__auto__ = (function (){var statearr_31233 = f__23750__auto__.call(null);
(statearr_31233[(6)] = c__23749__auto__);

return statearr_31233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(c__23749__auto__,msg_hist,msg_names,msg))
);

return c__23749__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23749__auto___31300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23749__auto___31300,ch){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (c__23749__auto___31300,ch){
return (function (state_31286){
var state_val_31287 = (state_31286[(1)]);
if((state_val_31287 === (1))){
var state_31286__$1 = state_31286;
var statearr_31288_31301 = state_31286__$1;
(statearr_31288_31301[(2)] = null);

(statearr_31288_31301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (2))){
var state_31286__$1 = state_31286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31286__$1,(4),ch);
} else {
if((state_val_31287 === (3))){
var inst_31284 = (state_31286[(2)]);
var state_31286__$1 = state_31286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31286__$1,inst_31284);
} else {
if((state_val_31287 === (4))){
var inst_31274 = (state_31286[(7)]);
var inst_31274__$1 = (state_31286[(2)]);
var state_31286__$1 = (function (){var statearr_31289 = state_31286;
(statearr_31289[(7)] = inst_31274__$1);

return statearr_31289;
})();
if(cljs.core.truth_(inst_31274__$1)){
var statearr_31290_31302 = state_31286__$1;
(statearr_31290_31302[(1)] = (5));

} else {
var statearr_31291_31303 = state_31286__$1;
(statearr_31291_31303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (5))){
var inst_31274 = (state_31286[(7)]);
var inst_31276 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31274);
var state_31286__$1 = state_31286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31286__$1,(8),inst_31276);
} else {
if((state_val_31287 === (6))){
var state_31286__$1 = state_31286;
var statearr_31292_31304 = state_31286__$1;
(statearr_31292_31304[(2)] = null);

(statearr_31292_31304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (7))){
var inst_31282 = (state_31286[(2)]);
var state_31286__$1 = state_31286;
var statearr_31293_31305 = state_31286__$1;
(statearr_31293_31305[(2)] = inst_31282);

(statearr_31293_31305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31287 === (8))){
var inst_31278 = (state_31286[(2)]);
var state_31286__$1 = (function (){var statearr_31294 = state_31286;
(statearr_31294[(8)] = inst_31278);

return statearr_31294;
})();
var statearr_31295_31306 = state_31286__$1;
(statearr_31295_31306[(2)] = null);

(statearr_31295_31306[(1)] = (2));


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
});})(c__23749__auto___31300,ch))
;
return ((function (switch__23659__auto__,c__23749__auto___31300,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23660__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23660__auto____0 = (function (){
var statearr_31296 = [null,null,null,null,null,null,null,null,null];
(statearr_31296[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23660__auto__);

(statearr_31296[(1)] = (1));

return statearr_31296;
});
var figwheel$client$heads_up_plugin_$_state_machine__23660__auto____1 = (function (state_31286){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_31286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e31297){if((e31297 instanceof Object)){
var ex__23663__auto__ = e31297;
var statearr_31298_31307 = state_31286;
(statearr_31298_31307[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31308 = state_31286;
state_31286 = G__31308;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23660__auto__ = function(state_31286){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23660__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23660__auto____1.call(this,state_31286);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23660__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23660__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23660__auto__;
})()
;})(switch__23659__auto__,c__23749__auto___31300,ch))
})();
var state__23751__auto__ = (function (){var statearr_31299 = f__23750__auto__.call(null);
(statearr_31299[(6)] = c__23749__auto___31300);

return statearr_31299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(c__23749__auto___31300,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23749__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23749__auto__){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (c__23749__auto__){
return (function (state_31314){
var state_val_31315 = (state_31314[(1)]);
if((state_val_31315 === (1))){
var inst_31309 = cljs.core.async.timeout.call(null,(3000));
var state_31314__$1 = state_31314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31314__$1,(2),inst_31309);
} else {
if((state_val_31315 === (2))){
var inst_31311 = (state_31314[(2)]);
var inst_31312 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31314__$1 = (function (){var statearr_31316 = state_31314;
(statearr_31316[(7)] = inst_31311);

return statearr_31316;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31314__$1,inst_31312);
} else {
return null;
}
}
});})(c__23749__auto__))
;
return ((function (switch__23659__auto__,c__23749__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23660__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23660__auto____0 = (function (){
var statearr_31317 = [null,null,null,null,null,null,null,null];
(statearr_31317[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23660__auto__);

(statearr_31317[(1)] = (1));

return statearr_31317;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23660__auto____1 = (function (state_31314){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_31314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e31318){if((e31318 instanceof Object)){
var ex__23663__auto__ = e31318;
var statearr_31319_31321 = state_31314;
(statearr_31319_31321[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31322 = state_31314;
state_31314 = G__31322;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23660__auto__ = function(state_31314){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23660__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23660__auto____1.call(this,state_31314);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23660__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23660__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23660__auto__;
})()
;})(switch__23659__auto__,c__23749__auto__))
})();
var state__23751__auto__ = (function (){var statearr_31320 = f__23750__auto__.call(null);
(statearr_31320[(6)] = c__23749__auto__);

return statearr_31320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(c__23749__auto__))
);

return c__23749__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23749__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23749__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (c__23749__auto__,figwheel_version,temp__5457__auto__){
return (function (state_31329){
var state_val_31330 = (state_31329[(1)]);
if((state_val_31330 === (1))){
var inst_31323 = cljs.core.async.timeout.call(null,(2000));
var state_31329__$1 = state_31329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31329__$1,(2),inst_31323);
} else {
if((state_val_31330 === (2))){
var inst_31325 = (state_31329[(2)]);
var inst_31326 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31327 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31326);
var state_31329__$1 = (function (){var statearr_31331 = state_31329;
(statearr_31331[(7)] = inst_31325);

return statearr_31331;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31329__$1,inst_31327);
} else {
return null;
}
}
});})(c__23749__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__23659__auto__,c__23749__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23660__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23660__auto____0 = (function (){
var statearr_31332 = [null,null,null,null,null,null,null,null];
(statearr_31332[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23660__auto__);

(statearr_31332[(1)] = (1));

return statearr_31332;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23660__auto____1 = (function (state_31329){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_31329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e31333){if((e31333 instanceof Object)){
var ex__23663__auto__ = e31333;
var statearr_31334_31336 = state_31329;
(statearr_31334_31336[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31337 = state_31329;
state_31329 = G__31337;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23660__auto__ = function(state_31329){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23660__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23660__auto____1.call(this,state_31329);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23660__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23660__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23660__auto__;
})()
;})(switch__23659__auto__,c__23749__auto__,figwheel_version,temp__5457__auto__))
})();
var state__23751__auto__ = (function (){var statearr_31335 = f__23750__auto__.call(null);
(statearr_31335[(6)] = c__23749__auto__);

return statearr_31335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(c__23749__auto__,figwheel_version,temp__5457__auto__))
);

return c__23749__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31338){
var map__31339 = p__31338;
var map__31339__$1 = ((((!((map__31339 == null)))?(((((map__31339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31339):map__31339);
var file = cljs.core.get.call(null,map__31339__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31339__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31339__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31341 = "";
var G__31341__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31341),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31341);
var G__31341__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31341__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31341__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31341__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31341__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31342){
var map__31343 = p__31342;
var map__31343__$1 = ((((!((map__31343 == null)))?(((((map__31343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31343):map__31343);
var ed = map__31343__$1;
var formatted_exception = cljs.core.get.call(null,map__31343__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31343__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31343__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31345_31349 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31346_31350 = null;
var count__31347_31351 = (0);
var i__31348_31352 = (0);
while(true){
if((i__31348_31352 < count__31347_31351)){
var msg_31353 = cljs.core._nth.call(null,chunk__31346_31350,i__31348_31352);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31353);


var G__31354 = seq__31345_31349;
var G__31355 = chunk__31346_31350;
var G__31356 = count__31347_31351;
var G__31357 = (i__31348_31352 + (1));
seq__31345_31349 = G__31354;
chunk__31346_31350 = G__31355;
count__31347_31351 = G__31356;
i__31348_31352 = G__31357;
continue;
} else {
var temp__5457__auto___31358 = cljs.core.seq.call(null,seq__31345_31349);
if(temp__5457__auto___31358){
var seq__31345_31359__$1 = temp__5457__auto___31358;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31345_31359__$1)){
var c__4319__auto___31360 = cljs.core.chunk_first.call(null,seq__31345_31359__$1);
var G__31361 = cljs.core.chunk_rest.call(null,seq__31345_31359__$1);
var G__31362 = c__4319__auto___31360;
var G__31363 = cljs.core.count.call(null,c__4319__auto___31360);
var G__31364 = (0);
seq__31345_31349 = G__31361;
chunk__31346_31350 = G__31362;
count__31347_31351 = G__31363;
i__31348_31352 = G__31364;
continue;
} else {
var msg_31365 = cljs.core.first.call(null,seq__31345_31359__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31365);


var G__31366 = cljs.core.next.call(null,seq__31345_31359__$1);
var G__31367 = null;
var G__31368 = (0);
var G__31369 = (0);
seq__31345_31349 = G__31366;
chunk__31346_31350 = G__31367;
count__31347_31351 = G__31368;
i__31348_31352 = G__31369;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31370){
var map__31371 = p__31370;
var map__31371__$1 = ((((!((map__31371 == null)))?(((((map__31371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31371):map__31371);
var w = map__31371__$1;
var message = cljs.core.get.call(null,map__31371__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31373 = cljs.core.seq.call(null,plugins);
var chunk__31374 = null;
var count__31375 = (0);
var i__31376 = (0);
while(true){
if((i__31376 < count__31375)){
var vec__31377 = cljs.core._nth.call(null,chunk__31374,i__31376);
var k = cljs.core.nth.call(null,vec__31377,(0),null);
var plugin = cljs.core.nth.call(null,vec__31377,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31383 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31373,chunk__31374,count__31375,i__31376,pl_31383,vec__31377,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31383.call(null,msg_hist);
});})(seq__31373,chunk__31374,count__31375,i__31376,pl_31383,vec__31377,k,plugin))
);
} else {
}


var G__31384 = seq__31373;
var G__31385 = chunk__31374;
var G__31386 = count__31375;
var G__31387 = (i__31376 + (1));
seq__31373 = G__31384;
chunk__31374 = G__31385;
count__31375 = G__31386;
i__31376 = G__31387;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31373);
if(temp__5457__auto__){
var seq__31373__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31373__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31373__$1);
var G__31388 = cljs.core.chunk_rest.call(null,seq__31373__$1);
var G__31389 = c__4319__auto__;
var G__31390 = cljs.core.count.call(null,c__4319__auto__);
var G__31391 = (0);
seq__31373 = G__31388;
chunk__31374 = G__31389;
count__31375 = G__31390;
i__31376 = G__31391;
continue;
} else {
var vec__31380 = cljs.core.first.call(null,seq__31373__$1);
var k = cljs.core.nth.call(null,vec__31380,(0),null);
var plugin = cljs.core.nth.call(null,vec__31380,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31392 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31373,chunk__31374,count__31375,i__31376,pl_31392,vec__31380,k,plugin,seq__31373__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31392.call(null,msg_hist);
});})(seq__31373,chunk__31374,count__31375,i__31376,pl_31392,vec__31380,k,plugin,seq__31373__$1,temp__5457__auto__))
);
} else {
}


var G__31393 = cljs.core.next.call(null,seq__31373__$1);
var G__31394 = null;
var G__31395 = (0);
var G__31396 = (0);
seq__31373 = G__31393;
chunk__31374 = G__31394;
count__31375 = G__31395;
i__31376 = G__31396;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__31398 = arguments.length;
switch (G__31398) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31399_31404 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31400_31405 = null;
var count__31401_31406 = (0);
var i__31402_31407 = (0);
while(true){
if((i__31402_31407 < count__31401_31406)){
var msg_31408 = cljs.core._nth.call(null,chunk__31400_31405,i__31402_31407);
figwheel.client.socket.handle_incoming_message.call(null,msg_31408);


var G__31409 = seq__31399_31404;
var G__31410 = chunk__31400_31405;
var G__31411 = count__31401_31406;
var G__31412 = (i__31402_31407 + (1));
seq__31399_31404 = G__31409;
chunk__31400_31405 = G__31410;
count__31401_31406 = G__31411;
i__31402_31407 = G__31412;
continue;
} else {
var temp__5457__auto___31413 = cljs.core.seq.call(null,seq__31399_31404);
if(temp__5457__auto___31413){
var seq__31399_31414__$1 = temp__5457__auto___31413;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31399_31414__$1)){
var c__4319__auto___31415 = cljs.core.chunk_first.call(null,seq__31399_31414__$1);
var G__31416 = cljs.core.chunk_rest.call(null,seq__31399_31414__$1);
var G__31417 = c__4319__auto___31415;
var G__31418 = cljs.core.count.call(null,c__4319__auto___31415);
var G__31419 = (0);
seq__31399_31404 = G__31416;
chunk__31400_31405 = G__31417;
count__31401_31406 = G__31418;
i__31402_31407 = G__31419;
continue;
} else {
var msg_31420 = cljs.core.first.call(null,seq__31399_31414__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31420);


var G__31421 = cljs.core.next.call(null,seq__31399_31414__$1);
var G__31422 = null;
var G__31423 = (0);
var G__31424 = (0);
seq__31399_31404 = G__31421;
chunk__31400_31405 = G__31422;
count__31401_31406 = G__31423;
i__31402_31407 = G__31424;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31429 = arguments.length;
var i__4500__auto___31430 = (0);
while(true){
if((i__4500__auto___31430 < len__4499__auto___31429)){
args__4502__auto__.push((arguments[i__4500__auto___31430]));

var G__31431 = (i__4500__auto___31430 + (1));
i__4500__auto___31430 = G__31431;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31426){
var map__31427 = p__31426;
var map__31427__$1 = ((((!((map__31427 == null)))?(((((map__31427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31427):map__31427);
var opts = map__31427__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31425){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31425));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31432){if((e31432 instanceof Error)){
var e = e31432;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31432;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31433){
var map__31434 = p__31433;
var map__31434__$1 = ((((!((map__31434 == null)))?(((((map__31434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31434):map__31434);
var msg_name = cljs.core.get.call(null,map__31434__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1557924425261
