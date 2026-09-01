goog.provide('pwgen.web.app');
if((typeof pwgen !== 'undefined') && (typeof pwgen.web !== 'undefined') && (typeof pwgen.web.app !== 'undefined') && (typeof pwgen.web.app._STAR_state !== 'undefined')){
} else {
pwgen.web.app._STAR_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof pwgen !== 'undefined') && (typeof pwgen.web !== 'undefined') && (typeof pwgen.web.app !== 'undefined') && (typeof pwgen.web.app.root !== 'undefined')){
} else {
pwgen.web.app.root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
pwgen.web.app.storage_key = "pwgen-settings";
pwgen.web.app.load_settings = (function pwgen$web$app$load_settings(){
try{var G__24653 = localStorage.getItem(pwgen.web.app.storage_key);
if((G__24653 == null)){
return null;
} else {
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1(G__24653);
}
}catch (e24652){var _ = e24652;
return null;
}});
pwgen.web.app.save_settings_BANG_ = (function pwgen$web$app$save_settings_BANG_(settings){
try{return localStorage.setItem(pwgen.web.app.storage_key,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([settings], 0)));
}catch (e24654){var _ = e24654;
return null;
}});
/**
 * A generated list file is ;;-comments, a metadata map, then the words
 *   vector — two EDN forms. cljs.tools.reader reads them off one pushback
 *   reader, comments skipped, nothing evaluated.
 */
