import{r as n}from"./react.c0c01f32.js";function f(e,r){if(e.length!==r.length)return!1;for(var t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}function c(e,r){var t=n.exports.useState(function(){return{inputs:r,result:e()}})[0],s=n.exports.useRef(!0),u=n.exports.useRef(t),o=s.current||Boolean(r&&u.current.inputs&&f(r,u.current.inputs)),a=o?u.current:{inputs:r,result:e()};return n.exports.useEffect(function(){s.current=!1,u.current=a},[a]),a.result}function l(e,r){return c(function(){return e},r)}var v=c,m=l;export{v as a,m as u};
