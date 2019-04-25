// Compiled by ClojureScript 1.10.238 {}
goog.provide('rpg_adventure_manager.state');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof rpg_adventure_manager.state.state !== 'undefined'){
} else {
rpg_adventure_manager.state.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"activeView","activeView",-879635345),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"new-city","new-city",-867897724),false,new cljs.core.Keyword(null,"new-npc","new-npc",-348393914),false,new cljs.core.Keyword(null,"new-item","new-item",-1489242961),false,new cljs.core.Keyword(null,"new-location","new-location",1729589145),false,new cljs.core.Keyword(null,"new-hook","new-hook",818907067),false,new cljs.core.Keyword(null,"active-list","active-list",-1848992403),false], null),new cljs.core.Keyword(null,"showAlert","showAlert",1274950397),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible","visible",-1024216805),false,new cljs.core.Keyword(null,"content","content",15833224),""], null),new cljs.core.Keyword(null,"activeType","activeType",957025319),"",new cljs.core.Keyword(null,"activeEntity","activeEntity",1254491677),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"singleEntity","singleEntity",-1978016587),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"activeList","activeList",1327514260),cljs.core.PersistentArrayMap.EMPTY], null));
}
rpg_adventure_manager.state.update_current_view = (function rpg_adventure_manager$state$update_current_view(payload){

return cljs.core.swap_BANG_.call(null,rpg_adventure_manager.state.state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"activeView","activeView",-879635345),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,payload),"visible"])], null));
});
rpg_adventure_manager.state.update_entity = (function rpg_adventure_manager$state$update_entity(payload){

return cljs.core.swap_BANG_.call(null,rpg_adventure_manager.state.state,cljs.core.conj,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(payload)),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(payload)]));
});
rpg_adventure_manager.state.update_list = (function rpg_adventure_manager$state$update_list(payload){

return cljs.core.swap_BANG_.call(null,rpg_adventure_manager.state.state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lists","lists",-884730684),payload], null));
});
rpg_adventure_manager.state.update_alert = (function rpg_adventure_manager$state$update_alert(payload){

return cljs.core.swap_BANG_.call(null,rpg_adventure_manager.state.state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"showAlert","showAlert",1274950397),payload], null));
});
rpg_adventure_manager.state.set_active_type = (function rpg_adventure_manager$state$set_active_type(payload){

return cljs.core.swap_BANG_.call(null,rpg_adventure_manager.state.state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"activeType","activeType",957025319),payload], null));
});
rpg_adventure_manager.state.set_active_entity = (function rpg_adventure_manager$state$set_active_entity(payload){

return cljs.core.swap_BANG_.call(null,rpg_adventure_manager.state.state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"activeEntity","activeEntity",1254491677),payload], null));
});
rpg_adventure_manager.state.set_single_entity = (function rpg_adventure_manager$state$set_single_entity(payload){

return cljs.core.swap_BANG_.call(null,rpg_adventure_manager.state.state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"singleEntity","singleEntity",-1978016587),payload], null));
});
rpg_adventure_manager.state.set_active_list = (function rpg_adventure_manager$state$set_active_list(payload){

return cljs.core.swap_BANG_.call(null,rpg_adventure_manager.state.state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"activeList","activeList",1327514260),payload], null));
});
rpg_adventure_manager.state.handle_state_change = (function rpg_adventure_manager$state$handle_state_change(action,payload){

var fn_var = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"set-single-entity"),new cljs.core.Var(function(){return rpg_adventure_manager.state.set_single_entity;},new cljs.core.Symbol("rpg-adventure-manager.state","set-single-entity","rpg-adventure-manager.state/set-single-entity",-742521388,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rpg-adventure-manager.state","rpg-adventure-manager.state",2056508353,null),new cljs.core.Symbol(null,"set-single-entity","set-single-entity",832422021,null),"src/rpg_adventure_manager/state.cljs",24,1,44,44,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"payload","payload",1257495435,null)], null)),null,(cljs.core.truth_(rpg_adventure_manager.state.set_single_entity)?rpg_adventure_manager.state.set_single_entity.cljs$lang$test:null)]))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"update-current-view"),new cljs.core.Var(function(){return rpg_adventure_manager.state.update_current_view;},new cljs.core.Symbol("rpg-adventure-manager.state","update-current-view","rpg-adventure-manager.state/update-current-view",312912317,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rpg-adventure-manager.state","rpg-adventure-manager.state",2056508353,null),new cljs.core.Symbol(null,"update-current-view","update-current-view",885134666,null),"src/rpg_adventure_manager/state.cljs",26,1,20,20,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"payload","payload",1257495435,null)], null)),null,(cljs.core.truth_(rpg_adventure_manager.state.update_current_view)?rpg_adventure_manager.state.update_current_view.cljs$lang$test:null)]))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"set-active-list"),new cljs.core.Var(function(){return rpg_adventure_manager.state.set_active_list;},new cljs.core.Symbol("rpg-adventure-manager.state","set-active-list","rpg-adventure-manager.state/set-active-list",1605206075,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rpg-adventure-manager.state","rpg-adventure-manager.state",2056508353,null),new cljs.core.Symbol(null,"set-active-list","set-active-list",2101986058,null),"src/rpg_adventure_manager/state.cljs",22,1,48,48,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"payload","payload",1257495435,null)], null)),null,(cljs.core.truth_(rpg_adventure_manager.state.set_active_list)?rpg_adventure_manager.state.set_active_list.cljs$lang$test:null)]))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"set-active-entity"),new cljs.core.Var(function(){return rpg_adventure_manager.state.set_active_entity;},new cljs.core.Symbol("rpg-adventure-manager.state","set-active-entity","rpg-adventure-manager.state/set-active-entity",390902972,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rpg-adventure-manager.state","rpg-adventure-manager.state",2056508353,null),new cljs.core.Symbol(null,"set-active-entity","set-active-entity",1902178379,null),"src/rpg_adventure_manager/state.cljs",24,1,40,40,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"payload","payload",1257495435,null)], null)),null,(cljs.core.truth_(rpg_adventure_manager.state.set_active_entity)?rpg_adventure_manager.state.set_active_entity.cljs$lang$test:null)]))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"handle-state-change"),new cljs.core.Var(function(){return rpg_adventure_manager.state.handle_state_change;},new cljs.core.Symbol("rpg-adventure-manager.state","handle-state-change","rpg-adventure-manager.state/handle-state-change",1276545087,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"rpg-adventure-manager.state","rpg-adventure-manager.state",2056508353,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"file","file",-1269645878),"src/rpg_adventure_manager/state.cljs",new cljs.core.Keyword(null,"line","line",212345235),52,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"handle-state-change","handle-state-change",-1426901748,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(rpg_adventure_manager.state.handle_state_change)?rpg_adventure_manager.state.handle_state_change.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"update-alert"),new cljs.core.Var(function(){return rpg_adventure_manager.state.update_alert;},new cljs.core.Symbol("rpg-adventure-manager.state","update-alert","rpg-adventure-manager.state/update-alert",536505185,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rpg-adventure-manager.state","rpg-adventure-manager.state",2056508353,null),new cljs.core.Symbol(null,"update-alert","update-alert",2111756208,null),"src/rpg_adventure_manager/state.cljs",19,1,32,32,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"payload","payload",1257495435,null)], null)),null,(cljs.core.truth_(rpg_adventure_manager.state.update_alert)?rpg_adventure_manager.state.update_alert.cljs$lang$test:null)]))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"update-list"),new cljs.core.Var(function(){return rpg_adventure_manager.state.update_list;},new cljs.core.Symbol("rpg-adventure-manager.state","update-list","rpg-adventure-manager.state/update-list",-1194599194,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rpg-adventure-manager.state","rpg-adventure-manager.state",2056508353,null),new cljs.core.Symbol(null,"update-list","update-list",-1628495951,null),"src/rpg_adventure_manager/state.cljs",18,1,28,28,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"payload","payload",1257495435,null)], null)),null,(cljs.core.truth_(rpg_adventure_manager.state.update_list)?rpg_adventure_manager.state.update_list.cljs$lang$test:null)]))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"state"),new cljs.core.Var(function(){return rpg_adventure_manager.state.state;},new cljs.core.Symbol("rpg-adventure-manager.state","state","rpg-adventure-manager.state/state",-177939675,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rpg-adventure-manager.state","rpg-adventure-manager.state",2056508353,null),new cljs.core.Symbol(null,"state","state",-348086572,null),"src/rpg_adventure_manager/state.cljs",15,1,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(rpg_adventure_manager.state.state)?rpg_adventure_manager.state.state.cljs$lang$test:null)]))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"update-entity"),new cljs.core.Var(function(){return rpg_adventure_manager.state.update_entity;},new cljs.core.Symbol("rpg-adventure-manager.state","update-entity","rpg-adventure-manager.state/update-entity",210667082,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rpg-adventure-manager.state","rpg-adventure-manager.state",2056508353,null),new cljs.core.Symbol(null,"update-entity","update-entity",-487406309,null),"src/rpg_adventure_manager/state.cljs",20,1,24,24,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"payload","payload",1257495435,null)], null)),null,(cljs.core.truth_(rpg_adventure_manager.state.update_entity)?rpg_adventure_manager.state.update_entity.cljs$lang$test:null)]))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"set-active-type"),new cljs.core.Var(function(){return rpg_adventure_manager.state.set_active_type;},new cljs.core.Symbol("rpg-adventure-manager.state","set-active-type","rpg-adventure-manager.state/set-active-type",1392202797,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"rpg-adventure-manager.state","rpg-adventure-manager.state",2056508353,null),new cljs.core.Symbol(null,"set-active-type","set-active-type",-1126198500,null),"src/rpg_adventure_manager/state.cljs",22,1,36,36,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"payload","payload",1257495435,null)], null)),null,(cljs.core.truth_(rpg_adventure_manager.state.set_active_type)?rpg_adventure_manager.state.set_active_type.cljs$lang$test:null)]))], null)], null)).call(null,cljs.core.symbol.call(null,action));
return fn_var.call(null,payload);
});

//# sourceMappingURL=state.js.map?rel=1556057999512
