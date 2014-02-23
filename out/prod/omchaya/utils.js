// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.utils');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.i18n.NumberFormat.Format');
goog.require('cljs.core.async');
goog.require('goog.crypt');
goog.require('goog.net.EventType');
goog.require('goog.i18n.NumberFormat.Format');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('goog.crypt.Md5');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('goog.crypt');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.Uri');
goog.require('dommy.core');
/**
* returns a type 4 random UUID: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
*/
omchaya.utils.uuid = (function uuid(){var r = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(30,(function (){return cljs.core.rand_int(16).toString(16);
}));return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.take(8,r),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"], null),cljs.core.array_seq([cljs.core.take(4,cljs.core.drop(8,r)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-4"], null),cljs.core.take(3,cljs.core.drop(12,r)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8 | (3 & cljs.core.rand_int(15))).toString(16)], null),cljs.core.take(3,cljs.core.drop(15,r)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"], null),cljs.core.take(12,cljs.core.drop(18,r))], 0)));
});
omchaya.utils.safe_sel = (function safe_sel(s){return [cljs.core.str(clojure.string.replace(clojure.string.lower_case(s),/[\W]/,"-"))].join('');
});
omchaya.utils.email__GT_gravatar_url = (function email__GT_gravatar_url(email){var email__$1 = (function (){var or__3403__auto__ = email;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return "unknown-email@unknown-domain.com";
}
})();var container = (function (){var G__22473 = (new goog.crypt.Md5());G__22473.update(email__$1);
return G__22473;
})();var hash = goog.crypt.byteArrayToHex(container.digest());return [cljs.core.str("http://gravatar.com/avatar/"),cljs.core.str(hash),cljs.core.str("?s=30&d=identicon")].join('');
});
omchaya.utils.gravatar_for = (function gravatar_for(email){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$343,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$344,omchaya.utils.email__GT_gravatar_url(email)], null)], null);
});
omchaya.utils.set_window_href_BANG_ = (function set_window_href_BANG_(path){return window.history.pushState({},"",path);
});