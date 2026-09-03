goog.provide('byoubu.spec');
/**
 * Every backdrop names the same nine roles. A fixed vocabulary is what lets
 *   `byoubu.plate` build a plate for any entry without special-casing, and
 *   what lets two backdrops be compared.
 */
byoubu.spec.required_palette_keys = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sky-zenith","sky-zenith",-20065151),new cljs.core.Keyword(null,"sky-mid","sky-mid",106630624),new cljs.core.Keyword(null,"sky-horizon","sky-horizon",-157541617),new cljs.core.Keyword(null,"haze","haze",-1024870708),new cljs.core.Keyword(null,"ridge-far","ridge-far",762525090),new cljs.core.Keyword(null,"ridge-near","ridge-near",1102584738),new cljs.core.Keyword(null,"dune-lit","dune-lit",790638115),new cljs.core.Keyword(null,"dune-shadow","dune-shadow",423450330),new cljs.core.Keyword(null,"star","star",279424429)], null);
byoubu.spec.required_scene_keys = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sky","sky",1271496862),new cljs.core.Keyword(null,"atmosphere","atmosphere",523254734),new cljs.core.Keyword(null,"terrain","terrain",704966005),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"grade","grade",2117054771)], null);
byoubu.spec.textures = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"moderate","moderate",-1039163165),null,new cljs.core.Keyword(null,"calm","calm",-533989756),null,new cljs.core.Keyword(null,"busy","busy",-328286801),null], null), null);
byoubu.spec.missing = (function byoubu$spec$missing(m,ks){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__22723_SHARP_){
return cljs.core.contains_QMARK_(m,p1__22723_SHARP_);
}),ks);
});
/**
 * Vector of problem descriptions for one backdrop; empty means valid.
 */
