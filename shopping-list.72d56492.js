!function(){function t(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},r=n.parcelRequire8016;null==r&&((r=function(t){if(t in i)return i[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){o[t]=e},n.parcelRequire8016=r),r.register("iE7OH",(function(e,n){var i,o;t(e.exports,"register",(function(){return i}),(function(t){return i=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var r={};i=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)r[e[n]]=t[e[n]]},o=function(t){var e=r[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),r.register("aNJCr",(function(e,n){var i;t(e.exports,"getBundleURL",(function(){return i}),(function(t){return i=t}));var o={};function r(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return r(t[2])}return"/"}(),o[t]=e),e}})),r("iE7OH").register(JSON.parse('{"jSFKT":"shopping-list.72d56492.js","kxKJ3":"symbol-defs.9da17eb4.svg","7i35a":"empty-desktop-tablet@1x.017eaa98.png","hJCae":"empty-desktop-tablet@2x.55899084.png","lDRN9":"empty-mobile@1x.0a4ea4b8.png","2sEqO":"empty-mobile@2x.d86ac43c.png","2Jedz":"amazon-icon1x.a7ec3af8.png","ehEdb":"amazon-icon2x.20dbc182.png","1zLvb":"applebook-icon1x.a9f158e0.png","bk9Lk":"applebook-icon2x.cdd3fb2c.png","kMOzt":"bookshop-icon1x.eb5fbc1e.png","ku5Dq":"bookshop-icon2x.7a15867f.png","5UbS1":"index.12f810a8.css","cfiU8":"index.d4c3aaef.js"}')),r("xpKCW");var s={};s=r("aNJCr").getBundleURL("jSFKT")+r("iE7OH").resolve("kxKJ3");var a={};a=r("aNJCr").getBundleURL("jSFKT")+r("iE7OH").resolve("7i35a");var c={};c=r("aNJCr").getBundleURL("jSFKT")+r("iE7OH").resolve("hJCae");var u={};u=r("aNJCr").getBundleURL("jSFKT")+r("iE7OH").resolve("lDRN9");var l={};l=r("aNJCr").getBundleURL("jSFKT")+r("iE7OH").resolve("2sEqO");var p={};p=r("aNJCr").getBundleURL("jSFKT")+r("iE7OH").resolve("2Jedz");var f={};f=r("aNJCr").getBundleURL("jSFKT")+r("iE7OH").resolve("ehEdb");var d={};d=r("aNJCr").getBundleURL("jSFKT")+r("iE7OH").resolve("1zLvb");var h={};h=r("aNJCr").getBundleURL("jSFKT")+r("iE7OH").resolve("bk9Lk");var m={};m=r("aNJCr").getBundleURL("jSFKT")+r("iE7OH").resolve("kMOzt");var g={};g=r("aNJCr").getBundleURL("jSFKT")+r("iE7OH").resolve("ku5Dq");var _;
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,_=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,i,o,r,s=Object.prototype.hasOwnProperty;for(o=1,r=arguments.length;o<r;o+=1)for(i in n=arguments[o])s.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var i=n(2),o=n(17),r=n(6);t.exports=function(t,e,n){i(t)?o(t,e,n):r(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){"use strict";var i=n(18),o=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(o(n,e.static),delete e.static),o(n.prototype,e),n}},function(t,e,n){"use strict";var i=n(2);t.exports=function(t,e,n){var o,r;if(n=n||0,!i(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(r=e.length,o=n;n>=0&&o<r;o+=1)if(e[o]===t)return o;return-1}},function(t,e,n){"use strict";var i=n(29),o=n(30),r=n(5),s={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),o=r(t)?t(e):i(t,e);return n.innerHTML=o,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){o("pagination","UA-129987462-1")}};t.exports=s},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var i=n(13),o=n(7),r=n(0),s=n(1),a=n(20),c=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=o({init:function(t,e){this._options=r({},u,e),this._currentPage=0,this._view=new a(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),o=this._getPageIndex(n),r=this._getEdge(t);return e.leftPageNumber=r.left,e.rightPageNumber=r.right,e.prevMore=i>1,e.nextMore=i<o,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i,o=this._getLastPage(),r=this._options.visiblePages,s=this._getPageIndex(t);return this._options.centerAlign?(i=Math.floor(r/2),(n=(e=Math.max(t-i,1))+r-1)>o&&(e=Math.max(o-r+1,1),n=o)):(e=(s-1)*r+1,n=s*r,n=Math.min(n,o)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){s(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(l),t.exports=l},function(t,e,n){"use strict";var i=n(0),o=n(14),r=n(4),s=n(16),a=n(2),c=n(5),u=n(3),l=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){i(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},p.prototype._memorizeContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var i=this;r(t)?(t=t.split(l),u(t,(function(t){i._bindEvent(t,e,n)}))):s(t)&&(n=e,u(t,(function(t,e){i.on(e,t,n)})))},p.prototype.once=function(t,e,n){var i=this;if(s(t))return n=e,void u(t,(function(t,e){i.once(e,t,n)}));this.on(t,(function o(){e.apply(n,arguments),i.off(t,o,n)}),n)},p.prototype._spliceMatches=function(t,e){var n,i=0;if(a(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},p.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var o=t===i.handler,r=e===i.context,s=o&&r;return s&&n._forgetContext(i.context),s}},p.prototype._offByEventName=function(t,e){var n=this,i=c(e),o=n._matchHandler(e);t=t.split(l),u(t,(function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,o):(u(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);u(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},p.prototype._offByObject=function(t,e){var n,i=this;this._indexOfContext(t)<0?u(t,(function(t,e){i.off(e,t)})):r(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),u(this._safeEvent(),(function(t){i._spliceMatches(t,n)}))):(n=this._matchContext(t),u(this._safeEvent(),(function(t){i._spliceMatches(t,n)})))},p.prototype.off=function(t,e){r(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):s(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,i,o;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(o=e[i]).handler.apply(o.context,n))return!1;i+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){"use strict";var i=n(1),o=n(15);t.exports=function(t){return!i(t)&&!o(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i=0,o=t.length;for(n=n||null;i<o&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){"use strict";var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var i=n(3),o=n(7),r=n(21),s=n(22),a=n(24),c=n(25),u=n(0),l=n(4),p=n(28),f=n(9),d={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},h=["first","prev","next","last"],m=["prev","next"],g=o({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=u({},d,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(h,(function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){i(h,(function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){i(m,(function(t){var e=t+"More";this._buttons[e]=f.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,o=t.rightPageNumber;for(n=i;n<=o;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||c(e,this._firstItemClassName),n!==o||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();s(e,"click",(function(e){var n,i,o=r(e);a(e),(i=this._getButtonType(o))||(n=this._getPageNumber(o)),t(i,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return i(n,(function(n,i){return!f.isContained(t,n)||(e=i,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=g},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var i=n(4),o=n(3),r=n(23);function s(t,e,n,i){function s(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,s):"attachEvent"in t&&t.attachEvent("on"+e,s),function(t,e,n,i){var s=r(t,e),a=!1;o(s,(function(t){return t.handler!==n||(a=!0,!1)})),a||s.push({handler:n,wrappedHandler:i})}(t,e,n,s)}t.exports=function(t,e,n,r){i(e)?o(e.split(/\s+/g),(function(e){s(t,e,n,r)})):o(e,(function(e,i){s(t,i,e,n)}))}},function(t,e,n){"use strict";var i="_feEventKey";t.exports=function(t,e){var n,o=t[i];return o||(o=t[i]={}),(n=o[e])||(n=o[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){"use strict";var i=n(3),o=n(8),r=n(26),s=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),a=t.classList,c=[];a?i(n,(function(e){t.classList.add(e)})):((e=r(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,(function(t){o(t,c)<0&&c.push(t)})),s(t,c))}},function(t,e,n){"use strict";var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var i=n(2),o=n(1);t.exports=function(t,e){e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),o(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){"use strict";var i=n(8),o=n(3),r=n(2),s=n(4),a=n(0),c=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,d=/^["']\w+["']$/,h=/"|'/g,m=/^-?\d+\.?\d*$/,g=2,_={if:function(t,e,n){var i=function(t,e){var n=[t],i=[],r=0,s=0;return o(e,(function(t,o){0===t.indexOf("if")?r+=1:"/if"===t?r-=1:r||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(s,o)),s=o+1)})),i.push(e.slice(s)),{exps:n,sourcesInsideIf:i}}(t,e),r=!1,s="";return o(i.exps,(function(t,e){return(r=y(t,n))&&(s=E(i.sourcesInsideIf[e],n)),!r})),s},each:function(t,e,n){var i=y(t,n),s=r(i)?"@index":"@key",c={},u="";return o(i,(function(t,i){c[s]=i,c["@this"]=t,a(n,c),u+=E(e.slice(),n)})),u},with:function(t,e,n){var o=i("as",t),r=t[o+1],s=y(t.slice(0,o),n),c={};return c[r]=s,E(e,a(n,c))||""}},v=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,o=[],r=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,o.push(t.slice(r,i)),r=i+n[0].length,n=e.exec(t);return o.push(t.slice(r)),o};function x(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:d.test(t)?i=t.replace(h,""):u.test(t)?i=x((n=t.split(l))[0],e)[x(n[1],e)]:p.test(t)?i=x((n=t.split(f))[0],e)[n[1]]:m.test(t)&&(i=parseFloat(t)),i}function b(t,e,n){for(var i,o,r,a,c=_[t],u=1,l=0+g,p=e[l];u&&s(p);)0===p.indexOf(t)?u+=1:0===p.indexOf("/"+t)&&(u-=1,i=l),p=e[l+=g];if(u)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(o=0,r=i,(a=e.splice(o+1,r-o)).pop(),a),n),e}function y(t,e){var n=x(t[0],e);return n instanceof Function?function(t,e,n){var i=[];return o(e,(function(t){i.push(x(t,n))})),t.apply(null,i)}(n,t.slice(1),e):n}function E(t,e){for(var n,i,o,r=1,a=t[r];s(a);)i=(n=a.split(" "))[0],_[i]?(o=b(i,t.splice(r,t.length-r),e),t=t.concat(o)):t[r]=y(n,e),a=t[r+=g];return t.join("")}t.exports=function(t,e){return E(v(t,c),e)}},function(t,e,n){"use strict";var i=n(1),o=n(31),r=6048e5;t.exports=function(t,e){var n=location.hostname,s="TOAST UI "+t+" for "+n+": Statistics",a=window.localStorage.getItem(s);(i(window.tui)||!1!==window.tui.usageStatistics)&&(a&&!function(t){return(new Date).getTime()-t>r}(a)||(window.localStorage.setItem(s,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||o("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){"use strict";var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),o="";return i(e,(function(t,e){o+="&"+e+"="+t})),o=o.substring(1),n.src=t+"?"+o,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},_();var v=r("dNYR7"),x=r("jzQFI"),b=r("2NTPx"),y=r("kvC6y");const E=new(0,b.default),P=(document.querySelector(".js-card"),document.querySelector(".js-shopping-cart")),C=document.querySelector(".js-cart-list");document.getElementById("pagination"),(0,x.load)("UserData").userID;function L(){const t=`\n    <div class="cart-empty">\n      <p class="cart-empty__text">\n        This page is empty, add some books and proceed to order.\n      </p>\n      <picture>\n        <source\n          srcset="\n            ${e(a)} 1x,\n            ${e(c)} 2x\n          "\n          media="(min-width: 768px)"\n        />\n        <img\n          srcset="\n            ${e(u)} 1x,\n            ${e(l)} 2x\n            "\n          src="${e(u)}"\n          alt="Empty cart"\n          loading="lazy"\n          class="cart-empty__img"\n        />\n      </picture>\n    </div>`;P.innerHTML=t}function k(t){return t.map((t=>(0,v.getBook)(t).then((({_id:t,book_image:n,title:i,author:o,marketAmazon:r,marketAppleBooks:a,marketBookshop:c,list_name:u})=>`\n      <li class="cart__item card js-card" data-id="${t}">\n        <picture>\n          <img\n            loading="lazy"\n            src="${n||"./images/placeholders/very-small-placeholder.png"}"\n            alt="${i}"\n            class="card__img"\n            width="110"\n            height="142"\n          />\n        </picture>\n        <div class="card__content">\n          <h3 class="card__title">${i.trim()}</h3>\n          <p class="card__category">${u.trim()}</p>\n          <p class="card__description">\n            Lorem, ipsum dolor sit amet consectetur adipisicing elit.\n            Temporibus, architecto voluptate sint debitis ab fugit\n            laudantium nostrum dolore quisquam? Laboriosam nulla eum a,\n            quo, molestiae sed error possimus expedita veniam maiores\n            nam maxime provident quod blanditiis cum voluptate. A\n            provident corrupti dignissimos ullam. Porro architecto\n            maiores est ullam sed. Cum.\n            Temporibus, architecto voluptate sint debitis ab fugit\n            laudantium nostrum dolore quisquam? Laboriosam nulla eum a,\n            quo, molestiae sed error possimus expedita veniam maiores\n            nam maxime provident quod blanditiis cum voluptate. A\n            provident corrupti dignissimos ullam. Porro architecto\n            maiores est ullam sed. Cum.\n          </p>\n          <div class="card__footer">\n            <p class="card__author">${o.trim()}</p>\n            <ul class="card__shops list">\n              <li class="shop">\n                <a\n                  href="${r}"\n                  target="_blank"\n                  rel="noopener nofollow"\n                >\n                  <img class="shop__image--amazon"\n                    loading="lazy"\n                    width="28"\n                    height="28"\n                    srcset="\n                      ${e(p)} 1x,\n                      ${e(f)} 2x\n                    "\n                    src="${e(p)}"\n                    alt="amazon.com"\n                /></a>\n              </li>\n              <li class="shop">\n                <a\n                  href="${a}"\n                  target="_blank"\n                  rel="noopener nofollow"\n                >\n                  <img class="shop__image--apple"\n                    loading="lazy"\n                    width="28"\n                    height="28"\n                    srcset="\n                      ${e(d)} 1x,\n                      ${e(h)} 2x\n                    "\n                    src="${e(d)}"\n                    alt="books.apple.com"\n                /></a>\n              </li>\n              <li class="shop">\n                <a\n                  href="${c}"\n                  target="_blank"\n                  rel="noopener nofollow"\n                >\n                  <img class="shop__image--bookshop"\n                    loading="lazy"\n                    width="28"\n                    height="28"\n                    srcset="\n                      ${e(m)} 1x,\n                      ${e(g)} 2x\n                    "\n                    src="${e(m)}"\n                    alt="bookshop.org"\n                /></a>\n              </li>\n            </ul>\n          </div>\n          <button\n            aria-label="delete" class="card__delete button js-card__delete"\n            type="button"\n          >\n            <svg class="icon-delete" width="22" height="22">\n              <use x="1%" href="${e(s)}#icon-delete"></use>\n            </svg>\n          </button>\n        </div>\n      </li>`))))}E.onAuthStateChanged((function(t){if(C.innerHTML=(0,y.loader)(),t){const e=t.uid;return E.firebaseSelectBooksFromList(e).then((async function(t){if(!1!==t){console.log("Список книжок з корзини:",t);const e=k(t);Promise.all(e).then((t=>{C.innerHTML=t.join("")})).catch((t=>{console.error("Ошибка при ожидании результатов:",t)}))}else L(),console.log("Корзина порожня")})).catch((function(t){console.error("Помилка при отриманні списку книжок з корзини:",t)})),e}return console.log("User is not authenticated"),!1})),r("lrjPt"),r("dDLL9"),r("aIiCx"),r("9VC5X");var H=r("1KhuP"),w=r("983FS");b=r("2NTPx"),x=r("jzQFI");const M=new(0,b.default),S=document.querySelector("#overlay-modal"),B=document.querySelector(".js-modal-close"),T=document.querySelector(".modal-book"),N=document.querySelector(".js-cart-list"),O=document.querySelector(".new-modal"),j=document.querySelector(".js-cart-list");let F="";const I=(0,x.load)("UserData").userID;function A(){M.onAuthStateChanged((function(t){if(t){const e=t.uid;return M.firebaseSelectBooksFromList(e).then((async function(t){if(!1!==t){console.log("Список книжок з корзини:",t);const e=k(t);Promise.all(e).then((t=>{j.innerHTML=t.join("")})).catch((t=>{console.error("Ошибка при ожидании результатов:",t)}))}else L(),console.log("Корзина порожня")})).catch((function(t){console.error("Помилка при отриманні списку книжок з корзини:",t)})),e}return console.log("User is not authenticated"),!1})),T.classList.remove("active"),S.classList.remove("active"),document.body.style.overflow="",B.removeEventListener("click",A),S.removeEventListener("click",A),document.removeEventListener("keydown",R)}function R(t){"Escape"===t.key&&A()}document;async function $(t){const e=await(0,H.markupModal)(t);O.innerHTML=e;const n=document.querySelector(".add-book-button");(0,w.checkBook)(n),n.addEventListener("click",w.onClick)}N.addEventListener("click",(async function t(e){if("BUTTON"===e.target.nodeName)return F=e.target.closest(".js-card").dataset.id,M.firebaseRemoveBookFromList(I,F),M.onAuthStateChanged((function(t){if(t){const e=t.uid;return M.firebaseSelectBooksFromList(e).then((async function(t){if(!1!==t){console.log("Список книжок з корзини:",t);const e=k(t);Promise.all(e).then((t=>{j.innerHTML=t.join("")})).catch((t=>{console.error("Ошибка при ожидании результатов:",t)}))}else L(),console.log("Корзина порожня")})).catch((function(t){console.error("Помилка при отриманні списку книжок з корзини:",t)})),e}return console.log("User is not authenticated"),!1}));try{F=e.target.closest(".js-card").dataset.id}catch(t){return}if(!F)return;await $(F),$(F);document.querySelector(".js-btn-add"),document.querySelector(".under-remove-btn-text");async function n(){T.classList.add("active"),S.classList.add("active"),document.body.style.overflow="hidden",B.addEventListener("click",A),S.addEventListener("click",A),document.addEventListener("keydown",R),B.removeEventListener("click",t),S.removeEventListener("click",t)}n()})),r("lG6Dc"),r("eRs4Y")}();
//# sourceMappingURL=shopping-list.72d56492.js.map
