goog.provide('cloud_itonami.sanctions.ui');
cloud_itonami.sanctions.ui.css_text = "\n.snc-app { min-height: 100vh; padding: 24px; background: var(--liquid-glass-bg, #11161d); color: var(--liquid-glass-fg, #eef4f8); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif; }\n.snc-top { margin-bottom: 18px; }\n.snc-top p, .snc-top span, .snc-muted, .snc-app h2, .snc-facts span { color: #96a6b8; }\n.snc-top p { margin: 0 0 8px; font-size: 12px; font-weight: 700; text-transform: uppercase; }\n.snc-app h1, .snc-app h2, .snc-app p { margin: 0; }\n.snc-app h1 { font-size: clamp(28px, 5vw, 48px); line-height: 1.05; }\n.snc-top span { display: block; margin-top: 8px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; overflow-wrap: anywhere; }\n.snc-facts { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-bottom: 12px; }\n.snc-facts > div, .snc-panel { border: 1px solid #2b3948; border-radius: 8px; background: #171f28; }\n.snc-facts > div { padding: 14px; }\n.snc-facts span { display: block; margin-bottom: 8px; font-size: 12px; }\n.snc-facts strong { overflow-wrap: anywhere; }\n.snc-panel { margin-bottom: 12px; padding: 16px; }\n.snc-app h2 { margin-bottom: 12px; font-size: 13px; text-transform: uppercase; }\n.snc-app ul { display: grid; gap: 8px; margin: 0; padding: 0; list-style: none; }\n.snc-app li, .snc-path p { border: 1px solid #263443; border-radius: 6px; background: #101720; padding: 9px 10px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; overflow-wrap: anywhere; }\n.snc-chips { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }\n@media (max-width: 760px) { .snc-app { padding: 18px; } .snc-facts { grid-template-columns: 1fr; } }\n";
cloud_itonami.sanctions.ui.panel = (function cloud_itonami$sanctions$ui$panel(title,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.snc-panel","section.snc-panel",440753048),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null),body], null);
});
cloud_itonami.sanctions.ui.facts = (function cloud_itonami$sanctions$ui$facts(app){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.snc-facts","section.snc-facts",-1698068504),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Project"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(app)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Routes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"route-count","route-count",-1535759193).cljs$core$IFn$_invoke$arity$1(app)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"XRPC"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),(cljs.core.truth_(new cljs.core.Keyword(null,"xrpc?","xrpc?",938402752).cljs$core$IFn$_invoke$arity$1(app))?"enabled":"not configured")], null)], null)], null);
});
cloud_itonami.sanctions.ui.public_routes = (function cloud_itonami$sanctions$ui$public_routes(p__23273){
var map__23274 = p__23273;
var map__23274__$1 = cljs.core.__destructure_map(map__23274);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23274__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.sanctions.ui.panel,"Public Routes",((cljs.core.seq(routes))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = (function cloud_itonami$sanctions$ui$public_routes_$_iter__23275(s__23276){
return (new cljs.core.LazySeq(null,(function (){
var s__23276__$1 = s__23276;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23276__$1);
if(temp__5825__auto__){
var s__23276__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23276__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23276__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23278 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23277 = (0);
while(true){
if((i__23277 < size__5479__auto__)){
var r = cljs.core._nth(c__5478__auto__,i__23277);
cljs.core.chunk_append(b__23278,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),r], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),r], null)));

var G__23310 = (i__23277 + (1));
i__23277 = G__23310;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23278),cloud_itonami$sanctions$ui$public_routes_$_iter__23275(cljs.core.chunk_rest(s__23276__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23278),null);
}
} else {
var r = cljs.core.first(s__23276__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),r], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),r], null)),cloud_itonami$sanctions$ui$public_routes_$_iter__23275(cljs.core.rest(s__23276__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(routes);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.snc-muted","p.snc-muted",75337057),"No public route is declared next to this app surface."], null))], null);
});
cloud_itonami.sanctions.ui.runtime_bindings = (function cloud_itonami$sanctions$ui$runtime_bindings(p__23279){
var map__23280 = p__23279;
var map__23280__$1 = cljs.core.__destructure_map(map__23280);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23280__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.sanctions.ui.panel,"Runtime Bindings",((cljs.core.seq(vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.snc-chips","ul.snc-chips",1716692972),(function (){var iter__5480__auto__ = (function cloud_itonami$sanctions$ui$runtime_bindings_$_iter__23281(s__23282){
return (new cljs.core.LazySeq(null,(function (){
var s__23282__$1 = s__23282;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23282__$1);
if(temp__5825__auto__){
var s__23282__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23282__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23282__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23284 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23283 = (0);
while(true){
if((i__23283 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__23283);
cljs.core.chunk_append(b__23284,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),k], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__23334 = (i__23283 + (1));
i__23283 = G__23334;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23284),cloud_itonami$sanctions$ui$runtime_bindings_$_iter__23281(cljs.core.chunk_rest(s__23282__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23284),null);
}
} else {
var k = cljs.core.first(s__23282__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),k], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),cloud_itonami$sanctions$ui$runtime_bindings_$_iter__23281(cljs.core.rest(s__23282__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(vars);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.snc-muted","p.snc-muted",75337057),"No public vars are declared in the nearest wrangler config."], null))], null);
});
cloud_itonami.sanctions.ui.source = (function cloud_itonami$sanctions$ui$source(p__23289){
var map__23290 = p__23289;
var map__23290__$1 = cljs.core.__destructure_map(map__23290);
var relative_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23290__$1,new cljs.core.Keyword(null,"relative-path","relative-path",1848635172));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.snc-panel.snc-path","section.snc-panel.snc-path",-771950696),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Source"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),relative_path], null)], null);
});
cloud_itonami.sanctions.ui.root = (function cloud_itonami$sanctions$ui$root(){
var map__23291 = cljs.core.deref(cloud_itonami.sanctions.state.state);
var map__23291__$1 = cljs.core.__destructure_map(map__23291);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23291__$1,new cljs.core.Keyword(null,"app","app",-560961707));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),cloud_itonami.sanctions.ui.css_text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [appkit.core.panel,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.snc-app","main.snc-app",-698237966),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.snc-top","section.snc-top",1987871393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Cloudflare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(app))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(app)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(app)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.sanctions.ui.facts,app], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.sanctions.ui.public_routes,app], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.sanctions.ui.runtime_bindings,app], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.sanctions.ui.source,app], null)], null)], null)], null);
});

//# sourceMappingURL=cloud_itonami.sanctions.ui.js.map
