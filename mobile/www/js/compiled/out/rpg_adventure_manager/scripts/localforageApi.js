// Compiled by ClojureScript 1.10.238 {}
goog.provide('rpg_adventure_manager.scripts.localforageApi');
goog.require('cljs.core');
goog.require('rpg_adventure_manager.state');
goog.require('cljs.core.async');
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

var c__23748__auto___37331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto___37331){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto___37331){
return (function (state_37285){
var state_val_37286 = (state_37285[(1)]);
if((state_val_37286 === (1))){
var inst_37283 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"cities");
var state_37285__$1 = state_37285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37285__$1,inst_37283);
} else {
return null;
}
});})(c__23748__auto___37331))
;
return ((function (switch__23658__auto__,c__23748__auto___37331){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____0 = (function (){
var statearr_37287 = [null,null,null,null,null,null,null];
(statearr_37287[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__);

(statearr_37287[(1)] = (1));

return statearr_37287;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____1 = (function (state_37285){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_37285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e37288){if((e37288 instanceof Object)){
var ex__23662__auto__ = e37288;
var statearr_37289_37332 = state_37285;
(statearr_37289_37332[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37333 = state_37285;
state_37285 = G__37333;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__ = function(state_37285){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____1.call(this,state_37285);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto___37331))
})();
var state__23750__auto__ = (function (){var statearr_37290 = f__23749__auto__.call(null);
(statearr_37290[(6)] = c__23748__auto___37331);

return statearr_37290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto___37331))
);


var c__23748__auto___37334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto___37334){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto___37334){
return (function (state_37293){
var state_val_37294 = (state_37293[(1)]);
if((state_val_37294 === (1))){
var inst_37291 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"npcs");
var state_37293__$1 = state_37293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37293__$1,inst_37291);
} else {
return null;
}
});})(c__23748__auto___37334))
;
return ((function (switch__23658__auto__,c__23748__auto___37334){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____0 = (function (){
var statearr_37295 = [null,null,null,null,null,null,null];
(statearr_37295[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__);

(statearr_37295[(1)] = (1));

return statearr_37295;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____1 = (function (state_37293){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_37293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e37296){if((e37296 instanceof Object)){
var ex__23662__auto__ = e37296;
var statearr_37297_37335 = state_37293;
(statearr_37297_37335[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37336 = state_37293;
state_37293 = G__37336;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__ = function(state_37293){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____1.call(this,state_37293);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto___37334))
})();
var state__23750__auto__ = (function (){var statearr_37298 = f__23749__auto__.call(null);
(statearr_37298[(6)] = c__23748__auto___37334);

return statearr_37298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto___37334))
);


var c__23748__auto___37337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto___37337){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto___37337){
return (function (state_37301){
var state_val_37302 = (state_37301[(1)]);
if((state_val_37302 === (1))){
var inst_37299 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"locations");
var state_37301__$1 = state_37301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37301__$1,inst_37299);
} else {
return null;
}
});})(c__23748__auto___37337))
;
return ((function (switch__23658__auto__,c__23748__auto___37337){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____0 = (function (){
var statearr_37303 = [null,null,null,null,null,null,null];
(statearr_37303[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__);

(statearr_37303[(1)] = (1));

return statearr_37303;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____1 = (function (state_37301){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_37301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e37304){if((e37304 instanceof Object)){
var ex__23662__auto__ = e37304;
var statearr_37305_37338 = state_37301;
(statearr_37305_37338[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37339 = state_37301;
state_37301 = G__37339;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__ = function(state_37301){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____1.call(this,state_37301);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto___37337))
})();
var state__23750__auto__ = (function (){var statearr_37306 = f__23749__auto__.call(null);
(statearr_37306[(6)] = c__23748__auto___37337);

return statearr_37306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto___37337))
);


var c__23748__auto___37340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto___37340){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto___37340){
return (function (state_37309){
var state_val_37310 = (state_37309[(1)]);
if((state_val_37310 === (1))){
var inst_37307 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"items");
var state_37309__$1 = state_37309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37309__$1,inst_37307);
} else {
return null;
}
});})(c__23748__auto___37340))
;
return ((function (switch__23658__auto__,c__23748__auto___37340){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____0 = (function (){
var statearr_37311 = [null,null,null,null,null,null,null];
(statearr_37311[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__);

(statearr_37311[(1)] = (1));

return statearr_37311;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____1 = (function (state_37309){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_37309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e37312){if((e37312 instanceof Object)){
var ex__23662__auto__ = e37312;
var statearr_37313_37341 = state_37309;
(statearr_37313_37341[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37342 = state_37309;
state_37309 = G__37342;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__ = function(state_37309){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____1.call(this,state_37309);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto___37340))
})();
var state__23750__auto__ = (function (){var statearr_37314 = f__23749__auto__.call(null);
(statearr_37314[(6)] = c__23748__auto___37340);

return statearr_37314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto___37340))
);


var c__23748__auto___37343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto___37343){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto___37343){
return (function (state_37317){
var state_val_37318 = (state_37317[(1)]);
if((state_val_37318 === (1))){
var inst_37315 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"hooks");
var state_37317__$1 = state_37317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37317__$1,inst_37315);
} else {
return null;
}
});})(c__23748__auto___37343))
;
return ((function (switch__23658__auto__,c__23748__auto___37343){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____0 = (function (){
var statearr_37319 = [null,null,null,null,null,null,null];
(statearr_37319[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__);

(statearr_37319[(1)] = (1));

return statearr_37319;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____1 = (function (state_37317){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_37317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e37320){if((e37320 instanceof Object)){
var ex__23662__auto__ = e37320;
var statearr_37321_37344 = state_37317;
(statearr_37321_37344[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37345 = state_37317;
state_37317 = G__37345;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__ = function(state_37317){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____1.call(this,state_37317);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto___37343))
})();
var state__23750__auto__ = (function (){var statearr_37322 = f__23749__auto__.call(null);
(statearr_37322[(6)] = c__23748__auto___37343);

return statearr_37322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto___37343))
);


var c__23748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto__){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto__){
return (function (state_37325){
var state_val_37326 = (state_37325[(1)]);
if((state_val_37326 === (1))){
var inst_37323 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"lists");
var state_37325__$1 = state_37325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37325__$1,inst_37323);
} else {
return null;
}
});})(c__23748__auto__))
;
return ((function (switch__23658__auto__,c__23748__auto__){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____0 = (function (){
var statearr_37327 = [null,null,null,null,null,null,null];
(statearr_37327[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__);

(statearr_37327[(1)] = (1));

return statearr_37327;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____1 = (function (state_37325){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_37325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e37328){if((e37328 instanceof Object)){
var ex__23662__auto__ = e37328;
var statearr_37329_37346 = state_37325;
(statearr_37329_37346[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37347 = state_37325;
state_37325 = G__37347;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__ = function(state_37325){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____1.call(this,state_37325);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto__))
})();
var state__23750__auto__ = (function (){var statearr_37330 = f__23749__auto__.call(null);
(statearr_37330[(6)] = c__23748__auto__);

return statearr_37330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto__))
);

return c__23748__auto__;
});
rpg_adventure_manager.scripts.localforageApi.add_item = (function rpg_adventure_manager$scripts$localforageApi$add_item(type,details){

alert(window.localforage.driver());

if(clojure.string.blank_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(details))){
return alert("Name Cannot Be Blank!");
} else {
return window.localforage.getItem(type).then((function (value){
var currentStorage = cljs.core.js__GT_clj.call(null,value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,currentStorage),i)){
return window.localforage.setItem(type,cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,currentStorage,rpg_adventure_manager.scripts.localforageApi.add_metadata.call(null,details))),((function (i,currentStorage){
return (function (value__$1){
rpg_adventure_manager.state.handle_state_change.call(null,"update-entity",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.conj.call(null,currentStorage,rpg_adventure_manager.scripts.localforageApi.add_metadata.call(null,details))], null));

rpg_adventure_manager.state.handle_state_change.call(null,"update-alert",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"content","content",15833224),"Item Saved!"], null));

return rpg_adventure_manager.state.handle_state_change.call(null,"update-current-view","");
});})(i,currentStorage))
).then();
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,currentStorage,i)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(details))){
return alert("That Name Is Already Taken!");
} else {
var G__37348 = (i + (1));
i = G__37348;
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
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,currentStorage,i)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item))){
return window.localforage.setItem(type,cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,cljs.core.assoc.call(null,currentStorage,i,item))),((function (i,currentStorage){
return (function (value__$1){
rpg_adventure_manager.state.handle_state_change.call(null,"update-entity",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.conj.call(null,currentStorage)], null));

rpg_adventure_manager.state.handle_state_change.call(null,"set-single-entity",item);

rpg_adventure_manager.state.handle_state_change.call(null,"set-active-entity",cljs.core.conj.call(null,cljs.core.assoc.call(null,currentStorage,i,item)));

return rpg_adventure_manager.state.handle_state_change.call(null,"update-alert",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"content","content",15833224),"Item Updated!"], null));
});})(i,currentStorage))
).then();
} else {
var G__37349 = (i + (1));
i = G__37349;
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

return rpg_adventure_manager.state.handle_state_change.call(null,"update-alert",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"content","content",15833224),"Item Deleted!"], null));
});})(currentStorage,filteredValues))
).then();
}));
});
rpg_adventure_manager.scripts.localforageApi.add_list = (function rpg_adventure_manager$scripts$localforageApi$add_list(details){

if(clojure.string.blank_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(details))){
return alert("Name Cannot Be Blank!");
} else {
return window.localforage.getItem("lists").then((function (value){
var currentStorage = cljs.core.js__GT_clj.call(null,value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,currentStorage),i)){
return window.localforage.setItem("lists",cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,currentStorage,rpg_adventure_manager.scripts.localforageApi.add_metadata_list.call(null,details))),((function (i,currentStorage){
return (function (value__$1){
rpg_adventure_manager.state.handle_state_change.call(null,"update-list",cljs.core.conj.call(null,currentStorage,rpg_adventure_manager.scripts.localforageApi.add_metadata_list.call(null,details)));

rpg_adventure_manager.state.handle_state_change.call(null,"update-alert",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"content","content",15833224),"List Saved!"], null));

return rpg_adventure_manager.state.handle_state_change.call(null,"update-current-view","");
});})(i,currentStorage))
).then();
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,currentStorage,i)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(details))){
return alert("That Name Is Already Taken!");
} else {
var G__37350 = (i + (1));
i = G__37350;
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

return rpg_adventure_manager.state.handle_state_change.call(null,"update-alert",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"content","content",15833224),"List Updated"], null));
});})(i,currentStorage))
).then();
} else {
var G__37351 = (i + (1));
i = G__37351;
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

return rpg_adventure_manager.state.handle_state_change.call(null,"update-alert",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"content","content",15833224),"List Delete"], null));
});})(i,currentStorage))
).then();
} else {
var G__37352 = (i + (1));
i = G__37352;
continue;
}
break;
}
}));
});

//# sourceMappingURL=localforageApi.js.map?rel=1556800584292
