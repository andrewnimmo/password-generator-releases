goog.provide('malli.registry');
/**
 * @define {string}
 * @type {string}
 */
malli.registry.mode = goog.define("malli.registry.mode","default");
/**
 * @define {string}
 * @type {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_22220 = (function (this$,type){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (malli.registry._schema[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5520__auto__.call(null,this$,type));
} else {
var m__5518__auto__ = (malli.registry._schema["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5518__auto__.call(null,this$,type));
} else {
throw cljs.core.missing_protocol("Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_22220(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_22222 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (malli.registry._schemas[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (malli.registry._schemas["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_22222(this$);
}
});

malli.registry.registry_QMARK_ = (function malli$registry$registry_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$registry$Registry$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry22012 = (function (m,fm,meta22013){
this.m = m;
this.fm = fm;
this.meta22013 = meta22013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry22012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22014,meta22013__$1){
var self__ = this;
var _22014__$1 = this;
return (new malli.registry.t_malli$registry22012(self__.m,self__.fm,meta22013__$1));
}));

(malli.registry.t_malli$registry22012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22014){
var self__ = this;
var _22014__$1 = this;
return self__.meta22013;
}));

(malli.registry.t_malli$registry22012.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry22012.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry22012.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry22012.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta22013","meta22013",-12078203,null)], null);
}));

(malli.registry.t_malli$registry22012.cljs$lang$type = true);

(malli.registry.t_malli$registry22012.cljs$lang$ctorStr = "malli.registry/t_malli$registry22012");

(malli.registry.t_malli$registry22012.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry22012");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry22012.
 */
malli.registry.__GT_t_malli$registry22012 = (function malli$registry$__GT_t_malli$registry22012(m,fm,meta22013){
return (new malli.registry.t_malli$registry22012(m,fm,meta22013));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry22012(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry22017 = (function (m,meta22018){
this.m = m;
this.meta22018 = meta22018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry22017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22019,meta22018__$1){
var self__ = this;
var _22019__$1 = this;
return (new malli.registry.t_malli$registry22017(self__.m,meta22018__$1));
}));

(malli.registry.t_malli$registry22017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22019){
var self__ = this;
var _22019__$1 = this;
return self__.meta22018;
}));

(malli.registry.t_malli$registry22017.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry22017.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry22017.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry22017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta22018","meta22018",-2125435003,null)], null);
}));

(malli.registry.t_malli$registry22017.cljs$lang$type = true);

(malli.registry.t_malli$registry22017.cljs$lang$ctorStr = "malli.registry/t_malli$registry22017");

(malli.registry.t_malli$registry22017.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry22017");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry22017.
 */
malli.registry.__GT_t_malli$registry22017 = (function malli$registry$__GT_t_malli$registry22017(m,meta22018){
return (new malli.registry.t_malli$registry22017(m,meta22018));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry22017(m,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((_QMARK_registry == null)){
return null;
} else {
if(malli.registry.registry_QMARK_(_QMARK_registry)){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_(_QMARK_registry)){
return malli.registry.simple_registry(_QMARK_registry);
} else {
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
return null;
}
}
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(malli.registry.simple_registry(cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((!((malli.registry.mode === "strict")))){
return cljs.core.reset_BANG_(malli.registry.registry_STAR_,malli.registry.registry(_QMARK_registry));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can't set default registry, invalid mode",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),malli.registry.mode,new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry22024 = (function (meta22025){
this.meta22025 = meta22025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry22024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22026,meta22025__$1){
var self__ = this;
var _22026__$1 = this;
return (new malli.registry.t_malli$registry22024(meta22025__$1));
}));

(malli.registry.t_malli$registry22024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22026){
var self__ = this;
var _22026__$1 = this;
return self__.meta22025;
}));

(malli.registry.t_malli$registry22024.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry22024.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry22024.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry22024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22025","meta22025",1397397820,null)], null);
}));

(malli.registry.t_malli$registry22024.cljs$lang$type = true);

(malli.registry.t_malli$registry22024.cljs$lang$ctorStr = "malli.registry/t_malli$registry22024");

(malli.registry.t_malli$registry22024.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry22024");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry22024.
 */
malli.registry.__GT_t_malli$registry22024 = (function malli$registry$__GT_t_malli$registry22024(meta22025){
return (new malli.registry.t_malli$registry22024(meta22025));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry22024(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry22081 = (function (_QMARK_registries,registries,meta22082){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta22082 = meta22082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry22081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22083,meta22082__$1){
var self__ = this;
var _22083__$1 = this;
return (new malli.registry.t_malli$registry22081(self__._QMARK_registries,self__.registries,meta22082__$1));
}));

(malli.registry.t_malli$registry22081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22083){
var self__ = this;
var _22083__$1 = this;
return self__.meta22082;
}));

(malli.registry.t_malli$registry22081.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry22081.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__22065_SHARP_){
return malli.registry._schema(p1__22065_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry22081.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry22081.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta22082","meta22082",-644694578,null)], null);
}));

(malli.registry.t_malli$registry22081.cljs$lang$type = true);

(malli.registry.t_malli$registry22081.cljs$lang$ctorStr = "malli.registry/t_malli$registry22081");

