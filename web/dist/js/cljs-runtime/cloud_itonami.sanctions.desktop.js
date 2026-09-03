goog.provide('cloud_itonami.sanctions.desktop');
if((typeof cloud_itonami !== 'undefined') && (typeof cloud_itonami.sanctions !== 'undefined') && (typeof cloud_itonami.sanctions.desktop !== 'undefined') && (typeof cloud_itonami.sanctions.desktop.root !== 'undefined')){
} else {
cloud_itonami.sanctions.desktop.root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
cloud_itonami.sanctions.desktop.mount_BANG_ = (function cloud_itonami$sanctions$desktop$mount_BANG_(){
var el = document.getElementById("app");
if(cljs.core.truth_(cljs.core.deref(cloud_itonami.sanctions.desktop.root))){
} else {
cljs.core.reset_BANG_(cloud_itonami.sanctions.desktop.root,reagent.dom.client.create_root(el));
}

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cloud_itonami.sanctions.desktop.root),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.sanctions.ui.root], null));
});
cloud_itonami.sanctions.desktop.init_BANG_ = (function cloud_itonami$sanctions$desktop$init_BANG_(){
return cloud_itonami.sanctions.desktop.mount_BANG_();
});

//# sourceMappingURL=cloud_itonami.sanctions.desktop.js.map
