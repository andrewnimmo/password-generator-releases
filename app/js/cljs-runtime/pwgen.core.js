goog.provide('pwgen.core');
/**
 * Redraw budget for step 6. Failures are rare (a token straddling a word
 *   boundary, or a length bound missed), so 10 honest retries either succeed
 *   or indicate the configuration itself cannot produce a conforming password.
 */
pwgen.core.max_attempts = (10);
/**
 * Throws ex-info carrying a machine-readable :error key (the UI shells map
 *   these keys to translated messages) plus any diagnostic data.
 */
pwgen.core.fail = (function pwgen$core$fail(error_key,msg,data){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"error","error",-978969032),error_key));
});
/**
 * Accepts a spec id keyword or a full spec map; returns a validated spec.
 */
pwgen.core.resolve_spec = (function pwgen$core$resolve_spec(spec){
var spec_map = (((spec instanceof cljs.core.Keyword))?(function (){var or__5162__auto__ = pwgen.specs.get_spec(spec);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return pwgen.core.fail(new cljs.core.Keyword(null,"unknown-spec","unknown-spec",-256983177),(""+"Unknown specification: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec-id","spec-id",-962209608),spec,new cljs.core.Keyword(null,"known","known",1655795903),pwgen.specs.spec_ids], null));
}
})():spec);
var temp__5823__auto__ = pwgen.specs.errors(spec_map);
if(cljs.core.truth_(temp__5823__auto__)){
var errs = temp__5823__auto__;
return pwgen.core.fail(new cljs.core.Keyword(null,"invalid-spec","invalid-spec",1694498772),"Invalid password specification",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"details","details",1956795411),errs], null));
} else {
return spec_map;
}
});
pwgen.core.resolve_separator = (function pwgen$core$resolve_separator(spec,separator){
var sep = (function (){var or__5162__auto__ = separator;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
}
})();
if(cljs.core.truth_(cljs.core.some((function (p1__30497_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sep,p1__30497_SHARP_);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"allowed","allowed",1436019743)], null))))){
return sep;
} else {
return pwgen.core.fail(new cljs.core.Keyword(null,"separator-not-allowed","separator-not-allowed",-1662505523),(""+"Separator not allowed by spec: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"separator","separator",-1628749125),sep,new cljs.core.Keyword(null,"allowed","allowed",1436019743),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"allowed","allowed",1436019743)], null))], null));
}
});
pwgen.core.separator_str = (function pwgen$core$separator_str(sep){
var G__30498 = sep;
var G__30498__$1 = (((G__30498 instanceof cljs.core.Keyword))?G__30498.fqn:null);
switch (G__30498__$1) {
case "space":
return " ";

break;
case "none":
return "";

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30498__$1))));

}
});
/**
 * A fixed-width block of `d` decimal digits: ONE uniform draw from
 *   [0, 10^d), zero-padded. Fixed width matters for the entropy accounting
 *   (exactly 10^d equally likely outcomes) and keeps result lengths stable.
 */
pwgen.core.digit_block = (function pwgen$core$digit_block(source,d){
var bound = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(d,(10)));
var n = pwgen.rng.uniform_int(source,bound);
var s = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
while(true){
if((((s).length) < d)){
var G__30527 = (""+"0"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
s = G__30527;
continue;
} else {
return s;
}
break;
}
});
pwgen.core.capitalize_words = (function pwgen$core$capitalize_words(rule,words,source){
var G__30502 = rule;
var G__30502__$1 = (((G__30502 instanceof cljs.core.Keyword))?G__30502.fqn:null);
switch (G__30502__$1) {
case "none":
return words;

break;
case "all":
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(pwgen.i18n.capitalize_first,words);

break;
case "first":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pwgen.i18n.capitalize_first(cljs.core.first(words))], null),cljs.core.rest(words));

