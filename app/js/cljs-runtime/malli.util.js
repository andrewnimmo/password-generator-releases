goog.provide('malli.util');

malli.util.equals = (function malli$util$equals(var_args){
var G__29837 = arguments.length;
switch (G__29837) {
case 2:
return malli.util.equals.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.equals.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.util.equals.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema1,_QMARK_schema2){
return malli.util.equals.cljs$core$IFn$_invoke$arity$3(_QMARK_schema1,_QMARK_schema2,null);
}));

(malli.util.equals.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema1,_QMARK_schema2,options){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(malli.core.form.cljs$core$IFn$_invoke$arity$2(_QMARK_schema1,options),malli.core.form.cljs$core$IFn$_invoke$arity$2(_QMARK_schema2,options));
}));

(malli.util.equals.cljs$lang$maxFixedArity = 3);

malli.util._simplify_map_entry = (function malli$util$_simplify_map_entry(p__29841){
var vec__29844 = p__29841;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29844,(0),null);
var _QMARK_p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29844,(1),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29844,(2),null);
if(cljs.core.not(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,_QMARK_p], null);
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = _QMARK_p;
if(cljs.core.truth_(and__5160__auto__)){
return ((new cljs.core.Keyword(null,"optional","optional",2053951509).cljs$core$IFn$_invoke$arity$1(_QMARK_p) === false) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(_QMARK_p))));
} else {
return and__5160__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,s], null);
} else {
if(cljs.core.not(cljs.core.seq(_QMARK_p))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,s], null);
} else {
if(new cljs.core.Keyword(null,"optional","optional",2053951509).cljs$core$IFn$_invoke$arity$1(_QMARK_p) === false){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_QMARK_p,new cljs.core.Keyword(null,"optional","optional",2053951509)),s], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,_QMARK_p,s], null);

}
}
}
}
});
malli.util._required_map_entry_QMARK_ = (function malli$util$_required_map_entry_QMARK_(p__29853){
var vec__29854 = p__29853;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29854,(0),null);
var _QMARK_p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29854,(1),null);
return (!(((cljs.core.map_QMARK_(_QMARK_p)) && (new cljs.core.Keyword(null,"optional","optional",2053951509).cljs$core$IFn$_invoke$arity$1(_QMARK_p) === true))));
});
malli.util._entry = (function malli$util$_entry(p__29858,p__29859,merge_required,merge,options){
var vec__29860 = p__29858;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29860,(0),null);
var _QMARK_p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29860,(1),null);
var s1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29860,(2),null);
var e1 = vec__29860;
var vec__29863 = p__29859;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29863,(0),null);
var _QMARK_p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29863,(1),null);
var s2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29863,(2),null);
var e2 = vec__29863;
var required = (function (){var G__29867 = malli.util._required_map_entry_QMARK_(e1);
var G__29868 = malli.util._required_map_entry_QMARK_(e2);
return (merge_required.cljs$core$IFn$_invoke$arity$2 ? merge_required.cljs$core$IFn$_invoke$arity$2(G__29867,G__29868) : merge_required.call(null,G__29867,G__29868));
})();
var p = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_QMARK_p1,_QMARK_p2], 0));
return malli.util._simplify_map_entry(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,new cljs.core.Keyword(null,"optional","optional",2053951509),cljs.core.not(required)),(merge.cljs$core$IFn$_invoke$arity$3 ? merge.cljs$core$IFn$_invoke$arity$3(s1,s2,options) : merge.call(null,s1,s2,options))], null));
});
malli.util._ok_to_close_or_open_QMARK_ = (function malli$util$_ok_to_close_or_open_QMARK_(schema,options){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),malli.core.type.cljs$core$IFn$_invoke$arity$2(schema,options))) && ((!(new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema)) === false))));
});

/**
* @constructor
 * @implements {malli.core.Walker}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.util.t_malli$util29878 = (function (_QMARK_schema,f,options,result,meta29879){
this._QMARK_schema = _QMARK_schema;
this.f = f;
this.options = options;
this.result = result;
this.meta29879 = meta29879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.util.t_malli$util29878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29880,meta29879__$1){
var self__ = this;
var _29880__$1 = this;
return (new malli.util.t_malli$util29878(self__._QMARK_schema,self__.f,self__.options,self__.result,meta29879__$1));
}));

(malli.util.t_malli$util29878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29880){
var self__ = this;
var _29880__$1 = this;
return self__.meta29879;
}));

(malli.util.t_malli$util29878.prototype.malli$core$Walker$ = cljs.core.PROTOCOL_SENTINEL);

(malli.util.t_malli$util29878.prototype.malli$core$Walker$_accept$arity$4 = (function (_,s,path,options__$1){
var self__ = this;
var ___$1 = this;
return cljs.core.not((function (){var or__5162__auto__ = cljs.core.deref(self__.result);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.reset_BANG_(self__.result,(self__.f.cljs$core$IFn$_invoke$arity$3 ? self__.f.cljs$core$IFn$_invoke$arity$3(s,path,options__$1) : self__.f.call(null,s,path,options__$1)));
}
})());
}));

(malli.util.t_malli$util29878.prototype.malli$core$Walker$_inner$arity$4 = (function (this$,s,path,options__$1){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.deref(self__.result))){
return null;
} else {
return malli.core._walk(s,this$__$1,path,options__$1);
}
}));

(malli.util.t_malli$util29878.prototype.malli$core$Walker$_outer$arity$5 = (function (_,___$1,___$2,___$3,___$4){
var self__ = this;
var ___$5 = this;
return null;
}));

(malli.util.t_malli$util29878.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?schema","?schema",-271534072,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"meta29879","meta29879",940261713,null)], null);
}));

(malli.util.t_malli$util29878.cljs$lang$type = true);

(malli.util.t_malli$util29878.cljs$lang$ctorStr = "malli.util/t_malli$util29878");

(malli.util.t_malli$util29878.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"malli.util/t_malli$util29878");
}));

/**
 * Positional factory function for malli.util/t_malli$util29878.
 */
