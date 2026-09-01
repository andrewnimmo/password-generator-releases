goog.provide('pwgen.ui');
pwgen.ui.spec = (function pwgen$ui$spec(state){
return pwgen.specs.get_spec(new cljs.core.Keyword(null,"spec-id","spec-id",-962209608).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Maps a spec's charset tier to the word-list tier that serves it: words
 *   never contain digits, so :invariant-digits draws from the :invariant list
 *   (the digits come from the generated digit block, not the words).
 */
pwgen.ui.wordlist_tier = (function pwgen$ui$wordlist_tier(charset_tier){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(charset_tier,new cljs.core.Keyword(null,"standard","standard",-1769206695))){
return new cljs.core.Keyword(null,"standard","standard",-1769206695);
} else {
return new cljs.core.Keyword(null,"invariant","invariant",-1658446508);
}
});
pwgen.ui.pin_mode_QMARK_ = (function pwgen$ui$pin_mode_QMARK_(state){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(pwgen.ui.spec(state)));
});
pwgen.ui.effective_separator = (function pwgen$ui$effective_separator(state){
var or__5162__auto__ = new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pwgen.ui.spec(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
}
});
pwgen.ui.effective_pin_length = (function pwgen$ui$effective_pin_length(state){
var or__5162__auto__ = new cljs.core.Keyword(null,"pin-length","pin-length",1397374123).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pwgen.ui.spec(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
}
});
/**
 * How many words remain after the AD name filter — the K the entropy math
 *   must use (SPEC §3: honest accounting uses the list actually drawn from).
 */
pwgen.ui.filtered_list_size = (function pwgen$ui$filtered_list_size(state){
var words = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"words","words",1924933001)], null));
var ex = new cljs.core.Keyword(null,"exclude-name-tokens","exclude-name-tokens",1308643577).cljs$core$IFn$_invoke$arity$1(pwgen.ui.spec(state));
var tokens = (cljs.core.truth_(ex)?pwgen.names.name_tokens(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"min-token-length","min-token-length",571102553).cljs$core$IFn$_invoke$arity$1(ex)):cljs.core.PersistentHashSet.EMPTY);
return cljs.core.count(pwgen.names.remove_token_words((function (){var or__5162__auto__ = words;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),tokens));
});
/**
 * The smallest allowed word count that meets the entropy floor with the
 *   current (name-filtered) list, or nil when even the maximum falls short.
 * 
 *   This drives the ruling of 2026-08-31: counts below it are simply not
 *   offered — prevention instead of an auto-raise plus a warning.
 */
pwgen.ui.min_valid_word_count = (function pwgen$ui$min_valid_word_count(state){
var sp = pwgen.ui.spec(state);
var k = pwgen.ui.filtered_list_size(state);
if((k >= (2))){
return pwgen.entropy.min_words_for_floor(k,new cljs.core.Keyword(null,"entropy-floor-bits","entropy-floor-bits",-772196498).cljs$core$IFn$_invoke$arity$1(sp),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"digits","digits",-1134635061),new cljs.core.Keyword(null,"count","count",2139924085)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words","words",1924933001),new cljs.core.Keyword(null,"min","min",444991522)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words","words",1924933001),new cljs.core.Keyword(null,"max","max",61366548)], null)));
} else {
return null;
}
});
pwgen.ui.word_count_selectable_QMARK_ = (function pwgen$ui$word_count_selectable_QMARK_(state,n){
var temp__5823__auto__ = pwgen.ui.min_valid_word_count(state);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return (cljs.core.long$(n) >= cljs.core.long$(m));
} else {
return false;
}
});
/**
 * The counts the picker OFFERS: only those meeting the entropy floor.
 *   When the floor is unreachable the full range is returned; the picker is
 *   moot then, since Generate is disabled with an explanation.
 */
pwgen.ui.word_count_options = (function pwgen$ui$word_count_options(state){
var map__30537 = new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(pwgen.ui.spec(state));
var map__30537__$1 = cljs.core.__destructure_map(map__30537);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30537__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30537__$1,new cljs.core.Keyword(null,"max","max",61366548));
var all = cljs.core.vec(cljs.core.range.cljs$core$IFn$_invoke$arity$2(min,(max + (1))));
var valid = cljs.core.filterv((function (p1__30536_SHARP_){
return pwgen.ui.word_count_selectable_QMARK_(state,p1__30536_SHARP_);
}),all);
if(cljs.core.seq(valid)){
return valid;
} else {
return all;
}
});
/**
 * The count generation will use: the user's choice (or the spec default),
 *   climbing to the smallest valid count when the list has shrunk under it —
 *   visibly, in the picker itself, never as a hidden raise.
 */
