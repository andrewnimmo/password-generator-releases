goog.provide('pwgen.web.views');
pwgen.web.views.app_name = "Password Generator";
pwgen.web.views.copyright = "Copyright \u00A9 2026 Andrew David Nimmo";
pwgen.web.views.contact = "contact+password.generator@nimmo.dev";
pwgen.web.views.tr = (function pwgen$web$views$tr(var_args){
var args__5903__auto__ = [];
var len__5897__auto___30664 = arguments.length;
var i__5898__auto___30665 = (0);
while(true){
if((i__5898__auto___30665 < len__5897__auto___30664)){
args__5903__auto__.push((arguments[i__5898__auto___30665]));

var G__30666 = (i__5898__auto___30665 + (1));
i__5898__auto___30665 = G__30666;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return pwgen.web.views.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(pwgen.web.views.tr.cljs$core$IFn$_invoke$arity$variadic = (function (state,k,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(pwgen.i18n.tr,new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$1(state),k,args);
}));

(pwgen.web.views.tr.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(pwgen.web.views.tr.cljs$lang$applyTo = (function (seq30564){
var G__30565 = cljs.core.first(seq30564);
var seq30564__$1 = cljs.core.next(seq30564);
var G__30566 = cljs.core.first(seq30564__$1);
var seq30564__$2 = cljs.core.next(seq30564__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30565,G__30566,seq30564__$2);
}));

pwgen.web.views.icon_button = (function pwgen$web$views$icon_button(glyph,tooltip,on_click){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.icon-button","button.icon-button",-748299558),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),tooltip,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),glyph], null);
});
pwgen.web.views.header_bar = (function pwgen$web$views$header_bar(state,dispatch){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header-bar","div.header-bar",292234542),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pwgen.web.views.icon_button,"?",pwgen.web.views.tr(state,new cljs.core.Keyword("action","help","action/help",916608308)),(function (){
var G__30572 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","type","event/type",1532247862),new cljs.core.Keyword(null,"help-toggled","help-toggled",181955545)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__30572) : dispatch.call(null,G__30572));
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pwgen.web.views.icon_button,"i",pwgen.web.views.tr.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("about","title","about/title",711683444),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pwgen.web.views.app_name], 0)),(function (){
var G__30578 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","type","event/type",1532247862),new cljs.core.Keyword(null,"about-toggled","about-toggled",760961394)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__30578) : dispatch.call(null,G__30578));
})], null)], null);
});
/**
 * A native <select>, the browser's combo-box: items are values, labels via
 *   label-fn, and the change handler receives the picked ITEM.
 */
pwgen.web.views.select_control = (function pwgen$web$views$select_control(p__30582){
var map__30583 = p__30582;
var map__30583__$1 = cljs.core.__destructure_map(map__30583);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30583__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30583__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30583__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var on_pick = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30583__$1,new cljs.core.Keyword(null,"on-pick","on-pick",-1995648316));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30581_SHARP_){
var G__30585 = cljs.core.some((function (item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item], 0)),p1__30581_SHARP_.target.value)){
return item;
} else {
return null;
}
}),items);
return (on_pick.cljs$core$IFn$_invoke$arity$1 ? on_pick.cljs$core$IFn$_invoke$arity$1(G__30585) : on_pick.call(null,G__30585));
})], null),(function (){var iter__5649__auto__ = (function pwgen$web$views$select_control_$_iter__30587(s__30588){
return (new cljs.core.LazySeq(null,(function (){
var s__30588__$1 = s__30588;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__30588__$1);
if(temp__5825__auto__){
var s__30588__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30588__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__30588__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__30590 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__30589 = (0);
while(true){
if((i__30589 < size__5648__auto__)){
var item = cljs.core._nth(c__5647__auto__,i__30589);
cljs.core.chunk_append(b__30590,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item], 0))], null),(label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(item) : label_fn.call(null,item))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item], 0))], null)));

