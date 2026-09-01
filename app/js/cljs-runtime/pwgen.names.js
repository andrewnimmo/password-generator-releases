goog.provide('pwgen.names');
/**
 * The delimiter set AD uses when tokenising a display name.
 */
pwgen.names.token_delimiters = /[,.\-_#\s]+/;
/**
 * The set of lower-cased tokens of length >= min-len from a display name /
 *   username string. Empty input → empty set.
 */
pwgen.names.name_tokens = (function pwgen$names$name_tokens(name_str,min_len){
if(clojure.string.blank_QMARK_(name_str)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21873_SHARP_){
return (cljs.core.count(p1__21873_SHARP_) >= min_len);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,clojure.string.split.cljs$core$IFn$_invoke$arity$2(pwgen.i18n.lower_case(name_str),pwgen.names.token_delimiters))));
}
});
/**
 * Removes from `wordlist` every word that CONTAINS one of `tokens`.
 * 
 *   Only this direction matters: a drawn word ends up inside the password, so
 *   a word containing a token would put the token in the password. The reverse
 *   test the legacy code also applied (word contained IN a token) removes
 *   words that could never reproduce the token and only destroys entropy.
 * 
 *   Note this pre-filter alone is not sufficient — with the :none separator a
 *   token can straddle a word boundary ("tab"+"let" contains "tablet").
 *   pwgen.core therefore ALSO validates the assembled password with
 *   contains-token? below.
 */
pwgen.names.remove_token_words = (function pwgen$names$remove_token_words(wordlist,tokens){
if(cljs.core.empty_QMARK_(tokens)){
return wordlist;
} else {
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (w){
var lw = pwgen.i18n.lower_case(w);
return cljs.core.some((function (p1__21883_SHARP_){
return clojure.string.includes_QMARK_(lw,p1__21883_SHARP_);
}),tokens);
}),wordlist));
}
});
/**
 * True when the password contains any token, case-insensitively — the final
 *   authoritative check, applied to the fully assembled password.
 */
pwgen.names.contains_token_QMARK_ = (function pwgen$names$contains_token_QMARK_(pwd,tokens){
var lp = pwgen.i18n.lower_case(pwd);
return cljs.core.boolean$(cljs.core.some((function (p1__21886_SHARP_){
return clojure.string.includes_QMARK_(lp,p1__21886_SHARP_);
}),tokens));
});
/**
 * Strips a name input down to letters (any script), digits, spaces and the
 *   characters . - _ @ that legitimately appear in usernames and emails.
 * 
 *   Exists for the UI shells: it keeps pasted junk (emoji, control characters)
 *   out of the field. Reader-conditional because Java regex supports \p{L}
 *   in literals while JavaScript needs an explicit RegExp with the 'u'
 *   (unicode) flag for property classes.
 */
pwgen.names.sanitize_name = (function pwgen$names$sanitize_name(s){
return clojure.string.replace(s,(new RegExp("[^\\p{L}\\p{N} .\\-_@]","gu")),"");
});
/**
 * Best-effort classification of what the user typed, for UI labelling only
 *   (it never affects generation): :none, :full-name (contains whitespace and
 *   no digits/symbols) or :username (everything else).
 */
pwgen.names.classify_name = (function pwgen$names$classify_name(s){
var trimmed = clojure.string.trim((function (){var or__5162__auto__ = s;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(trimmed,"")){
return new cljs.core.Keyword(null,"none","none",1333468478);
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = cljs.core.re_find(/\s/,trimmed);
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not(cljs.core.re_find(/[\d.\-_@,]/,trimmed));
} else {
return and__5160__auto__;
}
})())){
return new cljs.core.Keyword(null,"full-name","full-name",408178550);
} else {
return new cljs.core.Keyword(null,"username","username",1605666410);

}
}
});

//# sourceMappingURL=pwgen.names.js.map