malli.util.__GT_t_malli$util29878 = (function malli$util$__GT_t_malli$util29878(_QMARK_schema,f,options,result,meta29879){
return (new malli.util.t_malli$util29878(_QMARK_schema,f,options,result,meta29879));
});


/**
 * Prewalks the Schema recursively with a 3-arity fn [schema path options], returns with
 *   and as soon as the function returns non-null value.
 */
malli.util.find_first = (function malli$util$find_first(var_args){
var G__29873 = arguments.length;
switch (G__29873) {
case 2:
return malli.util.find_first.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.find_first.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.util.find_first.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,f){
return malli.util.find_first.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,f,null);
}));

(malli.util.find_first.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,f,options){
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
malli.core._walk(malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options),(new malli.util.t_malli$util29878(_QMARK_schema,f,options,result,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.PersistentVector.EMPTY,options);

return cljs.core.deref(result);
}));

(malli.util.find_first.cljs$lang$maxFixedArity = 3);

/**
 * Merges two schemas into one with the following rules:
 * 
 *   * if either schemas is `nil`, the other one is used, regardless of value
 *   * with two :map schemas, both keys and values are merged
 *   * for :and schemas, the first child is used in merge, rest kept as-is
 *   * with two :map entries, `:merge-entries` fn is used (default last one wins)
 *   * with any other schemas, `:merge-default` fn is used (default last one wins)
 * 
 *   | key               | description
 *   | ------------------|-------------
 *   | `:merge-default`  | `schema1 schema2 options -> schema` fn to merge unknown entries
 *   | `:merge-required` | `boolean boolean -> boolean` fn to resolve how required keys are merged
 */
malli.util.merge = (function malli$util$merge(var_args){
var G__29892 = arguments.length;
switch (G__29892) {
case 2:
return malli.util.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.merge.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.util.merge.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema1,_QMARK_schema2){
return malli.util.merge.cljs$core$IFn$_invoke$arity$3(_QMARK_schema1,_QMARK_schema2,null);
}));

(malli.util.merge.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema1,_QMARK_schema2,options){
var s1 = (cljs.core.truth_(_QMARK_schema1)?malli.core.deref_all.cljs$core$IFn$_invoke$arity$1(malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema1,options)):null);
var s2 = (cljs.core.truth_(_QMARK_schema2)?malli.core.deref_all.cljs$core$IFn$_invoke$arity$1(malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema2,options)):null);
var t1 = (cljs.core.truth_(s1)?malli.core.type.cljs$core$IFn$_invoke$arity$1(s1):null);
var t2 = (cljs.core.truth_(s2)?malli.core.type.cljs$core$IFn$_invoke$arity$1(s2):null);
var can_distribute_QMARK_ = (((!(cljs.core.contains_QMARK_(options,new cljs.core.Keyword(null,"merge-default","merge-default",1152742083))))) && ((!(cljs.core.contains_QMARK_(options,new cljs.core.Keyword(null,"merge-required","merge-required",75277811))))));
var map__29895 = options;
var map__29895__$1 = cljs.core.__destructure_map(map__29895);
var merge_default = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29895__$1,new cljs.core.Keyword(null,"merge-default","merge-default",1152742083),(function (_,s2__$1,___$1){
return s2__$1;
}));
var merge_required = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29895__$1,new cljs.core.Keyword(null,"merge-required","merge-required",75277811),(function (_,r2){
return r2;
}));
var bear = (function (p1,p2){
if(cljs.core.truth_((function (){var and__5160__auto__ = p1;
if(cljs.core.truth_(and__5160__auto__)){
return p2;
} else {
return and__5160__auto__;
}
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1,p2], 0));
} else {
var or__5162__auto__ = p1;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return p2;
}
}
});
var tear = (function (t,s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),t)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [malli.core.properties.cljs$core$IFn$_invoke$arity$1(s)], null),malli.core.children.cljs$core$IFn$_invoke$arity$1(s));
}
});
var join = (function (p__29900,p__29901){
var vec__29903 = p__29900;
var seq__29904 = cljs.core.seq(vec__29903);
var first__29905 = cljs.core.first(seq__29904);
var seq__29904__$1 = cljs.core.next(seq__29904);
var p1 = first__29905;
var first__29905__$1 = cljs.core.first(seq__29904__$1);
var seq__29904__$2 = cljs.core.next(seq__29904__$1);
var c1 = first__29905__$1;
var cs1 = seq__29904__$2;
var vec__29906 = p__29901;
var seq__29907 = cljs.core.seq(vec__29906);
var first__29908 = cljs.core.first(seq__29907);
var seq__29907__$1 = cljs.core.next(seq__29907);
var p2 = first__29908;
var first__29908__$1 = cljs.core.first(seq__29907__$1);
var seq__29907__$2 = cljs.core.next(seq__29907__$1);
var c2 = first__29908__$1;
var cs2 = seq__29907__$2;
return malli.core.into_schema.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"and","and",-971899817),bear(p1,p2),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [malli.util.merge.cljs$core$IFn$_invoke$arity$3(c1,c2,options)], null),cs1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cs2], 0)),options);
});
if((s1 == null)){
return s2;
} else {
if((s2 == null)){
return s1;
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = can_distribute_QMARK_;
if(and__5160__auto__){
return malli.core._distributive_schema_QMARK_(s1);
} else {
return and__5160__auto__;
}
})())){
return malli.core._distribute_to_children(s1,(function (s,_options){
return malli.util.merge.cljs$core$IFn$_invoke$arity$3(s,s2,options);
}),options);
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = can_distribute_QMARK_;
if(and__5160__auto__){
return malli.core._distributive_schema_QMARK_(s2);
} else {
return and__5160__auto__;
}
})())){
return malli.core._distribute_to_children(s2,(function (s,_options){
return malli.util.merge.cljs$core$IFn$_invoke$arity$3(s1,s,options);
}),options);
} else {
if(cljs.core.not((function (){var and__5160__auto__ = (function (){var fexpr__29911 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"and","and",-971899817),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null);
return (fexpr__29911.cljs$core$IFn$_invoke$arity$1 ? fexpr__29911.cljs$core$IFn$_invoke$arity$1(t1) : fexpr__29911.call(null,t1));
})();
if(cljs.core.truth_(and__5160__auto__)){
var fexpr__29913 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"and","and",-971899817),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null);
return (fexpr__29913.cljs$core$IFn$_invoke$arity$1 ? fexpr__29913.cljs$core$IFn$_invoke$arity$1(t2) : fexpr__29913.call(null,t2));
} else {
return and__5160__auto__;
}
})())){
return (merge_default.cljs$core$IFn$_invoke$arity$3 ? merge_default.cljs$core$IFn$_invoke$arity$3(s1,s2,options) : merge_default.call(null,s1,s2,options));
} else {
if((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t1,new cljs.core.Keyword(null,"map","map",1371690461))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t2,new cljs.core.Keyword(null,"map","map",1371690461))))))){
return join(tear(t1,s1),tear(t2,s2));
} else {
var p = bear(malli.core._properties(s1),malli.core._properties(s2));
var ks = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var children = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (form,p__29915){
var vec__29916 = p__29915;
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29916,(0),null);
var e2 = vec__29916;
if(cljs.core.truth_((function (){var fexpr__29919 = cljs.core.deref(ks);
return (fexpr__29919.cljs$core$IFn$_invoke$arity$1 ? fexpr__29919.cljs$core$IFn$_invoke$arity$1(k2) : fexpr__29919.call(null,k2));
})())){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc_SINGLEQUOTE_,p__29920){
var vec__29921 = p__29920;
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29921,(0),null);
var e1 = vec__29921;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_SINGLEQUOTE_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2))?malli.util._entry(e1,e2,merge_required,malli.util.merge,options):e1));
}),cljs.core.PersistentVector.EMPTY,form);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ks,cljs.core.conj,k2);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(form,e2);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.into.cljs$core$IFn$_invoke$arity$2(malli.core._children(s1),malli.core._children(s2)));
return malli.core.into_schema.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"map","map",1371690461),p,children,options);

}
}
}
}
}
}
}));