pwgen.ui.effective_word_count = (function pwgen$ui$effective_word_count(state){
var chosen = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"word-count","word-count",-108883606).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pwgen.ui.spec(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words","words",1924933001),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
}
})();
var temp__5823__auto__ = pwgen.ui.min_valid_word_count(state);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(chosen,m);
} else {
return chosen;
}
});
/**
 * The live entropy readout for the CURRENT settings. Since the picker only
 *   offers counts that meet the floor, the readout is either a valid figure
 *   or :unreachable? — there is no raised state to warn about.
 */
pwgen.ui.preview = (function pwgen$ui$preview(state){
var sp = pwgen.ui.spec(state);
var floor = new cljs.core.Keyword(null,"entropy-floor-bits","entropy-floor-bits",-772196498).cljs$core$IFn$_invoke$arity$1(sp);
if(pwgen.ui.pin_mode_QMARK_(state)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bits","bits",-1206785969),pwgen.entropy.digits_bits(pwgen.ui.effective_pin_length(state)),new cljs.core.Keyword(null,"floor","floor",1882041021),floor], null);
} else {
if(cljs.core.truth_(pwgen.ui.min_valid_word_count(state))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bits","bits",-1206785969),pwgen.entropy.passphrase_bits(pwgen.ui.filtered_list_size(state),pwgen.ui.effective_word_count(state),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"digits","digits",-1134635061),new cljs.core.Keyword(null,"count","count",2139924085)], null))),new cljs.core.Keyword(null,"floor","floor",1882041021),floor,new cljs.core.Keyword(null,"unreachable?","unreachable?",695552349),false], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bits","bits",-1206785969),(0),new cljs.core.Keyword(null,"floor","floor",1882041021),floor,new cljs.core.Keyword(null,"unreachable?","unreachable?",695552349),true], null);
}
}
});
/**
 * Maps a pwgen.core ex-data map to [i18n-key & args] for display; total
 *   over the engine's error vocabulary (the test suite proves it).
 */
pwgen.ui.error__GT_message = (function pwgen$ui$error__GT_message(p__30538){
var map__30539 = p__30538;
var map__30539__$1 = cljs.core.__destructure_map(map__30539);
var data = map__30539__$1;
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30539__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var G__30540 = error;
var G__30540__$1 = (((G__30540 instanceof cljs.core.Keyword))?G__30540.fqn:null);
switch (G__30540__$1) {
case "word-count-out-of-range":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","word-count-out-of-range","error/word-count-out-of-range",302751774),new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(data)], null);

break;
case "length-out-of-range":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","length-out-of-range","error/length-out-of-range",-1327909830),new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(data)], null);

break;
case "wordlist-too-small":
case "entropy-floor-unreachable":
case "generation-failed":
case "separator-not-allowed":
case "unknown-spec":
case "invalid-spec":
case "wordlist-tier-mismatch":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("error",cljs.core.name(error))], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("error","unexpected","error/unexpected",-1245546352),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = error;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return data;
}
})()))], null);

}
});
/**
 * Runs the engine for the current state and returns the state with either
 *   :result or displayable :error data — never a thrown exception.
 */
pwgen.ui.generate = (function pwgen$ui$generate(state){
var sp = pwgen.ui.spec(state);
try{var result = pwgen.core.generate(((pwgen.ui.pin_mode_QMARK_(state))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"spec","spec",347520401),sp,new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"pin-length","pin-length",1397374123).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"rng","rng",1082666016),new cljs.core.Keyword(null,"rng","rng",1082666016).cljs$core$IFn$_invoke$arity$1(state)], null):new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"spec","spec",347520401),sp,new cljs.core.Keyword(null,"wordlist","wordlist",1407847085),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"words","words",1924933001)], null)),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"word-count","word-count",-108883606),pwgen.ui.effective_word_count(state),new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"rng","rng",1082666016),new cljs.core.Keyword(null,"rng","rng",1082666016).cljs$core$IFn$_invoke$arity$1(state)], null)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"result","result",1415092211),result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"copied?","copied?",301314040),false], 0));
}catch (e30541){var e = e30541;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"result","result",1415092211),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),(function (){var or__5162__auto__ = cljs.core.ex_data(e);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.ex_message(e)], null);
}
})()], 0));
}});
/**
 * Saved settings come from a file or browser storage: user-editable,
 *   possibly stale from an older version. Every value is checked against
 *   what this version actually accepts; anything surprising falls back to
 *   the default rather than poisoning the session. Shell-specific keys
 *   (:auto-clear? :check-updates-on-start? :window) pass through for the
 *   desktop and are simply unused on the web.
 */
