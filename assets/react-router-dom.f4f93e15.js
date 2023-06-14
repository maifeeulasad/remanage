import{r as e}from"./react.c0c01f32.js";import{c as l}from"./history.cfc07528.js";import{R as u}from"./react-router.5e47fa33.js";/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function x(a){let{basename:n,children:i,window:s}=a,r=e.exports.useRef();r.current==null&&(r.current=l({window:s}));let t=r.current,[o,c]=e.exports.useState({action:t.action,location:t.location});return e.exports.useLayoutEffect(()=>t.listen(c),[t]),e.exports.createElement(u,{basename:n,children:i,location:o.location,navigationType:o.action,navigator:t})}export{x as B};