(malli.util.merge.cljs$lang$maxFixedArity = 3);

/**
 * Union of two schemas. See [[merge]] for more details.
 */
malli.util.union = (function malli$util$union(var_args){
var G__29928 = arguments.length;
switch (G__29928) {
case 2:
return malli.util.union.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.union.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.util.union.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema1,_QMARK_schema2){
return malli.util.union.cljs$core$IFn$_invoke$arity$3(_QMARK_schema1,_QMARK_schema2,null);
}));

(malli.util.union.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema1,_QMARK_schema2,options){
var merge_default = (function (s1,s2,options__$1){
if(cljs.core.truth_(malli.util.equals.cljs$core$IFn$_invoke$arity$2(s1,s2))){
return s1;
} else {
return malli.core.schema.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),s1,s2], null),options__$1);
}
});
var merge_required = (function (r1,r2){
var and__5160__auto__ = r1;
if(cljs.core.truth_(and__5160__auto__)){
return r2;
} else {
return and__5160__auto__;
}
});
return malli.util.merge.cljs$core$IFn$_invoke$arity$3(_QMARK_schema1,_QMARK_schema2,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"merge-default","merge-default",1152742083),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,merge_default)),new cljs.core.Keyword(null,"merge-required","merge-required",75277811),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,merge_required)));
}));

(malli.util.union.cljs$lang$maxFixedArity = 3);

/**
 * Returns a Schema instance with updated properties.
 */
malli.util.update_properties = (function malli$util$update_properties(var_args){
var args__5903__auto__ = [];
var len__5897__auto___30119 = arguments.length;
var i__5898__auto___30120 = (0);
while(true){
if((i__5898__auto___30120 < len__5897__auto___30119)){
args__5903__auto__.push((arguments[i__5898__auto___30120]));

var G__30121 = (i__5898__auto___30120 + (1));
i__5898__auto___30120 = G__30121;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_schema,f,args){
var schema = malli.core.schema.cljs$core$IFn$_invoke$arity$1(_QMARK_schema);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(malli.core._update_properties,schema,f,args);
}));

(malli.util.update_properties.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(malli.util.update_properties.cljs$lang$applyTo = (function (seq29932){
var G__29933 = cljs.core.first(seq29932);
var seq29932__$1 = cljs.core.next(seq29932);
var G__29934 = cljs.core.first(seq29932__$1);
var seq29932__$2 = cljs.core.next(seq29932__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29933,G__29934,seq29932__$2);
}));

/**
 * Returns a Schema instance with updated properties for entry k.
 */
malli.util.update_entry_properties = (function malli$util$update_entry_properties(var_args){
var args__5903__auto__ = [];
var len__5897__auto___30124 = arguments.length;
var i__5898__auto___30125 = (0);
while(true){
if((i__5898__auto___30125 < len__5897__auto___30124)){
args__5903__auto__.push((arguments[i__5898__auto___30125]));

var G__30126 = (i__5898__auto___30125 + (1));
i__5898__auto___30125 = G__30126;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return malli.util.update_entry_properties.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(malli.util.update_entry_properties.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_schema,k,f,args){
var schema = malli.core.schema.cljs$core$IFn$_invoke$arity$1(_QMARK_schema);
var vec__29945 = (function (){var or__5162__auto__ = (malli.util.find.cljs$core$IFn$_invoke$arity$2 ? malli.util.find.cljs$core$IFn$_invoke$arity$2(schema,k) : malli.util.find.call(null,schema,k));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.util","no-entry","malli.util/no-entry",2042444769),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"k","k",-2146297393),k], null));
}
})();
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29945,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29945,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29945,(2),null);
return malli.core._set_entries(schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p,args)], null),v);
}));