pwgen.ui.sanitize_settings = (function pwgen$ui$sanitize_settings(saved){
var spec_id = (cljs.core.truth_(pwgen.specs.get_spec(new cljs.core.Keyword(null,"spec-id","spec-id",-962209608).cljs$core$IFn$_invoke$arity$1(saved)))?new cljs.core.Keyword(null,"spec-id","spec-id",-962209608).cljs$core$IFn$_invoke$arity$1(saved):null);
var sp = pwgen.specs.get_spec((function (){var or__5162__auto__ = spec_id;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"ad-entra","ad-entra",-1688887216);
}
})());
var map__30543 = new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(sp);
var map__30543__$1 = cljs.core.__destructure_map(map__30543);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30543__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30543__$1,new cljs.core.Keyword(null,"max","max",61366548));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"check-updates-on-start?","check-updates-on-start?",-1903931486),new cljs.core.Keyword(null,"word-count","word-count",-108883606),new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"language","language",-1591107564),new cljs.core.Keyword(null,"spec-id","spec-id",-962209608),new cljs.core.Keyword(null,"wordlist-locale","wordlist-locale",-1724692134),new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"auto-clear?","auto-clear?",-205962209)],[cljs.core.boolean$(new cljs.core.Keyword(null,"check-updates-on-start?","check-updates-on-start?",-1903931486).cljs$core$IFn$_invoke$arity$1(saved)),((((cljs.core.int_QMARK_(new cljs.core.Keyword(null,"word-count","word-count",-108883606).cljs$core$IFn$_invoke$arity$1(saved))) && ((((min <= new cljs.core.Keyword(null,"word-count","word-count",-108883606).cljs$core$IFn$_invoke$arity$1(saved))) && ((new cljs.core.Keyword(null,"word-count","word-count",-108883606).cljs$core$IFn$_invoke$arity$1(saved) <= max))))))?new cljs.core.Keyword(null,"word-count","word-count",-108883606).cljs$core$IFn$_invoke$arity$1(saved):null),((cljs.core.map_QMARK_(new cljs.core.Keyword(null,"window","window",724519534).cljs$core$IFn$_invoke$arity$1(saved)))?new cljs.core.Keyword(null,"window","window",724519534).cljs$core$IFn$_invoke$arity$1(saved):null),(cljs.core.truth_((function (){var G__30545 = new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(saved);
var fexpr__30544 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"system","system",-29381724),null,new cljs.core.Keyword(null,"dark","dark",1818973999),null,new cljs.core.Keyword(null,"light","light",1918998747),null], null), null);
return (fexpr__30544.cljs$core$IFn$_invoke$arity$1 ? fexpr__30544.cljs$core$IFn$_invoke$arity$1(G__30545) : fexpr__30544.call(null,G__30545));
})())?new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(saved):new cljs.core.Keyword(null,"system","system",-29381724)),((cljs.core.contains_QMARK_(pwgen.i18n.translations,new cljs.core.Keyword(null,"language","language",-1591107564).cljs$core$IFn$_invoke$arity$1(saved)))?new cljs.core.Keyword(null,"language","language",-1591107564).cljs$core$IFn$_invoke$arity$1(saved):null),spec_id,new cljs.core.Keyword(null,"wordlist-locale","wordlist-locale",-1724692134).cljs$core$IFn$_invoke$arity$1(saved),(cljs.core.truth_(cljs.core.some((function (p1__30542_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(saved),p1__30542_SHARP_);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"allowed","allowed",1436019743)], null))))?new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(saved):null),(((!((new cljs.core.Keyword(null,"auto-clear?","auto-clear?",-205962209).cljs$core$IFn$_invoke$arity$1(saved) == null))))?cljs.core.boolean$(new cljs.core.Keyword(null,"auto-clear?","auto-clear?",-205962209).cljs$core$IFn$_invoke$arity$1(saved)):true)]);
});

//# sourceMappingURL=pwgen.ui.js.map
