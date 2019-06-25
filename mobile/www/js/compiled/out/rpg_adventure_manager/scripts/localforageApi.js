// Compiled by ClojureScript 1.10.238 {}
goog.provide('rpg_adventure_manager.scripts.localforageApi');
goog.require('cljs.core');
goog.require('rpg_adventure_manager.state');
goog.require('cljs.core.async');
goog.require('fancy_alert.core');
rpg_adventure_manager.scripts.localforageApi.add_metadata = (function rpg_adventure_manager$scripts$localforageApi$add_metadata(details){

return cljs.core.conj.call(null,details,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"used","used",-1414786177),false,new cljs.core.Keyword(null,"created","created",-704993748),(new Date())], null));
});
rpg_adventure_manager.scripts.localforageApi.add_metadata_list = (function rpg_adventure_manager$scripts$localforageApi$add_metadata_list(details){

return cljs.core.conj.call(null,details,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"used","used",-1414786177),false,new cljs.core.Keyword(null,"created","created",-704993748),(new Date()),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"1","1",-521621649),""], null)], null));
});
rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type = (function rpg_adventure_manager$scripts$localforageApi$get_initial_data_by_type(type){

return window.localforage.getItem(type).then((function (value){
return rpg_adventure_manager.state.handle_state_change.call(null,"update-entity",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"value","value",305978217),value], null));
}));
});
rpg_adventure_manager.scripts.localforageApi.pull_initial_data = (function rpg_adventure_manager$scripts$localforageApi$pull_initial_data(){

var c__28780__auto___31020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28780__auto___31020){
return (function (){
var f__28781__auto__ = (function (){var switch__28757__auto__ = ((function (c__28780__auto___31020){
return (function (state_30966){
var state_val_30967 = (state_30966[(1)]);
if((state_val_30967 === (1))){
var inst_30964 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"cities");
var state_30966__$1 = state_30966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30966__$1,inst_30964);
} else {
return null;
}
});})(c__28780__auto___31020))
;
return ((function (switch__28757__auto__,c__28780__auto___31020){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0 = (function (){
var statearr_30968 = [null,null,null,null,null,null,null];
(statearr_30968[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__);

(statearr_30968[(1)] = (1));

return statearr_30968;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1 = (function (state_30966){
while(true){
var ret_value__28759__auto__ = (function (){try{while(true){
var result__28760__auto__ = switch__28757__auto__.call(null,state_30966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28760__auto__;
}
break;
}
}catch (e30969){if((e30969 instanceof Object)){
var ex__28761__auto__ = e30969;
var statearr_30970_31021 = state_30966;
(statearr_30970_31021[(5)] = ex__28761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31022 = state_30966;
state_30966 = G__31022;
continue;
} else {
return ret_value__28759__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = function(state_30966){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1.call(this,state_30966);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__;
})()
;})(switch__28757__auto__,c__28780__auto___31020))
})();
var state__28782__auto__ = (function (){var statearr_30971 = f__28781__auto__.call(null);
(statearr_30971[(6)] = c__28780__auto___31020);

return statearr_30971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28782__auto__);
});})(c__28780__auto___31020))
);


var c__28780__auto___31023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28780__auto___31023){
return (function (){
var f__28781__auto__ = (function (){var switch__28757__auto__ = ((function (c__28780__auto___31023){
return (function (state_30974){
var state_val_30975 = (state_30974[(1)]);
if((state_val_30975 === (1))){
var inst_30972 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"npcs");
var state_30974__$1 = state_30974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30974__$1,inst_30972);
} else {
return null;
}
});})(c__28780__auto___31023))
;
return ((function (switch__28757__auto__,c__28780__auto___31023){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0 = (function (){
var statearr_30976 = [null,null,null,null,null,null,null];
(statearr_30976[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__);

(statearr_30976[(1)] = (1));

return statearr_30976;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1 = (function (state_30974){
while(true){
var ret_value__28759__auto__ = (function (){try{while(true){
var result__28760__auto__ = switch__28757__auto__.call(null,state_30974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28760__auto__;
}
break;
}
}catch (e30977){if((e30977 instanceof Object)){
var ex__28761__auto__ = e30977;
var statearr_30978_31024 = state_30974;
(statearr_30978_31024[(5)] = ex__28761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31025 = state_30974;
state_30974 = G__31025;
continue;
} else {
return ret_value__28759__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = function(state_30974){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1.call(this,state_30974);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__;
})()
;})(switch__28757__auto__,c__28780__auto___31023))
})();
var state__28782__auto__ = (function (){var statearr_30979 = f__28781__auto__.call(null);
(statearr_30979[(6)] = c__28780__auto___31023);

return statearr_30979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28782__auto__);
});})(c__28780__auto___31023))
);


var c__28780__auto___31026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28780__auto___31026){
return (function (){
var f__28781__auto__ = (function (){var switch__28757__auto__ = ((function (c__28780__auto___31026){
return (function (state_30982){
var state_val_30983 = (state_30982[(1)]);
if((state_val_30983 === (1))){
var inst_30980 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"locations");
var state_30982__$1 = state_30982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30982__$1,inst_30980);
} else {
return null;
}
});})(c__28780__auto___31026))
;
return ((function (switch__28757__auto__,c__28780__auto___31026){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0 = (function (){
var statearr_30984 = [null,null,null,null,null,null,null];
(statearr_30984[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__);

(statearr_30984[(1)] = (1));

return statearr_30984;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1 = (function (state_30982){
while(true){
var ret_value__28759__auto__ = (function (){try{while(true){
var result__28760__auto__ = switch__28757__auto__.call(null,state_30982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28760__auto__;
}
break;
}
}catch (e30985){if((e30985 instanceof Object)){
var ex__28761__auto__ = e30985;
var statearr_30986_31027 = state_30982;
(statearr_30986_31027[(5)] = ex__28761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31028 = state_30982;
state_30982 = G__31028;
continue;
} else {
return ret_value__28759__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = function(state_30982){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1.call(this,state_30982);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__;
})()
;})(switch__28757__auto__,c__28780__auto___31026))
})();
var state__28782__auto__ = (function (){var statearr_30987 = f__28781__auto__.call(null);
(statearr_30987[(6)] = c__28780__auto___31026);

return statearr_30987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28782__auto__);
});})(c__28780__auto___31026))
);


var c__28780__auto___31029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28780__auto___31029){
return (function (){
var f__28781__auto__ = (function (){var switch__28757__auto__ = ((function (c__28780__auto___31029){
return (function (state_30990){
var state_val_30991 = (state_30990[(1)]);
if((state_val_30991 === (1))){
var inst_30988 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"items");
var state_30990__$1 = state_30990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30990__$1,inst_30988);
} else {
return null;
}
});})(c__28780__auto___31029))
;
return ((function (switch__28757__auto__,c__28780__auto___31029){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0 = (function (){
var statearr_30992 = [null,null,null,null,null,null,null];
(statearr_30992[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__);

(statearr_30992[(1)] = (1));

return statearr_30992;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1 = (function (state_30990){
while(true){
var ret_value__28759__auto__ = (function (){try{while(true){
var result__28760__auto__ = switch__28757__auto__.call(null,state_30990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28760__auto__;
}
break;
}
}catch (e30993){if((e30993 instanceof Object)){
var ex__28761__auto__ = e30993;
var statearr_30994_31030 = state_30990;
(statearr_30994_31030[(5)] = ex__28761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31031 = state_30990;
state_30990 = G__31031;
continue;
} else {
return ret_value__28759__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = function(state_30990){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1.call(this,state_30990);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__;
})()
;})(switch__28757__auto__,c__28780__auto___31029))
})();
var state__28782__auto__ = (function (){var statearr_30995 = f__28781__auto__.call(null);
(statearr_30995[(6)] = c__28780__auto___31029);

return statearr_30995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28782__auto__);
});})(c__28780__auto___31029))
);


var c__28780__auto___31032 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28780__auto___31032){
return (function (){
var f__28781__auto__ = (function (){var switch__28757__auto__ = ((function (c__28780__auto___31032){
return (function (state_30998){
var state_val_30999 = (state_30998[(1)]);
if((state_val_30999 === (1))){
var inst_30996 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"hooks");
var state_30998__$1 = state_30998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30998__$1,inst_30996);
} else {
return null;
}
});})(c__28780__auto___31032))
;
return ((function (switch__28757__auto__,c__28780__auto___31032){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0 = (function (){
var statearr_31000 = [null,null,null,null,null,null,null];
(statearr_31000[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__);

(statearr_31000[(1)] = (1));

return statearr_31000;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1 = (function (state_30998){
while(true){
var ret_value__28759__auto__ = (function (){try{while(true){
var result__28760__auto__ = switch__28757__auto__.call(null,state_30998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28760__auto__;
}
break;
}
}catch (e31001){if((e31001 instanceof Object)){
var ex__28761__auto__ = e31001;
var statearr_31002_31033 = state_30998;
(statearr_31002_31033[(5)] = ex__28761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31034 = state_30998;
state_30998 = G__31034;
continue;
} else {
return ret_value__28759__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = function(state_30998){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1.call(this,state_30998);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__;
})()
;})(switch__28757__auto__,c__28780__auto___31032))
})();
var state__28782__auto__ = (function (){var statearr_31003 = f__28781__auto__.call(null);
(statearr_31003[(6)] = c__28780__auto___31032);

return statearr_31003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28782__auto__);
});})(c__28780__auto___31032))
);


var c__28780__auto___31035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28780__auto___31035){
return (function (){
var f__28781__auto__ = (function (){var switch__28757__auto__ = ((function (c__28780__auto___31035){
return (function (state_31006){
var state_val_31007 = (state_31006[(1)]);
if((state_val_31007 === (1))){
var inst_31004 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"lists");
var state_31006__$1 = state_31006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31006__$1,inst_31004);
} else {
return null;
}
});})(c__28780__auto___31035))
;
return ((function (switch__28757__auto__,c__28780__auto___31035){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0 = (function (){
var statearr_31008 = [null,null,null,null,null,null,null];
(statearr_31008[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__);

(statearr_31008[(1)] = (1));

return statearr_31008;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1 = (function (state_31006){
while(true){
var ret_value__28759__auto__ = (function (){try{while(true){
var result__28760__auto__ = switch__28757__auto__.call(null,state_31006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28760__auto__;
}
break;
}
}catch (e31009){if((e31009 instanceof Object)){
var ex__28761__auto__ = e31009;
var statearr_31010_31036 = state_31006;
(statearr_31010_31036[(5)] = ex__28761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31037 = state_31006;
state_31006 = G__31037;
continue;
} else {
return ret_value__28759__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = function(state_31006){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1.call(this,state_31006);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__;
})()
;})(switch__28757__auto__,c__28780__auto___31035))
})();
var state__28782__auto__ = (function (){var statearr_31011 = f__28781__auto__.call(null);
(statearr_31011[(6)] = c__28780__auto___31035);

return statearr_31011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28782__auto__);
});})(c__28780__auto___31035))
);


var c__28780__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28780__auto__){
return (function (){
var f__28781__auto__ = (function (){var switch__28757__auto__ = ((function (c__28780__auto__){
return (function (state_31014){
var state_val_31015 = (state_31014[(1)]);
if((state_val_31015 === (1))){
var inst_31012 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"notes");
var state_31014__$1 = state_31014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31014__$1,inst_31012);
} else {
return null;
}
});})(c__28780__auto__))
;
return ((function (switch__28757__auto__,c__28780__auto__){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0 = (function (){
var statearr_31016 = [null,null,null,null,null,null,null];
(statearr_31016[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__);

(statearr_31016[(1)] = (1));

return statearr_31016;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1 = (function (state_31014){
while(true){
var ret_value__28759__auto__ = (function (){try{while(true){
var result__28760__auto__ = switch__28757__auto__.call(null,state_31014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28760__auto__;
}
break;
}
}catch (e31017){if((e31017 instanceof Object)){
var ex__28761__auto__ = e31017;
var statearr_31018_31038 = state_31014;
(statearr_31018_31038[(5)] = ex__28761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31039 = state_31014;
state_31014 = G__31039;
continue;
} else {
return ret_value__28759__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = function(state_31014){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1.call(this,state_31014);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__;
})()
;})(switch__28757__auto__,c__28780__auto__))
})();
var state__28782__auto__ = (function (){var statearr_31019 = f__28781__auto__.call(null);
(statearr_31019[(6)] = c__28780__auto__);

return statearr_31019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28782__auto__);
});})(c__28780__auto__))
);

return c__28780__auto__;
});
rpg_adventure_manager.scripts.localforageApi.add_item = (function rpg_adventure_manager$scripts$localforageApi$add_item(type,details){

if(clojure.string.blank_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(details))){
return fancy_alert.core.fancy_alert(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"Name Cannot Be Blank",new cljs.core.Keyword(null,"hideAfterN","hideAfterN",1402371045),false,new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"white;",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #9776ec;",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"999;",new cljs.core.Keyword(null,"color","color",1011675173),"black;"], null),new cljs.core.Keyword(null,"buttonProperties","buttonProperties",1221783147),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttonText","buttonText",282861744),"Okay"], null)], null));
} else {
return window.localforage.getItem(type).then((function (value){
var currentStorage = cljs.core.js__GT_clj.call(null,value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,currentStorage),i)){
return window.localforage.setItem(type,cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,currentStorage,rpg_adventure_manager.scripts.localforageApi.add_metadata.call(null,details))),((function (i,currentStorage){
return (function (value__$1){
rpg_adventure_manager.state.handle_state_change.call(null,"update-entity",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.conj.call(null,currentStorage,rpg_adventure_manager.scripts.localforageApi.add_metadata.call(null,details))], null));

fancy_alert.core.fancy_alert(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"Item Saved!",new cljs.core.Keyword(null,"hideAfterN","hideAfterN",1402371045),false,new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"white;",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #9776ec;",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"999;",new cljs.core.Keyword(null,"color","color",1011675173),"black;"], null),new cljs.core.Keyword(null,"buttonProperties","buttonProperties",1221783147),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttonText","buttonText",282861744),"Okay"], null)], null));

return rpg_adventure_manager.state.handle_state_change.call(null,"update-current-view","");
});})(i,currentStorage))
).then();
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,currentStorage,i)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(details))){
return fancy_alert.core.fancy_alert(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"That Name Is Already Taken!",new cljs.core.Keyword(null,"hideAfterN","hideAfterN",1402371045),false,new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"white;",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #9776ec;",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"999;",new cljs.core.Keyword(null,"color","color",1011675173),"black;"], null),new cljs.core.Keyword(null,"buttonProperties","buttonProperties",1221783147),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttonText","buttonText",282861744),"Okay"], null)], null));
} else {
var G__31040 = (i + (1));
i = G__31040;
continue;
}
}
break;
}
}));
}
});
rpg_adventure_manager.scripts.localforageApi.update_item = (function rpg_adventure_manager$scripts$localforageApi$update_item(type,item){

return window.localforage.getItem(type).then((function (value){
var currentStorage = cljs.core.js__GT_clj.call(null,value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"created","created",-704993748).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,currentStorage,i)),new cljs.core.Keyword(null,"created","created",-704993748).cljs$core$IFn$_invoke$arity$1(item))){
return window.localforage.setItem(type,cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,cljs.core.assoc.call(null,currentStorage,i,item))),((function (i,currentStorage){
return (function (value__$1){
rpg_adventure_manager.state.handle_state_change.call(null,"update-entity",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.conj.call(null,currentStorage)], null));

rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,type);

rpg_adventure_manager.state.handle_state_change.call(null,"set-single-entity",item);

rpg_adventure_manager.state.handle_state_change.call(null,"set-active-entity",cljs.core.conj.call(null,cljs.core.assoc.call(null,currentStorage,i,item)));

return fancy_alert.core.fancy_alert(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"Item Updated!",new cljs.core.Keyword(null,"hideAfterN","hideAfterN",1402371045),false,new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"white;",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #9776ec;",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"999;",new cljs.core.Keyword(null,"color","color",1011675173),"black;"], null),new cljs.core.Keyword(null,"buttonProperties","buttonProperties",1221783147),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttonText","buttonText",282861744),"Okay"], null)], null));
});})(i,currentStorage))
).then();
} else {
var G__31041 = (i + (1));
i = G__31041;
continue;
}
break;
}
}));
});
rpg_adventure_manager.scripts.localforageApi.delete_item = (function rpg_adventure_manager$scripts$localforageApi$delete_item(entity,type){

return window.localforage.getItem(type).then((function (value){
var currentStorage = cljs.core.js__GT_clj.call(null,value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var filteredValues = cljs.core.filter.call(null,((function (currentStorage){
return (function (item){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entity));
});})(currentStorage))
,currentStorage);
return window.localforage.setItem(type,cljs.core.clj__GT_js.call(null,filteredValues),((function (currentStorage,filteredValues){
return (function (value__$1){
rpg_adventure_manager.state.handle_state_change.call(null,"update-entity",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"value","value",305978217),filteredValues], null));

return fancy_alert.core.fancy_alert(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"Item Deleted!",new cljs.core.Keyword(null,"hideAfterN","hideAfterN",1402371045),false,new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"white;",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #9776ec;",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"999;",new cljs.core.Keyword(null,"color","color",1011675173),"black;"], null),new cljs.core.Keyword(null,"buttonProperties","buttonProperties",1221783147),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttonText","buttonText",282861744),"Okay"], null)], null));
});})(currentStorage,filteredValues))
).then();
}));
});
rpg_adventure_manager.scripts.localforageApi.add_list = (function rpg_adventure_manager$scripts$localforageApi$add_list(details){

if(clojure.string.blank_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(details))){
return fancy_alert.core.fancy_alert(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"Name Cannot Be Blank!",new cljs.core.Keyword(null,"hideAfterN","hideAfterN",1402371045),false,new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"white;",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #9776ec;",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"999;",new cljs.core.Keyword(null,"color","color",1011675173),"black;"], null),new cljs.core.Keyword(null,"buttonProperties","buttonProperties",1221783147),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttonText","buttonText",282861744),"Okay"], null)], null));
} else {
return window.localforage.getItem("lists").then((function (value){
var currentStorage = cljs.core.js__GT_clj.call(null,value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,currentStorage),i)){
return window.localforage.setItem("lists",cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,currentStorage,rpg_adventure_manager.scripts.localforageApi.add_metadata_list.call(null,details))),((function (i,currentStorage){
return (function (value__$1){
rpg_adventure_manager.state.handle_state_change.call(null,"update-list",cljs.core.conj.call(null,currentStorage,rpg_adventure_manager.scripts.localforageApi.add_metadata_list.call(null,details)));

fancy_alert.core.fancy_alert(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"List Saved!",new cljs.core.Keyword(null,"hideAfterN","hideAfterN",1402371045),false,new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"white;",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #9776ec;",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"999;",new cljs.core.Keyword(null,"color","color",1011675173),"black;"], null),new cljs.core.Keyword(null,"buttonProperties","buttonProperties",1221783147),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttonText","buttonText",282861744),"Okay"], null)], null));

return rpg_adventure_manager.state.handle_state_change.call(null,"update-current-view","");
});})(i,currentStorage))
).then();
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,currentStorage,i)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(details))){
return fancy_alert.core.fancy_alert(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"That Name Is Already Taken!",new cljs.core.Keyword(null,"hideAfterN","hideAfterN",1402371045),false,new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"white;",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #9776ec;",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"999;",new cljs.core.Keyword(null,"color","color",1011675173),"black;"], null),new cljs.core.Keyword(null,"buttonProperties","buttonProperties",1221783147),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttonText","buttonText",282861744),"Okay"], null)], null));
} else {
var G__31042 = (i + (1));
i = G__31042;
continue;
}
}
break;
}
}));
}
});
rpg_adventure_manager.scripts.localforageApi.save_list = (function rpg_adventure_manager$scripts$localforageApi$save_list(name,list){

return window.localforage.getItem("lists").then((function (value){
var currentStorage = cljs.core.js__GT_clj.call(null,value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,currentStorage,i)),name)){
return window.localforage.setItem("lists",cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,currentStorage,i,cljs.core.conj.call(null,cljs.core.nth.call(null,currentStorage,i),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),list], null)))),((function (i,currentStorage){
return (function (value__$1){
rpg_adventure_manager.state.handle_state_change.call(null,"update-list",cljs.core.assoc.call(null,currentStorage,i,cljs.core.conj.call(null,cljs.core.nth.call(null,currentStorage,i),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),list], null))));

return fancy_alert.core.fancy_alert(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"List Updated!",new cljs.core.Keyword(null,"hideAfterN","hideAfterN",1402371045),false,new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"white;",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #9776ec;",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"999;",new cljs.core.Keyword(null,"color","color",1011675173),"black;"], null),new cljs.core.Keyword(null,"buttonProperties","buttonProperties",1221783147),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttonText","buttonText",282861744),"Okay"], null)], null));
});})(i,currentStorage))
).then();
} else {
var G__31043 = (i + (1));
i = G__31043;
continue;
}
break;
}
}));
});
rpg_adventure_manager.scripts.localforageApi.delete_list = (function rpg_adventure_manager$scripts$localforageApi$delete_list(name){

return window.localforage.getItem("lists").then((function (value){
var currentStorage = cljs.core.js__GT_clj.call(null,value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,currentStorage,i)),name)){
return window.localforage.setItem("lists",cljs.core.clj__GT_js.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,currentStorage,(0),i),cljs.core.subvec.call(null,currentStorage,(i + (1))))),((function (i,currentStorage){
return (function (value__$1){
rpg_adventure_manager.state.handle_state_change.call(null,"update-list",cljs.core.concat.call(null,cljs.core.subvec.call(null,currentStorage,(0),i),cljs.core.subvec.call(null,currentStorage,(i + (1)))));

return fancy_alert.core.fancy_alert(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"List Deleted!",new cljs.core.Keyword(null,"hideAfterN","hideAfterN",1402371045),false,new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"white;",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #9776ec;",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"999;",new cljs.core.Keyword(null,"color","color",1011675173),"black;"], null),new cljs.core.Keyword(null,"buttonProperties","buttonProperties",1221783147),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttonText","buttonText",282861744),"Okay"], null)], null));
});})(i,currentStorage))
).then();
} else {
var G__31044 = (i + (1));
i = G__31044;
continue;
}
break;
}
}));
});
rpg_adventure_manager.scripts.localforageApi.check_if_key_exists_on_notes = (function rpg_adventure_manager$scripts$localforageApi$check_if_key_exists_on_notes(newNote,currentStorage){
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,currentStorage),i)){
return true;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(newNote),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,currentStorage,i)))){
return false;
} else {
var G__31045 = (i + (1));
i = G__31045;
continue;
}
}
break;
}
});
rpg_adventure_manager.scripts.localforageApi.add_note = (function rpg_adventure_manager$scripts$localforageApi$add_note(note){
return window.localforage.getItem("notes").then((function (value){
var currentStorage = cljs.core.js__GT_clj.call(null,value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var newNote = cljs.core.conj.call(null,note,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand_int.call(null,(90000000))], null));
cljs.core.print.call(null,rpg_adventure_manager.scripts.localforageApi.check_if_key_exists_on_notes.call(null,newNote,currentStorage));

if(cljs.core.truth_(rpg_adventure_manager.scripts.localforageApi.check_if_key_exists_on_notes.call(null,newNote,currentStorage))){
return window.localforage.setItem("notes",cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,currentStorage,newNote))).then(((function (currentStorage,newNote){
return (function (value__$1){
fancy_alert.core.fancy_alert(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"Note Added!",new cljs.core.Keyword(null,"hideAfterN","hideAfterN",1402371045),false,new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"white;",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #9776ec;",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"999;",new cljs.core.Keyword(null,"color","color",1011675173),"black;"], null),new cljs.core.Keyword(null,"buttonProperties","buttonProperties",1221783147),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttonText","buttonText",282861744),"Okay"], null)], null));

return rpg_adventure_manager.state.handle_state_change.call(null,"update-note",cljs.core.conj.call(null,currentStorage,newNote));
});})(currentStorage,newNote))
);
} else {
return rpg_adventure_manager.scripts.localforageApi.add_note.call(null,newNote);
}
}));
});
rpg_adventure_manager.scripts.localforageApi.delete_note = (function rpg_adventure_manager$scripts$localforageApi$delete_note(key){
return window.localforage.getItem("notes").then((function (value){
var currentStorage = cljs.core.js__GT_clj.call(null,value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,currentStorage,i)),key)){
return window.localforage.setItem("notes",cljs.core.clj__GT_js.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,currentStorage,(0),i),cljs.core.subvec.call(null,currentStorage,(i + (1))))),((function (i,currentStorage){
return (function (value__$1){
fancy_alert.core.fancy_alert(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"Note Deleted!",new cljs.core.Keyword(null,"hideAfterN","hideAfterN",1402371045),false,new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"white;",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #9776ec;",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"999;",new cljs.core.Keyword(null,"color","color",1011675173),"black;"], null),new cljs.core.Keyword(null,"buttonProperties","buttonProperties",1221783147),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttonText","buttonText",282861744),"Okay"], null)], null));

return rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"notes");
});})(i,currentStorage))
).then();
} else {
var G__31046 = (i + (1));
i = G__31046;
continue;
}
break;
}
}));
});

//# sourceMappingURL=localforageApi.js.map?rel=1561420202632
