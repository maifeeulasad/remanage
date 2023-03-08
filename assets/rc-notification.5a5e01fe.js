import{g as G}from"./@ant-design.cc24bc1e.js";import{u as O,v as j,w as U,x as q,q as g,d as H,c as J,z as I,a as k,b as Q,f as W,n as X,g as Y,h as Z,j as ee,k as te,i as L,e as z,t as re,s as oe}from"./@babel.8e2648a6.js";import{r as v}from"./react.c0c01f32.js";import{y as ae,x as ne}from"./rc-util.673abd87.js";import{c as $,a as se}from"./classnames.86f4c91e.js";import{a as ie}from"./rc-motion.e465090a.js";import{R as ce,r as le}from"./react-dom.0fda724e.js";var E=function(y){O(p,y);var h=j(p);function p(){var e;U(this,p);for(var r=arguments.length,o=new Array(r),t=0;t<r;t++)o[t]=arguments[t];return e=h.call.apply(h,[this].concat(o)),e.closeTimer=null,e.close=function(i){i&&i.stopPropagation(),e.clearCloseTimer();var l=e.props,u=l.onClose,n=l.noticeKey;u&&u(n)},e.startCloseTimer=function(){e.props.duration&&(e.closeTimer=window.setTimeout(function(){e.close()},e.props.duration*1e3))},e.clearCloseTimer=function(){e.closeTimer&&(clearTimeout(e.closeTimer),e.closeTimer=null)},e}return q(p,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentDidUpdate",value:function(r){(this.props.duration!==r.duration||this.props.updateMark!==r.updateMark||this.props.visible!==r.visible&&this.props.visible)&&this.restartCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"restartCloseTimer",value:function(){this.clearCloseTimer(),this.startCloseTimer()}},{key:"render",value:function(){var r=this,o=this.props,t=o.prefixCls,i=o.className,l=o.closable,u=o.closeIcon,n=o.style,d=o.onClick,c=o.children,s=o.holder,a="".concat(t,"-notice"),f=Object.keys(this.props).reduce(function(x,m){return(m.substr(0,5)==="data-"||m.substr(0,5)==="aria-"||m==="role")&&(x[m]=r.props[m]),x},{}),C=v.exports.createElement("div",g({className:$(a,i,H({},"".concat(a,"-closable"),l)),style:n,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer,onClick:d},f),v.exports.createElement("div",{className:"".concat(a,"-content")},c),l?v.exports.createElement("a",{tabIndex:0,onClick:this.close,className:"".concat(a,"-close")},u||v.exports.createElement("span",{className:"".concat(a,"-close-x")})):null);return s?ce.createPortal(C,s):C}}]),p}(v.exports.Component);E.defaultProps={onClose:function(){},duration:1.5};function ue(y){var h=v.exports.useRef({}),p=v.exports.useState([]),e=J(p,2),r=e[0],o=e[1];function t(i){var l=!0;y.add(i,function(u,n){var d=n.key;if(u&&(!h.current[d]||l)){var c=v.exports.createElement(E,g({},n,{holder:u}));h.current[d]=c,o(function(s){var a=s.findIndex(function(C){return C.key===n.key});if(a===-1)return[].concat(I(s),[c]);var f=I(s);return f[a]=c,f})}l=!1})}return[t,v.exports.createElement(v.exports.Fragment,null,r)]}var pe=["getContainer"],w=0,de=Date.now();function A(){var y=w;return w+=1,"rcNotification_".concat(de,"_").concat(y)}var M=function(y){O(p,y);var h=j(p);function p(){var e;U(this,p);for(var r=arguments.length,o=new Array(r),t=0;t<r;t++)o[t]=arguments[t];return e=h.call.apply(h,[this].concat(o)),e.state={notices:[]},e.hookRefs=new Map,e.add=function(i,l){var u=i.key||A(),n=k(k({},i),{},{key:u}),d=e.props.maxCount;e.setState(function(c){var s=c.notices,a=s.map(function(C){return C.notice.key}).indexOf(u),f=s.concat();return a!==-1?f.splice(a,1,{notice:n,holderCallback:l}):(d&&s.length>=d&&(n.key=f[0].notice.key,n.updateMark=A(),n.userPassKey=u,f.shift()),f.push({notice:n,holderCallback:l})),{notices:f}})},e.remove=function(i){e.setState(function(l){var u=l.notices;return{notices:u.filter(function(n){var d=n.notice,c=d.key,s=d.userPassKey,a=s||c;return a!==i})}})},e.noticePropsMap={},e}return q(p,[{key:"getTransitionName",value:function(){var r=this.props,o=r.prefixCls,t=r.animation,i=this.props.transitionName;return!i&&t&&(i="".concat(o,"-").concat(t)),i}},{key:"render",value:function(){var r=this,o=this.state.notices,t=this.props,i=t.prefixCls,l=t.className,u=t.closeIcon,n=t.style,d=[];return o.forEach(function(c,s){var a=c.notice,f=c.holderCallback,C=s===o.length-1?a.updateMark:void 0,x=a.key,m=a.userPassKey,P=k(k(k({prefixCls:i,closeIcon:u},a),a.props),{},{key:x,noticeKey:m||x,updateMark:C,onClose:function(b){var D;r.remove(b),(D=a.onClose)===null||D===void 0||D.call(a)},onClick:a.onClick,children:a.content});d.push(x),r.noticePropsMap[x]={props:P,holderCallback:f}}),v.exports.createElement("div",{className:$(i,l),style:n},v.exports.createElement(ie,{keys:d,motionName:this.getTransitionName(),onVisibleChanged:function(s,a){var f=a.key;s||delete r.noticePropsMap[f]}},function(c){var s=c.key,a=c.className,f=c.style,C=c.visible,x=r.noticePropsMap[s],m=x.props,P=x.holderCallback;return P?v.exports.createElement("div",{key:s,className:$(a,"".concat(i,"-hook-holder")),style:k({},f),ref:function(b){typeof s!="undefined"&&(b?(r.hookRefs.set(s,b),P(b,m)):r.hookRefs.delete(s))}}):v.exports.createElement(E,g({},m,{className:$(a,m==null?void 0:m.className),style:k(k({},f),m==null?void 0:m.style),visible:C}))}))}}]),p}(v.exports.Component);M.newInstance=void 0;M.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}};M.newInstance=function(h,p){var e=h||{},r=e.getContainer,o=Q(e,pe),t=document.createElement("div");if(r){var i=r();i.appendChild(t)}else document.body.appendChild(t);var l=!1;function u(n){l||(l=!0,p({notice:function(c){n.add(c)},removeNotice:function(c){n.remove(c)},component:n,destroy:function(){ne(t),t.parentNode&&t.parentNode.removeChild(t)},useNotification:function(){return ue(n)}}))}ae(v.exports.createElement(M,g({},o,{ref:u})),t)};var fe=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),Ae=G(fe),F={},R={},me=L.exports,N=z.exports;Object.defineProperty(R,"__esModule",{value:!0});R.default=void 0;var ve=N(W.exports),he=N(X.exports),Ce=N(Y.exports),ye=N(Z.exports),xe=N(ee.exports),ke=N(te.exports),T=me(v.exports),Ne=N(le.exports),be=N(se.exports),V=function(y){(0,xe.default)(p,y);var h=(0,ke.default)(p);function p(){var e;(0,Ce.default)(this,p);for(var r=arguments.length,o=new Array(r),t=0;t<r;t++)o[t]=arguments[t];return e=h.call.apply(h,[this].concat(o)),e.closeTimer=null,e.close=function(i){i&&i.stopPropagation(),e.clearCloseTimer();var l=e.props,u=l.onClose,n=l.noticeKey;u&&u(n)},e.startCloseTimer=function(){e.props.duration&&(e.closeTimer=window.setTimeout(function(){e.close()},e.props.duration*1e3))},e.clearCloseTimer=function(){e.closeTimer&&(clearTimeout(e.closeTimer),e.closeTimer=null)},e}return(0,ye.default)(p,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentDidUpdate",value:function(r){(this.props.duration!==r.duration||this.props.updateMark!==r.updateMark||this.props.visible!==r.visible&&this.props.visible)&&this.restartCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"restartCloseTimer",value:function(){this.clearCloseTimer(),this.startCloseTimer()}},{key:"render",value:function(){var r=this,o=this.props,t=o.prefixCls,i=o.className,l=o.closable,u=o.closeIcon,n=o.style,d=o.onClick,c=o.children,s=o.holder,a="".concat(t,"-notice"),f=Object.keys(this.props).reduce(function(x,m){return(m.substr(0,5)==="data-"||m.substr(0,5)==="aria-"||m==="role")&&(x[m]=r.props[m]),x},{}),C=T.createElement("div",(0,ve.default)({className:(0,be.default)(a,i,(0,he.default)({},"".concat(a,"-closable"),l)),style:n,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer,onClick:d},f),T.createElement("div",{className:"".concat(a,"-content")},c),l?T.createElement("a",{tabIndex:0,onClick:this.close,className:"".concat(a,"-close")},u||T.createElement("span",{className:"".concat(a,"-close-x")})):null);return s?Ne.default.createPortal(C,s):C}}]),p}(T.Component);R.default=V;V.defaultProps={onClose:function(){},duration:1.5};var Te=L.exports,S=z.exports;Object.defineProperty(F,"__esModule",{value:!0});F.default=$e;var K=S(re.exports),_e=S(W.exports),Me=S(oe.exports),_=Te(v.exports),Pe=S(R);function $e(y){var h=_.useRef({}),p=_.useState([]),e=(0,Me.default)(p,2),r=e[0],o=e[1];function t(i){var l=!0;y.add(i,function(u,n){var d=n.key;if(u&&(!h.current[d]||l)){var c=_.createElement(Pe.default,(0,_e.default)({},n,{holder:u}));h.current[d]=c,o(function(s){var a=s.findIndex(function(C){return C.key===n.key});if(a===-1)return[].concat((0,K.default)(s),[c]);var f=(0,K.default)(s);return f[a]=c,f})}l=!1})}return[t,_.createElement(_.Fragment,null,r)]}export{M as N,ue as a,Ae as r,F as u};