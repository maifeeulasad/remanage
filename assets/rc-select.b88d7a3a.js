import{r as t}from"./react.c0c01f32.js";import"./react-is.ea6630f4.js";import{c as He}from"./classnames.86f4c91e.js";import{w as nt,M as tt,p as ot,D as ln,E as C,N as at,O as rt,l as pn,q as it,i as ut,I as lt,j as ct,k as st}from"./rc-util.673abd87.js";import{a as Q,C as dt,z as ye,b as Qe,q as Ue,d as ne,c as te,_ as Tn}from"./@babel.8e2648a6.js";import{T as ft}from"./rc-trigger.3855d523.js";import{F as vt}from"./rc-overflow.66387b0b.js";import{L as pt}from"./rc-virtual-list.9017a2c3.js";function Rn(n,e){var a=n.key,o;return"value"in n&&(o=n.value),a!=null?a:o!==void 0?o:"rc-index-key-".concat(e)}function Vn(n,e){var a=n||{},o=a.label,i=a.value,r=a.options;return{label:o||(e?"children":"label"),value:i||"value",options:r||"options"}}function mt(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.fieldNames,o=e.childrenAsData,i=[],r=Vn(a,!1),c=r.label,m=r.value,l=r.options;function h(g,u){g.forEach(function(f){var s=f[c];if(u||!(l in f)){var y=f[m];i.push({key:Rn(f,i.length),groupOption:u,data:f,label:s,value:y})}else{var M=s;M===void 0&&o&&(M=f.label),i.push({key:Rn(f,i.length),group:!0,data:f,label:M}),h(f[l],!0)}})}return h(n,!1),i}function mn(n){var e=Q({},n);return"props"in e||Object.defineProperty(e,"props",{get:function(){return nt(!1,"Return type is option instead of Option instance. Please read value directly instead of reading from `props`."),e}}),e}function gt(n,e){if(!e||!e.length)return null;var a=!1;function o(r,c){var m=dt(c),l=m[0],h=m.slice(1);if(!l)return[r];var g=r.split(l);return a=a||g.length>1,g.reduce(function(u,f){return[].concat(ye(u),ye(o(f,h)))},[]).filter(function(u){return u})}var i=o(n,e);return a?i:null}var ht=["prefixCls","disabled","visible","children","popupElement","containerWidth","animation","transitionName","dropdownStyle","dropdownClassName","direction","placement","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","getPopupContainer","empty","getTriggerDOMNode","onPopupVisibleChange","onPopupMouseEnter"],bt=function(e){var a=e===!0?0:1;return{bottomLeft:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:a,adjustY:1}},bottomRight:{points:["tr","br"],offset:[0,4],overflow:{adjustX:a,adjustY:1}},topLeft:{points:["bl","tl"],offset:[0,-4],overflow:{adjustX:a,adjustY:1}},topRight:{points:["br","tr"],offset:[0,-4],overflow:{adjustX:a,adjustY:1}}}},xt=function(e,a){var o=e.prefixCls;e.disabled;var i=e.visible,r=e.children,c=e.popupElement,m=e.containerWidth,l=e.animation,h=e.transitionName,g=e.dropdownStyle,u=e.dropdownClassName,f=e.direction,s=f===void 0?"ltr":f,y=e.placement,M=e.dropdownMatchSelectWidth,U=e.dropdownRender,N=e.dropdownAlign,R=e.getPopupContainer,L=e.empty,q=e.getTriggerDOMNode,B=e.onPopupVisibleChange,ie=e.onPopupMouseEnter,ce=Qe(e,ht),P="".concat(o,"-dropdown"),k=c;U&&(k=U(c));var G=t.exports.useMemo(function(){return bt(M)},[M]),z=l?"".concat(P,"-").concat(l):h,X=t.exports.useRef(null);t.exports.useImperativeHandle(a,function(){return{getPopupElement:function(){return X.current}}});var T=Q({minWidth:m},g);return typeof M=="number"?T.width=M:M&&(T.width=m),t.exports.createElement(ft,Ue({},ce,{showAction:B?["click"]:[],hideAction:B?["click"]:[],popupPlacement:y||(s==="rtl"?"bottomRight":"bottomLeft"),builtinPlacements:G,prefixCls:P,popupTransitionName:z,popup:t.exports.createElement("div",{ref:X,onMouseEnter:ie},k),popupAlign:N,popupVisible:i,getPopupContainer:R,popupClassName:He(u,ne({},"".concat(P,"-empty"),L)),popupStyle:T,getTriggerDOMNode:q,onPopupVisibleChange:B}),r)},An=t.exports.forwardRef(xt);An.displayName="SelectTrigger";var cn=function(e){var a=e.className,o=e.customizeIcon,i=e.customizeIconProps,r=e.onMouseDown,c=e.onClick,m=e.children,l;return typeof o=="function"?l=o(i):l=o,t.exports.createElement("span",{className:a,onMouseDown:function(g){g.preventDefault(),r&&r(g)},style:{userSelect:"none",WebkitUserSelect:"none"},unselectable:"on",onClick:c,"aria-hidden":!0},l!==void 0?l:t.exports.createElement("span",{className:He(a.split(/\s+/).map(function(h){return"".concat(h,"-icon")}))},m))},wt=function(e,a){var o,i,r=e.prefixCls,c=e.id,m=e.inputElement,l=e.disabled,h=e.tabIndex,g=e.autoFocus,u=e.autoComplete,f=e.editable,s=e.activeDescendantId,y=e.value,M=e.maxLength,U=e.onKeyDown,N=e.onMouseDown,R=e.onChange,L=e.onPaste,q=e.onCompositionStart,B=e.onCompositionEnd,ie=e.open,ce=e.attrs,P=m||t.exports.createElement("input",null),k=P,G=k.ref,z=k.props,X=z.onKeyDown,T=z.onChange,re=z.onMouseDown,O=z.onCompositionStart,x=z.onCompositionEnd,A=z.style;return tt(!("maxLength"in P.props)),P=t.exports.cloneElement(P,Q(Q(Q({type:"search"},z),{},{id:c,ref:ot(a,G),disabled:l,tabIndex:h,autoComplete:u||"off",autoFocus:g,className:He("".concat(r,"-selection-search-input"),(o=P)===null||o===void 0||(i=o.props)===null||i===void 0?void 0:i.className),role:"combobox","aria-expanded":ie,"aria-haspopup":"listbox","aria-owns":"".concat(c,"_list"),"aria-autocomplete":"list","aria-controls":"".concat(c,"_list"),"aria-activedescendant":s},ce),{},{value:f?y:"",maxLength:M,readOnly:!f,unselectable:f?null:"on",style:Q(Q({},A),{},{opacity:f?null:0}),onKeyDown:function(K){U(K),X&&X(K)},onMouseDown:function(K){N(K),re&&re(K)},onChange:function(K){R(K),T&&T(K)},onCompositionStart:function(K){q(K),O&&O(K)},onCompositionEnd:function(K){B(K),x&&x(K)},onPaste:L})),P},hn=t.exports.forwardRef(wt);hn.displayName="Input";function Fn(n){return Array.isArray(n)?n:n!==void 0?[n]:[]}var St=typeof window!="undefined"&&window.document&&window.document.documentElement,Ct=St;function yt(n,e){Ct?t.exports.useLayoutEffect(n,e):t.exports.useEffect(n,e)}function It(n){var e;return(e=n.key)!==null&&e!==void 0?e:n.value}var On=function(e){e.preventDefault(),e.stopPropagation()},Et=function(e){var a=e.id,o=e.prefixCls,i=e.values,r=e.open,c=e.searchValue,m=e.inputRef,l=e.placeholder,h=e.disabled,g=e.mode,u=e.showSearch,f=e.autoFocus,s=e.autoComplete,y=e.activeDescendantId,M=e.tabIndex,U=e.removeIcon,N=e.maxTagCount,R=e.maxTagTextLength,L=e.maxTagPlaceholder,q=L===void 0?function(_){return"+ ".concat(_.length," ...")}:L,B=e.tagRender,ie=e.onToggleOpen,ce=e.onRemove,P=e.onInputChange,k=e.onInputPaste,G=e.onInputKeyDown,z=e.onInputMouseDown,X=e.onInputCompositionStart,T=e.onInputCompositionEnd,re=t.exports.useRef(null),O=t.exports.useState(0),x=te(O,2),A=x[0],j=x[1],K=t.exports.useState(!1),pe=te(K,2),se=pe[0],Ae=pe[1],$="".concat(o,"-selection"),D=r||g==="tags"?c:"",p=g==="tags"||u&&(r||se);yt(function(){j(re.current.scrollWidth)},[D]);function E(_,oe,ue,le,me){return t.exports.createElement("span",{className:He("".concat($,"-item"),ne({},"".concat($,"-item-disabled"),ue)),title:typeof _=="string"||typeof _=="number"?_.toString():void 0},t.exports.createElement("span",{className:"".concat($,"-item-content")},oe),le&&t.exports.createElement(cn,{className:"".concat($,"-item-remove"),onMouseDown:On,onClick:me,customizeIcon:U},"\xD7"))}function W(_,oe,ue,le,me){var Se=function(ge){On(ge),ie(!r)};return t.exports.createElement("span",{onMouseDown:Se},B({label:oe,value:_,disabled:ue,closable:le,onClose:me}))}function V(_){var oe=_.disabled,ue=_.label,le=_.value,me=!h&&!oe,Se=ue;if(typeof R=="number"&&(typeof ue=="string"||typeof ue=="number")){var fe=String(Se);fe.length>R&&(Se="".concat(fe.slice(0,R),"..."))}var ge=function(he){he&&he.stopPropagation(),ce(_)};return typeof B=="function"?W(le,Se,oe,me,ge):E(ue,Se,oe,me,ge)}function F(_){var oe=typeof q=="function"?q(_):q;return E(oe,oe,!1)}var Z=t.exports.createElement("div",{className:"".concat($,"-search"),style:{width:A},onFocus:function(){Ae(!0)},onBlur:function(){Ae(!1)}},t.exports.createElement(hn,{ref:m,open:r,prefixCls:o,id:a,inputElement:null,disabled:h,autoFocus:f,autoComplete:s,editable:p,activeDescendantId:y,value:D,onKeyDown:G,onMouseDown:z,onChange:P,onPaste:k,onCompositionStart:X,onCompositionEnd:T,tabIndex:M,attrs:ln(e,!0)}),t.exports.createElement("span",{ref:re,className:"".concat($,"-search-mirror"),"aria-hidden":!0},D,"\xA0")),de=t.exports.createElement(vt,{prefixCls:"".concat($,"-overflow"),data:i,renderItem:V,renderRest:F,suffix:Z,itemKey:It,maxCount:N});return t.exports.createElement(t.exports.Fragment,null,de,!i.length&&!D&&t.exports.createElement("span",{className:"".concat($,"-placeholder")},l))},Dt=function(e){var a=e.inputElement,o=e.prefixCls,i=e.id,r=e.inputRef,c=e.disabled,m=e.autoFocus,l=e.autoComplete,h=e.activeDescendantId,g=e.mode,u=e.open,f=e.values,s=e.placeholder,y=e.tabIndex,M=e.showSearch,U=e.searchValue,N=e.activeValue,R=e.maxLength,L=e.onInputKeyDown,q=e.onInputMouseDown,B=e.onInputChange,ie=e.onInputPaste,ce=e.onInputCompositionStart,P=e.onInputCompositionEnd,k=t.exports.useState(!1),G=te(k,2),z=G[0],X=G[1],T=g==="combobox",re=T||M,O=f[0],x=U||"";T&&N&&!z&&(x=N),t.exports.useEffect(function(){T&&X(!1)},[T,N]);var A=g!=="combobox"&&!u&&!M?!1:!!x,j=O&&(typeof O.label=="string"||typeof O.label=="number")?O.label.toString():void 0,K=function(){if(O)return null;var se=A?{visibility:"hidden"}:void 0;return t.exports.createElement("span",{className:"".concat(o,"-selection-placeholder"),style:se},s)};return t.exports.createElement(t.exports.Fragment,null,t.exports.createElement("span",{className:"".concat(o,"-selection-search")},t.exports.createElement(hn,{ref:r,prefixCls:o,id:i,open:u,inputElement:a,disabled:c,autoFocus:m,autoComplete:l,editable:re,activeDescendantId:h,value:x,onKeyDown:L,onMouseDown:q,onChange:function(se){X(!0),B(se)},onPaste:ie,onCompositionStart:ce,onCompositionEnd:P,tabIndex:y,attrs:ln(e,!0),maxLength:T?R:void 0})),!T&&O&&!A&&t.exports.createElement("span",{className:"".concat(o,"-selection-item"),title:j},O.label),K())};function _n(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:250,e=t.exports.useRef(null),a=t.exports.useRef(null);t.exports.useEffect(function(){return function(){window.clearTimeout(a.current)}},[]);function o(i){(i||e.current===null)&&(e.current=i),window.clearTimeout(a.current),a.current=window.setTimeout(function(){e.current=null},n)}return[function(){return e.current},o]}function Rt(n){return![C.ESC,C.SHIFT,C.BACKSPACE,C.TAB,C.WIN_KEY,C.ALT,C.META,C.WIN_KEY_RIGHT,C.CTRL,C.SEMICOLON,C.EQUALS,C.CAPS_LOCK,C.CONTEXT_MENU,C.F1,C.F2,C.F3,C.F4,C.F5,C.F6,C.F7,C.F8,C.F9,C.F10,C.F11,C.F12].includes(n)}var Ot=function(e,a){var o=t.exports.useRef(null),i=t.exports.useRef(!1),r=e.prefixCls,c=e.open,m=e.mode,l=e.showSearch,h=e.tokenWithEnter,g=e.onSearch,u=e.onSearchSubmit,f=e.onToggleOpen,s=e.onInputKeyDown,y=e.domRef;t.exports.useImperativeHandle(a,function(){return{focus:function(){o.current.focus()},blur:function(){o.current.blur()}}});var M=_n(0),U=te(M,2),N=U[0],R=U[1],L=function(x){var A=x.which;(A===C.UP||A===C.DOWN)&&x.preventDefault(),s&&s(x),A===C.ENTER&&m==="tags"&&!i.current&&!c&&(u==null||u(x.target.value)),Rt(A)&&f(!0)},q=function(){R(!0)},B=t.exports.useRef(null),ie=function(x){g(x,!0,i.current)!==!1&&f(!0)},ce=function(){i.current=!0},P=function(x){i.current=!1,m!=="combobox"&&ie(x.target.value)},k=function(x){var A=x.target.value;if(h&&B.current&&/[\r\n]/.test(B.current)){var j=B.current.replace(/[\r\n]+$/,"").replace(/\r\n/g," ").replace(/[\r\n]/g," ");A=A.replace(j,B.current)}B.current=null,ie(A)},G=function(x){var A=x.clipboardData,j=A.getData("text");B.current=j},z=function(x){var A=x.target;if(A!==o.current){var j=document.body.style.msTouchAction!==void 0;j?setTimeout(function(){o.current.focus()}):o.current.focus()}},X=function(x){var A=N();x.target!==o.current&&!A&&x.preventDefault(),(m!=="combobox"&&(!l||!A)||!c)&&(c&&g("",!0,!1),f())},T={inputRef:o,onInputKeyDown:L,onInputMouseDown:q,onInputChange:k,onInputPaste:G,onInputCompositionStart:ce,onInputCompositionEnd:P},re=m==="multiple"||m==="tags"?t.exports.createElement(Et,Ue({},e,T)):t.exports.createElement(Dt,Ue({},e,T));return t.exports.createElement("div",{ref:y,className:"".concat(r,"-selector"),onClick:z,onMouseDown:X},re)},Ln=t.exports.forwardRef(Ot);Ln.displayName="Selector";function Mt(n,e,a,o){var i=t.exports.useRef(null);i.current={open:e,triggerOpen:a,customizedTrigger:o},t.exports.useEffect(function(){function r(c){var m;if(!(!((m=i.current)===null||m===void 0)&&m.customizedTrigger)){var l=c.target;l.shadowRoot&&c.composed&&(l=c.composedPath()[0]||l),i.current.open&&n().filter(function(h){return h}).every(function(h){return!h.contains(l)&&h!==l})&&i.current.triggerOpen(!1)}}return window.addEventListener("mousedown",r),function(){return window.removeEventListener("mousedown",r)}},[])}function Nt(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,e=t.exports.useState(!1),a=te(e,2),o=a[0],i=a[1],r=t.exports.useRef(null),c=function(){window.clearTimeout(r.current)};t.exports.useEffect(function(){return c},[]);var m=function(h,g){c(),r.current=window.setTimeout(function(){i(h),g&&g()},n)};return[o,m,c]}var kn=t.exports.createContext(null);function Pt(){return t.exports.useContext(kn)}var Tt=["id","prefixCls","className","showSearch","tagRender","direction","omitDomProps","displayValues","onDisplayValuesChange","emptyOptions","notFoundContent","onClear","mode","disabled","loading","getInputElement","getRawInputElement","open","defaultOpen","onDropdownVisibleChange","activeValue","onActiveValueChange","activeDescendantId","searchValue","onSearch","onSearchSplit","tokenSeparators","allowClear","showArrow","inputIcon","clearIcon","OptionList","animation","transitionName","dropdownStyle","dropdownClassName","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","placement","getPopupContainer","showAction","onFocus","onBlur","onKeyUp","onKeyDown","onMouseDown"],Vt=["value","onChange","removeIcon","placeholder","autoFocus","maxTagCount","maxTagTextLength","maxTagPlaceholder","choiceTransitionName","onInputKeyDown","onPopupScroll","tabIndex"];function gn(n){return n==="tags"||n==="multiple"}var At=t.exports.forwardRef(function(n,e){var a,o,i=n.id,r=n.prefixCls,c=n.className,m=n.showSearch,l=n.tagRender,h=n.direction,g=n.omitDomProps,u=n.displayValues,f=n.onDisplayValuesChange,s=n.emptyOptions,y=n.notFoundContent,M=y===void 0?"Not Found":y,U=n.onClear,N=n.mode,R=n.disabled,L=n.loading,q=n.getInputElement,B=n.getRawInputElement,ie=n.open,ce=n.defaultOpen,P=n.onDropdownVisibleChange,k=n.activeValue,G=n.onActiveValueChange,z=n.activeDescendantId,X=n.searchValue,T=n.onSearch,re=n.onSearchSplit,O=n.tokenSeparators,x=n.allowClear,A=n.showArrow,j=n.inputIcon,K=n.clearIcon,pe=n.OptionList,se=n.animation,Ae=n.transitionName,$=n.dropdownStyle,D=n.dropdownClassName,p=n.dropdownMatchSelectWidth,E=n.dropdownRender,W=n.dropdownAlign,V=n.placement,F=n.getPopupContainer,Z=n.showAction,de=Z===void 0?[]:Z,_=n.onFocus,oe=n.onBlur,ue=n.onKeyUp,le=n.onKeyDown,me=n.onMouseDown,Se=Qe(n,Tt),fe=gn(N),ge=(m!==void 0?m:fe)||N==="combobox",J=Q({},Se);Vt.forEach(function(S){delete J[S]}),g==null||g.forEach(function(S){delete J[S]});var he=t.exports.useState(!1),Ie=te(he,2),Le=Ie[0],Oe=Ie[1];t.exports.useEffect(function(){Oe(at())},[]);var ze=t.exports.useRef(null),Ce=t.exports.useRef(null),Me=t.exports.useRef(null),Fe=t.exports.useRef(null),Ne=t.exports.useRef(null),je=Nt(),Ze=te(je,3),Xe=Ze[0],en=Ze[1],Ye=Ze[2];t.exports.useImperativeHandle(e,function(){var S,w;return{focus:(S=Fe.current)===null||S===void 0?void 0:S.focus,blur:(w=Fe.current)===null||w===void 0?void 0:w.blur,scrollTo:function(xe){var ee;return(ee=Ne.current)===null||ee===void 0?void 0:ee.scrollTo(xe)}}});var Pe=t.exports.useMemo(function(){var S;if(N!=="combobox")return X;var w=(S=u[0])===null||S===void 0?void 0:S.value;return typeof w=="string"||typeof w=="number"?String(w):""},[X,N,u]),nn=N==="combobox"&&typeof q=="function"&&q()||null,Te=typeof B=="function"&&B(),sn=rt(Ce,Te==null||(a=Te.props)===null||a===void 0?void 0:a.ref),rn=pn(void 0,{defaultValue:ce,value:ie}),tn=te(rn,2),Ge=tn[0],qe=tn[1],ae=Ge,un=!M&&s;(R||un&&ae&&N==="combobox")&&(ae=!1);var ke=un?!1:ae,Ee=t.exports.useCallback(function(S){var w=S!==void 0?S:!ae;ae!==w&&!R&&(qe(w),P==null||P(w))},[R,ae,qe,P]),b=t.exports.useMemo(function(){return(O||[]).some(function(S){return[`
`,`\r
`].includes(S)})},[O]),v=function(w,ve,xe){var ee=!0,we=w;G==null||G(null);var Re=xe?null:gt(w,O);return N!=="combobox"&&Re&&(we="",re==null||re(Re),Ee(!1),ee=!1),T&&Pe!==we&&T(we,{source:ve?"typing":"effect"}),ee},d=function(w){!w||!w.trim()||T(w,{source:"submit"})};t.exports.useEffect(function(){!ae&&!fe&&N!=="combobox"&&v("",!1,!1)},[ae]),t.exports.useEffect(function(){Ge&&R&&qe(!1),R&&en(!1)},[R]);var I=_n(),H=te(I,2),Y=H[0],Ke=H[1],De=function(w){var ve=Y(),xe=w.which;if(xe===C.ENTER&&(N!=="combobox"&&w.preventDefault(),ae||Ee(!0)),Ke(!!Pe),xe===C.BACKSPACE&&!ve&&fe&&!Pe&&u.length){for(var ee=ye(u),we=null,Re=ee.length-1;Re>=0;Re-=1){var an=ee[Re];if(!an.disabled){ee.splice(Re,1),we=an;break}}we&&f(ee,{type:"remove",values:[we]})}for(var We=arguments.length,Je=new Array(We>1?We-1:0),Be=1;Be<We;Be++)Je[Be-1]=arguments[Be];if(ae&&Ne.current){var Dn;(Dn=Ne.current).onKeyDown.apply(Dn,[w].concat(Je))}le==null||le.apply(void 0,[w].concat(Je))},be=function(w){for(var ve=arguments.length,xe=new Array(ve>1?ve-1:0),ee=1;ee<ve;ee++)xe[ee-1]=arguments[ee];if(ae&&Ne.current){var we;(we=Ne.current).onKeyUp.apply(we,[w].concat(xe))}ue==null||ue.apply(void 0,[w].concat(xe))},$e=function(w){var ve=u.filter(function(xe){return xe!==w});f(ve,{type:"remove",values:[w]})},on=t.exports.useRef(!1),dn=function(){en(!0),R||(_&&!on.current&&_.apply(void 0,arguments),de.includes("focus")&&Ee(!0)),on.current=!0},bn=function(){en(!1,function(){on.current=!1,Ee(!1)}),!R&&(Pe&&(N==="tags"?T(Pe,{source:"submit"}):N==="multiple"&&T("",{source:"blur"})),oe&&oe.apply(void 0,arguments))},Ve=[];t.exports.useEffect(function(){return function(){Ve.forEach(function(S){return clearTimeout(S)}),Ve.splice(0,Ve.length)}},[]);var _e=function(w){var ve,xe=w.target,ee=(ve=Me.current)===null||ve===void 0?void 0:ve.getPopupElement();if(ee&&ee.contains(xe)){var we=setTimeout(function(){var Je=Ve.indexOf(we);if(Je!==-1&&Ve.splice(Je,1),Ye(),!Le&&!ee.contains(document.activeElement)){var Be;(Be=Fe.current)===null||Be===void 0||Be.focus()}});Ve.push(we)}for(var Re=arguments.length,an=new Array(Re>1?Re-1:0),We=1;We<Re;We++)an[We-1]=arguments[We];me==null||me.apply(void 0,[w].concat(an))},zn=t.exports.useState(null),xn=te(zn,2),wn=xn[0],jn=xn[1],Gn=t.exports.useState({}),Xn=te(Gn,2),Yn=Xn[1];function qn(){Yn({})}it(function(){if(ke){var S,w=Math.ceil((S=ze.current)===null||S===void 0?void 0:S.offsetWidth);wn!==w&&!Number.isNaN(w)&&jn(w)}},[ke]);var Sn;Te&&(Sn=function(w){Ee(w)}),Mt(function(){var S;return[ze.current,(S=Me.current)===null||S===void 0?void 0:S.getPopupElement()]},ke,Ee,!!Te);var Jn=t.exports.useMemo(function(){return Q(Q({},n),{},{notFoundContent:M,open:ae,triggerOpen:ke,id:i,showSearch:ge,multiple:fe,toggleOpen:Ee})},[n,M,ke,ae,i,ge,fe,Ee]),Cn=A!==void 0?A:L||!fe&&N!=="combobox",yn;Cn&&(yn=t.exports.createElement(cn,{className:He("".concat(r,"-arrow"),ne({},"".concat(r,"-arrow-loading"),L)),customizeIcon:j,customizeIconProps:{loading:L,searchValue:Pe,open:ae,focused:Xe,showSearch:ge}}));var In,Qn=function(){U==null||U(),f([],{type:"clear",values:u}),v("",!1,!1)};!R&&x&&(u.length||Pe)&&(In=t.exports.createElement(cn,{className:"".concat(r,"-clear"),onMouseDown:Qn,customizeIcon:K},"\xD7"));var Zn=t.exports.createElement(pe,{ref:Ne}),et=He(r,c,(o={},ne(o,"".concat(r,"-focused"),Xe),ne(o,"".concat(r,"-multiple"),fe),ne(o,"".concat(r,"-single"),!fe),ne(o,"".concat(r,"-allow-clear"),x),ne(o,"".concat(r,"-show-arrow"),Cn),ne(o,"".concat(r,"-disabled"),R),ne(o,"".concat(r,"-loading"),L),ne(o,"".concat(r,"-open"),ae),ne(o,"".concat(r,"-customize-input"),nn),ne(o,"".concat(r,"-show-search"),ge),o)),En=t.exports.createElement(An,{ref:Me,disabled:R,prefixCls:r,visible:ke,popupElement:Zn,containerWidth:wn,animation:se,transitionName:Ae,dropdownStyle:$,dropdownClassName:D,direction:h,dropdownMatchSelectWidth:p,dropdownRender:E,dropdownAlign:W,placement:V,getPopupContainer:F,empty:s,getTriggerDOMNode:function(){return Ce.current},onPopupVisibleChange:Sn,onPopupMouseEnter:qn},Te?t.exports.cloneElement(Te,{ref:sn}):t.exports.createElement(Ln,Ue({},n,{domRef:Ce,prefixCls:r,inputElement:nn,ref:Fe,id:i,showSearch:ge,mode:N,activeDescendantId:z,tagRender:l,values:u,open:ae,onToggleOpen:Ee,activeValue:k,searchValue:Pe,onSearch:v,onSearchSubmit:d,onRemove:$e,tokenWithEnter:b}))),fn;return Te?fn=En:fn=t.exports.createElement("div",Ue({className:et},J,{ref:ze,onMouseDown:_e,onKeyDown:De,onKeyUp:be,onFocus:dn,onBlur:bn}),Xe&&!ae&&t.exports.createElement("span",{style:{width:0,height:0,position:"absolute",overflow:"hidden",opacity:0},"aria-live":"polite"},"".concat(u.map(function(S){var w=S.label,ve=S.value;return["number","string"].includes(Tn(w))?w:ve}).join(", "))),En,yn,In),t.exports.createElement(kn.Provider,{value:Jn},fn)}),Ft=function(n,e){var a=t.exports.useRef({values:new Map,options:new Map}),o=t.exports.useMemo(function(){var r=a.current,c=r.values,m=r.options,l=n.map(function(u){if(u.label===void 0){var f;return Q(Q({},u),{},{label:(f=c.get(u.value))===null||f===void 0?void 0:f.label})}return u}),h=new Map,g=new Map;return l.forEach(function(u){h.set(u.value,u),g.set(u.value,e.get(u.value)||m.get(u.value))}),a.current.values=h,a.current.options=g,l},[n,e]),i=t.exports.useCallback(function(r){return e.get(r)||a.current.options.get(r)},[e]);return[o,i]};function vn(n,e){return Fn(n).join("").toUpperCase().includes(e)}var _t=function(n,e,a,o,i){return t.exports.useMemo(function(){if(!a||o===!1)return n;var r=e.options,c=e.label,m=e.value,l=[],h=typeof o=="function",g=a.toUpperCase(),u=h?o:function(s,y){return i?vn(y[i],g):y[r]?vn(y[c!=="children"?c:"label"],g):vn(y[m],g)},f=h?function(s){return mn(s)}:function(s){return s};return n.forEach(function(s){if(s[r]){var y=u(a,f(s));if(y)l.push(s);else{var M=s[r].filter(function(U){return u(a,f(U))});M.length&&l.push(Q(Q({},s),{},ne({},r,M)))}return}u(a,f(s))&&l.push(s)}),l},[n,o,i,a,e])},Mn=0,Lt=ut();function kt(){var n;return Lt?(n=Mn,Mn+=1):n="TEST_OR_SSR",n}function Kt(n){var e=t.exports.useState(),a=te(e,2),o=a[0],i=a[1];return t.exports.useEffect(function(){i("rc_select_".concat(kt()))},[]),n||o}var $t=["children","value"],Wt=["children"];function Bt(n){var e=n.key,a=n.props,o=a.children,i=a.value,r=Qe(a,$t);return Q({key:e,value:i!==void 0?i:e,children:o},r)}function Kn(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return lt(n).map(function(a,o){if(!t.exports.isValidElement(a)||!a.type)return null;var i=a.type.isSelectOptGroup,r=a.key,c=a.props,m=c.children,l=Qe(c,Wt);return e||!i?Bt(a):Q(Q({key:"__RC_SELECT_GRP__".concat(r===null?o:r,"__"),label:r},l),{},{options:Kn(m)})}).filter(function(a){return a})}function Ht(n,e,a,o,i){return t.exports.useMemo(function(){var r=n,c=!n;c&&(r=Kn(e));var m=new Map,l=new Map,h=function(f,s,y){y&&typeof y=="string"&&f.set(s[y],s)};function g(u){for(var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=0;s<u.length;s+=1){var y=u[s];!y[a.options]||f?(m.set(y[a.value],y),h(l,y,a.label),h(l,y,o),h(l,y,i)):g(y[a.options],!0)}}return g(r),{options:r,valueOptions:m,labelOptions:l}},[n,e,a,o,i])}function Nn(n){var e=t.exports.useRef();e.current=n;var a=t.exports.useCallback(function(){return e.current.apply(e,arguments)},[]);return a}var $n=function(){return null};$n.isSelectOptGroup=!0;var Wn=function(){return null};Wn.isSelectOption=!0;function Ut(){return/(mac\sos|macintosh)/i.test(navigator.appVersion)}var Bn=t.exports.createContext(null),zt=["disabled","title","children","style","className"];function Pn(n){return typeof n=="string"||typeof n=="number"}var jt=function(e,a){var o=Pt(),i=o.prefixCls,r=o.id,c=o.open,m=o.multiple,l=o.mode,h=o.searchValue,g=o.toggleOpen,u=o.notFoundContent,f=o.onPopupScroll,s=t.exports.useContext(Bn),y=s.flattenOptions,M=s.onActiveValue,U=s.defaultActiveFirstOption,N=s.onSelect,R=s.menuItemSelectedIcon,L=s.rawValues,q=s.fieldNames,B=s.virtual,ie=s.listHeight,ce=s.listItemHeight,P="".concat(i,"-item"),k=ct(function(){return y},[c,y],function(D,p){return p[0]&&D[1]!==p[1]}),G=t.exports.useRef(null),z=function(p){p.preventDefault()},X=function(p){G.current&&G.current.scrollTo(typeof p=="number"?{index:p}:p)},T=function(p){for(var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,W=k.length,V=0;V<W;V+=1){var F=(p+V*E+W)%W,Z=k[F],de=Z.group,_=Z.data;if(!de&&!_.disabled)return F}return-1},re=t.exports.useState(function(){return T(0)}),O=te(re,2),x=O[0],A=O[1],j=function(p){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;A(p);var W={source:E?"keyboard":"mouse"},V=k[p];if(!V){M(null,-1,W);return}M(V.value,p,W)};t.exports.useEffect(function(){j(U!==!1?T(0):-1)},[k.length,h]);var K=t.exports.useCallback(function(D){return L.has(D)&&l!=="combobox"},[l,ye(L).toString()]);t.exports.useEffect(function(){var D=setTimeout(function(){if(!m&&c&&L.size===1){var E=Array.from(L)[0],W=k.findIndex(function(V){var F=V.data;return F.value===E});W!==-1&&(j(W),X(W))}});if(c){var p;(p=G.current)===null||p===void 0||p.scrollTo(void 0)}return function(){return clearTimeout(D)}},[c,h]);var pe=function(p){p!==void 0&&N(p,{selected:!L.has(p)}),m||g(!1)};if(t.exports.useImperativeHandle(a,function(){return{onKeyDown:function(p){var E=p.which,W=p.ctrlKey;switch(E){case C.N:case C.P:case C.UP:case C.DOWN:{var V=0;if(E===C.UP?V=-1:E===C.DOWN?V=1:Ut()&&W&&(E===C.N?V=1:E===C.P&&(V=-1)),V!==0){var F=T(x+V,V);X(F),j(F,!0)}break}case C.ENTER:{var Z=k[x];Z&&!Z.data.disabled?pe(Z.value):pe(void 0),c&&p.preventDefault();break}case C.ESC:g(!1),c&&p.stopPropagation()}},onKeyUp:function(){},scrollTo:function(p){X(p)}}}),k.length===0)return t.exports.createElement("div",{role:"listbox",id:"".concat(r,"_list"),className:"".concat(P,"-empty"),onMouseDown:z},u);var se=Object.keys(q).map(function(D){return q[D]}),Ae=function(p){return p.label},$=function(p){var E=k[p];if(!E)return null;var W=E.data||{},V=W.value,F=E.group,Z=ln(W,!0),de=Ae(E);return E?t.exports.createElement("div",Ue({"aria-label":typeof de=="string"&&!F?de:null},Z,{key:p,role:F?"presentation":"option",id:"".concat(r,"_list_").concat(p),"aria-selected":K(V)}),V):null};return t.exports.createElement(t.exports.Fragment,null,t.exports.createElement("div",{role:"listbox",id:"".concat(r,"_list"),style:{height:0,width:0,overflow:"hidden"}},$(x-1),$(x),$(x+1)),t.exports.createElement(pt,{itemKey:"key",ref:G,data:k,height:ie,itemHeight:ce,fullHeight:!1,onMouseDown:z,onScroll:f,virtual:B},function(D,p){var E,W=D.group,V=D.groupOption,F=D.data,Z=D.label,de=D.value,_=F.key;if(W){var oe,ue=(oe=F.title)!==null&&oe!==void 0?oe:Pn(Z)?Z.toString():void 0;return t.exports.createElement("div",{className:He(P,"".concat(P,"-group")),title:ue},Z!==void 0?Z:_)}var le=F.disabled,me=F.title;F.children;var Se=F.style,fe=F.className,ge=Qe(F,zt),J=st(ge,se),he=K(de),Ie="".concat(P,"-option"),Le=He(P,Ie,fe,(E={},ne(E,"".concat(Ie,"-grouped"),V),ne(E,"".concat(Ie,"-active"),x===p&&!le),ne(E,"".concat(Ie,"-disabled"),le),ne(E,"".concat(Ie,"-selected"),he),E)),Oe=Ae(D),ze=!R||typeof R=="function"||he,Ce=typeof Oe=="number"?Oe:Oe||de,Me=Pn(Ce)?Ce.toString():void 0;return me!==void 0&&(Me=me),t.exports.createElement("div",Ue({},ln(J),{"aria-selected":he,className:Le,title:Me,onMouseMove:function(){x===p||le||j(p)},onClick:function(){le||pe(de)},style:Se}),t.exports.createElement("div",{className:"".concat(Ie,"-content")},Ce),t.exports.isValidElement(R)||he,ze&&t.exports.createElement(cn,{className:"".concat(P,"-option-state"),customizeIcon:R,customizeIconProps:{isSelected:he}},he?"\u2713":null))}))},Hn=t.exports.forwardRef(jt);Hn.displayName="OptionList";var Gt=["id","mode","prefixCls","backfill","fieldNames","inputValue","searchValue","onSearch","autoClearSearchValue","onSelect","onDeselect","dropdownMatchSelectWidth","filterOption","filterSort","optionFilterProp","optionLabelProp","options","children","defaultActiveFirstOption","menuItemSelectedIcon","virtual","listHeight","listItemHeight","value","defaultValue","labelInValue","onChange"],Xt=["inputValue"];function Yt(n){return!n||Tn(n)!=="object"}var qt=t.exports.forwardRef(function(n,e){var a=n.id,o=n.mode,i=n.prefixCls,r=i===void 0?"rc-select":i,c=n.backfill,m=n.fieldNames,l=n.inputValue,h=n.searchValue,g=n.onSearch,u=n.autoClearSearchValue,f=u===void 0?!0:u,s=n.onSelect,y=n.onDeselect,M=n.dropdownMatchSelectWidth,U=M===void 0?!0:M,N=n.filterOption,R=n.filterSort,L=n.optionFilterProp,q=n.optionLabelProp,B=n.options,ie=n.children,ce=n.defaultActiveFirstOption,P=n.menuItemSelectedIcon,k=n.virtual,G=n.listHeight,z=G===void 0?200:G,X=n.listItemHeight,T=X===void 0?20:X,re=n.value,O=n.defaultValue,x=n.labelInValue,A=n.onChange,j=Qe(n,Gt),K=Kt(a),pe=gn(o),se=!!(!B&&ie),Ae=t.exports.useMemo(function(){return N===void 0&&o==="combobox"?!1:N},[N,o]),$=t.exports.useMemo(function(){return Vn(m,se)},[JSON.stringify(m),se]),D=pn("",{value:h!==void 0?h:l,postState:function(v){return v||""}}),p=te(D,2),E=p[0],W=p[1],V=Ht(B,ie,$,L,q),F=V.valueOptions,Z=V.labelOptions,de=V.options,_=t.exports.useCallback(function(b){var v=Fn(b);return v.map(function(d){var I,H,Y,Ke;if(Yt(d))I=d;else{var De;Y=d.key,H=d.label,I=(De=d.value)!==null&&De!==void 0?De:Y}var be=F.get(I);if(be){var $e;H===void 0&&(H=be==null?void 0:be[q||$.label]),Y===void 0&&(Y=($e=be==null?void 0:be.key)!==null&&$e!==void 0?$e:I),Ke=be==null?void 0:be.disabled}return{label:H,value:I,key:Y,disabled:Ke}})},[$,q,F]),oe=pn(O,{value:re}),ue=te(oe,2),le=ue[0],me=ue[1],Se=t.exports.useMemo(function(){var b,v=_(le);return o==="combobox"&&!(!((b=v[0])===null||b===void 0)&&b.value)?[]:v},[le,_,o]),fe=Ft(Se,F),ge=te(fe,2),J=ge[0],he=ge[1],Ie=t.exports.useMemo(function(){if(!o&&J.length===1){var b=J[0];if(b.value===null&&(b.label===null||b.label===void 0))return[]}return J.map(function(v){var d;return Q(Q({},v),{},{label:(d=v.label)!==null&&d!==void 0?d:v.value})})},[o,J]),Le=t.exports.useMemo(function(){return new Set(J.map(function(b){return b.value}))},[J]);t.exports.useEffect(function(){if(o==="combobox"){var b,v=(b=J[0])===null||b===void 0?void 0:b.value;v!=null&&W(String(v))}},[J]);var Oe=Nn(function(b,v){var d,I=v!=null?v:b;return d={},ne(d,$.value,b),ne(d,$.label,I),d}),ze=t.exports.useMemo(function(){if(o!=="tags")return de;var b=ye(de),v=function(I){return F.has(I)};return ye(J).sort(function(d,I){return d.value<I.value?-1:1}).forEach(function(d){var I=d.value;v(I)||b.push(Oe(I,d.label))}),b},[Oe,de,F,J,o]),Ce=_t(ze,$,E,Ae,L),Me=t.exports.useMemo(function(){return o!=="tags"||!E||Ce.some(function(b){return b[L||"value"]===E})?Ce:[Oe(E)].concat(ye(Ce))},[Oe,L,o,Ce,E]),Fe=t.exports.useMemo(function(){return R?ye(Me).sort(function(b,v){return R(b,v)}):Me},[Me,R]),Ne=t.exports.useMemo(function(){return mt(Fe,{fieldNames:$,childrenAsData:se})},[Fe,$,se]),je=function(v){var d=_(v);if(me(d),A&&(d.length!==J.length||d.some(function(Y,Ke){var De;return((De=J[Ke])===null||De===void 0?void 0:De.value)!==(Y==null?void 0:Y.value)}))){var I=x?d:d.map(function(Y){return Y.value}),H=d.map(function(Y){return mn(he(Y.value))});A(pe?I:I[0],pe?H:H[0])}},Ze=t.exports.useState(null),Xe=te(Ze,2),en=Xe[0],Ye=Xe[1],Pe=t.exports.useState(0),nn=te(Pe,2),Te=nn[0],sn=nn[1],rn=ce!==void 0?ce:o!=="combobox",tn=t.exports.useCallback(function(b,v){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},I=d.source,H=I===void 0?"keyboard":I;sn(v),c&&o==="combobox"&&b!==null&&H==="keyboard"&&Ye(String(b))},[c,o]),Ge=function(v,d){var I=function(){var Ve,_e=he(v);return[x?{label:_e==null?void 0:_e[$.label],value:v,key:(Ve=_e==null?void 0:_e.key)!==null&&Ve!==void 0?Ve:v}:v,mn(_e)]};if(d&&s){var H=I(),Y=te(H,2),Ke=Y[0],De=Y[1];s(Ke,De)}else if(!d&&y){var be=I(),$e=te(be,2),on=$e[0],dn=$e[1];y(on,dn)}},qe=Nn(function(b,v){var d,I=pe?v.selected:!0;I?d=pe?[].concat(ye(J),[b]):[b]:d=J.filter(function(H){return H.value!==b}),je(d),Ge(b,I),o==="combobox"?Ye(""):(!gn||f)&&(W(""),Ye(""))}),ae=function(v,d){je(v),(d.type==="remove"||d.type==="clear")&&d.values.forEach(function(I){Ge(I.value,!1)})},un=function(v,d){if(W(v),Ye(null),d.source==="submit"){var I=(v||"").trim();if(I){var H=Array.from(new Set([].concat(ye(Le),[I])));je(H),Ge(I,!0),W("")}return}d.source!=="blur"&&(o==="combobox"&&je(v),g==null||g(v))},ke=function(v){var d=v;o!=="tags"&&(d=v.map(function(H){var Y=Z.get(H);return Y==null?void 0:Y.value}).filter(function(H){return H!==void 0}));var I=Array.from(new Set([].concat(ye(Le),ye(d))));je(I),I.forEach(function(H){Ge(H,!0)})},Ee=t.exports.useMemo(function(){var b=k!==!1&&U!==!1;return Q(Q({},V),{},{flattenOptions:Ne,onActiveValue:tn,defaultActiveFirstOption:rn,onSelect:qe,menuItemSelectedIcon:P,rawValues:Le,fieldNames:$,virtual:b,listHeight:z,listItemHeight:T,childrenAsData:se})},[V,Ne,tn,rn,qe,P,Le,$,k,U,z,T,se]);return t.exports.createElement(Bn.Provider,{value:Ee},t.exports.createElement(At,Ue({},j,{id:K,prefixCls:r,ref:e,omitDomProps:Xt,mode:o,displayValues:Ie,onDisplayValuesChange:ae,searchValue:E,onSearch:un,onSearchSplit:ke,dropdownMatchSelectWidth:U,OptionList:Hn,emptyOptions:!Ne.length,activeValue:en,activeDescendantId:"".concat(K,"_list_").concat(Te)})))}),Un=qt;Un.Option=Wn;Un.OptGroup=$n;export{Wn as O,Un as T,$n as a};