(malli.util.update_entry_properties.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(malli.util.update_entry_properties.cljs$lang$applyTo = (function (seq29939){
var G__29940 = cljs.core.first(seq29939);
var seq29939__$1 = cljs.core.next(seq29939);
var G__29941 = cljs.core.first(seq29939__$1);
var seq29939__$2 = cljs.core.next(seq29939__$1);
var G__29942 = cljs.core.first(seq29939__$2);
var seq29939__$3 = cljs.core.next(seq29939__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29940,G__29941,G__29942,seq29939__$3);
}));

/**
 * Maps are implicitly open by default. They can be explicitly closed or
 *   open by specifying the `{:closed (true|false)}` property.
 * 
 *   This function converts implicitly open maps to explicitly closed
 *   maps, recursively. Explicitly open maps are left untouched.
 * 
 *   See [[open-schema]]
 */
malli.util.closed_schema = (function malli$util$closed_schema(var_args){
var G__29952 = arguments.length;
switch (G__29952) {
case 1:
return malli.util.closed_schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.closed_schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.util.closed_schema.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.util.closed_schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.util.closed_schema.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
return malli.core.walk.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,malli.core.schema_walker((function (schema){
if(malli.util._ok_to_close_or_open_QMARK_(schema,options)){
return malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic(schema,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"closed","closed",-919675359),true], 0));
} else {
return schema;
}
})),options);
}));

(malli.util.closed_schema.cljs$lang$maxFixedArity = 2);

/**
 * Maps are implicitly open by default. They can be explicitly closed or
 *   open by specifying the `{:closed (true|false)}` property.
 * 
 *   This function converts explicitly closed maps to implicitly open
 *   maps, recursively. Explicitly open maps are left untouched.
 * 
 *   See [[closed-schema]]
 */
malli.util.open_schema = (function malli$util$open_schema(var_args){
var G__29957 = arguments.length;
switch (G__29957) {
case 1:
return malli.util.open_schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.open_schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.util.open_schema.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.util.open_schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.util.open_schema.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
return malli.core.walk.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,malli.core.schema_walker((function (schema){
if(malli.util._ok_to_close_or_open_QMARK_(schema,options)){
return malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic(schema,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"closed","closed",-919675359)], 0));
} else {
return schema;
}
})),options);
}));

(malli.util.open_schema.cljs$lang$maxFixedArity = 2);

/**
 * Returns all subschemas for unique paths as a vector of maps with :schema, :path and :in keys.
 * Walks over :schema references and top-level :refs. See [[malli.core/-walk]] for all options.
 */
malli.util.subschemas = (function malli$util$subschemas(var_args){
var G__29964 = arguments.length;
switch (G__29964) {
case 1:
return malli.util.subschemas.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.subschemas.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.util.subschemas.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.util.subschemas.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.util.subschemas.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
var schema = malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options);
var options__$1 = (function (){var ref = (function (){var and__5160__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ref","ref",1289896967),malli.core.type.cljs$core$IFn$_invoke$arity$1(schema));
if(and__5160__auto__){
return malli.core._ref(schema);
} else {
return and__5160__auto__;
}
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword("malli.core","walk-schema-refs","malli.core/walk-schema-refs",-1140065954),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,true)),new cljs.core.Keyword("malli.core","walk-refs","malli.core/walk-refs",755904802),(function (f){
return (function (p1__29961_SHARP_){
var or__5162__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ref,p1__29961_SHARP_);
if(or__5162__auto__){
return or__5162__auto__;
} else {
var fexpr__29968 = malli.core._boolean_fn(f);
return (fexpr__29968.cljs$core$IFn$_invoke$arity$1 ? fexpr__29968.cljs$core$IFn$_invoke$arity$1(p1__29961_SHARP_) : fexpr__29968.call(null,p1__29961_SHARP_));
}
});
}));
})();
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
malli.util.find_first.cljs$core$IFn$_invoke$arity$3(schema,(function (s,p,_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),p,new cljs.core.Keyword(null,"in","in",-1531184865),(malli.util.path__GT_in.cljs$core$IFn$_invoke$arity$2 ? malli.util.path__GT_in.cljs$core$IFn$_invoke$arity$2(schema,p) : malli.util.path__GT_in.call(null,schema,p)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

return null;
}),options__$1);

return cljs.core.deref(state);
}));

(malli.util.subschemas.cljs$lang$maxFixedArity = 2);

/**
 * Returns a sequence of distinct (f x) values)
 */
malli.util.distinct_by = (function malli$util$distinct_by(f,coll){
var seen = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (x){
var v = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.truth_((function (){var fexpr__29971 = cljs.core.deref(seen);
return (fexpr__29971.cljs$core$IFn$_invoke$arity$1 ? fexpr__29971.cljs$core$IFn$_invoke$arity$1(v) : fexpr__29971.call(null,v));
})())){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seen,cljs.core.conj,v);
}
}),coll);
});
/**
 * Returns a value path for a given Schema and schema path
 */
malli.util.path__GT_in = (function malli$util$path__GT_in(schema,path){
var i = (0);
var s = schema;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var or__5162__auto__ = (function (){var and__5160__auto__ = (i >= cljs.core.count(path));
if(and__5160__auto__){
return acc;
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var G__30140 = (i + (1));
var G__30141 = malli.core._get(s,(path.cljs$core$IFn$_invoke$arity$1 ? path.cljs$core$IFn$_invoke$arity$1(i) : path.call(null,i)),null);
var G__30142 = (function (){var G__29973 = acc;
if(cljs.core.truth_(malli.core._keep(s))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__29973,(path.cljs$core$IFn$_invoke$arity$1 ? path.cljs$core$IFn$_invoke$arity$1(i) : path.call(null,i)));
} else {
return G__29973;
}
})();
i = G__30140;
s = G__30141;
acc = G__30142;
continue;
}
break;
}
});
/**
 * Returns a vector of schema paths for a given Schema and value path
 */
