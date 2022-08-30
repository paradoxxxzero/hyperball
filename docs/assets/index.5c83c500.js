(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var Yh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $h(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Cf={exports:{}};(function(r,e){(function(t,n){r.exports=n()})(Yh,function(){var t=function(){function n(S){return f.appendChild(S.dom),S}function i(S){for(var C=0;C<f.children.length;C++)f.children[C].style.display=C===S?"block":"none";s=S}var s=0,f=document.createElement("div");f.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",f.addEventListener("click",function(S){S.preventDefault(),i(++s%f.children.length)},!1);var l=(performance||Date).now(),d=l,h=0,g=n(new t.Panel("FPS","#0ff","#002")),m=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var v=n(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:f,addPanel:n,showPanel:i,begin:function(){l=(performance||Date).now()},end:function(){h++;var S=(performance||Date).now();if(m.update(S-l,200),S>d+1e3&&(g.update(1e3*h/(S-d),100),d=S,h=0,v)){var C=performance.memory;v.update(C.usedJSHeapSize/1048576,C.jsHeapSizeLimit/1048576)}return S},update:function(){l=this.end()},domElement:f,setMode:i}};return t.Panel=function(n,i,s){var f=1/0,l=0,d=Math.round,h=d(window.devicePixelRatio||1),g=80*h,m=48*h,v=3*h,S=2*h,C=3*h,y=15*h,_=74*h,E=30*h,A=document.createElement("canvas");A.width=g,A.height=m,A.style.cssText="width:80px;height:48px";var L=A.getContext("2d");return L.font="bold "+9*h+"px Helvetica,Arial,sans-serif",L.textBaseline="top",L.fillStyle=s,L.fillRect(0,0,g,m),L.fillStyle=i,L.fillText(n,v,S),L.fillRect(C,y,_,E),L.fillStyle=s,L.globalAlpha=.9,L.fillRect(C,y,_,E),{dom:A,update:function(k,D){f=Math.min(f,k),l=Math.max(l,k),L.fillStyle=s,L.globalAlpha=1,L.fillRect(0,0,g,y),L.fillStyle=i,L.fillText(d(k)+" "+n+" ("+d(f)+"-"+d(l)+")",v,S),L.drawImage(A,C+h,y,_-h,E,C,y,_-h,E),L.fillRect(C+_-h,y,h,E),L.fillStyle=s,L.globalAlpha=.9,L.fillRect(C+_-h,y,h,d((1-k/D)*E))}}},t})})(Cf);const Zh=Cf.exports;var Af={exports:{}};(function(r,e){(function(t){r.exports=t()})(function(){var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(o){return!(!o||!o.Window)&&o instanceof o.Window};var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.getWindow=function(o){return(0,t.default)(o)?o:(o.ownerDocument||o).defaultView||s.window},n.init=f,n.window=n.realWindow=void 0;var i=void 0;n.realWindow=i;var s=void 0;function f(o){n.realWindow=i=o;var a=o.document.createTextNode("");a.ownerDocument!==o.document&&typeof o.wrap=="function"&&o.wrap(a)===a&&(o=o.wrap(o)),n.window=s=o}n.window=s,typeof window<"u"&&window&&f(window);var l={};function d(o){return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},d(o)}Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var h=function(o){return!!o&&d(o)==="object"},g=function(o){return typeof o=="function"},m={window:function(o){return o===n.window||(0,t.default)(o)},docFrag:function(o){return h(o)&&o.nodeType===11},object:h,func:g,number:function(o){return typeof o=="number"},bool:function(o){return typeof o=="boolean"},string:function(o){return typeof o=="string"},element:function(o){if(!o||d(o)!=="object")return!1;var a=n.getWindow(o)||n.window;return/object|function/.test(typeof Element>"u"?"undefined":d(Element))?o instanceof Element||o instanceof a.Element:o.nodeType===1&&typeof o.nodeName=="string"},plainObject:function(o){return h(o)&&!!o.constructor&&/function Object\b/.test(o.constructor.toString())},array:function(o){return h(o)&&o.length!==void 0&&g(o.splice)}};l.default=m;var v={};function S(o){var a=o.interaction;if(a.prepared.name==="drag"){var c=a.prepared.axis;c==="x"?(a.coords.cur.page.y=a.coords.start.page.y,a.coords.cur.client.y=a.coords.start.client.y,a.coords.velocity.client.y=0,a.coords.velocity.page.y=0):c==="y"&&(a.coords.cur.page.x=a.coords.start.page.x,a.coords.cur.client.x=a.coords.start.client.x,a.coords.velocity.client.x=0,a.coords.velocity.page.x=0)}}function C(o){var a=o.iEvent,c=o.interaction;if(c.prepared.name==="drag"){var u=c.prepared.axis;if(u==="x"||u==="y"){var p=u==="x"?"y":"x";a.page[p]=c.coords.start.page[p],a.client[p]=c.coords.start.client[p],a.delta[p]=0}}}Object.defineProperty(v,"__esModule",{value:!0}),v.default=void 0;var y={id:"actions/drag",install:function(o){var a=o.actions,c=o.Interactable,u=o.defaults;c.prototype.draggable=y.draggable,a.map.drag=y,a.methodDict.drag="draggable",u.actions.drag=y.defaults},listeners:{"interactions:before-action-move":S,"interactions:action-resume":S,"interactions:action-move":C,"auto-start:check":function(o){var a=o.interaction,c=o.interactable,u=o.buttons,p=c.options.drag;if(p&&p.enabled&&(!a.pointerIsDown||!/mouse|pointer/.test(a.pointerType)||(u&c.options.drag.mouseButtons)!=0))return o.action={name:"drag",axis:p.lockAxis==="start"?p.startAxis:p.lockAxis},!1}},draggable:function(o){return l.default.object(o)?(this.options.drag.enabled=o.enabled!==!1,this.setPerAction("drag",o),this.setOnEvents("drag",o),/^(xy|x|y|start)$/.test(o.lockAxis)&&(this.options.drag.lockAxis=o.lockAxis),/^(xy|x|y)$/.test(o.startAxis)&&(this.options.drag.startAxis=o.startAxis),this):l.default.bool(o)?(this.options.drag.enabled=o,this):this.options.drag},beforeMove:S,move:C,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"}},_=y;v.default=_;var E={};Object.defineProperty(E,"__esModule",{value:!0}),E.default=void 0;var A={init:function(o){var a=o;A.document=a.document,A.DocumentFragment=a.DocumentFragment||L,A.SVGElement=a.SVGElement||L,A.SVGSVGElement=a.SVGSVGElement||L,A.SVGElementInstance=a.SVGElementInstance||L,A.Element=a.Element||L,A.HTMLElement=a.HTMLElement||A.Element,A.Event=a.Event,A.Touch=a.Touch||L,A.PointerEvent=a.PointerEvent||a.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function L(){}var k=A;E.default=k;var D={};Object.defineProperty(D,"__esModule",{value:!0}),D.default=void 0;var N={init:function(o){var a=E.default.Element,c=o.navigator||{};N.supportsTouch="ontouchstart"in o||l.default.func(o.DocumentTouch)&&E.default.document instanceof o.DocumentTouch,N.supportsPointerEvent=c.pointerEnabled!==!1&&!!E.default.PointerEvent,N.isIOS=/iP(hone|od|ad)/.test(c.platform),N.isIOS7=/iP(hone|od|ad)/.test(c.platform)&&/OS 7[^\d]/.test(c.appVersion),N.isIe9=/MSIE 9/.test(c.userAgent),N.isOperaMobile=c.appName==="Opera"&&N.supportsTouch&&/Presto/.test(c.userAgent),N.prefixedMatchesSelector="matches"in a.prototype?"matches":"webkitMatchesSelector"in a.prototype?"webkitMatchesSelector":"mozMatchesSelector"in a.prototype?"mozMatchesSelector":"oMatchesSelector"in a.prototype?"oMatchesSelector":"msMatchesSelector",N.pEventTypes=N.supportsPointerEvent?E.default.PointerEvent===o.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,N.wheelEvent=E.default.document&&"onmousewheel"in E.default.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null},$=N;D.default=$;var T={};function B(o){var a=o.parentNode;if(l.default.docFrag(a)){for(;(a=a.host)&&l.default.docFrag(a););return a}return a}function te(o,a){return n.window!==n.realWindow&&(a=a.replace(/\/deep\//g," ")),o[D.default.prefixedMatchesSelector](a)}Object.defineProperty(T,"__esModule",{value:!0}),T.closest=function(o,a){for(;l.default.element(o);){if(te(o,a))return o;o=B(o)}return null},T.getActualElement=function(o){return o.correspondingUseElement||o},T.getElementClientRect=Y,T.getElementRect=function(o){var a=Y(o);if(!D.default.isIOS7&&a){var c=ye(n.getWindow(o));a.left+=c.x,a.right+=c.x,a.top+=c.y,a.bottom+=c.y}return a},T.getPath=function(o){for(var a=[];o;)a.push(o),o=B(o);return a},T.getScrollXY=ye,T.indexOfDeepestElement=function(o){for(var a,c=[],u=0;u<o.length;u++){var p=o[u],x=o[a];if(p&&u!==a)if(x){var M=ee(p),b=ee(x);if(M!==p.ownerDocument)if(b!==p.ownerDocument)if(M!==b){c=c.length?c:Ce(x);var w=void 0;if(x instanceof E.default.HTMLElement&&p instanceof E.default.SVGElement&&!(p instanceof E.default.SVGSVGElement)){if(p===b)continue;w=p.ownerSVGElement}else w=p;for(var R=Ce(w,x.ownerDocument),z=0;R[z]&&R[z]===c[z];)z++;var U=[R[z-1],R[z],c[z]];if(U[0])for(var J=U[0].lastChild;J;){if(J===U[1]){a=u,c=R;break}if(J===U[2])break;J=J.previousSibling}}else oe=p,V=x,(parseInt(n.getWindow(oe).getComputedStyle(oe).zIndex,10)||0)>=(parseInt(n.getWindow(V).getComputedStyle(V).zIndex,10)||0)&&(a=u);else a=u}else a=u}var oe,V;return a},T.matchesSelector=te,T.matchesUpTo=function(o,a,c){for(;l.default.element(o);){if(te(o,a))return!0;if((o=B(o))===c)return te(o,a)}return!1},T.nodeContains=function(o,a){if(o.contains)return o.contains(a);for(;a;){if(a===o)return!0;a=a.parentNode}return!1},T.parentNode=B,T.trySelector=function(o){return!!l.default.string(o)&&(E.default.document.querySelector(o),!0)};var ee=function(o){return o.parentNode||o.host};function Ce(o,a){for(var c,u=[],p=o;(c=ee(p))&&p!==a&&c!==p.ownerDocument;)u.unshift(p),p=c;return u}function ye(o){return{x:(o=o||n.window).scrollX||o.document.documentElement.scrollLeft,y:o.scrollY||o.document.documentElement.scrollTop}}function Y(o){var a=o instanceof E.default.SVGElement?o.getBoundingClientRect():o.getClientRects()[0];return a&&{left:a.left,right:a.right,top:a.top,bottom:a.bottom,width:a.width||a.right-a.left,height:a.height||a.bottom-a.top}}var j={};Object.defineProperty(j,"__esModule",{value:!0}),j.default=function(o,a){for(var c in a)o[c]=a[c];return o};var K={};function de(o,a){(a==null||a>o.length)&&(a=o.length);for(var c=0,u=Array(a);c<a;c++)u[c]=o[c];return u}function fe(o,a,c){return o==="parent"?(0,T.parentNode)(c):o==="self"?a.getRect(c):(0,T.closest)(c,o)}Object.defineProperty(K,"__esModule",{value:!0}),K.addEdges=function(o,a,c){o.left&&(a.left+=c.x),o.right&&(a.right+=c.x),o.top&&(a.top+=c.y),o.bottom&&(a.bottom+=c.y),a.width=a.right-a.left,a.height=a.bottom-a.top},K.getStringOptionResult=fe,K.rectToXY=function(o){return o&&{x:"x"in o?o.x:o.left,y:"y"in o?o.y:o.top}},K.resolveRectLike=function(o,a,c,u){var p,x=o;return l.default.string(x)?x=fe(x,a,c):l.default.func(x)&&(x=x.apply(void 0,function(M){if(Array.isArray(M))return de(M)}(p=u)||function(M){if(typeof Symbol<"u"&&M[Symbol.iterator]!=null||M["@@iterator"]!=null)return Array.from(M)}(p)||function(M,b){if(M){if(typeof M=="string")return de(M,b);var w=Object.prototype.toString.call(M).slice(8,-1);return w==="Object"&&M.constructor&&(w=M.constructor.name),w==="Map"||w==="Set"?Array.from(M):w==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w)?de(M,b):void 0}}(p)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}())),l.default.element(x)&&(x=(0,T.getElementRect)(x)),x},K.tlbrToXywh=function(o){return!o||"x"in o&&"y"in o||((o=(0,j.default)({},o)).x=o.left||0,o.y=o.top||0,o.width=o.width||(o.right||0)-o.x,o.height=o.height||(o.bottom||0)-o.y),o},K.xywhToTlbr=function(o){return!o||"left"in o&&"top"in o||((o=(0,j.default)({},o)).left=o.x||0,o.top=o.y||0,o.right=o.right||o.left+o.width,o.bottom=o.bottom||o.top+o.height),o};var Q={};Object.defineProperty(Q,"__esModule",{value:!0}),Q.default=function(o,a,c){var u=o.options[c],p=u&&u.origin||o.options.origin,x=(0,K.resolveRectLike)(p,o,a,[o&&a]);return(0,K.rectToXY)(x)||{x:0,y:0}};var se={};function xe(o){return o.trim().split(/ +/)}Object.defineProperty(se,"__esModule",{value:!0}),se.default=function o(a,c,u){if(u=u||{},l.default.string(a)&&a.search(" ")!==-1&&(a=xe(a)),l.default.array(a))return a.reduce(function(w,R){return(0,j.default)(w,o(R,c,u))},u);if(l.default.object(a)&&(c=a,a=""),l.default.func(c))u[a]=u[a]||[],u[a].push(c);else if(l.default.array(c))for(var p=0;p<c.length;p++){var x;x=c[p],o(a,x,u)}else if(l.default.object(c))for(var M in c){var b=xe(M).map(function(w){return"".concat(a).concat(w)});o(b,c[M],u)}return u};var pe={};Object.defineProperty(pe,"__esModule",{value:!0}),pe.default=void 0,pe.default=function(o,a){return Math.sqrt(o*o+a*a)};var ve={};Object.defineProperty(ve,"__esModule",{value:!0}),ve.default=function(o,a){o.__set||(o.__set={});var c=function(p){typeof o[p]!="function"&&p!=="__set"&&Object.defineProperty(o,p,{get:function(){return p in o.__set?o.__set[p]:o.__set[p]=a[p]},set:function(x){o.__set[p]=x},configurable:!0})};for(var u in a)c(u);return o};var ae={};function Ne(o){return o instanceof E.default.Event||o instanceof E.default.Touch}function le(o,a,c){return o=o||"page",(c=c||{}).x=a[o+"X"],c.y=a[o+"Y"],c}function ot(o,a){return a=a||{x:0,y:0},D.default.isOperaMobile&&Ne(o)?(le("screen",o,a),a.x+=window.scrollX,a.y+=window.scrollY):le("page",o,a),a}function Ue(o,a){return a=a||{},D.default.isOperaMobile&&Ne(o)?le("screen",o,a):le("client",o,a),a}function ze(o){var a=[];return l.default.array(o)?(a[0]=o[0],a[1]=o[1]):o.type==="touchend"?o.touches.length===1?(a[0]=o.touches[0],a[1]=o.changedTouches[0]):o.touches.length===0&&(a[0]=o.changedTouches[0],a[1]=o.changedTouches[1]):(a[0]=o.touches[0],a[1]=o.touches[1]),a}function Re(o){for(var a={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},c=0;c<o.length;c++){var u=o[c];for(var p in a)a[p]+=u[p]}for(var x in a)a[x]/=o.length;return a}Object.defineProperty(ae,"__esModule",{value:!0}),ae.coordsToEvent=function(o){return{coords:o,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}},ae.copyCoords=function(o,a){o.page=o.page||{},o.page.x=a.page.x,o.page.y=a.page.y,o.client=o.client||{},o.client.x=a.client.x,o.client.y=a.client.y,o.timeStamp=a.timeStamp},ae.getClientXY=Ue,ae.getEventTargets=function(o){var a=l.default.func(o.composedPath)?o.composedPath():o.path;return[T.getActualElement(a?a[0]:o.target),T.getActualElement(o.currentTarget)]},ae.getPageXY=ot,ae.getPointerId=function(o){return l.default.number(o.pointerId)?o.pointerId:o.identifier},ae.getPointerType=function(o){return l.default.string(o.pointerType)?o.pointerType:l.default.number(o.pointerType)?[void 0,void 0,"touch","pen","mouse"][o.pointerType]:/touch/.test(o.type||"")||o instanceof E.default.Touch?"touch":"mouse"},ae.getTouchPair=ze,ae.getXY=le,ae.isNativePointer=Ne,ae.newCoords=function(){return{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},ae.pointerAverage=Re,Object.defineProperty(ae,"pointerExtend",{enumerable:!0,get:function(){return ve.default}}),ae.setCoordDeltas=function(o,a,c){o.page.x=c.page.x-a.page.x,o.page.y=c.page.y-a.page.y,o.client.x=c.client.x-a.client.x,o.client.y=c.client.y-a.client.y,o.timeStamp=c.timeStamp-a.timeStamp},ae.setCoordVelocity=function(o,a){var c=Math.max(a.timeStamp/1e3,.001);o.page.x=a.page.x/c,o.page.y=a.page.y/c,o.client.x=a.client.x/c,o.client.y=a.client.y/c,o.timeStamp=c},ae.setCoords=function(o,a,c){var u=a.length>1?Re(a):a[0];ot(u,o.page),Ue(u,o.client),o.timeStamp=c},ae.setZeroCoords=function(o){o.page.x=0,o.page.y=0,o.client.x=0,o.client.y=0},ae.touchAngle=function(o,a){var c=a+"X",u=a+"Y",p=ze(o),x=p[1][c]-p[0][c],M=p[1][u]-p[0][u];return 180*Math.atan2(M,x)/Math.PI},ae.touchBBox=function(o){if(!o.length)return null;var a=ze(o),c=Math.min(a[0].pageX,a[1].pageX),u=Math.min(a[0].pageY,a[1].pageY),p=Math.max(a[0].pageX,a[1].pageX),x=Math.max(a[0].pageY,a[1].pageY);return{x:c,y:u,left:c,top:u,right:p,bottom:x,width:p-c,height:x-u}},ae.touchDistance=function(o,a){var c=a+"X",u=a+"Y",p=ze(o),x=p[0][c]-p[1][c],M=p[0][u]-p[1][u];return(0,pe.default)(x,M)};var et={};function Xe(o,a){for(var c=0;c<a.length;c++){var u=a[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(o,u.key,u)}}function ke(o,a,c){return a in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,o}Object.defineProperty(et,"__esModule",{value:!0}),et.BaseEvent=void 0;var At=function(){function o(u){(function(p,x){if(!(p instanceof x))throw new TypeError("Cannot call a class as a function")})(this,o),ke(this,"immediatePropagationStopped",!1),ke(this,"propagationStopped",!1),this._interaction=u}var a,c;return a=o,(c=[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&Xe(a.prototype,c),Object.defineProperty(a,"prototype",{writable:!1}),o}();et.BaseEvent=At,Object.defineProperty(At.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var je={};Object.defineProperty(je,"__esModule",{value:!0}),je.remove=je.merge=je.from=je.findIndex=je.find=je.contains=void 0,je.contains=function(o,a){return o.indexOf(a)!==-1},je.remove=function(o,a){return o.splice(o.indexOf(a),1)};var Lt=function(o,a){for(var c=0;c<a.length;c++){var u=a[c];o.push(u)}return o};je.merge=Lt,je.from=function(o){return Lt([],o)};var Jt=function(o,a){for(var c=0;c<o.length;c++)if(a(o[c],c,o))return c;return-1};je.findIndex=Jt,je.find=function(o,a){return o[Jt(o,a)]};var ut={};function st(o){return st=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},st(o)}function cn(o,a){for(var c=0;c<a.length;c++){var u=a[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(o,u.key,u)}}function Xt(o,a){return Xt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},Xt(o,a)}function F(o,a){if(a&&(st(a)==="object"||typeof a=="function"))return a;if(a!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return P(o)}function P(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function ie(o){return ie=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},ie(o)}function me(o,a,c){return a in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,o}Object.defineProperty(ut,"__esModule",{value:!0}),ut.DropEvent=void 0;var Se=function(o){(function(b,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function");b.prototype=Object.create(w&&w.prototype,{constructor:{value:b,writable:!0,configurable:!0}}),Object.defineProperty(b,"prototype",{writable:!1}),w&&Xt(b,w)})(M,o);var a,c,u,p,x=(u=M,p=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var b,w=ie(u);if(p){var R=ie(this).constructor;b=Reflect.construct(w,arguments,R)}else b=w.apply(this,arguments);return F(this,b)});function M(b,w,R){var z;(function(V,ge){if(!(V instanceof ge))throw new TypeError("Cannot call a class as a function")})(this,M),me(P(z=x.call(this,w._interaction)),"dropzone",void 0),me(P(z),"dragEvent",void 0),me(P(z),"relatedTarget",void 0),me(P(z),"draggable",void 0),me(P(z),"propagationStopped",!1),me(P(z),"immediatePropagationStopped",!1);var U=R==="dragleave"?b.prev:b.cur,J=U.element,oe=U.dropzone;return z.type=R,z.target=J,z.currentTarget=J,z.dropzone=oe,z.dragEvent=w,z.relatedTarget=w.target,z.draggable=w.interactable,z.timeStamp=w.timeStamp,z}return a=M,(c=[{key:"reject",value:function(){var b=this,w=this._interaction.dropState;if(this.type==="dropactivate"||this.dropzone&&w.cur.dropzone===this.dropzone&&w.cur.element===this.target)if(w.prev.dropzone=this.dropzone,w.prev.element=this.target,w.rejected=!0,w.events.enter=null,this.stopImmediatePropagation(),this.type==="dropactivate"){var R=w.activeDrops,z=je.findIndex(R,function(J){var oe=J.dropzone,V=J.element;return oe===b.dropzone&&V===b.target});w.activeDrops.splice(z,1);var U=new M(w,this.dragEvent,"dropdeactivate");U.dropzone=this.dropzone,U.target=this.target,this.dropzone.fire(U)}else this.dropzone.fire(new M(w,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&cn(a.prototype,c),Object.defineProperty(a,"prototype",{writable:!1}),M}(et.BaseEvent);ut.DropEvent=Se;var Ee={};function Be(o,a){for(var c=0;c<o.slice().length;c++){var u=o.slice()[c],p=u.dropzone,x=u.element;a.dropzone=p,a.target=x,p.fire(a),a.propagationStopped=a.immediatePropagationStopped=!1}}function O(o,a){for(var c=function(x,M){for(var b=x.interactables,w=[],R=0;R<b.list.length;R++){var z=b.list[R];if(z.options.drop.enabled){var U=z.options.drop.accept;if(!(l.default.element(U)&&U!==M||l.default.string(U)&&!T.matchesSelector(M,U)||l.default.func(U)&&!U({dropzone:z,draggableElement:M})))for(var J=l.default.string(z.target)?z._context.querySelectorAll(z.target):l.default.array(z.target)?z.target:[z.target],oe=0;oe<J.length;oe++){var V=J[oe];V!==M&&w.push({dropzone:z,element:V,rect:z.getRect(V)})}}}return w}(o,a),u=0;u<c.length;u++){var p=c[u];p.rect=p.dropzone.getRect(p.element)}return c}function he(o,a,c){for(var u=o.dropState,p=o.interactable,x=o.element,M=[],b=0;b<u.activeDrops.length;b++){var w=u.activeDrops[b],R=w.dropzone,z=w.element,U=w.rect;M.push(R.dropCheck(a,c,p,x,z,U)?z:null)}var J=T.indexOfDeepestElement(M);return u.activeDrops[J]||null}function be(o,a,c){var u=o.dropState,p={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return c.type==="dragstart"&&(p.activate=new ut.DropEvent(u,c,"dropactivate"),p.activate.target=null,p.activate.dropzone=null),c.type==="dragend"&&(p.deactivate=new ut.DropEvent(u,c,"dropdeactivate"),p.deactivate.target=null,p.deactivate.dropzone=null),u.rejected||(u.cur.element!==u.prev.element&&(u.prev.dropzone&&(p.leave=new ut.DropEvent(u,c,"dragleave"),c.dragLeave=p.leave.target=u.prev.element,c.prevDropzone=p.leave.dropzone=u.prev.dropzone),u.cur.dropzone&&(p.enter=new ut.DropEvent(u,c,"dragenter"),c.dragEnter=u.cur.element,c.dropzone=u.cur.dropzone)),c.type==="dragend"&&u.cur.dropzone&&(p.drop=new ut.DropEvent(u,c,"drop"),c.dropzone=u.cur.dropzone,c.relatedTarget=u.cur.element),c.type==="dragmove"&&u.cur.dropzone&&(p.move=new ut.DropEvent(u,c,"dropmove"),p.move.dragmove=c,c.dropzone=u.cur.dropzone)),p}function Ae(o,a){var c=o.dropState,u=c.activeDrops,p=c.cur,x=c.prev;a.leave&&x.dropzone.fire(a.leave),a.enter&&p.dropzone.fire(a.enter),a.move&&p.dropzone.fire(a.move),a.drop&&p.dropzone.fire(a.drop),a.deactivate&&Be(u,a.deactivate),c.prev.dropzone=p.dropzone,c.prev.element=p.element}function Te(o,a){var c=o.interaction,u=o.iEvent,p=o.event;if(u.type==="dragmove"||u.type==="dragend"){var x=c.dropState;a.dynamicDrop&&(x.activeDrops=O(a,c.element));var M=u,b=he(c,M,p);x.rejected=x.rejected&&!!b&&b.dropzone===x.cur.dropzone&&b.element===x.cur.element,x.cur.dropzone=b&&b.dropzone,x.cur.element=b&&b.element,x.events=be(c,0,M)}}Object.defineProperty(Ee,"__esModule",{value:!0}),Ee.default=void 0;var Ge={id:"actions/drop",install:function(o){var a=o.actions,c=o.interactStatic,u=o.Interactable,p=o.defaults;o.usePlugin(v.default),u.prototype.dropzone=function(x){return function(M,b){if(l.default.object(b)){if(M.options.drop.enabled=b.enabled!==!1,b.listeners){var w=(0,se.default)(b.listeners),R=Object.keys(w).reduce(function(z,U){return z[/^(enter|leave)/.test(U)?"drag".concat(U):/^(activate|deactivate|move)/.test(U)?"drop".concat(U):U]=w[U],z},{});M.off(M.options.drop.listeners),M.on(R),M.options.drop.listeners=R}return l.default.func(b.ondrop)&&M.on("drop",b.ondrop),l.default.func(b.ondropactivate)&&M.on("dropactivate",b.ondropactivate),l.default.func(b.ondropdeactivate)&&M.on("dropdeactivate",b.ondropdeactivate),l.default.func(b.ondragenter)&&M.on("dragenter",b.ondragenter),l.default.func(b.ondragleave)&&M.on("dragleave",b.ondragleave),l.default.func(b.ondropmove)&&M.on("dropmove",b.ondropmove),/^(pointer|center)$/.test(b.overlap)?M.options.drop.overlap=b.overlap:l.default.number(b.overlap)&&(M.options.drop.overlap=Math.max(Math.min(1,b.overlap),0)),"accept"in b&&(M.options.drop.accept=b.accept),"checker"in b&&(M.options.drop.checker=b.checker),M}return l.default.bool(b)?(M.options.drop.enabled=b,M):M.options.drop}(this,x)},u.prototype.dropCheck=function(x,M,b,w,R,z){return function(U,J,oe,V,ge,Me,_e){var Ie=!1;if(!(_e=_e||U.getRect(Me)))return!!U.options.drop.checker&&U.options.drop.checker(J,oe,Ie,U,Me,V,ge);var Fe=U.options.drop.overlap;if(Fe==="pointer"){var Ye=(0,Q.default)(V,ge,"drag"),ct=ae.getPageXY(J);ct.x+=Ye.x,ct.y+=Ye.y;var vt=ct.x>_e.left&&ct.x<_e.right,tt=ct.y>_e.top&&ct.y<_e.bottom;Ie=vt&&tt}var mt=V.getRect(ge);if(mt&&Fe==="center"){var En=mt.left+mt.width/2,oi=mt.top+mt.height/2;Ie=En>=_e.left&&En<=_e.right&&oi>=_e.top&&oi<=_e.bottom}return mt&&l.default.number(Fe)&&(Ie=Math.max(0,Math.min(_e.right,mt.right)-Math.max(_e.left,mt.left))*Math.max(0,Math.min(_e.bottom,mt.bottom)-Math.max(_e.top,mt.top))/(mt.width*mt.height)>=Fe),U.options.drop.checker&&(Ie=U.options.drop.checker(J,oe,Ie,U,Me,V,ge)),Ie}(this,x,M,b,w,R,z)},c.dynamicDrop=function(x){return l.default.bool(x)?(o.dynamicDrop=x,c):o.dynamicDrop},(0,j.default)(a.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),a.methodDict.drop="dropzone",o.dynamicDrop=!1,p.actions.drop=Ge.defaults},listeners:{"interactions:before-action-start":function(o){var a=o.interaction;a.prepared.name==="drag"&&(a.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(o,a){var c=o.interaction,u=(o.event,o.iEvent);if(c.prepared.name==="drag"){var p=c.dropState;p.activeDrops=null,p.events=null,p.activeDrops=O(a,c.element),p.events=be(c,0,u),p.events.activate&&(Be(p.activeDrops,p.events.activate),a.fire("actions/drop:start",{interaction:c,dragEvent:u}))}},"interactions:action-move":Te,"interactions:after-action-move":function(o,a){var c=o.interaction,u=o.iEvent;c.prepared.name==="drag"&&(Ae(c,c.dropState.events),a.fire("actions/drop:move",{interaction:c,dragEvent:u}),c.dropState.events={})},"interactions:action-end":function(o,a){if(o.interaction.prepared.name==="drag"){var c=o.interaction,u=o.iEvent;Te(o,a),Ae(c,c.dropState.events),a.fire("actions/drop:end",{interaction:c,dragEvent:u})}},"interactions:stop":function(o){var a=o.interaction;if(a.prepared.name==="drag"){var c=a.dropState;c&&(c.activeDrops=null,c.events=null,c.cur.dropzone=null,c.cur.element=null,c.prev.dropzone=null,c.prev.element=null,c.rejected=!1)}}},getActiveDrops:O,getDrop:he,getDropEvents:be,fireDropEvents:Ae,defaults:{enabled:!1,accept:null,overlap:"pointer"}},Ke=Ge;Ee.default=Ke;var ft={};function G(o){var a=o.interaction,c=o.iEvent,u=o.phase;if(a.prepared.name==="gesture"){var p=a.pointers.map(function(R){return R.pointer}),x=u==="start",M=u==="end",b=a.interactable.options.deltaSource;if(c.touches=[p[0],p[1]],x)c.distance=ae.touchDistance(p,b),c.box=ae.touchBBox(p),c.scale=1,c.ds=0,c.angle=ae.touchAngle(p,b),c.da=0,a.gesture.startDistance=c.distance,a.gesture.startAngle=c.angle;else if(M){var w=a.prevEvent;c.distance=w.distance,c.box=w.box,c.scale=w.scale,c.ds=0,c.angle=w.angle,c.da=0}else c.distance=ae.touchDistance(p,b),c.box=ae.touchBBox(p),c.scale=c.distance/a.gesture.startDistance,c.angle=ae.touchAngle(p,b),c.ds=c.scale-a.gesture.scale,c.da=c.angle-a.gesture.angle;a.gesture.distance=c.distance,a.gesture.angle=c.angle,l.default.number(c.scale)&&c.scale!==1/0&&!isNaN(c.scale)&&(a.gesture.scale=c.scale)}}Object.defineProperty(ft,"__esModule",{value:!0}),ft.default=void 0;var we={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(o){var a=o.actions,c=o.Interactable,u=o.defaults;c.prototype.gesturable=function(p){return l.default.object(p)?(this.options.gesture.enabled=p.enabled!==!1,this.setPerAction("gesture",p),this.setOnEvents("gesture",p),this):l.default.bool(p)?(this.options.gesture.enabled=p,this):this.options.gesture},a.map.gesture=we,a.methodDict.gesture="gesturable",u.actions.gesture=we.defaults},listeners:{"interactions:action-start":G,"interactions:action-move":G,"interactions:action-end":G,"interactions:new":function(o){o.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(o){if(!(o.interaction.pointers.length<2)){var a=o.interactable.options.gesture;if(a&&a.enabled)return o.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""}},re=we;ft.default=re;var De={};function Le(o,a,c,u,p,x,M){if(!a)return!1;if(a===!0){var b=l.default.number(x.width)?x.width:x.right-x.left,w=l.default.number(x.height)?x.height:x.bottom-x.top;if(M=Math.min(M,Math.abs((o==="left"||o==="right"?b:w)/2)),b<0&&(o==="left"?o="right":o==="right"&&(o="left")),w<0&&(o==="top"?o="bottom":o==="bottom"&&(o="top")),o==="left"){var R=b>=0?x.left:x.right;return c.x<R+M}if(o==="top"){var z=w>=0?x.top:x.bottom;return c.y<z+M}if(o==="right")return c.x>(b>=0?x.right:x.left)-M;if(o==="bottom")return c.y>(w>=0?x.bottom:x.top)-M}return!!l.default.element(u)&&(l.default.element(a)?a===u:T.matchesUpTo(u,a,p))}function nt(o){var a=o.iEvent,c=o.interaction;if(c.prepared.name==="resize"&&c.resizeAxes){var u=a;c.interactable.options.resize.square?(c.resizeAxes==="y"?u.delta.x=u.delta.y:u.delta.y=u.delta.x,u.axes="xy"):(u.axes=c.resizeAxes,c.resizeAxes==="x"?u.delta.y=0:c.resizeAxes==="y"&&(u.delta.x=0))}}Object.defineProperty(De,"__esModule",{value:!0}),De.default=void 0;var dt={id:"actions/resize",before:["actions/drag"],install:function(o){var a=o.actions,c=o.browser,u=o.Interactable,p=o.defaults;dt.cursors=function(x){return x.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}}(c),dt.defaultMargin=c.supportsTouch||c.supportsPointerEvent?20:10,u.prototype.resizable=function(x){return function(M,b,w){return l.default.object(b)?(M.options.resize.enabled=b.enabled!==!1,M.setPerAction("resize",b),M.setOnEvents("resize",b),l.default.string(b.axis)&&/^x$|^y$|^xy$/.test(b.axis)?M.options.resize.axis=b.axis:b.axis===null&&(M.options.resize.axis=w.defaults.actions.resize.axis),l.default.bool(b.preserveAspectRatio)?M.options.resize.preserveAspectRatio=b.preserveAspectRatio:l.default.bool(b.square)&&(M.options.resize.square=b.square),M):l.default.bool(b)?(M.options.resize.enabled=b,M):M.options.resize}(this,x,o)},a.map.resize=dt,a.methodDict.resize="resizable",p.actions.resize=dt.defaults},listeners:{"interactions:new":function(o){o.interaction.resizeAxes="xy"},"interactions:action-start":function(o){(function(a){var c=a.iEvent,u=a.interaction;if(u.prepared.name==="resize"&&u.prepared.edges){var p=c,x=u.rect;u._rects={start:(0,j.default)({},x),corrected:(0,j.default)({},x),previous:(0,j.default)({},x),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},p.edges=u.prepared.edges,p.rect=u._rects.corrected,p.deltaRect=u._rects.delta}})(o),nt(o)},"interactions:action-move":function(o){(function(a){var c=a.iEvent,u=a.interaction;if(u.prepared.name==="resize"&&u.prepared.edges){var p=c,x=u.interactable.options.resize.invert,M=x==="reposition"||x==="negate",b=u.rect,w=u._rects,R=w.start,z=w.corrected,U=w.delta,J=w.previous;if((0,j.default)(J,z),M){if((0,j.default)(z,b),x==="reposition"){if(z.top>z.bottom){var oe=z.top;z.top=z.bottom,z.bottom=oe}if(z.left>z.right){var V=z.left;z.left=z.right,z.right=V}}}else z.top=Math.min(b.top,R.bottom),z.bottom=Math.max(b.bottom,R.top),z.left=Math.min(b.left,R.right),z.right=Math.max(b.right,R.left);for(var ge in z.width=z.right-z.left,z.height=z.bottom-z.top,z)U[ge]=z[ge]-J[ge];p.edges=u.prepared.edges,p.rect=z,p.deltaRect=U}})(o),nt(o)},"interactions:action-end":function(o){var a=o.iEvent,c=o.interaction;if(c.prepared.name==="resize"&&c.prepared.edges){var u=a;u.edges=c.prepared.edges,u.rect=c._rects.corrected,u.deltaRect=c._rects.delta}},"auto-start:check":function(o){var a=o.interaction,c=o.interactable,u=o.element,p=o.rect,x=o.buttons;if(p){var M=(0,j.default)({},a.coords.cur.page),b=c.options.resize;if(b&&b.enabled&&(!a.pointerIsDown||!/mouse|pointer/.test(a.pointerType)||(x&b.mouseButtons)!=0)){if(l.default.object(b.edges)){var w={left:!1,right:!1,top:!1,bottom:!1};for(var R in w)w[R]=Le(R,b.edges[R],M,a._latestPointer.eventTarget,u,p,b.margin||dt.defaultMargin);w.left=w.left&&!w.right,w.top=w.top&&!w.bottom,(w.left||w.right||w.top||w.bottom)&&(o.action={name:"resize",edges:w})}else{var z=b.axis!=="y"&&M.x>p.right-dt.defaultMargin,U=b.axis!=="x"&&M.y>p.bottom-dt.defaultMargin;(z||U)&&(o.action={name:"resize",axes:(z?"x":"")+(U?"y":"")})}return!o.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(o){var a=o.edges,c=o.axis,u=o.name,p=dt.cursors,x=null;if(c)x=p[u+c];else if(a){for(var M="",b=["top","bottom","left","right"],w=0;w<b.length;w++){var R=b[w];a[R]&&(M+=R)}x=p[M]}return x},defaultMargin:null},Pt=dt;De.default=Pt;var un={};Object.defineProperty(un,"__esModule",{value:!0}),un.default=void 0;var Tt={id:"actions",install:function(o){o.usePlugin(ft.default),o.usePlugin(De.default),o.usePlugin(v.default),o.usePlugin(Ee.default)}};un.default=Tt;var kt={};Object.defineProperty(kt,"__esModule",{value:!0}),kt.default=void 0;var Rt,ei,_r=0,Jo={request:function(o){return Rt(o)},cancel:function(o){return ei(o)},init:function(o){if(Rt=o.requestAnimationFrame,ei=o.cancelAnimationFrame,!Rt)for(var a=["ms","moz","webkit","o"],c=0;c<a.length;c++){var u=a[c];Rt=o["".concat(u,"RequestAnimationFrame")],ei=o["".concat(u,"CancelAnimationFrame")]||o["".concat(u,"CancelRequestAnimationFrame")]}Rt=Rt&&Rt.bind(o),ei=ei&&ei.bind(o),Rt||(Rt=function(p){var x=Date.now(),M=Math.max(0,16-(x-_r)),b=o.setTimeout(function(){p(x+M)},M);return _r=x+M,b},ei=function(p){return clearTimeout(p)})}};kt.default=Jo;var On={};Object.defineProperty(On,"__esModule",{value:!0}),On.default=void 0,On.getContainer=yr,On.getScroll=I,On.getScrollSize=function(o){return l.default.window(o)&&(o=window.document.body),{x:o.scrollWidth,y:o.scrollHeight}},On.getScrollSizeDelta=function(o,a){var c=o.interaction,u=o.element,p=c&&c.interactable.options[c.prepared.name].autoScroll;if(!p||!p.enabled)return a(),{x:0,y:0};var x=yr(p.container,c.interactable,u),M=I(x);a();var b=I(x);return{x:b.x-M.x,y:b.y-M.y}};var We={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(o){We.isScrolling=!0,kt.default.cancel(We.i),o.autoScroll=We,We.interaction=o,We.prevTime=We.now(),We.i=kt.default.request(We.scroll)},stop:function(){We.isScrolling=!1,We.interaction&&(We.interaction.autoScroll=null),kt.default.cancel(We.i)},scroll:function(){var o=We.interaction,a=o.interactable,c=o.element,u=o.prepared.name,p=a.options[u].autoScroll,x=yr(p.container,a,c),M=We.now(),b=(M-We.prevTime)/1e3,w=p.speed*b;if(w>=1){var R={x:We.x*w,y:We.y*w};if(R.x||R.y){var z=I(x);l.default.window(x)?x.scrollBy(R.x,R.y):x&&(x.scrollLeft+=R.x,x.scrollTop+=R.y);var U=I(x),J={x:U.x-z.x,y:U.y-z.y};(J.x||J.y)&&a.fire({type:"autoscroll",target:c,interactable:a,delta:J,interaction:o,container:x})}We.prevTime=M}We.isScrolling&&(kt.default.cancel(We.i),We.i=kt.default.request(We.scroll))},check:function(o,a){var c;return(c=o.options[a].autoScroll)==null?void 0:c.enabled},onInteractionMove:function(o){var a=o.interaction,c=o.pointer;if(a.interacting()&&We.check(a.interactable,a.prepared.name))if(a.simulation)We.x=We.y=0;else{var u,p,x,M,b=a.interactable,w=a.element,R=a.prepared.name,z=b.options[R].autoScroll,U=yr(z.container,b,w);if(l.default.window(U))M=c.clientX<We.margin,u=c.clientY<We.margin,p=c.clientX>U.innerWidth-We.margin,x=c.clientY>U.innerHeight-We.margin;else{var J=T.getElementClientRect(U);M=c.clientX<J.left+We.margin,u=c.clientY<J.top+We.margin,p=c.clientX>J.right-We.margin,x=c.clientY>J.bottom-We.margin}We.x=p?1:M?-1:0,We.y=x?1:u?-1:0,We.isScrolling||(We.margin=z.margin,We.speed=z.speed,We.start(a))}}};function yr(o,a,c){return(l.default.string(o)?(0,K.getStringOptionResult)(o,a,c):o)||(0,n.getWindow)(c)}function I(o){return l.default.window(o)&&(o=window.document.body),{x:o.scrollLeft,y:o.scrollTop}}var X={id:"auto-scroll",install:function(o){var a=o.defaults,c=o.actions;o.autoScroll=We,We.now=function(){return o.now()},c.phaselessTypes.autoscroll=!0,a.perAction.autoScroll=We.defaults},listeners:{"interactions:new":function(o){o.interaction.autoScroll=null},"interactions:destroy":function(o){o.interaction.autoScroll=null,We.stop(),We.interaction&&(We.interaction=null)},"interactions:stop":We.stop,"interactions:action-move":function(o){return We.onInteractionMove(o)}}},ne=X;On.default=ne;var q={};Object.defineProperty(q,"__esModule",{value:!0}),q.copyAction=function(o,a){return o.name=a.name,o.axis=a.axis,o.edges=a.edges,o},q.sign=void 0,q.warnOnce=function(o,a){var c=!1;return function(){return c||(n.window.console.warn(a),c=!0),o.apply(this,arguments)}},q.sign=function(o){return o>=0?1:-1};var ce={};function Ve(o){return l.default.bool(o)?(this.options.styleCursor=o,this):o===null?(delete this.options.styleCursor,this):this.options.styleCursor}function qe(o){return l.default.func(o)?(this.options.actionChecker=o,this):o===null?(delete this.options.actionChecker,this):this.options.actionChecker}Object.defineProperty(ce,"__esModule",{value:!0}),ce.default=void 0;var $e={id:"auto-start/interactableMethods",install:function(o){var a=o.Interactable;a.prototype.getAction=function(c,u,p,x){var M=function(b,w,R,z,U){var J=b.getRect(z),oe={action:null,interactable:b,interaction:R,element:z,rect:J,buttons:w.buttons||{0:1,1:4,3:8,4:16}[w.button]};return U.fire("auto-start:check",oe),oe.action}(this,u,p,x,o);return this.options.actionChecker?this.options.actionChecker(c,u,M,this,x,p):M},a.prototype.ignoreFrom=(0,q.warnOnce)(function(c){return this._backCompatOption("ignoreFrom",c)},"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),a.prototype.allowFrom=(0,q.warnOnce)(function(c){return this._backCompatOption("allowFrom",c)},"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),a.prototype.actionChecker=qe,a.prototype.styleCursor=Ve}};ce.default=$e;var He={};function at(o,a,c,u,p){return a.testIgnoreAllow(a.options[o.name],c,u)&&a.options[o.name].enabled&&wn(a,c,o,p)?o:null}function it(o,a,c,u,p,x,M){for(var b=0,w=u.length;b<w;b++){var R=u[b],z=p[b],U=R.getAction(a,c,o,z);if(U){var J=at(U,R,z,x,M);if(J)return{action:J,interactable:R,element:z}}}return{action:null,interactable:null,element:null}}function rt(o,a,c,u,p){var x=[],M=[],b=u;function w(z){x.push(z),M.push(b)}for(;l.default.element(b);){x=[],M=[],p.interactables.forEachMatch(b,w);var R=it(o,a,c,x,M,u,p);if(R.action&&!R.interactable.options[R.action.name].manualStart)return R;b=T.parentNode(b)}return{action:null,interactable:null,element:null}}function yt(o,a,c){var u=a.action,p=a.interactable,x=a.element;u=u||{name:null},o.interactable=p,o.element=x,(0,q.copyAction)(o.prepared,u),o.rect=p&&u.name?p.getRect(x):null,vn(o,c),c.fire("autoStart:prepared",{interaction:o})}function wn(o,a,c,u){var p=o.options,x=p[c.name].max,M=p[c.name].maxPerElement,b=u.autoStart.maxInteractions,w=0,R=0,z=0;if(!(x&&M&&b))return!1;for(var U=0;U<u.interactions.list.length;U++){var J=u.interactions.list[U],oe=J.prepared.name;if(J.interacting()&&(++w>=b||J.interactable===o&&((R+=oe===c.name?1:0)>=x||J.element===a&&(z++,oe===c.name&&z>=M))))return!1}return b>0}function ti(o,a){return l.default.number(o)?(a.autoStart.maxInteractions=o,this):a.autoStart.maxInteractions}function qn(o,a,c){var u=c.autoStart.cursorElement;u&&u!==o&&(u.style.cursor=""),o.ownerDocument.documentElement.style.cursor=a,o.style.cursor=a,c.autoStart.cursorElement=a?o:null}function vn(o,a){var c=o.interactable,u=o.element,p=o.prepared;if(o.pointerType==="mouse"&&c&&c.options.styleCursor){var x="";if(p.name){var M=c.options[p.name].cursorChecker;x=l.default.func(M)?M(p,c,u,o._interacting):a.actions.map[p.name].getCursor(p)}qn(o.element,x||"",a)}else a.autoStart.cursorElement&&qn(a.autoStart.cursorElement,"",a)}Object.defineProperty(He,"__esModule",{value:!0}),He.default=void 0;var lt={id:"auto-start/base",before:["actions"],install:function(o){var a=o.interactStatic,c=o.defaults;o.usePlugin(ce.default),c.base.actionChecker=null,c.base.styleCursor=!0,(0,j.default)(c.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),a.maxInteractions=function(u){return ti(u,o)},o.autoStart={maxInteractions:1/0,withinInteractionLimit:wn,cursorElement:null}},listeners:{"interactions:down":function(o,a){var c=o.interaction,u=o.pointer,p=o.event,x=o.eventTarget;c.interacting()||yt(c,rt(c,u,p,x,a),a)},"interactions:move":function(o,a){(function(c,u){var p=c.interaction,x=c.pointer,M=c.event,b=c.eventTarget;p.pointerType!=="mouse"||p.pointerIsDown||p.interacting()||yt(p,rt(p,x,M,b,u),u)})(o,a),function(c,u){var p=c.interaction;if(p.pointerIsDown&&!p.interacting()&&p.pointerWasMoved&&p.prepared.name){u.fire("autoStart:before-start",c);var x=p.interactable,M=p.prepared.name;M&&x&&(x.options[M].manualStart||!wn(x,p.element,p.prepared,u)?p.stop():(p.start(p.prepared,x,p.element),vn(p,u)))}}(o,a)},"interactions:stop":function(o,a){var c=o.interaction,u=c.interactable;u&&u.options.styleCursor&&qn(c.element,"",a)}},maxInteractions:ti,withinInteractionLimit:wn,validateAction:at},_i=lt;He.default=_i;var xt={};Object.defineProperty(xt,"__esModule",{value:!0}),xt.default=void 0;var fn={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(o,a){var c=o.interaction,u=o.eventTarget,p=o.dx,x=o.dy;if(c.prepared.name==="drag"){var M=Math.abs(p),b=Math.abs(x),w=c.interactable.options.drag,R=w.startAxis,z=M>b?"x":M<b?"y":"xy";if(c.prepared.axis=w.lockAxis==="start"?z[0]:w.lockAxis,z!=="xy"&&R!=="xy"&&R!==z){c.prepared.name=null;for(var U=u,J=function(V){if(V!==c.interactable){var ge=c.interactable.options.drag;if(!ge.manualStart&&V.testIgnoreAllow(ge,U,u)){var Me=V.getAction(c.downPointer,c.downEvent,c,U);if(Me&&Me.name==="drag"&&function(_e,Ie){if(!Ie)return!1;var Fe=Ie.options.drag.startAxis;return _e==="xy"||Fe==="xy"||Fe===_e}(z,V)&&He.default.validateAction(Me,V,U,u,a))return V}}};l.default.element(U);){var oe=a.interactables.forEachMatch(U,J);if(oe){c.prepared.name="drag",c.interactable=oe,c.element=U;break}U=(0,T.parentNode)(U)}}}}}};xt.default=fn;var _n={};function ni(o){var a=o.prepared&&o.prepared.name;if(!a)return null;var c=o.interactable.options;return c[a].hold||c[a].delay}Object.defineProperty(_n,"__esModule",{value:!0}),_n.default=void 0;var lo={id:"auto-start/hold",install:function(o){var a=o.defaults;o.usePlugin(He.default),a.perAction.hold=0,a.perAction.delay=0},listeners:{"interactions:new":function(o){o.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(o){var a=o.interaction,c=ni(a);c>0&&(a.autoStartHoldTimer=setTimeout(function(){a.start(a.prepared,a.interactable,a.element)},c))},"interactions:move":function(o){var a=o.interaction,c=o.duplicate;a.autoStartHoldTimer&&a.pointerWasMoved&&!c&&(clearTimeout(a.autoStartHoldTimer),a.autoStartHoldTimer=null)},"autoStart:before-start":function(o){var a=o.interaction;ni(a)>0&&(a.prepared.name=null)}},getHoldDuration:ni},Yt=lo;_n.default=Yt;var kn={};Object.defineProperty(kn,"__esModule",{value:!0}),kn.default=void 0;var co={id:"auto-start",install:function(o){o.usePlugin(He.default),o.usePlugin(_n.default),o.usePlugin(xt.default)}};kn.default=co;var Ft={};function uo(o){return/^(always|never|auto)$/.test(o)?(this.options.preventDefault=o,this):l.default.bool(o)?(this.options.preventDefault=o?"always":"never",this):this.options.preventDefault}function ca(o){var a=o.interaction,c=o.event;a.interactable&&a.interactable.checkAndPreventDefault(c)}function fo(o){var a=o.Interactable;a.prototype.preventDefault=uo,a.prototype.checkAndPreventDefault=function(c){return function(u,p,x){var M=u.options.preventDefault;if(M!=="never")if(M!=="always"){if(p.events.supportsPassive&&/^touch(start|move)$/.test(x.type)){var b=(0,n.getWindow)(x.target).document,w=p.getDocOptions(b);if(!w||!w.events||w.events.passive!==!1)return}/^(mouse|pointer|touch)*(down|start)/i.test(x.type)||l.default.element(x.target)&&(0,T.matchesSelector)(x.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||x.preventDefault()}else x.preventDefault()}(this,o,c)},o.interactions.docEvents.push({type:"dragstart",listener:function(c){for(var u=0;u<o.interactions.list.length;u++){var p=o.interactions.list[u];if(p.element&&(p.element===c.target||(0,T.nodeContains)(p.element,c.target)))return void p.interactable.checkAndPreventDefault(c)}}})}Object.defineProperty(Ft,"__esModule",{value:!0}),Ft.default=void 0,Ft.install=fo;var Cd={id:"core/interactablePreventDefault",install:fo,listeners:["down","move","up","cancel"].reduce(function(o,a){return o["interactions:".concat(a)]=ca,o},{})};Ft.default=Cd;var ua={};Object.defineProperty(ua,"__esModule",{value:!0}),ua.default=void 0,ua.default={};var ho,Qo={};Object.defineProperty(Qo,"__esModule",{value:!0}),Qo.default=void 0,function(o){o.touchAction="touchAction",o.boxSizing="boxSizing",o.noListeners="noListeners"}(ho||(ho={})),ho.touchAction,ho.boxSizing,ho.noListeners;var Ad={id:"dev-tools",install:function(){}};Qo.default=Ad;var Gi={};Object.defineProperty(Gi,"__esModule",{value:!0}),Gi.default=function o(a){var c={};for(var u in a){var p=a[u];l.default.plainObject(p)?c[u]=o(p):l.default.array(p)?c[u]=je.from(p):c[u]=p}return c};var Wi={};function ec(o,a){return function(c){if(Array.isArray(c))return c}(o)||function(c,u){var p=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(p!=null){var x,M,b=[],w=!0,R=!1;try{for(p=p.call(c);!(w=(x=p.next()).done)&&(b.push(x.value),!u||b.length!==u);w=!0);}catch(z){R=!0,M=z}finally{try{w||p.return==null||p.return()}finally{if(R)throw M}}return b}}(o,a)||function(c,u){if(c){if(typeof c=="string")return tc(c,u);var p=Object.prototype.toString.call(c).slice(8,-1);return p==="Object"&&c.constructor&&(p=c.constructor.name),p==="Map"||p==="Set"?Array.from(c):p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)?tc(c,u):void 0}}(o,a)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function tc(o,a){(a==null||a>o.length)&&(a=o.length);for(var c=0,u=Array(a);c<a;c++)u[c]=o[c];return u}function Pd(o,a){for(var c=0;c<a.length;c++){var u=a[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(o,u.key,u)}}function Vi(o,a,c){return a in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,o}Object.defineProperty(Wi,"__esModule",{value:!0}),Wi.default=void 0,Wi.getRectOffset=nc;var Dd=function(){function o(u){(function(p,x){if(!(p instanceof x))throw new TypeError("Cannot call a class as a function")})(this,o),Vi(this,"states",[]),Vi(this,"startOffset",{left:0,right:0,top:0,bottom:0}),Vi(this,"startDelta",void 0),Vi(this,"result",void 0),Vi(this,"endResult",void 0),Vi(this,"edges",void 0),Vi(this,"interaction",void 0),this.interaction=u,this.result=es()}var a,c;return a=o,(c=[{key:"start",value:function(u,p){var x=u.phase,M=this.interaction,b=function(R){var z=R.interactable.options[R.prepared.name],U=z.modifiers;return U&&U.length?U:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map(function(J){var oe=z[J];return oe&&oe.enabled&&{options:oe,methods:oe._methods}}).filter(function(J){return!!J})}(M);this.prepareStates(b),this.edges=(0,j.default)({},M.edges),this.startOffset=nc(M.rect,p),this.startDelta={x:0,y:0};var w=this.fillArg({phase:x,pageCoords:p,preEnd:!1});return this.result=es(),this.startAll(w),this.result=this.setAll(w)}},{key:"fillArg",value:function(u){var p=this.interaction;return u.interaction=p,u.interactable=p.interactable,u.element=p.element,u.rect=u.rect||p.rect,u.edges=this.edges,u.startOffset=this.startOffset,u}},{key:"startAll",value:function(u){for(var p=0;p<this.states.length;p++){var x=this.states[p];x.methods.start&&(u.state=x,x.methods.start(u))}}},{key:"setAll",value:function(u){var p=u.phase,x=u.preEnd,M=u.skipModifiers,b=u.rect;u.coords=(0,j.default)({},u.pageCoords),u.rect=(0,j.default)({},b);for(var w=M?this.states.slice(M):this.states,R=es(u.coords,u.rect),z=0;z<w.length;z++){var U,J=w[z],oe=J.options,V=(0,j.default)({},u.coords),ge=null;(U=J.methods)!=null&&U.set&&this.shouldDo(oe,x,p)&&(u.state=J,ge=J.methods.set(u),K.addEdges(this.interaction.edges,u.rect,{x:u.coords.x-V.x,y:u.coords.y-V.y})),R.eventProps.push(ge)}R.delta.x=u.coords.x-u.pageCoords.x,R.delta.y=u.coords.y-u.pageCoords.y,R.rectDelta.left=u.rect.left-b.left,R.rectDelta.right=u.rect.right-b.right,R.rectDelta.top=u.rect.top-b.top,R.rectDelta.bottom=u.rect.bottom-b.bottom;var Me=this.result.coords,_e=this.result.rect;if(Me&&_e){var Ie=R.rect.left!==_e.left||R.rect.right!==_e.right||R.rect.top!==_e.top||R.rect.bottom!==_e.bottom;R.changed=Ie||Me.x!==R.coords.x||Me.y!==R.coords.y}return R}},{key:"applyToInteraction",value:function(u){var p=this.interaction,x=u.phase,M=p.coords.cur,b=p.coords.start,w=this.result,R=this.startDelta,z=w.delta;x==="start"&&(0,j.default)(this.startDelta,w.delta);for(var U=0;U<[[b,R],[M,z]].length;U++){var J=ec([[b,R],[M,z]][U],2),oe=J[0],V=J[1];oe.page.x+=V.x,oe.page.y+=V.y,oe.client.x+=V.x,oe.client.y+=V.y}var ge=this.result.rectDelta,Me=u.rect||p.rect;Me.left+=ge.left,Me.right+=ge.right,Me.top+=ge.top,Me.bottom+=ge.bottom,Me.width=Me.right-Me.left,Me.height=Me.bottom-Me.top}},{key:"setAndApply",value:function(u){var p=this.interaction,x=u.phase,M=u.preEnd,b=u.skipModifiers,w=this.setAll(this.fillArg({preEnd:M,phase:x,pageCoords:u.modifiedCoords||p.coords.cur.page}));if(this.result=w,!w.changed&&(!b||b<this.states.length)&&p.interacting())return!1;if(u.modifiedCoords){var R=p.coords.cur.page,z={x:u.modifiedCoords.x-R.x,y:u.modifiedCoords.y-R.y};w.coords.x+=z.x,w.coords.y+=z.y,w.delta.x+=z.x,w.delta.y+=z.y}this.applyToInteraction(u)}},{key:"beforeEnd",value:function(u){var p=u.interaction,x=u.event,M=this.states;if(M&&M.length){for(var b=!1,w=0;w<M.length;w++){var R=M[w];u.state=R;var z=R.options,U=R.methods,J=U.beforeEnd&&U.beforeEnd(u);if(J)return this.endResult=J,!1;b=b||!b&&this.shouldDo(z,!0,u.phase,!0)}b&&p.move({event:x,preEnd:!0})}}},{key:"stop",value:function(u){var p=u.interaction;if(this.states&&this.states.length){var x=(0,j.default)({states:this.states,interactable:p.interactable,element:p.element,rect:null},u);this.fillArg(x);for(var M=0;M<this.states.length;M++){var b=this.states[M];x.state=b,b.methods.stop&&b.methods.stop(x)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(u){this.states=[];for(var p=0;p<u.length;p++){var x=u[p],M=x.options,b=x.methods,w=x.name;this.states.push({options:M,methods:b,index:p,name:w})}return this.states}},{key:"restoreInteractionCoords",value:function(u){var p=u.interaction,x=p.coords,M=p.rect,b=p.modification;if(b.result){for(var w=b.startDelta,R=b.result,z=R.delta,U=R.rectDelta,J=[[x.start,w],[x.cur,z]],oe=0;oe<J.length;oe++){var V=ec(J[oe],2),ge=V[0],Me=V[1];ge.page.x-=Me.x,ge.page.y-=Me.y,ge.client.x-=Me.x,ge.client.y-=Me.y}M.left-=U.left,M.right-=U.right,M.top-=U.top,M.bottom-=U.bottom}}},{key:"shouldDo",value:function(u,p,x,M){return!(!u||u.enabled===!1||M&&!u.endOnly||u.endOnly&&!p||x==="start"&&!u.setStart)}},{key:"copyFrom",value:function(u){this.startOffset=u.startOffset,this.startDelta=u.startDelta,this.edges=u.edges,this.states=u.states.map(function(p){return(0,Gi.default)(p)}),this.result=es((0,j.default)({},u.result.coords),(0,j.default)({},u.result.rect))}},{key:"destroy",value:function(){for(var u in this)this[u]=null}}])&&Pd(a.prototype,c),Object.defineProperty(a,"prototype",{writable:!1}),o}();function es(o,a){return{rect:a,coords:o,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function nc(o,a){return o?{left:a.x-o.left,top:a.y-o.top,right:o.right-a.x,bottom:o.bottom-a.y}:{left:0,top:0,right:0,bottom:0}}Wi.default=Dd;var $t={};function ts(o){var a=o.iEvent,c=o.interaction.modification.result;c&&(a.modifiers=c.eventProps)}Object.defineProperty($t,"__esModule",{value:!0}),$t.addEventModifiers=ts,$t.default=void 0,$t.makeModifier=function(o,a){var c=o.defaults,u={start:o.start,set:o.set,beforeEnd:o.beforeEnd,stop:o.stop},p=function(x){var M=x||{};for(var b in M.enabled=M.enabled!==!1,c)b in M||(M[b]=c[b]);var w={options:M,methods:u,name:a,enable:function(){return M.enabled=!0,w},disable:function(){return M.enabled=!1,w}};return w};return a&&typeof a=="string"&&(p._defaults=c,p._methods=u),p};var Ld={id:"modifiers/base",before:["actions"],install:function(o){o.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(o){var a=o.interaction;a.modification=new Wi.default(a)},"interactions:before-action-start":function(o){var a=o.interaction.modification;a.start(o,o.interaction.coords.start.page),o.interaction.edges=a.edges,a.applyToInteraction(o)},"interactions:before-action-move":function(o){return o.interaction.modification.setAndApply(o)},"interactions:before-action-end":function(o){return o.interaction.modification.beforeEnd(o)},"interactions:action-start":ts,"interactions:action-move":ts,"interactions:action-end":ts,"interactions:after-action-start":function(o){return o.interaction.modification.restoreInteractionCoords(o)},"interactions:after-action-move":function(o){return o.interaction.modification.restoreInteractionCoords(o)},"interactions:stop":function(o){return o.interaction.modification.stop(o)}}},Rd=Ld;$t.default=Rd;var po={};Object.defineProperty(po,"__esModule",{value:!0}),po.defaults=void 0,po.defaults={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}};var mo={};function fa(o){return fa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},fa(o)}function Id(o,a){for(var c=0;c<a.length;c++){var u=a[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(o,u.key,u)}}function da(o,a){return da=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},da(o,a)}function Od(o,a){if(a&&(fa(a)==="object"||typeof a=="function"))return a;if(a!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return pt(o)}function pt(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function ns(o){return ns=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},ns(o)}function bt(o,a,c){return a in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,o}Object.defineProperty(mo,"__esModule",{value:!0}),mo.InteractEvent=void 0;var ic=function(o){(function(b,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function");b.prototype=Object.create(w&&w.prototype,{constructor:{value:b,writable:!0,configurable:!0}}),Object.defineProperty(b,"prototype",{writable:!1}),w&&da(b,w)})(M,o);var a,c,u,p,x=(u=M,p=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var b,w=ns(u);if(p){var R=ns(this).constructor;b=Reflect.construct(w,arguments,R)}else b=w.apply(this,arguments);return Od(this,b)});function M(b,w,R,z,U,J,oe){var V;(function(vt,tt){if(!(vt instanceof tt))throw new TypeError("Cannot call a class as a function")})(this,M),bt(pt(V=x.call(this,b)),"relatedTarget",null),bt(pt(V),"screenX",void 0),bt(pt(V),"screenY",void 0),bt(pt(V),"button",void 0),bt(pt(V),"buttons",void 0),bt(pt(V),"ctrlKey",void 0),bt(pt(V),"shiftKey",void 0),bt(pt(V),"altKey",void 0),bt(pt(V),"metaKey",void 0),bt(pt(V),"page",void 0),bt(pt(V),"client",void 0),bt(pt(V),"delta",void 0),bt(pt(V),"rect",void 0),bt(pt(V),"x0",void 0),bt(pt(V),"y0",void 0),bt(pt(V),"t0",void 0),bt(pt(V),"dt",void 0),bt(pt(V),"duration",void 0),bt(pt(V),"clientX0",void 0),bt(pt(V),"clientY0",void 0),bt(pt(V),"velocity",void 0),bt(pt(V),"speed",void 0),bt(pt(V),"swipe",void 0),bt(pt(V),"axes",void 0),bt(pt(V),"preEnd",void 0),U=U||b.element;var ge=b.interactable,Me=(ge&&ge.options||po.defaults).deltaSource,_e=(0,Q.default)(ge,U,R),Ie=z==="start",Fe=z==="end",Ye=Ie?pt(V):b.prevEvent,ct=Ie?b.coords.start:Fe?{page:Ye.page,client:Ye.client,timeStamp:b.coords.cur.timeStamp}:b.coords.cur;return V.page=(0,j.default)({},ct.page),V.client=(0,j.default)({},ct.client),V.rect=(0,j.default)({},b.rect),V.timeStamp=ct.timeStamp,Fe||(V.page.x-=_e.x,V.page.y-=_e.y,V.client.x-=_e.x,V.client.y-=_e.y),V.ctrlKey=w.ctrlKey,V.altKey=w.altKey,V.shiftKey=w.shiftKey,V.metaKey=w.metaKey,V.button=w.button,V.buttons=w.buttons,V.target=U,V.currentTarget=U,V.preEnd=J,V.type=oe||R+(z||""),V.interactable=ge,V.t0=Ie?b.pointers[b.pointers.length-1].downTime:Ye.t0,V.x0=b.coords.start.page.x-_e.x,V.y0=b.coords.start.page.y-_e.y,V.clientX0=b.coords.start.client.x-_e.x,V.clientY0=b.coords.start.client.y-_e.y,V.delta=Ie||Fe?{x:0,y:0}:{x:V[Me].x-Ye[Me].x,y:V[Me].y-Ye[Me].y},V.dt=b.coords.delta.timeStamp,V.duration=V.timeStamp-V.t0,V.velocity=(0,j.default)({},b.coords.velocity[Me]),V.speed=(0,pe.default)(V.velocity.x,V.velocity.y),V.swipe=Fe||z==="inertiastart"?V.getSwipe():null,V}return a=M,(c=[{key:"getSwipe",value:function(){var b=this._interaction;if(b.prevEvent.speed<600||this.timeStamp-b.prevEvent.timeStamp>150)return null;var w=180*Math.atan2(b.prevEvent.velocityY,b.prevEvent.velocityX)/Math.PI;w<0&&(w+=360);var R=112.5<=w&&w<247.5,z=202.5<=w&&w<337.5;return{up:z,down:!z&&22.5<=w&&w<157.5,left:R,right:!R&&(292.5<=w||w<67.5),angle:w,speed:b.prevEvent.speed,velocity:{x:b.prevEvent.velocityX,y:b.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}])&&Id(a.prototype,c),Object.defineProperty(a,"prototype",{writable:!1}),M}(et.BaseEvent);mo.InteractEvent=ic,Object.defineProperties(ic.prototype,{pageX:{get:function(){return this.page.x},set:function(o){this.page.x=o}},pageY:{get:function(){return this.page.y},set:function(o){this.page.y=o}},clientX:{get:function(){return this.client.x},set:function(o){this.client.x=o}},clientY:{get:function(){return this.client.y},set:function(o){this.client.y=o}},dx:{get:function(){return this.delta.x},set:function(o){this.delta.x=o}},dy:{get:function(){return this.delta.y},set:function(o){this.delta.y=o}},velocityX:{get:function(){return this.velocity.x},set:function(o){this.velocity.x=o}},velocityY:{get:function(){return this.velocity.y},set:function(o){this.velocity.y=o}}});var go={};function rc(o,a){for(var c=0;c<a.length;c++){var u=a[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(o,u.key,u)}}function kd(o,a,c){return a&&rc(o.prototype,a),c&&rc(o,c),Object.defineProperty(o,"prototype",{writable:!1}),o}function vo(o,a,c){return a in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,o}Object.defineProperty(go,"__esModule",{value:!0}),go.PointerInfo=void 0;var Fd=kd(function o(a,c,u,p,x){(function(M,b){if(!(M instanceof b))throw new TypeError("Cannot call a class as a function")})(this,o),vo(this,"id",void 0),vo(this,"pointer",void 0),vo(this,"event",void 0),vo(this,"downTime",void 0),vo(this,"downTarget",void 0),this.id=a,this.pointer=c,this.event=u,this.downTime=p,this.downTarget=x});go.PointerInfo=Fd;var is,rs,dn={};function zd(o,a){for(var c=0;c<a.length;c++){var u=a[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(o,u.key,u)}}function Dt(o,a,c){return a in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,o}Object.defineProperty(dn,"__esModule",{value:!0}),dn.Interaction=void 0,Object.defineProperty(dn,"PointerInfo",{enumerable:!0,get:function(){return go.PointerInfo}}),dn.default=dn._ProxyValues=dn._ProxyMethods=void 0,dn._ProxyValues=is,function(o){o.interactable="",o.element="",o.prepared="",o.pointerIsDown="",o.pointerWasMoved="",o._proxy=""}(is||(dn._ProxyValues=is={})),dn._ProxyMethods=rs,function(o){o.start="",o.move="",o.end="",o.stop="",o.interacting=""}(rs||(dn._ProxyMethods=rs={}));var Nd=0,oc=function(){function o(u){var p=this,x=u.pointerType,M=u.scopeFire;(function(J,oe){if(!(J instanceof oe))throw new TypeError("Cannot call a class as a function")})(this,o),Dt(this,"interactable",null),Dt(this,"element",null),Dt(this,"rect",null),Dt(this,"_rects",void 0),Dt(this,"edges",null),Dt(this,"_scopeFire",void 0),Dt(this,"prepared",{name:null,axis:null,edges:null}),Dt(this,"pointerType",void 0),Dt(this,"pointers",[]),Dt(this,"downEvent",null),Dt(this,"downPointer",{}),Dt(this,"_latestPointer",{pointer:null,event:null,eventTarget:null}),Dt(this,"prevEvent",null),Dt(this,"pointerIsDown",!1),Dt(this,"pointerWasMoved",!1),Dt(this,"_interacting",!1),Dt(this,"_ending",!1),Dt(this,"_stopped",!0),Dt(this,"_proxy",null),Dt(this,"simulation",null),Dt(this,"doMove",(0,q.warnOnce)(function(J){this.move(J)},"The interaction.doMove() method has been renamed to interaction.move()")),Dt(this,"coords",{start:ae.newCoords(),prev:ae.newCoords(),cur:ae.newCoords(),delta:ae.newCoords(),velocity:ae.newCoords()}),Dt(this,"_id",Nd++),this._scopeFire=M,this.pointerType=x;var b=this;this._proxy={};var w=function(J){Object.defineProperty(p._proxy,J,{get:function(){return b[J]}})};for(var R in is)w(R);var z=function(J){Object.defineProperty(p._proxy,J,{value:function(){return b[J].apply(b,arguments)}})};for(var U in rs)z(U);this._scopeFire("interactions:new",{interaction:this})}var a,c;return a=o,c=[{key:"pointerMoveTolerance",get:function(){return 1}},{key:"pointerDown",value:function(u,p,x){var M=this.updatePointer(u,p,x,!0),b=this.pointers[M];this._scopeFire("interactions:down",{pointer:u,event:p,eventTarget:x,pointerIndex:M,pointerInfo:b,type:"down",interaction:this})}},{key:"start",value:function(u,p,x){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(u.name==="gesture"?2:1)||!p.options[u.name].enabled)&&((0,q.copyAction)(this.prepared,u),this.interactable=p,this.element=x,this.rect=p.getRect(x),this.edges=this.prepared.edges?(0,j.default)({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(u,p,x){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(u,p,x,!1);var M,b,w=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(M=this.coords.cur.client.x-this.coords.start.client.x,b=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=(0,pe.default)(M,b)>this.pointerMoveTolerance);var R=this.getPointerIndex(u),z={pointer:u,pointerIndex:R,pointerInfo:this.pointers[R],event:p,type:"move",eventTarget:x,dx:M,dy:b,duplicate:w,interaction:this};w||ae.setCoordVelocity(this.coords.velocity,this.coords.delta),this._scopeFire("interactions:move",z),w||this.simulation||(this.interacting()&&(z.type=null,this.move(z)),this.pointerWasMoved&&ae.copyCoords(this.coords.prev,this.coords.cur))}},{key:"move",value:function(u){u&&u.event||ae.setZeroCoords(this.coords.delta),(u=(0,j.default)({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},u||{})).phase="move",this._doPhase(u)}},{key:"pointerUp",value:function(u,p,x,M){var b=this.getPointerIndex(u);b===-1&&(b=this.updatePointer(u,p,x,!1));var w=/cancel$/i.test(p.type)?"cancel":"up";this._scopeFire("interactions:".concat(w),{pointer:u,pointerIndex:b,pointerInfo:this.pointers[b],event:p,eventTarget:x,type:w,curEventTarget:M,interaction:this}),this.simulation||this.end(p),this.removePointer(u,p)}},{key:"documentBlur",value:function(u){this.end(u),this._scopeFire("interactions:blur",{event:u,type:"blur",interaction:this})}},{key:"end",value:function(u){var p;this._ending=!0,u=u||this._latestPointer.event,this.interacting()&&(p=this._doPhase({event:u,interaction:this,phase:"end"})),this._ending=!1,p===!0&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(u){var p=ae.getPointerId(u);return this.pointerType==="mouse"||this.pointerType==="pen"?this.pointers.length-1:je.findIndex(this.pointers,function(x){return x.id===p})}},{key:"getPointerInfo",value:function(u){return this.pointers[this.getPointerIndex(u)]}},{key:"updatePointer",value:function(u,p,x,M){var b=ae.getPointerId(u),w=this.getPointerIndex(u),R=this.pointers[w];return M=M!==!1&&(M||/(down|start)$/i.test(p.type)),R?R.pointer=u:(R=new go.PointerInfo(b,u,p,null,null),w=this.pointers.length,this.pointers.push(R)),ae.setCoords(this.coords.cur,this.pointers.map(function(z){return z.pointer}),this._now()),ae.setCoordDeltas(this.coords.delta,this.coords.prev,this.coords.cur),M&&(this.pointerIsDown=!0,R.downTime=this.coords.cur.timeStamp,R.downTarget=x,ae.pointerExtend(this.downPointer,u),this.interacting()||(ae.copyCoords(this.coords.start,this.coords.cur),ae.copyCoords(this.coords.prev,this.coords.cur),this.downEvent=p,this.pointerWasMoved=!1)),this._updateLatestPointer(u,p,x),this._scopeFire("interactions:update-pointer",{pointer:u,event:p,eventTarget:x,down:M,pointerInfo:R,pointerIndex:w,interaction:this}),w}},{key:"removePointer",value:function(u,p){var x=this.getPointerIndex(u);if(x!==-1){var M=this.pointers[x];this._scopeFire("interactions:remove-pointer",{pointer:u,event:p,eventTarget:null,pointerIndex:x,pointerInfo:M,interaction:this}),this.pointers.splice(x,1),this.pointerIsDown=!1}}},{key:"_updateLatestPointer",value:function(u,p,x){this._latestPointer.pointer=u,this._latestPointer.event=p,this._latestPointer.eventTarget=x}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(u,p,x,M){return new mo.InteractEvent(this,u,this.prepared.name,p,this.element,x,M)}},{key:"_fireEvent",value:function(u){var p;(p=this.interactable)==null||p.fire(u),(!this.prevEvent||u.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=u)}},{key:"_doPhase",value:function(u){var p=u.event,x=u.phase,M=u.preEnd,b=u.type,w=this.rect;if(w&&x==="move"&&(K.addEdges(this.edges,w,this.coords.delta[this.interactable.options.deltaSource]),w.width=w.right-w.left,w.height=w.bottom-w.top),this._scopeFire("interactions:before-action-".concat(x),u)===!1)return!1;var R=u.iEvent=this._createPreparedEvent(p,x,M,b);return this._scopeFire("interactions:action-".concat(x),u),x==="start"&&(this.prevEvent=R),this._fireEvent(R),this._scopeFire("interactions:after-action-".concat(x),u),!0}},{key:"_now",value:function(){return Date.now()}}],c&&zd(a.prototype,c),Object.defineProperty(a,"prototype",{writable:!1}),o}();dn.Interaction=oc;var Ud=oc;dn.default=Ud;var yi={};function sc(o){o.pointerIsDown&&(pa(o.coords.cur,o.offset.total),o.offset.pending.x=0,o.offset.pending.y=0)}function ac(o){ha(o.interaction)}function ha(o){if(!function(c){return!(!c.offset.pending.x&&!c.offset.pending.y)}(o))return!1;var a=o.offset.pending;return pa(o.coords.cur,a),pa(o.coords.delta,a),K.addEdges(o.edges,o.rect,a),a.x=0,a.y=0,!0}function Bd(o){var a=o.x,c=o.y;this.offset.pending.x+=a,this.offset.pending.y+=c,this.offset.total.x+=a,this.offset.total.y+=c}function pa(o,a){var c=o.page,u=o.client,p=a.x,x=a.y;c.x+=p,c.y+=x,u.x+=p,u.y+=x}Object.defineProperty(yi,"__esModule",{value:!0}),yi.addTotal=sc,yi.applyPending=ha,yi.default=void 0,dn._ProxyMethods.offsetBy="";var Gd={id:"offset",before:["modifiers","pointer-events","actions","inertia"],install:function(o){o.Interaction.prototype.offsetBy=Bd},listeners:{"interactions:new":function(o){o.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(o){return sc(o.interaction)},"interactions:before-action-start":ac,"interactions:before-action-move":ac,"interactions:before-action-end":function(o){var a=o.interaction;if(ha(a))return a.move({offset:!0}),a.end(),!1},"interactions:stop":function(o){var a=o.interaction;a.offset.total.x=0,a.offset.total.y=0,a.offset.pending.x=0,a.offset.pending.y=0}}},Wd=Gd;yi.default=Wd;var Hi={};function Vd(o,a){for(var c=0;c<a.length;c++){var u=a[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(o,u.key,u)}}function Gt(o,a,c){return a in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,o}Object.defineProperty(Hi,"__esModule",{value:!0}),Hi.default=Hi.InertiaState=void 0;var lc=function(){function o(u){(function(p,x){if(!(p instanceof x))throw new TypeError("Cannot call a class as a function")})(this,o),Gt(this,"active",!1),Gt(this,"isModified",!1),Gt(this,"smoothEnd",!1),Gt(this,"allowResume",!1),Gt(this,"modification",void 0),Gt(this,"modifierCount",0),Gt(this,"modifierArg",void 0),Gt(this,"startCoords",void 0),Gt(this,"t0",0),Gt(this,"v0",0),Gt(this,"te",0),Gt(this,"targetOffset",void 0),Gt(this,"modifiedOffset",void 0),Gt(this,"currentOffset",void 0),Gt(this,"lambda_v0",0),Gt(this,"one_ve_v0",0),Gt(this,"timeout",void 0),Gt(this,"interaction",void 0),this.interaction=u}var a,c;return a=o,(c=[{key:"start",value:function(u){var p=this.interaction,x=os(p);if(!x||!x.enabled)return!1;var M=p.coords.velocity.client,b=(0,pe.default)(M.x,M.y),w=this.modification||(this.modification=new Wi.default(p));if(w.copyFrom(p.modification),this.t0=p._now(),this.allowResume=x.allowResume,this.v0=b,this.currentOffset={x:0,y:0},this.startCoords=p.coords.cur.page,this.modifierArg=w.fillArg({pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"}),this.t0-p.coords.cur.timeStamp<50&&b>x.minSpeed&&b>x.endSpeed)this.startInertia();else{if(w.result=w.setAll(this.modifierArg),!w.result.changed)return!1;this.startSmoothEnd()}return p.modification.result.rect=null,p.offsetBy(this.targetOffset),p._doPhase({interaction:p,event:u,phase:"inertiastart"}),p.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),p.modification.result.rect=null,this.active=!0,p.simulation=this,!0}},{key:"startInertia",value:function(){var u=this,p=this.interaction.coords.velocity.client,x=os(this.interaction),M=x.resistance,b=-Math.log(x.endSpeed/this.v0)/M;this.targetOffset={x:(p.x-b)/M,y:(p.y-b)/M},this.te=b,this.lambda_v0=M/this.v0,this.one_ve_v0=1-x.endSpeed/this.v0;var w=this.modification,R=this.modifierArg;R.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},w.result=w.setAll(R),w.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+w.result.delta.x,y:this.targetOffset.y+w.result.delta.y}),this.onNextFrame(function(){return u.inertiaTick()})}},{key:"startSmoothEnd",value:function(){var u=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.onNextFrame(function(){return u.smoothEndTick()})}},{key:"onNextFrame",value:function(u){var p=this;this.timeout=kt.default.request(function(){p.active&&u()})}},{key:"inertiaTick",value:function(){var u,p,x,M,b,w=this,R=this.interaction,z=os(R).resistance,U=(R._now()-this.t0)/1e3;if(U<this.te){var J,oe=1-(Math.exp(-z*U)-this.lambda_v0)/this.one_ve_v0;this.isModified?(u=this.targetOffset.x,p=this.targetOffset.y,x=this.modifiedOffset.x,M=this.modifiedOffset.y,J={x:cc(b=oe,0,u,x),y:cc(b,0,p,M)}):J={x:this.targetOffset.x*oe,y:this.targetOffset.y*oe};var V={x:J.x-this.currentOffset.x,y:J.y-this.currentOffset.y};this.currentOffset.x+=V.x,this.currentOffset.y+=V.y,R.offsetBy(V),R.move(),this.onNextFrame(function(){return w.inertiaTick()})}else R.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var u=this,p=this.interaction,x=p._now()-this.t0,M=os(p).smoothEndDuration;if(x<M){var b={x:uc(x,0,this.targetOffset.x,M),y:uc(x,0,this.targetOffset.y,M)},w={x:b.x-this.currentOffset.x,y:b.y-this.currentOffset.y};this.currentOffset.x+=w.x,this.currentOffset.y+=w.y,p.offsetBy(w),p.move({skipModifiers:this.modifierCount}),this.onNextFrame(function(){return u.smoothEndTick()})}else p.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(u){var p=u.pointer,x=u.event,M=u.eventTarget,b=this.interaction;b.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),b.updatePointer(p,x,M,!0),b._doPhase({interaction:b,event:x,phase:"resume"}),(0,ae.copyCoords)(b.coords.prev,b.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,kt.default.cancel(this.timeout)}}])&&Vd(a.prototype,c),Object.defineProperty(a,"prototype",{writable:!1}),o}();function os(o){var a=o.interactable,c=o.prepared;return a&&a.options&&c.name&&a.options[c.name].inertia}Hi.InertiaState=lc;var Hd={id:"inertia",before:["modifiers","actions"],install:function(o){var a=o.defaults;o.usePlugin(yi.default),o.usePlugin($t.default),o.actions.phases.inertiastart=!0,o.actions.phases.resume=!0,a.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(o){var a=o.interaction;a.inertia=new lc(a)},"interactions:before-action-end":function(o){var a=o.interaction,c=o.event;return(!a._interacting||a.simulation||!a.inertia.start(c))&&null},"interactions:down":function(o){var a=o.interaction,c=o.eventTarget,u=a.inertia;if(u.active)for(var p=c;l.default.element(p);){if(p===a.element){u.resume(o);break}p=T.parentNode(p)}},"interactions:stop":function(o){var a=o.interaction.inertia;a.active&&a.stop()},"interactions:before-action-resume":function(o){var a=o.interaction.modification;a.stop(o),a.start(o,o.interaction.coords.cur.page),a.applyToInteraction(o)},"interactions:before-action-inertiastart":function(o){return o.interaction.modification.setAndApply(o)},"interactions:action-resume":$t.addEventModifiers,"interactions:action-inertiastart":$t.addEventModifiers,"interactions:after-action-inertiastart":function(o){return o.interaction.modification.restoreInteractionCoords(o)},"interactions:after-action-resume":function(o){return o.interaction.modification.restoreInteractionCoords(o)}}};function cc(o,a,c,u){var p=1-o;return p*p*a+2*p*o*c+o*o*u}function uc(o,a,c,u){return-c*(o/=u)*(o-2)+a}var jd=Hd;Hi.default=jd;var _o={};function qd(o,a){for(var c=0;c<a.length;c++){var u=a[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(o,u.key,u)}}function yo(o,a,c){return a in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,o}function fc(o,a){for(var c=0;c<a.length;c++){var u=a[c];if(o.immediatePropagationStopped)break;u(o)}}Object.defineProperty(_o,"__esModule",{value:!0}),_o.Eventable=void 0;var Xd=function(){function o(u){(function(p,x){if(!(p instanceof x))throw new TypeError("Cannot call a class as a function")})(this,o),yo(this,"options",void 0),yo(this,"types",{}),yo(this,"propagationStopped",!1),yo(this,"immediatePropagationStopped",!1),yo(this,"global",void 0),this.options=(0,j.default)({},u||{})}var a,c;return a=o,(c=[{key:"fire",value:function(u){var p,x=this.global;(p=this.types[u.type])&&fc(u,p),!u.propagationStopped&&x&&(p=x[u.type])&&fc(u,p)}},{key:"on",value:function(u,p){var x=(0,se.default)(u,p);for(u in x)this.types[u]=je.merge(this.types[u]||[],x[u])}},{key:"off",value:function(u,p){var x=(0,se.default)(u,p);for(u in x){var M=this.types[u];if(M&&M.length)for(var b=0;b<x[u].length;b++){var w=x[u][b],R=M.indexOf(w);R!==-1&&M.splice(R,1)}}}},{key:"getRect",value:function(u){return null}}])&&qd(a.prototype,c),Object.defineProperty(a,"prototype",{writable:!1}),o}();_o.Eventable=Xd;var xo={};Object.defineProperty(xo,"__esModule",{value:!0}),xo.default=function(o,a){if(a.phaselessTypes[o])return!0;for(var c in a.map)if(o.indexOf(c)===0&&o.substr(c.length)in a.phases)return!0;return!1};var ma={};Object.defineProperty(ma,"__esModule",{value:!0}),ma.createInteractStatic=function(o){var a=function c(u,p){var x=o.interactables.get(u,p);return x||((x=o.interactables.new(u,p)).events.global=c.globalEvents),x};return a.getPointerAverage=ae.pointerAverage,a.getTouchBBox=ae.touchBBox,a.getTouchDistance=ae.touchDistance,a.getTouchAngle=ae.touchAngle,a.getElementRect=T.getElementRect,a.getElementClientRect=T.getElementClientRect,a.matchesSelector=T.matchesSelector,a.closest=T.closest,a.globalEvents={},a.version="1.10.17",a.scope=o,a.use=function(c,u){return this.scope.usePlugin(c,u),this},a.isSet=function(c,u){return!!this.scope.interactables.get(c,u&&u.context)},a.on=(0,q.warnOnce)(function(c,u,p){if(l.default.string(c)&&c.search(" ")!==-1&&(c=c.trim().split(/ +/)),l.default.array(c)){for(var x=0;x<c.length;x++){var M=c[x];this.on(M,u,p)}return this}if(l.default.object(c)){for(var b in c)this.on(b,c[b],u);return this}return(0,xo.default)(c,this.scope.actions)?this.globalEvents[c]?this.globalEvents[c].push(u):this.globalEvents[c]=[u]:this.scope.events.add(this.scope.document,c,u,{options:p}),this},"The interact.on() method is being deprecated"),a.off=(0,q.warnOnce)(function(c,u,p){if(l.default.string(c)&&c.search(" ")!==-1&&(c=c.trim().split(/ +/)),l.default.array(c)){for(var x=0;x<c.length;x++){var M=c[x];this.off(M,u,p)}return this}if(l.default.object(c)){for(var b in c)this.off(b,c[b],u);return this}var w;return(0,xo.default)(c,this.scope.actions)?c in this.globalEvents&&(w=this.globalEvents[c].indexOf(u))!==-1&&this.globalEvents[c].splice(w,1):this.scope.events.remove(this.scope.document,c,u,p),this},"The interact.off() method is being deprecated"),a.debug=function(){return this.scope},a.supportsTouch=function(){return D.default.supportsTouch},a.supportsPointerEvent=function(){return D.default.supportsPointerEvent},a.stop=function(){for(var c=0;c<this.scope.interactions.list.length;c++)this.scope.interactions.list[c].stop();return this},a.pointerMoveTolerance=function(c){return l.default.number(c)?(this.scope.interactions.pointerMoveTolerance=c,this):this.scope.interactions.pointerMoveTolerance},a.addDocument=function(c,u){this.scope.addDocument(c,u)},a.removeDocument=function(c){this.scope.removeDocument(c)},a};var ss={};function Yd(o,a){for(var c=0;c<a.length;c++){var u=a[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(o,u.key,u)}}function ii(o,a,c){return a in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,o}Object.defineProperty(ss,"__esModule",{value:!0}),ss.Interactable=void 0;var $d=function(){function o(u,p,x,M){(function(b,w){if(!(b instanceof w))throw new TypeError("Cannot call a class as a function")})(this,o),ii(this,"options",void 0),ii(this,"_actions",void 0),ii(this,"target",void 0),ii(this,"events",new _o.Eventable),ii(this,"_context",void 0),ii(this,"_win",void 0),ii(this,"_doc",void 0),ii(this,"_scopeEvents",void 0),ii(this,"_rectChecker",void 0),this._actions=p.actions,this.target=u,this._context=p.context||x,this._win=(0,n.getWindow)((0,T.trySelector)(u)?this._context:u),this._doc=this._win.document,this._scopeEvents=M,this.set(p)}var a,c;return a=o,(c=[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}},{key:"setOnEvents",value:function(u,p){return l.default.func(p.onstart)&&this.on("".concat(u,"start"),p.onstart),l.default.func(p.onmove)&&this.on("".concat(u,"move"),p.onmove),l.default.func(p.onend)&&this.on("".concat(u,"end"),p.onend),l.default.func(p.oninertiastart)&&this.on("".concat(u,"inertiastart"),p.oninertiastart),this}},{key:"updatePerActionListeners",value:function(u,p,x){(l.default.array(p)||l.default.object(p))&&this.off(u,p),(l.default.array(x)||l.default.object(x))&&this.on(u,x)}},{key:"setPerAction",value:function(u,p){var x=this._defaults;for(var M in p){var b=M,w=this.options[u],R=p[b];b==="listeners"&&this.updatePerActionListeners(u,w.listeners,R),l.default.array(R)?w[b]=je.from(R):l.default.plainObject(R)?(w[b]=(0,j.default)(w[b]||{},(0,Gi.default)(R)),l.default.object(x.perAction[b])&&"enabled"in x.perAction[b]&&(w[b].enabled=R.enabled!==!1)):l.default.bool(R)&&l.default.object(x.perAction[b])?w[b].enabled=R:w[b]=R}}},{key:"getRect",value:function(u){return u=u||(l.default.element(this.target)?this.target:null),l.default.string(this.target)&&(u=u||this._context.querySelector(this.target)),(0,T.getElementRect)(u)}},{key:"rectChecker",value:function(u){var p=this;return l.default.func(u)?(this._rectChecker=u,this.getRect=function(x){var M=(0,j.default)({},p._rectChecker(x));return"width"in M||(M.width=M.right-M.left,M.height=M.bottom-M.top),M},this):u===null?(delete this.getRect,delete this._rectChecker,this):this.getRect}},{key:"_backCompatOption",value:function(u,p){if((0,T.trySelector)(p)||l.default.object(p)){for(var x in this.options[u]=p,this._actions.map)this.options[x][u]=p;return this}return this.options[u]}},{key:"origin",value:function(u){return this._backCompatOption("origin",u)}},{key:"deltaSource",value:function(u){return u==="page"||u==="client"?(this.options.deltaSource=u,this):this.options.deltaSource}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(u){return this._context===u.ownerDocument||(0,T.nodeContains)(this._context,u)}},{key:"testIgnoreAllow",value:function(u,p,x){return!this.testIgnore(u.ignoreFrom,p,x)&&this.testAllow(u.allowFrom,p,x)}},{key:"testAllow",value:function(u,p,x){return!u||!!l.default.element(x)&&(l.default.string(u)?(0,T.matchesUpTo)(x,u,p):!!l.default.element(u)&&(0,T.nodeContains)(u,x))}},{key:"testIgnore",value:function(u,p,x){return!(!u||!l.default.element(x))&&(l.default.string(u)?(0,T.matchesUpTo)(x,u,p):!!l.default.element(u)&&(0,T.nodeContains)(u,x))}},{key:"fire",value:function(u){return this.events.fire(u),this}},{key:"_onOff",value:function(u,p,x,M){l.default.object(p)&&!l.default.array(p)&&(M=x,x=null);var b=u==="on"?"add":"remove",w=(0,se.default)(p,x);for(var R in w){R==="wheel"&&(R=D.default.wheelEvent);for(var z=0;z<w[R].length;z++){var U=w[R][z];(0,xo.default)(R,this._actions)?this.events[u](R,U):l.default.string(this.target)?this._scopeEvents["".concat(b,"Delegate")](this.target,this._context,R,U,M):this._scopeEvents[b](this.target,R,U,M)}}return this}},{key:"on",value:function(u,p,x){return this._onOff("on",u,p,x)}},{key:"off",value:function(u,p,x){return this._onOff("off",u,p,x)}},{key:"set",value:function(u){var p=this._defaults;for(var x in l.default.object(u)||(u={}),this.options=(0,Gi.default)(p.base),this._actions.methodDict){var M=x,b=this._actions.methodDict[M];this.options[M]={},this.setPerAction(M,(0,j.default)((0,j.default)({},p.perAction),p.actions[M])),this[b](u[M])}for(var w in u)l.default.func(this[w])&&this[w](u[w]);return this}},{key:"unset",value:function(){if(l.default.string(this.target))for(var u in this._scopeEvents.delegatedEvents)for(var p=this._scopeEvents.delegatedEvents[u],x=p.length-1;x>=0;x--){var M=p[x],b=M.selector,w=M.context,R=M.listeners;b===this.target&&w===this._context&&p.splice(x,1);for(var z=R.length-1;z>=0;z--)this._scopeEvents.removeDelegate(this.target,this._context,u,R[z][0],R[z][1])}else this._scopeEvents.remove(this.target,"all")}}])&&Yd(a.prototype,c),Object.defineProperty(a,"prototype",{writable:!1}),o}();ss.Interactable=$d;var as={};function Zd(o,a){for(var c=0;c<a.length;c++){var u=a[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(o,u.key,u)}}function ga(o,a,c){return a in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,o}Object.defineProperty(as,"__esModule",{value:!0}),as.InteractableSet=void 0;var Kd=function(){function o(u){var p=this;(function(x,M){if(!(x instanceof M))throw new TypeError("Cannot call a class as a function")})(this,o),ga(this,"list",[]),ga(this,"selectorMap",{}),ga(this,"scope",void 0),this.scope=u,u.addListeners({"interactable:unset":function(x){var M=x.interactable,b=M.target,w=M._context,R=l.default.string(b)?p.selectorMap[b]:b[p.scope.id],z=je.findIndex(R,function(U){return U.context===w});R[z]&&(R[z].context=null,R[z].interactable=null),R.splice(z,1)}})}var a,c;return a=o,(c=[{key:"new",value:function(u,p){p=(0,j.default)(p||{},{actions:this.scope.actions});var x=new this.scope.Interactable(u,p,this.scope.document,this.scope.events),M={context:x._context,interactable:x};return this.scope.addDocument(x._doc),this.list.push(x),l.default.string(u)?(this.selectorMap[u]||(this.selectorMap[u]=[]),this.selectorMap[u].push(M)):(x.target[this.scope.id]||Object.defineProperty(u,this.scope.id,{value:[],configurable:!0}),u[this.scope.id].push(M)),this.scope.fire("interactable:new",{target:u,options:p,interactable:x,win:this.scope._win}),x}},{key:"get",value:function(u,p){var x=p&&p.context||this.scope.document,M=l.default.string(u),b=M?this.selectorMap[u]:u[this.scope.id];if(!b)return null;var w=je.find(b,function(R){return R.context===x&&(M||R.interactable.inContext(u))});return w&&w.interactable}},{key:"forEachMatch",value:function(u,p){for(var x=0;x<this.list.length;x++){var M=this.list[x],b=void 0;if((l.default.string(M.target)?l.default.element(u)&&T.matchesSelector(u,M.target):u===M.target)&&M.inContext(u)&&(b=p(M)),b!==void 0)return b}}}])&&Zd(a.prototype,c),Object.defineProperty(a,"prototype",{writable:!1}),o}();as.InteractableSet=Kd;var ls={};function Jd(o,a){for(var c=0;c<a.length;c++){var u=a[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(o,u.key,u)}}function va(o,a,c){return a in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,o}function _a(o,a){return function(c){if(Array.isArray(c))return c}(o)||function(c,u){var p=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(p!=null){var x,M,b=[],w=!0,R=!1;try{for(p=p.call(c);!(w=(x=p.next()).done)&&(b.push(x.value),!u||b.length!==u);w=!0);}catch(z){R=!0,M=z}finally{try{w||p.return==null||p.return()}finally{if(R)throw M}}return b}}(o,a)||function(c,u){if(c){if(typeof c=="string")return dc(c,u);var p=Object.prototype.toString.call(c).slice(8,-1);return p==="Object"&&c.constructor&&(p=c.constructor.name),p==="Map"||p==="Set"?Array.from(c):p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)?dc(c,u):void 0}}(o,a)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function dc(o,a){(a==null||a>o.length)&&(a=o.length);for(var c=0,u=Array(a);c<a;c++)u[c]=o[c];return u}Object.defineProperty(ls,"__esModule",{value:!0}),ls.default=void 0;var Qd=function(){function o(u){(function(p,x){if(!(p instanceof x))throw new TypeError("Cannot call a class as a function")})(this,o),va(this,"currentTarget",void 0),va(this,"originalEvent",void 0),va(this,"type",void 0),this.originalEvent=u,(0,ve.default)(this,u)}var a,c;return a=o,(c=[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}])&&Jd(a.prototype,c),Object.defineProperty(a,"prototype",{writable:!1}),o}();function bo(o){if(!l.default.object(o))return{capture:!!o,passive:!1};var a=(0,j.default)({},o);return a.capture=!!o.capture,a.passive=!!o.passive,a}var eh={id:"events",install:function(o){var a,c=[],u={},p=[],x={add:M,remove:b,addDelegate:function(z,U,J,oe,V){var ge=bo(V);if(!u[J]){u[J]=[];for(var Me=0;Me<p.length;Me++){var _e=p[Me];M(_e,J,w),M(_e,J,R,!0)}}var Ie=u[J],Fe=je.find(Ie,function(Ye){return Ye.selector===z&&Ye.context===U});Fe||(Fe={selector:z,context:U,listeners:[]},Ie.push(Fe)),Fe.listeners.push([oe,ge])},removeDelegate:function(z,U,J,oe,V){var ge,Me=bo(V),_e=u[J],Ie=!1;if(_e)for(ge=_e.length-1;ge>=0;ge--){var Fe=_e[ge];if(Fe.selector===z&&Fe.context===U){for(var Ye=Fe.listeners,ct=Ye.length-1;ct>=0;ct--){var vt=_a(Ye[ct],2),tt=vt[0],mt=vt[1],En=mt.capture,oi=mt.passive;if(tt===oe&&En===Me.capture&&oi===Me.passive){Ye.splice(ct,1),Ye.length||(_e.splice(ge,1),b(U,J,w),b(U,J,R,!0)),Ie=!0;break}}if(Ie)break}}},delegateListener:w,delegateUseCapture:R,delegatedEvents:u,documents:p,targets:c,supportsOptions:!1,supportsPassive:!1};function M(z,U,J,oe){var V=bo(oe),ge=je.find(c,function(Me){return Me.eventTarget===z});ge||(ge={eventTarget:z,events:{}},c.push(ge)),ge.events[U]||(ge.events[U]=[]),z.addEventListener&&!je.contains(ge.events[U],J)&&(z.addEventListener(U,J,x.supportsOptions?V:V.capture),ge.events[U].push(J))}function b(z,U,J,oe){var V=bo(oe),ge=je.findIndex(c,function(ct){return ct.eventTarget===z}),Me=c[ge];if(Me&&Me.events)if(U!=="all"){var _e=!1,Ie=Me.events[U];if(Ie){if(J==="all"){for(var Fe=Ie.length-1;Fe>=0;Fe--)b(z,U,Ie[Fe],V);return}for(var Ye=0;Ye<Ie.length;Ye++)if(Ie[Ye]===J){z.removeEventListener(U,J,x.supportsOptions?V:V.capture),Ie.splice(Ye,1),Ie.length===0&&(delete Me.events[U],_e=!0);break}}_e&&!Object.keys(Me.events).length&&c.splice(ge,1)}else for(U in Me.events)Me.events.hasOwnProperty(U)&&b(z,U,"all")}function w(z,U){for(var J=bo(U),oe=new Qd(z),V=u[z.type],ge=_a(ae.getEventTargets(z),1)[0],Me=ge;l.default.element(Me);){for(var _e=0;_e<V.length;_e++){var Ie=V[_e],Fe=Ie.selector,Ye=Ie.context;if(T.matchesSelector(Me,Fe)&&T.nodeContains(Ye,ge)&&T.nodeContains(Ye,Me)){var ct=Ie.listeners;oe.currentTarget=Me;for(var vt=0;vt<ct.length;vt++){var tt=_a(ct[vt],2),mt=tt[0],En=tt[1],oi=En.capture,za=En.passive;oi===J.capture&&za===J.passive&&mt(oe)}}}Me=T.parentNode(Me)}}function R(z){return w(z,!0)}return(a=o.document)==null||a.createElement("div").addEventListener("test",null,{get capture(){return x.supportsOptions=!0},get passive(){return x.supportsPassive=!0}}),o.events=x,x}};ls.default=eh;var cs={};Object.defineProperty(cs,"__esModule",{value:!0}),cs.default=void 0;var us={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(o){for(var a=0;a<us.methodOrder.length;a++){var c;c=us.methodOrder[a];var u=us[c](o);if(u)return u}return null},simulationResume:function(o){var a=o.pointerType,c=o.eventType,u=o.eventTarget,p=o.scope;if(!/down|start/i.test(c))return null;for(var x=0;x<p.interactions.list.length;x++){var M=p.interactions.list[x],b=u;if(M.simulation&&M.simulation.allowResume&&M.pointerType===a)for(;b;){if(b===M.element)return M;b=T.parentNode(b)}}return null},mouseOrPen:function(o){var a,c=o.pointerId,u=o.pointerType,p=o.eventType,x=o.scope;if(u!=="mouse"&&u!=="pen")return null;for(var M=0;M<x.interactions.list.length;M++){var b=x.interactions.list[M];if(b.pointerType===u){if(b.simulation&&!hc(b,c))continue;if(b.interacting())return b;a||(a=b)}}if(a)return a;for(var w=0;w<x.interactions.list.length;w++){var R=x.interactions.list[w];if(!(R.pointerType!==u||/down/i.test(p)&&R.simulation))return R}return null},hasPointer:function(o){for(var a=o.pointerId,c=o.scope,u=0;u<c.interactions.list.length;u++){var p=c.interactions.list[u];if(hc(p,a))return p}return null},idle:function(o){for(var a=o.pointerType,c=o.scope,u=0;u<c.interactions.list.length;u++){var p=c.interactions.list[u];if(p.pointers.length===1){var x=p.interactable;if(x&&(!x.options.gesture||!x.options.gesture.enabled))continue}else if(p.pointers.length>=2)continue;if(!p.interacting()&&a===p.pointerType)return p}return null}};function hc(o,a){return o.pointers.some(function(c){return c.id===a})}var th=us;cs.default=th;var fs={};function ya(o){return ya=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},ya(o)}function pc(o,a){return function(c){if(Array.isArray(c))return c}(o)||function(c,u){var p=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(p!=null){var x,M,b=[],w=!0,R=!1;try{for(p=p.call(c);!(w=(x=p.next()).done)&&(b.push(x.value),!u||b.length!==u);w=!0);}catch(z){R=!0,M=z}finally{try{w||p.return==null||p.return()}finally{if(R)throw M}}return b}}(o,a)||function(c,u){if(c){if(typeof c=="string")return mc(c,u);var p=Object.prototype.toString.call(c).slice(8,-1);return p==="Object"&&c.constructor&&(p=c.constructor.name),p==="Map"||p==="Set"?Array.from(c):p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)?mc(c,u):void 0}}(o,a)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function mc(o,a){(a==null||a>o.length)&&(a=o.length);for(var c=0,u=Array(a);c<a;c++)u[c]=o[c];return u}function nh(o,a){if(!(o instanceof a))throw new TypeError("Cannot call a class as a function")}function ih(o,a){for(var c=0;c<a.length;c++){var u=a[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(o,u.key,u)}}function xa(o,a){return xa=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},xa(o,a)}function rh(o,a){if(a&&(ya(a)==="object"||typeof a=="function"))return a;if(a!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}(o)}function ds(o){return ds=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},ds(o)}Object.defineProperty(fs,"__esModule",{value:!0}),fs.default=void 0;var ba=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function gc(o,a){return function(c){var u=a.interactions.list,p=ae.getPointerType(c),x=pc(ae.getEventTargets(c),2),M=x[0],b=x[1],w=[];if(/^touch/.test(c.type)){a.prevTouchTime=a.now();for(var R=0;R<c.changedTouches.length;R++){var z=c.changedTouches[R],U={pointer:z,pointerId:ae.getPointerId(z),pointerType:p,eventType:c.type,eventTarget:M,curEventTarget:b,scope:a},J=vc(U);w.push([U.pointer,U.eventTarget,U.curEventTarget,J])}}else{var oe=!1;if(!D.default.supportsPointerEvent&&/mouse/.test(c.type)){for(var V=0;V<u.length&&!oe;V++)oe=u[V].pointerType!=="mouse"&&u[V].pointerIsDown;oe=oe||a.now()-a.prevTouchTime<500||c.timeStamp===0}if(!oe){var ge={pointer:c,pointerId:ae.getPointerId(c),pointerType:p,eventType:c.type,curEventTarget:b,eventTarget:M,scope:a},Me=vc(ge);w.push([ge.pointer,ge.eventTarget,ge.curEventTarget,Me])}}for(var _e=0;_e<w.length;_e++){var Ie=pc(w[_e],4),Fe=Ie[0],Ye=Ie[1],ct=Ie[2];Ie[3][o](Fe,c,Ye,ct)}}}function vc(o){var a=o.pointerType,c=o.scope,u={interaction:cs.default.search(o),searchDetails:o};return c.fire("interactions:find",u),u.interaction||c.interactions.new({pointerType:a})}function Sa(o,a){var c=o.doc,u=o.scope,p=o.options,x=u.interactions.docEvents,M=u.events,b=M[a];for(var w in u.browser.isIOS&&!p.events&&(p.events={passive:!1}),M.delegatedEvents)b(c,w,M.delegateListener),b(c,w,M.delegateUseCapture,!0);for(var R=p&&p.events,z=0;z<x.length;z++){var U=x[z];b(c,U.type,U.listener,R)}}var oh={id:"core/interactions",install:function(o){for(var a={},c=0;c<ba.length;c++){var u=ba[c];a[u]=gc(u,o)}var p,x=D.default.pEventTypes;function M(){for(var b=0;b<o.interactions.list.length;b++){var w=o.interactions.list[b];if(w.pointerIsDown&&w.pointerType==="touch"&&!w._interacting)for(var R=function(){var U=w.pointers[z];o.documents.some(function(J){var oe=J.doc;return(0,T.nodeContains)(oe,U.downTarget)})||w.removePointer(U.pointer,U.event)},z=0;z<w.pointers.length;z++)R()}}(p=E.default.PointerEvent?[{type:x.down,listener:M},{type:x.down,listener:a.pointerDown},{type:x.move,listener:a.pointerMove},{type:x.up,listener:a.pointerUp},{type:x.cancel,listener:a.pointerUp}]:[{type:"mousedown",listener:a.pointerDown},{type:"mousemove",listener:a.pointerMove},{type:"mouseup",listener:a.pointerUp},{type:"touchstart",listener:M},{type:"touchstart",listener:a.pointerDown},{type:"touchmove",listener:a.pointerMove},{type:"touchend",listener:a.pointerUp},{type:"touchcancel",listener:a.pointerUp}]).push({type:"blur",listener:function(b){for(var w=0;w<o.interactions.list.length;w++)o.interactions.list[w].documentBlur(b)}}),o.prevTouchTime=0,o.Interaction=function(b){(function(V,ge){if(typeof ge!="function"&&ge!==null)throw new TypeError("Super expression must either be null or a function");V.prototype=Object.create(ge&&ge.prototype,{constructor:{value:V,writable:!0,configurable:!0}}),Object.defineProperty(V,"prototype",{writable:!1}),ge&&xa(V,ge)})(oe,b);var w,R,z,U,J=(z=oe,U=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var V,ge=ds(z);if(U){var Me=ds(this).constructor;V=Reflect.construct(ge,arguments,Me)}else V=ge.apply(this,arguments);return rh(this,V)});function oe(){return nh(this,oe),J.apply(this,arguments)}return w=oe,(R=[{key:"pointerMoveTolerance",get:function(){return o.interactions.pointerMoveTolerance},set:function(V){o.interactions.pointerMoveTolerance=V}},{key:"_now",value:function(){return o.now()}}])&&ih(w.prototype,R),Object.defineProperty(w,"prototype",{writable:!1}),oe}(dn.default),o.interactions={list:[],new:function(b){b.scopeFire=function(R,z){return o.fire(R,z)};var w=new o.Interaction(b);return o.interactions.list.push(w),w},listeners:a,docEvents:p,pointerMoveTolerance:1},o.usePlugin(Ft.default)},listeners:{"scope:add-document":function(o){return Sa(o,"add")},"scope:remove-document":function(o){return Sa(o,"remove")},"interactable:unset":function(o,a){for(var c=o.interactable,u=a.interactions.list.length-1;u>=0;u--){var p=a.interactions.list[u];p.interactable===c&&(p.stop(),a.fire("interactions:destroy",{interaction:p}),p.destroy(),a.interactions.list.length>2&&a.interactions.list.splice(u,1))}}},onDocSignal:Sa,doOnInteractions:gc,methodNames:ba},sh=oh;fs.default=sh;var So={};function wa(o){return wa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},wa(o)}function wo(){return wo=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(o,a,c){var u=ah(o,a);if(u){var p=Object.getOwnPropertyDescriptor(u,a);return p.get?p.get.call(arguments.length<3?o:c):p.value}},wo.apply(this,arguments)}function ah(o,a){for(;!Object.prototype.hasOwnProperty.call(o,a)&&(o=xi(o))!==null;);return o}function Ma(o,a){return Ma=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},Ma(o,a)}function lh(o,a){if(a&&(wa(a)==="object"||typeof a=="function"))return a;if(a!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}(o)}function xi(o){return xi=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},xi(o)}function _c(o,a){if(!(o instanceof a))throw new TypeError("Cannot call a class as a function")}function yc(o,a){for(var c=0;c<a.length;c++){var u=a[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(o,u.key,u)}}function xc(o,a,c){return a&&yc(o.prototype,a),c&&yc(o,c),Object.defineProperty(o,"prototype",{writable:!1}),o}function Zt(o,a,c){return a in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,o}Object.defineProperty(So,"__esModule",{value:!0}),So.Scope=void 0,So.initScope=bc;var ch=function(){function o(){var a=this;_c(this,o),Zt(this,"id","__interact_scope_".concat(Math.floor(100*Math.random()))),Zt(this,"isInitialized",!1),Zt(this,"listenerMaps",[]),Zt(this,"browser",D.default),Zt(this,"defaults",(0,Gi.default)(po.defaults)),Zt(this,"Eventable",_o.Eventable),Zt(this,"actions",{map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}}),Zt(this,"interactStatic",(0,ma.createInteractStatic)(this)),Zt(this,"InteractEvent",mo.InteractEvent),Zt(this,"Interactable",void 0),Zt(this,"interactables",new as.InteractableSet(this)),Zt(this,"_win",void 0),Zt(this,"document",void 0),Zt(this,"window",void 0),Zt(this,"documents",[]),Zt(this,"_plugins",{list:[],map:{}}),Zt(this,"onWindowUnload",function(u){return a.removeDocument(u.target)});var c=this;this.Interactable=function(u){(function(w,R){if(typeof R!="function"&&R!==null)throw new TypeError("Super expression must either be null or a function");w.prototype=Object.create(R&&R.prototype,{constructor:{value:w,writable:!0,configurable:!0}}),Object.defineProperty(w,"prototype",{writable:!1}),R&&Ma(w,R)})(b,u);var p,x,M=(p=b,x=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var w,R=xi(p);if(x){var z=xi(this).constructor;w=Reflect.construct(R,arguments,z)}else w=R.apply(this,arguments);return lh(this,w)});function b(){return _c(this,b),M.apply(this,arguments)}return xc(b,[{key:"_defaults",get:function(){return c.defaults}},{key:"set",value:function(w){return wo(xi(b.prototype),"set",this).call(this,w),c.fire("interactable:set",{options:w,interactable:this}),this}},{key:"unset",value:function(){wo(xi(b.prototype),"unset",this).call(this);var w=c.interactables.list.indexOf(this);w<0||(wo(xi(b.prototype),"unset",this).call(this),c.interactables.list.splice(w,1),c.fire("interactable:unset",{interactable:this}))}}]),b}(ss.Interactable)}return xc(o,[{key:"addListeners",value:function(a,c){this.listenerMaps.push({id:c,map:a})}},{key:"fire",value:function(a,c){for(var u=0;u<this.listenerMaps.length;u++){var p=this.listenerMaps[u].map[a];if(p&&p(c,this,a)===!1)return!1}}},{key:"init",value:function(a){return this.isInitialized?this:bc(this,a)}},{key:"pluginIsInstalled",value:function(a){return this._plugins.map[a.id]||this._plugins.list.indexOf(a)!==-1}},{key:"usePlugin",value:function(a,c){if(!this.isInitialized)return this;if(this.pluginIsInstalled(a))return this;if(a.id&&(this._plugins.map[a.id]=a),this._plugins.list.push(a),a.install&&a.install(this,c),a.listeners&&a.before){for(var u=0,p=this.listenerMaps.length,x=a.before.reduce(function(b,w){return b[w]=!0,b[Sc(w)]=!0,b},{});u<p;u++){var M=this.listenerMaps[u].id;if(x[M]||x[Sc(M)])break}this.listenerMaps.splice(u,0,{id:a.id,map:a.listeners})}else a.listeners&&this.listenerMaps.push({id:a.id,map:a.listeners});return this}},{key:"addDocument",value:function(a,c){if(this.getDocIndex(a)!==-1)return!1;var u=n.getWindow(a);c=c?(0,j.default)({},c):{},this.documents.push({doc:a,options:c}),this.events.documents.push(a),a!==this.document&&this.events.add(u,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:a,window:u,scope:this,options:c})}},{key:"removeDocument",value:function(a){var c=this.getDocIndex(a),u=n.getWindow(a),p=this.documents[c].options;this.events.remove(u,"unload",this.onWindowUnload),this.documents.splice(c,1),this.events.documents.splice(c,1),this.fire("scope:remove-document",{doc:a,window:u,scope:this,options:p})}},{key:"getDocIndex",value:function(a){for(var c=0;c<this.documents.length;c++)if(this.documents[c].doc===a)return c;return-1}},{key:"getDocOptions",value:function(a){var c=this.getDocIndex(a);return c===-1?null:this.documents[c].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),o}();function bc(o,a){return o.isInitialized=!0,l.default.window(a)&&n.init(a),E.default.init(a),D.default.init(a),kt.default.init(a),o.window=a,o.document=a.document,o.usePlugin(fs.default),o.usePlugin(ls.default),o}function Sc(o){return o&&o.replace(/\/.*$/,"")}So.Scope=ch;var Kt={};Object.defineProperty(Kt,"__esModule",{value:!0}),Kt.default=void 0;var wc=new So.Scope,uh=wc.interactStatic;Kt.default=uh;var fh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:void 0;wc.init(fh);var hs={};Object.defineProperty(hs,"__esModule",{value:!0}),hs.default=void 0,hs.default=function(){};var ps={};Object.defineProperty(ps,"__esModule",{value:!0}),ps.default=void 0,ps.default=function(){};var ms={};function Mc(o,a){return function(c){if(Array.isArray(c))return c}(o)||function(c,u){var p=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(p!=null){var x,M,b=[],w=!0,R=!1;try{for(p=p.call(c);!(w=(x=p.next()).done)&&(b.push(x.value),!u||b.length!==u);w=!0);}catch(z){R=!0,M=z}finally{try{w||p.return==null||p.return()}finally{if(R)throw M}}return b}}(o,a)||function(c,u){if(c){if(typeof c=="string")return Ec(c,u);var p=Object.prototype.toString.call(c).slice(8,-1);return p==="Object"&&c.constructor&&(p=c.constructor.name),p==="Map"||p==="Set"?Array.from(c):p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)?Ec(c,u):void 0}}(o,a)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Ec(o,a){(a==null||a>o.length)&&(a=o.length);for(var c=0,u=Array(a);c<a;c++)u[c]=o[c];return u}Object.defineProperty(ms,"__esModule",{value:!0}),ms.default=void 0,ms.default=function(o){var a=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter(function(u){var p=Mc(u,2),x=p[0],M=p[1];return x in o||M in o}),c=function(u,p){for(var x=o.range,M=o.limits,b=M===void 0?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:M,w=o.offset,R=w===void 0?{x:0,y:0}:w,z={range:x,grid:o,x:null,y:null},U=0;U<a.length;U++){var J=Mc(a[U],2),oe=J[0],V=J[1],ge=Math.round((u-R.x)/o[oe]),Me=Math.round((p-R.y)/o[V]);z[oe]=Math.max(b.left,Math.min(b.right,ge*o[oe]+R.x)),z[V]=Math.max(b.top,Math.min(b.bottom,Me*o[V]+R.y))}return z};return c.grid=o,c.coordFields=a,c};var Mo={};Object.defineProperty(Mo,"__esModule",{value:!0}),Object.defineProperty(Mo,"edgeTarget",{enumerable:!0,get:function(){return hs.default}}),Object.defineProperty(Mo,"elements",{enumerable:!0,get:function(){return ps.default}}),Object.defineProperty(Mo,"grid",{enumerable:!0,get:function(){return ms.default}});var gs={};Object.defineProperty(gs,"__esModule",{value:!0}),gs.default=void 0;var dh={id:"snappers",install:function(o){var a=o.interactStatic;a.snappers=(0,j.default)(a.snappers||{},Mo),a.createSnapGrid=a.snappers.grid}},hh=dh;gs.default=hh;var xr={};function Tc(o,a){var c=Object.keys(o);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(o);a&&(u=u.filter(function(p){return Object.getOwnPropertyDescriptor(o,p).enumerable})),c.push.apply(c,u)}return c}function Ea(o){for(var a=1;a<arguments.length;a++){var c=arguments[a]!=null?arguments[a]:{};a%2?Tc(Object(c),!0).forEach(function(u){ph(o,u,c[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(c)):Tc(Object(c)).forEach(function(u){Object.defineProperty(o,u,Object.getOwnPropertyDescriptor(c,u))})}return o}function ph(o,a,c){return a in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,o}Object.defineProperty(xr,"__esModule",{value:!0}),xr.default=xr.aspectRatio=void 0;var Cc={start:function(o){var a=o.state,c=o.rect,u=o.edges,p=o.pageCoords,x=a.options.ratio,M=a.options,b=M.equalDelta,w=M.modifiers;x==="preserve"&&(x=c.width/c.height),a.startCoords=(0,j.default)({},p),a.startRect=(0,j.default)({},c),a.ratio=x,a.equalDelta=b;var R=a.linkedEdges={top:u.top||u.left&&!u.bottom,left:u.left||u.top&&!u.right,bottom:u.bottom||u.right&&!u.top,right:u.right||u.bottom&&!u.left};if(a.xIsPrimaryAxis=!(!u.left&&!u.right),a.equalDelta){var z=(R.left?1:-1)*(R.top?1:-1);a.edgeSign={x:z,y:z}}else a.edgeSign={x:R.left?-1:1,y:R.top?-1:1};if((0,j.default)(o.edges,R),w&&w.length){var U=new Wi.default(o.interaction);U.copyFrom(o.interaction.modification),U.prepareStates(w),a.subModification=U,U.startAll(Ea({},o))}},set:function(o){var a=o.state,c=o.rect,u=o.coords,p=(0,j.default)({},u),x=a.equalDelta?mh:gh;if(x(a,a.xIsPrimaryAxis,u,c),!a.subModification)return null;var M=(0,j.default)({},c);(0,K.addEdges)(a.linkedEdges,M,{x:u.x-p.x,y:u.y-p.y});var b=a.subModification.setAll(Ea(Ea({},o),{},{rect:M,edges:a.linkedEdges,pageCoords:u,prevCoords:u,prevRect:M})),w=b.delta;return b.changed&&(x(a,Math.abs(w.x)>Math.abs(w.y),b.coords,b.rect),(0,j.default)(u,b.coords)),b.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function mh(o,a,c){var u=o.startCoords,p=o.edgeSign;a?c.y=u.y+(c.x-u.x)*p.y:c.x=u.x+(c.y-u.y)*p.x}function gh(o,a,c,u){var p=o.startRect,x=o.startCoords,M=o.ratio,b=o.edgeSign;if(a){var w=u.width/M;c.y=x.y+(w-p.height)*b.y}else{var R=u.height*M;c.x=x.x+(R-p.width)*b.x}}xr.aspectRatio=Cc;var vh=(0,$t.makeModifier)(Cc,"aspectRatio");xr.default=vh;var ji={};Object.defineProperty(ji,"__esModule",{value:!0}),ji.default=void 0;var Ac=function(){};Ac._defaults={};var _h=Ac;ji.default=_h;var Ta={};Object.defineProperty(Ta,"__esModule",{value:!0}),Object.defineProperty(Ta,"default",{enumerable:!0,get:function(){return ji.default}});var on={};function Ca(o,a,c){return l.default.func(o)?K.resolveRectLike(o,a.interactable,a.element,[c.x,c.y,a]):K.resolveRectLike(o,a.interactable,a.element)}Object.defineProperty(on,"__esModule",{value:!0}),on.default=void 0,on.getRestrictionRect=Ca,on.restrict=void 0;var Pc={start:function(o){var a=o.rect,c=o.startOffset,u=o.state,p=o.interaction,x=o.pageCoords,M=u.options,b=M.elementRect,w=(0,j.default)({left:0,top:0,right:0,bottom:0},M.offset||{});if(a&&b){var R=Ca(M.restriction,p,x);if(R){var z=R.right-R.left-a.width,U=R.bottom-R.top-a.height;z<0&&(w.left+=z,w.right+=z),U<0&&(w.top+=U,w.bottom+=U)}w.left+=c.left-a.width*b.left,w.top+=c.top-a.height*b.top,w.right+=c.right-a.width*(1-b.right),w.bottom+=c.bottom-a.height*(1-b.bottom)}u.offset=w},set:function(o){var a=o.coords,c=o.interaction,u=o.state,p=u.options,x=u.offset,M=Ca(p.restriction,c,a);if(M){var b=K.xywhToTlbr(M);a.x=Math.max(Math.min(b.right-x.right,a.x),b.left+x.left),a.y=Math.max(Math.min(b.bottom-x.bottom,a.y),b.top+x.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}};on.restrict=Pc;var yh=(0,$t.makeModifier)(Pc,"restrict");on.default=yh;var Xn={};Object.defineProperty(Xn,"__esModule",{value:!0}),Xn.restrictEdges=Xn.default=void 0;var Dc={top:1/0,left:1/0,bottom:-1/0,right:-1/0},Lc={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function Rc(o,a){for(var c=["top","left","bottom","right"],u=0;u<c.length;u++){var p=c[u];p in o||(o[p]=a[p])}return o}var Ic={noInner:Dc,noOuter:Lc,start:function(o){var a,c=o.interaction,u=o.startOffset,p=o.state,x=p.options;if(x){var M=(0,on.getRestrictionRect)(x.offset,c,c.coords.start.page);a=K.rectToXY(M)}a=a||{x:0,y:0},p.offset={top:a.y+u.top,left:a.x+u.left,bottom:a.y-u.bottom,right:a.x-u.right}},set:function(o){var a=o.coords,c=o.edges,u=o.interaction,p=o.state,x=p.offset,M=p.options;if(c){var b=(0,j.default)({},a),w=(0,on.getRestrictionRect)(M.inner,u,b)||{},R=(0,on.getRestrictionRect)(M.outer,u,b)||{};Rc(w,Dc),Rc(R,Lc),c.top?a.y=Math.min(Math.max(R.top+x.top,b.y),w.top+x.top):c.bottom&&(a.y=Math.max(Math.min(R.bottom+x.bottom,b.y),w.bottom+x.bottom)),c.left?a.x=Math.min(Math.max(R.left+x.left,b.x),w.left+x.left):c.right&&(a.x=Math.max(Math.min(R.right+x.right,b.x),w.right+x.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}};Xn.restrictEdges=Ic;var xh=(0,$t.makeModifier)(Ic,"restrictEdges");Xn.default=xh;var br={};Object.defineProperty(br,"__esModule",{value:!0}),br.restrictRect=br.default=void 0;var bh=(0,j.default)({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(o){}},on.restrict.defaults),Oc={start:on.restrict.start,set:on.restrict.set,defaults:bh};br.restrictRect=Oc;var Sh=(0,$t.makeModifier)(Oc,"restrictRect");br.default=Sh;var Sr={};Object.defineProperty(Sr,"__esModule",{value:!0}),Sr.restrictSize=Sr.default=void 0;var wh={width:-1/0,height:-1/0},Mh={width:1/0,height:1/0},kc={start:function(o){return Xn.restrictEdges.start(o)},set:function(o){var a=o.interaction,c=o.state,u=o.rect,p=o.edges,x=c.options;if(p){var M=K.tlbrToXywh((0,on.getRestrictionRect)(x.min,a,o.coords))||wh,b=K.tlbrToXywh((0,on.getRestrictionRect)(x.max,a,o.coords))||Mh;c.options={endOnly:x.endOnly,inner:(0,j.default)({},Xn.restrictEdges.noInner),outer:(0,j.default)({},Xn.restrictEdges.noOuter)},p.top?(c.options.inner.top=u.bottom-M.height,c.options.outer.top=u.bottom-b.height):p.bottom&&(c.options.inner.bottom=u.top+M.height,c.options.outer.bottom=u.top+b.height),p.left?(c.options.inner.left=u.right-M.width,c.options.outer.left=u.right-b.width):p.right&&(c.options.inner.right=u.left+M.width,c.options.outer.right=u.left+b.width),Xn.restrictEdges.set(o),c.options=x}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}};Sr.restrictSize=kc;var Eh=(0,$t.makeModifier)(kc,"restrictSize");Sr.default=Eh;var Aa={};Object.defineProperty(Aa,"__esModule",{value:!0}),Object.defineProperty(Aa,"default",{enumerable:!0,get:function(){return ji.default}});var bi={};Object.defineProperty(bi,"__esModule",{value:!0}),bi.snap=bi.default=void 0;var Fc={start:function(o){var a,c=o.interaction,u=o.interactable,p=o.element,x=o.rect,M=o.state,b=o.startOffset,w=M.options,R=w.offsetWithOrigin?function(J){var oe=J.interaction.element;return(0,K.rectToXY)((0,K.resolveRectLike)(J.state.options.origin,null,null,[oe]))||(0,Q.default)(J.interactable,oe,J.interaction.prepared.name)}(o):{x:0,y:0};if(w.offset==="startCoords")a={x:c.coords.start.page.x,y:c.coords.start.page.y};else{var z=(0,K.resolveRectLike)(w.offset,u,p,[c]);(a=(0,K.rectToXY)(z)||{x:0,y:0}).x+=R.x,a.y+=R.y}var U=w.relativePoints;M.offsets=x&&U&&U.length?U.map(function(J,oe){return{index:oe,relativePoint:J,x:b.left-x.width*J.x+a.x,y:b.top-x.height*J.y+a.y}}):[{index:0,relativePoint:null,x:a.x,y:a.y}]},set:function(o){var a=o.interaction,c=o.coords,u=o.state,p=u.options,x=u.offsets,M=(0,Q.default)(a.interactable,a.element,a.prepared.name),b=(0,j.default)({},c),w=[];p.offsetWithOrigin||(b.x-=M.x,b.y-=M.y);for(var R=0;R<x.length;R++)for(var z=x[R],U=b.x-z.x,J=b.y-z.y,oe=0,V=p.targets.length;oe<V;oe++){var ge,Me=p.targets[oe];(ge=l.default.func(Me)?Me(U,J,a._proxy,z,oe):Me)&&w.push({x:(l.default.number(ge.x)?ge.x:U)+z.x,y:(l.default.number(ge.y)?ge.y:J)+z.y,range:l.default.number(ge.range)?ge.range:p.range,source:Me,index:oe,offset:z})}for(var _e={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},Ie=0;Ie<w.length;Ie++){var Fe=w[Ie],Ye=Fe.range,ct=Fe.x-b.x,vt=Fe.y-b.y,tt=(0,pe.default)(ct,vt),mt=tt<=Ye;Ye===1/0&&_e.inRange&&_e.range!==1/0&&(mt=!1),_e.target&&!(mt?_e.inRange&&Ye!==1/0?tt/Ye<_e.distance/_e.range:Ye===1/0&&_e.range!==1/0||tt<_e.distance:!_e.inRange&&tt<_e.distance)||(_e.target=Fe,_e.distance=tt,_e.range=Ye,_e.inRange=mt,_e.delta.x=ct,_e.delta.y=vt)}return _e.inRange&&(c.x=_e.target.x,c.y=_e.target.y),u.closest=_e,_e},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}};bi.snap=Fc;var Th=(0,$t.makeModifier)(Fc,"snap");bi.default=Th;var ri={};function zc(o,a){(a==null||a>o.length)&&(a=o.length);for(var c=0,u=Array(a);c<a;c++)u[c]=o[c];return u}Object.defineProperty(ri,"__esModule",{value:!0}),ri.snapSize=ri.default=void 0;var Nc={start:function(o){var a=o.state,c=o.edges,u=a.options;if(!c)return null;o.state={options:{targets:null,relativePoints:[{x:c.left?0:1,y:c.top?0:1}],offset:u.offset||"self",origin:{x:0,y:0},range:u.range}},a.targetFields=a.targetFields||[["width","height"],["x","y"]],bi.snap.start(o),a.offsets=o.state.offsets,o.state=a},set:function(o){var a,c,u=o.interaction,p=o.state,x=o.coords,M=p.options,b=p.offsets,w={x:x.x-b[0].x,y:x.y-b[0].y};p.options=(0,j.default)({},M),p.options.targets=[];for(var R=0;R<(M.targets||[]).length;R++){var z=(M.targets||[])[R],U=void 0;if(U=l.default.func(z)?z(w.x,w.y,u):z){for(var J=0;J<p.targetFields.length;J++){var oe=(a=p.targetFields[J],c=2,function(_e){if(Array.isArray(_e))return _e}(a)||function(_e,Ie){var Fe=_e==null?null:typeof Symbol<"u"&&_e[Symbol.iterator]||_e["@@iterator"];if(Fe!=null){var Ye,ct,vt=[],tt=!0,mt=!1;try{for(Fe=Fe.call(_e);!(tt=(Ye=Fe.next()).done)&&(vt.push(Ye.value),!Ie||vt.length!==Ie);tt=!0);}catch(En){mt=!0,ct=En}finally{try{tt||Fe.return==null||Fe.return()}finally{if(mt)throw ct}}return vt}}(a,c)||function(_e,Ie){if(_e){if(typeof _e=="string")return zc(_e,Ie);var Fe=Object.prototype.toString.call(_e).slice(8,-1);return Fe==="Object"&&_e.constructor&&(Fe=_e.constructor.name),Fe==="Map"||Fe==="Set"?Array.from(_e):Fe==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Fe)?zc(_e,Ie):void 0}}(a,c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),V=oe[0],ge=oe[1];if(V in U||ge in U){U.x=U[V],U.y=U[ge];break}}p.options.targets.push(U)}}var Me=bi.snap.set(o);return p.options=M,Me},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}};ri.snapSize=Nc;var Ch=(0,$t.makeModifier)(Nc,"snapSize");ri.default=Ch;var wr={};Object.defineProperty(wr,"__esModule",{value:!0}),wr.snapEdges=wr.default=void 0;var Uc={start:function(o){var a=o.edges;return a?(o.state.targetFields=o.state.targetFields||[[a.left?"left":"right",a.top?"top":"bottom"]],ri.snapSize.start(o)):null},set:ri.snapSize.set,defaults:(0,j.default)((0,Gi.default)(ri.snapSize.defaults),{targets:null,range:null,offset:{x:0,y:0}})};wr.snapEdges=Uc;var Ah=(0,$t.makeModifier)(Uc,"snapEdges");wr.default=Ah;var Pa={};Object.defineProperty(Pa,"__esModule",{value:!0}),Object.defineProperty(Pa,"default",{enumerable:!0,get:function(){return ji.default}});var Da={};Object.defineProperty(Da,"__esModule",{value:!0}),Object.defineProperty(Da,"default",{enumerable:!0,get:function(){return ji.default}});var Mr={};Object.defineProperty(Mr,"__esModule",{value:!0}),Mr.default=void 0;var Ph={aspectRatio:xr.default,restrictEdges:Xn.default,restrict:on.default,restrictRect:br.default,restrictSize:Sr.default,snapEdges:wr.default,snap:bi.default,snapSize:ri.default,spring:Pa.default,avoid:Ta.default,transform:Da.default,rubberband:Aa.default};Mr.default=Ph;var Eo={};Object.defineProperty(Eo,"__esModule",{value:!0}),Eo.default=void 0;var Dh={id:"modifiers",install:function(o){var a=o.interactStatic;for(var c in o.usePlugin($t.default),o.usePlugin(gs.default),a.modifiers=Mr.default,Mr.default){var u=Mr.default[c],p=u._defaults,x=u._methods;p._methods=x,o.defaults.perAction[c]=p}}},Lh=Dh;Eo.default=Lh;var qi={};function La(o){return La=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},La(o)}function Rh(o,a){for(var c=0;c<a.length;c++){var u=a[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(o,u.key,u)}}function Ra(o,a){return Ra=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},Ra(o,a)}function Ih(o,a){if(a&&(La(a)==="object"||typeof a=="function"))return a;if(a!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ia(o)}function Ia(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function vs(o){return vs=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},vs(o)}Object.defineProperty(qi,"__esModule",{value:!0}),qi.default=qi.PointerEvent=void 0;var Oh=function(o){(function(b,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function");b.prototype=Object.create(w&&w.prototype,{constructor:{value:b,writable:!0,configurable:!0}}),Object.defineProperty(b,"prototype",{writable:!1}),w&&Ra(b,w)})(M,o);var a,c,u,p,x=(u=M,p=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var b,w=vs(u);if(p){var R=vs(this).constructor;b=Reflect.construct(w,arguments,R)}else b=w.apply(this,arguments);return Ih(this,b)});function M(b,w,R,z,U,J){var oe;if(function(Me,_e){if(!(Me instanceof _e))throw new TypeError("Cannot call a class as a function")}(this,M),oe=x.call(this,U),ae.pointerExtend(Ia(oe),R),R!==w&&ae.pointerExtend(Ia(oe),w),oe.timeStamp=J,oe.originalEvent=R,oe.type=b,oe.pointerId=ae.getPointerId(w),oe.pointerType=ae.getPointerType(w),oe.target=z,oe.currentTarget=null,b==="tap"){var V=U.getPointerIndex(w);oe.dt=oe.timeStamp-U.pointers[V].downTime;var ge=oe.timeStamp-U.tapTime;oe.double=!!U.prevTap&&U.prevTap.type!=="doubletap"&&U.prevTap.target===oe.target&&ge<500}else b==="doubletap"&&(oe.dt=w.timeStamp-U.tapTime,oe.double=!0);return oe}return a=M,(c=[{key:"_subtractOrigin",value:function(b){var w=b.x,R=b.y;return this.pageX-=w,this.pageY-=R,this.clientX-=w,this.clientY-=R,this}},{key:"_addOrigin",value:function(b){var w=b.x,R=b.y;return this.pageX+=w,this.pageY+=R,this.clientX+=w,this.clientY+=R,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}])&&Rh(a.prototype,c),Object.defineProperty(a,"prototype",{writable:!1}),M}(et.BaseEvent);qi.PointerEvent=qi.default=Oh;var To={};Object.defineProperty(To,"__esModule",{value:!0}),To.default=void 0;var _s={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(o){o.pointerEvents=_s,o.defaults.actions.pointerEvents=_s.defaults,(0,j.default)(o.actions.phaselessTypes,_s.types)},listeners:{"interactions:new":function(o){var a=o.interaction;a.prevTap=null,a.tapTime=0},"interactions:update-pointer":function(o){var a=o.down,c=o.pointerInfo;!a&&c.hold||(c.hold={duration:1/0,timeout:null})},"interactions:move":function(o,a){var c=o.interaction,u=o.pointer,p=o.event,x=o.eventTarget;o.duplicate||c.pointerIsDown&&!c.pointerWasMoved||(c.pointerIsDown&&Oa(o),Si({interaction:c,pointer:u,event:p,eventTarget:x,type:"move"},a))},"interactions:down":function(o,a){(function(c,u){for(var p=c.interaction,x=c.pointer,M=c.event,b=c.eventTarget,w=c.pointerIndex,R=p.pointers[w].hold,z=T.getPath(b),U={interaction:p,pointer:x,event:M,eventTarget:b,type:"hold",targets:[],path:z,node:null},J=0;J<z.length;J++){var oe=z[J];U.node=oe,u.fire("pointerEvents:collect-targets",U)}if(U.targets.length){for(var V=1/0,ge=0;ge<U.targets.length;ge++){var Me=U.targets[ge].eventable.options.holdDuration;Me<V&&(V=Me)}R.duration=V,R.timeout=setTimeout(function(){Si({interaction:p,eventTarget:b,pointer:x,event:M,type:"hold"},u)},V)}})(o,a),Si(o,a)},"interactions:up":function(o,a){Oa(o),Si(o,a),function(c,u){var p=c.interaction,x=c.pointer,M=c.event,b=c.eventTarget;p.pointerWasMoved||Si({interaction:p,eventTarget:b,pointer:x,event:M,type:"tap"},u)}(o,a)},"interactions:cancel":function(o,a){Oa(o),Si(o,a)}},PointerEvent:qi.PointerEvent,fire:Si,collectEventTargets:Bc,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function Si(o,a){var c=o.interaction,u=o.pointer,p=o.event,x=o.eventTarget,M=o.type,b=o.targets,w=b===void 0?Bc(o,a):b,R=new qi.PointerEvent(M,u,p,x,c,a.now());a.fire("pointerEvents:new",{pointerEvent:R});for(var z={interaction:c,pointer:u,event:p,eventTarget:x,targets:w,type:M,pointerEvent:R},U=0;U<w.length;U++){var J=w[U];for(var oe in J.props||{})R[oe]=J.props[oe];var V=(0,Q.default)(J.eventable,J.node);if(R._subtractOrigin(V),R.eventable=J.eventable,R.currentTarget=J.node,J.eventable.fire(R),R._addOrigin(V),R.immediatePropagationStopped||R.propagationStopped&&U+1<w.length&&w[U+1].node!==R.currentTarget)break}if(a.fire("pointerEvents:fired",z),M==="tap"){var ge=R.double?Si({interaction:c,pointer:u,event:p,eventTarget:x,type:"doubletap"},a):R;c.prevTap=ge,c.tapTime=ge.timeStamp}return R}function Bc(o,a){var c=o.interaction,u=o.pointer,p=o.event,x=o.eventTarget,M=o.type,b=c.getPointerIndex(u),w=c.pointers[b];if(M==="tap"&&(c.pointerWasMoved||!w||w.downTarget!==x))return[];for(var R=T.getPath(x),z={interaction:c,pointer:u,event:p,eventTarget:x,type:M,path:R,targets:[],node:null},U=0;U<R.length;U++){var J=R[U];z.node=J,a.fire("pointerEvents:collect-targets",z)}return M==="hold"&&(z.targets=z.targets.filter(function(oe){var V;return oe.eventable.options.holdDuration===((V=c.pointers[b])==null?void 0:V.hold.duration)})),z.targets}function Oa(o){var a=o.interaction,c=o.pointerIndex,u=a.pointers[c].hold;u&&u.timeout&&(clearTimeout(u.timeout),u.timeout=null)}var kh=_s;To.default=kh;var ys={};function Fh(o){var a=o.interaction;a.holdIntervalHandle&&(clearInterval(a.holdIntervalHandle),a.holdIntervalHandle=null)}Object.defineProperty(ys,"__esModule",{value:!0}),ys.default=void 0;var zh={id:"pointer-events/holdRepeat",install:function(o){o.usePlugin(To.default);var a=o.pointerEvents;a.defaults.holdRepeatInterval=0,a.types.holdrepeat=o.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce(function(o,a){return o["pointerEvents:".concat(a)]=Fh,o},{"pointerEvents:new":function(o){var a=o.pointerEvent;a.type==="hold"&&(a.count=(a.count||0)+1)},"pointerEvents:fired":function(o,a){var c=o.interaction,u=o.pointerEvent,p=o.eventTarget,x=o.targets;if(u.type==="hold"&&x.length){var M=x[0].eventable.options.holdRepeatInterval;M<=0||(c.holdIntervalHandle=setTimeout(function(){a.pointerEvents.fire({interaction:c,eventTarget:p,type:"hold",pointer:u,event:u},a)},M))}}})},Nh=zh;ys.default=Nh;var xs={};function Uh(o){return(0,j.default)(this.events.options,o),this}Object.defineProperty(xs,"__esModule",{value:!0}),xs.default=void 0;var Bh={id:"pointer-events/interactableTargets",install:function(o){var a=o.Interactable;a.prototype.pointerEvents=Uh;var c=a.prototype._backCompatOption;a.prototype._backCompatOption=function(u,p){var x=c.call(this,u,p);return x===this&&(this.events.options[u]=p),x}},listeners:{"pointerEvents:collect-targets":function(o,a){var c=o.targets,u=o.node,p=o.type,x=o.eventTarget;a.interactables.forEachMatch(u,function(M){var b=M.events,w=b.options;b.types[p]&&b.types[p].length&&M.testIgnoreAllow(w,u,x)&&c.push({node:u,eventable:b,props:{interactable:M}})})},"interactable:new":function(o){var a=o.interactable;a.events.getRect=function(c){return a.getRect(c)}},"interactable:set":function(o,a){var c=o.interactable,u=o.options;(0,j.default)(c.events.options,a.pointerEvents.defaults),(0,j.default)(c.events.options,u.pointerEvents||{})}}},Gh=Bh;xs.default=Gh;var Co={};Object.defineProperty(Co,"__esModule",{value:!0}),Co.default=void 0;var Wh={id:"pointer-events",install:function(o){o.usePlugin(To),o.usePlugin(ys.default),o.usePlugin(xs.default)}},Vh=Wh;Co.default=Vh;var Er={};function Gc(o){var a=o.Interactable;o.actions.phases.reflow=!0,a.prototype.reflow=function(c){return function(u,p,x){for(var M=l.default.string(u.target)?je.from(u._context.querySelectorAll(u.target)):[u.target],b=x.window.Promise,w=b?[]:null,R=function(){var U=M[z],J=u.getRect(U);if(!J)return"break";var oe=je.find(x.interactions.list,function(Ie){return Ie.interacting()&&Ie.interactable===u&&Ie.element===U&&Ie.prepared.name===p.name}),V=void 0;if(oe)oe.move(),w&&(V=oe._reflowPromise||new b(function(Ie){oe._reflowResolve=Ie}));else{var ge=(0,K.tlbrToXywh)(J),Me={page:{x:ge.x,y:ge.y},client:{x:ge.x,y:ge.y},timeStamp:x.now()},_e=ae.coordsToEvent(Me);V=function(Ie,Fe,Ye,ct,vt){var tt=Ie.interactions.new({pointerType:"reflow"}),mt={interaction:tt,event:vt,pointer:vt,eventTarget:Ye,phase:"reflow"};tt.interactable=Fe,tt.element=Ye,tt.prevEvent=vt,tt.updatePointer(vt,vt,Ye,!0),ae.setZeroCoords(tt.coords.delta),(0,q.copyAction)(tt.prepared,ct),tt._doPhase(mt);var En=Ie.window.Promise,oi=En?new En(function(za){tt._reflowResolve=za}):void 0;return tt._reflowPromise=oi,tt.start(ct,Fe,Ye),tt._interacting?(tt.move(mt),tt.end(vt)):(tt.stop(),tt._reflowResolve()),tt.removePointer(vt,vt),oi}(x,u,U,p,_e)}w&&w.push(V)},z=0;z<M.length&&R()!=="break";z++);return w&&b.all(w).then(function(){return u})}(this,c,o)}}Object.defineProperty(Er,"__esModule",{value:!0}),Er.default=void 0,Er.install=Gc;var Hh={id:"reflow",install:Gc,listeners:{"interactions:stop":function(o,a){var c=o.interaction;c.pointerType==="reflow"&&(c._reflowResolve&&c._reflowResolve(),je.remove(a.interactions.list,c))}}},jh=Hh;Er.default=jh;var Mn={exports:{}};function ka(o){return ka=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},ka(o)}Object.defineProperty(Mn.exports,"__esModule",{value:!0}),Mn.exports.default=void 0,Kt.default.use(Ft.default),Kt.default.use(yi.default),Kt.default.use(Co.default),Kt.default.use(Hi.default),Kt.default.use(Eo.default),Kt.default.use(kn.default),Kt.default.use(un.default),Kt.default.use(On.default),Kt.default.use(Er.default);var qh=Kt.default;if(Mn.exports.default=qh,ka(Mn)==="object"&&Mn)try{Mn.exports=Kt.default}catch{}Kt.default.default=Kt.default,un.default,On.default,kn.default,Ft.default,Qo.default,Hi.default,Kt.default,Eo.default,yi.default,Co.default,Er.default,Mn=Mn.exports;var Xi={exports:{}};function Fa(o){return Fa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Fa(o)}Object.defineProperty(Xi.exports,"__esModule",{value:!0}),Xi.exports.default=void 0;var Xh=Mn.default;if(Xi.exports.default=Xh,Fa(Xi)==="object"&&Xi)try{Xi.exports=Mn.default}catch{}return Mn.default.default=Mn.default,Xi.exports})})(Af);const Kh=$h(Af.exports),No={preset:"Hyperbolic 542",remembered:{"Hyperbolic 542":{0:{projection:"poincare",p:5,q:4,r:2,wp:0,wq:0,wr:1,layers:15,limit:1750,fill:"colored",fillColorP:"#cc6666",fillColorQ:"#6666cc",fillColorR:"#66cc66",fillColorShift:37,fillAlpha:100,wedgeShade:0,stroke:"plain",strokeColor:"#000000",strokeColorShift:37,strokeAlpha:100,strokeWidth:10,strokeScaled:!0,strokeWythoff:"plain",strokeWythoffColor:"#ffffff",strokeWythoffColorShift:37,strokeWythoffAlpha:0,strokeWythoffWidth:2,backgroundColor:"#000000",straight:!1,tokenPrecision:2,curvePrecision:12,subsampling:1}},"Hyperbolic 472":{0:{projection:"joukowsky",p:4,q:7,r:2,wp:0,wq:.564,wr:1.148,layers:10,limit:1e3,fill:"colored",fillColorP:"#cc6666",fillColorQ:"#6666cc",fillColorR:"#66cc66",fillColorShift:37,fillAlpha:100,wedgeShade:10,stroke:"plain",strokeColor:"#000000",strokeColorShift:37,strokeAlpha:0,strokeWidth:2,strokeScaled:!1,strokeWythoff:"plain",strokeWythoffColor:"#ffffff",strokeWythoffColorShift:37,strokeWythoffAlpha:100,strokeWythoffWidth:2,backgroundColor:"#000000",straight:!1,tokenPrecision:2,curvePrecision:12,subsampling:1}},"Hyperbolic 443":{0:{projection:"poincare",p:4,q:4,r:3,wp:.306,wq:.74,wr:1.281,layers:5,limit:5e3,fill:"odd",fillColorP:"#ff80ab",fillColorQ:"#8c9eff",fillColorR:"#ccff90",fillColorShift:71,fillAlpha:100,wedgeShade:15,stroke:"plain",strokeColor:"#004d40",strokeColorShift:71,strokeAlpha:100,strokeWidth:5,strokeScaled:!0,strokeWythoff:"plain",strokeWythoffColor:"#e0f2f1",strokeWythoffColorShift:71,strokeWythoffAlpha:100,strokeWythoffWidth:5,backgroundColor:"#000000",straight:!1,tokenPrecision:2,curvePrecision:10,subsampling:1}},"Hyperbolic 662":{0:{projection:"poincare",p:6,q:6,r:2,wp:0,wq:0,wr:1,layers:10,limit:1e3,fill:"colored",fillColorP:"#cc6666",fillColorQ:"#6666cc",fillColorR:"#66cc66",fillColorShift:-37,fillAlpha:100,wedgeShade:10,stroke:"plain",strokeColor:"#000000",strokeColorShift:-37,strokeAlpha:100,strokeWidth:2,strokeScaled:!0,strokeWythoff:"plain",strokeWythoffColor:"#ffffff",strokeWythoffColorShift:-37,strokeWythoffAlpha:0,strokeWythoffWidth:2,backgroundColor:"#000000",straight:!0,tokenPrecision:2,curvePrecision:16,subsampling:1}},"Parabolic 442":{0:{projection:"orthographic",p:4,q:4,r:2,wp:0,wq:0,wr:1,layers:15,limit:2500,fill:"colored",fillColorP:"#cc6666",fillColorQ:"#6666cc",fillColorR:"#66cc66",fillColorShift:37,fillAlpha:100,wedgeShade:10,stroke:"plain",strokeColor:"#ffffff",strokeColorShift:37,strokeAlpha:100,strokeWidth:2,strokeScaled:!1,strokeWythoff:"plain",strokeWythoffColor:"#ffffff",strokeWythoffColorShift:37,strokeWythoffAlpha:100,strokeWythoffWidth:2,backgroundColor:"#000000",straight:!1,tokenPrecision:2,curvePrecision:12,subsampling:1}},"Parabolic 632":{0:{projection:"orthographic",p:6,q:3,r:2,wp:0,wq:0,wr:1,layers:15,limit:2500,fill:"colored",fillColorP:"#cc6666",fillColorQ:"#6666cc",fillColorR:"#66cc66",fillColorShift:37,fillAlpha:100,wedgeShade:10,stroke:"plain",strokeColor:"#000000",strokeColorShift:37,strokeAlpha:100,strokeWidth:2,strokeScaled:!1,strokeWythoff:"plain",strokeWythoffColor:"#ffffff",strokeWythoffColorShift:37,strokeWythoffAlpha:100,strokeWythoffWidth:2,backgroundColor:"#000000",straight:!1,tokenPrecision:2,curvePrecision:12,subsampling:1}},"Parabolic 333":{0:{projection:"orthographic",p:3,q:3,r:3,wp:.333,wq:.577,wr:1,layers:15,limit:2500,fill:"colored",fillColorP:"#cc6666",fillColorQ:"#cc6666",fillColorR:"#cc6666",fillColorShift:37,fillAlpha:100,wedgeShade:10,stroke:"plain",strokeColor:"#ffffff",strokeColorShift:37,strokeAlpha:0,strokeWidth:2,strokeScaled:!1,strokeWythoff:"plain",strokeWythoffColor:"#000000",strokeWythoffColorShift:37,strokeWythoffAlpha:50,strokeWythoffWidth:2,backgroundColor:"#000000",straight:!1,tokenPrecision:2,curvePrecision:12,subsampling:1}},"Elliptic 532":{0:{projection:"poincare",p:5,q:3,r:2,wp:0,wq:0,wr:1,layers:10,limit:1750,fill:"colored",fillColorP:"#cc6666",fillColorQ:"#6666cc",fillColorR:"#66cc66",fillColorShift:37,fillAlpha:100,wedgeShade:10,stroke:"plain",strokeColor:"#000000",strokeColorShift:37,strokeAlpha:75,strokeWidth:4,strokeScaled:!1,strokeWythoff:"plain",strokeWythoffColor:"#ffffff",strokeWythoffColorShift:37,strokeWythoffAlpha:75,strokeWythoffWidth:4,backgroundColor:"#000000",straight:!1,tokenPrecision:2,curvePrecision:12,subsampling:1}},"Elliptic 432":{0:{projection:"orthographic",p:4,q:3,r:2,wp:.216,wq:.521,wr:.826,layers:10,limit:1750,fill:"colored",fillColorP:"#cc6666",fillColorQ:"#6666cc",fillColorR:"#66cc66",fillColorShift:37,fillAlpha:100,wedgeShade:10,stroke:"plain",strokeColor:"#000000",strokeColorShift:37,strokeAlpha:75,strokeWidth:4,strokeScaled:!1,strokeWythoff:"plain",strokeWythoffColor:"#ffffff",strokeWythoffColorShift:37,strokeWythoffAlpha:75,strokeWythoffWidth:4,backgroundColor:"#000000",straight:!1,tokenPrecision:2,curvePrecision:12,subsampling:1}},"Elliptic 323":{0:{projection:"poincare",p:3,q:2,r:3,wp:0,wq:0,wr:1,layers:10,limit:1750,fill:"colored",fillColorP:"#cc6666",fillColorQ:"#6666cc",fillColorR:"#66cc66",fillColorShift:37,fillAlpha:100,wedgeShade:10,stroke:"plain",strokeColor:"#000000",strokeColorShift:37,strokeAlpha:75,strokeWidth:4,strokeScaled:!1,strokeWythoff:"plain",strokeWythoffColor:"#ffffff",strokeWythoffColorShift:37,strokeWythoffAlpha:75,strokeWythoffWidth:4,backgroundColor:"#000000",straight:!1,tokenPrecision:2,curvePrecision:12,subsampling:1}},Triangles:{0:{projection:"poincare",p:3,q:7,r:2,wp:0,wq:0,wr:1,layers:12,limit:1500,fill:"plain",fillColorP:"#000000",fillColorQ:"#000000",fillColorR:"#000000",fillColorShift:37,fillAlpha:0,wedgeShade:0,stroke:"colored",strokeColor:"#cc6666",strokeColorShift:37,strokeAlpha:100,strokeWidth:10,strokeScaled:!0,strokeWythoff:"plain",strokeWythoffColor:"#ffffff",strokeWythoffColorShift:37,strokeWythoffAlpha:0,strokeWythoffWidth:2,backgroundColor:"#000000",straight:!1,tokenPrecision:2,curvePrecision:12,subsampling:1}},Inverted:{0:{projection:"inverted",p:6,q:4,r:2,wp:0,wq:0,wr:1,layers:15,limit:1500,fill:"plain",fillColorP:"#000000",fillColorQ:"#000000",fillColorR:"#000000",fillColorShift:37,fillAlpha:0,wedgeShade:0,stroke:"colored",strokeColor:"#cc6666",strokeColorShift:37,strokeAlpha:100,strokeWidth:2,strokeScaled:!1,strokeWythoff:"plain",strokeWythoffColor:"#ffffff",strokeWythoffColorShift:37,strokeWythoffAlpha:0,strokeWythoffWidth:2,backgroundColor:"#000000",straight:!1,tokenPrecision:2,curvePrecision:12,subsampling:1}},Football:{0:{projection:"klein",p:7,q:3,r:2,wp:0,wq:0,wr:1,layers:5,limit:1e3,fill:"plain",fillColorP:"#f7f7f7",fillColorQ:"#f7f7f7",fillColorR:"#f7f7f7",fillColorShift:37,fillAlpha:100,wedgeShade:0,stroke:"plain",strokeColor:"#000000",strokeColorShift:37,strokeAlpha:100,strokeWidth:2,strokeScaled:!0,strokeWythoff:"plain",strokeWythoffColor:"#ffffff",strokeWythoffColorShift:37,strokeWythoffAlpha:0,strokeWythoffWidth:2,backgroundColor:"#ffffff",straight:!1,tokenPrecision:2,curvePrecision:10,subsampling:1}},EllipticGL:{0:{projection:"3d poincare",p:5,q:3,r:2,wp:0,wq:0,wr:1,layers:10,limit:1e3,fill:"colored",fillColorP:"#cc6666",fillColorQ:"#6666cc",fillColorR:"#66cc66",fillColorShift:37,fillAlpha:100,wedgeShade:10,stroke:"plain",strokeColor:"#000000",strokeColorShift:37,strokeAlpha:100,strokeWidth:2,strokeScaled:!0,strokeWythoff:"plain",strokeWythoffColor:"#ffffff",strokeWythoffColorShift:37,strokeWythoffAlpha:100,strokeWythoffWidth:2,backgroundColor:"#000000",straight:!1,tokenPrecision:2,curvePrecision:19,subsampling:1}},HyperbolicGL:{0:{projection:"3d poincare",p:7,q:3,r:2,wp:0,wq:0,wr:1,layers:8,limit:1500,fill:"plain",fillColorP:"#303030",fillColorQ:"#303030",fillColorR:"#303030",fillColorShift:37,fillAlpha:75,wedgeShade:10,stroke:"colored",strokeColor:"#cc6666",strokeColorShift:37,strokeAlpha:100,strokeWidth:2,strokeScaled:!0,strokeWythoff:"colored",strokeWythoffColor:"#6666cc",strokeWythoffColorShift:37,strokeWythoffAlpha:33,strokeWythoffWidth:2,backgroundColor:"#000000",straight:!1,tokenPrecision:2,curvePrecision:14,subsampling:1}},ParabolicGL:{0:{projection:"3d poincare",p:6,q:3,r:2,wp:0,wq:.182,wr:1,layers:20,limit:1500,fill:"colored",fillColorP:"#cc6666",fillColorQ:"#6666cc",fillColorR:"#66cc66",fillColorShift:19,fillAlpha:100,wedgeShade:10,stroke:"plain",strokeColor:"#000000",strokeColorShift:37,strokeAlpha:100,strokeWidth:2,strokeScaled:!0,strokeWythoff:"plain",strokeWythoffColor:"#ffffff",strokeWythoffColorShift:37,strokeWythoffAlpha:100,strokeWythoffWidth:2,backgroundColor:"#000000",straight:!1,tokenPrecision:2,curvePrecision:14,subsampling:1}}}};function Jh(r){if(!!r&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=r,document.head.appendChild(e),r}}function qr(r,e){var t=r.__state.conversionName.toString(),n=Math.round(r.r),i=Math.round(r.g),s=Math.round(r.b),f=r.a,l=Math.round(r.h),d=r.s.toFixed(1),h=r.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var g=r.hex.toString(16);g.length<6;)g="0"+g;return"#"+g}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+s+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+s+","+f+")";if(t==="HEX")return"0x"+r.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+s+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+s+","+f+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+s+",a:"+f+"}";if(t==="HSV_OBJ")return"{h:"+l+",s:"+d+",v:"+h+"}";if(t==="HSVA_OBJ")return"{h:"+l+",s:"+d+",v:"+h+",a:"+f+"}"}return"unknown format"}var Wc=Array.prototype.forEach,Ao=Array.prototype.slice,ue={BREAK:{},extend:function(e){return this.each(Ao.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(t[i])||(e[i]=t[i])}.bind(this))},this),e},defaults:function(e){return this.each(Ao.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(e[i])&&(e[i]=t[i])}.bind(this))},this),e},compose:function(){var e=Ao.call(arguments);return function(){for(var t=Ao.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(!!e){if(Wc&&e.forEach&&e.forEach===Wc)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,s=void 0;for(i=0,s=e.length;i<s;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var f in e)if(t.call(n,e[f],f)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var i=void 0;return function(){var s=this,f=arguments;function l(){i=null,n||e.apply(s,f)}var d=n||!i;clearTimeout(i),i=setTimeout(l,t),d&&e.apply(s,f)}},toArray:function(e){return e.toArray?e.toArray():Ao.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(r){function e(t){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e}(function(r){return isNaN(r)}),isArray:Array.isArray||function(r){return r.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},Qh=[{litmus:ue.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:qr},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:qr},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:qr},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:qr}}},{litmus:ue.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:ue.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:ue.isObject,conversions:{RGBA_OBJ:{read:function(e){return ue.isNumber(e.r)&&ue.isNumber(e.g)&&ue.isNumber(e.b)&&ue.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return ue.isNumber(e.r)&&ue.isNumber(e.g)&&ue.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return ue.isNumber(e.h)&&ue.isNumber(e.s)&&ue.isNumber(e.v)&&ue.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return ue.isNumber(e.h)&&ue.isNumber(e.s)&&ue.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Po=void 0,bs=void 0,wl=function(){bs=!1;var e=arguments.length>1?ue.toArray(arguments):arguments[0];return ue.each(Qh,function(t){if(t.litmus(e))return ue.each(t.conversions,function(n,i){if(Po=n.read(e),bs===!1&&Po!==!1)return bs=Po,Po.conversionName=i,Po.conversion=n,ue.BREAK}),ue.BREAK}),bs},Vc=void 0,ta={hsv_to_rgb:function(e,t,n){var i=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),f=n*(1-t),l=n*(1-s*t),d=n*(1-(1-s)*t),h=[[n,d,f],[l,n,f],[f,n,d],[f,l,n],[d,f,n],[n,f,l]][i];return{r:h[0]*255,g:h[1]*255,b:h[2]*255}},rgb_to_hsv:function(e,t,n){var i=Math.min(e,t,n),s=Math.max(e,t,n),f=s-i,l=void 0,d=void 0;if(s!==0)d=f/s;else return{h:NaN,s:0,v:0};return e===s?l=(t-n)/f:t===s?l=2+(n-e)/f:l=4+(e-t)/f,l/=6,l<0&&(l+=1),{h:l*360,s:d,v:s/255}},rgb_to_hex:function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(Vc=t*8)|e&~(255<<Vc)}},ep=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Hn=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")},jn=function(){function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),Fi=function r(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:r(s,t,n)}else{if("value"in i)return i.value;var f=i.get;return f===void 0?void 0:f.call(n)}},Ni=function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)},Ui=function(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r},jt=function(){function r(){if(Hn(this,r),this.__state=wl.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return jn(r,[{key:"toString",value:function(){return qr(this)}},{key:"toHexString",value:function(){return qr(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),r}();function Vl(r,e,t){Object.defineProperty(r,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(jt.recalculateRGB(this,e,t),this.__state[e])},set:function(i){this.__state.space!=="RGB"&&(jt.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i}})}function Hl(r,e){Object.defineProperty(r,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(jt.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(jt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}jt.recalculateRGB=function(r,e,t){if(r.__state.space==="HEX")r.__state[e]=ta.component_from_hex(r.__state.hex,t);else if(r.__state.space==="HSV")ue.extend(r.__state,ta.hsv_to_rgb(r.__state.h,r.__state.s,r.__state.v));else throw new Error("Corrupted color state")};jt.recalculateHSV=function(r){var e=ta.rgb_to_hsv(r.r,r.g,r.b);ue.extend(r.__state,{s:e.s,v:e.v}),ue.isNaN(e.h)?ue.isUndefined(r.__state.h)&&(r.__state.h=0):r.__state.h=e.h};jt.COMPONENTS=["r","g","b","h","s","v","hex","a"];Vl(jt.prototype,"r",2);Vl(jt.prototype,"g",1);Vl(jt.prototype,"b",0);Hl(jt.prototype,"h");Hl(jt.prototype,"s");Hl(jt.prototype,"v");Object.defineProperty(jt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(jt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=ta.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var mr=function(){function r(e,t){Hn(this,r),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return jn(r,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),r}(),tp={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Pf={};ue.each(tp,function(r,e){ue.each(r,function(t){Pf[t]=e})});var np=/(\d+(\.\d+)?)px/;function Yn(r){if(r==="0"||ue.isUndefined(r))return 0;var e=r.match(np);return ue.isNull(e)?0:parseFloat(e[1])}var Z={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var i=n,s=t;ue.isUndefined(s)&&(s=!0),ue.isUndefined(i)&&(i=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,i){var s=n||{},f=Pf[t];if(!f)throw new Error("Event type "+t+" not supported.");var l=document.createEvent(f);switch(f){case"MouseEvents":{var d=s.x||s.clientX||0,h=s.y||s.clientY||0;l.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,d,h,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var g=l.initKeyboardEvent||l.initKeyEvent;ue.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),g(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{l.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}ue.defaults(l,i),e.dispatchEvent(l)},bind:function(e,t,n,i){var s=i||!1;return e.addEventListener?e.addEventListener(t,n,s):e.attachEvent&&e.attachEvent("on"+t,n),Z},unbind:function(e,t,n,i){var s=i||!1;return e.removeEventListener?e.removeEventListener(t,n,s):e.detachEvent&&e.detachEvent("on"+t,n),Z},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return Z},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return Z},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Yn(t["border-left-width"])+Yn(t["border-right-width"])+Yn(t["padding-left"])+Yn(t["padding-right"])+Yn(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Yn(t["border-top-width"])+Yn(t["border-bottom-width"])+Yn(t["padding-top"])+Yn(t["padding-bottom"])+Yn(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},Df=function(r){Ni(e,r);function e(t,n){Hn(this,e);var i=Ui(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function f(){s.setValue(!s.__prev)}return Z.bind(i.__checkbox,"change",f,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return jn(e,[{key:"setValue",value:function(n){var i=Fi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Fi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(mr),ip=function(r){Ni(e,r);function e(t,n,i){Hn(this,e);var s=Ui(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),f=i,l=s;if(s.__select=document.createElement("select"),ue.isArray(f)){var d={};ue.each(f,function(h){d[h]=h}),f=d}return ue.each(f,function(h,g){var m=document.createElement("option");m.innerHTML=g,m.setAttribute("value",h),l.__select.appendChild(m)}),s.updateDisplay(),Z.bind(s.__select,"change",function(){var h=this.options[this.selectedIndex].value;l.setValue(h)}),s.domElement.appendChild(s.__select),s}return jn(e,[{key:"setValue",value:function(n){var i=Fi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return Z.isActive(this.__select)?this:(this.__select.value=this.getValue(),Fi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(mr),rp=function(r){Ni(e,r);function e(t,n){Hn(this,e);var i=Ui(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;function f(){s.setValue(s.__input.value)}function l(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),Z.bind(i.__input,"keyup",f),Z.bind(i.__input,"change",f),Z.bind(i.__input,"blur",l),Z.bind(i.__input,"keydown",function(d){d.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return jn(e,[{key:"updateDisplay",value:function(){return Z.isActive(this.__input)||(this.__input.value=this.getValue()),Fi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(mr);function Hc(r){var e=r.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var Lf=function(r){Ni(e,r);function e(t,n,i){Hn(this,e);var s=Ui(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),f=i||{};return s.__min=f.min,s.__max=f.max,s.__step=f.step,ue.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=Hc(s.__impliedStep),s}return jn(e,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),Fi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Hc(n),this}}]),e}(mr);function op(r,e){var t=Math.pow(10,e);return Math.round(r*t)/t}var na=function(r){Ni(e,r);function e(t,n,i){Hn(this,e);var s=Ui(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));s.__truncationSuspended=!1;var f=s,l=void 0;function d(){var C=parseFloat(f.__input.value);ue.isNaN(C)||f.setValue(C)}function h(){f.__onFinishChange&&f.__onFinishChange.call(f,f.getValue())}function g(){h()}function m(C){var y=l-C.clientY;f.setValue(f.getValue()+y*f.__impliedStep),l=C.clientY}function v(){Z.unbind(window,"mousemove",m),Z.unbind(window,"mouseup",v),h()}function S(C){Z.bind(window,"mousemove",m),Z.bind(window,"mouseup",v),l=C.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),Z.bind(s.__input,"change",d),Z.bind(s.__input,"blur",g),Z.bind(s.__input,"mousedown",S),Z.bind(s.__input,"keydown",function(C){C.keyCode===13&&(f.__truncationSuspended=!0,this.blur(),f.__truncationSuspended=!1,h())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return jn(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():op(this.getValue(),this.__precision),Fi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Lf);function jc(r,e,t,n,i){return n+(i-n)*((r-e)/(t-e))}var Ml=function(r){Ni(e,r);function e(t,n,i,s,f){Hn(this,e);var l=Ui(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:s,step:f})),d=l;l.__background=document.createElement("div"),l.__foreground=document.createElement("div"),Z.bind(l.__background,"mousedown",h),Z.bind(l.__background,"touchstart",v),Z.addClass(l.__background,"slider"),Z.addClass(l.__foreground,"slider-fg");function h(y){document.activeElement.blur(),Z.bind(window,"mousemove",g),Z.bind(window,"mouseup",m),g(y)}function g(y){y.preventDefault();var _=d.__background.getBoundingClientRect();return d.setValue(jc(y.clientX,_.left,_.right,d.__min,d.__max)),!1}function m(){Z.unbind(window,"mousemove",g),Z.unbind(window,"mouseup",m),d.__onFinishChange&&d.__onFinishChange.call(d,d.getValue())}function v(y){y.touches.length===1&&(Z.bind(window,"touchmove",S),Z.bind(window,"touchend",C),S(y))}function S(y){var _=y.touches[0].clientX,E=d.__background.getBoundingClientRect();d.setValue(jc(_,E.left,E.right,d.__min,d.__max))}function C(){Z.unbind(window,"touchmove",S),Z.unbind(window,"touchend",C),d.__onFinishChange&&d.__onFinishChange.call(d,d.getValue())}return l.updateDisplay(),l.__background.appendChild(l.__foreground),l.domElement.appendChild(l.__background),l}return jn(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",Fi(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Lf),Rf=function(r){Ni(e,r);function e(t,n,i){Hn(this,e);var s=Ui(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),f=s;return s.__button=document.createElement("div"),s.__button.innerHTML=i===void 0?"Fire":i,Z.bind(s.__button,"click",function(l){return l.preventDefault(),f.fire(),!1}),Z.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return jn(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(mr),El=function(r){Ni(e,r);function e(t,n){Hn(this,e);var i=Ui(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new jt(i.getValue()),i.__temp=new jt(0);var s=i;i.domElement=document.createElement("div"),Z.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",Z.bind(i.__input,"keydown",function(y){y.keyCode===13&&m.call(this)}),Z.bind(i.__input,"blur",m),Z.bind(i.__selector,"mousedown",function(){Z.addClass(this,"drag").bind(window,"mouseup",function(){Z.removeClass(s.__selector,"drag")})}),Z.bind(i.__selector,"touchstart",function(){Z.addClass(this,"drag").bind(window,"touchend",function(){Z.removeClass(s.__selector,"drag")})});var f=document.createElement("div");ue.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),ue.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),ue.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),ue.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),ue.extend(f.style,{width:"100%",height:"100%",background:"none"}),qc(f,"top","rgba(0,0,0,0)","#000"),ue.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),ap(i.__hue_field),ue.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),Z.bind(i.__saturation_field,"mousedown",l),Z.bind(i.__saturation_field,"touchstart",l),Z.bind(i.__field_knob,"mousedown",l),Z.bind(i.__field_knob,"touchstart",l),Z.bind(i.__hue_field,"mousedown",d),Z.bind(i.__hue_field,"touchstart",d);function l(y){S(y),Z.bind(window,"mousemove",S),Z.bind(window,"touchmove",S),Z.bind(window,"mouseup",h),Z.bind(window,"touchend",h)}function d(y){C(y),Z.bind(window,"mousemove",C),Z.bind(window,"touchmove",C),Z.bind(window,"mouseup",g),Z.bind(window,"touchend",g)}function h(){Z.unbind(window,"mousemove",S),Z.unbind(window,"touchmove",S),Z.unbind(window,"mouseup",h),Z.unbind(window,"touchend",h),v()}function g(){Z.unbind(window,"mousemove",C),Z.unbind(window,"touchmove",C),Z.unbind(window,"mouseup",g),Z.unbind(window,"touchend",g),v()}function m(){var y=wl(this.value);y!==!1?(s.__color.__state=y,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function v(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}i.__saturation_field.appendChild(f),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function S(y){y.type.indexOf("touch")===-1&&y.preventDefault();var _=s.__saturation_field.getBoundingClientRect(),E=y.touches&&y.touches[0]||y,A=E.clientX,L=E.clientY,k=(A-_.left)/(_.right-_.left),D=1-(L-_.top)/(_.bottom-_.top);return D>1?D=1:D<0&&(D=0),k>1?k=1:k<0&&(k=0),s.__color.v=D,s.__color.s=k,s.setValue(s.__color.toOriginal()),!1}function C(y){y.type.indexOf("touch")===-1&&y.preventDefault();var _=s.__hue_field.getBoundingClientRect(),E=y.touches&&y.touches[0]||y,A=E.clientY,L=1-(A-_.top)/(_.bottom-_.top);return L>1?L=1:L<0&&(L=0),s.__color.h=L*360,s.setValue(s.__color.toOriginal()),!1}return i}return jn(e,[{key:"updateDisplay",value:function(){var n=wl(this.getValue());if(n!==!1){var i=!1;ue.each(jt.COMPONENTS,function(l){if(!ue.isUndefined(n[l])&&!ue.isUndefined(this.__color.__state[l])&&n[l]!==this.__color.__state[l])return i=!0,{}},this),i&&ue.extend(this.__color.__state,n)}ue.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,f=255-s;ue.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,qc(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),ue.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+f+","+f+","+f+",.7)"})}}]),e}(mr),sp=["-moz-","-o-","-webkit-","-ms-",""];function qc(r,e,t,n){r.style.background="",ue.each(sp,function(i){r.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function ap(r){r.style.background="",r.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",r.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var lp={load:function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var s=n.getElementsByTagName("head")[0];try{s.appendChild(i)}catch{}}},cp=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,up=function(e,t){var n=e[t];return ue.isArray(arguments[2])||ue.isObject(arguments[2])?new ip(e,t,arguments[2]):ue.isNumber(n)?ue.isNumber(arguments[2])&&ue.isNumber(arguments[3])?ue.isNumber(arguments[4])?new Ml(e,t,arguments[2],arguments[3],arguments[4]):new Ml(e,t,arguments[2],arguments[3]):ue.isNumber(arguments[4])?new na(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new na(e,t,{min:arguments[2],max:arguments[3]}):ue.isString(n)?new rp(e,t):ue.isFunction(n)?new Rf(e,t,""):ue.isBoolean(n)?new Df(e,t):null};function fp(r){setTimeout(r,1e3/60)}var dp=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||fp,hp=function(){function r(){Hn(this,r),this.backgroundElement=document.createElement("div"),ue.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),Z.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),ue.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;Z.bind(this.backgroundElement,"click",function(){e.hide()})}return jn(r,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),ue.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",Z.unbind(t.domElement,"webkitTransitionEnd",i),Z.unbind(t.domElement,"transitionend",i),Z.unbind(t.domElement,"oTransitionEnd",i)};Z.bind(this.domElement,"webkitTransitionEnd",n),Z.bind(this.domElement,"transitionend",n),Z.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-Z.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-Z.getHeight(this.domElement)/2+"px"}}]),r}(),pp=Jh(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);lp.inject(pp);var Xc="dg",Yc=72,$c=20,Wo="Default",Oo=function(){try{return!!window.localStorage}catch{return!1}}(),Uo=void 0,Zc=!0,Vr=void 0,Na=!1,If=[],_t=function r(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),Z.addClass(this.domElement,Xc),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=ue.defaults(n,{closeOnTop:!1,autoPlace:!0,width:r.DEFAULT_WIDTH}),n=ue.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),ue.isUndefined(n.load)?n.load={preset:Wo}:n.preset&&(n.load.preset=n.preset),ue.isUndefined(n.parent)&&n.hideable&&If.push(this),n.resizable=ue.isUndefined(n.parent)&&n.resizable,n.autoPlace&&ue.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=Oo&&localStorage.getItem(Hr(this,"isLocal"))==="true",s=void 0,f=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(v){t.parent?t.getRoot().preset=v:n.load.preset=v,_p(this),t.revert()}},width:{get:function(){return n.width},set:function(v){n.width=v,Al(t,v)}},name:{get:function(){return n.name},set:function(v){n.name=v,f&&(f.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(v){n.closed=v,n.closed?Z.addClass(t.__ul,r.CLASS_CLOSED):Z.removeClass(t.__ul,r.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=v?r.TEXT_OPEN:r.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(v){Oo&&(i=v,v?Z.bind(window,"unload",s):Z.unbind(window,"unload",s),localStorage.setItem(Hr(t,"isLocal"),v))}}}),ue.isUndefined(n.parent)){if(this.closed=n.closed||!1,Z.addClass(this.domElement,r.CLASS_MAIN),Z.makeSelectable(this.domElement,!1),Oo&&i){t.useLocalStorage=!0;var l=localStorage.getItem(Hr(this,"gui"));l&&(n.load=JSON.parse(l))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=r.TEXT_CLOSED,Z.addClass(this.__closeButton,r.CLASS_CLOSE_BUTTON),n.closeOnTop?(Z.addClass(this.__closeButton,r.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(Z.addClass(this.__closeButton,r.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),Z.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var d=document.createTextNode(n.name);Z.addClass(d,"controller-name"),f=jl(t,d);var h=function(v){return v.preventDefault(),t.closed=!t.closed,!1};Z.addClass(this.__ul,r.CLASS_CLOSED),Z.addClass(f,"title"),Z.bind(f,"click",h),n.closed||(this.closed=!1)}n.autoPlace&&(ue.isUndefined(n.parent)&&(Zc&&(Vr=document.createElement("div"),Z.addClass(Vr,Xc),Z.addClass(Vr,r.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Vr),Zc=!1),Vr.appendChild(this.domElement),Z.addClass(this.domElement,r.CLASS_AUTO_PLACE)),this.parent||Al(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},Z.bind(window,"resize",this.__resizeHandler),Z.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),Z.bind(this.__ul,"transitionend",this.__resizeHandler),Z.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&vp(this),s=function(){Oo&&localStorage.getItem(Hr(t,"isLocal"))==="true"&&localStorage.setItem(Hr(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function g(){var m=t.getRoot();m.width+=1,ue.defer(function(){m.width-=1})}n.parent||g()};_t.toggleHide=function(){Na=!Na,ue.each(If,function(r){r.domElement.style.display=Na?"none":""})};_t.CLASS_AUTO_PLACE="a";_t.CLASS_AUTO_PLACE_CONTAINER="ac";_t.CLASS_MAIN="main";_t.CLASS_CONTROLLER_ROW="cr";_t.CLASS_TOO_TALL="taller-than-window";_t.CLASS_CLOSED="closed";_t.CLASS_CLOSE_BUTTON="close-button";_t.CLASS_CLOSE_TOP="close-top";_t.CLASS_CLOSE_BOTTOM="close-bottom";_t.CLASS_DRAG="drag";_t.DEFAULT_WIDTH=245;_t.TEXT_CLOSED="Close Controls";_t.TEXT_OPEN="Open Controls";_t._keydownHandler=function(r){document.activeElement.type!=="text"&&(r.which===Yc||r.keyCode===Yc)&&_t.toggleHide()};Z.bind(window,"keydown",_t._keydownHandler,!1);ue.extend(_t.prototype,{add:function(e,t){return Bo(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Bo(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;ue.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Vr.removeChild(this.domElement);var e=this;ue.each(this.__folders,function(t){e.removeFolder(t)}),Z.unbind(window,"keydown",_t._keydownHandler,!1),Kc(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new _t(t);this.__folders[e]=n;var i=jl(this,n.domElement);return Z.addClass(i,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],Kc(e);var t=this;ue.each(e.__folders,function(n){e.removeFolder(n)}),ue.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=Z.getOffset(e.__ul).top,n=0;ue.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=Z.getHeight(i))}),window.innerHeight-t-$c<n?(Z.addClass(e.domElement,_t.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-$c+"px"):(Z.removeClass(e.domElement,_t.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&ue.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:ue.debounce(function(){this.onResize()},50),remember:function(){if(ue.isUndefined(Uo)&&(Uo=new hp,Uo.domElement.innerHTML=cp),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;ue.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&gp(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&Al(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=Ss(this)),e.folders={},ue.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Ss(this),Tl(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Wo]=Ss(this,!0)),this.load.remembered[e]=Ss(this),this.preset=e,Cl(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){ue.each(this.__controllers,function(t){this.getRoot().load.remembered?Of(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),ue.each(this.__folders,function(t){t.revert(t)}),e||Tl(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&kf(this.__listening)},updateDisplay:function(){ue.each(this.__controllers,function(e){e.updateDisplay()}),ue.each(this.__folders,function(e){e.updateDisplay()})}});function jl(r,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?r.__ul.insertBefore(n,t):r.__ul.appendChild(n),r.onResize(),n}function Kc(r){Z.unbind(window,"resize",r.__resizeHandler),r.saveToLocalStorageIfPossible&&Z.unbind(window,"unload",r.saveToLocalStorageIfPossible)}function Tl(r,e){var t=r.__preset_select[r.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function mp(r,e,t){if(t.__li=e,t.__gui=r,ue.extend(t,{options:function(f){if(arguments.length>1){var l=t.__li.nextElementSibling;return t.remove(),Bo(r,t.object,t.property,{before:l,factoryArgs:[ue.toArray(arguments)]})}if(ue.isArray(f)||ue.isObject(f)){var d=t.__li.nextElementSibling;return t.remove(),Bo(r,t.object,t.property,{before:d,factoryArgs:[f]})}},name:function(f){return t.__li.firstElementChild.firstElementChild.innerHTML=f,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof Ml){var n=new na(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});ue.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var f=t[s],l=n[s];t[s]=n[s]=function(){var d=Array.prototype.slice.call(arguments);return l.apply(n,d),f.apply(t,d)}}),Z.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof na){var i=function(f){if(ue.isNumber(t.__min)&&ue.isNumber(t.__max)){var l=t.__li.firstElementChild.firstElementChild.innerHTML,d=t.__gui.__listening.indexOf(t)>-1;t.remove();var h=Bo(r,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return h.name(l),d&&h.listen(),h}return f};t.min=ue.compose(i,t.min),t.max=ue.compose(i,t.max)}else t instanceof Df?(Z.bind(e,"click",function(){Z.fakeEvent(t.__checkbox,"click")}),Z.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof Rf?(Z.bind(e,"click",function(){Z.fakeEvent(t.__button,"click")}),Z.bind(e,"mouseover",function(){Z.addClass(t.__button,"hover")}),Z.bind(e,"mouseout",function(){Z.removeClass(t.__button,"hover")})):t instanceof El&&(Z.addClass(e,"color"),t.updateDisplay=ue.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=ue.compose(function(s){return r.getRoot().__preset_select&&t.isModified()&&Tl(r.getRoot(),!0),s},t.setValue)}function Of(r,e){var t=r.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,f=void 0;if(s[r.preset])f=s[r.preset];else if(s[Wo])f=s[Wo];else return;if(f[n]&&f[n][e.property]!==void 0){var l=f[n][e.property];e.initialValue=l,e.setValue(l)}}}}function Bo(r,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new El(e,t);else{var s=[e,t].concat(n.factoryArgs);i=up.apply(r,s)}n.before instanceof mr&&(n.before=n.before.__li),Of(r,i),Z.addClass(i.domElement,"c");var f=document.createElement("span");Z.addClass(f,"property-name"),f.innerHTML=i.property;var l=document.createElement("div");l.appendChild(f),l.appendChild(i.domElement);var d=jl(r,l,n.before);return Z.addClass(d,_t.CLASS_CONTROLLER_ROW),i instanceof El?Z.addClass(d,"color"):Z.addClass(d,ep(i.getValue())),mp(r,d,i),r.__controllers.push(i),i}function Hr(r,e){return document.location.href+"."+e}function Cl(r,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,r.__preset_select.appendChild(n),t&&(r.__preset_select.selectedIndex=r.__preset_select.length-1)}function Jc(r,e){e.style.display=r.useLocalStorage?"block":"none"}function gp(r){var e=r.__save_row=document.createElement("li");Z.addClass(r.domElement,"has-save"),r.__ul.insertBefore(e,r.__ul.firstChild),Z.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",Z.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",Z.addClass(n,"button"),Z.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",Z.addClass(i,"button"),Z.addClass(i,"save-as");var s=document.createElement("span");s.innerHTML="Revert",Z.addClass(s,"button"),Z.addClass(s,"revert");var f=r.__preset_select=document.createElement("select");if(r.load&&r.load.remembered?ue.each(r.load.remembered,function(m,v){Cl(r,v,v===r.preset)}):Cl(r,Wo,!1),Z.bind(f,"change",function(){for(var m=0;m<r.__preset_select.length;m++)r.__preset_select[m].innerHTML=r.__preset_select[m].value;r.preset=this.value}),e.appendChild(f),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(s),Oo){var l=document.getElementById("dg-local-explain"),d=document.getElementById("dg-local-storage"),h=document.getElementById("dg-save-locally");h.style.display="block",localStorage.getItem(Hr(r,"isLocal"))==="true"&&d.setAttribute("checked","checked"),Jc(r,l),Z.bind(d,"change",function(){r.useLocalStorage=!r.useLocalStorage,Jc(r,l)})}var g=document.getElementById("dg-new-constructor");Z.bind(g,"keydown",function(m){m.metaKey&&(m.which===67||m.keyCode===67)&&Uo.hide()}),Z.bind(t,"click",function(){g.innerHTML=JSON.stringify(r.getSaveObject(),void 0,2),Uo.show(),g.focus(),g.select()}),Z.bind(n,"click",function(){r.save()}),Z.bind(i,"click",function(){var m=prompt("Enter a new preset name.");m&&r.saveAs(m)}),Z.bind(s,"click",function(){r.revert()})}function vp(r){var e=void 0;r.__resize_handle=document.createElement("div"),ue.extend(r.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),r.width+=e-s.clientX,r.onResize(),e=s.clientX,!1}function n(){Z.removeClass(r.__closeButton,_t.CLASS_DRAG),Z.unbind(window,"mousemove",t),Z.unbind(window,"mouseup",n)}function i(s){return s.preventDefault(),e=s.clientX,Z.addClass(r.__closeButton,_t.CLASS_DRAG),Z.bind(window,"mousemove",t),Z.bind(window,"mouseup",n),!1}Z.bind(r.__resize_handle,"mousedown",i),Z.bind(r.__closeButton,"mousedown",i),r.domElement.insertBefore(r.__resize_handle,r.domElement.firstElementChild)}function Al(r,e){r.domElement.style.width=e+"px",r.__save_row&&r.autoPlace&&(r.__save_row.style.width=e+"px"),r.__closeButton&&(r.__closeButton.style.width=e+"px")}function Ss(r,e){var t={};return ue.each(r.__rememberedObjects,function(n,i){var s={},f=r.__rememberedObjectIndecesToControllers[i];ue.each(f,function(l,d){s[d]=e?l.initialValue:l.getValue()}),t[i]=s}),t}function _p(r){for(var e=0;e<r.__preset_select.length;e++)r.__preset_select[e].value===r.preset&&(r.__preset_select.selectedIndex=e)}function kf(r){r.length!==0&&dp.call(window,function(){kf(r)}),ue.each(r,function(e){e.updateDisplay()})}var yp=_t;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ql="143",Tr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xp=0,Qc=1,bp=2,Ff=1,Sp=2,ko=3,Vo=0,Gn=1,ar=2,wp=1,Oi=0,$r=1,eu=2,tu=3,nu=4,Mp=5,jr=100,Ep=101,Tp=102,iu=103,ru=104,Cp=200,Ap=201,Pp=202,Dp=203,zf=204,Nf=205,Lp=206,Rp=207,Ip=208,Op=209,kp=210,Fp=0,zp=1,Np=2,Pl=3,Up=4,Bp=5,Gp=6,Wp=7,Uf=0,Vp=1,Hp=2,mi=0,jp=1,qp=2,Xp=3,Yp=4,$p=5,Bf=300,eo=301,to=302,Dl=303,Ll=304,ra=306,Rl=1e3,Bn=1001,Il=1002,hn=1003,ou=1004,su=1005,Cn=1006,Zp=1007,oa=1008,lr=1009,Kp=1010,Jp=1011,Gf=1012,Qp=1013,nr=1014,ir=1015,Ho=1016,em=1017,tm=1018,Zr=1020,nm=1021,im=1022,Jn=1023,rm=1024,om=1025,or=1026,no=1027,sm=1028,am=1029,lm=1030,cm=1031,um=1033,Ua=33776,Ba=33777,Ga=33778,Wa=33779,au=35840,lu=35841,cu=35842,uu=35843,fm=36196,fu=37492,du=37496,hu=37808,pu=37809,mu=37810,gu=37811,vu=37812,_u=37813,yu=37814,xu=37815,bu=37816,Su=37817,wu=37818,Mu=37819,Eu=37820,Tu=37821,Cu=36492,cr=3e3,It=3001,dm=3200,hm=3201,pm=0,mm=1,fi="srgb",rr="srgb-linear",Va=7680,gm=519,Au=35044,Ar=35040,Pu="300 es",Ol=1035;class gr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,f=i.length;s<f;s++)i[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ha=Math.PI/180,Du=180/Math.PI;function Xo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[r&255]+Qt[r>>8&255]+Qt[r>>16&255]+Qt[r>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function pn(r,e,t){return Math.max(e,Math.min(t,r))}function vm(r,e){return(r%e+e)%e}function ja(r,e,t){return(1-t)*r+t*e}function Lu(r){return(r&r-1)===0&&r!==0}function kl(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,f=this.y-e.y;return this.x=s*n-f*i+e.x,this.y=s*i+f*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dn{constructor(){Dn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,f,l,d,h){const g=this.elements;return g[0]=e,g[1]=i,g[2]=l,g[3]=t,g[4]=s,g[5]=d,g[6]=n,g[7]=f,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,f=n[0],l=n[3],d=n[6],h=n[1],g=n[4],m=n[7],v=n[2],S=n[5],C=n[8],y=i[0],_=i[3],E=i[6],A=i[1],L=i[4],k=i[7],D=i[2],N=i[5],$=i[8];return s[0]=f*y+l*A+d*D,s[3]=f*_+l*L+d*N,s[6]=f*E+l*k+d*$,s[1]=h*y+g*A+m*D,s[4]=h*_+g*L+m*N,s[7]=h*E+g*k+m*$,s[2]=v*y+S*A+C*D,s[5]=v*_+S*L+C*N,s[8]=v*E+S*k+C*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],f=e[4],l=e[5],d=e[6],h=e[7],g=e[8];return t*f*g-t*l*h-n*s*g+n*l*d+i*s*h-i*f*d}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],f=e[4],l=e[5],d=e[6],h=e[7],g=e[8],m=g*f-l*h,v=l*d-g*s,S=h*s-f*d,C=t*m+n*v+i*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/C;return e[0]=m*y,e[1]=(i*h-g*n)*y,e[2]=(l*n-i*f)*y,e[3]=v*y,e[4]=(g*t-i*d)*y,e[5]=(i*s-l*t)*y,e[6]=S*y,e[7]=(n*d-h*t)*y,e[8]=(f*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,f,l){const d=Math.cos(s),h=Math.sin(s);return this.set(n*d,n*h,-n*(d*f+h*l)+f+e,-i*h,i*d,-i*(-h*f+d*l)+l+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],f=i[3],l=i[6],d=i[1],h=i[4],g=i[7];return i[0]=t*s+n*d,i[3]=t*f+n*h,i[6]=t*l+n*g,i[1]=-n*s+t*d,i[4]=-n*f+t*h,i[7]=-n*l+t*g,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Wf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>65535)return!0;return!1}function ia(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function sr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const qa={[fi]:{[rr]:sr},[rr]:{[fi]:Xs}},Fn={legacyMode:!0,get workingColorSpace(){return rr},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(qa[e]&&qa[e][t]!==void 0){const n=qa[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ut={r:0,g:0,b:0},zn={h:0,s:0,l:0},ws={h:0,s:0,l:0};function Xa(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Ms(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Fn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=rr){return this.r=e,this.g=t,this.b=n,Fn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=rr){if(e=vm(e,1),t=pn(t,0,1),n=pn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,f=2*n-s;this.r=Xa(f,s,e+1/3),this.g=Xa(f,s,e),this.b=Xa(f,s,e-1/3)}return Fn.toWorkingColorSpace(this,i),this}setStyle(e,t=fi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const f=i[1],l=i[2];switch(f){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Fn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Fn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l)){const d=parseFloat(s[1])/360,h=parseInt(s[2],10)/100,g=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(d,h,g,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],f=s.length;if(f===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Fn.toWorkingColorSpace(this,t),this;if(f===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Fn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=fi){const n=Vf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Fn.fromWorkingColorSpace(Ms(this,Ut),e),pn(Ut.r*255,0,255)<<16^pn(Ut.g*255,0,255)<<8^pn(Ut.b*255,0,255)<<0}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rr){Fn.fromWorkingColorSpace(Ms(this,Ut),t);const n=Ut.r,i=Ut.g,s=Ut.b,f=Math.max(n,i,s),l=Math.min(n,i,s);let d,h;const g=(l+f)/2;if(l===f)d=0,h=0;else{const m=f-l;switch(h=g<=.5?m/(f+l):m/(2-f-l),f){case n:d=(i-s)/m+(i<s?6:0);break;case i:d=(s-n)/m+2;break;case s:d=(n-i)/m+4;break}d/=6}return e.h=d,e.s=h,e.l=g,e}getRGB(e,t=rr){return Fn.fromWorkingColorSpace(Ms(this,Ut),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=fi){return Fn.fromWorkingColorSpace(Ms(this,Ut),e),e!==fi?`color(${e} ${Ut.r} ${Ut.g} ${Ut.b})`:`rgb(${Ut.r*255|0},${Ut.g*255|0},${Ut.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(zn),zn.h+=e,zn.s+=t,zn.l+=n,this.setHSL(zn.h,zn.s,zn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(ws);const n=ja(zn.h,ws.h,t),i=ja(zn.s,ws.s,t),s=ja(zn.l,ws.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ze.NAMES=Vf;let Pr;class Hf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pr===void 0&&(Pr=ia("canvas")),Pr.width=e.width,Pr.height=e.height;const n=Pr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Pr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ia("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let f=0;f<s.length;f++)s[f]=sr(s[f]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(sr(t[n]/255)*255):t[n]=sr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class jf{constructor(e=null){this.isSource=!0,this.uuid=Xo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let f=0,l=i.length;f<l;f++)i[f].isDataTexture?s.push(Ya(i[f].image)):s.push(Ya(i[f]))}else s=Ya(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ya(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Hf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _m=0;class Vn extends gr{constructor(e=Vn.DEFAULT_IMAGE,t=Vn.DEFAULT_MAPPING,n=Bn,i=Bn,s=Cn,f=oa,l=Jn,d=lr,h=1,g=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=Xo(),this.name="",this.source=new jf(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=f,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=d,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rl:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Il:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rl:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Il:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Bf;class Ht{constructor(e=0,t=0,n=0,i=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,f=e.elements;return this.x=f[0]*t+f[4]*n+f[8]*i+f[12]*s,this.y=f[1]*t+f[5]*n+f[9]*i+f[13]*s,this.z=f[2]*t+f[6]*n+f[10]*i+f[14]*s,this.w=f[3]*t+f[7]*n+f[11]*i+f[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const d=e.elements,h=d[0],g=d[4],m=d[8],v=d[1],S=d[5],C=d[9],y=d[2],_=d[6],E=d[10];if(Math.abs(g-v)<.01&&Math.abs(m-y)<.01&&Math.abs(C-_)<.01){if(Math.abs(g+v)<.1&&Math.abs(m+y)<.1&&Math.abs(C+_)<.1&&Math.abs(h+S+E-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(h+1)/2,k=(S+1)/2,D=(E+1)/2,N=(g+v)/4,$=(m+y)/4,T=(C+_)/4;return L>k&&L>D?L<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(L),i=N/n,s=$/n):k>D?k<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(k),n=N/i,s=T/i):D<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(D),n=$/s,i=T/s),this.set(n,i,s,t),this}let A=Math.sqrt((_-C)*(_-C)+(m-y)*(m-y)+(v-g)*(v-g));return Math.abs(A)<.001&&(A=1),this.x=(_-C)/A,this.y=(m-y)/A,this.z=(v-g)/A,this.w=Math.acos((h+S+E-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ur extends gr{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Vn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new jf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qf extends Vn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ym extends Vn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,f,l){let d=n[i+0],h=n[i+1],g=n[i+2],m=n[i+3];const v=s[f+0],S=s[f+1],C=s[f+2],y=s[f+3];if(l===0){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=m;return}if(l===1){e[t+0]=v,e[t+1]=S,e[t+2]=C,e[t+3]=y;return}if(m!==y||d!==v||h!==S||g!==C){let _=1-l;const E=d*v+h*S+g*C+m*y,A=E>=0?1:-1,L=1-E*E;if(L>Number.EPSILON){const D=Math.sqrt(L),N=Math.atan2(D,E*A);_=Math.sin(_*N)/D,l=Math.sin(l*N)/D}const k=l*A;if(d=d*_+v*k,h=h*_+S*k,g=g*_+C*k,m=m*_+y*k,_===1-l){const D=1/Math.sqrt(d*d+h*h+g*g+m*m);d*=D,h*=D,g*=D,m*=D}}e[t]=d,e[t+1]=h,e[t+2]=g,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,i,s,f){const l=n[i],d=n[i+1],h=n[i+2],g=n[i+3],m=s[f],v=s[f+1],S=s[f+2],C=s[f+3];return e[t]=l*C+g*m+d*S-h*v,e[t+1]=d*C+g*v+h*m-l*S,e[t+2]=h*C+g*S+l*v-d*m,e[t+3]=g*C-l*m-d*v-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,f=e._order,l=Math.cos,d=Math.sin,h=l(n/2),g=l(i/2),m=l(s/2),v=d(n/2),S=d(i/2),C=d(s/2);switch(f){case"XYZ":this._x=v*g*m+h*S*C,this._y=h*S*m-v*g*C,this._z=h*g*C+v*S*m,this._w=h*g*m-v*S*C;break;case"YXZ":this._x=v*g*m+h*S*C,this._y=h*S*m-v*g*C,this._z=h*g*C-v*S*m,this._w=h*g*m+v*S*C;break;case"ZXY":this._x=v*g*m-h*S*C,this._y=h*S*m+v*g*C,this._z=h*g*C+v*S*m,this._w=h*g*m-v*S*C;break;case"ZYX":this._x=v*g*m-h*S*C,this._y=h*S*m+v*g*C,this._z=h*g*C-v*S*m,this._w=h*g*m+v*S*C;break;case"YZX":this._x=v*g*m+h*S*C,this._y=h*S*m+v*g*C,this._z=h*g*C-v*S*m,this._w=h*g*m-v*S*C;break;case"XZY":this._x=v*g*m-h*S*C,this._y=h*S*m-v*g*C,this._z=h*g*C+v*S*m,this._w=h*g*m+v*S*C;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],f=t[1],l=t[5],d=t[9],h=t[2],g=t[6],m=t[10],v=n+l+m;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-d)*S,this._y=(s-h)*S,this._z=(f-i)*S}else if(n>l&&n>m){const S=2*Math.sqrt(1+n-l-m);this._w=(g-d)/S,this._x=.25*S,this._y=(i+f)/S,this._z=(s+h)/S}else if(l>m){const S=2*Math.sqrt(1+l-n-m);this._w=(s-h)/S,this._x=(i+f)/S,this._y=.25*S,this._z=(d+g)/S}else{const S=2*Math.sqrt(1+m-n-l);this._w=(f-i)/S,this._x=(s+h)/S,this._y=(d+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,f=e._w,l=t._x,d=t._y,h=t._z,g=t._w;return this._x=n*g+f*l+i*h-s*d,this._y=i*g+f*d+s*l-n*h,this._z=s*g+f*h+n*d-i*l,this._w=f*g-n*l-i*d-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,f=this._w;let l=f*e._w+n*e._x+i*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=f,this._x=n,this._y=i,this._z=s,this;const d=1-l*l;if(d<=Number.EPSILON){const S=1-t;return this._w=S*f+t*this._w,this._x=S*n+t*this._x,this._y=S*i+t*this._y,this._z=S*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(d),g=Math.atan2(h,l),m=Math.sin((1-t)*g)/h,v=Math.sin(t*g)/h;return this._w=f*m+this._w*v,this._x=n*m+this._x*v,this._y=i*m+this._y*v,this._z=s*m+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ru.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,f=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*f,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*f,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*f,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,f=e.y,l=e.z,d=e.w,h=d*t+f*i-l*n,g=d*n+l*t-s*i,m=d*i+s*n-f*t,v=-s*t-f*n-l*i;return this.x=h*d+v*-s+g*-l-m*-f,this.y=g*d+v*-f+m*-s-h*-l,this.z=m*d+v*-l+h*-f-g*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,f=t.x,l=t.y,d=t.z;return this.x=i*d-s*l,this.y=s*f-n*d,this.z=n*l-i*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $a.copy(this).projectOnVector(e),this.sub($a)}reflect(e){return this.sub($a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $a=new H,Ru=new fr;class Yo{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,f=-1/0,l=-1/0;for(let d=0,h=e.length;d<h;d+=3){const g=e[d],m=e[d+1],v=e[d+2];g<t&&(t=g),m<n&&(n=m),v<i&&(i=v),g>s&&(s=g),m>f&&(f=m),v>l&&(l=v)}return this.min.set(t,n,i),this.max.set(s,f,l),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,f=-1/0,l=-1/0;for(let d=0,h=e.count;d<h;d++){const g=e.getX(d),m=e.getY(d),v=e.getZ(d);g<t&&(t=g),m<n&&(n=m),v<i&&(i=v),g>s&&(s=g),m>f&&(f=m),v>l&&(l=v)}return this.min.set(t,n,i),this.max.set(s,f,l),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let f=0,l=s.count;f<l;f++)Yi.fromBufferAttribute(s,f).applyMatrix4(e.matrixWorld),this.expandByPoint(Yi)}else n.boundingBox===null&&n.computeBoundingBox(),Za.copy(n.boundingBox),Za.applyMatrix4(e.matrixWorld),this.union(Za);const i=e.children;for(let s=0,f=i.length;s<f;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),Es.subVectors(this.max,Do),Dr.subVectors(e.a,Do),Lr.subVectors(e.b,Do),Rr.subVectors(e.c,Do),wi.subVectors(Lr,Dr),Mi.subVectors(Rr,Lr),$i.subVectors(Dr,Rr);let t=[0,-wi.z,wi.y,0,-Mi.z,Mi.y,0,-$i.z,$i.y,wi.z,0,-wi.x,Mi.z,0,-Mi.x,$i.z,0,-$i.x,-wi.y,wi.x,0,-Mi.y,Mi.x,0,-$i.y,$i.x,0];return!Ka(t,Dr,Lr,Rr,Es)||(t=[1,0,0,0,1,0,0,0,1],!Ka(t,Dr,Lr,Rr,Es))?!1:(Ts.crossVectors(wi,Mi),t=[Ts.x,Ts.y,Ts.z],Ka(t,Dr,Lr,Rr,Es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Yi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new H,new H,new H,new H,new H,new H,new H,new H],Yi=new H,Za=new Yo,Dr=new H,Lr=new H,Rr=new H,wi=new H,Mi=new H,$i=new H,Do=new H,Es=new H,Ts=new H,Zi=new H;function Ka(r,e,t,n,i){for(let s=0,f=r.length-3;s<=f;s+=3){Zi.fromArray(r,s);const l=i.x*Math.abs(Zi.x)+i.y*Math.abs(Zi.y)+i.z*Math.abs(Zi.z),d=e.dot(Zi),h=t.dot(Zi),g=n.dot(Zi);if(Math.max(-Math.max(d,h,g),Math.min(d,h,g))>l)return!1}return!0}const xm=new Yo,Iu=new H,Cs=new H,Ja=new H;class sa{constructor(e=new H,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,f=e.length;s<f;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ja.subVectors(e,this.center);const t=Ja.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Ja.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Cs.set(0,0,1).multiplyScalar(e.radius):Cs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Iu.copy(e.center).add(Cs)),this.expandByPoint(Iu.copy(e.center).sub(Cs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new H,Qa=new H,As=new H,Ei=new H,el=new H,Ps=new H,tl=new H;class Xf{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.direction).multiplyScalar(t).add(this.origin),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Qa.copy(e).add(t).multiplyScalar(.5),As.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(Qa);const s=e.distanceTo(t)*.5,f=-this.direction.dot(As),l=Ei.dot(this.direction),d=-Ei.dot(As),h=Ei.lengthSq(),g=Math.abs(1-f*f);let m,v,S,C;if(g>0)if(m=f*d-l,v=f*l-d,C=s*g,m>=0)if(v>=-C)if(v<=C){const y=1/g;m*=y,v*=y,S=m*(m+f*v+2*l)+v*(f*m+v+2*d)+h}else v=s,m=Math.max(0,-(f*v+l)),S=-m*m+v*(v+2*d)+h;else v=-s,m=Math.max(0,-(f*v+l)),S=-m*m+v*(v+2*d)+h;else v<=-C?(m=Math.max(0,-(-f*s+l)),v=m>0?-s:Math.min(Math.max(-s,-d),s),S=-m*m+v*(v+2*d)+h):v<=C?(m=0,v=Math.min(Math.max(-s,-d),s),S=v*(v+2*d)+h):(m=Math.max(0,-(f*s+l)),v=m>0?s:Math.min(Math.max(-s,-d),s),S=-m*m+v*(v+2*d)+h);else v=f>0?-s:s,m=Math.max(0,-(f*v+l)),S=-m*m+v*(v+2*d)+h;return n&&n.copy(this.direction).multiplyScalar(m).add(this.origin),i&&i.copy(As).multiplyScalar(v).add(Qa),S}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const n=ai.dot(this.direction),i=ai.dot(ai)-n*n,s=e.radius*e.radius;if(i>s)return null;const f=Math.sqrt(s-i),l=n-f,d=n+f;return l<0&&d<0?null:l<0?this.at(d,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,f,l,d;const h=1/this.direction.x,g=1/this.direction.y,m=1/this.direction.z,v=this.origin;return h>=0?(n=(e.min.x-v.x)*h,i=(e.max.x-v.x)*h):(n=(e.max.x-v.x)*h,i=(e.min.x-v.x)*h),g>=0?(s=(e.min.y-v.y)*g,f=(e.max.y-v.y)*g):(s=(e.max.y-v.y)*g,f=(e.min.y-v.y)*g),n>f||s>i||((s>n||n!==n)&&(n=s),(f<i||i!==i)&&(i=f),m>=0?(l=(e.min.z-v.z)*m,d=(e.max.z-v.z)*m):(l=(e.max.z-v.z)*m,d=(e.min.z-v.z)*m),n>d||l>i)||((l>n||n!==n)&&(n=l),(d<i||i!==i)&&(i=d),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,i,s){el.subVectors(t,e),Ps.subVectors(n,e),tl.crossVectors(el,Ps);let f=this.direction.dot(tl),l;if(f>0){if(i)return null;l=1}else if(f<0)l=-1,f=-f;else return null;Ei.subVectors(this.origin,e);const d=l*this.direction.dot(Ps.crossVectors(Ei,Ps));if(d<0)return null;const h=l*this.direction.dot(el.cross(Ei));if(h<0||d+h>f)return null;const g=-l*Ei.dot(tl);return g<0?null:this.at(g/f,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,f,l,d,h,g,m,v,S,C,y,_){const E=this.elements;return E[0]=e,E[4]=t,E[8]=n,E[12]=i,E[1]=s,E[5]=f,E[9]=l,E[13]=d,E[2]=h,E[6]=g,E[10]=m,E[14]=v,E[3]=S,E[7]=C,E[11]=y,E[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ir.setFromMatrixColumn(e,0).length(),s=1/Ir.setFromMatrixColumn(e,1).length(),f=1/Ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*f,t[9]=n[9]*f,t[10]=n[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,f=Math.cos(n),l=Math.sin(n),d=Math.cos(i),h=Math.sin(i),g=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const v=f*g,S=f*m,C=l*g,y=l*m;t[0]=d*g,t[4]=-d*m,t[8]=h,t[1]=S+C*h,t[5]=v-y*h,t[9]=-l*d,t[2]=y-v*h,t[6]=C+S*h,t[10]=f*d}else if(e.order==="YXZ"){const v=d*g,S=d*m,C=h*g,y=h*m;t[0]=v+y*l,t[4]=C*l-S,t[8]=f*h,t[1]=f*m,t[5]=f*g,t[9]=-l,t[2]=S*l-C,t[6]=y+v*l,t[10]=f*d}else if(e.order==="ZXY"){const v=d*g,S=d*m,C=h*g,y=h*m;t[0]=v-y*l,t[4]=-f*m,t[8]=C+S*l,t[1]=S+C*l,t[5]=f*g,t[9]=y-v*l,t[2]=-f*h,t[6]=l,t[10]=f*d}else if(e.order==="ZYX"){const v=f*g,S=f*m,C=l*g,y=l*m;t[0]=d*g,t[4]=C*h-S,t[8]=v*h+y,t[1]=d*m,t[5]=y*h+v,t[9]=S*h-C,t[2]=-h,t[6]=l*d,t[10]=f*d}else if(e.order==="YZX"){const v=f*d,S=f*h,C=l*d,y=l*h;t[0]=d*g,t[4]=y-v*m,t[8]=C*m+S,t[1]=m,t[5]=f*g,t[9]=-l*g,t[2]=-h*g,t[6]=S*m+C,t[10]=v-y*m}else if(e.order==="XZY"){const v=f*d,S=f*h,C=l*d,y=l*h;t[0]=d*g,t[4]=-m,t[8]=h*g,t[1]=v*m+y,t[5]=f*g,t[9]=S*m-C,t[2]=C*m-S,t[6]=l*g,t[10]=y*m+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bm,e,Sm)}lookAt(e,t,n){const i=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ti.crossVectors(n,yn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ti.crossVectors(n,yn)),Ti.normalize(),Ds.crossVectors(yn,Ti),i[0]=Ti.x,i[4]=Ds.x,i[8]=yn.x,i[1]=Ti.y,i[5]=Ds.y,i[9]=yn.y,i[2]=Ti.z,i[6]=Ds.z,i[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,f=n[0],l=n[4],d=n[8],h=n[12],g=n[1],m=n[5],v=n[9],S=n[13],C=n[2],y=n[6],_=n[10],E=n[14],A=n[3],L=n[7],k=n[11],D=n[15],N=i[0],$=i[4],T=i[8],B=i[12],te=i[1],ee=i[5],Ce=i[9],ye=i[13],Y=i[2],j=i[6],K=i[10],de=i[14],fe=i[3],Q=i[7],se=i[11],xe=i[15];return s[0]=f*N+l*te+d*Y+h*fe,s[4]=f*$+l*ee+d*j+h*Q,s[8]=f*T+l*Ce+d*K+h*se,s[12]=f*B+l*ye+d*de+h*xe,s[1]=g*N+m*te+v*Y+S*fe,s[5]=g*$+m*ee+v*j+S*Q,s[9]=g*T+m*Ce+v*K+S*se,s[13]=g*B+m*ye+v*de+S*xe,s[2]=C*N+y*te+_*Y+E*fe,s[6]=C*$+y*ee+_*j+E*Q,s[10]=C*T+y*Ce+_*K+E*se,s[14]=C*B+y*ye+_*de+E*xe,s[3]=A*N+L*te+k*Y+D*fe,s[7]=A*$+L*ee+k*j+D*Q,s[11]=A*T+L*Ce+k*K+D*se,s[15]=A*B+L*ye+k*de+D*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],f=e[1],l=e[5],d=e[9],h=e[13],g=e[2],m=e[6],v=e[10],S=e[14],C=e[3],y=e[7],_=e[11],E=e[15];return C*(+s*d*m-i*h*m-s*l*v+n*h*v+i*l*S-n*d*S)+y*(+t*d*S-t*h*v+s*f*v-i*f*S+i*h*g-s*d*g)+_*(+t*h*m-t*l*S-s*f*m+n*f*S+s*l*g-n*h*g)+E*(-i*l*g-t*d*m+t*l*v+i*f*m-n*f*v+n*d*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],f=e[4],l=e[5],d=e[6],h=e[7],g=e[8],m=e[9],v=e[10],S=e[11],C=e[12],y=e[13],_=e[14],E=e[15],A=m*_*h-y*v*h+y*d*S-l*_*S-m*d*E+l*v*E,L=C*v*h-g*_*h-C*d*S+f*_*S+g*d*E-f*v*E,k=g*y*h-C*m*h+C*l*S-f*y*S-g*l*E+f*m*E,D=C*m*d-g*y*d-C*l*v+f*y*v+g*l*_-f*m*_,N=t*A+n*L+i*k+s*D;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/N;return e[0]=A*$,e[1]=(y*v*s-m*_*s-y*i*S+n*_*S+m*i*E-n*v*E)*$,e[2]=(l*_*s-y*d*s+y*i*h-n*_*h-l*i*E+n*d*E)*$,e[3]=(m*d*s-l*v*s-m*i*h+n*v*h+l*i*S-n*d*S)*$,e[4]=L*$,e[5]=(g*_*s-C*v*s+C*i*S-t*_*S-g*i*E+t*v*E)*$,e[6]=(C*d*s-f*_*s-C*i*h+t*_*h+f*i*E-t*d*E)*$,e[7]=(f*v*s-g*d*s+g*i*h-t*v*h-f*i*S+t*d*S)*$,e[8]=k*$,e[9]=(C*m*s-g*y*s-C*n*S+t*y*S+g*n*E-t*m*E)*$,e[10]=(f*y*s-C*l*s+C*n*h-t*y*h-f*n*E+t*l*E)*$,e[11]=(g*l*s-f*m*s-g*n*h+t*m*h+f*n*S-t*l*S)*$,e[12]=D*$,e[13]=(g*y*i-C*m*i+C*n*v-t*y*v-g*n*_+t*m*_)*$,e[14]=(C*l*i-f*y*i-C*n*d+t*y*d+f*n*_-t*l*_)*$,e[15]=(f*m*i-g*l*i+g*n*d-t*m*d-f*n*v+t*l*v)*$,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,f=e.x,l=e.y,d=e.z,h=s*f,g=s*l;return this.set(h*f+n,h*l-i*d,h*d+i*l,0,h*l+i*d,g*l+n,g*d-i*f,0,h*d-i*l,g*d+i*f,s*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,f){return this.set(1,n,s,0,e,1,f,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,f=t._y,l=t._z,d=t._w,h=s+s,g=f+f,m=l+l,v=s*h,S=s*g,C=s*m,y=f*g,_=f*m,E=l*m,A=d*h,L=d*g,k=d*m,D=n.x,N=n.y,$=n.z;return i[0]=(1-(y+E))*D,i[1]=(S+k)*D,i[2]=(C-L)*D,i[3]=0,i[4]=(S-k)*N,i[5]=(1-(v+E))*N,i[6]=(_+A)*N,i[7]=0,i[8]=(C+L)*$,i[9]=(_-A)*$,i[10]=(1-(v+y))*$,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ir.set(i[0],i[1],i[2]).length();const f=Ir.set(i[4],i[5],i[6]).length(),l=Ir.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Nn.copy(this);const h=1/s,g=1/f,m=1/l;return Nn.elements[0]*=h,Nn.elements[1]*=h,Nn.elements[2]*=h,Nn.elements[4]*=g,Nn.elements[5]*=g,Nn.elements[6]*=g,Nn.elements[8]*=m,Nn.elements[9]*=m,Nn.elements[10]*=m,t.setFromRotationMatrix(Nn),n.x=s,n.y=f,n.z=l,this}makePerspective(e,t,n,i,s,f){const l=this.elements,d=2*s/(t-e),h=2*s/(n-i),g=(t+e)/(t-e),m=(n+i)/(n-i),v=-(f+s)/(f-s),S=-2*f*s/(f-s);return l[0]=d,l[4]=0,l[8]=g,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,f){const l=this.elements,d=1/(t-e),h=1/(n-i),g=1/(f-s),m=(t+e)*d,v=(n+i)*h,S=(f+s)*g;return l[0]=2*d,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=-2*g,l[14]=-S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ir=new H,Nn=new qt,bm=new H(0,0,0),Sm=new H(1,1,1),Ti=new H,Ds=new H,yn=new H,Ou=new qt,ku=new fr;class $o{constructor(e=0,t=0,n=0,i=$o.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],f=i[4],l=i[8],d=i[1],h=i[5],g=i[9],m=i[2],v=i[6],S=i[10];switch(t){case"XYZ":this._y=Math.asin(pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,s)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(l,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(pn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,S),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(d,s));break;case"ZYX":this._y=Math.asin(-pn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(d,s)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(l,S));break;case"XZY":this._z=Math.asin(-pn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ou.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ou,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ku.setFromEuler(this),this.setFromQuaternion(ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}$o.DefaultOrder="XYZ";$o.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Yf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wm=0;const Fu=new H,Or=new fr,li=new qt,Ls=new H,Lo=new H,Mm=new H,Em=new fr,zu=new H(1,0,0),Nu=new H(0,1,0),Uu=new H(0,0,1),Tm={type:"added"},Bu={type:"removed"};class Rn extends gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DefaultUp.clone();const e=new H,t=new $o,n=new fr,i=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function f(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qt},normalMatrix:{value:new Dn}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Rn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Yf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis(zu,e)}rotateY(e){return this.rotateOnAxis(Nu,e)}rotateZ(e){return this.rotateOnAxis(Uu,e)}translateOnAxis(e,t){return Fu.copy(e).applyQuaternion(this.quaternion),this.position.add(Fu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zu,e)}translateY(e){return this.translateOnAxis(Nu,e)}translateZ(e){return this.translateOnAxis(Uu,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ls.copy(e):Ls.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Lo,Ls,this.up):li.lookAt(Ls,Lo,this.up),this.quaternion.setFromRotationMatrix(li),i&&(li.extractRotation(i.matrixWorld),Or.setFromRotationMatrix(li),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Tm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Bu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const f=this.children[n].getObjectByProperty(e,t);if(f!==void 0)return f}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,Mm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,Em,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,f=i.length;s<f;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(l,d){return l[d.uuid]===void 0&&(l[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const d=l.shapes;if(Array.isArray(d))for(let h=0,g=d.length;h<g;h++){const m=d[h];s(e.shapes,m)}else s(e.shapes,d)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let d=0,h=this.material.length;d<h;d++)l.push(s(e.materials,this.material[d]));i.material=l}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const d=this.animations[l];i.animations.push(s(e.animations,d))}}if(t){const l=f(e.geometries),d=f(e.materials),h=f(e.textures),g=f(e.images),m=f(e.shapes),v=f(e.skeletons),S=f(e.animations),C=f(e.nodes);l.length>0&&(n.geometries=l),d.length>0&&(n.materials=d),h.length>0&&(n.textures=h),g.length>0&&(n.images=g),m.length>0&&(n.shapes=m),v.length>0&&(n.skeletons=v),S.length>0&&(n.animations=S),C.length>0&&(n.nodes=C)}return n.object=i,n;function f(l){const d=[];for(const h in l){const g=l[h];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Rn.DefaultUp=new H(0,1,0);Rn.DefaultMatrixAutoUpdate=!0;const Un=new H,ci=new H,nl=new H,ui=new H,kr=new H,Fr=new H,Gu=new H,il=new H,rl=new H,ol=new H;class hi{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Un.subVectors(e,t),i.cross(Un);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Un.subVectors(i,t),ci.subVectors(n,t),nl.subVectors(e,t);const f=Un.dot(Un),l=Un.dot(ci),d=Un.dot(nl),h=ci.dot(ci),g=ci.dot(nl),m=f*h-l*l;if(m===0)return s.set(-2,-1,-1);const v=1/m,S=(h*d-l*g)*v,C=(f*g-l*d)*v;return s.set(1-S-C,C,S)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ui),ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getUV(e,t,n,i,s,f,l,d){return this.getBarycoord(e,t,n,i,ui),d.set(0,0),d.addScaledVector(s,ui.x),d.addScaledVector(f,ui.y),d.addScaledVector(l,ui.z),d}static isFrontFacing(e,t,n,i){return Un.subVectors(n,t),ci.subVectors(e,t),Un.cross(ci).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Un.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return hi.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let f,l;kr.subVectors(i,n),Fr.subVectors(s,n),il.subVectors(e,n);const d=kr.dot(il),h=Fr.dot(il);if(d<=0&&h<=0)return t.copy(n);rl.subVectors(e,i);const g=kr.dot(rl),m=Fr.dot(rl);if(g>=0&&m<=g)return t.copy(i);const v=d*m-g*h;if(v<=0&&d>=0&&g<=0)return f=d/(d-g),t.copy(n).addScaledVector(kr,f);ol.subVectors(e,s);const S=kr.dot(ol),C=Fr.dot(ol);if(C>=0&&S<=C)return t.copy(s);const y=S*h-d*C;if(y<=0&&h>=0&&C<=0)return l=h/(h-C),t.copy(n).addScaledVector(Fr,l);const _=g*C-S*m;if(_<=0&&m-g>=0&&S-C>=0)return Gu.subVectors(s,i),l=(m-g)/(m-g+(S-C)),t.copy(i).addScaledVector(Gu,l);const E=1/(_+y+v);return f=y*E,l=v*E,t.copy(n).addScaledVector(kr,f).addScaledVector(Fr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Cm=0;class Zo extends gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=$r,this.side=Vo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=zf,this.blendDst=Nf,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Pl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Va,this.stencilZFail=Va,this.stencilZPass=Va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===wp;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(n.blending=this.blending),this.side!==Vo&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const f=[];for(const l in s){const d=s[l];delete d.metadata,f.push(d)}return f}if(t){const s=i(e.textures),f=i(e.images);s.length>0&&(n.textures=s),f.length>0&&(n.images=f)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xl extends Zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Uf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new H,Rs=new Qe;class tn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Au,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let f=e[i];f===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),f=new Ze),t[n++]=f.r,t[n++]=f.g,t[n++]=f.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let f=e[i];f===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),f=new Qe),t[n++]=f.x,t[n++]=f.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let f=e[i];f===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),f=new H),t[n++]=f.x,t[n++]=f.y,t[n++]=f.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let f=e[i];f===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),f=new Ht),t[n++]=f.x,t[n++]=f.y,t[n++]=f.z,t[n++]=f.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rs.fromBufferAttribute(this,t),Rs.applyMatrix3(e),this.setXY(t,Rs.x,Rs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Au&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class $f extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Zf extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gi extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Am=0;const Tn=new qt,sl=new Rn,zr=new H,xn=new Yo,Ro=new Yo,Wt=new H;class Wn extends gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wf(e)?Zf:$f)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Dn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return sl.lookAt(e),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new gi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let s=0,f=t.length;s<f;s++){const l=t[s];Ro.setFromBufferAttribute(l),this.morphTargetsRelative?(Wt.addVectors(xn.min,Ro.min),xn.expandByPoint(Wt),Wt.addVectors(xn.max,Ro.max),xn.expandByPoint(Wt)):(xn.expandByPoint(Ro.min),xn.expandByPoint(Ro.max))}xn.getCenter(n);let i=0;for(let s=0,f=e.count;s<f;s++)Wt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Wt));if(t)for(let s=0,f=t.length;s<f;s++){const l=t[s],d=this.morphTargetsRelative;for(let h=0,g=l.count;h<g;h++)Wt.fromBufferAttribute(l,h),d&&(zr.fromBufferAttribute(e,h),Wt.add(zr)),i=Math.max(i,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,f=t.uv.array,l=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*l),4));const d=this.getAttribute("tangent").array,h=[],g=[];for(let te=0;te<l;te++)h[te]=new H,g[te]=new H;const m=new H,v=new H,S=new H,C=new Qe,y=new Qe,_=new Qe,E=new H,A=new H;function L(te,ee,Ce){m.fromArray(i,te*3),v.fromArray(i,ee*3),S.fromArray(i,Ce*3),C.fromArray(f,te*2),y.fromArray(f,ee*2),_.fromArray(f,Ce*2),v.sub(m),S.sub(m),y.sub(C),_.sub(C);const ye=1/(y.x*_.y-_.x*y.y);!isFinite(ye)||(E.copy(v).multiplyScalar(_.y).addScaledVector(S,-y.y).multiplyScalar(ye),A.copy(S).multiplyScalar(y.x).addScaledVector(v,-_.x).multiplyScalar(ye),h[te].add(E),h[ee].add(E),h[Ce].add(E),g[te].add(A),g[ee].add(A),g[Ce].add(A))}let k=this.groups;k.length===0&&(k=[{start:0,count:n.length}]);for(let te=0,ee=k.length;te<ee;++te){const Ce=k[te],ye=Ce.start,Y=Ce.count;for(let j=ye,K=ye+Y;j<K;j+=3)L(n[j+0],n[j+1],n[j+2])}const D=new H,N=new H,$=new H,T=new H;function B(te){$.fromArray(s,te*3),T.copy($);const ee=h[te];D.copy(ee),D.sub($.multiplyScalar($.dot(ee))).normalize(),N.crossVectors(T,ee);const ye=N.dot(g[te])<0?-1:1;d[te*4]=D.x,d[te*4+1]=D.y,d[te*4+2]=D.z,d[te*4+3]=ye}for(let te=0,ee=k.length;te<ee;++te){const Ce=k[te],ye=Ce.start,Y=Ce.count;for(let j=ye,K=ye+Y;j<K;j+=3)B(n[j+0]),B(n[j+1]),B(n[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,S=n.count;v<S;v++)n.setXYZ(v,0,0,0);const i=new H,s=new H,f=new H,l=new H,d=new H,h=new H,g=new H,m=new H;if(e)for(let v=0,S=e.count;v<S;v+=3){const C=e.getX(v+0),y=e.getX(v+1),_=e.getX(v+2);i.fromBufferAttribute(t,C),s.fromBufferAttribute(t,y),f.fromBufferAttribute(t,_),g.subVectors(f,s),m.subVectors(i,s),g.cross(m),l.fromBufferAttribute(n,C),d.fromBufferAttribute(n,y),h.fromBufferAttribute(n,_),l.add(g),d.add(g),h.add(g),n.setXYZ(C,l.x,l.y,l.z),n.setXYZ(y,d.x,d.y,d.z),n.setXYZ(_,h.x,h.y,h.z)}else for(let v=0,S=t.count;v<S;v+=3)i.fromBufferAttribute(t,v+0),s.fromBufferAttribute(t,v+1),f.fromBufferAttribute(t,v+2),g.subVectors(f,s),m.subVectors(i,s),g.cross(m),n.setXYZ(v+0,g.x,g.y,g.z),n.setXYZ(v+1,g.x,g.y,g.z),n.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const f=n[i].array,l=e.attributes[i],d=l.array,h=l.itemSize*t,g=Math.min(d.length,f.length-h);for(let m=0,v=h;m<g;m++,v++)f[v]=d[m]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(l,d){const h=l.array,g=l.itemSize,m=l.normalized,v=new h.constructor(d.length*g);let S=0,C=0;for(let y=0,_=d.length;y<_;y++){l.isInterleavedBufferAttribute?S=d[y]*l.data.stride+l.offset:S=d[y]*g;for(let E=0;E<g;E++)v[C++]=h[S++]}return new tn(v,g,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wn,n=this.index.array,i=this.attributes;for(const l in i){const d=i[l],h=e(d,n);t.setAttribute(l,h)}const s=this.morphAttributes;for(const l in s){const d=[],h=s[l];for(let g=0,m=h.length;g<m;g++){const v=h[g],S=e(v,n);d.push(S)}t.morphAttributes[l]=d}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let l=0,d=f.length;l<d;l++){const h=f[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const h=n[d];e.data.attributes[d]=h.toJSON(e.data)}const i={};let s=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],g=[];for(let m=0,v=h.length;m<v;m++){const S=h[m];g.push(S.toJSON(e.data))}g.length>0&&(i[d]=g,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const g=i[h];this.setAttribute(h,g.clone(t))}const s=e.morphAttributes;for(const h in s){const g=[],m=s[h];for(let v=0,S=m.length;v<S;v++)g.push(m[v].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,g=f.length;h<g;h++){const m=f[h];this.addGroup(m.start,m.count,m.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wu=new qt,Nr=new Xf,al=new sa,Ci=new H,Ai=new H,Pi=new H,ll=new H,cl=new H,ul=new H,Is=new H,Os=new H,ks=new H,Fs=new Qe,zs=new Qe,Ns=new Qe,fl=new H,Us=new H;class pi extends Rn{constructor(e=new Wn,t=new Xl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,f=i.length;s<f;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),al.copy(n.boundingSphere),al.applyMatrix4(s),e.ray.intersectsSphere(al)===!1)||(Wu.copy(s).invert(),Nr.copy(e.ray).applyMatrix4(Wu),n.boundingBox!==null&&Nr.intersectsBox(n.boundingBox)===!1))return;let f;const l=n.index,d=n.attributes.position,h=n.morphAttributes.position,g=n.morphTargetsRelative,m=n.attributes.uv,v=n.attributes.uv2,S=n.groups,C=n.drawRange;if(l!==null)if(Array.isArray(i))for(let y=0,_=S.length;y<_;y++){const E=S[y],A=i[E.materialIndex],L=Math.max(E.start,C.start),k=Math.min(l.count,Math.min(E.start+E.count,C.start+C.count));for(let D=L,N=k;D<N;D+=3){const $=l.getX(D),T=l.getX(D+1),B=l.getX(D+2);f=Bs(this,A,e,Nr,d,h,g,m,v,$,T,B),f&&(f.faceIndex=Math.floor(D/3),f.face.materialIndex=E.materialIndex,t.push(f))}}else{const y=Math.max(0,C.start),_=Math.min(l.count,C.start+C.count);for(let E=y,A=_;E<A;E+=3){const L=l.getX(E),k=l.getX(E+1),D=l.getX(E+2);f=Bs(this,i,e,Nr,d,h,g,m,v,L,k,D),f&&(f.faceIndex=Math.floor(E/3),t.push(f))}}else if(d!==void 0)if(Array.isArray(i))for(let y=0,_=S.length;y<_;y++){const E=S[y],A=i[E.materialIndex],L=Math.max(E.start,C.start),k=Math.min(d.count,Math.min(E.start+E.count,C.start+C.count));for(let D=L,N=k;D<N;D+=3){const $=D,T=D+1,B=D+2;f=Bs(this,A,e,Nr,d,h,g,m,v,$,T,B),f&&(f.faceIndex=Math.floor(D/3),f.face.materialIndex=E.materialIndex,t.push(f))}}else{const y=Math.max(0,C.start),_=Math.min(d.count,C.start+C.count);for(let E=y,A=_;E<A;E+=3){const L=E,k=E+1,D=E+2;f=Bs(this,i,e,Nr,d,h,g,m,v,L,k,D),f&&(f.faceIndex=Math.floor(E/3),t.push(f))}}}}function Pm(r,e,t,n,i,s,f,l){let d;if(e.side===Gn?d=n.intersectTriangle(f,s,i,!0,l):d=n.intersectTriangle(i,s,f,e.side!==ar,l),d===null)return null;Us.copy(l),Us.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Us);return h<t.near||h>t.far?null:{distance:h,point:Us.clone(),object:r}}function Bs(r,e,t,n,i,s,f,l,d,h,g,m){Ci.fromBufferAttribute(i,h),Ai.fromBufferAttribute(i,g),Pi.fromBufferAttribute(i,m);const v=r.morphTargetInfluences;if(s&&v){Is.set(0,0,0),Os.set(0,0,0),ks.set(0,0,0);for(let C=0,y=s.length;C<y;C++){const _=v[C],E=s[C];_!==0&&(ll.fromBufferAttribute(E,h),cl.fromBufferAttribute(E,g),ul.fromBufferAttribute(E,m),f?(Is.addScaledVector(ll,_),Os.addScaledVector(cl,_),ks.addScaledVector(ul,_)):(Is.addScaledVector(ll.sub(Ci),_),Os.addScaledVector(cl.sub(Ai),_),ks.addScaledVector(ul.sub(Pi),_)))}Ci.add(Is),Ai.add(Os),Pi.add(ks)}r.isSkinnedMesh&&(r.boneTransform(h,Ci),r.boneTransform(g,Ai),r.boneTransform(m,Pi));const S=Pm(r,e,t,n,Ci,Ai,Pi,fl);if(S){l&&(Fs.fromBufferAttribute(l,h),zs.fromBufferAttribute(l,g),Ns.fromBufferAttribute(l,m),S.uv=hi.getUV(fl,Ci,Ai,Pi,Fs,zs,Ns,new Qe)),d&&(Fs.fromBufferAttribute(d,h),zs.fromBufferAttribute(d,g),Ns.fromBufferAttribute(d,m),S.uv2=hi.getUV(fl,Ci,Ai,Pi,Fs,zs,Ns,new Qe));const C={a:h,b:g,c:m,normal:new H,materialIndex:0};hi.getNormal(Ci,Ai,Pi,C.normal),S.face=C}return S}class Ko extends Wn{constructor(e=1,t=1,n=1,i=1,s=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:f};const l=this;i=Math.floor(i),s=Math.floor(s),f=Math.floor(f);const d=[],h=[],g=[],m=[];let v=0,S=0;C("z","y","x",-1,-1,n,t,e,f,s,0),C("z","y","x",1,-1,n,t,-e,f,s,1),C("x","z","y",1,1,e,n,t,i,f,2),C("x","z","y",1,-1,e,n,-t,i,f,3),C("x","y","z",1,-1,e,t,n,i,s,4),C("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(d),this.setAttribute("position",new gi(h,3)),this.setAttribute("normal",new gi(g,3)),this.setAttribute("uv",new gi(m,2));function C(y,_,E,A,L,k,D,N,$,T,B){const te=k/$,ee=D/T,Ce=k/2,ye=D/2,Y=N/2,j=$+1,K=T+1;let de=0,fe=0;const Q=new H;for(let se=0;se<K;se++){const xe=se*ee-ye;for(let pe=0;pe<j;pe++){const ve=pe*te-Ce;Q[y]=ve*A,Q[_]=xe*L,Q[E]=Y,h.push(Q.x,Q.y,Q.z),Q[y]=0,Q[_]=0,Q[E]=N>0?1:-1,g.push(Q.x,Q.y,Q.z),m.push(pe/$),m.push(1-se/T),de+=1}}for(let se=0;se<T;se++)for(let xe=0;xe<$;xe++){const pe=v+xe+j*se,ve=v+xe+j*(se+1),ae=v+(xe+1)+j*(se+1),Ne=v+(xe+1)+j*se;d.push(pe,ve,Ne),d.push(ve,ae,Ne),fe+=6}l.addGroup(S,fe,B),S+=fe,v+=de}}static fromJSON(e){return new Ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function io(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function en(r){const e={};for(let t=0;t<r.length;t++){const n=io(r[t]);for(const i in n)e[i]=n[i]}return e}function Dm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}const Lm={clone:io,merge:en};var Rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Im=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dr extends Zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rm,this.fragmentShader=Im,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=Dm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const f=this.uniforms[i].value;f&&f.isTexture?t.uniforms[i]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[i]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[i]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[i]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[i]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[i]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[i]={type:"m4",value:f.toArray()}:t.uniforms[i]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Kf extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class An extends Kf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Du*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Du*2*Math.atan(Math.tan(Ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ha*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const f=this.view;if(this.view!==null&&this.view.enabled){const d=f.fullWidth,h=f.fullHeight;s+=f.offsetX*i/d,t-=f.offsetY*n/h,i*=f.width/d,n*=f.height/h}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ur=90,Br=1;class Om extends Rn{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new An(Ur,Br,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new H(1,0,0)),this.add(i);const s=new An(Ur,Br,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new H(-1,0,0)),this.add(s);const f=new An(Ur,Br,e,t);f.layers=this.layers,f.up.set(0,0,1),f.lookAt(new H(0,1,0)),this.add(f);const l=new An(Ur,Br,e,t);l.layers=this.layers,l.up.set(0,0,-1),l.lookAt(new H(0,-1,0)),this.add(l);const d=new An(Ur,Br,e,t);d.layers=this.layers,d.up.set(0,-1,0),d.lookAt(new H(0,0,1)),this.add(d);const h=new An(Ur,Br,e,t);h.layers=this.layers,h.up.set(0,-1,0),h.lookAt(new H(0,0,-1)),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,f,l,d,h]=this.children,g=e.getRenderTarget(),m=e.toneMapping,v=e.xr.enabled;e.toneMapping=mi,e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,f),e.setRenderTarget(n,3),e.render(t,l),e.setRenderTarget(n,4),e.render(t,d),n.texture.generateMipmaps=S,e.setRenderTarget(n,5),e.render(t,h),e.setRenderTarget(g),e.toneMapping=m,e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Jf extends Vn{constructor(e,t,n,i,s,f,l,d,h,g){e=e!==void 0?e:[],t=t!==void 0?t:eo,super(e,t,n,i,s,f,l,d,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class km extends ur{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Jf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ko(5,5,5),s=new dr({name:"CubemapFromEquirect",uniforms:io(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gn,blending:Oi});s.uniforms.tEquirect.value=t;const f=new pi(i,s),l=t.minFilter;return t.minFilter===oa&&(t.minFilter=Cn),new Om(1,10,this).update(e,f),t.minFilter=l,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,n,i);e.setRenderTarget(s)}}const dl=new H,Fm=new H,zm=new Dn;class Ki{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=dl.subVectors(n,t).cross(Fm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(dl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zm.getNormalMatrix(e),i=this.coplanarPoint(dl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new sa,Gs=new H;class Qf{constructor(e=new Ki,t=new Ki,n=new Ki,i=new Ki,s=new Ki,f=new Ki){this.planes=[e,t,n,i,s,f]}set(e,t,n,i,s,f){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(s),l[5].copy(f),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],f=n[2],l=n[3],d=n[4],h=n[5],g=n[6],m=n[7],v=n[8],S=n[9],C=n[10],y=n[11],_=n[12],E=n[13],A=n[14],L=n[15];return t[0].setComponents(l-i,m-d,y-v,L-_).normalize(),t[1].setComponents(l+i,m+d,y+v,L+_).normalize(),t[2].setComponents(l+s,m+h,y+S,L+E).normalize(),t[3].setComponents(l-s,m-h,y-S,L-E).normalize(),t[4].setComponents(l-f,m-g,y-C,L-A).normalize(),t[5].setComponents(l+f,m+g,y+C,L+A).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Gs.x=i.normal.x>0?e.max.x:e.min.x,Gs.y=i.normal.y>0?e.max.y:e.min.y,Gs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ed(){let r=null,e=!1,t=null,n=null;function i(s,f){t(s,f),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Nm(r,e){const t=e.isWebGL2,n=new WeakMap;function i(h,g){const m=h.array,v=h.usage,S=r.createBuffer();r.bindBuffer(g,S),r.bufferData(g,m,v),h.onUploadCallback();let C;if(m instanceof Float32Array)C=5126;else if(m instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)C=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else C=5123;else if(m instanceof Int16Array)C=5122;else if(m instanceof Uint32Array)C=5125;else if(m instanceof Int32Array)C=5124;else if(m instanceof Int8Array)C=5120;else if(m instanceof Uint8Array)C=5121;else if(m instanceof Uint8ClampedArray)C=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:C,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version}}function s(h,g,m){const v=g.array,S=g.updateRange;r.bindBuffer(m,h),S.count===-1?r.bufferSubData(m,0,v):(t?r.bufferSubData(m,S.offset*v.BYTES_PER_ELEMENT,v,S.offset,S.count):r.bufferSubData(m,S.offset*v.BYTES_PER_ELEMENT,v.subarray(S.offset,S.offset+S.count)),S.count=-1)}function f(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const g=n.get(h);g&&(r.deleteBuffer(g.buffer),n.delete(h))}function d(h,g){if(h.isGLBufferAttribute){const v=n.get(h);(!v||v.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const m=n.get(h);m===void 0?n.set(h,i(h,g)):m.version<h.version&&(s(m.buffer,h,g),m.version=h.version)}return{get:f,remove:l,update:d}}class Yl extends Wn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,f=t/2,l=Math.floor(n),d=Math.floor(i),h=l+1,g=d+1,m=e/l,v=t/d,S=[],C=[],y=[],_=[];for(let E=0;E<g;E++){const A=E*v-f;for(let L=0;L<h;L++){const k=L*m-s;C.push(k,-A,0),y.push(0,0,1),_.push(L/l),_.push(1-E/d)}}for(let E=0;E<d;E++)for(let A=0;A<l;A++){const L=A+h*E,k=A+h*(E+1),D=A+1+h*(E+1),N=A+1+h*E;S.push(L,k,N),S.push(k,D,N)}this.setIndex(S),this.setAttribute("position",new gi(C,3)),this.setAttribute("normal",new gi(y,3)),this.setAttribute("uv",new gi(_,2))}static fromJSON(e){return new Yl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Bm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Wm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jm="vec3 transformed = vec3( position );",qm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xm=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Ym=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$m=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,og=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ag=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,cg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ug=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fg="gl_FragColor = linearToOutputTexel( gl_FragColor );",dg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_g=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,wg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Mg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Eg=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Tg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cg=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Rg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ig=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Og=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,zg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ng=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Bg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Gg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$g=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Zg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Kg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Jg=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,iv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,rv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ov=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,sv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,av=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,cv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mv=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,gv=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vv=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,_v=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,bv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ev=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cv=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Av=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Pv=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Dv=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Lv=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Rv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Iv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Ov=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,kv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zv=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uv=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Wv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yv=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$v=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zv=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kv=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,t0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,n0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,o0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,c0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,d0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Je={alphamap_fragment:Um,alphamap_pars_fragment:Bm,alphatest_fragment:Gm,alphatest_pars_fragment:Wm,aomap_fragment:Vm,aomap_pars_fragment:Hm,begin_vertex:jm,beginnormal_vertex:qm,bsdfs:Xm,iridescence_fragment:Ym,bumpmap_pars_fragment:$m,clipping_planes_fragment:Zm,clipping_planes_pars_fragment:Km,clipping_planes_pars_vertex:Jm,clipping_planes_vertex:Qm,color_fragment:eg,color_pars_fragment:tg,color_pars_vertex:ng,color_vertex:ig,common:rg,cube_uv_reflection_fragment:og,defaultnormal_vertex:sg,displacementmap_pars_vertex:ag,displacementmap_vertex:lg,emissivemap_fragment:cg,emissivemap_pars_fragment:ug,encodings_fragment:fg,encodings_pars_fragment:dg,envmap_fragment:hg,envmap_common_pars_fragment:pg,envmap_pars_fragment:mg,envmap_pars_vertex:gg,envmap_physical_pars_fragment:Cg,envmap_vertex:vg,fog_vertex:_g,fog_pars_vertex:yg,fog_fragment:xg,fog_pars_fragment:bg,gradientmap_pars_fragment:Sg,lightmap_fragment:wg,lightmap_pars_fragment:Mg,lights_lambert_vertex:Eg,lights_pars_begin:Tg,lights_toon_fragment:Ag,lights_toon_pars_fragment:Pg,lights_phong_fragment:Dg,lights_phong_pars_fragment:Lg,lights_physical_fragment:Rg,lights_physical_pars_fragment:Ig,lights_fragment_begin:Og,lights_fragment_maps:kg,lights_fragment_end:Fg,logdepthbuf_fragment:zg,logdepthbuf_pars_fragment:Ng,logdepthbuf_pars_vertex:Ug,logdepthbuf_vertex:Bg,map_fragment:Gg,map_pars_fragment:Wg,map_particle_fragment:Vg,map_particle_pars_fragment:Hg,metalnessmap_fragment:jg,metalnessmap_pars_fragment:qg,morphcolor_vertex:Xg,morphnormal_vertex:Yg,morphtarget_pars_vertex:$g,morphtarget_vertex:Zg,normal_fragment_begin:Kg,normal_fragment_maps:Jg,normal_pars_fragment:Qg,normal_pars_vertex:ev,normal_vertex:tv,normalmap_pars_fragment:nv,clearcoat_normal_fragment_begin:iv,clearcoat_normal_fragment_maps:rv,clearcoat_pars_fragment:ov,iridescence_pars_fragment:sv,output_fragment:av,packing:lv,premultiplied_alpha_fragment:cv,project_vertex:uv,dithering_fragment:fv,dithering_pars_fragment:dv,roughnessmap_fragment:hv,roughnessmap_pars_fragment:pv,shadowmap_pars_fragment:mv,shadowmap_pars_vertex:gv,shadowmap_vertex:vv,shadowmask_pars_fragment:_v,skinbase_vertex:yv,skinning_pars_vertex:xv,skinning_vertex:bv,skinnormal_vertex:Sv,specularmap_fragment:wv,specularmap_pars_fragment:Mv,tonemapping_fragment:Ev,tonemapping_pars_fragment:Tv,transmission_fragment:Cv,transmission_pars_fragment:Av,uv_pars_fragment:Pv,uv_pars_vertex:Dv,uv_vertex:Lv,uv2_pars_fragment:Rv,uv2_pars_vertex:Iv,uv2_vertex:Ov,worldpos_vertex:kv,background_vert:Fv,background_frag:zv,cube_vert:Nv,cube_frag:Uv,depth_vert:Bv,depth_frag:Gv,distanceRGBA_vert:Wv,distanceRGBA_frag:Vv,equirect_vert:Hv,equirect_frag:jv,linedashed_vert:qv,linedashed_frag:Xv,meshbasic_vert:Yv,meshbasic_frag:$v,meshlambert_vert:Zv,meshlambert_frag:Kv,meshmatcap_vert:Jv,meshmatcap_frag:Qv,meshnormal_vert:e0,meshnormal_frag:t0,meshphong_vert:n0,meshphong_frag:i0,meshphysical_vert:r0,meshphysical_frag:o0,meshtoon_vert:s0,meshtoon_frag:a0,points_vert:l0,points_frag:c0,shadow_vert:u0,shadow_frag:f0,sprite_vert:d0,sprite_frag:h0},Pe={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Dn},uv2Transform:{value:new Dn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dn}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dn}}},Zn={basic:{uniforms:en([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:en([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.fog,Pe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:en([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:en([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:en([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:en([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:en([Pe.points,Pe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:en([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:en([Pe.common,Pe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:en([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:en([Pe.sprite,Pe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Dn},t2D:{value:null}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},cube:{uniforms:en([Pe.envmap,{opacity:{value:1}}]),vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:en([Pe.common,Pe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:en([Pe.lights,Pe.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Zn.physical={uniforms:en([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};function p0(r,e,t,n,i,s){const f=new Ze(0);let l=i===!0?0:1,d,h,g=null,m=0,v=null;function S(y,_){let E=!1,A=_.isScene===!0?_.background:null;A&&A.isTexture&&(A=e.get(A));const L=r.xr,k=L.getSession&&L.getSession();k&&k.environmentBlendMode==="additive"&&(A=null),A===null?C(f,l):A&&A.isColor&&(C(A,1),E=!0),(r.autoClear||E)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),A&&(A.isCubeTexture||A.mapping===ra)?(h===void 0&&(h=new pi(new Ko(1,1,1),new dr({name:"BackgroundCubeMaterial",uniforms:io(Zn.cube.uniforms),vertexShader:Zn.cube.vertexShader,fragmentShader:Zn.cube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,N,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,(g!==A||m!==A.version||v!==r.toneMapping)&&(h.material.needsUpdate=!0,g=A,m=A.version,v=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(d===void 0&&(d=new pi(new Yl(2,2),new dr({name:"BackgroundMaterial",uniforms:io(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Vo,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(d)),d.material.uniforms.t2D.value=A,A.matrixAutoUpdate===!0&&A.updateMatrix(),d.material.uniforms.uvTransform.value.copy(A.matrix),(g!==A||m!==A.version||v!==r.toneMapping)&&(d.material.needsUpdate=!0,g=A,m=A.version,v=r.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null))}function C(y,_){t.buffers.color.setClear(y.r,y.g,y.b,_,s)}return{getClearColor:function(){return f},setClearColor:function(y,_=1){f.set(y),l=_,C(f,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,C(f,l)},render:S}}function m0(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),f=n.isWebGL2||s!==null,l={},d=_(null);let h=d,g=!1;function m(Y,j,K,de,fe){let Q=!1;if(f){const se=y(de,K,j);h!==se&&(h=se,S(h.object)),Q=E(Y,de,K,fe),Q&&A(Y,de,K,fe)}else{const se=j.wireframe===!0;(h.geometry!==de.id||h.program!==K.id||h.wireframe!==se)&&(h.geometry=de.id,h.program=K.id,h.wireframe=se,Q=!0)}fe!==null&&t.update(fe,34963),(Q||g)&&(g=!1,T(Y,j,K,de),fe!==null&&r.bindBuffer(34963,t.get(fe).buffer))}function v(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function S(Y){return n.isWebGL2?r.bindVertexArray(Y):s.bindVertexArrayOES(Y)}function C(Y){return n.isWebGL2?r.deleteVertexArray(Y):s.deleteVertexArrayOES(Y)}function y(Y,j,K){const de=K.wireframe===!0;let fe=l[Y.id];fe===void 0&&(fe={},l[Y.id]=fe);let Q=fe[j.id];Q===void 0&&(Q={},fe[j.id]=Q);let se=Q[de];return se===void 0&&(se=_(v()),Q[de]=se),se}function _(Y){const j=[],K=[],de=[];for(let fe=0;fe<i;fe++)j[fe]=0,K[fe]=0,de[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:K,attributeDivisors:de,object:Y,attributes:{},index:null}}function E(Y,j,K,de){const fe=h.attributes,Q=j.attributes;let se=0;const xe=K.getAttributes();for(const pe in xe)if(xe[pe].location>=0){const ae=fe[pe];let Ne=Q[pe];if(Ne===void 0&&(pe==="instanceMatrix"&&Y.instanceMatrix&&(Ne=Y.instanceMatrix),pe==="instanceColor"&&Y.instanceColor&&(Ne=Y.instanceColor)),ae===void 0||ae.attribute!==Ne||Ne&&ae.data!==Ne.data)return!0;se++}return h.attributesNum!==se||h.index!==de}function A(Y,j,K,de){const fe={},Q=j.attributes;let se=0;const xe=K.getAttributes();for(const pe in xe)if(xe[pe].location>=0){let ae=Q[pe];ae===void 0&&(pe==="instanceMatrix"&&Y.instanceMatrix&&(ae=Y.instanceMatrix),pe==="instanceColor"&&Y.instanceColor&&(ae=Y.instanceColor));const Ne={};Ne.attribute=ae,ae&&ae.data&&(Ne.data=ae.data),fe[pe]=Ne,se++}h.attributes=fe,h.attributesNum=se,h.index=de}function L(){const Y=h.newAttributes;for(let j=0,K=Y.length;j<K;j++)Y[j]=0}function k(Y){D(Y,0)}function D(Y,j){const K=h.newAttributes,de=h.enabledAttributes,fe=h.attributeDivisors;K[Y]=1,de[Y]===0&&(r.enableVertexAttribArray(Y),de[Y]=1),fe[Y]!==j&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Y,j),fe[Y]=j)}function N(){const Y=h.newAttributes,j=h.enabledAttributes;for(let K=0,de=j.length;K<de;K++)j[K]!==Y[K]&&(r.disableVertexAttribArray(K),j[K]=0)}function $(Y,j,K,de,fe,Q){n.isWebGL2===!0&&(K===5124||K===5125)?r.vertexAttribIPointer(Y,j,K,fe,Q):r.vertexAttribPointer(Y,j,K,de,fe,Q)}function T(Y,j,K,de){if(n.isWebGL2===!1&&(Y.isInstancedMesh||de.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;L();const fe=de.attributes,Q=K.getAttributes(),se=j.defaultAttributeValues;for(const xe in Q){const pe=Q[xe];if(pe.location>=0){let ve=fe[xe];if(ve===void 0&&(xe==="instanceMatrix"&&Y.instanceMatrix&&(ve=Y.instanceMatrix),xe==="instanceColor"&&Y.instanceColor&&(ve=Y.instanceColor)),ve!==void 0){const ae=ve.normalized,Ne=ve.itemSize,le=t.get(ve);if(le===void 0)continue;const ot=le.buffer,Ue=le.type,ze=le.bytesPerElement;if(ve.isInterleavedBufferAttribute){const Re=ve.data,et=Re.stride,Xe=ve.offset;if(Re.isInstancedInterleavedBuffer){for(let ke=0;ke<pe.locationSize;ke++)D(pe.location+ke,Re.meshPerAttribute);Y.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let ke=0;ke<pe.locationSize;ke++)k(pe.location+ke);r.bindBuffer(34962,ot);for(let ke=0;ke<pe.locationSize;ke++)$(pe.location+ke,Ne/pe.locationSize,Ue,ae,et*ze,(Xe+Ne/pe.locationSize*ke)*ze)}else{if(ve.isInstancedBufferAttribute){for(let Re=0;Re<pe.locationSize;Re++)D(pe.location+Re,ve.meshPerAttribute);Y.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Re=0;Re<pe.locationSize;Re++)k(pe.location+Re);r.bindBuffer(34962,ot);for(let Re=0;Re<pe.locationSize;Re++)$(pe.location+Re,Ne/pe.locationSize,Ue,ae,Ne*ze,Ne/pe.locationSize*Re*ze)}}else if(se!==void 0){const ae=se[xe];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv(pe.location,ae);break;case 3:r.vertexAttrib3fv(pe.location,ae);break;case 4:r.vertexAttrib4fv(pe.location,ae);break;default:r.vertexAttrib1fv(pe.location,ae)}}}}N()}function B(){Ce();for(const Y in l){const j=l[Y];for(const K in j){const de=j[K];for(const fe in de)C(de[fe].object),delete de[fe];delete j[K]}delete l[Y]}}function te(Y){if(l[Y.id]===void 0)return;const j=l[Y.id];for(const K in j){const de=j[K];for(const fe in de)C(de[fe].object),delete de[fe];delete j[K]}delete l[Y.id]}function ee(Y){for(const j in l){const K=l[j];if(K[Y.id]===void 0)continue;const de=K[Y.id];for(const fe in de)C(de[fe].object),delete de[fe];delete K[Y.id]}}function Ce(){ye(),g=!0,h!==d&&(h=d,S(h.object))}function ye(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:m,reset:Ce,resetDefaultState:ye,dispose:B,releaseStatesOfGeometry:te,releaseStatesOfProgram:ee,initAttributes:L,enableAttribute:k,disableUnusedAttributes:N}}function g0(r,e,t,n){const i=n.isWebGL2;let s;function f(h){s=h}function l(h,g){r.drawArrays(s,h,g),t.update(g,s,1)}function d(h,g,m){if(m===0)return;let v,S;if(i)v=r,S="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[S](s,h,g,m),t.update(g,s,m)}this.setMode=f,this.render=l,this.renderInstances=d}function v0(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");n=r.getParameter($.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s($){if($==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";$="mediump"}return $==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const f=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let l=t.precision!==void 0?t.precision:"highp";const d=s(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const h=f||e.has("WEBGL_draw_buffers"),g=t.logarithmicDepthBuffer===!0,m=r.getParameter(34930),v=r.getParameter(35660),S=r.getParameter(3379),C=r.getParameter(34076),y=r.getParameter(34921),_=r.getParameter(36347),E=r.getParameter(36348),A=r.getParameter(36349),L=v>0,k=f||e.has("OES_texture_float"),D=L&&k,N=f?r.getParameter(36183):0;return{isWebGL2:f,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:s,precision:l,logarithmicDepthBuffer:g,maxTextures:m,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:C,maxAttributes:y,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:A,vertexTextures:L,floatFragmentTextures:k,floatVertexTextures:D,maxSamples:N}}function _0(r){const e=this;let t=null,n=0,i=!1,s=!1;const f=new Ki,l=new Dn,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v,S){const C=m.length!==0||v||n!==0||i;return i=v,t=g(m,S,0),n=m.length,C},this.beginShadows=function(){s=!0,g(null)},this.endShadows=function(){s=!1,h()},this.setState=function(m,v,S){const C=m.clippingPlanes,y=m.clipIntersection,_=m.clipShadows,E=r.get(m);if(!i||C===null||C.length===0||s&&!_)s?g(null):h();else{const A=s?0:n,L=A*4;let k=E.clippingState||null;d.value=k,k=g(C,v,L,S);for(let D=0;D!==L;++D)k[D]=t[D];E.clippingState=k,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function g(m,v,S,C){const y=m!==null?m.length:0;let _=null;if(y!==0){if(_=d.value,C!==!0||_===null){const E=S+y*4,A=v.matrixWorldInverse;l.getNormalMatrix(A),(_===null||_.length<E)&&(_=new Float32Array(E));for(let L=0,k=S;L!==y;++L,k+=4)f.copy(m[L]).applyMatrix4(A,l),f.normal.toArray(_,k),_[k+3]=f.constant}d.value=_,d.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,_}}function y0(r){let e=new WeakMap;function t(f,l){return l===Dl?f.mapping=eo:l===Ll&&(f.mapping=to),f}function n(f){if(f&&f.isTexture&&f.isRenderTargetTexture===!1){const l=f.mapping;if(l===Dl||l===Ll)if(e.has(f)){const d=e.get(f).texture;return t(d,f.mapping)}else{const d=f.image;if(d&&d.height>0){const h=new km(d.height/2);return h.fromEquirectangularTexture(r,f),e.set(f,h),f.addEventListener("dispose",i),t(h.texture,f.mapping)}else return null}}return f}function i(f){const l=f.target;l.removeEventListener("dispose",i);const d=e.get(l);d!==void 0&&(e.delete(l),d.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class x0 extends Kf{constructor(e=-1,t=1,n=1,i=-1,s=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,f=n+e,l=i+t,d=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,f=s+h*this.view.width,l-=g*this.view.offsetY,d=l-g*this.view.height}this.projectionMatrix.makeOrthographic(s,f,l,d,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xr=4,Vu=[.125,.215,.35,.446,.526,.582],Qi=20,hl=new x0,Hu=new Ze;let pl=null;const Ji=(1+Math.sqrt(5))/2,Wr=1/Ji,ju=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Ji,Wr),new H(0,Ji,-Wr),new H(Wr,0,Ji),new H(-Wr,0,Ji),new H(Ji,Wr,0),new H(-Ji,Wr,0)];class qu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){pl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pl),e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===eo||e.mapping===to?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Ho,format:Jn,encoding:cr,depthBuffer:!1},i=Xu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=b0(s)),this._blurMaterial=S0(s,e,t)}return i}_compileMaterial(e){const t=new pi(this._lodPlanes[0],e);this._renderer.compile(t,hl)}_sceneToCubeUV(e,t,n,i){const l=new An(90,1,t,n),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],g=this._renderer,m=g.autoClear,v=g.toneMapping;g.getClearColor(Hu),g.toneMapping=mi,g.autoClear=!1;const S=new Xl({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),C=new pi(new Ko,S);let y=!1;const _=e.background;_?_.isColor&&(S.color.copy(_),e.background=null,y=!0):(S.color.copy(Hu),y=!0);for(let E=0;E<6;E++){const A=E%3;A===0?(l.up.set(0,d[E],0),l.lookAt(h[E],0,0)):A===1?(l.up.set(0,0,d[E]),l.lookAt(0,h[E],0)):(l.up.set(0,d[E],0),l.lookAt(0,0,h[E]));const L=this._cubeSize;Ws(i,A*L,E>2?L:0,L,L),g.setRenderTarget(i),y&&g.render(C,l),g.render(e,l)}C.geometry.dispose(),C.material.dispose(),g.toneMapping=v,g.autoClear=m,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===eo||e.mapping===to;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$u()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yu());const s=i?this._cubemapMaterial:this._equirectMaterial,f=new pi(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const d=this._cubeSize;Ws(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(f,hl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),f=ju[(i-1)%ju.length];this._blur(e,i-1,i,s,f)}t.autoClear=n}_blur(e,t,n,i,s){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,n,i,"latitudinal",s),this._halfBlur(f,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,f,l){const d=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,m=new pi(this._lodPlanes[i],h),v=h.uniforms,S=this._sizeLods[n]-1,C=isFinite(s)?Math.PI/(2*S):2*Math.PI/(2*Qi-1),y=s/C,_=isFinite(s)?1+Math.floor(g*y):Qi;_>Qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Qi}`);const E=[];let A=0;for(let $=0;$<Qi;++$){const T=$/y,B=Math.exp(-T*T/2);E.push(B),$===0?A+=B:$<_&&(A+=2*B)}for(let $=0;$<E.length;$++)E[$]=E[$]/A;v.envMap.value=e.texture,v.samples.value=_,v.weights.value=E,v.latitudinal.value=f==="latitudinal",l&&(v.poleAxis.value=l);const{_lodMax:L}=this;v.dTheta.value=C,v.mipInt.value=L-n;const k=this._sizeLods[i],D=3*k*(i>L-Xr?i-L+Xr:0),N=4*(this._cubeSize-k);Ws(t,D,N,3*k,2*k),d.setRenderTarget(t),d.render(m,hl)}}function b0(r){const e=[],t=[],n=[];let i=r;const s=r-Xr+1+Vu.length;for(let f=0;f<s;f++){const l=Math.pow(2,i);t.push(l);let d=1/l;f>r-Xr?d=Vu[f-r+Xr-1]:f===0&&(d=0),n.push(d);const h=1/(l-2),g=-h,m=1+h,v=[g,g,m,g,m,m,g,g,m,m,g,m],S=6,C=6,y=3,_=2,E=1,A=new Float32Array(y*C*S),L=new Float32Array(_*C*S),k=new Float32Array(E*C*S);for(let N=0;N<S;N++){const $=N%3*2/3-1,T=N>2?0:-1,B=[$,T,0,$+2/3,T,0,$+2/3,T+1,0,$,T,0,$+2/3,T+1,0,$,T+1,0];A.set(B,y*C*N),L.set(v,_*C*N);const te=[N,N,N,N,N,N];k.set(te,E*C*N)}const D=new Wn;D.setAttribute("position",new tn(A,y)),D.setAttribute("uv",new tn(L,_)),D.setAttribute("faceIndex",new tn(k,E)),e.push(D),i>Xr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xu(r,e,t){const n=new ur(r,e,t);return n.texture.mapping=ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ws(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function S0(r,e,t){const n=new Float32Array(Qi),i=new H(0,1,0);return new dr({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Yu(){return new dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function $u(){return new dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function $l(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function w0(r){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const d=l.mapping,h=d===Dl||d===Ll,g=d===eo||d===to;if(h||g)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let m=e.get(l);return t===null&&(t=new qu(r)),m=h?t.fromEquirectangular(l,m):t.fromCubemap(l,m),e.set(l,m),m.texture}else{if(e.has(l))return e.get(l).texture;{const m=l.image;if(h&&m&&m.height>0||g&&m&&i(m)){t===null&&(t=new qu(r));const v=h?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,v),l.addEventListener("dispose",s),v.texture}else return null}}}return l}function i(l){let d=0;const h=6;for(let g=0;g<h;g++)l[g]!==void 0&&d++;return d===h}function s(l){const d=l.target;d.removeEventListener("dispose",s);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:f}}function M0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function E0(r,e,t,n){const i={},s=new WeakMap;function f(m){const v=m.target;v.index!==null&&e.remove(v.index);for(const C in v.attributes)e.remove(v.attributes[C]);v.removeEventListener("dispose",f),delete i[v.id];const S=s.get(v);S&&(e.remove(S),s.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function l(m,v){return i[v.id]===!0||(v.addEventListener("dispose",f),i[v.id]=!0,t.memory.geometries++),v}function d(m){const v=m.attributes;for(const C in v)e.update(v[C],34962);const S=m.morphAttributes;for(const C in S){const y=S[C];for(let _=0,E=y.length;_<E;_++)e.update(y[_],34962)}}function h(m){const v=[],S=m.index,C=m.attributes.position;let y=0;if(S!==null){const A=S.array;y=S.version;for(let L=0,k=A.length;L<k;L+=3){const D=A[L+0],N=A[L+1],$=A[L+2];v.push(D,N,N,$,$,D)}}else{const A=C.array;y=C.version;for(let L=0,k=A.length/3-1;L<k;L+=3){const D=L+0,N=L+1,$=L+2;v.push(D,N,N,$,$,D)}}const _=new(Wf(v)?Zf:$f)(v,1);_.version=y;const E=s.get(m);E&&e.remove(E),s.set(m,_)}function g(m){const v=s.get(m);if(v){const S=m.index;S!==null&&v.version<S.version&&h(m)}else h(m);return s.get(m)}return{get:l,update:d,getWireframeAttribute:g}}function T0(r,e,t,n){const i=n.isWebGL2;let s;function f(v){s=v}let l,d;function h(v){l=v.type,d=v.bytesPerElement}function g(v,S){r.drawElements(s,S,l,v*d),t.update(S,s,1)}function m(v,S,C){if(C===0)return;let y,_;if(i)y=r,_="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[_](s,S,l,v*d,C),t.update(S,s,C)}this.setMode=f,this.setIndex=h,this.render=g,this.renderInstances=m}function C0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,f,l){switch(t.calls++,f){case 4:t.triangles+=l*(s/3);break;case 1:t.lines+=l*(s/2);break;case 3:t.lines+=l*(s-1);break;case 2:t.lines+=l*s;break;case 0:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function A0(r,e){return r[0]-e[0]}function P0(r,e){return Math.abs(e[1])-Math.abs(r[1])}function ml(r,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(t)}function D0(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,f=new Ht,l=[];for(let h=0;h<8;h++)l[h]=[h,0];function d(h,g,m,v){const S=h.morphTargetInfluences;if(e.isWebGL2===!0){const y=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,_=y!==void 0?y.length:0;let E=s.get(g);if(E===void 0||E.count!==_){let K=function(){Y.dispose(),s.delete(g),g.removeEventListener("dispose",K)};var C=K;E!==void 0&&E.texture.dispose();const k=g.morphAttributes.position!==void 0,D=g.morphAttributes.normal!==void 0,N=g.morphAttributes.color!==void 0,$=g.morphAttributes.position||[],T=g.morphAttributes.normal||[],B=g.morphAttributes.color||[];let te=0;k===!0&&(te=1),D===!0&&(te=2),N===!0&&(te=3);let ee=g.attributes.position.count*te,Ce=1;ee>e.maxTextureSize&&(Ce=Math.ceil(ee/e.maxTextureSize),ee=e.maxTextureSize);const ye=new Float32Array(ee*Ce*4*_),Y=new qf(ye,ee,Ce,_);Y.type=ir,Y.needsUpdate=!0;const j=te*4;for(let de=0;de<_;de++){const fe=$[de],Q=T[de],se=B[de],xe=ee*Ce*4*de;for(let pe=0;pe<fe.count;pe++){const ve=pe*j;k===!0&&(f.fromBufferAttribute(fe,pe),fe.normalized===!0&&ml(f,fe),ye[xe+ve+0]=f.x,ye[xe+ve+1]=f.y,ye[xe+ve+2]=f.z,ye[xe+ve+3]=0),D===!0&&(f.fromBufferAttribute(Q,pe),Q.normalized===!0&&ml(f,Q),ye[xe+ve+4]=f.x,ye[xe+ve+5]=f.y,ye[xe+ve+6]=f.z,ye[xe+ve+7]=0),N===!0&&(f.fromBufferAttribute(se,pe),se.normalized===!0&&ml(f,se),ye[xe+ve+8]=f.x,ye[xe+ve+9]=f.y,ye[xe+ve+10]=f.z,ye[xe+ve+11]=se.itemSize===4?f.w:1)}}E={count:_,texture:Y,size:new Qe(ee,Ce)},s.set(g,E),g.addEventListener("dispose",K)}let A=0;for(let k=0;k<S.length;k++)A+=S[k];const L=g.morphTargetsRelative?1:1-A;v.getUniforms().setValue(r,"morphTargetBaseInfluence",L),v.getUniforms().setValue(r,"morphTargetInfluences",S),v.getUniforms().setValue(r,"morphTargetsTexture",E.texture,t),v.getUniforms().setValue(r,"morphTargetsTextureSize",E.size)}else{const y=S===void 0?0:S.length;let _=n[g.id];if(_===void 0||_.length!==y){_=[];for(let D=0;D<y;D++)_[D]=[D,0];n[g.id]=_}for(let D=0;D<y;D++){const N=_[D];N[0]=D,N[1]=S[D]}_.sort(P0);for(let D=0;D<8;D++)D<y&&_[D][1]?(l[D][0]=_[D][0],l[D][1]=_[D][1]):(l[D][0]=Number.MAX_SAFE_INTEGER,l[D][1]=0);l.sort(A0);const E=g.morphAttributes.position,A=g.morphAttributes.normal;let L=0;for(let D=0;D<8;D++){const N=l[D],$=N[0],T=N[1];$!==Number.MAX_SAFE_INTEGER&&T?(E&&g.getAttribute("morphTarget"+D)!==E[$]&&g.setAttribute("morphTarget"+D,E[$]),A&&g.getAttribute("morphNormal"+D)!==A[$]&&g.setAttribute("morphNormal"+D,A[$]),i[D]=T,L+=T):(E&&g.hasAttribute("morphTarget"+D)===!0&&g.deleteAttribute("morphTarget"+D),A&&g.hasAttribute("morphNormal"+D)===!0&&g.deleteAttribute("morphNormal"+D),i[D]=0)}const k=g.morphTargetsRelative?1:1-L;v.getUniforms().setValue(r,"morphTargetBaseInfluence",k),v.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:d}}function L0(r,e,t,n){let i=new WeakMap;function s(d){const h=n.render.frame,g=d.geometry,m=e.get(d,g);return i.get(m)!==h&&(e.update(m),i.set(m,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",l)===!1&&d.addEventListener("dispose",l),t.update(d.instanceMatrix,34962),d.instanceColor!==null&&t.update(d.instanceColor,34962)),m}function f(){i=new WeakMap}function l(d){const h=d.target;h.removeEventListener("dispose",l),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:f}}const td=new Vn,nd=new qf,id=new ym,rd=new Jf,Zu=[],Ku=[],Ju=new Float32Array(16),Qu=new Float32Array(9),ef=new Float32Array(4);function ro(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Zu[i];if(s===void 0&&(s=new Float32Array(i),Zu[i]=s),e!==0){n.toArray(s,0);for(let f=1,l=0;f!==e;++f)l+=t,r[f].toArray(s,l)}return s}function an(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ln(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function aa(r,e){let t=Ku[e];t===void 0&&(t=new Int32Array(e),Ku[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function R0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function I0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2fv(this.addr,e),ln(t,e)}}function O0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;r.uniform3fv(this.addr,e),ln(t,e)}}function k0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4fv(this.addr,e),ln(t,e)}}function F0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;ef.set(n),r.uniformMatrix2fv(this.addr,!1,ef),ln(t,n)}}function z0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;Qu.set(n),r.uniformMatrix3fv(this.addr,!1,Qu),ln(t,n)}}function N0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;Ju.set(n),r.uniformMatrix4fv(this.addr,!1,Ju),ln(t,n)}}function U0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function B0(r,e){const t=this.cache;an(t,e)||(r.uniform2iv(this.addr,e),ln(t,e))}function G0(r,e){const t=this.cache;an(t,e)||(r.uniform3iv(this.addr,e),ln(t,e))}function W0(r,e){const t=this.cache;an(t,e)||(r.uniform4iv(this.addr,e),ln(t,e))}function V0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function H0(r,e){const t=this.cache;an(t,e)||(r.uniform2uiv(this.addr,e),ln(t,e))}function j0(r,e){const t=this.cache;an(t,e)||(r.uniform3uiv(this.addr,e),ln(t,e))}function q0(r,e){const t=this.cache;an(t,e)||(r.uniform4uiv(this.addr,e),ln(t,e))}function X0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||td,i)}function Y0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||id,i)}function $0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||rd,i)}function Z0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||nd,i)}function K0(r){switch(r){case 5126:return R0;case 35664:return I0;case 35665:return O0;case 35666:return k0;case 35674:return F0;case 35675:return z0;case 35676:return N0;case 5124:case 35670:return U0;case 35667:case 35671:return B0;case 35668:case 35672:return G0;case 35669:case 35673:return W0;case 5125:return V0;case 36294:return H0;case 36295:return j0;case 36296:return q0;case 35678:case 36198:case 36298:case 36306:case 35682:return X0;case 35679:case 36299:case 36307:return Y0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return Z0}}function J0(r,e){r.uniform1fv(this.addr,e)}function Q0(r,e){const t=ro(e,this.size,2);r.uniform2fv(this.addr,t)}function e_(r,e){const t=ro(e,this.size,3);r.uniform3fv(this.addr,t)}function t_(r,e){const t=ro(e,this.size,4);r.uniform4fv(this.addr,t)}function n_(r,e){const t=ro(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function i_(r,e){const t=ro(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function r_(r,e){const t=ro(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function o_(r,e){r.uniform1iv(this.addr,e)}function s_(r,e){r.uniform2iv(this.addr,e)}function a_(r,e){r.uniform3iv(this.addr,e)}function l_(r,e){r.uniform4iv(this.addr,e)}function c_(r,e){r.uniform1uiv(this.addr,e)}function u_(r,e){r.uniform2uiv(this.addr,e)}function f_(r,e){r.uniform3uiv(this.addr,e)}function d_(r,e){r.uniform4uiv(this.addr,e)}function h_(r,e,t){const n=e.length,i=aa(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||td,i[s])}function p_(r,e,t){const n=e.length,i=aa(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||id,i[s])}function m_(r,e,t){const n=e.length,i=aa(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||rd,i[s])}function g_(r,e,t){const n=e.length,i=aa(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||nd,i[s])}function v_(r){switch(r){case 5126:return J0;case 35664:return Q0;case 35665:return e_;case 35666:return t_;case 35674:return n_;case 35675:return i_;case 35676:return r_;case 5124:case 35670:return o_;case 35667:case 35671:return s_;case 35668:case 35672:return a_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return u_;case 36295:return f_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}class __{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=K0(t.type)}}class y_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=v_(t.type)}}class x_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,f=i.length;s!==f;++s){const l=i[s];l.setValue(e,t[l.id],n)}}}const gl=/(\w+)(\])?(\[|\.)?/g;function tf(r,e){r.seq.push(e),r.map[e.id]=e}function b_(r,e,t){const n=r.name,i=n.length;for(gl.lastIndex=0;;){const s=gl.exec(n),f=gl.lastIndex;let l=s[1];const d=s[2]==="]",h=s[3];if(d&&(l=l|0),h===void 0||h==="["&&f+2===i){tf(t,h===void 0?new __(l,r,e):new y_(l,r,e));break}else{let m=t.map[l];m===void 0&&(m=new x_(l),tf(t,m)),t=m}}}class Ys{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),f=e.getUniformLocation(t,s.name);b_(s,f,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,f=t.length;s!==f;++s){const l=t[s],d=n[l.id];d.needsUpdate!==!1&&l.setValue(e,d.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const f=e[i];f.id in t&&n.push(f)}return n}}function nf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let S_=0;function w_(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let f=i;f<s;f++){const l=f+1;n.push(`${l===e?">":" "} ${l}: ${t[f]}`)}return n.join(`
`)}function M_(r){switch(r){case cr:return["Linear","( value )"];case It:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function rf(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const f=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+w_(r.getShaderSource(e),f)}else return i}function E_(r,e){const t=M_(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function T_(r,e){let t;switch(e){case jp:t="Linear";break;case qp:t="Reinhard";break;case Xp:t="OptimizedCineon";break;case Yp:t="ACESFilmic";break;case $p:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function C_(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fo).join(`
`)}function A_(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function P_(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),f=s.name;let l=1;s.type===35674&&(l=2),s.type===35675&&(l=3),s.type===35676&&(l=4),t[f]={type:s.type,location:r.getAttribLocation(e,f),locationSize:l}}return t}function Fo(r){return r!==""}function of(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const D_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fl(r){return r.replace(D_,L_)}function L_(r,e){const t=Je[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Fl(t)}const R_=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,I_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function af(r){return r.replace(I_,od).replace(R_,O_)}function O_(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),od(r,e,t,n)}function od(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function lf(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function k_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ff?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Sp?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ko&&(e="SHADOWMAP_TYPE_VSM"),e}function F_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case eo:case to:e="ENVMAP_TYPE_CUBE";break;case ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function z_(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case to:e="ENVMAP_MODE_REFRACTION";break}return e}function N_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Uf:e="ENVMAP_BLENDING_MULTIPLY";break;case Vp:e="ENVMAP_BLENDING_MIX";break;case Hp:e="ENVMAP_BLENDING_ADD";break}return e}function U_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function B_(r,e,t,n){const i=r.getContext(),s=t.defines;let f=t.vertexShader,l=t.fragmentShader;const d=k_(t),h=F_(t),g=z_(t),m=N_(t),v=U_(t),S=t.isWebGL2?"":C_(t),C=A_(s),y=i.createProgram();let _,E,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=[C].filter(Fo).join(`
`),_.length>0&&(_+=`
`),E=[S,C].filter(Fo).join(`
`),E.length>0&&(E+=`
`)):(_=[lf(t),"#define SHADER_NAME "+t.shaderName,C,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),E=[S,lf(t),"#define SHADER_NAME "+t.shaderName,C,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?Je.tonemapping_pars_fragment:"",t.toneMapping!==mi?T_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.encodings_pars_fragment,E_("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fo).join(`
`)),f=Fl(f),f=of(f,t),f=sf(f,t),l=Fl(l),l=of(l,t),l=sf(l,t),f=af(f),l=af(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,E=["#define varying in",t.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const L=A+_+f,k=A+E+l,D=nf(i,35633,L),N=nf(i,35632,k);if(i.attachShader(y,D),i.attachShader(y,N),t.index0AttributeName!==void 0?i.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y),r.debug.checkShaderErrors){const B=i.getProgramInfoLog(y).trim(),te=i.getShaderInfoLog(D).trim(),ee=i.getShaderInfoLog(N).trim();let Ce=!0,ye=!0;if(i.getProgramParameter(y,35714)===!1){Ce=!1;const Y=rf(i,D,"vertex"),j=rf(i,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,35715)+`

Program Info Log: `+B+`
`+Y+`
`+j)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(te===""||ee==="")&&(ye=!1);ye&&(this.diagnostics={runnable:Ce,programLog:B,vertexShader:{log:te,prefix:_},fragmentShader:{log:ee,prefix:E}})}i.deleteShader(D),i.deleteShader(N);let $;this.getUniforms=function(){return $===void 0&&($=new Ys(i,y)),$};let T;return this.getAttributes=function(){return T===void 0&&(T=P_(i,y)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.name=t.shaderName,this.id=S_++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=D,this.fragmentShader=N,this}let G_=0;class W_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),f=this._getShaderCacheForMaterial(e);return f.has(i)===!1&&(f.add(i),i.usedTimes++),f.has(s)===!1&&(f.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new V_(e);t.set(e,n)}return t.get(e)}}class V_{constructor(e){this.id=G_++,this.code=e,this.usedTimes=0}}function H_(r,e,t,n,i,s,f){const l=new Yf,d=new W_,h=[],g=i.isWebGL2,m=i.logarithmicDepthBuffer,v=i.vertexTextures;let S=i.precision;const C={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T,B,te,ee,Ce){const ye=ee.fog,Y=Ce.geometry,j=T.isMeshStandardMaterial?ee.environment:null,K=(T.isMeshStandardMaterial?t:e).get(T.envMap||j),de=!!K&&K.mapping===ra?K.image.height:null,fe=C[T.type];T.precision!==null&&(S=i.getMaxPrecision(T.precision),S!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",S,"instead."));const Q=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,se=Q!==void 0?Q.length:0;let xe=0;Y.morphAttributes.position!==void 0&&(xe=1),Y.morphAttributes.normal!==void 0&&(xe=2),Y.morphAttributes.color!==void 0&&(xe=3);let pe,ve,ae,Ne;if(fe){const et=Zn[fe];pe=et.vertexShader,ve=et.fragmentShader}else pe=T.vertexShader,ve=T.fragmentShader,d.update(T),ae=d.getVertexShaderID(T),Ne=d.getFragmentShaderID(T);const le=r.getRenderTarget(),ot=T.alphaTest>0,Ue=T.clearcoat>0,ze=T.iridescence>0;return{isWebGL2:g,shaderID:fe,shaderName:T.type,vertexShader:pe,fragmentShader:ve,defines:T.defines,customVertexShaderID:ae,customFragmentShaderID:Ne,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:S,instancing:Ce.isInstancedMesh===!0,instancingColor:Ce.isInstancedMesh===!0&&Ce.instanceColor!==null,supportsVertexTextures:v,outputEncoding:le===null?r.outputEncoding:le.isXRRenderTarget===!0?le.texture.encoding:cr,map:!!T.map,matcap:!!T.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:de,lightMap:!!T.lightMap,aoMap:!!T.aoMap,emissiveMap:!!T.emissiveMap,bumpMap:!!T.bumpMap,normalMap:!!T.normalMap,objectSpaceNormalMap:T.normalMapType===mm,tangentSpaceNormalMap:T.normalMapType===pm,decodeVideoTexture:!!T.map&&T.map.isVideoTexture===!0&&T.map.encoding===It,clearcoat:Ue,clearcoatMap:Ue&&!!T.clearcoatMap,clearcoatRoughnessMap:Ue&&!!T.clearcoatRoughnessMap,clearcoatNormalMap:Ue&&!!T.clearcoatNormalMap,iridescence:ze,iridescenceMap:ze&&!!T.iridescenceMap,iridescenceThicknessMap:ze&&!!T.iridescenceThicknessMap,displacementMap:!!T.displacementMap,roughnessMap:!!T.roughnessMap,metalnessMap:!!T.metalnessMap,specularMap:!!T.specularMap,specularIntensityMap:!!T.specularIntensityMap,specularColorMap:!!T.specularColorMap,opaque:T.transparent===!1&&T.blending===$r,alphaMap:!!T.alphaMap,alphaTest:ot,gradientMap:!!T.gradientMap,sheen:T.sheen>0,sheenColorMap:!!T.sheenColorMap,sheenRoughnessMap:!!T.sheenRoughnessMap,transmission:T.transmission>0,transmissionMap:!!T.transmissionMap,thicknessMap:!!T.thicknessMap,combine:T.combine,vertexTangents:!!T.normalMap&&!!Y.attributes.tangent,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUvs:!!T.map||!!T.bumpMap||!!T.normalMap||!!T.specularMap||!!T.alphaMap||!!T.emissiveMap||!!T.roughnessMap||!!T.metalnessMap||!!T.clearcoatMap||!!T.clearcoatRoughnessMap||!!T.clearcoatNormalMap||!!T.iridescenceMap||!!T.iridescenceThicknessMap||!!T.displacementMap||!!T.transmissionMap||!!T.thicknessMap||!!T.specularIntensityMap||!!T.specularColorMap||!!T.sheenColorMap||!!T.sheenRoughnessMap,uvsVertexOnly:!(!!T.map||!!T.bumpMap||!!T.normalMap||!!T.specularMap||!!T.alphaMap||!!T.emissiveMap||!!T.roughnessMap||!!T.metalnessMap||!!T.clearcoatNormalMap||!!T.iridescenceMap||!!T.iridescenceThicknessMap||T.transmission>0||!!T.transmissionMap||!!T.thicknessMap||!!T.specularIntensityMap||!!T.specularColorMap||T.sheen>0||!!T.sheenColorMap||!!T.sheenRoughnessMap)&&!!T.displacementMap,fog:!!ye,useFog:T.fog===!0,fogExp2:ye&&ye.isFogExp2,flatShading:!!T.flatShading,sizeAttenuation:T.sizeAttenuation,logarithmicDepthBuffer:m,skinning:Ce.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:xe,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&te.length>0,shadowMapType:r.shadowMap.type,toneMapping:T.toneMapped?r.toneMapping:mi,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ar,flipSided:T.side===Gn,useDepthPacking:!!T.depthPacking,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:T.extensions&&T.extensions.derivatives,extensionFragDepth:T.extensions&&T.extensions.fragDepth,extensionDrawBuffers:T.extensions&&T.extensions.drawBuffers,extensionShaderTextureLOD:T.extensions&&T.extensions.shaderTextureLOD,rendererExtensionFragDepth:g||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||n.has("EXT_shader_texture_lod"),customProgramCacheKey:T.customProgramCacheKey()}}function _(T){const B=[];if(T.shaderID?B.push(T.shaderID):(B.push(T.customVertexShaderID),B.push(T.customFragmentShaderID)),T.defines!==void 0)for(const te in T.defines)B.push(te),B.push(T.defines[te]);return T.isRawShaderMaterial===!1&&(E(B,T),A(B,T),B.push(r.outputEncoding)),B.push(T.customProgramCacheKey),B.join()}function E(T,B){T.push(B.precision),T.push(B.outputEncoding),T.push(B.envMapMode),T.push(B.envMapCubeUVHeight),T.push(B.combine),T.push(B.vertexUvs),T.push(B.fogExp2),T.push(B.sizeAttenuation),T.push(B.morphTargetsCount),T.push(B.morphAttributeCount),T.push(B.numDirLights),T.push(B.numPointLights),T.push(B.numSpotLights),T.push(B.numHemiLights),T.push(B.numRectAreaLights),T.push(B.numDirLightShadows),T.push(B.numPointLightShadows),T.push(B.numSpotLightShadows),T.push(B.shadowMapType),T.push(B.toneMapping),T.push(B.numClippingPlanes),T.push(B.numClipIntersection),T.push(B.depthPacking)}function A(T,B){l.disableAll(),B.isWebGL2&&l.enable(0),B.supportsVertexTextures&&l.enable(1),B.instancing&&l.enable(2),B.instancingColor&&l.enable(3),B.map&&l.enable(4),B.matcap&&l.enable(5),B.envMap&&l.enable(6),B.lightMap&&l.enable(7),B.aoMap&&l.enable(8),B.emissiveMap&&l.enable(9),B.bumpMap&&l.enable(10),B.normalMap&&l.enable(11),B.objectSpaceNormalMap&&l.enable(12),B.tangentSpaceNormalMap&&l.enable(13),B.clearcoat&&l.enable(14),B.clearcoatMap&&l.enable(15),B.clearcoatRoughnessMap&&l.enable(16),B.clearcoatNormalMap&&l.enable(17),B.iridescence&&l.enable(18),B.iridescenceMap&&l.enable(19),B.iridescenceThicknessMap&&l.enable(20),B.displacementMap&&l.enable(21),B.specularMap&&l.enable(22),B.roughnessMap&&l.enable(23),B.metalnessMap&&l.enable(24),B.gradientMap&&l.enable(25),B.alphaMap&&l.enable(26),B.alphaTest&&l.enable(27),B.vertexColors&&l.enable(28),B.vertexAlphas&&l.enable(29),B.vertexUvs&&l.enable(30),B.vertexTangents&&l.enable(31),B.uvsVertexOnly&&l.enable(32),B.fog&&l.enable(33),T.push(l.mask),l.disableAll(),B.useFog&&l.enable(0),B.flatShading&&l.enable(1),B.logarithmicDepthBuffer&&l.enable(2),B.skinning&&l.enable(3),B.morphTargets&&l.enable(4),B.morphNormals&&l.enable(5),B.morphColors&&l.enable(6),B.premultipliedAlpha&&l.enable(7),B.shadowMapEnabled&&l.enable(8),B.physicallyCorrectLights&&l.enable(9),B.doubleSided&&l.enable(10),B.flipSided&&l.enable(11),B.useDepthPacking&&l.enable(12),B.dithering&&l.enable(13),B.specularIntensityMap&&l.enable(14),B.specularColorMap&&l.enable(15),B.transmission&&l.enable(16),B.transmissionMap&&l.enable(17),B.thicknessMap&&l.enable(18),B.sheen&&l.enable(19),B.sheenColorMap&&l.enable(20),B.sheenRoughnessMap&&l.enable(21),B.decodeVideoTexture&&l.enable(22),B.opaque&&l.enable(23),T.push(l.mask)}function L(T){const B=C[T.type];let te;if(B){const ee=Zn[B];te=Lm.clone(ee.uniforms)}else te=T.uniforms;return te}function k(T,B){let te;for(let ee=0,Ce=h.length;ee<Ce;ee++){const ye=h[ee];if(ye.cacheKey===B){te=ye,++te.usedTimes;break}}return te===void 0&&(te=new B_(r,B,T,s),h.push(te)),te}function D(T){if(--T.usedTimes===0){const B=h.indexOf(T);h[B]=h[h.length-1],h.pop(),T.destroy()}}function N(T){d.remove(T)}function $(){d.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:L,acquireProgram:k,releaseProgram:D,releaseShaderCache:N,programs:h,dispose:$}}function j_(){let r=new WeakMap;function e(s){let f=r.get(s);return f===void 0&&(f={},r.set(s,f)),f}function t(s){r.delete(s)}function n(s,f,l){r.get(s)[f]=l}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function q_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function cf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function uf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function f(m,v,S,C,y,_){let E=r[e];return E===void 0?(E={id:m.id,object:m,geometry:v,material:S,groupOrder:C,renderOrder:m.renderOrder,z:y,group:_},r[e]=E):(E.id=m.id,E.object=m,E.geometry=v,E.material=S,E.groupOrder=C,E.renderOrder=m.renderOrder,E.z=y,E.group=_),e++,E}function l(m,v,S,C,y,_){const E=f(m,v,S,C,y,_);S.transmission>0?n.push(E):S.transparent===!0?i.push(E):t.push(E)}function d(m,v,S,C,y,_){const E=f(m,v,S,C,y,_);S.transmission>0?n.unshift(E):S.transparent===!0?i.unshift(E):t.unshift(E)}function h(m,v){t.length>1&&t.sort(m||q_),n.length>1&&n.sort(v||cf),i.length>1&&i.sort(v||cf)}function g(){for(let m=e,v=r.length;m<v;m++){const S=r[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:d,finish:g,sort:h}}function X_(){let r=new WeakMap;function e(n,i){let s;return r.has(n)===!1?(s=new uf,r.set(n,[s])):i>=r.get(n).length?(s=new uf,r.get(n).push(s)):s=r.get(n)[i],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function Y_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ze};break;case"SpotLight":t={position:new H,direction:new H,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new H,halfWidth:new H,halfHeight:new H};break}return r[e.id]=t,t}}}function $_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Z_=0;function K_(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function J_(r,e){const t=new Y_,n=$_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let g=0;g<9;g++)i.probe.push(new H);const s=new H,f=new qt,l=new qt;function d(g,m){let v=0,S=0,C=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let y=0,_=0,E=0,A=0,L=0,k=0,D=0,N=0;g.sort(K_);const $=m!==!0?Math.PI:1;for(let B=0,te=g.length;B<te;B++){const ee=g[B],Ce=ee.color,ye=ee.intensity,Y=ee.distance,j=ee.shadow&&ee.shadow.map?ee.shadow.map.texture:null;if(ee.isAmbientLight)v+=Ce.r*ye*$,S+=Ce.g*ye*$,C+=Ce.b*ye*$;else if(ee.isLightProbe)for(let K=0;K<9;K++)i.probe[K].addScaledVector(ee.sh.coefficients[K],ye);else if(ee.isDirectionalLight){const K=t.get(ee);if(K.color.copy(ee.color).multiplyScalar(ee.intensity*$),ee.castShadow){const de=ee.shadow,fe=n.get(ee);fe.shadowBias=de.bias,fe.shadowNormalBias=de.normalBias,fe.shadowRadius=de.radius,fe.shadowMapSize=de.mapSize,i.directionalShadow[y]=fe,i.directionalShadowMap[y]=j,i.directionalShadowMatrix[y]=ee.shadow.matrix,k++}i.directional[y]=K,y++}else if(ee.isSpotLight){const K=t.get(ee);if(K.position.setFromMatrixPosition(ee.matrixWorld),K.color.copy(Ce).multiplyScalar(ye*$),K.distance=Y,K.coneCos=Math.cos(ee.angle),K.penumbraCos=Math.cos(ee.angle*(1-ee.penumbra)),K.decay=ee.decay,ee.castShadow){const de=ee.shadow,fe=n.get(ee);fe.shadowBias=de.bias,fe.shadowNormalBias=de.normalBias,fe.shadowRadius=de.radius,fe.shadowMapSize=de.mapSize,i.spotShadow[E]=fe,i.spotShadowMap[E]=j,i.spotShadowMatrix[E]=ee.shadow.matrix,N++}i.spot[E]=K,E++}else if(ee.isRectAreaLight){const K=t.get(ee);K.color.copy(Ce).multiplyScalar(ye),K.halfWidth.set(ee.width*.5,0,0),K.halfHeight.set(0,ee.height*.5,0),i.rectArea[A]=K,A++}else if(ee.isPointLight){const K=t.get(ee);if(K.color.copy(ee.color).multiplyScalar(ee.intensity*$),K.distance=ee.distance,K.decay=ee.decay,ee.castShadow){const de=ee.shadow,fe=n.get(ee);fe.shadowBias=de.bias,fe.shadowNormalBias=de.normalBias,fe.shadowRadius=de.radius,fe.shadowMapSize=de.mapSize,fe.shadowCameraNear=de.camera.near,fe.shadowCameraFar=de.camera.far,i.pointShadow[_]=fe,i.pointShadowMap[_]=j,i.pointShadowMatrix[_]=ee.shadow.matrix,D++}i.point[_]=K,_++}else if(ee.isHemisphereLight){const K=t.get(ee);K.skyColor.copy(ee.color).multiplyScalar(ye*$),K.groundColor.copy(ee.groundColor).multiplyScalar(ye*$),i.hemi[L]=K,L++}}A>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=v,i.ambient[1]=S,i.ambient[2]=C;const T=i.hash;(T.directionalLength!==y||T.pointLength!==_||T.spotLength!==E||T.rectAreaLength!==A||T.hemiLength!==L||T.numDirectionalShadows!==k||T.numPointShadows!==D||T.numSpotShadows!==N)&&(i.directional.length=y,i.spot.length=E,i.rectArea.length=A,i.point.length=_,i.hemi.length=L,i.directionalShadow.length=k,i.directionalShadowMap.length=k,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=N,i.spotShadowMap.length=N,i.directionalShadowMatrix.length=k,i.pointShadowMatrix.length=D,i.spotShadowMatrix.length=N,T.directionalLength=y,T.pointLength=_,T.spotLength=E,T.rectAreaLength=A,T.hemiLength=L,T.numDirectionalShadows=k,T.numPointShadows=D,T.numSpotShadows=N,i.version=Z_++)}function h(g,m){let v=0,S=0,C=0,y=0,_=0;const E=m.matrixWorldInverse;for(let A=0,L=g.length;A<L;A++){const k=g[A];if(k.isDirectionalLight){const D=i.directional[v];D.direction.setFromMatrixPosition(k.matrixWorld),s.setFromMatrixPosition(k.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(E),v++}else if(k.isSpotLight){const D=i.spot[C];D.position.setFromMatrixPosition(k.matrixWorld),D.position.applyMatrix4(E),D.direction.setFromMatrixPosition(k.matrixWorld),s.setFromMatrixPosition(k.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(E),C++}else if(k.isRectAreaLight){const D=i.rectArea[y];D.position.setFromMatrixPosition(k.matrixWorld),D.position.applyMatrix4(E),l.identity(),f.copy(k.matrixWorld),f.premultiply(E),l.extractRotation(f),D.halfWidth.set(k.width*.5,0,0),D.halfHeight.set(0,k.height*.5,0),D.halfWidth.applyMatrix4(l),D.halfHeight.applyMatrix4(l),y++}else if(k.isPointLight){const D=i.point[S];D.position.setFromMatrixPosition(k.matrixWorld),D.position.applyMatrix4(E),S++}else if(k.isHemisphereLight){const D=i.hemi[_];D.direction.setFromMatrixPosition(k.matrixWorld),D.direction.transformDirection(E),_++}}}return{setup:d,setupView:h,state:i}}function ff(r,e){const t=new J_(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function f(m){n.push(m)}function l(m){i.push(m)}function d(m){t.setup(n,m)}function h(m){t.setupView(n,m)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:d,setupLightsView:h,pushLight:f,pushShadow:l}}function Q_(r,e){let t=new WeakMap;function n(s,f=0){let l;return t.has(s)===!1?(l=new ff(r,e),t.set(s,[l])):f>=t.get(s).length?(l=new ff(r,e),t.get(s).push(l)):l=t.get(s)[f],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class ey extends Zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ty extends Zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new H,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ry(r,e,t){let n=new Qf;const i=new Qe,s=new Qe,f=new Ht,l=new ey({depthPacking:hm}),d=new ty,h={},g=t.maxTextureSize,m={0:Gn,1:Vo,2:ar},v=new dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:ny,fragmentShader:iy}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const C=new Wn;C.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new pi(C,v),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ff,this.render=function(k,D,N){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||k.length===0)return;const $=r.getRenderTarget(),T=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),te=r.state;te.setBlending(Oi),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);for(let ee=0,Ce=k.length;ee<Ce;ee++){const ye=k[ee],Y=ye.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ye,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const j=Y.getFrameExtents();if(i.multiply(j),s.copy(Y.mapSize),(i.x>g||i.y>g)&&(i.x>g&&(s.x=Math.floor(g/j.x),i.x=s.x*j.x,Y.mapSize.x=s.x),i.y>g&&(s.y=Math.floor(g/j.y),i.y=s.y*j.y,Y.mapSize.y=s.y)),Y.map===null){const de=this.type!==ko?{minFilter:hn,magFilter:hn}:{};Y.map=new ur(i.x,i.y,de),Y.map.texture.name=ye.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const K=Y.getViewportCount();for(let de=0;de<K;de++){const fe=Y.getViewport(de);f.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),te.viewport(f),Y.updateMatrices(ye,de),n=Y.getFrustum(),L(D,N,Y.camera,ye,this.type)}Y.isPointLightShadow!==!0&&this.type===ko&&E(Y,N),Y.needsUpdate=!1}_.needsUpdate=!1,r.setRenderTarget($,T,B)};function E(k,D){const N=e.update(y);v.defines.VSM_SAMPLES!==k.blurSamples&&(v.defines.VSM_SAMPLES=k.blurSamples,S.defines.VSM_SAMPLES=k.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new ur(i.x,i.y)),v.uniforms.shadow_pass.value=k.map.texture,v.uniforms.resolution.value=k.mapSize,v.uniforms.radius.value=k.radius,r.setRenderTarget(k.mapPass),r.clear(),r.renderBufferDirect(D,null,N,v,y,null),S.uniforms.shadow_pass.value=k.mapPass.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,r.setRenderTarget(k.map),r.clear(),r.renderBufferDirect(D,null,N,S,y,null)}function A(k,D,N,$,T,B){let te=null;const ee=N.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(ee!==void 0?te=ee:te=N.isPointLight===!0?d:l,r.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0){const Ce=te.uuid,ye=D.uuid;let Y=h[Ce];Y===void 0&&(Y={},h[Ce]=Y);let j=Y[ye];j===void 0&&(j=te.clone(),Y[ye]=j),te=j}return te.visible=D.visible,te.wireframe=D.wireframe,B===ko?te.side=D.shadowSide!==null?D.shadowSide:D.side:te.side=D.shadowSide!==null?D.shadowSide:m[D.side],te.alphaMap=D.alphaMap,te.alphaTest=D.alphaTest,te.clipShadows=D.clipShadows,te.clippingPlanes=D.clippingPlanes,te.clipIntersection=D.clipIntersection,te.displacementMap=D.displacementMap,te.displacementScale=D.displacementScale,te.displacementBias=D.displacementBias,te.wireframeLinewidth=D.wireframeLinewidth,te.linewidth=D.linewidth,N.isPointLight===!0&&te.isMeshDistanceMaterial===!0&&(te.referencePosition.setFromMatrixPosition(N.matrixWorld),te.nearDistance=$,te.farDistance=T),te}function L(k,D,N,$,T){if(k.visible===!1)return;if(k.layers.test(D.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&T===ko)&&(!k.frustumCulled||n.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,k.matrixWorld);const ee=e.update(k),Ce=k.material;if(Array.isArray(Ce)){const ye=ee.groups;for(let Y=0,j=ye.length;Y<j;Y++){const K=ye[Y],de=Ce[K.materialIndex];if(de&&de.visible){const fe=A(k,de,$,N.near,N.far,T);r.renderBufferDirect(N,null,ee,fe,k,K)}}}else if(Ce.visible){const ye=A(k,Ce,$,N.near,N.far,T);r.renderBufferDirect(N,null,ee,ye,k,null)}}const te=k.children;for(let ee=0,Ce=te.length;ee<Ce;ee++)L(te[ee],D,N,$,T)}}function oy(r,e,t){const n=t.isWebGL2;function i(){let G=!1;const we=new Ht;let re=null;const De=new Ht(0,0,0,0);return{setMask:function(Le){re!==Le&&!G&&(r.colorMask(Le,Le,Le,Le),re=Le)},setLocked:function(Le){G=Le},setClear:function(Le,nt,dt,Pt,un){un===!0&&(Le*=Pt,nt*=Pt,dt*=Pt),we.set(Le,nt,dt,Pt),De.equals(we)===!1&&(r.clearColor(Le,nt,dt,Pt),De.copy(we))},reset:function(){G=!1,re=null,De.set(-1,0,0,0)}}}function s(){let G=!1,we=null,re=null,De=null;return{setTest:function(Le){Le?ot(2929):Ue(2929)},setMask:function(Le){we!==Le&&!G&&(r.depthMask(Le),we=Le)},setFunc:function(Le){if(re!==Le){if(Le)switch(Le){case Fp:r.depthFunc(512);break;case zp:r.depthFunc(519);break;case Np:r.depthFunc(513);break;case Pl:r.depthFunc(515);break;case Up:r.depthFunc(514);break;case Bp:r.depthFunc(518);break;case Gp:r.depthFunc(516);break;case Wp:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);re=Le}},setLocked:function(Le){G=Le},setClear:function(Le){De!==Le&&(r.clearDepth(Le),De=Le)},reset:function(){G=!1,we=null,re=null,De=null}}}function f(){let G=!1,we=null,re=null,De=null,Le=null,nt=null,dt=null,Pt=null,un=null;return{setTest:function(Tt){G||(Tt?ot(2960):Ue(2960))},setMask:function(Tt){we!==Tt&&!G&&(r.stencilMask(Tt),we=Tt)},setFunc:function(Tt,kt,Rt){(re!==Tt||De!==kt||Le!==Rt)&&(r.stencilFunc(Tt,kt,Rt),re=Tt,De=kt,Le=Rt)},setOp:function(Tt,kt,Rt){(nt!==Tt||dt!==kt||Pt!==Rt)&&(r.stencilOp(Tt,kt,Rt),nt=Tt,dt=kt,Pt=Rt)},setLocked:function(Tt){G=Tt},setClear:function(Tt){un!==Tt&&(r.clearStencil(Tt),un=Tt)},reset:function(){G=!1,we=null,re=null,De=null,Le=null,nt=null,dt=null,Pt=null,un=null}}}const l=new i,d=new s,h=new f,g=new WeakMap,m=new WeakMap;let v={},S={},C=new WeakMap,y=[],_=null,E=!1,A=null,L=null,k=null,D=null,N=null,$=null,T=null,B=!1,te=null,ee=null,Ce=null,ye=null,Y=null;const j=r.getParameter(35661);let K=!1,de=0;const fe=r.getParameter(7938);fe.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(fe)[1]),K=de>=1):fe.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),K=de>=2);let Q=null,se={};const xe=r.getParameter(3088),pe=r.getParameter(2978),ve=new Ht().fromArray(xe),ae=new Ht().fromArray(pe);function Ne(G,we,re){const De=new Uint8Array(4),Le=r.createTexture();r.bindTexture(G,Le),r.texParameteri(G,10241,9728),r.texParameteri(G,10240,9728);for(let nt=0;nt<re;nt++)r.texImage2D(we+nt,0,6408,1,1,0,6408,5121,De);return Le}const le={};le[3553]=Ne(3553,3553,1),le[34067]=Ne(34067,34069,6),l.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ot(2929),d.setFunc(Pl),Lt(!1),Jt(Qc),ot(2884),At(Oi);function ot(G){v[G]!==!0&&(r.enable(G),v[G]=!0)}function Ue(G){v[G]!==!1&&(r.disable(G),v[G]=!1)}function ze(G,we){return S[G]!==we?(r.bindFramebuffer(G,we),S[G]=we,n&&(G===36009&&(S[36160]=we),G===36160&&(S[36009]=we)),!0):!1}function Re(G,we){let re=y,De=!1;if(G)if(re=C.get(we),re===void 0&&(re=[],C.set(we,re)),G.isWebGLMultipleRenderTargets){const Le=G.texture;if(re.length!==Le.length||re[0]!==36064){for(let nt=0,dt=Le.length;nt<dt;nt++)re[nt]=36064+nt;re.length=Le.length,De=!0}}else re[0]!==36064&&(re[0]=36064,De=!0);else re[0]!==1029&&(re[0]=1029,De=!0);De&&(t.isWebGL2?r.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function et(G){return _!==G?(r.useProgram(G),_=G,!0):!1}const Xe={[jr]:32774,[Ep]:32778,[Tp]:32779};if(n)Xe[iu]=32775,Xe[ru]=32776;else{const G=e.get("EXT_blend_minmax");G!==null&&(Xe[iu]=G.MIN_EXT,Xe[ru]=G.MAX_EXT)}const ke={[Cp]:0,[Ap]:1,[Pp]:768,[zf]:770,[kp]:776,[Ip]:774,[Lp]:772,[Dp]:769,[Nf]:771,[Op]:775,[Rp]:773};function At(G,we,re,De,Le,nt,dt,Pt){if(G===Oi){E===!0&&(Ue(3042),E=!1);return}if(E===!1&&(ot(3042),E=!0),G!==Mp){if(G!==A||Pt!==B){if((L!==jr||N!==jr)&&(r.blendEquation(32774),L=jr,N=jr),Pt)switch(G){case $r:r.blendFuncSeparate(1,771,1,771);break;case eu:r.blendFunc(1,1);break;case tu:r.blendFuncSeparate(0,769,0,1);break;case nu:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case $r:r.blendFuncSeparate(770,771,1,771);break;case eu:r.blendFunc(770,1);break;case tu:r.blendFuncSeparate(0,769,0,1);break;case nu:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}k=null,D=null,$=null,T=null,A=G,B=Pt}return}Le=Le||we,nt=nt||re,dt=dt||De,(we!==L||Le!==N)&&(r.blendEquationSeparate(Xe[we],Xe[Le]),L=we,N=Le),(re!==k||De!==D||nt!==$||dt!==T)&&(r.blendFuncSeparate(ke[re],ke[De],ke[nt],ke[dt]),k=re,D=De,$=nt,T=dt),A=G,B=null}function je(G,we){G.side===ar?Ue(2884):ot(2884);let re=G.side===Gn;we&&(re=!re),Lt(re),G.blending===$r&&G.transparent===!1?At(Oi):At(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),l.setMask(G.colorWrite);const De=G.stencilWrite;h.setTest(De),De&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),st(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ot(32926):Ue(32926)}function Lt(G){te!==G&&(G?r.frontFace(2304):r.frontFace(2305),te=G)}function Jt(G){G!==xp?(ot(2884),G!==ee&&(G===Qc?r.cullFace(1029):G===bp?r.cullFace(1028):r.cullFace(1032))):Ue(2884),ee=G}function ut(G){G!==Ce&&(K&&r.lineWidth(G),Ce=G)}function st(G,we,re){G?(ot(32823),(ye!==we||Y!==re)&&(r.polygonOffset(we,re),ye=we,Y=re)):Ue(32823)}function cn(G){G?ot(3089):Ue(3089)}function Xt(G){G===void 0&&(G=33984+j-1),Q!==G&&(r.activeTexture(G),Q=G)}function F(G,we){Q===null&&Xt();let re=se[Q];re===void 0&&(re={type:void 0,texture:void 0},se[Q]=re),(re.type!==G||re.texture!==we)&&(r.bindTexture(G,we||le[G]),re.type=G,re.texture=we)}function P(){const G=se[Q];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ie(){try{r.compressedTexImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{r.texSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{r.texSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Be(){try{r.texStorage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function O(){try{r.texStorage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{r.texImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{r.texImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(G){ve.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),ve.copy(G))}function Te(G){ae.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),ae.copy(G))}function Ge(G,we){let re=m.get(we);re===void 0&&(re=new WeakMap,m.set(we,re));let De=re.get(G);De===void 0&&(De=r.getUniformBlockIndex(we,G.name),re.set(G,De))}function Ke(G,we){const De=m.get(we).get(G);g.get(G)!==De&&(r.uniformBlockBinding(we,De,G.__bindingPointIndex),g.set(G,De))}function ft(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},Q=null,se={},S={},C=new WeakMap,y=[],_=null,E=!1,A=null,L=null,k=null,D=null,N=null,$=null,T=null,B=!1,te=null,ee=null,Ce=null,ye=null,Y=null,ve.set(0,0,r.canvas.width,r.canvas.height),ae.set(0,0,r.canvas.width,r.canvas.height),l.reset(),d.reset(),h.reset()}return{buffers:{color:l,depth:d,stencil:h},enable:ot,disable:Ue,bindFramebuffer:ze,drawBuffers:Re,useProgram:et,setBlending:At,setMaterial:je,setFlipSided:Lt,setCullFace:Jt,setLineWidth:ut,setPolygonOffset:st,setScissorTest:cn,activeTexture:Xt,bindTexture:F,unbindTexture:P,compressedTexImage2D:ie,texImage2D:he,texImage3D:be,updateUBOMapping:Ge,uniformBlockBinding:Ke,texStorage2D:Be,texStorage3D:O,texSubImage2D:me,texSubImage3D:Se,compressedTexSubImage2D:Ee,scissor:Ae,viewport:Te,reset:ft}}function sy(r,e,t,n,i,s,f){const l=i.isWebGL2,d=i.maxTextures,h=i.maxCubemapSize,g=i.maxTextureSize,m=i.maxSamples,v=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=/OculusBrowser/g.test(navigator.userAgent),C=new WeakMap;let y;const _=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(F,P){return E?new OffscreenCanvas(F,P):ia("canvas")}function L(F,P,ie,me){let Se=1;if((F.width>me||F.height>me)&&(Se=me/Math.max(F.width,F.height)),Se<1||P===!0)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap){const Ee=P?kl:Math.floor,Be=Ee(Se*F.width),O=Ee(Se*F.height);y===void 0&&(y=A(Be,O));const he=ie?A(Be,O):y;return he.width=Be,he.height=O,he.getContext("2d").drawImage(F,0,0,Be,O),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+Be+"x"+O+")."),he}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),F;return F}function k(F){return Lu(F.width)&&Lu(F.height)}function D(F){return l?!1:F.wrapS!==Bn||F.wrapT!==Bn||F.minFilter!==hn&&F.minFilter!==Cn}function N(F,P){return F.generateMipmaps&&P&&F.minFilter!==hn&&F.minFilter!==Cn}function $(F){r.generateMipmap(F)}function T(F,P,ie,me,Se=!1){if(l===!1)return P;if(F!==null){if(r[F]!==void 0)return r[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Ee=P;return P===6403&&(ie===5126&&(Ee=33326),ie===5131&&(Ee=33325),ie===5121&&(Ee=33321)),P===33319&&(ie===5126&&(Ee=33328),ie===5131&&(Ee=33327),ie===5121&&(Ee=33323)),P===6408&&(ie===5126&&(Ee=34836),ie===5131&&(Ee=34842),ie===5121&&(Ee=me===It&&Se===!1?35907:32856),ie===32819&&(Ee=32854),ie===32820&&(Ee=32855)),(Ee===33325||Ee===33326||Ee===33327||Ee===33328||Ee===34842||Ee===34836)&&e.get("EXT_color_buffer_float"),Ee}function B(F,P,ie){return N(F,ie)===!0||F.isFramebufferTexture&&F.minFilter!==hn&&F.minFilter!==Cn?Math.log2(Math.max(P.width,P.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?P.mipmaps.length:1}function te(F){return F===hn||F===ou||F===su?9728:9729}function ee(F){const P=F.target;P.removeEventListener("dispose",ee),ye(P),P.isVideoTexture&&C.delete(P)}function Ce(F){const P=F.target;P.removeEventListener("dispose",Ce),j(P)}function ye(F){const P=n.get(F);if(P.__webglInit===void 0)return;const ie=F.source,me=_.get(ie);if(me){const Se=me[P.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&Y(F),Object.keys(me).length===0&&_.delete(ie)}n.remove(F)}function Y(F){const P=n.get(F);r.deleteTexture(P.__webglTexture);const ie=F.source,me=_.get(ie);delete me[P.__cacheKey],f.memory.textures--}function j(F){const P=F.texture,ie=n.get(F),me=n.get(P);if(me.__webglTexture!==void 0&&(r.deleteTexture(me.__webglTexture),f.memory.textures--),F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++)r.deleteFramebuffer(ie.__webglFramebuffer[Se]),ie.__webglDepthbuffer&&r.deleteRenderbuffer(ie.__webglDepthbuffer[Se]);else{if(r.deleteFramebuffer(ie.__webglFramebuffer),ie.__webglDepthbuffer&&r.deleteRenderbuffer(ie.__webglDepthbuffer),ie.__webglMultisampledFramebuffer&&r.deleteFramebuffer(ie.__webglMultisampledFramebuffer),ie.__webglColorRenderbuffer)for(let Se=0;Se<ie.__webglColorRenderbuffer.length;Se++)ie.__webglColorRenderbuffer[Se]&&r.deleteRenderbuffer(ie.__webglColorRenderbuffer[Se]);ie.__webglDepthRenderbuffer&&r.deleteRenderbuffer(ie.__webglDepthRenderbuffer)}if(F.isWebGLMultipleRenderTargets)for(let Se=0,Ee=P.length;Se<Ee;Se++){const Be=n.get(P[Se]);Be.__webglTexture&&(r.deleteTexture(Be.__webglTexture),f.memory.textures--),n.remove(P[Se])}n.remove(P),n.remove(F)}let K=0;function de(){K=0}function fe(){const F=K;return F>=d&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+d),K+=1,F}function Q(F){const P=[];return P.push(F.wrapS),P.push(F.wrapT),P.push(F.magFilter),P.push(F.minFilter),P.push(F.anisotropy),P.push(F.internalFormat),P.push(F.format),P.push(F.type),P.push(F.generateMipmaps),P.push(F.premultiplyAlpha),P.push(F.flipY),P.push(F.unpackAlignment),P.push(F.encoding),P.join()}function se(F,P){const ie=n.get(F);if(F.isVideoTexture&&cn(F),F.isRenderTargetTexture===!1&&F.version>0&&ie.__version!==F.version){const me=F.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(ie,F,P);return}}t.activeTexture(33984+P),t.bindTexture(3553,ie.__webglTexture)}function xe(F,P){const ie=n.get(F);if(F.version>0&&ie.__version!==F.version){Ue(ie,F,P);return}t.activeTexture(33984+P),t.bindTexture(35866,ie.__webglTexture)}function pe(F,P){const ie=n.get(F);if(F.version>0&&ie.__version!==F.version){Ue(ie,F,P);return}t.activeTexture(33984+P),t.bindTexture(32879,ie.__webglTexture)}function ve(F,P){const ie=n.get(F);if(F.version>0&&ie.__version!==F.version){ze(ie,F,P);return}t.activeTexture(33984+P),t.bindTexture(34067,ie.__webglTexture)}const ae={[Rl]:10497,[Bn]:33071,[Il]:33648},Ne={[hn]:9728,[ou]:9984,[su]:9986,[Cn]:9729,[Zp]:9985,[oa]:9987};function le(F,P,ie){if(ie?(r.texParameteri(F,10242,ae[P.wrapS]),r.texParameteri(F,10243,ae[P.wrapT]),(F===32879||F===35866)&&r.texParameteri(F,32882,ae[P.wrapR]),r.texParameteri(F,10240,Ne[P.magFilter]),r.texParameteri(F,10241,Ne[P.minFilter])):(r.texParameteri(F,10242,33071),r.texParameteri(F,10243,33071),(F===32879||F===35866)&&r.texParameteri(F,32882,33071),(P.wrapS!==Bn||P.wrapT!==Bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(F,10240,te(P.magFilter)),r.texParameteri(F,10241,te(P.minFilter)),P.minFilter!==hn&&P.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(P.type===ir&&e.has("OES_texture_float_linear")===!1||l===!1&&P.type===Ho&&e.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||n.get(P).__currentAnisotropy)&&(r.texParameterf(F,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,i.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy)}}function ot(F,P){let ie=!1;F.__webglInit===void 0&&(F.__webglInit=!0,P.addEventListener("dispose",ee));const me=P.source;let Se=_.get(me);Se===void 0&&(Se={},_.set(me,Se));const Ee=Q(P);if(Ee!==F.__cacheKey){Se[Ee]===void 0&&(Se[Ee]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,ie=!0),Se[Ee].usedTimes++;const Be=Se[F.__cacheKey];Be!==void 0&&(Se[F.__cacheKey].usedTimes--,Be.usedTimes===0&&Y(P)),F.__cacheKey=Ee,F.__webglTexture=Se[Ee].texture}return ie}function Ue(F,P,ie){let me=3553;P.isDataArrayTexture&&(me=35866),P.isData3DTexture&&(me=32879);const Se=ot(F,P),Ee=P.source;if(t.activeTexture(33984+ie),t.bindTexture(me,F.__webglTexture),Ee.version!==Ee.__currentVersion||Se===!0){r.pixelStorei(37440,P.flipY),r.pixelStorei(37441,P.premultiplyAlpha),r.pixelStorei(3317,P.unpackAlignment),r.pixelStorei(37443,0);const Be=D(P)&&k(P.image)===!1;let O=L(P.image,Be,!1,g);O=Xt(P,O);const he=k(O)||l,be=s.convert(P.format,P.encoding);let Ae=s.convert(P.type),Te=T(P.internalFormat,be,Ae,P.encoding,P.isVideoTexture);le(me,P,he);let Ge;const Ke=P.mipmaps,ft=l&&P.isVideoTexture!==!0,G=Ee.__currentVersion===void 0||Se===!0,we=B(P,O,he);if(P.isDepthTexture)Te=6402,l?P.type===ir?Te=36012:P.type===nr?Te=33190:P.type===Zr?Te=35056:Te=33189:P.type===ir&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===or&&Te===6402&&P.type!==Gf&&P.type!==nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=nr,Ae=s.convert(P.type)),P.format===no&&Te===6402&&(Te=34041,P.type!==Zr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=Zr,Ae=s.convert(P.type))),G&&(ft?t.texStorage2D(3553,1,Te,O.width,O.height):t.texImage2D(3553,0,Te,O.width,O.height,0,be,Ae,null));else if(P.isDataTexture)if(Ke.length>0&&he){ft&&G&&t.texStorage2D(3553,we,Te,Ke[0].width,Ke[0].height);for(let re=0,De=Ke.length;re<De;re++)Ge=Ke[re],ft?t.texSubImage2D(3553,re,0,0,Ge.width,Ge.height,be,Ae,Ge.data):t.texImage2D(3553,re,Te,Ge.width,Ge.height,0,be,Ae,Ge.data);P.generateMipmaps=!1}else ft?(G&&t.texStorage2D(3553,we,Te,O.width,O.height),t.texSubImage2D(3553,0,0,0,O.width,O.height,be,Ae,O.data)):t.texImage2D(3553,0,Te,O.width,O.height,0,be,Ae,O.data);else if(P.isCompressedTexture){ft&&G&&t.texStorage2D(3553,we,Te,Ke[0].width,Ke[0].height);for(let re=0,De=Ke.length;re<De;re++)Ge=Ke[re],P.format!==Jn?be!==null?ft?t.compressedTexSubImage2D(3553,re,0,0,Ge.width,Ge.height,be,Ge.data):t.compressedTexImage2D(3553,re,Te,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?t.texSubImage2D(3553,re,0,0,Ge.width,Ge.height,be,Ae,Ge.data):t.texImage2D(3553,re,Te,Ge.width,Ge.height,0,be,Ae,Ge.data)}else if(P.isDataArrayTexture)ft?(G&&t.texStorage3D(35866,we,Te,O.width,O.height,O.depth),t.texSubImage3D(35866,0,0,0,0,O.width,O.height,O.depth,be,Ae,O.data)):t.texImage3D(35866,0,Te,O.width,O.height,O.depth,0,be,Ae,O.data);else if(P.isData3DTexture)ft?(G&&t.texStorage3D(32879,we,Te,O.width,O.height,O.depth),t.texSubImage3D(32879,0,0,0,0,O.width,O.height,O.depth,be,Ae,O.data)):t.texImage3D(32879,0,Te,O.width,O.height,O.depth,0,be,Ae,O.data);else if(P.isFramebufferTexture){if(G)if(ft)t.texStorage2D(3553,we,Te,O.width,O.height);else{let re=O.width,De=O.height;for(let Le=0;Le<we;Le++)t.texImage2D(3553,Le,Te,re,De,0,be,Ae,null),re>>=1,De>>=1}}else if(Ke.length>0&&he){ft&&G&&t.texStorage2D(3553,we,Te,Ke[0].width,Ke[0].height);for(let re=0,De=Ke.length;re<De;re++)Ge=Ke[re],ft?t.texSubImage2D(3553,re,0,0,be,Ae,Ge):t.texImage2D(3553,re,Te,be,Ae,Ge);P.generateMipmaps=!1}else ft?(G&&t.texStorage2D(3553,we,Te,O.width,O.height),t.texSubImage2D(3553,0,0,0,be,Ae,O)):t.texImage2D(3553,0,Te,be,Ae,O);N(P,he)&&$(me),Ee.__currentVersion=Ee.version,P.onUpdate&&P.onUpdate(P)}F.__version=P.version}function ze(F,P,ie){if(P.image.length!==6)return;const me=ot(F,P),Se=P.source;if(t.activeTexture(33984+ie),t.bindTexture(34067,F.__webglTexture),Se.version!==Se.__currentVersion||me===!0){r.pixelStorei(37440,P.flipY),r.pixelStorei(37441,P.premultiplyAlpha),r.pixelStorei(3317,P.unpackAlignment),r.pixelStorei(37443,0);const Ee=P.isCompressedTexture||P.image[0].isCompressedTexture,Be=P.image[0]&&P.image[0].isDataTexture,O=[];for(let re=0;re<6;re++)!Ee&&!Be?O[re]=L(P.image[re],!1,!0,h):O[re]=Be?P.image[re].image:P.image[re],O[re]=Xt(P,O[re]);const he=O[0],be=k(he)||l,Ae=s.convert(P.format,P.encoding),Te=s.convert(P.type),Ge=T(P.internalFormat,Ae,Te,P.encoding),Ke=l&&P.isVideoTexture!==!0,ft=Se.__currentVersion===void 0||me===!0;let G=B(P,he,be);le(34067,P,be);let we;if(Ee){Ke&&ft&&t.texStorage2D(34067,G,Ge,he.width,he.height);for(let re=0;re<6;re++){we=O[re].mipmaps;for(let De=0;De<we.length;De++){const Le=we[De];P.format!==Jn?Ae!==null?Ke?t.compressedTexSubImage2D(34069+re,De,0,0,Le.width,Le.height,Ae,Le.data):t.compressedTexImage2D(34069+re,De,Ge,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?t.texSubImage2D(34069+re,De,0,0,Le.width,Le.height,Ae,Te,Le.data):t.texImage2D(34069+re,De,Ge,Le.width,Le.height,0,Ae,Te,Le.data)}}}else{we=P.mipmaps,Ke&&ft&&(we.length>0&&G++,t.texStorage2D(34067,G,Ge,O[0].width,O[0].height));for(let re=0;re<6;re++)if(Be){Ke?t.texSubImage2D(34069+re,0,0,0,O[re].width,O[re].height,Ae,Te,O[re].data):t.texImage2D(34069+re,0,Ge,O[re].width,O[re].height,0,Ae,Te,O[re].data);for(let De=0;De<we.length;De++){const nt=we[De].image[re].image;Ke?t.texSubImage2D(34069+re,De+1,0,0,nt.width,nt.height,Ae,Te,nt.data):t.texImage2D(34069+re,De+1,Ge,nt.width,nt.height,0,Ae,Te,nt.data)}}else{Ke?t.texSubImage2D(34069+re,0,0,0,Ae,Te,O[re]):t.texImage2D(34069+re,0,Ge,Ae,Te,O[re]);for(let De=0;De<we.length;De++){const Le=we[De];Ke?t.texSubImage2D(34069+re,De+1,0,0,Ae,Te,Le.image[re]):t.texImage2D(34069+re,De+1,Ge,Ae,Te,Le.image[re])}}}N(P,be)&&$(34067),Se.__currentVersion=Se.version,P.onUpdate&&P.onUpdate(P)}F.__version=P.version}function Re(F,P,ie,me,Se){const Ee=s.convert(ie.format,ie.encoding),Be=s.convert(ie.type),O=T(ie.internalFormat,Ee,Be,ie.encoding);n.get(P).__hasExternalTextures||(Se===32879||Se===35866?t.texImage3D(Se,0,O,P.width,P.height,P.depth,0,Ee,Be,null):t.texImage2D(Se,0,O,P.width,P.height,0,Ee,Be,null)),t.bindFramebuffer(36160,F),st(P)?v.framebufferTexture2DMultisampleEXT(36160,me,Se,n.get(ie).__webglTexture,0,ut(P)):r.framebufferTexture2D(36160,me,Se,n.get(ie).__webglTexture,0),t.bindFramebuffer(36160,null)}function et(F,P,ie){if(r.bindRenderbuffer(36161,F),P.depthBuffer&&!P.stencilBuffer){let me=33189;if(ie||st(P)){const Se=P.depthTexture;Se&&Se.isDepthTexture&&(Se.type===ir?me=36012:Se.type===nr&&(me=33190));const Ee=ut(P);st(P)?v.renderbufferStorageMultisampleEXT(36161,Ee,me,P.width,P.height):r.renderbufferStorageMultisample(36161,Ee,me,P.width,P.height)}else r.renderbufferStorage(36161,me,P.width,P.height);r.framebufferRenderbuffer(36160,36096,36161,F)}else if(P.depthBuffer&&P.stencilBuffer){const me=ut(P);ie&&st(P)===!1?r.renderbufferStorageMultisample(36161,me,35056,P.width,P.height):st(P)?v.renderbufferStorageMultisampleEXT(36161,me,35056,P.width,P.height):r.renderbufferStorage(36161,34041,P.width,P.height),r.framebufferRenderbuffer(36160,33306,36161,F)}else{const me=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let Se=0;Se<me.length;Se++){const Ee=me[Se],Be=s.convert(Ee.format,Ee.encoding),O=s.convert(Ee.type),he=T(Ee.internalFormat,Be,O,Ee.encoding),be=ut(P);ie&&st(P)===!1?r.renderbufferStorageMultisample(36161,be,he,P.width,P.height):st(P)?v.renderbufferStorageMultisampleEXT(36161,be,he,P.width,P.height):r.renderbufferStorage(36161,he,P.width,P.height)}}r.bindRenderbuffer(36161,null)}function Xe(F,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,F),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),se(P.depthTexture,0);const me=n.get(P.depthTexture).__webglTexture,Se=ut(P);if(P.depthTexture.format===or)st(P)?v.framebufferTexture2DMultisampleEXT(36160,36096,3553,me,0,Se):r.framebufferTexture2D(36160,36096,3553,me,0);else if(P.depthTexture.format===no)st(P)?v.framebufferTexture2DMultisampleEXT(36160,33306,3553,me,0,Se):r.framebufferTexture2D(36160,33306,3553,me,0);else throw new Error("Unknown depthTexture format")}function ke(F){const P=n.get(F),ie=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!P.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");Xe(P.__webglFramebuffer,F)}else if(ie){P.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(36160,P.__webglFramebuffer[me]),P.__webglDepthbuffer[me]=r.createRenderbuffer(),et(P.__webglDepthbuffer[me],F,!1)}else t.bindFramebuffer(36160,P.__webglFramebuffer),P.__webglDepthbuffer=r.createRenderbuffer(),et(P.__webglDepthbuffer,F,!1);t.bindFramebuffer(36160,null)}function At(F,P,ie){const me=n.get(F);P!==void 0&&Re(me.__webglFramebuffer,F,F.texture,36064,3553),ie!==void 0&&ke(F)}function je(F){const P=F.texture,ie=n.get(F),me=n.get(P);F.addEventListener("dispose",Ce),F.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=P.version,f.memory.textures++);const Se=F.isWebGLCubeRenderTarget===!0,Ee=F.isWebGLMultipleRenderTargets===!0,Be=k(F)||l;if(Se){ie.__webglFramebuffer=[];for(let O=0;O<6;O++)ie.__webglFramebuffer[O]=r.createFramebuffer()}else{if(ie.__webglFramebuffer=r.createFramebuffer(),Ee)if(i.drawBuffers){const O=F.texture;for(let he=0,be=O.length;he<be;he++){const Ae=n.get(O[he]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=r.createTexture(),f.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&F.samples>0&&st(F)===!1){const O=Ee?P:[P];ie.__webglMultisampledFramebuffer=r.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,ie.__webglMultisampledFramebuffer);for(let he=0;he<O.length;he++){const be=O[he];ie.__webglColorRenderbuffer[he]=r.createRenderbuffer(),r.bindRenderbuffer(36161,ie.__webglColorRenderbuffer[he]);const Ae=s.convert(be.format,be.encoding),Te=s.convert(be.type),Ge=T(be.internalFormat,Ae,Te,be.encoding),Ke=ut(F);r.renderbufferStorageMultisample(36161,Ke,Ge,F.width,F.height),r.framebufferRenderbuffer(36160,36064+he,36161,ie.__webglColorRenderbuffer[he])}r.bindRenderbuffer(36161,null),F.depthBuffer&&(ie.__webglDepthRenderbuffer=r.createRenderbuffer(),et(ie.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(36160,null)}}if(Se){t.bindTexture(34067,me.__webglTexture),le(34067,P,Be);for(let O=0;O<6;O++)Re(ie.__webglFramebuffer[O],F,P,36064,34069+O);N(P,Be)&&$(34067),t.unbindTexture()}else if(Ee){const O=F.texture;for(let he=0,be=O.length;he<be;he++){const Ae=O[he],Te=n.get(Ae);t.bindTexture(3553,Te.__webglTexture),le(3553,Ae,Be),Re(ie.__webglFramebuffer,F,Ae,36064+he,3553),N(Ae,Be)&&$(3553)}t.unbindTexture()}else{let O=3553;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(l?O=F.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(O,me.__webglTexture),le(O,P,Be),Re(ie.__webglFramebuffer,F,P,36064,O),N(P,Be)&&$(O),t.unbindTexture()}F.depthBuffer&&ke(F)}function Lt(F){const P=k(F)||l,ie=F.isWebGLMultipleRenderTargets===!0?F.texture:[F.texture];for(let me=0,Se=ie.length;me<Se;me++){const Ee=ie[me];if(N(Ee,P)){const Be=F.isWebGLCubeRenderTarget?34067:3553,O=n.get(Ee).__webglTexture;t.bindTexture(Be,O),$(Be),t.unbindTexture()}}}function Jt(F){if(l&&F.samples>0&&st(F)===!1){const P=F.isWebGLMultipleRenderTargets?F.texture:[F.texture],ie=F.width,me=F.height;let Se=16384;const Ee=[],Be=F.stencilBuffer?33306:36096,O=n.get(F),he=F.isWebGLMultipleRenderTargets===!0;if(he)for(let be=0;be<P.length;be++)t.bindFramebuffer(36160,O.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+be,36161,null),t.bindFramebuffer(36160,O.__webglFramebuffer),r.framebufferTexture2D(36009,36064+be,3553,null,0);t.bindFramebuffer(36008,O.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,O.__webglFramebuffer);for(let be=0;be<P.length;be++){Ee.push(36064+be),F.depthBuffer&&Ee.push(Be);const Ae=O.__ignoreDepthValues!==void 0?O.__ignoreDepthValues:!1;if(Ae===!1&&(F.depthBuffer&&(Se|=256),F.stencilBuffer&&(Se|=1024)),he&&r.framebufferRenderbuffer(36008,36064,36161,O.__webglColorRenderbuffer[be]),Ae===!0&&(r.invalidateFramebuffer(36008,[Be]),r.invalidateFramebuffer(36009,[Be])),he){const Te=n.get(P[be]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Te,0)}r.blitFramebuffer(0,0,ie,me,0,0,ie,me,Se,9728),S&&r.invalidateFramebuffer(36008,Ee)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),he)for(let be=0;be<P.length;be++){t.bindFramebuffer(36160,O.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+be,36161,O.__webglColorRenderbuffer[be]);const Ae=n.get(P[be]).__webglTexture;t.bindFramebuffer(36160,O.__webglFramebuffer),r.framebufferTexture2D(36009,36064+be,3553,Ae,0)}t.bindFramebuffer(36009,O.__webglMultisampledFramebuffer)}}function ut(F){return Math.min(m,F.samples)}function st(F){const P=n.get(F);return l&&F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function cn(F){const P=f.render.frame;C.get(F)!==P&&(C.set(F,P),F.update())}function Xt(F,P){const ie=F.encoding,me=F.format,Se=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||F.format===Ol||ie!==cr&&(ie===It?l===!1?e.has("EXT_sRGB")===!0&&me===Jn?(F.format=Ol,F.minFilter=Cn,F.generateMipmaps=!1):P=Hf.sRGBToLinear(P):(me!==Jn||Se!==lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ie)),P}this.allocateTextureUnit=fe,this.resetTextureUnits=de,this.setTexture2D=se,this.setTexture2DArray=xe,this.setTexture3D=pe,this.setTextureCube=ve,this.rebindTextures=At,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=st}function ay(r,e,t){const n=t.isWebGL2;function i(s,f=null){let l;if(s===lr)return 5121;if(s===em)return 32819;if(s===tm)return 32820;if(s===Kp)return 5120;if(s===Jp)return 5122;if(s===Gf)return 5123;if(s===Qp)return 5124;if(s===nr)return 5125;if(s===ir)return 5126;if(s===Ho)return n?5131:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(s===nm)return 6406;if(s===Jn)return 6408;if(s===rm)return 6409;if(s===om)return 6410;if(s===or)return 6402;if(s===no)return 34041;if(s===sm)return 6403;if(s===im)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Ol)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(s===am)return 36244;if(s===lm)return 33319;if(s===cm)return 33320;if(s===um)return 36249;if(s===Ua||s===Ba||s===Ga||s===Wa)if(f===It)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Ua)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ba)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ga)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Wa)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Ua)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ba)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ga)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Wa)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===au||s===lu||s===cu||s===uu)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===au)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===lu)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===cu)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===uu)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===fm)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===fu||s===du)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===fu)return f===It?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===du)return f===It?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===hu||s===pu||s===mu||s===gu||s===vu||s===_u||s===yu||s===xu||s===bu||s===Su||s===wu||s===Mu||s===Eu||s===Tu)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===hu)return f===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===pu)return f===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===mu)return f===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===gu)return f===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===vu)return f===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===_u)return f===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===yu)return f===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===xu)return f===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===bu)return f===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Su)return f===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wu)return f===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Mu)return f===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Eu)return f===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Tu)return f===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Cu)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Cu)return f===It?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Zr?n?34042:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class ly extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vs extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cy={type:"move"};class vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,f=null;const l=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const y of e.hand.values()){const _=t.getJointPose(y,n);if(h.joints[y.jointName]===void 0){const A=new Vs;A.matrixAutoUpdate=!1,A.visible=!1,h.joints[y.jointName]=A,h.add(A)}const E=h.joints[y.jointName];_!==null&&(E.matrix.fromArray(_.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.jointRadius=_.radius),E.visible=_!==null}const g=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],v=g.position.distanceTo(m.position),S=.02,C=.005;h.inputState.pinching&&v>S+C?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=S-C&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(cy)))}return l!==null&&(l.visible=i!==null),d!==null&&(d.visible=s!==null),h!==null&&(h.visible=f!==null),this}}class uy extends Vn{constructor(e,t,n,i,s,f,l,d,h,g){if(g=g!==void 0?g:or,g!==or&&g!==no)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&g===or&&(n=nr),n===void 0&&g===no&&(n=Zr),super(null,i,s,f,l,d,g,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:hn,this.minFilter=d!==void 0?d:hn,this.flipY=!1,this.generateMipmaps=!1}}class fy extends gr{constructor(e,t){super();const n=this;let i=null,s=1,f=null,l="local-floor",d=null,h=null,g=null,m=null,v=null,S=null;const C=t.getContextAttributes();let y=null,_=null;const E=[],A=[],L=new An;L.layers.enable(1),L.viewport=new Ht;const k=new An;k.layers.enable(2),k.viewport=new Ht;const D=[L,k],N=new ly;N.layers.enable(1),N.layers.enable(2);let $=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let se=E[Q];return se===void 0&&(se=new vl,E[Q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Q){let se=E[Q];return se===void 0&&(se=new vl,E[Q]=se),se.getGripSpace()},this.getHand=function(Q){let se=E[Q];return se===void 0&&(se=new vl,E[Q]=se),se.getHandSpace()};function B(Q){const se=A.indexOf(Q.inputSource);if(se===-1)return;const xe=E[se];xe!==void 0&&xe.dispatchEvent({type:Q.type,data:Q.inputSource})}function te(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",te),i.removeEventListener("inputsourceschange",ee);for(let Q=0;Q<E.length;Q++){const se=A[Q];se!==null&&(A[Q]=null,E[Q].disconnect(se))}$=null,T=null,e.setRenderTarget(y),v=null,m=null,g=null,i=null,_=null,fe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){l=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||f},this.setReferenceSpace=function(Q){d=Q},this.getBaseLayer=function(){return m!==null?m:v},this.getBinding=function(){return g},this.getFrame=function(){return S},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",te),i.addEventListener("inputsourceschange",ee),C.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const se={antialias:i.renderState.layers===void 0?C.antialias:!0,alpha:C.alpha,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:v}),_=new ur(v.framebufferWidth,v.framebufferHeight,{format:Jn,type:lr,encoding:e.outputEncoding})}else{let se=null,xe=null,pe=null;C.depth&&(pe=C.stencil?35056:33190,se=C.stencil?no:or,xe=C.stencil?Zr:nr);const ve={colorFormat:32856,depthFormat:pe,scaleFactor:s};g=new XRWebGLBinding(i,t),m=g.createProjectionLayer(ve),i.updateRenderState({layers:[m]}),_=new ur(m.textureWidth,m.textureHeight,{format:Jn,type:lr,depthTexture:new uy(m.textureWidth,m.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:C.stencil,encoding:e.outputEncoding,samples:C.antialias?4:0});const ae=e.properties.get(_);ae.__ignoreDepthValues=m.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(1),d=null,f=await i.requestReferenceSpace(l),fe.setContext(i),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function ee(Q){for(let se=0;se<Q.removed.length;se++){const xe=Q.removed[se],pe=A.indexOf(xe);pe>=0&&(A[pe]=null,E[pe].dispatchEvent({type:"disconnected",data:xe}))}for(let se=0;se<Q.added.length;se++){const xe=Q.added[se];let pe=A.indexOf(xe);if(pe===-1){for(let ae=0;ae<E.length;ae++)if(ae>=A.length){A.push(xe),pe=ae;break}else if(A[ae]===null){A[ae]=xe,pe=ae;break}if(pe===-1)break}const ve=E[pe];ve&&ve.dispatchEvent({type:"connected",data:xe})}}const Ce=new H,ye=new H;function Y(Q,se,xe){Ce.setFromMatrixPosition(se.matrixWorld),ye.setFromMatrixPosition(xe.matrixWorld);const pe=Ce.distanceTo(ye),ve=se.projectionMatrix.elements,ae=xe.projectionMatrix.elements,Ne=ve[14]/(ve[10]-1),le=ve[14]/(ve[10]+1),ot=(ve[9]+1)/ve[5],Ue=(ve[9]-1)/ve[5],ze=(ve[8]-1)/ve[0],Re=(ae[8]+1)/ae[0],et=Ne*ze,Xe=Ne*Re,ke=pe/(-ze+Re),At=ke*-ze;se.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(At),Q.translateZ(ke),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const je=Ne+ke,Lt=le+ke,Jt=et-At,ut=Xe+(pe-At),st=ot*le/Lt*je,cn=Ue*le/Lt*je;Q.projectionMatrix.makePerspective(Jt,ut,st,cn,je,Lt)}function j(Q,se){se===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(se.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;N.near=k.near=L.near=Q.near,N.far=k.far=L.far=Q.far,($!==N.near||T!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),$=N.near,T=N.far);const se=Q.parent,xe=N.cameras;j(N,se);for(let ve=0;ve<xe.length;ve++)j(xe[ve],se);N.matrixWorld.decompose(N.position,N.quaternion,N.scale),Q.position.copy(N.position),Q.quaternion.copy(N.quaternion),Q.scale.copy(N.scale),Q.matrix.copy(N.matrix),Q.matrixWorld.copy(N.matrixWorld);const pe=Q.children;for(let ve=0,ae=pe.length;ve<ae;ve++)pe[ve].updateMatrixWorld(!0);xe.length===2?Y(N,L,k):N.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return N},this.getFoveation=function(){if(m!==null)return m.fixedFoveation;if(v!==null)return v.fixedFoveation},this.setFoveation=function(Q){m!==null&&(m.fixedFoveation=Q),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=Q)};let K=null;function de(Q,se){if(h=se.getViewerPose(d||f),S=se,h!==null){const xe=h.views;v!==null&&(e.setRenderTargetFramebuffer(_,v.framebuffer),e.setRenderTarget(_));let pe=!1;xe.length!==N.cameras.length&&(N.cameras.length=0,pe=!0);for(let ve=0;ve<xe.length;ve++){const ae=xe[ve];let Ne=null;if(v!==null)Ne=v.getViewport(ae);else{const ot=g.getViewSubImage(m,ae);Ne=ot.viewport,ve===0&&(e.setRenderTargetTextures(_,ot.colorTexture,m.ignoreDepthValues?void 0:ot.depthStencilTexture),e.setRenderTarget(_))}let le=D[ve];le===void 0&&(le=new An,le.layers.enable(ve),le.viewport=new Ht,D[ve]=le),le.matrix.fromArray(ae.transform.matrix),le.projectionMatrix.fromArray(ae.projectionMatrix),le.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),ve===0&&N.matrix.copy(le.matrix),pe===!0&&N.cameras.push(le)}}for(let xe=0;xe<E.length;xe++){const pe=A[xe],ve=E[xe];pe!==null&&ve!==void 0&&ve.update(pe,se,d||f)}K&&K(Q,se),S=null}const fe=new ed;fe.setAnimationLoop(de),this.setAnimationLoop=function(Q){K=Q},this.dispose=function(){}}}function dy(r,e){function t(y,_){y.fogColor.value.copy(_.color),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function n(y,_,E,A,L){_.isMeshBasicMaterial||_.isMeshLambertMaterial?i(y,_):_.isMeshToonMaterial?(i(y,_),g(y,_)):_.isMeshPhongMaterial?(i(y,_),h(y,_)):_.isMeshStandardMaterial?(i(y,_),m(y,_),_.isMeshPhysicalMaterial&&v(y,_,L)):_.isMeshMatcapMaterial?(i(y,_),S(y,_)):_.isMeshDepthMaterial?i(y,_):_.isMeshDistanceMaterial?(i(y,_),C(y,_)):_.isMeshNormalMaterial?i(y,_):_.isLineBasicMaterial?(s(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?l(y,_,E,A):_.isSpriteMaterial?d(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function i(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map),_.alphaMap&&(y.alphaMap.value=_.alphaMap),_.bumpMap&&(y.bumpMap.value=_.bumpMap,y.bumpScale.value=_.bumpScale,_.side===Gn&&(y.bumpScale.value*=-1)),_.displacementMap&&(y.displacementMap.value=_.displacementMap,y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap),_.normalMap&&(y.normalMap.value=_.normalMap,y.normalScale.value.copy(_.normalScale),_.side===Gn&&y.normalScale.value.negate()),_.specularMap&&(y.specularMap.value=_.specularMap),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const E=e.get(_).envMap;if(E&&(y.envMap.value=E,y.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap){y.lightMap.value=_.lightMap;const k=r.physicallyCorrectLights!==!0?Math.PI:1;y.lightMapIntensity.value=_.lightMapIntensity*k}_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity);let A;_.map?A=_.map:_.specularMap?A=_.specularMap:_.displacementMap?A=_.displacementMap:_.normalMap?A=_.normalMap:_.bumpMap?A=_.bumpMap:_.roughnessMap?A=_.roughnessMap:_.metalnessMap?A=_.metalnessMap:_.alphaMap?A=_.alphaMap:_.emissiveMap?A=_.emissiveMap:_.clearcoatMap?A=_.clearcoatMap:_.clearcoatNormalMap?A=_.clearcoatNormalMap:_.clearcoatRoughnessMap?A=_.clearcoatRoughnessMap:_.iridescenceMap?A=_.iridescenceMap:_.iridescenceThicknessMap?A=_.iridescenceThicknessMap:_.specularIntensityMap?A=_.specularIntensityMap:_.specularColorMap?A=_.specularColorMap:_.transmissionMap?A=_.transmissionMap:_.thicknessMap?A=_.thicknessMap:_.sheenColorMap?A=_.sheenColorMap:_.sheenRoughnessMap&&(A=_.sheenRoughnessMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),y.uvTransform.value.copy(A.matrix));let L;_.aoMap?L=_.aoMap:_.lightMap&&(L=_.lightMap),L!==void 0&&(L.isWebGLRenderTarget&&(L=L.texture),L.matrixAutoUpdate===!0&&L.updateMatrix(),y.uv2Transform.value.copy(L.matrix))}function s(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function l(y,_,E,A){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*E,y.scale.value=A*.5,_.map&&(y.map.value=_.map),_.alphaMap&&(y.alphaMap.value=_.alphaMap),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);let L;_.map?L=_.map:_.alphaMap&&(L=_.alphaMap),L!==void 0&&(L.matrixAutoUpdate===!0&&L.updateMatrix(),y.uvTransform.value.copy(L.matrix))}function d(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map),_.alphaMap&&(y.alphaMap.value=_.alphaMap),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);let E;_.map?E=_.map:_.alphaMap&&(E=_.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),y.uvTransform.value.copy(E.matrix))}function h(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function m(y,_){y.roughness.value=_.roughness,y.metalness.value=_.metalness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap),_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap),e.get(_).envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function v(y,_,E){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap)),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap),_.clearcoatNormalMap&&(y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),y.clearcoatNormalMap.value=_.clearcoatNormalMap,_.side===Gn&&y.clearcoatNormalScale.value.negate())),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap)),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=E.texture,y.transmissionSamplerSize.value.set(E.width,E.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap)}function S(y,_){_.matcap&&(y.matcap.value=_.matcap)}function C(y,_){y.referencePosition.value.copy(_.referencePosition),y.nearDistance.value=_.nearDistance,y.farDistance.value=_.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function hy(r,e,t,n){let i={},s={},f=[];const l=t.isWebGL2?r.getParameter(35375):0;function d(A,L){const k=L.program;n.uniformBlockBinding(A,k)}function h(A,L){let k=i[A.id];k===void 0&&(C(A),k=g(A),i[A.id]=k,A.addEventListener("dispose",_));const D=L.program;n.updateUBOMapping(A,D);const N=e.render.frame;s[A.id]!==N&&(v(A),s[A.id]=N)}function g(A){const L=m();A.__bindingPointIndex=L;const k=r.createBuffer(),D=A.__size,N=A.usage;return r.bindBuffer(35345,k),r.bufferData(35345,D,N),r.bindBuffer(35345,null),r.bindBufferBase(35345,L,k),k}function m(){for(let A=0;A<l;A++)if(f.indexOf(A)===-1)return f.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(A){const L=i[A.id],k=A.uniforms,D=A.__cache;r.bindBuffer(35345,L);for(let N=0,$=k.length;N<$;N++){const T=k[N];if(S(T,N,D)===!0){const B=T.value,te=T.__offset;typeof B=="number"?(T.__data[0]=B,r.bufferSubData(35345,te,T.__data)):(T.value.isMatrix3?(T.__data[0]=T.value.elements[0],T.__data[1]=T.value.elements[1],T.__data[2]=T.value.elements[2],T.__data[3]=T.value.elements[0],T.__data[4]=T.value.elements[3],T.__data[5]=T.value.elements[4],T.__data[6]=T.value.elements[5],T.__data[7]=T.value.elements[0],T.__data[8]=T.value.elements[6],T.__data[9]=T.value.elements[7],T.__data[10]=T.value.elements[8],T.__data[11]=T.value.elements[0]):B.toArray(T.__data),r.bufferSubData(35345,te,T.__data))}}r.bindBuffer(35345,null)}function S(A,L,k){const D=A.value;if(k[L]===void 0)return typeof D=="number"?k[L]=D:k[L]=D.clone(),!0;if(typeof D=="number"){if(k[L]!==D)return k[L]=D,!0}else{const N=k[L];if(N.equals(D)===!1)return N.copy(D),!0}return!1}function C(A){const L=A.uniforms;let k=0;const D=16;let N=0;for(let $=0,T=L.length;$<T;$++){const B=L[$],te=y(B);if(B.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=k,$>0){N=k%D;const ee=D-N;N!==0&&ee-te.boundary<0&&(k+=D-N,B.__offset=k)}k+=te.storage}return N=k%D,N>0&&(k+=D-N),A.__size=k,A.__cache={},this}function y(A){const L=A.value,k={boundary:0,storage:0};return typeof L=="number"?(k.boundary=4,k.storage=4):L.isVector2?(k.boundary=8,k.storage=8):L.isVector3||L.isColor?(k.boundary=16,k.storage=12):L.isVector4?(k.boundary=16,k.storage=16):L.isMatrix3?(k.boundary=48,k.storage=48):L.isMatrix4?(k.boundary=64,k.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),k}function _(A){const L=A.target;L.removeEventListener("dispose",_);const k=f.indexOf(L.__bindingPointIndex);f.splice(k,1),r.deleteBuffer(i[L.id]),delete i[L.id],delete s[L.id]}function E(){for(const A in i)r.deleteBuffer(i[A]);f=[],i={},s={}}return{bind:d,update:h,dispose:E}}function py(){const r=ia("canvas");return r.style.display="block",r}function sd(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:py(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,f=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,l=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,d=r.powerPreference!==void 0?r.powerPreference:"default",h=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let g;t!==null?g=t.getContextAttributes().alpha:g=r.alpha!==void 0?r.alpha:!1;let m=null,v=null;const S=[],C=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=cr,this.physicallyCorrectLights=!1,this.toneMapping=mi,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const y=this;let _=!1,E=0,A=0,L=null,k=-1,D=null;const N=new Ht,$=new Ht;let T=null,B=e.width,te=e.height,ee=1,Ce=null,ye=null;const Y=new Ht(0,0,B,te),j=new Ht(0,0,B,te);let K=!1;const de=new Qf;let fe=!1,Q=!1,se=null;const xe=new qt,pe=new Qe,ve=new H,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return L===null?ee:1}let le=t;function ot(I,X){for(let ne=0;ne<I.length;ne++){const q=I[ne],ce=e.getContext(q,X);if(ce!==null)return ce}return null}try{const I={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:f,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ql}`),e.addEventListener("webglcontextlost",Ge,!1),e.addEventListener("webglcontextrestored",Ke,!1),e.addEventListener("webglcontextcreationerror",ft,!1),le===null){const X=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&X.shift(),le=ot(X,I),le===null)throw ot(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}le.getShaderPrecisionFormat===void 0&&(le.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Ue,ze,Re,et,Xe,ke,At,je,Lt,Jt,ut,st,cn,Xt,F,P,ie,me,Se,Ee,Be,O,he,be;function Ae(){Ue=new M0(le),ze=new v0(le,Ue,r),Ue.init(ze),O=new ay(le,Ue,ze),Re=new oy(le,Ue,ze),et=new C0,Xe=new j_,ke=new sy(le,Ue,Re,Xe,ze,O,et),At=new y0(y),je=new w0(y),Lt=new Nm(le,ze),he=new m0(le,Ue,Lt,ze),Jt=new E0(le,Lt,et,he),ut=new L0(le,Jt,Lt,et),Se=new D0(le,ze,ke),P=new _0(Xe),st=new H_(y,At,je,Ue,ze,he,P),cn=new dy(y,Xe),Xt=new X_,F=new Q_(Ue,ze),me=new p0(y,At,Re,ut,g,f),ie=new ry(y,ut,ze),be=new hy(le,et,ze,Re),Ee=new g0(le,Ue,et,ze),Be=new T0(le,Ue,et,ze),et.programs=st.programs,y.capabilities=ze,y.extensions=Ue,y.properties=Xe,y.renderLists=Xt,y.shadowMap=ie,y.state=Re,y.info=et}Ae();const Te=new fy(y,le);this.xr=Te,this.getContext=function(){return le},this.getContextAttributes=function(){return le.getContextAttributes()},this.forceContextLoss=function(){const I=Ue.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Ue.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(I){I!==void 0&&(ee=I,this.setSize(B,te,!1))},this.getSize=function(I){return I.set(B,te)},this.setSize=function(I,X,ne){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=I,te=X,e.width=Math.floor(I*ee),e.height=Math.floor(X*ee),ne!==!1&&(e.style.width=I+"px",e.style.height=X+"px"),this.setViewport(0,0,I,X)},this.getDrawingBufferSize=function(I){return I.set(B*ee,te*ee).floor()},this.setDrawingBufferSize=function(I,X,ne){B=I,te=X,ee=ne,e.width=Math.floor(I*ne),e.height=Math.floor(X*ne),this.setViewport(0,0,I,X)},this.getCurrentViewport=function(I){return I.copy(N)},this.getViewport=function(I){return I.copy(Y)},this.setViewport=function(I,X,ne,q){I.isVector4?Y.set(I.x,I.y,I.z,I.w):Y.set(I,X,ne,q),Re.viewport(N.copy(Y).multiplyScalar(ee).floor())},this.getScissor=function(I){return I.copy(j)},this.setScissor=function(I,X,ne,q){I.isVector4?j.set(I.x,I.y,I.z,I.w):j.set(I,X,ne,q),Re.scissor($.copy(j).multiplyScalar(ee).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(I){Re.setScissorTest(K=I)},this.setOpaqueSort=function(I){Ce=I},this.setTransparentSort=function(I){ye=I},this.getClearColor=function(I){return I.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(I=!0,X=!0,ne=!0){let q=0;I&&(q|=16384),X&&(q|=256),ne&&(q|=1024),le.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ge,!1),e.removeEventListener("webglcontextrestored",Ke,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Xt.dispose(),F.dispose(),Xe.dispose(),At.dispose(),je.dispose(),ut.dispose(),he.dispose(),be.dispose(),st.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",nt),Te.removeEventListener("sessionend",dt),se&&(se.dispose(),se=null),Pt.stop()};function Ge(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Ke(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const I=et.autoReset,X=ie.enabled,ne=ie.autoUpdate,q=ie.needsUpdate,ce=ie.type;Ae(),et.autoReset=I,ie.enabled=X,ie.autoUpdate=ne,ie.needsUpdate=q,ie.type=ce}function ft(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function G(I){const X=I.target;X.removeEventListener("dispose",G),we(X)}function we(I){re(I),Xe.remove(I)}function re(I){const X=Xe.get(I).programs;X!==void 0&&(X.forEach(function(ne){st.releaseProgram(ne)}),I.isShaderMaterial&&st.releaseShaderCache(I))}this.renderBufferDirect=function(I,X,ne,q,ce,Ve){X===null&&(X=ae);const qe=ce.isMesh&&ce.matrixWorld.determinant()<0,$e=On(I,X,ne,q,ce);Re.setMaterial(q,qe);let He=ne.index;const at=ne.attributes.position;if(He===null){if(at===void 0||at.count===0)return}else if(He.count===0)return;let it=1;q.wireframe===!0&&(He=Jt.getWireframeAttribute(ne),it=2),he.setup(ce,q,$e,ne,He);let rt,yt=Ee;He!==null&&(rt=Lt.get(He),yt=Be,yt.setIndex(rt));const wn=He!==null?He.count:at.count,ti=ne.drawRange.start*it,qn=ne.drawRange.count*it,vn=Ve!==null?Ve.start*it:0,lt=Ve!==null?Ve.count*it:1/0,_i=Math.max(ti,vn),xt=Math.min(wn,ti+qn,vn+lt)-1,fn=Math.max(0,xt-_i+1);if(fn!==0){if(ce.isMesh)q.wireframe===!0?(Re.setLineWidth(q.wireframeLinewidth*Ne()),yt.setMode(1)):yt.setMode(4);else if(ce.isLine){let _n=q.linewidth;_n===void 0&&(_n=1),Re.setLineWidth(_n*Ne()),ce.isLineSegments?yt.setMode(1):ce.isLineLoop?yt.setMode(2):yt.setMode(3)}else ce.isPoints?yt.setMode(0):ce.isSprite&&yt.setMode(4);if(ce.isInstancedMesh)yt.renderInstances(_i,fn,ce.count);else if(ne.isInstancedBufferGeometry){const _n=Math.min(ne.instanceCount,ne._maxInstanceCount);yt.renderInstances(_i,fn,_n)}else yt.render(_i,fn)}},this.compile=function(I,X){v=F.get(I),v.init(),C.push(v),I.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(v.pushLight(ne),ne.castShadow&&v.pushShadow(ne))}),v.setupLights(y.physicallyCorrectLights),I.traverse(function(ne){const q=ne.material;if(q)if(Array.isArray(q))for(let ce=0;ce<q.length;ce++){const Ve=q[ce];_r(Ve,I,ne)}else _r(q,I,ne)}),C.pop(),v=null};let De=null;function Le(I){De&&De(I)}function nt(){Pt.stop()}function dt(){Pt.start()}const Pt=new ed;Pt.setAnimationLoop(Le),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(I){De=I,Te.setAnimationLoop(I),I===null?Pt.stop():Pt.start()},Te.addEventListener("sessionstart",nt),Te.addEventListener("sessionend",dt),this.render=function(I,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;I.autoUpdate===!0&&I.updateMatrixWorld(),X.parent===null&&X.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(X),X=Te.getCamera()),I.isScene===!0&&I.onBeforeRender(y,I,X,L),v=F.get(I,C.length),v.init(),C.push(v),xe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),de.setFromProjectionMatrix(xe),Q=this.localClippingEnabled,fe=P.init(this.clippingPlanes,Q,X),m=Xt.get(I,S.length),m.init(),S.push(m),un(I,X,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Ce,ye),fe===!0&&P.beginShadows();const ne=v.state.shadowsArray;if(ie.render(ne,I,X),fe===!0&&P.endShadows(),this.info.autoReset===!0&&this.info.reset(),me.render(m,I),v.setupLights(y.physicallyCorrectLights),X.isArrayCamera){const q=X.cameras;for(let ce=0,Ve=q.length;ce<Ve;ce++){const qe=q[ce];Tt(m,I,qe,qe.viewport)}}else Tt(m,I,X);L!==null&&(ke.updateMultisampleRenderTarget(L),ke.updateRenderTargetMipmap(L)),I.isScene===!0&&I.onAfterRender(y,I,X),he.resetDefaultState(),k=-1,D=null,C.pop(),C.length>0?v=C[C.length-1]:v=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function un(I,X,ne,q){if(I.visible===!1)return;if(I.layers.test(X.layers)){if(I.isGroup)ne=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(X);else if(I.isLight)v.pushLight(I),I.castShadow&&v.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||de.intersectsSprite(I)){q&&ve.setFromMatrixPosition(I.matrixWorld).applyMatrix4(xe);const qe=ut.update(I),$e=I.material;$e.visible&&m.push(I,qe,$e,ne,ve.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(I.isSkinnedMesh&&I.skeleton.frame!==et.render.frame&&(I.skeleton.update(),I.skeleton.frame=et.render.frame),!I.frustumCulled||de.intersectsObject(I))){q&&ve.setFromMatrixPosition(I.matrixWorld).applyMatrix4(xe);const qe=ut.update(I),$e=I.material;if(Array.isArray($e)){const He=qe.groups;for(let at=0,it=He.length;at<it;at++){const rt=He[at],yt=$e[rt.materialIndex];yt&&yt.visible&&m.push(I,qe,yt,ne,ve.z,rt)}}else $e.visible&&m.push(I,qe,$e,ne,ve.z,null)}}const Ve=I.children;for(let qe=0,$e=Ve.length;qe<$e;qe++)un(Ve[qe],X,ne,q)}function Tt(I,X,ne,q){const ce=I.opaque,Ve=I.transmissive,qe=I.transparent;v.setupLightsView(ne),Ve.length>0&&kt(ce,X,ne),q&&Re.viewport(N.copy(q)),ce.length>0&&Rt(ce,X,ne),Ve.length>0&&Rt(Ve,X,ne),qe.length>0&&Rt(qe,X,ne),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function kt(I,X,ne){const q=ze.isWebGL2;se===null&&(se=new ur(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")?Ho:lr,minFilter:oa,samples:q&&s===!0?4:0})),y.getDrawingBufferSize(pe),q?se.setSize(pe.x,pe.y):se.setSize(kl(pe.x),kl(pe.y));const ce=y.getRenderTarget();y.setRenderTarget(se),y.clear();const Ve=y.toneMapping;y.toneMapping=mi,Rt(I,X,ne),y.toneMapping=Ve,ke.updateMultisampleRenderTarget(se),ke.updateRenderTargetMipmap(se),y.setRenderTarget(ce)}function Rt(I,X,ne){const q=X.isScene===!0?X.overrideMaterial:null;for(let ce=0,Ve=I.length;ce<Ve;ce++){const qe=I[ce],$e=qe.object,He=qe.geometry,at=q===null?qe.material:q,it=qe.group;$e.layers.test(ne.layers)&&ei($e,X,ne,He,at,it)}}function ei(I,X,ne,q,ce,Ve){I.onBeforeRender(y,X,ne,q,ce,Ve),I.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ce.onBeforeRender(y,X,ne,q,I,Ve),ce.transparent===!0&&ce.side===ar?(ce.side=Gn,ce.needsUpdate=!0,y.renderBufferDirect(ne,X,q,ce,I,Ve),ce.side=Vo,ce.needsUpdate=!0,y.renderBufferDirect(ne,X,q,ce,I,Ve),ce.side=ar):y.renderBufferDirect(ne,X,q,ce,I,Ve),I.onAfterRender(y,X,ne,q,ce,Ve)}function _r(I,X,ne){X.isScene!==!0&&(X=ae);const q=Xe.get(I),ce=v.state.lights,Ve=v.state.shadowsArray,qe=ce.state.version,$e=st.getParameters(I,ce.state,Ve,X,ne),He=st.getProgramCacheKey($e);let at=q.programs;q.environment=I.isMeshStandardMaterial?X.environment:null,q.fog=X.fog,q.envMap=(I.isMeshStandardMaterial?je:At).get(I.envMap||q.environment),at===void 0&&(I.addEventListener("dispose",G),at=new Map,q.programs=at);let it=at.get(He);if(it!==void 0){if(q.currentProgram===it&&q.lightsStateVersion===qe)return Jo(I,$e),it}else $e.uniforms=st.getUniforms(I),I.onBuild(ne,$e,y),I.onBeforeCompile($e,y),it=st.acquireProgram($e,He),at.set(He,it),q.uniforms=$e.uniforms;const rt=q.uniforms;(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(rt.clippingPlanes=P.uniform),Jo(I,$e),q.needsLights=yr(I),q.lightsStateVersion=qe,q.needsLights&&(rt.ambientLightColor.value=ce.state.ambient,rt.lightProbe.value=ce.state.probe,rt.directionalLights.value=ce.state.directional,rt.directionalLightShadows.value=ce.state.directionalShadow,rt.spotLights.value=ce.state.spot,rt.spotLightShadows.value=ce.state.spotShadow,rt.rectAreaLights.value=ce.state.rectArea,rt.ltc_1.value=ce.state.rectAreaLTC1,rt.ltc_2.value=ce.state.rectAreaLTC2,rt.pointLights.value=ce.state.point,rt.pointLightShadows.value=ce.state.pointShadow,rt.hemisphereLights.value=ce.state.hemi,rt.directionalShadowMap.value=ce.state.directionalShadowMap,rt.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,rt.spotShadowMap.value=ce.state.spotShadowMap,rt.spotShadowMatrix.value=ce.state.spotShadowMatrix,rt.pointShadowMap.value=ce.state.pointShadowMap,rt.pointShadowMatrix.value=ce.state.pointShadowMatrix);const yt=it.getUniforms(),wn=Ys.seqWithValue(yt.seq,rt);return q.currentProgram=it,q.uniformsList=wn,it}function Jo(I,X){const ne=Xe.get(I);ne.outputEncoding=X.outputEncoding,ne.instancing=X.instancing,ne.skinning=X.skinning,ne.morphTargets=X.morphTargets,ne.morphNormals=X.morphNormals,ne.morphColors=X.morphColors,ne.morphTargetsCount=X.morphTargetsCount,ne.numClippingPlanes=X.numClippingPlanes,ne.numIntersection=X.numClipIntersection,ne.vertexAlphas=X.vertexAlphas,ne.vertexTangents=X.vertexTangents,ne.toneMapping=X.toneMapping}function On(I,X,ne,q,ce){X.isScene!==!0&&(X=ae),ke.resetTextureUnits();const Ve=X.fog,qe=q.isMeshStandardMaterial?X.environment:null,$e=L===null?y.outputEncoding:L.isXRRenderTarget===!0?L.texture.encoding:cr,He=(q.isMeshStandardMaterial?je:At).get(q.envMap||qe),at=q.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,it=!!q.normalMap&&!!ne.attributes.tangent,rt=!!ne.morphAttributes.position,yt=!!ne.morphAttributes.normal,wn=!!ne.morphAttributes.color,ti=q.toneMapped?y.toneMapping:mi,qn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,vn=qn!==void 0?qn.length:0,lt=Xe.get(q),_i=v.state.lights;if(fe===!0&&(Q===!0||I!==D)){const Ft=I===D&&q.id===k;P.setState(q,I,Ft)}let xt=!1;q.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==_i.state.version||lt.outputEncoding!==$e||ce.isInstancedMesh&&lt.instancing===!1||!ce.isInstancedMesh&&lt.instancing===!0||ce.isSkinnedMesh&&lt.skinning===!1||!ce.isSkinnedMesh&&lt.skinning===!0||lt.envMap!==He||q.fog===!0&&lt.fog!==Ve||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==P.numPlanes||lt.numIntersection!==P.numIntersection)||lt.vertexAlphas!==at||lt.vertexTangents!==it||lt.morphTargets!==rt||lt.morphNormals!==yt||lt.morphColors!==wn||lt.toneMapping!==ti||ze.isWebGL2===!0&&lt.morphTargetsCount!==vn)&&(xt=!0):(xt=!0,lt.__version=q.version);let fn=lt.currentProgram;xt===!0&&(fn=_r(q,X,ce));let _n=!1,ni=!1,lo=!1;const Yt=fn.getUniforms(),kn=lt.uniforms;if(Re.useProgram(fn.program)&&(_n=!0,ni=!0,lo=!0),q.id!==k&&(k=q.id,ni=!0),_n||D!==I){if(Yt.setValue(le,"projectionMatrix",I.projectionMatrix),ze.logarithmicDepthBuffer&&Yt.setValue(le,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),D!==I&&(D=I,ni=!0,lo=!0),q.isShaderMaterial||q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshStandardMaterial||q.envMap){const Ft=Yt.map.cameraPosition;Ft!==void 0&&Ft.setValue(le,ve.setFromMatrixPosition(I.matrixWorld))}(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Yt.setValue(le,"isOrthographic",I.isOrthographicCamera===!0),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial||q.isShadowMaterial||ce.isSkinnedMesh)&&Yt.setValue(le,"viewMatrix",I.matrixWorldInverse)}if(ce.isSkinnedMesh){Yt.setOptional(le,ce,"bindMatrix"),Yt.setOptional(le,ce,"bindMatrixInverse");const Ft=ce.skeleton;Ft&&(ze.floatVertexTextures?(Ft.boneTexture===null&&Ft.computeBoneTexture(),Yt.setValue(le,"boneTexture",Ft.boneTexture,ke),Yt.setValue(le,"boneTextureSize",Ft.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const co=ne.morphAttributes;if((co.position!==void 0||co.normal!==void 0||co.color!==void 0&&ze.isWebGL2===!0)&&Se.update(ce,ne,q,fn),(ni||lt.receiveShadow!==ce.receiveShadow)&&(lt.receiveShadow=ce.receiveShadow,Yt.setValue(le,"receiveShadow",ce.receiveShadow)),ni&&(Yt.setValue(le,"toneMappingExposure",y.toneMappingExposure),lt.needsLights&&We(kn,lo),Ve&&q.fog===!0&&cn.refreshFogUniforms(kn,Ve),cn.refreshMaterialUniforms(kn,q,ee,te,se),Ys.upload(le,lt.uniformsList,kn,ke)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ys.upload(le,lt.uniformsList,kn,ke),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Yt.setValue(le,"center",ce.center),Yt.setValue(le,"modelViewMatrix",ce.modelViewMatrix),Yt.setValue(le,"normalMatrix",ce.normalMatrix),Yt.setValue(le,"modelMatrix",ce.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ft=q.uniformsGroups;for(let uo=0,ca=Ft.length;uo<ca;uo++)if(ze.isWebGL2){const fo=Ft[uo];be.update(fo,fn),be.bind(fo,fn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fn}function We(I,X){I.ambientLightColor.needsUpdate=X,I.lightProbe.needsUpdate=X,I.directionalLights.needsUpdate=X,I.directionalLightShadows.needsUpdate=X,I.pointLights.needsUpdate=X,I.pointLightShadows.needsUpdate=X,I.spotLights.needsUpdate=X,I.spotLightShadows.needsUpdate=X,I.rectAreaLights.needsUpdate=X,I.hemisphereLights.needsUpdate=X}function yr(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(I,X,ne){Xe.get(I.texture).__webglTexture=X,Xe.get(I.depthTexture).__webglTexture=ne;const q=Xe.get(I);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=ne===void 0,q.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,X){const ne=Xe.get(I);ne.__webglFramebuffer=X,ne.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(I,X=0,ne=0){L=I,E=X,A=ne;let q=!0;if(I){const He=Xe.get(I);He.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(36160,null),q=!1):He.__webglFramebuffer===void 0?ke.setupRenderTarget(I):He.__hasExternalTextures&&ke.rebindTextures(I,Xe.get(I.texture).__webglTexture,Xe.get(I.depthTexture).__webglTexture)}let ce=null,Ve=!1,qe=!1;if(I){const He=I.texture;(He.isData3DTexture||He.isDataArrayTexture)&&(qe=!0);const at=Xe.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(ce=at[X],Ve=!0):ze.isWebGL2&&I.samples>0&&ke.useMultisampledRTT(I)===!1?ce=Xe.get(I).__webglMultisampledFramebuffer:ce=at,N.copy(I.viewport),$.copy(I.scissor),T=I.scissorTest}else N.copy(Y).multiplyScalar(ee).floor(),$.copy(j).multiplyScalar(ee).floor(),T=K;if(Re.bindFramebuffer(36160,ce)&&ze.drawBuffers&&q&&Re.drawBuffers(I,ce),Re.viewport(N),Re.scissor($),Re.setScissorTest(T),Ve){const He=Xe.get(I.texture);le.framebufferTexture2D(36160,36064,34069+X,He.__webglTexture,ne)}else if(qe){const He=Xe.get(I.texture),at=X||0;le.framebufferTextureLayer(36160,36064,He.__webglTexture,ne||0,at)}k=-1},this.readRenderTargetPixels=function(I,X,ne,q,ce,Ve,qe){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=Xe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&qe!==void 0&&($e=$e[qe]),$e){Re.bindFramebuffer(36160,$e);try{const He=I.texture,at=He.format,it=He.type;if(at!==Jn&&O.convert(at)!==le.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const rt=it===Ho&&(Ue.has("EXT_color_buffer_half_float")||ze.isWebGL2&&Ue.has("EXT_color_buffer_float"));if(it!==lr&&O.convert(it)!==le.getParameter(35738)&&!(it===ir&&(ze.isWebGL2||Ue.has("OES_texture_float")||Ue.has("WEBGL_color_buffer_float")))&&!rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=I.width-q&&ne>=0&&ne<=I.height-ce&&le.readPixels(X,ne,q,ce,O.convert(at),O.convert(it),Ve)}finally{const He=L!==null?Xe.get(L).__webglFramebuffer:null;Re.bindFramebuffer(36160,He)}}},this.copyFramebufferToTexture=function(I,X,ne=0){const q=Math.pow(2,-ne),ce=Math.floor(X.image.width*q),Ve=Math.floor(X.image.height*q);ke.setTexture2D(X,0),le.copyTexSubImage2D(3553,ne,0,0,I.x,I.y,ce,Ve),Re.unbindTexture()},this.copyTextureToTexture=function(I,X,ne,q=0){const ce=X.image.width,Ve=X.image.height,qe=O.convert(ne.format),$e=O.convert(ne.type);ke.setTexture2D(ne,0),le.pixelStorei(37440,ne.flipY),le.pixelStorei(37441,ne.premultiplyAlpha),le.pixelStorei(3317,ne.unpackAlignment),X.isDataTexture?le.texSubImage2D(3553,q,I.x,I.y,ce,Ve,qe,$e,X.image.data):X.isCompressedTexture?le.compressedTexSubImage2D(3553,q,I.x,I.y,X.mipmaps[0].width,X.mipmaps[0].height,qe,X.mipmaps[0].data):le.texSubImage2D(3553,q,I.x,I.y,qe,$e,X.image),q===0&&ne.generateMipmaps&&le.generateMipmap(3553),Re.unbindTexture()},this.copyTextureToTexture3D=function(I,X,ne,q,ce=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ve=I.max.x-I.min.x+1,qe=I.max.y-I.min.y+1,$e=I.max.z-I.min.z+1,He=O.convert(q.format),at=O.convert(q.type);let it;if(q.isData3DTexture)ke.setTexture3D(q,0),it=32879;else if(q.isDataArrayTexture)ke.setTexture2DArray(q,0),it=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}le.pixelStorei(37440,q.flipY),le.pixelStorei(37441,q.premultiplyAlpha),le.pixelStorei(3317,q.unpackAlignment);const rt=le.getParameter(3314),yt=le.getParameter(32878),wn=le.getParameter(3316),ti=le.getParameter(3315),qn=le.getParameter(32877),vn=ne.isCompressedTexture?ne.mipmaps[0]:ne.image;le.pixelStorei(3314,vn.width),le.pixelStorei(32878,vn.height),le.pixelStorei(3316,I.min.x),le.pixelStorei(3315,I.min.y),le.pixelStorei(32877,I.min.z),ne.isDataTexture||ne.isData3DTexture?le.texSubImage3D(it,ce,X.x,X.y,X.z,Ve,qe,$e,He,at,vn.data):ne.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),le.compressedTexSubImage3D(it,ce,X.x,X.y,X.z,Ve,qe,$e,He,vn.data)):le.texSubImage3D(it,ce,X.x,X.y,X.z,Ve,qe,$e,He,at,vn),le.pixelStorei(3314,rt),le.pixelStorei(32878,yt),le.pixelStorei(3316,wn),le.pixelStorei(3315,ti),le.pixelStorei(32877,qn),ce===0&&q.generateMipmaps&&le.generateMipmap(it),Re.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?ke.setTextureCube(I,0):I.isData3DTexture?ke.setTexture3D(I,0):I.isDataArrayTexture?ke.setTexture2DArray(I,0):ke.setTexture2D(I,0),Re.unbindTexture()},this.resetState=function(){E=0,A=0,L=null,Re.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class my extends sd{}my.prototype.isWebGL1Renderer=!0;class gy extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class zl extends Zo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const df=new H,hf=new H,pf=new qt,_l=new Xf,Hs=new sa;class vy extends Rn{constructor(e=new Wn,t=new zl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)df.fromBufferAttribute(t,i-1),hf.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=df.distanceTo(hf);e.setAttribute("lineDistance",new gi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,f=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(i),Hs.radius+=s,e.ray.intersectsSphere(Hs)===!1)return;pf.copy(i).invert(),_l.copy(e.ray).applyMatrix4(pf);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),d=l*l,h=new H,g=new H,m=new H,v=new H,S=this.isLineSegments?2:1,C=n.index,_=n.attributes.position;if(C!==null){const E=Math.max(0,f.start),A=Math.min(C.count,f.start+f.count);for(let L=E,k=A-1;L<k;L+=S){const D=C.getX(L),N=C.getX(L+1);if(h.fromBufferAttribute(_,D),g.fromBufferAttribute(_,N),_l.distanceSqToSegment(h,g,v,m)>d)continue;v.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(v);T<e.near||T>e.far||t.push({distance:T,point:m.clone().applyMatrix4(this.matrixWorld),index:L,face:null,faceIndex:null,object:this})}}else{const E=Math.max(0,f.start),A=Math.min(_.count,f.start+f.count);for(let L=E,k=A-1;L<k;L+=S){if(h.fromBufferAttribute(_,L),g.fromBufferAttribute(_,L+1),_l.distanceSqToSegment(h,g,v,m)>d)continue;v.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(v);N<e.near||N>e.far||t.push({distance:N,point:m.clone().applyMatrix4(this.matrixWorld),index:L,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,f=i.length;s<f;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}const mf=new H,gf=new H;class vf extends vy{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)mf.fromBufferAttribute(t,i),gf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+mf.distanceTo(gf);e.setAttribute("lineDistance",new gi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _f{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(pn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ql}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ql);const yf={type:"change"},yl={type:"start"},xf={type:"end"};class _y extends gr{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tr.ROTATE,MIDDLE:Tr.DOLLY,RIGHT:Tr.PAN},this.touches={ONE:Cr.ROTATE,TWO:Cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",Xt),this._domElementKeyEvents=O},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(yf),n.update(),s=i.NONE},this.update=function(){const O=new H,he=new fr().setFromUnitVectors(e.up,new H(0,1,0)),be=he.clone().invert(),Ae=new H,Te=new fr,Ge=2*Math.PI;return function(){const ft=n.object.position;O.copy(ft).sub(n.target),O.applyQuaternion(he),l.setFromVector3(O),n.autoRotate&&s===i.NONE&&B($()),n.enableDamping?(l.theta+=d.theta*n.dampingFactor,l.phi+=d.phi*n.dampingFactor):(l.theta+=d.theta,l.phi+=d.phi);let G=n.minAzimuthAngle,we=n.maxAzimuthAngle;return isFinite(G)&&isFinite(we)&&(G<-Math.PI?G+=Ge:G>Math.PI&&(G-=Ge),we<-Math.PI?we+=Ge:we>Math.PI&&(we-=Ge),G<=we?l.theta=Math.max(G,Math.min(we,l.theta)):l.theta=l.theta>(G+we)/2?Math.max(G,l.theta):Math.min(we,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=h,l.radius=Math.max(n.minDistance,Math.min(n.maxDistance,l.radius)),n.enableDamping===!0?n.target.addScaledVector(g,n.dampingFactor):n.target.add(g),O.setFromSpherical(l),O.applyQuaternion(be),ft.copy(n.target).add(O),n.object.lookAt(n.target),n.enableDamping===!0?(d.theta*=1-n.dampingFactor,d.phi*=1-n.dampingFactor,g.multiplyScalar(1-n.dampingFactor)):(d.set(0,0,0),g.set(0,0,0)),h=1,m||Ae.distanceToSquared(n.object.position)>f||8*(1-Te.dot(n.object.quaternion))>f?(n.dispatchEvent(yf),Ae.copy(n.object.position),Te.copy(n.object.quaternion),m=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ie),n.domElement.removeEventListener("pointerdown",At),n.domElement.removeEventListener("pointercancel",Jt),n.domElement.removeEventListener("wheel",cn),n.domElement.removeEventListener("pointermove",je),n.domElement.removeEventListener("pointerup",Lt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Xt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const f=1e-6,l=new _f,d=new _f;let h=1;const g=new H;let m=!1;const v=new Qe,S=new Qe,C=new Qe,y=new Qe,_=new Qe,E=new Qe,A=new Qe,L=new Qe,k=new Qe,D=[],N={};function $(){return 2*Math.PI/60/60*n.autoRotateSpeed}function T(){return Math.pow(.95,n.zoomSpeed)}function B(O){d.theta-=O}function te(O){d.phi-=O}const ee=function(){const O=new H;return function(be,Ae){O.setFromMatrixColumn(Ae,0),O.multiplyScalar(-be),g.add(O)}}(),Ce=function(){const O=new H;return function(be,Ae){n.screenSpacePanning===!0?O.setFromMatrixColumn(Ae,1):(O.setFromMatrixColumn(Ae,0),O.crossVectors(n.object.up,O)),O.multiplyScalar(be),g.add(O)}}(),ye=function(){const O=new H;return function(be,Ae){const Te=n.domElement;if(n.object.isPerspectiveCamera){const Ge=n.object.position;O.copy(Ge).sub(n.target);let Ke=O.length();Ke*=Math.tan(n.object.fov/2*Math.PI/180),ee(2*be*Ke/Te.clientHeight,n.object.matrix),Ce(2*Ae*Ke/Te.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(ee(be*(n.object.right-n.object.left)/n.object.zoom/Te.clientWidth,n.object.matrix),Ce(Ae*(n.object.top-n.object.bottom)/n.object.zoom/Te.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Y(O){n.object.isPerspectiveCamera?h/=O:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*O)),n.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(O){n.object.isPerspectiveCamera?h*=O:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/O)),n.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(O){v.set(O.clientX,O.clientY)}function de(O){A.set(O.clientX,O.clientY)}function fe(O){y.set(O.clientX,O.clientY)}function Q(O){S.set(O.clientX,O.clientY),C.subVectors(S,v).multiplyScalar(n.rotateSpeed);const he=n.domElement;B(2*Math.PI*C.x/he.clientHeight),te(2*Math.PI*C.y/he.clientHeight),v.copy(S),n.update()}function se(O){L.set(O.clientX,O.clientY),k.subVectors(L,A),k.y>0?Y(T()):k.y<0&&j(T()),A.copy(L),n.update()}function xe(O){_.set(O.clientX,O.clientY),E.subVectors(_,y).multiplyScalar(n.panSpeed),ye(E.x,E.y),y.copy(_),n.update()}function pe(O){O.deltaY<0?j(T()):O.deltaY>0&&Y(T()),n.update()}function ve(O){let he=!1;switch(O.code){case n.keys.UP:ye(0,n.keyPanSpeed),he=!0;break;case n.keys.BOTTOM:ye(0,-n.keyPanSpeed),he=!0;break;case n.keys.LEFT:ye(n.keyPanSpeed,0),he=!0;break;case n.keys.RIGHT:ye(-n.keyPanSpeed,0),he=!0;break}he&&(O.preventDefault(),n.update())}function ae(){if(D.length===1)v.set(D[0].pageX,D[0].pageY);else{const O=.5*(D[0].pageX+D[1].pageX),he=.5*(D[0].pageY+D[1].pageY);v.set(O,he)}}function Ne(){if(D.length===1)y.set(D[0].pageX,D[0].pageY);else{const O=.5*(D[0].pageX+D[1].pageX),he=.5*(D[0].pageY+D[1].pageY);y.set(O,he)}}function le(){const O=D[0].pageX-D[1].pageX,he=D[0].pageY-D[1].pageY,be=Math.sqrt(O*O+he*he);A.set(0,be)}function ot(){n.enableZoom&&le(),n.enablePan&&Ne()}function Ue(){n.enableZoom&&le(),n.enableRotate&&ae()}function ze(O){if(D.length==1)S.set(O.pageX,O.pageY);else{const be=Be(O),Ae=.5*(O.pageX+be.x),Te=.5*(O.pageY+be.y);S.set(Ae,Te)}C.subVectors(S,v).multiplyScalar(n.rotateSpeed);const he=n.domElement;B(2*Math.PI*C.x/he.clientHeight),te(2*Math.PI*C.y/he.clientHeight),v.copy(S)}function Re(O){if(D.length===1)_.set(O.pageX,O.pageY);else{const he=Be(O),be=.5*(O.pageX+he.x),Ae=.5*(O.pageY+he.y);_.set(be,Ae)}E.subVectors(_,y).multiplyScalar(n.panSpeed),ye(E.x,E.y),y.copy(_)}function et(O){const he=Be(O),be=O.pageX-he.x,Ae=O.pageY-he.y,Te=Math.sqrt(be*be+Ae*Ae);L.set(0,Te),k.set(0,Math.pow(L.y/A.y,n.zoomSpeed)),Y(k.y),A.copy(L)}function Xe(O){n.enableZoom&&et(O),n.enablePan&&Re(O)}function ke(O){n.enableZoom&&et(O),n.enableRotate&&ze(O)}function At(O){n.enabled!==!1&&(D.length===0&&(n.domElement.setPointerCapture(O.pointerId),n.domElement.addEventListener("pointermove",je),n.domElement.addEventListener("pointerup",Lt)),me(O),O.pointerType==="touch"?F(O):ut(O))}function je(O){n.enabled!==!1&&(O.pointerType==="touch"?P(O):st(O))}function Lt(O){Se(O),D.length===0&&(n.domElement.releasePointerCapture(O.pointerId),n.domElement.removeEventListener("pointermove",je),n.domElement.removeEventListener("pointerup",Lt)),n.dispatchEvent(xf),s=i.NONE}function Jt(O){Se(O)}function ut(O){let he;switch(O.button){case 0:he=n.mouseButtons.LEFT;break;case 1:he=n.mouseButtons.MIDDLE;break;case 2:he=n.mouseButtons.RIGHT;break;default:he=-1}switch(he){case Tr.DOLLY:if(n.enableZoom===!1)return;de(O),s=i.DOLLY;break;case Tr.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enablePan===!1)return;fe(O),s=i.PAN}else{if(n.enableRotate===!1)return;K(O),s=i.ROTATE}break;case Tr.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enableRotate===!1)return;K(O),s=i.ROTATE}else{if(n.enablePan===!1)return;fe(O),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(yl)}function st(O){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Q(O);break;case i.DOLLY:if(n.enableZoom===!1)return;se(O);break;case i.PAN:if(n.enablePan===!1)return;xe(O);break}}function cn(O){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(O.preventDefault(),n.dispatchEvent(yl),pe(O),n.dispatchEvent(xf))}function Xt(O){n.enabled===!1||n.enablePan===!1||ve(O)}function F(O){switch(Ee(O),D.length){case 1:switch(n.touches.ONE){case Cr.ROTATE:if(n.enableRotate===!1)return;ae(),s=i.TOUCH_ROTATE;break;case Cr.PAN:if(n.enablePan===!1)return;Ne(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Cr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ot(),s=i.TOUCH_DOLLY_PAN;break;case Cr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ue(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(yl)}function P(O){switch(Ee(O),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ze(O),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Re(O),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Xe(O),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ke(O),n.update();break;default:s=i.NONE}}function ie(O){n.enabled!==!1&&O.preventDefault()}function me(O){D.push(O)}function Se(O){delete N[O.pointerId];for(let he=0;he<D.length;he++)if(D[he].pointerId==O.pointerId){D.splice(he,1);return}}function Ee(O){let he=N[O.pointerId];he===void 0&&(he=new Qe,N[O.pointerId]=he),he.set(O.pageX,O.pageY)}function Be(O){const he=O.pointerId===D[0].pointerId?D[1]:D[0];return N[he.pointerId]}n.domElement.addEventListener("contextmenu",ie),n.domElement.addEventListener("pointerdown",At),n.domElement.addEventListener("pointercancel",Jt),n.domElement.addEventListener("wheel",cn,{passive:!1}),this.update()}}const oo=([r,e,t],n)=>{if(n<=0||t<1){const i=1/(1-n*t);return[r*i,e*i]}},yy=([r,e,t],n)=>{if(n<=0||t>0){const i=1/t;return[r*i,e*i]}},xy=([r,e,t],n)=>{if(n<=0||t<0)return[r,e]},by=([r,e,t],n)=>{const i=1/(1+n*t);return[r*i,e*i]},Sy=([r,e,t],n)=>{const i=Math.sqrt(2/(1-n*t));return[r*i,e*i]},wy=([r,e,t],n)=>{const i=oo([r,e,t],n);if(!i)return;const[s,f]=i,l=Math.sqrt(s*s+f*f),d=Math.atan2(f,s);return[l*Math.cos(d+Math.PI*l),l*Math.sin(d+Math.PI*l)]},My=(r,[e,t,n],i)=>{if(i<=0||n<=1/r){const s=1/(r-i*n);return[e*s,t*s]}},Ey=([r,e,t],n)=>My(1.4,[r,e,t],n),ad=([r,e,t],n)=>{let i=Math.PI/2-Math[n>0?"acos":"acosh"](t),s=Math.atan2(r,e);if(Math.abs(i)<.7*Math.PI/2&&Math.abs(s)<.8*Math.PI)return[s,i]},Ty=([r,e,t],n)=>{const i=ad([r,e,t],n);if(!i)return;const[s,f]=i;return[s,Math.log(Math.tan(Math.PI/4+f/2))]},Cy=([r,e,t],n)=>{const i=oo([r,e,t],n);if(!i)return;const[s,f]=i,l=4*Math.PI*.5,d=(1+s)*(1+s)+f*f,h=(1-s)*(1-s)+f*f;return[l*(Math.log(Math.sqrt(d))-Math.log(Math.sqrt(h))),l*(Math.atan2(f,1+s)-Math.atan2(-f,1-s))]},Ay=([r,e,t],n)=>{const i=oo([r,e,t],n);if(!i)return;const[s,f]=i,l=s*s,d=f-1,h=-1/(l+d*d);return[2*s*h,(l+d*(f+1))*h]},Py=([r,e,t],n)=>{const i=oo([r,e,t],n);if(!i)return;const[s,f]=i,l=1/(2*(s*s+f*f));return[s*(.5+l),f*(.5-l)]},ld={poincare:oo,klein:yy,inverted:by,lambert:Sy,twilight:Ey,spiral:wy,band:Cy,half:Ay,orthographic:xy,joukowsky:Py,latlng:ad,mercator:Ty};let Bt,$s,Zs;const cd=({p:r,q:e,r:t})=>{const n=1/r+1/e+1/t;Math.abs(n-1)<1e-5?Bt=0:n-1<1e-5?Bt=-1:Bt=1},Bi=()=>Bt,ud=r=>{$s=r,Zs=10**r},so=([r,e,t],n=Bt)=>{if(n===0)return[r/t,e/t,1];let i=n*r*r+n*e*e+t*t;if(i===0)return[0,0,1];n<0&&i<0&&(i*=-1);const s=(n===-1&&Math.sign(t)||1)/Math.sqrt(i);return[r*s,e*s,t*s]},Ln=([r,e,t],[n,i,s],f=Bt)=>r*n+e*i+f*t*s,la=([r,e,t],[n,i,s],f=Bt)=>[e*s-t*i,t*n-r*s,(f||1)*(r*i-e*n)],Dy=(r,e,t)=>t?[e,r]:[r,e],ht=(r,e,t)=>so(la(...Dy(r,e,t))),ki=(r,e)=>{if(Bt<=0){const n=[r[0]-e[0],r[1]-e[1],r[2]-e[2]];return so(n,1)}const t=[.5*(r[0]+e[0]),.5*(r[1]+e[1]),.5*(r[2]+e[2])];return ht(la(r,e),t,!1)},bf=r=>Math.sqrt(Ln(r,r,1)),Ly=([r,e,t],[n,i,s])=>[n-r,i-e,s-t],js=([r,e,t],[n,i,s])=>Math.abs(n-r)<1e-6&&Math.abs(i-e)<1e-6&&Math.abs(s-t)<1e-6,Ry=(r,e,t,n)=>{const i=Bt||1;return i*Ln(e,r,i)>=0&&i*Ln(t,r,i)>=0&&i*Ln(n,r,i)>=0},fd=(r,e,t)=>ht(ki(r,t),ki(t,e),!0),Iy=(r,e,t)=>[ht(t,ki(r,e),!0),ht(r,ki(e,t),!0),ht(e,ki(t,r),!0)],Oy=(r,e,t,n)=>{const i=Bt||1,s=fd(e,t,n),f=so(la(s,r),1),l=Ln(ki(t,n),r,i)*(Bt?1:-1)>=0,d=Ln(ki(n,e),r,i)*(Bt?1:-1)>=0,h=Ln(ki(e,t),r,i)*(Bt?1:-1)>=0;if(h&&!d)return ht(e,f,!1);if(l&&!h)return ht(t,f,!1);if(d&&!l)return ht(n,f,!1)},Io=(r,e)=>{const t=2*Ln(r,e)/Ln(e,e);return[r[0]-t*e[0],r[1]-t*e[1],r[2]-t*e[2]]},dd=r=>{let e=[];for(let t=0;t<3;t++)e.push(String(~~Math.round(Zs*r[t][0])).padStart($s,"0")+"|"+String(~~Math.round(Zs*r[t][1])).padStart($s,"0")+"|"+String(~~Math.round(Zs*r[t][2])).padStart($s,"0"));return e.sort().join("/")},Sf=(r,e,t,n,i)=>{let s=(e+1)%3,f=(e+2)%3;const l=[[],[],[],[]];l[s]=Io(r[s],r[e]),l[f]=Io(r[f],r[e]),l[3]=Io(r[3],r[e]),l[4]=Io(r[4],r[e]),l[5]=Io(r[5],r[e]),l[e][0]=-r[e][0],l[e][1]=-r[e][1],l[e][2]=-r[e][2],l.parity=1-r.parity;const d=dd(l);if(n){for(let h=t;h>=0;h--)if(i[h][d])return}return i[t][d]=!0,l},ky=({p:r,q:e,r:t})=>{const n=Math.PI/r,i=Math.PI/e,s=Math.PI/t,f=(Math.cos(n)*Math.cos(i)+Math.cos(s))/Math.sin(n),l=Math.cos(i),d=Bt?Math.sqrt(Bt*(1-f*f-l*l)):1;return[[-l,-f,d],[-Math.cos(n),Math.sin(n),0],[1,0,0]]},Fy=(r,e,t,n,i,s)=>{n[t]=n[t]||[],i[t]=i[t]||[],s[t]=s[t]||{};const f=[],l=[];if(t>0){if(!(r=Sf(r,0,t,!0,s)))return}else s[t][dd(r)]=!0;const d=r.parity,h=ht(r[2],r[1],r.parity);f.push(ht(r[1],r[0],r.parity),ht(r[0],r[2],r.parity)),l.push([ht(r[4],r[3],r.parity),ht(r[1],r[4],r.parity),ht(r[2],r[5],r.parity),ht(r[0],r[3],r.parity)]);const g=[...r];g.parity=r.parity,i[t].push(g);for(let v=0;v<e*2-1&&(r=Sf(r,1+(v+1)%2,t,!0,s),!!r);v++){f.push(v%2?ht(r[0],r[2],r.parity):ht(r[1],r[0],r.parity)),l.push([ht(r[4],r[3],r.parity),ht(r[1],r[4],r.parity),ht(r[2],r[5],r.parity),ht(r[0],r[3],r.parity)]);const S=[...r];S.parity=r.parity,i[t].push(S)}const m={vertices:f,center:h,wythoffs:l,order:t,parity:d};return n[t].push(m),m},hd=(r,e)=>{const[t,n,i]=r,[s,f]=e,l=Math.sqrt(1+s*s),d=Math.sqrt(1+f*f),h=t,g=n*f+i*d;r[0]=h*l-g*s,r[1]=n*d+i*f,r[2]=-h*s+g*l},pd=(r,e)=>{const[t,n,i]=r,[s,f]=e,l=Math.sqrt(1-s*s),d=Math.sqrt(1-f*f),h=t,g=n*f+i*d;r[0]=h*l+g*s,r[1]=n*d-i*f,r[2]=-h*s+g*l},zy=(r,e)=>{let[t,n]=r;const[i,s]=e;r[0]=t-i,r[1]=n+s},Ny=(r,e)=>{const[t,n]=r,i=Math.cos(e),s=Math.sin(e);r[0]=t*i-n*s,r[1]=t*s+n*i},Uy=(r,e)=>{const[t,n,i]=r,s=e/Math.sqrt(t*t+n*n+i*i),f=[r[0]*s,-r[1]*s,r[2]*s];hd(r,f)},By=(r,e)=>{const[t,n,i]=r,s=e/Math.sqrt(t*t+n*n+i*i),f=[r[0]*s,-r[1]*s,r[2]*s];pd(r,f)},Gy=(r,e)=>{let[t,n,i]=r;r[0]=t*(1-e),r[1]=n*(1-e),r[2]=i*(1-e)},Wy=[hd,zy,pd],Ks=(r,e)=>Wy[Bt+1](r,e),Vy=[Uy,Gy,By],Js=(r,e)=>Vy[Bt+1](r,e),Qs=Ny,Hy={translate:Ks,scale:Js,rotater:Qs},xl=(r,e,t)=>Hy[r](e,t),jy=(r,e,t)=>{const n=Math.acos(Ln(r,e)),i=Math.sin(n);if(i===0)return[r,e];const s=[r];for(let f=t;f<1;f+=t){const l=Math.sin((1-f)*n)/i,d=Math.sin(f*n)/i;s.push([r[0]*l+e[0]*d,r[1]*l+e[1]*d,r[2]*l+e[2]*d])}return s.push(e),s},qy=(r,e,t)=>{const n=Math.acosh(-Ln(r,e)),i=Math.sinh(n);if(i===0)return[r,e];const s=[r];for(let f=t;f<1;f+=t){const l=Math.sinh((1-f)*n)/i,d=Math.sinh(f*n)/i;s.push([r[0]*l+e[0]*d,r[1]*l+e[1]*d,r[2]*l+e[2]*d])}return s.push(e),s},Zl=(r,e,t,n=Bt)=>n>0?jy(r,e,t):n<0?qy(r,e,t):[r,e],Xy=(r,e)=>{let t=[];for(let n=0;n<3;n++){let i=e[n];Bt||(i=[i[0],i[1],0]),t.push(so(la(i,r),1))}return t};let Kr=[],Li=[],Ri=[],zt=0,bn=0,Sn=0,jo,di,$n,er,tr,Di,Oe=[],Ii=[],hr=[],ea=!1,Jr=[],wf,zi,nn,pr=!1,Qn,sn,St,wt,mn,Ct,Pn,Kn,Ot,Mt,Et,Qr=200,zo,Yr=10,Go=[],Vt=[];const Nl=()=>decodeURIComponent(location.hash.replace(/^#/,""))||No.preset,md=Nl(),W={...(No.remembered[md]||No.remembered[No.preset])[0]};ud(W.tokenPrecision);cd(W);const Yy=["plain","odd","colored"],gd=["plain","colored"],$y=()=>{Qn=document.createElement("canvas"),wt=Qn.getContext("2d"),sn=document.createElement("canvas"),St=sn.getContext("2d")},Zy=()=>{mn=new sd({antialias:!0}),mn.setPixelRatio(window.devicePixelRatio),mn.setSize(window.innerWidth,window.innerHeight),Kn=new gy,Ct=new An(90,window.innerWidth/window.innerHeight,.01,1e3),Ct.position.set(0,0,-1),Ct.up.set(0,1,0),Ct.lookAt(0,0,10),Ct.zoom=Math.min(1,window.innerWidth/window.innerHeight),Ct.updateProjectionMatrix(),Kn.add(Ct),Pn=new _y(Ct,mn.domElement),Pn.minDistance=0,Pn.maxDistance=100;const r=1e6,e=new Float32Array(3*r),t=new Float32Array(3*r),n=new Wn;n.setAttribute("position",new tn(e,3).setUsage(Ar)),n.setAttribute("color",new tn(t,3).setUsage(Ar));const i=new Wn,s=new Float32Array(3*r);i.setAttribute("position",new tn(s,3).setUsage(Ar));const f=new Float32Array(3*r);i.setAttribute("color",new tn(f,3).setUsage(Ar));const l=new Wn,d=new Float32Array(3*r);l.setAttribute("position",new tn(d,3).setUsage(Ar));const h=new Float32Array(3*r);l.setAttribute("color",new tn(h,3).setUsage(Ar));const g=new Xl({vertexColors:!0,side:ar});Ot=new pi(n,g);const m=new zl({vertexColors:!0});Mt=new vf(i,m),Mt.scale.setScalar(.999);const v=new zl({vertexColors:!0});Et=new vf(l,v),Et.scale.setScalar(.999),Kn.add(Et),Kn.add(Mt),Kn.add(Ot)},vd=()=>{er=di/2,tr=$n/2,Di=Math.min(er,tr),jo={poincare:.9*Di,klein:.9*Di,inverted:.4*Di,lambert:.5*Di,spiral:.9*Di,latlng:.4*er,mercator:.4*er,band:.102*tr,half:.102*tr,orthographic:.5*Di,joukowsky:.8*er}[W.projection]||.5*Di,W.projection==="half"&&(tr=$n)},Kl=()=>{di=window.innerWidth*W.subsampling,$n=window.innerHeight*W.subsampling;const r=nn==="3d"?mn.domElement:Qn;(r.width!==di||r.height!==$n)&&(nn==="3d"?(Ct.aspect=di/$n,Ct.zoom=Math.min(1,di/$n),Ct.updateProjectionMatrix(),mn.setSize(di,$n)):(Qn.width=di,Qn.height=$n),W.subsampling!==1?(r.style.width=null,r.style.height=null):nn!=="3d"&&(r.style.width=di+"px",r.style.height=$n+"px")),vd(),vi()},qo=new Zh,Ul={showStats:!1},Ky=([r,e])=>[er+r*jo,tr-e*jo],Bl=["3d poincare","3d klein","3d inverted"],bl=(r,e)=>{const t=ld[W.projection](r,e);if(t)return Ky(t)},Sl=new Ze("black"),Gl=({vertices:r,center:e,wythoffs:t,order:n,parity:i})=>{if(r.length<2)return;let s=null,f=null,l=null,d=null;if(W.fillAlpha&&(s=[new Ze(W.fillColorP),new Ze(W.fillColorQ),new Ze(W.fillColorR)],W.fill==="colored"?(s[0].offsetHSL(n*W.fillColorShift/360,0,0),s[1].offsetHSL(n*W.fillColorShift/360,0,0),s[2].offsetHSL(n*W.fillColorShift/360,0,0)):W.fill==="odd"&&n%2&&(s[0].offsetHSL(1/2,0,0),s[1].offsetHSL(1/2,0,0),s[2].offsetHSL(1/2,0,0)),W.wedgeShade?f=[new Ze().lerpColors(s[0],Sl,W.wedgeShade/100),new Ze().lerpColors(s[1],Sl,W.wedgeShade/100),new Ze().lerpColors(s[2],Sl,W.wedgeShade/100)]:f=s),W.strokeAlpha&&(l=new Ze(W.strokeColor),W.stroke==="colored"&&l.offsetHSL(n*W.strokeColorShift/360,0,0)),W.strokeWythoffAlpha&&(d=new Ze(W.strokeWythoffColor),W.strokeWythoff==="colored"&&d.offsetHSL(n*W.strokeWythoffColorShift/360,0,0)),nn==="3d"){for(let h=0;h<r.length-1;h++){const g=t[h];for(let m=0;m<3;m++){const v=h%2?[e,r[h],r[1+h]]:[e,r[h+1],r[h]],S=1+m,C=1+(m+1)%3,y=[g[0]];Vt[m][0]&&y.push(g[S]),Vt[m][1]&&y.push(v[m]),Vt[m][2]&&y.push(g[C]),Vt[m][3]&&y.push(g[0]),Jy(y,m,s&&(i===h%2?f:s)[m],l,d,Vt[m])}}return}if(!W.wedgeShade&&Vt.fills===1&&W.r===2){let h=[];for(let m=0;m<~~(r.length/2);m++)h.push(r[1+m*2%r.length]);const g=Vt.findIndex(m=>m.fillValid);qs(h,s&&s[g].getStyle(),l&&l.getStyle(),W.strokeAlpha,W.strokeWidth);return}for(let h=0;h<r.length-1;h++){const g=t[h],m=h%2?[e,r[h],r[1+h]]:[e,r[1+h],r[h]];if(s)for(let v=0;v<3;v++){if(!Vt[v].fillValid)continue;const S=1+v,C=1+(v+1)%3,y=[g[0]];Vt[v][0]&&y.push(g[S]),Vt[v][1]&&y.push(m[v]),Vt[v][2]&&y.push(g[C]),Vt[v][3]&&y.push(g[0]),qs(y,s&&(i===h%2?f:s)[v].getStyle())}if(d)for(let v=0;v<3;v++)!Vt[v][0]||qs([g[0],g[1+v]],null,d&&d.getStyle(),W.strokeWythoffAlpha,W.strokeWythoffWidth);l&&qs(m.slice(1,3),null,l&&l.getStyle(),W.strokeAlpha,W.strokeWidth)}},qs=(r,e,t,n,i)=>{const s=[],f=Bi(),l=W.straight;for(let d=0,h=r.length;d<h;d++){const g=r[d],m=bl(g,f),v=r[(d+1)%h];m&&s.push([m[0],m[1],g]);const S=bl(v,f);if(!l){const C=m&&S?Math.sqrt((m[0]-S[0])**2+(m[1]-S[1])**2):1e3,y=Zl(g,v,Math.max(.01,(20-W.curvePrecision)/C));for(let _=1,E=y.length;_<E;_++){const A=y[_],L=bl(A,f);L&&s.push([L[0],L[1],A])}}S&&s.push([S[0],S[1],v])}if(e){wt.beginPath(),wt.globalAlpha=W.fillAlpha/100,wt.fillStyle=e;for(let d=0,h=s.length;d<h;d++)wt.lineTo(s[d][0],s[d][1]);wt.fill()}if(t)if(wt.globalAlpha=n/100,wt.strokeStyle=t,f<0&&W.strokeScaled)for(let d=1,h=s.length;d<h&&(wt.lineWidth=2*i/(bf(s[d-1][2])+bf(s[d][2])),!(wt.lineWidth<.01/W.subsampling));d++)wt.beginPath(),wt.moveTo(s[d-1][0],s[d-1][1]),wt.lineTo(s[d][0],s[d][1]),wt.stroke();else{wt.beginPath(),wt.lineWidth=i;for(let d=0,h=s.length;d<h;d++)wt.lineTo(s[d][0],s[d][1]);wt.stroke()}},Jy=(r,e,t,n,i,s)=>{const f=Ot.geometry.attributes.position.array,l=Ot.geometry.attributes.color.array,d=Mt.geometry.attributes.position.array,h=Mt.geometry.attributes.color.array,g=Et.geometry.attributes.position.array,m=Et.geometry.attributes.color.array,v=W.projection!=="klein"&&!W.straight,S=Math.max(.01,(20-W.curvePrecision)/50),C=[];for(let L=1,k=r.length;L<k;L++)C.push(v?Zl(r[L-1],r[L],S):[r[L-1],r[L]]);const y=zt;if(Ot.visible&&s.fillValid){let L=[0,0,0];for(let k=0,D=r.length;k<D;k++)L[0]+=r[k][0],L[1]+=r[k][1],L[2]+=r[k][2];L[0]/=r.length,L[1]/=r.length,L[2]/=r.length,L=so(L),f[zt*3]=L[0],f[zt*3+1]=L[1],f[zt*3+2]=L[2],l[zt*3]=t.r,l[zt*3+1]=t.g,l[zt*3+2]=t.b,zt++}const _=zt,E=bn,A=Sn;for(let L=0,k=C.length;L<k;L++){const D=C[L];for(let N=0,$=D.length;N<$;N++){const T=D[N];Ot.visible&&s.fillValid&&(zt>_&&Kr.push(y,zt-1,zt),f[zt*3]=T[0],f[zt*3+1]=T[1],f[zt*3+2]=T[2],l[zt*3]=t.r,l[zt*3+1]=t.g,l[zt*3+2]=t.b,zt++),Mt.visible&&(e===1&&s[2]&&L===2-!s[0]-!s[1]||e===2&&s[1]&&L===1-!s[0])&&(d[bn*3]=T[0],d[bn*3+1]=T[1],d[bn*3+2]=T[2],h[bn*3]=n.r,h[bn*3+1]=n.g,h[bn*3+2]=n.b,bn>E&&Li.push(bn-1,bn),bn++),Et.visible&&s[0]&&L===0&&(g[Sn*3]=T[0],g[Sn*3+1]=T[1],g[Sn*3+2]=T[2],m[Sn*3]=i.r,m[Sn*3+1]=i.g,m[Sn*3+2]=i.b,Sn>A&&Ri.push(Sn-1,Sn),Sn++)}}},_d=(r,e)=>{if(pr||Oe.reduce((n,i)=>n+i.length,0)>=W.limit)return;const t=Fy(r,W.p,e,Oe,Ii,Jr);if(!!t){for(let n=0;n<hr.length;n++){const{type:i,parameter:s}=hr[n];xl(i,t.center,s);for(let f=0;f<t.vertices.length;f++)xl(i,t.vertices[f],s);for(let f=0;f<t.wythoffs.length;f++)for(let l=0;l<t.wythoffs[f].length;l++)xl(i,t.wythoffs[f][l],s)}Gl(t)}},yd=(r,e=1)=>new Promise(t=>setTimeout(()=>{t(r())},e)),Qy=()=>{const r=Oe.length,e=Ii[r-1];return Promise.all(e.map(t=>yd(()=>_d(t,r))))},Jl=({p:r,q:e,r:t,wp:n,wq:i,wr:s})=>{const f=Bi(),l=ky({p:r,q:e,r:t});return l.parity=1,f&&(n*=-1,i*=-1,f>0&&(s*=-1)),l.push(...Xy([n,i,s],l)),l},Mf=r=>{const e=" || ";document.title=document.title.split(e,1).slice(-1)+(r?e+r:"")},xd=async r=>{if(ea)return;if(ea=!0,!r)Kr=[],Li=[],Ri=[],zt=0,bn=0,Sn=0,Oe.p=W.p,Oe.q=W.q,Oe.r=W.r,Oe.wp=W.wp,Oe.wq=W.wq,Oe.wr=W.wr,nn==="3d"&&(Ot.geometry.setDrawRange(0,0),Mt.geometry.setDrawRange(0,0),Et.geometry.setDrawRange(0,0)),bd();else if(Oe.length>W.layers)for(Oe.splice(W.layers);Oe.reduce((t,n)=>t+n.length,0)>W.limit;)Oe.splice(W.layers);let e;for(;Oe.length<W.layers&&(e=Oe.reduce((t,n)=>t+n.length,0))<W.limit&&(Oe.length===0||Oe[Oe.length-1].length)&&!pr;){if(Mf(`${Oe.length}/${W.layers} - ${e}/${W.limit}`),Oe.length===0){const t=Jl(W);_d(t,0)}else await yd(()=>Qy());nn==="3d"&&(Ot.visible&&(Ot.geometry.setIndex(Kr),Ot.geometry.setDrawRange(0,Kr.length),Ot.geometry.attributes.position.needsUpdate=!0,Ot.geometry.attributes.color.needsUpdate=!0,Ot.geometry.computeBoundingSphere()),Mt.visible&&(Mt.geometry.setIndex(Li),Mt.geometry.setDrawRange(0,Li.length),Mt.geometry.attributes.position.needsUpdate=!0,Mt.geometry.attributes.color.needsUpdate=!0,Mt.geometry.computeBoundingSphere()),Et.visible&&(Et.geometry.setIndex(Ri),Et.geometry.setDrawRange(0,Ri.length),Et.geometry.attributes.position.needsUpdate=!0,Et.geometry.attributes.color.needsUpdate=!0,Et.geometry.computeBoundingSphere()),mn.render(Kn,Ct))}Mf(),Oe.reduce((t,n)=>t+n.length,0)===W.limit&&(Ii.pop(),Jr.pop()),vi(),ea=!1,pr=!1},gn=r=>{if(clearTimeout(wf),!zi)if(Ql(),ea)pr=!0,wf=setTimeout(()=>gn(r),10);else{if(!r)pr=!1,Oe.length=0,Ii.length=0,Jr.length=0;else{if(Ii.length<Oe.length&&Oe.pop(),Oe.length>W.layers){Oe.splice(W.layers),Ii.splice(W.layers),Jr.splice(W.layers),vi();return}if(Oe.reduce((e,t)=>e+t.length,0)>W.limit)for(;Oe.length&&Oe.reduce((e,t)=>e+t.length,0)>W.limit;)Oe.pop(),Ii.pop(),Jr.pop(),vi()}xd(r)}},bd=()=>{nn==="2d"&&(wt.globalAlpha=1,wt.fillStyle=W.backgroundColor,wt.fillRect(0,0,di,$n),W.fill!=="colored"&&(wt.fillStyle=W.fillColor),W.stroke!=="colored"&&(wt.strokeStyle=W.strokeColor),wt.lineWidth=W.strokeWidth),nn==="3d"&&(Kn.background=new Ze(W.backgroundColor),Ot.material.transparent=W.fillAlpha!==100,Ot.material.opacity=W.fillAlpha/100,Ot.visible=!!W.fillAlpha,Mt.material.transparent=W.strokeAlpha!==100,Mt.material.opacity=W.strokeAlpha/100,Mt.material.linewidth=W.strokeWidth,Mt.visible=!!W.strokeAlpha,Et.material.transparent=W.strokeWythoffAlpha!==100,Et.material.opacity=W.strokeWythoffAlpha/100,Et.material.linewidth=W.strokeWythoffWidth,Et.visible=!!W.strokeWythoffAlpha,Ot.geometry.setDrawRange(0,0),Mt.geometry.setDrawRange(0,0),Et.geometry.setDrawRange(0,0))},Ql=()=>{let r=null,e=null,t=null;W.fillAlpha&&(r=[new Ze(W.fillColorP),new Ze(W.fillColorQ),new Ze(W.fillColorR)]),W.strokeAlpha&&(e=new Ze(W.strokeColor)),W.strokeWythoffAlpha&&(t=new Ze(W.strokeWythoffColor));const n=.01,i=Bi(),s=E=>(oo(E,i)||[]).map(A=>i!==0?-A:A),f=Jl(W),l=[ht(f[1],f[2]),ht(f[2],f[0]),ht(f[0],f[1]),ht(f[4],f[1]),ht(f[5],f[2]),ht(f[3],f[0])],d=ht(f[4],f[5]);Go=[fd(...f),...l.slice(0,3),...Iy(...f)];const h=l.map(s),g=Math.max(...h.map(E=>E[0])),m=Math.max(...h.map(E=>E[1])),v=Math.max(g,m);zo=Qr/v;const S=([E,A])=>[Yr+E*zo,Yr+Qr-A*zo];sn.width=g*zo+Yr*2,sn.height=Qr+Yr*2;const C=E=>{for(let A=0;A<E.length;A++)St.lineTo(...S(s(E[A])))},y=(...E)=>{for(let A=0;A<E.length-1;A++)C(Zl(E[A],E[A+1],n))};for(let E=0;E<3;E++){const A=3+E,L=3+(E+1)%3;Vt[E]=[!js(d,l[A]),!js(l[E],l[A]),!js(l[E],l[L]),!js(d,l[L])],Vt[E].fillValid=Vt[E].filter(k=>k).length>=3}Vt.fills=Vt.filter(E=>E.fillValid).length,St.strokeStyle=W.strokeColor;for(let E=0;E<3;E++)St.fillStyle=r&&r[E].getStyle(),St.beginPath(),r&&(y(d,l[3+E],l[E],l[3+(E+1)%3],d),St.globalAlpha=W.fillAlpha/100,St.fill());for(let E=0;E<3;E++)t&&(St.beginPath(),y(d,l[3+E]),St.lineWidth=Math.min(5,W.strokeWythoffWidth),St.globalAlpha=W.strokeWythoffAlpha/100,St.strokeStyle=t.getStyle(),St.stroke()),e&&(St.beginPath(),y(l[3+E],l[E],l[3+(E+1)%3]),St.lineWidth=Math.min(5,W.strokeWidth),St.globalAlpha=W.strokeAlpha/100,St.strokeStyle=e.getStyle(),St.stroke());const _=3;St.lineWidth=0;for(let E=0;E<Go.length;E++){const A=S(s(Go[E]));St.beginPath(),St.moveTo(A[0]-_,A[1]),St.lineTo(A[0]+_,A[1]),St.moveTo(A[0],A[1]-_),St.lineTo(A[0],A[1]+_),St.stroke()}},vi=()=>{if(!zi&&!(W.wp!==Oe.wp||W.wq!==Oe.wq||W.wr!==Oe.wr||W.p!==Oe.p||W.q!==Oe.q||W.r!==Oe.r)){if(Ul.showStats&&qo.begin(),bd(),zt=0,bn=0,Sn=0,Kr=[],Li=[],Ri=[],Bi()>0){const r=[];for(let e=0;e<Oe.length;e++)for(let t=0,n=Oe[e].length;t<n;t++)r.push(Oe[e][t]);r.sort(["joukowsky","inverted"].includes(W.projection)?(e,t)=>e.center[2]-t.center[2]:(e,t)=>t.center[2]-e.center[2]);for(let e=0,t=r.length;e<t;e++)Gl(r[e])}else for(let r=0;r<Oe.length;r++)for(let e=0,t=Oe[r].length;e<t;e++)Gl(Oe[r][e]);nn==="3d"&&(Li.length!==Mt.geometry.drawRange.count&&Mt.geometry.setIndex(Li),Ri.length!==Et.geometry.drawRange.count&&Et.geometry.setIndex(Ri),Ot.visible&&(Ot.geometry.setDrawRange(0,Kr.length),Ot.geometry.attributes.position.needsUpdate=!0,Ot.geometry.attributes.color.needsUpdate=!0),Mt.visible&&(Mt.geometry.setDrawRange(0,Li.length),Mt.geometry.attributes.position.needsUpdate=!0,Mt.geometry.attributes.color.needsUpdate=!0),Et.visible&&(Et.geometry.setDrawRange(0,Ri.length),Et.geometry.attributes.position.needsUpdate=!0,Et.geometry.attributes.color.needsUpdate=!0),mn.render(Kn,Ct)),Ul.showStats&&qo.end()}},Sd=r=>{hr.push({type:"translate",parameter:r});for(let e=0;e<Oe.length;e++){const t=Oe[e];for(let n=0;n<t.length;n++){const{vertices:i,center:s,wythoffs:f}=t[n];Ks(s,r);for(let l=0;l<i.length;l++)Ks(i[l],r);for(let l=0;l<f.length;l++)for(let d=0;d<f[l].length;d++)Ks(f[l][d],r)}}},Ef=r=>{for(let e=0;e<Oe.length;e++){const t=Oe[e];for(let n=0;n<t.length;n++){const{vertices:i,center:s,wythoffs:f}=t[n];Qs(s,r);for(let l=0;l<i.length;l++)Qs(i[l],r);for(let l=0;l<f.length;l++)for(let d=0;d<f[l].length;d++)Qs(f[l][d],r)}}},Tf=r=>{hr.push({type:"scale",parameter:r});for(let e=0;e<Oe.length;e++){const t=Oe[e];for(let n=0;n<t.length;n++){const{vertices:i,center:s,wythoffs:f}=t[n];Js(s,r);for(let l=0;l<i.length;l++)Js(i[l],r);for(let l=0;l<f.length;l++)for(let d=0;d<f[l].length;d++)Js(f[l][d],r)}}},gt=new yp({load:No,preset:md});gt.remember(W);const ao=()=>{cd(W),!zi&&(W.wp!==Oe.wp||W.wq!==Oe.wq||W.wr!==Oe.wr||W.p!==Oe.p||W.q!==Oe.q||W.r!==Oe.r)&&(Ql(),Td([W.wp,W.wq,W.wr],!0),gn())},wd=(r,e,t)=>{let n;return function(...i){if(zi)return;let s=()=>{n=null,t||r.apply(this,i)},f=t&&!n;clearTimeout(n),n=setTimeout(s,e),f&&r.apply(this,i)}},Md=()=>gn(!0),rn=()=>{zi||(Ql(),vi())},Ed=()=>{let r=!1;const e=Bi();nn!=="3d"&&Bl.includes(W.projection)?(nn="3d",Qn.style.display="none",mn.domElement.style.display="block",r=!0):nn!=="2d"&&!Bl.includes(W.projection)&&(nn="2d",Qn.style.display="block",mn.domElement.style.display="none"),W.projection==="3d poincare"?(Ct.fov=90,Ct.position.set(0,0,(e||-1)*.99),Pn.target.set(0,0,0),Ct.updateProjectionMatrix(),Pn.update()):W.projection==="3d klein"?(Ct.fov=90,Ct.position.set(0,0,0),Pn.target.set(0,0,(-e||1)*.99),Ct.updateProjectionMatrix(),Pn.update()):W.projection==="3d inverted"&&(Ct.fov=130,Ct.position.set(0,0,2),Pn.target.set(0,0,4),Ct.updateProjectionMatrix(),Pn.update()),vd(),zi||r&&gn(),Kl()};gt.add(W,"projection",Object.keys(ld).concat(Bl)).onChange(Ed);gt.add(W,"p",2,20,1).onChange(ao);gt.add(W,"q",2,20,1).onChange(ao);gt.add(W,"r",2,20,1).onChange(ao);gt.add(W,"wp",-2,2,.001).listen().onChange(ao);gt.add(W,"wq",-2,2,.001).listen().onChange(ao);gt.add(W,"wr",-2,2,.001).listen().onChange(ao);gt.add(W,"layers",1,100,1).onChange(wd(Md,150));gt.add(W,"limit",1).onChange(wd(Md,150));const vr=gt.addFolder("Fill Style");vr.add(W,"fill",Yy).onChange(rn);vr.addColor(W,"fillColorP").onChange(rn);vr.addColor(W,"fillColorQ").onChange(rn);vr.addColor(W,"fillColorR").onChange(rn);vr.add(W,"fillColorShift",-359,359,1).onChange(()=>gn());vr.add(W,"fillAlpha",0,100,1).onChange(rn);vr.add(W,"wedgeShade",0,100,1).onChange(rn);const In=gt.addFolder("Stroke Style");In.add(W,"stroke",gd).onChange(rn);In.addColor(W,"strokeColor").onChange(rn);In.add(W,"strokeColorShift",-359,359,1).onChange(()=>gn());In.add(W,"strokeAlpha",0,100,1).onChange(rn);In.add(W,"strokeWidth",.1,250,.1).onChange(rn);In.add(W,"strokeScaled").onChange(rn);In.addColor(W,"backgroundColor").onChange(rn);In.add(W,"strokeWythoff",gd).onChange(rn);In.addColor(W,"strokeWythoffColor").onChange(rn);In.add(W,"strokeWythoffColorShift",-359,359,1).onChange(()=>gn());In.add(W,"strokeWythoffAlpha",0,100,1).onChange(rn);In.add(W,"strokeWythoffWidth",.1,250,.1).onChange(rn);gt.addColor(W,"backgroundColor").onChange(vi);gt.add(W,"straight").onChange(()=>gn());gt.add(W,"tokenPrecision",0,16,1).onChange(r=>{ud(r),gn()});gt.add(W,"curvePrecision",0,20,1).onChange(()=>gn());gt.add({recenter:()=>{pr=!0,hr.length=0,Ed(),gn()}},"recenter");gt.add(W,"subsampling",.01,10,.01).onChange(()=>Kl());gt.add(Ul,"showStats").onChange(r=>qo.showPanel(r?0:null));window.innerWidth<600&&gt.close();gt.__preset_select.addEventListener("change",({target:{value:r}})=>{location.hash=`#${encodeURIComponent(r)}`});window.addEventListener("hashchange",()=>{gt.preset!==Nl()&&(gt.preset=Nl())});const ex=gt.revert.bind(gt);gt.revert=()=>{pr=!0,hr.length=0,zi=!0,ex(),zi=!1,gn()};Kh("#c2d,#c3d").draggable({listeners:{move:r=>{const e=nn!=="3d"||r.altKey;if((r.ctrlKey||r.shiftKey)&&e)Ef(-r.dx/(2*jo)),Tf(-r.dy/(2*jo));else if(e)Sd([-r.dx/er,-r.dy/tr]);else return;Pn.enabled=!1,vi()},end:()=>{Pn.enabled=!0}}}).gesturable({onmove:r=>{nn!=="3d"&&(Ef(-(Math.PI*r.da)/180),Tf(-r.ds),vi())}});$y();Zy();window.ondeviceorientation=window.onresize=Kl;window.hyperball={polygons:Oe,triangles:Ii,tokens:Jr,translate:Sd,transformations:hr,generate:xd,regenerate:gn,settings:W,render:vi,faces:Ot,wireframe:Mt,wythoffframe:Et,scene:Kn,camera:Ct,controls:Pn,canvas:Qn,ctx:wt,rootCanvas:sn,rootCtx:St};mn.domElement.id="c3d";Qn.id="c2d";sn.id="rc2d";sn.width=Qr;sn.height=Qr;document.body.appendChild(mn.domElement);document.body.appendChild(Qn);document.body.appendChild(sn);document.body.appendChild(qo.dom);const tx=([r,e])=>{const t=Bi();if(!t)return[r,e,1];const n=-t*Math.min(.999,r*r+e*e),i=1/(1-n);return[2*r*i,2*e*i,(1+n)*i]},Td=(r,e)=>{const t=Bi();r=so(r);const n=Jl(W);Ry(r,...n)||(r=Oy(r,...n));let i,s=1/0;for(let l=0;l<Go.length;l++){const d=Go[l].map(m=>t>0?-m:m),h=Ly(r,d),g=Ln(h,h,1);g<s&&(s=g,i=d)}!e&&s<.005?(W.wp=i[0],W.wq=i[1],W.wr=i[2]):(W.wp=r[0],W.wq=r[1],W.wr=r[2]),t<0&&(W.wp*=-1,W.wq*=-1)},Wl=r=>{const e=Bi(),{left:t,top:n}=r.target.getBoundingClientRect(),i=r.clientX-t-Yr,s=r.clientY-n-Yr,f=1/zo;let l=[i*f,(Qr-s)*f];e<0&&(l=l.map(d=>-d)),Td(tx(l),r.shiftKey),gn(),r.stopPropagation()};sn.addEventListener("pointerdown",r=>{Wl(r),sn.addEventListener("pointermove",Wl,!0),sn.setPointerCapture(r.pointerId)},!0);sn.addEventListener("pointerup",r=>{sn.removeEventListener("pointermove",Wl,!0),sn.releasePointerCapture(r.pointerId)},!0);gt.revert();qo.showPanel(null);mn.setAnimationLoop(()=>{nn==="3d"&&mn.render(Kn,Ct)});
