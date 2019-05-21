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

var c__28783__auto___29068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28783__auto___29068){
return (function (){
var f__28784__auto__ = (function (){var switch__28760__auto__ = ((function (c__28783__auto___29068){
return (function (state_29022){
var state_val_29023 = (state_29022[(1)]);
if((state_val_29023 === (1))){
var inst_29020 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"cities");
var state_29022__$1 = state_29022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29022__$1,inst_29020);
} else {
return null;
}
});})(c__28783__auto___29068))
;
return ((function (switch__28760__auto__,c__28783__auto___29068){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0 = (function (){
var statearr_29024 = [null,null,null,null,null,null,null];
(statearr_29024[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__);

(statearr_29024[(1)] = (1));

return statearr_29024;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1 = (function (state_29022){
while(true){
var ret_value__28762__auto__ = (function (){try{while(true){
var result__28763__auto__ = switch__28760__auto__.call(null,state_29022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28763__auto__;
}
break;
}
}catch (e29025){if((e29025 instanceof Object)){
var ex__28764__auto__ = e29025;
var statearr_29026_29069 = state_29022;
(statearr_29026_29069[(5)] = ex__28764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29070 = state_29022;
state_29022 = G__29070;
continue;
} else {
return ret_value__28762__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__ = function(state_29022){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1.call(this,state_29022);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__;
})()
;})(switch__28760__auto__,c__28783__auto___29068))
})();
var state__28785__auto__ = (function (){var statearr_29027 = f__28784__auto__.call(null);
(statearr_29027[(6)] = c__28783__auto___29068);

return statearr_29027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28785__auto__);
});})(c__28783__auto___29068))
);


var c__28783__auto___29071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28783__auto___29071){
return (function (){
var f__28784__auto__ = (function (){var switch__28760__auto__ = ((function (c__28783__auto___29071){
return (function (state_29030){
var state_val_29031 = (state_29030[(1)]);
if((state_val_29031 === (1))){
var inst_29028 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"npcs");
var state_29030__$1 = state_29030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29030__$1,inst_29028);
} else {
return null;
}
});})(c__28783__auto___29071))
;
return ((function (switch__28760__auto__,c__28783__auto___29071){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0 = (function (){
var statearr_29032 = [null,null,null,null,null,null,null];
(statearr_29032[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__);

(statearr_29032[(1)] = (1));

return statearr_29032;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1 = (function (state_29030){
while(true){
var ret_value__28762__auto__ = (function (){try{while(true){
var result__28763__auto__ = switch__28760__auto__.call(null,state_29030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28763__auto__;
}
break;
}
}catch (e29033){if((e29033 instanceof Object)){
var ex__28764__auto__ = e29033;
var statearr_29034_29072 = state_29030;
(statearr_29034_29072[(5)] = ex__28764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29073 = state_29030;
state_29030 = G__29073;
continue;
} else {
return ret_value__28762__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__ = function(state_29030){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1.call(this,state_29030);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__;
})()
;})(switch__28760__auto__,c__28783__auto___29071))
})();
var state__28785__auto__ = (function (){var statearr_29035 = f__28784__auto__.call(null);
(statearr_29035[(6)] = c__28783__auto___29071);

return statearr_29035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28785__auto__);
});})(c__28783__auto___29071))
);


var c__28783__auto___29074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28783__auto___29074){
return (function (){
var f__28784__auto__ = (function (){var switch__28760__auto__ = ((function (c__28783__auto___29074){
return (function (state_29038){
var state_val_29039 = (state_29038[(1)]);
if((state_val_29039 === (1))){
var inst_29036 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"locations");
var state_29038__$1 = state_29038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29038__$1,inst_29036);
} else {
return null;
}
});})(c__28783__auto___29074))
;
return ((function (switch__28760__auto__,c__28783__auto___29074){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0 = (function (){
var statearr_29040 = [null,null,null,null,null,null,null];
(statearr_29040[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__);

(statearr_29040[(1)] = (1));

return statearr_29040;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1 = (function (state_29038){
while(true){
var ret_value__28762__auto__ = (function (){try{while(true){
var result__28763__auto__ = switch__28760__auto__.call(null,state_29038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28763__auto__;
}
break;
}
}catch (e29041){if((e29041 instanceof Object)){
var ex__28764__auto__ = e29041;
var statearr_29042_29075 = state_29038;
(statearr_29042_29075[(5)] = ex__28764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29076 = state_29038;
state_29038 = G__29076;
continue;
} else {
return ret_value__28762__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__ = function(state_29038){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1.call(this,state_29038);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__;
})()
;})(switch__28760__auto__,c__28783__auto___29074))
})();
var state__28785__auto__ = (function (){var statearr_29043 = f__28784__auto__.call(null);
(statearr_29043[(6)] = c__28783__auto___29074);

return statearr_29043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28785__auto__);
});})(c__28783__auto___29074))
);


var c__28783__auto___29077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28783__auto___29077){
return (function (){
var f__28784__auto__ = (function (){var switch__28760__auto__ = ((function (c__28783__auto___29077){
return (function (state_29046){
var state_val_29047 = (state_29046[(1)]);
if((state_val_29047 === (1))){
var inst_29044 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"items");
var state_29046__$1 = state_29046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29046__$1,inst_29044);
} else {
return null;
}
});})(c__28783__auto___29077))
;
return ((function (switch__28760__auto__,c__28783__auto___29077){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0 = (function (){
var statearr_29048 = [null,null,null,null,null,null,null];
(statearr_29048[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__);

(statearr_29048[(1)] = (1));

return statearr_29048;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1 = (function (state_29046){
while(true){
var ret_value__28762__auto__ = (function (){try{while(true){
var result__28763__auto__ = switch__28760__auto__.call(null,state_29046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28763__auto__;
}
break;
}
}catch (e29049){if((e29049 instanceof Object)){
var ex__28764__auto__ = e29049;
var statearr_29050_29078 = state_29046;
(statearr_29050_29078[(5)] = ex__28764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29079 = state_29046;
state_29046 = G__29079;
continue;
} else {
return ret_value__28762__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__ = function(state_29046){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1.call(this,state_29046);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__;
})()
;})(switch__28760__auto__,c__28783__auto___29077))
})();
var state__28785__auto__ = (function (){var statearr_29051 = f__28784__auto__.call(null);
(statearr_29051[(6)] = c__28783__auto___29077);

return statearr_29051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28785__auto__);
});})(c__28783__auto___29077))
);


var c__28783__auto___29080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28783__auto___29080){
return (function (){
var f__28784__auto__ = (function (){var switch__28760__auto__ = ((function (c__28783__auto___29080){
return (function (state_29054){
var state_val_29055 = (state_29054[(1)]);
if((state_val_29055 === (1))){
var inst_29052 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"hooks");
var state_29054__$1 = state_29054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29054__$1,inst_29052);
} else {
return null;
}
});})(c__28783__auto___29080))
;
return ((function (switch__28760__auto__,c__28783__auto___29080){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0 = (function (){
var statearr_29056 = [null,null,null,null,null,null,null];
(statearr_29056[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__);

(statearr_29056[(1)] = (1));

return statearr_29056;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1 = (function (state_29054){
while(true){
var ret_value__28762__auto__ = (function (){try{while(true){
var result__28763__auto__ = switch__28760__auto__.call(null,state_29054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28763__auto__;
}
break;
}
}catch (e29057){if((e29057 instanceof Object)){
var ex__28764__auto__ = e29057;
var statearr_29058_29081 = state_29054;
(statearr_29058_29081[(5)] = ex__28764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29082 = state_29054;
state_29054 = G__29082;
continue;
} else {
return ret_value__28762__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__ = function(state_29054){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1.call(this,state_29054);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__;
})()
;})(switch__28760__auto__,c__28783__auto___29080))
})();
var state__28785__auto__ = (function (){var statearr_29059 = f__28784__auto__.call(null);
(statearr_29059[(6)] = c__28783__auto___29080);

return statearr_29059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28785__auto__);
});})(c__28783__auto___29080))
);


var c__28783__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28783__auto__){
return (function (){
var f__28784__auto__ = (function (){var switch__28760__auto__ = ((function (c__28783__auto__){
return (function (state_29062){
var state_val_29063 = (state_29062[(1)]);
if((state_val_29063 === (1))){
var inst_29060 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"lists");
var state_29062__$1 = state_29062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29062__$1,inst_29060);
} else {
return null;
}
});})(c__28783__auto__))
;
return ((function (switch__28760__auto__,c__28783__auto__){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0 = (function (){
var statearr_29064 = [null,null,null,null,null,null,null];
(statearr_29064[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__);

(statearr_29064[(1)] = (1));

return statearr_29064;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1 = (function (state_29062){
while(true){
var ret_value__28762__auto__ = (function (){try{while(true){
var result__28763__auto__ = switch__28760__auto__.call(null,state_29062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28763__auto__;
}
break;
}
}catch (e29065){if((e29065 instanceof Object)){
var ex__28764__auto__ = e29065;
var statearr_29066_29083 = state_29062;
(statearr_29066_29083[(5)] = ex__28764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29084 = state_29062;
state_29062 = G__29084;
continue;
} else {
return ret_value__28762__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__ = function(state_29062){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1.call(this,state_29062);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__;
})()
;})(switch__28760__auto__,c__28783__auto__))
})();
var state__28785__auto__ = (function (){var statearr_29067 = f__28784__auto__.call(null);
(statearr_29067[(6)] = c__28783__auto__);

return statearr_29067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28785__auto__);
});})(c__28783__auto__))
);

return c__28783__auto__;
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
var G__29085 = (i + (1));
i = G__29085;
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
var G__29086 = (i + (1));
i = G__29086;
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
var G__29087 = (i + (1));
i = G__29087;
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
var G__29088 = (i + (1));
i = G__29088;
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
var G__29089 = (i + (1));
i = G__29089;
continue;
}
break;
}
}));
});

//# sourceMappingURL=localforageApi.js.map?rel=1558443078142