malli.util.in__GT_paths = (function malli$util$in__GT_paths(schema,in$){
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var in_equals = (function (p__29975,p__29976){
while(true){
var vec__29977 = p__29975;
var seq__29978 = cljs.core.seq(vec__29977);
var first__29979 = cljs.core.first(seq__29978);
var seq__29978__$1 = cljs.core.next(seq__29978);
var x = first__29979;
var xs = seq__29978__$1;
var vec__29980 = p__29976;
var seq__29981 = cljs.core.seq(vec__29980);
var first__29982 = cljs.core.first(seq__29981);
var seq__29981__$1 = cljs.core.next(seq__29981);
var y = first__29982;
var ys = seq__29981__$1;
if(cljs.core.truth_((function (){var and__5160__auto__ = x;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
} else {
return and__5160__auto__;
}
})())){
var G__30145 = xs;
var G__30146 = ys;
p__29975 = G__30145;
p__29976 = G__30146;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.core","in","malli.core/in",-1208578537),x)){
var G__30148 = xs;
var G__30149 = ys;
p__29975 = G__30148;
p__29976 = G__30149;
continue;
} else {
return null;
}
}
}
break;
}
});
var parent_exists = (function (v1,v2){
var i = cljs.core.min.cljs$core$IFn$_invoke$arity$2(cljs.core.count(v1),cljs.core.count(v2));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v1,(0),i),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v2,(0),i));
});
malli.util.find_first.cljs$core$IFn$_invoke$arity$2(schema,(function (_,path,___$1){
if(cljs.core.truth_((function (){var and__5160__auto__ = in_equals(malli.util.path__GT_in(schema,path),in$);
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not(cljs.core.some((function (p1__29974_SHARP_){
return parent_exists(path,p1__29974_SHARP_);
}),cljs.core.deref(state)));
} else {
return and__5160__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.conj,path);

return null;
} else {
return null;
}
}));

return cljs.core.deref(state);
});
/**
 * Like `m/explainer` but output is pure clojure data. Schema objects have been replaced with their m/form.
 * Useful when you need to serialise errrors.
 */
malli.util.data_explainer = (function malli$util$data_explainer(var_args){
var G__29986 = arguments.length;
switch (G__29986) {
case 1:
return malli.util.data_explainer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.data_explainer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.util.data_explainer.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.util.data_explainer.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.util.data_explainer.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
var explainer_SINGLEQUOTE_ = malli.core.explainer.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options);
return (function() {
var malli$util$data_explainer = null;
var malli$util$data_explainer__1 = (function (value){
return malli$util$data_explainer.cljs$core$IFn$_invoke$arity$3(value,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
});
var malli$util$data_explainer__3 = (function (value,in$,acc){
var G__29987 = explainer_SINGLEQUOTE_(value,in$,acc);
var G__29987__$1 = (((G__29987 == null))?null:cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__29987,new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.form));
if((G__29987__$1 == null)){
return null;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__29987__$1,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,(function (p1__29984_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__29984_SHARP_,new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.form);
})));
}
});
malli$util$data_explainer = function(value,in$,acc){
switch(arguments.length){
case 1:
return malli$util$data_explainer__1.call(this,value);
case 3:
return malli$util$data_explainer__3.call(this,value,in$,acc);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
malli$util$data_explainer.cljs$core$IFn$_invoke$arity$1 = malli$util$data_explainer__1;
malli$util$data_explainer.cljs$core$IFn$_invoke$arity$3 = malli$util$data_explainer__3;
return malli$util$data_explainer;
})()
}));

(malli.util.data_explainer.cljs$lang$maxFixedArity = 2);

/**
 * Explains a value against a given schema. Like `m/explain` but output is pure clojure data.
 *   Schema objects have been replaced with their `m/form`. Useful when you need to serialise errrors.
 * 
 *   Creates the `mu/data-explainer` for every call. When performance matters, (re-)use `mu/data-explainer` instead.
 */
malli.util.explain_data = (function malli$util$explain_data(var_args){
var G__29990 = arguments.length;
switch (G__29990) {
case 2:
return malli.util.explain_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.explain_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.util.explain_data.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,value){
return malli.util.explain_data.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,value,null);
}));

(malli.util.explain_data.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,value,options){
return malli.util.data_explainer.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options)(value,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
}));

(malli.util.explain_data.cljs$lang$maxFixedArity = 3);

/**
 * Transforms entries with f.
 */
malli.util.transform_entries = (function malli$util$transform_entries(var_args){
var G__29992 = arguments.length;
switch (G__29992) {
case 2:
return malli.util.transform_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.transform_entries.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.util.transform_entries.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,f){
return malli.util.transform_entries.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,f,null);
}));

(malli.util.transform_entries.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,f,options){
var schema = malli.core.deref_all.cljs$core$IFn$_invoke$arity$1(malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options));
return malli.core.into_schema.cljs$core$IFn$_invoke$arity$4(malli.core._parent(schema),malli.core._properties(schema),(function (){var G__29994 = malli.core._children(schema);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29994) : f.call(null,G__29994));
})(),(function (){var or__5162__auto__ = malli.core.options.cljs$core$IFn$_invoke$arity$1(schema);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return options;
}
})());
}));

(malli.util.transform_entries.cljs$lang$maxFixedArity = 3);

/**
 * Makes map keys optional.
 */
malli.util.optional_keys = (function malli$util$optional_keys(var_args){
var G__29997 = arguments.length;
switch (G__29997) {
case 1:
return malli.util.optional_keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.optional_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.optional_keys.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.util.optional_keys.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.util.optional_keys.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,null,null);
}));

(malli.util.optional_keys.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,_QMARK_keys){
var vec__29999 = ((cljs.core.map_QMARK_(_QMARK_keys))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,_QMARK_keys], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_keys,null], null));
var keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29999,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29999,(1),null);
return malli.util.optional_keys.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,keys,options);
}));

(malli.util.optional_keys.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,keys,options){
var accept = (cljs.core.truth_(keys)?cljs.core.set(keys):cljs.core.constantly(true));
var mapper = (function (p__30002){
var vec__30003 = p__30002;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30003,(0),null);
var e = vec__30003;
if(cljs.core.truth_((accept.cljs$core$IFn$_invoke$arity$1 ? accept.cljs$core$IFn$_invoke$arity$1(k) : accept.call(null,k)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(e,(1),cljs.core.assoc,new cljs.core.Keyword(null,"optional","optional",2053951509),true);
} else {
return e;
}
});
return malli.util.transform_entries.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,(function (p1__29995_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mapper,p1__29995_SHARP_);
}),options);
}));