var G__30667 = (i__30589 + (1));
i__30589 = G__30667;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30590),pwgen$web$views$select_control_$_iter__30587(cljs.core.chunk_rest(s__30588__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30590),null);
}
} else {
var item = cljs.core.first(s__30588__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item], 0))], null),(label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(item) : label_fn.call(null,item))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item], 0))], null)),pwgen$web$views$select_control_$_iter__30587(cljs.core.rest(s__30588__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(items);
})()], null);
});
pwgen.web.views.pills = (function pwgen$web$views$pills(options){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pills","div.pills",-733308388),(function (){var iter__5649__auto__ = (function pwgen$web$views$pills_$_iter__30598(s__30599){
return (new cljs.core.LazySeq(null,(function (){
var s__30599__$1 = s__30599;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__30599__$1);
if(temp__5825__auto__){
var s__30599__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30599__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__30599__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__30601 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__30600 = (0);
while(true){
if((i__30600 < size__5648__auto__)){
var vec__30603 = cljs.core._nth(c__5647__auto__,i__30600);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30603,(0),null);
var map__30606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30603,(1),null);
var map__30606__$1 = cljs.core.__destructure_map(map__30606);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30606__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30606__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30606__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
cljs.core.chunk_append(b__30601,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pill","button.pill",-468469318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(selected_QMARK_)?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(selected_QMARK_)?null:on_click)], null),text], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__30668 = (i__30600 + (1));
i__30600 = G__30668;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30601),pwgen$web$views$pills_$_iter__30598(cljs.core.chunk_rest(s__30599__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30601),null);
}
} else {
var vec__30607 = cljs.core.first(s__30599__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30607,(0),null);
var map__30610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30607,(1),null);
var map__30610__$1 = cljs.core.__destructure_map(map__30610);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30610__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30610__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30610__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.pill","button.pill",-468469318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(selected_QMARK_)?"selected":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(selected_QMARK_)?null:on_click)], null),text], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),pwgen$web$views$pills_$_iter__30598(cljs.core.rest(s__30599__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,options));
})()], null);
});
pwgen.web.views.spec_section = (function pwgen$web$views$spec_section(state,dispatch){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.field-label","label.field-label",-1921557125),pwgen.web.views.tr(state,new cljs.core.Keyword("label","spec","label/spec",383204485))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pwgen.web.views.select_control,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1031954938),pwgen.specs.spec_ids,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"spec-id","spec-id",-962209608).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),(function (p1__30612_SHARP_){
return pwgen.web.views.tr(state,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("spec",cljs.core.name(p1__30612_SHARP_)));
}),new cljs.core.Keyword(null,"on-pick","on-pick",-1995648316),(function (p1__30613_SHARP_){
var G__30614 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","type","event/type",1532247862),new cljs.core.Keyword(null,"set-spec","set-spec",-789895174),new cljs.core.Keyword(null,"value","value",305978217),p1__30613_SHARP_], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__30614) : dispatch.call(null,G__30614));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.hint","p.hint",-144164893),pwgen.web.views.tr(state,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("spec.desc",cljs.core.name(new cljs.core.Keyword(null,"spec-id","spec-id",-962209608).cljs$core$IFn$_invoke$arity$1(state))))], null)], null);
});
pwgen.web.views.word_controls = (function pwgen$web$views$word_controls(state,dispatch){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls-row","div.controls-row",-1191947279),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.field-label","label.field-label",-1921557125),pwgen.web.views.tr(state,new cljs.core.Keyword("label","words","label/words",1893377173))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pwgen.web.views.select_control,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1031954938),pwgen.ui.word_count_options(state),new cljs.core.Keyword(null,"value","value",305978217),pwgen.ui.effective_word_count(state),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),cljs.core.str,new cljs.core.Keyword(null,"on-pick","on-pick",-1995648316),(function (p1__30619_SHARP_){
var G__30622 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","type","event/type",1532247862),new cljs.core.Keyword(null,"set-word-count","set-word-count",-586199521),new cljs.core.Keyword(null,"value","value",305978217),p1__30619_SHARP_], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__30622) : dispatch.call(null,G__30622));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.field-label","label.field-label",-1921557125),pwgen.web.views.tr(state,new cljs.core.Keyword("label","separator","label/separator",-1193033273))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pwgen.web.views.pills,(function (){var iter__5649__auto__ = (function pwgen$web$views$word_controls_$_iter__30623(s__30624){
return (new cljs.core.LazySeq(null,(function (){
var s__30624__$1 = s__30624;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__30624__$1);
if(temp__5825__auto__){
var s__30624__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30624__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__30624__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__30626 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__30625 = (0);
while(true){
if((i__30625 < size__5648__auto__)){
var sep = cljs.core._nth(c__5647__auto__,i__30625);
cljs.core.chunk_append(b__30626,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),pwgen.web.views.tr(state,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("sep",cljs.core.name(sep))),new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sep,pwgen.ui.effective_separator(state)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__30625,sep,c__5647__auto__,size__5648__auto__,b__30626,s__30624__$2,temp__5825__auto__){
return (function (){
var G__30627 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","type","event/type",1532247862),new cljs.core.Keyword(null,"set-separator","set-separator",394408659),new cljs.core.Keyword(null,"value","value",305978217),sep], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__30627) : dispatch.call(null,G__30627));
});})(i__30625,sep,c__5647__auto__,size__5648__auto__,b__30626,s__30624__$2,temp__5825__auto__))
], null));

var G__30669 = (i__30625 + (1));
i__30625 = G__30669;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30626),pwgen$web$views$word_controls_$_iter__30623(cljs.core.chunk_rest(s__30624__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30626),null);
}
} else {
var sep = cljs.core.first(s__30624__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),pwgen.web.views.tr(state,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("sep",cljs.core.name(sep))),new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sep,pwgen.ui.effective_separator(state)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sep,s__30624__$2,temp__5825__auto__){
return (function (){
var G__30628 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","type","event/type",1532247862),new cljs.core.Keyword(null,"set-separator","set-separator",394408659),new cljs.core.Keyword(null,"value","value",305978217),sep], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__30628) : dispatch.call(null,G__30628));
});})(sep,s__30624__$2,temp__5825__auto__))
], null),pwgen$web$views$word_controls_$_iter__30623(cljs.core.rest(s__30624__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pwgen.ui.spec(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"allowed","allowed",1436019743)], null)));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.field-label","label.field-label",-1921557125),pwgen.web.views.tr(state,new cljs.core.Keyword("label","wordlist","label/wordlist",1569295169))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pwgen.web.views.select_control,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"wordlist-locales","wordlist-locales",-893770513).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"wordlist-locale","wordlist-locale",-1724692134).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),(function (p1__30620_SHARP_){
return pwgen.i18n.tr(p1__30620_SHARP_,new cljs.core.Keyword("locale","name","locale/name",663899799));
}),new cljs.core.Keyword(null,"on-pick","on-pick",-1995648316),(function (p1__30621_SHARP_){
var G__30629 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","type","event/type",1532247862),new cljs.core.Keyword(null,"set-wordlist-locale","set-wordlist-locale",1199276274),new cljs.core.Keyword(null,"value","value",305978217),p1__30621_SHARP_], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__30629) : dispatch.call(null,G__30629));
})], null)], null)], null)], null);
});
pwgen.web.views.pin_controls = (function pwgen$web$views$pin_controls(state,dispatch){
var map__30631 = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(pwgen.ui.spec(state));
var map__30631__$1 = cljs.core.__destructure_map(map__30631);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30631__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30631__$1,new cljs.core.Keyword(null,"max","max",61366548));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.field-label","label.field-label",-1921557125),pwgen.web.views.tr(state,new cljs.core.Keyword("label","pin-length","label/pin-length",1567210935))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pwgen.web.views.select_control,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.vec(cljs.core.range.cljs$core$IFn$_invoke$arity$2(min,(max + (1)))),new cljs.core.Keyword(null,"value","value",305978217),pwgen.ui.effective_pin_length(state),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),cljs.core.str,new cljs.core.Keyword(null,"on-pick","on-pick",-1995648316),(function (p1__30630_SHARP_){
var G__30632 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","type","event/type",1532247862),new cljs.core.Keyword(null,"set-pin-length","set-pin-length",-1641791082),new cljs.core.Keyword(null,"value","value",305978217),p1__30630_SHARP_], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__30632) : dispatch.call(null,G__30632));
})], null)], null)], null);
});
pwgen.web.views.name_section = (function pwgen$web$views$name_section(state,dispatch){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.field-label","label.field-label",-1921557125),pwgen.web.views.tr(state,new cljs.core.Keyword("label","name","label/name",1610858269))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),pwgen.web.views.tr(state,new cljs.core.Keyword("name","prompt","name/prompt",-73095074)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30633_SHARP_){
var G__30634 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","type","event/type",1532247862),new cljs.core.Keyword(null,"name-changed","name-changed",-439252199),new cljs.core.Keyword(null,"value","value",305978217),p1__30633_SHARP_.target.value], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__30634) : dispatch.call(null,G__30634));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.hint","p.hint",-144164893),pwgen.web.views.tr(state,new cljs.core.Keyword("name","why","name/why",451660948))], null)], null);
});
pwgen.web.views.entropy_section = (function pwgen$web$views$entropy_section(state){
var map__30635 = pwgen.ui.preview(state);
var map__30635__$1 = cljs.core.__destructure_map(map__30635);
var bits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30635__$1,new cljs.core.Keyword(null,"bits","bits",-1206785969));
var floor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30635__$1,new cljs.core.Keyword(null,"floor","floor",1882041021));
var unreachable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30635__$1,new cljs.core.Keyword(null,"unreachable?","unreachable?",695552349));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.entropy","div.entropy",-1353450247),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.meter","div.meter",1030925119),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(unreachable_QMARK_)?"meter-bad":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.meter-fill","div.meter-fill",899482161),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(unreachable_QMARK_)?(2):cljs.core.min.cljs$core$IFn$_invoke$arity$2((100),((100) * (bits / 96.0)))))+"%")], null)], null)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(state))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.hint","p.hint",-144164893),pwgen.web.views.tr(state,new cljs.core.Keyword("note","loading","note/loading",-732048991))], null):(cljs.core.truth_(unreachable_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.callout.danger","div.callout.danger",-707189103),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),pwgen.web.views.tr(state,new cljs.core.Keyword("entropy","unreachable","entropy/unreachable",1126149351))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.hint","p.hint",-144164893),pwgen.web.views.tr.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("entropy","meter","entropy/meter",-1766740634),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bits.toFixed((1)),floor], 0))], null)
)),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"fallback?","fallback?",-1074968796)], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.hint","p.hint",-144164893),pwgen.web.views.tr(state,new cljs.core.Keyword("note","list-fallback","note/list-fallback",2085704112))], null):null)], null);
});
pwgen.web.views.password_card = (function pwgen$web$views$password_card(state,dispatch){
var temp__5825__auto__ = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5825__auto__)){
var result = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.password-card","div.password-card",1293486510),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.password-row","div.password-row",-1794654216),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.password-text","span.password-text",885766948),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(result)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.copy-btn","button.copy-btn",-1254625383),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"copied?","copied?",301314040).cljs$core$IFn$_invoke$arity$1(state))?"copied":null),new cljs.core.Keyword(null,"title","title",636505583),pwgen.web.views.tr(state,new cljs.core.Keyword("password","copy-tip","password/copy-tip",-1374253949)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__30636 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","type","event/type",1532247862),new cljs.core.Keyword(null,"copy-requested","copy-requested",473646196)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__30636) : dispatch.call(null,G__30636));
})], null),pwgen.web.views.tr(state,new cljs.core.Keyword("btn","copy","btn/copy",-1077715025))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.password-meta","p.password-meta",-2049738441),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"copied?","copied?",301314040).cljs$core$IFn$_invoke$arity$1(state))?"copied-note":null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"copied?","copied?",301314040).cljs$core$IFn$_invoke$arity$1(state))?(""+"\u2713 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pwgen.web.views.tr(state,new cljs.core.Keyword("btn","copied","btn/copied",991741979)))):pwgen.web.views.tr.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("entropy","meter","entropy/meter",-1766740634),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bits","bits",-1206785969).cljs$core$IFn$_invoke$arity$1(result).toFixed((1)),new cljs.core.Keyword(null,"entropy-floor-bits","entropy-floor-bits",-772196498).cljs$core$IFn$_invoke$arity$1(pwgen.specs.get_spec(new cljs.core.Keyword(null,"spec-id","spec-id",-962209608).cljs$core$IFn$_invoke$arity$1(result)))], 0)))], null)], null);
} else {
return null;
}
});
pwgen.web.views.error_panel = (function pwgen$web$views$error_panel(state){
var temp__5825__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5825__auto__)){
var error = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.callout.danger","div.callout.danger",-707189103),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(pwgen.i18n.tr,new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$1(state),pwgen.ui.error__GT_message(error))], null)], null);
} else {
return null;
}
});
pwgen.web.views.footer = (function pwgen$web$views$footer(state,dispatch){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.footer-bar","div.footer-bar",446919642),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.accent","button.accent",851402811),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"unreachable?","unreachable?",695552349).cljs$core$IFn$_invoke$arity$1(pwgen.ui.preview(state));
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__30637 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","type","event/type",1532247862),new cljs.core.Keyword(null,"generate-requested","generate-requested",-228757602)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__30637) : dispatch.call(null,G__30637));
})], null),pwgen.web.views.tr(state,new cljs.core.Keyword("btn","generate","btn/generate",-163551602))], null)], null);
});
pwgen.web.views.overlay = (function pwgen$web$views$overlay(var_args){
var args__5903__auto__ = [];
var len__5897__auto___30670 = arguments.length;
var i__5898__auto___30671 = (0);
while(true){
if((i__5898__auto___30671 < len__5897__auto___30670)){
args__5903__auto__.push((arguments[i__5898__auto___30671]));

var G__30672 = (i__5898__auto___30671 + (1));
i__5898__auto___30671 = G__30672;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return pwgen.web.views.overlay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(pwgen.web.views.overlay.cljs$core$IFn$_invoke$arity$variadic = (function (close_BANG_,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overlay","div.overlay",58496851),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__30638_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__30638_SHARP_.target,p1__30638_SHARP_.currentTarget)){
return (close_BANG_.cljs$core$IFn$_invoke$arity$0 ? close_BANG_.cljs$core$IFn$_invoke$arity$0() : close_BANG_.call(null));
} else {
return null;
}
})], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dialog-card","div.dialog-card",1920177189)], null),children)], null);
}));

