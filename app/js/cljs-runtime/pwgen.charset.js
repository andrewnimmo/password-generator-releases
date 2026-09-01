goog.provide('pwgen.charset');
/**
 * The layout compatibility set, straight from resources/layouts.edn.
 */
pwgen.charset.layouts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Physical key maps for the layout compatibility set. Latin QWERTY variants\n  (ES/IT/PT/Nordic/LatAm) keep these letter positions and are covered by\n  :qwerty-us. Turkish-Q's dotless-\u0131 on the i key is documented out of scope\n  (SPEC \u00A74).",new cljs.core.Keyword(null,"layouts","layouts",11991539),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"qwerty-us","qwerty-us",-347600879),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["qwertyuiop","asdfghjkl;","zxcvbnm,./"], null),new cljs.core.Keyword(null,"digits-unshifted","digits-unshifted",296025979),"1234567890"], null),new cljs.core.Keyword(null,"qwertz-de","qwertz-de",1462347449),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["qwertzuiop","asdfghjkl\u00F6","yxcvbnm,.-"], null),new cljs.core.Keyword(null,"digits-unshifted","digits-unshifted",296025979),"1234567890"], null),new cljs.core.Keyword(null,"azerty-fr","azerty-fr",-1945359057),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["azertyuiop","qsdfghjklm","wxcvbn,;:!"], null),new cljs.core.Keyword(null,"digits-unshifted","digits-unshifted",296025979),"&\u00E9\"'(-\u00E8_\u00E7\u00E0"], null)], null)], null);
pwgen.charset.ascii_lower = cljs.core.set(cljs.core.seq("abcdefghijklmnopqrstuvwxyz"));
/**
 * Returns the set of letters that occupy the same physical key position in
 *   every given layout.
 * 
 *   Row strings are position-aligned (see layouts.edn): comparing index j of
 *   row i across layouts compares one physical key. A position contributes a
 *   letter iff every layout produces the SAME character there and that
 *   character is a-z.
 */
pwgen.charset.derive_invariant_letters = (function pwgen$charset$derive_invariant_letters(layout_maps){
var row_count = cljs.core.count(new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(cljs.core.first(layout_maps)));
return cljs.core.set((function (){var iter__5649__auto__ = (function pwgen$charset$derive_invariant_letters_$_iter__21874(s__21875){
return (new cljs.core.LazySeq(null,(function (){
var s__21875__$1 = s__21875;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__21875__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var i = cljs.core.first(xs__6385__auto__);
var rows = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__21875__$1,i,xs__6385__auto__,temp__5825__auto__,row_count){
return (function (p1__21870_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(p1__21870_SHARP_),i);
});})(s__21875__$1,i,xs__6385__auto__,temp__5825__auto__,row_count))
,layout_maps);
var width = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,rows));
var iterys__5645__auto__ = ((function (s__21875__$1,rows,width,i,xs__6385__auto__,temp__5825__auto__,row_count){
return (function pwgen$charset$derive_invariant_letters_$_iter__21874_$_iter__21876(s__21877){
return (new cljs.core.LazySeq(null,((function (s__21875__$1,rows,width,i,xs__6385__auto__,temp__5825__auto__,row_count){
return (function (){
var s__21877__$1 = s__21877;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__21877__$1);
if(temp__5825__auto____$1){
var s__21877__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21877__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__21877__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__21879 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__21878 = (0);
while(true){
if((i__21878 < size__5648__auto__)){
var j = cljs.core._nth(c__5647__auto__,i__21878);
var chars_at_j = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__21878,s__21877__$1,s__21875__$1,j,c__5647__auto__,size__5648__auto__,b__21879,s__21877__$2,temp__5825__auto____$1,rows,width,i,xs__6385__auto__,temp__5825__auto__,row_count){
return (function (p1__21871_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(p1__21871_SHARP_),j);
});})(i__21878,s__21877__$1,s__21875__$1,j,c__5647__auto__,size__5648__auto__,b__21879,s__21877__$2,temp__5825__auto____$1,rows,width,i,xs__6385__auto__,temp__5825__auto__,row_count))
,rows);
if(cljs.core.truth_((function (){var and__5160__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,chars_at_j);
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.contains_QMARK_(pwgen.charset.ascii_lower,cljs.core.first(chars_at_j));
} else {
return and__5160__auto__;
}
})())){
cljs.core.chunk_append(b__21879,cljs.core.first(chars_at_j));

var G__21938 = (i__21878 + (1));
i__21878 = G__21938;
continue;
} else {
var G__21941 = (i__21878 + (1));
i__21878 = G__21941;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21879),pwgen$charset$derive_invariant_letters_$_iter__21874_$_iter__21876(cljs.core.chunk_rest(s__21877__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21879),null);
}
} else {
var j = cljs.core.first(s__21877__$2);
var chars_at_j = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__21877__$1,s__21875__$1,j,s__21877__$2,temp__5825__auto____$1,rows,width,i,xs__6385__auto__,temp__5825__auto__,row_count){
return (function (p1__21871_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(p1__21871_SHARP_),j);
});})(s__21877__$1,s__21875__$1,j,s__21877__$2,temp__5825__auto____$1,rows,width,i,xs__6385__auto__,temp__5825__auto__,row_count))
,rows);
if(cljs.core.truth_((function (){var and__5160__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,chars_at_j);
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.contains_QMARK_(pwgen.charset.ascii_lower,cljs.core.first(chars_at_j));
} else {
return and__5160__auto__;
}
})())){
return cljs.core.cons(cljs.core.first(chars_at_j),pwgen$charset$derive_invariant_letters_$_iter__21874_$_iter__21876(cljs.core.rest(s__21877__$2)));
} else {
var G__21945 = cljs.core.rest(s__21877__$2);
s__21877__$1 = G__21945;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__21875__$1,rows,width,i,xs__6385__auto__,temp__5825__auto__,row_count))
,null,null));
});})(s__21875__$1,rows,width,i,xs__6385__auto__,temp__5825__auto__,row_count))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(width)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,pwgen$charset$derive_invariant_letters_$_iter__21874(cljs.core.rest(s__21875__$1)));
} else {
var G__21947 = cljs.core.rest(s__21875__$1);
s__21875__$1 = G__21947;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(row_count));
})());
});
/**
 * The derived invariant letter set — SPEC §4 documents this as exactly
 *   20 letters (e r t u i o p / s d f g h j k l / x c v b n); the test suite
 *   holds the two in lockstep.
 */