(malli.util.optional_keys.cljs$lang$maxFixedArity = 3);

/**
 * Makes map keys required.
 */
malli.util.required_keys = (function malli$util$required_keys(var_args){
var G__30009 = arguments.length;
switch (G__30009) {
case 1:
return malli.util.required_keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.util.required_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.required_keys.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.util.required_keys.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.util.required_keys.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,null,null);
}));

(malli.util.required_keys.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,_QMARK_keys){
var vec__30010 = ((cljs.core.map_QMARK_(_QMARK_keys))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,_QMARK_keys], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_keys,null], null));
var keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30010,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30010,(1),null);
return malli.util.required_keys.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,keys,options);
}));

(malli.util.required_keys.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,keys,options){
var accept = (cljs.core.truth_(keys)?cljs.core.set(keys):cljs.core.constantly(true));
var required = (function (p){
var p_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"optional","optional",2053951509));
if(cljs.core.seq(p_SINGLEQUOTE_)){
return p_SINGLEQUOTE_;
} else {
return null;
}
});
var mapper = (function (p__30014){
var vec__30015 = p__30014;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30015,(0),null);
var e = vec__30015;
if(cljs.core.truth_((accept.cljs$core$IFn$_invoke$arity$1 ? accept.cljs$core$IFn$_invoke$arity$1(k) : accept.call(null,k)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(e,(1),required);
} else {
return e;
}
});
return malli.util.transform_entries.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,(function (p1__30006_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mapper,p1__30006_SHARP_);
}),options);
}));

(malli.util.required_keys.cljs$lang$maxFixedArity = 3);

/**
 * Like [[clojure.core/select-keys]], but for EntrySchemas.
 */
malli.util.select_keys = (function malli$util$select_keys(var_args){
var G__30020 = arguments.length;
switch (G__30020) {
case 2:
return malli.util.select_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.select_keys.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.util.select_keys.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,keys){
return malli.util.select_keys.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,keys,null);
}));

(malli.util.select_keys.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,keys,options){
var key_set = cljs.core.set(keys);
return malli.util.transform_entries.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,(function (p1__30018_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__30021){
var vec__30022 = p__30021;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30022,(0),null);
return (key_set.cljs$core$IFn$_invoke$arity$1 ? key_set.cljs$core$IFn$_invoke$arity$1(k) : key_set.call(null,k));
}),p1__30018_SHARP_);
}),options);
}));

(malli.util.select_keys.cljs$lang$maxFixedArity = 3);

/**
 * Like [[clojure.set/rename-keys]], but for EntrySchemas. Collisions are resolved in favor of the renamed key, like `assoc`-ing.
 */
malli.util.rename_keys = (function malli$util$rename_keys(var_args){
var G__30028 = arguments.length;
switch (G__30028) {
case 2:
return malli.util.rename_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.rename_keys.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.util.rename_keys.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,kmap){
return malli.util.rename_keys.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,kmap,null);
}));

(malli.util.rename_keys.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,kmap,options){
return malli.util.transform_entries.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,(function (entries){
var source_keys = cljs.core.set(cljs.core.keys(kmap));
var target_keys = cljs.core.set(cljs.core.vals(kmap));
var remove_conflicts = (function (p__30032){
var vec__30033 = p__30032;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30033,(0),null);
var or__5162__auto__ = (source_keys.cljs$core$IFn$_invoke$arity$1 ? source_keys.cljs$core$IFn$_invoke$arity$1(k) : source_keys.call(null,k));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.not((target_keys.cljs$core$IFn$_invoke$arity$1 ? target_keys.cljs$core$IFn$_invoke$arity$1(k) : target_keys.call(null,k)));
}
});
var alter_keys = (function (p__30036){
var vec__30037 = p__30036;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30037,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30037,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30037,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$3(kmap,k,k),m,v], null);
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(alter_keys,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(remove_conflicts,entries));
}),options);
}));

(malli.util.rename_keys.cljs$lang$maxFixedArity = 3);

/**
 * Like [[clojure.core/dissoc]], but for EntrySchemas. Only supports one key at a time.
 */
malli.util.dissoc = (function malli$util$dissoc(var_args){
var G__30042 = arguments.length;
switch (G__30042) {
case 2:
return malli.util.dissoc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.dissoc.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.util.dissoc.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,key){
return malli.util.dissoc.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,key,null);
}));

(malli.util.dissoc.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,key,options){
return malli.util.transform_entries.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,(function (p1__30040_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__30044){
var vec__30045 = p__30044;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30045,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,k);
}),p1__30040_SHARP_);
}),options);
}));

(malli.util.dissoc.cljs$lang$maxFixedArity = 3);

/**
 * Like [[clojure.core/find]], but for EntrySchemas.
 */
malli.util.find = (function malli$util$find(var_args){
var G__30049 = arguments.length;
switch (G__30049) {
case 2:
return malli.util.find.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.find.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.util.find.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,k){
return malli.util.find.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,k,null);
}));

(malli.util.find.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,k,options){
var schema = malli.core.schema.cljs$core$IFn$_invoke$arity$2((function (){var or__5162__auto__ = _QMARK_schema;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"map","map",1371690461);
}
})(),options);
if(cljs.core.truth_(schema)){
return malli.core._get(schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli.core","find","malli.core/find",163301512),k], null),null);
} else {
return null;
}
}));

(malli.util.find.cljs$lang$maxFixedArity = 3);

/**
 * Like [[clojure.core/keys]], but for EntrySchemas.
 */
