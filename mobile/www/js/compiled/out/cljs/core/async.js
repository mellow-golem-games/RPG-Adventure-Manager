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
var G__23808 = arguments.length;
switch (G__23808) {
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
if(typeof cljs.core.async.t_cljs$core$async23809 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23809 = (function (f,blockable,meta23810){
this.f = f;
this.blockable = blockable;
this.meta23810 = meta23810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23811,meta23810__$1){
var self__ = this;
var _23811__$1 = this;
return (new cljs.core.async.t_cljs$core$async23809(self__.f,self__.blockable,meta23810__$1));
});

cljs.core.async.t_cljs$core$async23809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23811){
var self__ = this;
var _23811__$1 = this;
return self__.meta23810;
});

cljs.core.async.t_cljs$core$async23809.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23809.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23809.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23809.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23809.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23810","meta23810",1109263048,null)], null);
});

cljs.core.async.t_cljs$core$async23809.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23809.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23809";

cljs.core.async.t_cljs$core$async23809.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23809");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23809.
 */
cljs.core.async.__GT_t_cljs$core$async23809 = (function cljs$core$async$__GT_t_cljs$core$async23809(f__$1,blockable__$1,meta23810){
return (new cljs.core.async.t_cljs$core$async23809(f__$1,blockable__$1,meta23810));
});

}

return (new cljs.core.async.t_cljs$core$async23809(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__23815 = arguments.length;
switch (G__23815) {
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
var G__23818 = arguments.length;
switch (G__23818) {
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
var G__23821 = arguments.length;
switch (G__23821) {
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
var val_23823 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23823);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23823,ret){
return (function (){
return fn1.call(null,val_23823);
});})(val_23823,ret))
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
var G__23825 = arguments.length;
switch (G__23825) {
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
var n__4376__auto___23827 = n;
var x_23828 = (0);
while(true){
if((x_23828 < n__4376__auto___23827)){
(a[x_23828] = (0));

var G__23829 = (x_23828 + (1));
x_23828 = G__23829;
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

var G__23830 = (i + (1));
i = G__23830;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23831 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23831 = (function (flag,meta23832){
this.flag = flag;
this.meta23832 = meta23832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23833,meta23832__$1){
var self__ = this;
var _23833__$1 = this;
return (new cljs.core.async.t_cljs$core$async23831(self__.flag,meta23832__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23831.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23833){
var self__ = this;
var _23833__$1 = this;
return self__.meta23832;
});})(flag))
;

cljs.core.async.t_cljs$core$async23831.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23831.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23831.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23831.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23831.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23832","meta23832",-1405554500,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23831.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23831.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23831";

cljs.core.async.t_cljs$core$async23831.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23831");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23831.
 */
cljs.core.async.__GT_t_cljs$core$async23831 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23831(flag__$1,meta23832){
return (new cljs.core.async.t_cljs$core$async23831(flag__$1,meta23832));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23831(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23834 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23834 = (function (flag,cb,meta23835){
this.flag = flag;
this.cb = cb;
this.meta23835 = meta23835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23836,meta23835__$1){
var self__ = this;
var _23836__$1 = this;
return (new cljs.core.async.t_cljs$core$async23834(self__.flag,self__.cb,meta23835__$1));
});

cljs.core.async.t_cljs$core$async23834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23836){
var self__ = this;
var _23836__$1 = this;
return self__.meta23835;
});

cljs.core.async.t_cljs$core$async23834.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23834.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23834.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23834.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23834.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23835","meta23835",1833281282,null)], null);
});

cljs.core.async.t_cljs$core$async23834.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23834.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23834";

cljs.core.async.t_cljs$core$async23834.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async23834");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23834.
 */
cljs.core.async.__GT_t_cljs$core$async23834 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23834(flag__$1,cb__$1,meta23835){
return (new cljs.core.async.t_cljs$core$async23834(flag__$1,cb__$1,meta23835));
});

}

