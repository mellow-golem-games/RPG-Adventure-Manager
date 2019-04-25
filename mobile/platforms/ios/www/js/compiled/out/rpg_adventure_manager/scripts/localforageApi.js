// Compiled by ClojureScript 1.10.238 {}
goog.provide('rpg_adventure_manager.scripts.localforageApi');
goog.require('cljs.core');
goog.require('rpg_adventure_manager.state');
goog.require('cljs.core.async');
goog.require('module$Applications$server$rpg_adventure_manager$node_modules$localforage$dist$localforage');
rpg_adventure_manager.scripts.localforageApi.add_metadata = (function rpg_adventure_manager$scripts$localforageApi$add_metadata(details){

return cljs.core.conj.call(null,details,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"used","used",-1414786177),false,new cljs.core.Keyword(null,"created","created",-704993748),(new Date())], null));
});
rpg_adventure_manager.scripts.localforageApi.add_metadata_list = (function rpg_adventure_manager$scripts$localforageApi$add_metadata_list(details){

return cljs.core.conj.call(null,details,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"used","used",-1414786177),false,new cljs.core.Keyword(null,"created","created",-704993748),(new Date()),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"1","1",-521621649),""], null)], null));
});
rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type = (function rpg_adventure_manager$scripts$localforageApi$get_initial_data_by_type(type){

return module$Applications$server$rpg_adventure_manager$node_modules$localforage$dist$localforage["default"].getItem(type).then((function (value){
return rpg_adventure_manager.state.handle_state_change.call(null,"update-entity",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"value","value",305978217),value], null));
}));
});
rpg_adventure_manager.scripts.localforageApi.pull_initial_data = (function rpg_adventure_manager$scripts$localforageApi$pull_initial_data(){

var c__28781__auto___28907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28781__auto___28907){
return (function (){
var f__28782__auto__ = (function (){var switch__28758__auto__ = ((function (c__28781__auto___28907){
return (function (state_28861){
var state_val_28862 = (state_28861[(1)]);
if((state_val_28862 === (1))){
var inst_28859 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"cities");
var state_28861__$1 = state_28861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28861__$1,inst_28859);
} else {
return null;
}
});})(c__28781__auto___28907))
;
return ((function (switch__28758__auto__,c__28781__auto___28907){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____0 = (function (){
var statearr_28863 = [null,null,null,null,null,null,null];
(statearr_28863[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__);

(statearr_28863[(1)] = (1));

return statearr_28863;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____1 = (function (state_28861){
while(true){
var ret_value__28760__auto__ = (function (){try{while(true){
var result__28761__auto__ = switch__28758__auto__.call(null,state_28861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28761__auto__;
}
break;
}
}catch (e28864){if((e28864 instanceof Object)){
var ex__28762__auto__ = e28864;
var statearr_28865_28908 = state_28861;
(statearr_28865_28908[(5)] = ex__28762__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28909 = state_28861;
state_28861 = G__28909;
continue;
} else {
return ret_value__28760__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__ = function(state_28861){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____1.call(this,state_28861);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__;
})()
;})(switch__28758__auto__,c__28781__auto___28907))
})();
var state__28783__auto__ = (function (){var statearr_28866 = f__28782__auto__.call(null);
(statearr_28866[(6)] = c__28781__auto___28907);

return statearr_28866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28783__auto__);
});})(c__28781__auto___28907))
);


var c__28781__auto___28910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28781__auto___28910){
return (function (){
var f__28782__auto__ = (function (){var switch__28758__auto__ = ((function (c__28781__auto___28910){
return (function (state_28869){
var state_val_28870 = (state_28869[(1)]);
if((state_val_28870 === (1))){
var inst_28867 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"npcs");
var state_28869__$1 = state_28869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28869__$1,inst_28867);
} else {
return null;
}
});})(c__28781__auto___28910))
;
return ((function (switch__28758__auto__,c__28781__auto___28910){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____0 = (function (){
var statearr_28871 = [null,null,null,null,null,null,null];
(statearr_28871[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__);

(statearr_28871[(1)] = (1));

return statearr_28871;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____1 = (function (state_28869){
while(true){
var ret_value__28760__auto__ = (function (){try{while(true){
var result__28761__auto__ = switch__28758__auto__.call(null,state_28869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28761__auto__;
}
break;
}
}catch (e28872){if((e28872 instanceof Object)){
var ex__28762__auto__ = e28872;
var statearr_28873_28911 = state_28869;
(statearr_28873_28911[(5)] = ex__28762__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28912 = state_28869;
state_28869 = G__28912;
continue;
} else {
return ret_value__28760__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__ = function(state_28869){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____1.call(this,state_28869);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__;
})()
;})(switch__28758__auto__,c__28781__auto___28910))
})();
var state__28783__auto__ = (function (){var statearr_28874 = f__28782__auto__.call(null);
(statearr_28874[(6)] = c__28781__auto___28910);

return statearr_28874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28783__auto__);
});})(c__28781__auto___28910))
);


var c__28781__auto___28913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28781__auto___28913){
return (function (){
var f__28782__auto__ = (function (){var switch__28758__auto__ = ((function (c__28781__auto___28913){
return (function (state_28877){
var state_val_28878 = (state_28877[(1)]);
if((state_val_28878 === (1))){
var inst_28875 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"locations");
var state_28877__$1 = state_28877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28877__$1,inst_28875);
} else {
return null;
}
});})(c__28781__auto___28913))
;
return ((function (switch__28758__auto__,c__28781__auto___28913){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____0 = (function (){
var statearr_28879 = [null,null,null,null,null,null,null];
(statearr_28879[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__);

(statearr_28879[(1)] = (1));

return statearr_28879;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____1 = (function (state_28877){
while(true){
var ret_value__28760__auto__ = (function (){try{while(true){
var result__28761__auto__ = switch__28758__auto__.call(null,state_28877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28761__auto__;
}
break;
}
}catch (e28880){if((e28880 instanceof Object)){
var ex__28762__auto__ = e28880;
var statearr_28881_28914 = state_28877;
(statearr_28881_28914[(5)] = ex__28762__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28915 = state_28877;
state_28877 = G__28915;
continue;
} else {
return ret_value__28760__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__ = function(state_28877){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____1.call(this,state_28877);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__;
})()
;})(switch__28758__auto__,c__28781__auto___28913))
})();
var state__28783__auto__ = (function (){var statearr_28882 = f__28782__auto__.call(null);
(statearr_28882[(6)] = c__28781__auto___28913);

return statearr_28882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28783__auto__);
});})(c__28781__auto___28913))
);


var c__28781__auto___28916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28781__auto___28916){
return (function (){
var f__28782__auto__ = (function (){var switch__28758__auto__ = ((function (c__28781__auto___28916){
return (function (state_28885){
var state_val_28886 = (state_28885[(1)]);
if((state_val_28886 === (1))){
var inst_28883 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"items");
var state_28885__$1 = state_28885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28885__$1,inst_28883);
} else {
return null;
}
});})(c__28781__auto___28916))
;
return ((function (switch__28758__auto__,c__28781__auto___28916){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____0 = (function (){
var statearr_28887 = [null,null,null,null,null,null,null];
(statearr_28887[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__);

(statearr_28887[(1)] = (1));

return statearr_28887;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____1 = (function (state_28885){
while(true){
var ret_value__28760__auto__ = (function (){try{while(true){
var result__28761__auto__ = switch__28758__auto__.call(null,state_28885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28761__auto__;
}
break;
}
}catch (e28888){if((e28888 instanceof Object)){
var ex__28762__auto__ = e28888;
var statearr_28889_28917 = state_28885;
(statearr_28889_28917[(5)] = ex__28762__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28918 = state_28885;
state_28885 = G__28918;
continue;
} else {
return ret_value__28760__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__ = function(state_28885){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____1.call(this,state_28885);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__;
})()
;})(switch__28758__auto__,c__28781__auto___28916))
})();
var state__28783__auto__ = (function (){var statearr_28890 = f__28782__auto__.call(null);
(statearr_28890[(6)] = c__28781__auto___28916);

return statearr_28890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28783__auto__);
});})(c__28781__auto___28916))
);


var c__28781__auto___28919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28781__auto___28919){
return (function (){
var f__28782__auto__ = (function (){var switch__28758__auto__ = ((function (c__28781__auto___28919){
return (function (state_28893){
var state_val_28894 = (state_28893[(1)]);
if((state_val_28894 === (1))){
var inst_28891 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"hooks");
var state_28893__$1 = state_28893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28893__$1,inst_28891);
} else {
return null;
}
});})(c__28781__auto___28919))
;
return ((function (switch__28758__auto__,c__28781__auto___28919){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____0 = (function (){
var statearr_28895 = [null,null,null,null,null,null,null];
(statearr_28895[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__);

(statearr_28895[(1)] = (1));

return statearr_28895;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____1 = (function (state_28893){
while(true){
var ret_value__28760__auto__ = (function (){try{while(true){
var result__28761__auto__ = switch__28758__auto__.call(null,state_28893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28761__auto__;
}
break;
}
}catch (e28896){if((e28896 instanceof Object)){
var ex__28762__auto__ = e28896;
var statearr_28897_28920 = state_28893;
(statearr_28897_28920[(5)] = ex__28762__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28921 = state_28893;
state_28893 = G__28921;
continue;
} else {
return ret_value__28760__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__ = function(state_28893){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____1.call(this,state_28893);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__;
})()
;})(switch__28758__auto__,c__28781__auto___28919))
})();
var state__28783__auto__ = (function (){var statearr_28898 = f__28782__auto__.call(null);
(statearr_28898[(6)] = c__28781__auto___28919);

return statearr_28898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28783__auto__);
});})(c__28781__auto___28919))
);


var c__28781__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28781__auto__){
return (function (){
var f__28782__auto__ = (function (){var switch__28758__auto__ = ((function (c__28781__auto__){
return (function (state_28901){
var state_val_28902 = (state_28901[(1)]);
if((state_val_28902 === (1))){
var inst_28899 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"lists");
var state_28901__$1 = state_28901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28901__$1,inst_28899);
} else {
return null;
}
});})(c__28781__auto__))
;
return ((function (switch__28758__auto__,c__28781__auto__){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____0 = (function (){
var statearr_28903 = [null,null,null,null,null,null,null];
(statearr_28903[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__);

(statearr_28903[(1)] = (1));

return statearr_28903;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____1 = (function (state_28901){
while(true){
var ret_value__28760__auto__ = (function (){try{while(true){
var result__28761__auto__ = switch__28758__auto__.call(null,state_28901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28761__auto__;
}
break;
}
}catch (e28904){if((e28904 instanceof Object)){
var ex__28762__auto__ = e28904;
var statearr_28905_28922 = state_28901;
(statearr_28905_28922[(5)] = ex__28762__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28923 = state_28901;
state_28901 = G__28923;
continue;
} else {
return ret_value__28760__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__ = function(state_28901){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____1.call(this,state_28901);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28759__auto__;
})()
;})(switch__28758__auto__,c__28781__auto__))
})();
var state__28783__auto__ = (function (){var statearr_28906 = f__28782__auto__.call(null);
(statearr_28906[(6)] = c__28781__auto__);

return statearr_28906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28783__auto__);
});})(c__28781__auto__))
);

return c__28781__auto__;
});
rpg_adventure_manager.scripts.localforageApi.add_item = (function rpg_adventure_manager$scripts$localforageApi$add_item(type,details){

if(clojure.string.blank_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(details))){
return alert("Name Cannot Be Blank!");
} else {
return module$Applications$server$rpg_adventure_manager$node_modules$localforage$dist$localforage["default"].getItem(type).then((function (value){
var currentStorage = cljs.core.js__GT_clj.call(null,value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,currentStorage),i)){
return module$Applications$server$rpg_adventure_manager$node_modules$localforage$dist$localforage["default"].setItem(type,cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,currentStorage,rpg_adventure_manager.scripts.localforageApi.add_metadata.call(null,details))),((function (i,currentStorage){
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
var G__28924 = (i + (1));
i = G__28924;
continue;
}
}
break;
}
}));
}
});
rpg_adventure_manager.scripts.localforageApi.update_item = (function rpg_adventure_manager$scripts$localforageApi$update_item(type,item){

return module$Applications$server$rpg_adventure_manager$node_modules$localforage$dist$localforage["default"].getItem(type).then((function (value){
var currentStorage = cljs.core.js__GT_clj.call(null,value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,currentStorage,i)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item))){
return module$Applications$server$rpg_adventure_manager$node_modules$localforage$dist$localforage["default"].setItem(type,cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,cljs.core.assoc.call(null,currentStorage,i,item))),((function (i,currentStorage){
return (function (value__$1){
rpg_adventure_manager.state.handle_state_change.call(null,"update-entity",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.conj.call(null,currentStorage)], null));

rpg_adventure_manager.state.handle_state_change.call(null,"set-single-entity",item);

rpg_adventure_manager.state.handle_state_change.call(null,"set-active-entity",cljs.core.conj.call(null,cljs.core.assoc.call(null,currentStorage,i,item)));

return rpg_adventure_manager.state.handle_state_change.call(null,"update-alert",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"content","content",15833224),"Item Updated!"], null));
});})(i,currentStorage))
).then();
} else {
var G__28925 = (i + (1));
i = G__28925;
continue;
}
break;
}
}));
});
rpg_adventure_manager.scripts.localforageApi.delete_item = (function rpg_adventure_manager$scripts$localforageApi$delete_item(entity,type){

return module$Applications$server$rpg_adventure_manager$node_modules$localforage$dist$localforage["default"].getItem(type).then((function (value){
var currentStorage = cljs.core.js__GT_clj.call(null,value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var filteredValues = cljs.core.filter.call(null,((function (currentStorage){
return (function (item){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entity));
});})(currentStorage))
,currentStorage);
return module$Applications$server$rpg_adventure_manager$node_modules$localforage$dist$localforage["default"].setItem(type,cljs.core.clj__GT_js.call(null,filteredValues),((function (currentStorage,filteredValues){
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
return module$Applications$server$rpg_adventure_manager$node_modules$localforage$dist$localforage["default"].getItem("lists").then((function (value){
var currentStorage = cljs.core.js__GT_clj.call(null,value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,currentStorage),i)){
return module$Applications$server$rpg_adventure_manager$node_modules$localforage$dist$localforage["default"].setItem("lists",cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,currentStorage,rpg_adventure_manager.scripts.localforageApi.add_metadata_list.call(null,details))),((function (i,currentStorage){
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
var G__28926 = (i + (1));
i = G__28926;
continue;
}
}
break;
}
}));
}
});
rpg_adventure_manager.scripts.localforageApi.save_list = (function rpg_adventure_manager$scripts$localforageApi$save_list(name,list){

return module$Applications$server$rpg_adventure_manager$node_modules$localforage$dist$localforage["default"].getItem("lists").then((function (value){
var currentStorage = cljs.core.js__GT_clj.call(null,value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,currentStorage,i)),name)){
return module$Applications$server$rpg_adventure_manager$node_modules$localforage$dist$localforage["default"].setItem("lists",cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,currentStorage,i,cljs.core.conj.call(null,cljs.core.nth.call(null,currentStorage,i),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),list], null)))),((function (i,currentStorage){
return (function (value__$1){
rpg_adventure_manager.state.handle_state_change.call(null,"update-list",cljs.core.assoc.call(null,currentStorage,i,cljs.core.conj.call(null,cljs.core.nth.call(null,currentStorage,i),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),list], null))));

return rpg_adventure_manager.state.handle_state_change.call(null,"update-alert",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"content","content",15833224),"List Updated"], null));
});})(i,currentStorage))
).then();
} else {
var G__28927 = (i + (1));
i = G__28927;
continue;
}
break;
}
}));
});
rpg_adventure_manager.scripts.localforageApi.delete_list = (function rpg_adventure_manager$scripts$localforageApi$delete_list(name){

return module$Applications$server$rpg_adventure_manager$node_modules$localforage$dist$localforage["default"].getItem("lists").then((function (value){
var currentStorage = cljs.core.js__GT_clj.call(null,value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,currentStorage,i)),name)){
return module$Applications$server$rpg_adventure_manager$node_modules$localforage$dist$localforage["default"].setItem("lists",cljs.core.clj__GT_js.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,currentStorage,(0),i),cljs.core.subvec.call(null,currentStorage,(i + (1))))),((function (i,currentStorage){
return (function (value__$1){
rpg_adventure_manager.state.handle_state_change.call(null,"update-list",cljs.core.concat.call(null,cljs.core.subvec.call(null,currentStorage,(0),i),cljs.core.subvec.call(null,currentStorage,(i + (1)))));

return rpg_adventure_manager.state.handle_state_change.call(null,"update-alert",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible","visible",-1024216805),true,new cljs.core.Keyword(null,"content","content",15833224),"List Delete"], null));
});})(i,currentStorage))
).then();
} else {
var G__28928 = (i + (1));
i = G__28928;
continue;
}
break;
}
}));
});

//# sourceMappingURL=localforageApi.js.map?rel=1556058634511