malli.util.keys = (function malli$util$keys(_QMARK_schema){
var temp__5825__auto__ = malli.core.entries.cljs$core$IFn$_invoke$arity$1(_QMARK_schema);
if(cljs.core.truth_(temp__5825__auto__)){
var ents = temp__5825__auto__;
var iter__5649__auto__ = (function malli$util$keys_$_iter__30050(s__30051){
return (new cljs.core.LazySeq(null,(function (){
var s__30051__$1 = s__30051;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__30051__$1);
if(temp__5825__auto____$1){
var s__30051__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30051__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__30051__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__30053 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__30052 = (0);
while(true){
if((i__30052 < size__5648__auto__)){
var vec__30054 = cljs.core._nth(c__5647__auto__,i__30052);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30054,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30054,(1),null);
cljs.core.chunk_append(b__30053,k);

var G__30195 = (i__30052 + (1));
i__30052 = G__30195;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30053),malli$util$keys_$_iter__30050(cljs.core.chunk_rest(s__30051__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30053),null);
}
} else {
var vec__30057 = cljs.core.first(s__30051__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30057,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30057,(1),null);
return cljs.core.cons(k,malli$util$keys_$_iter__30050(cljs.core.rest(s__30051__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(ents);
} else {
return null;
}
});
/**
 * Like [[clojure.core/get]], but for LensSchemas.
 */
malli.util.get = (function malli$util$get(var_args){
var G__30061 = arguments.length;
switch (G__30061) {
case 2:
return malli.util.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return malli.util.get.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.util.get.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,k){
return malli.util.get.cljs$core$IFn$_invoke$arity$4(_QMARK_schema,k,null,null);
}));

(malli.util.get.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,k,default$){
return malli.util.get.cljs$core$IFn$_invoke$arity$4(_QMARK_schema,k,default$,null);
}));

(malli.util.get.cljs$core$IFn$_invoke$arity$4 = (function (_QMARK_schema,k,default$,options){
var schema = malli.core.schema.cljs$core$IFn$_invoke$arity$2((function (){var or__5162__auto__ = _QMARK_schema;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"map","map",1371690461);
}
})(),options);
if(cljs.core.truth_(schema)){
return malli.core._get(schema,k,default$);
} else {
return null;
}
}));

(malli.util.get.cljs$lang$maxFixedArity = 4);

/**
 * Like [[clojure.core/assoc]], but for LensSchemas. Only supports one key-value pair at a time.
 */
malli.util.assoc = (function malli$util$assoc(var_args){
var G__30064 = arguments.length;
switch (G__30064) {
case 3:
return malli.util.assoc.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return malli.util.assoc.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.util.assoc.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,key,value){
return malli.util.assoc.cljs$core$IFn$_invoke$arity$4(_QMARK_schema,key,value,null);
}));

(malli.util.assoc.cljs$core$IFn$_invoke$arity$4 = (function (_QMARK_schema,key,value,options){
return malli.core._set(malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options),key,value);
}));

(malli.util.assoc.cljs$lang$maxFixedArity = 4);

/**
 * Like [[clojure.core/update]], but for LensSchema instances.
 */
malli.util.update = (function malli$util$update(var_args){
var args__5903__auto__ = [];
var len__5897__auto___30199 = arguments.length;
var i__5898__auto___30201 = (0);
while(true){
if((i__5898__auto___30201 < len__5897__auto___30199)){
args__5903__auto__.push((arguments[i__5898__auto___30201]));

var G__30205 = (i__5898__auto___30201 + (1));
i__5898__auto___30201 = G__30205;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return malli.util.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(malli.util.update.cljs$core$IFn$_invoke$arity$variadic = (function (schema,key,f,args){
return malli.core._set(malli.core.schema.cljs$core$IFn$_invoke$arity$1(schema),key,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,malli.util.get.cljs$core$IFn$_invoke$arity$2(schema,key),args));
}));

(malli.util.update.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(malli.util.update.cljs$lang$applyTo = (function (seq30066){
var G__30067 = cljs.core.first(seq30066);
var seq30066__$1 = cljs.core.next(seq30066);
var G__30068 = cljs.core.first(seq30066__$1);
var seq30066__$2 = cljs.core.next(seq30066__$1);
var G__30069 = cljs.core.first(seq30066__$2);
var seq30066__$3 = cljs.core.next(seq30066__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30067,G__30068,G__30069,seq30066__$3);
}));

/**
 * Like [[clojure.core/get-in]], but for LensSchemas.
 */
malli.util.get_in = (function malli$util$get_in(var_args){
var G__30076 = arguments.length;
switch (G__30076) {
case 2:
return malli.util.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return malli.util.get_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.util.get_in.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,ks){
return malli.util.get_in.cljs$core$IFn$_invoke$arity$4(_QMARK_schema,ks,null,null);
}));

(malli.util.get_in.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,ks,default$){
return malli.util.get_in.cljs$core$IFn$_invoke$arity$4(_QMARK_schema,ks,default$,null);
}));

(malli.util.get_in.cljs$core$IFn$_invoke$arity$4 = (function (_QMARK_schema,ks,default$,options){
var schema = malli.core.schema.cljs$core$IFn$_invoke$arity$2((function (){var or__5162__auto__ = _QMARK_schema;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"map","map",1371690461);
}
})(),options);
if(cljs.core.not(cljs.core.seq(ks))){
return schema;
} else {
var vec__30077 = ks;
var seq__30078 = cljs.core.seq(vec__30077);
var first__30079 = cljs.core.first(seq__30078);
var seq__30078__$1 = cljs.core.next(seq__30078);
var k = first__30079;
var ks__$1 = seq__30078__$1;
var sentinel = ({});
var schema__$1 = malli.util.get.cljs$core$IFn$_invoke$arity$3(schema,k,sentinel);
if((schema__$1 === sentinel)){
return default$;
} else {
if(ks__$1){
return malli.util.get_in.cljs$core$IFn$_invoke$arity$3(schema__$1,ks__$1,default$);
} else {
return schema__$1;

}
}
}
}));

(malli.util.get_in.cljs$lang$maxFixedArity = 4);

/**
 * Like [[clojure.core/assoc-in]], but for LensSchemas.
 */
malli.util.assoc_in = (function malli$util$assoc_in(var_args){
var G__30083 = arguments.length;
switch (G__30083) {
case 3:
return malli.util.assoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return malli.util.assoc_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(malli.util.assoc_in.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,ks,value){
return malli.util.assoc_in.cljs$core$IFn$_invoke$arity$4(_QMARK_schema,ks,value,null);
}));

(malli.util.assoc_in.cljs$core$IFn$_invoke$arity$4 = (function (_QMARK_schema,p__30084,value,options){
var vec__30085 = p__30084;
var seq__30086 = cljs.core.seq(vec__30085);
var first__30087 = cljs.core.first(seq__30086);
var seq__30086__$1 = cljs.core.next(seq__30086);
var k = first__30087;
var ks = seq__30086__$1;
var schema = malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options);
return malli.util.assoc.cljs$core$IFn$_invoke$arity$3(schema,k,((ks)?malli.util.assoc_in.cljs$core$IFn$_invoke$arity$3(malli.util.get.cljs$core$IFn$_invoke$arity$3(schema,k,malli.core.schema.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),malli.core.options.cljs$core$IFn$_invoke$arity$1(schema))),ks,value):value));
}));

(malli.util.assoc_in.cljs$lang$maxFixedArity = 4);

/**
 * Like [[clojure.core/update-in]], but for LensSchemas.
 */
malli.util.update_in = (function malli$util$update_in(var_args){
var args__5903__auto__ = [];
var len__5897__auto___30211 = arguments.length;
var i__5898__auto___30212 = (0);
while(true){
if((i__5898__auto___30212 < len__5897__auto___30211)){
args__5903__auto__.push((arguments[i__5898__auto___30212]));

var G__30213 = (i__5898__auto___30212 + (1));
i__5898__auto___30212 = G__30213;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return malli.util.update_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(malli.util.update_in.cljs$core$IFn$_invoke$arity$variadic = (function (schema,ks,f,args){
var up = (function malli$util$up(s,p__30099,f__$1,args__$1){
var vec__30100 = p__30099;
var seq__30101 = cljs.core.seq(vec__30100);
var first__30102 = cljs.core.first(seq__30101);
var seq__30101__$1 = cljs.core.next(seq__30101);
var k = first__30102;
var ks__$1 = seq__30101__$1;
return malli.util.assoc.cljs$core$IFn$_invoke$arity$3(s,k,((ks__$1)?malli$util$up(malli.util.get.cljs$core$IFn$_invoke$arity$3(s,k,malli.core.schema.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),malli.core.options.cljs$core$IFn$_invoke$arity$1(schema))),ks__$1,f__$1,args__$1):cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f__$1,malli.util.get.cljs$core$IFn$_invoke$arity$2(s,k),args__$1)));
});
return up(schema,ks,f,args);
}));

(malli.util.update_in.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(malli.util.update_in.cljs$lang$applyTo = (function (seq30088){
var G__30089 = cljs.core.first(seq30088);
var seq30088__$1 = cljs.core.next(seq30088);
var G__30090 = cljs.core.first(seq30088__$1);
var seq30088__$2 = cljs.core.next(seq30088__$1);
var G__30091 = cljs.core.first(seq30088__$2);
var seq30088__$3 = cljs.core.next(seq30088__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30089,G__30090,G__30091,seq30088__$3);
}));

malli.util._reducing = (function malli$util$_reducing(f){
return (function (_,children,options){
if(cljs.core.empty_QMARK_(children)){
malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("malli.util","reducing-children-must-be-non-empty","malli.util/reducing-children-must-be-non-empty",-2057410793));
} else {
}

var vec__30106 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30103_SHARP_){
return malli.core.schema.cljs$core$IFn$_invoke$arity$2(p1__30103_SHARP_,options);
}),children);
var seq__30107 = cljs.core.seq(vec__30106);
var first__30108 = cljs.core.first(seq__30107);
var seq__30107__$1 = cljs.core.next(seq__30107);
var first = first__30108;
var rest = seq__30107__$1;
var children__$1 = vec__30106;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [children__$1,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.core.form,children__$1),(new cljs.core.Delay((function (){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__30104_SHARP_,p2__30105_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(p1__30104_SHARP_,p2__30105_SHARP_,options) : f.call(null,p1__30104_SHARP_,p2__30105_SHARP_,options));
}),first,rest);
}),null))], null);
});
});
malli.util._applying = (function malli$util$_applying(f){
return (function (_,children,options){
var children__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(children,(0),malli.core.schema,options);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [children__$1,cljs.core.update.cljs$core$IFn$_invoke$arity$3(children__$1,(0),malli.core._form),(new cljs.core.Delay((function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(children__$1))){
var G__30109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
var G__30110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
var G__30111 = options;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__30109,G__30110,G__30111) : f.call(null,G__30109,G__30110,G__30111));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children__$1,options));
}
}),null))], null);
});
});
malli.util._util_schema = (function malli$util$_util_schema(m){
return malli.core._proxy_schema(m);
});
malli.util._merge = (function malli$util$_merge(){
return malli.util._util_schema(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.Keyword(null,"fn","fn",-1175266204),malli.util._reducing(malli.util.merge),new cljs.core.Keyword(null,"min","min",444991522),(1)], null));
});
malli.util._union = (function malli$util$_union(){
return malli.util._util_schema(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"fn","fn",-1175266204),malli.util._reducing(malli.util.union),new cljs.core.Keyword(null,"min","min",444991522),(1)], null));
});
malli.util._select_keys = (function malli$util$_select_keys(){
return malli.util._util_schema(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"select-keys","select-keys",1945879180),new cljs.core.Keyword(null,"childs","childs",-1293201887),(1),new cljs.core.Keyword(null,"min","min",444991522),(2),new cljs.core.Keyword(null,"max","max",61366548),(2),new cljs.core.Keyword(null,"fn","fn",-1175266204),malli.util._applying(malli.util.select_keys)], null));
});
malli.util.schemas = (function malli$util$schemas(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"merge","merge",-1804319409),malli.util._merge(),new cljs.core.Keyword(null,"union","union",2142937499),malli.util._union(),new cljs.core.Keyword(null,"select-keys","select-keys",1945879180),malli.util._select_keys()], null);
});

//# sourceMappingURL=malli.util.js.map
