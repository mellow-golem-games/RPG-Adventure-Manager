// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23809 = arguments.length;
switch (G__23809) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23810 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23810 = (function (f,blockable,meta23811){
this.f = f;
this.blockable = blockable;
this.meta23811 = meta23811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23812,meta23811__$1){
var self__ = this;
var _23812__$1 = this;
return (new cljs.core.async.t_cljs$core$async23810(self__.f,self__.blockable,meta23811__$1));
});

cljs.core.async.t_cljs$core$async23810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23812){
var self__ = this;
var _23812__$1 = this;
return self__.meta23811;
});

cljs.core.async.t_cljs$core$async23810.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23810.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23810.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23810.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23811","meta23811",1575227139,null)], null);
});

cljs.core.async.t_cljs$core$async23810.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23810.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23810";

cljs.core.async.t_cljs$core$async23810.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23810");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23810.
 */
cljs.core.async.__GT_t_cljs$core$async23810 = (function cljs$core$async$__GT_t_cljs$core$async23810(f__$1,blockable__$1,meta23811){
return (new cljs.core.async.t_cljs$core$async23810(f__$1,blockable__$1,meta23811));
});

}

return (new cljs.core.async.t_cljs$core$async23810(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23816 = arguments.length;
switch (G__23816) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23819 = arguments.length;
switch (G__23819) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23822 = arguments.length;
switch (G__23822) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23824 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23824);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23824,ret){
return (function (){
return fn1.call(null,val_23824);
});})(val_23824,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23826 = arguments.length;
switch (G__23826) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___23828 = n;
var x_23829 = (0);
while(true){
if((x_23829 < n__4376__auto___23828)){
(a[x_23829] = (0));

var G__23830 = (x_23829 + (1));
x_23829 = G__23830;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23831 = (i + (1));
i = G__23831;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23832 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23832 = (function (flag,meta23833){
this.flag = flag;
this.meta23833 = meta23833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23834,meta23833__$1){
var self__ = this;
var _23834__$1 = this;
return (new cljs.core.async.t_cljs$core$async23832(self__.flag,meta23833__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23832.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23834){
var self__ = this;
var _23834__$1 = this;
return self__.meta23833;
});})(flag))
;

cljs.core.async.t_cljs$core$async23832.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23832.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23832.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23832.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23832.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23833","meta23833",-1551598670,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23832.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23832";

cljs.core.async.t_cljs$core$async23832.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23832");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23832.
 */
cljs.core.async.__GT_t_cljs$core$async23832 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23832(flag__$1,meta23833){
return (new cljs.core.async.t_cljs$core$async23832(flag__$1,meta23833));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23832(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23835 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23835 = (function (flag,cb,meta23836){
this.flag = flag;
this.cb = cb;
this.meta23836 = meta23836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23837,meta23836__$1){
var self__ = this;
var _23837__$1 = this;
return (new cljs.core.async.t_cljs$core$async23835(self__.flag,self__.cb,meta23836__$1));
});

cljs.core.async.t_cljs$core$async23835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23837){
var self__ = this;
var _23837__$1 = this;
return self__.meta23836;
});

cljs.core.async.t_cljs$core$async23835.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23835.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23835.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23835.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23836","meta23836",-68733520,null)], null);
});

cljs.core.async.t_cljs$core$async23835.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23835";

cljs.core.async.t_cljs$core$async23835.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23835");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23835.
 */
cljs.core.async.__GT_t_cljs$core$async23835 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23835(flag__$1,cb__$1,meta23836){
return (new cljs.core.async.t_cljs$core$async23835(flag__$1,cb__$1,meta23836));
});

}