pwgen.web.app.read_two_forms = (function pwgen$web$app$read_two_forms(content){
var rdr = cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(content);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),rdr),cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),rdr)], null);
});
pwgen.web.app.fetch_text = (function pwgen$web$app$fetch_text(path,ok_BANG_,err_BANG_){
return fetch(path).then((function (resp){
if(cljs.core.truth_(resp.ok)){
return resp.text();
} else {
throw (new Error(path));
}
})).then(ok_BANG_).catch(err_BANG_);
});
if((typeof pwgen !== 'undefined') && (typeof pwgen.web !== 'undefined') && (typeof pwgen.web.app !== 'undefined') && (typeof pwgen.web.app.perform_BANG_ !== 'undefined')){
} else {
pwgen.web.app.perform_BANG_ = (function (){var method_table__5768__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5769__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5770__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5771__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5772__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__24655 = cljs.core.get_global_hierarchy;
return (fexpr__24655.cljs$core$IFn$_invoke$arity$0 ? fexpr__24655.cljs$core$IFn$_invoke$arity$0() : fexpr__24655.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pwgen.web.app","perform!"),(function (p__24656){
var vec__24657 = p__24656;
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24657,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24657,(1),null);
return kind;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5772__auto__,method_table__5768__auto__,prefer_table__5769__auto__,method_cache__5770__auto__,cached_hierarchy__5771__auto__));
})();
}
pwgen.web.app.perform_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));
pwgen.web.app.perform_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"reload-list","reload-list",1304808653),(function (_){
var s = cljs.core.deref(pwgen.web.app._STAR_state);
if(pwgen.ui.pin_mode_QMARK_(s)){
return null;
} else {
var tier = pwgen.ui.wordlist_tier(new cljs.core.Keyword(null,"charset-tier","charset-tier",-806341992).cljs$core$IFn$_invoke$arity$1(pwgen.ui.spec(s)));
var want = new cljs.core.Keyword(null,"wordlist-locale","wordlist-locale",-1724692134).cljs$core$IFn$_invoke$arity$1(s);
var available = cljs.core.set(new cljs.core.Keyword(null,"wordlist-locales","wordlist-locales",-893770513).cljs$core$IFn$_invoke$arity$1(s));
var actual = ((cljs.core.contains_QMARK_(available,want))?want:new cljs.core.Keyword(null,"en","en",88457073));
var fallback_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(actual,want);
var G__24660_24684 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","type","event/type",1532247862),new cljs.core.Keyword(null,"list-loading","list-loading",-1455411862)], null);
(pwgen.web.app.dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? pwgen.web.app.dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__24660_24684) : pwgen.web.app.dispatch_BANG_.call(null,G__24660_24684));

return pwgen.web.app.fetch_text((""+"wordlists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(actual))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(tier))+".edn"),(function (content){
var vec__24661 = pwgen.web.app.read_two_forms(content);
var meta_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24661,(0),null);
var words = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24661,(1),null);
var G__24664 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","type","event/type",1532247862),new cljs.core.Keyword(null,"list-loaded","list-loaded",1378453291),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"words","words",1924933001),cljs.core.vec(words),new cljs.core.Keyword(null,"meta","meta",1499536964),meta_map,new cljs.core.Keyword(null,"fallback?","fallback?",-1074968796),fallback_QMARK_], null)], null);
return (pwgen.web.app.dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? pwgen.web.app.dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__24664) : pwgen.web.app.dispatch_BANG_.call(null,G__24664));
}),(function (___$1){
var G__24665 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","type","event/type",1532247862),new cljs.core.Keyword(null,"list-loaded","list-loaded",1378453291),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"words","words",1924933001),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"meta","meta",1499536964),null,new cljs.core.Keyword(null,"fallback?","fallback?",-1074968796),fallback_QMARK_], null)], null);
return (pwgen.web.app.dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? pwgen.web.app.dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__24665) : pwgen.web.app.dispatch_BANG_.call(null,G__24665));
}));
}
}));
pwgen.web.app.perform_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"persist","persist",815289548),(function (_){
return pwgen.web.app.save_settings_BANG_(pwgen.web.logic.session_settings(cljs.core.deref(pwgen.web.app._STAR_state)));
}));
pwgen.web.app.perform_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"copy","copy",-1077617309),(function (p__24666){
var vec__24667 = p__24666;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24667,(0),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24667,(1),null);
var temp__5825__auto___24685 = navigator.clipboard;
if(cljs.core.truth_(temp__5825__auto___24685)){
var clipboard_24686 = temp__5825__auto___24685;
clipboard_24686.writeText(password);
} else {
}

return setTimeout((function (){
var G__24670 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","type","event/type",1532247862),new cljs.core.Keyword(null,"copied-reset","copied-reset",625008793)], null);
return (pwgen.web.app.dispatch_BANG_.cljs$core$IFn$_invoke$arity$1 ? pwgen.web.app.dispatch_BANG_.cljs$core$IFn$_invoke$arity$1(G__24670) : pwgen.web.app.dispatch_BANG_.call(null,G__24670));
}),(2000));
}));
pwgen.web.app.perform_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"apply-theme","apply-theme",1126228759),(function (p__24671){
var vec__24672 = p__24671;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24672,(0),null);
var theme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24672,(1),null);
var el = document.documentElement;
var G__24675 = theme;
var G__24675__$1 = (((G__24675 instanceof cljs.core.Keyword))?G__24675.fqn:null);
switch (G__24675__$1) {
case "system":
return el.removeAttribute("data-theme");

break;
default:
return el.setAttribute("data-theme",cljs.core.name(theme));

}
}));
pwgen.web.app.perform_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-page-lang","set-page-lang",-1969605403),(function (_){
return (document.documentElement.lang = cljs.core.name(new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pwgen.web.app._STAR_state))));
}));
pwgen.web.app.handle_event = (function pwgen$web$app$handle_event(event){
var map__24676 = pwgen.web.logic.handle(cljs.core.deref(pwgen.web.app._STAR_state),event);
var map__24676__$1 = cljs.core.__destructure_map(map__24676);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24676__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var effects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24676__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
cljs.core.reset_BANG_(pwgen.web.app._STAR_state,state);

var seq__24677_24688 = cljs.core.seq(effects);
var chunk__24678_24689 = null;
var count__24679_24690 = (0);
var i__24680_24691 = (0);
while(true){
if((i__24680_24691 < count__24679_24690)){
var effect_24692 = chunk__24678_24689.cljs$core$IIndexed$_nth$arity$2(null,i__24680_24691);
pwgen.web.app.perform_BANG_.cljs$core$IFn$_invoke$arity$1(effect_24692);


var G__24693 = seq__24677_24688;
var G__24694 = chunk__24678_24689;
var G__24695 = count__24679_24690;
var G__24696 = (i__24680_24691 + (1));
seq__24677_24688 = G__24693;
chunk__24678_24689 = G__24694;
count__24679_24690 = G__24695;
i__24680_24691 = G__24696;
continue;
} else {
var temp__5825__auto___24697 = cljs.core.seq(seq__24677_24688);
if(temp__5825__auto___24697){
var seq__24677_24698__$1 = temp__5825__auto___24697;
if(cljs.core.chunked_seq_QMARK_(seq__24677_24698__$1)){
var c__5694__auto___24699 = cljs.core.chunk_first(seq__24677_24698__$1);
var G__24700 = cljs.core.chunk_rest(seq__24677_24698__$1);
var G__24701 = c__5694__auto___24699;
var G__24702 = cljs.core.count(c__5694__auto___24699);
var G__24703 = (0);
seq__24677_24688 = G__24700;
chunk__24678_24689 = G__24701;
count__24679_24690 = G__24702;
i__24680_24691 = G__24703;
continue;
} else {
var effect_24704 = cljs.core.first(seq__24677_24698__$1);
pwgen.web.app.perform_BANG_.cljs$core$IFn$_invoke$arity$1(effect_24704);


var G__24705 = cljs.core.next(seq__24677_24698__$1);
var G__24706 = null;
var G__24707 = (0);
var G__24708 = (0);
seq__24677_24688 = G__24705;
chunk__24678_24689 = G__24706;
count__24679_24690 = G__24707;
i__24680_24691 = G__24708;
continue;
}
} else {
}
}
break;
}

return reagent.core.flush();
});
pwgen.web.app.dispatch_BANG_ = (function pwgen$web$app$dispatch_BANG_(event){
return pwgen.web.app.handle_event(event);
});
pwgen.web.app.register_service_worker_BANG_ = (function pwgen$web$app$register_service_worker_BANG_(){
var temp__5825__auto__ = navigator.serviceWorker;
if(cljs.core.truth_(temp__5825__auto__)){
var sw = temp__5825__auto__;
return sw.register("sw.js").catch((function (_){
return null;
}));
} else {
return null;
}
});
pwgen.web.app.load_manifest_BANG_ = (function pwgen$web$app$load_manifest_BANG_(){
return pwgen.web.app.fetch_text("wordlists/manifest.edn",(function (content){
var vec__24681 = pwgen.web.app.read_two_forms(content);
var manifest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24681,(0),null);
var locales = cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"locale","locale",-2115712697),new cljs.core.Keyword(null,"lists","lists",-884730684).cljs$core$IFn$_invoke$arity$1(manifest)))));
pwgen.web.app.dispatch_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","type","event/type",1532247862),new cljs.core.Keyword(null,"manifest-loaded","manifest-loaded",-2105366014),new cljs.core.Keyword(null,"locales","locales",1785635955),locales], null));

