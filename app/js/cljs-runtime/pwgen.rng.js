goog.provide('pwgen.rng');

/**
 * @interface
 */
pwgen.rng.RandomSource = function(){};

var pwgen$rng$RandomSource$uniform_int$dyn_21827 = (function (this$,bound){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (pwgen.rng.uniform_int[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,bound) : m__5520__auto__.call(null,this$,bound));
} else {
var m__5518__auto__ = (pwgen.rng.uniform_int["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,bound) : m__5518__auto__.call(null,this$,bound));
} else {
throw cljs.core.missing_protocol("RandomSource.uniform-int",this$);
}
}
});
/**
 * Returns a uniformly distributed integer in [0, bound). bound must be a
 *  positive integer.
 */
pwgen.rng.uniform_int = (function pwgen$rng$uniform_int(this$,bound){
if((((!((this$ == null)))) && ((!((this$.pwgen$rng$RandomSource$uniform_int$arity$2 == null)))))){
return this$.pwgen$rng$RandomSource$uniform_int$arity$2(this$,bound);
} else {
return pwgen$rng$RandomSource$uniform_int$dyn_21827(this$,bound);
}
});


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {pwgen.rng.RandomSource}
 * @implements {cljs.core.IWithMeta}
*/
pwgen.rng.t_pwgen$rng21821 = (function (crypto,buf,two32,meta21822){
this.crypto = crypto;
this.buf = buf;
this.two32 = two32;
this.meta21822 = meta21822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(pwgen.rng.t_pwgen$rng21821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21823,meta21822__$1){
var self__ = this;
var _21823__$1 = this;
return (new pwgen.rng.t_pwgen$rng21821(self__.crypto,self__.buf,self__.two32,meta21822__$1));
}));

(pwgen.rng.t_pwgen$rng21821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21823){
var self__ = this;
var _21823__$1 = this;
return self__.meta21822;
}));

(pwgen.rng.t_pwgen$rng21821.prototype.pwgen$rng$RandomSource$ = cljs.core.PROTOCOL_SENTINEL);

(pwgen.rng.t_pwgen$rng21821.prototype.pwgen$rng$RandomSource$uniform_int$arity$2 = (function (_,bound){
var self__ = this;
var ___$1 = this;
var limit = (self__.two32 - cljs.core.mod(self__.two32,bound));
while(true){
self__.crypto.getRandomValues(self__.buf);

var v = (self__.buf[(0)]);
if((v < limit)){
return cljs.core.mod(v,bound);
} else {
continue;
}
break;
}
}));

(pwgen.rng.t_pwgen$rng21821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"crypto","crypto",-881853154,null),new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.Symbol(null,"two32","two32",-175009212,null),new cljs.core.Symbol(null,"meta21822","meta21822",587045608,null)], null);
}));

(pwgen.rng.t_pwgen$rng21821.cljs$lang$type = true);

(pwgen.rng.t_pwgen$rng21821.cljs$lang$ctorStr = "pwgen.rng/t_pwgen$rng21821");

(pwgen.rng.t_pwgen$rng21821.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"pwgen.rng/t_pwgen$rng21821");
}));

/**
 * Positional factory function for pwgen.rng/t_pwgen$rng21821.
 */
pwgen.rng.__GT_t_pwgen$rng21821 = (function pwgen$rng$__GT_t_pwgen$rng21821(crypto,buf,two32,meta21822){
return (new pwgen.rng.t_pwgen$rng21821(crypto,buf,two32,meta21822));
});


/**
 * A RandomSource backed by the Web Crypto API.
 * 
 *   getRandomValues hands us raw uniform 32-bit integers; mapping them onto
 *   an arbitrary bound needs care. The naive (mod value bound) is BIASED
 *   whenever bound doesn't divide 2^32 evenly — e.g. with bound 3, values
 *   0 and 1 would occur very slightly more often than 2, because
 *   2^32 = 3 × 1431655765 + 1. The fix is REJECTION SAMPLING: discard any
 *   draw from the final, incomplete cycle (values >= limit below) and draw
 *   again. Each accepted value is then exactly uniform. The retry
 *   probability is at most bound/2^32 — vanishingly rare in practice.
 */
pwgen.rng.secure_rng = (function pwgen$rng$secure_rng(){
var crypto = (function (){var or__5162__auto__ = globalThis.crypto;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Web Crypto API unavailable \u2014 cannot generate secure randomness",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"no-crypto","no-crypto",746322143)], null));
}
})();
var buf = (new Uint32Array((1)));
var two32 = (4294967296);
return (new pwgen.rng.t_pwgen$rng21821(crypto,buf,two32,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Draws one element from vector `v`, uniformly. The secure replacement for
 *   the banned rand-nth.
 */
pwgen.rng.pick = (function pwgen$rng$pick(rng,v){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,pwgen.rng.uniform_int(rng,cljs.core.count(v)));
});

//# sourceMappingURL=pwgen.rng.js.map
