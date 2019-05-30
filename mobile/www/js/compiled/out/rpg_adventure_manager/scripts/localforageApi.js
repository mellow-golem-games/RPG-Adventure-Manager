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

var c__28780__auto___29062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28780__auto___29062){
return (function (){
var f__28781__auto__ = (function (){var switch__28757__auto__ = ((function (c__28780__auto___29062){
return (function (state_29016){
var state_val_29017 = (state_29016[(1)]);
if((state_val_29017 === (1))){
var inst_29014 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"cities");
var state_29016__$1 = state_29016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29016__$1,inst_29014);
} else {
return null;
}
});})(c__28780__auto___29062))
;
return ((function (switch__28757__auto__,c__28780__auto___29062){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0 = (function (){
var statearr_29018 = [null,null,null,null,null,null,null];
(statearr_29018[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__);

(statearr_29018[(1)] = (1));

return statearr_29018;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1 = (function (state_29016){
while(true){
var ret_value__28759__auto__ = (function (){try{while(true){
var result__28760__auto__ = switch__28757__auto__.call(null,state_29016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28760__auto__;
}
break;
}
}catch (e29019){if((e29019 instanceof Object)){
var ex__28761__auto__ = e29019;
var statearr_29020_29063 = state_29016;
(statearr_29020_29063[(5)] = ex__28761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29064 = state_29016;
state_29016 = G__29064;
continue;
} else {
return ret_value__28759__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = function(state_29016){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1.call(this,state_29016);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__;
})()
;})(switch__28757__auto__,c__28780__auto___29062))
})();
var state__28782__auto__ = (function (){var statearr_29021 = f__28781__auto__.call(null);
(statearr_29021[(6)] = c__28780__auto___29062);

return statearr_29021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28782__auto__);
});})(c__28780__auto___29062))
);


var c__28780__auto___29065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28780__auto___29065){
return (function (){
var f__28781__auto__ = (function (){var switch__28757__auto__ = ((function (c__28780__auto___29065){
return (function (state_29024){
var state_val_29025 = (state_29024[(1)]);
if((state_val_29025 === (1))){
var inst_29022 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"npcs");
var state_29024__$1 = state_29024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29024__$1,inst_29022);
} else {
return null;
}
});})(c__28780__auto___29065))
;
return ((function (switch__28757__auto__,c__28780__auto___29065){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0 = (function (){
var statearr_29026 = [null,null,null,null,null,null,null];
(statearr_29026[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__);

(statearr_29026[(1)] = (1));

return statearr_29026;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1 = (function (state_29024){
while(true){
var ret_value__28759__auto__ = (function (){try{while(true){
var result__28760__auto__ = switch__28757__auto__.call(null,state_29024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28760__auto__;
}
break;
}
}catch (e29027){if((e29027 instanceof Object)){
var ex__28761__auto__ = e29027;
var statearr_29028_29066 = state_29024;
(statearr_29028_29066[(5)] = ex__28761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29067 = state_29024;
state_29024 = G__29067;
continue;
} else {
return ret_value__28759__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = function(state_29024){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1.call(this,state_29024);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__;
})()
;})(switch__28757__auto__,c__28780__auto___29065))
})();
var state__28782__auto__ = (function (){var statearr_29029 = f__28781__auto__.call(null);
(statearr_29029[(6)] = c__28780__auto___29065);

return statearr_29029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28782__auto__);
});})(c__28780__auto___29065))
);


var c__28780__auto___29068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28780__auto___29068){
return (function (){
var f__28781__auto__ = (function (){var switch__28757__auto__ = ((function (c__28780__auto___29068){
return (function (state_29032){
var state_val_29033 = (state_29032[(1)]);
if((state_val_29033 === (1))){
var inst_29030 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"locations");
var state_29032__$1 = state_29032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29032__$1,inst_29030);
} else {
return null;
}
});})(c__28780__auto___29068))
;
return ((function (switch__28757__auto__,c__28780__auto___29068){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0 = (function (){
var statearr_29034 = [null,null,null,null,null,null,null];
(statearr_29034[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__);

(statearr_29034[(1)] = (1));

return statearr_29034;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1 = (function (state_29032){
while(true){
var ret_value__28759__auto__ = (function (){try{while(true){
var result__28760__auto__ = switch__28757__auto__.call(null,state_29032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28760__auto__;
}
break;
}
}catch (e29035){if((e29035 instanceof Object)){
var ex__28761__auto__ = e29035;
var statearr_29036_29069 = state_29032;
(statearr_29036_29069[(5)] = ex__28761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29070 = state_29032;
state_29032 = G__29070;
continue;
} else {
return ret_value__28759__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = function(state_29032){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1.call(this,state_29032);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__;
})()
;})(switch__28757__auto__,c__28780__auto___29068))
})();
var state__28782__auto__ = (function (){var statearr_29037 = f__28781__auto__.call(null);
(statearr_29037[(6)] = c__28780__auto___29068);

return statearr_29037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28782__auto__);
});})(c__28780__auto___29068))
);


var c__28780__auto___29071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28780__auto___29071){
return (function (){
var f__28781__auto__ = (function (){var switch__28757__auto__ = ((function (c__28780__auto___29071){
return (function (state_29040){
var state_val_29041 = (state_29040[(1)]);
if((state_val_29041 === (1))){
var inst_29038 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"items");
var state_29040__$1 = state_29040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29040__$1,inst_29038);
} else {
return null;
}
});})(c__28780__auto___29071))
;
return ((function (switch__28757__auto__,c__28780__auto___29071){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0 = (function (){
var statearr_29042 = [null,null,null,null,null,null,null];
(statearr_29042[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__);

(statearr_29042[(1)] = (1));

return statearr_29042;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1 = (function (state_29040){
while(true){
var ret_value__28759__auto__ = (function (){try{while(true){
var result__28760__auto__ = switch__28757__auto__.call(null,state_29040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28760__auto__;
}
break;
}
}catch (e29043){if((e29043 instanceof Object)){
var ex__28761__auto__ = e29043;
var statearr_29044_29072 = state_29040;
(statearr_29044_29072[(5)] = ex__28761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29073 = state_29040;
state_29040 = G__29073;
continue;
} else {
return ret_value__28759__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = function(state_29040){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1.call(this,state_29040);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__;
})()
;})(switch__28757__auto__,c__28780__auto___29071))
})();
var state__28782__auto__ = (function (){var statearr_29045 = f__28781__auto__.call(null);
(statearr_29045[(6)] = c__28780__auto___29071);

return statearr_29045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28782__auto__);
});})(c__28780__auto___29071))
);


var c__28780__auto___29074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28780__auto___29074){
return (function (){
var f__28781__auto__ = (function (){var switch__28757__auto__ = ((function (c__28780__auto___29074){
return (function (state_29048){
var state_val_29049 = (state_29048[(1)]);
if((state_val_29049 === (1))){
var inst_29046 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"hooks");
var state_29048__$1 = state_29048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29048__$1,inst_29046);
} else {
return null;
}
});})(c__28780__auto___29074))
;
return ((function (switch__28757__auto__,c__28780__auto___29074){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0 = (function (){
var statearr_29050 = [null,null,null,null,null,null,null];
(statearr_29050[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__);

(statearr_29050[(1)] = (1));

return statearr_29050;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1 = (function (state_29048){
while(true){
var ret_value__28759__auto__ = (function (){try{while(true){
var result__28760__auto__ = switch__28757__auto__.call(null,state_29048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28760__auto__;
}
break;
}
}catch (e29051){if((e29051 instanceof Object)){
var ex__28761__auto__ = e29051;
var statearr_29052_29075 = state_29048;
(statearr_29052_29075[(5)] = ex__28761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29076 = state_29048;
state_29048 = G__29076;
continue;
} else {
return ret_value__28759__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = function(state_29048){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1.call(this,state_29048);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__;
})()
;})(switch__28757__auto__,c__28780__auto___29074))
})();
var state__28782__auto__ = (function (){var statearr_29053 = f__28781__auto__.call(null);
(statearr_29053[(6)] = c__28780__auto___29074);

return statearr_29053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28782__auto__);
});})(c__28780__auto___29074))
);


var c__28780__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28780__auto__){
return (function (){
var f__28781__auto__ = (function (){var switch__28757__auto__ = ((function (c__28780__auto__){
return (function (state_29056){
var state_val_29057 = (state_29056[(1)]);
if((state_val_29057 === (1))){
var inst_29054 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"lists");
var state_29056__$1 = state_29056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29056__$1,inst_29054);
} else {
return null;
}
});})(c__28780__auto__))
;
return ((function (switch__28757__auto__,c__28780__auto__){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0 = (function (){
var statearr_29058 = [null,null,null,null,null,null,null];
(statearr_29058[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__);

(statearr_29058[(1)] = (1));

return statearr_29058;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1 = (function (state_29056){
while(true){
var ret_value__28759__auto__ = (function (){try{while(true){
var result__28760__auto__ = switch__28757__auto__.call(null,state_29056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28760__auto__;
}
break;
}
}catch (e29059){if((e29059 instanceof Object)){
var ex__28761__auto__ = e29059;
var statearr_29060_29077 = state_29056;
(statearr_29060_29077[(5)] = ex__28761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29078 = state_29056;
state_29056 = G__29078;
continue;
} else {
return ret_value__28759__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = function(state_29056){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1.call(this,state_29056);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__;
})()
;})(switch__28757__auto__,c__28780__auto__))
})();
var state__28782__auto__ = (function (){var statearr_29061 = f__28781__auto__.call(null);
(statearr_29061[(6)] = c__28780__auto__);

return statearr_29061;
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
var G__29079 = (i + (1));
i = G__29079;
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
var G__29080 = (i + (1));
i = G__29080;
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
var G__29081 = (i + (1));
i = G__29081;
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
var G__29082 = (i + (1));
i = G__29082;
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
var G__29083 = (i + (1));
i = G__29083;
continue;
}
break;
}
}));
});

//# sourceMappingURL=localforageApi.js.map?rel=1558721517242