return pwgen.web.app.perform_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-list","reload-list",1304808653)], null));
}),(function (_){
pwgen.web.app.dispatch_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","type","event/type",1532247862),new cljs.core.Keyword(null,"manifest-loaded","manifest-loaded",-2105366014),new cljs.core.Keyword(null,"locales","locales",1785635955),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"en","en",88457073)], null)], null));

return pwgen.web.app.perform_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-list","reload-list",1304808653)], null));
}));
});
pwgen.web.app.init = (function pwgen$web$app$init(){
cljs.core.reset_BANG_(pwgen.web.app._STAR_state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pwgen.web.logic.initial_state(pwgen.web.app.load_settings()),new cljs.core.Keyword(null,"rng","rng",1082666016),pwgen.rng.secure_rng()));

pwgen.web.app.perform_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-theme","apply-theme",1126228759),new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(pwgen.web.app._STAR_state))], null));

pwgen.web.app.perform_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-page-lang","set-page-lang",-1969605403)], null));

pwgen.web.app.register_service_worker_BANG_();

pwgen.web.app.load_manifest_BANG_();

cljs.core.reset_BANG_(pwgen.web.app.root,reagent.dom.client.create_root.cljs$core$IFn$_invoke$arity$1(document.getElementById("app")));

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(pwgen.web.app.root),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pwgen.web.views.root,pwgen.web.app._STAR_state,pwgen.web.app.dispatch_BANG_], null));
});
goog.exportSymbol('pwgen.web.app.init', pwgen.web.app.init);

//# sourceMappingURL=pwgen.web.app.js.map