byoubu.spec.problems = (function byoubu$spec$problems(backdrop){
var id = new cljs.core.Keyword("byoubu","id","byoubu/id",459733156).cljs$core$IFn$_invoke$arity$1(backdrop);
var palette = new cljs.core.Keyword("byoubu","palette","byoubu/palette",851879321).cljs$core$IFn$_invoke$arity$1(backdrop);
var band = new cljs.core.Keyword("byoubu","content-band","byoubu/content-band",-1665630238).cljs$core$IFn$_invoke$arity$1(backdrop);
var scene = new cljs.core.Keyword("byoubu","scene","byoubu/scene",1831525071).cljs$core$IFn$_invoke$arity$1(backdrop);
var pfx = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)),": "].join('');
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22727(s__22728){
return (new cljs.core.LazySeq(null,(function (){
var s__22728__$1 = s__22728;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22728__$1);
if(temp__5825__auto__){
var s__22728__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22728__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22728__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22730 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22729 = (0);
while(true){
if((i__22729 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__22729);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(backdrop,k) == null)){
cljs.core.chunk_append(b__22730,[pfx,"missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__22790 = (i__22729 + (1));
i__22729 = G__22790;
continue;
} else {
var G__22791 = (i__22729 + (1));
i__22729 = G__22791;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22730),byoubu$spec$problems_$_iter__22727(cljs.core.chunk_rest(s__22728__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22730),null);
}
} else {
var k = cljs.core.first(s__22728__$2);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(backdrop,k) == null)){
return cljs.core.cons([pfx,"missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22727(cljs.core.rest(s__22728__$2)));
} else {
var G__22792 = cljs.core.rest(s__22728__$2);
s__22728__$1 = G__22792;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("byoubu","id","byoubu/id",459733156),new cljs.core.Keyword("byoubu","title","byoubu/title",1943539519),new cljs.core.Keyword("byoubu","summary","byoubu/summary",1753941440),new cljs.core.Keyword("byoubu","tags","byoubu/tags",-743870735),new cljs.core.Keyword("byoubu","seed","byoubu/seed",841916191),new cljs.core.Keyword("byoubu","texture","byoubu/texture",1576630445),new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268),new cljs.core.Keyword("byoubu","palette","byoubu/palette",851879321),new cljs.core.Keyword("byoubu","content-band","byoubu/content-band",-1665630238),new cljs.core.Keyword("byoubu","scene","byoubu/scene",1831525071)], null));
})(),(((id instanceof cljs.core.Keyword))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"id must be a keyword"].join('')], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.int_QMARK_(new cljs.core.Keyword("byoubu","seed","byoubu/seed",841916191).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"seed must be an integer \u2014 a backdrop nobody can re-render ","is an asset, not a spec"].join('')], null)),((cljs.core.contains_QMARK_(byoubu.spec.textures,new cljs.core.Keyword("byoubu","texture","byoubu/texture",1576630445).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"texture must be one of ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(byoubu.spec.textures))].join('')], null)),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22734(s__22735){
return (new cljs.core.LazySeq(null,(function (){
var s__22735__$1 = s__22735;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22735__$1);
if(temp__5825__auto__){
var s__22735__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22735__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22735__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22737 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22736 = (0);
while(true){
if((i__22736 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__22736);
cljs.core.chunk_append(b__22737,[pfx,"palette missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__22793 = (i__22736 + (1));
i__22736 = G__22793;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22737),byoubu$spec$problems_$_iter__22734(cljs.core.chunk_rest(s__22735__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22737),null);
}
} else {
var k = cljs.core.first(s__22735__$2);
return cljs.core.cons([pfx,"palette missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22734(cljs.core.rest(s__22735__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.spec.missing(palette,byoubu.spec.required_palette_keys));
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22740(s__22741){
return (new cljs.core.LazySeq(null,(function (){
var s__22741__$1 = s__22741;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22741__$1);
if(temp__5825__auto__){
var s__22741__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22741__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22741__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22743 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22742 = (0);
while(true){
if((i__22742 < size__5479__auto__)){
var vec__22744 = cljs.core._nth(c__5478__auto__,i__22742);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22744,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22744,(1),null);
if((byoubu.color.hex__GT_rgb(v) == null)){
cljs.core.chunk_append(b__22743,[pfx,"palette ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))].join(''));

var G__22799 = (i__22742 + (1));
i__22742 = G__22799;
continue;
} else {
var G__22800 = (i__22742 + (1));
i__22742 = G__22800;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22743),byoubu$spec$problems_$_iter__22740(cljs.core.chunk_rest(s__22741__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22743),null);
}
} else {
var vec__22747 = cljs.core.first(s__22741__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22747,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22747,(1),null);
if((byoubu.color.hex__GT_rgb(v) == null)){
return cljs.core.cons([pfx,"palette ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))].join(''),byoubu$spec$problems_$_iter__22740(cljs.core.rest(s__22741__$2)));
} else {
var G__22802 = cljs.core.rest(s__22741__$2);
s__22741__$1 = G__22802;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(palette);
})(),((cljs.core.contains_QMARK_(palette,new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"accent ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268).cljs$core$IFn$_invoke$arity$1(backdrop)], 0))," is not a palette key"].join('')], null)),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22752(s__22753){
return (new cljs.core.LazySeq(null,(function (){
var s__22753__$1 = s__22753;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22753__$1);
if(temp__5825__auto__){
var s__22753__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22753__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22753__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22755 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22754 = (0);
while(true){
if((i__22754 < size__5479__auto__)){
var vec__22756 = cljs.core._nth(c__5478__auto__,i__22754);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22756,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22756,(1),null);
if((!(cljs.core.contains_QMARK_(palette,k)))){
cljs.core.chunk_append(b__22755,[pfx,"content-band references unknown palette key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__22811 = (i__22754 + (1));
i__22754 = G__22811;
continue;
} else {
var G__22812 = (i__22754 + (1));
i__22754 = G__22812;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22755),byoubu$spec$problems_$_iter__22752(cljs.core.chunk_rest(s__22753__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22755),null);
}
} else {
var vec__22759 = cljs.core.first(s__22753__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22759,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22759,(1),null);
if((!(cljs.core.contains_QMARK_(palette,k)))){
return cljs.core.cons([pfx,"content-band references unknown palette key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22752(cljs.core.rest(s__22753__$2)));
} else {
var G__22818 = cljs.core.rest(s__22753__$2);
s__22753__$1 = G__22818;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(band);
})(),(function (){var total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,0.0,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,band));
var drift = (total - 1.0);
var drift__$1 = (((drift < (0)))?(- drift):drift);
if((drift__$1 > 0.001)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"content-band weights sum to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total),", not 1.0"].join('')], null);
} else {
return null;
}
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22762(s__22763){
return (new cljs.core.LazySeq(null,(function (){
var s__22763__$1 = s__22763;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22763__$1);
if(temp__5825__auto__){
var s__22763__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22763__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22763__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22765 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22764 = (0);
while(true){
if((i__22764 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__22764);
cljs.core.chunk_append(b__22765,[pfx,"scene missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__22823 = (i__22764 + (1));
i__22764 = G__22823;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22765),byoubu$spec$problems_$_iter__22762(cljs.core.chunk_rest(s__22763__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22765),null);
}
} else {
var k = cljs.core.first(s__22763__$2);
return cljs.core.cons([pfx,"scene missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22762(cljs.core.rest(s__22763__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.spec.missing(scene,byoubu.spec.required_scene_keys));
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22766(s__22767){
return (new cljs.core.LazySeq(null,(function (){
var s__22767__$1 = s__22767;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22767__$1);
if(temp__5825__auto__){
var s__22767__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22767__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22767__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22769 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22768 = (0);
while(true){
if((i__22768 < size__5479__auto__)){
var vec__22772 = cljs.core._nth(c__5478__auto__,i__22768);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22772,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22772,(1),null);
if((byoubu.color.hex__GT_rgb(new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)) == null)){
cljs.core.chunk_append(b__22769,[pfx,"measured ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tier)," content-color is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)], 0))].join(''));

var G__22825 = (i__22768 + (1));
i__22768 = G__22825;
continue;
} else {
var G__22826 = (i__22768 + (1));
i__22768 = G__22826;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22769),byoubu$spec$problems_$_iter__22766(cljs.core.chunk_rest(s__22767__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22769),null);
}
} else {
var vec__22775 = cljs.core.first(s__22767__$2);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22775,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22775,(1),null);
if((byoubu.color.hex__GT_rgb(new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)) == null)){
return cljs.core.cons([pfx,"measured ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tier)," content-color is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)], 0))].join(''),byoubu$spec$problems_$_iter__22766(cljs.core.rest(s__22767__$2)));
} else {
var G__22828 = cljs.core.rest(s__22767__$2);
s__22767__$1 = G__22828;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.select_keys(new cljs.core.Keyword("byoubu","measured","byoubu/measured",-610808208).cljs$core$IFn$_invoke$arity$1(backdrop),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plate","plate",-1920178141),new cljs.core.Keyword(null,"poster","poster",-1616913550)], null)));
})(),(function (){var f = byoubu.facts.derive_facts(backdrop);
var ink = new cljs.core.Keyword("byoubu.facts","ink","byoubu.facts/ink",567836213).cljs$core$IFn$_invoke$arity$1(f);
var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22780(s__22781){
return (new cljs.core.LazySeq(null,(function (){
var s__22781__$1 = s__22781;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22781__$1);
if(temp__5825__auto__){
var s__22781__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22781__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22781__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22783 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22782 = (0);
while(true){
if((i__22782 < size__5479__auto__)){
var vec__22784 = cljs.core._nth(c__5478__auto__,i__22782);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22784,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22784,(1),null);
var r = byoubu.color.contrast_ratio(ink,c);
if(((function (){var or__5002__auto__ = r;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 0.0;
}
})() < byoubu.facts.wcag_aa_body)){
cljs.core.chunk_append(b__22783,[pfx,"recommended ink ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ink)," on the ",cljs.core.name(tier)," content band ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," has contrast ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),", below AA body ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(byoubu.facts.wcag_aa_body)].join(''));

var G__22840 = (i__22782 + (1));
i__22782 = G__22840;
continue;
} else {
var G__22841 = (i__22782 + (1));
i__22782 = G__22841;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22783),byoubu$spec$problems_$_iter__22780(cljs.core.chunk_rest(s__22781__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22783),null);
}
} else {
var vec__22787 = cljs.core.first(s__22781__$2);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22787,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22787,(1),null);
var r = byoubu.color.contrast_ratio(ink,c);
if(((function (){var or__5002__auto__ = r;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 0.0;
}
})() < byoubu.facts.wcag_aa_body)){
return cljs.core.cons([pfx,"recommended ink ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ink)," on the ",cljs.core.name(tier)," content band ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," has contrast ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),", below AA body ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(byoubu.facts.wcag_aa_body)].join(''),byoubu$spec$problems_$_iter__22780(cljs.core.rest(s__22781__$2)));
} else {
var G__22847 = cljs.core.rest(s__22781__$2);
s__22781__$1 = G__22847;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.facts.tier_colors(backdrop));
})()], 0)));
});
byoubu.spec.valid_QMARK_ = (function byoubu$spec$valid_QMARK_(backdrop){
return cljs.core.empty_QMARK_(byoubu.spec.problems(backdrop));
});

//# sourceMappingURL=byoubu.spec.js.map
