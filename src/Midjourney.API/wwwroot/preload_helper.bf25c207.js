!function(){"use strict";var t="".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"midjourney-proxy-admin","b":"webpack","f":[["88.6c5b46ee.async.js",88],["89.600f4609.async.js",89],["123.a5d237dc.async.js",123],["134.746c1fbc.async.js",134],["p__Welcome.84c1b763.async.js",185],["p__AccountList__index.f859be42.async.js",201],["228.72c78f5a.async.js",228],["248.4228c97c.async.js",248],["293.baf687d3.async.js",293],["t__plugin-layout__Layout.5012e1ab.chunk.css",301],["t__plugin-layout__Layout.d587937a.async.js",301],["p__User__Login__index.778b1cb7.async.js",366],["390.976f7083.async.js",390],["p__Task__List__index.aa57ae6c.async.js",502],["516.11c3b17d.async.js",516],["540.43e0c696.async.js",540],["p__404.8182e601.async.js",571],["598.2f90876a.async.js",598],["695.d06ef5fb.async.js",695],["p__Probe__index.6a9ff373.chunk.css",780],["p__Probe__index.59a3ae8b.async.js",780],["p__Draw__index.63774c9e.chunk.css",903],["p__Draw__index.4251bac7.async.js",903],["905.75545e72.async.js",905]],"r":{"/*":[16,23],"/":[1,3,9,10,23],"/welcome":[3,4,6,1,9,10,23],"/account":[3,5,6,7,8,14,17,1,9,10,23],"/task":[2,3,6,7,8,13,14,15,17,18,23,1,9,10],"/draw-test":[0,2,3,6,7,17,21,22,1,9,10,23],"/probe":[3,6,19,20,1,9,10,23],"/user/login":[2,3,8,11,15,17]}},{publicPath:"/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();