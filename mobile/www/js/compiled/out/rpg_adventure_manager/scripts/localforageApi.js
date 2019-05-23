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

var c__28783__auto___33350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28783__auto___33350){
return (function (){
var f__28784__auto__ = (function (){var switch__28760__auto__ = ((function (c__28783__auto___33350){
return (function (state_33304){
var state_val_33305 = (state_33304[(1)]);
if((state_val_33305 === (1))){
var inst_33302 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"cities");
var state_33304__$1 = state_33304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33304__$1,inst_33302);
} else {
return null;
}
});})(c__28783__auto___33350))
;
return ((function (switch__28760__auto__,c__28783__auto___33350){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0 = (function (){
var statearr_33306 = [null,null,null,null,null,null,null];
(statearr_33306[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__);

(statearr_33306[(1)] = (1));

return statearr_33306;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1 = (function (state_33304){
while(true){
var ret_value__28762__auto__ = (function (){try{while(true){
var result__28763__auto__ = switch__28760__auto__.call(null,state_33304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28763__auto__;
}
break;
}
}catch (e33307){if((e33307 instanceof Object)){
var ex__28764__auto__ = e33307;
var statearr_33308_33351 = state_33304;
(statearr_33308_33351[(5)] = ex__28764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33352 = state_33304;
state_33304 = G__33352;
continue;
} else {
return ret_value__28762__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__ = function(state_33304){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1.call(this,state_33304);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__;
})()
;})(switch__28760__auto__,c__28783__auto___33350))
})();
var state__28785__auto__ = (function (){var statearr_33309 = f__28784__auto__.call(null);
(statearr_33309[(6)] = c__28783__auto___33350);

return statearr_33309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28785__auto__);
});})(c__28783__auto___33350))
);


var c__28783__auto___33353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28783__auto___33353){
return (function (){
var f__28784__auto__ = (function (){var switch__28760__auto__ = ((function (c__28783__auto___33353){
return (function (state_33312){
var state_val_33313 = (state_33312[(1)]);
if((state_val_33313 === (1))){
var inst_33310 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"npcs");
var state_33312__$1 = state_33312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33312__$1,inst_33310);
} else {
return null;
}
});})(c__28783__auto___33353))
;
return ((function (switch__28760__auto__,c__28783__auto___33353){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0 = (function (){
var statearr_33314 = [null,null,null,null,null,null,null];
(statearr_33314[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__);

(statearr_33314[(1)] = (1));

return statearr_33314;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1 = (function (state_33312){
while(true){
var ret_value__28762__auto__ = (function (){try{while(true){
var result__28763__auto__ = switch__28760__auto__.call(null,state_33312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28763__auto__;
}
break;
}
}catch (e33315){if((e33315 instanceof Object)){
var ex__28764__auto__ = e33315;
var statearr_33316_33354 = state_33312;
(statearr_33316_33354[(5)] = ex__28764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33355 = state_33312;
state_33312 = G__33355;
continue;
} else {
return ret_value__28762__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__ = function(state_33312){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1.call(this,state_33312);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__;
})()
;})(switch__28760__auto__,c__28783__auto___33353))
})();
var state__28785__auto__ = (function (){var statearr_33317 = f__28784__auto__.call(null);
(statearr_33317[(6)] = c__28783__auto___33353);

return statearr_33317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28785__auto__);
});})(c__28783__auto___33353))
);


var c__28783__auto___33356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28783__auto___33356){
return (function (){
var f__28784__auto__ = (function (){var switch__28760__auto__ = ((function (c__28783__auto___33356){
return (function (state_33320){
var state_val_33321 = (state_33320[(1)]);
if((state_val_33321 === (1))){
var inst_33318 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"locations");
var state_33320__$1 = state_33320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33320__$1,inst_33318);
} else {
return null;
}
});})(c__28783__auto___33356))
;
return ((function (switch__28760__auto__,c__28783__auto___33356){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0 = (function (){
var statearr_33322 = [null,null,null,null,null,null,null];
(statearr_33322[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__);

(statearr_33322[(1)] = (1));

return statearr_33322;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1 = (function (state_33320){
while(true){
var ret_value__28762__auto__ = (function (){try{while(true){
var result__28763__auto__ = switch__28760__auto__.call(null,state_33320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28763__auto__;
}
break;
}
}catch (e33323){if((e33323 instanceof Object)){
var ex__28764__auto__ = e33323;
var statearr_33324_33357 = state_33320;
(statearr_33324_33357[(5)] = ex__28764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33358 = state_33320;
state_33320 = G__33358;
continue;
} else {
return ret_value__28762__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__ = function(state_33320){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1.call(this,state_33320);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__;
})()
;})(switch__28760__auto__,c__28783__auto___33356))
})();
var state__28785__auto__ = (function (){var statearr_33325 = f__28784__auto__.call(null);
(statearr_33325[(6)] = c__28783__auto___33356);

return statearr_33325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28785__auto__);
});})(c__28783__auto___33356))
);


var c__28783__auto___33359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28783__auto___33359){
return (function (){
var f__28784__auto__ = (function (){var switch__28760__auto__ = ((function (c__28783__auto___33359){
return (function (state_33328){
var state_val_33329 = (state_33328[(1)]);
if((state_val_33329 === (1))){
var inst_33326 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"items");
var state_33328__$1 = state_33328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33328__$1,inst_33326);
} else {
return null;
}
});})(c__28783__auto___33359))
;
return ((function (switch__28760__auto__,c__28783__auto___33359){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0 = (function (){
var statearr_33330 = [null,null,null,null,null,null,null];
(statearr_33330[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__);

(statearr_33330[(1)] = (1));

return statearr_33330;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1 = (function (state_33328){
while(true){
var ret_value__28762__auto__ = (function (){try{while(true){
var result__28763__auto__ = switch__28760__auto__.call(null,state_33328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28763__auto__;
}
break;
}
}catch (e33331){if((e33331 instanceof Object)){
var ex__28764__auto__ = e33331;
var statearr_33332_33360 = state_33328;
(statearr_33332_33360[(5)] = ex__28764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33361 = state_33328;
state_33328 = G__33361;
continue;
} else {
return ret_value__28762__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__ = function(state_33328){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1.call(this,state_33328);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__;
})()
;})(switch__28760__auto__,c__28783__auto___33359))
})();
var state__28785__auto__ = (function (){var statearr_33333 = f__28784__auto__.call(null);
(statearr_33333[(6)] = c__28783__auto___33359);

return statearr_33333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28785__auto__);
});})(c__28783__auto___33359))
);


var c__28783__auto___33362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28783__auto___33362){
return (function (){
var f__28784__auto__ = (function (){var switch__28760__auto__ = ((function (c__28783__auto___33362){
return (function (state_33336){
var state_val_33337 = (state_33336[(1)]);
if((state_val_33337 === (1))){
var inst_33334 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"hooks");
var state_33336__$1 = state_33336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33336__$1,inst_33334);
} else {
return null;
}
});})(c__28783__auto___33362))
;
return ((function (switch__28760__auto__,c__28783__auto___33362){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0 = (function (){
var statearr_33338 = [null,null,null,null,null,null,null];
(statearr_33338[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__);

(statearr_33338[(1)] = (1));

return statearr_33338;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1 = (function (state_33336){
while(true){
var ret_value__28762__auto__ = (function (){try{while(true){
var result__28763__auto__ = switch__28760__auto__.call(null,state_33336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28763__auto__;
}
break;
}
}catch (e33339){if((e33339 instanceof Object)){
var ex__28764__auto__ = e33339;
var statearr_33340_33363 = state_33336;
(statearr_33340_33363[(5)] = ex__28764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33364 = state_33336;
state_33336 = G__33364;
continue;
} else {
return ret_value__28762__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__ = function(state_33336){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1.call(this,state_33336);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__;
})()
;})(switch__28760__auto__,c__28783__auto___33362))
})();
var state__28785__auto__ = (function (){var statearr_33341 = f__28784__auto__.call(null);
(statearr_33341[(6)] = c__28783__auto___33362);

return statearr_33341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28785__auto__);
});})(c__28783__auto___33362))
);


var c__28783__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28783__auto__){
return (function (){
var f__28784__auto__ = (function (){var switch__28760__auto__ = ((function (c__28783__auto__){
return (function (state_33344){
var state_val_33345 = (state_33344[(1)]);
if((state_val_33345 === (1))){
var inst_33342 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"lists");
var state_33344__$1 = state_33344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33344__$1,inst_33342);
} else {
return null;
}
});})(c__28783__auto__))
;
return ((function (switch__28760__auto__,c__28783__auto__){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0 = (function (){
var statearr_33346 = [null,null,null,null,null,null,null];
(statearr_33346[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__);

(statearr_33346[(1)] = (1));

return statearr_33346;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1 = (function (state_33344){
while(true){
var ret_value__28762__auto__ = (function (){try{while(true){
var result__28763__auto__ = switch__28760__auto__.call(null,state_33344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28763__auto__;
}
break;
}
}catch (e33347){if((e33347 instanceof Object)){
var ex__28764__auto__ = e33347;
var statearr_33348_33365 = state_33344;
(statearr_33348_33365[(5)] = ex__28764__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28762__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33366 = state_33344;
state_33344 = G__33366;
continue;
} else {
return ret_value__28762__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__ = function(state_33344){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1.call(this,state_33344);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28761__auto__;
})()
;})(switch__28760__auto__,c__28783__auto__))
})();
var state__28785__auto__ = (function (){var statearr_33349 = f__28784__auto__.call(null);
(statearr_33349[(6)] = c__28783__auto__);

return statearr_33349;
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
var G__33367 = (i + (1));
i = G__33367;
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
var G__33368 = (i + (1));
i = G__33368;
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
var G__33369 = (i + (1));
i = G__33369;
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
var G__33370 = (i + (1));
i = G__33370;
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
var G__33371 = (i + (1));
i = G__33371;
continue;
}
break;
}
}));
});

//# sourceMappingURL=localforageApi.js.map?rel=1558649728833
