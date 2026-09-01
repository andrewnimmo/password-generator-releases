goog.provide('pwgen.web.logic');
/**
 * The state to open with: saved (sanitised) browser settings, then the
 *   browser's own language — same precedence and same explicit-choice rule
 *   for persisting language as the desktop.
 */
pwgen.web.logic.initial_state = (function pwgen$web$logic$initial_state(saved){
var s = pwgen.ui.sanitize_settings(saved);
var locale = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"language","language",-1591107564).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return pwgen.i18n.detect_locale();
}
})();
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rng","rng",1082666016),new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"word-count","word-count",-108883606),new cljs.core.Keyword(null,"pin-length","pin-length",1397374123),new cljs.core.Keyword(null,"wordlist-locales","wordlist-locales",-893770513),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"locale-chosen?","locale-chosen?",-363375823),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"dialog","dialog",1415150135),new cljs.core.Keyword(null,"spec-id","spec-id",-962209608),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"copied?","copied?",301314040),new cljs.core.Keyword(null,"wordlist-locale","wordlist-locale",-1724692134),new cljs.core.Keyword(null,"separator","separator",-1628749125)],[null,locale,"",true,new cljs.core.Keyword(null,"word-count","word-count",-108883606).cljs$core$IFn$_invoke$arity$1(s),null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(s),(!((new cljs.core.Keyword(null,"language","language",-1591107564).cljs$core$IFn$_invoke$arity$1(s) == null))),null,null,null,(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"spec-id","spec-id",-962209608).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"ad-entra","ad-entra",-1688887216);
}
})(),null,false,(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"wordlist-locale","wordlist-locale",-1724692134).cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return locale;
}
})(),new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(s)]);
});
/**
 * What browser storage remembers — same explicit-choice and
 *   divergence-only rules as the desktop's settings file.
 */
pwgen.web.logic.session_settings = (function pwgen$web$logic$session_settings(state){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"language","language",-1591107564),(cljs.core.truth_(new cljs.core.Keyword(null,"locale-chosen?","locale-chosen?",-363375823).cljs$core$IFn$_invoke$arity$1(state))?new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$1(state):null),new cljs.core.Keyword(null,"wordlist-locale","wordlist-locale",-1724692134),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wordlist-locale","wordlist-locale",-1724692134).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$1(state)))?new cljs.core.Keyword(null,"wordlist-locale","wordlist-locale",-1724692134).cljs$core$IFn$_invoke$arity$1(state):null),new cljs.core.Keyword(null,"spec-id","spec-id",-962209608),new cljs.core.Keyword(null,"spec-id","spec-id",-962209608).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"word-count","word-count",-108883606),new cljs.core.Keyword(null,"word-count","word-count",-108883606).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(state)], null);
});
pwgen.web.logic.clear_output = (function pwgen$web$logic$clear_output(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"result","result",1415092211),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"copied?","copied?",301314040),false], 0));
});
/**
 * One event in, {:state ... :effects [...]} out; unknown events pass the
 *   state through untouched.
 */
pwgen.web.logic.handle = (function pwgen$web$logic$handle(state,event){
var G__30570 = new cljs.core.Keyword("event","type","event/type",1532247862).cljs$core$IFn$_invoke$arity$1(event);
var G__30570__$1 = (((G__30570 instanceof cljs.core.Keyword))?G__30570.fqn:null);
switch (G__30570__$1) {
case "set-spec":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),pwgen.web.logic.clear_output(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"spec-id","spec-id",-962209608),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(event),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"word-count","word-count",-108883606),null,new cljs.core.Keyword(null,"separator","separator",-1628749125),null,new cljs.core.Keyword(null,"pin-length","pin-length",1397374123),null], 0))),new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-list","reload-list",1304808653)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"persist","persist",815289548)], null)], null)], null);

break;
case "set-wordlist-locale":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),pwgen.web.logic.clear_output(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"wordlist-locale","wordlist-locale",-1724692134),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(event))),new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-list","reload-list",1304808653)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"persist","persist",815289548)], null)], null)], null);

break;
case "manifest-loaded":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"wordlist-locales","wordlist-locales",-893770513),new cljs.core.Keyword(null,"locales","locales",1785635955).cljs$core$IFn$_invoke$arity$1(event))], null);

break;
case "list-loading":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);

break;
case "list-loaded":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(event),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0))], null);

break;
case "set-word-count":
if(pwgen.ui.word_count_selectable_QMARK_(state,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(event))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),pwgen.web.logic.clear_output(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"word-count","word-count",-108883606),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(event))),new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"persist","persist",815289548)], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null);
}

break;
case "set-pin-length":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),pwgen.web.logic.clear_output(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"pin-length","pin-length",1397374123),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(event)))], null);

break;
case "set-separator":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),pwgen.web.logic.clear_output(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(event))),new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"persist","persist",815289548)], null)], null)], null);

break;
case "name-changed":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),pwgen.web.logic.clear_output(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"name","name",1843675177),pwgen.names.sanitize_name(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(event))))], null);

break;
case "generate-requested":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),pwgen.ui.generate(state)], null);

break;
case "copy-requested":
var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"password","password",417022471)], null));
if(cljs.core.truth_(temp__5823__auto__)){
var pwd = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"copied?","copied?",301314040),true),new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"copy","copy",-1077617309),pwd], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null);
}

break;
case "copied-reset":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"copied?","copied?",301314040),false)], null);

break;
case "language-picked":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),pwgen.web.logic.clear_output(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(event),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wordlist-locale","wordlist-locale",-1724692134),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"locale-chosen?","locale-chosen?",-363375823),true], 0))),new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-list","reload-list",1304808653)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"persist","persist",815289548)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-page-lang","set-page-lang",-1969605403)], null)], null)], null);

break;
case "theme-changed":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(event)),new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-theme","apply-theme",1126228759),new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(event)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"persist","persist",815289548)], null)], null)], null);

break;
case "about-toggled":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"dialog","dialog",1415150135),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.Keyword(null,"dialog","dialog",1415150135).cljs$core$IFn$_invoke$arity$1(state)))?null:new cljs.core.Keyword(null,"about","about",1423892543)))], null);

break;
case "help-toggled":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"dialog","dialog",1415150135),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"help","help",-439233446),new cljs.core.Keyword(null,"dialog","dialog",1415150135).cljs$core$IFn$_invoke$arity$1(state)))?null:new cljs.core.Keyword(null,"help","help",-439233446)))], null);

break;
case "dialog-closed":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"dialog","dialog",1415150135),null)], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null);

}
});

//# sourceMappingURL=pwgen.web.logic.js.map
