import{g as X}from"./@ant-design.cc24bc1e.js";function h(e,r){Z(e)&&(e="100%");var t=J(e);return e=r===360?e:Math.min(r,Math.max(0,parseFloat(e))),t&&(e=parseInt(String(e*r),10)/100),Math.abs(e-r)<1e-6?1:(r===360?e=(e<0?e%r+r:e%r)/parseFloat(String(r)):e=e%r/parseFloat(String(r)),e)}function M(e){return Math.min(1,Math.max(0,e))}function Z(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function J(e){return typeof e=="string"&&e.indexOf("%")!==-1}function O(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function b(e){return e<=1?"".concat(Number(e)*100,"%"):e}function g(e){return e.length===1?"0"+e:String(e)}function C(e,r,t){return{r:h(e,255)*255,g:h(r,255)*255,b:h(t,255)*255}}function S(e,r,t){e=h(e,255),r=h(r,255),t=h(t,255);var a=Math.max(e,r,t),n=Math.min(e,r,t),i=0,f=0,o=(a+n)/2;if(a===n)f=0,i=0;else{var s=a-n;switch(f=o>.5?s/(2-a-n):s/(a+n),a){case e:i=(r-t)/s+(r<t?6:0);break;case r:i=(t-e)/s+2;break;case t:i=(e-r)/s+4;break}i/=6}return{h:i,s:f,l:o}}function R(e,r,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+(r-e)*(6*t):t<1/2?r:t<2/3?e+(r-e)*(2/3-t)*6:e}function P(e,r,t){var a,n,i;if(e=h(e,360),r=h(r,100),t=h(t,100),r===0)n=t,i=t,a=t;else{var f=t<.5?t*(1+r):t+r-t*r,o=2*t-f;a=R(o,f,e+1/3),n=R(o,f,e),i=R(o,f,e-1/3)}return{r:a*255,g:n*255,b:i*255}}function H(e,r,t){e=h(e,255),r=h(r,255),t=h(t,255);var a=Math.max(e,r,t),n=Math.min(e,r,t),i=0,f=a,o=a-n,s=a===0?0:o/a;if(a===n)i=0;else{switch(a){case e:i=(r-t)/o+(r<t?6:0);break;case r:i=(t-e)/o+2;break;case t:i=(e-r)/o+4;break}i/=6}return{h:i,s,v:f}}function G(e,r,t){e=h(e,360)*6,r=h(r,100),t=h(t,100);var a=Math.floor(e),n=e-a,i=t*(1-r),f=t*(1-n*r),o=t*(1-(1-n)*r),s=a%6,p=[t,f,i,i,o,t][s],m=[o,t,t,f,i,i][s],y=[i,i,o,t,t,f][s];return{r:p*255,g:m*255,b:y*255}}function T(e,r,t,a){var n=[g(Math.round(e).toString(16)),g(Math.round(r).toString(16)),g(Math.round(t).toString(16))];return a&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function W(e,r,t,a,n){var i=[g(Math.round(e).toString(16)),g(Math.round(r).toString(16)),g(Math.round(t).toString(16)),g(I(a))];return n&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function B(e,r,t,a){var n=[g(I(a)),g(Math.round(e).toString(16)),g(Math.round(r).toString(16)),g(Math.round(t).toString(16))];return n.join("")}function I(e){return Math.round(parseFloat(e)*255).toString(16)}function F(e){return u(e)/255}function u(e){return parseInt(e,16)}function z(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var w={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function q(e){var r={r:0,g:0,b:0},t=1,a=null,n=null,i=null,f=!1,o=!1;return typeof e=="string"&&(e=D(e)),typeof e=="object"&&(l(e.r)&&l(e.g)&&l(e.b)?(r=C(e.r,e.g,e.b),f=!0,o=String(e.r).substr(-1)==="%"?"prgb":"rgb"):l(e.h)&&l(e.s)&&l(e.v)?(a=b(e.s),n=b(e.v),r=G(e.h,a,n),f=!0,o="hsv"):l(e.h)&&l(e.s)&&l(e.l)&&(a=b(e.s),i=b(e.l),r=P(e.h,a,i),f=!0,o="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(t=e.a)),t=O(t),{ok:f,format:e.format||o,r:Math.min(255,Math.max(r.r,0)),g:Math.min(255,Math.max(r.g,0)),b:Math.min(255,Math.max(r.b,0)),a:t}}var K="[-\\+]?\\d+%?",Q="[-\\+]?\\d*\\.\\d+%?",v="(?:".concat(Q,")|(?:").concat(K,")"),k="[\\s|\\(]+(".concat(v,")[,|\\s]+(").concat(v,")[,|\\s]+(").concat(v,")\\s*\\)?"),A="[\\s|\\(]+(".concat(v,")[,|\\s]+(").concat(v,")[,|\\s]+(").concat(v,")[,|\\s]+(").concat(v,")\\s*\\)?"),c={CSS_UNIT:new RegExp(v),rgb:new RegExp("rgb"+k),rgba:new RegExp("rgba"+A),hsl:new RegExp("hsl"+k),hsla:new RegExp("hsla"+A),hsv:new RegExp("hsv"+k),hsva:new RegExp("hsva"+A),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function D(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;var r=!1;if(w[e])e=w[e],r=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t=c.rgb.exec(e);return t?{r:t[1],g:t[2],b:t[3]}:(t=c.rgba.exec(e),t?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=c.hsl.exec(e),t?{h:t[1],s:t[2],l:t[3]}:(t=c.hsla.exec(e),t?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=c.hsv.exec(e),t?{h:t[1],s:t[2],v:t[3]}:(t=c.hsva.exec(e),t?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=c.hex8.exec(e),t?{r:u(t[1]),g:u(t[2]),b:u(t[3]),a:F(t[4]),format:r?"name":"hex8"}:(t=c.hex6.exec(e),t?{r:u(t[1]),g:u(t[2]),b:u(t[3]),format:r?"name":"hex"}:(t=c.hex4.exec(e),t?{r:u(t[1]+t[1]),g:u(t[2]+t[2]),b:u(t[3]+t[3]),a:F(t[4]+t[4]),format:r?"name":"hex8"}:(t=c.hex3.exec(e),t?{r:u(t[1]+t[1]),g:u(t[2]+t[2]),b:u(t[3]+t[3]),format:r?"name":"hex"}:!1)))))))))}function l(e){return Boolean(c.CSS_UNIT.exec(String(e)))}var d=function(){function e(r,t){r===void 0&&(r=""),t===void 0&&(t={});var a;if(r instanceof e)return r;typeof r=="number"&&(r=z(r)),this.originalInput=r;var n=q(r);this.originalInput=r,this.r=n.r,this.g=n.g,this.b=n.b,this.a=n.a,this.roundA=Math.round(100*this.a)/100,this.format=(a=t.format)!==null&&a!==void 0?a:n.format,this.gradientType=t.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=n.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var r=this.toRgb();return(r.r*299+r.g*587+r.b*114)/1e3},e.prototype.getLuminance=function(){var r=this.toRgb(),t,a,n,i=r.r/255,f=r.g/255,o=r.b/255;return i<=.03928?t=i/12.92:t=Math.pow((i+.055)/1.055,2.4),f<=.03928?a=f/12.92:a=Math.pow((f+.055)/1.055,2.4),o<=.03928?n=o/12.92:n=Math.pow((o+.055)/1.055,2.4),.2126*t+.7152*a+.0722*n},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(r){return this.a=O(r),this.roundA=Math.round(100*this.a)/100,this},e.prototype.toHsv=function(){var r=H(this.r,this.g,this.b);return{h:r.h*360,s:r.s,v:r.v,a:this.a}},e.prototype.toHsvString=function(){var r=H(this.r,this.g,this.b),t=Math.round(r.h*360),a=Math.round(r.s*100),n=Math.round(r.v*100);return this.a===1?"hsv(".concat(t,", ").concat(a,"%, ").concat(n,"%)"):"hsva(".concat(t,", ").concat(a,"%, ").concat(n,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var r=S(this.r,this.g,this.b);return{h:r.h*360,s:r.s,l:r.l,a:this.a}},e.prototype.toHslString=function(){var r=S(this.r,this.g,this.b),t=Math.round(r.h*360),a=Math.round(r.s*100),n=Math.round(r.l*100);return this.a===1?"hsl(".concat(t,", ").concat(a,"%, ").concat(n,"%)"):"hsla(".concat(t,", ").concat(a,"%, ").concat(n,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(r){return r===void 0&&(r=!1),T(this.r,this.g,this.b,r)},e.prototype.toHexString=function(r){return r===void 0&&(r=!1),"#"+this.toHex(r)},e.prototype.toHex8=function(r){return r===void 0&&(r=!1),W(this.r,this.g,this.b,this.a,r)},e.prototype.toHex8String=function(r){return r===void 0&&(r=!1),"#"+this.toHex8(r)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var r=Math.round(this.r),t=Math.round(this.g),a=Math.round(this.b);return this.a===1?"rgb(".concat(r,", ").concat(t,", ").concat(a,")"):"rgba(".concat(r,", ").concat(t,", ").concat(a,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var r=function(t){return"".concat(Math.round(h(t,255)*100),"%")};return{r:r(this.r),g:r(this.g),b:r(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var r=function(t){return Math.round(h(t,255)*100)};return this.a===1?"rgb(".concat(r(this.r),"%, ").concat(r(this.g),"%, ").concat(r(this.b),"%)"):"rgba(".concat(r(this.r),"%, ").concat(r(this.g),"%, ").concat(r(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var r="#"+T(this.r,this.g,this.b,!1),t=0,a=Object.entries(w);t<a.length;t++){var n=a[t],i=n[0],f=n[1];if(r===f)return i}return!1},e.prototype.toString=function(r){var t=Boolean(r);r=r!=null?r:this.format;var a=!1,n=this.a<1&&this.a>=0,i=!t&&n&&(r.startsWith("hex")||r==="name");return i?r==="name"&&this.a===0?this.toName():this.toRgbString():(r==="rgb"&&(a=this.toRgbString()),r==="prgb"&&(a=this.toPercentageRgbString()),(r==="hex"||r==="hex6")&&(a=this.toHexString()),r==="hex3"&&(a=this.toHexString(!0)),r==="hex4"&&(a=this.toHex8String(!0)),r==="hex8"&&(a=this.toHex8String()),r==="name"&&(a=this.toName()),r==="hsl"&&(a=this.toHslString()),r==="hsv"&&(a=this.toHsvString()),a||this.toHexString())},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(r){r===void 0&&(r=10);var t=this.toHsl();return t.l+=r/100,t.l=M(t.l),new e(t)},e.prototype.brighten=function(r){r===void 0&&(r=10);var t=this.toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(r/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(r/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(r/100)))),new e(t)},e.prototype.darken=function(r){r===void 0&&(r=10);var t=this.toHsl();return t.l-=r/100,t.l=M(t.l),new e(t)},e.prototype.tint=function(r){return r===void 0&&(r=10),this.mix("white",r)},e.prototype.shade=function(r){return r===void 0&&(r=10),this.mix("black",r)},e.prototype.desaturate=function(r){r===void 0&&(r=10);var t=this.toHsl();return t.s-=r/100,t.s=M(t.s),new e(t)},e.prototype.saturate=function(r){r===void 0&&(r=10);var t=this.toHsl();return t.s+=r/100,t.s=M(t.s),new e(t)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(r){var t=this.toHsl(),a=(t.h+r)%360;return t.h=a<0?360+a:a,new e(t)},e.prototype.mix=function(r,t){t===void 0&&(t=50);var a=this.toRgb(),n=new e(r).toRgb(),i=t/100,f={r:(n.r-a.r)*i+a.r,g:(n.g-a.g)*i+a.g,b:(n.b-a.b)*i+a.b,a:(n.a-a.a)*i+a.a};return new e(f)},e.prototype.analogous=function(r,t){r===void 0&&(r=6),t===void 0&&(t=30);var a=this.toHsl(),n=360/t,i=[this];for(a.h=(a.h-(n*r>>1)+720)%360;--r;)a.h=(a.h+n)%360,i.push(new e(a));return i},e.prototype.complement=function(){var r=this.toHsl();return r.h=(r.h+180)%360,new e(r)},e.prototype.monochromatic=function(r){r===void 0&&(r=6);for(var t=this.toHsv(),a=t.h,n=t.s,i=t.v,f=[],o=1/r;r--;)f.push(new e({h:a,s:n,v:i})),i=(i+o)%1;return f},e.prototype.splitcomplement=function(){var r=this.toHsl(),t=r.h;return[this,new e({h:(t+72)%360,s:r.s,l:r.l}),new e({h:(t+216)%360,s:r.s,l:r.l})]},e.prototype.onBackground=function(r){var t=this.toRgb(),a=new e(r).toRgb();return new e({r:a.r+(t.r-a.r)*t.a,g:a.g+(t.g-a.g)*t.a,b:a.b+(t.b-a.b)*t.a})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(r){for(var t=this.toHsl(),a=t.h,n=[this],i=360/r,f=1;f<r;f++)n.push(new e({h:(a+f*i)%360,s:t.s,l:t.l}));return n},e.prototype.equals=function(r){return this.toRgbString()===new e(r).toRgbString()},e}();function j(e,r){return e===void 0&&(e=""),r===void 0&&(r={}),new d(e,r)}function N(e,r){var t=new d(e),a=new d(r);return(Math.max(t.getLuminance(),a.getLuminance())+.05)/(Math.min(t.getLuminance(),a.getLuminance())+.05)}function L(e,r,t){var a,n;t===void 0&&(t={level:"AA",size:"small"});var i=N(e,r);switch(((a=t.level)!==null&&a!==void 0?a:"AA")+((n=t.size)!==null&&n!==void 0?n:"small")){case"AAsmall":case"AAAlarge":return i>=4.5;case"AAlarge":return i>=3;case"AAAsmall":return i>=7;default:return!1}}function U(e,r,t){t===void 0&&(t={includeFallbackColors:!1,level:"AA",size:"small"});for(var a=null,n=0,i=t.includeFallbackColors,f=t.level,o=t.size,s=0,p=r;s<p.length;s++){var m=p[s],y=N(e,m);y>n&&(n=y,a=new d(m))}return L(e,a,{level:f,size:o})||!i?a:(t.includeFallbackColors=!1,U(e,["#fff","#000"],t))}function Y(e,r){var t=new d(e),a="#"+B(t.r,t.g,t.b,t.a),n=a,i=t.gradientType?"GradientType = 1, ":"";if(r){var f=new d(r);n="#"+B(f.r,f.g,f.b,f.a)}return"progid:DXImageTransform.Microsoft.gradient(".concat(i,"startColorstr=").concat(a,",endColorstr=").concat(n,")")}function ee(e,r){var t={r:b(e.r),g:b(e.g),b:b(e.b)};return e.a!==void 0&&(t.a=Number(e.a)),new d(t,r)}function te(){return new d({r:Math.random(),g:Math.random(),b:Math.random()})}function V(e){if(e===void 0&&(e={}),e.count!==void 0&&e.count!==null){var r=e.count,t=[];for(e.count=void 0;r>t.length;)e.count=null,e.seed&&(e.seed+=1),t.push(V(e));return e.count=r,t}var a=re(e.hue,e.seed),n=ae(a,e),i=ne(a,n,e),f={h:a,s:n,v:i};return e.alpha!==void 0&&(f.a=e.alpha),new d(f)}function re(e,r){var t=fe(e),a=x(t,r);return a<0&&(a=360+a),a}function ae(e,r){if(r.hue==="monochrome")return 0;if(r.luminosity==="random")return x([0,100],r.seed);var t=$(e).saturationRange,a=t[0],n=t[1];switch(r.luminosity){case"bright":a=55;break;case"dark":a=n-10;break;case"light":n=55;break}return x([a,n],r.seed)}function ne(e,r,t){var a=ie(e,r),n=100;switch(t.luminosity){case"dark":n=a+20;break;case"light":a=(n+a)/2;break;case"random":a=0,n=100;break}return x([a,n],t.seed)}function ie(e,r){for(var t=$(e).lowerBounds,a=0;a<t.length-1;a++){var n=t[a][0],i=t[a][1],f=t[a+1][0],o=t[a+1][1];if(r>=n&&r<=f){var s=(o-i)/(f-n),p=i-s*n;return s*r+p}}return 0}function fe(e){var r=parseInt(e,10);if(!Number.isNaN(r)&&r<360&&r>0)return[r,r];if(typeof e=="string"){var t=E.find(function(f){return f.name===e});if(t){var a=_(t);if(a.hueRange)return a.hueRange}var n=new d(e);if(n.isValid){var i=n.toHsv().h;return[i,i]}}return[0,360]}function $(e){e>=334&&e<=360&&(e-=360);for(var r=0,t=E;r<t.length;r++){var a=t[r],n=_(a);if(n.hueRange&&e>=n.hueRange[0]&&e<=n.hueRange[1])return n}throw Error("Color not found")}function x(e,r){if(r===void 0)return Math.floor(e[0]+Math.random()*(e[1]+1-e[0]));var t=e[1]||1,a=e[0]||0;r=(r*9301+49297)%233280;var n=r/233280;return Math.floor(a+n*(t-a))}function _(e){var r=e.lowerBounds[0][0],t=e.lowerBounds[e.lowerBounds.length-1][0],a=e.lowerBounds[e.lowerBounds.length-1][1],n=e.lowerBounds[0][1];return{name:e.name,hueRange:e.hueRange,lowerBounds:e.lowerBounds,saturationRange:[r,t],brightnessRange:[a,n]}}var E=[{name:"monochrome",hueRange:null,lowerBounds:[[0,0],[100,0]]},{name:"red",hueRange:[-26,18],lowerBounds:[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]},{name:"orange",hueRange:[19,46],lowerBounds:[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]},{name:"yellow",hueRange:[47,62],lowerBounds:[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]},{name:"green",hueRange:[63,178],lowerBounds:[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]},{name:"blue",hueRange:[179,257],lowerBounds:[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]},{name:"purple",hueRange:[258,282],lowerBounds:[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]},{name:"pink",hueRange:[283,334],lowerBounds:[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]}],oe=Object.freeze(Object.defineProperty({__proto__:null,default:j,TinyColor:d,tinycolor:j,names:w,readability:N,isReadable:L,mostReadable:U,toMsFilter:Y,fromRatio:ee,legacyRandom:te,inputToRGB:q,stringInputToObject:D,isValidCSSUnit:l,random:V,bounds:E,rgbToRgb:C,rgbToHsl:S,hslToRgb:P,rgbToHsv:H,hsvToRgb:G,rgbToHex:T,rgbaToHex:W,rgbaToArgbHex:B,convertDecimalToHex:I,convertHexToDecimal:F,parseIntFromHex:u,numberInputToObject:z},Symbol.toStringTag,{value:"Module"})),he=X(oe);export{d as T,T as a,he as b,q as i,H as r};
