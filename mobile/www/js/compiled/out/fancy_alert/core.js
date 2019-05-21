// Compiled by ClojureScript 1.10.238 {}
goog.provide('fancy_alert.core');
goog.require('cljs.core');
fancyalerthandleclose = (function (){
return document.getElementById("fancy-alert").remove();
});
if(typeof fancy_alert.core.defaultSettings !== 'undefined'){
} else {
fancy_alert.core.defaultSettings = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),"example",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(2000),new cljs.core.Keyword(null,"hideAfterN","hideAfterN",1402371045),true,new cljs.core.Keyword(null,"showButton","showButton",-1745795920),false,new cljs.core.Keyword(null,"buttonProperties","buttonProperties",1221783147),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttonText","buttonText",282861744),"close"], null)], null);
}
if(typeof fancy_alert.core.defaultStyles !== 'undefined'){
} else {
fancy_alert.core.defaultStyles = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["center;","50%;","-100px;","-100px;","200px;","white;","8px;","center;","flex;","fixed;","1px solid #ddd;","8px;","column;","200px;","50%;"]);
}
fancy_alert.core.generate_alert_css = (function fancy_alert$core$generate_alert_css(mergedStyles){

return ["style=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__37138){
var vec__37139 = p__37138;
var key = cljs.core.nth.call(null,vec__37139,(0),null);
var val = cljs.core.nth.call(null,vec__37139,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)].join('');
}),mergedStyles))),"\""].join('');
});
fancy_alert.core.handle_close = (function fancy_alert$core$handle_close(){

return document.getElementById("fancy-alert").remove();
});
fancy_alert.core.generate_button_html = (function fancy_alert$core$generate_button_html(options){

if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"showButton","showButton",-1745795920).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not.call(null,new cljs.core.Keyword(null,"hideAfterN","hideAfterN",1402371045).cljs$core$IFn$_invoke$arity$1(options));
}
})())){
return ["<button onClick=\"fancyalerthandleclose()\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buttonProperties","buttonProperties",1221783147),new cljs.core.Keyword(null,"buttonText","buttonText",282861744)], null))),"</button>"].join('');
} else {
return null;
}
});
fancy_alert.core.generate_html = (function fancy_alert$core$generate_html(options,mergedStyles){

return ["<div id=\"fancy-alert\" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fancy_alert.core.generate_alert_css.call(null,mergedStyles)),">\n          <div class=\"fancy-alert__inner\">\n            <p>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(options)),"</p>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fancy_alert.core.generate_button_html.call(null,options)),"\n          </div>\n        </div>"].join('');
});
fancy_alert.core.set_up_timeout = (function fancy_alert$core$set_up_timeout(timeout){

return setTimeout((function (){
return fancy_alert.core.handle_close.call(null);
}),timeout);
});
fancy_alert.core.fancy_alert = (function fancy_alert$core$fancy_alert(options){

var bodyElem = document.body;
var mergedOptions = cljs.core.merge.call(null,fancy_alert.core.defaultSettings,options);
var mergedStyles = cljs.core.merge.call(null,fancy_alert.core.defaultStyles,new cljs.core.Keyword(null,"styles","styles",1954480375).cljs$core$IFn$_invoke$arity$1(options));
bodyElem.insertAdjacentHTML("afterbegin",fancy_alert.core.generate_html.call(null,mergedOptions,mergedStyles));

if(cljs.core.truth_(new cljs.core.Keyword(null,"hideAfterN","hideAfterN",1402371045).cljs$core$IFn$_invoke$arity$1(mergedOptions))){
return fancy_alert.core.set_up_timeout.call(null,new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(mergedOptions));
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1557924527740
