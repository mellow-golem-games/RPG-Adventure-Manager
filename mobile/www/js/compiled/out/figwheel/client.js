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
}catch (e30951){if((e30951 instanceof Error)){
var e = e30951;
return "Error: Unable to stringify";
} else {
throw e30951;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30954 = arguments.length;
switch (G__30954) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30952_SHARP_){
if(typeof p1__30952_SHARP_ === 'string'){
return p1__30952_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30952_SHARP_);
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
var len__4499__auto___30957 = arguments.length;
var i__4500__auto___30958 = (0);
while(true){
if((i__4500__auto___30958 < len__4499__auto___30957)){
args__4502__auto__.push((arguments[i__4500__auto___30958]));

var G__30959 = (i__4500__auto___30958 + (1));
i__4500__auto___30958 = G__30959;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30956){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30956));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30961 = arguments.length;
var i__4500__auto___30962 = (0);
while(true){
if((i__4500__auto___30962 < len__4499__auto___30961)){
args__4502__auto__.push((arguments[i__4500__auto___30962]));

var G__30963 = (i__4500__auto___30962 + (1));
i__4500__auto___30962 = G__30963;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30960){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30960));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30964){
var map__30965 = p__30964;
var map__30965__$1 = ((((!((map__30965 == null)))?(((((map__30965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30965):map__30965);
var message = cljs.core.get.call(null,map__30965__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30965__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__23748__auto___31044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto___31044,ch){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto___31044,ch){
return (function (state_31016){
var state_val_31017 = (state_31016[(1)]);
if((state_val_31017 === (7))){
var inst_31012 = (state_31016[(2)]);
var state_31016__$1 = state_31016;
var statearr_31018_31045 = state_31016__$1;
(statearr_31018_31045[(2)] = inst_31012);

(statearr_31018_31045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (1))){
var state_31016__$1 = state_31016;
var statearr_31019_31046 = state_31016__$1;
(statearr_31019_31046[(2)] = null);

(statearr_31019_31046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (4))){
var inst_30969 = (state_31016[(7)]);
var inst_30969__$1 = (state_31016[(2)]);
var state_31016__$1 = (function (){var statearr_31020 = state_31016;
(statearr_31020[(7)] = inst_30969__$1);

return statearr_31020;
})();
if(cljs.core.truth_(inst_30969__$1)){
var statearr_31021_31047 = state_31016__$1;
(statearr_31021_31047[(1)] = (5));

} else {
var statearr_31022_31048 = state_31016__$1;
(statearr_31022_31048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (15))){
var inst_30976 = (state_31016[(8)]);
var inst_30991 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30976);
var inst_30992 = cljs.core.first.call(null,inst_30991);
var inst_30993 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30992);
var inst_30994 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30993)].join('');
var inst_30995 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30994);
var state_31016__$1 = state_31016;
var statearr_31023_31049 = state_31016__$1;
(statearr_31023_31049[(2)] = inst_30995);

(statearr_31023_31049[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (13))){
var inst_31000 = (state_31016[(2)]);
var state_31016__$1 = state_31016;
var statearr_31024_31050 = state_31016__$1;
(statearr_31024_31050[(2)] = inst_31000);

(statearr_31024_31050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (6))){
var state_31016__$1 = state_31016;
var statearr_31025_31051 = state_31016__$1;
(statearr_31025_31051[(2)] = null);

(statearr_31025_31051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (17))){
var inst_30998 = (state_31016[(2)]);
var state_31016__$1 = state_31016;
var statearr_31026_31052 = state_31016__$1;
(statearr_31026_31052[(2)] = inst_30998);

(statearr_31026_31052[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (3))){
var inst_31014 = (state_31016[(2)]);
var state_31016__$1 = state_31016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31016__$1,inst_31014);
} else {
if((state_val_31017 === (12))){
var inst_30975 = (state_31016[(9)]);
var inst_30989 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30975,opts);
var state_31016__$1 = state_31016;
if(cljs.core.truth_(inst_30989)){
var statearr_31027_31053 = state_31016__$1;
(statearr_31027_31053[(1)] = (15));

} else {
var statearr_31028_31054 = state_31016__$1;
(statearr_31028_31054[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (2))){
var state_31016__$1 = state_31016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31016__$1,(4),ch);
} else {
if((state_val_31017 === (11))){
var inst_30976 = (state_31016[(8)]);
var inst_30981 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30982 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30976);
var inst_30983 = cljs.core.async.timeout.call(null,(1000));
var inst_30984 = [inst_30982,inst_30983];
var inst_30985 = (new cljs.core.PersistentVector(null,2,(5),inst_30981,inst_30984,null));
var state_31016__$1 = state_31016;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31016__$1,(14),inst_30985);
} else {
if((state_val_31017 === (9))){
var inst_30976 = (state_31016[(8)]);
var inst_31002 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31003 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30976);
var inst_31004 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31003);
var inst_31005 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31004)].join('');
var inst_31006 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31005);
var state_31016__$1 = (function (){var statearr_31029 = state_31016;
(statearr_31029[(10)] = inst_31002);

return statearr_31029;
})();
var statearr_31030_31055 = state_31016__$1;
(statearr_31030_31055[(2)] = inst_31006);

(statearr_31030_31055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (5))){
var inst_30969 = (state_31016[(7)]);
var inst_30971 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30972 = (new cljs.core.PersistentArrayMap(null,2,inst_30971,null));
var inst_30973 = (new cljs.core.PersistentHashSet(null,inst_30972,null));
var inst_30974 = figwheel.client.focus_msgs.call(null,inst_30973,inst_30969);
var inst_30975 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30974);
var inst_30976 = cljs.core.first.call(null,inst_30974);
var inst_30977 = figwheel.client.autoload_QMARK_.call(null);
var state_31016__$1 = (function (){var statearr_31031 = state_31016;
(statearr_31031[(8)] = inst_30976);

(statearr_31031[(9)] = inst_30975);

return statearr_31031;
})();
if(cljs.core.truth_(inst_30977)){
var statearr_31032_31056 = state_31016__$1;
(statearr_31032_31056[(1)] = (8));

} else {
var statearr_31033_31057 = state_31016__$1;
(statearr_31033_31057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (14))){
var inst_30987 = (state_31016[(2)]);
var state_31016__$1 = state_31016;
var statearr_31034_31058 = state_31016__$1;
(statearr_31034_31058[(2)] = inst_30987);

(statearr_31034_31058[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (16))){
var state_31016__$1 = state_31016;
var statearr_31035_31059 = state_31016__$1;
(statearr_31035_31059[(2)] = null);

(statearr_31035_31059[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (10))){
var inst_31008 = (state_31016[(2)]);
var state_31016__$1 = (function (){var statearr_31036 = state_31016;
(statearr_31036[(11)] = inst_31008);

return statearr_31036;
})();
var statearr_31037_31060 = state_31016__$1;
(statearr_31037_31060[(2)] = null);

(statearr_31037_31060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31017 === (8))){
var inst_30975 = (state_31016[(9)]);
var inst_30979 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30975,opts);
var state_31016__$1 = state_31016;
if(cljs.core.truth_(inst_30979)){
var statearr_31038_31061 = state_31016__$1;
(statearr_31038_31061[(1)] = (11));

} else {
var statearr_31039_31062 = state_31016__$1;
(statearr_31039_31062[(1)] = (12));

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
});})(c__23748__auto___31044,ch))
;
return ((function (switch__23658__auto__,c__23748__auto___31044,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23659__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23659__auto____0 = (function (){
var statearr_31040 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31040[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23659__auto__);

(statearr_31040[(1)] = (1));

return statearr_31040;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23659__auto____1 = (function (state_31016){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_31016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e31041){if((e31041 instanceof Object)){
var ex__23662__auto__ = e31041;
var statearr_31042_31063 = state_31016;
(statearr_31042_31063[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31064 = state_31016;
state_31016 = G__31064;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23659__auto__ = function(state_31016){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23659__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23659__auto____1.call(this,state_31016);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23659__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23659__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto___31044,ch))
})();
var state__23750__auto__ = (function (){var statearr_31043 = f__23749__auto__.call(null);
(statearr_31043[(6)] = c__23748__auto___31044);

return statearr_31043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto___31044,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31065_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31065_SHARP_));
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
var base_path_31069 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31069){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31067 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31068 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31067,_STAR_print_fn_STAR_31068,sb,base_path_31069){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_31067,_STAR_print_fn_STAR_31068,sb,base_path_31069))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31068;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31067;
}}catch (e31066){if((e31066 instanceof Error)){
var e = e31066;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31069], null));
} else {
var e = e31066;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31069))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31070){
var map__31071 = p__31070;
var map__31071__$1 = ((((!((map__31071 == null)))?(((((map__31071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31071):map__31071);
var opts = map__31071__$1;
var build_id = cljs.core.get.call(null,map__31071__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31071,map__31071__$1,opts,build_id){
return (function (p__31073){
var vec__31074 = p__31073;
var seq__31075 = cljs.core.seq.call(null,vec__31074);
var first__31076 = cljs.core.first.call(null,seq__31075);
var seq__31075__$1 = cljs.core.next.call(null,seq__31075);
var map__31077 = first__31076;
var map__31077__$1 = ((((!((map__31077 == null)))?(((((map__31077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31077):map__31077);
var msg = map__31077__$1;
var msg_name = cljs.core.get.call(null,map__31077__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31075__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31074,seq__31075,first__31076,seq__31075__$1,map__31077,map__31077__$1,msg,msg_name,_,map__31071,map__31071__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31074,seq__31075,first__31076,seq__31075__$1,map__31077,map__31077__$1,msg,msg_name,_,map__31071,map__31071__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31071,map__31071__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31079){
var vec__31080 = p__31079;
var seq__31081 = cljs.core.seq.call(null,vec__31080);
var first__31082 = cljs.core.first.call(null,seq__31081);
var seq__31081__$1 = cljs.core.next.call(null,seq__31081);
var map__31083 = first__31082;
var map__31083__$1 = ((((!((map__31083 == null)))?(((((map__31083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31083):map__31083);
var msg = map__31083__$1;
var msg_name = cljs.core.get.call(null,map__31083__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31081__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31085){
var map__31086 = p__31085;
var map__31086__$1 = ((((!((map__31086 == null)))?(((((map__31086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31086):map__31086);
var on_compile_warning = cljs.core.get.call(null,map__31086__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31086__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31086,map__31086__$1,on_compile_warning,on_compile_fail){
return (function (p__31088){
var vec__31089 = p__31088;
var seq__31090 = cljs.core.seq.call(null,vec__31089);
var first__31091 = cljs.core.first.call(null,seq__31090);
var seq__31090__$1 = cljs.core.next.call(null,seq__31090);
var map__31092 = first__31091;
var map__31092__$1 = ((((!((map__31092 == null)))?(((((map__31092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31092):map__31092);
var msg = map__31092__$1;
var msg_name = cljs.core.get.call(null,map__31092__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31090__$1;
var pred__31094 = cljs.core._EQ_;
var expr__31095 = msg_name;
if(cljs.core.truth_(pred__31094.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31095))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31094.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31095))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31086,map__31086__$1,on_compile_warning,on_compile_fail))
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
var c__23748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto__,msg_hist,msg_names,msg){
return (function (state_31184){
var state_val_31185 = (state_31184[(1)]);
if((state_val_31185 === (7))){
var inst_31104 = (state_31184[(2)]);
var state_31184__$1 = state_31184;
if(cljs.core.truth_(inst_31104)){
var statearr_31186_31233 = state_31184__$1;
(statearr_31186_31233[(1)] = (8));

} else {
var statearr_31187_31234 = state_31184__$1;
(statearr_31187_31234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (20))){
var inst_31178 = (state_31184[(2)]);
var state_31184__$1 = state_31184;
var statearr_31188_31235 = state_31184__$1;
(statearr_31188_31235[(2)] = inst_31178);

(statearr_31188_31235[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (27))){
var inst_31174 = (state_31184[(2)]);
var state_31184__$1 = state_31184;
var statearr_31189_31236 = state_31184__$1;
(statearr_31189_31236[(2)] = inst_31174);

(statearr_31189_31236[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (1))){
var inst_31097 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31184__$1 = state_31184;
if(cljs.core.truth_(inst_31097)){
var statearr_31190_31237 = state_31184__$1;
(statearr_31190_31237[(1)] = (2));

} else {
var statearr_31191_31238 = state_31184__$1;
(statearr_31191_31238[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (24))){
var inst_31176 = (state_31184[(2)]);
var state_31184__$1 = state_31184;
var statearr_31192_31239 = state_31184__$1;
(statearr_31192_31239[(2)] = inst_31176);

(statearr_31192_31239[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (4))){
var inst_31182 = (state_31184[(2)]);
var state_31184__$1 = state_31184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31184__$1,inst_31182);
} else {
if((state_val_31185 === (15))){
var inst_31180 = (state_31184[(2)]);
var state_31184__$1 = state_31184;
var statearr_31193_31240 = state_31184__$1;
(statearr_31193_31240[(2)] = inst_31180);

(statearr_31193_31240[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (21))){
var inst_31133 = (state_31184[(2)]);
var inst_31134 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31135 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31134);
var state_31184__$1 = (function (){var statearr_31194 = state_31184;
(statearr_31194[(7)] = inst_31133);

return statearr_31194;
})();
var statearr_31195_31241 = state_31184__$1;
(statearr_31195_31241[(2)] = inst_31135);

(statearr_31195_31241[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (31))){
var inst_31163 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31184__$1 = state_31184;
if(cljs.core.truth_(inst_31163)){
var statearr_31196_31242 = state_31184__$1;
(statearr_31196_31242[(1)] = (34));

} else {
var statearr_31197_31243 = state_31184__$1;
(statearr_31197_31243[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (32))){
var inst_31172 = (state_31184[(2)]);
var state_31184__$1 = state_31184;
var statearr_31198_31244 = state_31184__$1;
(statearr_31198_31244[(2)] = inst_31172);

(statearr_31198_31244[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (33))){
var inst_31159 = (state_31184[(2)]);
var inst_31160 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31161 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31160);
var state_31184__$1 = (function (){var statearr_31199 = state_31184;
(statearr_31199[(8)] = inst_31159);

return statearr_31199;
})();
var statearr_31200_31245 = state_31184__$1;
(statearr_31200_31245[(2)] = inst_31161);

(statearr_31200_31245[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (13))){
var inst_31118 = figwheel.client.heads_up.clear.call(null);
var state_31184__$1 = state_31184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31184__$1,(16),inst_31118);
} else {
if((state_val_31185 === (22))){
var inst_31139 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31140 = figwheel.client.heads_up.append_warning_message.call(null,inst_31139);
var state_31184__$1 = state_31184;
var statearr_31201_31246 = state_31184__$1;
(statearr_31201_31246[(2)] = inst_31140);

(statearr_31201_31246[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (36))){
var inst_31170 = (state_31184[(2)]);
var state_31184__$1 = state_31184;
var statearr_31202_31247 = state_31184__$1;
(statearr_31202_31247[(2)] = inst_31170);

(statearr_31202_31247[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (29))){
var inst_31150 = (state_31184[(2)]);
var inst_31151 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31152 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31151);
var state_31184__$1 = (function (){var statearr_31203 = state_31184;
(statearr_31203[(9)] = inst_31150);

return statearr_31203;
})();
var statearr_31204_31248 = state_31184__$1;
(statearr_31204_31248[(2)] = inst_31152);

(statearr_31204_31248[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (6))){
var inst_31099 = (state_31184[(10)]);
var state_31184__$1 = state_31184;
var statearr_31205_31249 = state_31184__$1;
(statearr_31205_31249[(2)] = inst_31099);

(statearr_31205_31249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (28))){
var inst_31146 = (state_31184[(2)]);
var inst_31147 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31148 = figwheel.client.heads_up.display_warning.call(null,inst_31147);
var state_31184__$1 = (function (){var statearr_31206 = state_31184;
(statearr_31206[(11)] = inst_31146);

return statearr_31206;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31184__$1,(29),inst_31148);
} else {
if((state_val_31185 === (25))){
var inst_31144 = figwheel.client.heads_up.clear.call(null);
var state_31184__$1 = state_31184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31184__$1,(28),inst_31144);
} else {
if((state_val_31185 === (34))){
var inst_31165 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31184__$1 = state_31184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31184__$1,(37),inst_31165);
} else {
if((state_val_31185 === (17))){
var inst_31124 = (state_31184[(2)]);
var inst_31125 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31126 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31125);
var state_31184__$1 = (function (){var statearr_31207 = state_31184;
(statearr_31207[(12)] = inst_31124);

return statearr_31207;
})();
var statearr_31208_31250 = state_31184__$1;
(statearr_31208_31250[(2)] = inst_31126);

(statearr_31208_31250[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (3))){
var inst_31116 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31184__$1 = state_31184;
if(cljs.core.truth_(inst_31116)){
var statearr_31209_31251 = state_31184__$1;
(statearr_31209_31251[(1)] = (13));

} else {
var statearr_31210_31252 = state_31184__$1;
(statearr_31210_31252[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (12))){
var inst_31112 = (state_31184[(2)]);
var state_31184__$1 = state_31184;
var statearr_31211_31253 = state_31184__$1;
(statearr_31211_31253[(2)] = inst_31112);

(statearr_31211_31253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (2))){
var inst_31099 = (state_31184[(10)]);
var inst_31099__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31184__$1 = (function (){var statearr_31212 = state_31184;
(statearr_31212[(10)] = inst_31099__$1);

return statearr_31212;
})();
if(cljs.core.truth_(inst_31099__$1)){
var statearr_31213_31254 = state_31184__$1;
(statearr_31213_31254[(1)] = (5));

} else {
var statearr_31214_31255 = state_31184__$1;
(statearr_31214_31255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (23))){
var inst_31142 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31184__$1 = state_31184;
if(cljs.core.truth_(inst_31142)){
var statearr_31215_31256 = state_31184__$1;
(statearr_31215_31256[(1)] = (25));

} else {
var statearr_31216_31257 = state_31184__$1;
(statearr_31216_31257[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (35))){
var state_31184__$1 = state_31184;
var statearr_31217_31258 = state_31184__$1;
(statearr_31217_31258[(2)] = null);

(statearr_31217_31258[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (19))){
var inst_31137 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31184__$1 = state_31184;
if(cljs.core.truth_(inst_31137)){
var statearr_31218_31259 = state_31184__$1;
(statearr_31218_31259[(1)] = (22));

} else {
var statearr_31219_31260 = state_31184__$1;
(statearr_31219_31260[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (11))){
var inst_31108 = (state_31184[(2)]);
var state_31184__$1 = state_31184;
var statearr_31220_31261 = state_31184__$1;
(statearr_31220_31261[(2)] = inst_31108);

(statearr_31220_31261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (9))){
var inst_31110 = figwheel.client.heads_up.clear.call(null);
var state_31184__$1 = state_31184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31184__$1,(12),inst_31110);
} else {
if((state_val_31185 === (5))){
var inst_31101 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31184__$1 = state_31184;
var statearr_31221_31262 = state_31184__$1;
(statearr_31221_31262[(2)] = inst_31101);

(statearr_31221_31262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (14))){
var inst_31128 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31184__$1 = state_31184;
if(cljs.core.truth_(inst_31128)){
var statearr_31222_31263 = state_31184__$1;
(statearr_31222_31263[(1)] = (18));

} else {
var statearr_31223_31264 = state_31184__$1;
(statearr_31223_31264[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (26))){
var inst_31154 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31184__$1 = state_31184;
if(cljs.core.truth_(inst_31154)){
var statearr_31224_31265 = state_31184__$1;
(statearr_31224_31265[(1)] = (30));

} else {
var statearr_31225_31266 = state_31184__$1;
(statearr_31225_31266[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (16))){
var inst_31120 = (state_31184[(2)]);
var inst_31121 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31122 = figwheel.client.heads_up.display_exception.call(null,inst_31121);
var state_31184__$1 = (function (){var statearr_31226 = state_31184;
(statearr_31226[(13)] = inst_31120);

return statearr_31226;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31184__$1,(17),inst_31122);
} else {
if((state_val_31185 === (30))){
var inst_31156 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31157 = figwheel.client.heads_up.display_warning.call(null,inst_31156);
var state_31184__$1 = state_31184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31184__$1,(33),inst_31157);
} else {
if((state_val_31185 === (10))){
var inst_31114 = (state_31184[(2)]);
var state_31184__$1 = state_31184;
var statearr_31227_31267 = state_31184__$1;
(statearr_31227_31267[(2)] = inst_31114);

(statearr_31227_31267[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (18))){
var inst_31130 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31131 = figwheel.client.heads_up.display_exception.call(null,inst_31130);
var state_31184__$1 = state_31184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31184__$1,(21),inst_31131);
} else {
if((state_val_31185 === (37))){
var inst_31167 = (state_31184[(2)]);
var state_31184__$1 = state_31184;
var statearr_31228_31268 = state_31184__$1;
(statearr_31228_31268[(2)] = inst_31167);

(statearr_31228_31268[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (8))){
var inst_31106 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31184__$1 = state_31184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31184__$1,(11),inst_31106);
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
});})(c__23748__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23658__auto__,c__23748__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23659__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23659__auto____0 = (function (){
var statearr_31229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31229[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23659__auto__);

(statearr_31229[(1)] = (1));

return statearr_31229;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23659__auto____1 = (function (state_31184){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_31184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e31230){if((e31230 instanceof Object)){
var ex__23662__auto__ = e31230;
var statearr_31231_31269 = state_31184;
(statearr_31231_31269[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31270 = state_31184;
state_31184 = G__31270;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23659__auto__ = function(state_31184){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23659__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23659__auto____1.call(this,state_31184);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23659__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23659__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto__,msg_hist,msg_names,msg))
})();
var state__23750__auto__ = (function (){var statearr_31232 = f__23749__auto__.call(null);
(statearr_31232[(6)] = c__23748__auto__);

return statearr_31232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto__,msg_hist,msg_names,msg))
);

return c__23748__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23748__auto___31299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto___31299,ch){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto___31299,ch){
return (function (state_31285){
var state_val_31286 = (state_31285[(1)]);
if((state_val_31286 === (1))){
var state_31285__$1 = state_31285;
var statearr_31287_31300 = state_31285__$1;
(statearr_31287_31300[(2)] = null);

(statearr_31287_31300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31286 === (2))){
var state_31285__$1 = state_31285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31285__$1,(4),ch);
} else {
if((state_val_31286 === (3))){
var inst_31283 = (state_31285[(2)]);
var state_31285__$1 = state_31285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31285__$1,inst_31283);
} else {
if((state_val_31286 === (4))){
var inst_31273 = (state_31285[(7)]);
var inst_31273__$1 = (state_31285[(2)]);
var state_31285__$1 = (function (){var statearr_31288 = state_31285;
(statearr_31288[(7)] = inst_31273__$1);

return statearr_31288;
})();
if(cljs.core.truth_(inst_31273__$1)){
var statearr_31289_31301 = state_31285__$1;
(statearr_31289_31301[(1)] = (5));

} else {
var statearr_31290_31302 = state_31285__$1;
(statearr_31290_31302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31286 === (5))){
var inst_31273 = (state_31285[(7)]);
var inst_31275 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31273);
var state_31285__$1 = state_31285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31285__$1,(8),inst_31275);
} else {
if((state_val_31286 === (6))){
var state_31285__$1 = state_31285;
var statearr_31291_31303 = state_31285__$1;
(statearr_31291_31303[(2)] = null);

(statearr_31291_31303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31286 === (7))){
var inst_31281 = (state_31285[(2)]);
var state_31285__$1 = state_31285;
var statearr_31292_31304 = state_31285__$1;
(statearr_31292_31304[(2)] = inst_31281);

(statearr_31292_31304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31286 === (8))){
var inst_31277 = (state_31285[(2)]);
var state_31285__$1 = (function (){var statearr_31293 = state_31285;
(statearr_31293[(8)] = inst_31277);

return statearr_31293;
})();
var statearr_31294_31305 = state_31285__$1;
(statearr_31294_31305[(2)] = null);

(statearr_31294_31305[(1)] = (2));


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
});})(c__23748__auto___31299,ch))
;
return ((function (switch__23658__auto__,c__23748__auto___31299,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23659__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23659__auto____0 = (function (){
var statearr_31295 = [null,null,null,null,null,null,null,null,null];
(statearr_31295[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23659__auto__);

(statearr_31295[(1)] = (1));

return statearr_31295;
});
var figwheel$client$heads_up_plugin_$_state_machine__23659__auto____1 = (function (state_31285){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_31285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e31296){if((e31296 instanceof Object)){
var ex__23662__auto__ = e31296;
var statearr_31297_31306 = state_31285;
(statearr_31297_31306[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31307 = state_31285;
state_31285 = G__31307;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23659__auto__ = function(state_31285){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23659__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23659__auto____1.call(this,state_31285);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23659__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23659__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto___31299,ch))
})();
var state__23750__auto__ = (function (){var statearr_31298 = f__23749__auto__.call(null);
(statearr_31298[(6)] = c__23748__auto___31299);

return statearr_31298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto___31299,ch))
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
var c__23748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto__){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto__){
return (function (state_31313){
var state_val_31314 = (state_31313[(1)]);
if((state_val_31314 === (1))){
var inst_31308 = cljs.core.async.timeout.call(null,(3000));
var state_31313__$1 = state_31313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31313__$1,(2),inst_31308);
} else {
if((state_val_31314 === (2))){
var inst_31310 = (state_31313[(2)]);
var inst_31311 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31313__$1 = (function (){var statearr_31315 = state_31313;
(statearr_31315[(7)] = inst_31310);

return statearr_31315;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31313__$1,inst_31311);
} else {
return null;
}
}
});})(c__23748__auto__))
;
return ((function (switch__23658__auto__,c__23748__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23659__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23659__auto____0 = (function (){
var statearr_31316 = [null,null,null,null,null,null,null,null];
(statearr_31316[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23659__auto__);

(statearr_31316[(1)] = (1));

return statearr_31316;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23659__auto____1 = (function (state_31313){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_31313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e31317){if((e31317 instanceof Object)){
var ex__23662__auto__ = e31317;
var statearr_31318_31320 = state_31313;
(statearr_31318_31320[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31321 = state_31313;
state_31313 = G__31321;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23659__auto__ = function(state_31313){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23659__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23659__auto____1.call(this,state_31313);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23659__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23659__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto__))
})();
var state__23750__auto__ = (function (){var statearr_31319 = f__23749__auto__.call(null);
(statearr_31319[(6)] = c__23748__auto__);

return statearr_31319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto__))
);

return c__23748__auto__;
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
var c__23748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto__,figwheel_version,temp__5457__auto__){
return (function (state_31328){
var state_val_31329 = (state_31328[(1)]);
if((state_val_31329 === (1))){
var inst_31322 = cljs.core.async.timeout.call(null,(2000));
var state_31328__$1 = state_31328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31328__$1,(2),inst_31322);
} else {
if((state_val_31329 === (2))){
var inst_31324 = (state_31328[(2)]);
var inst_31325 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31326 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31325);
var state_31328__$1 = (function (){var statearr_31330 = state_31328;
(statearr_31330[(7)] = inst_31324);

return statearr_31330;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31328__$1,inst_31326);
} else {
return null;
}
}
});})(c__23748__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__23658__auto__,c__23748__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23659__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23659__auto____0 = (function (){
var statearr_31331 = [null,null,null,null,null,null,null,null];
(statearr_31331[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23659__auto__);

(statearr_31331[(1)] = (1));

return statearr_31331;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23659__auto____1 = (function (state_31328){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_31328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e31332){if((e31332 instanceof Object)){
var ex__23662__auto__ = e31332;
var statearr_31333_31335 = state_31328;
(statearr_31333_31335[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31336 = state_31328;
state_31328 = G__31336;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23659__auto__ = function(state_31328){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23659__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23659__auto____1.call(this,state_31328);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23659__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23659__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto__,figwheel_version,temp__5457__auto__))
})();
var state__23750__auto__ = (function (){var statearr_31334 = f__23749__auto__.call(null);
(statearr_31334[(6)] = c__23748__auto__);

return statearr_31334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto__,figwheel_version,temp__5457__auto__))
);

return c__23748__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31337){
var map__31338 = p__31337;
var map__31338__$1 = ((((!((map__31338 == null)))?(((((map__31338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31338):map__31338);
var file = cljs.core.get.call(null,map__31338__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31338__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31338__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31340 = "";
var G__31340__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31340),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31340);
var G__31340__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31340__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31340__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31340__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31340__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31341){
var map__31342 = p__31341;
var map__31342__$1 = ((((!((map__31342 == null)))?(((((map__31342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31342):map__31342);
var ed = map__31342__$1;
var formatted_exception = cljs.core.get.call(null,map__31342__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31342__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31342__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31344_31348 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31345_31349 = null;
var count__31346_31350 = (0);
var i__31347_31351 = (0);
while(true){
if((i__31347_31351 < count__31346_31350)){
var msg_31352 = cljs.core._nth.call(null,chunk__31345_31349,i__31347_31351);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31352);


var G__31353 = seq__31344_31348;
var G__31354 = chunk__31345_31349;
var G__31355 = count__31346_31350;
var G__31356 = (i__31347_31351 + (1));
seq__31344_31348 = G__31353;
chunk__31345_31349 = G__31354;
count__31346_31350 = G__31355;
i__31347_31351 = G__31356;
continue;
} else {
var temp__5457__auto___31357 = cljs.core.seq.call(null,seq__31344_31348);
if(temp__5457__auto___31357){
var seq__31344_31358__$1 = temp__5457__auto___31357;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31344_31358__$1)){
var c__4319__auto___31359 = cljs.core.chunk_first.call(null,seq__31344_31358__$1);
var G__31360 = cljs.core.chunk_rest.call(null,seq__31344_31358__$1);
var G__31361 = c__4319__auto___31359;
var G__31362 = cljs.core.count.call(null,c__4319__auto___31359);
var G__31363 = (0);
seq__31344_31348 = G__31360;
chunk__31345_31349 = G__31361;
count__31346_31350 = G__31362;
i__31347_31351 = G__31363;
continue;
} else {
var msg_31364 = cljs.core.first.call(null,seq__31344_31358__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31364);


var G__31365 = cljs.core.next.call(null,seq__31344_31358__$1);
var G__31366 = null;
var G__31367 = (0);
var G__31368 = (0);
seq__31344_31348 = G__31365;
chunk__31345_31349 = G__31366;
count__31346_31350 = G__31367;
i__31347_31351 = G__31368;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31369){
var map__31370 = p__31369;
var map__31370__$1 = ((((!((map__31370 == null)))?(((((map__31370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31370):map__31370);
var w = map__31370__$1;
var message = cljs.core.get.call(null,map__31370__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__31372 = cljs.core.seq.call(null,plugins);
var chunk__31373 = null;
var count__31374 = (0);
var i__31375 = (0);
while(true){
if((i__31375 < count__31374)){
var vec__31376 = cljs.core._nth.call(null,chunk__31373,i__31375);
var k = cljs.core.nth.call(null,vec__31376,(0),null);
var plugin = cljs.core.nth.call(null,vec__31376,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31382 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31372,chunk__31373,count__31374,i__31375,pl_31382,vec__31376,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31382.call(null,msg_hist);
});})(seq__31372,chunk__31373,count__31374,i__31375,pl_31382,vec__31376,k,plugin))
);
} else {
}


var G__31383 = seq__31372;
var G__31384 = chunk__31373;
var G__31385 = count__31374;
var G__31386 = (i__31375 + (1));
seq__31372 = G__31383;
chunk__31373 = G__31384;
count__31374 = G__31385;
i__31375 = G__31386;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31372);
if(temp__5457__auto__){
var seq__31372__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31372__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31372__$1);
var G__31387 = cljs.core.chunk_rest.call(null,seq__31372__$1);
var G__31388 = c__4319__auto__;
var G__31389 = cljs.core.count.call(null,c__4319__auto__);
var G__31390 = (0);
seq__31372 = G__31387;
chunk__31373 = G__31388;
count__31374 = G__31389;
i__31375 = G__31390;
continue;
} else {
var vec__31379 = cljs.core.first.call(null,seq__31372__$1);
var k = cljs.core.nth.call(null,vec__31379,(0),null);
var plugin = cljs.core.nth.call(null,vec__31379,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31391 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31372,chunk__31373,count__31374,i__31375,pl_31391,vec__31379,k,plugin,seq__31372__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31391.call(null,msg_hist);
});})(seq__31372,chunk__31373,count__31374,i__31375,pl_31391,vec__31379,k,plugin,seq__31372__$1,temp__5457__auto__))
);
} else {
}


var G__31392 = cljs.core.next.call(null,seq__31372__$1);
var G__31393 = null;
var G__31394 = (0);
var G__31395 = (0);
seq__31372 = G__31392;
chunk__31373 = G__31393;
count__31374 = G__31394;
i__31375 = G__31395;
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
var G__31397 = arguments.length;
switch (G__31397) {
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

var seq__31398_31403 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31399_31404 = null;
var count__31400_31405 = (0);
var i__31401_31406 = (0);
while(true){
if((i__31401_31406 < count__31400_31405)){
var msg_31407 = cljs.core._nth.call(null,chunk__31399_31404,i__31401_31406);
figwheel.client.socket.handle_incoming_message.call(null,msg_31407);


var G__31408 = seq__31398_31403;
var G__31409 = chunk__31399_31404;
var G__31410 = count__31400_31405;
var G__31411 = (i__31401_31406 + (1));
seq__31398_31403 = G__31408;
chunk__31399_31404 = G__31409;
count__31400_31405 = G__31410;
i__31401_31406 = G__31411;
continue;
} else {
var temp__5457__auto___31412 = cljs.core.seq.call(null,seq__31398_31403);
if(temp__5457__auto___31412){
var seq__31398_31413__$1 = temp__5457__auto___31412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31398_31413__$1)){
var c__4319__auto___31414 = cljs.core.chunk_first.call(null,seq__31398_31413__$1);
var G__31415 = cljs.core.chunk_rest.call(null,seq__31398_31413__$1);
var G__31416 = c__4319__auto___31414;
var G__31417 = cljs.core.count.call(null,c__4319__auto___31414);
var G__31418 = (0);
seq__31398_31403 = G__31415;
chunk__31399_31404 = G__31416;
count__31400_31405 = G__31417;
i__31401_31406 = G__31418;
continue;
} else {
var msg_31419 = cljs.core.first.call(null,seq__31398_31413__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31419);


var G__31420 = cljs.core.next.call(null,seq__31398_31413__$1);
var G__31421 = null;
var G__31422 = (0);
var G__31423 = (0);
seq__31398_31403 = G__31420;
chunk__31399_31404 = G__31421;
count__31400_31405 = G__31422;
i__31401_31406 = G__31423;
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
var len__4499__auto___31428 = arguments.length;
var i__4500__auto___31429 = (0);
while(true){
if((i__4500__auto___31429 < len__4499__auto___31428)){
args__4502__auto__.push((arguments[i__4500__auto___31429]));

var G__31430 = (i__4500__auto___31429 + (1));
i__4500__auto___31429 = G__31430;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31425){
var map__31426 = p__31425;
var map__31426__$1 = ((((!((map__31426 == null)))?(((((map__31426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31426):map__31426);
var opts = map__31426__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31424){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31424));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31431){if((e31431 instanceof Error)){
var e = e31431;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31431;

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
return (function (p__31432){
var map__31433 = p__31432;
var map__31433__$1 = ((((!((map__31433 == null)))?(((((map__31433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31433):map__31433);
var msg_name = cljs.core.get.call(null,map__31433__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1556800411608
