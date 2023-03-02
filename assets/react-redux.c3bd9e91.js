import{R as ee,r as v}from"./react.c0c01f32.js";import{a as re}from"./antd.542c04d5.js";import{h as Ce}from"./hoist-non-react-statics.06cf8342.js";import{r as He}from"./react-dom.0fda724e.js";var Fe=ee.createContext(null);function je(e){e()}var Ne=je,Ke=function(r){return Ne=r},Ve=function(){return Ne};function We(){var e=Ve(),r=null,t=null;return{clear:function(){r=null,t=null},notify:function(){e(function(){for(var o=r;o;)o.callback(),o=o.next})},get:function(){for(var o=[],n=r;n;)o.push(n),n=n.next;return o},subscribe:function(o){var n=!0,u=t={callback:o,next:null,prev:t};return u.prev?u.prev.next=u:r=u,function(){!n||r===null||(n=!1,u.next?u.next.prev=u.prev:t=u.prev,u.prev?u.prev.next=u.next:r=u.next)}}}}var Me={notify:function(){},get:function(){return[]}};function Re(e,r){var t,a=Me;function o(p){return l(),a.subscribe(p)}function n(){a.notify()}function u(){i.onStateChange&&i.onStateChange()}function s(){return Boolean(t)}function l(){t||(t=r?r.addNestedSub(u):e.subscribe(u),a=We())}function f(){t&&(t(),t=void 0,a.clear(),a=Me)}var i={addNestedSub:o,notifyNestedSubs:n,handleChangeWrapper:u,isSubscribed:s,trySubscribe:l,tryUnsubscribe:f,getListeners:function(){return a}};return i}var $e=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?v.exports.useLayoutEffect:v.exports.useEffect;function Ur(e){var r=e.store,t=e.context,a=e.children,o=v.exports.useMemo(function(){var s=Re(r);return{store:r,subscription:s}},[r]),n=v.exports.useMemo(function(){return r.getState()},[r]);$e(function(){var s=o.subscription;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),n!==r.getState()&&s.notifyNestedSubs(),function(){s.tryUnsubscribe(),s.onStateChange=null}},[o,n]);var u=t||Fe;return re(u.Provider,{value:o,children:a})}function q(){return q=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},q.apply(this,arguments)}function te(e,r){if(e==null)return{};var t={},a=Object.keys(e),o,n;for(n=0;n<a.length;n++)o=a[n],!(r.indexOf(o)>=0)&&(t[o]=e[o]);return t}var _e={exports:{}},c={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne=60103,oe=60106,L=60107,k=60108,H=60114,j=60109,K=60110,V=60112,W=60113,ye=60120,z=60115,Y=60116,qe=60121,Te=60122,De=60117,Ue=60129,Ie=60131;if(typeof Symbol=="function"&&Symbol.for){var P=Symbol.for;ne=P("react.element"),oe=P("react.portal"),L=P("react.fragment"),k=P("react.strict_mode"),H=P("react.profiler"),j=P("react.provider"),K=P("react.context"),V=P("react.forward_ref"),W=P("react.suspense"),ye=P("react.suspense_list"),z=P("react.memo"),Y=P("react.lazy"),qe=P("react.block"),Te=P("react.server.block"),De=P("react.fundamental"),Ue=P("react.debug_trace_mode"),Ie=P("react.legacy_hidden")}function w(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case ne:switch(e=e.type,e){case L:case H:case k:case W:case ye:return e;default:switch(e=e&&e.$$typeof,e){case K:case V:case Y:case z:case j:return e;default:return r}}case oe:return r}}}var ze=j,Ye=ne,Ge=V,Je=L,Qe=Y,Xe=z,Ze=oe,er=H,rr=k,tr=W;c.ContextConsumer=K;c.ContextProvider=ze;c.Element=Ye;c.ForwardRef=Ge;c.Fragment=Je;c.Lazy=Qe;c.Memo=Xe;c.Portal=Ze;c.Profiler=er;c.StrictMode=rr;c.Suspense=tr;c.isAsyncMode=function(){return!1};c.isConcurrentMode=function(){return!1};c.isContextConsumer=function(e){return w(e)===K};c.isContextProvider=function(e){return w(e)===j};c.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ne};c.isForwardRef=function(e){return w(e)===V};c.isFragment=function(e){return w(e)===L};c.isLazy=function(e){return w(e)===Y};c.isMemo=function(e){return w(e)===z};c.isPortal=function(e){return w(e)===oe};c.isProfiler=function(e){return w(e)===H};c.isStrictMode=function(e){return w(e)===k};c.isSuspense=function(e){return w(e)===W};c.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===L||e===H||e===Ue||e===k||e===W||e===ye||e===Ie||typeof e=="object"&&e!==null&&(e.$$typeof===Y||e.$$typeof===z||e.$$typeof===j||e.$$typeof===K||e.$$typeof===V||e.$$typeof===De||e.$$typeof===qe||e[0]===Te)};c.typeOf=w;_e.exports=c;var nr=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],or=["reactReduxForwardedRef"],ar=[],ur=[null,null];function sr(e,r){var t=e[1];return[r.payload,t+1]}function xe(e,r,t){$e(function(){return e.apply(void 0,r)},t)}function ir(e,r,t,a,o,n,u){e.current=a,r.current=o,t.current=!1,n.current&&(n.current=null,u())}function cr(e,r,t,a,o,n,u,s,l,f){if(!!e){var i=!1,p=null,y=function(){if(!i){var O=r.getState(),b,m;try{b=a(O,o.current)}catch(C){m=C,p=C}m||(p=null),b===n.current?u.current||l():(n.current=b,s.current=b,u.current=!0,f({type:"STORE_UPDATED",payload:{error:m}}))}};t.onStateChange=y,t.trySubscribe(),y();var h=function(){if(i=!0,t.tryUnsubscribe(),t.onStateChange=null,p)throw p};return h}}var fr=function(){return[null,0]};function pr(e,r){r===void 0&&(r={});var t=r,a=t.getDisplayName,o=a===void 0?function(g){return"ConnectAdvanced("+g+")"}:a,n=t.methodName,u=n===void 0?"connectAdvanced":n,s=t.renderCountProp,l=s===void 0?void 0:s,f=t.shouldHandleStateChanges,i=f===void 0?!0:f,p=t.storeKey,y=p===void 0?"store":p;t.withRef;var h=t.forwardRef,R=h===void 0?!1:h,O=t.context,b=O===void 0?Fe:O,m=te(t,nr),C=b;return function(d){var M=d.displayName||d.name||"Component",x=o(M),ae=q({},m,{getDisplayName:o,methodName:u,renderCountProp:l,shouldHandleStateChanges:i,storeKey:y,displayName:x,wrappedComponentName:M,WrappedComponent:d}),T=m.pure;function ue(S){return e(S.dispatch,ae)}var G=T?v.exports.useMemo:function(S){return S()};function D(S){var $=v.exports.useMemo(function(){var B=S.reactReduxForwardedRef,de=te(S,or);return[S.context,B,de]},[S]),E=$[0],J=$[1],I=$[2],se=v.exports.useMemo(function(){return E&&E.Consumer&&_e.exports.isContextConsumer(ee.createElement(E.Consumer,null))?E:C},[E,C]),F=v.exports.useContext(se),A=Boolean(S.store)&&Boolean(S.store.getState)&&Boolean(S.store.dispatch);Boolean(F)&&Boolean(F.store);var N=A?S.store:F.store,ie=v.exports.useMemo(function(){return ue(N)},[N]),Pe=v.exports.useMemo(function(){if(!i)return ur;var B=Re(N,A?null:F.subscription),de=B.notifyNestedSubs.bind(B);return[B,de]},[N,A,F]),Q=Pe[0],me=Pe[1],Se=v.exports.useMemo(function(){return A?F:q({},F,{subscription:Q})},[A,F,Q]),ge=v.exports.useReducer(sr,ar,fr),Be=ge[0],X=Be[0],Le=ge[1];if(X&&X.error)throw X.error;var be=v.exports.useRef(),ce=v.exports.useRef(I),Z=v.exports.useRef(),we=v.exports.useRef(!1),fe=G(function(){return Z.current&&I===ce.current?Z.current:ie(N.getState(),I)},[N,X,I]);xe(ir,[ce,be,we,I,fe,Z,me]),xe(cr,[i,N,Q,ie,ce,be,we,Z,me,Le],[N,Q,ie]);var pe=v.exports.useMemo(function(){return re(d,{...fe,ref:J})},[J,d,fe]),ke=v.exports.useMemo(function(){return i?re(se.Provider,{value:Se,children:pe}):pe},[se,pe,Se]);return ke}var _=T?ee.memo(D):D;if(_.WrappedComponent=d,_.displayName=D.displayName=x,R){var U=ee.forwardRef(function($,E){return re(_,{...$,reactReduxForwardedRef:E})});return U.displayName=x,U.WrappedComponent=d,Ce(U,d)}return Ce(_,d)}}function Oe(e,r){return e===r?e!==0||r!==0||1/e===1/r:e!==e&&r!==r}function le(e,r){if(Oe(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var t=Object.keys(e),a=Object.keys(r);if(t.length!==a.length)return!1;for(var o=0;o<t.length;o++)if(!Object.prototype.hasOwnProperty.call(r,t[o])||!Oe(e[t[o]],r[t[o]]))return!1;return!0}function dr(e,r){var t={},a=function(u){var s=e[u];typeof s=="function"&&(t[u]=function(){return r(s.apply(void 0,arguments))})};for(var o in e)a(o);return t}function he(e){return function(t,a){var o=e(t,a);function n(){return o}return n.dependsOnOwnProps=!1,n}}function Ee(e){return e.dependsOnOwnProps!==null&&e.dependsOnOwnProps!==void 0?Boolean(e.dependsOnOwnProps):e.length!==1}function Ae(e,r){return function(a,o){o.displayName;var n=function(s,l){return n.dependsOnOwnProps?n.mapToProps(s,l):n.mapToProps(s)};return n.dependsOnOwnProps=!0,n.mapToProps=function(s,l){n.mapToProps=e,n.dependsOnOwnProps=Ee(e);var f=n(s,l);return typeof f=="function"&&(n.mapToProps=f,n.dependsOnOwnProps=Ee(f),f=n(s,l)),f},n}}function lr(e){return typeof e=="function"?Ae(e):void 0}function vr(e){return e?void 0:he(function(r){return{dispatch:r}})}function yr(e){return e&&typeof e=="object"?he(function(r){return dr(e,r)}):void 0}var hr=[lr,vr,yr];function Pr(e){return typeof e=="function"?Ae(e):void 0}function mr(e){return e?void 0:he(function(){return{}})}var Sr=[Pr,mr];function gr(e,r,t){return q({},t,e,r)}function br(e){return function(t,a){a.displayName;var o=a.pure,n=a.areMergedPropsEqual,u=!1,s;return function(f,i,p){var y=e(f,i,p);return u?(!o||!n(y,s))&&(s=y):(u=!0,s=y),s}}}function wr(e){return typeof e=="function"?br(e):void 0}function Cr(e){return e?void 0:function(){return gr}}var Mr=[wr,Cr],xr=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function Or(e,r,t,a){return function(n,u){return t(e(n,u),r(a,u),u)}}function Er(e,r,t,a,o){var n=o.areStatesEqual,u=o.areOwnPropsEqual,s=o.areStatePropsEqual,l=!1,f,i,p,y,h;function R(g,d){return f=g,i=d,p=e(f,i),y=r(a,i),h=t(p,y,i),l=!0,h}function O(){return p=e(f,i),r.dependsOnOwnProps&&(y=r(a,i)),h=t(p,y,i),h}function b(){return e.dependsOnOwnProps&&(p=e(f,i)),r.dependsOnOwnProps&&(y=r(a,i)),h=t(p,y,i),h}function m(){var g=e(f,i),d=!s(g,p);return p=g,d&&(h=t(p,y,i)),h}function C(g,d){var M=!u(d,i),x=!n(g,f,d,i);return f=g,i=d,M&&x?O():M?b():x?m():h}return function(d,M){return l?C(d,M):R(d,M)}}function Fr(e,r){var t=r.initMapStateToProps,a=r.initMapDispatchToProps,o=r.initMergeProps,n=te(r,xr),u=t(e,n),s=a(e,n),l=o(e,n),f=n.pure?Er:Or;return f(u,s,l,e,n)}var Nr=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function ve(e,r,t){for(var a=r.length-1;a>=0;a--){var o=r[a](e);if(o)return o}return function(n,u){throw new Error("Invalid value of type "+typeof e+" for "+t+" argument when connecting component "+u.wrappedComponentName+".")}}function Rr(e,r){return e===r}function $r(e){var r=e===void 0?{}:e,t=r.connectHOC,a=t===void 0?pr:t,o=r.mapStateToPropsFactories,n=o===void 0?Sr:o,u=r.mapDispatchToPropsFactories,s=u===void 0?hr:u,l=r.mergePropsFactories,f=l===void 0?Mr:l,i=r.selectorFactory,p=i===void 0?Fr:i;return function(h,R,O,b){b===void 0&&(b={});var m=b,C=m.pure,g=C===void 0?!0:C,d=m.areStatesEqual,M=d===void 0?Rr:d,x=m.areOwnPropsEqual,ae=x===void 0?le:x,T=m.areStatePropsEqual,ue=T===void 0?le:T,G=m.areMergedPropsEqual,D=G===void 0?le:G,_=te(m,Nr),U=ve(h,n,"mapStateToProps"),S=ve(R,s,"mapDispatchToProps"),$=ve(O,f,"mergeProps");return a(p,q({methodName:"connect",getDisplayName:function(J){return"Connect("+J+")"},shouldHandleStateChanges:Boolean(h),initMapStateToProps:U,initMapDispatchToProps:S,initMergeProps:$,pure:g,areStatesEqual:M,areOwnPropsEqual:ae,areStatePropsEqual:ue,areMergedPropsEqual:D},_))}}var Ir=$r();Ke(He.exports.unstable_batchedUpdates);export{Ur as P,Ir as c};
