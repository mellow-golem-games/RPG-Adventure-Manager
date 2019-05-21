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

var c__28780__auto___28919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28780__auto___28919){
return (function (){
var f__28781__auto__ = (function (){var switch__28757__auto__ = ((function (c__28780__auto___28919){
return (function (state_28873){
var state_val_28874 = (state_28873[(1)]);
if((state_val_28874 === (1))){
var inst_28871 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"cities");
var state_28873__$1 = state_28873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28873__$1,inst_28871);
} else {
return null;
}
});})(c__28780__auto___28919))
;
return ((function (switch__28757__auto__,c__28780__auto___28919){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0 = (function (){
var statearr_28875 = [null,null,null,null,null,null,null];
(statearr_28875[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__);

(statearr_28875[(1)] = (1));

return statearr_28875;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1 = (function (state_28873){
while(true){
var ret_value__28759__auto__ = (function (){try{while(true){
var result__28760__auto__ = switch__28757__auto__.call(null,state_28873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28760__auto__;
}
break;
}
}catch (e28876){if((e28876 instanceof Object)){
var ex__28761__auto__ = e28876;
var statearr_28877_28920 = state_28873;
(statearr_28877_28920[(5)] = ex__28761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28921 = state_28873;
state_28873 = G__28921;
continue;
} else {
return ret_value__28759__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = function(state_28873){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1.call(this,state_28873);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__;
})()
;})(switch__28757__auto__,c__28780__auto___28919))
})();
var state__28782__auto__ = (function (){var statearr_28878 = f__28781__auto__.call(null);
(statearr_28878[(6)] = c__28780__auto___28919);

return statearr_28878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28782__auto__);
});})(c__28780__auto___28919))
);


var c__28780__auto___28922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28780__auto___28922){
return (function (){
var f__28781__auto__ = (function (){var switch__28757__auto__ = ((function (c__28780__auto___28922){
return (function (state_28881){
var state_val_28882 = (state_28881[(1)]);
if((state_val_28882 === (1))){
var inst_28879 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"npcs");
var state_28881__$1 = state_28881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28881__$1,inst_28879);
} else {
return null;
}
});})(c__28780__auto___28922))
;
return ((function (switch__28757__auto__,c__28780__auto___28922){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0 = (function (){
var statearr_28883 = [null,null,null,null,null,null,null];
(statearr_28883[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__);

(statearr_28883[(1)] = (1));

return statearr_28883;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1 = (function (state_28881){
while(true){
var ret_value__28759__auto__ = (function (){try{while(true){
var result__28760__auto__ = switch__28757__auto__.call(null,state_28881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28760__auto__;
}
break;
}
}catch (e28884){if((e28884 instanceof Object)){
var ex__28761__auto__ = e28884;
var statearr_28885_28923 = state_28881;
(statearr_28885_28923[(5)] = ex__28761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28924 = state_28881;
state_28881 = G__28924;
continue;
} else {
return ret_value__28759__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = function(state_28881){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1.call(this,state_28881);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__;
})()
;})(switch__28757__auto__,c__28780__auto___28922))
})();
var state__28782__auto__ = (function (){var statearr_28886 = f__28781__auto__.call(null);
(statearr_28886[(6)] = c__28780__auto___28922);

return statearr_28886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28782__auto__);
});})(c__28780__auto___28922))
);


var c__28780__auto___28925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28780__auto___28925){
return (function (){
var f__28781__auto__ = (function (){var switch__28757__auto__ = ((function (c__28780__auto___28925){
return (function (state_28889){
var state_val_28890 = (state_28889[(1)]);
if((state_val_28890 === (1))){
var inst_28887 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"locations");
var state_28889__$1 = state_28889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28889__$1,inst_28887);
} else {
return null;
}
});})(c__28780__auto___28925))
;
return ((function (switch__28757__auto__,c__28780__auto___28925){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0 = (function (){
var statearr_28891 = [null,null,null,null,null,null,null];
(statearr_28891[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__);

(statearr_28891[(1)] = (1));

return statearr_28891;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1 = (function (state_28889){
while(true){
var ret_value__28759__auto__ = (function (){try{while(true){
var result__28760__auto__ = switch__28757__auto__.call(null,state_28889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28760__auto__;
}
break;
}
}catch (e28892){if((e28892 instanceof Object)){
var ex__28761__auto__ = e28892;
var statearr_28893_28926 = state_28889;
(statearr_28893_28926[(5)] = ex__28761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28927 = state_28889;
state_28889 = G__28927;
continue;
} else {
return ret_value__28759__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = function(state_28889){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1.call(this,state_28889);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__;
})()
;})(switch__28757__auto__,c__28780__auto___28925))
})();
var state__28782__auto__ = (function (){var statearr_28894 = f__28781__auto__.call(null);
(statearr_28894[(6)] = c__28780__auto___28925);

return statearr_28894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28782__auto__);
});})(c__28780__auto___28925))
);


var c__28780__auto___28928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28780__auto___28928){
return (function (){
var f__28781__auto__ = (function (){var switch__28757__auto__ = ((function (c__28780__auto___28928){
return (function (state_28897){
var state_val_28898 = (state_28897[(1)]);
if((state_val_28898 === (1))){
var inst_28895 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"items");
var state_28897__$1 = state_28897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28897__$1,inst_28895);
} else {
return null;
}
});})(c__28780__auto___28928))
;
return ((function (switch__28757__auto__,c__28780__auto___28928){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0 = (function (){
var statearr_28899 = [null,null,null,null,null,null,null];
(statearr_28899[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__);

(statearr_28899[(1)] = (1));

return statearr_28899;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1 = (function (state_28897){
while(true){
var ret_value__28759__auto__ = (function (){try{while(true){
var result__28760__auto__ = switch__28757__auto__.call(null,state_28897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28760__auto__;
}
break;
}
}catch (e28900){if((e28900 instanceof Object)){
var ex__28761__auto__ = e28900;
var statearr_28901_28929 = state_28897;
(statearr_28901_28929[(5)] = ex__28761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28930 = state_28897;
state_28897 = G__28930;
continue;
} else {
return ret_value__28759__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = function(state_28897){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1.call(this,state_28897);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__;
})()
;})(switch__28757__auto__,c__28780__auto___28928))
})();
var state__28782__auto__ = (function (){var statearr_28902 = f__28781__auto__.call(null);
(statearr_28902[(6)] = c__28780__auto___28928);

return statearr_28902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28782__auto__);
});})(c__28780__auto___28928))
);


var c__28780__auto___28931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28780__auto___28931){
return (function (){
var f__28781__auto__ = (function (){var switch__28757__auto__ = ((function (c__28780__auto___28931){
return (function (state_28905){
var state_val_28906 = (state_28905[(1)]);
if((state_val_28906 === (1))){
var inst_28903 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"hooks");
var state_28905__$1 = state_28905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28905__$1,inst_28903);
} else {
return null;
}
});})(c__28780__auto___28931))
;
return ((function (switch__28757__auto__,c__28780__auto___28931){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0 = (function (){
var statearr_28907 = [null,null,null,null,null,null,null];
(statearr_28907[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__);

(statearr_28907[(1)] = (1));

return statearr_28907;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1 = (function (state_28905){
while(true){
var ret_value__28759__auto__ = (function (){try{while(true){
var result__28760__auto__ = switch__28757__auto__.call(null,state_28905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28760__auto__;
}
break;
}
}catch (e28908){if((e28908 instanceof Object)){
var ex__28761__auto__ = e28908;
var statearr_28909_28932 = state_28905;
(statearr_28909_28932[(5)] = ex__28761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28933 = state_28905;
state_28905 = G__28933;
continue;
} else {
return ret_value__28759__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = function(state_28905){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1.call(this,state_28905);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__;
})()
;})(switch__28757__auto__,c__28780__auto___28931))
})();
var state__28782__auto__ = (function (){var statearr_28910 = f__28781__auto__.call(null);
(statearr_28910[(6)] = c__28780__auto___28931);

return statearr_28910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28782__auto__);
});})(c__28780__auto___28931))
);


var c__28780__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28780__auto__){
return (function (){
var f__28781__auto__ = (function (){var switch__28757__auto__ = ((function (c__28780__auto__){
return (function (state_28913){
var state_val_28914 = (state_28913[(1)]);
if((state_val_28914 === (1))){
var inst_28911 = rpg_adventure_manager.scripts.localforageApi.get_initial_data_by_type.call(null,"lists");
var state_28913__$1 = state_28913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28913__$1,inst_28911);
} else {
return null;
}
});})(c__28780__auto__))
;
return ((function (switch__28757__auto__,c__28780__auto__){
return (function() {
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = null;
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0 = (function (){
var statearr_28915 = [null,null,null,null,null,null,null];
(statearr_28915[(0)] = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__);

(statearr_28915[(1)] = (1));

return statearr_28915;
});
var rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1 = (function (state_28913){
while(true){
var ret_value__28759__auto__ = (function (){try{while(true){
var result__28760__auto__ = switch__28757__auto__.call(null,state_28913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28760__auto__;
}
break;
}
}catch (e28916){if((e28916 instanceof Object)){
var ex__28761__auto__ = e28916;
var statearr_28917_28934 = state_28913;
(statearr_28917_28934[(5)] = ex__28761__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28935 = state_28913;
state_28913 = G__28935;
continue;
} else {
return ret_value__28759__auto__;
}
break;
}
});
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__ = function(state_28913){
switch(arguments.length){
case 0:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0.call(this);
case 1:
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1.call(this,state_28913);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$0 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____0;
rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__.cljs$core$IFn$_invoke$arity$1 = rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto____1;
return rpg_adventure_manager$scripts$localforageApi$pull_initial_data_$_state_machine__28758__auto__;
})()
;})(switch__28757__auto__,c__28780__auto__))
})();
var state__28782__auto__ = (function (){var statearr_28918 = f__28781__auto__.call(null);
(statearr_28918[(6)] = c__28780__auto__);

return statearr_28918;
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
var G__28936 = (i + (1));
i = G__28936;
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

rpg_adventure_manager.state.handle_state_change.call(null,"set-single-entity",item);

rpg_adventure_manager.state.handle_state_change.call(null,"set-active-entity",cljs.core.conj.call(null,cljs.core.assoc.call(null,currentStorage,i,item)));

return fancy_alert.core.fancy_alert(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"Item Updated!",new cljs.core.Keyword(null,"hideAfterN","hideAfterN",1402371045),false,new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"white;",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #9776ec;",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"999;",new cljs.core.Keyword(null,"color","color",1011675173),"black;"], null),new cljs.core.Keyword(null,"buttonProperties","buttonProperties",1221783147),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttonText","buttonText",282861744),"Okay"], null)], null));
});})(i,currentStorage))
).then();
} else {
var G__28937 = (i + (1));
i = G__28937;
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
var G__28938 = (i + (1));
i = G__28938;
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
var G__28939 = (i + (1));
i = G__28939;
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
var G__28940 = (i + (1));
i = G__28940;
continue;
}
break;
}
}));
});

//# sourceMappingURL=localforageApi.js.map?rel=1558242492149