return (new cljs.core.async.t_cljs$core$async23834(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23837_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23837_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23838_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23838_SHARP_,port], null));
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
var G__23839 = (i + (1));
i = G__23839;
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
var len__4499__auto___23845 = arguments.length;
var i__4500__auto___23846 = (0);
while(true){
if((i__4500__auto___23846 < len__4499__auto___23845)){
args__4502__auto__.push((arguments[i__4500__auto___23846]));

var G__23847 = (i__4500__auto___23846 + (1));
i__4500__auto___23846 = G__23847;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23842){
var map__23843 = p__23842;
var map__23843__$1 = ((((!((map__23843 == null)))?(((((map__23843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23843):map__23843);
var opts = map__23843__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23840){
var G__23841 = cljs.core.first.call(null,seq23840);
var seq23840__$1 = cljs.core.next.call(null,seq23840);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23841,seq23840__$1);
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
var G__23849 = arguments.length;
switch (G__23849) {
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
var c__23748__auto___23895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto___23895){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto___23895){
return (function (state_23873){
var state_val_23874 = (state_23873[(1)]);
if((state_val_23874 === (7))){
var inst_23869 = (state_23873[(2)]);
var state_23873__$1 = state_23873;
var statearr_23875_23896 = state_23873__$1;
(statearr_23875_23896[(2)] = inst_23869);

(statearr_23875_23896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23874 === (1))){
var state_23873__$1 = state_23873;
var statearr_23876_23897 = state_23873__$1;
(statearr_23876_23897[(2)] = null);

(statearr_23876_23897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23874 === (4))){
var inst_23852 = (state_23873[(7)]);
var inst_23852__$1 = (state_23873[(2)]);
var inst_23853 = (inst_23852__$1 == null);
var state_23873__$1 = (function (){var statearr_23877 = state_23873;
(statearr_23877[(7)] = inst_23852__$1);

return statearr_23877;
})();
if(cljs.core.truth_(inst_23853)){
var statearr_23878_23898 = state_23873__$1;
(statearr_23878_23898[(1)] = (5));

} else {
var statearr_23879_23899 = state_23873__$1;
(statearr_23879_23899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23874 === (13))){
var state_23873__$1 = state_23873;
var statearr_23880_23900 = state_23873__$1;
(statearr_23880_23900[(2)] = null);

(statearr_23880_23900[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23874 === (6))){
var inst_23852 = (state_23873[(7)]);
var state_23873__$1 = state_23873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23873__$1,(11),to,inst_23852);
} else {
if((state_val_23874 === (3))){
var inst_23871 = (state_23873[(2)]);
var state_23873__$1 = state_23873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23873__$1,inst_23871);
} else {
if((state_val_23874 === (12))){
var state_23873__$1 = state_23873;
var statearr_23881_23901 = state_23873__$1;
(statearr_23881_23901[(2)] = null);

(statearr_23881_23901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23874 === (2))){
var state_23873__$1 = state_23873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23873__$1,(4),from);
} else {
if((state_val_23874 === (11))){
var inst_23862 = (state_23873[(2)]);
var state_23873__$1 = state_23873;
if(cljs.core.truth_(inst_23862)){
var statearr_23882_23902 = state_23873__$1;
(statearr_23882_23902[(1)] = (12));

} else {
var statearr_23883_23903 = state_23873__$1;
(statearr_23883_23903[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23874 === (9))){
var state_23873__$1 = state_23873;
var statearr_23884_23904 = state_23873__$1;
(statearr_23884_23904[(2)] = null);

(statearr_23884_23904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23874 === (5))){
var state_23873__$1 = state_23873;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23885_23905 = state_23873__$1;
(statearr_23885_23905[(1)] = (8));

} else {
var statearr_23886_23906 = state_23873__$1;
(statearr_23886_23906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23874 === (14))){
var inst_23867 = (state_23873[(2)]);
var state_23873__$1 = state_23873;
var statearr_23887_23907 = state_23873__$1;
(statearr_23887_23907[(2)] = inst_23867);

(statearr_23887_23907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23874 === (10))){
var inst_23859 = (state_23873[(2)]);
var state_23873__$1 = state_23873;
var statearr_23888_23908 = state_23873__$1;
(statearr_23888_23908[(2)] = inst_23859);

(statearr_23888_23908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23874 === (8))){
var inst_23856 = cljs.core.async.close_BANG_.call(null,to);
var state_23873__$1 = state_23873;
var statearr_23889_23909 = state_23873__$1;
(statearr_23889_23909[(2)] = inst_23856);

(statearr_23889_23909[(1)] = (10));


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
});})(c__23748__auto___23895))
;
return ((function (switch__23658__auto__,c__23748__auto___23895){
return (function() {
var cljs$core$async$state_machine__23659__auto__ = null;
var cljs$core$async$state_machine__23659__auto____0 = (function (){
var statearr_23890 = [null,null,null,null,null,null,null,null];
(statearr_23890[(0)] = cljs$core$async$state_machine__23659__auto__);

(statearr_23890[(1)] = (1));

return statearr_23890;
});
var cljs$core$async$state_machine__23659__auto____1 = (function (state_23873){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_23873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e23891){if((e23891 instanceof Object)){
var ex__23662__auto__ = e23891;
var statearr_23892_23910 = state_23873;
(statearr_23892_23910[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23911 = state_23873;
state_23873 = G__23911;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
cljs$core$async$state_machine__23659__auto__ = function(state_23873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23659__auto____1.call(this,state_23873);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23659__auto____0;
cljs$core$async$state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23659__auto____1;
return cljs$core$async$state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto___23895))
})();
var state__23750__auto__ = (function (){var statearr_23893 = f__23749__auto__.call(null);
(statearr_23893[(6)] = c__23748__auto___23895);

return statearr_23893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto___23895))
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
return (function (p__23912){
var vec__23913 = p__23912;
var v = cljs.core.nth.call(null,vec__23913,(0),null);
var p = cljs.core.nth.call(null,vec__23913,(1),null);
var job = vec__23913;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23748__auto___24084 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto___24084,res,vec__23913,v,p,job,jobs,results){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto___24084,res,vec__23913,v,p,job,jobs,results){
return (function (state_23920){
var state_val_23921 = (state_23920[(1)]);
if((state_val_23921 === (1))){
var state_23920__$1 = state_23920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23920__$1,(2),res,v);
} else {
if((state_val_23921 === (2))){
var inst_23917 = (state_23920[(2)]);
var inst_23918 = cljs.core.async.close_BANG_.call(null,res);
var state_23920__$1 = (function (){var statearr_23922 = state_23920;
(statearr_23922[(7)] = inst_23917);

return statearr_23922;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23920__$1,inst_23918);
} else {
return null;
}
}
});})(c__23748__auto___24084,res,vec__23913,v,p,job,jobs,results))
;
return ((function (switch__23658__auto__,c__23748__auto___24084,res,vec__23913,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____0 = (function (){
var statearr_23923 = [null,null,null,null,null,null,null,null];
(statearr_23923[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__);

(statearr_23923[(1)] = (1));

return statearr_23923;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____1 = (function (state_23920){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_23920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e23924){if((e23924 instanceof Object)){
var ex__23662__auto__ = e23924;
var statearr_23925_24085 = state_23920;
(statearr_23925_24085[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24086 = state_23920;
state_23920 = G__24086;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__ = function(state_23920){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____1.call(this,state_23920);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto___24084,res,vec__23913,v,p,job,jobs,results))
})();
var state__23750__auto__ = (function (){var statearr_23926 = f__23749__auto__.call(null);
(statearr_23926[(6)] = c__23748__auto___24084);

return statearr_23926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto___24084,res,vec__23913,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23927){
var vec__23928 = p__23927;
var v = cljs.core.nth.call(null,vec__23928,(0),null);
var p = cljs.core.nth.call(null,vec__23928,(1),null);
var job = vec__23928;
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
var n__4376__auto___24087 = n;
var __24088 = (0);
while(true){
if((__24088 < n__4376__auto___24087)){
var G__23931_24089 = type;
var G__23931_24090__$1 = (((G__23931_24089 instanceof cljs.core.Keyword))?G__23931_24089.fqn:null);
switch (G__23931_24090__$1) {
case "compute":
var c__23748__auto___24092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24088,c__23748__auto___24092,G__23931_24089,G__23931_24090__$1,n__4376__auto___24087,jobs,results,process,async){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (__24088,c__23748__auto___24092,G__23931_24089,G__23931_24090__$1,n__4376__auto___24087,jobs,results,process,async){
return (function (state_23944){
var state_val_23945 = (state_23944[(1)]);
if((state_val_23945 === (1))){
var state_23944__$1 = state_23944;
var statearr_23946_24093 = state_23944__$1;
(statearr_23946_24093[(2)] = null);

(statearr_23946_24093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23945 === (2))){
var state_23944__$1 = state_23944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23944__$1,(4),jobs);
} else {
if((state_val_23945 === (3))){
var inst_23942 = (state_23944[(2)]);
var state_23944__$1 = state_23944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23944__$1,inst_23942);
} else {
if((state_val_23945 === (4))){
var inst_23934 = (state_23944[(2)]);
var inst_23935 = process.call(null,inst_23934);
var state_23944__$1 = state_23944;
if(cljs.core.truth_(inst_23935)){
var statearr_23947_24094 = state_23944__$1;
(statearr_23947_24094[(1)] = (5));

} else {
var statearr_23948_24095 = state_23944__$1;
(statearr_23948_24095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23945 === (5))){
var state_23944__$1 = state_23944;
var statearr_23949_24096 = state_23944__$1;
(statearr_23949_24096[(2)] = null);

(statearr_23949_24096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23945 === (6))){
var state_23944__$1 = state_23944;
var statearr_23950_24097 = state_23944__$1;
(statearr_23950_24097[(2)] = null);

(statearr_23950_24097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23945 === (7))){
var inst_23940 = (state_23944[(2)]);
var state_23944__$1 = state_23944;
var statearr_23951_24098 = state_23944__$1;
(statearr_23951_24098[(2)] = inst_23940);

(statearr_23951_24098[(1)] = (3));


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
});})(__24088,c__23748__auto___24092,G__23931_24089,G__23931_24090__$1,n__4376__auto___24087,jobs,results,process,async))
;
return ((function (__24088,switch__23658__auto__,c__23748__auto___24092,G__23931_24089,G__23931_24090__$1,n__4376__auto___24087,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____0 = (function (){
var statearr_23952 = [null,null,null,null,null,null,null];
(statearr_23952[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__);

(statearr_23952[(1)] = (1));

return statearr_23952;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____1 = (function (state_23944){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_23944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e23953){if((e23953 instanceof Object)){
var ex__23662__auto__ = e23953;
var statearr_23954_24099 = state_23944;
(statearr_23954_24099[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24100 = state_23944;
state_23944 = G__24100;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__ = function(state_23944){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____1.call(this,state_23944);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__;
})()
;})(__24088,switch__23658__auto__,c__23748__auto___24092,G__23931_24089,G__23931_24090__$1,n__4376__auto___24087,jobs,results,process,async))
})();
var state__23750__auto__ = (function (){var statearr_23955 = f__23749__auto__.call(null);
(statearr_23955[(6)] = c__23748__auto___24092);

return statearr_23955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(__24088,c__23748__auto___24092,G__23931_24089,G__23931_24090__$1,n__4376__auto___24087,jobs,results,process,async))
);


break;
case "async":
var c__23748__auto___24101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24088,c__23748__auto___24101,G__23931_24089,G__23931_24090__$1,n__4376__auto___24087,jobs,results,process,async){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (__24088,c__23748__auto___24101,G__23931_24089,G__23931_24090__$1,n__4376__auto___24087,jobs,results,process,async){
return (function (state_23968){
var state_val_23969 = (state_23968[(1)]);
if((state_val_23969 === (1))){
var state_23968__$1 = state_23968;
var statearr_23970_24102 = state_23968__$1;
(statearr_23970_24102[(2)] = null);

(statearr_23970_24102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23969 === (2))){
var state_23968__$1 = state_23968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23968__$1,(4),jobs);
} else {
if((state_val_23969 === (3))){
var inst_23966 = (state_23968[(2)]);
var state_23968__$1 = state_23968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23968__$1,inst_23966);
} else {
if((state_val_23969 === (4))){
var inst_23958 = (state_23968[(2)]);
var inst_23959 = async.call(null,inst_23958);
var state_23968__$1 = state_23968;
if(cljs.core.truth_(inst_23959)){
var statearr_23971_24103 = state_23968__$1;
(statearr_23971_24103[(1)] = (5));

} else {
var statearr_23972_24104 = state_23968__$1;
(statearr_23972_24104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23969 === (5))){
var state_23968__$1 = state_23968;
var statearr_23973_24105 = state_23968__$1;
(statearr_23973_24105[(2)] = null);

(statearr_23973_24105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23969 === (6))){
var state_23968__$1 = state_23968;
var statearr_23974_24106 = state_23968__$1;
(statearr_23974_24106[(2)] = null);

(statearr_23974_24106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23969 === (7))){
var inst_23964 = (state_23968[(2)]);
var state_23968__$1 = state_23968;
var statearr_23975_24107 = state_23968__$1;
(statearr_23975_24107[(2)] = inst_23964);

(statearr_23975_24107[(1)] = (3));


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
});})(__24088,c__23748__auto___24101,G__23931_24089,G__23931_24090__$1,n__4376__auto___24087,jobs,results,process,async))
;
return ((function (__24088,switch__23658__auto__,c__23748__auto___24101,G__23931_24089,G__23931_24090__$1,n__4376__auto___24087,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____0 = (function (){
var statearr_23976 = [null,null,null,null,null,null,null];
(statearr_23976[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__);

(statearr_23976[(1)] = (1));

return statearr_23976;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____1 = (function (state_23968){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_23968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e23977){if((e23977 instanceof Object)){
var ex__23662__auto__ = e23977;
var statearr_23978_24108 = state_23968;
(statearr_23978_24108[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24109 = state_23968;
state_23968 = G__24109;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__ = function(state_23968){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____1.call(this,state_23968);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__;
})()
;})(__24088,switch__23658__auto__,c__23748__auto___24101,G__23931_24089,G__23931_24090__$1,n__4376__auto___24087,jobs,results,process,async))
})();
var state__23750__auto__ = (function (){var statearr_23979 = f__23749__auto__.call(null);
(statearr_23979[(6)] = c__23748__auto___24101);

return statearr_23979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(__24088,c__23748__auto___24101,G__23931_24089,G__23931_24090__$1,n__4376__auto___24087,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23931_24090__$1)].join('')));

}

var G__24110 = (__24088 + (1));
__24088 = G__24110;
continue;
} else {
}
break;
}

var c__23748__auto___24111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto___24111,jobs,results,process,async){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto___24111,jobs,results,process,async){
return (function (state_24001){
var state_val_24002 = (state_24001[(1)]);
if((state_val_24002 === (1))){
var state_24001__$1 = state_24001;
var statearr_24003_24112 = state_24001__$1;
(statearr_24003_24112[(2)] = null);

(statearr_24003_24112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (2))){
var state_24001__$1 = state_24001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24001__$1,(4),from);
} else {
if((state_val_24002 === (3))){
var inst_23999 = (state_24001[(2)]);
var state_24001__$1 = state_24001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24001__$1,inst_23999);
} else {
if((state_val_24002 === (4))){
var inst_23982 = (state_24001[(7)]);
var inst_23982__$1 = (state_24001[(2)]);
var inst_23983 = (inst_23982__$1 == null);
var state_24001__$1 = (function (){var statearr_24004 = state_24001;
(statearr_24004[(7)] = inst_23982__$1);

return statearr_24004;
})();
if(cljs.core.truth_(inst_23983)){
var statearr_24005_24113 = state_24001__$1;
(statearr_24005_24113[(1)] = (5));

} else {
var statearr_24006_24114 = state_24001__$1;
(statearr_24006_24114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (5))){
var inst_23985 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24001__$1 = state_24001;
var statearr_24007_24115 = state_24001__$1;
(statearr_24007_24115[(2)] = inst_23985);

(statearr_24007_24115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (6))){
var inst_23987 = (state_24001[(8)]);
var inst_23982 = (state_24001[(7)]);
var inst_23987__$1 = cljs.core.async.chan.call(null,(1));
var inst_23988 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23989 = [inst_23982,inst_23987__$1];
var inst_23990 = (new cljs.core.PersistentVector(null,2,(5),inst_23988,inst_23989,null));
var state_24001__$1 = (function (){var statearr_24008 = state_24001;
(statearr_24008[(8)] = inst_23987__$1);

return statearr_24008;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24001__$1,(8),jobs,inst_23990);
} else {
if((state_val_24002 === (7))){
var inst_23997 = (state_24001[(2)]);
var state_24001__$1 = state_24001;
var statearr_24009_24116 = state_24001__$1;
(statearr_24009_24116[(2)] = inst_23997);

(statearr_24009_24116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24002 === (8))){
var inst_23987 = (state_24001[(8)]);
var inst_23992 = (state_24001[(2)]);
var state_24001__$1 = (function (){var statearr_24010 = state_24001;
(statearr_24010[(9)] = inst_23992);

return statearr_24010;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24001__$1,(9),results,inst_23987);
} else {
if((state_val_24002 === (9))){
var inst_23994 = (state_24001[(2)]);
var state_24001__$1 = (function (){var statearr_24011 = state_24001;
(statearr_24011[(10)] = inst_23994);

return statearr_24011;
})();
var statearr_24012_24117 = state_24001__$1;
(statearr_24012_24117[(2)] = null);

(statearr_24012_24117[(1)] = (2));


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
});})(c__23748__auto___24111,jobs,results,process,async))
;
return ((function (switch__23658__auto__,c__23748__auto___24111,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____0 = (function (){
var statearr_24013 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24013[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__);

(statearr_24013[(1)] = (1));

return statearr_24013;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____1 = (function (state_24001){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_24001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e24014){if((e24014 instanceof Object)){
var ex__23662__auto__ = e24014;
var statearr_24015_24118 = state_24001;
(statearr_24015_24118[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24119 = state_24001;
state_24001 = G__24119;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__ = function(state_24001){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____1.call(this,state_24001);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto___24111,jobs,results,process,async))
})();
var state__23750__auto__ = (function (){var statearr_24016 = f__23749__auto__.call(null);
(statearr_24016[(6)] = c__23748__auto___24111);

return statearr_24016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto___24111,jobs,results,process,async))
);


var c__23748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto__,jobs,results,process,async){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto__,jobs,results,process,async){
return (function (state_24054){
var state_val_24055 = (state_24054[(1)]);
if((state_val_24055 === (7))){
var inst_24050 = (state_24054[(2)]);
var state_24054__$1 = state_24054;
var statearr_24056_24120 = state_24054__$1;
(statearr_24056_24120[(2)] = inst_24050);

(statearr_24056_24120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (20))){
var state_24054__$1 = state_24054;
var statearr_24057_24121 = state_24054__$1;
(statearr_24057_24121[(2)] = null);

(statearr_24057_24121[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (1))){
var state_24054__$1 = state_24054;
var statearr_24058_24122 = state_24054__$1;
(statearr_24058_24122[(2)] = null);

(statearr_24058_24122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (4))){
var inst_24019 = (state_24054[(7)]);
var inst_24019__$1 = (state_24054[(2)]);
var inst_24020 = (inst_24019__$1 == null);
var state_24054__$1 = (function (){var statearr_24059 = state_24054;
(statearr_24059[(7)] = inst_24019__$1);

return statearr_24059;
})();
if(cljs.core.truth_(inst_24020)){
var statearr_24060_24123 = state_24054__$1;
(statearr_24060_24123[(1)] = (5));

} else {
var statearr_24061_24124 = state_24054__$1;
(statearr_24061_24124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (15))){
var inst_24032 = (state_24054[(8)]);
var state_24054__$1 = state_24054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24054__$1,(18),to,inst_24032);
} else {
if((state_val_24055 === (21))){
var inst_24045 = (state_24054[(2)]);
var state_24054__$1 = state_24054;
var statearr_24062_24125 = state_24054__$1;
(statearr_24062_24125[(2)] = inst_24045);

(statearr_24062_24125[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (13))){
var inst_24047 = (state_24054[(2)]);
var state_24054__$1 = (function (){var statearr_24063 = state_24054;
(statearr_24063[(9)] = inst_24047);

return statearr_24063;
})();
var statearr_24064_24126 = state_24054__$1;
(statearr_24064_24126[(2)] = null);

(statearr_24064_24126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (6))){
var inst_24019 = (state_24054[(7)]);
var state_24054__$1 = state_24054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24054__$1,(11),inst_24019);
} else {
if((state_val_24055 === (17))){
var inst_24040 = (state_24054[(2)]);
var state_24054__$1 = state_24054;
if(cljs.core.truth_(inst_24040)){
var statearr_24065_24127 = state_24054__$1;
(statearr_24065_24127[(1)] = (19));

} else {
var statearr_24066_24128 = state_24054__$1;
(statearr_24066_24128[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (3))){
var inst_24052 = (state_24054[(2)]);
var state_24054__$1 = state_24054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24054__$1,inst_24052);
} else {
if((state_val_24055 === (12))){
var inst_24029 = (state_24054[(10)]);
var state_24054__$1 = state_24054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24054__$1,(14),inst_24029);
} else {
if((state_val_24055 === (2))){
var state_24054__$1 = state_24054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24054__$1,(4),results);
} else {
if((state_val_24055 === (19))){
var state_24054__$1 = state_24054;
var statearr_24067_24129 = state_24054__$1;
(statearr_24067_24129[(2)] = null);

(statearr_24067_24129[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (11))){
var inst_24029 = (state_24054[(2)]);
var state_24054__$1 = (function (){var statearr_24068 = state_24054;
(statearr_24068[(10)] = inst_24029);

return statearr_24068;
})();
var statearr_24069_24130 = state_24054__$1;
(statearr_24069_24130[(2)] = null);

(statearr_24069_24130[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (9))){
var state_24054__$1 = state_24054;
var statearr_24070_24131 = state_24054__$1;
(statearr_24070_24131[(2)] = null);

(statearr_24070_24131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (5))){
var state_24054__$1 = state_24054;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24071_24132 = state_24054__$1;
(statearr_24071_24132[(1)] = (8));

} else {
var statearr_24072_24133 = state_24054__$1;
(statearr_24072_24133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (14))){
var inst_24034 = (state_24054[(11)]);
var inst_24032 = (state_24054[(8)]);
var inst_24032__$1 = (state_24054[(2)]);
var inst_24033 = (inst_24032__$1 == null);
var inst_24034__$1 = cljs.core.not.call(null,inst_24033);
var state_24054__$1 = (function (){var statearr_24073 = state_24054;
(statearr_24073[(11)] = inst_24034__$1);

(statearr_24073[(8)] = inst_24032__$1);

return statearr_24073;
})();
if(inst_24034__$1){
var statearr_24074_24134 = state_24054__$1;
(statearr_24074_24134[(1)] = (15));

} else {
var statearr_24075_24135 = state_24054__$1;
(statearr_24075_24135[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (16))){
var inst_24034 = (state_24054[(11)]);
var state_24054__$1 = state_24054;
var statearr_24076_24136 = state_24054__$1;
(statearr_24076_24136[(2)] = inst_24034);

(statearr_24076_24136[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (10))){
var inst_24026 = (state_24054[(2)]);
var state_24054__$1 = state_24054;
var statearr_24077_24137 = state_24054__$1;
(statearr_24077_24137[(2)] = inst_24026);

(statearr_24077_24137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (18))){
var inst_24037 = (state_24054[(2)]);
var state_24054__$1 = state_24054;
var statearr_24078_24138 = state_24054__$1;
(statearr_24078_24138[(2)] = inst_24037);

(statearr_24078_24138[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24055 === (8))){
var inst_24023 = cljs.core.async.close_BANG_.call(null,to);
var state_24054__$1 = state_24054;
var statearr_24079_24139 = state_24054__$1;
(statearr_24079_24139[(2)] = inst_24023);

(statearr_24079_24139[(1)] = (10));


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
});})(c__23748__auto__,jobs,results,process,async))
;
return ((function (switch__23658__auto__,c__23748__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____0 = (function (){
var statearr_24080 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24080[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__);

(statearr_24080[(1)] = (1));

return statearr_24080;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____1 = (function (state_24054){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_24054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e24081){if((e24081 instanceof Object)){
var ex__23662__auto__ = e24081;
var statearr_24082_24140 = state_24054;
(statearr_24082_24140[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24141 = state_24054;
state_24054 = G__24141;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__ = function(state_24054){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____1.call(this,state_24054);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23659__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto__,jobs,results,process,async))
})();
var state__23750__auto__ = (function (){var statearr_24083 = f__23749__auto__.call(null);
(statearr_24083[(6)] = c__23748__auto__);

return statearr_24083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto__,jobs,results,process,async))
);

return c__23748__auto__;
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
var G__24143 = arguments.length;
switch (G__24143) {
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
var G__24146 = arguments.length;
switch (G__24146) {
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
var G__24149 = arguments.length;
switch (G__24149) {
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
var c__23748__auto___24198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto___24198,tc,fc){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto___24198,tc,fc){
return (function (state_24175){
var state_val_24176 = (state_24175[(1)]);
if((state_val_24176 === (7))){
var inst_24171 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
var statearr_24177_24199 = state_24175__$1;
(statearr_24177_24199[(2)] = inst_24171);

(statearr_24177_24199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (1))){
var state_24175__$1 = state_24175;
var statearr_24178_24200 = state_24175__$1;
(statearr_24178_24200[(2)] = null);

(statearr_24178_24200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (4))){
var inst_24152 = (state_24175[(7)]);
var inst_24152__$1 = (state_24175[(2)]);
var inst_24153 = (inst_24152__$1 == null);
var state_24175__$1 = (function (){var statearr_24179 = state_24175;
(statearr_24179[(7)] = inst_24152__$1);

return statearr_24179;
})();
if(cljs.core.truth_(inst_24153)){
var statearr_24180_24201 = state_24175__$1;
(statearr_24180_24201[(1)] = (5));

} else {
var statearr_24181_24202 = state_24175__$1;
(statearr_24181_24202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (13))){
var state_24175__$1 = state_24175;
var statearr_24182_24203 = state_24175__$1;
(statearr_24182_24203[(2)] = null);

(statearr_24182_24203[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (6))){
var inst_24152 = (state_24175[(7)]);
var inst_24158 = p.call(null,inst_24152);
var state_24175__$1 = state_24175;
if(cljs.core.truth_(inst_24158)){
var statearr_24183_24204 = state_24175__$1;
(statearr_24183_24204[(1)] = (9));

} else {
var statearr_24184_24205 = state_24175__$1;
(statearr_24184_24205[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (3))){
var inst_24173 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24175__$1,inst_24173);
} else {
if((state_val_24176 === (12))){
var state_24175__$1 = state_24175;
var statearr_24185_24206 = state_24175__$1;
(statearr_24185_24206[(2)] = null);

(statearr_24185_24206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (2))){
var state_24175__$1 = state_24175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24175__$1,(4),ch);
} else {
if((state_val_24176 === (11))){
var inst_24152 = (state_24175[(7)]);
var inst_24162 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24175__$1,(8),inst_24162,inst_24152);
} else {
if((state_val_24176 === (9))){
var state_24175__$1 = state_24175;
var statearr_24186_24207 = state_24175__$1;
(statearr_24186_24207[(2)] = tc);

(statearr_24186_24207[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (5))){
var inst_24155 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24156 = cljs.core.async.close_BANG_.call(null,fc);
var state_24175__$1 = (function (){var statearr_24187 = state_24175;
(statearr_24187[(8)] = inst_24155);

return statearr_24187;
})();
var statearr_24188_24208 = state_24175__$1;
(statearr_24188_24208[(2)] = inst_24156);

(statearr_24188_24208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (14))){
var inst_24169 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
var statearr_24189_24209 = state_24175__$1;
(statearr_24189_24209[(2)] = inst_24169);

(statearr_24189_24209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (10))){
var state_24175__$1 = state_24175;
var statearr_24190_24210 = state_24175__$1;
(statearr_24190_24210[(2)] = fc);

(statearr_24190_24210[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (8))){
var inst_24164 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
if(cljs.core.truth_(inst_24164)){
var statearr_24191_24211 = state_24175__$1;
(statearr_24191_24211[(1)] = (12));

} else {
var statearr_24192_24212 = state_24175__$1;
(statearr_24192_24212[(1)] = (13));

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
});})(c__23748__auto___24198,tc,fc))
;
return ((function (switch__23658__auto__,c__23748__auto___24198,tc,fc){
return (function() {
var cljs$core$async$state_machine__23659__auto__ = null;
var cljs$core$async$state_machine__23659__auto____0 = (function (){
var statearr_24193 = [null,null,null,null,null,null,null,null,null];
(statearr_24193[(0)] = cljs$core$async$state_machine__23659__auto__);

(statearr_24193[(1)] = (1));

return statearr_24193;
});
var cljs$core$async$state_machine__23659__auto____1 = (function (state_24175){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_24175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e24194){if((e24194 instanceof Object)){
var ex__23662__auto__ = e24194;
var statearr_24195_24213 = state_24175;
(statearr_24195_24213[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24214 = state_24175;
state_24175 = G__24214;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
cljs$core$async$state_machine__23659__auto__ = function(state_24175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23659__auto____1.call(this,state_24175);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23659__auto____0;
cljs$core$async$state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23659__auto____1;
return cljs$core$async$state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto___24198,tc,fc))
})();
var state__23750__auto__ = (function (){var statearr_24196 = f__23749__auto__.call(null);
(statearr_24196[(6)] = c__23748__auto___24198);

return statearr_24196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto___24198,tc,fc))
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
var c__23748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto__){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto__){
return (function (state_24235){
var state_val_24236 = (state_24235[(1)]);
if((state_val_24236 === (7))){
var inst_24231 = (state_24235[(2)]);
var state_24235__$1 = state_24235;
var statearr_24237_24255 = state_24235__$1;
(statearr_24237_24255[(2)] = inst_24231);

(statearr_24237_24255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (1))){
var inst_24215 = init;
var state_24235__$1 = (function (){var statearr_24238 = state_24235;
(statearr_24238[(7)] = inst_24215);

return statearr_24238;
})();
var statearr_24239_24256 = state_24235__$1;
(statearr_24239_24256[(2)] = null);

(statearr_24239_24256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (4))){
var inst_24218 = (state_24235[(8)]);
var inst_24218__$1 = (state_24235[(2)]);
var inst_24219 = (inst_24218__$1 == null);
var state_24235__$1 = (function (){var statearr_24240 = state_24235;
(statearr_24240[(8)] = inst_24218__$1);

return statearr_24240;
})();
if(cljs.core.truth_(inst_24219)){
var statearr_24241_24257 = state_24235__$1;
(statearr_24241_24257[(1)] = (5));

} else {
var statearr_24242_24258 = state_24235__$1;
(statearr_24242_24258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (6))){
var inst_24215 = (state_24235[(7)]);
var inst_24218 = (state_24235[(8)]);
var inst_24222 = (state_24235[(9)]);
var inst_24222__$1 = f.call(null,inst_24215,inst_24218);
var inst_24223 = cljs.core.reduced_QMARK_.call(null,inst_24222__$1);
var state_24235__$1 = (function (){var statearr_24243 = state_24235;
(statearr_24243[(9)] = inst_24222__$1);

return statearr_24243;
})();
if(inst_24223){
var statearr_24244_24259 = state_24235__$1;
(statearr_24244_24259[(1)] = (8));

} else {
var statearr_24245_24260 = state_24235__$1;
(statearr_24245_24260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (3))){
var inst_24233 = (state_24235[(2)]);
var state_24235__$1 = state_24235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24235__$1,inst_24233);
} else {
if((state_val_24236 === (2))){
var state_24235__$1 = state_24235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24235__$1,(4),ch);
} else {
if((state_val_24236 === (9))){
var inst_24222 = (state_24235[(9)]);
var inst_24215 = inst_24222;
var state_24235__$1 = (function (){var statearr_24246 = state_24235;
(statearr_24246[(7)] = inst_24215);

return statearr_24246;
})();
var statearr_24247_24261 = state_24235__$1;
(statearr_24247_24261[(2)] = null);

(statearr_24247_24261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (5))){
var inst_24215 = (state_24235[(7)]);
var state_24235__$1 = state_24235;
var statearr_24248_24262 = state_24235__$1;
(statearr_24248_24262[(2)] = inst_24215);

(statearr_24248_24262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (10))){
var inst_24229 = (state_24235[(2)]);
var state_24235__$1 = state_24235;
var statearr_24249_24263 = state_24235__$1;
(statearr_24249_24263[(2)] = inst_24229);

(statearr_24249_24263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24236 === (8))){
var inst_24222 = (state_24235[(9)]);
var inst_24225 = cljs.core.deref.call(null,inst_24222);
var state_24235__$1 = state_24235;
var statearr_24250_24264 = state_24235__$1;
(statearr_24250_24264[(2)] = inst_24225);

(statearr_24250_24264[(1)] = (10));


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
});})(c__23748__auto__))
;
return ((function (switch__23658__auto__,c__23748__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23659__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23659__auto____0 = (function (){
var statearr_24251 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24251[(0)] = cljs$core$async$reduce_$_state_machine__23659__auto__);

(statearr_24251[(1)] = (1));

return statearr_24251;
});
var cljs$core$async$reduce_$_state_machine__23659__auto____1 = (function (state_24235){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_24235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e24252){if((e24252 instanceof Object)){
var ex__23662__auto__ = e24252;
var statearr_24253_24265 = state_24235;
(statearr_24253_24265[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24266 = state_24235;
state_24235 = G__24266;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23659__auto__ = function(state_24235){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23659__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23659__auto____1.call(this,state_24235);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23659__auto____0;
cljs$core$async$reduce_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23659__auto____1;
return cljs$core$async$reduce_$_state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto__))
})();
var state__23750__auto__ = (function (){var statearr_24254 = f__23749__auto__.call(null);
(statearr_24254[(6)] = c__23748__auto__);

return statearr_24254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto__))
);

return c__23748__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto__,f__$1){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto__,f__$1){
return (function (state_24272){
var state_val_24273 = (state_24272[(1)]);
if((state_val_24273 === (1))){
var inst_24267 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24272__$1 = state_24272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24272__$1,(2),inst_24267);
} else {
if((state_val_24273 === (2))){
var inst_24269 = (state_24272[(2)]);
var inst_24270 = f__$1.call(null,inst_24269);
var state_24272__$1 = state_24272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24272__$1,inst_24270);
} else {
return null;
}
}
});})(c__23748__auto__,f__$1))
;
return ((function (switch__23658__auto__,c__23748__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23659__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23659__auto____0 = (function (){
var statearr_24274 = [null,null,null,null,null,null,null];
(statearr_24274[(0)] = cljs$core$async$transduce_$_state_machine__23659__auto__);

(statearr_24274[(1)] = (1));

return statearr_24274;
});
var cljs$core$async$transduce_$_state_machine__23659__auto____1 = (function (state_24272){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_24272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e24275){if((e24275 instanceof Object)){
var ex__23662__auto__ = e24275;
var statearr_24276_24278 = state_24272;
(statearr_24276_24278[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24279 = state_24272;
state_24272 = G__24279;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23659__auto__ = function(state_24272){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23659__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23659__auto____1.call(this,state_24272);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23659__auto____0;
cljs$core$async$transduce_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23659__auto____1;
return cljs$core$async$transduce_$_state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto__,f__$1))
})();
var state__23750__auto__ = (function (){var statearr_24277 = f__23749__auto__.call(null);
(statearr_24277[(6)] = c__23748__auto__);

return statearr_24277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto__,f__$1))
);

return c__23748__auto__;
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
var G__24281 = arguments.length;
switch (G__24281) {
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
var c__23748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto__){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto__){
return (function (state_24306){
var state_val_24307 = (state_24306[(1)]);
if((state_val_24307 === (7))){
var inst_24288 = (state_24306[(2)]);
var state_24306__$1 = state_24306;
var statearr_24308_24329 = state_24306__$1;
(statearr_24308_24329[(2)] = inst_24288);

(statearr_24308_24329[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24307 === (1))){
var inst_24282 = cljs.core.seq.call(null,coll);
var inst_24283 = inst_24282;
var state_24306__$1 = (function (){var statearr_24309 = state_24306;
(statearr_24309[(7)] = inst_24283);

return statearr_24309;
})();
var statearr_24310_24330 = state_24306__$1;
(statearr_24310_24330[(2)] = null);

(statearr_24310_24330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24307 === (4))){
var inst_24283 = (state_24306[(7)]);
var inst_24286 = cljs.core.first.call(null,inst_24283);
var state_24306__$1 = state_24306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24306__$1,(7),ch,inst_24286);
} else {
if((state_val_24307 === (13))){
var inst_24300 = (state_24306[(2)]);
var state_24306__$1 = state_24306;
var statearr_24311_24331 = state_24306__$1;
(statearr_24311_24331[(2)] = inst_24300);

(statearr_24311_24331[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24307 === (6))){
var inst_24291 = (state_24306[(2)]);
var state_24306__$1 = state_24306;
if(cljs.core.truth_(inst_24291)){
var statearr_24312_24332 = state_24306__$1;
(statearr_24312_24332[(1)] = (8));

} else {
var statearr_24313_24333 = state_24306__$1;
(statearr_24313_24333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24307 === (3))){
var inst_24304 = (state_24306[(2)]);
var state_24306__$1 = state_24306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24306__$1,inst_24304);
} else {
if((state_val_24307 === (12))){
var state_24306__$1 = state_24306;
var statearr_24314_24334 = state_24306__$1;
(statearr_24314_24334[(2)] = null);

(statearr_24314_24334[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24307 === (2))){
var inst_24283 = (state_24306[(7)]);
var state_24306__$1 = state_24306;
if(cljs.core.truth_(inst_24283)){
var statearr_24315_24335 = state_24306__$1;
(statearr_24315_24335[(1)] = (4));

} else {
var statearr_24316_24336 = state_24306__$1;
(statearr_24316_24336[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24307 === (11))){
var inst_24297 = cljs.core.async.close_BANG_.call(null,ch);
var state_24306__$1 = state_24306;
var statearr_24317_24337 = state_24306__$1;
(statearr_24317_24337[(2)] = inst_24297);

(statearr_24317_24337[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24307 === (9))){
var state_24306__$1 = state_24306;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24318_24338 = state_24306__$1;
(statearr_24318_24338[(1)] = (11));

} else {
var statearr_24319_24339 = state_24306__$1;
(statearr_24319_24339[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24307 === (5))){
var inst_24283 = (state_24306[(7)]);
var state_24306__$1 = state_24306;
var statearr_24320_24340 = state_24306__$1;
(statearr_24320_24340[(2)] = inst_24283);

(statearr_24320_24340[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24307 === (10))){
var inst_24302 = (state_24306[(2)]);
var state_24306__$1 = state_24306;
var statearr_24321_24341 = state_24306__$1;
(statearr_24321_24341[(2)] = inst_24302);

(statearr_24321_24341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24307 === (8))){
var inst_24283 = (state_24306[(7)]);
var inst_24293 = cljs.core.next.call(null,inst_24283);
var inst_24283__$1 = inst_24293;
var state_24306__$1 = (function (){var statearr_24322 = state_24306;
(statearr_24322[(7)] = inst_24283__$1);

return statearr_24322;
})();
var statearr_24323_24342 = state_24306__$1;
(statearr_24323_24342[(2)] = null);

(statearr_24323_24342[(1)] = (2));


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
});})(c__23748__auto__))
;
return ((function (switch__23658__auto__,c__23748__auto__){
return (function() {
var cljs$core$async$state_machine__23659__auto__ = null;
var cljs$core$async$state_machine__23659__auto____0 = (function (){
var statearr_24324 = [null,null,null,null,null,null,null,null];
(statearr_24324[(0)] = cljs$core$async$state_machine__23659__auto__);

(statearr_24324[(1)] = (1));

return statearr_24324;
});
var cljs$core$async$state_machine__23659__auto____1 = (function (state_24306){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_24306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e24325){if((e24325 instanceof Object)){
var ex__23662__auto__ = e24325;
var statearr_24326_24343 = state_24306;
(statearr_24326_24343[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24344 = state_24306;
state_24306 = G__24344;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
cljs$core$async$state_machine__23659__auto__ = function(state_24306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23659__auto____1.call(this,state_24306);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23659__auto____0;
cljs$core$async$state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23659__auto____1;
return cljs$core$async$state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto__))
})();
var state__23750__auto__ = (function (){var statearr_24327 = f__23749__auto__.call(null);
(statearr_24327[(6)] = c__23748__auto__);

return statearr_24327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto__))
);

return c__23748__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async24345 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24345 = (function (ch,cs,meta24346){
this.ch = ch;
this.cs = cs;
this.meta24346 = meta24346;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24347,meta24346__$1){
var self__ = this;
var _24347__$1 = this;
return (new cljs.core.async.t_cljs$core$async24345(self__.ch,self__.cs,meta24346__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24345.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24347){
var self__ = this;
var _24347__$1 = this;
return self__.meta24346;
});})(cs))
;

cljs.core.async.t_cljs$core$async24345.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24345.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24345.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24345.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24345.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24345.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24345.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24346","meta24346",1863470614,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24345.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24345.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24345";

cljs.core.async.t_cljs$core$async24345.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24345");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24345.
 */
cljs.core.async.__GT_t_cljs$core$async24345 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24345(ch__$1,cs__$1,meta24346){
return (new cljs.core.async.t_cljs$core$async24345(ch__$1,cs__$1,meta24346));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24345(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23748__auto___24567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto___24567,cs,m,dchan,dctr,done){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto___24567,cs,m,dchan,dctr,done){
return (function (state_24482){
var state_val_24483 = (state_24482[(1)]);
if((state_val_24483 === (7))){
var inst_24478 = (state_24482[(2)]);
var state_24482__$1 = state_24482;
var statearr_24484_24568 = state_24482__$1;
(statearr_24484_24568[(2)] = inst_24478);

(statearr_24484_24568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (20))){
var inst_24381 = (state_24482[(7)]);
var inst_24393 = cljs.core.first.call(null,inst_24381);
var inst_24394 = cljs.core.nth.call(null,inst_24393,(0),null);
var inst_24395 = cljs.core.nth.call(null,inst_24393,(1),null);
var state_24482__$1 = (function (){var statearr_24485 = state_24482;
(statearr_24485[(8)] = inst_24394);

return statearr_24485;
})();
if(cljs.core.truth_(inst_24395)){
var statearr_24486_24569 = state_24482__$1;
(statearr_24486_24569[(1)] = (22));

} else {
var statearr_24487_24570 = state_24482__$1;
(statearr_24487_24570[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (27))){
var inst_24425 = (state_24482[(9)]);
var inst_24423 = (state_24482[(10)]);
var inst_24350 = (state_24482[(11)]);
var inst_24430 = (state_24482[(12)]);
var inst_24430__$1 = cljs.core._nth.call(null,inst_24423,inst_24425);
var inst_24431 = cljs.core.async.put_BANG_.call(null,inst_24430__$1,inst_24350,done);
var state_24482__$1 = (function (){var statearr_24488 = state_24482;
(statearr_24488[(12)] = inst_24430__$1);

return statearr_24488;
})();
if(cljs.core.truth_(inst_24431)){
var statearr_24489_24571 = state_24482__$1;
(statearr_24489_24571[(1)] = (30));

} else {
var statearr_24490_24572 = state_24482__$1;
(statearr_24490_24572[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (1))){
var state_24482__$1 = state_24482;
var statearr_24491_24573 = state_24482__$1;
(statearr_24491_24573[(2)] = null);

(statearr_24491_24573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (24))){
var inst_24381 = (state_24482[(7)]);
var inst_24400 = (state_24482[(2)]);
var inst_24401 = cljs.core.next.call(null,inst_24381);
var inst_24359 = inst_24401;
var inst_24360 = null;
var inst_24361 = (0);
var inst_24362 = (0);
var state_24482__$1 = (function (){var statearr_24492 = state_24482;
(statearr_24492[(13)] = inst_24360);

(statearr_24492[(14)] = inst_24400);

(statearr_24492[(15)] = inst_24361);

(statearr_24492[(16)] = inst_24362);

(statearr_24492[(17)] = inst_24359);

return statearr_24492;
})();
var statearr_24493_24574 = state_24482__$1;
(statearr_24493_24574[(2)] = null);

(statearr_24493_24574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (39))){
var state_24482__$1 = state_24482;
var statearr_24497_24575 = state_24482__$1;
(statearr_24497_24575[(2)] = null);

(statearr_24497_24575[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (4))){
var inst_24350 = (state_24482[(11)]);
var inst_24350__$1 = (state_24482[(2)]);
var inst_24351 = (inst_24350__$1 == null);
var state_24482__$1 = (function (){var statearr_24498 = state_24482;
(statearr_24498[(11)] = inst_24350__$1);

return statearr_24498;
})();
if(cljs.core.truth_(inst_24351)){
var statearr_24499_24576 = state_24482__$1;
(statearr_24499_24576[(1)] = (5));

} else {
var statearr_24500_24577 = state_24482__$1;
(statearr_24500_24577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (15))){
var inst_24360 = (state_24482[(13)]);
var inst_24361 = (state_24482[(15)]);
var inst_24362 = (state_24482[(16)]);
var inst_24359 = (state_24482[(17)]);
var inst_24377 = (state_24482[(2)]);
var inst_24378 = (inst_24362 + (1));
var tmp24494 = inst_24360;
var tmp24495 = inst_24361;
var tmp24496 = inst_24359;
var inst_24359__$1 = tmp24496;
var inst_24360__$1 = tmp24494;
var inst_24361__$1 = tmp24495;
var inst_24362__$1 = inst_24378;
var state_24482__$1 = (function (){var statearr_24501 = state_24482;
(statearr_24501[(13)] = inst_24360__$1);

(statearr_24501[(15)] = inst_24361__$1);

(statearr_24501[(18)] = inst_24377);

(statearr_24501[(16)] = inst_24362__$1);

(statearr_24501[(17)] = inst_24359__$1);

return statearr_24501;
})();
var statearr_24502_24578 = state_24482__$1;
(statearr_24502_24578[(2)] = null);

(statearr_24502_24578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (21))){
var inst_24404 = (state_24482[(2)]);
var state_24482__$1 = state_24482;
var statearr_24506_24579 = state_24482__$1;
(statearr_24506_24579[(2)] = inst_24404);

(statearr_24506_24579[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (31))){
var inst_24430 = (state_24482[(12)]);
var inst_24434 = done.call(null,null);
var inst_24435 = cljs.core.async.untap_STAR_.call(null,m,inst_24430);
var state_24482__$1 = (function (){var statearr_24507 = state_24482;
(statearr_24507[(19)] = inst_24434);

return statearr_24507;
})();
var statearr_24508_24580 = state_24482__$1;
(statearr_24508_24580[(2)] = inst_24435);

(statearr_24508_24580[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (32))){
var inst_24425 = (state_24482[(9)]);
var inst_24424 = (state_24482[(20)]);
var inst_24423 = (state_24482[(10)]);
var inst_24422 = (state_24482[(21)]);
var inst_24437 = (state_24482[(2)]);
var inst_24438 = (inst_24425 + (1));
var tmp24503 = inst_24424;
var tmp24504 = inst_24423;
var tmp24505 = inst_24422;
var inst_24422__$1 = tmp24505;
var inst_24423__$1 = tmp24504;
var inst_24424__$1 = tmp24503;
var inst_24425__$1 = inst_24438;
var state_24482__$1 = (function (){var statearr_24509 = state_24482;
(statearr_24509[(9)] = inst_24425__$1);

(statearr_24509[(20)] = inst_24424__$1);

(statearr_24509[(22)] = inst_24437);

(statearr_24509[(10)] = inst_24423__$1);

(statearr_24509[(21)] = inst_24422__$1);

return statearr_24509;
})();
var statearr_24510_24581 = state_24482__$1;
(statearr_24510_24581[(2)] = null);

(statearr_24510_24581[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (40))){
var inst_24450 = (state_24482[(23)]);
var inst_24454 = done.call(null,null);
var inst_24455 = cljs.core.async.untap_STAR_.call(null,m,inst_24450);
var state_24482__$1 = (function (){var statearr_24511 = state_24482;
(statearr_24511[(24)] = inst_24454);

return statearr_24511;
})();
var statearr_24512_24582 = state_24482__$1;
(statearr_24512_24582[(2)] = inst_24455);

(statearr_24512_24582[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (33))){
var inst_24441 = (state_24482[(25)]);
var inst_24443 = cljs.core.chunked_seq_QMARK_.call(null,inst_24441);
var state_24482__$1 = state_24482;
if(inst_24443){
var statearr_24513_24583 = state_24482__$1;
(statearr_24513_24583[(1)] = (36));

} else {
var statearr_24514_24584 = state_24482__$1;
(statearr_24514_24584[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (13))){
var inst_24371 = (state_24482[(26)]);
var inst_24374 = cljs.core.async.close_BANG_.call(null,inst_24371);
var state_24482__$1 = state_24482;
var statearr_24515_24585 = state_24482__$1;
(statearr_24515_24585[(2)] = inst_24374);

(statearr_24515_24585[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (22))){
var inst_24394 = (state_24482[(8)]);
var inst_24397 = cljs.core.async.close_BANG_.call(null,inst_24394);
var state_24482__$1 = state_24482;
var statearr_24516_24586 = state_24482__$1;
(statearr_24516_24586[(2)] = inst_24397);

(statearr_24516_24586[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (36))){
var inst_24441 = (state_24482[(25)]);
var inst_24445 = cljs.core.chunk_first.call(null,inst_24441);
var inst_24446 = cljs.core.chunk_rest.call(null,inst_24441);
var inst_24447 = cljs.core.count.call(null,inst_24445);
var inst_24422 = inst_24446;
var inst_24423 = inst_24445;
var inst_24424 = inst_24447;
var inst_24425 = (0);
var state_24482__$1 = (function (){var statearr_24517 = state_24482;
(statearr_24517[(9)] = inst_24425);

(statearr_24517[(20)] = inst_24424);

(statearr_24517[(10)] = inst_24423);

(statearr_24517[(21)] = inst_24422);

return statearr_24517;
})();
var statearr_24518_24587 = state_24482__$1;
(statearr_24518_24587[(2)] = null);

(statearr_24518_24587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (41))){
var inst_24441 = (state_24482[(25)]);
var inst_24457 = (state_24482[(2)]);
var inst_24458 = cljs.core.next.call(null,inst_24441);
var inst_24422 = inst_24458;
var inst_24423 = null;
var inst_24424 = (0);
var inst_24425 = (0);
var state_24482__$1 = (function (){var statearr_24519 = state_24482;
(statearr_24519[(9)] = inst_24425);

(statearr_24519[(27)] = inst_24457);

(statearr_24519[(20)] = inst_24424);

(statearr_24519[(10)] = inst_24423);

(statearr_24519[(21)] = inst_24422);

return statearr_24519;
})();
var statearr_24520_24588 = state_24482__$1;
(statearr_24520_24588[(2)] = null);

(statearr_24520_24588[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (43))){
var state_24482__$1 = state_24482;
var statearr_24521_24589 = state_24482__$1;
(statearr_24521_24589[(2)] = null);

(statearr_24521_24589[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (29))){
var inst_24466 = (state_24482[(2)]);
var state_24482__$1 = state_24482;
var statearr_24522_24590 = state_24482__$1;
(statearr_24522_24590[(2)] = inst_24466);

(statearr_24522_24590[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (44))){
var inst_24475 = (state_24482[(2)]);
var state_24482__$1 = (function (){var statearr_24523 = state_24482;
(statearr_24523[(28)] = inst_24475);

return statearr_24523;
})();
var statearr_24524_24591 = state_24482__$1;
(statearr_24524_24591[(2)] = null);

(statearr_24524_24591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (6))){
var inst_24414 = (state_24482[(29)]);
var inst_24413 = cljs.core.deref.call(null,cs);
var inst_24414__$1 = cljs.core.keys.call(null,inst_24413);
var inst_24415 = cljs.core.count.call(null,inst_24414__$1);
var inst_24416 = cljs.core.reset_BANG_.call(null,dctr,inst_24415);
var inst_24421 = cljs.core.seq.call(null,inst_24414__$1);
var inst_24422 = inst_24421;
var inst_24423 = null;
var inst_24424 = (0);
var inst_24425 = (0);
var state_24482__$1 = (function (){var statearr_24525 = state_24482;
(statearr_24525[(9)] = inst_24425);

(statearr_24525[(20)] = inst_24424);

(statearr_24525[(29)] = inst_24414__$1);

(statearr_24525[(10)] = inst_24423);

(statearr_24525[(30)] = inst_24416);

(statearr_24525[(21)] = inst_24422);

return statearr_24525;
})();
var statearr_24526_24592 = state_24482__$1;
(statearr_24526_24592[(2)] = null);

(statearr_24526_24592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (28))){
var inst_24441 = (state_24482[(25)]);
var inst_24422 = (state_24482[(21)]);
var inst_24441__$1 = cljs.core.seq.call(null,inst_24422);
var state_24482__$1 = (function (){var statearr_24527 = state_24482;
(statearr_24527[(25)] = inst_24441__$1);

return statearr_24527;
})();
if(inst_24441__$1){
var statearr_24528_24593 = state_24482__$1;
(statearr_24528_24593[(1)] = (33));

} else {
var statearr_24529_24594 = state_24482__$1;
(statearr_24529_24594[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (25))){
var inst_24425 = (state_24482[(9)]);
var inst_24424 = (state_24482[(20)]);
var inst_24427 = (inst_24425 < inst_24424);
var inst_24428 = inst_24427;
var state_24482__$1 = state_24482;
if(cljs.core.truth_(inst_24428)){
var statearr_24530_24595 = state_24482__$1;
(statearr_24530_24595[(1)] = (27));

} else {
var statearr_24531_24596 = state_24482__$1;
(statearr_24531_24596[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (34))){
var state_24482__$1 = state_24482;
var statearr_24532_24597 = state_24482__$1;
(statearr_24532_24597[(2)] = null);

(statearr_24532_24597[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (17))){
var state_24482__$1 = state_24482;
var statearr_24533_24598 = state_24482__$1;
(statearr_24533_24598[(2)] = null);

(statearr_24533_24598[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (3))){
var inst_24480 = (state_24482[(2)]);
var state_24482__$1 = state_24482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24482__$1,inst_24480);
} else {
if((state_val_24483 === (12))){
var inst_24409 = (state_24482[(2)]);
var state_24482__$1 = state_24482;
var statearr_24534_24599 = state_24482__$1;
(statearr_24534_24599[(2)] = inst_24409);

(statearr_24534_24599[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (2))){
var state_24482__$1 = state_24482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24482__$1,(4),ch);
} else {
if((state_val_24483 === (23))){
var state_24482__$1 = state_24482;
var statearr_24535_24600 = state_24482__$1;
(statearr_24535_24600[(2)] = null);

(statearr_24535_24600[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (35))){
var inst_24464 = (state_24482[(2)]);
var state_24482__$1 = state_24482;
var statearr_24536_24601 = state_24482__$1;
(statearr_24536_24601[(2)] = inst_24464);

(statearr_24536_24601[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (19))){
var inst_24381 = (state_24482[(7)]);
var inst_24385 = cljs.core.chunk_first.call(null,inst_24381);
var inst_24386 = cljs.core.chunk_rest.call(null,inst_24381);
var inst_24387 = cljs.core.count.call(null,inst_24385);
var inst_24359 = inst_24386;
var inst_24360 = inst_24385;
var inst_24361 = inst_24387;
var inst_24362 = (0);
var state_24482__$1 = (function (){var statearr_24537 = state_24482;
(statearr_24537[(13)] = inst_24360);

(statearr_24537[(15)] = inst_24361);

(statearr_24537[(16)] = inst_24362);

(statearr_24537[(17)] = inst_24359);

return statearr_24537;
})();
var statearr_24538_24602 = state_24482__$1;
(statearr_24538_24602[(2)] = null);

(statearr_24538_24602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (11))){
var inst_24381 = (state_24482[(7)]);
var inst_24359 = (state_24482[(17)]);
var inst_24381__$1 = cljs.core.seq.call(null,inst_24359);
var state_24482__$1 = (function (){var statearr_24539 = state_24482;
(statearr_24539[(7)] = inst_24381__$1);

return statearr_24539;
})();
if(inst_24381__$1){
var statearr_24540_24603 = state_24482__$1;
(statearr_24540_24603[(1)] = (16));

} else {
var statearr_24541_24604 = state_24482__$1;
(statearr_24541_24604[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (9))){
var inst_24411 = (state_24482[(2)]);
var state_24482__$1 = state_24482;
var statearr_24542_24605 = state_24482__$1;
(statearr_24542_24605[(2)] = inst_24411);

(statearr_24542_24605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (5))){
var inst_24357 = cljs.core.deref.call(null,cs);
var inst_24358 = cljs.core.seq.call(null,inst_24357);
var inst_24359 = inst_24358;
var inst_24360 = null;
var inst_24361 = (0);
var inst_24362 = (0);
var state_24482__$1 = (function (){var statearr_24543 = state_24482;
(statearr_24543[(13)] = inst_24360);

(statearr_24543[(15)] = inst_24361);

(statearr_24543[(16)] = inst_24362);

(statearr_24543[(17)] = inst_24359);

return statearr_24543;
})();
var statearr_24544_24606 = state_24482__$1;
(statearr_24544_24606[(2)] = null);

(statearr_24544_24606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (14))){
var state_24482__$1 = state_24482;
var statearr_24545_24607 = state_24482__$1;
(statearr_24545_24607[(2)] = null);

(statearr_24545_24607[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (45))){
var inst_24472 = (state_24482[(2)]);
var state_24482__$1 = state_24482;
var statearr_24546_24608 = state_24482__$1;
(statearr_24546_24608[(2)] = inst_24472);

(statearr_24546_24608[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (26))){
var inst_24414 = (state_24482[(29)]);
var inst_24468 = (state_24482[(2)]);
var inst_24469 = cljs.core.seq.call(null,inst_24414);
var state_24482__$1 = (function (){var statearr_24547 = state_24482;
(statearr_24547[(31)] = inst_24468);

return statearr_24547;
})();
if(inst_24469){
var statearr_24548_24609 = state_24482__$1;
(statearr_24548_24609[(1)] = (42));

} else {
var statearr_24549_24610 = state_24482__$1;
(statearr_24549_24610[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (16))){
var inst_24381 = (state_24482[(7)]);
var inst_24383 = cljs.core.chunked_seq_QMARK_.call(null,inst_24381);
var state_24482__$1 = state_24482;
if(inst_24383){
var statearr_24550_24611 = state_24482__$1;
(statearr_24550_24611[(1)] = (19));

} else {
var statearr_24551_24612 = state_24482__$1;
(statearr_24551_24612[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (38))){
var inst_24461 = (state_24482[(2)]);
var state_24482__$1 = state_24482;
var statearr_24552_24613 = state_24482__$1;
(statearr_24552_24613[(2)] = inst_24461);

(statearr_24552_24613[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (30))){
var state_24482__$1 = state_24482;
var statearr_24553_24614 = state_24482__$1;
(statearr_24553_24614[(2)] = null);

(statearr_24553_24614[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (10))){
var inst_24360 = (state_24482[(13)]);
var inst_24362 = (state_24482[(16)]);
var inst_24370 = cljs.core._nth.call(null,inst_24360,inst_24362);
var inst_24371 = cljs.core.nth.call(null,inst_24370,(0),null);
var inst_24372 = cljs.core.nth.call(null,inst_24370,(1),null);
var state_24482__$1 = (function (){var statearr_24554 = state_24482;
(statearr_24554[(26)] = inst_24371);

return statearr_24554;
})();
if(cljs.core.truth_(inst_24372)){
var statearr_24555_24615 = state_24482__$1;
(statearr_24555_24615[(1)] = (13));

} else {
var statearr_24556_24616 = state_24482__$1;
(statearr_24556_24616[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (18))){
var inst_24407 = (state_24482[(2)]);
var state_24482__$1 = state_24482;
var statearr_24557_24617 = state_24482__$1;
(statearr_24557_24617[(2)] = inst_24407);

(statearr_24557_24617[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (42))){
var state_24482__$1 = state_24482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24482__$1,(45),dchan);
} else {
if((state_val_24483 === (37))){
var inst_24441 = (state_24482[(25)]);
var inst_24450 = (state_24482[(23)]);
var inst_24350 = (state_24482[(11)]);
var inst_24450__$1 = cljs.core.first.call(null,inst_24441);
var inst_24451 = cljs.core.async.put_BANG_.call(null,inst_24450__$1,inst_24350,done);
var state_24482__$1 = (function (){var statearr_24558 = state_24482;
(statearr_24558[(23)] = inst_24450__$1);

return statearr_24558;
})();
if(cljs.core.truth_(inst_24451)){
var statearr_24559_24618 = state_24482__$1;
(statearr_24559_24618[(1)] = (39));

} else {
var statearr_24560_24619 = state_24482__$1;
(statearr_24560_24619[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24483 === (8))){
var inst_24361 = (state_24482[(15)]);
var inst_24362 = (state_24482[(16)]);
var inst_24364 = (inst_24362 < inst_24361);
var inst_24365 = inst_24364;
var state_24482__$1 = state_24482;
if(cljs.core.truth_(inst_24365)){
var statearr_24561_24620 = state_24482__$1;
(statearr_24561_24620[(1)] = (10));

} else {
var statearr_24562_24621 = state_24482__$1;
(statearr_24562_24621[(1)] = (11));

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
});})(c__23748__auto___24567,cs,m,dchan,dctr,done))
;
return ((function (switch__23658__auto__,c__23748__auto___24567,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23659__auto__ = null;
var cljs$core$async$mult_$_state_machine__23659__auto____0 = (function (){
var statearr_24563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24563[(0)] = cljs$core$async$mult_$_state_machine__23659__auto__);

(statearr_24563[(1)] = (1));

return statearr_24563;
});
var cljs$core$async$mult_$_state_machine__23659__auto____1 = (function (state_24482){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_24482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e24564){if((e24564 instanceof Object)){
var ex__23662__auto__ = e24564;
var statearr_24565_24622 = state_24482;
(statearr_24565_24622[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24623 = state_24482;
state_24482 = G__24623;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23659__auto__ = function(state_24482){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23659__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23659__auto____1.call(this,state_24482);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23659__auto____0;
cljs$core$async$mult_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23659__auto____1;
return cljs$core$async$mult_$_state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto___24567,cs,m,dchan,dctr,done))
})();
var state__23750__auto__ = (function (){var statearr_24566 = f__23749__auto__.call(null);
(statearr_24566[(6)] = c__23748__auto___24567);

return statearr_24566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto___24567,cs,m,dchan,dctr,done))
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
var G__24625 = arguments.length;
switch (G__24625) {
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
var len__4499__auto___24637 = arguments.length;
var i__4500__auto___24638 = (0);
while(true){
if((i__4500__auto___24638 < len__4499__auto___24637)){
args__4502__auto__.push((arguments[i__4500__auto___24638]));

var G__24639 = (i__4500__auto___24638 + (1));
i__4500__auto___24638 = G__24639;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24631){
var map__24632 = p__24631;
var map__24632__$1 = ((((!((map__24632 == null)))?(((((map__24632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24632):map__24632);
var opts = map__24632__$1;
var statearr_24634_24640 = state;
(statearr_24634_24640[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__24632,map__24632__$1,opts){
return (function (val){
var statearr_24635_24641 = state;
(statearr_24635_24641[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24632,map__24632__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_24636_24642 = state;
(statearr_24636_24642[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24627){
var G__24628 = cljs.core.first.call(null,seq24627);
var seq24627__$1 = cljs.core.next.call(null,seq24627);
var G__24629 = cljs.core.first.call(null,seq24627__$1);
var seq24627__$2 = cljs.core.next.call(null,seq24627__$1);
var G__24630 = cljs.core.first.call(null,seq24627__$2);
var seq24627__$3 = cljs.core.next.call(null,seq24627__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24628,G__24629,G__24630,seq24627__$3);
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
if(typeof cljs.core.async.t_cljs$core$async24643 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24643 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta24644){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta24644 = meta24644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24645,meta24644__$1){
var self__ = this;
var _24645__$1 = this;
return (new cljs.core.async.t_cljs$core$async24643(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta24644__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24643.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24645){
var self__ = this;
var _24645__$1 = this;
return self__.meta24644;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24643.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24643.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24643.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24643.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24643.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24643.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24643.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24643.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async24643.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta24644","meta24644",1057681363,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24643.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24643.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24643";

cljs.core.async.t_cljs$core$async24643.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24643");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24643.
 */
cljs.core.async.__GT_t_cljs$core$async24643 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24643(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24644){
return (new cljs.core.async.t_cljs$core$async24643(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta24644));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24643(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23748__auto___24807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto___24807,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto___24807,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24747){
var state_val_24748 = (state_24747[(1)]);
if((state_val_24748 === (7))){
var inst_24662 = (state_24747[(2)]);
var state_24747__$1 = state_24747;
var statearr_24749_24808 = state_24747__$1;
(statearr_24749_24808[(2)] = inst_24662);

(statearr_24749_24808[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (20))){
var inst_24674 = (state_24747[(7)]);
var state_24747__$1 = state_24747;
var statearr_24750_24809 = state_24747__$1;
(statearr_24750_24809[(2)] = inst_24674);

(statearr_24750_24809[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (27))){
var state_24747__$1 = state_24747;
var statearr_24751_24810 = state_24747__$1;
(statearr_24751_24810[(2)] = null);

(statearr_24751_24810[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (1))){
var inst_24649 = (state_24747[(8)]);
var inst_24649__$1 = calc_state.call(null);
var inst_24651 = (inst_24649__$1 == null);
var inst_24652 = cljs.core.not.call(null,inst_24651);
var state_24747__$1 = (function (){var statearr_24752 = state_24747;
(statearr_24752[(8)] = inst_24649__$1);

return statearr_24752;
})();
if(inst_24652){
var statearr_24753_24811 = state_24747__$1;
(statearr_24753_24811[(1)] = (2));

} else {
var statearr_24754_24812 = state_24747__$1;
(statearr_24754_24812[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (24))){
var inst_24698 = (state_24747[(9)]);
var inst_24707 = (state_24747[(10)]);
var inst_24721 = (state_24747[(11)]);
var inst_24721__$1 = inst_24698.call(null,inst_24707);
var state_24747__$1 = (function (){var statearr_24755 = state_24747;
(statearr_24755[(11)] = inst_24721__$1);

return statearr_24755;
})();
if(cljs.core.truth_(inst_24721__$1)){
var statearr_24756_24813 = state_24747__$1;
(statearr_24756_24813[(1)] = (29));

} else {
var statearr_24757_24814 = state_24747__$1;
(statearr_24757_24814[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (4))){
var inst_24665 = (state_24747[(2)]);
var state_24747__$1 = state_24747;
if(cljs.core.truth_(inst_24665)){
var statearr_24758_24815 = state_24747__$1;
(statearr_24758_24815[(1)] = (8));

} else {
var statearr_24759_24816 = state_24747__$1;
(statearr_24759_24816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (15))){
var inst_24692 = (state_24747[(2)]);
var state_24747__$1 = state_24747;
if(cljs.core.truth_(inst_24692)){
var statearr_24760_24817 = state_24747__$1;
(statearr_24760_24817[(1)] = (19));

} else {
var statearr_24761_24818 = state_24747__$1;
(statearr_24761_24818[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (21))){
var inst_24697 = (state_24747[(12)]);
var inst_24697__$1 = (state_24747[(2)]);
var inst_24698 = cljs.core.get.call(null,inst_24697__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24699 = cljs.core.get.call(null,inst_24697__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24700 = cljs.core.get.call(null,inst_24697__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24747__$1 = (function (){var statearr_24762 = state_24747;
(statearr_24762[(13)] = inst_24699);

(statearr_24762[(9)] = inst_24698);

(statearr_24762[(12)] = inst_24697__$1);

return statearr_24762;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24747__$1,(22),inst_24700);
} else {
if((state_val_24748 === (31))){
var inst_24729 = (state_24747[(2)]);
var state_24747__$1 = state_24747;
if(cljs.core.truth_(inst_24729)){
var statearr_24763_24819 = state_24747__$1;
(statearr_24763_24819[(1)] = (32));

} else {
var statearr_24764_24820 = state_24747__$1;
(statearr_24764_24820[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (32))){
var inst_24706 = (state_24747[(14)]);
var state_24747__$1 = state_24747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24747__$1,(35),out,inst_24706);
} else {
if((state_val_24748 === (33))){
var inst_24697 = (state_24747[(12)]);
var inst_24674 = inst_24697;
var state_24747__$1 = (function (){var statearr_24765 = state_24747;
(statearr_24765[(7)] = inst_24674);

return statearr_24765;
})();
var statearr_24766_24821 = state_24747__$1;
(statearr_24766_24821[(2)] = null);

(statearr_24766_24821[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (13))){
var inst_24674 = (state_24747[(7)]);
var inst_24681 = inst_24674.cljs$lang$protocol_mask$partition0$;
var inst_24682 = (inst_24681 & (64));
var inst_24683 = inst_24674.cljs$core$ISeq$;
var inst_24684 = (cljs.core.PROTOCOL_SENTINEL === inst_24683);
var inst_24685 = ((inst_24682) || (inst_24684));
var state_24747__$1 = state_24747;
if(cljs.core.truth_(inst_24685)){
var statearr_24767_24822 = state_24747__$1;
(statearr_24767_24822[(1)] = (16));

} else {
var statearr_24768_24823 = state_24747__$1;
(statearr_24768_24823[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (22))){
var inst_24706 = (state_24747[(14)]);
var inst_24707 = (state_24747[(10)]);
var inst_24705 = (state_24747[(2)]);
var inst_24706__$1 = cljs.core.nth.call(null,inst_24705,(0),null);
var inst_24707__$1 = cljs.core.nth.call(null,inst_24705,(1),null);
var inst_24708 = (inst_24706__$1 == null);
var inst_24709 = cljs.core._EQ_.call(null,inst_24707__$1,change);
var inst_24710 = ((inst_24708) || (inst_24709));
var state_24747__$1 = (function (){var statearr_24769 = state_24747;
(statearr_24769[(14)] = inst_24706__$1);

(statearr_24769[(10)] = inst_24707__$1);

return statearr_24769;
})();
if(cljs.core.truth_(inst_24710)){
var statearr_24770_24824 = state_24747__$1;
(statearr_24770_24824[(1)] = (23));

} else {
var statearr_24771_24825 = state_24747__$1;
(statearr_24771_24825[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (36))){
var inst_24697 = (state_24747[(12)]);
var inst_24674 = inst_24697;
var state_24747__$1 = (function (){var statearr_24772 = state_24747;
(statearr_24772[(7)] = inst_24674);

return statearr_24772;
})();
var statearr_24773_24826 = state_24747__$1;
(statearr_24773_24826[(2)] = null);

(statearr_24773_24826[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (29))){
var inst_24721 = (state_24747[(11)]);
var state_24747__$1 = state_24747;
var statearr_24774_24827 = state_24747__$1;
(statearr_24774_24827[(2)] = inst_24721);

(statearr_24774_24827[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (6))){
var state_24747__$1 = state_24747;
var statearr_24775_24828 = state_24747__$1;
(statearr_24775_24828[(2)] = false);

(statearr_24775_24828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (28))){
var inst_24717 = (state_24747[(2)]);
var inst_24718 = calc_state.call(null);
var inst_24674 = inst_24718;
var state_24747__$1 = (function (){var statearr_24776 = state_24747;
(statearr_24776[(15)] = inst_24717);

(statearr_24776[(7)] = inst_24674);

return statearr_24776;
})();
var statearr_24777_24829 = state_24747__$1;
(statearr_24777_24829[(2)] = null);

(statearr_24777_24829[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (25))){
var inst_24743 = (state_24747[(2)]);
var state_24747__$1 = state_24747;
var statearr_24778_24830 = state_24747__$1;
(statearr_24778_24830[(2)] = inst_24743);

(statearr_24778_24830[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (34))){
var inst_24741 = (state_24747[(2)]);
var state_24747__$1 = state_24747;
var statearr_24779_24831 = state_24747__$1;
(statearr_24779_24831[(2)] = inst_24741);

(statearr_24779_24831[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (17))){
var state_24747__$1 = state_24747;
var statearr_24780_24832 = state_24747__$1;
(statearr_24780_24832[(2)] = false);

(statearr_24780_24832[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (3))){
var state_24747__$1 = state_24747;
var statearr_24781_24833 = state_24747__$1;
(statearr_24781_24833[(2)] = false);

(statearr_24781_24833[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (12))){
var inst_24745 = (state_24747[(2)]);
var state_24747__$1 = state_24747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24747__$1,inst_24745);
} else {
if((state_val_24748 === (2))){
var inst_24649 = (state_24747[(8)]);
var inst_24654 = inst_24649.cljs$lang$protocol_mask$partition0$;
var inst_24655 = (inst_24654 & (64));
var inst_24656 = inst_24649.cljs$core$ISeq$;
var inst_24657 = (cljs.core.PROTOCOL_SENTINEL === inst_24656);
var inst_24658 = ((inst_24655) || (inst_24657));
var state_24747__$1 = state_24747;
if(cljs.core.truth_(inst_24658)){
var statearr_24782_24834 = state_24747__$1;
(statearr_24782_24834[(1)] = (5));

} else {
var statearr_24783_24835 = state_24747__$1;
(statearr_24783_24835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (23))){
var inst_24706 = (state_24747[(14)]);
var inst_24712 = (inst_24706 == null);
var state_24747__$1 = state_24747;
if(cljs.core.truth_(inst_24712)){
var statearr_24784_24836 = state_24747__$1;
(statearr_24784_24836[(1)] = (26));

} else {
var statearr_24785_24837 = state_24747__$1;
(statearr_24785_24837[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (35))){
var inst_24732 = (state_24747[(2)]);
var state_24747__$1 = state_24747;
if(cljs.core.truth_(inst_24732)){
var statearr_24786_24838 = state_24747__$1;
(statearr_24786_24838[(1)] = (36));

} else {
var statearr_24787_24839 = state_24747__$1;
(statearr_24787_24839[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (19))){
var inst_24674 = (state_24747[(7)]);
var inst_24694 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24674);
var state_24747__$1 = state_24747;
var statearr_24788_24840 = state_24747__$1;
(statearr_24788_24840[(2)] = inst_24694);

(statearr_24788_24840[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (11))){
var inst_24674 = (state_24747[(7)]);
var inst_24678 = (inst_24674 == null);
var inst_24679 = cljs.core.not.call(null,inst_24678);
var state_24747__$1 = state_24747;
if(inst_24679){
var statearr_24789_24841 = state_24747__$1;
(statearr_24789_24841[(1)] = (13));

} else {
var statearr_24790_24842 = state_24747__$1;
(statearr_24790_24842[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (9))){
var inst_24649 = (state_24747[(8)]);
var state_24747__$1 = state_24747;
var statearr_24791_24843 = state_24747__$1;
(statearr_24791_24843[(2)] = inst_24649);

(statearr_24791_24843[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (5))){
var state_24747__$1 = state_24747;
var statearr_24792_24844 = state_24747__$1;
(statearr_24792_24844[(2)] = true);

(statearr_24792_24844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (14))){
var state_24747__$1 = state_24747;
var statearr_24793_24845 = state_24747__$1;
(statearr_24793_24845[(2)] = false);

(statearr_24793_24845[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (26))){
var inst_24707 = (state_24747[(10)]);
var inst_24714 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24707);
var state_24747__$1 = state_24747;
var statearr_24794_24846 = state_24747__$1;
(statearr_24794_24846[(2)] = inst_24714);

(statearr_24794_24846[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (16))){
var state_24747__$1 = state_24747;
var statearr_24795_24847 = state_24747__$1;
(statearr_24795_24847[(2)] = true);

(statearr_24795_24847[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (38))){
var inst_24737 = (state_24747[(2)]);
var state_24747__$1 = state_24747;
var statearr_24796_24848 = state_24747__$1;
(statearr_24796_24848[(2)] = inst_24737);

(statearr_24796_24848[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (30))){
var inst_24699 = (state_24747[(13)]);
var inst_24698 = (state_24747[(9)]);
var inst_24707 = (state_24747[(10)]);
var inst_24724 = cljs.core.empty_QMARK_.call(null,inst_24698);
var inst_24725 = inst_24699.call(null,inst_24707);
var inst_24726 = cljs.core.not.call(null,inst_24725);
var inst_24727 = ((inst_24724) && (inst_24726));
var state_24747__$1 = state_24747;
var statearr_24797_24849 = state_24747__$1;
(statearr_24797_24849[(2)] = inst_24727);

(statearr_24797_24849[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (10))){
var inst_24649 = (state_24747[(8)]);
var inst_24670 = (state_24747[(2)]);
var inst_24671 = cljs.core.get.call(null,inst_24670,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24672 = cljs.core.get.call(null,inst_24670,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24673 = cljs.core.get.call(null,inst_24670,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24674 = inst_24649;
var state_24747__$1 = (function (){var statearr_24798 = state_24747;
(statearr_24798[(16)] = inst_24672);

(statearr_24798[(17)] = inst_24671);

(statearr_24798[(7)] = inst_24674);

(statearr_24798[(18)] = inst_24673);

return statearr_24798;
})();
var statearr_24799_24850 = state_24747__$1;
(statearr_24799_24850[(2)] = null);

(statearr_24799_24850[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (18))){
var inst_24689 = (state_24747[(2)]);
var state_24747__$1 = state_24747;
var statearr_24800_24851 = state_24747__$1;
(statearr_24800_24851[(2)] = inst_24689);

(statearr_24800_24851[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (37))){
var state_24747__$1 = state_24747;
var statearr_24801_24852 = state_24747__$1;
(statearr_24801_24852[(2)] = null);

(statearr_24801_24852[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24748 === (8))){
var inst_24649 = (state_24747[(8)]);
var inst_24667 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24649);
var state_24747__$1 = state_24747;
var statearr_24802_24853 = state_24747__$1;
(statearr_24802_24853[(2)] = inst_24667);

(statearr_24802_24853[(1)] = (10));


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
});})(c__23748__auto___24807,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23658__auto__,c__23748__auto___24807,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23659__auto__ = null;
var cljs$core$async$mix_$_state_machine__23659__auto____0 = (function (){
var statearr_24803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24803[(0)] = cljs$core$async$mix_$_state_machine__23659__auto__);

(statearr_24803[(1)] = (1));

return statearr_24803;
});
var cljs$core$async$mix_$_state_machine__23659__auto____1 = (function (state_24747){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_24747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e24804){if((e24804 instanceof Object)){
var ex__23662__auto__ = e24804;
var statearr_24805_24854 = state_24747;
(statearr_24805_24854[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24855 = state_24747;
state_24747 = G__24855;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23659__auto__ = function(state_24747){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23659__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23659__auto____1.call(this,state_24747);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23659__auto____0;
cljs$core$async$mix_$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23659__auto____1;
return cljs$core$async$mix_$_state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto___24807,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23750__auto__ = (function (){var statearr_24806 = f__23749__auto__.call(null);
(statearr_24806[(6)] = c__23748__auto___24807);

return statearr_24806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto___24807,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__24857 = arguments.length;
switch (G__24857) {
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
var G__24861 = arguments.length;
switch (G__24861) {
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
return (function (p1__24859_SHARP_){
if(cljs.core.truth_(p1__24859_SHARP_.call(null,topic))){
return p1__24859_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24859_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24862 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24862 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24863){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24863 = meta24863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24864,meta24863__$1){
var self__ = this;
var _24864__$1 = this;
return (new cljs.core.async.t_cljs$core$async24862(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24863__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24862.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24864){
var self__ = this;
var _24864__$1 = this;
return self__.meta24863;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24862.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24862.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24862.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24862.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24862.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async24862.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24862.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24862.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24863","meta24863",-1746193489,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24862.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24862";

cljs.core.async.t_cljs$core$async24862.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24862");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24862.
 */
cljs.core.async.__GT_t_cljs$core$async24862 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24862(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24863){
return (new cljs.core.async.t_cljs$core$async24862(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24863));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24862(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23748__auto___24982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto___24982,mults,ensure_mult,p){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto___24982,mults,ensure_mult,p){
return (function (state_24936){
var state_val_24937 = (state_24936[(1)]);
if((state_val_24937 === (7))){
var inst_24932 = (state_24936[(2)]);
var state_24936__$1 = state_24936;
var statearr_24938_24983 = state_24936__$1;
(statearr_24938_24983[(2)] = inst_24932);

(statearr_24938_24983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (20))){
var state_24936__$1 = state_24936;
var statearr_24939_24984 = state_24936__$1;
(statearr_24939_24984[(2)] = null);

(statearr_24939_24984[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (1))){
var state_24936__$1 = state_24936;
var statearr_24940_24985 = state_24936__$1;
(statearr_24940_24985[(2)] = null);

(statearr_24940_24985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (24))){
var inst_24915 = (state_24936[(7)]);
var inst_24924 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24915);
var state_24936__$1 = state_24936;
var statearr_24941_24986 = state_24936__$1;
(statearr_24941_24986[(2)] = inst_24924);

(statearr_24941_24986[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (4))){
var inst_24867 = (state_24936[(8)]);
var inst_24867__$1 = (state_24936[(2)]);
var inst_24868 = (inst_24867__$1 == null);
var state_24936__$1 = (function (){var statearr_24942 = state_24936;
(statearr_24942[(8)] = inst_24867__$1);

return statearr_24942;
})();
if(cljs.core.truth_(inst_24868)){
var statearr_24943_24987 = state_24936__$1;
(statearr_24943_24987[(1)] = (5));

} else {
var statearr_24944_24988 = state_24936__$1;
(statearr_24944_24988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (15))){
var inst_24909 = (state_24936[(2)]);
var state_24936__$1 = state_24936;
var statearr_24945_24989 = state_24936__$1;
(statearr_24945_24989[(2)] = inst_24909);

(statearr_24945_24989[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (21))){
var inst_24929 = (state_24936[(2)]);
var state_24936__$1 = (function (){var statearr_24946 = state_24936;
(statearr_24946[(9)] = inst_24929);

return statearr_24946;
})();
var statearr_24947_24990 = state_24936__$1;
(statearr_24947_24990[(2)] = null);

(statearr_24947_24990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (13))){
var inst_24891 = (state_24936[(10)]);
var inst_24893 = cljs.core.chunked_seq_QMARK_.call(null,inst_24891);
var state_24936__$1 = state_24936;
if(inst_24893){
var statearr_24948_24991 = state_24936__$1;
(statearr_24948_24991[(1)] = (16));

} else {
var statearr_24949_24992 = state_24936__$1;
(statearr_24949_24992[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (22))){
var inst_24921 = (state_24936[(2)]);
var state_24936__$1 = state_24936;
if(cljs.core.truth_(inst_24921)){
var statearr_24950_24993 = state_24936__$1;
(statearr_24950_24993[(1)] = (23));

} else {
var statearr_24951_24994 = state_24936__$1;
(statearr_24951_24994[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (6))){
var inst_24867 = (state_24936[(8)]);
var inst_24915 = (state_24936[(7)]);
var inst_24917 = (state_24936[(11)]);
var inst_24915__$1 = topic_fn.call(null,inst_24867);
var inst_24916 = cljs.core.deref.call(null,mults);
var inst_24917__$1 = cljs.core.get.call(null,inst_24916,inst_24915__$1);
var state_24936__$1 = (function (){var statearr_24952 = state_24936;
(statearr_24952[(7)] = inst_24915__$1);

(statearr_24952[(11)] = inst_24917__$1);

return statearr_24952;
})();
if(cljs.core.truth_(inst_24917__$1)){
var statearr_24953_24995 = state_24936__$1;
(statearr_24953_24995[(1)] = (19));

} else {
var statearr_24954_24996 = state_24936__$1;
(statearr_24954_24996[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (25))){
var inst_24926 = (state_24936[(2)]);
var state_24936__$1 = state_24936;
var statearr_24955_24997 = state_24936__$1;
(statearr_24955_24997[(2)] = inst_24926);

(statearr_24955_24997[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (17))){
var inst_24891 = (state_24936[(10)]);
var inst_24900 = cljs.core.first.call(null,inst_24891);
var inst_24901 = cljs.core.async.muxch_STAR_.call(null,inst_24900);
var inst_24902 = cljs.core.async.close_BANG_.call(null,inst_24901);
var inst_24903 = cljs.core.next.call(null,inst_24891);
var inst_24877 = inst_24903;
var inst_24878 = null;
var inst_24879 = (0);
var inst_24880 = (0);
var state_24936__$1 = (function (){var statearr_24956 = state_24936;
(statearr_24956[(12)] = inst_24879);

(statearr_24956[(13)] = inst_24880);

(statearr_24956[(14)] = inst_24878);

(statearr_24956[(15)] = inst_24902);

(statearr_24956[(16)] = inst_24877);

return statearr_24956;
})();
var statearr_24957_24998 = state_24936__$1;
(statearr_24957_24998[(2)] = null);

(statearr_24957_24998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (3))){
var inst_24934 = (state_24936[(2)]);
var state_24936__$1 = state_24936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24936__$1,inst_24934);
} else {
if((state_val_24937 === (12))){
var inst_24911 = (state_24936[(2)]);
var state_24936__$1 = state_24936;
var statearr_24958_24999 = state_24936__$1;
(statearr_24958_24999[(2)] = inst_24911);

(statearr_24958_24999[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (2))){
var state_24936__$1 = state_24936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24936__$1,(4),ch);
} else {
if((state_val_24937 === (23))){
var state_24936__$1 = state_24936;
var statearr_24959_25000 = state_24936__$1;
(statearr_24959_25000[(2)] = null);

(statearr_24959_25000[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (19))){
var inst_24867 = (state_24936[(8)]);
var inst_24917 = (state_24936[(11)]);
var inst_24919 = cljs.core.async.muxch_STAR_.call(null,inst_24917);
var state_24936__$1 = state_24936;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24936__$1,(22),inst_24919,inst_24867);
} else {
if((state_val_24937 === (11))){
var inst_24891 = (state_24936[(10)]);
var inst_24877 = (state_24936[(16)]);
var inst_24891__$1 = cljs.core.seq.call(null,inst_24877);
var state_24936__$1 = (function (){var statearr_24960 = state_24936;
(statearr_24960[(10)] = inst_24891__$1);

return statearr_24960;
})();
if(inst_24891__$1){
var statearr_24961_25001 = state_24936__$1;
(statearr_24961_25001[(1)] = (13));

} else {
var statearr_24962_25002 = state_24936__$1;
(statearr_24962_25002[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (9))){
var inst_24913 = (state_24936[(2)]);
var state_24936__$1 = state_24936;
var statearr_24963_25003 = state_24936__$1;
(statearr_24963_25003[(2)] = inst_24913);

(statearr_24963_25003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (5))){
var inst_24874 = cljs.core.deref.call(null,mults);
var inst_24875 = cljs.core.vals.call(null,inst_24874);
var inst_24876 = cljs.core.seq.call(null,inst_24875);
var inst_24877 = inst_24876;
var inst_24878 = null;
var inst_24879 = (0);
var inst_24880 = (0);
var state_24936__$1 = (function (){var statearr_24964 = state_24936;
(statearr_24964[(12)] = inst_24879);

(statearr_24964[(13)] = inst_24880);

(statearr_24964[(14)] = inst_24878);

(statearr_24964[(16)] = inst_24877);

return statearr_24964;
})();
var statearr_24965_25004 = state_24936__$1;
(statearr_24965_25004[(2)] = null);

(statearr_24965_25004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (14))){
var state_24936__$1 = state_24936;
var statearr_24969_25005 = state_24936__$1;
(statearr_24969_25005[(2)] = null);

(statearr_24969_25005[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (16))){
var inst_24891 = (state_24936[(10)]);
var inst_24895 = cljs.core.chunk_first.call(null,inst_24891);
var inst_24896 = cljs.core.chunk_rest.call(null,inst_24891);
var inst_24897 = cljs.core.count.call(null,inst_24895);
var inst_24877 = inst_24896;
var inst_24878 = inst_24895;
var inst_24879 = inst_24897;
var inst_24880 = (0);
var state_24936__$1 = (function (){var statearr_24970 = state_24936;
(statearr_24970[(12)] = inst_24879);

(statearr_24970[(13)] = inst_24880);

(statearr_24970[(14)] = inst_24878);

(statearr_24970[(16)] = inst_24877);

return statearr_24970;
})();
var statearr_24971_25006 = state_24936__$1;
(statearr_24971_25006[(2)] = null);

(statearr_24971_25006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (10))){
var inst_24879 = (state_24936[(12)]);
var inst_24880 = (state_24936[(13)]);
var inst_24878 = (state_24936[(14)]);
var inst_24877 = (state_24936[(16)]);
var inst_24885 = cljs.core._nth.call(null,inst_24878,inst_24880);
var inst_24886 = cljs.core.async.muxch_STAR_.call(null,inst_24885);
var inst_24887 = cljs.core.async.close_BANG_.call(null,inst_24886);
var inst_24888 = (inst_24880 + (1));
var tmp24966 = inst_24879;
var tmp24967 = inst_24878;
var tmp24968 = inst_24877;
var inst_24877__$1 = tmp24968;
var inst_24878__$1 = tmp24967;
var inst_24879__$1 = tmp24966;
var inst_24880__$1 = inst_24888;
var state_24936__$1 = (function (){var statearr_24972 = state_24936;
(statearr_24972[(17)] = inst_24887);

(statearr_24972[(12)] = inst_24879__$1);

(statearr_24972[(13)] = inst_24880__$1);

(statearr_24972[(14)] = inst_24878__$1);

(statearr_24972[(16)] = inst_24877__$1);

return statearr_24972;
})();
var statearr_24973_25007 = state_24936__$1;
(statearr_24973_25007[(2)] = null);

(statearr_24973_25007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (18))){
var inst_24906 = (state_24936[(2)]);
var state_24936__$1 = state_24936;
var statearr_24974_25008 = state_24936__$1;
(statearr_24974_25008[(2)] = inst_24906);

(statearr_24974_25008[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24937 === (8))){
var inst_24879 = (state_24936[(12)]);
var inst_24880 = (state_24936[(13)]);
var inst_24882 = (inst_24880 < inst_24879);
var inst_24883 = inst_24882;
var state_24936__$1 = state_24936;
if(cljs.core.truth_(inst_24883)){
var statearr_24975_25009 = state_24936__$1;
(statearr_24975_25009[(1)] = (10));

} else {
var statearr_24976_25010 = state_24936__$1;
(statearr_24976_25010[(1)] = (11));

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
});})(c__23748__auto___24982,mults,ensure_mult,p))
;
return ((function (switch__23658__auto__,c__23748__auto___24982,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23659__auto__ = null;
var cljs$core$async$state_machine__23659__auto____0 = (function (){
var statearr_24977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24977[(0)] = cljs$core$async$state_machine__23659__auto__);

(statearr_24977[(1)] = (1));

return statearr_24977;
});
var cljs$core$async$state_machine__23659__auto____1 = (function (state_24936){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_24936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e24978){if((e24978 instanceof Object)){
var ex__23662__auto__ = e24978;
var statearr_24979_25011 = state_24936;
(statearr_24979_25011[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25012 = state_24936;
state_24936 = G__25012;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
cljs$core$async$state_machine__23659__auto__ = function(state_24936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23659__auto____1.call(this,state_24936);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23659__auto____0;
cljs$core$async$state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23659__auto____1;
return cljs$core$async$state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto___24982,mults,ensure_mult,p))
})();
var state__23750__auto__ = (function (){var statearr_24980 = f__23749__auto__.call(null);
(statearr_24980[(6)] = c__23748__auto___24982);

return statearr_24980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto___24982,mults,ensure_mult,p))
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
var G__25014 = arguments.length;
switch (G__25014) {
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
var G__25017 = arguments.length;
switch (G__25017) {
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
var G__25020 = arguments.length;
switch (G__25020) {
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
var c__23748__auto___25087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto___25087,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto___25087,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25059){
var state_val_25060 = (state_25059[(1)]);
if((state_val_25060 === (7))){
var state_25059__$1 = state_25059;
var statearr_25061_25088 = state_25059__$1;
(statearr_25061_25088[(2)] = null);

(statearr_25061_25088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25060 === (1))){
var state_25059__$1 = state_25059;
var statearr_25062_25089 = state_25059__$1;
(statearr_25062_25089[(2)] = null);

(statearr_25062_25089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25060 === (4))){
var inst_25023 = (state_25059[(7)]);
var inst_25025 = (inst_25023 < cnt);
var state_25059__$1 = state_25059;
if(cljs.core.truth_(inst_25025)){
var statearr_25063_25090 = state_25059__$1;
(statearr_25063_25090[(1)] = (6));

} else {
var statearr_25064_25091 = state_25059__$1;
(statearr_25064_25091[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25060 === (15))){
var inst_25055 = (state_25059[(2)]);
var state_25059__$1 = state_25059;
var statearr_25065_25092 = state_25059__$1;
(statearr_25065_25092[(2)] = inst_25055);

(statearr_25065_25092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25060 === (13))){
var inst_25048 = cljs.core.async.close_BANG_.call(null,out);
var state_25059__$1 = state_25059;
var statearr_25066_25093 = state_25059__$1;
(statearr_25066_25093[(2)] = inst_25048);

(statearr_25066_25093[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25060 === (6))){
var state_25059__$1 = state_25059;
var statearr_25067_25094 = state_25059__$1;
(statearr_25067_25094[(2)] = null);

(statearr_25067_25094[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25060 === (3))){
var inst_25057 = (state_25059[(2)]);
var state_25059__$1 = state_25059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25059__$1,inst_25057);
} else {
if((state_val_25060 === (12))){
var inst_25045 = (state_25059[(8)]);
var inst_25045__$1 = (state_25059[(2)]);
var inst_25046 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25045__$1);
var state_25059__$1 = (function (){var statearr_25068 = state_25059;
(statearr_25068[(8)] = inst_25045__$1);

return statearr_25068;
})();
if(cljs.core.truth_(inst_25046)){
var statearr_25069_25095 = state_25059__$1;
(statearr_25069_25095[(1)] = (13));

} else {
var statearr_25070_25096 = state_25059__$1;
(statearr_25070_25096[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25060 === (2))){
var inst_25022 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25023 = (0);
var state_25059__$1 = (function (){var statearr_25071 = state_25059;
(statearr_25071[(9)] = inst_25022);

(statearr_25071[(7)] = inst_25023);

return statearr_25071;
})();
var statearr_25072_25097 = state_25059__$1;
(statearr_25072_25097[(2)] = null);

(statearr_25072_25097[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25060 === (11))){
var inst_25023 = (state_25059[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25059,(10),Object,null,(9));
var inst_25032 = chs__$1.call(null,inst_25023);
var inst_25033 = done.call(null,inst_25023);
var inst_25034 = cljs.core.async.take_BANG_.call(null,inst_25032,inst_25033);
var state_25059__$1 = state_25059;
var statearr_25073_25098 = state_25059__$1;
(statearr_25073_25098[(2)] = inst_25034);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25059__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25060 === (9))){
var inst_25023 = (state_25059[(7)]);
var inst_25036 = (state_25059[(2)]);
var inst_25037 = (inst_25023 + (1));
var inst_25023__$1 = inst_25037;
var state_25059__$1 = (function (){var statearr_25074 = state_25059;
(statearr_25074[(7)] = inst_25023__$1);

(statearr_25074[(10)] = inst_25036);

return statearr_25074;
})();
var statearr_25075_25099 = state_25059__$1;
(statearr_25075_25099[(2)] = null);

(statearr_25075_25099[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25060 === (5))){
var inst_25043 = (state_25059[(2)]);
var state_25059__$1 = (function (){var statearr_25076 = state_25059;
(statearr_25076[(11)] = inst_25043);

return statearr_25076;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25059__$1,(12),dchan);
} else {
if((state_val_25060 === (14))){
var inst_25045 = (state_25059[(8)]);
var inst_25050 = cljs.core.apply.call(null,f,inst_25045);
var state_25059__$1 = state_25059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25059__$1,(16),out,inst_25050);
} else {
if((state_val_25060 === (16))){
var inst_25052 = (state_25059[(2)]);
var state_25059__$1 = (function (){var statearr_25077 = state_25059;
(statearr_25077[(12)] = inst_25052);

return statearr_25077;
})();
var statearr_25078_25100 = state_25059__$1;
(statearr_25078_25100[(2)] = null);

(statearr_25078_25100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25060 === (10))){
var inst_25027 = (state_25059[(2)]);
var inst_25028 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25059__$1 = (function (){var statearr_25079 = state_25059;
(statearr_25079[(13)] = inst_25027);

return statearr_25079;
})();
var statearr_25080_25101 = state_25059__$1;
(statearr_25080_25101[(2)] = inst_25028);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25059__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25060 === (8))){
var inst_25041 = (state_25059[(2)]);
var state_25059__$1 = state_25059;
var statearr_25081_25102 = state_25059__$1;
(statearr_25081_25102[(2)] = inst_25041);

(statearr_25081_25102[(1)] = (5));


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
});})(c__23748__auto___25087,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23658__auto__,c__23748__auto___25087,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23659__auto__ = null;
var cljs$core$async$state_machine__23659__auto____0 = (function (){
var statearr_25082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25082[(0)] = cljs$core$async$state_machine__23659__auto__);

(statearr_25082[(1)] = (1));

return statearr_25082;
});
var cljs$core$async$state_machine__23659__auto____1 = (function (state_25059){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_25059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e25083){if((e25083 instanceof Object)){
var ex__23662__auto__ = e25083;
var statearr_25084_25103 = state_25059;
(statearr_25084_25103[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25104 = state_25059;
state_25059 = G__25104;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
cljs$core$async$state_machine__23659__auto__ = function(state_25059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23659__auto____1.call(this,state_25059);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23659__auto____0;
cljs$core$async$state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23659__auto____1;
return cljs$core$async$state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto___25087,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23750__auto__ = (function (){var statearr_25085 = f__23749__auto__.call(null);
(statearr_25085[(6)] = c__23748__auto___25087);

return statearr_25085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto___25087,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__25107 = arguments.length;
switch (G__25107) {
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
var c__23748__auto___25161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto___25161,out){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto___25161,out){
return (function (state_25139){
var state_val_25140 = (state_25139[(1)]);
if((state_val_25140 === (7))){
var inst_25118 = (state_25139[(7)]);
var inst_25119 = (state_25139[(8)]);
var inst_25118__$1 = (state_25139[(2)]);
var inst_25119__$1 = cljs.core.nth.call(null,inst_25118__$1,(0),null);
var inst_25120 = cljs.core.nth.call(null,inst_25118__$1,(1),null);
var inst_25121 = (inst_25119__$1 == null);
var state_25139__$1 = (function (){var statearr_25141 = state_25139;
(statearr_25141[(7)] = inst_25118__$1);

(statearr_25141[(8)] = inst_25119__$1);

(statearr_25141[(9)] = inst_25120);

return statearr_25141;
})();
if(cljs.core.truth_(inst_25121)){
var statearr_25142_25162 = state_25139__$1;
(statearr_25142_25162[(1)] = (8));

} else {
var statearr_25143_25163 = state_25139__$1;
(statearr_25143_25163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (1))){
var inst_25108 = cljs.core.vec.call(null,chs);
var inst_25109 = inst_25108;
var state_25139__$1 = (function (){var statearr_25144 = state_25139;
(statearr_25144[(10)] = inst_25109);

return statearr_25144;
})();
var statearr_25145_25164 = state_25139__$1;
(statearr_25145_25164[(2)] = null);

(statearr_25145_25164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (4))){
var inst_25109 = (state_25139[(10)]);
var state_25139__$1 = state_25139;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25139__$1,(7),inst_25109);
} else {
if((state_val_25140 === (6))){
var inst_25135 = (state_25139[(2)]);
var state_25139__$1 = state_25139;
var statearr_25146_25165 = state_25139__$1;
(statearr_25146_25165[(2)] = inst_25135);

(statearr_25146_25165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (3))){
var inst_25137 = (state_25139[(2)]);
var state_25139__$1 = state_25139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25139__$1,inst_25137);
} else {
if((state_val_25140 === (2))){
var inst_25109 = (state_25139[(10)]);
var inst_25111 = cljs.core.count.call(null,inst_25109);
var inst_25112 = (inst_25111 > (0));
var state_25139__$1 = state_25139;
if(cljs.core.truth_(inst_25112)){
var statearr_25148_25166 = state_25139__$1;
(statearr_25148_25166[(1)] = (4));

} else {
var statearr_25149_25167 = state_25139__$1;
(statearr_25149_25167[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (11))){
var inst_25109 = (state_25139[(10)]);
var inst_25128 = (state_25139[(2)]);
var tmp25147 = inst_25109;
var inst_25109__$1 = tmp25147;
var state_25139__$1 = (function (){var statearr_25150 = state_25139;
(statearr_25150[(11)] = inst_25128);

(statearr_25150[(10)] = inst_25109__$1);

return statearr_25150;
})();
var statearr_25151_25168 = state_25139__$1;
(statearr_25151_25168[(2)] = null);

(statearr_25151_25168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (9))){
var inst_25119 = (state_25139[(8)]);
var state_25139__$1 = state_25139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25139__$1,(11),out,inst_25119);
} else {
if((state_val_25140 === (5))){
var inst_25133 = cljs.core.async.close_BANG_.call(null,out);
var state_25139__$1 = state_25139;
var statearr_25152_25169 = state_25139__$1;
(statearr_25152_25169[(2)] = inst_25133);

(statearr_25152_25169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (10))){
var inst_25131 = (state_25139[(2)]);
var state_25139__$1 = state_25139;
var statearr_25153_25170 = state_25139__$1;
(statearr_25153_25170[(2)] = inst_25131);

(statearr_25153_25170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25140 === (8))){
var inst_25118 = (state_25139[(7)]);
var inst_25119 = (state_25139[(8)]);
var inst_25109 = (state_25139[(10)]);
var inst_25120 = (state_25139[(9)]);
var inst_25123 = (function (){var cs = inst_25109;
var vec__25114 = inst_25118;
var v = inst_25119;
var c = inst_25120;
return ((function (cs,vec__25114,v,c,inst_25118,inst_25119,inst_25109,inst_25120,state_val_25140,c__23748__auto___25161,out){
return (function (p1__25105_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25105_SHARP_);
});
;})(cs,vec__25114,v,c,inst_25118,inst_25119,inst_25109,inst_25120,state_val_25140,c__23748__auto___25161,out))
})();
var inst_25124 = cljs.core.filterv.call(null,inst_25123,inst_25109);
var inst_25109__$1 = inst_25124;
var state_25139__$1 = (function (){var statearr_25154 = state_25139;
(statearr_25154[(10)] = inst_25109__$1);

return statearr_25154;
})();
var statearr_25155_25171 = state_25139__$1;
(statearr_25155_25171[(2)] = null);

(statearr_25155_25171[(1)] = (2));


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
});})(c__23748__auto___25161,out))
;
return ((function (switch__23658__auto__,c__23748__auto___25161,out){
return (function() {
var cljs$core$async$state_machine__23659__auto__ = null;
var cljs$core$async$state_machine__23659__auto____0 = (function (){
var statearr_25156 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25156[(0)] = cljs$core$async$state_machine__23659__auto__);

(statearr_25156[(1)] = (1));

return statearr_25156;
});
var cljs$core$async$state_machine__23659__auto____1 = (function (state_25139){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_25139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e25157){if((e25157 instanceof Object)){
var ex__23662__auto__ = e25157;
var statearr_25158_25172 = state_25139;
(statearr_25158_25172[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25173 = state_25139;
state_25139 = G__25173;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
cljs$core$async$state_machine__23659__auto__ = function(state_25139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23659__auto____1.call(this,state_25139);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23659__auto____0;
cljs$core$async$state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23659__auto____1;
return cljs$core$async$state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto___25161,out))
})();
var state__23750__auto__ = (function (){var statearr_25159 = f__23749__auto__.call(null);
(statearr_25159[(6)] = c__23748__auto___25161);

return statearr_25159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto___25161,out))
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
var G__25175 = arguments.length;
switch (G__25175) {
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
var c__23748__auto___25220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto___25220,out){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto___25220,out){
return (function (state_25199){
var state_val_25200 = (state_25199[(1)]);
if((state_val_25200 === (7))){
var inst_25181 = (state_25199[(7)]);
var inst_25181__$1 = (state_25199[(2)]);
var inst_25182 = (inst_25181__$1 == null);
var inst_25183 = cljs.core.not.call(null,inst_25182);
var state_25199__$1 = (function (){var statearr_25201 = state_25199;
(statearr_25201[(7)] = inst_25181__$1);

return statearr_25201;
})();
if(inst_25183){
var statearr_25202_25221 = state_25199__$1;
(statearr_25202_25221[(1)] = (8));

} else {
var statearr_25203_25222 = state_25199__$1;
(statearr_25203_25222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25200 === (1))){
var inst_25176 = (0);
var state_25199__$1 = (function (){var statearr_25204 = state_25199;
(statearr_25204[(8)] = inst_25176);

return statearr_25204;
})();
var statearr_25205_25223 = state_25199__$1;
(statearr_25205_25223[(2)] = null);

(statearr_25205_25223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25200 === (4))){
var state_25199__$1 = state_25199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25199__$1,(7),ch);
} else {
if((state_val_25200 === (6))){
var inst_25194 = (state_25199[(2)]);
var state_25199__$1 = state_25199;
var statearr_25206_25224 = state_25199__$1;
(statearr_25206_25224[(2)] = inst_25194);

(statearr_25206_25224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25200 === (3))){
var inst_25196 = (state_25199[(2)]);
var inst_25197 = cljs.core.async.close_BANG_.call(null,out);
var state_25199__$1 = (function (){var statearr_25207 = state_25199;
(statearr_25207[(9)] = inst_25196);

return statearr_25207;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25199__$1,inst_25197);
} else {
if((state_val_25200 === (2))){
var inst_25176 = (state_25199[(8)]);
var inst_25178 = (inst_25176 < n);
var state_25199__$1 = state_25199;
if(cljs.core.truth_(inst_25178)){
var statearr_25208_25225 = state_25199__$1;
(statearr_25208_25225[(1)] = (4));

} else {
var statearr_25209_25226 = state_25199__$1;
(statearr_25209_25226[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25200 === (11))){
var inst_25176 = (state_25199[(8)]);
var inst_25186 = (state_25199[(2)]);
var inst_25187 = (inst_25176 + (1));
var inst_25176__$1 = inst_25187;
var state_25199__$1 = (function (){var statearr_25210 = state_25199;
(statearr_25210[(10)] = inst_25186);

(statearr_25210[(8)] = inst_25176__$1);

return statearr_25210;
})();
var statearr_25211_25227 = state_25199__$1;
(statearr_25211_25227[(2)] = null);

(statearr_25211_25227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25200 === (9))){
var state_25199__$1 = state_25199;
var statearr_25212_25228 = state_25199__$1;
(statearr_25212_25228[(2)] = null);

(statearr_25212_25228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25200 === (5))){
var state_25199__$1 = state_25199;
var statearr_25213_25229 = state_25199__$1;
(statearr_25213_25229[(2)] = null);

(statearr_25213_25229[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25200 === (10))){
var inst_25191 = (state_25199[(2)]);
var state_25199__$1 = state_25199;
var statearr_25214_25230 = state_25199__$1;
(statearr_25214_25230[(2)] = inst_25191);

(statearr_25214_25230[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25200 === (8))){
var inst_25181 = (state_25199[(7)]);
var state_25199__$1 = state_25199;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25199__$1,(11),out,inst_25181);
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
});})(c__23748__auto___25220,out))
;
return ((function (switch__23658__auto__,c__23748__auto___25220,out){
return (function() {
var cljs$core$async$state_machine__23659__auto__ = null;
var cljs$core$async$state_machine__23659__auto____0 = (function (){
var statearr_25215 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25215[(0)] = cljs$core$async$state_machine__23659__auto__);

(statearr_25215[(1)] = (1));

return statearr_25215;
});
var cljs$core$async$state_machine__23659__auto____1 = (function (state_25199){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_25199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e25216){if((e25216 instanceof Object)){
var ex__23662__auto__ = e25216;
var statearr_25217_25231 = state_25199;
(statearr_25217_25231[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25232 = state_25199;
state_25199 = G__25232;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
cljs$core$async$state_machine__23659__auto__ = function(state_25199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23659__auto____1.call(this,state_25199);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23659__auto____0;
cljs$core$async$state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23659__auto____1;
return cljs$core$async$state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto___25220,out))
})();
var state__23750__auto__ = (function (){var statearr_25218 = f__23749__auto__.call(null);
(statearr_25218[(6)] = c__23748__auto___25220);

return statearr_25218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto___25220,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25234 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25234 = (function (f,ch,meta25235){
this.f = f;
this.ch = ch;
this.meta25235 = meta25235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25236,meta25235__$1){
var self__ = this;
var _25236__$1 = this;
return (new cljs.core.async.t_cljs$core$async25234(self__.f,self__.ch,meta25235__$1));
});

cljs.core.async.t_cljs$core$async25234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25236){
var self__ = this;
var _25236__$1 = this;
return self__.meta25235;
});

cljs.core.async.t_cljs$core$async25234.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25234.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25234.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25234.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25234.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25237 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25237 = (function (f,ch,meta25235,_,fn1,meta25238){
this.f = f;
this.ch = ch;
this.meta25235 = meta25235;
this._ = _;
this.fn1 = fn1;
this.meta25238 = meta25238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25239,meta25238__$1){
var self__ = this;
var _25239__$1 = this;
return (new cljs.core.async.t_cljs$core$async25237(self__.f,self__.ch,self__.meta25235,self__._,self__.fn1,meta25238__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25237.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25239){
var self__ = this;
var _25239__$1 = this;
return self__.meta25238;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25237.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25237.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25237.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25237.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25233_SHARP_){
return f1.call(null,(((p1__25233_SHARP_ == null))?null:self__.f.call(null,p1__25233_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25237.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25235","meta25235",825113737,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25234","cljs.core.async/t_cljs$core$async25234",-493564795,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25238","meta25238",680613111,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25237.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25237";

cljs.core.async.t_cljs$core$async25237.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25237");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25237.
 */
cljs.core.async.__GT_t_cljs$core$async25237 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25237(f__$1,ch__$1,meta25235__$1,___$2,fn1__$1,meta25238){
return (new cljs.core.async.t_cljs$core$async25237(f__$1,ch__$1,meta25235__$1,___$2,fn1__$1,meta25238));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25237(self__.f,self__.ch,self__.meta25235,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async25234.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25234.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25234.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25235","meta25235",825113737,null)], null);
});

cljs.core.async.t_cljs$core$async25234.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25234.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25234";

cljs.core.async.t_cljs$core$async25234.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25234");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25234.
 */
cljs.core.async.__GT_t_cljs$core$async25234 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25234(f__$1,ch__$1,meta25235){
return (new cljs.core.async.t_cljs$core$async25234(f__$1,ch__$1,meta25235));
});

}

return (new cljs.core.async.t_cljs$core$async25234(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25240 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25240 = (function (f,ch,meta25241){
this.f = f;
this.ch = ch;
this.meta25241 = meta25241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25242,meta25241__$1){
var self__ = this;
var _25242__$1 = this;
return (new cljs.core.async.t_cljs$core$async25240(self__.f,self__.ch,meta25241__$1));
});

cljs.core.async.t_cljs$core$async25240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25242){
var self__ = this;
var _25242__$1 = this;
return self__.meta25241;
});

cljs.core.async.t_cljs$core$async25240.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25240.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25240.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25240.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25240.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25240.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25241","meta25241",966199587,null)], null);
});

cljs.core.async.t_cljs$core$async25240.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25240";

cljs.core.async.t_cljs$core$async25240.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25240");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25240.
 */
cljs.core.async.__GT_t_cljs$core$async25240 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25240(f__$1,ch__$1,meta25241){
return (new cljs.core.async.t_cljs$core$async25240(f__$1,ch__$1,meta25241));
});

}

return (new cljs.core.async.t_cljs$core$async25240(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25243 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25243 = (function (p,ch,meta25244){
this.p = p;
this.ch = ch;
this.meta25244 = meta25244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25245,meta25244__$1){
var self__ = this;
var _25245__$1 = this;
return (new cljs.core.async.t_cljs$core$async25243(self__.p,self__.ch,meta25244__$1));
});

cljs.core.async.t_cljs$core$async25243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25245){
var self__ = this;
var _25245__$1 = this;
return self__.meta25244;
});

cljs.core.async.t_cljs$core$async25243.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25243.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25243.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25243.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25243.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25243.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25243.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25243.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25244","meta25244",-1286275647,null)], null);
});

cljs.core.async.t_cljs$core$async25243.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25243.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25243";

cljs.core.async.t_cljs$core$async25243.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25243");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25243.
 */
cljs.core.async.__GT_t_cljs$core$async25243 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25243(p__$1,ch__$1,meta25244){
return (new cljs.core.async.t_cljs$core$async25243(p__$1,ch__$1,meta25244));
});

}

return (new cljs.core.async.t_cljs$core$async25243(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25247 = arguments.length;
switch (G__25247) {
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
var c__23748__auto___25287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto___25287,out){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto___25287,out){
return (function (state_25268){
var state_val_25269 = (state_25268[(1)]);
if((state_val_25269 === (7))){
var inst_25264 = (state_25268[(2)]);
var state_25268__$1 = state_25268;
var statearr_25270_25288 = state_25268__$1;
(statearr_25270_25288[(2)] = inst_25264);

(statearr_25270_25288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25269 === (1))){
var state_25268__$1 = state_25268;
var statearr_25271_25289 = state_25268__$1;
(statearr_25271_25289[(2)] = null);

(statearr_25271_25289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25269 === (4))){
var inst_25250 = (state_25268[(7)]);
var inst_25250__$1 = (state_25268[(2)]);
var inst_25251 = (inst_25250__$1 == null);
var state_25268__$1 = (function (){var statearr_25272 = state_25268;
(statearr_25272[(7)] = inst_25250__$1);

return statearr_25272;
})();
if(cljs.core.truth_(inst_25251)){
var statearr_25273_25290 = state_25268__$1;
(statearr_25273_25290[(1)] = (5));

} else {
var statearr_25274_25291 = state_25268__$1;
(statearr_25274_25291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25269 === (6))){
var inst_25250 = (state_25268[(7)]);
var inst_25255 = p.call(null,inst_25250);
var state_25268__$1 = state_25268;
if(cljs.core.truth_(inst_25255)){
var statearr_25275_25292 = state_25268__$1;
(statearr_25275_25292[(1)] = (8));

} else {
var statearr_25276_25293 = state_25268__$1;
(statearr_25276_25293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25269 === (3))){
var inst_25266 = (state_25268[(2)]);
var state_25268__$1 = state_25268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25268__$1,inst_25266);
} else {
if((state_val_25269 === (2))){
var state_25268__$1 = state_25268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25268__$1,(4),ch);
} else {
if((state_val_25269 === (11))){
var inst_25258 = (state_25268[(2)]);
var state_25268__$1 = state_25268;
var statearr_25277_25294 = state_25268__$1;
(statearr_25277_25294[(2)] = inst_25258);

(statearr_25277_25294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25269 === (9))){
var state_25268__$1 = state_25268;
var statearr_25278_25295 = state_25268__$1;
(statearr_25278_25295[(2)] = null);

(statearr_25278_25295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25269 === (5))){
var inst_25253 = cljs.core.async.close_BANG_.call(null,out);
var state_25268__$1 = state_25268;
var statearr_25279_25296 = state_25268__$1;
(statearr_25279_25296[(2)] = inst_25253);

(statearr_25279_25296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25269 === (10))){
var inst_25261 = (state_25268[(2)]);
var state_25268__$1 = (function (){var statearr_25280 = state_25268;
(statearr_25280[(8)] = inst_25261);

return statearr_25280;
})();
var statearr_25281_25297 = state_25268__$1;
(statearr_25281_25297[(2)] = null);

(statearr_25281_25297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25269 === (8))){
var inst_25250 = (state_25268[(7)]);
var state_25268__$1 = state_25268;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25268__$1,(11),out,inst_25250);
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
});})(c__23748__auto___25287,out))
;
return ((function (switch__23658__auto__,c__23748__auto___25287,out){
return (function() {
var cljs$core$async$state_machine__23659__auto__ = null;
var cljs$core$async$state_machine__23659__auto____0 = (function (){
var statearr_25282 = [null,null,null,null,null,null,null,null,null];
(statearr_25282[(0)] = cljs$core$async$state_machine__23659__auto__);

(statearr_25282[(1)] = (1));

return statearr_25282;
});
var cljs$core$async$state_machine__23659__auto____1 = (function (state_25268){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_25268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e25283){if((e25283 instanceof Object)){
var ex__23662__auto__ = e25283;
var statearr_25284_25298 = state_25268;
(statearr_25284_25298[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25299 = state_25268;
state_25268 = G__25299;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
cljs$core$async$state_machine__23659__auto__ = function(state_25268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23659__auto____1.call(this,state_25268);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23659__auto____0;
cljs$core$async$state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23659__auto____1;
return cljs$core$async$state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto___25287,out))
})();
var state__23750__auto__ = (function (){var statearr_25285 = f__23749__auto__.call(null);
(statearr_25285[(6)] = c__23748__auto___25287);

return statearr_25285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto___25287,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25301 = arguments.length;
switch (G__25301) {
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
var c__23748__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto__){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto__){
return (function (state_25364){
var state_val_25365 = (state_25364[(1)]);
if((state_val_25365 === (7))){
var inst_25360 = (state_25364[(2)]);
var state_25364__$1 = state_25364;
var statearr_25366_25404 = state_25364__$1;
(statearr_25366_25404[(2)] = inst_25360);

(statearr_25366_25404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (20))){
var inst_25330 = (state_25364[(7)]);
var inst_25341 = (state_25364[(2)]);
var inst_25342 = cljs.core.next.call(null,inst_25330);
var inst_25316 = inst_25342;
var inst_25317 = null;
var inst_25318 = (0);
var inst_25319 = (0);
var state_25364__$1 = (function (){var statearr_25367 = state_25364;
(statearr_25367[(8)] = inst_25316);

(statearr_25367[(9)] = inst_25318);

(statearr_25367[(10)] = inst_25341);

(statearr_25367[(11)] = inst_25319);

(statearr_25367[(12)] = inst_25317);

return statearr_25367;
})();
var statearr_25368_25405 = state_25364__$1;
(statearr_25368_25405[(2)] = null);

(statearr_25368_25405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (1))){
var state_25364__$1 = state_25364;
var statearr_25369_25406 = state_25364__$1;
(statearr_25369_25406[(2)] = null);

(statearr_25369_25406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (4))){
var inst_25305 = (state_25364[(13)]);
var inst_25305__$1 = (state_25364[(2)]);
var inst_25306 = (inst_25305__$1 == null);
var state_25364__$1 = (function (){var statearr_25370 = state_25364;
(statearr_25370[(13)] = inst_25305__$1);

return statearr_25370;
})();
if(cljs.core.truth_(inst_25306)){
var statearr_25371_25407 = state_25364__$1;
(statearr_25371_25407[(1)] = (5));

} else {
var statearr_25372_25408 = state_25364__$1;
(statearr_25372_25408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (15))){
var state_25364__$1 = state_25364;
var statearr_25376_25409 = state_25364__$1;
(statearr_25376_25409[(2)] = null);

(statearr_25376_25409[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (21))){
var state_25364__$1 = state_25364;
var statearr_25377_25410 = state_25364__$1;
(statearr_25377_25410[(2)] = null);

(statearr_25377_25410[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (13))){
var inst_25316 = (state_25364[(8)]);
var inst_25318 = (state_25364[(9)]);
var inst_25319 = (state_25364[(11)]);
var inst_25317 = (state_25364[(12)]);
var inst_25326 = (state_25364[(2)]);
var inst_25327 = (inst_25319 + (1));
var tmp25373 = inst_25316;
var tmp25374 = inst_25318;
var tmp25375 = inst_25317;
var inst_25316__$1 = tmp25373;
var inst_25317__$1 = tmp25375;
var inst_25318__$1 = tmp25374;
var inst_25319__$1 = inst_25327;
var state_25364__$1 = (function (){var statearr_25378 = state_25364;
(statearr_25378[(8)] = inst_25316__$1);

(statearr_25378[(9)] = inst_25318__$1);

(statearr_25378[(11)] = inst_25319__$1);

(statearr_25378[(12)] = inst_25317__$1);

(statearr_25378[(14)] = inst_25326);

return statearr_25378;
})();
var statearr_25379_25411 = state_25364__$1;
(statearr_25379_25411[(2)] = null);

(statearr_25379_25411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (22))){
var state_25364__$1 = state_25364;
var statearr_25380_25412 = state_25364__$1;
(statearr_25380_25412[(2)] = null);

(statearr_25380_25412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (6))){
var inst_25305 = (state_25364[(13)]);
var inst_25314 = f.call(null,inst_25305);
var inst_25315 = cljs.core.seq.call(null,inst_25314);
var inst_25316 = inst_25315;
var inst_25317 = null;
var inst_25318 = (0);
var inst_25319 = (0);
var state_25364__$1 = (function (){var statearr_25381 = state_25364;
(statearr_25381[(8)] = inst_25316);

(statearr_25381[(9)] = inst_25318);

(statearr_25381[(11)] = inst_25319);

(statearr_25381[(12)] = inst_25317);

return statearr_25381;
})();
var statearr_25382_25413 = state_25364__$1;
(statearr_25382_25413[(2)] = null);

(statearr_25382_25413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (17))){
var inst_25330 = (state_25364[(7)]);
var inst_25334 = cljs.core.chunk_first.call(null,inst_25330);
var inst_25335 = cljs.core.chunk_rest.call(null,inst_25330);
var inst_25336 = cljs.core.count.call(null,inst_25334);
var inst_25316 = inst_25335;
var inst_25317 = inst_25334;
var inst_25318 = inst_25336;
var inst_25319 = (0);
var state_25364__$1 = (function (){var statearr_25383 = state_25364;
(statearr_25383[(8)] = inst_25316);

(statearr_25383[(9)] = inst_25318);

(statearr_25383[(11)] = inst_25319);

(statearr_25383[(12)] = inst_25317);

return statearr_25383;
})();
var statearr_25384_25414 = state_25364__$1;
(statearr_25384_25414[(2)] = null);

(statearr_25384_25414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (3))){
var inst_25362 = (state_25364[(2)]);
var state_25364__$1 = state_25364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25364__$1,inst_25362);
} else {
if((state_val_25365 === (12))){
var inst_25350 = (state_25364[(2)]);
var state_25364__$1 = state_25364;
var statearr_25385_25415 = state_25364__$1;
(statearr_25385_25415[(2)] = inst_25350);

(statearr_25385_25415[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (2))){
var state_25364__$1 = state_25364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25364__$1,(4),in$);
} else {
if((state_val_25365 === (23))){
var inst_25358 = (state_25364[(2)]);
var state_25364__$1 = state_25364;
var statearr_25386_25416 = state_25364__$1;
(statearr_25386_25416[(2)] = inst_25358);

(statearr_25386_25416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (19))){
var inst_25345 = (state_25364[(2)]);
var state_25364__$1 = state_25364;
var statearr_25387_25417 = state_25364__$1;
(statearr_25387_25417[(2)] = inst_25345);

(statearr_25387_25417[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (11))){
var inst_25316 = (state_25364[(8)]);
var inst_25330 = (state_25364[(7)]);
var inst_25330__$1 = cljs.core.seq.call(null,inst_25316);
var state_25364__$1 = (function (){var statearr_25388 = state_25364;
(statearr_25388[(7)] = inst_25330__$1);

return statearr_25388;
})();
if(inst_25330__$1){
var statearr_25389_25418 = state_25364__$1;
(statearr_25389_25418[(1)] = (14));

} else {
var statearr_25390_25419 = state_25364__$1;
(statearr_25390_25419[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (9))){
var inst_25352 = (state_25364[(2)]);
var inst_25353 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25364__$1 = (function (){var statearr_25391 = state_25364;
(statearr_25391[(15)] = inst_25352);

return statearr_25391;
})();
if(cljs.core.truth_(inst_25353)){
var statearr_25392_25420 = state_25364__$1;
(statearr_25392_25420[(1)] = (21));

} else {
var statearr_25393_25421 = state_25364__$1;
(statearr_25393_25421[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (5))){
var inst_25308 = cljs.core.async.close_BANG_.call(null,out);
var state_25364__$1 = state_25364;
var statearr_25394_25422 = state_25364__$1;
(statearr_25394_25422[(2)] = inst_25308);

(statearr_25394_25422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (14))){
var inst_25330 = (state_25364[(7)]);
var inst_25332 = cljs.core.chunked_seq_QMARK_.call(null,inst_25330);
var state_25364__$1 = state_25364;
if(inst_25332){
var statearr_25395_25423 = state_25364__$1;
(statearr_25395_25423[(1)] = (17));

} else {
var statearr_25396_25424 = state_25364__$1;
(statearr_25396_25424[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (16))){
var inst_25348 = (state_25364[(2)]);
var state_25364__$1 = state_25364;
var statearr_25397_25425 = state_25364__$1;
(statearr_25397_25425[(2)] = inst_25348);

(statearr_25397_25425[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (10))){
var inst_25319 = (state_25364[(11)]);
var inst_25317 = (state_25364[(12)]);
var inst_25324 = cljs.core._nth.call(null,inst_25317,inst_25319);
var state_25364__$1 = state_25364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25364__$1,(13),out,inst_25324);
} else {
if((state_val_25365 === (18))){
var inst_25330 = (state_25364[(7)]);
var inst_25339 = cljs.core.first.call(null,inst_25330);
var state_25364__$1 = state_25364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25364__$1,(20),out,inst_25339);
} else {
if((state_val_25365 === (8))){
var inst_25318 = (state_25364[(9)]);
var inst_25319 = (state_25364[(11)]);
var inst_25321 = (inst_25319 < inst_25318);
var inst_25322 = inst_25321;
var state_25364__$1 = state_25364;
if(cljs.core.truth_(inst_25322)){
var statearr_25398_25426 = state_25364__$1;
(statearr_25398_25426[(1)] = (10));

} else {
var statearr_25399_25427 = state_25364__$1;
(statearr_25399_25427[(1)] = (11));

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
});})(c__23748__auto__))
;
return ((function (switch__23658__auto__,c__23748__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23659__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23659__auto____0 = (function (){
var statearr_25400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25400[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23659__auto__);

(statearr_25400[(1)] = (1));

return statearr_25400;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23659__auto____1 = (function (state_25364){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_25364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e25401){if((e25401 instanceof Object)){
var ex__23662__auto__ = e25401;
var statearr_25402_25428 = state_25364;
(statearr_25402_25428[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25429 = state_25364;
state_25364 = G__25429;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23659__auto__ = function(state_25364){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23659__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23659__auto____1.call(this,state_25364);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23659__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23659__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto__))
})();
var state__23750__auto__ = (function (){var statearr_25403 = f__23749__auto__.call(null);
(statearr_25403[(6)] = c__23748__auto__);

return statearr_25403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto__))
);

return c__23748__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25431 = arguments.length;
switch (G__25431) {
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
var G__25434 = arguments.length;
switch (G__25434) {
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
var G__25437 = arguments.length;
switch (G__25437) {
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
var c__23748__auto___25484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto___25484,out){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto___25484,out){
return (function (state_25461){
var state_val_25462 = (state_25461[(1)]);
if((state_val_25462 === (7))){
var inst_25456 = (state_25461[(2)]);
var state_25461__$1 = state_25461;
var statearr_25463_25485 = state_25461__$1;
(statearr_25463_25485[(2)] = inst_25456);

(statearr_25463_25485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (1))){
var inst_25438 = null;
var state_25461__$1 = (function (){var statearr_25464 = state_25461;
(statearr_25464[(7)] = inst_25438);

return statearr_25464;
})();
var statearr_25465_25486 = state_25461__$1;
(statearr_25465_25486[(2)] = null);

(statearr_25465_25486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (4))){
var inst_25441 = (state_25461[(8)]);
var inst_25441__$1 = (state_25461[(2)]);
var inst_25442 = (inst_25441__$1 == null);
var inst_25443 = cljs.core.not.call(null,inst_25442);
var state_25461__$1 = (function (){var statearr_25466 = state_25461;
(statearr_25466[(8)] = inst_25441__$1);

return statearr_25466;
})();
if(inst_25443){
var statearr_25467_25487 = state_25461__$1;
(statearr_25467_25487[(1)] = (5));

} else {
var statearr_25468_25488 = state_25461__$1;
(statearr_25468_25488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (6))){
var state_25461__$1 = state_25461;
var statearr_25469_25489 = state_25461__$1;
(statearr_25469_25489[(2)] = null);

(statearr_25469_25489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (3))){
var inst_25458 = (state_25461[(2)]);
var inst_25459 = cljs.core.async.close_BANG_.call(null,out);
var state_25461__$1 = (function (){var statearr_25470 = state_25461;
(statearr_25470[(9)] = inst_25458);

return statearr_25470;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25461__$1,inst_25459);
} else {
if((state_val_25462 === (2))){
var state_25461__$1 = state_25461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25461__$1,(4),ch);
} else {
if((state_val_25462 === (11))){
var inst_25441 = (state_25461[(8)]);
var inst_25450 = (state_25461[(2)]);
var inst_25438 = inst_25441;
var state_25461__$1 = (function (){var statearr_25471 = state_25461;
(statearr_25471[(10)] = inst_25450);

(statearr_25471[(7)] = inst_25438);

return statearr_25471;
})();
var statearr_25472_25490 = state_25461__$1;
(statearr_25472_25490[(2)] = null);

(statearr_25472_25490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (9))){
var inst_25441 = (state_25461[(8)]);
var state_25461__$1 = state_25461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25461__$1,(11),out,inst_25441);
} else {
if((state_val_25462 === (5))){
var inst_25441 = (state_25461[(8)]);
var inst_25438 = (state_25461[(7)]);
var inst_25445 = cljs.core._EQ_.call(null,inst_25441,inst_25438);
var state_25461__$1 = state_25461;
if(inst_25445){
var statearr_25474_25491 = state_25461__$1;
(statearr_25474_25491[(1)] = (8));

} else {
var statearr_25475_25492 = state_25461__$1;
(statearr_25475_25492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (10))){
var inst_25453 = (state_25461[(2)]);
var state_25461__$1 = state_25461;
var statearr_25476_25493 = state_25461__$1;
(statearr_25476_25493[(2)] = inst_25453);

(statearr_25476_25493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (8))){
var inst_25438 = (state_25461[(7)]);
var tmp25473 = inst_25438;
var inst_25438__$1 = tmp25473;
var state_25461__$1 = (function (){var statearr_25477 = state_25461;
(statearr_25477[(7)] = inst_25438__$1);

return statearr_25477;
})();
var statearr_25478_25494 = state_25461__$1;
(statearr_25478_25494[(2)] = null);

(statearr_25478_25494[(1)] = (2));


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
});})(c__23748__auto___25484,out))
;
return ((function (switch__23658__auto__,c__23748__auto___25484,out){
return (function() {
var cljs$core$async$state_machine__23659__auto__ = null;
var cljs$core$async$state_machine__23659__auto____0 = (function (){
var statearr_25479 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25479[(0)] = cljs$core$async$state_machine__23659__auto__);

(statearr_25479[(1)] = (1));

return statearr_25479;
});
var cljs$core$async$state_machine__23659__auto____1 = (function (state_25461){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_25461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e25480){if((e25480 instanceof Object)){
var ex__23662__auto__ = e25480;
var statearr_25481_25495 = state_25461;
(statearr_25481_25495[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25496 = state_25461;
state_25461 = G__25496;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
cljs$core$async$state_machine__23659__auto__ = function(state_25461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23659__auto____1.call(this,state_25461);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23659__auto____0;
cljs$core$async$state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23659__auto____1;
return cljs$core$async$state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto___25484,out))
})();
var state__23750__auto__ = (function (){var statearr_25482 = f__23749__auto__.call(null);
(statearr_25482[(6)] = c__23748__auto___25484);

return statearr_25482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto___25484,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25498 = arguments.length;
switch (G__25498) {
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
var c__23748__auto___25564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto___25564,out){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto___25564,out){
return (function (state_25536){
var state_val_25537 = (state_25536[(1)]);
if((state_val_25537 === (7))){
var inst_25532 = (state_25536[(2)]);
var state_25536__$1 = state_25536;
var statearr_25538_25565 = state_25536__$1;
(statearr_25538_25565[(2)] = inst_25532);

(statearr_25538_25565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25537 === (1))){
var inst_25499 = (new Array(n));
var inst_25500 = inst_25499;
var inst_25501 = (0);
var state_25536__$1 = (function (){var statearr_25539 = state_25536;
(statearr_25539[(7)] = inst_25500);

(statearr_25539[(8)] = inst_25501);

return statearr_25539;
})();
var statearr_25540_25566 = state_25536__$1;
(statearr_25540_25566[(2)] = null);

(statearr_25540_25566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25537 === (4))){
var inst_25504 = (state_25536[(9)]);
var inst_25504__$1 = (state_25536[(2)]);
var inst_25505 = (inst_25504__$1 == null);
var inst_25506 = cljs.core.not.call(null,inst_25505);
var state_25536__$1 = (function (){var statearr_25541 = state_25536;
(statearr_25541[(9)] = inst_25504__$1);

return statearr_25541;
})();
if(inst_25506){
var statearr_25542_25567 = state_25536__$1;
(statearr_25542_25567[(1)] = (5));

} else {
var statearr_25543_25568 = state_25536__$1;
(statearr_25543_25568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25537 === (15))){
var inst_25526 = (state_25536[(2)]);
var state_25536__$1 = state_25536;
var statearr_25544_25569 = state_25536__$1;
(statearr_25544_25569[(2)] = inst_25526);

(statearr_25544_25569[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25537 === (13))){
var state_25536__$1 = state_25536;
var statearr_25545_25570 = state_25536__$1;
(statearr_25545_25570[(2)] = null);

(statearr_25545_25570[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25537 === (6))){
var inst_25501 = (state_25536[(8)]);
var inst_25522 = (inst_25501 > (0));
var state_25536__$1 = state_25536;
if(cljs.core.truth_(inst_25522)){
var statearr_25546_25571 = state_25536__$1;
(statearr_25546_25571[(1)] = (12));

} else {
var statearr_25547_25572 = state_25536__$1;
(statearr_25547_25572[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25537 === (3))){
var inst_25534 = (state_25536[(2)]);
var state_25536__$1 = state_25536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25536__$1,inst_25534);
} else {
if((state_val_25537 === (12))){
var inst_25500 = (state_25536[(7)]);
var inst_25524 = cljs.core.vec.call(null,inst_25500);
var state_25536__$1 = state_25536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25536__$1,(15),out,inst_25524);
} else {
if((state_val_25537 === (2))){
var state_25536__$1 = state_25536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25536__$1,(4),ch);
} else {
if((state_val_25537 === (11))){
var inst_25516 = (state_25536[(2)]);
var inst_25517 = (new Array(n));
var inst_25500 = inst_25517;
var inst_25501 = (0);
var state_25536__$1 = (function (){var statearr_25548 = state_25536;
(statearr_25548[(10)] = inst_25516);

(statearr_25548[(7)] = inst_25500);

(statearr_25548[(8)] = inst_25501);

return statearr_25548;
})();
var statearr_25549_25573 = state_25536__$1;
(statearr_25549_25573[(2)] = null);

(statearr_25549_25573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25537 === (9))){
var inst_25500 = (state_25536[(7)]);
var inst_25514 = cljs.core.vec.call(null,inst_25500);
var state_25536__$1 = state_25536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25536__$1,(11),out,inst_25514);
} else {
if((state_val_25537 === (5))){
var inst_25509 = (state_25536[(11)]);
var inst_25500 = (state_25536[(7)]);
var inst_25501 = (state_25536[(8)]);
var inst_25504 = (state_25536[(9)]);
var inst_25508 = (inst_25500[inst_25501] = inst_25504);
var inst_25509__$1 = (inst_25501 + (1));
var inst_25510 = (inst_25509__$1 < n);
var state_25536__$1 = (function (){var statearr_25550 = state_25536;
(statearr_25550[(11)] = inst_25509__$1);

(statearr_25550[(12)] = inst_25508);

return statearr_25550;
})();
if(cljs.core.truth_(inst_25510)){
var statearr_25551_25574 = state_25536__$1;
(statearr_25551_25574[(1)] = (8));

} else {
var statearr_25552_25575 = state_25536__$1;
(statearr_25552_25575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25537 === (14))){
var inst_25529 = (state_25536[(2)]);
var inst_25530 = cljs.core.async.close_BANG_.call(null,out);
var state_25536__$1 = (function (){var statearr_25554 = state_25536;
(statearr_25554[(13)] = inst_25529);

return statearr_25554;
})();
var statearr_25555_25576 = state_25536__$1;
(statearr_25555_25576[(2)] = inst_25530);

(statearr_25555_25576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25537 === (10))){
var inst_25520 = (state_25536[(2)]);
var state_25536__$1 = state_25536;
var statearr_25556_25577 = state_25536__$1;
(statearr_25556_25577[(2)] = inst_25520);

(statearr_25556_25577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25537 === (8))){
var inst_25509 = (state_25536[(11)]);
var inst_25500 = (state_25536[(7)]);
var tmp25553 = inst_25500;
var inst_25500__$1 = tmp25553;
var inst_25501 = inst_25509;
var state_25536__$1 = (function (){var statearr_25557 = state_25536;
(statearr_25557[(7)] = inst_25500__$1);

(statearr_25557[(8)] = inst_25501);

return statearr_25557;
})();
var statearr_25558_25578 = state_25536__$1;
(statearr_25558_25578[(2)] = null);

(statearr_25558_25578[(1)] = (2));


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
});})(c__23748__auto___25564,out))
;
return ((function (switch__23658__auto__,c__23748__auto___25564,out){
return (function() {
var cljs$core$async$state_machine__23659__auto__ = null;
var cljs$core$async$state_machine__23659__auto____0 = (function (){
var statearr_25559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25559[(0)] = cljs$core$async$state_machine__23659__auto__);

(statearr_25559[(1)] = (1));

return statearr_25559;
});
var cljs$core$async$state_machine__23659__auto____1 = (function (state_25536){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_25536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e25560){if((e25560 instanceof Object)){
var ex__23662__auto__ = e25560;
var statearr_25561_25579 = state_25536;
(statearr_25561_25579[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25580 = state_25536;
state_25536 = G__25580;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
cljs$core$async$state_machine__23659__auto__ = function(state_25536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23659__auto____1.call(this,state_25536);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23659__auto____0;
cljs$core$async$state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23659__auto____1;
return cljs$core$async$state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto___25564,out))
})();
var state__23750__auto__ = (function (){var statearr_25562 = f__23749__auto__.call(null);
(statearr_25562[(6)] = c__23748__auto___25564);

return statearr_25562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto___25564,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25582 = arguments.length;
switch (G__25582) {
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
var c__23748__auto___25652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23748__auto___25652,out){
return (function (){
var f__23749__auto__ = (function (){var switch__23658__auto__ = ((function (c__23748__auto___25652,out){
return (function (state_25624){
var state_val_25625 = (state_25624[(1)]);
if((state_val_25625 === (7))){
var inst_25620 = (state_25624[(2)]);
var state_25624__$1 = state_25624;
var statearr_25626_25653 = state_25624__$1;
(statearr_25626_25653[(2)] = inst_25620);

(statearr_25626_25653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25625 === (1))){
var inst_25583 = [];
var inst_25584 = inst_25583;
var inst_25585 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25624__$1 = (function (){var statearr_25627 = state_25624;
(statearr_25627[(7)] = inst_25584);

(statearr_25627[(8)] = inst_25585);

return statearr_25627;
})();
var statearr_25628_25654 = state_25624__$1;
(statearr_25628_25654[(2)] = null);

(statearr_25628_25654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25625 === (4))){
var inst_25588 = (state_25624[(9)]);
var inst_25588__$1 = (state_25624[(2)]);
var inst_25589 = (inst_25588__$1 == null);
var inst_25590 = cljs.core.not.call(null,inst_25589);
var state_25624__$1 = (function (){var statearr_25629 = state_25624;
(statearr_25629[(9)] = inst_25588__$1);

return statearr_25629;
})();
if(inst_25590){
var statearr_25630_25655 = state_25624__$1;
(statearr_25630_25655[(1)] = (5));

} else {
var statearr_25631_25656 = state_25624__$1;
(statearr_25631_25656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25625 === (15))){
var inst_25614 = (state_25624[(2)]);
var state_25624__$1 = state_25624;
var statearr_25632_25657 = state_25624__$1;
(statearr_25632_25657[(2)] = inst_25614);

(statearr_25632_25657[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25625 === (13))){
var state_25624__$1 = state_25624;
var statearr_25633_25658 = state_25624__$1;
(statearr_25633_25658[(2)] = null);

(statearr_25633_25658[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25625 === (6))){
var inst_25584 = (state_25624[(7)]);
var inst_25609 = inst_25584.length;
var inst_25610 = (inst_25609 > (0));
var state_25624__$1 = state_25624;
if(cljs.core.truth_(inst_25610)){
var statearr_25634_25659 = state_25624__$1;
(statearr_25634_25659[(1)] = (12));

} else {
var statearr_25635_25660 = state_25624__$1;
(statearr_25635_25660[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25625 === (3))){
var inst_25622 = (state_25624[(2)]);
var state_25624__$1 = state_25624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25624__$1,inst_25622);
} else {
if((state_val_25625 === (12))){
var inst_25584 = (state_25624[(7)]);
var inst_25612 = cljs.core.vec.call(null,inst_25584);
var state_25624__$1 = state_25624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25624__$1,(15),out,inst_25612);
} else {
if((state_val_25625 === (2))){
var state_25624__$1 = state_25624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25624__$1,(4),ch);
} else {
if((state_val_25625 === (11))){
var inst_25592 = (state_25624[(10)]);
var inst_25588 = (state_25624[(9)]);
var inst_25602 = (state_25624[(2)]);
var inst_25603 = [];
var inst_25604 = inst_25603.push(inst_25588);
var inst_25584 = inst_25603;
var inst_25585 = inst_25592;
var state_25624__$1 = (function (){var statearr_25636 = state_25624;
(statearr_25636[(11)] = inst_25602);

(statearr_25636[(12)] = inst_25604);

(statearr_25636[(7)] = inst_25584);

(statearr_25636[(8)] = inst_25585);

return statearr_25636;
})();
var statearr_25637_25661 = state_25624__$1;
(statearr_25637_25661[(2)] = null);

(statearr_25637_25661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25625 === (9))){
var inst_25584 = (state_25624[(7)]);
var inst_25600 = cljs.core.vec.call(null,inst_25584);
var state_25624__$1 = state_25624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25624__$1,(11),out,inst_25600);
} else {
if((state_val_25625 === (5))){
var inst_25592 = (state_25624[(10)]);
var inst_25588 = (state_25624[(9)]);
var inst_25585 = (state_25624[(8)]);
var inst_25592__$1 = f.call(null,inst_25588);
var inst_25593 = cljs.core._EQ_.call(null,inst_25592__$1,inst_25585);
var inst_25594 = cljs.core.keyword_identical_QMARK_.call(null,inst_25585,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25595 = ((inst_25593) || (inst_25594));
var state_25624__$1 = (function (){var statearr_25638 = state_25624;
(statearr_25638[(10)] = inst_25592__$1);

return statearr_25638;
})();
if(cljs.core.truth_(inst_25595)){
var statearr_25639_25662 = state_25624__$1;
(statearr_25639_25662[(1)] = (8));

} else {
var statearr_25640_25663 = state_25624__$1;
(statearr_25640_25663[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25625 === (14))){
var inst_25617 = (state_25624[(2)]);
var inst_25618 = cljs.core.async.close_BANG_.call(null,out);
var state_25624__$1 = (function (){var statearr_25642 = state_25624;
(statearr_25642[(13)] = inst_25617);

return statearr_25642;
})();
var statearr_25643_25664 = state_25624__$1;
(statearr_25643_25664[(2)] = inst_25618);

(statearr_25643_25664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25625 === (10))){
var inst_25607 = (state_25624[(2)]);
var state_25624__$1 = state_25624;
var statearr_25644_25665 = state_25624__$1;
(statearr_25644_25665[(2)] = inst_25607);

(statearr_25644_25665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25625 === (8))){
var inst_25584 = (state_25624[(7)]);
var inst_25592 = (state_25624[(10)]);
var inst_25588 = (state_25624[(9)]);
var inst_25597 = inst_25584.push(inst_25588);
var tmp25641 = inst_25584;
var inst_25584__$1 = tmp25641;
var inst_25585 = inst_25592;
var state_25624__$1 = (function (){var statearr_25645 = state_25624;
(statearr_25645[(7)] = inst_25584__$1);

(statearr_25645[(14)] = inst_25597);

(statearr_25645[(8)] = inst_25585);

return statearr_25645;
})();
var statearr_25646_25666 = state_25624__$1;
(statearr_25646_25666[(2)] = null);

(statearr_25646_25666[(1)] = (2));


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
});})(c__23748__auto___25652,out))
;
return ((function (switch__23658__auto__,c__23748__auto___25652,out){
return (function() {
var cljs$core$async$state_machine__23659__auto__ = null;
var cljs$core$async$state_machine__23659__auto____0 = (function (){
var statearr_25647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25647[(0)] = cljs$core$async$state_machine__23659__auto__);

(statearr_25647[(1)] = (1));

return statearr_25647;
});
var cljs$core$async$state_machine__23659__auto____1 = (function (state_25624){
while(true){
var ret_value__23660__auto__ = (function (){try{while(true){
var result__23661__auto__ = switch__23658__auto__.call(null,state_25624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23661__auto__;
}
break;
}
}catch (e25648){if((e25648 instanceof Object)){
var ex__23662__auto__ = e25648;
var statearr_25649_25667 = state_25624;
(statearr_25649_25667[(5)] = ex__23662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25668 = state_25624;
state_25624 = G__25668;
continue;
} else {
return ret_value__23660__auto__;
}
break;
}
});
cljs$core$async$state_machine__23659__auto__ = function(state_25624){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23659__auto____1.call(this,state_25624);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23659__auto____0;
cljs$core$async$state_machine__23659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23659__auto____1;
return cljs$core$async$state_machine__23659__auto__;
})()
;})(switch__23658__auto__,c__23748__auto___25652,out))
})();
var state__23750__auto__ = (function (){var statearr_25650 = f__23749__auto__.call(null);
(statearr_25650[(6)] = c__23748__auto___25652);

return statearr_25650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23750__auto__);
});})(c__23748__auto___25652,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1556800400585
