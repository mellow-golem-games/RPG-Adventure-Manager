// Compiled by ClojureScript 1.10.238 {}
goog.provide('rpg_adventure_manager.components.lists.new$');
goog.require('cljs.core');
goog.require('rpg_adventure_manager.state');
goog.require('rpg_adventure_manager.scripts.localforageApi');
goog.require('rpg_adventure_manager.components.new_header');
rpg_adventure_manager.components.lists.new$.render = (function rpg_adventure_manager$components$lists$new$render(state){
var details = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"description","description",-1428560544),"",new cljs.core.Keyword(null,"characters","characters",-163867197),"",new cljs.core.Keyword(null,"future","future",1877842724),"",new cljs.core.Keyword(null,"usage","usage",-1583752910),""], null));
return ((function (details){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.New-List.itemPage.new","div.New-List.itemPage.new",137916621),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"new-list","new-list",1375707571).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"activeView","activeView",-879635345).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))], null),rpg_adventure_manager.components.new_header.render.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.new.content","div.new.content",1078457008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Add a New List"], null)], null)], null);
});
;})(details))
});

//# sourceMappingURL=new.js.map?rel=1555937575082