pwgen.charset.invariant_letters = pwgen.charset.derive_invariant_letters(cljs.core.vals(new cljs.core.Keyword(null,"layouts","layouts",11991539).cljs$core$IFn$_invoke$arity$1(pwgen.charset.layouts)));
/**
 * False in the shipped layout set: digits share physical keys everywhere,
 *   but AZERTY produces symbols unshifted — the data itself records why the
 *   :invariant-digits tier carries a caveat (SPEC §4).
 */
pwgen.charset.digits_position_invariant_QMARK_ = (function pwgen$charset$digits_position_invariant_QMARK_(){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"digits-unshifted","digits-unshifted",296025979),cljs.core.vals(new cljs.core.Keyword(null,"layouts","layouts",11991539).cljs$core$IFn$_invoke$arity$1(pwgen.charset.layouts))));
});
pwgen.charset.invariant_lower_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(pwgen.charset.invariant_letters));
pwgen.charset.standard_lower_str = "abcdefghijklmnopqrstuvwxyz";
pwgen.charset.digits_str = "0123456789";
/**
 * Builds a membership set from strings: the lower-case letters, their
 *   upper-case forms (Shift works identically on every layout, so case is
 *   free), and any extra characters.
 */
pwgen.charset.charset = (function pwgen$charset$charset(lower_str,extra_str){
return cljs.core.set(cljs.core.seq((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lower_str)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pwgen.i18n.upper_case(lower_str))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_str))));
});
/**
 * Tier keyword -> set of permitted characters (SPEC §4 table).
 * 
 *   :invariant        the 20 derived letters, both cases, and space.
 *   :invariant-digits :invariant plus 0-9 (digits need Shift on AZERTY — the
 *                  documented caveat; used only where a policy demands a
 *                  digit class, e.g. AD's 3-of-4).
 *   :standard         full ASCII letters + digits + space. Typeable on any
 *                  correctly-configured layout but NOT mismatch-safe;
 *                  explicit opt-out that the UI must flag.
 */
pwgen.charset.tiers = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"invariant","invariant",-1658446508),pwgen.charset.charset(pwgen.charset.invariant_lower_str," "),new cljs.core.Keyword(null,"invariant-digits","invariant-digits",2057084939),pwgen.charset.charset(pwgen.charset.invariant_lower_str,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pwgen.charset.digits_str)+" ")),new cljs.core.Keyword(null,"standard","standard",-1769206695),pwgen.charset.charset(pwgen.charset.standard_lower_str,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pwgen.charset.digits_str)+" "))], null);
/**
 * The permitted character set for `tier`, or nil for an unknown tier.
 */
pwgen.charset.tier_chars = (function pwgen$charset$tier_chars(tier){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pwgen.charset.tiers,tier);
});
/**
 * True when every character of `s` is permitted by `tier`.
 */
pwgen.charset.conforms_QMARK_ = (function pwgen$charset$conforms_QMARK_(tier,s){
var allowed = pwgen.charset.tier_chars(tier);
return cljs.core.boolean$((function (){var and__5160__auto__ = allowed;
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.every_QMARK_(allowed,cljs.core.seq(s));
} else {
return and__5160__auto__;
}
})());
});

//# sourceMappingURL=pwgen.charset.js.map