(malli.registry.t_malli$registry22081.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry22081");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry22081.
 */
malli.registry.__GT_t_malli$registry22081 = (function malli$registry$__GT_t_malli$registry22081(_QMARK_registries,registries,meta22082){
return (new malli.registry.t_malli$registry22081(_QMARK_registries,registries,meta22082));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5903__auto__ = [];
var len__5897__auto___22253 = arguments.length;
var i__5898__auto___22254 = (0);
while(true){
if((i__5898__auto___22254 < len__5897__auto___22253)){
args__5903__auto__.push((arguments[i__5898__auto___22254]));

var G__22257 = (i__5898__auto___22254 + (1));
i__5898__auto___22254 = G__22257;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
return (new malli.registry.t_malli$registry22081(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq22074){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22074));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry22149 = (function (db,meta22150){
this.db = db;
this.meta22150 = meta22150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry22149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22151,meta22150__$1){
var self__ = this;
var _22151__$1 = this;
return (new malli.registry.t_malli$registry22149(self__.db,meta22150__$1));
}));

(malli.registry.t_malli$registry22149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22151){
var self__ = this;
var _22151__$1 = this;
return self__.meta22150;
}));

(malli.registry.t_malli$registry22149.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry22149.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry22149.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry22149.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta22150","meta22150",944699195,null)], null);
}));

(malli.registry.t_malli$registry22149.cljs$lang$type = true);

(malli.registry.t_malli$registry22149.cljs$lang$ctorStr = "malli.registry/t_malli$registry22149");

(malli.registry.t_malli$registry22149.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry22149");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry22149.
 */
malli.registry.__GT_t_malli$registry22149 = (function malli$registry$__GT_t_malli$registry22149(db,meta22150){
return (new malli.registry.t_malli$registry22149(db,meta22150));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry22149(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry22170 = (function (meta22171){
this.meta22171 = meta22171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry22170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22172,meta22171__$1){
var self__ = this;
var _22172__$1 = this;
return (new malli.registry.t_malli$registry22170(meta22171__$1));
}));

(malli.registry.t_malli$registry22170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22172){
var self__ = this;
var _22172__$1 = this;
return self__.meta22171;
}));

(malli.registry.t_malli$registry22170.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry22170.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry22170.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry22170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22171","meta22171",-199727993,null)], null);
}));

(malli.registry.t_malli$registry22170.cljs$lang$type = true);

(malli.registry.t_malli$registry22170.cljs$lang$ctorStr = "malli.registry/t_malli$registry22170");

(malli.registry.t_malli$registry22170.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry22170");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry22170.
 */
malli.registry.__GT_t_malli$registry22170 = (function malli$registry$__GT_t_malli$registry22170(meta22171){
return (new malli.registry.t_malli$registry22170(meta22171));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry22170(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry22180 = (function (meta22181){
this.meta22181 = meta22181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry22180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22182,meta22181__$1){
var self__ = this;
var _22182__$1 = this;
return (new malli.registry.t_malli$registry22180(meta22181__$1));
}));

(malli.registry.t_malli$registry22180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22182){
var self__ = this;
var _22182__$1 = this;
return self__.meta22181;
}));

(malli.registry.t_malli$registry22180.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry22180.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry22180.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry22180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22181","meta22181",1077271691,null)], null);
}));

(malli.registry.t_malli$registry22180.cljs$lang$type = true);

(malli.registry.t_malli$registry22180.cljs$lang$ctorStr = "malli.registry/t_malli$registry22180");

(malli.registry.t_malli$registry22180.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry22180");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry22180.
 */
malli.registry.__GT_t_malli$registry22180 = (function malli$registry$__GT_t_malli$registry22180(meta22181){
return (new malli.registry.t_malli$registry22180(meta22181));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry22180(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry22193 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta22194){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta22194 = meta22194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry22193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22195,meta22194__$1){
var self__ = this;
var _22195__$1 = this;
return (new malli.registry.t_malli$registry22193(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta22194__$1));
}));

(malli.registry.t_malli$registry22193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22195){
var self__ = this;
var _22195__$1 = this;
return self__.meta22194;
}));

(malli.registry.t_malli$registry22193.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry22193.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5162__auto__ = (function (){var fexpr__22209 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__22209.cljs$core$IFn$_invoke$arity$1 ? fexpr__22209.cljs$core$IFn$_invoke$arity$1(name) : fexpr__22209.call(null,name));
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var temp__5825__auto__ = (function (){var G__22212 = name;
var G__22213 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__22212,G__22213) : self__.provider.call(null,G__22212,G__22213));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var schema = temp__5825__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema);

return schema;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry22193.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry22193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta22194","meta22194",-24678534,null)], null);
}));

(malli.registry.t_malli$registry22193.cljs$lang$type = true);

(malli.registry.t_malli$registry22193.cljs$lang$ctorStr = "malli.registry/t_malli$registry22193");

(malli.registry.t_malli$registry22193.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.registry/t_malli$registry22193");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry22193.
 */
malli.registry.__GT_t_malli$registry22193 = (function malli$registry$__GT_t_malli$registry22193(default_registry,provider,cache_STAR_,registry_STAR_,meta22194){
return (new malli.registry.t_malli$registry22193(default_registry,provider,cache_STAR_,registry_STAR_,meta22194));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry22193(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema(registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas(registry);
});

//# sourceMappingURL=malli.registry.js.map
