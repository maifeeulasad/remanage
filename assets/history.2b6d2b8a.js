import{q as H}from"./@babel.8e2648a6.js";var d;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(d||(d={}));var O=function(n){return n},_="beforeunload",q="popstate";function j(n){n===void 0&&(n={});var c=n,a=c.window,t=a===void 0?document.defaultView:a,i=t.history;function v(){var r=t.location,e=r.pathname,o=r.search,f=r.hash,u=i.state||{};return[u.idx,O({pathname:e,search:o,hash:f,state:u.usr||null,key:u.key||"default"})]}var l=null;function U(){if(l)h.call(l),l=null;else{var r=d.Pop,e=v(),o=e[0],f=e[1];if(h.length){if(o!=null){var u=s-o;u&&(l={action:r,location:f,retry:function(){y(u*-1)}},y(u))}}else b(r)}}t.addEventListener(q,U);var P=d.Pop,k=v(),s=k[0],g=k[1],x=R(),h=R();s==null&&(s=0,i.replaceState(H({},i.state,{idx:s}),""));function E(r){return typeof r=="string"?r:D(r)}function L(r,e){return e===void 0&&(e=null),O(H({pathname:g.pathname,hash:"",search:""},typeof r=="string"?K(r):r,{state:e,key:C()}))}function A(r,e){return[{usr:r.state,key:r.key,idx:e},E(r)]}function S(r,e,o){return!h.length||(h.call({action:r,location:e,retry:o}),!1)}function b(r){P=r;var e=v();s=e[0],g=e[1],x.call({action:P,location:g})}function T(r,e){var o=d.Push,f=L(r,e);function u(){T(r,e)}if(S(o,f,u)){var p=A(f,s+1),w=p[0],m=p[1];try{i.pushState(w,"",m)}catch{t.location.assign(m)}b(o)}}function $(r,e){var o=d.Replace,f=L(r,e);function u(){$(r,e)}if(S(o,f,u)){var p=A(f,s),w=p[0],m=p[1];i.replaceState(w,"",m),b(o)}}function y(r){i.go(r)}var V={get action(){return P},get location(){return g},createHref:E,push:T,replace:$,go:y,back:function(){y(-1)},forward:function(){y(1)},listen:function(e){return x.push(e)},block:function(e){var o=h.push(e);return h.length===1&&t.addEventListener(_,B),function(){o(),h.length||t.removeEventListener(_,B)}}};return V}function B(n){n.preventDefault(),n.returnValue=""}function R(){var n=[];return{get length(){return n.length},push:function(a){return n.push(a),function(){n=n.filter(function(t){return t!==a})}},call:function(a){n.forEach(function(t){return t&&t(a)})}}}function C(){return Math.random().toString(36).substr(2,8)}function D(n){var c=n.pathname,a=c===void 0?"/":c,t=n.search,i=t===void 0?"":t,v=n.hash,l=v===void 0?"":v;return i&&i!=="?"&&(a+=i.charAt(0)==="?"?i:"?"+i),l&&l!=="#"&&(a+=l.charAt(0)==="#"?l:"#"+l),a}function K(n){var c={};if(n){var a=n.indexOf("#");a>=0&&(c.hash=n.substr(a),n=n.substr(0,a));var t=n.indexOf("?");t>=0&&(c.search=n.substr(t),n=n.substr(0,t)),n&&(c.pathname=n)}return c}export{d as A,j as c,K as p};