break;
case "random":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(words,pwgen.rng.uniform_int(source,cljs.core.count(words)),pwgen.i18n.capitalize_first);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30502__$1))));

}
});
pwgen.core.assemble = (function pwgen$core$assemble(words,sep_s,digits,placement){
var body = clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep_s,words);
if((digits == null)){
return body;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(placement,new cljs.core.Keyword(null,"prefix","prefix",-265908465))){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(digits)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(body));
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(body)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(digits));

}
}
});
pwgen.core.generate_pin = (function pwgen$core$generate_pin(spec,source,requested_length){
var map__30508 = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(spec);
var map__30508__$1 = cljs.core.__destructure_map(map__30508);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30508__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30508__$1,new cljs.core.Keyword(null,"max","max",61366548));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30508__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var n = (function (){var or__5162__auto__ = requested_length;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return default$;
}
})();
if((((min <= n)) && ((n <= max)))){
} else {
pwgen.core.fail(new cljs.core.Keyword(null,"length-out-of-range","length-out-of-range",-1221557694),(""+"PIN length must be between "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(min)+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(max)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"length","length",588987862),n,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max], null));
}

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"password","password",417022471),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return pwgen.rng.uniform_int(source,(10));
}))),new cljs.core.Keyword(null,"bits","bits",-1206785969),pwgen.entropy.digits_bits(n),new cljs.core.Keyword(null,"length","length",588987862),n,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"pin","pin",-2111774834),new cljs.core.Keyword(null,"spec-id","spec-id",-962209608),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(spec)], null);
});
pwgen.core.generate_passphrase = (function pwgen$core$generate_passphrase(spec,source,wordlist,name_str,word_count,separator){
if((cljs.core.count((function (){var or__5162__auto__ = wordlist;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()) < (2))){
pwgen.core.fail(new cljs.core.Keyword(null,"wordlist-too-small","wordlist-too-small",129478731),"Word list must contain at least 2 words",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list-size","list-size",-1806515773),cljs.core.count((function (){var or__5162__auto__ = wordlist;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())], null));
} else {
}

var temp__5825__auto___30529 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__30510_SHARP_){
return pwgen.charset.conforms_QMARK_(new cljs.core.Keyword(null,"charset-tier","charset-tier",-806341992).cljs$core$IFn$_invoke$arity$1(spec),p1__30510_SHARP_);
}),wordlist));
if(cljs.core.truth_(temp__5825__auto___30529)){
var bad_30530 = temp__5825__auto___30529;
pwgen.core.fail(new cljs.core.Keyword(null,"wordlist-tier-mismatch","wordlist-tier-mismatch",-853445923),(""+"Word not permitted by charset tier "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"charset-tier","charset-tier",-806341992).cljs$core$IFn$_invoke$arity$1(spec))+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(bad_30530)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"word","word",-420123725),bad_30530,new cljs.core.Keyword(null,"tier","tier",-1071893374),new cljs.core.Keyword(null,"charset-tier","charset-tier",-806341992).cljs$core$IFn$_invoke$arity$1(spec)], null));
} else {
}