(pwgen.web.views.overlay.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(pwgen.web.views.overlay.cljs$lang$applyTo = (function (seq30640){
var G__30641 = cljs.core.first(seq30640);
var seq30640__$1 = cljs.core.next(seq30640);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30641,seq30640__$1);
}));

pwgen.web.views.dict_entry = (function pwgen$web$views$dict_entry(state){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dict-entry","div.dict-entry",-1522147641),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dict-head","div.dict-head",1570410412),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dict-word","span.dict-word",-1067117143),pwgen.web.views.tr(state,new cljs.core.Keyword("about","dict-word","about/dict-word",-1988946089))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dict-pron","span.dict-pron",554917929),pwgen.web.views.tr(state,new cljs.core.Keyword("about","dict-pron","about/dict-pron",-805128047))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.dict-pos","span.dict-pos",-1786705697),pwgen.web.views.tr(state,new cljs.core.Keyword("about","dict-pos","about/dict-pos",-599937969))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.dict-sense","p.dict-sense",-581952581),pwgen.web.views.tr(state,new cljs.core.Keyword("about","dict-sense-1","about/dict-sense-1",850472217))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.dict-sense","p.dict-sense",-581952581),pwgen.web.views.tr(state,new cljs.core.Keyword("about","dict-sense-2","about/dict-sense-2",-899284227))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.dict-note","p.dict-note",1733173315),pwgen.web.views.tr(state,new cljs.core.Keyword("about","dict-note","about/dict-note",1426208816))], null)], null);
});
pwgen.web.views.about_dialog = (function pwgen$web$views$about_dialog(state,dispatch){
var close_BANG_ = (function (){
var G__30647 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","type","event/type",1532247862),new cljs.core.Keyword(null,"dialog-closed","dialog-closed",-26241691)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__30647) : dispatch.call(null,G__30647));
});
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [pwgen.web.views.overlay,close_BANG_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.about-head","div.about-head",1094762845),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.about-icon","img.about-icon",1932869046),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"icons/icon-192.png",new cljs.core.Keyword(null,"alt","alt",-3214426),""], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title-text","div.title-text",237696916),pwgen.web.views.tr.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("about","title","about/title",711683444),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pwgen.web.views.app_name], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.hint","p.hint",-144164893),pwgen.web.views.tr(state,new cljs.core.Keyword("about","tagline","about/tagline",357168627))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pwgen.web.views.dict_entry,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),pwgen.web.views.tr.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword("about","version","about/version",267657259),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pwgen.version.version)+" (web)")], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.hint","p.hint",-144164893),pwgen.web.views.copyright], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.hint","p.hint",-144164893),pwgen.web.views.tr(state,new cljs.core.Keyword("about","licence","about/licence",-533393464))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.hint","p.hint",-144164893),pwgen.web.views.tr(state,new cljs.core.Keyword("about","wordlist-licences","about/wordlist-licences",1204727855))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.hint","p.hint",-144164893),pwgen.web.views.tr(state,new cljs.core.Keyword("about","contact","about/contact",516499593)),": ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),(""+"mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pwgen.web.views.contact)+"?subject="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pwgen.web.views.app_name)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pwgen.version.version)+" (web)")], null),pwgen.web.views.contact], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.hint","p.hint",-144164893),pwgen.web.views.tr(state,new cljs.core.Keyword("about","made-with","about/made-with",1570965312))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),pwgen.web.views.tr(state,new cljs.core.Keyword("about","language","about/language",-1566278559))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pwgen.web.views.select_control,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1031954938),pwgen.i18n.locales,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"locale","locale",-2115712697).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),(function (p1__30645_SHARP_){
return pwgen.i18n.tr(p1__30645_SHARP_,new cljs.core.Keyword("locale","name","locale/name",663899799));
}),new cljs.core.Keyword(null,"on-pick","on-pick",-1995648316),(function (p1__30646_SHARP_){
var G__30648 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","type","event/type",1532247862),new cljs.core.Keyword(null,"language-picked","language-picked",1118773185),new cljs.core.Keyword(null,"value","value",305978217),p1__30646_SHARP_], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__30648) : dispatch.call(null,G__30648));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.hint","p.hint",-144164893),pwgen.web.views.tr(state,new cljs.core.Keyword("about","language-hint","about/language-hint",-589223955))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),pwgen.web.views.tr(state,new cljs.core.Keyword("about","theme","about/theme",-1340638019))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pwgen.web.views.pills,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),pwgen.web.views.tr(state,new cljs.core.Keyword("about","theme-system","about/theme-system",-609044430)),new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"system","system",-29381724)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__30649 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","type","event/type",1532247862),new cljs.core.Keyword(null,"theme-changed","theme-changed",-1173604306),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"system","system",-29381724)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__30649) : dispatch.call(null,G__30649));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),pwgen.web.views.tr(state,new cljs.core.Keyword("about","theme-light","about/theme-light",896643669)),new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"light","light",1918998747)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__30650 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","type","event/type",1532247862),new cljs.core.Keyword(null,"theme-changed","theme-changed",-1173604306),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"light","light",1918998747)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__30650) : dispatch.call(null,G__30650));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),pwgen.web.views.tr(state,new cljs.core.Keyword("about","theme-dark","about/theme-dark",485141433)),new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"dark","dark",1818973999)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__30651 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("event","type","event/type",1532247862),new cljs.core.Keyword(null,"theme-changed","theme-changed",-1173604306),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"dark","dark",1818973999)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__30651) : dispatch.call(null,G__30651));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dialog-actions","div.dialog-actions",-1772548396),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.accent","button.accent",851402811),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_BANG_], null),pwgen.web.views.tr(state,new cljs.core.Keyword("action","close","action/close",-1196316572))], null)], null)], null);
});
pwgen.web.views.help_dialog = (function pwgen$web$views$help_dialog(state,dispatch){
var close_BANG_ = (function (){
var G__30652 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","type","event/type",1532247862),new cljs.core.Keyword(null,"dialog-closed","dialog-closed",-26241691)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__30652) : dispatch.call(null,G__30652));
});
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [pwgen.web.views.overlay,close_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title-text","div.title-text",237696916),pwgen.web.views.tr(state,new cljs.core.Keyword("help","title","help/title",629113264))], null),(function (){var iter__5649__auto__ = (function pwgen$web$views$help_dialog_$_iter__30653(s__30654){
return (new cljs.core.LazySeq(null,(function (){
var s__30654__$1 = s__30654;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__30654__$1);
if(temp__5825__auto__){
var s__30654__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30654__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__30654__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__30656 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__30655 = (0);
while(true){
if((i__30655 < size__5648__auto__)){
var vec__30657 = cljs.core._nth(c__5647__auto__,i__30655);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30657,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30657,(1),null);
cljs.core.chunk_append(b__30656,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.help-topic","div.help-topic",2117426493),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.headline","p.headline",-2094146181),pwgen.web.views.tr(state,q)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.hint","p.hint",-144164893),pwgen.web.views.tr(state,a)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),q], null)));

var G__30674 = (i__30655 + (1));
i__30655 = G__30674;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30656),pwgen$web$views$help_dialog_$_iter__30653(cljs.core.chunk_rest(s__30654__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30656),null);
}
} else {
var vec__30660 = cljs.core.first(s__30654__$2);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30660,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30660,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.help-topic","div.help-topic",2117426493),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.headline","p.headline",-2094146181),pwgen.web.views.tr(state,q)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.hint","p.hint",-144164893),pwgen.web.views.tr(state,a)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),q], null)),pwgen$web$views$help_dialog_$_iter__30653(cljs.core.rest(s__30654__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("help","q-words","help/q-words",1655523739),new cljs.core.Keyword("help","a-words","help/a-words",125049428)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("help","q-entropy","help/q-entropy",-477065709),new cljs.core.Keyword("help","a-entropy","help/a-entropy",-1166026956)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("help","q-keyboard","help/q-keyboard",-2107573998),new cljs.core.Keyword("help","a-keyboard","help/a-keyboard",1912048135)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("help","q-name","help/q-name",-1171269958),new cljs.core.Keyword("help","a-name","help/a-name",-1889521037)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("help","q-specs","help/q-specs",298387500),new cljs.core.Keyword("help","a-specs","help/a-specs",368332556)], null)], null));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dialog-actions","div.dialog-actions",-1772548396),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.accent","button.accent",851402811),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_BANG_], null),pwgen.web.views.tr(state,new cljs.core.Keyword("action","close","action/close",-1196316572))], null)], null)], null);
});
pwgen.web.views.root = (function pwgen$web$views$root(_STAR_state,dispatch){
var state = cljs.core.deref(_STAR_state);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app","div.app",-99849286),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.window-body","div.window-body",1668683619),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pwgen.web.views.header_bar,state,dispatch], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pwgen.web.views.spec_section,state,dispatch], null),((pwgen.ui.pin_mode_QMARK_(state))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pwgen.web.views.pin_controls,state,dispatch], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pwgen.web.views.word_controls,state,dispatch], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pwgen.web.views.name_section,state,dispatch], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pwgen.web.views.entropy_section,state], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pwgen.web.views.password_card,state,dispatch], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pwgen.web.views.error_panel,state], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pwgen.web.views.footer,state,dispatch], null),(function (){var G__30663 = new cljs.core.Keyword(null,"dialog","dialog",1415150135).cljs$core$IFn$_invoke$arity$1(state);
var G__30663__$1 = (((G__30663 instanceof cljs.core.Keyword))?G__30663.fqn:null);
switch (G__30663__$1) {
case "about":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pwgen.web.views.about_dialog,state,dispatch], null);

break;
case "help":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pwgen.web.views.help_dialog,state,dispatch], null);

break;
default:
return null;

}
})()], null);
});

//# sourceMappingURL=pwgen.web.views.js.map