return (new cljs.core.async.t_cljs$core$async23835(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23838_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23838_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23839_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23839_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23840 = (i + (1));
i = G__23840;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23846 = arguments.length;
var i__4500__auto___23847 = (0);
while(true){
if((i__4500__auto___23847 < len__4499__auto___23846)){
args__4502__auto__.push((arguments[i__4500__auto___23847]));

var G__23848 = (i__4500__auto___23847 + (1));
i__4500__auto___23847 = G__23848;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23843){
var map__23844 = p__23843;
var map__23844__$1 = ((((!((map__23844 == null)))?(((((map__23844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23844):map__23844);
var opts = map__23844__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23841){
var G__23842 = cljs.core.first.call(null,seq23841);
var seq23841__$1 = cljs.core.next.call(null,seq23841);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23842,seq23841__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23850 = arguments.length;
switch (G__23850) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23749__auto___23896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23749__auto___23896){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (c__23749__auto___23896){
return (function (state_23874){
var state_val_23875 = (state_23874[(1)]);
if((state_val_23875 === (7))){
var inst_23870 = (state_23874[(2)]);
var state_23874__$1 = state_23874;
var statearr_23876_23897 = state_23874__$1;
(statearr_23876_23897[(2)] = inst_23870);

(statearr_23876_23897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (1))){
var state_23874__$1 = state_23874;
var statearr_23877_23898 = state_23874__$1;
(statearr_23877_23898[(2)] = null);

(statearr_23877_23898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (4))){
var inst_23853 = (state_23874[(7)]);
var inst_23853__$1 = (state_23874[(2)]);
var inst_23854 = (inst_23853__$1 == null);
var state_23874__$1 = (function (){var statearr_23878 = state_23874;
(statearr_23878[(7)] = inst_23853__$1);

return statearr_23878;
})();
if(cljs.core.truth_(inst_23854)){
var statearr_23879_23899 = state_23874__$1;
(statearr_23879_23899[(1)] = (5));

} else {
var statearr_23880_23900 = state_23874__$1;
(statearr_23880_23900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (13))){
var state_23874__$1 = state_23874;
var statearr_23881_23901 = state_23874__$1;
(statearr_23881_23901[(2)] = null);

(statearr_23881_23901[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (6))){
var inst_23853 = (state_23874[(7)]);
var state_23874__$1 = state_23874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23874__$1,(11),to,inst_23853);
} else {
if((state_val_23875 === (3))){
var inst_23872 = (state_23874[(2)]);
var state_23874__$1 = state_23874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23874__$1,inst_23872);
} else {
if((state_val_23875 === (12))){
var state_23874__$1 = state_23874;
var statearr_23882_23902 = state_23874__$1;
(statearr_23882_23902[(2)] = null);

(statearr_23882_23902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (2))){
var state_23874__$1 = state_23874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23874__$1,(4),from);
} else {
if((state_val_23875 === (11))){
var inst_23863 = (state_23874[(2)]);
var state_23874__$1 = state_23874;
if(cljs.core.truth_(inst_23863)){
var statearr_23883_23903 = state_23874__$1;
(statearr_23883_23903[(1)] = (12));

} else {
var statearr_23884_23904 = state_23874__$1;
(statearr_23884_23904[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (9))){
var state_23874__$1 = state_23874;
var statearr_23885_23905 = state_23874__$1;
(statearr_23885_23905[(2)] = null);

(statearr_23885_23905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (5))){
var state_23874__$1 = state_23874;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23886_23906 = state_23874__$1;
(statearr_23886_23906[(1)] = (8));

} else {
var statearr_23887_23907 = state_23874__$1;
(statearr_23887_23907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (14))){
var inst_23868 = (state_23874[(2)]);
var state_23874__$1 = state_23874;
var statearr_23888_23908 = state_23874__$1;
(statearr_23888_23908[(2)] = inst_23868);

(statearr_23888_23908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (10))){
var inst_23860 = (state_23874[(2)]);
var state_23874__$1 = state_23874;
var statearr_23889_23909 = state_23874__$1;
(statearr_23889_23909[(2)] = inst_23860);

(statearr_23889_23909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (8))){
var inst_23857 = cljs.core.async.close_BANG_.call(null,to);
var state_23874__$1 = state_23874;
var statearr_23890_23910 = state_23874__$1;
(statearr_23890_23910[(2)] = inst_23857);

(statearr_23890_23910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23749__auto___23896))
;
return ((function (switch__23659__auto__,c__23749__auto___23896){
return (function() {
var cljs$core$async$state_machine__23660__auto__ = null;
var cljs$core$async$state_machine__23660__auto____0 = (function (){
var statearr_23891 = [null,null,null,null,null,null,null,null];
(statearr_23891[(0)] = cljs$core$async$state_machine__23660__auto__);

(statearr_23891[(1)] = (1));

return statearr_23891;
});
var cljs$core$async$state_machine__23660__auto____1 = (function (state_23874){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_23874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e23892){if((e23892 instanceof Object)){
var ex__23663__auto__ = e23892;
var statearr_23893_23911 = state_23874;
(statearr_23893_23911[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23912 = state_23874;
state_23874 = G__23912;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
cljs$core$async$state_machine__23660__auto__ = function(state_23874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23660__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23660__auto____1.call(this,state_23874);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23660__auto____0;
cljs$core$async$state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23660__auto____1;
return cljs$core$async$state_machine__23660__auto__;
})()
;})(switch__23659__auto__,c__23749__auto___23896))
})();
var state__23751__auto__ = (function (){var statearr_23894 = f__23750__auto__.call(null);
(statearr_23894[(6)] = c__23749__auto___23896);

return statearr_23894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(c__23749__auto___23896))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23913){
var vec__23914 = p__23913;
var v = cljs.core.nth.call(null,vec__23914,(0),null);
var p = cljs.core.nth.call(null,vec__23914,(1),null);
var job = vec__23914;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23749__auto___24085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23749__auto___24085,res,vec__23914,v,p,job,jobs,results){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (c__23749__auto___24085,res,vec__23914,v,p,job,jobs,results){
return (function (state_23921){
var state_val_23922 = (state_23921[(1)]);
if((state_val_23922 === (1))){
var state_23921__$1 = state_23921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23921__$1,(2),res,v);
} else {
if((state_val_23922 === (2))){
var inst_23918 = (state_23921[(2)]);
var inst_23919 = cljs.core.async.close_BANG_.call(null,res);
var state_23921__$1 = (function (){var statearr_23923 = state_23921;
(statearr_23923[(7)] = inst_23918);

return statearr_23923;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23921__$1,inst_23919);
} else {
return null;
}
}
});})(c__23749__auto___24085,res,vec__23914,v,p,job,jobs,results))
;
return ((function (switch__23659__auto__,c__23749__auto___24085,res,vec__23914,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____0 = (function (){
var statearr_23924 = [null,null,null,null,null,null,null,null];
(statearr_23924[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__);

(statearr_23924[(1)] = (1));

return statearr_23924;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____1 = (function (state_23921){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_23921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e23925){if((e23925 instanceof Object)){
var ex__23663__auto__ = e23925;
var statearr_23926_24086 = state_23921;
(statearr_23926_24086[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24087 = state_23921;
state_23921 = G__24087;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__ = function(state_23921){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____1.call(this,state_23921);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__;
})()
;})(switch__23659__auto__,c__23749__auto___24085,res,vec__23914,v,p,job,jobs,results))
})();
var state__23751__auto__ = (function (){var statearr_23927 = f__23750__auto__.call(null);
(statearr_23927[(6)] = c__23749__auto___24085);

return statearr_23927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(c__23749__auto___24085,res,vec__23914,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23928){
var vec__23929 = p__23928;
var v = cljs.core.nth.call(null,vec__23929,(0),null);
var p = cljs.core.nth.call(null,vec__23929,(1),null);
var job = vec__23929;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___24088 = n;
var __24089 = (0);
while(true){
if((__24089 < n__4376__auto___24088)){
var G__23932_24090 = type;
var G__23932_24091__$1 = (((G__23932_24090 instanceof cljs.core.Keyword))?G__23932_24090.fqn:null);
switch (G__23932_24091__$1) {
case "compute":
var c__23749__auto___24093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24089,c__23749__auto___24093,G__23932_24090,G__23932_24091__$1,n__4376__auto___24088,jobs,results,process,async){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (__24089,c__23749__auto___24093,G__23932_24090,G__23932_24091__$1,n__4376__auto___24088,jobs,results,process,async){
return (function (state_23945){
var state_val_23946 = (state_23945[(1)]);
if((state_val_23946 === (1))){
var state_23945__$1 = state_23945;
var statearr_23947_24094 = state_23945__$1;
(statearr_23947_24094[(2)] = null);

(statearr_23947_24094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23946 === (2))){
var state_23945__$1 = state_23945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23945__$1,(4),jobs);
} else {
if((state_val_23946 === (3))){
var inst_23943 = (state_23945[(2)]);
var state_23945__$1 = state_23945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23945__$1,inst_23943);
} else {
if((state_val_23946 === (4))){
var inst_23935 = (state_23945[(2)]);
var inst_23936 = process.call(null,inst_23935);
var state_23945__$1 = state_23945;
if(cljs.core.truth_(inst_23936)){
var statearr_23948_24095 = state_23945__$1;
(statearr_23948_24095[(1)] = (5));

} else {
var statearr_23949_24096 = state_23945__$1;
(statearr_23949_24096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23946 === (5))){
var state_23945__$1 = state_23945;
var statearr_23950_24097 = state_23945__$1;
(statearr_23950_24097[(2)] = null);

(statearr_23950_24097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23946 === (6))){
var state_23945__$1 = state_23945;
var statearr_23951_24098 = state_23945__$1;
(statearr_23951_24098[(2)] = null);

(statearr_23951_24098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23946 === (7))){
var inst_23941 = (state_23945[(2)]);
var state_23945__$1 = state_23945;
var statearr_23952_24099 = state_23945__$1;
(statearr_23952_24099[(2)] = inst_23941);

(statearr_23952_24099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__24089,c__23749__auto___24093,G__23932_24090,G__23932_24091__$1,n__4376__auto___24088,jobs,results,process,async))
;
return ((function (__24089,switch__23659__auto__,c__23749__auto___24093,G__23932_24090,G__23932_24091__$1,n__4376__auto___24088,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____0 = (function (){
var statearr_23953 = [null,null,null,null,null,null,null];
(statearr_23953[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__);

(statearr_23953[(1)] = (1));

return statearr_23953;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____1 = (function (state_23945){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_23945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e23954){if((e23954 instanceof Object)){
var ex__23663__auto__ = e23954;
var statearr_23955_24100 = state_23945;
(statearr_23955_24100[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24101 = state_23945;
state_23945 = G__24101;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__ = function(state_23945){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____1.call(this,state_23945);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__;
})()
;})(__24089,switch__23659__auto__,c__23749__auto___24093,G__23932_24090,G__23932_24091__$1,n__4376__auto___24088,jobs,results,process,async))
})();
var state__23751__auto__ = (function (){var statearr_23956 = f__23750__auto__.call(null);
(statearr_23956[(6)] = c__23749__auto___24093);

return statearr_23956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(__24089,c__23749__auto___24093,G__23932_24090,G__23932_24091__$1,n__4376__auto___24088,jobs,results,process,async))
);


break;
case "async":
var c__23749__auto___24102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24089,c__23749__auto___24102,G__23932_24090,G__23932_24091__$1,n__4376__auto___24088,jobs,results,process,async){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (__24089,c__23749__auto___24102,G__23932_24090,G__23932_24091__$1,n__4376__auto___24088,jobs,results,process,async){
return (function (state_23969){
var state_val_23970 = (state_23969[(1)]);
if((state_val_23970 === (1))){
var state_23969__$1 = state_23969;
var statearr_23971_24103 = state_23969__$1;
(statearr_23971_24103[(2)] = null);

(statearr_23971_24103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (2))){
var state_23969__$1 = state_23969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23969__$1,(4),jobs);
} else {
if((state_val_23970 === (3))){
var inst_23967 = (state_23969[(2)]);
var state_23969__$1 = state_23969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23969__$1,inst_23967);
} else {
if((state_val_23970 === (4))){
var inst_23959 = (state_23969[(2)]);
var inst_23960 = async.call(null,inst_23959);
var state_23969__$1 = state_23969;
if(cljs.core.truth_(inst_23960)){
var statearr_23972_24104 = state_23969__$1;
(statearr_23972_24104[(1)] = (5));

} else {
var statearr_23973_24105 = state_23969__$1;
(statearr_23973_24105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (5))){
var state_23969__$1 = state_23969;
var statearr_23974_24106 = state_23969__$1;
(statearr_23974_24106[(2)] = null);

(statearr_23974_24106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (6))){
var state_23969__$1 = state_23969;
var statearr_23975_24107 = state_23969__$1;
(statearr_23975_24107[(2)] = null);

(statearr_23975_24107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (7))){
var inst_23965 = (state_23969[(2)]);
var state_23969__$1 = state_23969;
var statearr_23976_24108 = state_23969__$1;
(statearr_23976_24108[(2)] = inst_23965);

(statearr_23976_24108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__24089,c__23749__auto___24102,G__23932_24090,G__23932_24091__$1,n__4376__auto___24088,jobs,results,process,async))
;
return ((function (__24089,switch__23659__auto__,c__23749__auto___24102,G__23932_24090,G__23932_24091__$1,n__4376__auto___24088,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____0 = (function (){
var statearr_23977 = [null,null,null,null,null,null,null];
(statearr_23977[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__);

(statearr_23977[(1)] = (1));

return statearr_23977;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____1 = (function (state_23969){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_23969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e23978){if((e23978 instanceof Object)){
var ex__23663__auto__ = e23978;
var statearr_23979_24109 = state_23969;
(statearr_23979_24109[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24110 = state_23969;
state_23969 = G__24110;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__ = function(state_23969){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____1.call(this,state_23969);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__;
})()
;})(__24089,switch__23659__auto__,c__23749__auto___24102,G__23932_24090,G__23932_24091__$1,n__4376__auto___24088,jobs,results,process,async))
})();
var state__23751__auto__ = (function (){var statearr_23980 = f__23750__auto__.call(null);
(statearr_23980[(6)] = c__23749__auto___24102);

return statearr_23980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(__24089,c__23749__auto___24102,G__23932_24090,G__23932_24091__$1,n__4376__auto___24088,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23932_24091__$1)].join('')));

}

var G__24111 = (__24089 + (1));
__24089 = G__24111;
continue;
} else {
}
break;
}

var c__23749__auto___24112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23749__auto___24112,jobs,results,process,async){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (c__23749__auto___24112,jobs,results,process,async){
return (function (state_24002){
var state_val_24003 = (state_24002[(1)]);
if((state_val_24003 === (1))){
var state_24002__$1 = state_24002;
var statearr_24004_24113 = state_24002__$1;
(statearr_24004_24113[(2)] = null);

(statearr_24004_24113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24003 === (2))){
var state_24002__$1 = state_24002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24002__$1,(4),from);
} else {
if((state_val_24003 === (3))){
var inst_24000 = (state_24002[(2)]);
var state_24002__$1 = state_24002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24002__$1,inst_24000);
} else {
if((state_val_24003 === (4))){
var inst_23983 = (state_24002[(7)]);
var inst_23983__$1 = (state_24002[(2)]);
var inst_23984 = (inst_23983__$1 == null);
var state_24002__$1 = (function (){var statearr_24005 = state_24002;
(statearr_24005[(7)] = inst_23983__$1);

return statearr_24005;
})();
if(cljs.core.truth_(inst_23984)){
var statearr_24006_24114 = state_24002__$1;
(statearr_24006_24114[(1)] = (5));

} else {
var statearr_24007_24115 = state_24002__$1;
(statearr_24007_24115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24003 === (5))){
var inst_23986 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24002__$1 = state_24002;
var statearr_24008_24116 = state_24002__$1;
(statearr_24008_24116[(2)] = inst_23986);

(statearr_24008_24116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24003 === (6))){
var inst_23988 = (state_24002[(8)]);
var inst_23983 = (state_24002[(7)]);
var inst_23988__$1 = cljs.core.async.chan.call(null,(1));
var inst_23989 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23990 = [inst_23983,inst_23988__$1];
var inst_23991 = (new cljs.core.PersistentVector(null,2,(5),inst_23989,inst_23990,null));
var state_24002__$1 = (function (){var statearr_24009 = state_24002;
(statearr_24009[(8)] = inst_23988__$1);

return statearr_24009;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24002__$1,(8),jobs,inst_23991);
} else {
if((state_val_24003 === (7))){
var inst_23998 = (state_24002[(2)]);
var state_24002__$1 = state_24002;
var statearr_24010_24117 = state_24002__$1;
(statearr_24010_24117[(2)] = inst_23998);

(statearr_24010_24117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24003 === (8))){
var inst_23988 = (state_24002[(8)]);
var inst_23993 = (state_24002[(2)]);
var state_24002__$1 = (function (){var statearr_24011 = state_24002;
(statearr_24011[(9)] = inst_23993);

return statearr_24011;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24002__$1,(9),results,inst_23988);
} else {
if((state_val_24003 === (9))){
var inst_23995 = (state_24002[(2)]);
var state_24002__$1 = (function (){var statearr_24012 = state_24002;
(statearr_24012[(10)] = inst_23995);

return statearr_24012;
})();
var statearr_24013_24118 = state_24002__$1;
(statearr_24013_24118[(2)] = null);

(statearr_24013_24118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__23749__auto___24112,jobs,results,process,async))
;
return ((function (switch__23659__auto__,c__23749__auto___24112,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____0 = (function (){
var statearr_24014 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24014[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__);

(statearr_24014[(1)] = (1));

return statearr_24014;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____1 = (function (state_24002){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_24002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e24015){if((e24015 instanceof Object)){
var ex__23663__auto__ = e24015;
var statearr_24016_24119 = state_24002;
(statearr_24016_24119[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24120 = state_24002;
state_24002 = G__24120;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__ = function(state_24002){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____1.call(this,state_24002);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__;
})()
;})(switch__23659__auto__,c__23749__auto___24112,jobs,results,process,async))
})();
var state__23751__auto__ = (function (){var statearr_24017 = f__23750__auto__.call(null);
(statearr_24017[(6)] = c__23749__auto___24112);

return statearr_24017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(c__23749__auto___24112,jobs,results,process,async))
);


var c__23749__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23749__auto__,jobs,results,process,async){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (c__23749__auto__,jobs,results,process,async){
return (function (state_24055){
var state_val_24056 = (state_24055[(1)]);
if((state_val_24056 === (7))){
var inst_24051 = (state_24055[(2)]);
var state_24055__$1 = state_24055;
var statearr_24057_24121 = state_24055__$1;
(statearr_24057_24121[(2)] = inst_24051);

(statearr_24057_24121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24056 === (20))){
var state_24055__$1 = state_24055;
var statearr_24058_24122 = state_24055__$1;
(statearr_24058_24122[(2)] = null);

(statearr_24058_24122[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24056 === (1))){
var state_24055__$1 = state_24055;
var statearr_24059_24123 = state_24055__$1;
(statearr_24059_24123[(2)] = null);

(statearr_24059_24123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24056 === (4))){
var inst_24020 = (state_24055[(7)]);
var inst_24020__$1 = (state_24055[(2)]);
var inst_24021 = (inst_24020__$1 == null);
var state_24055__$1 = (function (){var statearr_24060 = state_24055;
(statearr_24060[(7)] = inst_24020__$1);

return statearr_24060;
})();
if(cljs.core.truth_(inst_24021)){
var statearr_24061_24124 = state_24055__$1;
(statearr_24061_24124[(1)] = (5));

} else {
var statearr_24062_24125 = state_24055__$1;
(statearr_24062_24125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24056 === (15))){
var inst_24033 = (state_24055[(8)]);
var state_24055__$1 = state_24055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24055__$1,(18),to,inst_24033);
} else {
if((state_val_24056 === (21))){
var inst_24046 = (state_24055[(2)]);
var state_24055__$1 = state_24055;
var statearr_24063_24126 = state_24055__$1;
(statearr_24063_24126[(2)] = inst_24046);

(statearr_24063_24126[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24056 === (13))){
var inst_24048 = (state_24055[(2)]);
var state_24055__$1 = (function (){var statearr_24064 = state_24055;
(statearr_24064[(9)] = inst_24048);

return statearr_24064;
})();
var statearr_24065_24127 = state_24055__$1;
(statearr_24065_24127[(2)] = null);

(statearr_24065_24127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24056 === (6))){
var inst_24020 = (state_24055[(7)]);
var state_24055__$1 = state_24055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24055__$1,(11),inst_24020);
} else {
if((state_val_24056 === (17))){
var inst_24041 = (state_24055[(2)]);
var state_24055__$1 = state_24055;
if(cljs.core.truth_(inst_24041)){
var statearr_24066_24128 = state_24055__$1;
(statearr_24066_24128[(1)] = (19));

} else {
var statearr_24067_24129 = state_24055__$1;
(statearr_24067_24129[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24056 === (3))){
var inst_24053 = (state_24055[(2)]);
var state_24055__$1 = state_24055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24055__$1,inst_24053);
} else {
if((state_val_24056 === (12))){
var inst_24030 = (state_24055[(10)]);
var state_24055__$1 = state_24055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24055__$1,(14),inst_24030);
} else {
if((state_val_24056 === (2))){
var state_24055__$1 = state_24055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24055__$1,(4),results);
} else {
if((state_val_24056 === (19))){
var state_24055__$1 = state_24055;
var statearr_24068_24130 = state_24055__$1;
(statearr_24068_24130[(2)] = null);

(statearr_24068_24130[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24056 === (11))){
var inst_24030 = (state_24055[(2)]);
var state_24055__$1 = (function (){var statearr_24069 = state_24055;
(statearr_24069[(10)] = inst_24030);

return statearr_24069;
})();
var statearr_24070_24131 = state_24055__$1;
(statearr_24070_24131[(2)] = null);

(statearr_24070_24131[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24056 === (9))){
var state_24055__$1 = state_24055;
var statearr_24071_24132 = state_24055__$1;
(statearr_24071_24132[(2)] = null);

(statearr_24071_24132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24056 === (5))){
var state_24055__$1 = state_24055;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24072_24133 = state_24055__$1;
(statearr_24072_24133[(1)] = (8));

} else {
var statearr_24073_24134 = state_24055__$1;
(statearr_24073_24134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24056 === (14))){
var inst_24033 = (state_24055[(8)]);
var inst_24035 = (state_24055[(11)]);
var inst_24033__$1 = (state_24055[(2)]);
var inst_24034 = (inst_24033__$1 == null);
var inst_24035__$1 = cljs.core.not.call(null,inst_24034);
var state_24055__$1 = (function (){var statearr_24074 = state_24055;
(statearr_24074[(8)] = inst_24033__$1);

(statearr_24074[(11)] = inst_24035__$1);

return statearr_24074;
})();
if(inst_24035__$1){
var statearr_24075_24135 = state_24055__$1;
(statearr_24075_24135[(1)] = (15));

} else {
var statearr_24076_24136 = state_24055__$1;
(statearr_24076_24136[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24056 === (16))){
var inst_24035 = (state_24055[(11)]);
var state_24055__$1 = state_24055;
var statearr_24077_24137 = state_24055__$1;
(statearr_24077_24137[(2)] = inst_24035);

(statearr_24077_24137[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24056 === (10))){
var inst_24027 = (state_24055[(2)]);
var state_24055__$1 = state_24055;
var statearr_24078_24138 = state_24055__$1;
(statearr_24078_24138[(2)] = inst_24027);

(statearr_24078_24138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24056 === (18))){
var inst_24038 = (state_24055[(2)]);
var state_24055__$1 = state_24055;
var statearr_24079_24139 = state_24055__$1;
(statearr_24079_24139[(2)] = inst_24038);

(statearr_24079_24139[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24056 === (8))){
var inst_24024 = cljs.core.async.close_BANG_.call(null,to);
var state_24055__$1 = state_24055;
var statearr_24080_24140 = state_24055__$1;
(statearr_24080_24140[(2)] = inst_24024);

(statearr_24080_24140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23749__auto__,jobs,results,process,async))
;
return ((function (switch__23659__auto__,c__23749__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____0 = (function (){
var statearr_24081 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24081[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__);

(statearr_24081[(1)] = (1));

return statearr_24081;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____1 = (function (state_24055){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_24055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e24082){if((e24082 instanceof Object)){
var ex__23663__auto__ = e24082;
var statearr_24083_24141 = state_24055;
(statearr_24083_24141[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24142 = state_24055;
state_24055 = G__24142;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__ = function(state_24055){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____1.call(this,state_24055);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23660__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23660__auto__;
})()
;})(switch__23659__auto__,c__23749__auto__,jobs,results,process,async))
})();
var state__23751__auto__ = (function (){var statearr_24084 = f__23750__auto__.call(null);
(statearr_24084[(6)] = c__23749__auto__);

return statearr_24084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(c__23749__auto__,jobs,results,process,async))
);

return c__23749__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24144 = arguments.length;
switch (G__24144) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__24147 = arguments.length;
switch (G__24147) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__24150 = arguments.length;
switch (G__24150) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23749__auto___24199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23749__auto___24199,tc,fc){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (c__23749__auto___24199,tc,fc){
return (function (state_24176){
var state_val_24177 = (state_24176[(1)]);
if((state_val_24177 === (7))){
var inst_24172 = (state_24176[(2)]);
var state_24176__$1 = state_24176;
var statearr_24178_24200 = state_24176__$1;
(statearr_24178_24200[(2)] = inst_24172);

(statearr_24178_24200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (1))){
var state_24176__$1 = state_24176;
var statearr_24179_24201 = state_24176__$1;
(statearr_24179_24201[(2)] = null);

(statearr_24179_24201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (4))){
var inst_24153 = (state_24176[(7)]);
var inst_24153__$1 = (state_24176[(2)]);
var inst_24154 = (inst_24153__$1 == null);
var state_24176__$1 = (function (){var statearr_24180 = state_24176;
(statearr_24180[(7)] = inst_24153__$1);

return statearr_24180;
})();
if(cljs.core.truth_(inst_24154)){
var statearr_24181_24202 = state_24176__$1;
(statearr_24181_24202[(1)] = (5));

} else {
var statearr_24182_24203 = state_24176__$1;
(statearr_24182_24203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (13))){
var state_24176__$1 = state_24176;
var statearr_24183_24204 = state_24176__$1;
(statearr_24183_24204[(2)] = null);

(statearr_24183_24204[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (6))){
var inst_24153 = (state_24176[(7)]);
var inst_24159 = p.call(null,inst_24153);
var state_24176__$1 = state_24176;
if(cljs.core.truth_(inst_24159)){
var statearr_24184_24205 = state_24176__$1;
(statearr_24184_24205[(1)] = (9));

} else {
var statearr_24185_24206 = state_24176__$1;
(statearr_24185_24206[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (3))){
var inst_24174 = (state_24176[(2)]);
var state_24176__$1 = state_24176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24176__$1,inst_24174);
} else {
if((state_val_24177 === (12))){
var state_24176__$1 = state_24176;
var statearr_24186_24207 = state_24176__$1;
(statearr_24186_24207[(2)] = null);

(statearr_24186_24207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (2))){
var state_24176__$1 = state_24176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24176__$1,(4),ch);
} else {
if((state_val_24177 === (11))){
var inst_24153 = (state_24176[(7)]);
var inst_24163 = (state_24176[(2)]);
var state_24176__$1 = state_24176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24176__$1,(8),inst_24163,inst_24153);
} else {
if((state_val_24177 === (9))){
var state_24176__$1 = state_24176;
var statearr_24187_24208 = state_24176__$1;
(statearr_24187_24208[(2)] = tc);

(statearr_24187_24208[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (5))){
var inst_24156 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24157 = cljs.core.async.close_BANG_.call(null,fc);
var state_24176__$1 = (function (){var statearr_24188 = state_24176;
(statearr_24188[(8)] = inst_24156);

return statearr_24188;
})();
var statearr_24189_24209 = state_24176__$1;
(statearr_24189_24209[(2)] = inst_24157);

(statearr_24189_24209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (14))){
var inst_24170 = (state_24176[(2)]);
var state_24176__$1 = state_24176;
var statearr_24190_24210 = state_24176__$1;
(statearr_24190_24210[(2)] = inst_24170);

(statearr_24190_24210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (10))){
var state_24176__$1 = state_24176;
var statearr_24191_24211 = state_24176__$1;
(statearr_24191_24211[(2)] = fc);

(statearr_24191_24211[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (8))){
var inst_24165 = (state_24176[(2)]);
var state_24176__$1 = state_24176;
if(cljs.core.truth_(inst_24165)){
var statearr_24192_24212 = state_24176__$1;
(statearr_24192_24212[(1)] = (12));

} else {
var statearr_24193_24213 = state_24176__$1;
(statearr_24193_24213[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23749__auto___24199,tc,fc))
;
return ((function (switch__23659__auto__,c__23749__auto___24199,tc,fc){
return (function() {
var cljs$core$async$state_machine__23660__auto__ = null;
var cljs$core$async$state_machine__23660__auto____0 = (function (){
var statearr_24194 = [null,null,null,null,null,null,null,null,null];
(statearr_24194[(0)] = cljs$core$async$state_machine__23660__auto__);

(statearr_24194[(1)] = (1));

return statearr_24194;
});
var cljs$core$async$state_machine__23660__auto____1 = (function (state_24176){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_24176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e24195){if((e24195 instanceof Object)){
var ex__23663__auto__ = e24195;
var statearr_24196_24214 = state_24176;
(statearr_24196_24214[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24215 = state_24176;
state_24176 = G__24215;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
cljs$core$async$state_machine__23660__auto__ = function(state_24176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23660__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23660__auto____1.call(this,state_24176);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23660__auto____0;
cljs$core$async$state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23660__auto____1;
return cljs$core$async$state_machine__23660__auto__;
})()
;})(switch__23659__auto__,c__23749__auto___24199,tc,fc))
})();
var state__23751__auto__ = (function (){var statearr_24197 = f__23750__auto__.call(null);
(statearr_24197[(6)] = c__23749__auto___24199);

return statearr_24197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(c__23749__auto___24199,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23749__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23749__auto__){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (c__23749__auto__){
return (function (state_24236){
var state_val_24237 = (state_24236[(1)]);
if((state_val_24237 === (7))){
var inst_24232 = (state_24236[(2)]);
var state_24236__$1 = state_24236;
var statearr_24238_24256 = state_24236__$1;
(statearr_24238_24256[(2)] = inst_24232);

(statearr_24238_24256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (1))){
var inst_24216 = init;
var state_24236__$1 = (function (){var statearr_24239 = state_24236;
(statearr_24239[(7)] = inst_24216);

return statearr_24239;
})();
var statearr_24240_24257 = state_24236__$1;
(statearr_24240_24257[(2)] = null);

(statearr_24240_24257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (4))){
var inst_24219 = (state_24236[(8)]);
var inst_24219__$1 = (state_24236[(2)]);
var inst_24220 = (inst_24219__$1 == null);
var state_24236__$1 = (function (){var statearr_24241 = state_24236;
(statearr_24241[(8)] = inst_24219__$1);

return statearr_24241;
})();
if(cljs.core.truth_(inst_24220)){
var statearr_24242_24258 = state_24236__$1;
(statearr_24242_24258[(1)] = (5));

} else {
var statearr_24243_24259 = state_24236__$1;
(statearr_24243_24259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (6))){
var inst_24216 = (state_24236[(7)]);
var inst_24219 = (state_24236[(8)]);
var inst_24223 = (state_24236[(9)]);
var inst_24223__$1 = f.call(null,inst_24216,inst_24219);
var inst_24224 = cljs.core.reduced_QMARK_.call(null,inst_24223__$1);
var state_24236__$1 = (function (){var statearr_24244 = state_24236;
(statearr_24244[(9)] = inst_24223__$1);

return statearr_24244;
})();
if(inst_24224){
var statearr_24245_24260 = state_24236__$1;
(statearr_24245_24260[(1)] = (8));

} else {
var statearr_24246_24261 = state_24236__$1;
(statearr_24246_24261[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (3))){
var inst_24234 = (state_24236[(2)]);
var state_24236__$1 = state_24236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24236__$1,inst_24234);
} else {
if((state_val_24237 === (2))){
var state_24236__$1 = state_24236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24236__$1,(4),ch);
} else {
if((state_val_24237 === (9))){
var inst_24223 = (state_24236[(9)]);
var inst_24216 = inst_24223;
var state_24236__$1 = (function (){var statearr_24247 = state_24236;
(statearr_24247[(7)] = inst_24216);

return statearr_24247;
})();
var statearr_24248_24262 = state_24236__$1;
(statearr_24248_24262[(2)] = null);

(statearr_24248_24262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (5))){
var inst_24216 = (state_24236[(7)]);
var state_24236__$1 = state_24236;
var statearr_24249_24263 = state_24236__$1;
(statearr_24249_24263[(2)] = inst_24216);

(statearr_24249_24263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (10))){
var inst_24230 = (state_24236[(2)]);
var state_24236__$1 = state_24236;
var statearr_24250_24264 = state_24236__$1;
(statearr_24250_24264[(2)] = inst_24230);

(statearr_24250_24264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24237 === (8))){
var inst_24223 = (state_24236[(9)]);
var inst_24226 = cljs.core.deref.call(null,inst_24223);
var state_24236__$1 = state_24236;
var statearr_24251_24265 = state_24236__$1;
(statearr_24251_24265[(2)] = inst_24226);

(statearr_24251_24265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__23749__auto__))
;
return ((function (switch__23659__auto__,c__23749__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23660__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23660__auto____0 = (function (){
var statearr_24252 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24252[(0)] = cljs$core$async$reduce_$_state_machine__23660__auto__);

(statearr_24252[(1)] = (1));

return statearr_24252;
});
var cljs$core$async$reduce_$_state_machine__23660__auto____1 = (function (state_24236){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_24236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e24253){if((e24253 instanceof Object)){
var ex__23663__auto__ = e24253;
var statearr_24254_24266 = state_24236;
(statearr_24254_24266[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24267 = state_24236;
state_24236 = G__24267;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23660__auto__ = function(state_24236){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23660__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23660__auto____1.call(this,state_24236);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23660__auto____0;
cljs$core$async$reduce_$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23660__auto____1;
return cljs$core$async$reduce_$_state_machine__23660__auto__;
})()
;})(switch__23659__auto__,c__23749__auto__))
})();
var state__23751__auto__ = (function (){var statearr_24255 = f__23750__auto__.call(null);
(statearr_24255[(6)] = c__23749__auto__);

return statearr_24255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(c__23749__auto__))
);

return c__23749__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23749__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23749__auto__,f__$1){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (c__23749__auto__,f__$1){
return (function (state_24273){
var state_val_24274 = (state_24273[(1)]);
if((state_val_24274 === (1))){
var inst_24268 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24273__$1 = state_24273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24273__$1,(2),inst_24268);
} else {
if((state_val_24274 === (2))){
var inst_24270 = (state_24273[(2)]);
var inst_24271 = f__$1.call(null,inst_24270);
var state_24273__$1 = state_24273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24273__$1,inst_24271);
} else {
return null;
}
}
});})(c__23749__auto__,f__$1))
;
return ((function (switch__23659__auto__,c__23749__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23660__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23660__auto____0 = (function (){
var statearr_24275 = [null,null,null,null,null,null,null];
(statearr_24275[(0)] = cljs$core$async$transduce_$_state_machine__23660__auto__);

(statearr_24275[(1)] = (1));

return statearr_24275;
});
var cljs$core$async$transduce_$_state_machine__23660__auto____1 = (function (state_24273){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_24273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e24276){if((e24276 instanceof Object)){
var ex__23663__auto__ = e24276;
var statearr_24277_24279 = state_24273;
(statearr_24277_24279[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24280 = state_24273;
state_24273 = G__24280;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23660__auto__ = function(state_24273){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23660__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23660__auto____1.call(this,state_24273);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23660__auto____0;
cljs$core$async$transduce_$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23660__auto____1;
return cljs$core$async$transduce_$_state_machine__23660__auto__;
})()
;})(switch__23659__auto__,c__23749__auto__,f__$1))
})();
var state__23751__auto__ = (function (){var statearr_24278 = f__23750__auto__.call(null);
(statearr_24278[(6)] = c__23749__auto__);

return statearr_24278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(c__23749__auto__,f__$1))
);

return c__23749__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__24282 = arguments.length;
switch (G__24282) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23749__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23749__auto__){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (c__23749__auto__){
return (function (state_24307){
var state_val_24308 = (state_24307[(1)]);
if((state_val_24308 === (7))){
var inst_24289 = (state_24307[(2)]);
var state_24307__$1 = state_24307;
var statearr_24309_24330 = state_24307__$1;
(statearr_24309_24330[(2)] = inst_24289);

(statearr_24309_24330[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24308 === (1))){
var inst_24283 = cljs.core.seq.call(null,coll);
var inst_24284 = inst_24283;
var state_24307__$1 = (function (){var statearr_24310 = state_24307;
(statearr_24310[(7)] = inst_24284);

return statearr_24310;
})();
var statearr_24311_24331 = state_24307__$1;
(statearr_24311_24331[(2)] = null);

(statearr_24311_24331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24308 === (4))){
var inst_24284 = (state_24307[(7)]);
var inst_24287 = cljs.core.first.call(null,inst_24284);
var state_24307__$1 = state_24307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24307__$1,(7),ch,inst_24287);
} else {
if((state_val_24308 === (13))){
var inst_24301 = (state_24307[(2)]);
var state_24307__$1 = state_24307;
var statearr_24312_24332 = state_24307__$1;
(statearr_24312_24332[(2)] = inst_24301);

(statearr_24312_24332[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24308 === (6))){
var inst_24292 = (state_24307[(2)]);
var state_24307__$1 = state_24307;
if(cljs.core.truth_(inst_24292)){
var statearr_24313_24333 = state_24307__$1;
(statearr_24313_24333[(1)] = (8));

} else {
var statearr_24314_24334 = state_24307__$1;
(statearr_24314_24334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24308 === (3))){
var inst_24305 = (state_24307[(2)]);
var state_24307__$1 = state_24307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24307__$1,inst_24305);
} else {
if((state_val_24308 === (12))){
var state_24307__$1 = state_24307;
var statearr_24315_24335 = state_24307__$1;
(statearr_24315_24335[(2)] = null);

(statearr_24315_24335[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24308 === (2))){
var inst_24284 = (state_24307[(7)]);
var state_24307__$1 = state_24307;
if(cljs.core.truth_(inst_24284)){
var statearr_24316_24336 = state_24307__$1;
(statearr_24316_24336[(1)] = (4));

} else {
var statearr_24317_24337 = state_24307__$1;
(statearr_24317_24337[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24308 === (11))){
var inst_24298 = cljs.core.async.close_BANG_.call(null,ch);
var state_24307__$1 = state_24307;
var statearr_24318_24338 = state_24307__$1;
(statearr_24318_24338[(2)] = inst_24298);

(statearr_24318_24338[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24308 === (9))){
var state_24307__$1 = state_24307;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24319_24339 = state_24307__$1;
(statearr_24319_24339[(1)] = (11));

} else {
var statearr_24320_24340 = state_24307__$1;
(statearr_24320_24340[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24308 === (5))){
var inst_24284 = (state_24307[(7)]);
var state_24307__$1 = state_24307;
var statearr_24321_24341 = state_24307__$1;
(statearr_24321_24341[(2)] = inst_24284);

(statearr_24321_24341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24308 === (10))){
var inst_24303 = (state_24307[(2)]);
var state_24307__$1 = state_24307;
var statearr_24322_24342 = state_24307__$1;
(statearr_24322_24342[(2)] = inst_24303);

(statearr_24322_24342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24308 === (8))){
var inst_24284 = (state_24307[(7)]);
var inst_24294 = cljs.core.next.call(null,inst_24284);
var inst_24284__$1 = inst_24294;
var state_24307__$1 = (function (){var statearr_24323 = state_24307;
(statearr_24323[(7)] = inst_24284__$1);

return statearr_24323;
})();
var statearr_24324_24343 = state_24307__$1;
(statearr_24324_24343[(2)] = null);

(statearr_24324_24343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23749__auto__))
;
return ((function (switch__23659__auto__,c__23749__auto__){
return (function() {
var cljs$core$async$state_machine__23660__auto__ = null;
var cljs$core$async$state_machine__23660__auto____0 = (function (){
var statearr_24325 = [null,null,null,null,null,null,null,null];
(statearr_24325[(0)] = cljs$core$async$state_machine__23660__auto__);

(statearr_24325[(1)] = (1));

return statearr_24325;
});
var cljs$core$async$state_machine__23660__auto____1 = (function (state_24307){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_24307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e24326){if((e24326 instanceof Object)){
var ex__23663__auto__ = e24326;
var statearr_24327_24344 = state_24307;
(statearr_24327_24344[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24345 = state_24307;
state_24307 = G__24345;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
cljs$core$async$state_machine__23660__auto__ = function(state_24307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23660__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23660__auto____1.call(this,state_24307);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23660__auto____0;
cljs$core$async$state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23660__auto____1;
return cljs$core$async$state_machine__23660__auto__;
})()
;})(switch__23659__auto__,c__23749__auto__))
})();
var state__23751__auto__ = (function (){var statearr_24328 = f__23750__auto__.call(null);
(statearr_24328[(6)] = c__23749__auto__);

return statearr_24328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(c__23749__auto__))
);

return c__23749__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24346 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24346 = (function (ch,cs,meta24347){
this.ch = ch;
this.cs = cs;
this.meta24347 = meta24347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24348,meta24347__$1){
var self__ = this;
var _24348__$1 = this;
return (new cljs.core.async.t_cljs$core$async24346(self__.ch,self__.cs,meta24347__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24346.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24348){
var self__ = this;
var _24348__$1 = this;
return self__.meta24347;
});})(cs))
;

cljs.core.async.t_cljs$core$async24346.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24346.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24346.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24346.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24346.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24346.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24346.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24347","meta24347",-146577158,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24346.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24346";

cljs.core.async.t_cljs$core$async24346.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24346");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24346.
 */
cljs.core.async.__GT_t_cljs$core$async24346 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24346(ch__$1,cs__$1,meta24347){
return (new cljs.core.async.t_cljs$core$async24346(ch__$1,cs__$1,meta24347));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24346(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23749__auto___24568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23749__auto___24568,cs,m,dchan,dctr,done){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (c__23749__auto___24568,cs,m,dchan,dctr,done){
return (function (state_24483){
var state_val_24484 = (state_24483[(1)]);
if((state_val_24484 === (7))){
var inst_24479 = (state_24483[(2)]);
var state_24483__$1 = state_24483;
var statearr_24485_24569 = state_24483__$1;
(statearr_24485_24569[(2)] = inst_24479);

(statearr_24485_24569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (20))){
var inst_24382 = (state_24483[(7)]);
var inst_24394 = cljs.core.first.call(null,inst_24382);
var inst_24395 = cljs.core.nth.call(null,inst_24394,(0),null);
var inst_24396 = cljs.core.nth.call(null,inst_24394,(1),null);
var state_24483__$1 = (function (){var statearr_24486 = state_24483;
(statearr_24486[(8)] = inst_24395);

return statearr_24486;
})();
if(cljs.core.truth_(inst_24396)){
var statearr_24487_24570 = state_24483__$1;
(statearr_24487_24570[(1)] = (22));

} else {
var statearr_24488_24571 = state_24483__$1;
(statearr_24488_24571[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (27))){
var inst_24424 = (state_24483[(9)]);
var inst_24426 = (state_24483[(10)]);
var inst_24431 = (state_24483[(11)]);
var inst_24351 = (state_24483[(12)]);
var inst_24431__$1 = cljs.core._nth.call(null,inst_24424,inst_24426);
var inst_24432 = cljs.core.async.put_BANG_.call(null,inst_24431__$1,inst_24351,done);
var state_24483__$1 = (function (){var statearr_24489 = state_24483;
(statearr_24489[(11)] = inst_24431__$1);

return statearr_24489;
})();
if(cljs.core.truth_(inst_24432)){
var statearr_24490_24572 = state_24483__$1;
(statearr_24490_24572[(1)] = (30));

} else {
var statearr_24491_24573 = state_24483__$1;
(statearr_24491_24573[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (1))){
var state_24483__$1 = state_24483;
var statearr_24492_24574 = state_24483__$1;
(statearr_24492_24574[(2)] = null);

(statearr_24492_24574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (24))){
var inst_24382 = (state_24483[(7)]);
var inst_24401 = (state_24483[(2)]);
var inst_24402 = cljs.core.next.call(null,inst_24382);
var inst_24360 = inst_24402;
var inst_24361 = null;
var inst_24362 = (0);
var inst_24363 = (0);
var state_24483__$1 = (function (){var statearr_24493 = state_24483;
(statearr_24493[(13)] = inst_24360);

(statearr_24493[(14)] = inst_24363);

(statearr_24493[(15)] = inst_24401);

(statearr_24493[(16)] = inst_24361);

(statearr_24493[(17)] = inst_24362);

return statearr_24493;
})();
var statearr_24494_24575 = state_24483__$1;
(statearr_24494_24575[(2)] = null);

(statearr_24494_24575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (39))){
var state_24483__$1 = state_24483;
var statearr_24498_24576 = state_24483__$1;
(statearr_24498_24576[(2)] = null);

(statearr_24498_24576[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (4))){
var inst_24351 = (state_24483[(12)]);
var inst_24351__$1 = (state_24483[(2)]);
var inst_24352 = (inst_24351__$1 == null);
var state_24483__$1 = (function (){var statearr_24499 = state_24483;
(statearr_24499[(12)] = inst_24351__$1);

return statearr_24499;
})();
if(cljs.core.truth_(inst_24352)){
var statearr_24500_24577 = state_24483__$1;
(statearr_24500_24577[(1)] = (5));

} else {
var statearr_24501_24578 = state_24483__$1;
(statearr_24501_24578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (15))){
var inst_24360 = (state_24483[(13)]);
var inst_24363 = (state_24483[(14)]);
var inst_24361 = (state_24483[(16)]);
var inst_24362 = (state_24483[(17)]);
var inst_24378 = (state_24483[(2)]);
var inst_24379 = (inst_24363 + (1));
var tmp24495 = inst_24360;
var tmp24496 = inst_24361;
var tmp24497 = inst_24362;
var inst_24360__$1 = tmp24495;
var inst_24361__$1 = tmp24496;
var inst_24362__$1 = tmp24497;
var inst_24363__$1 = inst_24379;
var state_24483__$1 = (function (){var statearr_24502 = state_24483;
(statearr_24502[(13)] = inst_24360__$1);

(statearr_24502[(14)] = inst_24363__$1);

(statearr_24502[(16)] = inst_24361__$1);

(statearr_24502[(17)] = inst_24362__$1);

(statearr_24502[(18)] = inst_24378);

return statearr_24502;
})();
var statearr_24503_24579 = state_24483__$1;
(statearr_24503_24579[(2)] = null);

(statearr_24503_24579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (21))){
var inst_24405 = (state_24483[(2)]);
var state_24483__$1 = state_24483;
var statearr_24507_24580 = state_24483__$1;
(statearr_24507_24580[(2)] = inst_24405);

(statearr_24507_24580[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (31))){
var inst_24431 = (state_24483[(11)]);
var inst_24435 = done.call(null,null);
var inst_24436 = cljs.core.async.untap_STAR_.call(null,m,inst_24431);
var state_24483__$1 = (function (){var statearr_24508 = state_24483;
(statearr_24508[(19)] = inst_24435);

return statearr_24508;
})();
var statearr_24509_24581 = state_24483__$1;
(statearr_24509_24581[(2)] = inst_24436);

(statearr_24509_24581[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (32))){
var inst_24425 = (state_24483[(20)]);
var inst_24424 = (state_24483[(9)]);
var inst_24426 = (state_24483[(10)]);
var inst_24423 = (state_24483[(21)]);
var inst_24438 = (state_24483[(2)]);
var inst_24439 = (inst_24426 + (1));
var tmp24504 = inst_24425;
var tmp24505 = inst_24424;
var tmp24506 = inst_24423;
var inst_24423__$1 = tmp24506;
var inst_24424__$1 = tmp24505;
var inst_24425__$1 = tmp24504;
var inst_24426__$1 = inst_24439;
var state_24483__$1 = (function (){var statearr_24510 = state_24483;
(statearr_24510[(20)] = inst_24425__$1);

(statearr_24510[(9)] = inst_24424__$1);

(statearr_24510[(10)] = inst_24426__$1);

(statearr_24510[(21)] = inst_24423__$1);

(statearr_24510[(22)] = inst_24438);

return statearr_24510;
})();
var statearr_24511_24582 = state_24483__$1;
(statearr_24511_24582[(2)] = null);

(statearr_24511_24582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (40))){
var inst_24451 = (state_24483[(23)]);
var inst_24455 = done.call(null,null);
var inst_24456 = cljs.core.async.untap_STAR_.call(null,m,inst_24451);
var state_24483__$1 = (function (){var statearr_24512 = state_24483;
(statearr_24512[(24)] = inst_24455);

return statearr_24512;
})();
var statearr_24513_24583 = state_24483__$1;
(statearr_24513_24583[(2)] = inst_24456);

(statearr_24513_24583[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (33))){
var inst_24442 = (state_24483[(25)]);
var inst_24444 = cljs.core.chunked_seq_QMARK_.call(null,inst_24442);
var state_24483__$1 = state_24483;
if(inst_24444){
var statearr_24514_24584 = state_24483__$1;
(statearr_24514_24584[(1)] = (36));

} else {
var statearr_24515_24585 = state_24483__$1;
(statearr_24515_24585[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (13))){
var inst_24372 = (state_24483[(26)]);
var inst_24375 = cljs.core.async.close_BANG_.call(null,inst_24372);
var state_24483__$1 = state_24483;
var statearr_24516_24586 = state_24483__$1;
(statearr_24516_24586[(2)] = inst_24375);

(statearr_24516_24586[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (22))){
var inst_24395 = (state_24483[(8)]);
var inst_24398 = cljs.core.async.close_BANG_.call(null,inst_24395);
var state_24483__$1 = state_24483;
var statearr_24517_24587 = state_24483__$1;
(statearr_24517_24587[(2)] = inst_24398);

(statearr_24517_24587[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (36))){
var inst_24442 = (state_24483[(25)]);
var inst_24446 = cljs.core.chunk_first.call(null,inst_24442);
var inst_24447 = cljs.core.chunk_rest.call(null,inst_24442);
var inst_24448 = cljs.core.count.call(null,inst_24446);
var inst_24423 = inst_24447;
var inst_24424 = inst_24446;
var inst_24425 = inst_24448;
var inst_24426 = (0);
var state_24483__$1 = (function (){var statearr_24518 = state_24483;
(statearr_24518[(20)] = inst_24425);

(statearr_24518[(9)] = inst_24424);

(statearr_24518[(10)] = inst_24426);

(statearr_24518[(21)] = inst_24423);

return statearr_24518;
})();
var statearr_24519_24588 = state_24483__$1;
(statearr_24519_24588[(2)] = null);

(statearr_24519_24588[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (41))){
var inst_24442 = (state_24483[(25)]);
var inst_24458 = (state_24483[(2)]);
var inst_24459 = cljs.core.next.call(null,inst_24442);
var inst_24423 = inst_24459;
var inst_24424 = null;
var inst_24425 = (0);
var inst_24426 = (0);
var state_24483__$1 = (function (){var statearr_24520 = state_24483;
(statearr_24520[(20)] = inst_24425);

(statearr_24520[(9)] = inst_24424);

(statearr_24520[(27)] = inst_24458);

(statearr_24520[(10)] = inst_24426);

(statearr_24520[(21)] = inst_24423);

return statearr_24520;
})();
var statearr_24521_24589 = state_24483__$1;
(statearr_24521_24589[(2)] = null);

(statearr_24521_24589[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (43))){
var state_24483__$1 = state_24483;
var statearr_24522_24590 = state_24483__$1;
(statearr_24522_24590[(2)] = null);

(statearr_24522_24590[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (29))){
var inst_24467 = (state_24483[(2)]);
var state_24483__$1 = state_24483;
var statearr_24523_24591 = state_24483__$1;
(statearr_24523_24591[(2)] = inst_24467);

(statearr_24523_24591[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (44))){
var inst_24476 = (state_24483[(2)]);
var state_24483__$1 = (function (){var statearr_24524 = state_24483;
(statearr_24524[(28)] = inst_24476);

return statearr_24524;
})();
var statearr_24525_24592 = state_24483__$1;
(statearr_24525_24592[(2)] = null);

(statearr_24525_24592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (6))){
var inst_24415 = (state_24483[(29)]);
var inst_24414 = cljs.core.deref.call(null,cs);
var inst_24415__$1 = cljs.core.keys.call(null,inst_24414);
var inst_24416 = cljs.core.count.call(null,inst_24415__$1);
var inst_24417 = cljs.core.reset_BANG_.call(null,dctr,inst_24416);
var inst_24422 = cljs.core.seq.call(null,inst_24415__$1);
var inst_24423 = inst_24422;
var inst_24424 = null;
var inst_24425 = (0);
var inst_24426 = (0);
var state_24483__$1 = (function (){var statearr_24526 = state_24483;
(statearr_24526[(20)] = inst_24425);

(statearr_24526[(30)] = inst_24417);

(statearr_24526[(9)] = inst_24424);

(statearr_24526[(29)] = inst_24415__$1);

(statearr_24526[(10)] = inst_24426);

(statearr_24526[(21)] = inst_24423);

return statearr_24526;
})();
var statearr_24527_24593 = state_24483__$1;
(statearr_24527_24593[(2)] = null);

(statearr_24527_24593[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (28))){
var inst_24442 = (state_24483[(25)]);
var inst_24423 = (state_24483[(21)]);
var inst_24442__$1 = cljs.core.seq.call(null,inst_24423);
var state_24483__$1 = (function (){var statearr_24528 = state_24483;
(statearr_24528[(25)] = inst_24442__$1);

return statearr_24528;
})();
if(inst_24442__$1){
var statearr_24529_24594 = state_24483__$1;
(statearr_24529_24594[(1)] = (33));

} else {
var statearr_24530_24595 = state_24483__$1;
(statearr_24530_24595[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (25))){
var inst_24425 = (state_24483[(20)]);
var inst_24426 = (state_24483[(10)]);
var inst_24428 = (inst_24426 < inst_24425);
var inst_24429 = inst_24428;
var state_24483__$1 = state_24483;
if(cljs.core.truth_(inst_24429)){
var statearr_24531_24596 = state_24483__$1;
(statearr_24531_24596[(1)] = (27));

} else {
var statearr_24532_24597 = state_24483__$1;
(statearr_24532_24597[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (34))){
var state_24483__$1 = state_24483;
var statearr_24533_24598 = state_24483__$1;
(statearr_24533_24598[(2)] = null);

(statearr_24533_24598[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (17))){
var state_24483__$1 = state_24483;
var statearr_24534_24599 = state_24483__$1;
(statearr_24534_24599[(2)] = null);

(statearr_24534_24599[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (3))){
var inst_24481 = (state_24483[(2)]);
var state_24483__$1 = state_24483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24483__$1,inst_24481);
} else {
if((state_val_24484 === (12))){
var inst_24410 = (state_24483[(2)]);
var state_24483__$1 = state_24483;
var statearr_24535_24600 = state_24483__$1;
(statearr_24535_24600[(2)] = inst_24410);

(statearr_24535_24600[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (2))){
var state_24483__$1 = state_24483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24483__$1,(4),ch);
} else {
if((state_val_24484 === (23))){
var state_24483__$1 = state_24483;
var statearr_24536_24601 = state_24483__$1;
(statearr_24536_24601[(2)] = null);

(statearr_24536_24601[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (35))){
var inst_24465 = (state_24483[(2)]);
var state_24483__$1 = state_24483;
var statearr_24537_24602 = state_24483__$1;
(statearr_24537_24602[(2)] = inst_24465);

(statearr_24537_24602[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (19))){
var inst_24382 = (state_24483[(7)]);
var inst_24386 = cljs.core.chunk_first.call(null,inst_24382);
var inst_24387 = cljs.core.chunk_rest.call(null,inst_24382);
var inst_24388 = cljs.core.count.call(null,inst_24386);
var inst_24360 = inst_24387;
var inst_24361 = inst_24386;
var inst_24362 = inst_24388;
var inst_24363 = (0);
var state_24483__$1 = (function (){var statearr_24538 = state_24483;
(statearr_24538[(13)] = inst_24360);

(statearr_24538[(14)] = inst_24363);

(statearr_24538[(16)] = inst_24361);

(statearr_24538[(17)] = inst_24362);

return statearr_24538;
})();
var statearr_24539_24603 = state_24483__$1;
(statearr_24539_24603[(2)] = null);

(statearr_24539_24603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (11))){
var inst_24360 = (state_24483[(13)]);
var inst_24382 = (state_24483[(7)]);
var inst_24382__$1 = cljs.core.seq.call(null,inst_24360);
var state_24483__$1 = (function (){var statearr_24540 = state_24483;
(statearr_24540[(7)] = inst_24382__$1);

return statearr_24540;
})();
if(inst_24382__$1){
var statearr_24541_24604 = state_24483__$1;
(statearr_24541_24604[(1)] = (16));

} else {
var statearr_24542_24605 = state_24483__$1;
(statearr_24542_24605[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (9))){
var inst_24412 = (state_24483[(2)]);
var state_24483__$1 = state_24483;
var statearr_24543_24606 = state_24483__$1;
(statearr_24543_24606[(2)] = inst_24412);

(statearr_24543_24606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (5))){
var inst_24358 = cljs.core.deref.call(null,cs);
var inst_24359 = cljs.core.seq.call(null,inst_24358);
var inst_24360 = inst_24359;
var inst_24361 = null;
var inst_24362 = (0);
var inst_24363 = (0);
var state_24483__$1 = (function (){var statearr_24544 = state_24483;
(statearr_24544[(13)] = inst_24360);

(statearr_24544[(14)] = inst_24363);

(statearr_24544[(16)] = inst_24361);

(statearr_24544[(17)] = inst_24362);

return statearr_24544;
})();
var statearr_24545_24607 = state_24483__$1;
(statearr_24545_24607[(2)] = null);

(statearr_24545_24607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (14))){
var state_24483__$1 = state_24483;
var statearr_24546_24608 = state_24483__$1;
(statearr_24546_24608[(2)] = null);

(statearr_24546_24608[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (45))){
var inst_24473 = (state_24483[(2)]);
var state_24483__$1 = state_24483;
var statearr_24547_24609 = state_24483__$1;
(statearr_24547_24609[(2)] = inst_24473);

(statearr_24547_24609[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (26))){
var inst_24415 = (state_24483[(29)]);
var inst_24469 = (state_24483[(2)]);
var inst_24470 = cljs.core.seq.call(null,inst_24415);
var state_24483__$1 = (function (){var statearr_24548 = state_24483;
(statearr_24548[(31)] = inst_24469);

return statearr_24548;
})();
if(inst_24470){
var statearr_24549_24610 = state_24483__$1;
(statearr_24549_24610[(1)] = (42));

} else {
var statearr_24550_24611 = state_24483__$1;
(statearr_24550_24611[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (16))){
var inst_24382 = (state_24483[(7)]);
var inst_24384 = cljs.core.chunked_seq_QMARK_.call(null,inst_24382);
var state_24483__$1 = state_24483;
if(inst_24384){
var statearr_24551_24612 = state_24483__$1;
(statearr_24551_24612[(1)] = (19));

} else {
var statearr_24552_24613 = state_24483__$1;
(statearr_24552_24613[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (38))){
var inst_24462 = (state_24483[(2)]);
var state_24483__$1 = state_24483;
var statearr_24553_24614 = state_24483__$1;
(statearr_24553_24614[(2)] = inst_24462);

(statearr_24553_24614[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (30))){
var state_24483__$1 = state_24483;
var statearr_24554_24615 = state_24483__$1;
(statearr_24554_24615[(2)] = null);

(statearr_24554_24615[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (10))){
var inst_24363 = (state_24483[(14)]);
var inst_24361 = (state_24483[(16)]);
var inst_24371 = cljs.core._nth.call(null,inst_24361,inst_24363);
var inst_24372 = cljs.core.nth.call(null,inst_24371,(0),null);
var inst_24373 = cljs.core.nth.call(null,inst_24371,(1),null);
var state_24483__$1 = (function (){var statearr_24555 = state_24483;
(statearr_24555[(26)] = inst_24372);

return statearr_24555;
})();
if(cljs.core.truth_(inst_24373)){
var statearr_24556_24616 = state_24483__$1;
(statearr_24556_24616[(1)] = (13));

} else {
var statearr_24557_24617 = state_24483__$1;
(statearr_24557_24617[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (18))){
var inst_24408 = (state_24483[(2)]);
var state_24483__$1 = state_24483;
var statearr_24558_24618 = state_24483__$1;
(statearr_24558_24618[(2)] = inst_24408);

(statearr_24558_24618[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (42))){
var state_24483__$1 = state_24483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24483__$1,(45),dchan);
} else {
if((state_val_24484 === (37))){
var inst_24442 = (state_24483[(25)]);
var inst_24351 = (state_24483[(12)]);
var inst_24451 = (state_24483[(23)]);
var inst_24451__$1 = cljs.core.first.call(null,inst_24442);
var inst_24452 = cljs.core.async.put_BANG_.call(null,inst_24451__$1,inst_24351,done);
var state_24483__$1 = (function (){var statearr_24559 = state_24483;
(statearr_24559[(23)] = inst_24451__$1);

return statearr_24559;
})();
if(cljs.core.truth_(inst_24452)){
var statearr_24560_24619 = state_24483__$1;
(statearr_24560_24619[(1)] = (39));

} else {
var statearr_24561_24620 = state_24483__$1;
(statearr_24561_24620[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24484 === (8))){
var inst_24363 = (state_24483[(14)]);
var inst_24362 = (state_24483[(17)]);
var inst_24365 = (inst_24363 < inst_24362);
var inst_24366 = inst_24365;
var state_24483__$1 = state_24483;
if(cljs.core.truth_(inst_24366)){
var statearr_24562_24621 = state_24483__$1;
(statearr_24562_24621[(1)] = (10));

} else {
var statearr_24563_24622 = state_24483__$1;
(statearr_24563_24622[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23749__auto___24568,cs,m,dchan,dctr,done))
;
return ((function (switch__23659__auto__,c__23749__auto___24568,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23660__auto__ = null;
var cljs$core$async$mult_$_state_machine__23660__auto____0 = (function (){
var statearr_24564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24564[(0)] = cljs$core$async$mult_$_state_machine__23660__auto__);

(statearr_24564[(1)] = (1));

return statearr_24564;
});
var cljs$core$async$mult_$_state_machine__23660__auto____1 = (function (state_24483){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_24483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e24565){if((e24565 instanceof Object)){
var ex__23663__auto__ = e24565;
var statearr_24566_24623 = state_24483;
(statearr_24566_24623[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24624 = state_24483;
state_24483 = G__24624;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23660__auto__ = function(state_24483){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23660__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23660__auto____1.call(this,state_24483);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23660__auto____0;
cljs$core$async$mult_$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23660__auto____1;
return cljs$core$async$mult_$_state_machine__23660__auto__;
})()
;})(switch__23659__auto__,c__23749__auto___24568,cs,m,dchan,dctr,done))
})();
var state__23751__auto__ = (function (){var statearr_24567 = f__23750__auto__.call(null);
(statearr_24567[(6)] = c__23749__auto___24568);

return statearr_24567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(c__23749__auto___24568,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24626 = arguments.length;
switch (G__24626) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24638 = arguments.length;
var i__4500__auto___24639 = (0);
while(true){
if((i__4500__auto___24639 < len__4499__auto___24638)){
args__4502__auto__.push((arguments[i__4500__auto___24639]));

var G__24640 = (i__4500__auto___24639 + (1));
i__4500__auto___24639 = G__24640;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24632){
var map__24633 = p__24632;
var map__24633__$1 = ((((!((map__24633 == null)))?(((((map__24633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24633):map__24633);
var opts = map__24633__$1;
var statearr_24635_24641 = state;
(statearr_24635_24641[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__24633,map__24633__$1,opts){
return (function (val){
var statearr_24636_24642 = state;
(statearr_24636_24642[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24633,map__24633__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_24637_24643 = state;
(statearr_24637_24643[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24628){
var G__24629 = cljs.core.first.call(null,seq24628);
var seq24628__$1 = cljs.core.next.call(null,seq24628);
var G__24630 = cljs.core.first.call(null,seq24628__$1);
var seq24628__$2 = cljs.core.next.call(null,seq24628__$1);
var G__24631 = cljs.core.first.call(null,seq24628__$2);
var seq24628__$3 = cljs.core.next.call(null,seq24628__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24629,G__24630,G__24631,seq24628__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24644 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24644 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta24645){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta24645 = meta24645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24646,meta24645__$1){
var self__ = this;
var _24646__$1 = this;
return (new cljs.core.async.t_cljs$core$async24644(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta24645__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24644.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24646){
var self__ = this;
var _24646__$1 = this;
return self__.meta24645;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24644.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24644.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24644.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24644.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24644.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24644.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24644.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24644.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24644.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta24645","meta24645",491315684,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24644.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24644.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24644";

cljs.core.async.t_cljs$core$async24644.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24644");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24644.
 */
cljs.core.async.__GT_t_cljs$core$async24644 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24644(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24645){
return (new cljs.core.async.t_cljs$core$async24644(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24645));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24644(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23749__auto___24808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23749__auto___24808,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (c__23749__auto___24808,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24748){
var state_val_24749 = (state_24748[(1)]);
if((state_val_24749 === (7))){
var inst_24663 = (state_24748[(2)]);
var state_24748__$1 = state_24748;
var statearr_24750_24809 = state_24748__$1;
(statearr_24750_24809[(2)] = inst_24663);

(statearr_24750_24809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (20))){
var inst_24675 = (state_24748[(7)]);
var state_24748__$1 = state_24748;
var statearr_24751_24810 = state_24748__$1;
(statearr_24751_24810[(2)] = inst_24675);

(statearr_24751_24810[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (27))){
var state_24748__$1 = state_24748;
var statearr_24752_24811 = state_24748__$1;
(statearr_24752_24811[(2)] = null);

(statearr_24752_24811[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (1))){
var inst_24650 = (state_24748[(8)]);
var inst_24650__$1 = calc_state.call(null);
var inst_24652 = (inst_24650__$1 == null);
var inst_24653 = cljs.core.not.call(null,inst_24652);
var state_24748__$1 = (function (){var statearr_24753 = state_24748;
(statearr_24753[(8)] = inst_24650__$1);

return statearr_24753;
})();
if(inst_24653){
var statearr_24754_24812 = state_24748__$1;
(statearr_24754_24812[(1)] = (2));

} else {
var statearr_24755_24813 = state_24748__$1;
(statearr_24755_24813[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (24))){
var inst_24708 = (state_24748[(9)]);
var inst_24722 = (state_24748[(10)]);
var inst_24699 = (state_24748[(11)]);
var inst_24722__$1 = inst_24699.call(null,inst_24708);
var state_24748__$1 = (function (){var statearr_24756 = state_24748;
(statearr_24756[(10)] = inst_24722__$1);

return statearr_24756;
})();
if(cljs.core.truth_(inst_24722__$1)){
var statearr_24757_24814 = state_24748__$1;
(statearr_24757_24814[(1)] = (29));

} else {
var statearr_24758_24815 = state_24748__$1;
(statearr_24758_24815[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (4))){
var inst_24666 = (state_24748[(2)]);
var state_24748__$1 = state_24748;
if(cljs.core.truth_(inst_24666)){
var statearr_24759_24816 = state_24748__$1;
(statearr_24759_24816[(1)] = (8));

} else {
var statearr_24760_24817 = state_24748__$1;
(statearr_24760_24817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (15))){
var inst_24693 = (state_24748[(2)]);
var state_24748__$1 = state_24748;
if(cljs.core.truth_(inst_24693)){
var statearr_24761_24818 = state_24748__$1;
(statearr_24761_24818[(1)] = (19));

} else {
var statearr_24762_24819 = state_24748__$1;
(statearr_24762_24819[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (21))){
var inst_24698 = (state_24748[(12)]);
var inst_24698__$1 = (state_24748[(2)]);
var inst_24699 = cljs.core.get.call(null,inst_24698__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24700 = cljs.core.get.call(null,inst_24698__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24701 = cljs.core.get.call(null,inst_24698__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24748__$1 = (function (){var statearr_24763 = state_24748;
(statearr_24763[(11)] = inst_24699);

(statearr_24763[(12)] = inst_24698__$1);

(statearr_24763[(13)] = inst_24700);

return statearr_24763;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24748__$1,(22),inst_24701);
} else {
if((state_val_24749 === (31))){
var inst_24730 = (state_24748[(2)]);
var state_24748__$1 = state_24748;
if(cljs.core.truth_(inst_24730)){
var statearr_24764_24820 = state_24748__$1;
(statearr_24764_24820[(1)] = (32));

} else {
var statearr_24765_24821 = state_24748__$1;
(statearr_24765_24821[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (32))){
var inst_24707 = (state_24748[(14)]);
var state_24748__$1 = state_24748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24748__$1,(35),out,inst_24707);
} else {
if((state_val_24749 === (33))){
var inst_24698 = (state_24748[(12)]);
var inst_24675 = inst_24698;
var state_24748__$1 = (function (){var statearr_24766 = state_24748;
(statearr_24766[(7)] = inst_24675);

return statearr_24766;
})();
var statearr_24767_24822 = state_24748__$1;
(statearr_24767_24822[(2)] = null);

(statearr_24767_24822[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (13))){
var inst_24675 = (state_24748[(7)]);
var inst_24682 = inst_24675.cljs$lang$protocol_mask$partition0$;
var inst_24683 = (inst_24682 & (64));
var inst_24684 = inst_24675.cljs$core$ISeq$;
var inst_24685 = (cljs.core.PROTOCOL_SENTINEL === inst_24684);
var inst_24686 = ((inst_24683) || (inst_24685));
var state_24748__$1 = state_24748;
if(cljs.core.truth_(inst_24686)){
var statearr_24768_24823 = state_24748__$1;
(statearr_24768_24823[(1)] = (16));

} else {
var statearr_24769_24824 = state_24748__$1;
(statearr_24769_24824[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (22))){
var inst_24708 = (state_24748[(9)]);
var inst_24707 = (state_24748[(14)]);
var inst_24706 = (state_24748[(2)]);
var inst_24707__$1 = cljs.core.nth.call(null,inst_24706,(0),null);
var inst_24708__$1 = cljs.core.nth.call(null,inst_24706,(1),null);
var inst_24709 = (inst_24707__$1 == null);
var inst_24710 = cljs.core._EQ_.call(null,inst_24708__$1,change);
var inst_24711 = ((inst_24709) || (inst_24710));
var state_24748__$1 = (function (){var statearr_24770 = state_24748;
(statearr_24770[(9)] = inst_24708__$1);

(statearr_24770[(14)] = inst_24707__$1);

return statearr_24770;
})();
if(cljs.core.truth_(inst_24711)){
var statearr_24771_24825 = state_24748__$1;
(statearr_24771_24825[(1)] = (23));

} else {
var statearr_24772_24826 = state_24748__$1;
(statearr_24772_24826[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (36))){
var inst_24698 = (state_24748[(12)]);
var inst_24675 = inst_24698;
var state_24748__$1 = (function (){var statearr_24773 = state_24748;
(statearr_24773[(7)] = inst_24675);

return statearr_24773;
})();
var statearr_24774_24827 = state_24748__$1;
(statearr_24774_24827[(2)] = null);

(statearr_24774_24827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (29))){
var inst_24722 = (state_24748[(10)]);
var state_24748__$1 = state_24748;
var statearr_24775_24828 = state_24748__$1;
(statearr_24775_24828[(2)] = inst_24722);

(statearr_24775_24828[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (6))){
var state_24748__$1 = state_24748;
var statearr_24776_24829 = state_24748__$1;
(statearr_24776_24829[(2)] = false);

(statearr_24776_24829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (28))){
var inst_24718 = (state_24748[(2)]);
var inst_24719 = calc_state.call(null);
var inst_24675 = inst_24719;
var state_24748__$1 = (function (){var statearr_24777 = state_24748;
(statearr_24777[(7)] = inst_24675);

(statearr_24777[(15)] = inst_24718);

return statearr_24777;
})();
var statearr_24778_24830 = state_24748__$1;
(statearr_24778_24830[(2)] = null);

(statearr_24778_24830[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (25))){
var inst_24744 = (state_24748[(2)]);
var state_24748__$1 = state_24748;
var statearr_24779_24831 = state_24748__$1;
(statearr_24779_24831[(2)] = inst_24744);

(statearr_24779_24831[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (34))){
var inst_24742 = (state_24748[(2)]);
var state_24748__$1 = state_24748;
var statearr_24780_24832 = state_24748__$1;
(statearr_24780_24832[(2)] = inst_24742);

(statearr_24780_24832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (17))){
var state_24748__$1 = state_24748;
var statearr_24781_24833 = state_24748__$1;
(statearr_24781_24833[(2)] = false);

(statearr_24781_24833[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (3))){
var state_24748__$1 = state_24748;
var statearr_24782_24834 = state_24748__$1;
(statearr_24782_24834[(2)] = false);

(statearr_24782_24834[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (12))){
var inst_24746 = (state_24748[(2)]);
var state_24748__$1 = state_24748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24748__$1,inst_24746);
} else {
if((state_val_24749 === (2))){
var inst_24650 = (state_24748[(8)]);
var inst_24655 = inst_24650.cljs$lang$protocol_mask$partition0$;
var inst_24656 = (inst_24655 & (64));
var inst_24657 = inst_24650.cljs$core$ISeq$;
var inst_24658 = (cljs.core.PROTOCOL_SENTINEL === inst_24657);
var inst_24659 = ((inst_24656) || (inst_24658));
var state_24748__$1 = state_24748;
if(cljs.core.truth_(inst_24659)){
var statearr_24783_24835 = state_24748__$1;
(statearr_24783_24835[(1)] = (5));

} else {
var statearr_24784_24836 = state_24748__$1;
(statearr_24784_24836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (23))){
var inst_24707 = (state_24748[(14)]);
var inst_24713 = (inst_24707 == null);
var state_24748__$1 = state_24748;
if(cljs.core.truth_(inst_24713)){
var statearr_24785_24837 = state_24748__$1;
(statearr_24785_24837[(1)] = (26));

} else {
var statearr_24786_24838 = state_24748__$1;
(statearr_24786_24838[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (35))){
var inst_24733 = (state_24748[(2)]);
var state_24748__$1 = state_24748;
if(cljs.core.truth_(inst_24733)){
var statearr_24787_24839 = state_24748__$1;
(statearr_24787_24839[(1)] = (36));

} else {
var statearr_24788_24840 = state_24748__$1;
(statearr_24788_24840[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (19))){
var inst_24675 = (state_24748[(7)]);
var inst_24695 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24675);
var state_24748__$1 = state_24748;
var statearr_24789_24841 = state_24748__$1;
(statearr_24789_24841[(2)] = inst_24695);

(statearr_24789_24841[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (11))){
var inst_24675 = (state_24748[(7)]);
var inst_24679 = (inst_24675 == null);
var inst_24680 = cljs.core.not.call(null,inst_24679);
var state_24748__$1 = state_24748;
if(inst_24680){
var statearr_24790_24842 = state_24748__$1;
(statearr_24790_24842[(1)] = (13));

} else {
var statearr_24791_24843 = state_24748__$1;
(statearr_24791_24843[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (9))){
var inst_24650 = (state_24748[(8)]);
var state_24748__$1 = state_24748;
var statearr_24792_24844 = state_24748__$1;
(statearr_24792_24844[(2)] = inst_24650);

(statearr_24792_24844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (5))){
var state_24748__$1 = state_24748;
var statearr_24793_24845 = state_24748__$1;
(statearr_24793_24845[(2)] = true);

(statearr_24793_24845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (14))){
var state_24748__$1 = state_24748;
var statearr_24794_24846 = state_24748__$1;
(statearr_24794_24846[(2)] = false);

(statearr_24794_24846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (26))){
var inst_24708 = (state_24748[(9)]);
var inst_24715 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24708);
var state_24748__$1 = state_24748;
var statearr_24795_24847 = state_24748__$1;
(statearr_24795_24847[(2)] = inst_24715);

(statearr_24795_24847[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (16))){
var state_24748__$1 = state_24748;
var statearr_24796_24848 = state_24748__$1;
(statearr_24796_24848[(2)] = true);

(statearr_24796_24848[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (38))){
var inst_24738 = (state_24748[(2)]);
var state_24748__$1 = state_24748;
var statearr_24797_24849 = state_24748__$1;
(statearr_24797_24849[(2)] = inst_24738);

(statearr_24797_24849[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (30))){
var inst_24708 = (state_24748[(9)]);
var inst_24699 = (state_24748[(11)]);
var inst_24700 = (state_24748[(13)]);
var inst_24725 = cljs.core.empty_QMARK_.call(null,inst_24699);
var inst_24726 = inst_24700.call(null,inst_24708);
var inst_24727 = cljs.core.not.call(null,inst_24726);
var inst_24728 = ((inst_24725) && (inst_24727));
var state_24748__$1 = state_24748;
var statearr_24798_24850 = state_24748__$1;
(statearr_24798_24850[(2)] = inst_24728);

(statearr_24798_24850[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (10))){
var inst_24650 = (state_24748[(8)]);
var inst_24671 = (state_24748[(2)]);
var inst_24672 = cljs.core.get.call(null,inst_24671,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24673 = cljs.core.get.call(null,inst_24671,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24674 = cljs.core.get.call(null,inst_24671,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24675 = inst_24650;
var state_24748__$1 = (function (){var statearr_24799 = state_24748;
(statearr_24799[(16)] = inst_24672);

(statearr_24799[(7)] = inst_24675);

(statearr_24799[(17)] = inst_24674);

(statearr_24799[(18)] = inst_24673);

return statearr_24799;
})();
var statearr_24800_24851 = state_24748__$1;
(statearr_24800_24851[(2)] = null);

(statearr_24800_24851[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (18))){
var inst_24690 = (state_24748[(2)]);
var state_24748__$1 = state_24748;
var statearr_24801_24852 = state_24748__$1;
(statearr_24801_24852[(2)] = inst_24690);

(statearr_24801_24852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (37))){
var state_24748__$1 = state_24748;
var statearr_24802_24853 = state_24748__$1;
(statearr_24802_24853[(2)] = null);

(statearr_24802_24853[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24749 === (8))){
var inst_24650 = (state_24748[(8)]);
var inst_24668 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24650);
var state_24748__$1 = state_24748;
var statearr_24803_24854 = state_24748__$1;
(statearr_24803_24854[(2)] = inst_24668);

(statearr_24803_24854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23749__auto___24808,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23659__auto__,c__23749__auto___24808,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23660__auto__ = null;
var cljs$core$async$mix_$_state_machine__23660__auto____0 = (function (){
var statearr_24804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24804[(0)] = cljs$core$async$mix_$_state_machine__23660__auto__);

(statearr_24804[(1)] = (1));

return statearr_24804;
});
var cljs$core$async$mix_$_state_machine__23660__auto____1 = (function (state_24748){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_24748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e24805){if((e24805 instanceof Object)){
var ex__23663__auto__ = e24805;
var statearr_24806_24855 = state_24748;
(statearr_24806_24855[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24856 = state_24748;
state_24748 = G__24856;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23660__auto__ = function(state_24748){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23660__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23660__auto____1.call(this,state_24748);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23660__auto____0;
cljs$core$async$mix_$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23660__auto____1;
return cljs$core$async$mix_$_state_machine__23660__auto__;
})()
;})(switch__23659__auto__,c__23749__auto___24808,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23751__auto__ = (function (){var statearr_24807 = f__23750__auto__.call(null);
(statearr_24807[(6)] = c__23749__auto___24808);

return statearr_24807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(c__23749__auto___24808,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24858 = arguments.length;
switch (G__24858) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24862 = arguments.length;
switch (G__24862) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__24860_SHARP_){
if(cljs.core.truth_(p1__24860_SHARP_.call(null,topic))){
return p1__24860_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24860_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24863 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24863 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24864){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24864 = meta24864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24865,meta24864__$1){
var self__ = this;
var _24865__$1 = this;
return (new cljs.core.async.t_cljs$core$async24863(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24864__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24863.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24865){
var self__ = this;
var _24865__$1 = this;
return self__.meta24864;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24863.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24863.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24863.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24863.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24863.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24863.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24863.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24863.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24864","meta24864",1279487709,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24863.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24863.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24863";

cljs.core.async.t_cljs$core$async24863.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24863");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24863.
 */
cljs.core.async.__GT_t_cljs$core$async24863 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24863(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24864){
return (new cljs.core.async.t_cljs$core$async24863(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24864));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24863(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23749__auto___24983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23749__auto___24983,mults,ensure_mult,p){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (c__23749__auto___24983,mults,ensure_mult,p){
return (function (state_24937){
var state_val_24938 = (state_24937[(1)]);
if((state_val_24938 === (7))){
var inst_24933 = (state_24937[(2)]);
var state_24937__$1 = state_24937;
var statearr_24939_24984 = state_24937__$1;
(statearr_24939_24984[(2)] = inst_24933);

(statearr_24939_24984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24938 === (20))){
var state_24937__$1 = state_24937;
var statearr_24940_24985 = state_24937__$1;
(statearr_24940_24985[(2)] = null);

(statearr_24940_24985[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24938 === (1))){
var state_24937__$1 = state_24937;
var statearr_24941_24986 = state_24937__$1;
(statearr_24941_24986[(2)] = null);

(statearr_24941_24986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24938 === (24))){
var inst_24916 = (state_24937[(7)]);
var inst_24925 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24916);
var state_24937__$1 = state_24937;
var statearr_24942_24987 = state_24937__$1;
(statearr_24942_24987[(2)] = inst_24925);

(statearr_24942_24987[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24938 === (4))){
var inst_24868 = (state_24937[(8)]);
var inst_24868__$1 = (state_24937[(2)]);
var inst_24869 = (inst_24868__$1 == null);
var state_24937__$1 = (function (){var statearr_24943 = state_24937;
(statearr_24943[(8)] = inst_24868__$1);

return statearr_24943;
})();
if(cljs.core.truth_(inst_24869)){
var statearr_24944_24988 = state_24937__$1;
(statearr_24944_24988[(1)] = (5));

} else {
var statearr_24945_24989 = state_24937__$1;
(statearr_24945_24989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24938 === (15))){
var inst_24910 = (state_24937[(2)]);
var state_24937__$1 = state_24937;
var statearr_24946_24990 = state_24937__$1;
(statearr_24946_24990[(2)] = inst_24910);

(statearr_24946_24990[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24938 === (21))){
var inst_24930 = (state_24937[(2)]);
var state_24937__$1 = (function (){var statearr_24947 = state_24937;
(statearr_24947[(9)] = inst_24930);

return statearr_24947;
})();
var statearr_24948_24991 = state_24937__$1;
(statearr_24948_24991[(2)] = null);

(statearr_24948_24991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24938 === (13))){
var inst_24892 = (state_24937[(10)]);
var inst_24894 = cljs.core.chunked_seq_QMARK_.call(null,inst_24892);
var state_24937__$1 = state_24937;
if(inst_24894){
var statearr_24949_24992 = state_24937__$1;
(statearr_24949_24992[(1)] = (16));

} else {
var statearr_24950_24993 = state_24937__$1;
(statearr_24950_24993[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24938 === (22))){
var inst_24922 = (state_24937[(2)]);
var state_24937__$1 = state_24937;
if(cljs.core.truth_(inst_24922)){
var statearr_24951_24994 = state_24937__$1;
(statearr_24951_24994[(1)] = (23));

} else {
var statearr_24952_24995 = state_24937__$1;
(statearr_24952_24995[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24938 === (6))){
var inst_24918 = (state_24937[(11)]);
var inst_24916 = (state_24937[(7)]);
var inst_24868 = (state_24937[(8)]);
var inst_24916__$1 = topic_fn.call(null,inst_24868);
var inst_24917 = cljs.core.deref.call(null,mults);
var inst_24918__$1 = cljs.core.get.call(null,inst_24917,inst_24916__$1);
var state_24937__$1 = (function (){var statearr_24953 = state_24937;
(statearr_24953[(11)] = inst_24918__$1);

(statearr_24953[(7)] = inst_24916__$1);

return statearr_24953;
})();
if(cljs.core.truth_(inst_24918__$1)){
var statearr_24954_24996 = state_24937__$1;
(statearr_24954_24996[(1)] = (19));

} else {
var statearr_24955_24997 = state_24937__$1;
(statearr_24955_24997[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24938 === (25))){
var inst_24927 = (state_24937[(2)]);
var state_24937__$1 = state_24937;
var statearr_24956_24998 = state_24937__$1;
(statearr_24956_24998[(2)] = inst_24927);

(statearr_24956_24998[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24938 === (17))){
var inst_24892 = (state_24937[(10)]);
var inst_24901 = cljs.core.first.call(null,inst_24892);
var inst_24902 = cljs.core.async.muxch_STAR_.call(null,inst_24901);
var inst_24903 = cljs.core.async.close_BANG_.call(null,inst_24902);
var inst_24904 = cljs.core.next.call(null,inst_24892);
var inst_24878 = inst_24904;
var inst_24879 = null;
var inst_24880 = (0);
var inst_24881 = (0);
var state_24937__$1 = (function (){var statearr_24957 = state_24937;
(statearr_24957[(12)] = inst_24903);

(statearr_24957[(13)] = inst_24879);

(statearr_24957[(14)] = inst_24880);

(statearr_24957[(15)] = inst_24881);

(statearr_24957[(16)] = inst_24878);

return statearr_24957;
})();
var statearr_24958_24999 = state_24937__$1;
(statearr_24958_24999[(2)] = null);

(statearr_24958_24999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24938 === (3))){
var inst_24935 = (state_24937[(2)]);
var state_24937__$1 = state_24937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24937__$1,inst_24935);
} else {
if((state_val_24938 === (12))){
var inst_24912 = (state_24937[(2)]);
var state_24937__$1 = state_24937;
var statearr_24959_25000 = state_24937__$1;
(statearr_24959_25000[(2)] = inst_24912);

(statearr_24959_25000[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24938 === (2))){
var state_24937__$1 = state_24937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24937__$1,(4),ch);
} else {
if((state_val_24938 === (23))){
var state_24937__$1 = state_24937;
var statearr_24960_25001 = state_24937__$1;
(statearr_24960_25001[(2)] = null);

(statearr_24960_25001[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24938 === (19))){
var inst_24918 = (state_24937[(11)]);
var inst_24868 = (state_24937[(8)]);
var inst_24920 = cljs.core.async.muxch_STAR_.call(null,inst_24918);
var state_24937__$1 = state_24937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24937__$1,(22),inst_24920,inst_24868);
} else {
if((state_val_24938 === (11))){
var inst_24892 = (state_24937[(10)]);
var inst_24878 = (state_24937[(16)]);
var inst_24892__$1 = cljs.core.seq.call(null,inst_24878);
var state_24937__$1 = (function (){var statearr_24961 = state_24937;
(statearr_24961[(10)] = inst_24892__$1);

return statearr_24961;
})();
if(inst_24892__$1){
var statearr_24962_25002 = state_24937__$1;
(statearr_24962_25002[(1)] = (13));

} else {
var statearr_24963_25003 = state_24937__$1;
(statearr_24963_25003[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24938 === (9))){
var inst_24914 = (state_24937[(2)]);
var state_24937__$1 = state_24937;
var statearr_24964_25004 = state_24937__$1;
(statearr_24964_25004[(2)] = inst_24914);

(statearr_24964_25004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24938 === (5))){
var inst_24875 = cljs.core.deref.call(null,mults);
var inst_24876 = cljs.core.vals.call(null,inst_24875);
var inst_24877 = cljs.core.seq.call(null,inst_24876);
var inst_24878 = inst_24877;
var inst_24879 = null;
var inst_24880 = (0);
var inst_24881 = (0);
var state_24937__$1 = (function (){var statearr_24965 = state_24937;
(statearr_24965[(13)] = inst_24879);

(statearr_24965[(14)] = inst_24880);

(statearr_24965[(15)] = inst_24881);

(statearr_24965[(16)] = inst_24878);

return statearr_24965;
})();
var statearr_24966_25005 = state_24937__$1;
(statearr_24966_25005[(2)] = null);

(statearr_24966_25005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24938 === (14))){
var state_24937__$1 = state_24937;
var statearr_24970_25006 = state_24937__$1;
(statearr_24970_25006[(2)] = null);

(statearr_24970_25006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24938 === (16))){
var inst_24892 = (state_24937[(10)]);
var inst_24896 = cljs.core.chunk_first.call(null,inst_24892);
var inst_24897 = cljs.core.chunk_rest.call(null,inst_24892);
var inst_24898 = cljs.core.count.call(null,inst_24896);
var inst_24878 = inst_24897;
var inst_24879 = inst_24896;
var inst_24880 = inst_24898;
var inst_24881 = (0);
var state_24937__$1 = (function (){var statearr_24971 = state_24937;
(statearr_24971[(13)] = inst_24879);

(statearr_24971[(14)] = inst_24880);

(statearr_24971[(15)] = inst_24881);

(statearr_24971[(16)] = inst_24878);

return statearr_24971;
})();
var statearr_24972_25007 = state_24937__$1;
(statearr_24972_25007[(2)] = null);

(statearr_24972_25007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24938 === (10))){
var inst_24879 = (state_24937[(13)]);
var inst_24880 = (state_24937[(14)]);
var inst_24881 = (state_24937[(15)]);
var inst_24878 = (state_24937[(16)]);
var inst_24886 = cljs.core._nth.call(null,inst_24879,inst_24881);
var inst_24887 = cljs.core.async.muxch_STAR_.call(null,inst_24886);
var inst_24888 = cljs.core.async.close_BANG_.call(null,inst_24887);
var inst_24889 = (inst_24881 + (1));
var tmp24967 = inst_24879;
var tmp24968 = inst_24880;
var tmp24969 = inst_24878;
var inst_24878__$1 = tmp24969;
var inst_24879__$1 = tmp24967;
var inst_24880__$1 = tmp24968;
var inst_24881__$1 = inst_24889;
var state_24937__$1 = (function (){var statearr_24973 = state_24937;
(statearr_24973[(17)] = inst_24888);

(statearr_24973[(13)] = inst_24879__$1);

(statearr_24973[(14)] = inst_24880__$1);

(statearr_24973[(15)] = inst_24881__$1);

(statearr_24973[(16)] = inst_24878__$1);

return statearr_24973;
})();
var statearr_24974_25008 = state_24937__$1;
(statearr_24974_25008[(2)] = null);

(statearr_24974_25008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24938 === (18))){
var inst_24907 = (state_24937[(2)]);
var state_24937__$1 = state_24937;
var statearr_24975_25009 = state_24937__$1;
(statearr_24975_25009[(2)] = inst_24907);

(statearr_24975_25009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24938 === (8))){
var inst_24880 = (state_24937[(14)]);
var inst_24881 = (state_24937[(15)]);
var inst_24883 = (inst_24881 < inst_24880);
var inst_24884 = inst_24883;
var state_24937__$1 = state_24937;
if(cljs.core.truth_(inst_24884)){
var statearr_24976_25010 = state_24937__$1;
(statearr_24976_25010[(1)] = (10));

} else {
var statearr_24977_25011 = state_24937__$1;
(statearr_24977_25011[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23749__auto___24983,mults,ensure_mult,p))
;
return ((function (switch__23659__auto__,c__23749__auto___24983,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23660__auto__ = null;
var cljs$core$async$state_machine__23660__auto____0 = (function (){
var statearr_24978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24978[(0)] = cljs$core$async$state_machine__23660__auto__);

(statearr_24978[(1)] = (1));

return statearr_24978;
});
var cljs$core$async$state_machine__23660__auto____1 = (function (state_24937){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_24937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e24979){if((e24979 instanceof Object)){
var ex__23663__auto__ = e24979;
var statearr_24980_25012 = state_24937;
(statearr_24980_25012[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25013 = state_24937;
state_24937 = G__25013;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
cljs$core$async$state_machine__23660__auto__ = function(state_24937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23660__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23660__auto____1.call(this,state_24937);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23660__auto____0;
cljs$core$async$state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23660__auto____1;
return cljs$core$async$state_machine__23660__auto__;
})()
;})(switch__23659__auto__,c__23749__auto___24983,mults,ensure_mult,p))
})();
var state__23751__auto__ = (function (){var statearr_24981 = f__23750__auto__.call(null);
(statearr_24981[(6)] = c__23749__auto___24983);

return statearr_24981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(c__23749__auto___24983,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__25015 = arguments.length;
switch (G__25015) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__25018 = arguments.length;
switch (G__25018) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__25021 = arguments.length;
switch (G__25021) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23749__auto___25088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23749__auto___25088,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (c__23749__auto___25088,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25060){
var state_val_25061 = (state_25060[(1)]);
if((state_val_25061 === (7))){
var state_25060__$1 = state_25060;
var statearr_25062_25089 = state_25060__$1;
(statearr_25062_25089[(2)] = null);

(statearr_25062_25089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25061 === (1))){
var state_25060__$1 = state_25060;
var statearr_25063_25090 = state_25060__$1;
(statearr_25063_25090[(2)] = null);

(statearr_25063_25090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25061 === (4))){
var inst_25024 = (state_25060[(7)]);
var inst_25026 = (inst_25024 < cnt);
var state_25060__$1 = state_25060;
if(cljs.core.truth_(inst_25026)){
var statearr_25064_25091 = state_25060__$1;
(statearr_25064_25091[(1)] = (6));

} else {
var statearr_25065_25092 = state_25060__$1;
(statearr_25065_25092[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25061 === (15))){
var inst_25056 = (state_25060[(2)]);
var state_25060__$1 = state_25060;
var statearr_25066_25093 = state_25060__$1;
(statearr_25066_25093[(2)] = inst_25056);

(statearr_25066_25093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25061 === (13))){
var inst_25049 = cljs.core.async.close_BANG_.call(null,out);
var state_25060__$1 = state_25060;
var statearr_25067_25094 = state_25060__$1;
(statearr_25067_25094[(2)] = inst_25049);

(statearr_25067_25094[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25061 === (6))){
var state_25060__$1 = state_25060;
var statearr_25068_25095 = state_25060__$1;
(statearr_25068_25095[(2)] = null);

(statearr_25068_25095[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25061 === (3))){
var inst_25058 = (state_25060[(2)]);
var state_25060__$1 = state_25060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25060__$1,inst_25058);
} else {
if((state_val_25061 === (12))){
var inst_25046 = (state_25060[(8)]);
var inst_25046__$1 = (state_25060[(2)]);
var inst_25047 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25046__$1);
var state_25060__$1 = (function (){var statearr_25069 = state_25060;
(statearr_25069[(8)] = inst_25046__$1);

return statearr_25069;
})();
if(cljs.core.truth_(inst_25047)){
var statearr_25070_25096 = state_25060__$1;
(statearr_25070_25096[(1)] = (13));

} else {
var statearr_25071_25097 = state_25060__$1;
(statearr_25071_25097[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25061 === (2))){
var inst_25023 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25024 = (0);
var state_25060__$1 = (function (){var statearr_25072 = state_25060;
(statearr_25072[(7)] = inst_25024);

(statearr_25072[(9)] = inst_25023);

return statearr_25072;
})();
var statearr_25073_25098 = state_25060__$1;
(statearr_25073_25098[(2)] = null);

(statearr_25073_25098[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25061 === (11))){
var inst_25024 = (state_25060[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25060,(10),Object,null,(9));
var inst_25033 = chs__$1.call(null,inst_25024);
var inst_25034 = done.call(null,inst_25024);
var inst_25035 = cljs.core.async.take_BANG_.call(null,inst_25033,inst_25034);
var state_25060__$1 = state_25060;
var statearr_25074_25099 = state_25060__$1;
(statearr_25074_25099[(2)] = inst_25035);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25060__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25061 === (9))){
var inst_25024 = (state_25060[(7)]);
var inst_25037 = (state_25060[(2)]);
var inst_25038 = (inst_25024 + (1));
var inst_25024__$1 = inst_25038;
var state_25060__$1 = (function (){var statearr_25075 = state_25060;
(statearr_25075[(7)] = inst_25024__$1);

(statearr_25075[(10)] = inst_25037);

return statearr_25075;
})();
var statearr_25076_25100 = state_25060__$1;
(statearr_25076_25100[(2)] = null);

(statearr_25076_25100[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25061 === (5))){
var inst_25044 = (state_25060[(2)]);
var state_25060__$1 = (function (){var statearr_25077 = state_25060;
(statearr_25077[(11)] = inst_25044);

return statearr_25077;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25060__$1,(12),dchan);
} else {
if((state_val_25061 === (14))){
var inst_25046 = (state_25060[(8)]);
var inst_25051 = cljs.core.apply.call(null,f,inst_25046);
var state_25060__$1 = state_25060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25060__$1,(16),out,inst_25051);
} else {
if((state_val_25061 === (16))){
var inst_25053 = (state_25060[(2)]);
var state_25060__$1 = (function (){var statearr_25078 = state_25060;
(statearr_25078[(12)] = inst_25053);

return statearr_25078;
})();
var statearr_25079_25101 = state_25060__$1;
(statearr_25079_25101[(2)] = null);

(statearr_25079_25101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25061 === (10))){
var inst_25028 = (state_25060[(2)]);
var inst_25029 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25060__$1 = (function (){var statearr_25080 = state_25060;
(statearr_25080[(13)] = inst_25028);

return statearr_25080;
})();
var statearr_25081_25102 = state_25060__$1;
(statearr_25081_25102[(2)] = inst_25029);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25060__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25061 === (8))){
var inst_25042 = (state_25060[(2)]);
var state_25060__$1 = state_25060;
var statearr_25082_25103 = state_25060__$1;
(statearr_25082_25103[(2)] = inst_25042);

(statearr_25082_25103[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23749__auto___25088,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23659__auto__,c__23749__auto___25088,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23660__auto__ = null;
var cljs$core$async$state_machine__23660__auto____0 = (function (){
var statearr_25083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25083[(0)] = cljs$core$async$state_machine__23660__auto__);

(statearr_25083[(1)] = (1));

return statearr_25083;
});
var cljs$core$async$state_machine__23660__auto____1 = (function (state_25060){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_25060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e25084){if((e25084 instanceof Object)){
var ex__23663__auto__ = e25084;
var statearr_25085_25104 = state_25060;
(statearr_25085_25104[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25105 = state_25060;
state_25060 = G__25105;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
cljs$core$async$state_machine__23660__auto__ = function(state_25060){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23660__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23660__auto____1.call(this,state_25060);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23660__auto____0;
cljs$core$async$state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23660__auto____1;
return cljs$core$async$state_machine__23660__auto__;
})()
;})(switch__23659__auto__,c__23749__auto___25088,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23751__auto__ = (function (){var statearr_25086 = f__23750__auto__.call(null);
(statearr_25086[(6)] = c__23749__auto___25088);

return statearr_25086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(c__23749__auto___25088,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25108 = arguments.length;
switch (G__25108) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23749__auto___25162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23749__auto___25162,out){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (c__23749__auto___25162,out){
return (function (state_25140){
var state_val_25141 = (state_25140[(1)]);
if((state_val_25141 === (7))){
var inst_25119 = (state_25140[(7)]);
var inst_25120 = (state_25140[(8)]);
var inst_25119__$1 = (state_25140[(2)]);
var inst_25120__$1 = cljs.core.nth.call(null,inst_25119__$1,(0),null);
var inst_25121 = cljs.core.nth.call(null,inst_25119__$1,(1),null);
var inst_25122 = (inst_25120__$1 == null);
var state_25140__$1 = (function (){var statearr_25142 = state_25140;
(statearr_25142[(9)] = inst_25121);

(statearr_25142[(7)] = inst_25119__$1);

(statearr_25142[(8)] = inst_25120__$1);

return statearr_25142;
})();
if(cljs.core.truth_(inst_25122)){
var statearr_25143_25163 = state_25140__$1;
(statearr_25143_25163[(1)] = (8));

} else {
var statearr_25144_25164 = state_25140__$1;
(statearr_25144_25164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25141 === (1))){
var inst_25109 = cljs.core.vec.call(null,chs);
var inst_25110 = inst_25109;
var state_25140__$1 = (function (){var statearr_25145 = state_25140;
(statearr_25145[(10)] = inst_25110);

return statearr_25145;
})();
var statearr_25146_25165 = state_25140__$1;
(statearr_25146_25165[(2)] = null);

(statearr_25146_25165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25141 === (4))){
var inst_25110 = (state_25140[(10)]);
var state_25140__$1 = state_25140;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25140__$1,(7),inst_25110);
} else {
if((state_val_25141 === (6))){
var inst_25136 = (state_25140[(2)]);
var state_25140__$1 = state_25140;
var statearr_25147_25166 = state_25140__$1;
(statearr_25147_25166[(2)] = inst_25136);

(statearr_25147_25166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25141 === (3))){
var inst_25138 = (state_25140[(2)]);
var state_25140__$1 = state_25140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25140__$1,inst_25138);
} else {
if((state_val_25141 === (2))){
var inst_25110 = (state_25140[(10)]);
var inst_25112 = cljs.core.count.call(null,inst_25110);
var inst_25113 = (inst_25112 > (0));
var state_25140__$1 = state_25140;
if(cljs.core.truth_(inst_25113)){
var statearr_25149_25167 = state_25140__$1;
(statearr_25149_25167[(1)] = (4));

} else {
var statearr_25150_25168 = state_25140__$1;
(statearr_25150_25168[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25141 === (11))){
var inst_25110 = (state_25140[(10)]);
var inst_25129 = (state_25140[(2)]);
var tmp25148 = inst_25110;
var inst_25110__$1 = tmp25148;
var state_25140__$1 = (function (){var statearr_25151 = state_25140;
(statearr_25151[(10)] = inst_25110__$1);

(statearr_25151[(11)] = inst_25129);

return statearr_25151;
})();
var statearr_25152_25169 = state_25140__$1;
(statearr_25152_25169[(2)] = null);

(statearr_25152_25169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25141 === (9))){
var inst_25120 = (state_25140[(8)]);
var state_25140__$1 = state_25140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25140__$1,(11),out,inst_25120);
} else {
if((state_val_25141 === (5))){
var inst_25134 = cljs.core.async.close_BANG_.call(null,out);
var state_25140__$1 = state_25140;
var statearr_25153_25170 = state_25140__$1;
(statearr_25153_25170[(2)] = inst_25134);

(statearr_25153_25170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25141 === (10))){
var inst_25132 = (state_25140[(2)]);
var state_25140__$1 = state_25140;
var statearr_25154_25171 = state_25140__$1;
(statearr_25154_25171[(2)] = inst_25132);

(statearr_25154_25171[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25141 === (8))){
var inst_25121 = (state_25140[(9)]);
var inst_25110 = (state_25140[(10)]);
var inst_25119 = (state_25140[(7)]);
var inst_25120 = (state_25140[(8)]);
var inst_25124 = (function (){var cs = inst_25110;
var vec__25115 = inst_25119;
var v = inst_25120;
var c = inst_25121;
return ((function (cs,vec__25115,v,c,inst_25121,inst_25110,inst_25119,inst_25120,state_val_25141,c__23749__auto___25162,out){
return (function (p1__25106_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25106_SHARP_);
});
;})(cs,vec__25115,v,c,inst_25121,inst_25110,inst_25119,inst_25120,state_val_25141,c__23749__auto___25162,out))
})();
var inst_25125 = cljs.core.filterv.call(null,inst_25124,inst_25110);
var inst_25110__$1 = inst_25125;
var state_25140__$1 = (function (){var statearr_25155 = state_25140;
(statearr_25155[(10)] = inst_25110__$1);

return statearr_25155;
})();
var statearr_25156_25172 = state_25140__$1;
(statearr_25156_25172[(2)] = null);

(statearr_25156_25172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23749__auto___25162,out))
;
return ((function (switch__23659__auto__,c__23749__auto___25162,out){
return (function() {
var cljs$core$async$state_machine__23660__auto__ = null;
var cljs$core$async$state_machine__23660__auto____0 = (function (){
var statearr_25157 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25157[(0)] = cljs$core$async$state_machine__23660__auto__);

(statearr_25157[(1)] = (1));

return statearr_25157;
});
var cljs$core$async$state_machine__23660__auto____1 = (function (state_25140){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_25140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e25158){if((e25158 instanceof Object)){
var ex__23663__auto__ = e25158;
var statearr_25159_25173 = state_25140;
(statearr_25159_25173[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25174 = state_25140;
state_25140 = G__25174;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
cljs$core$async$state_machine__23660__auto__ = function(state_25140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23660__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23660__auto____1.call(this,state_25140);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23660__auto____0;
cljs$core$async$state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23660__auto____1;
return cljs$core$async$state_machine__23660__auto__;
})()
;})(switch__23659__auto__,c__23749__auto___25162,out))
})();
var state__23751__auto__ = (function (){var statearr_25160 = f__23750__auto__.call(null);
(statearr_25160[(6)] = c__23749__auto___25162);

return statearr_25160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(c__23749__auto___25162,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25176 = arguments.length;
switch (G__25176) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23749__auto___25221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23749__auto___25221,out){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (c__23749__auto___25221,out){
return (function (state_25200){
var state_val_25201 = (state_25200[(1)]);
if((state_val_25201 === (7))){
var inst_25182 = (state_25200[(7)]);
var inst_25182__$1 = (state_25200[(2)]);
var inst_25183 = (inst_25182__$1 == null);
var inst_25184 = cljs.core.not.call(null,inst_25183);
var state_25200__$1 = (function (){var statearr_25202 = state_25200;
(statearr_25202[(7)] = inst_25182__$1);

return statearr_25202;
})();
if(inst_25184){
var statearr_25203_25222 = state_25200__$1;
(statearr_25203_25222[(1)] = (8));

} else {
var statearr_25204_25223 = state_25200__$1;
(statearr_25204_25223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (1))){
var inst_25177 = (0);
var state_25200__$1 = (function (){var statearr_25205 = state_25200;
(statearr_25205[(8)] = inst_25177);

return statearr_25205;
})();
var statearr_25206_25224 = state_25200__$1;
(statearr_25206_25224[(2)] = null);

(statearr_25206_25224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (4))){
var state_25200__$1 = state_25200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25200__$1,(7),ch);
} else {
if((state_val_25201 === (6))){
var inst_25195 = (state_25200[(2)]);
var state_25200__$1 = state_25200;
var statearr_25207_25225 = state_25200__$1;
(statearr_25207_25225[(2)] = inst_25195);

(statearr_25207_25225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (3))){
var inst_25197 = (state_25200[(2)]);
var inst_25198 = cljs.core.async.close_BANG_.call(null,out);
var state_25200__$1 = (function (){var statearr_25208 = state_25200;
(statearr_25208[(9)] = inst_25197);

return statearr_25208;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25200__$1,inst_25198);
} else {
if((state_val_25201 === (2))){
var inst_25177 = (state_25200[(8)]);
var inst_25179 = (inst_25177 < n);
var state_25200__$1 = state_25200;
if(cljs.core.truth_(inst_25179)){
var statearr_25209_25226 = state_25200__$1;
(statearr_25209_25226[(1)] = (4));

} else {
var statearr_25210_25227 = state_25200__$1;
(statearr_25210_25227[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (11))){
var inst_25177 = (state_25200[(8)]);
var inst_25187 = (state_25200[(2)]);
var inst_25188 = (inst_25177 + (1));
var inst_25177__$1 = inst_25188;
var state_25200__$1 = (function (){var statearr_25211 = state_25200;
(statearr_25211[(8)] = inst_25177__$1);

(statearr_25211[(10)] = inst_25187);

return statearr_25211;
})();
var statearr_25212_25228 = state_25200__$1;
(statearr_25212_25228[(2)] = null);

(statearr_25212_25228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (9))){
var state_25200__$1 = state_25200;
var statearr_25213_25229 = state_25200__$1;
(statearr_25213_25229[(2)] = null);

(statearr_25213_25229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (5))){
var state_25200__$1 = state_25200;
var statearr_25214_25230 = state_25200__$1;
(statearr_25214_25230[(2)] = null);

(statearr_25214_25230[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (10))){
var inst_25192 = (state_25200[(2)]);
var state_25200__$1 = state_25200;
var statearr_25215_25231 = state_25200__$1;
(statearr_25215_25231[(2)] = inst_25192);

(statearr_25215_25231[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25201 === (8))){
var inst_25182 = (state_25200[(7)]);
var state_25200__$1 = state_25200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25200__$1,(11),out,inst_25182);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23749__auto___25221,out))
;
return ((function (switch__23659__auto__,c__23749__auto___25221,out){
return (function() {
var cljs$core$async$state_machine__23660__auto__ = null;
var cljs$core$async$state_machine__23660__auto____0 = (function (){
var statearr_25216 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25216[(0)] = cljs$core$async$state_machine__23660__auto__);

(statearr_25216[(1)] = (1));

return statearr_25216;
});
var cljs$core$async$state_machine__23660__auto____1 = (function (state_25200){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_25200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e25217){if((e25217 instanceof Object)){
var ex__23663__auto__ = e25217;
var statearr_25218_25232 = state_25200;
(statearr_25218_25232[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25233 = state_25200;
state_25200 = G__25233;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
cljs$core$async$state_machine__23660__auto__ = function(state_25200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23660__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23660__auto____1.call(this,state_25200);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23660__auto____0;
cljs$core$async$state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23660__auto____1;
return cljs$core$async$state_machine__23660__auto__;
})()
;})(switch__23659__auto__,c__23749__auto___25221,out))
})();
var state__23751__auto__ = (function (){var statearr_25219 = f__23750__auto__.call(null);
(statearr_25219[(6)] = c__23749__auto___25221);

return statearr_25219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(c__23749__auto___25221,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25235 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25235 = (function (f,ch,meta25236){
this.f = f;
this.ch = ch;
this.meta25236 = meta25236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25237,meta25236__$1){
var self__ = this;
var _25237__$1 = this;
return (new cljs.core.async.t_cljs$core$async25235(self__.f,self__.ch,meta25236__$1));
});

cljs.core.async.t_cljs$core$async25235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25237){
var self__ = this;
var _25237__$1 = this;
return self__.meta25236;
});

cljs.core.async.t_cljs$core$async25235.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25235.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25235.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25235.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25235.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25238 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25238 = (function (f,ch,meta25236,_,fn1,meta25239){
this.f = f;
this.ch = ch;
this.meta25236 = meta25236;
this._ = _;
this.fn1 = fn1;
this.meta25239 = meta25239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25240,meta25239__$1){
var self__ = this;
var _25240__$1 = this;
return (new cljs.core.async.t_cljs$core$async25238(self__.f,self__.ch,self__.meta25236,self__._,self__.fn1,meta25239__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25240){
var self__ = this;
var _25240__$1 = this;
return self__.meta25239;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25234_SHARP_){
return f1.call(null,(((p1__25234_SHARP_ == null))?null:self__.f.call(null,p1__25234_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25238.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25236","meta25236",712548229,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25235","cljs.core.async/t_cljs$core$async25235",-210435609,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25239","meta25239",1161652001,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25238.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25238";

cljs.core.async.t_cljs$core$async25238.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25238");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25238.
 */
cljs.core.async.__GT_t_cljs$core$async25238 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25238(f__$1,ch__$1,meta25236__$1,___$2,fn1__$1,meta25239){
return (new cljs.core.async.t_cljs$core$async25238(f__$1,ch__$1,meta25236__$1,___$2,fn1__$1,meta25239));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25238(self__.f,self__.ch,self__.meta25236,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25235.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25235.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25235.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25236","meta25236",712548229,null)], null);
});

cljs.core.async.t_cljs$core$async25235.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25235";

cljs.core.async.t_cljs$core$async25235.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25235");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25235.
 */
cljs.core.async.__GT_t_cljs$core$async25235 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25235(f__$1,ch__$1,meta25236){
return (new cljs.core.async.t_cljs$core$async25235(f__$1,ch__$1,meta25236));
});

}

return (new cljs.core.async.t_cljs$core$async25235(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25241 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25241 = (function (f,ch,meta25242){
this.f = f;
this.ch = ch;
this.meta25242 = meta25242;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25243,meta25242__$1){
var self__ = this;
var _25243__$1 = this;
return (new cljs.core.async.t_cljs$core$async25241(self__.f,self__.ch,meta25242__$1));
});

cljs.core.async.t_cljs$core$async25241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25243){
var self__ = this;
var _25243__$1 = this;
return self__.meta25242;
});

cljs.core.async.t_cljs$core$async25241.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25241.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25241.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25241.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25241.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25241.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25241.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25242","meta25242",1856221473,null)], null);
});

cljs.core.async.t_cljs$core$async25241.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25241.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25241";

cljs.core.async.t_cljs$core$async25241.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25241");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25241.
 */
cljs.core.async.__GT_t_cljs$core$async25241 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25241(f__$1,ch__$1,meta25242){
return (new cljs.core.async.t_cljs$core$async25241(f__$1,ch__$1,meta25242));
});

}

return (new cljs.core.async.t_cljs$core$async25241(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25244 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25244 = (function (p,ch,meta25245){
this.p = p;
this.ch = ch;
this.meta25245 = meta25245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25246,meta25245__$1){
var self__ = this;
var _25246__$1 = this;
return (new cljs.core.async.t_cljs$core$async25244(self__.p,self__.ch,meta25245__$1));
});

cljs.core.async.t_cljs$core$async25244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25246){
var self__ = this;
var _25246__$1 = this;
return self__.meta25245;
});

cljs.core.async.t_cljs$core$async25244.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25244.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25244.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25244.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25244.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25244.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25244.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25244.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25245","meta25245",-799446109,null)], null);
});

cljs.core.async.t_cljs$core$async25244.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25244";

cljs.core.async.t_cljs$core$async25244.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25244");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25244.
 */
cljs.core.async.__GT_t_cljs$core$async25244 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25244(p__$1,ch__$1,meta25245){
return (new cljs.core.async.t_cljs$core$async25244(p__$1,ch__$1,meta25245));
});

}

return (new cljs.core.async.t_cljs$core$async25244(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25248 = arguments.length;
switch (G__25248) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23749__auto___25288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23749__auto___25288,out){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (c__23749__auto___25288,out){
return (function (state_25269){
var state_val_25270 = (state_25269[(1)]);
if((state_val_25270 === (7))){
var inst_25265 = (state_25269[(2)]);
var state_25269__$1 = state_25269;
var statearr_25271_25289 = state_25269__$1;
(statearr_25271_25289[(2)] = inst_25265);

(statearr_25271_25289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (1))){
var state_25269__$1 = state_25269;
var statearr_25272_25290 = state_25269__$1;
(statearr_25272_25290[(2)] = null);

(statearr_25272_25290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (4))){
var inst_25251 = (state_25269[(7)]);
var inst_25251__$1 = (state_25269[(2)]);
var inst_25252 = (inst_25251__$1 == null);
var state_25269__$1 = (function (){var statearr_25273 = state_25269;
(statearr_25273[(7)] = inst_25251__$1);

return statearr_25273;
})();
if(cljs.core.truth_(inst_25252)){
var statearr_25274_25291 = state_25269__$1;
(statearr_25274_25291[(1)] = (5));

} else {
var statearr_25275_25292 = state_25269__$1;
(statearr_25275_25292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (6))){
var inst_25251 = (state_25269[(7)]);
var inst_25256 = p.call(null,inst_25251);
var state_25269__$1 = state_25269;
if(cljs.core.truth_(inst_25256)){
var statearr_25276_25293 = state_25269__$1;
(statearr_25276_25293[(1)] = (8));

} else {
var statearr_25277_25294 = state_25269__$1;
(statearr_25277_25294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (3))){
var inst_25267 = (state_25269[(2)]);
var state_25269__$1 = state_25269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25269__$1,inst_25267);
} else {
if((state_val_25270 === (2))){
var state_25269__$1 = state_25269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25269__$1,(4),ch);
} else {
if((state_val_25270 === (11))){
var inst_25259 = (state_25269[(2)]);
var state_25269__$1 = state_25269;
var statearr_25278_25295 = state_25269__$1;
(statearr_25278_25295[(2)] = inst_25259);

(statearr_25278_25295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (9))){
var state_25269__$1 = state_25269;
var statearr_25279_25296 = state_25269__$1;
(statearr_25279_25296[(2)] = null);

(statearr_25279_25296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (5))){
var inst_25254 = cljs.core.async.close_BANG_.call(null,out);
var state_25269__$1 = state_25269;
var statearr_25280_25297 = state_25269__$1;
(statearr_25280_25297[(2)] = inst_25254);

(statearr_25280_25297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (10))){
var inst_25262 = (state_25269[(2)]);
var state_25269__$1 = (function (){var statearr_25281 = state_25269;
(statearr_25281[(8)] = inst_25262);

return statearr_25281;
})();
var statearr_25282_25298 = state_25269__$1;
(statearr_25282_25298[(2)] = null);

(statearr_25282_25298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (8))){
var inst_25251 = (state_25269[(7)]);
var state_25269__$1 = state_25269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25269__$1,(11),out,inst_25251);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23749__auto___25288,out))
;
return ((function (switch__23659__auto__,c__23749__auto___25288,out){
return (function() {
var cljs$core$async$state_machine__23660__auto__ = null;
var cljs$core$async$state_machine__23660__auto____0 = (function (){
var statearr_25283 = [null,null,null,null,null,null,null,null,null];
(statearr_25283[(0)] = cljs$core$async$state_machine__23660__auto__);

(statearr_25283[(1)] = (1));

return statearr_25283;
});
var cljs$core$async$state_machine__23660__auto____1 = (function (state_25269){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_25269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e25284){if((e25284 instanceof Object)){
var ex__23663__auto__ = e25284;
var statearr_25285_25299 = state_25269;
(statearr_25285_25299[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25300 = state_25269;
state_25269 = G__25300;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
cljs$core$async$state_machine__23660__auto__ = function(state_25269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23660__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23660__auto____1.call(this,state_25269);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23660__auto____0;
cljs$core$async$state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23660__auto____1;
return cljs$core$async$state_machine__23660__auto__;
})()
;})(switch__23659__auto__,c__23749__auto___25288,out))
})();
var state__23751__auto__ = (function (){var statearr_25286 = f__23750__auto__.call(null);
(statearr_25286[(6)] = c__23749__auto___25288);

return statearr_25286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(c__23749__auto___25288,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25302 = arguments.length;
switch (G__25302) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23749__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23749__auto__){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (c__23749__auto__){
return (function (state_25365){
var state_val_25366 = (state_25365[(1)]);
if((state_val_25366 === (7))){
var inst_25361 = (state_25365[(2)]);
var state_25365__$1 = state_25365;
var statearr_25367_25405 = state_25365__$1;
(statearr_25367_25405[(2)] = inst_25361);

(statearr_25367_25405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25366 === (20))){
var inst_25331 = (state_25365[(7)]);
var inst_25342 = (state_25365[(2)]);
var inst_25343 = cljs.core.next.call(null,inst_25331);
var inst_25317 = inst_25343;
var inst_25318 = null;
var inst_25319 = (0);
var inst_25320 = (0);
var state_25365__$1 = (function (){var statearr_25368 = state_25365;
(statearr_25368[(8)] = inst_25320);

(statearr_25368[(9)] = inst_25318);

(statearr_25368[(10)] = inst_25319);

(statearr_25368[(11)] = inst_25317);

(statearr_25368[(12)] = inst_25342);

return statearr_25368;
})();
var statearr_25369_25406 = state_25365__$1;
(statearr_25369_25406[(2)] = null);

(statearr_25369_25406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25366 === (1))){
var state_25365__$1 = state_25365;
var statearr_25370_25407 = state_25365__$1;
(statearr_25370_25407[(2)] = null);

(statearr_25370_25407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25366 === (4))){
var inst_25306 = (state_25365[(13)]);
var inst_25306__$1 = (state_25365[(2)]);
var inst_25307 = (inst_25306__$1 == null);
var state_25365__$1 = (function (){var statearr_25371 = state_25365;
(statearr_25371[(13)] = inst_25306__$1);

return statearr_25371;
})();
if(cljs.core.truth_(inst_25307)){
var statearr_25372_25408 = state_25365__$1;
(statearr_25372_25408[(1)] = (5));

} else {
var statearr_25373_25409 = state_25365__$1;
(statearr_25373_25409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25366 === (15))){
var state_25365__$1 = state_25365;
var statearr_25377_25410 = state_25365__$1;
(statearr_25377_25410[(2)] = null);

(statearr_25377_25410[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25366 === (21))){
var state_25365__$1 = state_25365;
var statearr_25378_25411 = state_25365__$1;
(statearr_25378_25411[(2)] = null);

(statearr_25378_25411[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25366 === (13))){
var inst_25320 = (state_25365[(8)]);
var inst_25318 = (state_25365[(9)]);
var inst_25319 = (state_25365[(10)]);
var inst_25317 = (state_25365[(11)]);
var inst_25327 = (state_25365[(2)]);
var inst_25328 = (inst_25320 + (1));
var tmp25374 = inst_25318;
var tmp25375 = inst_25319;
var tmp25376 = inst_25317;
var inst_25317__$1 = tmp25376;
var inst_25318__$1 = tmp25374;
var inst_25319__$1 = tmp25375;
var inst_25320__$1 = inst_25328;
var state_25365__$1 = (function (){var statearr_25379 = state_25365;
(statearr_25379[(8)] = inst_25320__$1);

(statearr_25379[(9)] = inst_25318__$1);

(statearr_25379[(10)] = inst_25319__$1);

(statearr_25379[(11)] = inst_25317__$1);

(statearr_25379[(14)] = inst_25327);

return statearr_25379;
})();
var statearr_25380_25412 = state_25365__$1;
(statearr_25380_25412[(2)] = null);

(statearr_25380_25412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25366 === (22))){
var state_25365__$1 = state_25365;
var statearr_25381_25413 = state_25365__$1;
(statearr_25381_25413[(2)] = null);

(statearr_25381_25413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25366 === (6))){
var inst_25306 = (state_25365[(13)]);
var inst_25315 = f.call(null,inst_25306);
var inst_25316 = cljs.core.seq.call(null,inst_25315);
var inst_25317 = inst_25316;
var inst_25318 = null;
var inst_25319 = (0);
var inst_25320 = (0);
var state_25365__$1 = (function (){var statearr_25382 = state_25365;
(statearr_25382[(8)] = inst_25320);

(statearr_25382[(9)] = inst_25318);

(statearr_25382[(10)] = inst_25319);

(statearr_25382[(11)] = inst_25317);

return statearr_25382;
})();
var statearr_25383_25414 = state_25365__$1;
(statearr_25383_25414[(2)] = null);

(statearr_25383_25414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25366 === (17))){
var inst_25331 = (state_25365[(7)]);
var inst_25335 = cljs.core.chunk_first.call(null,inst_25331);
var inst_25336 = cljs.core.chunk_rest.call(null,inst_25331);
var inst_25337 = cljs.core.count.call(null,inst_25335);
var inst_25317 = inst_25336;
var inst_25318 = inst_25335;
var inst_25319 = inst_25337;
var inst_25320 = (0);
var state_25365__$1 = (function (){var statearr_25384 = state_25365;
(statearr_25384[(8)] = inst_25320);

(statearr_25384[(9)] = inst_25318);

(statearr_25384[(10)] = inst_25319);

(statearr_25384[(11)] = inst_25317);

return statearr_25384;
})();
var statearr_25385_25415 = state_25365__$1;
(statearr_25385_25415[(2)] = null);

(statearr_25385_25415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25366 === (3))){
var inst_25363 = (state_25365[(2)]);
var state_25365__$1 = state_25365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25365__$1,inst_25363);
} else {
if((state_val_25366 === (12))){
var inst_25351 = (state_25365[(2)]);
var state_25365__$1 = state_25365;
var statearr_25386_25416 = state_25365__$1;
(statearr_25386_25416[(2)] = inst_25351);

(statearr_25386_25416[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25366 === (2))){
var state_25365__$1 = state_25365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25365__$1,(4),in$);
} else {
if((state_val_25366 === (23))){
var inst_25359 = (state_25365[(2)]);
var state_25365__$1 = state_25365;
var statearr_25387_25417 = state_25365__$1;
(statearr_25387_25417[(2)] = inst_25359);

(statearr_25387_25417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25366 === (19))){
var inst_25346 = (state_25365[(2)]);
var state_25365__$1 = state_25365;
var statearr_25388_25418 = state_25365__$1;
(statearr_25388_25418[(2)] = inst_25346);

(statearr_25388_25418[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25366 === (11))){
var inst_25331 = (state_25365[(7)]);
var inst_25317 = (state_25365[(11)]);
var inst_25331__$1 = cljs.core.seq.call(null,inst_25317);
var state_25365__$1 = (function (){var statearr_25389 = state_25365;
(statearr_25389[(7)] = inst_25331__$1);

return statearr_25389;
})();
if(inst_25331__$1){
var statearr_25390_25419 = state_25365__$1;
(statearr_25390_25419[(1)] = (14));

} else {
var statearr_25391_25420 = state_25365__$1;
(statearr_25391_25420[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25366 === (9))){
var inst_25353 = (state_25365[(2)]);
var inst_25354 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25365__$1 = (function (){var statearr_25392 = state_25365;
(statearr_25392[(15)] = inst_25353);

return statearr_25392;
})();
if(cljs.core.truth_(inst_25354)){
var statearr_25393_25421 = state_25365__$1;
(statearr_25393_25421[(1)] = (21));

} else {
var statearr_25394_25422 = state_25365__$1;
(statearr_25394_25422[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25366 === (5))){
var inst_25309 = cljs.core.async.close_BANG_.call(null,out);
var state_25365__$1 = state_25365;
var statearr_25395_25423 = state_25365__$1;
(statearr_25395_25423[(2)] = inst_25309);

(statearr_25395_25423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25366 === (14))){
var inst_25331 = (state_25365[(7)]);
var inst_25333 = cljs.core.chunked_seq_QMARK_.call(null,inst_25331);
var state_25365__$1 = state_25365;
if(inst_25333){
var statearr_25396_25424 = state_25365__$1;
(statearr_25396_25424[(1)] = (17));

} else {
var statearr_25397_25425 = state_25365__$1;
(statearr_25397_25425[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25366 === (16))){
var inst_25349 = (state_25365[(2)]);
var state_25365__$1 = state_25365;
var statearr_25398_25426 = state_25365__$1;
(statearr_25398_25426[(2)] = inst_25349);

(statearr_25398_25426[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25366 === (10))){
var inst_25320 = (state_25365[(8)]);
var inst_25318 = (state_25365[(9)]);
var inst_25325 = cljs.core._nth.call(null,inst_25318,inst_25320);
var state_25365__$1 = state_25365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25365__$1,(13),out,inst_25325);
} else {
if((state_val_25366 === (18))){
var inst_25331 = (state_25365[(7)]);
var inst_25340 = cljs.core.first.call(null,inst_25331);
var state_25365__$1 = state_25365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25365__$1,(20),out,inst_25340);
} else {
if((state_val_25366 === (8))){
var inst_25320 = (state_25365[(8)]);
var inst_25319 = (state_25365[(10)]);
var inst_25322 = (inst_25320 < inst_25319);
var inst_25323 = inst_25322;
var state_25365__$1 = state_25365;
if(cljs.core.truth_(inst_25323)){
var statearr_25399_25427 = state_25365__$1;
(statearr_25399_25427[(1)] = (10));

} else {
var statearr_25400_25428 = state_25365__$1;
(statearr_25400_25428[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23749__auto__))
;
return ((function (switch__23659__auto__,c__23749__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23660__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23660__auto____0 = (function (){
var statearr_25401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25401[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23660__auto__);

(statearr_25401[(1)] = (1));

return statearr_25401;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23660__auto____1 = (function (state_25365){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_25365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e25402){if((e25402 instanceof Object)){
var ex__23663__auto__ = e25402;
var statearr_25403_25429 = state_25365;
(statearr_25403_25429[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25430 = state_25365;
state_25365 = G__25430;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23660__auto__ = function(state_25365){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23660__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23660__auto____1.call(this,state_25365);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23660__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23660__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23660__auto__;
})()
;})(switch__23659__auto__,c__23749__auto__))
})();
var state__23751__auto__ = (function (){var statearr_25404 = f__23750__auto__.call(null);
(statearr_25404[(6)] = c__23749__auto__);

return statearr_25404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(c__23749__auto__))
);

return c__23749__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25432 = arguments.length;
switch (G__25432) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25435 = arguments.length;
switch (G__25435) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25438 = arguments.length;
switch (G__25438) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23749__auto___25485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23749__auto___25485,out){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (c__23749__auto___25485,out){
return (function (state_25462){
var state_val_25463 = (state_25462[(1)]);
if((state_val_25463 === (7))){
var inst_25457 = (state_25462[(2)]);
var state_25462__$1 = state_25462;
var statearr_25464_25486 = state_25462__$1;
(statearr_25464_25486[(2)] = inst_25457);

(statearr_25464_25486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25463 === (1))){
var inst_25439 = null;
var state_25462__$1 = (function (){var statearr_25465 = state_25462;
(statearr_25465[(7)] = inst_25439);

return statearr_25465;
})();
var statearr_25466_25487 = state_25462__$1;
(statearr_25466_25487[(2)] = null);

(statearr_25466_25487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25463 === (4))){
var inst_25442 = (state_25462[(8)]);
var inst_25442__$1 = (state_25462[(2)]);
var inst_25443 = (inst_25442__$1 == null);
var inst_25444 = cljs.core.not.call(null,inst_25443);
var state_25462__$1 = (function (){var statearr_25467 = state_25462;
(statearr_25467[(8)] = inst_25442__$1);

return statearr_25467;
})();
if(inst_25444){
var statearr_25468_25488 = state_25462__$1;
(statearr_25468_25488[(1)] = (5));

} else {
var statearr_25469_25489 = state_25462__$1;
(statearr_25469_25489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25463 === (6))){
var state_25462__$1 = state_25462;
var statearr_25470_25490 = state_25462__$1;
(statearr_25470_25490[(2)] = null);

(statearr_25470_25490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25463 === (3))){
var inst_25459 = (state_25462[(2)]);
var inst_25460 = cljs.core.async.close_BANG_.call(null,out);
var state_25462__$1 = (function (){var statearr_25471 = state_25462;
(statearr_25471[(9)] = inst_25459);

return statearr_25471;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25462__$1,inst_25460);
} else {
if((state_val_25463 === (2))){
var state_25462__$1 = state_25462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25462__$1,(4),ch);
} else {
if((state_val_25463 === (11))){
var inst_25442 = (state_25462[(8)]);
var inst_25451 = (state_25462[(2)]);
var inst_25439 = inst_25442;
var state_25462__$1 = (function (){var statearr_25472 = state_25462;
(statearr_25472[(10)] = inst_25451);

(statearr_25472[(7)] = inst_25439);

return statearr_25472;
})();
var statearr_25473_25491 = state_25462__$1;
(statearr_25473_25491[(2)] = null);

(statearr_25473_25491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25463 === (9))){
var inst_25442 = (state_25462[(8)]);
var state_25462__$1 = state_25462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25462__$1,(11),out,inst_25442);
} else {
if((state_val_25463 === (5))){
var inst_25442 = (state_25462[(8)]);
var inst_25439 = (state_25462[(7)]);
var inst_25446 = cljs.core._EQ_.call(null,inst_25442,inst_25439);
var state_25462__$1 = state_25462;
if(inst_25446){
var statearr_25475_25492 = state_25462__$1;
(statearr_25475_25492[(1)] = (8));

} else {
var statearr_25476_25493 = state_25462__$1;
(statearr_25476_25493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25463 === (10))){
var inst_25454 = (state_25462[(2)]);
var state_25462__$1 = state_25462;
var statearr_25477_25494 = state_25462__$1;
(statearr_25477_25494[(2)] = inst_25454);

(statearr_25477_25494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25463 === (8))){
var inst_25439 = (state_25462[(7)]);
var tmp25474 = inst_25439;
var inst_25439__$1 = tmp25474;
var state_25462__$1 = (function (){var statearr_25478 = state_25462;
(statearr_25478[(7)] = inst_25439__$1);

return statearr_25478;
})();
var statearr_25479_25495 = state_25462__$1;
(statearr_25479_25495[(2)] = null);

(statearr_25479_25495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23749__auto___25485,out))
;
return ((function (switch__23659__auto__,c__23749__auto___25485,out){
return (function() {
var cljs$core$async$state_machine__23660__auto__ = null;
var cljs$core$async$state_machine__23660__auto____0 = (function (){
var statearr_25480 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25480[(0)] = cljs$core$async$state_machine__23660__auto__);

(statearr_25480[(1)] = (1));

return statearr_25480;
});
var cljs$core$async$state_machine__23660__auto____1 = (function (state_25462){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_25462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e25481){if((e25481 instanceof Object)){
var ex__23663__auto__ = e25481;
var statearr_25482_25496 = state_25462;
(statearr_25482_25496[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25497 = state_25462;
state_25462 = G__25497;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
cljs$core$async$state_machine__23660__auto__ = function(state_25462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23660__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23660__auto____1.call(this,state_25462);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23660__auto____0;
cljs$core$async$state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23660__auto____1;
return cljs$core$async$state_machine__23660__auto__;
})()
;})(switch__23659__auto__,c__23749__auto___25485,out))
})();
var state__23751__auto__ = (function (){var statearr_25483 = f__23750__auto__.call(null);
(statearr_25483[(6)] = c__23749__auto___25485);

return statearr_25483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(c__23749__auto___25485,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25499 = arguments.length;
switch (G__25499) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23749__auto___25565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23749__auto___25565,out){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (c__23749__auto___25565,out){
return (function (state_25537){
var state_val_25538 = (state_25537[(1)]);
if((state_val_25538 === (7))){
var inst_25533 = (state_25537[(2)]);
var state_25537__$1 = state_25537;
var statearr_25539_25566 = state_25537__$1;
(statearr_25539_25566[(2)] = inst_25533);

(statearr_25539_25566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (1))){
var inst_25500 = (new Array(n));
var inst_25501 = inst_25500;
var inst_25502 = (0);
var state_25537__$1 = (function (){var statearr_25540 = state_25537;
(statearr_25540[(7)] = inst_25502);

(statearr_25540[(8)] = inst_25501);

return statearr_25540;
})();
var statearr_25541_25567 = state_25537__$1;
(statearr_25541_25567[(2)] = null);

(statearr_25541_25567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (4))){
var inst_25505 = (state_25537[(9)]);
var inst_25505__$1 = (state_25537[(2)]);
var inst_25506 = (inst_25505__$1 == null);
var inst_25507 = cljs.core.not.call(null,inst_25506);
var state_25537__$1 = (function (){var statearr_25542 = state_25537;
(statearr_25542[(9)] = inst_25505__$1);

return statearr_25542;
})();
if(inst_25507){
var statearr_25543_25568 = state_25537__$1;
(statearr_25543_25568[(1)] = (5));

} else {
var statearr_25544_25569 = state_25537__$1;
(statearr_25544_25569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (15))){
var inst_25527 = (state_25537[(2)]);
var state_25537__$1 = state_25537;
var statearr_25545_25570 = state_25537__$1;
(statearr_25545_25570[(2)] = inst_25527);

(statearr_25545_25570[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (13))){
var state_25537__$1 = state_25537;
var statearr_25546_25571 = state_25537__$1;
(statearr_25546_25571[(2)] = null);

(statearr_25546_25571[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (6))){
var inst_25502 = (state_25537[(7)]);
var inst_25523 = (inst_25502 > (0));
var state_25537__$1 = state_25537;
if(cljs.core.truth_(inst_25523)){
var statearr_25547_25572 = state_25537__$1;
(statearr_25547_25572[(1)] = (12));

} else {
var statearr_25548_25573 = state_25537__$1;
(statearr_25548_25573[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (3))){
var inst_25535 = (state_25537[(2)]);
var state_25537__$1 = state_25537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25537__$1,inst_25535);
} else {
if((state_val_25538 === (12))){
var inst_25501 = (state_25537[(8)]);
var inst_25525 = cljs.core.vec.call(null,inst_25501);
var state_25537__$1 = state_25537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25537__$1,(15),out,inst_25525);
} else {
if((state_val_25538 === (2))){
var state_25537__$1 = state_25537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25537__$1,(4),ch);
} else {
if((state_val_25538 === (11))){
var inst_25517 = (state_25537[(2)]);
var inst_25518 = (new Array(n));
var inst_25501 = inst_25518;
var inst_25502 = (0);
var state_25537__$1 = (function (){var statearr_25549 = state_25537;
(statearr_25549[(7)] = inst_25502);

(statearr_25549[(8)] = inst_25501);

(statearr_25549[(10)] = inst_25517);

return statearr_25549;
})();
var statearr_25550_25574 = state_25537__$1;
(statearr_25550_25574[(2)] = null);

(statearr_25550_25574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (9))){
var inst_25501 = (state_25537[(8)]);
var inst_25515 = cljs.core.vec.call(null,inst_25501);
var state_25537__$1 = state_25537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25537__$1,(11),out,inst_25515);
} else {
if((state_val_25538 === (5))){
var inst_25502 = (state_25537[(7)]);
var inst_25505 = (state_25537[(9)]);
var inst_25510 = (state_25537[(11)]);
var inst_25501 = (state_25537[(8)]);
var inst_25509 = (inst_25501[inst_25502] = inst_25505);
var inst_25510__$1 = (inst_25502 + (1));
var inst_25511 = (inst_25510__$1 < n);
var state_25537__$1 = (function (){var statearr_25551 = state_25537;
(statearr_25551[(12)] = inst_25509);

(statearr_25551[(11)] = inst_25510__$1);

return statearr_25551;
})();
if(cljs.core.truth_(inst_25511)){
var statearr_25552_25575 = state_25537__$1;
(statearr_25552_25575[(1)] = (8));

} else {
var statearr_25553_25576 = state_25537__$1;
(statearr_25553_25576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (14))){
var inst_25530 = (state_25537[(2)]);
var inst_25531 = cljs.core.async.close_BANG_.call(null,out);
var state_25537__$1 = (function (){var statearr_25555 = state_25537;
(statearr_25555[(13)] = inst_25530);

return statearr_25555;
})();
var statearr_25556_25577 = state_25537__$1;
(statearr_25556_25577[(2)] = inst_25531);

(statearr_25556_25577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (10))){
var inst_25521 = (state_25537[(2)]);
var state_25537__$1 = state_25537;
var statearr_25557_25578 = state_25537__$1;
(statearr_25557_25578[(2)] = inst_25521);

(statearr_25557_25578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (8))){
var inst_25510 = (state_25537[(11)]);
var inst_25501 = (state_25537[(8)]);
var tmp25554 = inst_25501;
var inst_25501__$1 = tmp25554;
var inst_25502 = inst_25510;
var state_25537__$1 = (function (){var statearr_25558 = state_25537;
(statearr_25558[(7)] = inst_25502);

(statearr_25558[(8)] = inst_25501__$1);

return statearr_25558;
})();
var statearr_25559_25579 = state_25537__$1;
(statearr_25559_25579[(2)] = null);

(statearr_25559_25579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23749__auto___25565,out))
;
return ((function (switch__23659__auto__,c__23749__auto___25565,out){
return (function() {
var cljs$core$async$state_machine__23660__auto__ = null;
var cljs$core$async$state_machine__23660__auto____0 = (function (){
var statearr_25560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25560[(0)] = cljs$core$async$state_machine__23660__auto__);

(statearr_25560[(1)] = (1));

return statearr_25560;
});
var cljs$core$async$state_machine__23660__auto____1 = (function (state_25537){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_25537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e25561){if((e25561 instanceof Object)){
var ex__23663__auto__ = e25561;
var statearr_25562_25580 = state_25537;
(statearr_25562_25580[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25581 = state_25537;
state_25537 = G__25581;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
cljs$core$async$state_machine__23660__auto__ = function(state_25537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23660__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23660__auto____1.call(this,state_25537);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23660__auto____0;
cljs$core$async$state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23660__auto____1;
return cljs$core$async$state_machine__23660__auto__;
})()
;})(switch__23659__auto__,c__23749__auto___25565,out))
})();
var state__23751__auto__ = (function (){var statearr_25563 = f__23750__auto__.call(null);
(statearr_25563[(6)] = c__23749__auto___25565);

return statearr_25563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(c__23749__auto___25565,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25583 = arguments.length;
switch (G__25583) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23749__auto___25653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23749__auto___25653,out){
return (function (){
var f__23750__auto__ = (function (){var switch__23659__auto__ = ((function (c__23749__auto___25653,out){
return (function (state_25625){
var state_val_25626 = (state_25625[(1)]);
if((state_val_25626 === (7))){
var inst_25621 = (state_25625[(2)]);
var state_25625__$1 = state_25625;
var statearr_25627_25654 = state_25625__$1;
(statearr_25627_25654[(2)] = inst_25621);

(statearr_25627_25654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25626 === (1))){
var inst_25584 = [];
var inst_25585 = inst_25584;
var inst_25586 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25625__$1 = (function (){var statearr_25628 = state_25625;
(statearr_25628[(7)] = inst_25586);

(statearr_25628[(8)] = inst_25585);

return statearr_25628;
})();
var statearr_25629_25655 = state_25625__$1;
(statearr_25629_25655[(2)] = null);

(statearr_25629_25655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25626 === (4))){
var inst_25589 = (state_25625[(9)]);
var inst_25589__$1 = (state_25625[(2)]);
var inst_25590 = (inst_25589__$1 == null);
var inst_25591 = cljs.core.not.call(null,inst_25590);
var state_25625__$1 = (function (){var statearr_25630 = state_25625;
(statearr_25630[(9)] = inst_25589__$1);

return statearr_25630;
})();
if(inst_25591){
var statearr_25631_25656 = state_25625__$1;
(statearr_25631_25656[(1)] = (5));

} else {
var statearr_25632_25657 = state_25625__$1;
(statearr_25632_25657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25626 === (15))){
var inst_25615 = (state_25625[(2)]);
var state_25625__$1 = state_25625;
var statearr_25633_25658 = state_25625__$1;
(statearr_25633_25658[(2)] = inst_25615);

(statearr_25633_25658[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25626 === (13))){
var state_25625__$1 = state_25625;
var statearr_25634_25659 = state_25625__$1;
(statearr_25634_25659[(2)] = null);

(statearr_25634_25659[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25626 === (6))){
var inst_25585 = (state_25625[(8)]);
var inst_25610 = inst_25585.length;
var inst_25611 = (inst_25610 > (0));
var state_25625__$1 = state_25625;
if(cljs.core.truth_(inst_25611)){
var statearr_25635_25660 = state_25625__$1;
(statearr_25635_25660[(1)] = (12));

} else {
var statearr_25636_25661 = state_25625__$1;
(statearr_25636_25661[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25626 === (3))){
var inst_25623 = (state_25625[(2)]);
var state_25625__$1 = state_25625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25625__$1,inst_25623);
} else {
if((state_val_25626 === (12))){
var inst_25585 = (state_25625[(8)]);
var inst_25613 = cljs.core.vec.call(null,inst_25585);
var state_25625__$1 = state_25625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25625__$1,(15),out,inst_25613);
} else {
if((state_val_25626 === (2))){
var state_25625__$1 = state_25625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25625__$1,(4),ch);
} else {
if((state_val_25626 === (11))){
var inst_25593 = (state_25625[(10)]);
var inst_25589 = (state_25625[(9)]);
var inst_25603 = (state_25625[(2)]);
var inst_25604 = [];
var inst_25605 = inst_25604.push(inst_25589);
var inst_25585 = inst_25604;
var inst_25586 = inst_25593;
var state_25625__$1 = (function (){var statearr_25637 = state_25625;
(statearr_25637[(11)] = inst_25603);

(statearr_25637[(7)] = inst_25586);

(statearr_25637[(12)] = inst_25605);

(statearr_25637[(8)] = inst_25585);

return statearr_25637;
})();
var statearr_25638_25662 = state_25625__$1;
(statearr_25638_25662[(2)] = null);

(statearr_25638_25662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25626 === (9))){
var inst_25585 = (state_25625[(8)]);
var inst_25601 = cljs.core.vec.call(null,inst_25585);
var state_25625__$1 = state_25625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25625__$1,(11),out,inst_25601);
} else {
if((state_val_25626 === (5))){
var inst_25593 = (state_25625[(10)]);
var inst_25586 = (state_25625[(7)]);
var inst_25589 = (state_25625[(9)]);
var inst_25593__$1 = f.call(null,inst_25589);
var inst_25594 = cljs.core._EQ_.call(null,inst_25593__$1,inst_25586);
var inst_25595 = cljs.core.keyword_identical_QMARK_.call(null,inst_25586,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25596 = ((inst_25594) || (inst_25595));
var state_25625__$1 = (function (){var statearr_25639 = state_25625;
(statearr_25639[(10)] = inst_25593__$1);

return statearr_25639;
})();
if(cljs.core.truth_(inst_25596)){
var statearr_25640_25663 = state_25625__$1;
(statearr_25640_25663[(1)] = (8));

} else {
var statearr_25641_25664 = state_25625__$1;
(statearr_25641_25664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25626 === (14))){
var inst_25618 = (state_25625[(2)]);
var inst_25619 = cljs.core.async.close_BANG_.call(null,out);
var state_25625__$1 = (function (){var statearr_25643 = state_25625;
(statearr_25643[(13)] = inst_25618);

return statearr_25643;
})();
var statearr_25644_25665 = state_25625__$1;
(statearr_25644_25665[(2)] = inst_25619);

(statearr_25644_25665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25626 === (10))){
var inst_25608 = (state_25625[(2)]);
var state_25625__$1 = state_25625;
var statearr_25645_25666 = state_25625__$1;
(statearr_25645_25666[(2)] = inst_25608);

(statearr_25645_25666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25626 === (8))){
var inst_25593 = (state_25625[(10)]);
var inst_25585 = (state_25625[(8)]);
var inst_25589 = (state_25625[(9)]);
var inst_25598 = inst_25585.push(inst_25589);
var tmp25642 = inst_25585;
var inst_25585__$1 = tmp25642;
var inst_25586 = inst_25593;
var state_25625__$1 = (function (){var statearr_25646 = state_25625;
(statearr_25646[(14)] = inst_25598);

(statearr_25646[(7)] = inst_25586);

(statearr_25646[(8)] = inst_25585__$1);

return statearr_25646;
})();
var statearr_25647_25667 = state_25625__$1;
(statearr_25647_25667[(2)] = null);

(statearr_25647_25667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23749__auto___25653,out))
;
return ((function (switch__23659__auto__,c__23749__auto___25653,out){
return (function() {
var cljs$core$async$state_machine__23660__auto__ = null;
var cljs$core$async$state_machine__23660__auto____0 = (function (){
var statearr_25648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25648[(0)] = cljs$core$async$state_machine__23660__auto__);

(statearr_25648[(1)] = (1));

return statearr_25648;
});
var cljs$core$async$state_machine__23660__auto____1 = (function (state_25625){
while(true){
var ret_value__23661__auto__ = (function (){try{while(true){
var result__23662__auto__ = switch__23659__auto__.call(null,state_25625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23662__auto__;
}
break;
}
}catch (e25649){if((e25649 instanceof Object)){
var ex__23663__auto__ = e25649;
var statearr_25650_25668 = state_25625;
(statearr_25650_25668[(5)] = ex__23663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25669 = state_25625;
state_25625 = G__25669;
continue;
} else {
return ret_value__23661__auto__;
}
break;
}
});
cljs$core$async$state_machine__23660__auto__ = function(state_25625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23660__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23660__auto____1.call(this,state_25625);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23660__auto____0;
cljs$core$async$state_machine__23660__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23660__auto____1;
return cljs$core$async$state_machine__23660__auto__;
})()
;})(switch__23659__auto__,c__23749__auto___25653,out))
})();
var state__23751__auto__ = (function (){var statearr_25651 = f__23750__auto__.call(null);
(statearr_25651[(6)] = c__23749__auto___25653);

return statearr_25651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23751__auto__);
});})(c__23749__auto___25653,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1557924414977