var tier = new cljs.core.Keyword(null,"charset-tier","charset-tier",-806341992).cljs$core$IFn$_invoke$arity$1(spec);
var sep = pwgen.core.resolve_separator(spec,separator);
var sep_s = pwgen.core.separator_str(sep);
var tokens = (function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"exclude-name-tokens","exclude-name-tokens",1308643577).cljs$core$IFn$_invoke$arity$1(spec);
if(cljs.core.truth_(temp__5823__auto__)){
var ex = temp__5823__auto__;
return pwgen.names.name_tokens((function (){var or__5162__auto__ = name_str;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"min-token-length","min-token-length",571102553).cljs$core$IFn$_invoke$arity$1(ex));
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var flist = pwgen.names.remove_token_words(cljs.core.vec(wordlist),tokens);
var k = cljs.core.count(flist);
var _ = (((k < (2)))?pwgen.core.fail(new cljs.core.Keyword(null,"wordlist-too-small","wordlist-too-small",129478731),"Name filtering left too few usable words",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list-size","list-size",-1806515773),k,new cljs.core.Keyword(null,"tokens","tokens",-818939304),tokens], null)):null);
var map__30511 = new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(spec);
var map__30511__$1 = cljs.core.__destructure_map(map__30511);
var req_min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30511__$1,new cljs.core.Keyword(null,"min","min",444991522));
var req_max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30511__$1,new cljs.core.Keyword(null,"max","max",61366548));
var req_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30511__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var requested = cljs.core.long$((function (){var or__5162__auto__ = word_count;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return req_default;
}
})());
var ___$1 = (((((req_min <= requested)) && ((requested <= req_max))))?null:pwgen.core.fail(new cljs.core.Keyword(null,"word-count-out-of-range","word-count-out-of-range",-405615082),(""+"Word count must be between "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(req_min)+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(req_max)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"word-count","word-count",-108883606),requested,new cljs.core.Keyword(null,"min","min",444991522),req_min,new cljs.core.Keyword(null,"max","max",61366548),req_max], null)));
var dcount = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"digits","digits",-1134635061),new cljs.core.Keyword(null,"count","count",2139924085)], null));
var floor = new cljs.core.Keyword(null,"entropy-floor-bits","entropy-floor-bits",-772196498).cljs$core$IFn$_invoke$arity$1(spec);
var n = cljs.core.long$((function (){var or__5162__auto__ = pwgen.entropy.min_words_for_floor(k,floor,dcount,requested,req_max);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return pwgen.core.fail(new cljs.core.Keyword(null,"entropy-floor-unreachable","entropy-floor-unreachable",652644194),"Even the maximum word count cannot reach the entropy floor with this word list",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"floor-bits","floor-bits",739356532),floor,new cljs.core.Keyword(null,"list-size","list-size",-1806515773),k,new cljs.core.Keyword(null,"max-words","max-words",650235416),req_max,new cljs.core.Keyword(null,"max-bits","max-bits",1175059195),pwgen.entropy.passphrase_bits(k,req_max,dcount)], null));
}
})());
var bits = pwgen.entropy.passphrase_bits(k,n,dcount);
var len_min = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"min","min",444991522)], null));
var len_max = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"max","max",61366548)], null));
var attempt = (1);
while(true){
var drawn = cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,((function (attempt,tier,sep,sep_s,tokens,flist,k,_,map__30511,map__30511__$1,req_min,req_max,req_default,requested,___$1,dcount,floor,n,bits,len_min,len_max){
return (function (){
return pwgen.rng.pick(source,flist);
});})(attempt,tier,sep,sep_s,tokens,flist,k,_,map__30511,map__30511__$1,req_min,req_max,req_default,requested,___$1,dcount,floor,n,bits,len_min,len_max))
));
var cased = pwgen.core.capitalize_words(new cljs.core.Keyword(null,"capitalization","capitalization",-467405254).cljs$core$IFn$_invoke$arity$1(spec),drawn,source);
var digits = (cljs.core.truth_(dcount)?pwgen.core.digit_block(source,dcount):null);
var pwd = pwgen.core.assemble(cased,sep_s,digits,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"digits","digits",-1134635061),new cljs.core.Keyword(null,"placement","placement",768366651)], null)));
var ok_QMARK_ = ((pwgen.charset.conforms_QMARK_(tier,pwd)) && ((((((len_min == null)) || ((((pwd).length) >= len_min)))) && ((((((len_max == null)) || ((((pwd).length) <= len_max)))) && ((!(pwgen.names.contains_token_QMARK_(pwd,tokens)))))))));
if(ok_QMARK_){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"password","password",417022471),pwd,new cljs.core.Keyword(null,"bits","bits",-1206785969),bits,new cljs.core.Keyword(null,"word-count","word-count",-108883606),n,new cljs.core.Keyword(null,"raised?","raised?",145778912),(n > requested),new cljs.core.Keyword(null,"separator","separator",-1628749125),sep,new cljs.core.Keyword(null,"list-size","list-size",-1806515773),k,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"words","words",1924933001),new cljs.core.Keyword(null,"spec-id","spec-id",-962209608),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(spec)], null);
} else {
if((attempt < pwgen.core.max_attempts)){
var G__30531 = (attempt + (1));
attempt = G__30531;
continue;
} else {
return pwgen.core.fail(new cljs.core.Keyword(null,"generation-failed","generation-failed",-1774394268),"Could not produce a conforming password \u2014 the spec's length bounds or name constraints are too tight for this word list",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attempts","attempts",1024246729),pwgen.core.max_attempts,new cljs.core.Keyword(null,"list-size","list-size",-1806515773),k,new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),len_min,new cljs.core.Keyword(null,"max","max",61366548),len_max], null)], null));

}
}
break;
}
});
/**
 * Generates one password. Options map:
 * 
 *  :spec        REQUIRED — a spec id keyword (see pwgen.specs/spec-ids)
 *               or a full validated spec map
 *  :wordlist    vector of words (required for :words-mode specs)
 *  :rng         a pwgen.rng/RandomSource; defaults to a fresh secure-rng.
 *               Only tests should ever pass anything else.
 *  :name        the user's name/username for token exclusion (optional)
 *  :word-count  requested word count (optional; spec default, may be
 *               RAISED to meet the spec's entropy floor — :raised? in the
 *               result says so)
 *  :separator   :space | :none (optional; spec default)
 *  :length      PIN length (pin-mode specs only)
 * 
 *   Returns {:password :bits :spec-id :mode ...} — see generate-passphrase /
 *   generate-pin for the mode-specific keys. Throws ex-info with a
 *   machine-readable :error key on any constraint violation; it never
 *   silently degrades.
 */
pwgen.core.generate = (function pwgen$core$generate(p__30512){
var map__30513 = p__30512;
var map__30513__$1 = cljs.core.__destructure_map(map__30513);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30513__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var wordlist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30513__$1,new cljs.core.Keyword(null,"wordlist","wordlist",1407847085));
var rng = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30513__$1,new cljs.core.Keyword(null,"rng","rng",1082666016));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30513__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var word_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30513__$1,new cljs.core.Keyword(null,"word-count","word-count",-108883606));
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30513__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125));
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30513__$1,new cljs.core.Keyword(null,"length","length",588987862));
var source = (function (){var or__5162__auto__ = rng;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return pwgen.rng.secure_rng();
}
})();
var spec_map = pwgen.core.resolve_spec(spec);
var G__30514 = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(spec_map);
var G__30514__$1 = (((G__30514 instanceof cljs.core.Keyword))?G__30514.fqn:null);
switch (G__30514__$1) {
case "pin":
return pwgen.core.generate_pin(spec_map,source,length);

break;
case "words":
return pwgen.core.generate_passphrase(spec_map,source,wordlist,name,word_count,separator);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30514__$1))));

}
});

//# sourceMappingURL=pwgen.core.js.map
