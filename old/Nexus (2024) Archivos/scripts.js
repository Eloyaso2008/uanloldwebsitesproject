var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

;/*!
 * froala_editor v2.9.8 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */

!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):"object"==typeof module&&module.exports?module.exports=function(e,t){return t===undefined&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),n(t)}:n(window.jQuery)}(function(Te){var s=function(e,t){this.id=++Te.FE.ID;var n={};t&&t.documentReady&&(n.toolbarButtons=["fullscreen","undo","redo","getPDF","print","|","bold","italic","underline","color","clearFormatting","|","alignLeft","alignCenter","alignRight","alignJustify","|","formatOL","formatUL","indent","outdent","-","paragraphFormat","|","fontFamily","|","fontSize","|","insertLink","insertImage","quote"],n.paragraphFormatSelection=!0,n.fontFamilySelection=!0,n.fontSizeSelection=!0,n.placeholderText="Type something",n.quickInsertEnabled=!1,n.charCounterCount=!1),this.opts=Te.extend(!0,{},Te.extend({},s.DEFAULTS,n,"object"==typeof t&&t));var r=JSON.stringify(this.opts);Te.FE.OPTS_MAPPING[r]=Te.FE.OPTS_MAPPING[r]||this.id,this.sid=Te.FE.OPTS_MAPPING[r],Te.FE.SHARED[this.sid]=Te.FE.SHARED[this.sid]||{},this.shared=Te.FE.SHARED[this.sid],this.shared.count=(this.shared.count||0)+1,this.$oel=Te(e),this.$oel.data("froala.editor",this),this.o_doc=e.ownerDocument,this.o_win="defaultView"in this.o_doc?this.o_doc.defaultView:this.o_doc.parentWindow;var i=Te(this.o_win).scrollTop();this.$oel.on("froala.doInit",Te.proxy(function(){this.$oel.off("froala.doInit"),this.doc=this.$el.get(0).ownerDocument,this.win="defaultView"in this.doc?this.doc.defaultView:this.doc.parentWindow,this.$doc=Te(this.doc),this.$win=Te(this.win),this.opts.pluginsEnabled||(this.opts.pluginsEnabled=Object.keys(Te.FE.PLUGINS)),this.opts.initOnClick?(this.load(Te.FE.MODULES),this.$el.on("touchstart.init",function(){Te(this).data("touched",!0)}),this.$el.on("touchmove.init",function(){Te(this).removeData("touched")}),this.$el.on("mousedown.init touchend.init dragenter.init focus.init",Te.proxy(function(e){if("touchend"==e.type&&!this.$el.data("touched"))return!0;if(1===e.which||!e.which){this.$el.off("mousedown.init touchstart.init touchmove.init touchend.init dragenter.init focus.init"),this.load(Te.FE.MODULES),this.load(Te.FE.PLUGINS);var t=e.originalEvent&&e.originalEvent.originalTarget;t&&"IMG"==t.tagName&&Te(t).trigger("mousedown"),"undefined"==typeof this.ul&&this.destroy(),"touchend"==e.type&&this.image&&e.originalEvent&&e.originalEvent.target&&Te(e.originalEvent.target).is("img")&&setTimeout(Te.proxy(function(){this.image.edit(Te(e.originalEvent.target))},this),100),this.ready=!0,this.events.trigger("initialized")}},this)),this.events.trigger("initializationDelayed")):(this.load(Te.FE.MODULES),this.load(Te.FE.PLUGINS),Te(this.o_win).scrollTop(i),"undefined"==typeof this.ul&&this.destroy(),this.ready=!0,this.events.trigger("initialized"))},this)),this._init()};s.DEFAULTS={initOnClick:!1,pluginsEnabled:null},s.MODULES={},s.PLUGINS={},s.VERSION="2.9.8",s.INSTANCES=[],s.OPTS_MAPPING={},s.SHARED={},s.ID=0,s.prototype._init=function(){var e=this.$oel.prop("tagName");this.$oel.closest("label").length;var t=Te.proxy(function(){"TEXTAREA"!=e&&(this._original_html=this._original_html||this.$oel.html()),this.$box=this.$box||this.$oel,this.opts.fullPage&&(this.opts.iframe=!0),this.opts.iframe?(this.$iframe=Te('<iframe src="about:blank" frameBorder="0">'),this.$wp=Te("<div></div>"),this.$box.html(this.$wp),this.$wp.append(this.$iframe),this.$iframe.get(0).contentWindow.document.open(),this.$iframe.get(0).contentWindow.document.write("<!DOCTYPE html>"),this.$iframe.get(0).contentWindow.document.write("<html><head></head><body></body></html>"),this.$iframe.get(0).contentWindow.document.close(),this.$el=this.$iframe.contents().find("body"),this.el=this.$el.get(0),this.$head=this.$iframe.contents().find("head"),this.$html=this.$iframe.contents().find("html"),this.iframe_document=this.$iframe.get(0).contentWindow.document):(this.$el=Te("<div></div>"),this.el=this.$el.get(0),this.$wp=Te("<div></div>").append(this.$el),this.$box.html(this.$wp)),this.$oel.trigger("froala.doInit")},this),n=Te.proxy(function(){this.$box=Te("<div>"),this.$oel.before(this.$box).hide(),this._original_html=this.$oel.val(),this.$oel.parents("form").on("submit."+this.id,Te.proxy(function(){this.events.trigger("form.submit")},this)),this.$oel.parents("form").on("reset."+this.id,Te.proxy(function(){this.events.trigger("form.reset")},this)),t()},this),r=Te.proxy(function(){this.$el=this.$oel,this.el=this.$el.get(0),this.$el.attr("contenteditable",!0).css("outline","none").css("display","inline-block"),this.opts.multiLine=!1,this.opts.toolbarInline=!1,this.$oel.trigger("froala.doInit")},this),i=Te.proxy(function(){this.$el=this.$oel,this.el=this.$el.get(0),this.opts.toolbarInline=!1,this.$oel.trigger("froala.doInit")},this),a=Te.proxy(function(){this.$el=this.$oel,this.el=this.$el.get(0),this.opts.toolbarInline=!1,this.$oel.on("click.popup",function(e){e.preventDefault()}),this.$oel.trigger("froala.doInit")},this);this.opts.editInPopup?a():"TEXTAREA"==e?n():"A"==e?r():"IMG"==e?i():"BUTTON"==e||"INPUT"==e?(this.opts.editInPopup=!0,this.opts.toolbarInline=!1,a()):t()},s.prototype.load=function(e){for(var t in e)if(e.hasOwnProperty(t)){if(this[t])continue;if(Te.FE.PLUGINS[t]&&this.opts.pluginsEnabled.indexOf(t)<0)continue;if(this[t]=new e[t](this),this[t]._init&&(this[t]._init(),this.opts.initOnClick&&"core"==t))return!1}},s.prototype.destroy=function(){this.destroying=!0,this.shared.count--,this.events.$off();var e=this.html.get();if(this.opts.iframe&&(this.events.disableBlur(),this.win.focus(),this.events.enableBlur()),this.events.trigger("destroy",[],!0),this.events.trigger("shared.destroy",undefined,!0),0===this.shared.count){for(var t in this.shared)this.shared.hasOwnProperty(t)&&(this.shared[t],Te.FE.SHARED[this.sid][t]=null);delete Te.FE.SHARED[this.sid]}this.$oel.parents("form").off("."+this.id),this.$oel.off("click.popup"),this.$oel.removeData("froala.editor"),this.$oel.off("froalaEditor"),this.core.destroy(e),Te.FE.INSTANCES.splice(Te.FE.INSTANCES.indexOf(this),1)},Te.fn.froalaEditor=function(i){for(var a=[],e=0;e<arguments.length;e++)a.push(arguments[e]);if("string"==typeof i){var o=[];return this.each(function(){var e=Te(this).data("froala.editor");if(e){var t,n;if(0<i.indexOf(".")&&e[i.split(".")[0]]?(e[i.split(".")[0]]&&(t=e[i.split(".")[0]]),n=i.split(".")[1]):(t=e,n=i.split(".")[0]),!t[n])return Te.error("Method "+i+" does not exist in Froala Editor.");var r=t[n].apply(e,a.slice(1));r===undefined?o.push(this):0===o.length&&o.push(r)}}),1==o.length?o[0]:o}if("object"==typeof i||!i)return this.each(function(){if(!Te(this).data("froala.editor")){new s(this,i)}})},Te.fn.froalaEditor.Constructor=s,Te.FroalaEditor=s,Te.FE=s,Te.FE.XS=0,Te.FE.SM=1,Te.FE.MD=2,Te.FE.LG=3;Te.FE.LinkRegExCommon="[a-z\\u0080-\\u009f\\u00a1-\\uffff0-9-_.]{1,}",Te.FE.LinkRegExEnd="((:[0-9]{1,5})|)(((\\/|\\?|#)[a-z\\u00a1-\\uffff0-9@?\\|!^=%&amp;/~+#-\\'*-_{}]*)|())",Te.FE.LinkRegExTLD="(("+Te.FE.LinkRegExCommon+")(\\.(com|net|org|edu|mil|gov|co|biz|info|me|dev)))",Te.FE.LinkRegExHTTP="((ftp|http|https):\\/\\/"+Te.FE.LinkRegExCommon+")",Te.FE.LinkRegExAuth="((ftp|http|https):\\/\\/[\\u0021-\\uffff]{1,}@"+Te.FE.LinkRegExCommon+")",Te.FE.LinkRegExWWW="(www\\."+Te.FE.LinkRegExCommon+"\\.[a-z0-9-]{2,24})",Te.FE.LinkRegEx="("+Te.FE.LinkRegExTLD+"|"+Te.FE.LinkRegExHTTP+"|"+Te.FE.LinkRegExWWW+"|"+Te.FE.LinkRegExAuth+")"+Te.FE.LinkRegExEnd,Te.FE.LinkProtocols=["mailto","tel","sms","notes","data"],Te.FE.MAIL_REGEX=/.+@.+\..+/i,Te.FE.MODULES.helpers=function(a){function e(){var e,t,n={},r=(t=-1,"Microsoft Internet Explorer"==navigator.appName?(e=navigator.userAgent,null!==new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})").exec(e)&&(t=parseFloat(RegExp.$1))):"Netscape"==navigator.appName&&(e=navigator.userAgent,null!==new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})").exec(e)&&(t=parseFloat(RegExp.$1))),t);if(0<r)n.msie=!0;else{var i=navigator.userAgent.toLowerCase(),a=/(edge)[ \/]([\w.]+)/.exec(i)||/(chrome)[ \/]([\w.]+)/.exec(i)||/(webkit)[ \/]([\w.]+)/.exec(i)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(i)||/(msie) ([\w.]+)/.exec(i)||i.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(i)||[],o=a[1]||"";a[2];a[1]&&(n[o]=!0),n.chrome?n.webkit=!0:n.webkit&&(n.safari=!0)}return n.msie&&(n.version=r),n}function t(){return/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&!i()}function n(){return/(Android)/g.test(navigator.userAgent)&&!i()}function r(){return/(Blackberry)/g.test(navigator.userAgent)}function i(){return/(Windows Phone)/gi.test(navigator.userAgent)}function o(e){return parseInt(e,10)||0}var s;var l=null;return{_init:function(){a.browser=e(),function(){function e(e,t){var a=e[t];e[t]=function(e){var t,n=!1,r=!1;if(e&&e.match(s)){e=e.replace(s,""),this.parentNode||(o.appendChild(this),r=!0);var i=this.parentNode;return this.id||(this.id="rootedQuerySelector_id_"+(new Date).getTime(),n=!0),t=a.call(i,"#"+this.id+" "+e),n&&(this.id=""),r&&o.removeChild(this),t}return a.call(this,e)}}var o=a.o_doc.createElement("div");try{o.querySelectorAll(":scope *")}catch(t){var s=/^\s*:scope/gi;e(Element.prototype,"querySelector"),e(Element.prototype,"querySelectorAll"),e(HTMLElement.prototype,"querySelector"),e(HTMLElement.prototype,"querySelectorAll")}}(),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;if(!t)return null;if(!document.documentElement.contains(this))return null;do{if(t.matches(e))return t;t=t.parentElement}while(null!==t);return null})},isIOS:t,isMac:function(){return null==l&&(l=0<=navigator.platform.toUpperCase().indexOf("MAC")),l},isAndroid:n,isBlackberry:r,isWindowsPhone:i,isMobile:function(){return n()||t()||r()},isEmail:function(e){return!/^(https?:|ftps?:|)\/\//i.test(e)&&Te.FE.MAIL_REGEX.test(e)},requestAnimationFrame:function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}},getPX:o,screenSize:function(){var e=Te('<div class="fr-visibility-helper"></div>').appendTo("body:first");try{var t=o(e.css("margin-left"));return e.remove(),t}catch(n){return Te.FE.LG}},isTouch:function(){return"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch},sanitizeURL:function(e){return/^(https?:|ftps?:|)\/\//i.test(e)?e:/^([A-Za-z]:(\\){1,2}|[A-Za-z]:((\\){1,2}[^\\]+)+)(\\)?$/i.test(e)?e:new RegExp("^("+Te.FE.LinkProtocols.join("|")+"):\\/\\/","i").test(e)?e:e=encodeURIComponent(e).replace(/%23/g,"#").replace(/%2F/g,"/").replace(/%25/g,"%").replace(/mailto%3A/gi,"mailto:").replace(/file%3A/gi,"file:").replace(/sms%3A/gi,"sms:").replace(/tel%3A/gi,"tel:").replace(/notes%3A/gi,"notes:").replace(/data%3Aimage/gi,"data:image").replace(/blob%3A/gi,"blob:").replace(/%3A(\d)/gi,":$1").replace(/webkit-fake-url%3A/gi,"webkit-fake-url:").replace(/%3F/g,"?").replace(/%3D/g,"=").replace(/%26/g,"&").replace(/&amp;/g,"&").replace(/%2C/g,",").replace(/%3B/g,";").replace(/%2B/g,"+").replace(/%40/g,"@").replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/%7B/g,"{").replace(/%7D/g,"}")},isArray:function(e){return e&&!e.propertyIsEnumerable("length")&&"object"==typeof e&&"number"==typeof e.length},RGBToHex:function(e){function t(e){return("0"+parseInt(e,10).toString(16)).slice(-2)}try{return e&&"transparent"!==e?/^#[0-9A-F]{6}$/i.test(e)?e:("#"+t((e=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))[1])+t(e[2])+t(e[3])).toUpperCase():""}catch(n){return null}},HEXtoRGB:function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,r){return t+t+n+n+r+r});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?"rgb("+parseInt(t[1],16)+", "+parseInt(t[2],16)+", "+parseInt(t[3],16)+")":""},isURL:function(e){return!!/^(https?:|ftps?:|)\/\//i.test(e)&&(e=String(e).replace(/</g,"%3C").replace(/>/g,"%3E").replace(/"/g,"%22").replace(/ /g,"%20"),new RegExp("^"+Te.FE.LinkRegExHTTP+Te.FE.LinkRegExEnd+"$","gi").test(e))},getAlignment:function(e){var t=(e.css("text-align")||"").replace(/-(.*)-/g,"");if(["left","right","justify","center"].indexOf(t)<0){if(!s){var n=Te('<div dir="'+("rtl"==a.opts.direction?"rtl":"auto")+'" style="text-align: '+a.$el.css("text-align")+'; position: fixed; left: -3000px;"><span id="s1">.</span><span id="s2">.</span></div>');Te("body:first").append(n);var r=n.find("#s1").get(0).getBoundingClientRect().left,i=n.find("#s2").get(0).getBoundingClientRect().left;n.remove(),s=r<i?"left":"right"}t=s}return t},scrollTop:function(){return a.o_win.pageYOffset?a.o_win.pageYOffset:a.o_doc.documentElement&&a.o_doc.documentElement.scrollTop?a.o_doc.documentElement.scrollTop:a.o_doc.body.scrollTop?a.o_doc.body.scrollTop:0},scrollLeft:function(){return a.o_win.pageXOffset?a.o_win.pageXOffset:a.o_doc.documentElement&&a.o_doc.documentElement.scrollLeft?a.o_doc.documentElement.scrollLeft:a.o_doc.body.scrollLeft?a.o_doc.body.scrollLeft:0},isInViewPort:function(e){var t=e.getBoundingClientRect();return 0<=(t={top:Math.round(t.top),bottom:Math.round(t.bottom)}).top&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)||t.top<=0&&t.bottom>=(window.innerHeight||document.documentElement.clientHeight)}}},Te.FE.MODULES.events=function(l){var e,o={};function t(e,t,n){f(e,t,n)}function n(e){if(void 0===e&&(e=!0),!l.$wp)return!1;if(l.helpers.isIOS()){l.$win.get(0).focus();var t=0===l.$win.scrollTop()?1:l.$win.scrollTop();window.scrollTo(0,t)}if(l.core.hasFocus())return!1;if(!l.core.hasFocus()&&e){var n=l.$win.scrollTop();if(l.browser.msie&&l.$box&&l.$box.css("position","fixed"),l.browser.msie&&l.$wp&&l.$wp.css("overflow","visible"),l.browser.msie&&l.$sc&&l.$sc.css("position","fixed"),s(),l.$el.focus(),l.events.trigger("focus"),a(),l.browser.msie&&l.$sc&&l.$sc.css("position",""),l.browser.msie&&l.$box&&l.$box.css("position",""),l.browser.msie&&l.$wp&&l.$wp.css("overflow","auto"),n!=l.$win.scrollTop()&&l.$win.scrollTop(n),!l.selection.info(l.el).atStart)return!1}if(!l.core.hasFocus()||0<l.$el.find(".fr-marker").length)return!1;if(l.selection.info(l.el).atStart&&l.selection.isCollapsed()&&null!=l.html.defaultTag()){var r=l.markers.insert();if(r&&!l.node.blockParent(r)){Te(r).remove();var i=l.$el.find(l.html.blockTagsQuery()).get(0);i&&(Te(i).prepend(Te.FE.MARKERS),l.selection.restore())}else r&&Te(r).remove()}}var r=!1;function a(){e=!0}function s(){e=!1}function i(){return e}function d(e,t,n){var r,i=e.split(" ");if(1<i.length){for(var a=0;a<i.length;a++)d(i[a],t,n);return!0}void 0===n&&(n=!1),r=0!==e.indexOf("shared.")?o[e]=o[e]||[]:l.shared._events[e]=l.shared._events[e]||[],n?r.unshift(t):r.push(t)}var c=[];function f(e,t,n,r,i){"function"==typeof n&&(i=r,r=n,n=!1);var a,o=i?l.shared.$_events:c,s=i?l.sid:l.id;a=r,r=function(){if(!l.destroying)return a.apply(this,arguments)},n?e.on(t.split(" ").join(".ed"+s+" ")+".ed"+s,n,r):e.on(t.split(" ").join(".ed"+s+" ")+".ed"+s,r),o.push([e,t.split(" ").join(".ed"+s+" ")+".ed"+s])}function p(e){for(var t=0;t<e.length;t++)e[t][0].off(e[t][1])}function u(e,t,n){if(!l.edit.isDisabled()||n){var r,i;if(0!==e.indexOf("shared."))r=o[e];else{if(0<l.shared.count)return!1;r=l.shared._events[e]}if(r)for(var a=0;a<r.length;a++)if(!1===(i=r[a].apply(l,t)))return!1;return!1!==(i=l.$oel.triggerHandler("froalaEditor."+e,Te.merge([l],t||[])))&&i}}function h(){for(var e in o)o.hasOwnProperty(e)&&delete o[e]}function g(){for(var e in l.shared._events)l.shared._events.hasOwnProperty(e)&&delete l.shared._events[e]}return{_init:function(){l.shared.$_events=l.shared.$_events||[],l.shared._events={},l.helpers.isMobile()?(l._mousedown="touchstart",l._mouseup="touchend",l._move="touchmove",l._mousemove="touchmove"):(l._mousedown="mousedown",l._mouseup="mouseup",l._move="",l._mousemove="mousemove"),t(l.$el,"click mouseup mousedown touchstart touchend dragenter dragover dragleave dragend drop dragstart",function(e){u(e.type,[e])}),d("mousedown",function(){for(var e=0;e<Te.FE.INSTANCES.length;e++)Te.FE.INSTANCES[e]!=l&&Te.FE.INSTANCES[e].popups&&Te.FE.INSTANCES[e].popups.areVisible()&&Te.FE.INSTANCES[e].$el.find(".fr-marker").remove()}),t(l.$win,l._mousedown,function(e){u("window.mousedown",[e]),a()}),t(l.$win,l._mouseup,function(e){u("window.mouseup",[e])}),t(l.$win,"cut copy keydown keyup touchmove touchend",function(e){u("window."+e.type,[e])}),t(l.$doc,"dragend drop",function(e){u("document."+e.type,[e])}),t(l.$el,"keydown keypress keyup input",function(e){u(e.type,[e])}),t(l.$el,"focus",function(e){i()&&(n(!1),!1===r&&u(e.type,[e]))}),t(l.$el,"blur",function(e){i()&&!0===r&&(u(e.type,[e]),a())}),f(l.$el,"mousedown",'[contenteditable="true"]',function(){s(),l.$el.blur()}),d("focus",function(){r=!0}),d("blur",function(){r=!1}),a(),t(l.$el,"cut copy paste beforepaste",function(e){u(e.type,[e])}),d("destroy",h),d("shared.destroy",g)},on:d,trigger:u,bindClick:function(e,t,n){f(e,l._mousedown,t,function(e){var t,n;l.edit.isDisabled()||(n=Te((t=e).currentTarget),l.edit.isDisabled()||l.node.hasClass(n.get(0),"fr-disabled")?t.preventDefault():"mousedown"===t.type&&1!==t.which||(l.helpers.isMobile()||t.preventDefault(),(l.helpers.isAndroid()||l.helpers.isWindowsPhone())&&0===n.parents(".fr-dropdown-menu").length&&(t.preventDefault(),t.stopPropagation()),n.addClass("fr-selected"),l.events.trigger("commands.mousedown",[n])))},!0),f(e,l._mouseup+" "+l._move,t,function(e){l.edit.isDisabled()||function(e,t){var n=Te(e.currentTarget);if(l.edit.isDisabled()||l.node.hasClass(n.get(0),"fr-disabled"))return e.preventDefault();if(("mouseup"!==e.type||1===e.which)&&l.node.hasClass(n.get(0),"fr-selected"))if("touchmove"!=e.type){if(e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault(),!l.node.hasClass(n.get(0),"fr-selected"))return l.button.getButtons(".fr-selected",!0).removeClass("fr-selected");if(l.button.getButtons(".fr-selected",!0).removeClass("fr-selected"),n.data("dragging")||n.attr("disabled"))return n.removeData("dragging");var r=n.data("timeout");r&&(clearTimeout(r),n.removeData("timeout")),t.apply(l,[e])}else n.data("timeout")||n.data("timeout",setTimeout(function(){n.data("dragging",!0)},100))}(e,n)},!0),f(e,"mousedown click mouseup",t,function(e){l.edit.isDisabled()||e.stopPropagation()},!0),d("window.mouseup",function(){l.edit.isDisabled()||(e.find(t).removeClass("fr-selected"),a())}),f(e,"mouseenter",t,function(){Te(this).hasClass("fr-options")&&Te(this).prev(".fr-btn").addClass("fr-btn-hover"),Te(this).next(".fr-btn").hasClass("fr-options")&&Te(this).next(".fr-btn").addClass("fr-btn-hover")}),f(e,"mouseleave",t,function(){Te(this).hasClass("fr-options")&&Te(this).prev(".fr-btn").removeClass("fr-btn-hover"),Te(this).next(".fr-btn").hasClass("fr-options")&&Te(this).next(".fr-btn").removeClass("fr-btn-hover")})},disableBlur:s,enableBlur:a,blurActive:i,focus:n,chainTrigger:function(e,t,n){if(!l.edit.isDisabled()||n){var r,i;if(0!==e.indexOf("shared."))r=o[e];else{if(0<l.shared.count)return!1;r=l.shared._events[e]}if(r)for(var a=0;a<r.length;a++)void 0!==(i=r[a].apply(l,[t]))&&(t=i);return void 0!==(i=l.$oel.triggerHandler("froalaEditor."+e,Te.merge([l],[t])))&&(t=i),t}},$on:f,$off:function(){p(c),c=[],0===l.shared.count&&(p(l.shared.$_events),l.shared.$_events=[])}}},Te.FE.MODULES.node=function(o){function s(e){return e&&"IFRAME"!=e.tagName?Array.prototype.slice.call(e.childNodes||[]):[]}function l(e){return!!e&&(e.nodeType==Node.ELEMENT_NODE&&0<=Te.FE.BLOCK_TAGS.indexOf(e.tagName.toLowerCase()))}function d(e){var t={},n=e.attributes;if(n)for(var r=0;r<n.length;r++){var i=n[r];t[i.nodeName]=i.value}return t}function t(e){for(var t="",n=d(e),r=Object.keys(n).sort(),i=0;i<r.length;i++){var a=r[i],o=n[a];o.indexOf("'")<0&&0<=o.indexOf('"')?t+=" "+a+"='"+o+"'":0<=o.indexOf('"')&&0<=o.indexOf("'")?t+=" "+a+'="'+(o=o.replace(/"/g,"&quot;"))+'"':t+=" "+a+'="'+o+'"'}return t}function n(e){return e===o.el}return{isBlock:l,isEmpty:function(e,t){if(!e)return!0;if(e.querySelector("table"))return!1;var n=s(e);1==n.length&&l(n[0])&&(n=s(n[0]));for(var r=!1,i=0;i<n.length;i++){var a=n[i];if(!(t&&o.node.hasClass(a,"fr-marker")||a.nodeType==Node.TEXT_NODE&&0===a.textContent.length)){if("BR"!=a.tagName&&0<(a.textContent||"").replace(/\u200B/gi,"").replace(/\n/g,"").length)return!1;if(r)return!1;"BR"==a.tagName&&(r=!0)}}return!(e.querySelectorAll(Te.FE.VOID_ELEMENTS.join(",")).length-e.querySelectorAll("br").length||e.querySelector(o.opts.htmlAllowedEmptyTags.join(":not(.fr-marker),")+":not(.fr-marker)")||1<e.querySelectorAll(Te.FE.BLOCK_TAGS.join(",")).length||e.querySelector(o.opts.htmlDoNotWrapTags.join(":not(.fr-marker),")+":not(.fr-marker)"))},blockParent:function(e){for(;e&&e.parentNode!==o.el&&(!e.parentNode||!o.node.hasClass(e.parentNode,"fr-inner"));)if(l(e=e.parentNode))return e;return null},deepestParent:function(e,t,n){if(void 0===t&&(t=[]),void 0===n&&(n=!0),t.push(o.el),0<=t.indexOf(e.parentNode)||e.parentNode&&o.node.hasClass(e.parentNode,"fr-inner")||e.parentNode&&0<=Te.FE.SIMPLE_ENTER_TAGS.indexOf(e.parentNode.tagName)&&n)return null;for(;t.indexOf(e.parentNode)<0&&e.parentNode&&!o.node.hasClass(e.parentNode,"fr-inner")&&(Te.FE.SIMPLE_ENTER_TAGS.indexOf(e.parentNode.tagName)<0||!n)&&(!l(e)||l(e.parentNode))&&(!l(e)||!l(e.parentNode)||!n);)e=e.parentNode;return e},rawAttributes:d,attributes:t,clearAttributes:function(e){for(var t=e.attributes,n=t.length-1;0<=n;n--){var r=t[n];e.removeAttribute(r.nodeName)}},openTagString:function(e){return"<"+e.tagName.toLowerCase()+t(e)+">"},closeTagString:function(e){return"</"+e.tagName.toLowerCase()+">"},isFirstSibling:function e(t,n){void 0===n&&(n=!0);for(var r=t.previousSibling;r&&n&&o.node.hasClass(r,"fr-marker");)r=r.previousSibling;return!r||r.nodeType==Node.TEXT_NODE&&""===r.textContent&&e(r)},isLastSibling:function e(t,n){void 0===n&&(n=!0);for(var r=t.nextSibling;r&&n&&o.node.hasClass(r,"fr-marker");)r=r.nextSibling;return!r||r.nodeType==Node.TEXT_NODE&&""===r.textContent&&e(r)},isList:function(e){return!!e&&0<=["UL","OL"].indexOf(e.tagName)},isLink:function(e){return!!e&&e.nodeType==Node.ELEMENT_NODE&&"a"==e.tagName.toLowerCase()},isElement:n,contents:s,isVoid:function(e){return e&&e.nodeType==Node.ELEMENT_NODE&&0<=Te.FE.VOID_ELEMENTS.indexOf((e.tagName||"").toLowerCase())},hasFocus:function(e){return e===o.doc.activeElement&&(!o.doc.hasFocus||o.doc.hasFocus())&&!!(n(e)||e.type||e.href||~e.tabIndex)},isEditable:function(e){return(!e.getAttribute||"false"!=e.getAttribute("contenteditable"))&&["STYLE","SCRIPT"].indexOf(e.tagName)<0},isDeletable:function(e){return e&&e.nodeType==Node.ELEMENT_NODE&&e.getAttribute("class")&&0<=(e.getAttribute("class")||"").indexOf("fr-deletable")},hasClass:function(e,t){return e instanceof Te&&(e=e.get(0)),e&&e.classList&&e.classList.contains(t)},filter:function(e){return o.browser.msie?e:{acceptNode:e}}}},Te.FE.INVISIBLE_SPACE="&#8203;",Te.FE.START_MARKER='<span class="fr-marker" data-id="0" data-type="true" style="display: none; line-height: 0;">'+Te.FE.INVISIBLE_SPACE+"</span>",Te.FE.END_MARKER='<span class="fr-marker" data-id="0" data-type="false" style="display: none; line-height: 0;">'+Te.FE.INVISIBLE_SPACE+"</span>",Te.FE.MARKERS=Te.FE.START_MARKER+Te.FE.END_MARKER,Te.FE.MODULES.markers=function(d){function l(){if(!d.$wp)return null;try{var e=d.selection.ranges(0),t=e.commonAncestorContainer;if(d.core.isEmpty()&&t.textContent!==Te("<span>").html(Te.FE.INVISIBLE_SPACE).text())return d.selection.setAtStart(d.el),d.$el.find(".fr-marker:first").replaceWith('<span class="fr-single-marker" style="display: none; line-height: 0;">'+Te.FE.INVISIBLE_SPACE+"</span>"),d.$el.find(".fr-marker").remove(),d.$el.find(".fr-single-marker").removeClass("fr-single-marker").addClass("fr-marker").get(0);if(t!=d.el&&0===d.$el.find(t).length)return null;var n=e.cloneRange(),r=e.cloneRange();n.collapse(!0);var i=Te('<span class="fr-marker" style="display: none; line-height: 0;">'+Te.FE.INVISIBLE_SPACE+"</span>",d.doc)[0];if(n.insertNode(i),i=d.$el.find("span.fr-marker").get(0)){for(var a=i.nextSibling;a&&a.nodeType===Node.TEXT_NODE&&0===a.textContent.length;)Te(a).remove(),a=d.$el.find("span.fr-marker").get(0).nextSibling;return d.selection.clear(),d.selection.get().addRange(r),i}return null}catch(o){}}function c(){d.$el.find(".fr-marker").remove()}return{place:function(e,t,n){var r,i,a;try{var o=e.cloneRange();if(o.collapse(t),o.insertNode(Te('<span class="fr-marker" data-id="'+n+'" data-type="'+t+'" style="display: '+(d.browser.safari?"none":"inline-block")+'; line-height: 0;">'+Te.FE.INVISIBLE_SPACE+"</span>",d.doc)[0]),!0===t)for(a=(r=d.$el.find('span.fr-marker[data-type="true"][data-id="'+n+'"]').get(0)).nextSibling;a&&a.nodeType===Node.TEXT_NODE&&0===a.textContent.length;)Te(a).remove(),a=r.nextSibling;if(!0===t&&!e.collapsed){for(;!d.node.isElement(r.parentNode)&&!a;)Te(r.parentNode).after(r),a=r.nextSibling;if(a&&a.nodeType===Node.ELEMENT_NODE&&d.node.isBlock(a)&&"HR"!==a.tagName){for(i=[a];a=i[0],(i=d.node.contents(a))[0]&&d.node.isBlock(i[0]););Te(a).prepend(Te(r))}}if(!1===t&&!e.collapsed){if((a=(r=d.$el.find('span.fr-marker[data-type="false"][data-id="'+n+'"]').get(0)).previousSibling)&&a.nodeType===Node.ELEMENT_NODE&&d.node.isBlock(a)&&"HR"!==a.tagName){for(i=[a];a=i[i.length-1],(i=d.node.contents(a))[i.length-1]&&d.node.isBlock(i[i.length-1]););Te(a).append(Te(r))}(r.parentNode&&0<=["TD","TH"].indexOf(r.parentNode.tagName)||!r.previousSibling&&d.node.isBlock(r.parentElement))&&r.parentNode.previousSibling&&!r.previousSibling&&Te(r.parentNode.previousSibling).append(r)}var s=d.$el.find('span.fr-marker[data-type="'+t+'"][data-id="'+n+'"]').get(0);return s&&(s.style.display="none"),s}catch(l){return null}},insert:l,split:function(){d.selection.isCollapsed()||d.selection.remove();var e=d.$el.find(".fr-marker").get(0);if(null==e&&(e=l()),null==e)return null;var t=d.node.deepestParent(e);if(t||(t=d.node.blockParent(e))&&"LI"!=t.tagName&&(t=null),t)if(d.node.isBlock(t)&&d.node.isEmpty(t))"LI"!=t.tagName||t.parentNode.firstElementChild!=t||d.node.isEmpty(t.parentNode)?Te(t).replaceWith('<span class="fr-marker"></span>'):Te(t).append('<span class="fr-marker"></span>');else if(d.cursor.isAtStart(e,t))Te(t).before('<span class="fr-marker"></span>'),Te(e).remove();else if(d.cursor.isAtEnd(e,t))Te(t).after('<span class="fr-marker"></span>'),Te(e).remove();else{for(var n=e,r="",i="";n=n.parentNode,r+=d.node.closeTagString(n),i=d.node.openTagString(n)+i,n!=t;);Te(e).replaceWith('<span id="fr-break"></span>');var a=d.node.openTagString(t)+Te(t).html()+d.node.closeTagString(t);a=a.replace(/<span id="fr-break"><\/span>/g,r+'<span class="fr-marker"></span>'+i),Te(t).replaceWith(a)}return d.$el.find(".fr-marker").get(0)},insertAtPoint:function(e){var t,n=e.clientX,r=e.clientY;c();var i=null;if("undefined"!=typeof d.doc.caretPositionFromPoint?(t=d.doc.caretPositionFromPoint(n,r),(i=d.doc.createRange()).setStart(t.offsetNode,t.offset),i.setEnd(t.offsetNode,t.offset)):"undefined"!=typeof d.doc.caretRangeFromPoint&&(t=d.doc.caretRangeFromPoint(n,r),(i=d.doc.createRange()).setStart(t.startContainer,t.startOffset),i.setEnd(t.startContainer,t.startOffset)),null!==i&&"undefined"!=typeof d.win.getSelection){var a=d.win.getSelection();a.removeAllRanges(),a.addRange(i)}else if("undefined"!=typeof d.doc.body.createTextRange)try{(i=d.doc.body.createTextRange()).moveToPoint(n,r);var o=i.duplicate();o.moveToPoint(n,r),i.setEndPoint("EndToEnd",o),i.select()}catch(s){return!1}l()},remove:c}},Te.FE.MODULES.selection=function(T){function s(){var e="";return T.win.getSelection?e=T.win.getSelection():T.doc.getSelection?e=T.doc.getSelection():T.doc.selection&&(e=T.doc.selection.createRange().text),e.toString()}function A(){return T.win.getSelection?T.win.getSelection():T.doc.getSelection?T.doc.getSelection():T.doc.selection.createRange()}function c(e){var t=A(),n=[];if(t&&t.getRangeAt&&t.rangeCount){n=[];for(var r=0;r<t.rangeCount;r++)n.push(t.getRangeAt(r))}else n=T.doc.createRange?[T.doc.createRange()]:[];return void 0!==e?n[e]:n}function C(){var e=A();try{e.removeAllRanges?e.removeAllRanges():e.empty?e.empty():e.clear&&e.clear()}catch(t){}}function f(e,t){var n=e;return n.nodeType==Node.ELEMENT_NODE&&0<n.childNodes.length&&n.childNodes[t]&&(n=n.childNodes[t]),n.nodeType==Node.TEXT_NODE&&(n=n.parentNode),n}function S(){if(T.$wp){T.markers.remove();var e,t,n=c(),r=[];for(t=0;t<n.length;t++)if(n[t].startContainer!==T.doc||T.browser.msie){var i=(e=n[t]).collapsed,a=T.markers.place(e,!0,t),o=T.markers.place(e,!1,t);if(void 0!==a&&a||!i||(Te(".fr-marker").remove(),T.selection.setAtEnd(T.el)),T.el.normalize(),T.browser.safari&&!i)try{(e=T.doc.createRange()).setStartAfter(a),e.setEndBefore(o),r.push(e)}catch(s){}}if(T.browser.safari&&r.length)for(T.selection.clear(),t=0;t<r.length;t++)T.selection.get().addRange(r[t])}}function R(){var e,t=T.el.querySelectorAll('.fr-marker[data-type="true"]');if(!T.$wp)return T.markers.remove(),!1;if(0===t.length)return!1;if(T.browser.msie||T.browser.edge)for(e=0;e<t.length;e++)t[e].style.display="inline-block";T.core.hasFocus()||T.browser.msie||T.browser.webkit||T.$el.focus(),C();var n=A();for(e=0;e<t.length;e++){var r=Te(t[e]).data("id"),i=t[e],a=T.doc.createRange(),o=T.$el.find('.fr-marker[data-type="false"][data-id="'+r+'"]');(T.browser.msie||T.browser.edge)&&o.css("display","inline-block");var s=null;if(0<o.length){o=o[0];try{for(var l,d=!1,c=i.nextSibling;c&&c.nodeType==Node.TEXT_NODE&&0===c.textContent.length;)c=(l=c).nextSibling,Te(l).remove();for(var f,p,u=o.nextSibling;u&&u.nodeType==Node.TEXT_NODE&&0===u.textContent.length;)u=(l=u).nextSibling,Te(l).remove();if(i.nextSibling==o||o.nextSibling==i){for(var h=i.nextSibling==o?i:o,g=h==i?o:i,m=h.previousSibling;m&&m.nodeType==Node.TEXT_NODE&&0===m.length;)m=(l=m).previousSibling,Te(l).remove();if(m&&m.nodeType==Node.TEXT_NODE)for(;m&&m.previousSibling&&m.previousSibling.nodeType==Node.TEXT_NODE;)m.previousSibling.textContent=m.previousSibling.textContent+m.textContent,m=m.previousSibling,Te(m.nextSibling).remove();for(var v=g.nextSibling;v&&v.nodeType==Node.TEXT_NODE&&0===v.length;)v=(l=v).nextSibling,Te(l).remove();if(v&&v.nodeType==Node.TEXT_NODE)for(;v&&v.nextSibling&&v.nextSibling.nodeType==Node.TEXT_NODE;)v.nextSibling.textContent=v.textContent+v.nextSibling.textContent,v=v.nextSibling,Te(v.previousSibling).remove();if(m&&(T.node.isVoid(m)||T.node.isBlock(m))&&(m=null),v&&(T.node.isVoid(v)||T.node.isBlock(v))&&(v=null),m&&v&&m.nodeType==Node.TEXT_NODE&&v.nodeType==Node.TEXT_NODE){Te(i).remove(),Te(o).remove();var E=m.textContent.length;m.textContent=m.textContent+v.textContent,Te(v).remove(),T.opts.htmlUntouched||T.spaces.normalize(m),a.setStart(m,E),a.setEnd(m,E),d=!0}else!m&&v&&v.nodeType==Node.TEXT_NODE?(Te(i).remove(),Te(o).remove(),T.opts.htmlUntouched||T.spaces.normalize(v),s=Te(T.doc.createTextNode("\u200b")),Te(v).before(s),a.setStart(v,0),a.setEnd(v,0),d=!0):!v&&m&&m.nodeType==Node.TEXT_NODE&&(Te(i).remove(),Te(o).remove(),T.opts.htmlUntouched||T.spaces.normalize(m),s=Te(T.doc.createTextNode("\u200b")),Te(m).after(s),a.setStart(m,m.textContent.length),a.setEnd(m,m.textContent.length),d=!0)}if(!d)(T.browser.chrome||T.browser.edge)&&i.nextSibling==o?(f=y(o,a,!0)||a.setStartAfter(o),p=y(i,a,!1)||a.setEndBefore(i)):(i.previousSibling==o&&(o=(i=o).nextSibling),o.nextSibling&&"BR"===o.nextSibling.tagName||!o.nextSibling&&T.node.isBlock(i.previousSibling)||i.previousSibling&&"BR"==i.previousSibling.tagName||(i.style.display="inline",o.style.display="inline",s=Te(T.doc.createTextNode("\u200b"))),f=y(i,a,!0)||Te(i).before(s)&&a.setStartBefore(i),p=y(o,a,!1)||Te(o).after(s)&&a.setEndAfter(o)),"function"==typeof f&&f(),"function"==typeof p&&p()}catch(b){}}s&&s.remove();try{n.addRange(a)}catch(b){}}T.markers.remove()}function y(e,t,n){var r,i=e.previousSibling,a=e.nextSibling;return i&&a&&i.nodeType==Node.TEXT_NODE&&a.nodeType==Node.TEXT_NODE?(r=i.textContent.length,n?(a.textContent=i.textContent+a.textContent,Te(i).remove(),Te(e).remove(),T.opts.htmlUntouched||T.spaces.normalize(a),function(){t.setStart(a,r)}):(i.textContent=i.textContent+a.textContent,Te(a).remove(),Te(e).remove(),T.opts.htmlUntouched||T.spaces.normalize(i),function(){t.setEnd(i,r)})):i&&!a&&i.nodeType==Node.TEXT_NODE?(r=i.textContent.length,n?(T.opts.htmlUntouched||T.spaces.normalize(i),function(){t.setStart(i,r)}):(T.opts.htmlUntouched||T.spaces.normalize(i),function(){t.setEnd(i,r)})):!(!a||i||a.nodeType!=Node.TEXT_NODE)&&(n?(T.opts.htmlUntouched||T.spaces.normalize(a),function(){t.setStart(a,0)}):(T.opts.htmlUntouched||T.spaces.normalize(a),function(){t.setEnd(a,0)}))}function L(){for(var e=c(),t=0;t<e.length;t++)if(!e[t].collapsed)return!1;return!0}function i(e){var t,n,r=!1,i=!1;if(T.win.getSelection){var a=T.win.getSelection();a.rangeCount&&((n=(t=a.getRangeAt(0)).cloneRange()).selectNodeContents(e),n.setEnd(t.startContainer,t.startOffset),r=""===n.toString(),n.selectNodeContents(e),n.setStart(t.endContainer,t.endOffset),i=""===n.toString())}else T.doc.selection&&"Control"!=T.doc.selection.type&&((n=(t=T.doc.selection.createRange()).duplicate()).moveToElementText(e),n.setEndPoint("EndToStart",t),r=""===n.text,n.moveToElementText(e),n.setEndPoint("StartToEnd",t),i=""===n.text);return{atStart:r,atEnd:i}}function _(e,t){void 0===t&&(t=!0);var n=Te(e).html();n&&n.replace(/\u200b/g,"").length!=n.length&&Te(e).html(n.replace(/\u200b/g,""));for(var r=T.node.contents(e),i=0;i<r.length;i++)r[i].nodeType!=Node.ELEMENT_NODE?Te(r[i]).remove():(_(r[i],0===i),0===i&&(t=!1));e.nodeType==Node.TEXT_NODE?Te(e).replaceWith('<span data-first="true" data-text="true"></span>'):t&&Te(e).attr("data-first",!0)}function N(){return 0===Te(this).find("fr-inner").length}function p(){try{if(!T.$wp)return!1;for(var e=c(0).commonAncestorContainer;e&&!T.node.isElement(e);)e=e.parentNode;return!!T.node.isElement(e)}catch(t){return!1}}function r(e,t){if(!e||0<e.getElementsByClassName("fr-marker").length)return!1;for(var n=e.firstChild;n&&(T.node.isBlock(n)||t&&!T.node.isVoid(n)&&n.nodeType==Node.ELEMENT_NODE);)n=(e=n).firstChild;e.innerHTML=Te.FE.MARKERS+e.innerHTML}function a(e,t){if(!e||0<e.getElementsByClassName("fr-marker").length)return!1;for(var n=e.lastChild;n&&(T.node.isBlock(n)||t&&!T.node.isVoid(n)&&n.nodeType==Node.ELEMENT_NODE);)n=(e=n).lastChild;var r=T.doc.createElement("SPAN");for(r.setAttribute("id","fr-sel-markers"),r.innerHTML=Te.FE.MARKERS;e.parentNode&&T.opts.htmlAllowedEmptyTags&&0<=T.opts.htmlAllowedEmptyTags.indexOf(e.tagName.toLowerCase());)e=e.parentNode;e.appendChild(r);var i=e.querySelector("#fr-sel-markers");i.outerHTML=i.innerHTML}return{text:s,get:A,ranges:c,clear:C,element:function(){var e=A();try{if(e.rangeCount){var t,n=c(0),r=n.startContainer;if(T.node.isElement(r)&&0===n.startOffset&&r.childNodes.length)for(;r.childNodes.length&&r.childNodes[0].nodeType===Node.ELEMENT_NODE;)r=r.childNodes[0];if(r.nodeType==Node.TEXT_NODE&&n.startOffset==(r.textContent||"").length&&r.nextSibling&&(r=r.nextSibling),r.nodeType==Node.ELEMENT_NODE){var i=!1;if(0<r.childNodes.length&&r.childNodes[n.startOffset]){for(t=r.childNodes[n.startOffset];t&&t.nodeType==Node.TEXT_NODE&&0===t.textContent.length;)t=t.nextSibling;if(t&&t.textContent.replace(/\u200B/g,"")===s().replace(/\u200B/g,"")&&(r=t,i=!0),!i&&1<r.childNodes.length&&0<n.startOffset&&r.childNodes[n.startOffset-1]){for(t=r.childNodes[n.startOffset-1];t&&t.nodeType==Node.TEXT_NODE&&0===t.textContent.length;)t=t.nextSibling;t&&t.textContent.replace(/\u200B/g,"")===s().replace(/\u200B/g,"")&&(r=t,i=!0)}}else!n.collapsed&&r.nextSibling&&r.nextSibling.nodeType==Node.ELEMENT_NODE&&(t=r.nextSibling)&&t.textContent.replace(/\u200B/g,"")===s().replace(/\u200B/g,"")&&(r=t,i=!0);!i&&0<r.childNodes.length&&Te(r.childNodes[0]).text().replace(/\u200B/g,"")===s().replace(/\u200B/g,"")&&["BR","IMG","HR"].indexOf(r.childNodes[0].tagName)<0&&(r=r.childNodes[0])}for(;r.nodeType!=Node.ELEMENT_NODE&&r.parentNode;)r=r.parentNode;for(var a=r;a&&"HTML"!=a.tagName;){if(a==T.el)return r;a=Te(a).parent()[0]}}}catch(o){}return T.el},endElement:function(){var e=A();try{if(e.rangeCount){var t,n=c(0),r=n.endContainer;if(r.nodeType==Node.ELEMENT_NODE){var i=!1;0<r.childNodes.length&&r.childNodes[n.endOffset]&&Te(r.childNodes[n.endOffset]).text()===s()?(r=r.childNodes[n.endOffset],i=!0):!n.collapsed&&r.previousSibling&&r.previousSibling.nodeType==Node.ELEMENT_NODE?(t=r.previousSibling)&&t.textContent.replace(/\u200B/g,"")===s().replace(/\u200B/g,"")&&(r=t,i=!0):!n.collapsed&&0<r.childNodes.length&&r.childNodes[n.endOffset]&&(t=r.childNodes[n.endOffset].previousSibling).nodeType==Node.ELEMENT_NODE&&t&&t.textContent.replace(/\u200B/g,"")===s().replace(/\u200B/g,"")&&(r=t,i=!0),!i&&0<r.childNodes.length&&Te(r.childNodes[r.childNodes.length-1]).text()===s()&&["BR","IMG","HR"].indexOf(r.childNodes[r.childNodes.length-1].tagName)<0&&(r=r.childNodes[r.childNodes.length-1])}for(r.nodeType==Node.TEXT_NODE&&0===n.endOffset&&r.previousSibling&&r.previousSibling.nodeType==Node.ELEMENT_NODE&&(r=r.previousSibling);r.nodeType!=Node.ELEMENT_NODE&&r.parentNode;)r=r.parentNode;for(var a=r;a&&"HTML"!=a.tagName;){if(a==T.el)return r;a=Te(a).parent()[0]}}}catch(o){}return T.el},save:S,restore:R,isCollapsed:L,isFull:function(){if(L())return!1;T.selection.save();var e,t=T.el.querySelectorAll("td, th, img, br");for(e=0;e<t.length;e++)t[e].nextSibling&&(t[e].innerHTML='<span class="fr-mk">'+Te.FE.INVISIBLE_SPACE+"</span>"+t[e].innerHTML);var n=!1,r=i(T.el);for(r.atStart&&r.atEnd&&(n=!0),t=T.el.querySelectorAll(".fr-mk"),e=0;e<t.length;e++)t[e].parentNode.removeChild(t[e]);return T.selection.restore(),n},inEditor:p,remove:function(){if(L())return!0;var t;S();var n=function(e){for(var t=e.previousSibling;t&&t.nodeType==Node.TEXT_NODE&&0===t.textContent.length;){var n=t;t=t.previousSibling,Te(n).remove()}return t},r=function(e){for(var t=e.nextSibling;t&&t.nodeType==Node.TEXT_NODE&&0===t.textContent.length;){var n=t;t=t.nextSibling,Te(n).remove()}return t},i=T.$el.find('.fr-marker[data-type="true"]');for(t=0;t<i.length;t++)for(var a=i[t];!(n(a)||T.node.isBlock(a.parentNode)||T.$el.is(a.parentNode)||T.node.hasClass(a.parentNode,"fr-inner"));)Te(a.parentNode).before(a);var o=T.$el.find('.fr-marker[data-type="false"]');for(t=0;t<o.length;t++){for(var s=o[t];!(r(s)||T.node.isBlock(s.parentNode)||T.$el.is(s.parentNode)||T.node.hasClass(s.parentNode,"fr-inner"));)Te(s.parentNode).after(s);s.parentNode&&T.node.isBlock(s.parentNode)&&T.node.isEmpty(s.parentNode)&&!T.$el.is(s.parentNode)&&!T.node.hasClass(s.parentNode,"fr-inner")&&T.opts.keepFormatOnDelete&&Te(s.parentNode).after(s)}if(function(){for(var e=T.$el.find(".fr-marker"),t=0;t<e.length;t++)if(Te(e[t]).parentsUntil('.fr-element, [contenteditable="true"]','[contenteditable="false"]').length)return!1;return!0}()){!function e(t,n){var r=T.node.contents(t.get(0));0<=["TD","TH"].indexOf(t.get(0).tagName)&&1==t.find(".fr-marker").length&&(T.node.hasClass(r[0],"fr-marker")||"BR"==r[0].tagName&&T.node.hasClass(r[0].nextElementSibling,"fr-marker"))&&t.attr("data-del-cell",!0);for(var i=0;i<r.length;i++){var a=r[i];T.node.hasClass(a,"fr-marker")?n=(n+1)%2:n?0<Te(a).find(".fr-marker").length?n=e(Te(a),n):["TD","TH"].indexOf(a.tagName)<0&&!T.node.hasClass(a,"fr-inner")?!T.opts.keepFormatOnDelete||0<T.$el.find("[data-first]").length||T.node.isVoid(a)?Te(a).remove():_(a):T.node.hasClass(a,"fr-inner")?0===Te(a).find(".fr-inner").length?Te(a).html("<br>"):Te(a).find(".fr-inner").filter(N).html("<br>"):(Te(a).empty(),Te(a).attr("data-del-cell",!0)):0<Te(a).find(".fr-marker").length&&(n=e(Te(a),n))}return n}(T.$el,0);var l=T.$el.find('[data-first="true"]');if(l.length)T.$el.find(".fr-marker").remove(),l.append(Te.FE.INVISIBLE_SPACE+Te.FE.MARKERS).removeAttr("data-first"),l.attr("data-text")&&l.replaceWith(l.html());else for(T.$el.find("table").filter(function(){return 0<Te(this).find("[data-del-cell]").length&&Te(this).find("[data-del-cell]").length==Te(this).find("td, th").length}).remove(),T.$el.find("[data-del-cell]").removeAttr("data-del-cell"),i=T.$el.find('.fr-marker[data-type="true"]'),t=0;t<i.length;t++){var d=i[t],c=d.nextSibling,f=T.$el.find('.fr-marker[data-type="false"][data-id="'+Te(d).data("id")+'"]').get(0);if(f){if(d&&(!c||c!=f)){var p=T.node.blockParent(d),u=T.node.blockParent(f),h=!1,g=!1;if(p&&0<=["UL","OL"].indexOf(p.tagName)&&(h=!(p=null)),u&&0<=["UL","OL"].indexOf(u.tagName)&&(g=!(u=null)),Te(d).after(f),p!=u)if(null!=p||h)if(null!=u||g||0!==Te(p).parentsUntil(T.$el,"table").length)p&&u&&0===Te(p).parentsUntil(T.$el,"table").length&&0===Te(u).parentsUntil(T.$el,"table").length&&0===Te(p).find(u).length&&0===Te(u).find(p).length&&(Te(p).append(Te(u).html()),Te(u).remove());else{for(c=p;!c.nextSibling&&c.parentNode!=T.el;)c=c.parentNode;for(c=c.nextSibling;c&&"BR"!=c.tagName;){var m=c.nextSibling;Te(p).append(c),c=m}c&&"BR"==c.tagName&&Te(c).remove()}else{var v=T.node.deepestParent(d);v?(Te(v).after(Te(u).html()),Te(u).remove()):0===Te(u).parentsUntil(T.$el,"table").length&&(Te(d).next().after(Te(u).html()),Te(u).remove())}}}else f=Te(d).clone().attr("data-type",!1),Te(d).after(f)}}T.$el.find("li:empty").remove(),T.opts.keepFormatOnDelete||T.html.fillEmptyBlocks(),T.html.cleanEmptyTags(!0),T.opts.htmlUntouched||(T.clean.lists(),T.$el.find("li:empty").append("<br>"),T.spaces.normalize());var E=T.$el.find(".fr-marker:last").get(0),b=T.$el.find(".fr-marker:first").get(0);void 0!==E&&void 0!==b&&!E.nextSibling&&b.previousSibling&&"BR"==b.previousSibling.tagName&&T.node.isElement(E.parentNode)&&T.node.isElement(b.parentNode)&&T.$el.append("<br>"),R()},blocks:function(){var e,t=[],n=A();if(p()&&n.rangeCount){var r=c();for(e=0;e<r.length;e++){var i,a=r[e],o=f(a.startContainer,a.startOffset),s=f(a.endContainer,a.endOffset);(T.node.isBlock(o)||T.node.hasClass(o,"fr-inner"))&&t.indexOf(o)<0&&t.push(o),(i=T.node.blockParent(o))&&t.indexOf(i)<0&&t.push(i);for(var l=[],d=o;d!==s&&d!==T.el;)l.indexOf(d)<0&&d.children&&d.children.length?(l.push(d),d=d.children[0]):d.nextSibling?d=d.nextSibling:d.parentNode&&(d=d.parentNode,l.push(d)),T.node.isBlock(d)&&l.indexOf(d)<0&&t.indexOf(d)<0&&(d!==s||0<a.endOffset)&&t.push(d);T.node.isBlock(s)&&t.indexOf(s)<0&&0<a.endOffset&&t.push(s),(i=T.node.blockParent(s))&&t.indexOf(i)<0&&t.push(i)}}for(e=t.length-1;0<e;e--)Te(t[e]).find(t).length&&t.splice(e,1);return t},info:i,setAtEnd:a,setAtStart:r,setBefore:function(e,t){void 0===t&&(t=!0);for(var n=e.previousSibling;n&&n.nodeType==Node.TEXT_NODE&&0===n.textContent.length;)n=n.previousSibling;return n?(T.node.isBlock(n)?a(n):"BR"==n.tagName?Te(n).before(Te.FE.MARKERS):Te(n).after(Te.FE.MARKERS),!0):!!t&&(T.node.isBlock(e)?r(e):Te(e).before(Te.FE.MARKERS),!0)},setAfter:function(e,t){void 0===t&&(t=!0);for(var n=e.nextSibling;n&&n.nodeType==Node.TEXT_NODE&&0===n.textContent.length;)n=n.nextSibling;return n?(T.node.isBlock(n)?r(n):Te(n).before(Te.FE.MARKERS),!0):!!t&&(T.node.isBlock(e)?a(e):Te(e).after(Te.FE.MARKERS),!0)},rangeElement:f}},Te.extend(Te.FE.DEFAULTS,{htmlAllowedTags:["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","br","button","canvas","caption","cite","code","col","colgroup","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meter","nav","noscript","object","ol","optgroup","option","output","p","param","pre","progress","queue","rp","rt","ruby","s","samp","script","style","section","select","small","source","span","strike","strong","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","var","video","wbr"],htmlRemoveTags:["script","style"],htmlAllowedAttrs:["accept","accept-charset","accesskey","action","align","allowfullscreen","allowtransparency","alt","aria-.*","async","autocomplete","autofocus","autoplay","autosave","background","bgcolor","border","charset","cellpadding","cellspacing","checked","cite","class","color","cols","colspan","content","contenteditable","contextmenu","controls","coords","data","data-.*","datetime","default","defer","dir","dirname","disabled","download","draggable","dropzone","enctype","for","form","formaction","frameborder","headers","height","hidden","high","href","hreflang","http-equiv","icon","id","ismap","itemprop","keytype","kind","label","lang","language","list","loop","low","max","maxlength","media","method","min","mozallowfullscreen","multiple","muted","name","novalidate","open","optimum","pattern","ping","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","reversed","rows","rowspan","sandbox","scope","scoped","scrolling","seamless","selected","shape","size","sizes","span","src","srcdoc","srclang","srcset","start","step","summary","spellcheck","style","tabindex","target","title","type","translate","usemap","value","valign","webkitallowfullscreen","width","wrap"],htmlAllowedStyleProps:[".*"],htmlAllowComments:!0,htmlUntouched:!1,fullPage:!1}),Te.FE.HTML5Map={B:"STRONG",I:"EM",STRIKE:"S"},Te.FE.MODULES.clean=function(p){var u,h,g,m;function i(e){if(e.nodeType==Node.ELEMENT_NODE&&e.getAttribute("class")&&0<=e.getAttribute("class").indexOf("fr-marker"))return!1;var t,n=p.node.contents(e),r=[];for(t=0;t<n.length;t++)n[t].nodeType!=Node.ELEMENT_NODE||p.node.isVoid(n[t])?n[t].nodeType==Node.TEXT_NODE&&(n[t].textContent=n[t].textContent.replace(/\u200b/g,"")):n[t].textContent.replace(/\u200b/g,"").length!=n[t].textContent.length&&i(n[t]);if(e.nodeType==Node.ELEMENT_NODE&&!p.node.isVoid(e)&&(e.normalize(),n=p.node.contents(e),r=e.querySelectorAll(".fr-marker"),n.length-r.length==0)){for(t=0;t<n.length;t++)if(n[t].nodeType==Node.ELEMENT_NODE&&(n[t].getAttribute("class")||"").indexOf("fr-marker")<0)return!1;for(t=0;t<r.length;t++)e.parentNode.insertBefore(r[t].cloneNode(!0),e);return e.parentNode.removeChild(e),!1}}function s(e,t){if(e.nodeType==Node.COMMENT_NODE)return"\x3c!--"+e.nodeValue+"--\x3e";if(e.nodeType==Node.TEXT_NODE)return t?e.textContent.replace(/\&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):e.textContent.replace(/\&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\u00A0/g,"&nbsp;").replace(/\u0009/g,"");if(e.nodeType!=Node.ELEMENT_NODE)return e.outerHTML;if(e.nodeType==Node.ELEMENT_NODE&&0<=["STYLE","SCRIPT","NOSCRIPT"].indexOf(e.tagName))return e.outerHTML;if(e.nodeType==Node.ELEMENT_NODE&&"svg"==e.tagName){var n=document.createElement("div"),r=e.cloneNode(!0);return n.appendChild(r),n.innerHTML}if("IFRAME"==e.tagName)return e.outerHTML.replace(/\&lt;/g,"<").replace(/\&gt;/g,">");var i=e.childNodes;if(0===i.length)return e.outerHTML;for(var a="",o=0;o<i.length;o++)"PRE"==e.tagName&&(t=!0),a+=s(i[o],t);return p.node.openTagString(e)+a+p.node.closeTagString(e)}var o=[];function v(e){var t=e.replace(/;;/gi,";");return";"!=(t=t.replace(/^;/gi,"")).charAt(t.length)&&(t+=";"),t}function l(e){var t;for(t in e)if(e.hasOwnProperty(t)){var n=t.match(g),r=null;"style"==t&&p.opts.htmlAllowedStyleProps.length&&(r=e[t].match(m)),n&&r?e[t]=v(r.join(";")):n&&("style"!=t||r)||delete e[t]}for(var i="",a=Object.keys(e).sort(),o=0;o<a.length;o++)e[t=a[o]].indexOf('"')<0?i+=" "+t+'="'+e[t]+'"':i+=" "+t+"='"+e[t]+"'";return i}function d(e,t){var n,r=document.implementation.createHTMLDocument("Froala DOC").createElement("DIV");Te(r).append(e);var i="";if(r){var a=p.node.contents(r);for(n=0;n<a.length;n++)t(a[n]);for(a=p.node.contents(r),n=0;n<a.length;n++)i+=s(a[n])}return i}function c(e,t,n){o=[];var r=e=e.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,function(e){return o.push(e),"[FROALA.EDITOR.SCRIPT "+(o.length-1)+"]"}).replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi,function(e){return o.push(e),"[FROALA.EDITOR.NOSCRIPT "+(o.length-1)+"]"}).replace(/<meta((?:[\w\W]*?)) http-equiv="/g,'<meta$1 data-fr-http-equiv="').replace(/<img((?:[\w\W]*?)) src="/g,'<img$1 data-fr-src="').replace(/<video((?:[\w\W]*?)) src="/g,'<video$1 data-fr-src="'),i=null;p.opts.fullPage&&(r=p.html.extractNode(e,"body")||(0<=e.indexOf("<body")?"":e),n&&(i=p.html.extractNode(e,"head")||"")),r=d(r,t),i&&(i=d(i,t));var a=function(e,t,n){if(p.opts.fullPage){var r=p.html.extractDoctype(n),i=l(p.html.extractNodeAttrs(n,"html"));return t=null==t?p.html.extractNode(n,"head")||"<title></title>":t,r+"<html"+i+"><head"+l(p.html.extractNodeAttrs(n,"head"))+">"+t+"</head><body"+l(p.html.extractNodeAttrs(n,"body"))+">"+e+"</body></html>"}return e}(r,i,e);return a.replace(/\[FROALA\.EDITOR\.SCRIPT ([\d]*)\]/gi,function(e,t){return 0<=p.opts.htmlRemoveTags.indexOf("script")?"":o[parseInt(t,10)]}).replace(/\[FROALA\.EDITOR\.NOSCRIPT ([\d]*)\]/gi,function(e,t){return 0<=p.opts.htmlRemoveTags.indexOf("noscript")?"":o[parseInt(t,10)].replace(/\&lt;/g,"<").replace(/\&gt;/g,">")}).replace(/<img((?:[\w\W]*?)) data-fr-src="/g,'<img$1 src="').replace(/<video((?:[\w\W]*?)) data-fr-src="/g,'<video$1 src="')}function E(e){var t=p.doc.createElement("DIV");return t.innerText=e,t.textContent}function f(e){for(var t=p.node.contents(e),n=0;n<t.length;n++)t[n].nodeType!=Node.TEXT_NODE&&f(t[n]);!function(e){if("SPAN"==e.tagName&&0<=(e.getAttribute("class")||"").indexOf("fr-marker"))return;var t,n;if("PRE"==e.tagName&&0<=(n=(t=e).innerHTML).indexOf("\n")&&(t.innerHTML=n.replace(/\n/g,"<br>")),e.nodeType==Node.ELEMENT_NODE&&(e.getAttribute("data-fr-src")&&0!==e.getAttribute("data-fr-src").indexOf("blob:")&&e.setAttribute("data-fr-src",p.helpers.sanitizeURL(E(e.getAttribute("data-fr-src")))),e.getAttribute("href")&&e.setAttribute("href",p.helpers.sanitizeURL(E(e.getAttribute("href")))),e.getAttribute("src")&&e.setAttribute("src",p.helpers.sanitizeURL(E(e.getAttribute("src")))),e.getAttribute("data")&&e.setAttribute("data",p.helpers.sanitizeURL(E(e.getAttribute("data")))),0<=["TABLE","TBODY","TFOOT","TR"].indexOf(e.tagName)&&(e.innerHTML=e.innerHTML.trim())),!p.opts.pasteAllowLocalImages&&e.nodeType==Node.ELEMENT_NODE&&"IMG"==e.tagName&&e.getAttribute("data-fr-src")&&0===e.getAttribute("data-fr-src").indexOf("file://"))return e.parentNode.removeChild(e);if(e.nodeType==Node.ELEMENT_NODE&&Te.FE.HTML5Map[e.tagName]&&""===p.node.attributes(e)){var r=Te.FE.HTML5Map[e.tagName],i="<"+r+">"+e.innerHTML+"</"+r+">";e.insertAdjacentHTML("beforebegin",i),(e=e.previousSibling).parentNode.removeChild(e.nextSibling)}if(p.opts.htmlAllowComments||e.nodeType!=Node.COMMENT_NODE)if(e.tagName&&e.tagName.match(h))e.parentNode.removeChild(e);else if(e.tagName&&!e.tagName.match(u)){if("svg"===e.tagName)e.parentNode.removeChild(e);else if(!p.browser.safari||"path"!=e.tagName||!e.parentNode||"svg"!=e.parentNode.tagName)try{e.outerHTML=e.innerHTML}catch(f){}}else{var a=e.attributes;if(a)for(var o=a.length-1;0<=o;o--){var s=a[o],l=s.nodeName&&s.nodeName.trim(),d=l.match(g),c=null;"style"==l&&p.opts.htmlAllowedStyleProps.length&&(c=s.value.match(m)),d&&c?s.value=v(c.join(";")):d&&("style"!=l||c)||e.removeAttribute(l)}}else 0!==e.data.indexOf("[FROALA.EDITOR")&&e.parentNode.removeChild(e)}(e)}return{_init:function(){p.opts.fullPage&&Te.merge(p.opts.htmlAllowedTags,["head","title","style","link","base","body","html","meta"])},html:function(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r=!1);var i,a=Te.merge([],p.opts.htmlAllowedTags);for(i=0;i<t.length;i++)0<=a.indexOf(t[i])&&a.splice(a.indexOf(t[i]),1);var o=Te.merge([],p.opts.htmlAllowedAttrs);for(i=0;i<n.length;i++)0<=o.indexOf(n[i])&&o.splice(o.indexOf(n[i]),1);return o.push("data-fr-.*"),o.push("fr-.*"),u=new RegExp("^"+a.join("$|^")+"$","gi"),g=new RegExp("^"+o.join("$|^")+"$","gi"),h=new RegExp("^"+p.opts.htmlRemoveTags.join("$|^")+"$","gi"),m=p.opts.htmlAllowedStyleProps.length?new RegExp("((^|;|\\s)"+p.opts.htmlAllowedStyleProps.join(":.+?(?=;|$))|((^|;|\\s)")+":.+?(?=(;)|$))","gi"):null,e=c(e,f,!0)},toHTML5:function(){var e=p.el.querySelectorAll(Object.keys(Te.FE.HTML5Map).join(","));if(e.length){var t=!1;p.el.querySelector(".fr-marker")||(p.selection.save(),t=!0);for(var n=0;n<e.length;n++)""===p.node.attributes(e[n])&&Te(e[n]).replaceWith("<"+Te.FE.HTML5Map[e[n].tagName]+">"+e[n].innerHTML+"</"+Te.FE.HTML5Map[e[n].tagName]+">");t&&p.selection.restore()}},tables:function(){!function(){for(var e=p.el.querySelectorAll("tr"),t=0;t<e.length;t++){for(var n=e[t].children,r=!0,i=0;i<n.length;i++)if("TH"!=n[i].tagName){r=!1;break}if(!1!==r&&0!==n.length){for(var a=e[t];a&&"TABLE"!=a.tagName&&"THEAD"!=a.tagName;)a=a.parentNode;var o=a;"THEAD"!=o.tagName&&(o=p.doc.createElement("THEAD"),a.insertBefore(o,a.firstChild)),o.appendChild(e[t])}}}()},lists:function(){!function(){var e,t=[];do{if(t.length){var n=t[0],r=p.doc.createElement("ul");n.parentNode.insertBefore(r,n);do{var i=n;n=n.nextSibling,r.appendChild(i)}while(n&&"LI"==n.tagName)}t=[];for(var a=p.el.querySelectorAll("li"),o=0;o<a.length;o++)e=a[o],p.node.isList(e.parentNode)||t.push(a[o])}while(0<t.length)}(),function(){for(var e=p.el.querySelectorAll("ol + ol, ul + ul"),t=0;t<e.length;t++){var n=e[t];if(p.node.isList(n.previousSibling)&&p.node.openTagString(n)==p.node.openTagString(n.previousSibling)){for(var r=p.node.contents(n),i=0;i<r.length;i++)n.previousSibling.appendChild(r[i]);n.parentNode.removeChild(n)}}}(),function(){for(var e=p.el.querySelectorAll("ul, ol"),t=0;t<e.length;t++)for(var n=p.node.contents(e[t]),r=null,i=n.length-1;0<=i;i--)"LI"!=n[i].tagName&&"UL"!=n[i].tagName&&"OL"!=n[i].tagName?(r||(r=Te("<li>")).insertBefore(n[i]),r.prepend(n[i])):r=null}(),function(){var e,t,n;do{t=!1;var r=p.el.querySelectorAll("li:empty");for(e=0;e<r.length;e++)r[e].parentNode.removeChild(r[e]);var i=p.el.querySelectorAll("ul, ol");for(e=0;e<i.length;e++)(n=i[e]).querySelector("LI")||(t=!0,n.parentNode.removeChild(n))}while(!0===t)}(),function(){for(var e=p.el.querySelectorAll("ul > ul, ol > ol, ul > ol, ol > ul"),t=0;t<e.length;t++){var n=e[t],r=n.previousSibling;r&&("LI"==r.tagName?r.appendChild(n):Te(n).wrap("<li></li>"))}}(),function(){for(var e=p.el.querySelectorAll("li > ul, li > ol"),t=0;t<e.length;t++){var n=e[t];if(n.nextSibling){var r=n.nextSibling,i=Te("<li>");Te(n.parentNode).after(i);do{var a=r;r=r.nextSibling,i.append(a)}while(r)}}}(),function(){for(var e=p.el.querySelectorAll("li > ul, li > ol"),t=0;t<e.length;t++){var n=e[t];if(p.node.isFirstSibling(n))Te(n).before("<br/>");else if(n.previousSibling&&"BR"==n.previousSibling.tagName){for(var r=n.previousSibling.previousSibling;r&&p.node.hasClass(r,"fr-marker");)r=r.previousSibling;r&&"BR"!=r.tagName&&Te(n.previousSibling).remove()}}}(),function(){for(var e=p.el.querySelectorAll("li:empty"),t=0;t<e.length;t++)Te(e[t]).remove()}()},invisibleSpaces:function(e){return e.replace(/\u200b/g,"").length==e.length?e:p.clean.exec(e,i)},exec:c}},Te.FE.MODULES.spaces=function(d){function r(e,t){var n=e.previousSibling,r=e.nextSibling,i=e.textContent,a=e.parentNode,o=[Te.FE.ENTER_P,Te.FE.ENTER_DIV,Te.FE.ENTER_BR];if(!d.html.isPreformatted(a)){t&&(i=i.replace(/[\f\n\r\t\v ]{2,}/g," "),r&&"BR"!==r.tagName&&!d.node.isBlock(r)||!(d.node.isBlock(a)||d.node.isLink(a)&&!a.nextSibling||d.node.isElement(a))||(i=i.replace(/[\f\n\r\t\v ]{1,}$/g,"")),n&&"BR"!==n.tagName&&!d.node.isBlock(n)||!(d.node.isBlock(a)||d.node.isLink(a)&&!a.previousSibling||d.node.isElement(a))||(i=i.replace(/^[\f\n\r\t\v ]{1,}/g,"")),(d.node.isBlock(r)||d.node.isBlock(n))&&(i=i.replace(/^[\f\n\r\t\v ]{1,}/g,""))," "===i&&(n&&d.node.isVoid(n)||r&&d.node.isVoid(r))&&!(n&&r&&d.node.isVoid(n)||r&&n&&d.node.isVoid(r))&&(i="")),(!n&&d.node.isBlock(r)||!r&&d.node.isBlock(n))&&d.node.isBlock(a)&&a!==d.el&&(i=i.replace(/^[\f\n\r\t\v ]{1,}/g,"")),t||(i=i.replace(new RegExp(Te.FE.UNICODE_NBSP,"g")," "));for(var s="",l=0;l<i.length;l++)32!=i.charCodeAt(l)||0!==l&&32!=s.charCodeAt(l-1)||(n&&r&&d.node.isVoid(n)||n&&r&&d.node.isVoid(r))&&null===i.match(/^(?!\s*$).+/)?s+=i[l]:s+=Te.FE.UNICODE_NBSP;(!r||r&&d.node.isBlock(r)||r&&r.nodeType==Node.ELEMENT_NODE&&d.win.getComputedStyle(r)&&"block"==d.win.getComputedStyle(r).display)&&(!d.node.isVoid(n)||n&&-1!==["P","DIV","BR"].indexOf(n.tagName)&&-1!==o.indexOf(d.opts.enter))&&(s=s.replace(/ $/,Te.FE.UNICODE_NBSP)),!n||d.node.isVoid(n)||d.node.isBlock(n)||1!==(s=s.replace(/^\u00A0([^ $])/," $1")).length||160!==s.charCodeAt(0)||!r||d.node.isVoid(r)||d.node.isBlock(r)||d.node.hasClass(n,"fr-marker")&&d.node.hasClass(r,"fr-marker")||(s=" "),t||(s=s.replace(/([^ \u00A0])\u00A0([^ \u00A0])/g,"$1 $2")),e.textContent!=s&&(e.textContent=s)}}function l(e,t){if(void 0!==e&&e||(e=d.el),void 0===t&&(t=!1),!e.getAttribute||"false"!=e.getAttribute("contenteditable"))if(e.nodeType==Node.TEXT_NODE)r(e,t);else if(e.nodeType==Node.ELEMENT_NODE)for(var n=d.doc.createTreeWalker(e,NodeFilter.SHOW_TEXT,d.node.filter(function(e){for(var t=e.parentNode;t&&t!==d.el;){if("STYLE"==t.tagName||"IFRAME"==t.tagName)return!1;if("PRE"===t.tagName)return!1;t=t.parentNode}return null!=e.textContent.match(/([ \u00A0\f\n\r\t\v]{2,})|(^[ \u00A0\f\n\r\t\v]{1,})|([ \u00A0\f\n\r\t\v]{1,}$)/g)&&!d.node.hasClass(e.parentNode,"fr-marker")}),!1);n.nextNode();)r(n.currentNode,t)}return{normalize:l,normalizeAroundCursor:function(){for(var e=[],t=d.el.querySelectorAll(".fr-marker"),n=0;n<t.length;n++){for(var r=null,i=d.node.blockParent(t[n]),a=(r=i||t[n]).nextSibling,o=r.previousSibling;a&&"BR"==a.tagName;)a=a.nextSibling;for(;o&&"BR"==o.tagName;)o=o.previousSibling;r&&e.indexOf(r)<0&&e.push(r),o&&e.indexOf(o)<0&&e.push(o),a&&e.indexOf(a)<0&&e.push(a)}for(var s=0;s<e.length;s++)l(e[s])}}},Te.FE.UNICODE_NBSP=String.fromCharCode(160),Te.FE.VOID_ELEMENTS=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"],Te.FE.BLOCK_TAGS=["address","article","aside","audio","blockquote","canvas","details","dd","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","nav","noscript","ol","output","p","pre","section","table","tbody","td","tfoot","th","thead","tr","ul","video"],Te.extend(Te.FE.DEFAULTS,{htmlAllowedEmptyTags:["textarea","a","iframe","object","video","style","script",".fa",".fr-emoticon",".fr-inner","path","line"],htmlDoNotWrapTags:["script","style"],htmlSimpleAmpersand:!1,htmlIgnoreCSSProperties:[],htmlExecuteScripts:!0}),Te.FE.MODULES.html=function(w){function c(){return w.opts.enter==Te.FE.ENTER_P?"p":w.opts.enter==Te.FE.ENTER_DIV?"div":w.opts.enter==Te.FE.ENTER_BR?null:void 0}function s(e,t){return!(!e||e===w.el)&&(t?-1!=["PRE","SCRIPT","STYLE"].indexOf(e.tagName)||s(e.parentNode,t):-1!=["PRE","SCRIPT","STYLE"].indexOf(e.tagName))}function a(e){var t,n=[],r=[];if(e){var i=w.el.querySelectorAll(".fr-marker");for(t=0;t<i.length;t++){var a=w.node.blockParent(i[t])||i[t];if(a){var o=a.nextSibling,s=a.previousSibling;a&&r.indexOf(a)<0&&w.node.isBlock(a)&&r.push(a),s&&w.node.isBlock(s)&&r.indexOf(s)<0&&r.push(s),o&&w.node.isBlock(o)&&r.indexOf(o)<0&&r.push(o)}}}else r=w.el.querySelectorAll(p());var l=p();for(l+=","+Te.FE.VOID_ELEMENTS.join(","),l+=", .fr-inner",l+=","+w.opts.htmlAllowedEmptyTags.join(":not(.fr-marker),")+":not(.fr-marker)",t=r.length-1;0<=t;t--)if(!(r[t].textContent&&0<r[t].textContent.replace(/\u200B|\n/g,"").length||0<r[t].querySelectorAll(l).length)){for(var d=w.node.contents(r[t]),c=!1,f=0;f<d.length;f++)if(d[f].nodeType!=Node.COMMENT_NODE&&d[f].textContent&&0<d[f].textContent.replace(/\u200B|\n/g,"").length){c=!0;break}c||n.push(r[t])}return n}function p(){return Te.FE.BLOCK_TAGS.join(", ")}function e(e){var t,n,r=Te.merge([],Te.FE.VOID_ELEMENTS);r=Te.merge(r,w.opts.htmlAllowedEmptyTags),r=void 0===e?Te.merge(r,Te.FE.BLOCK_TAGS):Te.merge(r,Te.FE.NO_DELETE_TAGS),t=w.el.querySelectorAll("*:empty:not("+r.join("):not(")+"):not(.fr-marker)");do{n=!1;for(var i=0;i<t.length;i++)0!==t[i].attributes.length&&void 0===t[i].getAttribute("href")||(t[i].parentNode.removeChild(t[i]),n=!0);t=w.el.querySelectorAll("*:empty:not("+r.join("):not(")+"):not(.fr-marker)")}while(t.length&&n)}function o(e,t){var n=c();if(t&&(n="div"),n){for(var r=w.doc.createDocumentFragment(),i=null,a=!1,o=e.firstChild,s=!1;o;){var l=o.nextSibling;if(o.nodeType==Node.ELEMENT_NODE&&(w.node.isBlock(o)||0<=w.opts.htmlDoNotWrapTags.indexOf(o.tagName.toLowerCase())&&!w.node.hasClass(o,"fr-marker")))i=null,r.appendChild(o.cloneNode(!0));else if(o.nodeType!=Node.ELEMENT_NODE&&o.nodeType!=Node.TEXT_NODE)i=null,r.appendChild(o.cloneNode(!0));else if("BR"==o.tagName)null==i?(i=w.doc.createElement(n),s=!0,t&&(i.setAttribute("class","fr-temp-div"),i.setAttribute("data-empty",!0)),i.appendChild(o.cloneNode(!0)),r.appendChild(i)):!1===a&&(i.appendChild(w.doc.createElement("br")),t&&(i.setAttribute("class","fr-temp-div"),i.setAttribute("data-empty",!0))),i=null;else{var d=o.textContent;o.nodeType!==Node.TEXT_NODE||0<d.replace(/\n/g,"").replace(/(^ *)|( *$)/g,"").length||d.replace(/(^ *)|( *$)/g,"").length&&d.indexOf("\n")<0?(null==i&&(i=w.doc.createElement(n),s=!0,t&&i.setAttribute("class","fr-temp-div"),r.appendChild(i),a=!1),i.appendChild(o.cloneNode(!0)),a||w.node.hasClass(o,"fr-marker")||o.nodeType==Node.TEXT_NODE&&0===d.replace(/ /g,"").length||(a=!0)):s=!0}o=l}s&&(e.innerHTML="",e.appendChild(r))}}function l(e,t){for(var n=e.length-1;0<=n;n--)o(e[n],t)}function t(e,t,n,r,i){if(!w.$wp)return!1;void 0===e&&(e=!1),void 0===t&&(t=!1),void 0===n&&(n=!1),void 0===r&&(r=!1),void 0===i&&(i=!1);var a=w.$wp.scrollTop();o(w.el,e),r&&l(w.el.querySelectorAll(".fr-inner"),e),t&&l(w.el.querySelectorAll("td, th"),e),n&&l(w.el.querySelectorAll("blockquote"),e),i&&l(w.el.querySelectorAll("li"),e),a!=w.$wp.scrollTop()&&w.$wp.scrollTop(a)}function n(e){if(void 0===e&&(e=w.el),e&&0<=["SCRIPT","STYLE","PRE"].indexOf(e.tagName))return!1;for(var t=w.doc.createTreeWalker(e,NodeFilter.SHOW_TEXT,w.node.filter(function(e){return null!=e.textContent.match(/([ \n]{2,})|(^[ \n]{1,})|([ \n]{1,}$)/g)}),!1);t.nextNode();){var n=t.currentNode;if(!s(n.parentNode,!0)){var r=w.node.isBlock(n.parentNode)||w.node.isElement(n.parentNode),i=n.textContent.replace(/(?!^)( ){2,}(?!$)/g," ").replace(/\n/g," ").replace(/^[ ]{2,}/g," ").replace(/[ ]{2,}$/g," ");if(r){var a=n.previousSibling,o=n.nextSibling;a&&o&&" "==i?i=w.node.isBlock(a)&&w.node.isBlock(o)?"":" ":(a||(i=i.replace(/^ */,"")),o||(i=i.replace(/ *$/,"")))}n.textContent=i}}}function r(e,t,n){var r=new RegExp(t,"gi").exec(e);return r?r[n]:null}function O(e){var t=e.doctype,n="<!DOCTYPE html>";return t&&(n="<!DOCTYPE "+t.name+(t.publicId?' PUBLIC "'+t.publicId+'"':"")+(!t.publicId&&t.systemId?" SYSTEM":"")+(t.systemId?' "'+t.systemId+'"':"")+">"),n}function d(e){var t=e.parentNode;if(t&&(w.node.isBlock(t)||w.node.isElement(t))&&["TD","TH"].indexOf(t.tagName)<0){for(var n=e.previousSibling,r=e.nextSibling;n&&(n.nodeType==Node.TEXT_NODE&&0===n.textContent.replace(/\n|\r/g,"").length||w.node.hasClass(n,"fr-tmp"));)n=n.previousSibling;if(r)return!1;n&&t&&"BR"!=n.tagName&&!w.node.isBlock(n)&&!r&&0<t.textContent.replace(/\u200B/g,"").length&&0<n.textContent.length&&!w.node.hasClass(n,"fr-marker")&&(w.el==t&&!r&&w.opts.enter==Te.FE.ENTER_BR&&w.browser.msie||e.parentNode.removeChild(e))}else!t||w.node.isBlock(t)||w.node.isElement(t)||e.previousSibling||e.nextSibling||!w.node.isDeletable(e.parentNode)||d(e.parentNode)}function u(){w.opts.htmlUntouched||(e(),t(),n(),w.spaces.normalize(null,!0),w.html.fillEmptyBlocks(),w.clean.lists(),w.clean.tables(),w.clean.toHTML5(),w.html.cleanBRs()),w.selection.restore(),i(),w.placeholder.refresh()}function i(){w.node.isEmpty(w.el)&&(null!=c()?w.el.querySelector(p())||w.el.querySelector(w.opts.htmlDoNotWrapTags.join(":not(.fr-marker),")+":not(.fr-marker)")||(w.core.hasFocus()?(w.$el.html("<"+c()+">"+Te.FE.MARKERS+"<br/></"+c()+">"),w.selection.restore()):w.$el.html("<"+c()+"><br/></"+c()+">")):w.el.querySelector("*:not(.fr-marker):not(br)")||(w.core.hasFocus()?(w.$el.html(Te.FE.MARKERS+"<br/>"),w.selection.restore()):w.$el.html("<br/>")))}function h(e,t){return r(e,"<"+t+"[^>]*?>([\\w\\W]*)</"+t+">",1)}function g(e,t){var n=Te("<div "+(r(e,"<"+t+"([^>]*?)>",1)||"")+">");return w.node.rawAttributes(n.get(0))}function m(e){return(r(e,"<!DOCTYPE([^>]*?)>",0)||"<!DOCTYPE html>").replace(/\n/g," ").replace(/ {2,}/g," ")}function v(e,t){w.opts.htmlExecuteScripts?e.html(t):e.get(0).innerHTML=t}function I(e){var t;(t=/:not\(([^\)]*)\)/g).test(e)&&(e=e.replace(t,"     $1 "));var n=100*(e.match(/(#[^\s\+>~\.\[:]+)/g)||[]).length+10*(e.match(/(\[[^\]]+\])/g)||[]).length+10*(e.match(/(\.[^\s\+>~\.\[:]+)/g)||[]).length+10*(e.match(/(:[\w-]+\([^\)]*\))/gi)||[]).length+10*(e.match(/(:[^\s\+>~\.\[:]+)/g)||[]).length+(e.match(/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi)||[]).length;return n+=((e=(e=e.replace(/[\*\s\+>~]/g," ")).replace(/[#\.]/g," ")).match(/([^\s\+>~\.\[:]+)/g)||[]).length}function k(e){if(w.events.trigger("html.processGet",[e]),e&&e.getAttribute&&""===e.getAttribute("class")&&e.removeAttribute("class"),e&&e.getAttribute&&""===e.getAttribute("style")&&e.removeAttribute("style"),e&&e.nodeType==Node.ELEMENT_NODE){var t,n=e.querySelectorAll('[class=""],[style=""]');for(t=0;t<n.length;t++){var r=n[t];""===r.getAttribute("class")&&r.removeAttribute("class"),""===r.getAttribute("style")&&r.removeAttribute("style")}if("BR"===e.tagName)d(e);else{var i=e.querySelectorAll("br");for(t=0;t<i.length;t++)d(i[t])}}}function D(e,t){return e[3]-t[3]}function f(e){var t=w.doc.createElement("div");return t.innerHTML=e,null!==t.querySelector(p())}function E(e){var t=null;if(void 0===e&&(t=w.selection.element()),w.opts.keepFormatOnDelete)return!1;var n,r,i=t?(t.textContent.match(/\u200B/g)||[]).length-t.querySelectorAll(".fr-marker").length:0;if((w.el.textContent.match(/\u200B/g)||[]).length-w.el.querySelectorAll(".fr-marker").length==i)return!1;do{r=!1,n=w.el.querySelectorAll("*:not(.fr-marker)");for(var a=0;a<n.length;a++){var o=n[a];if(t!=o){var s=o.textContent;0===o.children.length&&1===s.length&&8203==s.charCodeAt(0)&&"TD"!==o.tagName&&(Te(o).remove(),r=!0)}}}while(r)}return{defaultTag:c,isPreformatted:s,emptyBlocks:a,emptyBlockTagsQuery:function(){return Te.FE.BLOCK_TAGS.join(":empty, ")+":empty"},blockTagsQuery:p,fillEmptyBlocks:function(e){var t=a(e);w.node.isEmpty(w.el)&&w.opts.enter===Te.FE.ENTER_BR&&t.push(w.el);for(var n=0;n<t.length;n++){var r=t[n];"false"===r.getAttribute("contenteditable")||r.querySelector(w.opts.htmlAllowedEmptyTags.join(":not(.fr-marker),")+":not(.fr-marker)")||w.node.isVoid(r)||"TABLE"==r.tagName||"TBODY"==r.tagName||"TR"==r.tagName||"UL"==r.tagName||"OL"==r.tagName||r.querySelector("br")||r.appendChild(w.doc.createElement("br"))}if(w.browser.msie&&w.opts.enter==Te.FE.ENTER_BR){var i=w.node.contents(w.el);i.length&&i[i.length-1].nodeType==Node.TEXT_NODE&&w.$el.append("<br>")}},cleanEmptyTags:e,cleanWhiteTags:E,cleanBlankSpaces:n,blocks:function(){return w.$el.get(0).querySelectorAll(p())},getDoctype:O,set:function(e){var t,n,r,i=w.clean.html((e||"").trim(),[],[],w.opts.fullPage);if(w.opts.fullPage){var a=h(i,"body")||(0<=i.indexOf("<body")?"":i),o=g(i,"body"),s=h(i,"head")||"<title></title>",l=g(i,"head"),d=Te("<div>").append(s).contents().each(function(){(this.nodeType==Node.COMMENT_NODE||0<=["BASE","LINK","META","NOSCRIPT","SCRIPT","STYLE","TEMPLATE","TITLE"].indexOf(this.tagName))&&this.parentNode.removeChild(this)}).end().html().trim();s=Te("<div>").append(s).contents().map(function(){return this.nodeType==Node.COMMENT_NODE?"\x3c!--"+this.nodeValue+"--\x3e":0<=["BASE","LINK","META","NOSCRIPT","SCRIPT","STYLE","TEMPLATE","TITLE"].indexOf(this.tagName)?this.outerHTML:""}).toArray().join("");var c=m(i),f=g(i,"html");v(w.$el,d+"\n"+a),w.node.clearAttributes(w.el),w.$el.attr(o),w.$el.addClass("fr-view"),w.$el.attr("spellcheck",w.opts.spellcheck),w.$el.attr("dir",w.opts.direction),v(w.$head,s),w.node.clearAttributes(w.$head.get(0)),w.$head.attr(l),w.node.clearAttributes(w.$html.get(0)),w.$html.attr(f),w.iframe_document.doctype.parentNode.replaceChild((t=c,n=w.iframe_document,(r=t.match(/<!DOCTYPE ?([^ ]*) ?([^ ]*) ?"?([^"]*)"? ?"?([^"]*)"?>/i))?n.implementation.createDocumentType(r[1],r[3],r[4]):n.implementation.createDocumentType("html")),w.iframe_document.doctype)}else v(w.$el,i);var p=w.edit.isDisabled();w.edit.on(),w.core.injectStyle(w.opts.iframeDefaultStyle+w.opts.iframeStyle),u(),w.opts.useClasses||(w.$el.find("[fr-original-class]").each(function(){this.setAttribute("class",this.getAttribute("fr-original-class")),this.removeAttribute("fr-original-class")}),w.$el.find("[fr-original-style]").each(function(){this.setAttribute("style",this.getAttribute("fr-original-style")),this.removeAttribute("fr-original-style")})),p&&w.edit.off(),w.events.trigger("html.set")},get:function(e,t){if(!w.$wp)return w.$oel.clone().removeClass("fr-view").removeAttr("contenteditable").get(0).outerHTML;var n="";w.events.trigger("html.beforeGet");var r,i,a=[],o={},s=[],l=w.el.querySelectorAll("input, textarea");for(r=0;r<l.length;r++)l[r].setAttribute("value",l[r].value);if(!w.opts.useClasses&&!t){var d=new RegExp("^"+w.opts.htmlIgnoreCSSProperties.join("$|^")+"$","gi");for(r=0;r<w.doc.styleSheets.length;r++){var c,f=0;try{c=w.doc.styleSheets[r].cssRules,w.doc.styleSheets[r].ownerNode&&"STYLE"==w.doc.styleSheets[r].ownerNode.nodeType&&(f=1)}catch(x){}if(c)for(var p=0,u=c.length;p<u;p++)if(c[p].selectorText&&0<c[p].style.cssText.length){var h,g=c[p].selectorText.replace(/body |\.fr-view /g,"").replace(/::/g,":");try{h=w.el.querySelectorAll(g)}catch(x){h=[]}for(i=0;i<h.length;i++){!h[i].getAttribute("fr-original-style")&&h[i].getAttribute("style")?(h[i].setAttribute("fr-original-style",h[i].getAttribute("style")),a.push(h[i])):h[i].getAttribute("fr-original-style")||(h[i].setAttribute("fr-original-style",""),a.push(h[i])),o[h[i]]||(o[h[i]]={});for(var m=1e3*f+I(c[p].selectorText),v=c[p].style.cssText.split(";"),E=0;E<v.length;E++){var b=v[E].trim().split(":")[0];if(b&&!b.match(d)&&(o[h[i]][b]||(o[h[i]][b]=0)<=(h[i].getAttribute("fr-original-style")||"").indexOf(b+":")&&(o[h[i]][b]=1e4),m>=o[h[i]][b]&&(o[h[i]][b]=m,v[E].trim().length))){var T=v[E].trim().split(":");T.splice(0,1),s.push([h[i],b.trim(),T.join(":").trim(),m])}}}}}for(s.sort(D),r=0;r<s.length;r++){var A=s[r];A[0].style[A[1]]=A[2]}for(r=0;r<a.length;r++)if(a[r].getAttribute("class")&&(a[r].setAttribute("fr-original-class",a[r].getAttribute("class")),a[r].removeAttribute("class")),0<(a[r].getAttribute("fr-original-style")||"").trim().length){var C=a[r].getAttribute("fr-original-style").split(";");for(i=0;i<C.length;i++)if(0<C[i].indexOf(":")){var S=C[i].split(":"),R=S[0];S.splice(0,1),a[r].style[R.trim()]=S.join(":").trim()}}}if(w.node.isEmpty(w.el))w.opts.fullPage&&(n=O(w.iframe_document),n+="<html"+w.node.attributes(w.$html.get(0))+">"+w.$html.find("head").get(0).outerHTML+"<body></body></html>");else if(void 0===e&&(e=!1),w.opts.fullPage){n=O(w.iframe_document),w.$el.removeClass("fr-view");var y=w.opts.heightMin,L=w.opts.height,_=w.opts.heightMax;w.opts.heightMin=null,w.opts.height=null,w.opts.heightMax=null,w.size.refresh(),n+="<html"+w.node.attributes(w.$html.get(0))+">"+w.$html.html()+"</html>",w.opts.heightMin=y,w.opts.height=L,w.opts.heightMax=_,w.size.refresh(),w.$el.addClass("fr-view")}else n=w.$el.html();if(!w.opts.useClasses&&!t)for(r=0;r<a.length;r++)a[r].getAttribute("fr-original-class")&&(a[r].setAttribute("class",a[r].getAttribute("fr-original-class")),a[r].removeAttribute("fr-original-class")),null!=a[r].getAttribute("fr-original-style")&&void 0!==a[r].getAttribute("fr-original-style")?(0!==a[r].getAttribute("fr-original-style").length?a[r].setAttribute("style",a[r].getAttribute("fr-original-style")):a[r].removeAttribute("style"),a[r].removeAttribute("fr-original-style")):a[r].removeAttribute("style");w.opts.fullPage&&(n=(n=(n=(n=(n=(n=(n=(n=n.replace(/<style data-fr-style="true">(?:[\w\W]*?)<\/style>/g,"")).replace(/<link([^>]*)data-fr-style="true"([^>]*)>/g,"")).replace(/<style(?:[\w\W]*?)class="firebugResetStyles"(?:[\w\W]*?)>(?:[\w\W]*?)<\/style>/g,"")).replace(/<body((?:[\w\W]*?)) spellcheck="true"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$2>$3</body>")).replace(/<body((?:[\w\W]*?)) contenteditable="(true|false)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$3>$4</body>")).replace(/<body((?:[\w\W]*?)) dir="([\w]*)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$3>$4</body>")).replace(/<body((?:[\w\W]*?))class="([\w\W]*?)(fr-rtl|fr-ltr)([\w\W]*?)"((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,'<body$1class="$2$4"$5>$6</body>')).replace(/<body((?:[\w\W]*?)) class=""((?:[\w\W]*?))>((?:[\w\W]*?))<\/body>/g,"<body$1$2>$3</body>")),w.opts.htmlSimpleAmpersand&&(n=n.replace(/\&amp;/gi,"&")),w.events.trigger("html.afterGet"),e||(n=n.replace(/<span[^>]*? class\s*=\s*["']?fr-marker["']?[^>]+>\u200b<\/span>/gi,"")),n=w.clean.invisibleSpaces(n),n=w.clean.exec(n,k);var N=w.events.chainTrigger("html.get",n);return"string"==typeof N&&(n=N),n=(n=n.replace(/<pre(?:[\w\W]*?)>(?:[\w\W]*?)<\/pre>/g,function(e){return e.replace(/<br>/g,"\n")})).replace(/<meta((?:[\w\W]*?)) data-fr-http-equiv="/g,'<meta$1 http-equiv="')},getSelected:function(){var e,t,n=function(e,t){for(;t&&(t.nodeType==Node.TEXT_NODE||!w.node.isBlock(t))&&!w.node.isElement(t)&&!w.node.hasClass(t,"fr-inner");)t&&t.nodeType!=Node.TEXT_NODE&&Te(e).wrapInner(w.node.openTagString(t)+w.node.closeTagString(t)),t=t.parentNode;t&&e.innerHTML==t.innerHTML?e.innerHTML=t.outerHTML:-1!=t.innerText.indexOf(e.innerHTML)&&(e.innerHTML=w.node.openTagString(t)+e.innerHTML+w.node.closeTagString(t))},r="";if("undefined"!=typeof w.win.getSelection){w.browser.mozilla&&(w.selection.save(),1<w.$el.find('.fr-marker[data-type="false"]').length&&(w.$el.find('.fr-marker[data-type="false"][data-id="0"]').remove(),w.$el.find('.fr-marker[data-type="false"]:last').attr("data-id","0"),w.$el.find(".fr-marker").not('[data-id="0"]').remove()),w.selection.restore());for(var i=w.selection.ranges(),a=0;a<i.length;a++){var o=document.createElement("div");o.appendChild(i[a].cloneContents()),n(o,(t=e=void 0,t=null,w.win.getSelection?(e=w.win.getSelection())&&e.rangeCount&&(t=e.getRangeAt(0).commonAncestorContainer).nodeType!=Node.ELEMENT_NODE&&(t=t.parentNode):(e=w.doc.selection)&&"Control"!=e.type&&(t=e.createRange().parentElement()),null!=t&&(0<=Te.inArray(w.el,Te(t).parents())||t==w.el)?t:null)),0<Te(o).find(".fr-element").length&&(o=w.el),r+=o.innerHTML}}else"undefined"!=typeof w.doc.selection&&"Text"==w.doc.selection.type&&(r=w.doc.selection.createRange().htmlText);return r},insert:function(e,t,n){var r,i,a;if(w.selection.isCollapsed()||w.selection.remove(),r=t?e:w.clean.html(e),e.indexOf('class="fr-marker"')<0&&(i=r,(a=w.doc.createElement("div")).innerHTML=i,w.selection.setAtEnd(a,!0),r=a.innerHTML),w.node.isEmpty(w.el)&&!w.opts.keepFormatOnDelete&&f(r))w.el.innerHTML=r;else{var o=w.markers.insert();if(o){w.node.isLastSibling(o)&&Te(o).parent().hasClass("fr-deletable")&&Te(o).insertAfter(Te(o).parent());var s=w.node.blockParent(o);if((f(r)||n)&&(w.node.deepestParent(o)||s&&"LI"==s.tagName)){if(s&&"LI"==s.tagName&&(r=function(e){if(!w.html.defaultTag())return e;var t=w.doc.createElement("div");t.innerHTML=e;for(var n=t.querySelectorAll(":scope > "+w.html.defaultTag()),r=n.length-1;0<=r;r--){var i=n[r];w.node.isBlock(i.previousSibling)||(i.previousSibling&&!w.node.isEmpty(i)&&Te("<br>").insertAfter(i.previousSibling),i.outerHTML=i.innerHTML)}return t.innerHTML}(r)),!(o=w.markers.split()))return!1;o.outerHTML=r}else o.outerHTML=r}else w.el.innerHTML=w.el.innerHTML+r}u(),w.keys.positionCaret(),w.events.trigger("html.inserted")},wrap:t,unwrap:function(){w.$el.find("div.fr-temp-div").each(function(){this.previousSibling&&this.previousSibling.nodeType===Node.TEXT_NODE&&Te(this).before("<br>"),Te(this).attr("data-empty")||!this.nextSibling||w.node.isBlock(this.nextSibling)&&!Te(this.nextSibling).hasClass("fr-temp-div")?Te(this).replaceWith(Te(this).html()):Te(this).replaceWith(Te(this).html()+"<br>")}),w.$el.find(".fr-temp-div").removeClass("fr-temp-div").filter(function(){return""===Te(this).attr("class")}).removeAttr("class")},escapeEntities:function(e){return e.replace(/</gi,"&lt;").replace(/>/gi,"&gt;").replace(/"/gi,"&quot;").replace(/'/gi,"&#39;")},checkIfEmpty:i,extractNode:h,extractNodeAttrs:g,extractDoctype:m,cleanBRs:function(){for(var e=w.el.getElementsByTagName("br"),t=0;t<e.length;t++)d(e[t])},_init:function(){if(w.$wp){var e=function(){E(),w.placeholder&&setTimeout(w.placeholder.refresh,0)};w.events.on("mouseup",e),w.events.on("keydown",e),w.events.on("contentChanged",i)}},_setHtml:v}},Te.extend(Te.FE.DEFAULTS,{height:null,heightMax:null,heightMin:null,width:null}),Te.FE.MODULES.size=function(e){function t(){n(),e.opts.height&&e.$el.css("minHeight",e.opts.height-e.helpers.getPX(e.$el.css("padding-top"))-e.helpers.getPX(e.$el.css("padding-bottom"))),e.$iframe.height(e.$el.outerHeight(!0))}function n(){e.opts.heightMin?e.$el.css("minHeight",e.opts.heightMin):e.$el.css("minHeight",""),e.opts.heightMax?(e.$wp.css("maxHeight",e.opts.heightMax),e.$wp.css("overflow","auto")):(e.$wp.css("maxHeight",""),e.$wp.css("overflow","")),e.opts.height?(e.$wp.height(e.opts.height),e.$wp.css("overflow","auto"),e.$el.css("minHeight",e.opts.height-e.helpers.getPX(e.$el.css("padding-top"))-e.helpers.getPX(e.$el.css("padding-bottom")))):(e.$wp.css("height",""),e.opts.heightMin||e.$el.css("minHeight",""),e.opts.heightMax||e.$wp.css("overflow","")),e.opts.width&&e.$box.width(e.opts.width)}return{_init:function(){if(!e.$wp)return!1;n(),e.$iframe&&(e.events.on("keyup keydown",function(){setTimeout(t,0)},!0),e.events.on("commands.after html.set init initialized paste.after",t))},syncIframe:t,refresh:n}},Te.extend(Te.FE.DEFAULTS,{language:null}),Te.FE.LANGUAGE={},Te.FE.MODULES.language=function(e){var t;return{_init:function(){Te.FE.LANGUAGE&&(t=Te.FE.LANGUAGE[e.opts.language]),t&&t.direction&&(e.opts.direction=t.direction)},translate:function(e){return t&&t.translation[e]&&t.translation[e].length?t.translation[e]:e}}},Te.extend(Te.FE.DEFAULTS,{placeholderText:"Type something"}),Te.FE.MODULES.placeholder=function(f){function e(){f.$placeholder||(f.$placeholder=Te('<span class="fr-placeholder"></span>'),f.$wp.append(f.$placeholder));var e,t=0,n=0,r=0,i=0,a=0,o=0,s=0,l=f.node.contents(f.el),d=Te(f.selection.element()).css("text-align");if(l.length&&l[0].nodeType==Node.ELEMENT_NODE?(e=Te(l[0]),(!f.opts.toolbarInline||0<f.$el.prev().length)&&f.ready&&(t=f.helpers.getPX(e.css("margin-top")),a=f.helpers.getPX(e.css("padding-top")),n=f.helpers.getPX(e.css("margin-left")),r=f.helpers.getPX(e.css("margin-right")),o=f.helpers.getPX(e.css("padding-left")),s=f.helpers.getPX(e.css("padding-right")),i=f.helpers.getPX(e.css("margin-bottom"))),f.$placeholder.css("font-size",e.css("font-size")),f.$placeholder.css("line-height",e.css("line-height"))):(f.$placeholder.css("font-size",f.$el.css("font-size")),f.$placeholder.css("line-height",f.$el.css("line-height"))),f.$wp.addClass("show-placeholder"),f.$placeholder.css({marginTop:f.opts.documentReady?0:t-(e&&e.length?e[0].parentNode.offsetHeight:0),paddingBottom:f.helpers.getPX(f.$el.css("padding-bottom"))+i,paddingTop:Math.max(f.helpers.getPX(f.$el.css("padding-top")),a),paddingLeft:Math.max(f.helpers.getPX(f.$el.css("padding-left")),o),marginLeft:Math.max(f.helpers.getPX(f.$el.css("margin-left")),n),paddingRight:Math.max(f.helpers.getPX(f.$el.css("padding-right")),s),marginRight:Math.max(f.helpers.getPX(f.$el.css("margin-right")),r),textAlign:d,position:f.opts.documentReady?"absolute":"relative",top:f.opts.documentReady?"47px":"",left:f.opts.documentReady?"32px":""}).text(f.language.translate(f.opts.placeholderText||f.$oel.attr("placeholder")||"")),f.$placeholder.html(f.$placeholder.text().replace(/\n/g,"<br>")),f.$placeholder.outerHeight()>f.$el.height()){var c=f.opts.heightMin;f.opts.heightMin=f.$placeholder.outerHeight()+(f.$tb?f.$tb.height():0),f.size.refresh(),f.opts.heightMin=c}f.size.refresh()}function t(){f.$wp.removeClass("show-placeholder"),f.size.refresh()}function n(){if(!f.$wp)return!1;f.core.isEmpty()?e():t()}return{_init:function(){if(!f.$wp)return!1;f.events.on("init input keydown keyup contentChanged initialized",n)},show:e,hide:t,refresh:n,isVisible:function(){return!!f.$wp&&f.node.hasClass(f.$wp.get(0),"show-placeholder")}}},Te.FE.MODULES.edit=function(t){function e(){if(t.browser.mozilla)try{t.doc.execCommand("enableObjectResizing",!1,"false"),t.doc.execCommand("enableInlineTableEditing",!1,"false")}catch(e){}if(t.browser.msie)try{t.doc.body.addEventListener("mscontrolselect",function(e){return e.preventDefault(),!1})}catch(e){}}var n=!1;function r(){return n}return{_init:function(){t.events.on("focus",function(){r()?t.edit.off():t.edit.on()})},on:function(){t.$wp?(t.$el.attr("contenteditable",!0),t.$el.removeClass("fr-disabled").attr("aria-disabled",!1),t.$tb&&t.$tb.removeClass("fr-disabled").removeAttr("aria-disabled"),e()):t.$el.is("a")&&t.$el.attr("contenteditable",!0),n=!1},off:function(){t.events.disableBlur(),t.$wp?(t.$el.attr("contenteditable",!1),t.$el.addClass("fr-disabled").attr("aria-disabled",!0),t.$tb&&t.$tb.addClass("fr-disabled").attr("aria-disabled",!0)):t.$el.is("a")&&t.$el.attr("contenteditable",!1),t.events.enableBlur(),n=!0},disableDesign:e,isDisabled:r}},Te.extend(Te.FE.DEFAULTS,{documentReady:!1,editorClass:null,typingTimer:500,iframe:!1,requestWithCORS:!0,requestWithCredentials:!1,requestHeaders:{},useClasses:!0,spellcheck:!0,iframeDefaultStyle:'html{margin:0px;height:auto;}body{height:auto;padding:10px;background:transparent;color:#000000;position:relative;z-index: 2;-webkit-user-select:auto;margin:0px;overflow:hidden;min-height:20px;}body:after{content:"";display:block;clear:both;}body::-moz-selection{background:#b5d6fd;color:#000;}body::selection{background:#b5d6fd;color:#000;}',iframeStyle:"",iframeStyleFiles:[],direction:"auto",zIndex:1,tabIndex:null,disableRightClick:!1,scrollableContainer:"body",keepFormatOnDelete:!1,theme:null,downloadCustomHeader:!1}),Te.FE.MODULES.core=function(d){var c;function t(){if(d.$box.addClass("fr-box"+(d.opts.editorClass?" "+d.opts.editorClass:"")),d.$box.attr("role","application"),d.$wp.addClass("fr-wrapper"),d.opts.documentReady&&d.$box.addClass("fr-document"),d.opts.iframe||d.$el.addClass("fr-element fr-view"),d.opts.iframe){c=[],d.$iframe.addClass("fr-iframe"),d.opts.documentReady&&d.$iframe.addClass("fr-element"),d.$el.addClass("fr-view");for(var e=0;e<d.o_doc.styleSheets.length;e++){var t;try{t=d.o_doc.styleSheets[e].cssRules}catch(i){}if(t)for(var n=0,r=t.length;n<r;n++)!t[n].selectorText||0!==t[n].selectorText.indexOf(".fr-view")&&0!==t[n].selectorText.indexOf(".fr-element")||0<t[n].style.cssText.length&&(0===t[n].selectorText.indexOf(".fr-view")?c.push({selector:t[n].selectorText.replace(/\.fr-view/g,"body"),style:t[n].style}):c.push({selector:t[n].selectorText.replace(/\.fr-element/g,"body"),style:t[n].style}))}}"auto"!=d.opts.direction&&d.$box.removeClass("fr-ltr fr-rtl").addClass("fr-"+d.opts.direction),d.$el.attr("dir",d.opts.direction),d.$wp.attr("dir",d.opts.direction),1<d.opts.zIndex&&d.$box.css("z-index",d.opts.zIndex),d.opts.theme&&d.$box.addClass(d.opts.theme+"-theme"),d.opts.tabIndex=d.opts.tabIndex||d.$oel.attr("tabIndex"),d.opts.tabIndex&&d.$el.attr("tabIndex",d.opts.tabIndex)}return{_init:function(){if(Te.FE.INSTANCES.push(d),d.drag_support={filereader:"undefined"!=typeof FileReader,formdata:!!d.win.FormData,progress:"upload"in new XMLHttpRequest},d.$wp){t(),d.html.set(d._original_html),d.$el.attr("spellcheck",d.opts.spellcheck),d.helpers.isMobile()&&(d.$el.attr("autocomplete",d.opts.spellcheck?"on":"off"),d.$el.attr("autocorrect",d.opts.spellcheck?"on":"off"),d.$el.attr("autocapitalize",d.opts.spellcheck?"on":"off")),d.opts.disableRightClick&&d.events.$on(d.$el,"contextmenu",function(e){if(2==e.button)return!1});try{d.doc.execCommand("styleWithCSS",!1,!1)}catch(e){}}"TEXTAREA"==d.$oel.get(0).tagName&&(d.events.on("contentChanged",function(){d.$oel.val(d.html.get())}),d.events.on("form.submit",function(){d.$oel.val(d.html.get())}),d.events.on("form.reset",function(){d.html.set(d._original_html)}),d.$oel.val(d.html.get())),d.helpers.isIOS()&&d.events.$on(d.$doc,"selectionchange",function(){d.$doc.get(0).hasFocus()||d.$win.get(0).focus()}),d.events.trigger("init"),d.opts.autofocus&&!d.opts.initOnClick&&d.$wp&&d.events.on("initialized",function(){d.events.focus(!0)})},destroy:function(e){"TEXTAREA"==d.$oel.get(0).tagName&&d.$oel.val(e),d.$box&&d.$box.removeAttr("role"),d.$wp&&("TEXTAREA"==d.$oel.get(0).tagName?(d.$el.html(""),d.$wp.html(""),d.$box.replaceWith(d.$oel),d.$oel.show()):(d.$wp.replaceWith(e),d.$el.html(""),d.$box.removeClass("fr-view fr-ltr fr-box "+(d.opts.editorClass||"")),d.opts.theme&&d.$box.addClass(d.opts.theme+"-theme"))),this.$wp=null,this.$el=null,this.el=null,this.$box=null},isEmpty:function(){return d.node.isEmpty(d.el)},getXHR:function(e,t){var n=new XMLHttpRequest;for(var r in n.open(t,e,!0),d.opts.requestWithCredentials&&(n.withCredentials=!0),d.opts.requestHeaders)d.opts.requestHeaders.hasOwnProperty(r)&&n.setRequestHeader(r,d.opts.requestHeaders[r]);return n},injectStyle:function(e){if(d.opts.iframe){d.$head.find("style[data-fr-style], link[data-fr-style]").remove();for(var t=Te('<style data-fr-style="true">'+e+"</style>").appendTo(d.$head)[0].sheet,n=0;n<c.length;n++)for(var r=t.insertRule(c[n].selector+"{}",t.cssRules.length),i=0;i<c[n].style.length;i++){var a=c[n].style[i],o=c[n].style[a];d.browser.safari&&"content"===a&&(o='"'+o+'"'),t.cssRules[r].style[a]=o}for(var s=0;s<d.opts.iframeStyleFiles.length;s++){var l=Te('<link data-fr-style="true" rel="stylesheet" href="'+d.opts.iframeStyleFiles[s]+'">');l.get(0).addEventListener("load",d.size.syncIframe),d.$head.append(l)}}},hasFocus:function(){return d.browser.mozilla&&d.helpers.isMobile()?d.selection.inEditor():d.node.hasFocus(d.el)||0<d.$el.find("*:focus").length},sameInstance:function(e){if(!e)return!1;var t=e.data("instance");return!!t&&t.id==d.id}}},Te.FE.MODULES.cursorLists=function(m){function v(e){for(var t=e;"LI"!=t.tagName;)t=t.parentNode;return t}function E(e){for(var t=e;!m.node.isList(t);)t=t.parentNode;return t}return{_startEnter:function(e){var t,n=v(e),r=n.nextSibling,i=n.previousSibling,a=m.html.defaultTag();if(m.node.isEmpty(n,!0)&&r){for(var o="",s="",l=e.parentNode;!m.node.isList(l)&&l.parentNode&&("LI"!==l.parentNode.tagName||l.parentNode===n);)o=m.node.openTagString(l)+o,s+=m.node.closeTagString(l),l=l.parentNode;o=m.node.openTagString(l)+o,s+=m.node.closeTagString(l);var d="";for(d=l.parentNode&&"LI"==l.parentNode.tagName?s+"<li>"+Te.FE.MARKERS+"<br>"+o:a?s+"<"+a+">"+Te.FE.MARKERS+"<br></"+a+">"+o:s+Te.FE.MARKERS+"<br>"+o;["UL","OL"].indexOf(l.tagName)<0||l.parentNode&&"LI"===l.parentNode.tagName;)l=l.parentNode;Te(n).replaceWith('<span id="fr-break"></span>');var c=m.node.openTagString(l)+Te(l).html()+m.node.closeTagString(l);c=c.replace(/<span id="fr-break"><\/span>/g,d),Te(l).replaceWith(c),m.$el.find("li:empty").remove()}else if(i&&r||!m.node.isEmpty(n,!0)){for(var f,p="<br>",u=e.parentNode;u&&"LI"!=u.tagName;)Te(u).is("span.fr-emoticon")||(f="A"==u.tagName&&m.cursor.isAtStart(e,u)?"fr-to-remove":"",p=m.node.openTagString(Te(u).clone().addClass(f).get(0))+p+m.node.closeTagString(u)),u=u.parentNode;Te(n).before("<li>"+p+"</li>"),Te(e).remove()}else if(i){t=E(n);for(var h=Te.FE.MARKERS+"<br>",g=e.parentNode;g&&"LI"!=g.tagName;)h=m.node.openTagString(g)+h+m.node.closeTagString(g),g=g.parentNode;t.parentNode&&"LI"==t.parentNode.tagName?Te(t.parentNode).after("<li>"+h+"</li>"):a?Te(t).after("<"+a+">"+h+"</"+a+">"):Te(t).after(h),Te(n).remove()}else(t=E(n)).parentNode&&"LI"==t.parentNode.tagName?r?Te(t.parentNode).before(m.node.openTagString(n)+Te.FE.MARKERS+"<br></li>"):Te(t.parentNode).after(m.node.openTagString(n)+Te.FE.MARKERS+"<br></li>"):a?Te(t).before("<"+a+">"+Te.FE.MARKERS+"<br></"+a+">"):Te(t).before(Te.FE.MARKERS+"<br>"),Te(n).remove()},_middleEnter:function(e){for(var t=v(e),n="",r=e,i="",a="",o=!1;r!=t;)if(r=r.parentNode,!Te(r).is("span.fr-emoticon")){var s="A"==r.tagName&&m.cursor.isAtEnd(e,r)?"fr-to-remove":"";o||r==t||m.node.isBlock(r)||(o=!0,i+=Te.FE.INVISIBLE_SPACE),i=m.node.openTagString(Te(r).clone().addClass(s).get(0))+i,a+=m.node.closeTagString(r)}n=a+n+i+Te.FE.MARKERS+(m.opts.keepFormatOnDelete?Te.FE.INVISIBLE_SPACE:""),Te(e).replaceWith('<span id="fr-break"></span>');var l=m.node.openTagString(t)+Te(t).html()+m.node.closeTagString(t);l=l.replace(/<span id="fr-break"><\/span>/g,n),Te(t).replaceWith(l)},_endEnter:function(e){for(var t=v(e),n=Te.FE.MARKERS,r="",i=e,a=!1;i!=t;)if(i=i.parentNode,!Te(i).is("span.fr-emoticon")){var o="A"==i.tagName&&m.cursor.isAtEnd(e,i)?"fr-to-remove":"";a||i==t||m.node.isBlock(i)||(a=!0,r+=Te.FE.INVISIBLE_SPACE),r=m.node.openTagString(Te(i).clone().addClass(o).get(0))+r,n+=m.node.closeTagString(i)}var s=r+n;Te(e).remove(),Te(t).after(s)},_backspace:function(e){var t=v(e),n=t.previousSibling;if(n){n=Te(n).find(m.html.blockTagsQuery()).get(-1)||n,Te(e).replaceWith(Te.FE.MARKERS);var r=m.node.contents(n);r.length&&"BR"==r[r.length-1].tagName&&Te(r[r.length-1]).remove(),Te(t).find(m.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode==t&&Te(this).replaceWith(Te(this).html()+(m.node.isEmpty(this)?"":"<br>"))});for(var i,a=m.node.contents(t)[0];a&&!m.node.isList(a);)i=a.nextSibling,Te(n).append(a),a=i;for(n=t.previousSibling;a;)i=a.nextSibling,Te(n).append(a),a=i;1<(r=m.node.contents(n)).length&&"BR"===r[r.length-1].tagName&&Te(r[r.length-1]).remove(),Te(t).remove()}else{var o=E(t);if(Te(e).replaceWith(Te.FE.MARKERS),o.parentNode&&"LI"==o.parentNode.tagName){var s=o.previousSibling;m.node.isBlock(s)?(Te(t).find(m.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode==t&&Te(this).replaceWith(Te(this).html()+(m.node.isEmpty(this)?"":"<br>"))}),Te(s).append(Te(t).html())):Te(o).before(Te(t).html())}else{var l=m.html.defaultTag();l&&0===Te(t).find(m.html.blockTagsQuery()).length?Te(o).before("<"+l+">"+Te(t).html()+"</"+l+">"):Te(o).before(Te(t).html())}Te(t).remove(),m.html.wrap(),0===Te(o).find("li").length&&Te(o).remove()}},_del:function(e){var t,n=v(e),r=n.nextSibling;if(r){(t=m.node.contents(r)).length&&"BR"==t[0].tagName&&Te(t[0]).remove(),Te(r).find(m.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode==r&&Te(this).replaceWith(Te(this).html()+(m.node.isEmpty(this)?"":"<br>"))});for(var i,a=e,o=m.node.contents(r)[0];o&&!m.node.isList(o);)i=o.nextSibling,Te(a).after(o),a=o,o=i;for(;o;)i=o.nextSibling,Te(n).append(o),o=i;Te(e).replaceWith(Te.FE.MARKERS),Te(r).remove()}else{for(var s=n;!s.nextSibling&&s!=m.el;)s=s.parentNode;if(s==m.el)return!1;if(s=s.nextSibling,m.node.isBlock(s))Te.FE.NO_DELETE_TAGS.indexOf(s.tagName)<0&&(Te(e).replaceWith(Te.FE.MARKERS),(t=m.node.contents(n)).length&&"BR"==t[t.length-1].tagName&&Te(t[t.length-1]).remove(),Te(n).append(Te(s).html()),Te(s).remove());else for((t=m.node.contents(n)).length&&"BR"==t[t.length-1].tagName&&Te(t[t.length-1]).remove(),Te(e).replaceWith(Te.FE.MARKERS);s&&!m.node.isBlock(s)&&"BR"!=s.tagName;)Te(n).append(Te(s)),s=s.nextSibling}}}},Te.FE.NO_DELETE_TAGS=["TH","TD","TR","TABLE","FORM"],Te.FE.SIMPLE_ENTER_TAGS=["TH","TD","LI","DL","DT","FORM"],Te.FE.MODULES.cursor=function(u){function a(e){return!!e&&(!!u.node.isBlock(e)||(e.nextSibling&&e.nextSibling.nodeType==Node.TEXT_NODE&&0===e.nextSibling.textContent.replace(/\u200b/g,"").length?a(e.nextSibling):!(e.nextSibling&&(!e.previousSibling||"BR"!=e.nextSibling.tagName||e.nextSibling.nextSibling))&&a(e.parentNode)))}function o(e){return!!e&&(!!u.node.isBlock(e)||(e.previousSibling&&e.previousSibling.nodeType==Node.TEXT_NODE&&0===e.previousSibling.textContent.replace(/\u200b/g,"").length?o(e.previousSibling):!e.previousSibling&&(!(e.previousSibling||!u.node.hasClass(e.parentNode,"fr-inner"))||o(e.parentNode))))}function h(e,t){return!!e&&(e!=u.$wp.get(0)&&(e.previousSibling&&e.previousSibling.nodeType==Node.TEXT_NODE&&0===e.previousSibling.textContent.replace(/\u200b/g,"").length?h(e.previousSibling,t):!e.previousSibling&&(e.parentNode==t||h(e.parentNode,t))))}function g(e,t){return!!e&&(e!=u.$wp.get(0)&&(e.nextSibling&&e.nextSibling.nodeType==Node.TEXT_NODE&&0===e.nextSibling.textContent.replace(/\u200b/g,"").length?g(e.nextSibling,t):!(e.nextSibling&&(!e.previousSibling||"BR"!=e.nextSibling.tagName||e.nextSibling.nextSibling))&&(e.parentNode==t||g(e.parentNode,t))))}function s(e){return 0<Te(e).parentsUntil(u.$el,"LI").length&&0===Te(e).parentsUntil("LI","TABLE").length}function d(e,t){var n=new RegExp((t?"^":"")+"(([\\uD83C-\\uDBFF\\uDC00-\\uDFFF]+\\u200D)*[\\uD83C-\\uDBFF\\uDC00-\\uDFFF]{2})"+(t?"":"$"),"i"),r=e.match(n);return r?r[0].length:1}function c(e){for(var t,n=e;!n.previousSibling;)if(n=n.parentNode,u.node.isElement(n))return!1;if(n=n.previousSibling,!u.node.isBlock(n)&&u.node.isEditable(n)){for(t=u.node.contents(n);n.nodeType!=Node.TEXT_NODE&&!u.node.isDeletable(n)&&t.length&&u.node.isEditable(n);)n=t[t.length-1],t=u.node.contents(n);if(n.nodeType==Node.TEXT_NODE){var r=n.textContent,i=r.length;if(r.length&&"\n"===r[r.length-1])return c(e);if(u.opts.tabSpaces&&r.length>=u.opts.tabSpaces)0===r.substr(r.length-u.opts.tabSpaces,r.length-1).replace(/ /g,"").replace(new RegExp(Te.FE.UNICODE_NBSP,"g"),"").length&&(i=r.length-u.opts.tabSpaces+1);n.textContent=r.substring(0,i-d(r)),u.opts.htmlUntouched&&!e.nextSibling&&n.textContent.length&&" "===n.textContent[n.textContent.length-1]&&(n.textContent=n.textContent.substring(0,n.textContent.length-1)+Te.FE.UNICODE_NBSP);var a=r.length!=n.textContent.length;if(0===n.textContent.length)if(a&&u.opts.keepFormatOnDelete)Te(n).after(Te.FE.INVISIBLE_SPACE+Te.FE.MARKERS);else if(0!==r.length&&u.node.isBlock(n.parentNode))Te(n).after(Te.FE.MARKERS);else if((2!=n.parentNode.childNodes.length||n.parentNode!=e.parentNode)&&1!=n.parentNode.childNodes.length||u.node.isBlock(n.parentNode)||u.node.isElement(n.parentNode)||!u.node.isDeletable(n.parentNode)){for(;!u.node.isElement(n.parentNode)&&u.node.isEmpty(n.parentNode)&&Te.FE.NO_DELETE_TAGS.indexOf(n.parentNode.tagName)<0&&!u.node.isBlock(n.parentNode);){var o=n;n=n.parentNode,o.parentNode.removeChild(o)}Te(n).after(Te.FE.MARKERS),u.node.isElement(n.parentNode)&&!e.nextSibling&&n.previousSibling&&"BR"==n.previousSibling.tagName&&Te(e).after("<br>"),n.parentNode.removeChild(n)}else Te(n.parentNode).after(Te.FE.MARKERS),Te(n.parentNode).remove();else Te(n).after(Te.FE.MARKERS)}else u.node.isDeletable(n)?(Te(n).after(Te.FE.MARKERS),Te(n).remove()):e.nextSibling&&"BR"==e.nextSibling.tagName&&u.node.isVoid(n)&&"BR"!=n.tagName?(Te(e.nextSibling).remove(),Te(e).replaceWith(Te.FE.MARKERS)):!1!==u.events.trigger("node.remove",[Te(n)])&&(Te(n).after(Te.FE.MARKERS),Te(n).remove())}else if(Te.FE.NO_DELETE_TAGS.indexOf(n.tagName)<0&&(u.node.isEditable(n)||u.node.isDeletable(n)))if(u.node.isDeletable(n))Te(e).replaceWith(Te.FE.MARKERS),Te(n).remove();else if(u.node.isEmpty(n)&&!u.node.isList(n))Te(n).remove(),Te(e).replaceWith(Te.FE.MARKERS);else{for(u.node.isList(n)&&(n=Te(n).find("li:last").get(0)),(t=u.node.contents(n))&&"BR"==t[t.length-1].tagName&&Te(t[t.length-1]).remove(),t=u.node.contents(n);t&&u.node.isBlock(t[t.length-1]);)n=t[t.length-1],t=u.node.contents(n);Te(n).append(Te.FE.MARKERS);for(var s=e;!s.previousSibling;)s=s.parentNode;for(;s&&"BR"!==s.tagName&&!u.node.isBlock(s);){var l=s;s=s.nextSibling,Te(n).append(l)}s&&"BR"==s.tagName&&Te(s).remove(),Te(e).remove()}else u.node.isEditable(n)?e.nextSibling&&"BR"==e.nextSibling.tagName&&Te(e.nextSibling).remove():(Te(n).after(Te.FE.MARKERS),Te(n).remove());return!0}function l(e){var t=0<Te(e).parentsUntil(u.$el,"BLOCKQUOTE").length,n=u.node.deepestParent(e,[],!t);if(n&&"BLOCKQUOTE"==n.tagName){var r=u.node.deepestParent(e,[Te(e).parentsUntil(u.$el,"BLOCKQUOTE").get(0)]);r&&r.nextSibling&&(n=r)}if(null!==n){var i,a=n.nextSibling;if(u.node.isBlock(n)&&(u.node.isEditable(n)||u.node.isDeletable(n))&&a&&Te.FE.NO_DELETE_TAGS.indexOf(a.tagName)<0)if(u.node.isDeletable(a)||!u.node.isEditable(a))Te(a).remove(),Te(e).replaceWith(Te.FE.MARKERS);else if(u.node.isBlock(a)&&u.node.isEditable(a))if(u.node.isList(a))if(u.node.isEmpty(n,!0))Te(n).remove(),Te(a).find("li:first").prepend(Te.FE.MARKERS);else{var o=Te(a).find("li:first");"BLOCKQUOTE"==n.tagName&&(i=u.node.contents(n)).length&&u.node.isBlock(i[i.length-1])&&(n=i[i.length-1]),0===o.find("ul, ol").length&&(Te(e).replaceWith(Te.FE.MARKERS),o.find(u.html.blockTagsQuery()).not("ol, ul, table").each(function(){this.parentNode==o.get(0)&&Te(this).replaceWith(Te(this).html()+(u.node.isEmpty(this)?"":"<br>"))}),Te(n).append(u.node.contents(o.get(0))),o.remove(),0===Te(a).find("li").length&&Te(a).remove())}else{if((i=u.node.contents(a)).length&&"BR"==i[0].tagName&&Te(i[0]).remove(),"BLOCKQUOTE"!=a.tagName&&"BLOCKQUOTE"==n.tagName)for(i=u.node.contents(n);i.length&&u.node.isBlock(i[i.length-1]);)n=i[i.length-1],i=u.node.contents(n);else if("BLOCKQUOTE"==a.tagName&&"BLOCKQUOTE"!=n.tagName)for(i=u.node.contents(a);i.length&&u.node.isBlock(i[0]);)a=i[0],i=u.node.contents(a);Te(e).replaceWith(Te.FE.MARKERS),Te(n).append(a.innerHTML),Te(a).remove()}else{for(Te(e).replaceWith(Te.FE.MARKERS);a&&"BR"!==a.tagName&&!u.node.isBlock(a)&&u.node.isEditable(a);){var s=a;a=a.nextSibling,Te(n).append(s)}a&&"BR"==a.tagName&&u.node.isEditable(a)&&Te(a).remove()}}}function n(e){for(var t,n=e;!n.nextSibling;)if(n=n.parentNode,u.node.isElement(n))return!1;if("BR"==(n=n.nextSibling).tagName&&u.node.isEditable(n))if(n.nextSibling){if(u.node.isBlock(n.nextSibling)&&u.node.isEditable(n.nextSibling)){if(!(Te.FE.NO_DELETE_TAGS.indexOf(n.nextSibling.tagName)<0))return void Te(n).remove();n=n.nextSibling,Te(n.previousSibling).remove()}}else if(a(n)){if(s(e))u.cursorLists._del(e);else u.node.deepestParent(n)&&((!u.node.isEmpty(u.node.blockParent(n))||(u.node.blockParent(n).nextSibling&&Te.FE.NO_DELETE_TAGS.indexOf(u.node.blockParent(n).nextSibling.tagName))<0)&&Te(n).remove(),l(e));return}if(!u.node.isBlock(n)&&u.node.isEditable(n)){for(t=u.node.contents(n);n.nodeType!=Node.TEXT_NODE&&t.length&&!u.node.isDeletable(n)&&u.node.isEditable(n);)n=t[0],t=u.node.contents(n);n.nodeType==Node.TEXT_NODE?(Te(n).before(Te.FE.MARKERS),n.textContent.length&&(n.textContent=n.textContent.substring(d(n.textContent,!0),n.textContent.length))):u.node.isDeletable(n)?(Te(n).before(Te.FE.MARKERS),Te(n).remove()):!1!==u.events.trigger("node.remove",[Te(n)])&&(Te(n).before(Te.FE.MARKERS),Te(n).remove()),Te(e).remove()}else if(Te.FE.NO_DELETE_TAGS.indexOf(n.tagName)<0&&(u.node.isEditable(n)||u.node.isDeletable(n)))if(u.node.isDeletable(n))Te(e).replaceWith(Te.FE.MARKERS),Te(n).remove();else if(u.node.isList(n))e.previousSibling?(Te(n).find("li:first").prepend(e),u.cursorLists._backspace(e)):(Te(n).find("li:first").prepend(Te.FE.MARKERS),Te(e).remove());else if((t=u.node.contents(n))&&t.length&&"BR"==t[0].tagName&&Te(t[0]).remove(),t&&"BLOCKQUOTE"==n.tagName){var r=t[0];for(Te(e).before(Te.FE.MARKERS);r&&"BR"!=r.tagName;){var i=r;r=r.nextSibling,Te(e).before(i)}r&&"BR"==r.tagName&&Te(r).remove()}else Te(e).after(Te(n).html()).after(Te.FE.MARKERS),Te(n).remove();else u.node.isEditable(n)||(Te(e).replaceWith(Te.FE.MARKERS),Te(n).remove())}function f(){for(var e=u.el.querySelectorAll("blockquote:empty"),t=0;t<e.length;t++)e[t].parentNode.removeChild(e[t])}function p(e,t,n){var r,i=u.node.deepestParent(e,[],!n);if(i&&"BLOCKQUOTE"==i.tagName)return g(e,i)?(r=u.html.defaultTag(),t?Te(e).replaceWith("<br>"+Te.FE.MARKERS):r?Te(i).after("<"+r+">"+Te.FE.MARKERS+"<br></"+r+">"):Te(i).after(Te.FE.MARKERS+"<br>"),Te(e).remove()):m(e,t,n),!1;if(null==i)(r=u.html.defaultTag())&&u.node.isElement(e.parentNode)?Te(e).replaceWith("<"+r+">"+Te.FE.MARKERS+"<br></"+r+">"):!e.previousSibling||Te(e.previousSibling).is("br")||e.nextSibling?Te(e).replaceWith("<br>"+Te.FE.MARKERS):Te(e).replaceWith("<br>"+Te.FE.MARKERS+"<br>");else{var a=e,o="";"PRE"!=i.tagName||e.nextSibling||(t=!0),u.node.isBlock(i)&&!t||(o="<br/>");var s,l="",d="",c="",f="";(r=u.html.defaultTag())&&u.node.isBlock(i)&&(c="<"+r+">",f="</"+r+">",i.tagName==r.toUpperCase()&&(c=u.node.openTagString(Te(i).clone().removeAttr("id").get(0))));do{if(a=a.parentNode,!t||a!=i||t&&!u.node.isBlock(i))if(l+=u.node.closeTagString(a),a==i&&u.node.isBlock(i))d=c+d;else{var p=("A"==a.tagName||Te(a).hasClass("fa"))&&g(e,a)?"fr-to-remove":"";d=u.node.openTagString(Te(a).clone().addClass(p).get(0))+d}}while(a!=i);o=l+o+d+(e.parentNode==i&&u.node.isBlock(i)?"":Te.FE.INVISIBLE_SPACE)+Te.FE.MARKERS,u.node.isBlock(i)&&!Te(i).find("*:last").is("br")&&Te(i).append("<br/>"),Te(e).after('<span id="fr-break"></span>'),Te(e).remove(),i.nextSibling&&!u.node.isBlock(i.nextSibling)||u.node.isBlock(i)||Te(i).after("<br>"),s=(s=!t&&u.node.isBlock(i)?u.node.openTagString(i)+Te(i).html()+f:u.node.openTagString(i)+Te(i).html()+u.node.closeTagString(i)).replace(/<span id="fr-break"><\/span>/g,o),Te(i).replaceWith(s)}}function m(e,t,n){var r=u.node.deepestParent(e,[],!n);if(null==r)u.html.defaultTag()&&e.parentNode===u.el?Te(e).replaceWith("<"+u.html.defaultTag()+">"+Te.FE.MARKERS+"<br></"+u.html.defaultTag()+">"):(e.nextSibling&&!u.node.isBlock(e.nextSibling)||Te(e).after("<br>"),Te(e).replaceWith("<br>"+Te.FE.MARKERS));else if(e.previousSibling&&"IMG"==e.previousSibling.tagName||e.nextSibling&&"IMG"==e.nextSibling.tagName)Te(e).replaceWith("<"+u.html.defaultTag()+">"+Te.FE.MARKERS+"<br></"+u.html.defaultTag()+">");else{var i=e,a="";"PRE"==r.tagName&&(t=!0),u.node.isBlock(r)&&!t||(a="<br>");var o="",s="";do{var l=i;if(i=i.parentNode,"BLOCKQUOTE"==r.tagName&&u.node.isEmpty(l)&&!u.node.hasClass(l,"fr-marker")&&0<Te(l).find(e).length&&Te(l).after(e),"BLOCKQUOTE"!=r.tagName||!g(e,i)&&!h(e,i))if(!t||i!=r||t&&!u.node.isBlock(r)){o+=u.node.closeTagString(i);var d="A"==i.tagName&&g(e,i)||Te(i).hasClass("fa")?"fr-to-remove":"";s=u.node.openTagString(Te(i).clone().addClass(d).removeAttr("id").get(0))+s}else"BLOCKQUOTE"==r.tagName&&t&&(s=o="")}while(i!=r);var c=r==e.parentNode&&u.node.isBlock(r)||e.nextSibling;if("BLOCKQUOTE"==r.tagName)if(e.previousSibling&&u.node.isBlock(e.previousSibling)&&e.nextSibling&&"BR"==e.nextSibling.tagName&&(Te(e.nextSibling).after(e),e.nextSibling&&"BR"==e.nextSibling.tagName&&Te(e.nextSibling).remove()),t)a=o+a+Te.FE.MARKERS+s;else{var f=u.html.defaultTag();a=o+a+(f?"<"+f+">":"")+Te.FE.MARKERS+"<br>"+(f?"</"+f+">":"")+s}else a=o+a+s+(c?"":Te.FE.INVISIBLE_SPACE)+Te.FE.MARKERS;Te(e).replaceWith('<span id="fr-break"></span>');var p=u.node.openTagString(r)+Te(r).html()+u.node.closeTagString(r);p=p.replace(/<span id="fr-break"><\/span>/g,a),Te(r).replaceWith(p)}}return{enter:function(t){var n=u.markers.insert();if(!n)return!0;for(var r=n.parentNode;r&&!u.node.isElement(r);){if("false"===r.getAttribute("contenteditable"))return Te(n).replaceWith(Te.FE.MARKERS),u.selection.restore(),!1;if("true"===r.getAttribute("contenteditable"))break;r=r.parentNode}u.el.normalize();var i=!1;0<Te(n).parentsUntil(u.$el,"BLOCKQUOTE").length&&(i=!0),Te(n).parentsUntil(u.$el,"TD, TH").length&&(i=!1),a(n)?!s(n)||t||i||0!==Te(n).parentsUntil("LI",".fr-img-caption").length?p(n,t,i):u.cursorLists._endEnter(n):o(n)?!s(n)||t||i||0!==Te(n).parentsUntil("LI",".fr-img-caption").length?function e(t,n,r){var i,a=u.node.deepestParent(t,[],!r);if(a&&"TABLE"==a.tagName)return Te(a).find("td:first, th:first").prepend(t),e(t,n,r);if(a&&"BLOCKQUOTE"==a.tagName)if(h(t,a)){if(!n)return(i=u.html.defaultTag())?Te(a).before("<"+i+">"+Te.FE.MARKERS+"<br></"+i+">"):Te(a).before(Te.FE.MARKERS+"<br>"),Te(t).remove(),!1}else g(t,a)?p(t,n,!0):m(t,n,!0);if(null==a)(i=u.html.defaultTag())&&u.node.isElement(t.parentNode)?Te(t).replaceWith("<"+i+">"+Te.FE.MARKERS+"<br></"+i+">"):Te(t).replaceWith("<br>"+Te.FE.MARKERS);else{if(u.node.isBlock(a))if("PRE"==a.tagName&&(n=!0),n)Te(t).remove(),Te(a).prepend("<br>"+Te.FE.MARKERS);else{if(u.node.isEmpty(a,!0))return p(t,n,r);if(t.nextSibling&&"IMG"==t.nextSibling.tagName||t.nextSibling&&t.nextSibling.nextElementSibling&&"IMG"==t.nextSibling.nextElementSibling)Te(t).replaceWith("<"+u.html.defaultTag()+">"+Te.FE.MARKERS+"<br></"+u.html.defaultTag()+">");else if(u.opts.keepFormatOnDelete){for(var o=t,s=Te.FE.INVISIBLE_SPACE;o!=a&&!u.node.isElement(o);)o=o.parentNode,s=u.node.openTagString(o)+s+u.node.closeTagString(o);Te(a).before(s)}else Te(a).before(u.node.openTagString(Te(a).clone().removeAttr("id").get(0))+"<br>"+u.node.closeTagString(a))}else Te(a).before("<br>");Te(t).remove()}}(n,t,i):u.cursorLists._startEnter(n):!s(n)||t||i||0!==Te(n).parentsUntil("LI",".fr-img-caption").length?m(n,t,i):u.cursorLists._middleEnter(n),u.$el.find(".fr-to-remove").each(function(){for(var e=u.node.contents(this),t=0;t<e.length;t++)e[t].nodeType==Node.TEXT_NODE&&(e[t].textContent=e[t].textContent.replace(/\u200B/g,""));Te(this).replaceWith(this.innerHTML)}),u.html.fillEmptyBlocks(!0),u.opts.htmlUntouched||(u.html.cleanEmptyTags(),u.clean.lists(),u.spaces.normalizeAroundCursor()),u.selection.restore()},backspace:function(){var e=!1,t=u.markers.insert();if(!t)return!0;for(var n=t.parentNode;n&&!u.node.isElement(n);){if("false"===n.getAttribute("contenteditable"))return Te(t).replaceWith(Te.FE.MARKERS),u.selection.restore(),!1;if("true"===n.getAttribute("contenteditable"))break;n=n.parentNode}u.el.normalize();var r=t.previousSibling;if(r){var i=r.textContent;i&&i.length&&8203==i.charCodeAt(i.length-1)&&(1==i.length?Te(r).remove():r.textContent=r.textContent.substr(0,i.length-d(i)))}return a(t)?s(t)&&h(t,Te(t).parents("li:first").get(0))?u.cursorLists._backspace(t):e=c(t):o(t)?s(t)&&h(t,Te(t).parents("li:first").get(0))?u.cursorLists._backspace(t):function(e){for(var t=0<Te(e).parentsUntil(u.$el,"BLOCKQUOTE").length,n=u.node.deepestParent(e,[],!t),r=n;n&&!n.previousSibling&&"BLOCKQUOTE"!=n.tagName&&n.parentElement!=u.el&&!u.node.hasClass(n.parentElement,"fr-inner")&&Te.FE.SIMPLE_ENTER_TAGS.indexOf(n.parentElement.tagName)<0;)n=n.parentElement;if(n&&"BLOCKQUOTE"==n.tagName){var i=u.node.deepestParent(e,[Te(e).parentsUntil(u.$el,"BLOCKQUOTE").get(0)]);i&&i.previousSibling&&(r=n=i)}if(null!==n){var a,o=n.previousSibling;if(u.node.isBlock(n)&&u.node.isEditable(n))if(o&&Te.FE.NO_DELETE_TAGS.indexOf(o.tagName)<0){if(u.node.isDeletable(o)||!u.node.isEditable(o))Te(o).remove(),Te(e).replaceWith(Te.FE.MARKERS);else if(u.node.isEditable(o))if(u.node.isBlock(o))if(u.node.isEmpty(o)&&!u.node.isList(o))Te(o).remove(),Te(e).after(u.opts.keepFormatOnDelete?Te.FE.INVISIBLE_SPACE:"");else{if(u.node.isList(o)&&(o=Te(o).find("li:last").get(0)),(a=u.node.contents(o)).length&&"BR"==a[a.length-1].tagName&&Te(a[a.length-1]).remove(),"BLOCKQUOTE"==o.tagName&&"BLOCKQUOTE"!=n.tagName)for(a=u.node.contents(o);a.length&&u.node.isBlock(a[a.length-1]);)o=a[a.length-1],a=u.node.contents(o);else if("BLOCKQUOTE"!=o.tagName&&"BLOCKQUOTE"==r.tagName)for(a=u.node.contents(r);a.length&&u.node.isBlock(a[0]);)r=a[0],a=u.node.contents(r);if(u.node.isEmpty(n))Te(e).remove(),u.selection.setAtEnd(o,!0);else{Te(e).replaceWith(Te.FE.MARKERS);var s=o.childNodes;u.node.isBlock(s[s.length-1])?Te(s[s.length-1]).append(r.innerHTML):Te(o).append(r.innerHTML)}Te(r).remove(),u.node.isEmpty(n)&&Te(n).remove()}else Te(e).replaceWith(Te.FE.MARKERS),"BLOCKQUOTE"==n.tagName&&o.nodeType==Node.ELEMENT_NODE?Te(o).remove():(Te(o).after(u.node.isEmpty(n)?"":Te(n).html()),Te(n).remove(),"BR"==o.tagName&&Te(o).remove())}else o||(n&&"BLOCKQUOTE"===n.tagName&&0===Te(n).text().replace(/\u200B/g,"").length?Te(n).remove():u.node.isEmpty(n)&&n.parentNode&&u.node.isEditable(n.parentNode)&&n.parentNode!=u.el&&Te(n.parentNode).remove())}}(t):e=c(t),Te(t).remove(),f(),u.html.fillEmptyBlocks(!0),u.opts.htmlUntouched||(u.html.cleanEmptyTags(),u.clean.lists(),u.spaces.normalizeAroundCursor()),u.selection.restore(),e},del:function(){var e=u.markers.insert();if(!e)return!1;if(u.el.normalize(),a(e))if(s(e))if(0===Te(e).parents("li:first").find("ul, ol").length)u.cursorLists._del(e);else{var t=Te(e).parents("li:first").find("ul:first, ol:first").find("li:first");(t=t.find(u.html.blockTagsQuery()).get(-1)||t).prepend(e),u.cursorLists._backspace(e)}else l(e);else o(e),n(e);Te(e).remove(),f(),u.html.fillEmptyBlocks(!0),u.opts.htmlUntouched||(u.html.cleanEmptyTags(),u.clean.lists()),u.spaces.normalizeAroundCursor(),u.selection.restore()},isAtEnd:g,isAtStart:h}},Te.FE.ENTER_P=0,Te.FE.ENTER_DIV=1,Te.FE.ENTER_BR=2,Te.FE.KEYCODE={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,FF_SEMICOLON:59,FF_EQUALS:61,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,FF_HYPHEN:173,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,HYPHEN:189,PERIOD:190,SLASH:191,APOSTROPHE:192,TILDE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,IME:229},Te.extend(Te.FE.DEFAULTS,{enter:Te.FE.ENTER_P,multiLine:!0,tabSpaces:0}),Te.FE.MODULES.keys=function(l){var d,n,r,c=!1;function e(){if(l.browser.mozilla&&l.selection.isCollapsed()&&!c){var e=l.selection.ranges(0),t=e.startContainer,n=e.startOffset;t&&t.nodeType==Node.TEXT_NODE&&n<=t.textContent.length&&0<n&&32==t.textContent.charCodeAt(n-1)&&(l.selection.save(),l.spaces.normalize(),l.selection.restore())}}function t(){l.selection.isFull()&&setTimeout(function(){var e=l.html.defaultTag();e?l.$el.html("<"+e+">"+Te.FE.MARKERS+"<br/></"+e+">"):l.$el.html(Te.FE.MARKERS+"<br/>"),l.selection.restore(),l.placeholder.refresh(),l.button.bulkRefresh(),l.undo.saveStep()},0)}function i(){c=!1}function a(){c=!1}function f(){var e=l.html.defaultTag();e?l.$el.html("<"+e+">"+Te.FE.MARKERS+"<br/></"+e+">"):l.$el.html(Te.FE.MARKERS+"<br/>"),l.selection.restore()}function o(e){var t=l.selection.element();if(t&&0<=["INPUT","TEXTAREA"].indexOf(t.tagName))return!0;if(e&&g(e.which))return p(),!0;l.events.disableBlur(),null;var n=e.which;if(16===n)return!0;if((d=n)===Te.FE.KEYCODE.IME)return c=!0;c=!1;var r,i,a,o=m(n)&&!h(e)&&!e.altKey,s=n==Te.FE.KEYCODE.BACKSPACE||n==Te.FE.KEYCODE.DELETE;if((!(h(e)||e.shiftKey&&(33===n||34===n||35===n||36===n))&&l.selection.isFull()&&!l.opts.keepFormatOnDelete&&!l.placeholder.isVisible()||s&&l.placeholder.isVisible()&&l.opts.keepFormatOnDelete)&&(o||s)&&(f(),!m(n)))return e.preventDefault(),!0;n==Te.FE.KEYCODE.ENTER?e.shiftKey?((a=e).preventDefault(),a.stopPropagation(),l.opts.multiLine&&(l.selection.isCollapsed()||l.selection.remove(),l.cursor.enter(!0))):(i=e,l.opts.multiLine?(l.helpers.isIOS()||(i.preventDefault(),i.stopPropagation()),l.selection.isCollapsed()||l.selection.remove(),l.cursor.enter()):(i.preventDefault(),i.stopPropagation())):n===Te.FE.KEYCODE.BACKSPACE&&(e.metaKey||e.ctrlKey)?setTimeout(function(){l.events.disableBlur(),l.events.focus()},0):n!=Te.FE.KEYCODE.BACKSPACE||h(e)||e.altKey?n!=Te.FE.KEYCODE.DELETE||h(e)||e.altKey||e.shiftKey?n==Te.FE.KEYCODE.SPACE?function(e){var t=l.selection.element();if(!l.helpers.isMobile()&&t&&"A"==t.tagName){e.preventDefault(),e.stopPropagation(),l.selection.isCollapsed()||l.selection.remove();var n=l.markers.insert();if(n){var r=n.previousSibling;!n.nextSibling&&n.parentNode&&"A"==n.parentNode.tagName?(n.parentNode.insertAdjacentHTML("afterend","&nbsp;"+Te.FE.MARKERS),n.parentNode.removeChild(n)):(r&&r.nodeType==Node.TEXT_NODE&&1==r.textContent.length&&160==r.textContent.charCodeAt(0)?r.textContent=r.textContent+" ":n.insertAdjacentHTML("beforebegin","&nbsp;"),n.outerHTML=Te.FE.MARKERS),l.selection.restore()}}}(e):n==Te.FE.KEYCODE.TAB?function(e){if(0<l.opts.tabSpaces)if(l.selection.isCollapsed()){l.undo.saveStep(),e.preventDefault(),e.stopPropagation();for(var t="",n=0;n<l.opts.tabSpaces;n++)t+="&nbsp;";l.html.insert(t),l.placeholder.refresh(),l.undo.saveStep()}else e.preventDefault(),e.stopPropagation(),e.shiftKey?l.commands.outdent():l.commands.indent()}(e):h(e)||!m(e.which)||l.selection.isCollapsed()||e.ctrlKey||e.altKey||l.selection.remove():l.placeholder.isVisible()?(l.opts.keepFormatOnDelete||f(),e.preventDefault(),e.stopPropagation()):((r=e).preventDefault(),r.stopPropagation(),""===l.selection.text()&&"IMG"!=l.selection.element().tagName?l.cursor.del():l.selection.remove(),l.placeholder.refresh()):l.placeholder.isVisible()?(l.opts.keepFormatOnDelete||f(),e.preventDefault(),e.stopPropagation()):function(e){if(l.selection.isCollapsed())if(l.cursor.backspace(),l.helpers.isIOS()){var t=l.selection.ranges(0);t.deleteContents(),t.insertNode(document.createTextNode("\u200b")),l.selection.get().modify("move","forward","character")}else e.preventDefault(),e.stopPropagation();else e.preventDefault(),e.stopPropagation(),l.selection.remove();l.placeholder.refresh()}(e),l.events.enableBlur()}function s(){if(!l.$wp)return!0;var e;l.opts.height||l.opts.heightMax?(e=l.position.getBoundingRect().top,l.opts.iframe&&(e+=l.$iframe.offset().top,e-=l.helpers.scrollTop()),e>l.$wp.offset().top-l.helpers.scrollTop()+l.$wp.height()-20&&l.$wp.scrollTop(e+l.$wp.scrollTop()-(l.$wp.height()+l.$wp.offset().top)+l.helpers.scrollTop()+20)):(e=l.position.getBoundingRect().top,l.opts.toolbarBottom&&(e+=l.opts.toolbarStickyOffset),l.opts.iframe&&(e+=l.$iframe.offset().top,e-=l.helpers.scrollTop()),(e+=l.opts.toolbarStickyOffset)>l.o_win.innerHeight-20&&Te(l.o_win).scrollTop(e+l.helpers.scrollTop()-l.o_win.innerHeight+20),e=l.position.getBoundingRect().top,l.opts.toolbarBottom||(e-=l.opts.toolbarStickyOffset),l.opts.iframe&&(e+=l.$iframe.offset().top,e-=l.helpers.scrollTop()),e<l.$tb.height()+20&&Te(l.o_win).scrollTop(e+l.helpers.scrollTop()-l.$tb.height()-20))}function p(){var e,t=l.selection.element();!function(e){if(!e)return!1;var t=e.innerHTML;return!!((t=t.replace(/<span[^>]*? class\s*=\s*["']?fr-marker["']?[^>]+>\u200b<\/span>/gi,""))&&/\u200B/.test(t)&&0<t.replace(/\u200B/gi,"").length)}(t)||l.node.hasClass(t,"fr-marker")||"IFRAME"==t.tagName||(e=t,l.helpers.isIOS()&&0!==((e.textContent||"").match(/[\u3041-\u3096\u30A0-\u30FF\u4E00-\u9FFF\u3130-\u318F\uAC00-\uD7AF]/gi)||[]).length)||(l.selection.save(),function(e){for(var t=l.doc.createTreeWalker(e,NodeFilter.SHOW_TEXT,l.node.filter(function(e){return/\u200B/gi.test(e.textContent)}),!1);t.nextNode();){var n=t.currentNode;n.textContent=n.textContent.replace(/\u200B/gi,"")}}(t),l.selection.restore())}function u(e){var t=l.selection.element();if(t&&0<=["INPUT","TEXTAREA"].indexOf(t.tagName))return!0;if(e&&0===e.which&&d&&(e.which=d),l.helpers.isAndroid()&&l.browser.mozilla)return!0;if(c)return!1;if(e&&l.helpers.isIOS()&&e.which==Te.FE.KEYCODE.ENTER&&l.doc.execCommand("undo"),!l.selection.isCollapsed())return!0;if(e&&(e.which===Te.FE.KEYCODE.META||e.which==Te.FE.KEYCODE.CTRL))return!0;if(e&&g(e.which))return!0;if(e&&!l.helpers.isIOS()&&(e.which==Te.FE.KEYCODE.ENTER||e.which==Te.FE.KEYCODE.BACKSPACE||37<=e.which&&e.which<=40&&!l.browser.msie))try{s()}catch(n){}p()}function h(e){if(-1!=navigator.userAgent.indexOf("Mac OS X")){if(e.metaKey&&!e.altKey)return!0}else if(e.ctrlKey&&!e.altKey)return!0;return!1}function g(e){if(e>=Te.FE.KEYCODE.ARROW_LEFT&&e<=Te.FE.KEYCODE.ARROW_DOWN){if(l.$tb.hasClass("fr-sticky-on")){var t=l.selection.get();if(t=t&&t.focusNode){t=t.nodeType==Node.TEXT_NODE?t.parentNode:t;var n=l.$tb.get(0).getBoundingClientRect().height,r=t.getBoundingClientRect().top;r<n&&window.scrollTo(window.scrollX,window.scrollY-(n-r))}}return!0}}function m(e){if(e>=Te.FE.KEYCODE.ZERO&&e<=Te.FE.KEYCODE.NINE)return!0;if(e>=Te.FE.KEYCODE.NUM_ZERO&&e<=Te.FE.KEYCODE.NUM_MULTIPLY)return!0;if(e>=Te.FE.KEYCODE.A&&e<=Te.FE.KEYCODE.Z)return!0;if(l.browser.webkit&&0===e)return!0;switch(e){case Te.FE.KEYCODE.SPACE:case Te.FE.KEYCODE.QUESTION_MARK:case Te.FE.KEYCODE.NUM_PLUS:case Te.FE.KEYCODE.NUM_MINUS:case Te.FE.KEYCODE.NUM_PERIOD:case Te.FE.KEYCODE.NUM_DIVISION:case Te.FE.KEYCODE.SEMICOLON:case Te.FE.KEYCODE.FF_SEMICOLON:case Te.FE.KEYCODE.DASH:case Te.FE.KEYCODE.EQUALS:case Te.FE.KEYCODE.FF_EQUALS:case Te.FE.KEYCODE.COMMA:case Te.FE.KEYCODE.PERIOD:case Te.FE.KEYCODE.SLASH:case Te.FE.KEYCODE.APOSTROPHE:case Te.FE.KEYCODE.SINGLE_QUOTE:case Te.FE.KEYCODE.OPEN_SQUARE_BRACKET:case Te.FE.KEYCODE.BACKSLASH:case Te.FE.KEYCODE.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}function v(e){var t=e.which;if(h(e)||37<=t&&t<=40||!m(t)&&t!=Te.FE.KEYCODE.DELETE&&t!=Te.FE.KEYCODE.BACKSPACE&&t!=Te.FE.KEYCODE.ENTER&&t!=Te.FE.KEYCODE.IME)return!0;n||(r=l.snapshot.get(),l.undo.canDo()||l.undo.saveStep()),clearTimeout(n),n=setTimeout(function(){n=null,l.undo.saveStep()},Math.max(250,l.opts.typingTimer))}function E(e){var t=e.which;if(h(e)||37<=t&&t<=40)return!0;r&&n?(l.undo.saveStep(r),r=null):void 0!==t&&0!==t||r||n||l.undo.saveStep()}function b(e){if(e&&"BR"==e.tagName)return!1;try{return 0===(e.textContent||"").length&&!Te(e).find("> br").length||e.childNodes&&1==e.childNodes.length&&e.childNodes[0].getAttribute&&("false"==e.childNodes[0].getAttribute("contenteditable")||l.node.hasClass(e.childNodes[0],"fr-img-caption"))}catch(t){return!1}}function T(e){var t=l.el.childNodes,n=l.html.defaultTag(),r=l.node.blockParent(l.selection.blocks()[0]);return r&&"TR"==r.tagName&&Te(r).attr("contenteditable")==undefined&&(r=Te(r).closest("table").length&&Te(r).closest("table")[0]),!l.node.isEditable(e.target)||r&&"false"==Te(r).attr("contenteditable")?l.toolbar.disable():l.toolbar.enable(),!(!e.target||e.target===l.el)||(0===t.length||void(t[0].offsetHeight+t[0].offsetTop<=e.offsetY?b(t[t.length-1])&&(n?l.$el.append("<"+n+">"+Te.FE.MARKERS+"<br></"+n+">"):l.$el.append(Te.FE.MARKERS+"<br>"),l.selection.restore(),s()):e.offsetY<=10&&b(t[0])&&(n?l.$el.prepend("<"+n+">"+Te.FE.MARKERS+"<br></"+n+">"):l.$el.prepend(Te.FE.MARKERS+"<br>"),l.selection.restore(),s())))}function A(){n&&clearTimeout(n)}return{_init:function(){l.events.on("keydown",v),l.events.on("input",e),l.events.on("mousedown",a),l.events.on("keyup input",E),l.events.on("keypress",i),l.events.on("keydown",o),l.events.on("keyup",u),l.events.on("destroy",A),l.events.on("html.inserted",u),l.events.on("cut",t),l.opts.multiLine&&l.events.on("click",T)},ctrlKey:h,isCharacter:m,isArrow:g,forceUndo:function(){n&&(clearTimeout(n),l.undo.saveStep(),r=null)},isIME:function(){return c},isBrowserAction:function(e){var t=e.which;return h(e)||t==Te.FE.KEYCODE.F5},positionCaret:s}},Te.FE.MODULES.accessibility=function(f){var a=!0;function s(t){t&&t.length&&!f.$el.find('[contenteditable="true"]').is(":focus")&&(t.data("blur-event-set")||t.parents(".fr-popup").length||(f.events.$on(t,"blur",function(){var e=t.parents(".fr-toolbar, .fr-popup").data("instance")||f;e.events.blurActive()&&!f.core.hasFocus()&&e.events.trigger("blur"),setTimeout(function(){e.events.enableBlur()},100)},!0),t.data("blur-event-set",!0)),(t.parents(".fr-toolbar, .fr-popup").data("instance")||f).events.disableBlur(),t.focus(),f.shared.$f_el=t)}function p(e,t){var n=t?"last":"first",r=e.find("button:visible:not(.fr-disabled), .fr-group span.fr-command:visible")[n]();if(r.length)return s(r),!0}function o(e){return e.is("input, textarea, select")&&t(),f.events.disableBlur(),e.focus(),!0}function u(e,t){var n=e.find("input, textarea, button, select").filter(":visible").not(":disabled").filter(t?":last":":first");if(n.length)return o(n);if(f.shared.with_kb){var r=e.find(".fr-active-item:visible:first");if(r.length)return o(r);var i=e.find("[tabIndex]:visible:first");if(i.length)return o(i)}}function t(){0===f.$el.find(".fr-marker").length&&f.core.hasFocus()&&f.selection.save()}function l(){var e=f.popups.areVisible();if(e){var t=e.find(".fr-buttons");return t.find("button:focus, .fr-group span:focus").length?!p(e.data("instance").$tb):!p(t)}return!p(f.$tb)}function d(){var e=null;return f.shared.$f_el.is(".fr-dropdown.fr-active")?e=f.shared.$f_el:f.shared.$f_el.closest(".fr-dropdown-menu").prev().is(".fr-dropdown.fr-active")&&(e=f.shared.$f_el.closest(".fr-dropdown-menu").prev()),e}function n(e,t,n){if(f.shared.$f_el){var r=d();r&&(f.button.click(r),f.shared.$f_el=r);var i=e.find("button:visible:not(.fr-disabled), .fr-group span.fr-command:visible"),a=i.index(f.shared.$f_el);if(0===a&&!n||a==i.length-1&&n){var o;if(t){if(e.parent().is(".fr-popup"))o=!u(e.parent().children().not(".fr-buttons"),!n);!1===o&&(f.shared.$f_el=null)}t&&!1===o||p(e,!n)}else s(Te(i.get(a+(n?1:-1))));return!1}}function c(e,t){return n(e,t,!0)}function h(e,t){return n(e,t)}function g(e){if(f.shared.$f_el){var t;if(f.shared.$f_el.is(".fr-dropdown.fr-active"))return s(t=e?f.shared.$f_el.next().find(".fr-command:not(.fr-disabled)").first():f.shared.$f_el.next().find(".fr-command:not(.fr-disabled)").last()),!1;if(f.shared.$f_el.is("a.fr-command"))return(t=e?f.shared.$f_el.closest("li").nextAll(":visible:first").find(".fr-command:not(.fr-disabled)").first():f.shared.$f_el.closest("li").prevAll(":visible:first").find(".fr-command:not(.fr-disabled)").first()).length||(t=e?f.shared.$f_el.closest(".fr-dropdown-menu").find(".fr-command:not(.fr-disabled)").first():f.shared.$f_el.closest(".fr-dropdown-menu").find(".fr-command:not(.fr-disabled)").last()),s(t),!1}}function m(){if(f.shared.$f_el){if(f.shared.$f_el.hasClass("fr-dropdown"))f.button.click(f.shared.$f_el);else if(f.shared.$f_el.is("button.fr-back")){f.opts.toolbarInline&&(f.events.disableBlur(),f.events.focus());var e=f.popups.areVisible(f);e&&(f.shared.with_kb=!1),f.button.click(f.shared.$f_el),E(e)}else{if(f.events.disableBlur(),f.button.click(f.shared.$f_el),f.shared.$f_el.attr("data-popup")){var t=f.popups.areVisible(f);t&&t.data("popup-button",f.shared.$f_el)}else if(f.shared.$f_el.attr("data-modal")){var n=f.modals.areVisible(f);n&&n.data("modal-button",f.shared.$f_el)}f.shared.$f_el=null}return!1}}function v(){f.shared.$f_el&&(f.events.disableBlur(),f.shared.$f_el.blur(),f.shared.$f_el=null),!1!==f.events.trigger("toolbar.focusEditor")&&(f.events.disableBlur(),f.browser.msie||f.$el.focus(),f.events.focus())}function r(r){r&&r.length&&(f.events.$on(r,"keydown",function(e){if(!Te(e.target).is("a.fr-command, button.fr-command, .fr-group span.fr-command"))return!0;var t=r.parents(".fr-popup").data("instance")||r.data("instance")||f;f.shared.with_kb=!0;var n=t.accessibility.exec(e,r);return f.shared.with_kb=!1,n},!0),f.browser.msie||f.events.$on(r,"mouseenter","[tabIndex]",function(e){var t=r.parents(".fr-popup").data("instance")||r.data("instance")||f;if(!a)return e.stopPropagation(),void e.preventDefault();var n=Te(e.currentTarget);t.shared.$f_el&&t.shared.$f_el.not(n)&&t.accessibility.focusEditor()},!0))}function E(e){var t=e.data("popup-button");t&&setTimeout(function(){s(t),e.data("popup-button",null)},0)}function i(e){var t=f.popups.areVisible(e);t&&t.data("popup-button",null)}function e(e){var t=-1!=navigator.userAgent.indexOf("Mac OS X")?e.metaKey:e.ctrlKey;if(e.which==Te.FE.KEYCODE.F10&&!t&&!e.shiftKey&&e.altKey){f.shared.with_kb=!0;var n=f.popups.areVisible(f),r=!1;return n&&(r=u(n.children().not(".fr-buttons"))),r||l(),f.shared.with_kb=!1,e.preventDefault(),e.stopPropagation(),!1}return!0}return{_init:function(){f.$wp?f.events.on("keydown",e,!0):f.events.$on(f.$win,"keydown",e,!0),f.events.on("mousedown",function(e){i(f),f.shared.$f_el&&(f.accessibility.restoreSelection(),e.stopPropagation(),f.events.disableBlur(),f.shared.$f_el=null)},!0),f.events.on("blur",function(){f.shared.$f_el=null,i(f)},!0)},registerPopup:function(e){var d,c,t=f.popups.get(e),n=(d=e,c=f.popups.get(d),{_tiKeydown:function(e){var t=c.data("instance")||f;if(!1===t.events.trigger("popup.tab",[e]))return!1;var n=e.which,r=c.find(":focus:first");if(Te.FE.KEYCODE.TAB==n){e.preventDefault();var i=c.children().not(".fr-buttons"),a=i.find("input, textarea, button, select").filter(":visible").not(".fr-no-touch input, .fr-no-touch textarea, .fr-no-touch button, .fr-no-touch select, :disabled").toArray(),o=a.indexOf(this)+(e.shiftKey?-1:1);if(0<=o&&o<a.length)return t.events.disableBlur(),Te(a[o]).focus(),e.stopPropagation(),!1;var s=c.find(".fr-buttons");if(s.length&&p(s,!!e.shiftKey))return e.stopPropagation(),!1;if(u(i))return e.stopPropagation(),!1}else{if(Te.FE.KEYCODE.ENTER!=n||!e.target||"TEXTAREA"===e.target.tagName)return Te.FE.KEYCODE.ESC==n?(e.preventDefault(),e.stopPropagation(),t.accessibility.restoreSelection(),t.popups.isVisible(d)&&c.find(".fr-back:visible").length?(t.opts.toolbarInline&&(t.events.disableBlur(),t.events.focus()),t.button.exec(c.find(".fr-back:visible:first")),E(c)):t.popups.isVisible(d)&&c.find(".fr-dismiss:visible").length?t.button.exec(c.find(".fr-dismiss:visible:first")):(t.popups.hide(d),t.opts.toolbarInline&&t.toolbar.showInline(null,!0),E(c)),!1):Te.FE.KEYCODE.SPACE==n&&(r.is(".fr-submit")||r.is(".fr-dismiss"))?(e.preventDefault(),e.stopPropagation(),t.events.disableBlur(),t.button.exec(r),!0):t.keys.isBrowserAction(e)?void e.stopPropagation():r.is("input[type=text], textarea")?void e.stopPropagation():Te.FE.KEYCODE.SPACE==n&&(r.is(".fr-link-attr")||r.is("input[type=file]"))?void e.stopPropagation():(e.stopPropagation(),e.preventDefault(),!1);var l=null;0<c.find(".fr-submit:visible").length?l=c.find(".fr-submit:visible:first"):c.find(".fr-dismiss:visible").length&&(l=c.find(".fr-dismiss:visible:first")),l&&(e.preventDefault(),e.stopPropagation(),t.events.disableBlur(),t.button.exec(l))}},_tiMouseenter:function(){var e=c.data("instance")||f;i(e)}});r(t.find(".fr-buttons")),f.events.$on(t,"mouseenter","tabIndex",n._tiMouseenter,!0),f.events.$on(t.children().not(".fr-buttons"),"keydown","[tabIndex]",n._tiKeydown,!0),f.popups.onHide(e,function(){(t.data("instance")||f).accessibility.restoreSelection()}),f.popups.onShow(e,function(){a=!1,setTimeout(function(){a=!0},0)})},registerToolbar:r,focusToolbarElement:s,focusToolbar:p,focusContent:u,focusPopup:function(r){var i=r.children().not(".fr-buttons");i.data("mouseenter-event-set")||f.browser.msie||(f.events.$on(i,"mouseenter","[tabIndex]",function(e){var t=r.data("instance")||f;if(!a)return e.stopPropagation(),void e.preventDefault();var n=i.find(":focus:first");n.length&&!n.is("input, button, textarea, select")&&(t.events.disableBlur(),n.blur(),t.events.disableBlur(),t.events.focus())}),i.data("mouseenter-event-set",!0)),!u(i)&&f.shared.with_kb&&p(r.find(".fr-buttons"))},focusModal:function(e){f.core.hasFocus()||(f.events.disableBlur(),f.events.focus()),f.accessibility.saveSelection(),f.events.disableBlur(),f.$el.blur(),f.selection.clear(),f.events.disableBlur(),f.shared.with_kb?e.find(".fr-command[tabIndex], [tabIndex]").first().focus():e.find("[tabIndex]:first").focus()},focusEditor:v,focusPopupButton:E,focusModalButton:function(e){var t=e.data("modal-button");t&&setTimeout(function(){s(t),e.data("modal-button",null)},0)},hasFocus:function(){return null!=f.shared.$f_el},exec:function(e,t){var n=-1!=navigator.userAgent.indexOf("Mac OS X")?e.metaKey:e.ctrlKey,r=e.which,i=!1;return r!=Te.FE.KEYCODE.TAB||n||e.shiftKey||e.altKey?r!=Te.FE.KEYCODE.ARROW_RIGHT||n||e.shiftKey||e.altKey?r!=Te.FE.KEYCODE.TAB||n||!e.shiftKey||e.altKey?r!=Te.FE.KEYCODE.ARROW_LEFT||n||e.shiftKey||e.altKey?r!=Te.FE.KEYCODE.ARROW_UP||n||e.shiftKey||e.altKey?r!=Te.FE.KEYCODE.ARROW_DOWN||n||e.shiftKey||e.altKey?r!=Te.FE.KEYCODE.ENTER&&r!=Te.FE.KEYCODE.SPACE||n||e.shiftKey||e.altKey?r!=Te.FE.KEYCODE.ESC||n||e.shiftKey||e.altKey?r!=Te.FE.KEYCODE.F10||n||e.shiftKey||!e.altKey||(i=l()):i=function(e){if(f.shared.$f_el){var t=d();return t?(f.button.click(t),s(t)):e.parent().find(".fr-back:visible").length?(f.shared.with_kb=!1,f.opts.toolbarInline&&(f.events.disableBlur(),f.events.focus()),f.button.exec(e.parent().find(".fr-back:visible:first")),E(e.parent())):f.shared.$f_el.is("button, .fr-group span")&&(e.parent().is(".fr-popup")?(f.accessibility.restoreSelection(),f.shared.$f_el=null,!1!==f.events.trigger("toolbar.esc")&&(f.popups.hide(e.parent()),f.opts.toolbarInline&&f.toolbar.showInline(null,!0),E(e.parent()))):v()),!1}}(t):i=m():i=f.shared.$f_el&&f.shared.$f_el.is(".fr-dropdown:not(.fr-active)")?m():g(!0):i=g():i=h(t):i=h(t,!0):i=c(t):i=c(t,!0),f.shared.$f_el||i!==undefined||(i=!0),!i&&f.keys.isBrowserAction(e)&&(i=!0),!!i||(e.preventDefault(),e.stopPropagation(),!1)},saveSelection:t,restoreSelection:function(){f.$el.find(".fr-marker").length&&(f.events.disableBlur(),f.selection.restore(),f.events.enableBlur())}}},Te.FE.MODULES.format=function(m){function g(e,t){var n="<"+e;for(var r in t)t.hasOwnProperty(r)&&(n+=" "+r+'="'+t[r]+'"');return n+=">"}function u(e,t){var n=e;for(var r in t)t.hasOwnProperty(r)&&(n+="id"==r?"#"+t[r]:"class"==r?"."+t[r]:"["+r+'="'+t[r]+'"]');return n}function h(e,t){return!(!e||e.nodeType!=Node.ELEMENT_NODE)&&(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function v(e,t,n){var r,i,a,o={strong:{prop:"font-weight",val:"bold"},em:{prop:"font-style",val:"italic"}};if(e){for(;e.nodeType===Node.COMMENT_NODE;)e=e.nextSibling;if(e){if(m.node.isBlock(e)&&"HR"!==e.tagName)return m.node.hasClass(e.firstChild,"fr-marker")?v(e.firstChild.nextSibling,t,n):v(e.firstChild,t,n),!1;var s=Te(g(t,n)).insertBefore(e);(r=T(e))&&(0<=["strong","em"].indexOf(t)||"span"===t&&n.hasOwnProperty("style"))&&("span"===t?(i=(o=n.style.replace(/\;$/,"").split(":"))[0].trim(),a=o[1].trim()):(i=o[t].prop,a=o[t].val),"background-color"!==i&&(Te(r).css(i,a),function(e,t){var n,r=e.childNodes;for(n=0;n<r.length;n++)0<=["UL","OL","LI"].indexOf(r[n].tagName)&&""===r[n].style[t]&&Te(r[n]).css(t,"initial")}(r,i)));for(var l=e;l&&!Te(l).is(".fr-marker")&&0===Te(l).find(".fr-marker").length&&"UL"!=l.tagName&&"OL"!=l.tagName;){var d=l;if(m.node.isBlock(l)&&"HR"!==e.tagName)return v(l.firstChild,t,n),!1;l=l.nextSibling,s.append(d)}if(l){if(Te(l).find(".fr-marker").length||"UL"==l.tagName||"OL"==l.tagName)v(l.firstChild,t,n);else if(m.browser.mozilla&&m.node.hasClass(l,"fr-marker")){var c,f=m.selection.blocks(),p=f.length;for(c=0;c<p;c++)f[c]!=l.parentNode&&f[c].childNodes.length&&f[c].childNodes[0]!=l.parentNode&&(l=f[c].childNodes[1]||f[c].childNodes[0],(s=Te(g(t,n)).insertBefore(l)).append(l))}}else{for(var u=s.get(0).parentNode;u&&!u.nextSibling&&!m.node.isElement(u);)u=u.parentNode;if(u){var h=u.nextSibling;h&&(m.node.isBlock(h)?"HR"===h.tagName?v(h.nextSibling,t,n):v(h.firstChild,t,n):v(h,t,n))}}s.is(":empty")&&s.remove()}}}function n(e,t){var n;if(void 0===t&&(t={}),t.style&&delete t.style,m.selection.isCollapsed()){m.markers.insert(),m.$el.find(".fr-marker").replaceWith(g(e,t)+Te.FE.INVISIBLE_SPACE+Te.FE.MARKERS+("</"+e+">")),m.selection.restore()}else{var r;m.selection.save(),v(m.$el.find('.fr-marker[data-type="true"]').length&&m.$el.find('.fr-marker[data-type="true"]').get(0).nextSibling,e,t);do{for(r=m.$el.find(u(e,t)+" > "+u(e,t)),n=0;n<r.length;n++)r[n].outerHTML=r[n].innerHTML}while(r.length);m.el.normalize();var i=m.el.querySelectorAll(".fr-marker");for(n=0;n<i.length;n++){var a=Te(i[n]);!0===a.data("type")?h(a.get(0).nextSibling,u(e,t))&&a.next().prepend(a):h(a.get(0).previousSibling,u(e,t))&&a.prev().append(a)}m.selection.restore()}}function E(e,t,n,r){if(!r){var i=!1;if(!0===e.data("type"))for(;m.node.isFirstSibling(e.get(0))&&!e.parent().is(m.$el)&&!e.parent().is("ol")&&!e.parent().is("ul");)e.parent().before(e),i=!0;else if(!1===e.data("type"))for(;m.node.isLastSibling(e.get(0))&&!e.parent().is(m.$el)&&!e.parent().is("ol")&&!e.parent().is("ul");)e.parent().after(e),i=!0;if(i)return!0}if(e.parents(t).length||void 0===t){var a,o="",s="",l=e.parent();if(l.is(m.$el)||m.node.isBlock(l.get(0)))return!1;for(;!m.node.isBlock(l.parent().get(0))&&(void 0===t||void 0!==t&&!h(l.get(0),u(t,n)));)o+=m.node.closeTagString(l.get(0)),s=m.node.openTagString(l.get(0))+s,l=l.parent();var d=e.get(0).outerHTML;return e.replaceWith('<span id="mark"></span>'),a=l.html().replace(/<span id="mark"><\/span>/,o+m.node.closeTagString(l.get(0))+s+d+o+m.node.openTagString(l.get(0))+s),l.replaceWith(m.node.openTagString(l.get(0))+a+m.node.closeTagString(l.get(0))),!0}return!1}function r(t,n){void 0===n&&(n={}),n.style&&delete n.style;var r=m.selection.isCollapsed();m.selection.save();for(var i=!0;i;){i=!1;for(var a=m.$el.find(".fr-marker"),o=0;o<a.length;o++){var s=Te(a[o]),l=null;if(s.attr("data-cloned")||r||(l=s.clone().removeClass("fr-marker").addClass("fr-clone"),!0===s.data("type")?s.attr("data-cloned",!0).after(l):s.attr("data-cloned",!0).before(l)),E(s,t,n,r)){i=!0;break}}}!function e(t,n,r,i){for(var a,o=m.node.contents(t.get(0)),s={strong:{prop:"font-weight",val:"bold"},em:{prop:"font-style",val:"italic"}},l=0;l<o.length;l++){var d=o[l];if("false"!==d.isContentEditable&&0!=d.isContentEditable)if(d.innerHTML&&8203==d.innerHTML.charCodeAt()&&d.tagName.toLocaleLowerCase()==r&&(d.outerHTML=d.innerHTML),m.node.hasClass(d,"fr-marker"))n=(n+1)%2;else if(n)if((a="LI"===d.tagName?d:Te(d).parentsUntil(m.$el,"li").get(0))&&(void 0===r||0<=["strong","em"].indexOf(r))&&(r?Te(a).css(s[r].prop,""):a.style=""),0<Te(d).find(".fr-marker").length)n=e(Te(d),n,r,i);else{for(var c=Te(d).find(r||"*:not(br)"),f=c.length-1;0<=f;f--){var p=c[f];(a="LI"===p.tagName?p:Te(p).parentsUntil(m.$el,"li").get(0))&&(!r||0<=["strong","em"].indexOf(r))&&(r?Te(a).css(s[r].prop,""):a.style=""),m.node.isBlock(p)||m.node.isVoid(p)||void 0!==r&&!h(p,u(r,i))?m.node.isBlock(p)&&void 0===r&&"TABLE"!=d.tagName&&m.node.clearAttributes(p):m.node.hasClass(p,"fr-clone")||(p.outerHTML=p.innerHTML)}void 0===r&&d.nodeType==Node.ELEMENT_NODE&&!m.node.isVoid(d)||h(d,u(r,i))?m.node.isBlock(d)?void 0===r&&d.nodeType==Node.ELEMENT_NODE&&m.node.isBlock(d)&&"TABLE"!=d.tagName&&m.node.clearAttributes(d):m.node.hasClass(d,"fr-clone")||(d.outerHTML=d.innerHTML):void 0===r&&d.nodeType==Node.ELEMENT_NODE&&m.node.isBlock(d)&&"TABLE"!=d.tagName&&m.node.clearAttributes(d)}else 0<Te(d).find(".fr-marker").length&&(n=e(Te(d),n,r,i))}return n}(m.$el,0,t,n),r||(m.$el.find(".fr-marker").remove(),m.$el.find(".fr-clone").removeClass("fr-clone").addClass("fr-marker")),r&&m.$el.find(".fr-marker").before(Te.FE.INVISIBLE_SPACE).after(Te.FE.INVISIBLE_SPACE),!m.selection.text()&&Te(m.selection.blocks()[0]).each(function(e,t){var n=new RegExp(String.fromCharCode(8203),"g"),r=Te(t),i=r.html();i=i.replace(n,""),r.html(i)}),m.html.cleanEmptyTags(),m.el.normalize(),m.selection.restore()}function t(e,t){var n,r,i,a,o,s,l,d=null;if(m.selection.isCollapsed()){m.markers.insert();var c=(r=m.$el.find(".fr-marker")).parent();if(m.node.openTagString(c.get(0))=='<span style="'+e+": "+c.css(e)+';">'){if(m.node.isEmpty(c.get(0)))d=Te('<span style="'+e+": "+t+';">'+Te.FE.INVISIBLE_SPACE+Te.FE.MARKERS+"</span>"),c.replaceWith(d);else{var f={};f["style*"]=e+":",E(r,"span",f,!0),r=m.$el.find(".fr-marker"),t?(d=Te('<span style="'+e+": "+t+';">'+Te.FE.INVISIBLE_SPACE+Te.FE.MARKERS+"</span>"),r.replaceWith(d)):r.replaceWith(Te.FE.INVISIBLE_SPACE+Te.FE.MARKERS)}m.html.cleanEmptyTags()}else m.node.isEmpty(c.get(0))&&c.is("span")?(r.replaceWith(Te.FE.MARKERS),c.css(e,t)):(d=Te('<span style="'+e+": "+t+';">'+Te.FE.INVISIBLE_SPACE+Te.FE.MARKERS+"</span>"),r.replaceWith(d));d&&b(d,e,t)}else{if(m.selection.save(),null==t||"color"==e&&0<m.$el.find(".fr-marker").parents("u, a").length){var p=m.$el.find(".fr-marker");for(n=0;n<p.length;n++)if(!0===(r=Te(p[n])).data("type"))for(;m.node.isFirstSibling(r.get(0))&&!r.parent().is(m.$el)&&!m.node.isElement(r.parent().get(0))&&!m.node.isBlock(r.parent().get(0));)r.parent().before(r);else for(;m.node.isLastSibling(r.get(0))&&!r.parent().is(m.$el)&&!m.node.isElement(r.parent().get(0))&&!m.node.isBlock(r.parent().get(0));)r.parent().after(r)}var u=m.$el.find('.fr-marker[data-type="true"]').get(0).nextSibling,h={"class":"fr-unprocessed"};for(t&&(h.style=e+": "+t+";"),v(u,"span",h),m.$el.find(".fr-marker + .fr-unprocessed").each(function(){Te(this).prepend(Te(this).prev())}),m.$el.find(".fr-unprocessed + .fr-marker").each(function(){Te(this).prev().append(this)}),(t||"").match(/\dem$/)&&m.$el.find("span.fr-unprocessed").removeClass("fr-unprocessed");0<m.$el.find("span.fr-unprocessed").length;){if(i=T(d=m.$el.find("span.fr-unprocessed:first").removeClass("fr-unprocessed")),d.parent().get(0).normalize(),d.parent().is("span")&&1==d.parent().get(0).childNodes.length){d.parent().css(e,t);var g=d;d=d.parent(),g.replaceWith(g.html())}for(a=d.find("span"),i&&"background-color"!==e&&(i.normalize(),a=Te(i).find("span:not(.fr-unprocessed)")),n=a.length-1;0<=n;n--)o=a[n],s=e,l=void 0,(l=Te(o)).css(s,""),""===l.attr("style")&&l.replaceWith(l.html());b(d,e,t)}}!function(){var e;for(;0<m.$el.find(".fr-split:empty").length;)m.$el.find(".fr-split:empty").remove();m.$el.find(".fr-split").removeClass("fr-split"),m.$el.find('[style=""]').removeAttr("style"),m.$el.find('[class=""]').removeAttr("class"),m.html.cleanEmptyTags(),Te(m.$el.find("span").get().reverse()).each(function(){this.attributes&&0!==this.attributes.length||Te(this).replaceWith(this.innerHTML)}),m.el.normalize();var t=m.$el.find("span[style] + span[style]");for(e=0;e<t.length;e++){var n=Te(t[e]),r=Te(t[e]).prev();n.get(0).previousSibling==r.get(0)&&m.node.openTagString(n.get(0))==m.node.openTagString(r.get(0))&&(n.prepend(r.html()),r.remove())}m.$el.find("span[style] span[style]").each(function(){if(0<=Te(this).attr("style").indexOf("font-size")){var e=Te(this).parents("span[style]");0<=e.attr("style").indexOf("background-color")&&(Te(this).attr("style",Te(this).attr("style")+";"+e.attr("style")),E(Te(this),"span[style]",{},!1))}}),m.el.normalize(),m.selection.restore()}()}function b(e,t,n){var r,i,a,o=e.parentsUntil(m.$el,"span[style]"),s=[];for(r=o.length-1;0<=r;r--)i=o[r],a=t,0===Te(i).attr("style").indexOf(a+":")||0<=Te(i).attr("style").indexOf(";"+a+":")||0<=Te(i).attr("style").indexOf("; "+a+":")||s.push(o[r]);if((o=o.not(s)).length){for(var l="",d="",c="",f="",p=e.get(0);p=p.parentNode,Te(p).addClass("fr-split"),l+=m.node.closeTagString(p),d=m.node.openTagString(Te(p).clone().addClass("fr-split").get(0))+d,o.get(0)!=p&&(c+=m.node.closeTagString(p),f=m.node.openTagString(Te(p).clone().addClass("fr-split").get(0))+f),o.get(0)!=p;);var u=l+m.node.openTagString(Te(o.get(0)).clone().css(t,n||"").get(0))+f+e.css(t,"").get(0).outerHTML+c+"</span>"+d;e.replaceWith('<span id="fr-break"></span>');var h=o.get(0).outerHTML;Te(o.get(0)).replaceWith(h.replace(/<span id="fr-break"><\/span>/g,function(){return u}))}}function i(e,t){void 0===t&&(t={}),t.style&&delete t.style;var n=m.selection.ranges(0),r=n.startContainer;if(r.nodeType==Node.ELEMENT_NODE&&0<r.childNodes.length){var i=n.startOffset;r.childNodes.length<=i&&("sup"==e||"sub"==e)&&(i=r.childNodes.length-1),r=r.childNodes[i]?r.childNodes[i]:r}if(!n.collapsed&&r.nodeType==Node.TEXT_NODE&&n.startOffset==(r.textContent||"").length){for(;!m.node.isBlock(r.parentNode)&&!r.nextSibling;)r=r.parentNode;r.nextSibling&&(r=r.nextSibling)}for(var a=r;a&&a.nodeType==Node.ELEMENT_NODE&&!h(a,u(e,t));)a=a.firstChild;if(a&&a.nodeType==Node.ELEMENT_NODE&&h(a,u(e,t)))return!0;var o=r;for(o&&o.nodeType!=Node.ELEMENT_NODE&&(o=o.parentNode);o&&o.nodeType==Node.ELEMENT_NODE&&o!=m.el&&!h(o,u(e,t));)o=o.parentNode;return!(!o||o.nodeType!=Node.ELEMENT_NODE||o==m.el||!h(o,u(e,t)))}function T(e){var t,n,r,i,a,o;if(t="LI"===e.tagName?e:Te(e).parentsUntil(m.$el,"li").get(0)){if((o=m.selection.info(t)).atStart&&o.atEnd)return t;if(o.atStart&&!o.atEnd&&(n=Te(t).find(".fr-marker[data-type=false]").get(0),r=Te(n).parentsUntil(m.$el,"li").get(0),i=Te(n).parent().get(0),(a=n.nextSibling)&&(0<=["UL","OL"].indexOf(a.tagName)||a.isSameNode(i.lastChild)&&m.node.isVoid(a))||!r.isSameNode(t)||!a&&("LI"===i.tagName||!i.nextSibling||0<=["UL","OL"].indexOf(i.nextSibling.tagName)||m.node.isVoid(i.nextSibling))))return t}}return{is:i,toggle:function(e,t){i(e,t)?r(e,t):n(e,t)},apply:n,remove:r,applyStyle:t,removeStyle:function(e){t(e,null)}}},Te.extend(Te.FE.DEFAULTS,{indentMargin:20}),Te.FE.COMMANDS={bold:{title:"Bold",toggle:!0,refresh:function(e){var t=this.format.is("strong");e.toggleClass("fr-active",t).attr("aria-pressed",t)}},italic:{title:"Italic",toggle:!0,refresh:function(e){var t=this.format.is("em");e.toggleClass("fr-active",t).attr("aria-pressed",t)}},underline:{title:"Underline",toggle:!0,refresh:function(e){var t=this.format.is("u");e.toggleClass("fr-active",t).attr("aria-pressed",t)}},strikeThrough:{title:"Strikethrough",toggle:!0,refresh:function(e){var t=this.format.is("s");e.toggleClass("fr-active",t).attr("aria-pressed",t)}},subscript:{title:"Subscript",toggle:!0,refresh:function(e){var t=this.format.is("sub");e.toggleClass("fr-active",t).attr("aria-pressed",t)}},superscript:{title:"Superscript",toggle:!0,refresh:function(e){var t=this.format.is("sup");e.toggleClass("fr-active",t).attr("aria-pressed",t)}},outdent:{title:"Decrease Indent"},indent:{title:"Increase Indent"},undo:{title:"Undo",undo:!1,forcedRefresh:!0,disabled:!0},redo:{title:"Redo",undo:!1,forcedRefresh:!0,disabled:!0},insertHR:{title:"Insert Horizontal Line"},clearFormatting:{title:"Clear Formatting"},selectAll:{title:"Select All",undo:!1}},Te.FE.RegisterCommand=function(e,t){Te.FE.COMMANDS[e]=t},Te.FE.MODULES.commands=function(o){function i(e){return o.html.defaultTag()&&(e="<"+o.html.defaultTag()+">"+e+"</"+o.html.defaultTag()+">"),e}var a={bold:function(){e("bold","strong")},subscript:function(){o.format.is("sup")&&o.format.remove("sup"),e("subscript","sub")},superscript:function(){o.format.is("sub")&&o.format.remove("sub"),e("superscript","sup")},italic:function(){e("italic","em")},strikeThrough:function(){e("strikeThrough","s")},underline:function(){e("underline","u")},undo:function(){o.undo.run()},redo:function(){o.undo.redo()},indent:function(){n(1)},outdent:function(){n(-1)},show:function(){o.opts.toolbarInline&&o.toolbar.showInline(null,!0)},insertHR:function(){o.selection.remove();var e="";o.core.isEmpty()&&(e=i(e="<br>")),o.html.insert('<hr id="fr-just">'+e);var t,n=o.$el.find("hr#fr-just");if(n.removeAttr("id"),0===n.next().length){var r=o.html.defaultTag();r?n.after(Te("<"+r+">").append("<br>")):n.after("<br>")}n.prev().is("hr")?t=o.selection.setAfter(n.get(0),!1):n.next().is("hr")?t=o.selection.setBefore(n.get(0),!1):o.selection.setAfter(n.get(0),!1)||o.selection.setBefore(n.get(0),!1),t||void 0===t||(e=i(e=Te.FE.MARKERS+"<br>"),n.after(e)),o.selection.restore()},clearFormatting:function(){o.format.remove()},selectAll:function(){o.doc.execCommand("selectAll",!1,!1)}};function t(e,t){if(!1!==o.events.trigger("commands.before",Te.merge([e],t||[]))){var n=Te.FE.COMMANDS[e]&&Te.FE.COMMANDS[e].callback||a[e],r=!0,i=!1;Te.FE.COMMANDS[e]&&("undefined"!=typeof Te.FE.COMMANDS[e].focus&&(r=Te.FE.COMMANDS[e].focus),"undefined"!=typeof Te.FE.COMMANDS[e].accessibilityFocus&&(i=Te.FE.COMMANDS[e].accessibilityFocus)),(!o.core.hasFocus()&&r&&!o.popups.areVisible()||!o.core.hasFocus()&&i&&o.accessibility.hasFocus())&&o.events.focus(!0),Te.FE.COMMANDS[e]&&!1!==Te.FE.COMMANDS[e].undo&&(o.$el.find(".fr-marker").length&&(o.events.disableBlur(),o.selection.restore()),o.undo.saveStep()),n&&n.apply(o,Te.merge([e],t||[])),o.events.trigger("commands.after",Te.merge([e],t||[])),Te.FE.COMMANDS[e]&&!1!==Te.FE.COMMANDS[e].undo&&o.undo.saveStep()}}function e(e,t){o.format.toggle(t)}function n(e){o.selection.save(),o.html.wrap(!0,!0,!0,!0),o.selection.restore();for(var t=o.selection.blocks(),n=0;n<t.length;n++)if("LI"!=t[n].tagName||"LI"!=t[n].parentNode.tagName){var r=Te(t[n]);"LI"!=t[n].tagName&&"LI"==t[n].parentNode.tagName&&(r=Te(t[n].parentNode));var i="rtl"==o.opts.direction||"rtl"==r.css("direction")?"margin-right":"margin-left",a=o.helpers.getPX(r.css(i));if(r.width()<2*o.opts.indentMargin&&0<e)continue;r.css(i,Math.max(a+e*o.opts.indentMargin,0)||""),r.removeClass("fr-temp-div")}o.selection.save(),o.html.unwrap(),o.selection.restore()}function r(e){return function(){t(e)}}var s={};for(var l in a)a.hasOwnProperty(l)&&(s[l]=r(l));return Te.extend(s,{exec:t,_init:function(){o.events.on("keydown",function(e){var t=o.selection.element();if(t&&"HR"==t.tagName&&!o.keys.isArrow(e.which))return e.preventDefault(),!1}),o.events.on("keyup",function(e){var t=o.selection.element();if(t&&"HR"==t.tagName)if(e.which==Te.FE.KEYCODE.ARROW_LEFT||e.which==Te.FE.KEYCODE.ARROW_UP){if(t.previousSibling)return o.node.isBlock(t.previousSibling)?o.selection.setAtEnd(t.previousSibling):Te(t).before(Te.FE.MARKERS),o.selection.restore(),!1}else if((e.which==Te.FE.KEYCODE.ARROW_RIGHT||e.which==Te.FE.KEYCODE.ARROW_DOWN)&&t.nextSibling)return o.node.isBlock(t.nextSibling)?o.selection.setAtStart(t.nextSibling):Te(t).after(Te.FE.MARKERS),o.selection.restore(),!1}),o.events.on("mousedown",function(e){if(e.target&&"HR"==e.target.tagName)return e.preventDefault(),e.stopPropagation(),!1}),o.events.on("mouseup",function(){var e=o.selection.element();e==o.selection.endElement()&&e&&"HR"==e.tagName&&(e.nextSibling&&(o.node.isBlock(e.nextSibling)?o.selection.setAtStart(e.nextSibling):Te(e).after(Te.FE.MARKERS)),o.selection.restore())})}})},Te.FE.MODULES.data=function(p){var u="NCKB1zwtPA9tqzajXC2c2A7B-16VD3spzJ1C9C3D5oOF2OB1NB1LD7VA5QF4TE3gytXB2A4C-8VA2AC4E1D3GB2EB2KC3KD1MF1juuSB1A8C6yfbmd1B2a1A5qdsdB2tivbC3CB1KC1CH1eLA2sTF1B4I4H-7B-21UB6b1F5bzzzyAB4JC3MG2hjdKC1JE6C1E1cj1pD-16pUE5B4prra2B5ZB3D3C3pxj1EA6A3rnJA2C-7I-7JD9D1E1wYH1F3sTB5TA2G4H4ZA22qZA5BB3mjcvcCC3JB1xillavC-21VE6PC5SI4YC5C8mb1A3WC3BD2B5aoDA2qqAE3A5D-17fOD1D5RD4WC10tE6OAZC3nF-7b1C4A4D3qCF2fgmapcromlHA2QA6a1E1D3e1A6C2bie2F4iddnIA7B2mvnwcIB5OA1DB2OLQA3PB10WC7WC5d1E3uI-7b1D5D6b1E4D2arlAA4EA1F-11srxI-7MB1D7PF1E5B4adB-21YD5vrZH3D3xAC4E1A2GF2CF2J-7yNC2JE1MI2hH-7QB1C6B5B-9bA-7XB13a1B5VievwpKB4LA3NF-10H-9I-8hhaC-16nqPG4wsleTD5zqYF3h1G2B7B4yvGE2Pi1H-7C-21OE6B1uLD1kI4WC1E7C5g1D-8fue1C8C6c1D4D3Hpi1CC4kvGC2E1legallyXB4axVA11rsA4A-9nkdtlmzBA2GD3A13A6CB1dabE1lezrUE6RD5TB4A-7f1C8c1B5d1D4D3tyfCD5C2D2==",h=function(){for(var e=0,t=document.domain,n=t.split("."),r="_gd"+(new Date).getTime();e<n.length-1&&-1==document.cookie.indexOf(r+"="+r);)t=n.slice(-1-++e).join("."),document.cookie=r+"="+r+";domain="+t+";";return document.cookie=r+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+t+";",(t||"").replace(/(^\.*)|(\.*$)/g,"")}();function g(e){return e}var m,v,E=g(function(e){if(!e)return e;for(var t="",n=g("charCodeAt"),r=g("fromCharCode"),i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".indexOf(e[0]),a=1;a<e.length-2;a++){for(var o=d(++i),s=e[n](a),l="";/[0-9-]/.test(e[a+1]);)l+=e[++a];s=c(s,o,l=parseInt(l,10)||0),s^=i-1&31,t+=String[r](s)}return t});function d(e){for(var t=e.toString(),n=0,r=0;r<t.length;r++)n+=parseInt(t.charAt(r),10);return 10<n?n%9+1:n}function c(e,t,n){for(var r=Math.abs(n);0<r--;)e-=t;return n<0&&(e+=123),e}function b(e){return e&&"block"!==e.css("display")?(e.remove(),!0):e&&0===p.helpers.getPX(e.css("height"))?(e.remove(),!0):!(!e||"absolute"!==e.css("position")&&"fixed"!==e.css("position")||(e.remove(),0))}function T(e){return e&&0===p.$box.find(e).length}var e=0;function A(){if(10<e&&(p[g(E("0ppecjvc=="))](),setTimeout(function(){Te.FE=null},10)),!p.$box)return!1;p.$wp.prepend(E(g(E(u)))),m=p.$wp.find("> div:first"),v=m.find("> a"),"rtl"==p.opts.direction&&m.css("left","auto").css("right",0).attr("direction","rtl"),e++}function C(e){for(var t=[E("9qqG-7amjlwq=="),E("KA3B3C2A6D1D5H5H1A3=="),E("3B9B3B5F3C4G3E3=="),E("QzbzvxyB2yA-9m=="),E("ji1kacwmgG5bc=="),E("nmA-13aogi1A3c1jd=="),E("BA9ggq=="),E("emznbjbH3fij=="),E("tkC-22d1qC-13sD1wzF-7==")],n=0;n<t.length;n++)if(String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(t===undefined||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),e.endsWith(t[n]))return!0;return!1}return{_init:function(){var e=p.o_win.FEK;try{e=e||localStorage&&localStorage.FEK}catch(f){}e=p.opts.key||e||[""];var t=E(g("ziRA1E3B9pA5B-11D-11xg1A3ZB5D1D4B-11ED2EG2pdeoC1clIH4wB-22yQD5uF4YE3E3A9=="));"string"==typeof e&&(e=[e]);for(var n,r,i,a=!(p.ul=!0),o=0,s=0;s<e.length;s++){var l=(r=e[s],3===(i=(E(r)||"").split("|")).length?i:[null,null,E(r)||""]),d=l[2];if(d===E(g(E("mcVRDoB1BGILD7YFe1BTXBA7B6==")))||0<=d.indexOf(h,d.length-h.length)||C(h)){if(!((null===(n=l[1])||new Date(n)<new Date(E("hA2B2C2H2C9B3C4C6F2A1==")))&&0<(h||"").length)||C(h)){p.ul=!1;break}a=!0,u="RCZB17botVG4A-8yzia1C4A5DG3CD2cFB4qflmCE4I2FB1SC7F6PE4WE3RD6e2A4c1D3d1E2E3ehxdGE3CE2IB2LC1HG2LE1QA3QC7B-13cC-9epmkjc1B4e1C4pgjgvkOC5E1eNE1HB2LD2B-13WD5tvabUA5a1A4f1A2G3C2A-21cihKE3FE2DB2cccJE1iC-7G-7tD-17tVD6A-9qC-7QC7a1E4B4je1E3E2G2ecmsAA1xH-8HB11C1D1lgzQA3dTB8od1D4XE3ohb1B4E4D3mbLA10NA7C-21d1genodKC11PD9PE5tA-8UI3ZC5XB5B-11qXF2F-7wtwjAG3NA1IB1OD1HC1RD4QJ4evUF2D5XG2G4XA8pqocH1F3G2J2hcpHC4D1MD4C1MB8PD5klcQD1A8A6e2A3ed1E2A24A7HC5C3qA-9tiA-61dcC3MD1LE1D4SA3A9ZZXSE4g1C3Pa2C5ufbcGI3I2B4skLF2CA1vxB-22wgUC4kdH-8cVB5iwe1A2D3H3G-7DD5JC2ED2OH2JB10D3C2xHE1KA29PB11wdC-11C4cixb2C7a1C4YYE3B2A15uB-21wpCA1MF1NuC-21dyzD6pPG4I-7pmjc1A4yte1F3B-22yvCC3VbC-7qC-22qNE2hC1vH-8zad1RF6WF3DpI-7C8A-16hpf1F3D2ylalB-13BB2lpA-63IB3uOF6D5G4gabC-21UD2A3PH4ZA20B11b2C6ED4A2H3I1A15DB4KD2laC-8LA5B8B7==",o=l[0]||-1}}var c=new Image;!0===p.ul&&(A(),c.src=a?g(E(t))+"e="+o:g(E(t))+"u"),!0===p.ul&&(p.events.on("contentChanged",function(){(b(m)||b(v)||T(m)||T(v))&&A()}),p.events.on("html.get",function(e){return e+'<p data-f-id="pbf" style="text-align: center; font-size: 14px; margin-top: 30px; opacity: 0.65; font-family: sans-serif;">Powered by <a href="https://web.archive.org/web/20240606034029/https://www.froala.com/wysiwyg-editor?pb=1" title="Froala Editor">Froala Editor</a></p>'})),p.events.on("html.set",function(){var e=p.el.querySelector('[data-f-id="pbf"]');e&&Te(e).remove()}),p.events.on("destroy",function(){m&&m.length&&m.remove()},!0)}}},Te.extend(Te.FE.DEFAULTS,{pastePlain:!1,pasteDeniedTags:["colgroup","col","meta"],pasteDeniedAttrs:["class","id"],pasteAllowedStyleProps:[".*"],pasteAllowLocalImages:!1}),Te.FE.MODULES.paste=function(N){var x,o,i,w;function n(e,t){try{N.win.localStorage.setItem("fr-copied-html",e),N.win.localStorage.setItem("fr-copied-text",t)}catch(n){}}function e(e){var t=N.html.getSelected();n(t,Te("<div>").html(t).text()),"cut"==e.type&&(N.undo.saveStep(),setTimeout(function(){N.selection.save(),N.html.wrap(),N.selection.restore(),N.events.focus(),N.undo.saveStep()},0))}var a=!1;function t(e){if(N.edit.isDisabled())return!1;if(a)return!1;if(e.originalEvent&&(e=e.originalEvent),!1===N.events.trigger("paste.before",[e]))return e.preventDefault(),!1;if(N.$win.scrollTop(),e&&e.clipboardData&&e.clipboardData.getData){var t="",n=e.clipboardData.types;if(N.helpers.isArray(n))for(var r=0;r<n.length;r++)t+=n[r]+";";else t=n;if(x="",/text\/rtf/.test(t)&&(o=e.clipboardData.getData("text/rtf")),/text\/html/.test(t)&&!N.browser.safari?x=e.clipboardData.getData("text/html"):/text\/rtf/.test(t)&&N.browser.safari?x=o:/public.rtf/.test(t)&&N.browser.safari&&(x=e.clipboardData.getData("text/rtf")),""!==x)return s(),e.preventDefault&&(e.stopPropagation(),e.preventDefault()),!1;x=null}return function(){N.selection.save(),N.events.disableBlur(),x=null,i?(i.html(""),N.browser.edge&&N.opts.iframe&&N.$el.append(i)):(i=Te('<div contenteditable="true" style="position: fixed; top: 0; left: -9999px; height: 100%; width: 0; word-break: break-all; overflow:hidden; z-index: 2147483647; line-height: 140%; -moz-user-select: text; -webkit-user-select: text; -ms-user-select: text; user-select: text;" tabIndex="-1"></div>'),N.browser.webkit||N.browser.mozilla?(i.css("top",N.$sc.scrollTop()),N.$el.after(i)):N.browser.edge&&N.opts.iframe?N.$el.append(i):N.$box.after(i),N.events.on("destroy",function(){i.remove()}));var e;N.helpers.isIOS()&&N.$sc&&(e=N.$sc.scrollTop());N.opts.iframe&&N.$el.attr("contenteditable","false");i.focus(),N.helpers.isIOS()&&N.$sc&&N.$sc.scrollTop(e);N.win.setTimeout(s,1)}(),!1}function r(e){if(e.originalEvent&&(e=e.originalEvent),e&&e.dataTransfer&&e.dataTransfer.getData){var t="",n=e.dataTransfer.types;if(N.helpers.isArray(n))for(var r=0;r<n.length;r++)t+=n[r]+";";else t=n;if(x="",/text\/rtf/.test(t)&&(o=e.dataTransfer.getData("text/rtf")),/text\/html/.test(t)?x=e.dataTransfer.getData("text/html"):/text\/rtf/.test(t)&&N.browser.safari?x=o:/text\/plain/.test(t)&&!this.browser.mozilla&&(x=N.html.escapeEntities(e.dataTransfer.getData("text/plain")).replace(/\n/g,"<br>")),""!==x){N.keys.forceUndo(),w=N.snapshot.get(),N.selection.save(),N.$el.find(".fr-marker").removeClass("fr-marker").addClass("fr-marker-helper");var i=N.markers.insertAtPoint(e);if(N.$el.find(".fr-marker").removeClass("fr-marker").addClass("fr-marker-placeholder"),N.$el.find(".fr-marker-helper").addClass("fr-marker").removeClass("fr-marker-helper"),N.selection.restore(),N.selection.remove(),N.$el.find(".fr-marker-placeholder").addClass("fr-marker").removeClass("fr-marker-placeholder"),!1!==i){var a=N.el.querySelector(".fr-marker");return Te(a).replaceWith(Te.FE.MARKERS),N.selection.restore(),s(),e.preventDefault&&(e.stopPropagation(),e.preventDefault()),!1}}else x=null}}function s(){N.opts.iframe&&N.$el.attr("contenteditable","true"),N.browser.edge&&N.opts.iframe&&N.$box.after(i),w||(N.keys.forceUndo(),w=N.snapshot.get()),x||(x=i.get(0).innerHTML,N.selection.restore(),N.events.enableBlur());var e=x.match(/(class=\"?Mso|class=\'?Mso|class="?Xl|class='?Xl|class=Xl|style=\"[^\"]*\bmso\-|style=\'[^\']*\bmso\-|w:WordDocument|LibreOffice)/gi),t=x.match(/(LibreOffice)/gi),n=N.events.chainTrigger("paste.beforeCleanup",x);n&&"string"==typeof n&&(x=n),(!e||e&&!1!==N.events.trigger("paste.wordPaste",[x]))&&l(x,e,!1,t)}function O(e){for(var t="",n=0;n++<e;)t+="&nbsp;";return t}function l(r,e,t,n){var i,a=null,o=null;if(0<=r.toLowerCase().indexOf("<body")){var s="";0<=r.indexOf("<style")&&(s=r.replace(/[.\s\S\w\W<>]*(<style[^>]*>[\s]*[.\s\S\w\W<>]*[\s]*<\/style>)[.\s\S\w\W<>]*/gi,"$1")),r=s+r.replace(/[.\s\S\w\W<>]*<body[^>]*>[\s]*([.\s\S\w\W<>]*)[\s]*<\/body>[.\s\S\w\W<>]*/gi,"$1");var l=0,d="";r.replace(/<pre.*?>([\s\S]*?)<\/pre>/gi,function(e,t,n){l<n&&(d+=r.substring(l,n).replace(/ \n/g," ").replace(/\n /g," ").replace(/([^>])\n([^<])/g,"$1 $2")),d+=e,l=n+e.length}),r.length>l+1&&(d+=r.substring(l,r.length).replace(/ \n/g," ").replace(/\n /g," ").replace(/([^>])\n([^<])/g,"$1 $2")),r=d}var c=!1;0<=r.indexOf('id="docs-internal-guid')&&(r=r.replace(/^[\w\W\s\S]* id="docs-internal-guid[^>]*>([\w\W\s\S]*)<\/b>[\w\W\s\S]*$/g,"$1"),c=!0),0<=r.indexOf('content="Sheets"')&&(r=r.replace(/width:0px;/g,""));var f=!1,p=!1;if(!e)if(f=function(e){var t=null;try{t=N.win.localStorage.getItem("fr-copied-text")}catch(n){}return!(!t||Te("<div>").html(e).text().replace(/\u00A0/gi," ").replace(/\r|\n/gi,"")!=t.replace(/\u00A0/gi," ").replace(/\r|\n/gi,""))}(r),p=function(){var e=null;try{e=N.win.localStorage.getItem("fr-dragged-content-text")}catch(t){}return!(!e||Te("<div>").html(x).text().replace(/\u00A0/gi," ").replace(/\r|\n/gi,"")!=e.replace(/\u00A0/gi," ").replace(/\r|\n/gi,""))}(),f&&(r=N.win.localStorage.getItem("fr-copied-html")),p&&(f=!0,r=N.win.localStorage.getItem("fr-dragged-content-html")),f)r=N.clean.html(r,N.opts.pasteDeniedTags,N.opts.pasteDeniedAttrs);else{var u=N.opts.htmlAllowedStyleProps;N.opts.htmlAllowedStyleProps=N.opts.pasteAllowedStyleProps,N.opts.htmlAllowComments=!1,r=(r=(r=r.replace(/<span class="Apple-tab-span">\s*<\/span>/g,O(N.opts.tabSpaces||4))).replace(/<span class="Apple-tab-span" style="white-space:pre">(\t*)<\/span>/g,function(e,t){return O(t.length*(N.opts.tabSpaces||4))})).replace(/\t/g,O(N.opts.tabSpaces||4)),r=N.clean.html(r,N.opts.pasteDeniedTags,N.opts.pasteDeniedAttrs),N.opts.htmlAllowedStyleProps=u,N.opts.htmlAllowComments=!0,r=(r=(r=I(r)).replace(/\r/g,"")).replace(/^ */g,"").replace(/ *$/g,"")}!e||N.wordPaste&&t||(0===(r=r.replace(/^\n*/g,"").replace(/^ /g,"")).indexOf("<colgroup>")&&(r="<table>"+r+"</table>"),r=I(r=function(e){var t;e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/<p(.*?)class="?'?MsoListParagraph"?'? ([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ul><li>$3</li></ul>")).replace(/<p(.*?)class="?'?NumberedText"?'? ([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ol><li>$3</li></ol>")).replace(/<p(.*?)class="?'?MsoListParagraphCxSpFirst"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ul><li$3>$5</li>")).replace(/<p(.*?)class="?'?NumberedTextCxSpFirst"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ol><li$3>$5</li>")).replace(/<p(.*?)class="?'?MsoListParagraphCxSpMiddle"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li>")).replace(/<p(.*?)class="?'?NumberedTextCxSpMiddle"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li>")).replace(/<p(.*?)class="?'?MsoListBullet"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li>")).replace(/<p(.*?)class="?'?MsoListParagraphCxSpLast"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li></ul>")).replace(/<p(.*?)class="?'?NumberedTextCxSpLast"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li></ol>")).replace(/<span([^<]*?)style="?'?mso-list:Ignore"?'?([\s\S]*?)>([\s\S]*?)<span/gi,"<span><span")).replace(/<!--\[if \!supportLists\]-->([\s\S]*?)<!--\[endif\]-->/gi,"")).replace(/<!\[if \!supportLists\]>([\s\S]*?)<!\[endif\]>/gi,"")).replace(/(\n|\r| class=(")?Mso[a-zA-Z0-9]+(")?)/gi," ")).replace(/<!--[\s\S]*?-->/gi,"")).replace(/<(\/)*(meta|link|span|\\?xml:|st1:|o:|font)(.*?)>/gi,"");var n,r=["style","script","applet","embed","noframes","noscript"];for(t=0;t<r.length;t++){var i=new RegExp("<"+r[t]+".*?"+r[t]+"(.*?)>","gi");e=e.replace(i,"")}for(e=(e=(e=e.replace(/&nbsp;/gi," ")).replace(/<td([^>]*)><\/td>/g,"<td$1><br></td>")).replace(/<th([^>]*)><\/th>/g,"<th$1><br></th>");(e=(n=e).replace(/<[^\/>][^>]*><\/[^>]+>/gi,""))!=n;);e=(e=e.replace(/<lilevel([^1])([^>]*)>/gi,'<li data-indent="true"$2>')).replace(/<lilevel1([^>]*)>/gi,"<li$1>"),e=(e=(e=N.clean.html(e,N.opts.pasteDeniedTags,N.opts.pasteDeniedAttrs)).replace(/<a>(.[^<]+)<\/a>/gi,"$1")).replace(/<br> */g,"<br>");var a=N.o_doc.createElement("div");a.innerHTML=e;var o=a.querySelectorAll("li[data-indent]");for(t=0;t<o.length;t++){var s=o[t],l=s.previousElementSibling;if(l&&"LI"==l.tagName){var d=l.querySelector(":scope > ul, :scope > ol");d||(d=document.createElement("ul"),l.appendChild(d)),d.appendChild(s)}else s.removeAttribute("data-indent")}return N.html.cleanBlankSpaces(a),e=a.innerHTML}(r))),N.opts.pastePlain&&!p&&(r=function(e){var t,n=null,r=N.doc.createElement("div");r.innerHTML=e;var i=r.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, pre, blockquote");for(t=0;t<i.length;t++)(n=i[t]).outerHTML="<"+(N.html.defaultTag()||"DIV")+">"+n.innerHTML+"</"+(N.html.defaultTag()||"DIV")+">";for(t=(i=r.querySelectorAll("*:not("+"p, div, h1, h2, h3, h4, h5, h6, pre, blockquote, ul, ol, li, table, tbody, thead, tr, td, br, img".split(",").join("):not(")+")")).length-1;0<=t;t--)(n=i[t]).outerHTML=n.innerHTML;var a=function(e){for(var t=N.node.contents(e),n=0;n<t.length;n++)t[n].nodeType!=Node.TEXT_NODE&&t[n].nodeType!=Node.ELEMENT_NODE?t[n].parentNode.removeChild(t[n]):a(t[n])};return a(r),r.innerHTML}(r));var h=N.events.chainTrigger("paste.afterCleanup",r);if("string"==typeof h&&(r=h),""!==r){var g=N.o_doc.createElement("div");if(0<=(g.innerHTML=r).indexOf("<body>")?(N.html.cleanBlankSpaces(g),N.spaces.normalize(g,!0)):N.spaces.normalize(g),n){var m=g.getElementsByTagName("li");for(i=m.length-1;0<=i;i--){var v=m[i].getElementsByTagName("p");if(1==v.length){var E=v[0];E.outerHTML=E.innerHTML}}}var b=g.getElementsByTagName("span");for(i=b.length-1;0<=i;i--){var T=b[i];0===T.attributes.length&&(T.outerHTML=T.innerHTML)}if(!0===N.opts.linkAlwaysBlank){var A=g.getElementsByTagName("a");for(i=A.length-1;0<=i;i--){var C=A[i];C.getAttribute("target")||C.setAttribute("target","_blank")}}var S=N.selection.element(),R=!1;if(S&&Te(S).parentsUntil(N.el,"ul, ol").length&&(R=!0),R){var y=g.children;1==y.length&&0<=["OL","UL"].indexOf(y[0].tagName)&&(y[0].outerHTML=y[0].innerHTML)}if(!c){var L=g.getElementsByTagName("br");for(i=L.length-1;0<=i;i--){var _=L[i];N.node.isBlock(_.previousSibling)&&_.parentNode.removeChild(_)}}if(N.opts.enter==Te.FE.ENTER_BR)for(i=(a=g.querySelectorAll("p, div")).length-1;0<=i;i--)0===(o=a[i]).attributes.length&&(o.outerHTML=o.innerHTML+(o.nextSibling&&!N.node.isEmpty(o)?"<br>":""));else if(N.opts.enter==Te.FE.ENTER_DIV)for(i=(a=g.getElementsByTagName("p")).length-1;0<=i;i--)0===(o=a[i]).attributes.length&&(o.outerHTML="<div>"+o.innerHTML+"</div>");else N.opts.enter==Te.FE.ENTER_P&&1==g.childNodes.length&&"P"==g.childNodes[0].tagName&&0===g.childNodes[0].attributes.length&&(g.childNodes[0].outerHTML=g.childNodes[0].innerHTML);r=g.innerHTML,f&&(r=function(e){var t,n=N.o_doc.createElement("div");n.innerHTML=e;var r=n.querySelectorAll("*:empty:not(td):not(th):not(tr):not(iframe):not(svg):not("+Te.FE.VOID_ELEMENTS.join("):not(")+"):not("+N.opts.htmlAllowedEmptyTags.join("):not(")+")");for(;r.length;){for(t=0;t<r.length;t++)r[t].parentNode.removeChild(r[t]);r=n.querySelectorAll("*:empty:not(td):not(th):not(tr):not(iframe):not(svg):not("+Te.FE.VOID_ELEMENTS.join("):not(")+"):not("+N.opts.htmlAllowedEmptyTags.join("):not(")+")")}return n.innerHTML}(r)),N.html.insert(r,!0)}N.events.trigger("paste.after"),N.undo.saveStep(w),w=null,N.undo.saveStep()}function d(e){for(var t=e.length-1;0<=t;t--)e[t].attributes&&e[t].attributes.length&&e.splice(t,1);return e}function I(e){var t,n=N.o_doc.createElement("div");n.innerHTML=e;for(var r=d(Array.prototype.slice.call(n.querySelectorAll(":scope > div:not([style]), td > div:not([style]), th > div:not([style]), li > div:not([style])")));r.length;){var i=r[r.length-1];if(N.html.defaultTag()&&"div"!=N.html.defaultTag())i.querySelector(N.html.blockTagsQuery())?i.outerHTML=i.innerHTML:i.outerHTML="<"+N.html.defaultTag()+">"+i.innerHTML+"</"+N.html.defaultTag()+">";else{var a=i.querySelectorAll("*");!a.length||"BR"!==a[a.length-1].tagName&&0===i.innerText.length?i.outerHTML=i.innerHTML+(i.nextSibling?"<br>":""):!a.length||"BR"!==a[a.length-1].tagName||a[a.length-1].nextSibling?i.outerHTML=i.innerHTML+(i.nextSibling?"<br>":""):i.outerHTML=i.innerHTML}r=d(Array.prototype.slice.call(n.querySelectorAll(":scope > div:not([style]), td > div:not([style]), th > div:not([style]), li > div:not([style])")))}for(r=d(Array.prototype.slice.call(n.querySelectorAll("div:not([style])")));r.length;){for(t=0;t<r.length;t++){var o=r[t],s=o.innerHTML.replace(/\u0009/gi,"").trim();try{o.outerHTML=s}catch(l){}}r=d(Array.prototype.slice.call(n.querySelectorAll("div:not([style])")))}return n.innerHTML}function c(e){if(e.originalEvent&&e.originalEvent.target&&e.originalEvent.target.nodeType==Node.TEXT_NODE)try{N.win.localStorage.setItem("fr-dragged-content-html",e.originalEvent.dataTransfer.getData("text/html")),N.win.localStorage.setItem("fr-dragged-content-text",e.originalEvent.dataTransfer.getData("text/plain"))}catch(t){}}function f(){N.el.removeEventListener("copy",e),N.el.removeEventListener("cut",e),N.el.removeEventListener("paste",t)}return{_init:function(){N.el.addEventListener("copy",e),N.el.addEventListener("cut",e),N.el.addEventListener("paste",t,{capture:!0}),N.events.on("drop",r),N.browser.msie&&N.browser.version<11&&(N.events.on("mouseup",function(e){2==e.button&&(setTimeout(function(){a=!1},50),a=!0)},!0),N.events.on("beforepaste",t)),N.events.on("dragstart",c,!0),N.events.on("destroy",f)},cleanEmptyTagsAndDivs:I,getRtfClipboard:function(){return o},saveCopiedText:n,clean:l}},Te.extend(Te.FE.DEFAULTS,{shortcutsEnabled:[],shortcutsHint:!0}),Te.FE.SHORTCUTS_MAP={},Te.FE.RegisterShortcut=function(e,t,n,r,i,a){Te.FE.SHORTCUTS_MAP[(i?"^":"")+(a?"@":"")+e]={cmd:t,val:n,letter:r,shift:i,option:a},Te.FE.DEFAULTS.shortcutsEnabled.push(t)},Te.FE.RegisterShortcut(Te.FE.KEYCODE.E,"show",null,"E",!1,!1),Te.FE.RegisterShortcut(Te.FE.KEYCODE.B,"bold",null,"B",!1,!1),Te.FE.RegisterShortcut(Te.FE.KEYCODE.I,"italic",null,"I",!1,!1),Te.FE.RegisterShortcut(Te.FE.KEYCODE.U,"underline",null,"U",!1,!1),Te.FE.RegisterShortcut(Te.FE.KEYCODE.S,"strikeThrough",null,"S",!1,!1),Te.FE.RegisterShortcut(Te.FE.KEYCODE.CLOSE_SQUARE_BRACKET,"indent",null,"]",!1,!1),Te.FE.RegisterShortcut(Te.FE.KEYCODE.OPEN_SQUARE_BRACKET,"outdent",null,"[",!1,!1),Te.FE.RegisterShortcut(Te.FE.KEYCODE.Z,"undo",null,"Z",!1,!1),Te.FE.RegisterShortcut(Te.FE.KEYCODE.Z,"redo",null,"Z",!0,!1),Te.FE.RegisterShortcut(Te.FE.KEYCODE.Y,"redo",null,"Y",!1,!1),Te.FE.MODULES.shortcuts=function(l){var r=null;var d=!1;function e(e){if(!l.core.hasFocus())return!0;var t=e.which,n=-1!=navigator.userAgent.indexOf("Mac OS X")?e.metaKey:e.ctrlKey;if("keyup"==e.type&&d&&t!=Te.FE.KEYCODE.META)return d=!1;"keydown"==e.type&&(d=!1);var r=(e.shiftKey?"^":"")+(e.altKey?"@":"")+t,i=l.node.blockParent(l.selection.blocks()[0]);if(i&&"TR"==i.tagName&&Te(i).attr("contenteditable")==undefined&&(i=i.closest("table")),n&&Te.FE.SHORTCUTS_MAP[r]&&(!i||"false"!=Te(i).attr("contenteditable"))){var a=Te.FE.SHORTCUTS_MAP[r].cmd;if(a&&0<=l.opts.shortcutsEnabled.indexOf(a)){var o,s=Te.FE.SHORTCUTS_MAP[r].val;if(a&&!s?o=l.$tb.find('.fr-command[data-cmd="'+a+'"]'):a&&s&&(o=l.$tb.find('.fr-command[data-cmd="'+a+'"][data-param1="'+s+'"]')),o.length)return e.preventDefault(),e.stopPropagation(),o.parents(".fr-toolbar").data("instance",l),"keydown"==e.type&&(l.button.exec(o),d=!0),!1;if(a&&(l.commands[a]||Te.FE.COMMANDS[a]&&Te.FE.COMMANDS[a].callback))return e.preventDefault(),e.stopPropagation(),"keydown"==e.type&&((l.commands[a]||Te.FE.COMMANDS[a].callback)(),d=!0),!1}}}return{_init:function(){l.events.on("keydown",e,!0),l.events.on("keyup",e,!0)},get:function(e){if(!l.opts.shortcutsHint)return null;if(!r)for(var t in r={},Te.FE.SHORTCUTS_MAP)Te.FE.SHORTCUTS_MAP.hasOwnProperty(t)&&0<=l.opts.shortcutsEnabled.indexOf(Te.FE.SHORTCUTS_MAP[t].cmd)&&(r[Te.FE.SHORTCUTS_MAP[t].cmd+"."+(Te.FE.SHORTCUTS_MAP[t].val||"")]={shift:Te.FE.SHORTCUTS_MAP[t].shift,option:Te.FE.SHORTCUTS_MAP[t].option,letter:Te.FE.SHORTCUTS_MAP[t].letter});var n=r[e];return n?(l.helpers.isMac()?String.fromCharCode(8984):l.language.translate("Ctrl")+"+")+(n.shift?l.helpers.isMac()?String.fromCharCode(8679):l.language.translate("Shift")+"+":"")+(n.option?l.helpers.isMac()?String.fromCharCode(8997):l.language.translate("Alt")+"+":"")+n.letter:null}}},Te.FE.MODULES.snapshot=function(l){function n(e){for(var t=e.parentNode.childNodes,n=0,r=null,i=0;i<t.length;i++){if(r){var a=t[i].nodeType===Node.TEXT_NODE&&""===t[i].textContent,o=r.nodeType===Node.TEXT_NODE&&t[i].nodeType===Node.TEXT_NODE,s=r.nodeType===Node.TEXT_NODE&&""===r.textContent;a||o||s||n++}if(t[i]==e)return n;r=t[i]}}function i(e){var t=[];if(!e.parentNode)return[];for(;!l.node.isElement(e);)t.push(n(e)),e=e.parentNode;return t.reverse()}function a(e,t){for(;e&&e.nodeType===Node.TEXT_NODE;){var n=e.previousSibling;n&&n.nodeType==Node.TEXT_NODE&&(t+=n.textContent.length),e=n}return t}function d(e){for(var t=l.el,n=0;n<e.length;n++)t=t.childNodes[e[n]];return t}function r(e,t){try{var n=d(t.scLoc),r=t.scOffset,i=d(t.ecLoc),a=t.ecOffset,o=l.doc.createRange();o.setStart(n,r),o.setEnd(i,a),e.addRange(o)}catch(s){}}return{get:function(){var e,t={};if(l.events.trigger("snapshot.before"),t.html=(l.$wp?l.$el.html():l.$oel.get(0).outerHTML).replace(/ style=""/g,""),t.ranges=[],l.$wp&&l.selection.inEditor()&&l.core.hasFocus())for(var n=l.selection.ranges(),r=0;r<n.length;r++)t.ranges.push({scLoc:i((e=n[r]).startContainer),scOffset:a(e.startContainer,e.startOffset),ecLoc:i(e.endContainer),ecOffset:a(e.endContainer,e.endOffset)});return l.events.trigger("snapshot.after",[t]),t},restore:function(e){l.$el.html()!=e.html&&(l.opts.htmlExecuteScripts?l.$el.html(e.html):l.el.innerHTML=e.html);var t=l.selection.get();l.selection.clear(),l.events.focus(!0);for(var n=0;n<e.ranges.length;n++)r(t,e.ranges[n])},equal:function(e,t){return e.html==t.html&&(!l.core.hasFocus()||JSON.stringify(e.ranges)==JSON.stringify(t.ranges))}}},Te.FE.MODULES.undo=function(n){function e(e){var t=e.which;n.keys.ctrlKey(e)&&(90==t&&e.shiftKey&&e.preventDefault(),90==t&&e.preventDefault())}var t=null;function r(){if(!n.undo_stack||n.undoing)return!1;for(;n.undo_stack.length>n.undo_index;)n.undo_stack.pop()}function i(){t=(n.$wp?n.$el.html():n.$oel.get(0).outerHTML).replace(/ style=""/g,""),n.undo_index=0,n.undo_stack=[]}function a(){n.undo_stack=[]}return{_init:function(){i(),n.events.on("initialized",function(){t=(n.$wp?n.$el.html():n.$oel.get(0).outerHTML).replace(/ style=""/g,"")}),n.events.on("blur",function(){n.el.querySelector(".fr-dragging")||n.undo.saveStep()}),n.events.on("keydown",e),n.events.on("destroy",a)},run:function(){if(1<n.undo_index){n.undoing=!0;var e=n.undo_stack[--n.undo_index-1];clearTimeout(n._content_changed_timer),n.snapshot.restore(e),t=e.html,n.popups.hideAll(),n.toolbar.enable(),n.events.trigger("contentChanged"),n.events.trigger("commands.undo"),n.undoing=!1}},redo:function(){if(n.undo_index<n.undo_stack.length){n.undoing=!0;var e=n.undo_stack[n.undo_index++];clearTimeout(n._content_changed_timer),n.snapshot.restore(e),t=e.html,n.popups.hideAll(),n.toolbar.enable(),n.events.trigger("contentChanged"),n.events.trigger("commands.redo"),n.undoing=!1}},canDo:function(){return!(0===n.undo_stack.length||n.undo_index<=1)},canRedo:function(){return n.undo_index!=n.undo_stack.length},dropRedo:r,reset:i,saveStep:function(e){if(!n.undo_stack||n.undoing||n.el.querySelector(".fr-marker"))return!1;void 0===e?(e=n.snapshot.get(),n.undo_stack[n.undo_index-1]&&n.snapshot.equal(n.undo_stack[n.undo_index-1],e)||(r(),n.undo_stack.push(e),n.undo_index++,e.html!=t&&(n.events.trigger("contentChanged"),t=e.html))):(r(),0<n.undo_index?n.undo_stack[n.undo_index-1]=e:(n.undo_stack.push(e),n.undo_index++))}}},Te.FE.ICON_TEMPLATES={font_awesome:'<i class="fa fa-[NAME]" aria-hidden="true"></i>',font_awesome_5:'<i class="fas fa-[FA5NAME]" aria-hidden="true"></i>',font_awesome_5r:'<i class="far fa-[FA5NAME]" aria-hidden="true"></i>',font_awesome_5l:'<i class="fal fa-[FA5NAME]" aria-hidden="true"></i>',font_awesome_5b:'<i class="fab fa-[FA5NAME]" aria-hidden="true"></i>',text:'<span style="text-align: center;">[NAME]</span>',image:"<img src=[SRC] alt=[ALT] />",svg:'<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">[PATH]</svg>',empty:" "},Te.FE.ICONS={bold:{NAME:"bold"},italic:{NAME:"italic"},underline:{NAME:"underline"},strikeThrough:{NAME:"strikethrough"},subscript:{NAME:"subscript"},superscript:{NAME:"superscript"},color:{NAME:"tint"},outdent:{NAME:"outdent"},indent:{NAME:"indent"},undo:{NAME:"rotate-left",FA5NAME:"undo"},redo:{NAME:"rotate-right",FA5NAME:"redo"},insertHR:{NAME:"minus"},clearFormatting:{NAME:"eraser"},selectAll:{NAME:"mouse-pointer"}},Te.FE.DefineIconTemplate=function(e,t){Te.FE.ICON_TEMPLATES[e]=t},Te.FE.DefineIcon=function(e,t){Te.FE.ICONS[e]=t},Te.extend(Te.FE.DEFAULTS,{iconsTemplate:"font_awesome"}),Te.FE.MODULES.icon=function(i){return{create:function(n){var e=null,r=Te.FE.ICONS[n];if(void 0!==r){var t=r.template||Te.FE.ICON_DEFAULT_TEMPLATE||i.opts.iconsTemplate;t&&t.apply&&(t=t.apply(i)),r.FA5NAME||(r.FA5NAME=r.NAME),t&&(t=Te.FE.ICON_TEMPLATES[t])&&(e=t.replace(/\[([a-zA-Z0-9]*)\]/g,function(e,t){return"NAME"==t?r[t]||n:r[t]}))}return e||n},getTemplate:function(e){var t=Te.FE.ICONS[e],n=i.opts.iconsTemplate;return void 0!==t?n=t.template||Te.FE.ICON_DEFAULT_TEMPLATE||i.opts.iconsTemplate:n}}},Te.extend(Te.FE.DEFAULTS,{tooltips:!0}),Te.FE.MODULES.tooltip=function(i){function r(){if(i.helpers.isMobile())return!1;i.$tooltip&&i.$tooltip.removeClass("fr-visible").css("left","-3000px").css("position","fixed")}function a(e,t){if(i.helpers.isMobile())return!1;if(e.data("title")||e.data("title",e.attr("title")),!e.data("title"))return!1;i.$tooltip||i.opts.tooltips&&!i.helpers.isMobile()&&(i.shared.$tooltip?i.$tooltip=i.shared.$tooltip:(i.shared.$tooltip=Te('<div class="fr-tooltip"></div>'),i.$tooltip=i.shared.$tooltip,i.opts.theme&&i.$tooltip.addClass(i.opts.theme+"-theme"),Te(i.o_doc).find("body:first").append(i.$tooltip)),i.events.on("shared.destroy",function(){i.$tooltip.html("").removeData().remove(),i.$tooltip=null},!0)),e.removeAttr("title"),i.$tooltip.text(i.language.translate(e.data("title"))),i.$tooltip.addClass("fr-visible");var n=e.offset().left+(e.outerWidth()-i.$tooltip.outerWidth())/2;n<0&&(n=0),n+i.$tooltip.outerWidth()>Te(i.o_win).width()&&(n=Te(i.o_win).width()-i.$tooltip.outerWidth()),void 0===t&&(t=i.opts.toolbarBottom),e.offset().top-Te(window).scrollTop()+e.outerHeight()+10>=Te(window).height()&&(t=!0);var r=t?e.offset().top-i.$tooltip.height():e.offset().top+e.outerHeight();i.$tooltip.css("position",""),i.$tooltip.css("left",n),i.$tooltip.css("top",Math.ceil(r)),"static"!=Te(i.o_doc).find("body:first").css("position")?(i.$tooltip.css("margin-left",-Te(i.o_doc).find("body:first").offset().left),i.$tooltip.css("margin-top",-Te(i.o_doc).find("body:first").offset().top)):(i.$tooltip.css("margin-left",""),i.$tooltip.css("margin-top",""))}return{hide:r,to:a,bind:function(e,t,n){i.opts.tooltips&&!i.helpers.isMobile()&&(i.events.$on(e,"mouseenter",t,function(e){i.node.hasClass(e.currentTarget,"fr-disabled")||i.edit.isDisabled()||a(Te(e.currentTarget),n)},!0),i.events.$on(e,"mouseleave "+i._mousedown+" "+i._mouseup,t,function(){r()},!0))}}},Te.FE.MODULES.button=function(u){var o=[];(u.opts.toolbarInline||u.opts.toolbarContainer)&&(u.shared.buttons||(u.shared.buttons=[]),o=u.shared.buttons);var s=[];function l(e,t,n){for(var r=Te(),i=0;i<e.length;i++){var a=Te(e[i]);if(a.is(t)&&(r=r.add(a)),n&&a.is(".fr-dropdown")){var o=a.next().find(t);r=r.add(o)}}return r}function d(e,t){var n,r=Te();if(!e)return r;for(n in r=(r=r.add(l(o,e,t))).add(l(s,e,t)),u.shared.popups)if(u.shared.popups.hasOwnProperty(n)){var i=u.shared.popups[n].children().find(e);r=r.add(i)}for(n in u.shared.modals)if(u.shared.modals.hasOwnProperty(n)){var a=u.shared.modals[n].$modal.find(e);r=r.add(a)}return r}function r(e){e.addClass("fr-blink"),setTimeout(function(){e.removeClass("fr-blink")},500);for(var t=e.data("cmd"),n=[];void 0!==e.data("param"+(n.length+1));)n.push(e.data("param"+(n.length+1)));var r=d(".fr-dropdown.fr-active");r.length&&(r.removeClass("fr-active").attr("aria-expanded",!1).next().attr("aria-hidden",!0),r.prev(".fr-expanded").removeClass("fr-expanded"),r.parent(".fr-toolbar:not(.fr-inline)").css("zIndex","")),e.parents(".fr-popup, .fr-toolbar").data("instance").commands.exec(t,n)}function t(e){var t=e.parents(".fr-popup, .fr-toolbar").data("instance");if(0!==e.parents(".fr-popup").length||e.data("popup")||t.popups.hideAll(),t.popups.areVisible()&&!t.popups.areVisible(t)){for(var n=0;n<Te.FE.INSTANCES.length;n++)Te.FE.INSTANCES[n]!=t&&Te.FE.INSTANCES[n].popups&&Te.FE.INSTANCES[n].popups.areVisible()&&Te.FE.INSTANCES[n].$el.find(".fr-marker").remove();t.popups.hideAll()}u.node.hasClass(e.get(0),"fr-dropdown")?function(e){var t=e.next(),n=u.node.hasClass(e.get(0),"fr-active"),r=d(".fr-dropdown.fr-active").not(e),i=e.parents(".fr-toolbar, .fr-popup").data("instance")||u;if(i.helpers.isIOS()&&!i.el.querySelector(".fr-marker")&&(i.selection.save(),i.selection.clear(),i.selection.restore()),!n){var a=e.data("cmd");t.find(".fr-command").removeClass("fr-active").attr("aria-selected",!1),Te.FE.COMMANDS[a]&&Te.FE.COMMANDS[a].refreshOnShow&&Te.FE.COMMANDS[a].refreshOnShow.apply(i,[e,t]),t.css("left",e.offset().left-e.parent().offset().left-("rtl"==u.opts.direction?t.width()-e.outerWidth():0)),t.addClass("test-height");var o=t.outerHeight();t.removeClass("test-height"),t.css("top","").css("bottom",""),(u.opts.toolbarBottom?e.offset().top<o:t.offset().top+e.outerHeight()+o<Te(u.o_doc).height()||u.$el.offset().top-u.$tb.height()<o)?(t.css("top",e.position().top+e.outerHeight()),t.css("margin-bottom","5px")):t.css("bottom",e.parents(".fr-popup, .fr-toolbar").first().height()-e.position().top)}e.addClass("fr-blink").toggleClass("fr-active"),e.hasClass("fr-options")&&e.prev().toggleClass("fr-expanded"),e.hasClass("fr-active")?(t.attr("aria-hidden",!1),e.attr("aria-expanded",!0)):(t.attr("aria-hidden",!0),e.attr("aria-expanded",!1)),setTimeout(function(){e.removeClass("fr-blink")},300),t.css("margin-left",""),t.offset().left+t.outerWidth()>u.$sc.offset().left+u.$sc.width()&&t.css("margin-left",-(t.offset().left+t.outerWidth()-u.$sc.offset().left-u.$sc.width())),t.offset().left<u.$sc.offset().left&&"rtl"==u.opts.direction&&t.css("margin-left",u.$sc.offset().left),r.removeClass("fr-active").attr("aria-expanded",!1).next().attr("aria-hidden",!0),r.prev(".fr-expanded").removeClass("fr-expanded"),r.parent(".fr-toolbar:not(.fr-inline)").css("zIndex",""),0!==e.parents(".fr-popup").length||u.opts.toolbarInline||(u.node.hasClass(e.get(0),"fr-active")?u.$tb.css("zIndex",(u.opts.zIndex||1)+4):u.$tb.css("zIndex",""));var s=t.find("a.fr-command.fr-active:first");u.helpers.isMobile()||(s.length?u.accessibility.focusToolbarElement(s):u.accessibility.focusToolbarElement(e))}(e):(r(e),Te.FE.COMMANDS[e.data("cmd")]&&!1!==Te.FE.COMMANDS[e.data("cmd")].refreshAfterCallback&&t.button.bulkRefresh())}function a(e){t(Te(e.currentTarget))}function c(e){var t=e.find(".fr-dropdown.fr-active");t.length&&(t.removeClass("fr-active").attr("aria-expanded",!1).next().attr("aria-hidden",!0),t.parent(".fr-toolbar:not(.fr-inline)").css("zIndex",""),t.prev().removeClass("fr-expanded"))}function f(e){e.preventDefault(),e.stopPropagation()}function p(e){if(e.stopPropagation(),!u.helpers.isMobile())return!1}function h(e,t,n){if(t=Te.extend(!0,{},t),u.helpers.isMobile()&&!1===t.showOnMobile)return"";var r=t.displaySelection;"function"==typeof r&&(r=r(u));var i="";if("options"!==t.type)if(r){var a="function"==typeof t.defaultSelection?t.defaultSelection(u):t.defaultSelection;i='<span style="width:'+(t.displaySelectionWidth||100)+'px">'+u.language.translate(a||t.title)+"</span>"}else i=u.icon.create(t.icon||e),i+='<span class="fr-sr-only">'+(u.language.translate(t.title)||"")+"</span>";else i='<span class="fr-sr-only">'+(u.language.translate(t.title)||"")+"</span>";var o=t.popup?' data-popup="true"':"",s=t.modal?' data-modal="true"':"",l=u.shortcuts.get(e+".");l=l?" ("+l+")":"";var d=e+"-"+u.id,c="dropdown-menu-"+d,f='<button id="'+d+'"type="button" tabIndex="-1" role="button"'+(t.toggle?' aria-pressed="false"':"")+("dropdown"==t.type||"options"==t.type?' aria-controls="'+c+'" aria-expanded="false" aria-haspopup="true"':"")+(t.disabled?' aria-disabled="true"':"")+' title="'+(u.language.translate(t.title)||"")+l+'" class="fr-command fr-btn'+("dropdown"==t.type||"options"==t.type?" fr-dropdown":"")+("options"==t.type?" fr-options":"")+" fr-btn-"+u.icon.getTemplate(t.icon)+(t.displaySelection?" fr-selection":"")+(t.back?" fr-back":"")+(t.disabled?" fr-disabled":"")+(n?"":" fr-hidden")+'" data-cmd="'+e+'"'+o+s+">"+i+"</button>";if("dropdown"==t.type||"options"==t.type){var p='<div id="'+c+'" class="fr-dropdown-menu" role="listbox" aria-labelledby="'+d+'" aria-hidden="true"><div class="fr-dropdown-wrapper" role="presentation"><div class="fr-dropdown-content" role="presentation">';p+=function(e,t){var n="";if(t.html)"function"==typeof t.html?n+=t.html.call(u):n+=t.html;else{var r=t.options;for(var i in"function"==typeof r&&(r=r()),n+='<ul class="fr-dropdown-list" role="presentation">',r)if(r.hasOwnProperty(i)){var a=u.shortcuts.get(e+"."+i);a=a?'<span class="fr-shortcut">'+a+"</span>":"",n+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="'+("options"===t.type?e.replace(/Options/g,""):e)+'" data-param1="'+i+'" title="'+r[i]+'">'+u.language.translate(r[i])+"</a></li>"}n+="</ul>"}return n}(e,t),f+=p+="</div></div></div>"}return t.hasOptions&&t.hasOptions.apply(u)&&(t.type="options",t.hasOptions=!1,f='<div class="fr-btn-wrap">'+f+h(e+"Options",t,n)+"</div>"),f}function e(i){var a=u.$tb&&u.$tb.data("instance")||u;if(!1===u.events.trigger("buttons.refresh"))return!0;setTimeout(function(){for(var e=a.selection.inEditor()&&a.core.hasFocus(),t=0;t<i.length;t++){var n=Te(i[t]),r=n.data("cmd");0===n.parents(".fr-popup").length?e||Te.FE.COMMANDS[r]&&Te.FE.COMMANDS[r].forcedRefresh?a.button.refresh(n):u.node.hasClass(n.get(0),"fr-dropdown")||(n.removeClass("fr-active"),n.attr("aria-pressed")&&n.attr("aria-pressed",!1)):n.parents(".fr-popup").is(":visible")&&a.button.refresh(n)}},0)}function n(){e(o),e(s)}function i(){o=[],s=[]}u.shared.popup_buttons||(u.shared.popup_buttons=[]),s=u.shared.popup_buttons;var g=null;function m(){clearTimeout(g),g=setTimeout(n,50)}return{_init:function(){u.opts.toolbarInline?u.events.on("toolbar.show",n):(u.events.on("mouseup",m),u.events.on("keyup",m),u.events.on("blur",m),u.events.on("focus",m),u.events.on("contentChanged",m),u.helpers.isMobile()&&u.events.$on(u.$doc,"selectionchange",n)),u.events.on("shared.destroy",i)},buildList:function(e,t){for(var n="",r=0;r<e.length;r++){var i=e[r],a=Te.FE.COMMANDS[i];a&&"undefined"!=typeof a.plugin&&u.opts.pluginsEnabled.indexOf(a.plugin)<0||(a?n+=h(i,a,void 0===t||0<=t.indexOf(i)):"|"==i?n+='<div class="fr-separator fr-vs" role="separator" aria-orientation="vertical"></div>':"-"==i&&(n+='<div class="fr-separator fr-hs" role="separator" aria-orientation="horizontal"></div>'))}return n},bindCommands:function(t,e){u.events.bindClick(t,".fr-command:not(.fr-disabled)",a),u.events.$on(t,u._mousedown+" "+u._mouseup+" "+u._move,".fr-dropdown-menu",f,!0),u.events.$on(t,u._mousedown+" "+u._mouseup+" "+u._move,".fr-dropdown-menu .fr-dropdown-wrapper",p,!0);var n=t.get(0).ownerDocument,r="defaultView"in n?n.defaultView:n.parentWindow,i=function(e){(!e||e.type==u._mouseup&&e.target!=Te("html").get(0)||"keydown"==e.type&&(u.keys.isCharacter(e.which)&&!u.keys.ctrlKey(e)||e.which==Te.FE.KEYCODE.ESC))&&c(t)};u.events.$on(Te(r),u._mouseup+" resize keydown",i,!0),u.opts.iframe&&u.events.$on(u.$win,u._mouseup,i,!0),u.node.hasClass(t.get(0),"fr-popup")?Te.merge(s,t.find(".fr-btn").toArray()):Te.merge(o,t.find(".fr-btn").toArray()),u.tooltip.bind(t,".fr-btn, .fr-title",e)},refresh:function(e){var t,n=e.parents(".fr-popup, .fr-toolbar").data("instance")||u,r=e.data("cmd");u.node.hasClass(e.get(0),"fr-dropdown")?t=e.next():(e.removeClass("fr-active"),e.attr("aria-pressed")&&e.attr("aria-pressed",!1)),Te.FE.COMMANDS[r]&&Te.FE.COMMANDS[r].refresh?Te.FE.COMMANDS[r].refresh.apply(n,[e,t]):u.refresh[r]&&n.refresh[r](e,t)},bulkRefresh:n,exec:r,click:t,hideActiveDropdowns:c,getButtons:d}},Te.FE.MODULES.modals=function(l){l.shared.modals||(l.shared.modals={});var s,d=l.shared.modals;function e(){for(var e in d){var t=d[e];t&&t.$modal&&t.$modal.removeData().remove()}s&&s.removeData().remove(),d={}}function c(e,t){if(d[e]){var n=d[e].$modal,r=n.data("instance")||l;r.events.enableBlur(),n.hide(),s.hide(),Te(r.o_doc).find("body:first").removeClass("prevent-scroll fr-mobile"),n.removeClass("fr-active"),t||(r.accessibility.restoreSelection(),r.events.trigger("modals.hide"))}}function n(e){var t;if("string"==typeof e){if(!d[e])return;t=d[e].$modal}else t=e;return t&&l.node.hasClass(t,"fr-active")&&l.core.sameInstance(t)||!1}return{_init:function(){l.events.on("shared.destroy",e,!0)},get:function(e){return d[e]},create:function(n,e,t){if(l.shared.$overlay||(l.shared.$overlay=Te('<div class="fr-overlay">').appendTo("body:first")),s=l.shared.$overlay,l.opts.theme&&s.addClass(l.opts.theme+"-theme"),!d[n]){var r=(i=e,a=t,o='<div tabIndex="-1" class="fr-modal'+(l.opts.theme?" "+l.opts.theme+"-theme":"")+'"><div class="fr-modal-wrapper">',o+='<div class="fr-modal-head">'+i+'<span title="'+l.language.translate("Cancel")+'" class="fr-modal-close">&times;</span></div>',o+='<div tabIndex="-1" class="fr-modal-body">'+a+"</div>",Te(o+="</div></div>"));d[n]={$modal:r,$head:r.find(".fr-modal-head"),$body:r.find(".fr-modal-body")},l.helpers.isMobile()||r.addClass("fr-desktop"),r.appendTo("body:first"),l.events.$on(r,"click",".fr-modal-close",function(){c(n)},!0),d[n].$body.css("margin-top",d[n].$head.outerHeight()),l.events.$on(r,"keydown",function(e){var t=e.which;return t==Te.FE.KEYCODE.ESC?(c(n),l.accessibility.focusModalButton(r),!1):!(!Te(e.target).is("input[type=text], textarea")&&t!=Te.FE.KEYCODE.ARROW_UP&&t!=Te.FE.KEYCODE.ARROW_DOWN&&!l.keys.isBrowserAction(e)&&(e.preventDefault(),e.stopPropagation(),1))},!0),c(n,!0)}var i,a,o;return d[n]},show:function(e){if(d[e]){var t=d[e].$modal;t.data("instance",l),t.show(),s.show(),Te(l.o_doc).find("body:first").addClass("prevent-scroll"),l.helpers.isMobile()&&Te(l.o_doc).find("body:first").addClass("fr-mobile"),t.addClass("fr-active"),l.accessibility.focusModal(t)}},hide:c,resize:function(e){if(d[e]){var t=d[e],n=t.$modal,r=t.$body,i=Te(l.o_win).height(),a=n.find(".fr-modal-wrapper"),o=i-a.outerHeight(!0)+(a.height()-(r.outerHeight(!0)-r.height())),s="auto";o<r.get(0).scrollHeight&&(s=o),r.height(s)}},isVisible:n,areVisible:function(e){for(var t in d)if(d.hasOwnProperty(t)&&n(t)&&(void 0===e||d[t].$modal.data("instance")==e))return d[t].$modal;return!1}}},Te.FE.POPUP_TEMPLATES={"text.edit":"[_EDIT_]"},Te.FE.RegisterTemplate=function(e,t){Te.FE.POPUP_TEMPLATES[e]=t},Te.FE.MODULES.popups=function(c){c.shared.popups||(c.shared.popups={});var f=c.shared.popups;function p(e,t){t.is(":visible")||(t=c.$sc),t.is(f[e].data("container"))||(f[e].data("container",t),t.append(f[e]))}function u(e){return f[e]&&c.node.hasClass(f[e],"fr-active")&&c.core.sameInstance(f[e])||!1}function h(e){for(var t in f)if(f.hasOwnProperty(t)&&u(t)&&(void 0===e||f[t].data("instance")==e))return f[t];return!1}function n(e){var t=null;(t="string"!=typeof e?e:f[e])&&c.node.hasClass(t,"fr-active")&&(t.removeClass("fr-active fr-above"),c.events.trigger("popups.hide."+e),c.$tb&&(1<c.opts.zIndex?c.$tb.css("zIndex",c.opts.zIndex+1):c.$tb.css("zIndex","")),c.events.disableBlur(),t.find("input, textarea, button").filter(":focus").blur(),t.find("input, textarea").attr("disabled","disabled"))}function g(e){for(var t in void 0===e&&(e=[]),f)f.hasOwnProperty(t)&&e.indexOf(t)<0&&n(t)}function t(){c.shared.exit_flag=!0}function m(){c.shared.exit_flag=!1}function a(){return c.shared.exit_flag}function i(e,t){var n,r,i=function(e,t){var n=Te.FE.POPUP_TEMPLATES[e];if(!n)return null;for(var r in"function"==typeof n&&(n=n.apply(c)),t)t.hasOwnProperty(r)&&(n=n.replace("[_"+r.toUpperCase()+"_]",t[r]));return n}(e,t);return i?(n=Te('<div class="fr-popup'+(c.helpers.isMobile()?" fr-mobile":" fr-desktop")+(c.opts.toolbarInline?" fr-inline":"")+'"><span class="fr-arrow"></span>'+i+"</div>"),c.opts.theme&&n.addClass(c.opts.theme+"-theme"),1<c.opts.zIndex&&(c.opts.editInPopup?n.css("z-index",c.opts.zIndex+2):c.$tb.css("z-index",c.opts.zIndex+2)),"auto"!=c.opts.direction&&n.removeClass("fr-ltr fr-rtl").addClass("fr-"+c.opts.direction),n.find("input, textarea").attr("dir",c.opts.direction).attr("disabled","disabled"),(r=Te("body:first")).append(n),n.data("container",r),f[e]=n,c.button.bindCommands(n,!1),n):(n=Te('<div class="fr-popup fr-empty"></div>'),(r=Te("body:first")).append(n),n.data("container",r),f[e]=n)}function v(r){var i=f[r];return{_windowResize:function(){var e=i.data("instance")||c;!e.helpers.isMobile()&&i.is(":visible")&&(e.events.disableBlur(),e.popups.hide(r),e.events.enableBlur())},_inputFocus:function(e){var t=i.data("instance")||c,n=Te(e.currentTarget);if(n.is("input:file")&&n.closest(".fr-layer").addClass("fr-input-focus"),e.preventDefault(),e.stopPropagation(),setTimeout(function(){t.events.enableBlur()},c.browser.msie?100:0),t.helpers.isMobile()){var r=Te(t.o_win).scrollTop();setTimeout(function(){Te(t.o_win).scrollTop(r)},0)}},_inputBlur:function(e){var t=i.data("instance")||c,n=Te(e.currentTarget);n.is("input:file")&&n.closest(".fr-layer").removeClass("fr-input-focus"),document.activeElement!=this&&Te(this).is(":visible")&&(t.events.blurActive()&&t.events.trigger("blur"),t.events.enableBlur())},_editorKeydown:function(e){var t=i.data("instance")||c;t.keys.ctrlKey(e)||e.which==Te.FE.KEYCODE.ALT||e.which==Te.FE.KEYCODE.ESC||(u(r)&&i.find(".fr-back:visible").length?t.button.exec(i.find(".fr-back:visible:first")):e.which!=Te.FE.KEYCODE.ALT&&t.popups.hide(r))},_preventFocus:function(e){var t=i.data("instance")||c,n=e.originalEvent?e.originalEvent.target||e.originalEvent.originalTarget:null;"mouseup"==e.type||Te(n).is(":focus")||t.events.disableBlur(),"mouseup"!=e.type||Te(n).hasClass("fr-command")||0<Te(n).parents(".fr-command").length||Te(n).hasClass("fr-dropdown-content")||c.button.hideActiveDropdowns(i),(c.browser.safari||c.browser.mozilla)&&"mousedown"==e.type&&Te(n).is("input[type=file]")&&t.events.disableBlur();var r="input, textarea, button, select, label, .fr-command";if(n&&!Te(n).is(r)&&0===Te(n).parents(r).length)return e.stopPropagation(),!1;n&&Te(n).is(r)&&e.stopPropagation(),m()},_editorMouseup:function(){i.is(":visible")&&a()&&0<i.find("input:focus, textarea:focus, button:focus, select:focus").filter(":visible").length&&c.events.disableBlur()},_windowMouseup:function(e){if(!c.core.sameInstance(i))return!0;var t=i.data("instance")||c;i.is(":visible")&&a()&&(e.stopPropagation(),t.markers.remove(),t.popups.hide(r),m())},_windowKeydown:function(e){if(!c.core.sameInstance(i))return!0;var t=i.data("instance")||c,n=e.which;if(Te.FE.KEYCODE.ESC==n){if(t.popups.isVisible(r)&&t.opts.toolbarInline)return e.stopPropagation(),t.popups.isVisible(r)&&(i.find(".fr-back:visible").length?(t.button.exec(i.find(".fr-back:visible:first")),t.accessibility.focusPopupButton(i)):i.find(".fr-dismiss:visible").length?t.button.exec(i.find(".fr-dismiss:visible:first")):(t.popups.hide(r),t.toolbar.showInline(null,!0),t.accessibility.focusPopupButton(i))),!1;if(t.popups.isVisible(r))return i.find(".fr-back:visible").length?(t.button.exec(i.find(".fr-back:visible:first")),t.accessibility.focusPopupButton(i)):i.find(".fr-dismiss:visible").length?t.button.exec(i.find(".fr-dismiss:visible:first")):(t.popups.hide(r),t.accessibility.focusPopupButton(i)),!1}},_doPlaceholder:function(){0===Te(this).next().length&&Te(this).attr("placeholder")&&Te(this).after('<label for="'+Te(this).attr("id")+'">'+Te(this).attr("placeholder")+"</label>"),Te(this).toggleClass("fr-not-empty",""!==Te(this).val())},_repositionPopup:function(){if(!c.opts.height&&!c.opts.heightMax||c.opts.toolbarInline)return!0;if(c.$wp&&u(r)&&i.parent().get(0)==c.$sc.get(0)){var e=i.offset().top-c.$wp.offset().top,t=c.$wp.outerHeight();c.node.hasClass(i.get(0),"fr-above")&&(e+=i.outerHeight()),t<e||e<0?i.addClass("fr-hidden"):i.removeClass("fr-hidden")}}}}function o(e,t){c.events.on("mouseup",e._editorMouseup,!0),c.$wp&&c.events.on("keydown",e._editorKeydown),c.events.on("blur",function(){h()&&c.markers.remove(),f[t].find("iframe").length||g()}),c.$wp&&!c.helpers.isMobile()&&c.events.$on(c.$wp,"scroll.popup"+t,e._repositionPopup),c.events.on("window.mouseup",e._windowMouseup,!0),c.events.on("window.keydown",e._windowKeydown,!0),f[t].data("inst"+c.id,!0),c.events.on("destroy",function(){c.core.sameInstance(f[t])&&f[t].removeClass("fr-active").appendTo("body:first")},!0)}function e(){for(var e in f)if(f.hasOwnProperty(e)){var t=f[e];t&&(t.html("").removeData().remove(),f[e]=null)}f=[]}return c.shared.exit_flag=!1,{_init:function(){c.events.on("shared.destroy",e,!0),c.events.on("window.mousedown",t),c.events.on("window.touchmove",m),c.events.$on(Te(c.o_win),"scroll",m),c.events.on("mousedown",function(e){h()&&(e.stopPropagation(),c.$el.find(".fr-marker").remove(),t(),c.events.disableBlur())})},create:function(e,t){var n=i(e,t),r=v(e);return o(r,e),c.events.$on(n,"mousedown mouseup touchstart touchend touch","*",r._preventFocus,!0),c.events.$on(n,"focus","input, textarea, button, select",r._inputFocus,!0),c.events.$on(n,"blur","input, textarea, button, select",r._inputBlur,!0),c.accessibility.registerPopup(e),c.events.$on(n,"keydown keyup change input","input, textarea",r._doPlaceholder,!0),c.helpers.isIOS()&&c.events.$on(n,"touchend","label",function(){Te("#"+Te(this).attr("for")).prop("checked",function(e,t){return!t})},!0),c.events.$on(Te(c.o_win),"resize",r._windowResize,!0),n},get:function(e){var t=f[e];return t&&!t.data("inst"+c.id)&&o(v(e),e),t},show:function(e,t,n,r){if(u(e)||(h()&&0<c.$el.find(".fr-marker").length?(c.events.disableBlur(),c.selection.restore()):h()||(c.events.disableBlur(),c.events.focus(),c.events.enableBlur())),g([e]),!f[e])return!1;var i=c.button.getButtons(".fr-dropdown.fr-active");i.removeClass("fr-active").attr("aria-expanded",!1).parent(".fr-toolbar").css("zIndex",""),i.next().attr("aria-hidden",!0),f[e].data("instance",c),c.$tb&&c.$tb.data("instance",c);var a=f[e].outerWidth(),o=u(e);f[e].addClass("fr-active").removeClass("fr-hidden").find("input, textarea").removeAttr("disabled");var s,l,d=f[e].data("container");s=e,(l=d).is(":visible")||(l=c.$sc),0===l.find([f[s]]).length&&l.append(f[s]),c.opts.toolbarInline&&d&&c.$tb&&d.get(0)==c.$tb.get(0)&&(p(e,c.$sc),n=c.$tb.offset().top-c.helpers.getPX(c.$tb.css("margin-top")),t=c.$tb.offset().left+c.$tb.outerWidth()/2+(parseFloat(c.$tb.find(".fr-arrow").css("margin-left"))||0)+c.$tb.find(".fr-arrow").outerWidth()/2,c.node.hasClass(c.$tb.get(0),"fr-above")&&n&&(n+=c.$tb.outerHeight()),r=0),d=f[e].data("container"),!c.opts.iframe||r||o||(t&&(t-=c.$iframe.offset().left),n&&(n-=c.$iframe.offset().top)),d.is(c.$tb)?c.$tb.css("zIndex",(c.opts.zIndex||1)+4):f[e].css("zIndex",(c.opts.zIndex||1)+4),t&&(t-=a/2),c.opts.toolbarBottom&&d&&c.$tb&&d.get(0)==c.$tb.get(0)&&f[e].outerHeight()<c.$tb.offset().top?(f[e].addClass("fr-above"),n&&(n-=f[e].outerHeight())):f[e].css("margin-bottom","5px"),f[e].removeClass("fr-active"),c.position.at(t,n,f[e],r||0),f[e].addClass("fr-active"),o||c.accessibility.focusPopup(f[e]),c.opts.toolbarInline&&c.toolbar.hide(),c.events.trigger("popups.show."+e),v(e)._repositionPopup(),m()},hide:n,onHide:function(e,t){c.events.on("popups.hide."+e,t)},hideAll:g,setContainer:p,refresh:function(e){f[e].data("instance",c),c.events.trigger("popups.refresh."+e);for(var t=f[e].find(".fr-command"),n=0;n<t.length;n++){var r=Te(t[n]);0===r.parents(".fr-dropdown-menu").length&&c.button.refresh(r)}},onRefresh:function(e,t){c.events.on("popups.refresh."+e,t)},onShow:function(e,t){c.events.on("popups.show."+e,t)},isVisible:u,areVisible:h}},Te.FE.MODULES.position=function(E){function i(){var e=E.selection.ranges(0).getBoundingClientRect();if(0===e.top&&0===e.left&&0===e.width||0===e.height){var t=!1;0===E.$el.find(".fr-marker").length&&(E.selection.save(),t=!0);var n=E.$el.find(".fr-marker:first");n.css("display","inline"),n.css("line-height","");var r=n.offset(),i=n.outerHeight();n.css("display","none"),n.css("line-height",0),(e={}).left=r&&r.left,e.width=0,e.height=i,e.top=r&&r.top-(E.opts.iframe?0:E.helpers.scrollTop()),e.right=1,e.bottom=1,e.ok=!0,t&&E.selection.restore()}return e}function a(e,t,n,r){var i=n.data("container");!i||"BODY"===i.get(0).tagName&&"static"==i.css("position")||("relative"===i.css("position")&&(e&&(e-=i.offset().left),t&&(t-=i.offset().top)),"BODY"!=i.get(0).tagName?(e&&(e+=i.get(0).scrollLeft),t&&(t+=i.get(0).scrollTop)):"absolute"==i.css("position")&&(e&&(e+=i.position().left),t&&(t+=i.position().top))),E.opts.iframe&&i&&E.$tb&&i.get(0)!=E.$tb.get(0)&&(e&&(e+=E.$iframe.offset().left),t&&(t+=E.$iframe.offset().top));var a,o,s,l,d=(o=e,s=(a=n).outerWidth(!0),l=a.parent().offset().left,E.$sc.is("BODY")||"relative"===E.$sc.css("position")||(l-=E.$sc.offset().left,E.$sc.is(a.parent())&&(l-=E.$sc.offset().left)),a.parent().get(0)==E.$sc.get(0)&&(l-=a.parent().position().left),l+o+s>E.$sc.get(0).clientWidth-10&&(o=E.$sc.get(0).clientWidth-s-l-10),o<0&&(o=10),o);if(e){n.css("left",d);var c=n.data("fr-arrow");c||(c=n.find(".fr-arrow"),n.data("fr-arrow",c)),c.data("margin-left")||c.data("margin-left",E.helpers.getPX(c.css("margin-left"))),c.css("margin-left",e-d+c.data("margin-left"))}t&&n.css("top",function(e,t,n){var r=e.outerHeight(!0);if(!E.helpers.isMobile()&&E.$tb&&e.parent().get(0)!=E.$tb.get(0)){var i=e.parent().offset().top,a=t-r-(n||0);e.parent().get(0)==E.$sc.get(0)&&(i-=e.parent().position().top);var o=E.$sc.get(0).clientHeight;i+t+r>E.$sc.offset().top+o&&0<e.parent().offset().top+a&&0<a?a>E.$wp.scrollTop()&&(t=a,e.addClass("fr-above")):e.removeClass("fr-above")}return t}(n,t,r))}function n(e){var n=Te(e),t=n.is(".fr-sticky-on"),r=n.data("sticky-top"),i=n.data("sticky-scheduled");if(void 0===r){n.data("sticky-top",0);var a=Te('<div class="fr-sticky-dummy" style="height: '+n.outerHeight()+'px;"></div>');E.$box.prepend(a)}else E.$box.find(".fr-sticky-dummy").css("height",n.outerHeight());if(E.core.hasFocus()||0<E.$tb.find("input:visible:focus").length){var o=E.helpers.scrollTop(),s=Math.min(Math.max(o-E.$tb.parent().offset().top,0),E.$tb.parent().outerHeight()-n.outerHeight());s!=r&&s!=i&&(clearTimeout(n.data("sticky-timeout")),n.data("sticky-scheduled",s),n.outerHeight()<o-E.$tb.parent().offset().top&&n.addClass("fr-opacity-0"),n.data("sticky-timeout",setTimeout(function(){var e=E.helpers.scrollTop(),t=Math.min(Math.max(e-E.$tb.parent().offset().top,0),E.$tb.parent().outerHeight()-n.outerHeight());0<t&&"BODY"==E.$tb.parent().get(0).tagName&&(t+=E.$tb.parent().position().top),t!=r&&(n.css("top",Math.max(t,0)),n.data("sticky-top",t),n.data("sticky-scheduled",t)),n.removeClass("fr-opacity-0")},100))),t||(n.css("top","0"),n.width(E.$tb.parent().width()),n.addClass("fr-sticky-on"),E.$box.addClass("fr-sticky-box"))}else clearTimeout(Te(e).css("sticky-timeout")),n.css("top","0"),n.css("position",""),n.width(""),n.data("sticky-top",0),n.removeClass("fr-sticky-on"),E.$box.removeClass("fr-sticky-box")}function t(e){if(e.offsetWidth){var t,n,r=Te(e),i=r.outerHeight(),a=r.data("sticky-top"),o=r.data("sticky-position"),s=Te("body"==E.opts.scrollableContainer?E.o_win:E.opts.scrollableContainer).outerHeight(),l=0,d=0;"body"!==E.opts.scrollableContainer&&(l=E.$sc.offset().top,d=Te(E.o_win).outerHeight()-l-s);var c="body"==E.opts.scrollableContainer?E.helpers.scrollTop():l,f=r.is(".fr-sticky-on");r.data("sticky-parent")||r.data("sticky-parent",r.parent());var p=r.data("sticky-parent"),u=p.offset().top,h=p.outerHeight();if(r.data("sticky-offset")||void 0!==a?E.$box.find(".fr-sticky-dummy").css("height",i+"px"):(r.data("sticky-offset",!0),r.after('<div class="fr-sticky-dummy" style="height: '+i+'px;"></div>')),!o){var g="auto"!==r.css("top")||"auto"!==r.css("bottom");g||r.css("position","fixed"),o={top:E.node.hasClass(r.get(0),"fr-top"),bottom:E.node.hasClass(r.get(0),"fr-bottom")},g||r.css("position",""),r.data("sticky-position",o),r.data("top",E.node.hasClass(r.get(0),"fr-top")?r.css("top"):"auto"),r.data("bottom",E.node.hasClass(r.get(0),"fr-bottom")?r.css("bottom"):"auto")}t=E.helpers.getPX(r.data("top")),n=E.helpers.getPX(r.data("bottom"));var m=o.top&&u<c+t&&c+t<=u+h-i&&(E.helpers.isInViewPort(E.$sc.get(0))||"body"==E.opts.scrollableContainer),v=o.bottom&&u+i<c+s-n&&c+s-n<u+h;m||v?(r.css("width",p.get(0).getBoundingClientRect().width+"px"),f||(r.addClass("fr-sticky-on"),r.removeClass("fr-sticky-off"),r.css("top")&&("auto"!=r.data("top")?r.css("top",E.helpers.getPX(r.data("top"))+l):r.data("top","auto")),r.css("bottom")&&("auto"!=r.data("bottom")?r.css("bottom",E.helpers.getPX(r.data("bottom"))+d):r.css("bottom","auto")))):E.node.hasClass(r.get(0),"fr-sticky-off")||(r.width(""),r.removeClass("fr-sticky-on"),r.addClass("fr-sticky-off"),r.css("top")&&"auto"!=r.data("top")&&o.top&&r.css("top",0),r.css("bottom")&&"auto"!=r.data("bottom")&&o.bottom&&r.css("bottom",0))}}function e(){if(E._stickyElements)for(var e=0;e<E._stickyElements.length;e++)t(E._stickyElements[e])}return{_init:function(){!function(){if(E._stickyElements=[],E.helpers.isIOS()){var t=function(){if(E.helpers.requestAnimationFrame()(t),!1!==E.events.trigger("position.refresh"))for(var e=0;e<E._stickyElements.length;e++)n(E._stickyElements[e])};t(),E.events.$on(Te(E.o_win),"scroll",function(){if(E.core.hasFocus())for(var e=0;e<E._stickyElements.length;e++){var t=Te(E._stickyElements[e]),n=t.parent(),r=E.helpers.scrollTop();t.outerHeight()<r-n.offset().top&&(t.addClass("fr-opacity-0"),t.data("sticky-top",-1),t.data("sticky-scheduled",-1))}},!0)}else"body"!==E.opts.scrollableContainer&&E.events.$on(Te(E.opts.scrollableContainer),"scroll",e,!0),E.events.$on(Te(E.o_win),"scroll",e,!0),E.events.$on(Te(E.o_win),"resize",e,!0),E.events.on("initialized",e),E.events.on("focus",e),E.events.$on(Te(E.o_win),"resize","textarea",e,!0);E.events.on("destroy",function(){E._stickyElements=[]})}()},forSelection:function(e){var t=i();e.css({top:0,left:0});var n=t.top+t.height,r=t.left+t.width/2-e.get(0).offsetWidth/2+E.helpers.scrollLeft();E.opts.iframe||(n+=E.helpers.scrollTop()),a(r,n,e,t.height)},addSticky:function(e){e.addClass("fr-sticky"),E.helpers.isIOS()&&e.addClass("fr-sticky-ios"),e.removeClass("fr-sticky"),E._stickyElements.push(e.get(0))},refresh:e,at:a,getBoundingRect:i,getTbarPupupTop:function(e,t){var n=E.shared.popups[e],r=t.offset().top;return n&&(E.opts.toolbarBottom&&n.outerHeight()<E.$tb.offset().top?r+=10:r=r+t.outerHeight()-10),r}}},Te.FE.MODULES.refresh=function(i){function a(e,t){e.toggleClass("fr-disabled",t).attr("aria-disabled",t)}return{undo:function(e){a(e,!i.undo.canDo())},redo:function(e){a(e,!i.undo.canRedo())},outdent:function(e){if(i.node.hasClass(e.get(0),"fr-no-refresh"))return!1;for(var t=i.selection.blocks(),n=0;n<t.length;n++){var r="rtl"==i.opts.direction||"rtl"==Te(t[n]).css("direction")?"margin-right":"margin-left";if("LI"==t[n].tagName||"LI"==t[n].parentNode.tagName)return a(e,!1),!0;if(0<i.helpers.getPX(Te(t[n]).css(r)))return a(e,!1),!0}a(e,!0)},indent:function(e){if(i.node.hasClass(e.get(0),"fr-no-refresh"))return!1;for(var t=i.selection.blocks(),n=0;n<t.length;n++){for(var r=t[n].previousSibling;r&&r.nodeType==Node.TEXT_NODE&&0===r.textContent.length;)r=r.previousSibling;if("LI"!=t[n].tagName||r)return a(e,!1),!0;a(e,!0)}}}},Te.extend(Te.FE.DEFAULTS,{editInPopup:!1}),Te.FE.MODULES.textEdit=function(n){function t(){n.events.$on(n.$el,n._mouseup,function(){setTimeout(function(){var e,t;t=n.popups.get("text.edit"),e="INPUT"===n.$el.prop("tagName")?n.$el.attr("placeholder"):n.$el.text(),t.find("input").val(e).trigger("change"),n.popups.setContainer("text.edit",n.$sc),n.popups.show("text.edit",n.$el.offset().left+n.$el.outerWidth()/2,n.$el.offset().top+n.$el.outerHeight(),n.$el.outerHeight())},10)})}return{_init:function(){var e;n.opts.editInPopup&&(e={edit:'<div id="fr-text-edit-'+n.id+'" class="fr-layer fr-text-edit-layer"><div class="fr-input-line"><input type="text" placeholder="'+n.language.translate("Text")+'" tabIndex="1"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="updateText" tabIndex="2">'+n.language.translate("Update")+"</button></div></div>"},n.popups.create("text.edit",e),t())},update:function(){var e=n.popups.get("text.edit").find("input").val();0===e.length&&(e=n.opts.placeholderText),"INPUT"===n.$el.prop("tagName")?n.$el.attr("placeholder",e):n.$el.text(e),n.events.trigger("contentChanged"),n.popups.hide("text.edit")}}},Te.FE.RegisterCommand("updateText",{focus:!1,undo:!1,callback:function(){this.textEdit.update()}}),Te.extend(Te.FE.DEFAULTS,{toolbarBottom:!1,toolbarButtons:null,toolbarButtonsXS:null,toolbarButtonsSM:null,toolbarButtonsMD:null,toolbarContainer:null,toolbarInline:!1,toolbarSticky:!0,toolbarStickyOffset:0,toolbarVisibleWithoutSelection:!1}),Te.FE.TOOLBAR_BUTTONS=["fullscreen","bold","italic","underline","strikeThrough","subscript","superscript","|","fontFamily","fontSize","color","inlineClass","inlineStyle","paragraphStyle","lineHeight","|","paragraphFormat","align","formatOL","formatUL","outdent","indent","quote","-","insertLink","insertImage","insertVideo","embedly","insertFile","insertTable","|","emoticons","fontAwesome","specialCharacters","insertHR","selectAll","clearFormatting","|","print","getPDF","spellChecker","help","html","|","undo","redo"],Te.FE.TOOLBAR_BUTTONS_MD=null,Te.FE.TOOLBAR_BUTTONS_SM=["bold","italic","underline","|","fontFamily","fontSize","insertLink","insertImage","table","|","undo","redo"],Te.FE.TOOLBAR_BUTTONS_XS=["bold","italic","fontFamily","fontSize","|","undo","redo"],Te.FE.MODULES.toolbar=function(i){var r=[];function a(e,t){for(var n=0;n<t.length;n++)"-"!=t[n]&&"|"!=t[n]&&e.indexOf(t[n])<0&&e.push(t[n])}function o(){var e=i.helpers.screenSize();return r[e]}function e(){var e=o();i.$tb.find(".fr-separator").remove(),i.$tb.find("> .fr-command, > div.fr-btn-wrap").addClass("fr-hidden");for(var t=0;t<e.length;t++)if("|"==e[t]||"-"==e[t])i.$tb.append(i.button.buildList([e[t]]));else{var n=i.$tb.find('> .fr-command[data-cmd="'+e[t]+'"], > div.fr-btn-wrap > .fr-command[data-cmd="'+e[t]+'"]'),r=null;i.node.hasClass(n.next().get(0),"fr-dropdown-menu")&&(r=n.next()),i.node.hasClass(n.next().get(0),"fr-options")&&(n=n.parent()),n.removeClass("fr-hidden").appendTo(i.$tb),r&&r.appendTo(i.$tb)}}function t(e,t){setTimeout(function(){if((!e||e.which!=Te.FE.KEYCODE.ESC)&&i.selection.inEditor()&&i.core.hasFocus()&&!i.popups.areVisible()&&"false"!=Te(i.selection.blocks()[0]).closest("table").attr("contenteditable")&&(i.opts.toolbarVisibleWithoutSelection||!i.selection.isCollapsed()&&!i.keys.isIME()||t)){if(i.$tb.data("instance",i),!1===i.events.trigger("toolbar.show",[e]))return!1;i.$tb.show(),i.opts.toolbarContainer||i.position.forSelection(i.$tb),1<i.opts.zIndex?i.$tb.css("z-index",i.opts.zIndex+1):i.$tb.css("z-index",null)}},0)}function n(e){return(!e||"blur"!==e.type||document.activeElement!==i.el)&&(!(!e||"keydown"!==e.type||!i.keys.ctrlKey(e))||(!!i.button.getButtons(".fr-dropdown.fr-active").next().find(i.o_doc.activeElement).length||void(!1!==i.events.trigger("toolbar.hide")&&i.$tb.hide())))}r[Te.FE.XS]=i.opts.toolbarButtonsXS||i.opts.toolbarButtons||Te.FE.TOOLBAR_BUTTONS_XS||Te.FE.TOOLBAR_BUTTONS||[],r[Te.FE.SM]=i.opts.toolbarButtonsSM||i.opts.toolbarButtons||Te.FE.TOOLBAR_BUTTONS_SM||Te.FE.TOOLBAR_BUTTONS||[],r[Te.FE.MD]=i.opts.toolbarButtonsMD||i.opts.toolbarButtons||Te.FE.TOOLBAR_BUTTONS_MD||Te.FE.TOOLBAR_BUTTONS||[],r[Te.FE.LG]=i.opts.toolbarButtons||Te.FE.TOOLBAR_BUTTONS||[];var s=null;function l(e){clearTimeout(s),e&&e.which==Te.FE.KEYCODE.ESC||(s=setTimeout(t,i.opts.typingTimer))}function d(){i.events.on("window.mousedown",n),i.events.on("keydown",n),i.events.on("blur",n),i.helpers.isMobile()||i.events.on("window.mouseup",t),i.helpers.isMobile()?i.helpers.isIOS()||(i.events.on("window.touchend",t),i.browser.mozilla&&setInterval(t,200)):i.events.on("window.keyup",l),i.events.on("keydown",function(e){e&&e.which==Te.FE.KEYCODE.ESC&&n()}),i.events.on("keydown",function(e){if(e.which==Te.FE.KEYCODE.ALT)return e.stopPropagation(),!1},!0),i.events.$on(i.$wp,"scroll.toolbar",t),i.events.$on(i.$sc,"scroll.toolbar",t),i.events.on("commands.after",t),i.helpers.isMobile()&&(i.events.$on(i.$doc,"selectionchange",l),i.events.$on(i.$doc,"orientationchange",t))}function c(){i.$tb.html("").removeData().remove(),i.$tb=null}function f(){i.$box.removeClass("fr-top fr-bottom fr-inline fr-basic"),i.$box.find(".fr-sticky-dummy").remove()}function p(){i.opts.theme&&i.$tb.addClass(i.opts.theme+"-theme"),1<i.opts.zIndex&&i.$tb.css("z-index",i.opts.zIndex+1),"auto"!=i.opts.direction&&i.$tb.removeClass("fr-ltr fr-rtl").addClass("fr-"+i.opts.direction),i.helpers.isMobile()?i.$tb.addClass("fr-mobile"):i.$tb.addClass("fr-desktop"),i.opts.toolbarContainer?(i.opts.toolbarInline&&(d(),n()),i.opts.toolbarBottom?i.$tb.addClass("fr-bottom"):i.$tb.addClass("fr-top")):i.opts.toolbarInline?(i.$sc.append(i.$tb),i.$tb.data("container",i.$sc),i.$tb.addClass("fr-inline"),i.$tb.prepend('<span class="fr-arrow"></span>'),d(),i.opts.toolbarBottom=!1):(i.opts.toolbarBottom&&!i.helpers.isIOS()?(i.$box.append(i.$tb),i.$tb.addClass("fr-bottom"),i.$box.addClass("fr-bottom")):(i.opts.toolbarBottom=!1,i.$box.prepend(i.$tb),i.$tb.addClass("fr-top"),i.$box.addClass("fr-top")),i.$tb.addClass("fr-basic"),i.opts.toolbarSticky&&(i.opts.toolbarStickyOffset&&(i.opts.toolbarBottom?i.$tb.css("bottom",i.opts.toolbarStickyOffset):i.$tb.css("top",i.opts.toolbarStickyOffset)),i.position.addSticky(i.$tb))),function(){var e=Te.merge([],o());a(e,r[Te.FE.XS]),a(e,r[Te.FE.SM]),a(e,r[Te.FE.MD]),a(e,r[Te.FE.LG]);for(var t=e.length-1;0<=t;t--)"-"!=e[t]&&"|"!=e[t]&&e.indexOf(e[t])<t&&e.splice(t,1);var n=i.button.buildList(e,o());i.$tb.append(n),i.button.bindCommands(i.$tb)}(),i.events.$on(Te(i.o_win),"resize",e),i.events.$on(Te(i.o_win),"orientationchange",e),i.accessibility.registerToolbar(i.$tb),i.events.$on(i.$tb,i._mousedown+" "+i._mouseup,function(e){var t=e.originalEvent?e.originalEvent.target||e.originalEvent.originalTarget:null;if(t&&"INPUT"!=t.tagName&&!i.edit.isDisabled())return e.stopPropagation(),e.preventDefault(),!1},!0)}var u=!1;return{_init:function(){if(i.$sc=Te(i.opts.scrollableContainer).first(),!i.$wp)return!1;i.opts.toolbarContainer?(i.shared.$tb?(i.$tb=i.shared.$tb,i.opts.toolbarInline&&d()):(i.shared.$tb=Te('<div class="fr-toolbar"></div>'),i.$tb=i.shared.$tb,Te(i.opts.toolbarContainer).append(i.$tb),p(),i.$tb.data("instance",i)),i.opts.toolbarInline?i.$box.addClass("fr-inline"):i.$box.addClass("fr-basic"),i.events.on("focus",function(){i.$tb.data("instance",i)},!0),i.opts.toolbarInline=!1):i.opts.toolbarInline?(i.$box.addClass("fr-inline"),i.shared.$tb?(i.$tb=i.shared.$tb,d(),i.button.bindCommands(i.$tb)):(i.shared.$tb=Te('<div class="fr-toolbar"></div>'),i.$tb=i.shared.$tb,p())):(i.$box.addClass("fr-basic"),i.$tb=Te('<div class="fr-toolbar"></div>'),p(),i.$tb.data("instance",i)),i.events.on("destroy",f,!0),i.events.on(i.opts.toolbarInline||i.opts.toolbarContainer?"shared.destroy":"destroy",c,!0)},hide:n,show:function(){if(!1===i.events.trigger("toolbar.show"))return!1;i.$tb.show()},showInline:t,disable:function(){!u&&i.$tb&&(i.$tb.find("> .fr-command, .fr-btn-wrap > .fr-command").addClass("fr-disabled fr-no-refresh").attr("aria-disabled",!0),u=!0)},enable:function(){u&&i.$tb&&(i.$tb.find("> .fr-command, .fr-btn-wrap > .fr-command").removeClass("fr-disabled fr-no-refresh").attr("aria-disabled",!1),u=!1),i.button.bulkRefresh()}}},Te.FE.PLUGINS.align=function(i){return{apply:function(e){var t=i.selection.element();if(Te(t).parents(".fr-img-caption").length)Te(t).css("text-align",e);else{i.selection.save(),i.html.wrap(!0,!0,!0,!0),i.selection.restore();for(var n=i.selection.blocks(),r=0;r<n.length;r++)Te(n[r]).css("text-align",e).removeClass("fr-temp-div"),""===Te(n[r]).attr("class")&&Te(n[r]).removeAttr("class"),""===Te(n[r]).attr("style")&&Te(n[r]).removeAttr("style");i.selection.save(),i.html.unwrap(),i.selection.restore()}},refresh:function(e){var t=i.selection.blocks();if(t.length){var n=i.helpers.getAlignment(Te(t[0]));e.find("> *:first").replaceWith(i.icon.create("align-"+n))}},refreshOnShow:function(e,t){var n=i.selection.blocks();if(n.length){var r=i.helpers.getAlignment(Te(n[0]));t.find('a.fr-command[data-param1="'+r+'"]').addClass("fr-active").attr("aria-selected",!0)}},refreshForToolbar:function(e){var t=i.selection.blocks();if(t.length){var n=i.helpers.getAlignment(Te(t[0]));"align"+(n=n.charAt(0).toUpperCase()+n.slice(1))==e.attr("data-cmd")&&e.addClass("fr-active")}}}},Te.FE.DefineIcon("align",{NAME:"align-left"}),Te.FE.DefineIcon("align-left",{NAME:"align-left"}),Te.FE.DefineIcon("align-right",{NAME:"align-right"}),Te.FE.DefineIcon("align-center",{NAME:"align-center"}),Te.FE.DefineIcon("align-justify",{NAME:"align-justify"}),Te.FE.RegisterCommand("align",{type:"dropdown",title:"Align",options:{left:"Align Left",center:"Align Center",right:"Align Right",justify:"Align Justify"},html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=Te.FE.COMMANDS.align.options;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command fr-title" tabIndex="-1" role="option" data-cmd="align" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.icon.create("align-"+n)+'<span class="fr-sr-only">'+this.language.translate(t[n])+"</span></a></li>");return e+="</ul>"},callback:function(e,t){this.align.apply(t)},refresh:function(e){this.align.refresh(e)},refreshOnShow:function(e,t){this.align.refreshOnShow(e,t)},plugin:"align"}),Te.FE.RegisterCommand("alignLeft",{type:"button",icon:"align-left",callback:function(){this.align.apply("left")},refresh:function(e){this.align.refreshForToolbar(e)}}),Te.FE.RegisterCommand("alignRight",{type:"button",icon:"align-right",callback:function(){this.align.apply("right")},refresh:function(e){this.align.refreshForToolbar(e)}}),Te.FE.RegisterCommand("alignCenter",{type:"button",icon:"align-center",callback:function(){this.align.apply("center")},refresh:function(e){this.align.refreshForToolbar(e)}}),Te.FE.RegisterCommand("alignJustify",{type:"button",icon:"align-justify",callback:function(){this.align.apply("justify")},refresh:function(e){this.align.refreshForToolbar(e)}}),Te.extend(Te.FE.DEFAULTS,{charCounterMax:-1,charCounterCount:!0}),Te.FE.PLUGINS.charCounter=function(n){var r;function i(){return(n.el.textContent||"").replace(/\u200B/g,"").length}function e(e){if(n.opts.charCounterMax<0)return!0;if(i()<n.opts.charCounterMax)return!0;var t=e.which;return!(!n.keys.ctrlKey(e)&&n.keys.isCharacter(t)||t===Te.FE.KEYCODE.IME)||(e.preventDefault(),e.stopPropagation(),n.events.trigger("charCounter.exceeded"),!1)}function t(e){return n.opts.charCounterMax<0?e:Te("<div>").html(e).text().length+i()<=n.opts.charCounterMax?e:(n.events.trigger("charCounter.exceeded"),"")}function a(){if(n.opts.charCounterCount){var e=i()+(0<n.opts.charCounterMax?"/"+n.opts.charCounterMax:"");r.text(e),n.opts.toolbarBottom&&r.css("margin-bottom",n.$tb.outerHeight(!0));var t=n.$wp.get(0).offsetWidth-n.$wp.get(0).clientWidth;0<=t&&("rtl"==n.opts.direction?r.css("margin-left",t):r.css("margin-right",t))}}return{_init:function(){return!!n.$wp&&!!n.opts.charCounterCount&&((r=Te('<span class="fr-counter"></span>')).css("bottom",n.$wp.css("border-bottom-width")),n.$box.append(r),n.events.on("keydown",e,!0),n.events.on("paste.afterCleanup",t),n.events.on("keyup contentChanged input",function(){n.events.trigger("charCounter.update")}),n.events.on("charCounter.update",a),n.events.trigger("charCounter.update"),void n.events.on("destroy",function(){Te(n.o_win).off("resize.char"+n.id),r.removeData().remove(),r=null}))},count:i}},Te.FE.PLUGINS.codeBeautifier=function(){var e,t,n,r,Y={};function N(r,e){var t={"@page":!0,"@font-face":!0,"@keyframes":!0,"@media":!0,"@supports":!0,"@document":!0},n={"@media":!0,"@supports":!0,"@document":!0};e=e||{},r=(r=r||"").replace(/\r\n|[\r\u2028\u2029]/g,"\n");var i=e.indent_size||4,a=e.indent_char||" ",o=e.selector_separator_newline===undefined||e.selector_separator_newline,s=e.end_with_newline!==undefined&&e.end_with_newline,l=e.newline_between_rules===undefined||e.newline_between_rules,d=e.eol?e.eol:"\n";"string"==typeof i&&(i=parseInt(i,10)),e.indent_with_tabs&&(a="\t",i=1),d=d.replace(/\\r/,"\r").replace(/\\n/,"\n");var c,f=/^\s+$/,p=-1,u=0;function h(){return(c=r.charAt(++p))||""}function g(e){var t,n=p;return e&&v(),t=r.charAt(p+1)||"",p=n-1,h(),t}function m(e){for(var t=p;h();)if("\\"===c)h();else{if(-1!==e.indexOf(c))break;if("\n"===c)break}return r.substring(t,p+1)}function v(){for(var e="";f.test(g());)h(),e+=c;return e}function E(){var e="";for(c&&f.test(c)&&(e=c);f.test(h());)e+=c;return e}function b(e){var t=p;for(e="/"===g(),h();h();){if(!e&&"*"===c&&"/"===g()){h();break}if(e&&"\n"===c)return r.substring(t,p)}return r.substring(t,p)+c}function T(e){return r.substring(p-e.length,p).toLowerCase()===e}function A(){for(var e=0,t=p+1;t<r.length;t++){var n=r.charAt(t);if("{"===n)return!0;if("("===n)e+=1;else if(")"===n){if(0==e)return!1;e-=1}else if(";"===n||"}"===n)return!1}return!1}var C=r.match(/^[\t ]*/)[0],S=new Array(i+1).join(a),R=0,y=0;for(var L,_,N={"{":function(e){N.singleSpace(),x.push(e),N.newLine()},"}":function(e){N.newLine(),x.push(e),N.newLine()},_lastCharWhitespace:function(){return f.test(x[x.length-1])},newLine:function(e){x.length&&(e||"\n"===x[x.length-1]||N.trim(),x.push("\n"),C&&x.push(C))},singleSpace:function(){x.length&&!N._lastCharWhitespace()&&x.push(" ")},preserveSingleSpace:function(){M&&N.singleSpace()},trim:function(){for(;N._lastCharWhitespace();)x.pop()}},x=[],w=!1,O=!1,I=!1,k="",D="";;){var F=E(),M=""!==F,$=-1!==F.indexOf("\n");if(D=k,!(k=c))break;if("/"===c&&"*"===g()){var B=0===R;($||B)&&N.newLine(),x.push(b()),N.newLine(),B&&N.newLine(!0)}else if("/"===c&&"/"===g())$||"{"===D||N.trim(),N.singleSpace(),x.push(b()),N.newLine();else if("@"===c){N.preserveSingleSpace(),x.push(c);var P=(void 0,L=p,_=m(": ,;{}()[]/='\""),p=L-1,h(),_);P.match(/[ :]$/)&&(h(),P=m(": ").replace(/\s$/,""),x.push(P),N.singleSpace()),(P=P.replace(/\s$/,""))in t&&(y+=1,P in n&&(I=!0))}else"#"===c&&"{"===g()?(N.preserveSingleSpace(),x.push(m("}"))):"{"===c?"}"===g(!0)?(v(),h(),N.singleSpace(),x.push("{}"),N.newLine(),l&&0===R&&N.newLine(!0)):(R++,C+=S,N["{"](c),I?(I=!1,w=y<R):w=y<=R):"}"===c?(R--,C=C.slice(0,-i),N["}"](c),O=w=!1,y&&y--,l&&0===R&&N.newLine(!0)):":"===c?(v(),!w&&!I||T("&")||A()?":"===g()?(h(),x.push("::")):x.push(":"):(O=!0,x.push(":"),N.singleSpace())):'"'===c||"'"===c?(N.preserveSingleSpace(),x.push(m(c))):";"===c?(O=!1,x.push(c),N.newLine()):"("===c?T("url")?(x.push(c),v(),h()&&(")"!==c&&'"'!==c&&"'"!==c?x.push(m(")")):p--)):(u++,N.preserveSingleSpace(),x.push(c),v()):")"===c?(x.push(c),u--):","===c?(x.push(c),v(),o&&!O&&u<1?N.newLine():N.singleSpace()):("]"===c||("["===c?N.preserveSingleSpace():"="===c?(v(),c="="):N.preserveSingleSpace()),x.push(c))}var U="";return C&&(U+=C),U+=x.join("").replace(/[\r\n\t ]+$/,""),s&&(U+="\n"),"\n"!=d&&(U=U.replace(/[\n]/g,d)),U}function G(e,t){for(var n=0;n<t.length;n+=1)if(t[n]===e)return!0;return!1}function V(e){return e.replace(/^\s+|\s+$/g,"")}function x(e,t){return new i(e,t).beautify()}e=Y,t="\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc",n=new RegExp("["+t+"]"),r=new RegExp("["+t+"\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u0620-\u0649\u0672-\u06d3\u06e7-\u06e8\u06fb-\u06fc\u0730-\u074a\u0800-\u0814\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0840-\u0857\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962-\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09d7\u09df-\u09e0\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5f-\u0b60\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2-\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d46-\u0d48\u0d57\u0d62-\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e34-\u0e3a\u0e40-\u0e45\u0e50-\u0e59\u0eb4-\u0eb9\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f41-\u0f47\u0f71-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1029\u1040-\u1049\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u170e-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17b2\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1920-\u192b\u1930-\u193b\u1951-\u196d\u19b0-\u19c0\u19c8-\u19c9\u19d0-\u19d9\u1a00-\u1a15\u1a20-\u1a53\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b46-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1bb0-\u1bb9\u1be6-\u1bf3\u1c00-\u1c22\u1c40-\u1c49\u1c5b-\u1c7d\u1cd0-\u1cd2\u1d00-\u1dbe\u1e01-\u1f15\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2d81-\u2d96\u2de0-\u2dff\u3021-\u3028\u3099\u309a\ua640-\ua66d\ua674-\ua67d\ua69f\ua6f0-\ua6f1\ua7f8-\ua800\ua806\ua80b\ua823-\ua827\ua880-\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8f3-\ua8f7\ua900-\ua909\ua926-\ua92d\ua930-\ua945\ua980-\ua983\ua9b3-\ua9c0\uaa00-\uaa27\uaa40-\uaa41\uaa4c-\uaa4d\uaa50-\uaa59\uaa7b\uaae0-\uaae9\uaaf2-\uaaf3\uabc0-\uabe1\uabec\uabed\uabf0-\uabf9\ufb20-\ufb28\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f]"),e.newline=/[\n\r\u2028\u2029]/,e.lineBreak=new RegExp("\r\n|"+e.newline.source),e.allLineBreaks=new RegExp(e.lineBreak.source,"g"),e.isIdentifierStart=function(e){return e<65?36===e||64===e:e<91||(e<97?95===e:e<123||170<=e&&n.test(String.fromCharCode(e)))},e.isIdentifierChar=function(e){return e<48?36===e:e<58||!(e<65)&&(e<91||(e<97?95===e:e<123||170<=e&&r.test(String.fromCharCode(e))))};var D={BlockStatement:"BlockStatement",Statement:"Statement",ObjectLiteral:"ObjectLiteral",ArrayLiteral:"ArrayLiteral",ForInitializer:"ForInitializer",Conditional:"Conditional",Expression:"Expression"};function i(r,e){var o,i,a,s,l,d,c,f,p,t,n,u,h,g=[],m="";function v(e,t){var n=0;return e&&(n=e.indentation_level,!o.just_added_newline()&&e.line_indent_level>n&&(n=e.line_indent_level)),{mode:t,parent:e,last_text:e?e.last_text:"",last_word:e?e.last_word:"",declaration_statement:!1,declaration_assignment:!1,multiline_frame:!1,if_block:!1,else_block:!1,do_block:!1,do_while:!1,in_case_statement:!1,in_case:!1,case_body:!1,indentation_level:n,line_indent_level:e?e.line_indent_level:n,start_line_index:o.get_line_number(),ternary_depth:0}}for(u={TK_START_EXPR:function(){w();var e=D.Expression;if("["===s.text){if("TK_WORD"===l||")"===f.last_text)return"TK_RESERVED"===l&&G(f.last_text,a.line_starters)&&(o.space_before_token=!0),y(e),S(),R(),void(h.space_in_paren&&(o.space_before_token=!0));e=D.ArrayLiteral,L(f.mode)&&("["!==f.last_text&&(","!==f.last_text||"]"!==d&&"}"!==d)||h.keep_array_indentation||A())}else"TK_RESERVED"===l&&"for"===f.last_text?e=D.ForInitializer:"TK_RESERVED"===l&&G(f.last_text,["if","while"])&&(e=D.Conditional);";"===f.last_text||"TK_START_BLOCK"===l?A():"TK_END_EXPR"===l||"TK_START_EXPR"===l||"TK_END_BLOCK"===l||"."===f.last_text?T(s.wanted_newline):"TK_RESERVED"===l&&"("===s.text||"TK_WORD"===l||"TK_OPERATOR"===l?"TK_RESERVED"===l&&("function"===f.last_word||"typeof"===f.last_word)||"*"===f.last_text&&"function"===d?h.space_after_anon_function&&(o.space_before_token=!0):"TK_RESERVED"!==l||!G(f.last_text,a.line_starters)&&"catch"!==f.last_text||h.space_before_conditional&&(o.space_before_token=!0):o.space_before_token=!0;"("===s.text&&"TK_RESERVED"===l&&"await"===f.last_word&&(o.space_before_token=!0);"("===s.text&&("TK_EQUALS"!==l&&"TK_OPERATOR"!==l||x()||T());y(e),S(),h.space_in_paren&&(o.space_before_token=!0);R()},TK_END_EXPR:function(){for(;f.mode===D.Statement;)N();f.multiline_frame&&T("]"===s.text&&L(f.mode)&&!h.keep_array_indentation);h.space_in_paren&&("TK_START_EXPR"!==l||h.space_in_empty_paren?o.space_before_token=!0:(o.trim(),o.space_before_token=!1));"]"===s.text&&h.keep_array_indentation?(S(),N()):(N(),S());o.remove_redundant_indentation(p),f.do_while&&p.mode===D.Conditional&&(p.mode=D.Expression,f.do_block=!1,f.do_while=!1)},TK_START_BLOCK:function(){var e=I(1),t=I(2);t&&(":"===t.text&&G(e.type,["TK_STRING","TK_WORD","TK_RESERVED"])||G(e.text,["get","set"])&&G(t.type,["TK_WORD","TK_RESERVED"]))?G(d,["class","interface"])?y(D.BlockStatement):y(D.ObjectLiteral):y(D.BlockStatement);var n=!e.comments_before.length&&"}"===e.text&&"function"===f.last_word&&"TK_END_EXPR"===l;"expand"===h.brace_style||"none"===h.brace_style&&s.wanted_newline?"TK_OPERATOR"!==l&&(n||"TK_EQUALS"===l||"TK_RESERVED"===l&&O(f.last_text)&&"else"!==f.last_text)?o.space_before_token=!0:A(!1,!0):"TK_OPERATOR"!==l&&"TK_START_EXPR"!==l?"TK_START_BLOCK"===l?A():o.space_before_token=!0:L(p.mode)&&","===f.last_text&&("}"===d?o.space_before_token=!0:A());S(),R()},TK_END_BLOCK:function(){for(;f.mode===D.Statement;)N();var e="TK_START_BLOCK"===l;"expand"===h.brace_style?e||A():e||(L(f.mode)&&h.keep_array_indentation?(h.keep_array_indentation=!1,A(),h.keep_array_indentation=!0):A());N(),S()},TK_WORD:k,TK_RESERVED:k,TK_SEMICOLON:function(){w()&&(o.space_before_token=!1);for(;f.mode===D.Statement&&!f.if_block&&!f.do_block;)N();S()},TK_STRING:function(){w()?o.space_before_token=!0:"TK_RESERVED"===l||"TK_WORD"===l?o.space_before_token=!0:"TK_COMMA"===l||"TK_START_EXPR"===l||"TK_EQUALS"===l||"TK_OPERATOR"===l?x()||T():A();S()},TK_EQUALS:function(){w();f.declaration_statement&&(f.declaration_assignment=!0);o.space_before_token=!0,S(),o.space_before_token=!0},TK_OPERATOR:function(){w();if("TK_RESERVED"===l&&O(f.last_text))return o.space_before_token=!0,void S();if("*"===s.text&&"TK_DOT"===l)return void S();if(":"===s.text&&f.in_case)return f.case_body=!0,R(),S(),A(),void(f.in_case=!1);if("::"===s.text)return void S();"TK_OPERATOR"===l&&T();var e=!0,t=!0;G(s.text,["--","++","!","~"])||G(s.text,["-","+"])&&(G(l,["TK_START_BLOCK","TK_START_EXPR","TK_EQUALS","TK_OPERATOR"])||G(f.last_text,a.line_starters)||","===f.last_text)?(t=e=!1,!s.wanted_newline||"--"!==s.text&&"++"!==s.text||A(!1,!0),";"===f.last_text&&_(f.mode)&&(e=!0),"TK_RESERVED"===l?e=!0:"TK_END_EXPR"===l?e=!("]"===f.last_text&&("--"===s.text||"++"===s.text)):"TK_OPERATOR"===l&&(e=G(s.text,["--","-","++","+"])&&G(f.last_text,["--","-","++","+"]),G(s.text,["+","-"])&&G(f.last_text,["--","++"])&&(t=!0)),f.mode!==D.BlockStatement&&f.mode!==D.Statement||"{"!==f.last_text&&";"!==f.last_text||A()):":"===s.text?0===f.ternary_depth?e=!1:f.ternary_depth-=1:"?"===s.text?f.ternary_depth+=1:"*"===s.text&&"TK_RESERVED"===l&&"function"===f.last_text&&(t=e=!1);o.space_before_token=o.space_before_token||e,S(),o.space_before_token=t},TK_COMMA:function(){if(f.declaration_statement)return _(f.parent.mode)&&(f.declaration_assignment=!1),S(),void(f.declaration_assignment?A(f.declaration_assignment=!1,!0):(o.space_before_token=!0,h.comma_first&&T()));S(),f.mode===D.ObjectLiteral||f.mode===D.Statement&&f.parent.mode===D.ObjectLiteral?(f.mode===D.Statement&&N(),A()):(o.space_before_token=!0,h.comma_first&&T())},TK_BLOCK_COMMENT:function(){if(o.raw)return o.add_raw_token(s),void(s.directives&&"end"===s.directives.preserve&&(h.test_output_raw||(o.raw=!1)));if(s.directives)return A(!1,!0),S(),"start"===s.directives.preserve&&(o.raw=!0),void A(!1,!0);if(!Y.newline.test(s.text)&&!s.wanted_newline)return o.space_before_token=!0,S(),void(o.space_before_token=!0);var e,t=function(e){e=e.replace(/\x0d/g,"");var t=[],n=e.indexOf("\n");for(;-1!==n;)t.push(e.substring(0,n)),e=e.substring(n+1),n=e.indexOf("\n");e.length&&t.push(e);return t}(s.text),n=!1,r=!1,i=s.whitespace_before,a=i.length;A(!1,!0),1<t.length&&(!function(e,t){for(var n=0;n<e.length;n++){var r=V(e[n]);if(r.charAt(0)!==t)return!1}return!0}(t.slice(1),"*")?function(e,t){for(var n,r=0,i=e.length;r<i;r++)if((n=e[r])&&0!==n.indexOf(t))return!1;return!0}(t.slice(1),i)&&(r=!0):n=!0);for(S(t[0]),e=1;e<t.length;e++)A(!1,!0),n?S(" "+t[e].replace(/^\s+/g,"")):r&&t[e].length>a?S(t[e].substring(a)):o.add_token(t[e]);A(!1,!0)},TK_COMMENT:function(){s.wanted_newline?A(!1,!0):o.trim(!0);o.space_before_token=!0,S(),A(!1,!0)},TK_DOT:function(){w();"TK_RESERVED"===l&&O(f.last_text)?o.space_before_token=!0:T(")"===f.last_text&&h.break_chained_methods);S()},TK_UNKNOWN:function(){S(),"\n"===s.text[s.text.length-1]&&A()},TK_EOF:function(){for(;f.mode===D.Statement;)N()}},h={},(e=e||{}).braces_on_own_line!==undefined&&(h.brace_style=e.braces_on_own_line?"expand":"collapse"),h.brace_style=e.brace_style?e.brace_style:h.brace_style?h.brace_style:"collapse","expand-strict"===h.brace_style&&(h.brace_style="expand"),h.indent_size=e.indent_size?parseInt(e.indent_size,10):4,h.indent_char=e.indent_char?e.indent_char:" ",h.eol=e.eol?e.eol:"\n",h.preserve_newlines=e.preserve_newlines===undefined||e.preserve_newlines,h.break_chained_methods=e.break_chained_methods!==undefined&&e.break_chained_methods,h.max_preserve_newlines=e.max_preserve_newlines===undefined?0:parseInt(e.max_preserve_newlines,10),h.space_in_paren=e.space_in_paren!==undefined&&e.space_in_paren,h.space_in_empty_paren=e.space_in_empty_paren!==undefined&&e.space_in_empty_paren,h.jslint_happy=e.jslint_happy!==undefined&&e.jslint_happy,h.space_after_anon_function=e.space_after_anon_function!==undefined&&e.space_after_anon_function,h.keep_array_indentation=e.keep_array_indentation!==undefined&&e.keep_array_indentation,h.space_before_conditional=e.space_before_conditional===undefined||e.space_before_conditional,h.unescape_strings=e.unescape_strings!==undefined&&e.unescape_strings,h.wrap_line_length=e.wrap_line_length===undefined?0:parseInt(e.wrap_line_length,10),h.e4x=e.e4x!==undefined&&e.e4x,h.end_with_newline=e.end_with_newline!==undefined&&e.end_with_newline,h.comma_first=e.comma_first!==undefined&&e.comma_first,h.test_output_raw=e.test_output_raw!==undefined&&e.test_output_raw,h.jslint_happy&&(h.space_after_anon_function=!0),e.indent_with_tabs&&(h.indent_char="\t",h.indent_size=1),h.eol=h.eol.replace(/\\r/,"\r").replace(/\\n/,"\n"),c="";0<h.indent_size;)c+=h.indent_char,h.indent_size-=1;var E=0;if(r&&r.length){for(;" "===r.charAt(E)||"\t"===r.charAt(E);)m+=r.charAt(E),E+=1;r=r.substring(E)}function b(e){var t=e.newlines;if(h.keep_array_indentation&&L(f.mode))for(n=0;n<t;n+=1)A(0<n);else if(h.max_preserve_newlines&&t>h.max_preserve_newlines&&(t=h.max_preserve_newlines),h.preserve_newlines&&1<e.newlines){A();for(var n=1;n<t;n+=1)A(!0)}u[(s=e).type]()}function T(e){if(e=e!==undefined&&e,!o.just_added_newline())if(h.preserve_newlines&&s.wanted_newline||e)A(!1,!0);else if(h.wrap_line_length){o.current_line.get_character_count()+s.text.length+(o.space_before_token?1:0)>=h.wrap_line_length&&A(!1,!0)}}function A(e,t){if(!t&&";"!==f.last_text&&","!==f.last_text&&"="!==f.last_text&&"TK_OPERATOR"!==l)for(;f.mode===D.Statement&&!f.if_block&&!f.do_block;)N();o.add_new_line(e)&&(f.multiline_frame=!0)}function C(){o.just_added_newline()&&(h.keep_array_indentation&&L(f.mode)&&s.wanted_newline?(o.current_line.push(s.whitespace_before),o.space_before_token=!1):o.set_indent(f.indentation_level)&&(f.line_indent_level=f.indentation_level))}function S(e){o.raw?o.add_raw_token(s):(h.comma_first&&"TK_COMMA"===l&&o.just_added_newline()&&","===o.previous_line.last()&&(o.previous_line.pop(),C(),o.add_token(","),o.space_before_token=!0),e=e||s.text,C(),o.add_token(e))}function R(){f.indentation_level+=1}function y(e){f?(t.push(f),p=f):p=v(null,e),f=v(p,e)}function L(e){return e===D.ArrayLiteral}function _(e){return G(e,[D.Expression,D.ForInitializer,D.Conditional])}function N(){0<t.length&&(p=f,f=t.pop(),p.mode===D.Statement&&o.remove_redundant_indentation(p))}function x(){return f.parent.mode===D.ObjectLiteral&&f.mode===D.Statement&&(":"===f.last_text&&0===f.ternary_depth||"TK_RESERVED"===l&&G(f.last_text,["get","set"]))}function w(){return!!("TK_RESERVED"===l&&G(f.last_text,["var","let","const"])&&"TK_WORD"===s.type||"TK_RESERVED"===l&&"do"===f.last_text||"TK_RESERVED"===l&&"return"===f.last_text&&!s.wanted_newline||"TK_RESERVED"===l&&"else"===f.last_text&&("TK_RESERVED"!==s.type||"if"!==s.text)||"TK_END_EXPR"===l&&(p.mode===D.ForInitializer||p.mode===D.Conditional)||"TK_WORD"===l&&f.mode===D.BlockStatement&&!f.in_case&&"--"!==s.text&&"++"!==s.text&&"function"!==d&&"TK_WORD"!==s.type&&"TK_RESERVED"!==s.type||f.mode===D.ObjectLiteral&&(":"===f.last_text&&0===f.ternary_depth||"TK_RESERVED"===l&&G(f.last_text,["get","set"])))&&(y(D.Statement),R(),"TK_RESERVED"===l&&G(f.last_text,["var","let","const"])&&"TK_WORD"===s.type&&(f.declaration_statement=!0),x()||T("TK_RESERVED"===s.type&&G(s.text,["do","for","if","while"])),!0)}function O(e){return G(e,["case","return","do","if","throw","else"])}function I(e){var t=i+(e||0);return t<0||t>=g.length?null:g[t]}function k(){("TK_RESERVED"===s.type&&f.mode!==D.ObjectLiteral&&G(s.text,["set","get"])&&(s.type="TK_WORD"),"TK_RESERVED"===s.type&&f.mode===D.ObjectLiteral)&&(":"==I(1).text&&(s.type="TK_WORD"));if(w()||!s.wanted_newline||_(f.mode)||"TK_OPERATOR"===l&&"--"!==f.last_text&&"++"!==f.last_text||"TK_EQUALS"===l||!h.preserve_newlines&&"TK_RESERVED"===l&&G(f.last_text,["var","let","const","set","get"])||A(),f.do_block&&!f.do_while){if("TK_RESERVED"===s.type&&"while"===s.text)return o.space_before_token=!0,S(),o.space_before_token=!0,void(f.do_while=!0);A(),f.do_block=!1}if(f.if_block)if(f.else_block||"TK_RESERVED"!==s.type||"else"!==s.text){for(;f.mode===D.Statement;)N();f.if_block=!1,f.else_block=!1}else f.else_block=!0;if("TK_RESERVED"===s.type&&("case"===s.text||"default"===s.text&&f.in_case_statement))return A(),(f.case_body||h.jslint_happy)&&(0<f.indentation_level&&(!f.parent||f.indentation_level>f.parent.indentation_level)&&(f.indentation_level-=1),f.case_body=!1),S(),f.in_case=!0,void(f.in_case_statement=!0);if("TK_RESERVED"===s.type&&"function"===s.text&&((G(f.last_text,["}",";"])||o.just_added_newline()&&!G(f.last_text,["[","{",":","=",","]))&&(o.just_added_blankline()||s.comments_before.length||(A(),A(!0))),"TK_RESERVED"===l||"TK_WORD"===l?"TK_RESERVED"===l&&G(f.last_text,["get","set","new","return","export","async"])?o.space_before_token=!0:"TK_RESERVED"===l&&"default"===f.last_text&&"export"===d?o.space_before_token=!0:A():"TK_OPERATOR"===l||"="===f.last_text?o.space_before_token=!0:(f.multiline_frame||!_(f.mode)&&!L(f.mode))&&A()),"TK_COMMA"!==l&&"TK_START_EXPR"!==l&&"TK_EQUALS"!==l&&"TK_OPERATOR"!==l||x()||T(),"TK_RESERVED"===s.type&&G(s.text,["function","get","set"]))return S(),void(f.last_word=s.text);(n="NONE","TK_END_BLOCK"===l?"TK_RESERVED"===s.type&&G(s.text,["else","catch","finally"])?"expand"===h.brace_style||"end-expand"===h.brace_style||"none"===h.brace_style&&s.wanted_newline?n="NEWLINE":(n="SPACE",o.space_before_token=!0):n="NEWLINE":"TK_SEMICOLON"===l&&f.mode===D.BlockStatement?n="NEWLINE":"TK_SEMICOLON"===l&&_(f.mode)?n="SPACE":"TK_STRING"===l?n="NEWLINE":"TK_RESERVED"===l||"TK_WORD"===l||"*"===f.last_text&&"function"===d?n="SPACE":"TK_START_BLOCK"===l?n="NEWLINE":"TK_END_EXPR"===l&&(o.space_before_token=!0,n="NEWLINE"),"TK_RESERVED"===s.type&&G(s.text,a.line_starters)&&")"!==f.last_text&&(n="else"===f.last_text||"export"===f.last_text?"SPACE":"NEWLINE"),"TK_RESERVED"===s.type&&G(s.text,["else","catch","finally"]))?"TK_END_BLOCK"!==l||"expand"===h.brace_style||"end-expand"===h.brace_style||"none"===h.brace_style&&s.wanted_newline?A():(o.trim(!0),"}"!==o.current_line.last()&&A(),o.space_before_token=!0):"NEWLINE"===n?"TK_RESERVED"===l&&O(f.last_text)?o.space_before_token=!0:"TK_END_EXPR"!==l?"TK_START_EXPR"===l&&"TK_RESERVED"===s.type&&G(s.text,["var","let","const"])||":"===f.last_text||("TK_RESERVED"===s.type&&"if"===s.text&&"else"===f.last_text?o.space_before_token=!0:A()):"TK_RESERVED"===s.type&&G(s.text,a.line_starters)&&")"!==f.last_text&&A():f.multiline_frame&&L(f.mode)&&","===f.last_text&&"}"===d?A():"SPACE"===n&&(o.space_before_token=!0);S(),f.last_word=s.text,"TK_RESERVED"===s.type&&"do"===s.text&&(f.do_block=!0),"TK_RESERVED"===s.type&&"if"===s.text&&(f.if_block=!0)}l="TK_START_BLOCK",d="",(o=new F(c,m)).raw=h.test_output_raw,t=[],y(D.BlockStatement),this.beautify=function(){var e,t;for(a=new M(r,h,c),g=a.tokenize(),i=0;e=I();){for(var n=0;n<e.comments_before.length;n++)b(e.comments_before[n]);b(e),d=f.last_text,l=e.type,f.last_text=e.text,i+=1}return t=o.get_code(),h.end_with_newline&&(t+="\n"),"\n"!=h.eol&&(t=t.replace(/[\n]/g,h.eol)),t}}function a(t){var n=0,r=-1,i=[],a=!0;this.set_indent=function(e){n=t.baseIndentLength+e*t.indent_length,r=e},this.get_character_count=function(){return n},this.is_empty=function(){return a},this.last=function(){return this._empty?null:i[i.length-1]},this.push=function(e){i.push(e),n+=e.length,a=!1},this.pop=function(){var e=null;return a||(e=i.pop(),n-=e.length,a=0===i.length),e},this.remove_indent=function(){0<r&&(r-=1,n-=t.indent_length)},this.trim=function(){for(;" "===this.last();){i.pop();n-=1}a=0===i.length},this.toString=function(){var e="";return this._empty||(0<=r&&(e=t.indent_cache[r]),e+=i.join("")),e}}function F(t,n){n=n||"",this.indent_cache=[n],this.baseIndentLength=n.length,this.indent_length=t.length,this.raw=!1;var r=[];this.baseIndentString=n,this.indent_string=t,this.previous_line=null,this.current_line=null,this.space_before_token=!1,this.add_outputline=function(){this.previous_line=this.current_line,this.current_line=new a(this),r.push(this.current_line)},this.add_outputline(),this.get_line_number=function(){return r.length},this.add_new_line=function(e){return(1!==this.get_line_number()||!this.just_added_newline())&&(!(!e&&this.just_added_newline())&&(this.raw||this.add_outputline(),!0))},this.get_code=function(){return r.join("\n").replace(/[\r\n\t ]+$/,"")},this.set_indent=function(e){if(1<r.length){for(;e>=this.indent_cache.length;)this.indent_cache.push(this.indent_cache[this.indent_cache.length-1]+this.indent_string);return this.current_line.set_indent(e),!0}return this.current_line.set_indent(0),!1},this.add_raw_token=function(e){for(var t=0;t<e.newlines;t++)this.add_outputline();this.current_line.push(e.whitespace_before),this.current_line.push(e.text),this.space_before_token=!1},this.add_token=function(e){this.add_space_before_token(),this.current_line.push(e)},this.add_space_before_token=function(){this.space_before_token&&!this.just_added_newline()&&this.current_line.push(" "),this.space_before_token=!1},this.remove_redundant_indentation=function(e){if(!e.multiline_frame&&e.mode!==D.ForInitializer&&e.mode!==D.Conditional)for(var t=e.start_line_index,n=r.length;t<n;)r[t].remove_indent(),t++},this.trim=function(e){for(e=e!==undefined&&e,this.current_line.trim(t,n);e&&1<r.length&&this.current_line.is_empty();)r.pop(),this.current_line=r[r.length-1],this.current_line.trim();this.previous_line=1<r.length?r[r.length-2]:null},this.just_added_newline=function(){return this.current_line.is_empty()},this.just_added_blankline=function(){return!!this.just_added_newline()&&(1===r.length||r[r.length-2].is_empty())}}var X=function(e,t,n,r,i,a){this.type=e,this.text=t,this.comments_before=[],this.newlines=n||0,this.wanted_newline=0<n,this.whitespace_before=r||"",this.parent=null,this.directives=null};function M(y,L,e){var _="\n\r\t ".split(""),N=/[0-9]/,x=/[01234567]/,w=/[0123456789abcdefABCDEF]/,O="+ - * / % & ++ -- = += -= *= /= %= == === != !== > < >= <= >> << >>> >>>= >>= <<= && &= | || ! ~ , : ? ^ ^= |= :: =>".split(" ");this.line_starters="continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(",");var I,k,D,F,M,$,B=this.line_starters.concat(["do","in","else","get","set","new","catch","finally","typeof","yield","async","await"]),P=/([\s\S]*?)((?:\*\/)|$)/g,U=/([^\n\r\u2028\u2029]*)/g,K=/\/\* beautify( \w+[:]\w+)+ \*\//g,H=/ (\w+)[:](\w+)/g,W=/([\s\S]*?)((?:\/\*\sbeautify\signore:end\s\*\/)|$)/g,z=/((<\?php|<\?=)[\s\S]*?\?>)|(<%[\s\S]*?%>)/g;function o(){var e,t,n=[];if(I=0,k="",$<=M)return["","TK_EOF"];t=F.length?F[F.length-1]:new X("TK_START_BLOCK","{");var r=y.charAt(M);for(M+=1;G(r,_);){if(Y.newline.test(r)?"\n"===r&&"\r"===y.charAt(M-2)||(I+=1,n=[]):n.push(r),$<=M)return["","TK_EOF"];r=y.charAt(M),M+=1}if(n.length&&(k=n.join("")),N.test(r)){var i=!0,a=!0,o=N;for("0"===r&&M<$&&/[Xxo]/.test(y.charAt(M))?(a=i=!1,r+=y.charAt(M),M+=1,o=/[o]/.test(y.charAt(M))?x:w):(r="",M-=1);M<$&&o.test(y.charAt(M));)r+=y.charAt(M),M+=1,i&&M<$&&"."===y.charAt(M)&&(r+=y.charAt(M),M+=1,i=!1),a&&M<$&&/[Ee]/.test(y.charAt(M))&&(r+=y.charAt(M),(M+=1)<$&&/[+-]/.test(y.charAt(M))&&(r+=y.charAt(M),M+=1),i=a=!1);return[r,"TK_WORD"]}if(Y.isIdentifierStart(y.charCodeAt(M-1))){if(M<$)for(;Y.isIdentifierChar(y.charCodeAt(M))&&(r+=y.charAt(M),(M+=1)!==$););return"TK_DOT"===t.type||"TK_RESERVED"===t.type&&G(t.text,["set","get"])||!G(r,B)?[r,"TK_WORD"]:"in"===r?[r,"TK_OPERATOR"]:[r,"TK_RESERVED"]}if("("===r||"["===r)return[r,"TK_START_EXPR"];if(")"===r||"]"===r)return[r,"TK_END_EXPR"];if("{"===r)return[r,"TK_START_BLOCK"];if("}"===r)return[r,"TK_END_BLOCK"];if(";"===r)return[r,"TK_SEMICOLON"];if("/"===r){var s="";if("*"===y.charAt(M)){var l;M+=1,P.lastIndex=M,s="/*"+(l=P.exec(y))[0],M+=l[0].length;var d=function(e){if(!e.match(K))return null;var t={};H.lastIndex=0;for(var n=H.exec(e);n;)t[n[1]]=n[2],n=H.exec(e);return t}(s);return d&&"start"===d.ignore&&(W.lastIndex=M,s+=(l=W.exec(y))[0],M+=l[0].length),[s=s.replace(Y.lineBreak,"\n"),"TK_BLOCK_COMMENT",d]}if("/"===y.charAt(M))return M+=1,U.lastIndex=M,s="//"+(l=U.exec(y))[0],M+=l[0].length,[s,"TK_COMMENT"]}if("`"===r||"'"===r||'"'===r||("/"===r||L.e4x&&"<"===r&&y.slice(M-1).match(/^<([-a-zA-Z:0-9_.]+|{[^{}]*}|!\[CDATA\[[\s\S]*?\]\])(\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{.*?}))*\s*(\/?)\s*>/))&&("TK_RESERVED"===t.type&&G(t.text,["return","case","throw","else","do","typeof","yield"])||"TK_END_EXPR"===t.type&&")"===t.text&&t.parent&&"TK_RESERVED"===t.parent.type&&G(t.parent.text,["if","while","for"])||G(t.type,["TK_COMMENT","TK_START_EXPR","TK_START_BLOCK","TK_END_BLOCK","TK_OPERATOR","TK_EQUALS","TK_EOF","TK_SEMICOLON","TK_COMMA"]))){var c=r,f=!1,p=!1;if(e=r,"/"===c)for(var u=!1;M<$&&(f||u||y.charAt(M)!==c)&&!Y.newline.test(y.charAt(M));)e+=y.charAt(M),f?f=!1:(f="\\"===y.charAt(M),"["===y.charAt(M)?u=!0:"]"===y.charAt(M)&&(u=!1)),M+=1;else if(L.e4x&&"<"===c){var h=/<(\/?)([-a-zA-Z:0-9_.]+|{[^{}]*}|!\[CDATA\[[\s\S]*?\]\])(\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{.*?}))*\s*(\/?)\s*>/g,g=y.slice(M-1),m=h.exec(g);if(m&&0===m.index){for(var v=m[2],E=0;m;){var b=!!m[1],T=m[2],A=!!m[m.length-1]||"![CDATA["===T.slice(0,8);if(T!==v||A||(b?--E:++E),E<=0)break;m=h.exec(g)}var C=m?m.index+m[0].length:g.length;return g=g.slice(0,C),M+=C-1,[g=g.replace(Y.lineBreak,"\n"),"TK_STRING"]}}else for(;M<$&&(f||y.charAt(M)!==c&&("`"===c||!Y.newline.test(y.charAt(M))));)(f||"`"===c)&&Y.newline.test(y.charAt(M))?("\r"===y.charAt(M)&&"\n"===y.charAt(M+1)&&(M+=1),e+="\n"):e+=y.charAt(M),f?("x"!==y.charAt(M)&&"u"!==y.charAt(M)||(p=!0),f=!1):f="\\"===y.charAt(M),M+=1;if(p&&L.unescape_strings&&(e=function(e){var t,n=!1,r="",i=0,a="",o=0;for(;n||i<e.length;)if(t=e.charAt(i),i++,n){if(n=!1,"x"===t)a=e.substr(i,2),i+=2;else{if("u"!==t){r+="\\"+t;continue}a=e.substr(i,4),i+=4}if(!a.match(/^[0123456789abcdefABCDEF]+$/))return e;if(0<=(o=parseInt(a,16))&&o<32){r+="x"===t?"\\x"+a:"\\u"+a;continue}if(34===o||39===o||92===o)r+="\\"+String.fromCharCode(o);else{if("x"===t&&126<o&&o<=255)return e;r+=String.fromCharCode(o)}}else"\\"===t?n=!0:r+=t;return r}(e)),M<$&&y.charAt(M)===c&&(e+=c,M+=1,"/"===c))for(;M<$&&Y.isIdentifierStart(y.charCodeAt(M));)e+=y.charAt(M),M+=1;return[e,"TK_STRING"]}if("#"===r){if(0===F.length&&"!"===y.charAt(M)){for(e=r;M<$&&"\n"!==r;)e+=r=y.charAt(M),M+=1;return[V(e)+"\n","TK_UNKNOWN"]}var S="#";if(M<$&&N.test(y.charAt(M))){for(;S+=r=y.charAt(M),(M+=1)<$&&"#"!==r&&"="!==r;);return"#"===r||("["===y.charAt(M)&&"]"===y.charAt(M+1)?(S+="[]",M+=2):"{"===y.charAt(M)&&"}"===y.charAt(M+1)&&(S+="{}",M+=2)),[S,"TK_WORD"]}}if("<"===r&&("?"===y.charAt(M)||"%"===y.charAt(M))){z.lastIndex=M-1;var R=z.exec(y);if(R)return r=R[0],M+=r.length-1,[r=r.replace(Y.lineBreak,"\n"),"TK_STRING"]}if("<"===r&&"\x3c!--"===y.substring(M-1,M+3)){for(M+=3,r="\x3c!--";!Y.newline.test(y.charAt(M))&&M<$;)r+=y.charAt(M),M++;return D=!0,[r,"TK_COMMENT"]}if("-"===r&&D&&"--\x3e"===y.substring(M-1,M+2))return D=!1,M+=2,["--\x3e","TK_COMMENT"];if("."===r)return[r,"TK_DOT"];if(G(r,O)){for(;M<$&&G(r+y.charAt(M),O)&&(r+=y.charAt(M),!($<=(M+=1))););return","===r?[r,"TK_COMMA"]:"="===r?[r,"TK_EQUALS"]:[r,"TK_OPERATOR"]}return[r,"TK_UNKNOWN"]}this.tokenize=function(){var e,t,n;$=y.length,M=0,D=!1,F=[];for(var r=null,i=[],a=[];!t||"TK_EOF"!==t.type;){for(n=o(),e=new X(n[1],n[0],I,k);"TK_COMMENT"===e.type||"TK_BLOCK_COMMENT"===e.type||"TK_UNKNOWN"===e.type;)"TK_BLOCK_COMMENT"===e.type&&(e.directives=n[2]),a.push(e),n=o(),e=new X(n[1],n[0],I,k);a.length&&(e.comments_before=a,a=[]),"TK_START_BLOCK"===e.type||"TK_START_EXPR"===e.type?(e.parent=t,i.push(r),r=e):("TK_END_BLOCK"===e.type||"TK_END_EXPR"===e.type)&&r&&("]"===e.text&&"["===r.text||")"===e.text&&"("===r.text||"}"===e.text&&"{"===r.text)&&(e.parent=r.parent,r=i.pop()),F.push(e),t=e}return F}}return{run:function(e,t){function o(e){return e.replace(/\s+$/g,"")}var n,r,i,m,a,s,v,l,d,E,b,T,c,f;for((t=t||{}).wrap_line_length!==undefined&&0!==parseInt(t.wrap_line_length,10)||t.max_char===undefined||0===parseInt(t.max_char,10)||(t.wrap_line_length=t.max_char),r=t.indent_inner_html!==undefined&&t.indent_inner_html,i=t.indent_size===undefined?4:parseInt(t.indent_size,10),m=t.indent_char===undefined?" ":t.indent_char,s=t.brace_style===undefined?"collapse":t.brace_style,a=0===parseInt(t.wrap_line_length,10)?32786:parseInt(t.wrap_line_length||250,10),v=t.unformatted||["a","span","img","bdo","em","strong","dfn","code","samp","kbd","var","cite","abbr","acronym","q","sub","sup","tt","i","b","big","small","u","s","strike","font","ins","del","address","pre"],l=t.preserve_newlines===undefined||t.preserve_newlines,d=l?isNaN(parseInt(t.max_preserve_newlines,10))?32786:parseInt(t.max_preserve_newlines,10):0,E=t.indent_handlebars!==undefined&&t.indent_handlebars,b=t.wrap_attributes===undefined?"auto":t.wrap_attributes,T=t.wrap_attributes_indent_size===undefined?i:parseInt(t.wrap_attributes_indent_size,10)||i,c=t.end_with_newline!==undefined&&t.end_with_newline,f=Array.isArray(t.extra_liners)?t.extra_liners.concat():"string"==typeof t.extra_liners?t.extra_liners.split(","):"head,body,/html".split(","),t.indent_with_tabs&&(m="\t",i=1),(n=new function(){return this.pos=0,this.token="",this.current_mode="CONTENT",this.tags={parent:"parent1",parentcount:1,parent1:""},this.tag_type="",this.token_text=this.last_token=this.last_text=this.token_type="",this.newlines=0,this.indent_content=r,this.Utils={whitespace:"\n\r\t ".split(""),single_token:"br,input,link,meta,source,!doctype,basefont,base,area,hr,wbr,param,img,isindex,embed".split(","),extra_liners:f,in_array:function(e,t){for(var n=0;n<t.length;n++)if(e==t[n])return!0;return!1}},this.is_whitespace=function(e){for(;0<e.length;e++)if(!this.Utils.in_array(e.charAt(0),this.Utils.whitespace))return!1;return!0},this.traverse_whitespace=function(){var e="";if(e=this.input.charAt(this.pos),this.Utils.in_array(e,this.Utils.whitespace)){for(this.newlines=0;this.Utils.in_array(e,this.Utils.whitespace);)l&&"\n"==e&&this.newlines<=d&&(this.newlines+=1),this.pos++,e=this.input.charAt(this.pos);return!0}return!1},this.space_or_wrap=function(e){this.line_char_count>=this.wrap_line_length?(this.print_newline(!1,e),this.print_indentation(e)):(this.line_char_count++,e.push(" "))},this.get_content=function(){for(var e="",t=[];"<"!=this.input.charAt(this.pos);){if(this.pos>=this.input.length)return t.length?t.join(""):["","TK_EOF"];if(this.traverse_whitespace())this.space_or_wrap(t);else{if(E){var n=this.input.substr(this.pos,3);if("{{#"==n||"{{/"==n)break;if("{{!"==n)return[this.get_tag(),"TK_TAG_HANDLEBARS_COMMENT"];if("{{"==this.input.substr(this.pos,2)&&"{{else}}"==this.get_tag(!0))break}e=this.input.charAt(this.pos),this.pos++,this.line_char_count++,t.push(e)}}return t.length?t.join(""):""},this.get_contents_to=function(e){if(this.pos==this.input.length)return["","TK_EOF"];var t="",n=new RegExp("</"+e+"\\s*>","igm");n.lastIndex=this.pos;var r=n.exec(this.input),i=r?r.index:this.input.length;return this.pos<i&&(t=this.input.substring(this.pos,i),this.pos=i),t},this.record_tag=function(e){this.tags[e+"count"]?this.tags[e+"count"]++:this.tags[e+"count"]=1,this.tags[e+this.tags[e+"count"]]=this.indent_level,this.tags[e+this.tags[e+"count"]+"parent"]=this.tags.parent,this.tags.parent=e+this.tags[e+"count"]},this.retrieve_tag=function(e){if(this.tags[e+"count"]){for(var t=this.tags.parent;t&&e+this.tags[e+"count"]!=t;)t=this.tags[t+"parent"];t&&(this.indent_level=this.tags[e+this.tags[e+"count"]],this.tags.parent=this.tags[t+"parent"]),delete this.tags[e+this.tags[e+"count"]+"parent"],delete this.tags[e+this.tags[e+"count"]],1==this.tags[e+"count"]?delete this.tags[e+"count"]:this.tags[e+"count"]--}},this.indent_to_tag=function(e){if(this.tags[e+"count"]){for(var t=this.tags.parent;t&&e+this.tags[e+"count"]!=t;)t=this.tags[t+"parent"];t&&(this.indent_level=this.tags[e+this.tags[e+"count"]])}},this.get_tag=function(e){var t,n,r="",i=[],a="",o=!1,s=!0,l=this.pos,d=this.line_char_count;e=e!==undefined&&e;do{if(this.pos>=this.input.length)return e&&(this.pos=l,this.line_char_count=d),i.length?i.join(""):["","TK_EOF"];if(r=this.input.charAt(this.pos),this.pos++,this.Utils.in_array(r,this.Utils.whitespace))o=!0;else{if("'"!=r&&'"'!=r||(r+=this.get_unformatted(r),o=!0),"="==r&&(o=!1),i.length&&"="!=i[i.length-1]&&">"!=r&&o){if(this.space_or_wrap(i),o=!1,!s&&"force"==b&&"/"!=r){this.print_newline(!0,i),this.print_indentation(i);for(var c=0;c<T;c++)i.push(m)}for(var f=0;f<i.length;f++)if(" "==i[f]){s=!1;break}}if(E&&"<"==n&&r+this.input.charAt(this.pos)=="{{"&&(r+=this.get_unformatted("}}"),i.length&&" "!=i[i.length-1]&&"<"!=i[i.length-1]&&(r=" "+r),o=!0),"<"!=r||n||(t=this.pos-1,n="<"),E&&!n&&2<=i.length&&"{"==i[i.length-1]&&"{"==i[i.length-2]&&(t="#"==r||"/"==r||"!"==r?this.pos-3:this.pos-2,n="{"),this.line_char_count++,i.push(r),i[1]&&("!"==i[1]||"?"==i[1]||"%"==i[1])){i=[this.get_comment(t)];break}if(E&&i[1]&&"{"==i[1]&&i[2]&&"!"==i[2]){i=[this.get_comment(t)];break}if(E&&"{"==n&&2<i.length&&"}"==i[i.length-2]&&"}"==i[i.length-1])break}}while(">"!=r);var p,u,h=i.join("");p=-1!=h.indexOf(" ")?h.indexOf(" "):"{"==h[0]?h.indexOf("}"):h.indexOf(">"),u="<"!=h[0]&&E?"#"==h[2]?3:2:1;var g=h.substring(u,p).toLowerCase();return"/"==h.charAt(h.length-2)||this.Utils.in_array(g,this.Utils.single_token)?e||(this.tag_type="SINGLE"):E&&"{"==h[0]&&"else"==g?e||(this.indent_to_tag("if"),this.tag_type="HANDLEBARS_ELSE",this.indent_content=!0,this.traverse_whitespace()):this.is_unformatted(g,v)?(a=this.get_unformatted("</"+g+">",h),i.push(a),this.pos,this.tag_type="SINGLE"):"script"==g&&(-1==h.search("type")||-1<h.search("type")&&-1<h.search(/\b(text|application)\/(x-)?(javascript|ecmascript|jscript|livescript)/))?e||(this.record_tag(g),this.tag_type="SCRIPT"):"style"==g&&(-1==h.search("type")||-1<h.search("type")&&-1<h.search("text/css"))?e||(this.record_tag(g),this.tag_type="STYLE"):"!"==g.charAt(0)?e||(this.tag_type="SINGLE",this.traverse_whitespace()):e||("/"==g.charAt(0)?(this.retrieve_tag(g.substring(1)),this.tag_type="END"):(this.record_tag(g),"html"!=g.toLowerCase()&&(this.indent_content=!0),this.tag_type="START"),this.traverse_whitespace()&&this.space_or_wrap(i),this.Utils.in_array(g,this.Utils.extra_liners)&&(this.print_newline(!1,this.output),this.output.length&&"\n"!=this.output[this.output.length-2]&&this.print_newline(!0,this.output))),e&&(this.pos=l,this.line_char_count=d),i.join("")},this.get_comment=function(e){var t="",n=">",r=!1;this.pos=e;var i=this.input.charAt(this.pos);for(this.pos++;this.pos<=this.input.length&&((t+=i)[t.length-1]!=n[n.length-1]||-1==t.indexOf(n));)!r&&t.length<10&&(0===t.indexOf("<![if")?(n="<![endif]>",r=!0):0===t.indexOf("<![cdata[")?(n="]]>",r=!0):0===t.indexOf("<![")?(n="]>",r=!0):0===t.indexOf("\x3c!--")?(n="--\x3e",r=!0):0===t.indexOf("{{!")?(n="}}",r=!0):0===t.indexOf("<?")?(n="?>",r=!0):0===t.indexOf("<%")&&(n="%>",r=!0)),i=this.input.charAt(this.pos),this.pos++;return t},this.get_unformatted=function(e,t){if(t&&-1!=t.toLowerCase().indexOf(e))return"";var n="",r="",i=0,a=!0;do{if(this.pos>=this.input.length)return r;if(n=this.input.charAt(this.pos),this.pos++,this.Utils.in_array(n,this.Utils.whitespace)){if(!a){this.line_char_count--;continue}if("\n"==n||"\r"==n){r+="\n",this.line_char_count=0;continue}}r+=n,this.line_char_count++,a=!0,E&&"{"==n&&r.length&&"{"==r[r.length-2]&&(i=(r+=this.get_unformatted("}}")).length)}while(-1==r.toLowerCase().indexOf(e,i));return r},this.get_token=function(){var e;if("TK_TAG_SCRIPT"==this.last_token||"TK_TAG_STYLE"==this.last_token){var t=this.last_token.substr(7);return"string"!=typeof(e=this.get_contents_to(t))?e:[e,"TK_"+t]}return"CONTENT"==this.current_mode?"string"!=typeof(e=this.get_content())?e:[e,"TK_CONTENT"]:"TAG"==this.current_mode?"string"!=typeof(e=this.get_tag())?e:[e,"TK_TAG_"+this.tag_type]:void 0},this.get_full_indent=function(e){return(e=this.indent_level+e||0)<1?"":new Array(e+1).join(this.indent_string)},this.is_unformatted=function(e,t){if(!this.Utils.in_array(e,t))return!1;if("a"!=e.toLowerCase()||!this.Utils.in_array("a",t))return!0;var n=(this.get_tag(!0)||"").match(/^\s*<\s*\/?([a-z]*)\s*[^>]*>\s*$/);return!(n&&!this.Utils.in_array(n,t))},this.printer=function(e,t,n,r,i){this.input=e||"",this.output=[],this.indent_character=t,this.indent_string="",this.indent_size=n,this.brace_style=i,this.indent_level=0,this.wrap_line_length=r;for(var a=this.line_char_count=0;a<this.indent_size;a++)this.indent_string+=this.indent_character;this.print_newline=function(e,t){this.line_char_count=0,t&&t.length&&(e||"\n"!=t[t.length-1])&&("\n"!=t[t.length-1]&&(t[t.length-1]=o(t[t.length-1])),t.push("\n"))},this.print_indentation=function(e){for(var t=0;t<this.indent_level;t++)e.push(this.indent_string),this.line_char_count+=this.indent_string.length},this.print_token=function(e){this.is_whitespace(e)&&!this.output.length||((e||""!==e)&&this.output.length&&"\n"==this.output[this.output.length-1]&&(this.print_indentation(this.output),e=e.replace(/^\s+/g,"")),this.print_token_raw(e))},this.print_token_raw=function(e){0<this.newlines&&(e=o(e)),e&&""!==e&&(1<e.length&&"\n"==e[e.length-1]?(this.output.push(e.slice(0,-1)),this.print_newline(!1,this.output)):this.output.push(e));for(var t=0;t<this.newlines;t++)this.print_newline(0<t,this.output);this.newlines=0},this.indent=function(){this.indent_level++},this.unindent=function(){0<this.indent_level&&this.indent_level--}},this}).printer(e,m,i,a,s);;){var p=n.get_token();if(n.token_text=p[0],n.token_type=p[1],"TK_EOF"==n.token_type)break;switch(n.token_type){case"TK_TAG_START":n.print_newline(!1,n.output),n.print_token(n.token_text),n.indent_content&&(n.indent(),n.indent_content=!1),n.current_mode="CONTENT";break;case"TK_TAG_STYLE":case"TK_TAG_SCRIPT":n.print_newline(!1,n.output),n.print_token(n.token_text),n.current_mode="CONTENT";break;case"TK_TAG_END":if("TK_CONTENT"==n.last_token&&""===n.last_text){var u=n.token_text.match(/\w+/)[0],h=null;n.output.length&&(h=n.output[n.output.length-1].match(/(?:<|{{#)\/?\s*(\w+)/)),(null==h||h[1]!=u&&!n.Utils.in_array(h[1],v))&&n.print_newline(!1,n.output)}n.print_token(n.token_text),n.current_mode="CONTENT";break;case"TK_TAG_SINGLE":var g=n.token_text.match(/^\s*<([a-z-]+)/i);g&&n.Utils.in_array(g[1],v)||n.print_newline(!1,n.output),n.print_token(n.token_text),n.current_mode="CONTENT";break;case"TK_TAG_HANDLEBARS_ELSE":n.print_token(n.token_text),n.indent_content&&(n.indent(),n.indent_content=!1),n.current_mode="CONTENT";break;case"TK_TAG_HANDLEBARS_COMMENT":case"TK_CONTENT":n.print_token(n.token_text),n.current_mode="TAG";break;case"TK_STYLE":case"TK_SCRIPT":if(""!==n.token_text){n.print_newline(!1,n.output);var A,C=n.token_text,S=1;"TK_SCRIPT"==n.token_type?A=x:"TK_STYLE"==n.token_type&&(A=N),"keep"==t.indent_scripts?S=0:"separate"==t.indent_scripts&&(S=-n.indent_level);var R=n.get_full_indent(S);if(A)C=A(C.replace(/^\s*/,R),t);else{var y=C.match(/^\s*/)[0].match(/[^\n\r]*$/)[0].split(n.indent_string).length-1,L=n.get_full_indent(S-y);C=C.replace(/^\s*/,R).replace(/\r\n|\r|\n/g,"\n"+L).replace(/\s+$/,"")}C&&(n.print_token_raw(C),n.print_newline(!0,n.output))}n.current_mode="TAG";break;default:""!==n.token_text&&n.print_token(n.token_text)}n.last_token=n.token_type,n.last_text=n.token_text}var _=n.output.join("").replace(/[\r\n\t ]+$/,"");return c&&(_+="\n"),_}}},Te.extend(Te.FE.DEFAULTS,{codeMirror:window.CodeMirror,codeMirrorOptions:{lineNumbers:!0,tabMode:"indent",indentWithTabs:!0,lineWrapping:!0,mode:"text/html",tabSize:2},codeBeautifierOptions:{end_with_newline:!0,indent_inner_html:!0,extra_liners:["p","h1","h2","h3","h4","h5","h6","blockquote","pre","ul","ol","table","dl"],brace_style:"expand",indent_char:"\t",indent_size:1,wrap_line_length:0},codeViewKeepActiveButtons:["fullscreen"]}),Te.FE.PLUGINS.codeView=function(l){var d,c;function f(){return l.$box.hasClass("fr-code-view")}function p(){return c?c.getValue():d.val()}function u(){f()&&(c&&c.setSize(null,l.opts.height?l.opts.height:"auto"),l.opts.heightMin||l.opts.height?(l.$box.find(".CodeMirror-scroll, .CodeMirror-gutters").css("min-height",l.opts.heightMin||l.opts.height),d.css("height",l.opts.height)):l.$box.find(".CodeMirror-scroll, .CodeMirror-gutters").css("min-height",""))}var h,g=!1;function m(){f()&&l.events.trigger("blur")}function v(){f()&&g&&l.events.trigger("focus")}function i(e){d||(!function(){d=Te('<textarea class="fr-code" tabIndex="-1">'),l.$wp.append(d),d.attr("dir",l.opts.direction),l.$box.hasClass("fr-basic")||(h=Te('<a data-cmd="html" title="Code View" class="fr-command fr-btn html-switch'+(l.helpers.isMobile()?"":" fr-desktop")+'" role="button" tabIndex="-1"><i class="fa fa-code"></i></button>'),l.$box.append(h),l.events.bindClick(l.$box,"a.html-switch",function(){l.events.trigger("commands.before",["html"]),E(!1),l.events.trigger("commands.after",["html"])}));var e=function(){return!f()};l.events.on("buttons.refresh",e),l.events.on("copy",e,!0),l.events.on("cut",e,!0),l.events.on("paste",e,!0),l.events.on("destroy",b,!0),l.events.on("html.set",function(){f()&&E(!0)}),l.events.on("codeView.update",u),l.events.on("form.submit",function(){f()&&(l.html.set(p()),l.events.trigger("contentChanged",[],!0))},!0)}(),!c&&l.opts.codeMirror?((c=l.opts.codeMirror.fromTextArea(d.get(0),l.opts.codeMirrorOptions)).on("blur",m),c.on("focus",v)):(l.events.$on(d,"keydown keyup change input",function(){l.opts.height?this.removeAttribute("rows"):(this.rows=1,0===this.value.length?this.style.height="auto":this.style.height=this.scrollHeight+"px")}),l.events.$on(d,"blur",m),l.events.$on(d,"focus",v))),l.undo.saveStep(),l.html.cleanEmptyTags(),l.html.cleanWhiteTags(!0),l.core.hasFocus()&&(l.core.isEmpty()||(l.selection.save(),l.$el.find('.fr-marker[data-type="true"]:first').replaceWith('<span class="fr-tmp fr-sm">F</span>'),l.$el.find('.fr-marker[data-type="false"]:last').replaceWith('<span class="fr-tmp fr-em">F</span>')));var t=l.html.get(!1,!0);l.$el.find("span.fr-tmp").remove(),l.$box.toggleClass("fr-code-view",!0);var n,r,i=!1;if(l.core.hasFocus()&&(i=!0,l.events.disableBlur(),l.$el.blur()),t=(t=t.replace(/<span class="fr-tmp fr-sm">F<\/span>/,"FROALA-SM")).replace(/<span class="fr-tmp fr-em">F<\/span>/,"FROALA-EM"),l.codeBeautifier&&!t.includes("fr-embedly")&&(t=l.codeBeautifier.run(t,l.opts.codeBeautifierOptions)),c){n=t.indexOf("FROALA-SM"),(r=t.indexOf("FROALA-EM"))<n?n=r:r-=9;var a=(t=t.replace(/FROALA-SM/g,"").replace(/FROALA-EM/g,"")).substring(0,n).length-t.substring(0,n).replace(/\n/g,"").length,o=t.substring(0,r).length-t.substring(0,r).replace(/\n/g,"").length;n=t.substring(0,n).length-t.substring(0,t.substring(0,n).lastIndexOf("\n")+1).length,r=t.substring(0,r).length-t.substring(0,t.substring(0,r).lastIndexOf("\n")+1).length,c.setSize(null,l.opts.height?l.opts.height:"auto"),l.opts.heightMin&&l.$box.find(".CodeMirror-scroll").css("min-height",l.opts.heightMin),c.setValue(t),g=!i,c.focus(),g=!0,c.setSelection({line:a,ch:n},{line:o,ch:r}),c.refresh(),c.clearHistory()}else{n=t.indexOf("FROALA-SM"),r=t.indexOf("FROALA-EM")-9,l.opts.heightMin&&d.css("min-height",l.opts.heightMin),l.opts.height&&d.css("height",l.opts.height),d.val(t.replace(/FROALA-SM/g,"").replace(/FROALA-EM/g,"")).trigger("change");var s=Te(l.o_doc).scrollTop();g=!i,d.focus(),g=!0,d.get(0).setSelectionRange(n,r),Te(l.o_doc).scrollTop(s)}l.$tb.find(" > .fr-command, > .fr-btn-wrap > .fr-command").not(e).filter(function(){return l.opts.codeViewKeepActiveButtons.indexOf(Te(this).data("cmd"))<0}).addClass("fr-disabled").attr("aria-disabled",!0),e.addClass("fr-active").attr("aria-pressed",!0),!l.helpers.isMobile()&&l.opts.toolbarInline&&l.toolbar.hide()}function E(e){void 0===e&&(e=!f());var t,n,r=l.$tb.find('.fr-command[data-cmd="html"]');e?(l.popups.hideAll(),i(r)):(l.$box.toggleClass("fr-code-view",!1),t=r,n=p(),l.html.set(n),l.$el.blur(),l.$tb.find(" > .fr-command, > .fr-btn-wrap > .fr-command").not(t).removeClass("fr-disabled").attr("aria-disabled",!1),t.removeClass("fr-active").attr("aria-pressed",!1),l.selection.setAtStart(l.el),l.selection.restore(),l.placeholder.refresh(),l.undo.saveStep())}function b(){f()&&E(!1),c&&c.toTextArea(),d.val("").removeData().remove(),d=null,h&&(h.remove(),h=null)}return{_init:function(){if(l.events.on("focus",function(){var e;l.opts.toolbarContainer&&(e=l.$tb.find('.fr-command[data-cmd="html"]'),f()?(l.$tb.find(" > .fr-command").not(e).filter(function(){return l.opts.codeViewKeepActiveButtons.indexOf(Te(this).data("cmd"))<0}).addClass("fr-disabled").attr("aria-disabled",!1),e.addClass("fr-active").attr("aria-pressed",!1)):(l.$tb.find(" > .fr-command").not(e).removeClass("fr-disabled").attr("aria-disabled",!1),e.removeClass("fr-active").attr("aria-pressed",!1)))}),!l.$wp)return!1},toggle:E,isActive:f,get:p}},Te.FE.RegisterCommand("html",{title:"Code View",undo:!1,focus:!1,forcedRefresh:!0,toggle:!0,callback:function(){this.codeView.toggle()},plugin:"codeView"}),Te.FE.DefineIcon("html",{NAME:"code"}),Te.extend(Te.FE.POPUP_TEMPLATES,{"colors.picker":"[_BUTTONS_][_TEXT_COLORS_][_BACKGROUND_COLORS_][_CUSTOM_COLOR_]"}),Te.extend(Te.FE.DEFAULTS,{colorsText:["#61BD6D","#1ABC9C","#54ACD2","#2C82C9","#9365B8","#475577","#CCCCCC","#41A85F","#00A885","#3D8EB9","#2969B0","#553982","#28324E","#000000","#F7DA64","#FBA026","#EB6B56","#E25041","#A38F84","#EFEFEF","#FFFFFF","#FAC51C","#F37934","#D14841","#B8312F","#7C706B","#D1D5D8","REMOVE"],colorsBackground:["#61BD6D","#1ABC9C","#54ACD2","#2C82C9","#9365B8","#475577","#CCCCCC","#41A85F","#00A885","#3D8EB9","#2969B0","#553982","#28324E","#000000","#F7DA64","#FBA026","#EB6B56","#E25041","#A38F84","#EFEFEF","#FFFFFF","#FAC51C","#F37934","#D14841","#B8312F","#7C706B","#D1D5D8","REMOVE"],colorsStep:7,colorsHEXInput:!0,colorsDefaultTab:"text",colorsButtons:["colorsBack","|","-"]});var l=["text","background"];if(Te.FE.PLUGINS.colors=function(g){function t(){g.popups.hide("colors.picker")}function a(e){for(var t="text"==e?g.opts.colorsText:g.opts.colorsBackground,n='<div class="fr-color-set fr-'+e+"-color"+(g.opts.colorsDefaultTab==e||"text"!=g.opts.colorsDefaultTab&&"background"!=g.opts.colorsDefaultTab&&"text"==e?" fr-selected-set":"")+'">',r=0;r<t.length;r++)0!==r&&r%g.opts.colorsStep==0&&(n+="<br>"),"REMOVE"!=t[r]?n+='<span class="fr-command fr-select-color" style="background: '+t[r]+';" tabIndex="-1" aria-selected="false" role="button" data-cmd="'+e+'Color" data-param1="'+t[r]+'"><span class="fr-sr-only">'+g.language.translate("Color")+" "+t[r]+"&nbsp;&nbsp;&nbsp;</span></span>":n+='<span class="fr-command fr-select-color" data-cmd="'+e+'Color" tabIndex="-1" role="button" data-param1="REMOVE" title="'+g.language.translate("Clear Formatting")+'">'+g.icon.create("remove")+'<span class="fr-sr-only">'+g.language.translate("Clear Formatting")+"</span></span>";return n+"</div>"}function o(e){var t=g.popups.get("colors.picker"),n=t.find(".fr-"+e+"-color .fr-active-item").attr("data-param1"),r=t.find(".fr-color-hex-layer input"),i=t.find('.fr-colors-tab[data-param1="'+e+'"]');r.length&&i.hasClass("fr-selected-tab")&&r.val(n).trigger("change")}function r(e){"REMOVE"!=e?g.format.applyStyle("background-color",g.helpers.HEXtoRGB(e)):g.format.removeStyle("background-color"),t()}function i(e){"REMOVE"!=e?g.format.applyStyle("color",g.helpers.HEXtoRGB(e)):g.format.removeStyle("color"),t()}return{showColorsPopup:function(){var e=g.$tb.find('.fr-command[data-cmd="color"]'),t=g.popups.get("colors.picker");if(t||(t=function(){var e,t='<div class="fr-buttons fr-colors-buttons">';g.opts.toolbarInline&&0<g.opts.colorsButtons.length&&(t+=g.button.buildList(g.opts.colorsButtons)),t+=(e='<div class="fr-colors-tabs fr-group">',e+='<span class="fr-colors-tab '+("background"==g.opts.colorsDefaultTab?"":"fr-selected-tab ")+'fr-command" tabIndex="-1" role="button" aria-pressed="'+("background"!=g.opts.colorsDefaultTab)+'" data-param1="text" data-cmd="colorChangeSet" title="'+g.language.translate("Text")+'">'+g.language.translate("Text")+"</span>",(e+='<span class="fr-colors-tab '+("background"==g.opts.colorsDefaultTab?"fr-selected-tab ":"")+'fr-command" tabIndex="-1" role="button" aria-pressed="'+("background"==g.opts.colorsDefaultTab)+'" data-param1="background" data-cmd="colorChangeSet" title="'+g.language.translate("Background")+'">'+g.language.translate("Background")+"</span>")+"</div></div>");var n="";g.opts.colorsHEXInput&&(n='<div class="fr-color-hex-layer fr-active fr-layer" id="fr-color-hex-layer-'+g.id+'"><div class="fr-input-line"><input maxlength="7" id="fr-color-hex-layer-text-'+g.id+'" type="text" placeholder="'+g.language.translate("HEX Color")+'" tabIndex="1" aria-required="true"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="customColor" tabIndex="2" role="button">'+g.language.translate("OK")+"</button></div></div>");var h,r={buttons:t,text_colors:a("text"),background_colors:a("background"),custom_color:n},i=g.popups.create("colors.picker",r);return h=i,g.events.on("popup.tab",function(e){var t=Te(e.currentTarget);if(!g.popups.isVisible("colors.picker")||!t.is("span"))return!0;var n=e.which,r=!0;if(Te.FE.KEYCODE.TAB==n){var i=h.find(".fr-buttons");r=!g.accessibility.focusToolbar(i,!!e.shiftKey)}else if(Te.FE.KEYCODE.ARROW_UP==n||Te.FE.KEYCODE.ARROW_DOWN==n||Te.FE.KEYCODE.ARROW_LEFT==n||Te.FE.KEYCODE.ARROW_RIGHT==n){if(t.is("span.fr-select-color")){var a=t.parent().find("span.fr-select-color"),o=a.index(t),s=g.opts.colorsStep,l=Math.floor(a.length/s),d=o%s,c=Math.floor(o/s),f=c*s+d,p=l*s;Te.FE.KEYCODE.ARROW_UP==n?f=((f-s)%p+p)%p:Te.FE.KEYCODE.ARROW_DOWN==n?f=(f+s)%p:Te.FE.KEYCODE.ARROW_LEFT==n?f=((f-1)%p+p)%p:Te.FE.KEYCODE.ARROW_RIGHT==n&&(f=(f+1)%p);var u=Te(a.get(f));g.events.disableBlur(),u.focus(),r=!1}}else Te.FE.KEYCODE.ENTER==n&&(g.button.exec(t),r=!1);return!1===r&&(e.preventDefault(),e.stopPropagation()),r},!0),i}()),!t.hasClass("fr-active"))if(g.popups.setContainer("colors.picker",g.$tb),l.map(function(e){!function(e){var t,n=g.popups.get("colors.picker"),r=Te(g.selection.element());t="background"==e?"background-color":"color";var i=n.find(".fr-"+e+"-color .fr-select-color");for(i.find(".fr-selected-color").remove(),i.removeClass("fr-active-item"),i.not('[data-param1="REMOVE"]').attr("aria-selected",!1);r.get(0)!=g.el;){if("transparent"!=r.css(t)&&"rgba(0, 0, 0, 0)"!=r.css(t)){var a=n.find(".fr-"+e+'-color .fr-select-color[data-param1="'+g.helpers.RGBToHex(r.css(t))+'"]');a.append('<span class="fr-selected-color" aria-hidden="true">\uf00c</span>'),a.addClass("fr-active-item").attr("aria-selected",!0);break}r=r.parent()}o(e)}(e)}),e.is(":visible")){var n=e.offset().left+e.outerWidth()/2,r=g.position.getTbarPupupTop("colors.picker",e);g.popups.show("colors.picker",n,r,e.outerHeight())}else g.position.forSelection(t),g.popups.show("colors.picker")},hideColorsPopup:t,changeSet:function(e,t){e.hasClass("fr-selected-tab")||(e.siblings().removeClass("fr-selected-tab").attr("aria-pressed",!1),e.addClass("fr-selected-tab").attr("aria-pressed",!0),e.parents(".fr-popup").find(".fr-color-set").removeClass("fr-selected-set"),e.parents(".fr-popup").find(".fr-color-set.fr-"+t+"-color").addClass("fr-selected-set"),o(t)),g.accessibility.focusPopup(e.parents(".fr-popup"))},background:r,customColor:function(){var e=g.popups.get("colors.picker"),t=e.find(".fr-color-hex-layer input");if(t.length){var n=t.val();"background"==e.find(".fr-selected-tab").attr("data-param1")?r(n):i(n)}},text:i,back:function(){g.popups.hide("colors.picker"),g.toolbar.showInline()}}},Te.FE.DefineIcon("colors",{NAME:"tint"}),Te.FE.RegisterCommand("color",{title:"Colors",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("colors.picker")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("colors.picker")):this.colors.showColorsPopup()},plugin:"colors"}),Te.FE.RegisterCommand("textColor",{undo:!0,callback:function(e,t){this.colors.text(t)}}),Te.FE.RegisterCommand("backgroundColor",{undo:!0,callback:function(e,t){this.colors.background(t)}}),Te.FE.RegisterCommand("colorChangeSet",{undo:!1,focus:!1,callback:function(e,t){var n=this.popups.get("colors.picker").find('.fr-command[data-cmd="'+e+'"][data-param1="'+t+'"]');this.colors.changeSet(n,t)}}),Te.FE.DefineIcon("colorsBack",{NAME:"arrow-left"}),Te.FE.RegisterCommand("colorsBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.colors.back()}}),Te.FE.RegisterCommand("customColor",{title:"OK",undo:!0,callback:function(){this.colors.customColor()}}),Te.FE.DefineIcon("remove",{NAME:"eraser"}),Te.extend(Te.FE.DEFAULTS,{dragInline:!0}),Te.FE.PLUGINS.draggable=function(d){function e(e){if(e.originalEvent&&e.originalEvent.target&&e.originalEvent.target.nodeType==Node.TEXT_NODE)return!0;if(e.target&&"A"==e.target.tagName&&1==e.target.childNodes.length&&"IMG"==e.target.childNodes[0].tagName&&(e.target=e.target.childNodes[0]),!Te(e.target).hasClass("fr-draggable")&&!0!==e.target.draggable)return d.browser.msie||e.preventDefault(),!1;d.undo.canDo()||d.undo.saveStep();for(var t=e.target,n=t.parentElement;n!=d.$el.get(0)&&("false"===n.isContentEditable||0==n.isContentEditable);)n=(t=n).parentElement;Te(t).addClass("fr-dragging"),d.opts.dragInline?d.$el.attr("contenteditable",!0):d.$el.attr("contenteditable",!1),d.opts.toolbarInline&&d.toolbar.hide(),d.browser.msie||d.browser.edge||d.selection.clear(),e.originalEvent.dataTransfer.setData("text","Froala")}function c(e){return!(e&&("HTML"==e.tagName||"BODY"==e.tagName||d.node.isElement(e)))}function f(e,t,n){d.opts.iframe&&(e+=d.$iframe.offset().top,t+=d.$iframe.offset().left),p.offset().top!=e&&p.css("top",e),p.offset().left!=t&&p.css("left",t),p.width()!=n&&p.css("width",n)}function t(e){e.originalEvent.dataTransfer.dropEffect="move",d.opts.dragInline?function(){for(var e=null,t=0;t<Te.FE.INSTANCES.length;t++)if((e=Te.FE.INSTANCES[t].$el.find(".fr-dragging")).length)return e.get(0)}()||!d.browser.msie&&!d.browser.edge||e.preventDefault():(e.preventDefault(),function(e){var t=d.doc.elementFromPoint(e.originalEvent.pageX-d.win.pageXOffset,e.originalEvent.pageY-d.win.pageYOffset);if(!c(t)){for(var n=0,r=t;!c(r)&&r==t&&0<e.originalEvent.pageY-d.win.pageYOffset-n;)n++,r=d.doc.elementFromPoint(e.originalEvent.pageX-d.win.pageXOffset,e.originalEvent.pageY-d.win.pageYOffset-n);(!c(r)||p&&0===d.$el.find(r).length&&r!=p.get(0))&&(r=null);for(var i=0,a=t;!c(a)&&a==t&&e.originalEvent.pageY-d.win.pageYOffset+i<Te(d.doc).height();)i++,a=d.doc.elementFromPoint(e.originalEvent.pageX-d.win.pageXOffset,e.originalEvent.pageY-d.win.pageYOffset+i);(!c(a)||p&&0===d.$el.find(a).length&&a!=p.get(0))&&(a=null),t=null==a&&r?r:a&&null==r?a:a&&r?n<i?r:a:null}if(Te(t).hasClass("fr-drag-helper"))return;if(t&&!d.node.isBlock(t)&&(t=d.node.blockParent(t)),t&&0<=["TD","TH","TR","THEAD","TBODY"].indexOf(t.tagName)&&(t=Te(t).parents("table").get(0)),t&&0<=["LI"].indexOf(t.tagName)&&(t=Te(t).parents("UL, OL").get(0)),t&&!Te(t).hasClass("fr-drag-helper")){var o;p||(Te.FE.$draggable_helper||(Te.FE.$draggable_helper=Te('<div class="fr-drag-helper"></div>')),p=Te.FE.$draggable_helper,d.events.on("shared.destroy",function(){p.html("").removeData().remove(),p=null},!0)),o=e.originalEvent.pageY<Te(t).offset().top+Te(t).outerHeight()/2;var s=Te(t),l=0;o||0!==s.next().length?(o||(s=s.next()),"before"==p.data("fr-position")&&s.is(p.data("fr-tag"))||(0<s.prev().length&&(l=parseFloat(s.prev().css("margin-bottom"))||0),l=Math.max(l,parseFloat(s.css("margin-top"))||0),f(s.offset().top-l/2-d.$box.offset().top,s.offset().left-d.win.pageXOffset-d.$box.offset().left,s.width()),p.data("fr-position","before"))):"after"==p.data("fr-position")&&s.is(p.data("fr-tag"))||(l=parseFloat(s.css("margin-bottom"))||0,f(s.offset().top+Te(t).height()+l/2-d.$box.offset().top,s.offset().left-d.win.pageXOffset-d.$box.offset().left,s.width()),p.data("fr-position","after")),p.data("fr-tag",s),p.addClass("fr-visible"),p.appendTo(d.$box)}else p&&0<d.$box.find(p).length&&p.removeClass("fr-visible")}(e))}function n(e){e.originalEvent.dataTransfer.dropEffect="move",d.opts.dragInline||e.preventDefault()}function r(e){d.$el.attr("contenteditable",!0);var t=d.$el.find(".fr-dragging");p&&p.hasClass("fr-visible")&&d.$box.find(p).length?i(e):t.length&&(e.preventDefault(),e.stopPropagation()),p&&d.$box.find(p).length&&p.removeClass("fr-visible"),t.removeClass("fr-dragging")}function i(e){var t,n;"true"!==d.$el.attr("contenteditable")&&d.$el.attr("contenteditable",!0);for(var r=0;r<Te.FE.INSTANCES.length;r++)if((t=Te.FE.INSTANCES[r].$el.find(".fr-dragging")).length){n=Te.FE.INSTANCES[r];break}if(t.length){if(e.preventDefault(),e.stopPropagation(),p&&p.hasClass("fr-visible")&&d.$box.find(p).length)p.data("fr-tag")[p.data("fr-position")]('<span class="fr-marker"></span>'),p.removeClass("fr-visible");else if(!1===d.markers.insertAtPoint(e.originalEvent))return!1;if(t.removeClass("fr-dragging"),!1===(t=d.events.chainTrigger("element.beforeDrop",t)))return!1;var i=t;if(t.parent().is("A")&&1==t.parent().get(0).childNodes.length&&(i=t.parent()),d.core.isEmpty())d.events.focus();else d.$el.find(".fr-marker").replaceWith(Te.FE.MARKERS),d.selection.restore();if(n==d||d.undo.canDo()||d.undo.saveStep(),d.core.isEmpty())d.$el.html(i);else{var a=d.markers.insert();0===i.find(a).length?Te(a).replaceWith(i):0===t.find(a).length&&Te(a).replaceWith(t),t.after(Te.FE.MARKERS),d.selection.restore()}return d.popups.hideAll(),d.selection.save(),d.$el.find(d.html.emptyBlockTagsQuery()).not("TD, TH, LI, .fr-inner").not(d.opts.htmlAllowedEmptyTags.join(",")).remove(),d.html.wrap(),d.html.fillEmptyBlocks(),d.selection.restore(),d.undo.saveStep(),d.opts.iframe&&d.size.syncIframe(),n!=d&&(n.popups.hideAll(),n.$el.find(n.html.emptyBlockTagsQuery()).not("TD, TH, LI, .fr-inner").remove(),n.html.wrap(),n.html.fillEmptyBlocks(),n.undo.saveStep(),n.events.trigger("element.dropped"),n.opts.iframe&&n.size.syncIframe()),d.events.trigger("element.dropped",[i]),!1}p&&p.removeClass("fr-visible"),d.undo.canDo()||d.undo.saveStep(),setTimeout(function(){d.undo.saveStep()},0)}function a(e){if(e&&"DIV"==e.tagName&&d.node.hasClass(e,"fr-drag-helper"))e.parentNode.removeChild(e);else if(e&&e.nodeType==Node.ELEMENT_NODE)for(var t=e.querySelectorAll("div.fr-drag-helper"),n=0;n<t.length;n++)t[n].parentNode.removeChild(t[n])}var p;return{_init:function(){d.opts.enter==Te.FE.ENTER_BR&&(d.opts.dragInline=!0),d.events.on("dragstart",e,!0),d.events.on("dragover",t,!0),d.events.on("dragenter",n,!0),d.events.on("document.dragend",r,!0),d.events.on("document.drop",r,!0),d.events.on("drop",i,!0),d.events.on("html.processGet",a)}}},Te.extend(Te.FE.POPUP_TEMPLATES,{emoticons:"[_BUTTONS_][_EMOTICONS_]"}),Te.extend(Te.FE.DEFAULTS,{emoticonsStep:8,emoticonsSet:[{code:"1f600",desc:"Grinning face"},{code:"1f601",desc:"Grinning face with smiling eyes"},{code:"1f602",desc:"Face with tears of joy"},{code:"1f603",desc:"Smiling face with open mouth"},{code:"1f604",desc:"Smiling face with open mouth and smiling eyes"},{code:"1f605",desc:"Smiling face with open mouth and cold sweat"},{code:"1f606",desc:"Smiling face with open mouth and tightly-closed eyes"},{code:"1f607",desc:"Smiling face with halo"},{code:"1f608",desc:"Smiling face with horns"},{code:"1f609",desc:"Winking face"},{code:"1f60a",desc:"Smiling face with smiling eyes"},{code:"1f60b",desc:"Face savoring delicious food"},{code:"1f60c",desc:"Relieved face"},{code:"1f60d",desc:"Smiling face with heart-shaped eyes"},{code:"1f60e",desc:"Smiling face with sunglasses"},{code:"1f60f",desc:"Smirking face"},{code:"1f610",desc:"Neutral face"},{code:"1f611",desc:"Expressionless face"},{code:"1f612",desc:"Unamused face"},{code:"1f613",desc:"Face with cold sweat"},{code:"1f614",desc:"Pensive face"},{code:"1f615",desc:"Confused face"},{code:"1f616",desc:"Confounded face"},{code:"1f617",desc:"Kissing face"},{code:"1f618",desc:"Face throwing a kiss"},{code:"1f619",desc:"Kissing face with smiling eyes"},{code:"1f61a",desc:"Kissing face with closed eyes"},{code:"1f61b",desc:"Face with stuck out tongue"},{code:"1f61c",desc:"Face with stuck out tongue and winking eye"},{code:"1f61d",desc:"Face with stuck out tongue and tightly-closed eyes"},{code:"1f61e",desc:"Disappointed face"},{code:"1f61f",desc:"Worried face"},{code:"1f620",desc:"Angry face"},{code:"1f621",desc:"Pouting face"},{code:"1f622",desc:"Crying face"},{code:"1f623",desc:"Persevering face"},{code:"1f624",desc:"Face with look of triumph"},{code:"1f625",desc:"Disappointed but relieved face"},{code:"1f626",desc:"Frowning face with open mouth"},{code:"1f627",desc:"Anguished face"},{code:"1f628",desc:"Fearful face"},{code:"1f629",desc:"Weary face"},{code:"1f62a",desc:"Sleepy face"},{code:"1f62b",desc:"Tired face"},{code:"1f62c",desc:"Grimacing face"},{code:"1f62d",desc:"Loudly crying face"},{code:"1f62e",desc:"Face with open mouth"},{code:"1f62f",desc:"Hushed face"},{code:"1f630",desc:"Face with open mouth and cold sweat"},{code:"1f631",desc:"Face screaming in fear"},{code:"1f632",desc:"Astonished face"},{code:"1f633",desc:"Flushed face"},{code:"1f634",desc:"Sleeping face"},{code:"1f635",desc:"Dizzy face"},{code:"1f636",desc:"Face without mouth"},{code:"1f637",desc:"Face with medical mask"}],emoticonsButtons:["emoticonsBack","|"],emoticonsUseImage:!0}),Te.FE.PLUGINS.emoticons=function(m){function i(){if(!m.selection.isCollapsed())return!1;var e=m.selection.element(),t=m.selection.endElement();if(e&&m.node.hasClass(e,"fr-emoticon"))return e;if(t&&m.node.hasClass(t,"fr-emoticon"))return t;var n=m.selection.ranges(0),r=n.startContainer;if(r.nodeType==Node.ELEMENT_NODE&&0<r.childNodes.length&&0<n.startOffset){var i=r.childNodes[n.startOffset-1];if(m.node.hasClass(i,"fr-emoticon"))return i}return!1}return{_init:function(){var e=function(){for(var e=m.el.querySelectorAll(".fr-emoticon:not(.fr-deletable)"),t=0;t<e.length;t++)e[t].className+=" fr-deletable"};e(),m.events.on("html.set",e),m.events.on("keydown",function(e){if(m.keys.isCharacter(e.which)&&m.selection.inEditor()){var t=m.selection.ranges(0),n=i();m.node.hasClass(n,"fr-emoticon-img")&&n&&(0===t.startOffset&&m.selection.element()===n?Te(n).before(Te.FE.MARKERS+Te.FE.INVISIBLE_SPACE):Te(n).after(Te.FE.INVISIBLE_SPACE+Te.FE.MARKERS),m.selection.restore())}}),m.events.on("keyup",function(e){for(var t=m.el.querySelectorAll(".fr-emoticon"),n=0;n<t.length;n++)"undefined"!=typeof t[n].textContent&&0===t[n].textContent.replace(/\u200B/gi,"").length&&Te(t[n]).remove();if(!(e.which>=Te.FE.KEYCODE.ARROW_LEFT&&e.which<=Te.FE.KEYCODE.ARROW_DOWN)){var r=i();m.node.hasClass(r,"fr-emoticon-img")&&(Te(r).append(Te.FE.MARKERS),m.selection.restore())}})},insert:function(e,t){var n=i(),r=m.selection.ranges(0);n?(0===r.startOffset&&m.selection.element()===n?Te(n).before(Te.FE.MARKERS+Te.FE.INVISIBLE_SPACE):0<r.startOffset&&m.selection.element()===n&&r.commonAncestorContainer.parentNode.classList.contains("fr-emoticon")&&Te(n).after(Te.FE.INVISIBLE_SPACE+Te.FE.MARKERS),m.selection.restore(),m.html.insert('<span class="fr-emoticon fr-deletable'+(t?" fr-emoticon-img":"")+'"'+(t?' style="background: url('+t+');"':"")+">"+(t?"&nbsp;":e)+"</span>&nbsp;"+Te.FE.MARKERS,!0)):m.html.insert('<span class="fr-emoticon fr-deletable'+(t?" fr-emoticon-img":"")+'"'+(t?' style="background: url('+t+');"':"")+">"+(t?"&nbsp;":e)+"</span>&nbsp;",!0)},showEmoticonsPopup:function(){var e=m.$tb.find('.fr-command[data-cmd="emoticons"]'),t=m.popups.get("emoticons");if(t||(t=function(){var e="";m.opts.toolbarInline&&0<m.opts.emoticonsButtons.length&&(e='<div class="fr-buttons fr-emoticons-buttons">'+m.button.buildList(m.opts.emoticonsButtons)+"</div>");var g,t={buttons:e,emoticons:function(){for(var e='<div style="text-align: center">',t=0;t<m.opts.emoticonsSet.length;t++)0!==t&&t%m.opts.emoticonsStep==0&&(e+="<br>"),e+='<span class="fr-command fr-emoticon" tabIndex="-1" data-cmd="insertEmoticon" title="'+m.language.translate(m.opts.emoticonsSet[t].desc)+'" role="button" data-param1="'+m.opts.emoticonsSet[t].code+'">'+(m.opts.emoticonsUseImage?'<img src="https://web.archive.org/web/20240606034029/https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/'+m.opts.emoticonsSet[t].code+'.svg"/>':"&#x"+m.opts.emoticonsSet[t].code+";")+'<span class="fr-sr-only">'+m.language.translate(m.opts.emoticonsSet[t].desc)+"&nbsp;&nbsp;&nbsp;</span></span>";return m.opts.emoticonsUseImage&&(e+='<p style="font-size: 12px; text-align: center; padding: 0 5px;">Emoji free by <a class="fr-link" tabIndex="-1" href="https://web.archive.org/web/20240606034029/http://emojione.com/" target="_blank" rel="nofollow noopener noreferrer" role="link" aria-label="Open Emoji One website.">Emoji One</a></p>'),e+="</div>"}()},n=m.popups.create("emoticons",t);return m.tooltip.bind(n,".fr-emoticon"),g=n,m.events.on("popup.tab",function(e){var t=Te(e.currentTarget);if(!m.popups.isVisible("emoticons")||!t.is("span, a"))return!0;var n,r,i,a=e.which;if(Te.FE.KEYCODE.TAB==a){if(t.is("span.fr-emoticon")&&e.shiftKey||t.is("a")&&!e.shiftKey){var o=g.find(".fr-buttons");n=!m.accessibility.focusToolbar(o,!!e.shiftKey)}if(!1!==n){var s=g.find("span.fr-emoticon:focus:first, span.fr-emoticon:visible:first, a");t.is("span.fr-emoticon")&&(s=s.not("span.fr-emoticon:not(:focus)")),r=s.index(t),r=e.shiftKey?((r-1)%s.length+s.length)%s.length:(r+1)%s.length,i=s.get(r),m.events.disableBlur(),i.focus(),n=!1}}else if(Te.FE.KEYCODE.ARROW_UP==a||Te.FE.KEYCODE.ARROW_DOWN==a||Te.FE.KEYCODE.ARROW_LEFT==a||Te.FE.KEYCODE.ARROW_RIGHT==a){if(t.is("span.fr-emoticon")){var l=t.parent().find("span.fr-emoticon");r=l.index(t);var d=m.opts.emoticonsStep,c=Math.floor(l.length/d),f=r%d,p=Math.floor(r/d),u=p*d+f,h=c*d;Te.FE.KEYCODE.ARROW_UP==a?u=((u-d)%h+h)%h:Te.FE.KEYCODE.ARROW_DOWN==a?u=(u+d)%h:Te.FE.KEYCODE.ARROW_LEFT==a?u=((u-1)%h+h)%h:Te.FE.KEYCODE.ARROW_RIGHT==a&&(u=(u+1)%h),i=Te(l.get(u)),m.events.disableBlur(),i.focus(),n=!1}}else Te.FE.KEYCODE.ENTER==a&&(t.is("a")?t[0].click():m.button.exec(t),n=!1);return!1===n&&(e.preventDefault(),e.stopPropagation()),n},!0),n}()),!t.hasClass("fr-active")){m.popups.refresh("emoticons"),m.popups.setContainer("emoticons",m.$tb);var n=e.offset().left+e.outerWidth()/2,r=m.position.getTbarPupupTop("emoticons",e);m.popups.show("emoticons",n,r,e.outerHeight())}},hideEmoticonsPopup:function(){m.popups.hide("emoticons")},back:function(){m.popups.hide("emoticons"),m.toolbar.showInline()}}},Te.FE.DefineIcon("emoticons",{NAME:"smile-o",FA5NAME:"smile"}),Te.FE.RegisterCommand("emoticons",{title:"Emoticons",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("emoticons")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("emoticons")):this.emoticons.showEmoticonsPopup()},plugin:"emoticons"}),Te.FE.RegisterCommand("insertEmoticon",{callback:function(e,t){this.emoticons.insert("&#x"+t+";",this.opts.emoticonsUseImage?"https://web.archive.org/web/20240606034029/https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/"+t+".svg":null),this.emoticons.hideEmoticonsPopup()}}),Te.FE.DefineIcon("emoticonsBack",{NAME:"arrow-left"}),Te.FE.RegisterCommand("emoticonsBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.emoticons.back()}}),Te.extend(Te.FE.DEFAULTS,{entities:"&quot;&#39;&iexcl;&cent;&pound;&curren;&yen;&brvbar;&sect;&uml;&copy;&ordf;&laquo;&not;&shy;&reg;&macr;&deg;&plusmn;&sup2;&sup3;&acute;&micro;&para;&middot;&cedil;&sup1;&ordm;&raquo;&frac14;&frac12;&frac34;&iquest;&Agrave;&Aacute;&Acirc;&Atilde;&Auml;&Aring;&AElig;&Ccedil;&Egrave;&Eacute;&Ecirc;&Euml;&Igrave;&Iacute;&Icirc;&Iuml;&ETH;&Ntilde;&Ograve;&Oacute;&Ocirc;&Otilde;&Ouml;&times;&Oslash;&Ugrave;&Uacute;&Ucirc;&Uuml;&Yacute;&THORN;&szlig;&agrave;&aacute;&acirc;&atilde;&auml;&aring;&aelig;&ccedil;&egrave;&eacute;&ecirc;&euml;&igrave;&iacute;&icirc;&iuml;&eth;&ntilde;&ograve;&oacute;&ocirc;&otilde;&ouml;&divide;&oslash;&ugrave;&uacute;&ucirc;&uuml;&yacute;&thorn;&yuml;&OElig;&oelig;&Scaron;&scaron;&Yuml;&fnof;&circ;&tilde;&Alpha;&Beta;&Gamma;&Delta;&Epsilon;&Zeta;&Eta;&Theta;&Iota;&Kappa;&Lambda;&Mu;&Nu;&Xi;&Omicron;&Pi;&Rho;&Sigma;&Tau;&Upsilon;&Phi;&Chi;&Psi;&Omega;&alpha;&beta;&gamma;&delta;&epsilon;&zeta;&eta;&theta;&iota;&kappa;&lambda;&mu;&nu;&xi;&omicron;&pi;&rho;&sigmaf;&sigma;&tau;&upsilon;&phi;&chi;&psi;&omega;&thetasym;&upsih;&piv;&ensp;&emsp;&thinsp;&zwnj;&zwj;&lrm;&rlm;&ndash;&mdash;&lsquo;&rsquo;&sbquo;&ldquo;&rdquo;&bdquo;&dagger;&Dagger;&bull;&hellip;&permil;&prime;&Prime;&lsaquo;&rsaquo;&oline;&frasl;&euro;&image;&weierp;&real;&trade;&alefsym;&larr;&uarr;&rarr;&darr;&harr;&crarr;&lArr;&uArr;&rArr;&dArr;&hArr;&forall;&part;&exist;&empty;&nabla;&isin;&notin;&ni;&prod;&sum;&minus;&lowast;&radic;&prop;&infin;&ang;&and;&or;&cap;&cup;&int;&there4;&sim;&cong;&asymp;&ne;&equiv;&le;&ge;&sub;&sup;&nsub;&sube;&supe;&oplus;&otimes;&perp;&sdot;&lceil;&rceil;&lfloor;&rfloor;&lang;&rang;&loz;&spades;&clubs;&hearts;&diams;"}),Te.FE.PLUGINS.entities=function(i){var a,o;function r(e){var t=e.textContent;if(t.match(a)){for(var n="",r=0;r<t.length;r++)o[t[r]]?n+=o[t[r]]:n+=t[r];e.textContent=n}}function s(e){if(e&&0<=["STYLE","SCRIPT","svg","IFRAME"].indexOf(e.tagName))return!0;for(var t=i.node.contents(e),n=0;n<t.length;n++)t[n].nodeType==Node.TEXT_NODE?r(t[n]):s(t[n]);e.nodeType==Node.TEXT_NODE&&r(e)}function l(e){return 0===e.length?"":i.clean.exec(e,s).replace(/\&amp;/g,"&")}return{_init:function(){i.opts.htmlSimpleAmpersand||(i.opts.entities=i.opts.entities+"&amp;");var e=Te("<div>").html(i.opts.entities).text(),t=i.opts.entities.split(";");o={},a="";for(var n=0;n<e.length;n++){var r=e.charAt(n);o[r]=t[n]+";",a+="\\"+r+(n<e.length-1?"|":"")}a=new RegExp("("+a+")","g"),i.events.on("html.get",l,!0)}}},Te.extend(Te.FE.POPUP_TEMPLATES,{"file.insert":"[_BUTTONS_][_UPLOAD_LAYER_][_PROGRESS_BAR_]"}),Te.extend(Te.FE.DEFAULTS,{fileUpload:!0,fileUploadURL:null,fileUploadParam:"file",fileUploadParams:{},fileUploadToS3:!1,fileUploadMethod:"POST",fileMaxSize:10485760,fileAllowedTypes:["*"],fileInsertButtons:["fileBack","|"],fileUseSelectedText:!1}),Te.FE.PLUGINS.file=function(f){var r,p="https://web.archive.org/web/20240606034029/https://i.froala.com/upload",l=2,d=3,c=4,u=5,h=6,n={};function g(){var e=f.popups.get("file.insert");e||(e=C()),e.find(".fr-layer.fr-active").removeClass("fr-active").addClass("fr-pactive"),e.find(".fr-file-progress-bar-layer").addClass("fr-active"),e.find(".fr-buttons").hide(),a(f.language.translate("Uploading"),0)}function i(e){var t=f.popups.get("file.insert");t&&(t.find(".fr-layer.fr-pactive").addClass("fr-active").removeClass("fr-pactive"),t.find(".fr-file-progress-bar-layer").removeClass("fr-active"),t.find(".fr-buttons").show(),e&&(f.events.focus(),f.popups.hide("file.insert")))}function a(e,t){var n=f.popups.get("file.insert");if(n){var r=n.find(".fr-file-progress-bar-layer");r.find("h3").text(e+(t?" "+t+"%":"")),r.removeClass("fr-error"),t?(r.find("div").removeClass("fr-indeterminate"),r.find("div > span").css("width",t+"%")):r.find("div").addClass("fr-indeterminate")}}function m(e,t,n){f.edit.on(),f.events.focus(!0),f.selection.restore(),f.opts.fileUseSelectedText&&f.selection.text().length&&(t=f.selection.text()),f.html.insert('<a href="'+e+'" target="_blank" id="fr-inserted-file" class="fr-file">'+t+"</a>");var r=f.$el.find("#fr-inserted-file");r.removeAttr("id"),f.popups.hide("file.insert"),f.undo.saveStep(),S(),f.events.trigger("file.inserted",[r,n])}function v(e){var t=this.status,n=this.response,r=this.responseXML,i=this.responseText;try{if(f.opts.fileUploadToS3)if(201==t){var a=function(e){try{var t=Te(e).find("Location").text(),n=Te(e).find("Key").text();return!1===f.events.trigger("file.uploadedToS3",[t,n,e],!0)?(f.edit.on(),!1):t}catch(r){return T(c,e),!1}}(r);a&&m(a,e,n||r)}else T(c,n||r);else if(200<=t&&t<300){var o=function(e){try{if(!1===f.events.trigger("file.uploaded",[e],!0))return f.edit.on(),!1;var t=JSON.parse(e);return t.link?t:(T(l,e),!1)}catch(n){return T(c,e),!1}}(i);o&&m(o.link,e,n||i)}else T(d,n||i)}catch(s){T(c,n||i)}}function E(){T(c,this.response||this.responseText||this.responseXML)}function b(e){if(e.lengthComputable){var t=e.loaded/e.total*100|0;a(f.language.translate("Uploading"),t)}}function T(e,t){f.edit.on(),function(e){g();var t=f.popups.get("file.insert").find(".fr-file-progress-bar-layer");t.addClass("fr-error");var n=t.find("h3");n.text(e),f.events.disableBlur(),n.focus()}(f.language.translate("Something went wrong. Please try again.")),f.events.trigger("file.error",[{code:e,message:n[e]},t])}function A(){f.edit.on(),i(!0)}function o(e){if(void 0!==e&&0<e.length){if(!1===f.events.trigger("file.beforeUpload",[e]))return!1;var t,n=e[0],r=n.name.slice(n.name.lastIndexOf(".")),i=f.opts.fileAllowedTypes;if(i.indexOf("*")<0&&i.indexOf(r)<0&&i.indexOf(n.type.replace(/file\//g,""))<0)return T(h),!1;if((null===f.opts.fileUploadURL||f.opts.fileUploadURL==p)&&!f.opts.fileUploadToS3)return d=n,(c=new FileReader).onload=function(){for(var e=c.result,t=atob(c.result.split(",")[1]),n=[],r=0;r<t.length;r++)n.push(t.charCodeAt(r));e=window.URL.createObjectURL(new Blob([new Uint8Array(n)],{type:d.type})),f.file.insert(e,d.name,null)},g(),c.readAsDataURL(d),!1;if(n.size>f.opts.fileMaxSize)return T(u),!1;if(f.drag_support.formdata&&(t=f.drag_support.formdata?new FormData:null),t){var a;if(!1!==f.opts.fileUploadToS3)for(a in t.append("key",f.opts.fileUploadToS3.keyStart+(new Date).getTime()+"-"+(n.name||"untitled")),t.append("success_action_status","201"),t.append("X-Requested-With","xhr"),t.append("Content-Type",n.type),f.opts.fileUploadToS3.params)f.opts.fileUploadToS3.params.hasOwnProperty(a)&&t.append(a,f.opts.fileUploadToS3.params[a]);for(a in f.opts.fileUploadParams)f.opts.fileUploadParams.hasOwnProperty(a)&&t.append(a,f.opts.fileUploadParams[a]);t.append(f.opts.fileUploadParam,n);var o=f.opts.fileUploadURL;f.opts.fileUploadToS3&&(o=f.opts.fileUploadToS3.uploadURL?f.opts.fileUploadToS3.uploadURL:"https://"+f.opts.fileUploadToS3.region+".amazonaws.com/"+f.opts.fileUploadToS3.bucket);var s=f.core.getXHR(o,f.opts.fileUploadMethod);s.onload=function(){v.call(s,n.name)},s.onerror=E,s.upload.onprogress=b,s.onabort=A,g();var l=f.popups.get("file.insert");l&&l.off("abortUpload").on("abortUpload",function(){4!=s.readyState&&s.abort()}),s.send(t)}}var d,c}function s(){i()}function C(e){if(e)return f.popups.onHide("file.insert",s),!0;var t;f.opts.fileUpload||f.opts.fileInsertButtons.splice(f.opts.fileInsertButtons.indexOf("fileUpload"),1),t='<div class="fr-buttons">'+f.button.buildList(f.opts.fileInsertButtons)+"</div>";var n="";f.opts.fileUpload&&(n='<div class="fr-file-upload-layer fr-layer fr-active" id="fr-file-upload-layer-'+f.id+'"><strong>'+f.language.translate("Drop file")+"</strong><br>("+f.language.translate("or click")+')<div class="fr-form"><input type="file" name="'+f.opts.fileUploadParam+'" accept="'+(0<=f.opts.fileAllowedTypes.indexOf("*")?"/":"")+f.opts.fileAllowedTypes.join(", ").toLowerCase()+'" tabIndex="-1" aria-labelledby="fr-file-upload-layer-'+f.id+'" role="button"></div></div>');var r,i={buttons:t,upload_layer:n,progress_bar:'<div class="fr-file-progress-bar-layer fr-layer"><h3 tabIndex="-1" class="fr-message">Uploading</h3><div class="fr-loader"><span class="fr-progress"></span></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-dismiss" data-cmd="fileDismissError" tabIndex="2" role="button">OK</button></div></div>'},a=f.popups.create("file.insert",i);return r=a,f.events.$on(r,"dragover dragenter",".fr-file-upload-layer",function(){return Te(this).addClass("fr-drop"),!1},!0),f.events.$on(r,"dragleave dragend",".fr-file-upload-layer",function(){return Te(this).removeClass("fr-drop"),!1},!0),f.events.$on(r,"drop",".fr-file-upload-layer",function(e){e.preventDefault(),e.stopPropagation(),Te(this).removeClass("fr-drop");var t=e.originalEvent.dataTransfer;t&&t.files&&(r.data("instance")||f).file.upload(t.files)},!0),f.helpers.isIOS()&&f.events.$on(r,"touchstart",'.fr-file-upload-layer input[type="file"]',function(){Te(this).trigger("click")}),f.events.$on(r,"change",'.fr-file-upload-layer input[type="file"]',function(){if(this.files){var e=r.data("instance")||f;e.events.disableBlur(),r.find("input:focus").blur(),e.events.enableBlur(),e.file.upload(this.files)}Te(this).val("")},!0),a}function e(e){f.node.hasClass(e,"fr-file")}function t(e){var t=e.originalEvent.dataTransfer;if(t&&t.files&&t.files.length){var n=t.files[0];if(n&&"undefined"!=typeof n.type){if(n.type.indexOf("image")<0||-1<n.type.indexOf("svg")){if(!f.opts.fileUpload)return e.preventDefault(),e.stopPropagation(),!1;f.markers.remove(),f.markers.insertAtPoint(e.originalEvent),f.$el.find(".fr-marker").replaceWith(Te.FE.MARKERS),f.popups.hideAll();var r=f.popups.get("file.insert");return r||(r=C()),f.popups.setContainer("file.insert",f.$sc),f.popups.show("file.insert",e.originalEvent.pageX,e.originalEvent.pageY),g(),o(t.files),e.preventDefault(),e.stopPropagation(),!1}}else n.type.indexOf("image")<0&&(e.preventDefault(),e.stopPropagation())}}function S(){var e,t=Array.prototype.slice.call(f.el.querySelectorAll("a.fr-file")),n=[];for(e=0;e<t.length;e++)n.push(t[e].getAttribute("href"));if(r)for(e=0;e<r.length;e++)n.indexOf(r[e].getAttribute("href"))<0&&f.events.trigger("file.unlink",[r[e]]);r=t}return n[1]="File cannot be loaded from the passed link.",n[l]="No link in upload response.",n[d]="Error during file upload.",n[c]="Parsing response failed.",n[u]="File is too large.",n[h]="File file type is invalid.",n[7]="Files can be uploaded only to same domain in IE 8 and IE 9.",{_init:function(){f.events.on("drop",t),f.events.$on(f.$win,"keydown",function(e){var t=e.which,n=f.popups.get("file.insert");n&&t==Te.FE.KEYCODE.ESC&&n.trigger("abortUpload")}),f.events.on("destroy",function(){var e=f.popups.get("file.insert");e&&e.trigger("abortUpload")}),f.events.on("link.beforeRemove",e),f.$wp&&(S(),f.events.on("contentChanged",S)),C(!0)},showInsertPopup:function(){var e=f.$tb.find('.fr-command[data-cmd="insertFile"]'),t=f.popups.get("file.insert");if(t||(t=C()),i(),!t.hasClass("fr-active"))if(f.popups.refresh("file.insert"),f.popups.setContainer("file.insert",f.$tb),e.is(":visible")){var n=e.offset().left+e.outerWidth()/2,r=f.position.getTbarPupupTop("file.insert",e);f.popups.show("file.insert",n,r,e.outerHeight())}else f.position.forSelection(t),f.popups.show("file.insert")},upload:o,insert:m,back:function(){f.events.disableBlur(),f.selection.restore(),f.events.enableBlur(),f.popups.hide("file.insert"),f.toolbar.showInline()},hideProgressBar:i}},Te.FE.DefineIcon("insertFile",{NAME:"file-o",FA5NAME:"file"}),Te.FE.RegisterCommand("insertFile",{title:"Upload File",undo:!1,focus:!0,refreshAfterCallback:!1,popup:!0,callback:function(){this.popups.isVisible("file.insert")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("file.insert")):this.file.showInsertPopup()},plugin:"file"}),Te.FE.DefineIcon("fileBack",{NAME:"arrow-left"}),Te.FE.RegisterCommand("fileBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.file.back()},refresh:function(e){this.opts.toolbarInline?(e.removeClass("fr-hidden"),e.next(".fr-separator").removeClass("fr-hidden")):(e.addClass("fr-hidden"),e.next(".fr-separator").addClass("fr-hidden"))}}),Te.FE.RegisterCommand("fileDismissError",{title:"OK",callback:function(){this.file.hideProgressBar(!0)}}),Te.extend(Te.FE.DEFAULTS,{fontFamily:{"Arial,Helvetica,sans-serif":"Arial","Georgia,serif":"Georgia","Impact,Charcoal,sans-serif":"Impact","Tahoma,Geneva,sans-serif":"Tahoma","Times New Roman,Times,serif,-webkit-standard":"Times New Roman","Verdana,Geneva,sans-serif":"Verdana"},fontFamilySelection:!1,fontFamilyDefaultSelection:"Font Family"}),Te.FE.PLUGINS.fontFamily=function(i){function a(e){var t=e.replace(/(sans-serif|serif|monospace|cursive|fantasy)/gi,"").replace(/"|'| /g,"").split(",");return Te.grep(t,function(e){return 0<e.length})}function o(e,t){for(var n=0;n<e.length;n++)for(var r=0;r<t.length;r++)if(e[n].toLowerCase()==t[r].toLowerCase())return[n,r];return null}function s(){var e=a(Te(i.selection.element()).css("font-family")),t=[];for(var n in i.opts.fontFamily)if(i.opts.fontFamily.hasOwnProperty(n)){var r=o(e,a(n));r&&t.push([n,r])}return 0===t.length?null:(t.sort(function(e,t){var n=e[1][0]-t[1][0];return 0===n?e[1][1]-t[1][1]:n}),t[0][0])}return{apply:function(e){i.format.applyStyle("font-family",e)},refreshOnShow:function(e,t){t.find(".fr-command.fr-active").removeClass("fr-active").attr("aria-selected",!1),t.find('.fr-command[data-param1="'+s()+'"]').addClass("fr-active").attr("aria-selected",!0);var n=t.find(".fr-dropdown-list"),r=t.find(".fr-active").parent();r.length?n.parent().scrollTop(r.offset().top-n.offset().top-(n.parent().outerHeight()/2-r.outerHeight()/2)):n.parent().scrollTop(0)},refresh:function(e){if(i.opts.fontFamilySelection){var t=Te(i.selection.element()).css("font-family").replace(/(sans-serif|serif|monospace|cursive|fantasy)/gi,"").replace(/"|'|/g,"").split(",");e.find("> span").text(i.opts.fontFamily[s()]||t[0]||i.language.translate(i.opts.fontFamilyDefaultSelection))}}}},Te.FE.RegisterCommand("fontFamily",{type:"dropdown",displaySelection:function(e){return e.opts.fontFamilySelection},defaultSelection:function(e){return e.opts.fontFamilyDefaultSelection},displaySelectionWidth:120,html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.fontFamily;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="fontFamily" data-param1="'+n+'" style="font-family: '+n+'" title="'+t[n]+'">'+t[n]+"</a></li>");return e+="</ul>"},title:"Font Family",callback:function(e,t){this.fontFamily.apply(t)},refresh:function(e){this.fontFamily.refresh(e)},refreshOnShow:function(e,t){this.fontFamily.refreshOnShow(e,t)},plugin:"fontFamily"}),Te.FE.DefineIcon("fontFamily",{NAME:"font"}),Te.extend(Te.FE.DEFAULTS,{fontSize:["8","9","10","11","12","14","18","24","30","36","48","60","72","96"],fontSizeSelection:!1,fontSizeDefaultSelection:"12",fontSizeUnit:"px"}),Te.FE.PLUGINS.fontSize=function(a){return{apply:function(e){a.format.applyStyle("font-size",e)},refreshOnShow:function(e,t){var n=Te(a.selection.element()).css("font-size");"pt"===a.opts.fontSizeUnit&&(n=Math.round(72*parseFloat(n,10)/96)+"pt"),t.find(".fr-command.fr-active").removeClass("fr-active").attr("aria-selected",!1),t.find('.fr-command[data-param1="'+n+'"]').addClass("fr-active").attr("aria-selected",!0);var r=t.find(".fr-dropdown-list"),i=t.find(".fr-active").parent();i.length?r.parent().scrollTop(i.offset().top-r.offset().top-(r.parent().outerHeight()/2-i.outerHeight()/2)):r.parent().scrollTop(0)},refresh:function(e){if(a.opts.fontSizeSelection){var t=a.helpers.getPX(Te(a.selection.element()).css("font-size"));"pt"===a.opts.fontSizeUnit&&(t=Math.round(72*parseFloat(t,10)/96)+"pt"),e.find("> span").text(t)}}}},Te.FE.RegisterCommand("fontSize",{type:"dropdown",title:"Font Size",displaySelection:function(e){return e.opts.fontSizeSelection},displaySelectionWidth:30,defaultSelection:function(e){return e.opts.fontSizeDefaultSelection},html:function(){for(var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.fontSize,n=0;n<t.length;n++){var r=t[n];e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="fontSize" data-param1="'+r+this.opts.fontSizeUnit+'" title="'+r+'">'+r+"</a></li>"}return e+="</ul>"},callback:function(e,t){this.fontSize.apply(t)},refresh:function(e){this.fontSize.refresh(e)},refreshOnShow:function(e,t){this.fontSize.refreshOnShow(e,t)},plugin:"fontSize"}),Te.FE.DefineIcon("fontSize",{NAME:"text-height"}),Te.extend(Te.FE.POPUP_TEMPLATES,{"forms.edit":"[_BUTTONS_]","forms.update":"[_BUTTONS_][_TEXT_LAYER_]"}),Te.extend(Te.FE.DEFAULTS,{formEditButtons:["inputStyle","inputEdit"],formStyles:{"fr-rounded":"Rounded","fr-large":"Large"},formMultipleStyles:!0,formUpdateButtons:["inputBack","|"]}),Te.FE.PLUGINS.forms=function(a){var o;function e(e){e.preventDefault(),a.selection.clear(),Te(this).data("mousedown",!0)}function t(e){Te(this).data("mousedown")&&(e.stopPropagation(),Te(this).removeData("mousedown"),l(o=this)),e.preventDefault()}function n(){a.$el.find("input, textarea, button").removeData("mousedown")}function r(){Te(this).removeData("mousedown")}function s(){return o||null}function l(e){var t=a.popups.get("forms.edit");t||(t=function(){var e="";0<a.opts.formEditButtons.length&&(e='<div class="fr-buttons">'+a.button.buildList(a.opts.formEditButtons)+"</div>");var t={buttons:e},n=a.popups.create("forms.edit",t);return a.$wp&&a.events.$on(a.$wp,"scroll.link-edit",function(){s()&&a.popups.isVisible("forms.edit")&&l(s())}),n}());var n=Te(o=e);a.popups.refresh("forms.edit"),a.popups.setContainer("forms.edit",a.$sc);var r=n.offset().left+n.outerWidth()/2,i=n.offset().top+n.outerHeight();a.popups.show("forms.edit",r,i,n.outerHeight())}function d(){var e=a.popups.get("forms.update"),t=s();if(t){var n=Te(t);n.is("button")?e.find('input[type="text"][name="text"]').val(n.text()):e.find('input[type="text"][name="text"]').val(n.attr("placeholder"))}e.find('input[type="text"][name="text"]').trigger("change")}function c(){o=null}function f(e){if(e)return a.popups.onRefresh("forms.update",d),a.popups.onHide("forms.update",c),!0;var t="";1<=a.opts.formUpdateButtons.length&&(t='<div class="fr-buttons">'+a.button.buildList(a.opts.formUpdateButtons)+"</div>");var n="",r=0;n='<div class="fr-forms-text-layer fr-layer fr-active">',n+='<div class="fr-input-line"><input name="text" type="text" placeholder="Text" tabIndex="'+ ++r+'"></div>';var i={buttons:t,text_layer:n+='<div class="fr-action-buttons"><button class="fr-command fr-submit" data-cmd="updateInput" href="#" tabIndex="'+ ++r+'" type="button">'+a.language.translate("Update")+"</button></div></div>"};return a.popups.create("forms.update",i)}return{_init:function(){a.events.$on(a.$el,a._mousedown,"input, textarea, button",e),a.events.$on(a.$el,a._mouseup,"input, textarea, button",t),a.events.$on(a.$el,"touchmove","input, textarea, button",r),a.events.$on(a.$el,a._mouseup,n),a.events.$on(a.$win,a._mouseup,n),f(!0),a.events.$on(a.$el,"submit","form",function(e){return e.preventDefault(),!1})},updateInput:function(){var e=a.popups.get("forms.update"),t=s();if(t){var n=Te(t),r=e.find('input[type="text"][name="text"]').val()||"";r.length&&(n.is("button")?n.text(r):n.attr("placeholder",r)),a.popups.hide("forms.update"),l(t)}},getInput:s,applyStyle:function(e,t,n){void 0===t&&(t=a.opts.formStyles),void 0===n&&(n=a.opts.formMultipleStyles);var r=s();if(!r)return!1;if(!n){var i=Object.keys(t);i.splice(i.indexOf(e),1),Te(r).removeClass(i.join(" "))}Te(r).toggleClass(e)},showUpdatePopup:function(){var e=s();if(e){var t=Te(e),n=a.popups.get("forms.update");n||(n=f()),a.popups.isVisible("forms.update")||a.popups.refresh("forms.update"),a.popups.setContainer("forms.update",a.$sc);var r=t.offset().left+t.outerWidth()/2,i=t.offset().top+t.outerHeight();a.popups.show("forms.update",r,i,t.outerHeight())}},showEditPopup:l,back:function(){a.events.disableBlur(),a.selection.restore(),a.events.enableBlur();var e=s();e&&a.$wp&&("BUTTON"==e.tagName&&a.selection.restore(),l(e))}}},Te.FE.RegisterCommand("updateInput",{undo:!1,focus:!1,title:"Update",callback:function(){this.forms.updateInput()}}),Te.FE.DefineIcon("inputStyle",{NAME:"magic"}),Te.FE.RegisterCommand("inputStyle",{title:"Style",type:"dropdown",html:function(){var e='<ul class="fr-dropdown-list">',t=this.opts.formStyles;for(var n in t)t.hasOwnProperty(n)&&(e+='<li><a class="fr-command" tabIndex="-1" data-cmd="inputStyle" data-param1="'+n+'">'+this.language.translate(t[n])+"</a></li>");return e+="</ul>"},callback:function(e,t){var n=this.forms.getInput();n&&(this.forms.applyStyle(t),this.forms.showEditPopup(n))},refreshOnShow:function(e,t){var n=this.forms.getInput();if(n){var r=Te(n);t.find(".fr-command").each(function(){var e=Te(this).data("param1");Te(this).toggleClass("fr-active",r.hasClass(e))})}}}),Te.FE.DefineIcon("inputEdit",{NAME:"edit"}),Te.FE.RegisterCommand("inputEdit",{title:"Edit Button",undo:!1,refreshAfterCallback:!1,callback:function(){this.forms.showUpdatePopup()}}),Te.FE.DefineIcon("inputBack",{NAME:"arrow-left"}),Te.FE.RegisterCommand("inputBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.forms.back()}}),Te.FE.RegisterCommand("updateInput",{undo:!1,focus:!1,title:"Update",callback:function(){this.forms.updateInput()}}),Te.FE.PLUGINS.fullscreen=function(n){var t,r,i,a;function o(){return n.$box.hasClass("fr-fullscreen")}function e(){if(n.helpers.isIOS()&&n.core.hasFocus())return n.$el.blur(),setTimeout(l,250),!1;t=n.helpers.scrollTop(),n.$box.toggleClass("fr-fullscreen"),Te("body:first").toggleClass("fr-fullscreen"),n.helpers.isMobile()&&(n.$tb.data("parent",n.$tb.parent()),n.$tb.prependTo(n.$box),n.$tb.data("sticky-dummy")&&n.$tb.after(n.$tb.data("sticky-dummy"))),r=n.opts.height,i=n.opts.heightMax,a=n.opts.zIndex,n.position.refresh(),n.opts.height=n.o_win.innerHeight-(n.opts.toolbarInline?0:n.$tb.outerHeight()),n.opts.zIndex=2147483641,n.opts.heightMax=null,n.size.refresh(),n.opts.toolbarInline&&n.toolbar.showInline();for(var e=n.$box.parent();!e.is("body:first");)e.addClass("fr-fullscreen-wrapper"),e=e.parent();n.opts.toolbarContainer&&n.$box.prepend(n.$tb),n.events.trigger("charCounter.update"),n.events.trigger("codeView.update"),n.$win.trigger("scroll")}function s(){if(n.helpers.isIOS()&&n.core.hasFocus())return n.$el.blur(),setTimeout(l,250),!1;n.$box.toggleClass("fr-fullscreen"),Te("body:first").toggleClass("fr-fullscreen"),n.$tb.prependTo(n.$tb.data("parent")),n.$tb.data("sticky-dummy")&&n.$tb.after(n.$tb.data("sticky-dummy")),n.opts.height=r,n.opts.heightMax=i,n.opts.zIndex=a,n.size.refresh(),Te(n.o_win).scrollTop(t),n.opts.toolbarInline&&n.toolbar.showInline(),n.events.trigger("charCounter.update"),n.opts.toolbarSticky&&n.opts.toolbarStickyOffset&&(n.opts.toolbarBottom?n.$tb.css("bottom",n.opts.toolbarStickyOffset).data("bottom",n.opts.toolbarStickyOffset):n.$tb.css("top",n.opts.toolbarStickyOffset).data("top",n.opts.toolbarStickyOffset));for(var e=n.$box.parent();!e.is("body:first");)e.removeClass("fr-fullscreen-wrapper"),e=e.parent();n.opts.toolbarContainer&&Te(n.opts.toolbarContainer).append(n.$tb),Te(n.o_win).trigger("scroll"),n.events.trigger("codeView.update")}function l(){o()?s():e(),d(n.$tb.find('.fr-command[data-cmd="fullscreen"]')),n.placeholder.refresh()}function d(e){var t=o();e.toggleClass("fr-active",t).attr("aria-pressed",t),e.find("> *:not(.fr-sr-only)").replaceWith(t?n.icon.create("fullscreenCompress"):n.icon.create("fullscreen"))}return{_init:function(){if(!n.$wp)return!1;n.events.$on(Te(n.o_win),"resize",function(){o()&&(s(),e())}),n.events.on("toolbar.hide",function(){if(o()&&n.helpers.isMobile())return!1}),n.events.on("position.refresh",function(){if(n.helpers.isIOS())return!o()}),n.events.on("destroy",function(){o()&&s()},!0)},toggle:l,refresh:d,isActive:o}},Te.FE.RegisterCommand("fullscreen",{title:"Fullscreen",undo:!1,focus:!1,accessibilityFocus:!0,forcedRefresh:!0,toggle:!0,callback:function(){this.fullscreen.toggle()},refresh:function(e){this.fullscreen.refresh(e)},plugin:"fullscreen"}),Te.FE.DefineIcon("fullscreen",{NAME:"expand"}),Te.FE.DefineIcon("fullscreenCompress",{NAME:"compress"}),Te.extend(Te.FE.DEFAULTS,{helpSets:[{title:"Inline Editor",commands:[{val:"OSkeyE",desc:"Show the editor"}]},{title:"Common actions",commands:[{val:"OSkeyC",desc:"Copy"},{val:"OSkeyX",desc:"Cut"},{val:"OSkeyV",desc:"Paste"},{val:"OSkeyZ",desc:"Undo"},{val:"OSkeyShift+Z",desc:"Redo"},{val:"OSkeyK",desc:"Insert Link"},{val:"OSkeyP",desc:"Insert Image"}]},{title:"Basic Formatting",commands:[{val:"OSkeyA",desc:"Select All"},{val:"OSkeyB",desc:"Bold"},{val:"OSkeyI",desc:"Italic"},{val:"OSkeyU",desc:"Underline"},{val:"OSkeyS",desc:"Strikethrough"},{val:"OSkey]",desc:"Increase Indent"},{val:"OSkey[",desc:"Decrease Indent"}]},{title:"Quote",commands:[{val:"OSkey'",desc:"Increase quote level"},{val:"OSkeyShift+'",desc:"Decrease quote level"}]},{title:"Image / Video",commands:[{val:"OSkey+",desc:"Resize larger"},{val:"OSkey-",desc:"Resize smaller"}]},{title:"Table",commands:[{val:"Alt+Space",desc:"Select table cell"},{val:"Shift+Left/Right arrow",desc:"Extend selection one cell"},{val:"Shift+Up/Down arrow",desc:"Extend selection one row"}]},{title:"Navigation",commands:[{val:"OSkey/",desc:"Shortcuts"},{val:"Alt+F10",desc:"Focus popup / toolbar"},{val:"Esc",desc:"Return focus to previous position"}]}]}),Te.FE.PLUGINS.help=function(o){var r,i="help";return{_init:function(){},show:function(){if(!r){var e="<h4>"+o.language.translate("Shortcuts")+"</h4>",t=function(){for(var e='<div class="fr-help-modal">',t=0;t<o.opts.helpSets.length;t++){var n=o.opts.helpSets[t],r="<table>";r+="<thead><tr><th>"+o.language.translate(n.title)+"</th></tr></thead>",r+="<tbody>";for(var i=0;i<n.commands.length;i++){var a=n.commands[i];r+="<tr>",r+="<td>"+o.language.translate(a.desc)+"</td>",r+="<td>"+a.val.replace("OSkey",o.helpers.isMac()?"&#8984;":"Ctrl+")+"</td>",r+="</tr>"}e+=r+="</tbody></table>"}return e+="</div>"}(),n=o.modals.create(i,e,t);r=n.$modal,n.$head,n.$body,o.events.$on(Te(o.o_win),"resize",function(){o.modals.resize(i)})}o.modals.show(i),o.modals.resize(i)},hide:function(){o.modals.hide(i)}}},Te.FroalaEditor.DefineIcon("help",{NAME:"question"}),Te.FE.RegisterShortcut(Te.FE.KEYCODE.SLASH,"help",null,"/"),Te.FE.RegisterCommand("help",{title:"Help",icon:"help",undo:!1,focus:!1,modal:!0,callback:function(){this.help.show()},plugin:"help",showOnMobile:!1}),Te.extend(Te.FE.POPUP_TEMPLATES,{"image.insert":"[_BUTTONS_][_UPLOAD_LAYER_][_BY_URL_LAYER_][_PROGRESS_BAR_]","image.edit":"[_BUTTONS_]","image.alt":"[_BUTTONS_][_ALT_LAYER_]","image.size":"[_BUTTONS_][_SIZE_LAYER_]"}),Te.extend(Te.FE.DEFAULTS,{imageInsertButtons:["imageBack","|","imageUpload","imageByURL"],imageEditButtons:["imageReplace","imageAlign","imageCaption","imageRemove","|","imageLink","linkOpen","linkEdit","linkRemove","-","imageDisplay","imageStyle","imageAlt","imageSize"],imageAltButtons:["imageBack","|"],imageSizeButtons:["imageBack","|"],imageUpload:!0,imageUploadURL:null,imageCORSProxy:"https://web.archive.org/web/20240606034029/https://cors-anywhere.froala.com",imageUploadRemoteUrls:!0,imageUploadParam:"file",imageUploadParams:{},imageUploadToS3:!1,imageUploadMethod:"POST",imageMaxSize:10485760,imageAllowedTypes:["jpeg","jpg","png","gif","webp"],imageResize:!0,imageResizeWithPercent:!1,imageRoundPercent:!1,imageDefaultWidth:300,imageDefaultAlign:"center",imageDefaultDisplay:"block",imageSplitHTML:!1,imageStyles:{"fr-rounded":"Rounded","fr-bordered":"Bordered","fr-shadow":"Shadow"},imageMove:!0,imageMultipleStyles:!0,imageTextNear:!0,imagePaste:!0,imagePasteProcess:!1,imageMinWidth:16,imageOutputSize:!1,imageDefaultMargin:5,imageAddNewLine:!1}),Te.FE.PLUGINS.image=function(f){var p,l,d,c,s,n,u="https://web.archive.org/web/20240606034029/https://i.froala.com/upload",t=!1,r=1,h=2,g=3,m=4,v=5,E=6,i={};function b(){var e=f.popups.get("image.insert").find(".fr-image-by-url-layer input");e.val(""),p&&e.val(p.attr("src")),e.trigger("change")}function a(){var e=f.popups.get("image.edit");if(e||(e=N()),e){var t=ve();Ee()&&(t=t.find(".fr-img-wrap")),f.popups.setContainer("image.edit",f.$sc),f.popups.refresh("image.edit");var n=t.offset().left+t.outerWidth()/2,r=t.offset().top+t.outerHeight();p.hasClass("fr-uploading")?x():f.popups.show("image.edit",n,r,t.outerHeight())}}function T(){w()}function e(){for(var e,t,n="IMG"==f.el.tagName?[f.el]:f.el.querySelectorAll("img"),r=0;r<n.length;r++){var i=Te(n[r]);!f.opts.htmlUntouched&&f.opts.useClasses?((f.opts.imageDefaultAlign||f.opts.imageDefaultDisplay)&&(0<(t=i).parents(".fr-img-caption").length&&(t=t.parents(".fr-img-caption:first")),t.hasClass("fr-dii")||t.hasClass("fr-dib")||(t.addClass("fr-fi"+pe(t)[0]),t.addClass("fr-di"+ue(t)[0]),t.css("margin",""),t.css("float",""),t.css("display",""),t.css("z-index",""),t.css("position",""),t.css("overflow",""),t.css("vertical-align",""))),f.opts.imageTextNear||(0<i.parents(".fr-img-caption").length?i.parents(".fr-img-caption:first").removeClass("fr-dii").addClass("fr-dib"):i.removeClass("fr-dii").addClass("fr-dib"))):f.opts.htmlUntouched||f.opts.useClasses||(f.opts.imageDefaultAlign||f.opts.imageDefaultDisplay)&&(0<(e=i).parents(".fr-img-caption").length&&(e=e.parents(".fr-img-caption:first")),fe(e,e.hasClass("fr-dib")?"block":e.hasClass("fr-dii")?"inline":null,e.hasClass("fr-fil")?"left":e.hasClass("fr-fir")?"right":pe(e)),e.removeClass("fr-dib fr-dii fr-fir fr-fil")),f.opts.iframe&&i.on("load",f.size.syncIframe)}}function A(e){void 0===e&&(e=!0);var t,n=Array.prototype.slice.call(f.el.querySelectorAll("img")),r=[];for(t=0;t<n.length;t++)if(r.push(n[t].getAttribute("src")),Te(n[t]).toggleClass("fr-draggable",f.opts.imageMove),""===n[t].getAttribute("class")&&n[t].removeAttribute("class"),""===n[t].getAttribute("style")&&n[t].removeAttribute("style"),n[t].parentNode&&n[t].parentNode.parentNode&&f.node.hasClass(n[t].parentNode.parentNode,"fr-img-caption")){var i=n[t].parentNode.parentNode;f.browser.mozilla||i.setAttribute("contenteditable",!1),i.setAttribute("draggable",!1),i.classList.add("fr-draggable");var a=n[t].nextSibling;a&&!f.browser.mozilla&&a.setAttribute("contenteditable",!0)}if(s)for(t=0;t<s.length;t++)r.indexOf(s[t].getAttribute("src"))<0&&f.events.trigger("image.removed",[Te(s[t])]);if(s&&e){var o=[];for(t=0;t<s.length;t++)o.push(s[t].getAttribute("src"));for(t=0;t<n.length;t++)o.indexOf(n[t].getAttribute("src"))<0&&f.events.trigger("image.loaded",[Te(n[t])])}s=n}function C(){if(l||function(){var e;f.shared.$image_resizer?(l=f.shared.$image_resizer,c=f.shared.$img_overlay,f.events.on("destroy",function(){l.removeClass("fr-active").appendTo(Te("body:first"))},!0)):(f.shared.$image_resizer=Te('<div class="fr-image-resizer"></div>'),l=f.shared.$image_resizer,f.events.$on(l,"mousedown",function(e){e.stopPropagation()},!0),f.opts.imageResize&&(l.append(o("nw")+o("ne")+o("sw")+o("se")),f.shared.$img_overlay=Te('<div class="fr-image-overlay"></div>'),c=f.shared.$img_overlay,e=l.get(0).ownerDocument,Te(e).find("body:first").append(c)));f.events.on("shared.destroy",function(){l.html("").removeData().remove(),l=null,f.opts.imageResize&&(c.remove(),c=null)},!0),f.helpers.isMobile()||f.events.$on(Te(f.o_win),"resize",function(){p&&!p.hasClass("fr-uploading")?se(!0):p&&(C(),he(),x(!1))});if(f.opts.imageResize){e=l.get(0).ownerDocument,f.events.$on(l,f._mousedown,".fr-handler",R),f.events.$on(Te(e),f._mousemove,y),f.events.$on(Te(e.defaultView||e.parentWindow),f._mouseup,L),f.events.$on(c,"mouseleave",L);var r=1,i=null,a=0;f.events.on("keydown",function(e){if(p){var t=-1!=navigator.userAgent.indexOf("Mac OS X")?e.metaKey:e.ctrlKey,n=e.which;(n!==i||200<e.timeStamp-a)&&(r=1),(n==Te.FE.KEYCODE.EQUALS||f.browser.mozilla&&n==Te.FE.KEYCODE.FF_EQUALS)&&t&&!e.altKey?r=Q.call(this,e,1,1,r):(n==Te.FE.KEYCODE.HYPHEN||f.browser.mozilla&&n==Te.FE.KEYCODE.FF_HYPHEN)&&t&&!e.altKey?r=Q.call(this,e,2,-1,r):f.keys.ctrlKey(e)||n!=Te.FE.KEYCODE.ENTER||(p.before("<br>"),k(p)),i=n,a=e.timeStamp}},!0),f.events.on("keyup",function(){r=1})}}(),!p)return!1;var e=f.$wp||f.$sc;e.append(l),l.data("instance",f);var t=e.scrollTop()-("static"!=e.css("position")?e.offset().top:0),n=e.scrollLeft()-("static"!=e.css("position")?e.offset().left:0);n-=f.helpers.getPX(e.css("border-left-width")),t-=f.helpers.getPX(e.css("border-top-width")),f.$el.is("img")&&f.$sc.is("body")&&(n=t=0);var r=ve();Ee()&&(r=r.find(".fr-img-wrap")),l.css("top",(f.opts.iframe?r.offset().top:r.offset().top+t)-1).css("left",(f.opts.iframe?r.offset().left:r.offset().left+n)-1).css("width",r.get(0).getBoundingClientRect().width).css("height",r.get(0).getBoundingClientRect().height).addClass("fr-active")}function o(e){return'<div class="fr-handler fr-h'+e+'"></div>'}function S(e){Ee()?p.parents(".fr-img-caption").css("width",e):p.css("width",e)}function R(e){if(!f.core.sameInstance(l))return!0;if(e.preventDefault(),e.stopPropagation(),f.$el.find("img.fr-error").left)return!1;f.undo.canDo()||f.undo.saveStep();var t=e.pageX||e.originalEvent.touches[0].pageX;if("mousedown"==e.type){var n=f.$oel.get(0).ownerDocument,r=n.defaultView||n.parentWindow,i=!1;try{i=r.location!=r.parent.location&&!(r.$&&r.$.FE)}catch(s){}i&&r.frameElement&&(t+=f.helpers.getPX(Te(r.frameElement).offset().left)+r.frameElement.clientLeft)}(d=Te(this)).data("start-x",t),d.data("start-width",p.width()),d.data("start-height",p.height());var a=p.width();if(f.opts.imageResizeWithPercent){var o=p.parentsUntil(f.$el,f.html.blockTagsQuery()).get(0)||f.el;a=(a/Te(o).outerWidth()*100).toFixed(2)+"%"}S(a),c.show(),f.popups.hideAll(),ce()}function y(e){if(!f.core.sameInstance(l))return!0;var t;if(d&&p){if(e.preventDefault(),f.$el.find("img.fr-error").left)return!1;var n=e.pageX||(e.originalEvent.touches?e.originalEvent.touches[0].pageX:null);if(!n)return!1;var r=n-d.data("start-x"),i=d.data("start-width");if((d.hasClass("fr-hnw")||d.hasClass("fr-hsw"))&&(r=0-r),f.opts.imageResizeWithPercent){var a=p.parentsUntil(f.$el,f.html.blockTagsQuery()).get(0)||f.el;i=((i+r)/Te(a).outerWidth()*100).toFixed(2),f.opts.imageRoundPercent&&(i=Math.round(i)),S(i+"%"),(t=Ee()?(f.helpers.getPX(p.parents(".fr-img-caption").css("width"))/Te(a).outerWidth()*100).toFixed(2):(f.helpers.getPX(p.css("width"))/Te(a).outerWidth()*100).toFixed(2))===i||f.opts.imageRoundPercent||S(t+"%"),p.css("height","").removeAttr("height")}else i+r>=f.opts.imageMinWidth&&(S(i+r),t=Ee()?f.helpers.getPX(p.parents(".fr-img-caption").css("width")):f.helpers.getPX(p.css("width"))),t!==i+r&&S(t),((p.attr("style")||"").match(/(^height:)|(; *height:)/)||p.attr("height"))&&(p.css("height",d.data("start-height")*p.width()/d.data("start-width")),p.removeAttr("height"));C(),f.events.trigger("image.resize",[me()])}}function L(e){if(!f.core.sameInstance(l))return!0;if(d&&p){if(e&&e.stopPropagation(),f.$el.find("img.fr-error").left)return!1;d=null,c.hide(),C(),a(),f.undo.saveStep(),f.events.trigger("image.resizeEnd",[me()])}}function _(e,t,n){f.edit.on(),p&&p.addClass("fr-error"),i[e]?I(i[e]):I(f.language.translate("Something went wrong. Please try again.")),!p&&n&&Z(n),f.events.trigger("image.error",[{code:e,message:i[e]},t,n])}function N(e){if(e)return f.$wp&&f.events.$on(f.$wp,"scroll.image-edit",function(){p&&f.popups.isVisible("image.edit")&&(f.events.disableBlur(),a())}),!0;var t="";if(0<f.opts.imageEditButtons.length){t+='<div class="fr-buttons">',t+=f.button.buildList(f.opts.imageEditButtons);var n={buttons:t+="</div>"};return f.popups.create("image.edit",n)}return!1}function x(e){var t=f.popups.get("image.insert");if(t||(t=z()),t.find(".fr-layer.fr-active").removeClass("fr-active").addClass("fr-pactive"),t.find(".fr-image-progress-bar-layer").addClass("fr-active"),t.find(".fr-buttons").hide(),p){var n=ve();f.popups.setContainer("image.insert",f.$sc);var r=n.offset().left+n.width()/2,i=n.offset().top+n.height();f.popups.show("image.insert",r,i,n.outerHeight())}void 0===e&&O(f.language.translate("Uploading"),0)}function w(e){var t=f.popups.get("image.insert");if(t&&(t.find(".fr-layer.fr-pactive").addClass("fr-active").removeClass("fr-pactive"),t.find(".fr-image-progress-bar-layer").removeClass("fr-active"),t.find(".fr-buttons").show(),e||f.$el.find("img.fr-error").length)){if(f.events.focus(),f.$el.find("img.fr-error").length&&(f.$el.find("img.fr-error").remove(),f.undo.saveStep(),f.undo.run(),f.undo.dropRedo()),!f.$wp&&p){var n=p;se(!0),f.selection.setAfter(n.get(0)),f.selection.restore()}f.popups.hide("image.insert")}}function O(e,t){var n=f.popups.get("image.insert");if(n){var r=n.find(".fr-image-progress-bar-layer");r.find("h3").text(e+(t?" "+t+"%":"")),r.removeClass("fr-error"),t?(r.find("div").removeClass("fr-indeterminate"),r.find("div > span").css("width",t+"%")):r.find("div").addClass("fr-indeterminate")}}function I(e){x();var t=f.popups.get("image.insert").find(".fr-image-progress-bar-layer");t.addClass("fr-error");var n=t.find("h3");n.text(e),f.events.disableBlur(),n.focus()}function k(e){oe.call(e.get(0))}function D(){var e=Te(this);f.popups.hide("image.insert"),e.removeClass("fr-uploading"),e.next().is("br")&&e.next().remove(),k(e),f.events.trigger("image.loaded",[e])}function F(o,e,s,l,d){f.edit.off(),O(f.language.translate("Loading image")),e&&(o=f.helpers.sanitizeURL(o));var t=new Image;if(t.onload=function(){var e,t;if(f.opts.downloadCustomHeader&&!Te.isEmptyObject(f.opts.requestHeaders)&&(o=this.src),l){f.undo.canDo()||l.hasClass("fr-uploading")||f.undo.saveStep();var n=l.data("fr-old-src");l.data("fr-image-pasted")&&(n=null),f.$wp?((e=l.clone().removeData("fr-old-src").removeClass("fr-uploading").removeAttr("data-fr-image-pasted")).off("load"),n&&l.attr("src",n),l.replaceWith(e)):e=l;for(var r=e.get(0).attributes,i=0;i<r.length;i++){var a=r[i];0===a.nodeName.indexOf("data-")&&e.removeAttr(a.nodeName)}if(void 0!==s)for(t in s)s.hasOwnProperty(t)&&"link"!=t&&e.attr("data-"+t,s[t]);e.on("load",D),e.attr("src",o),f.edit.on(),A(!1),f.undo.saveStep(),f.events.disableBlur(),f.$el.blur(),f.events.trigger(n?"image.replaced":"image.inserted",[e,d])}else e=P(o,s,D),A(!1),f.undo.saveStep(),f.events.disableBlur(),f.$el.blur(),f.events.trigger("image.inserted",[e,d])},t.onerror=function(){_(r)},x(f.language.translate("Loading image")),f.opts.downloadCustomHeader&&!Te.isEmptyObject(f.opts.requestHeaders)){var n=f.core.getXHR(o,"GET");n.onload=function(){200==this.status?t.src=URL.createObjectURL(this.response):be()},n.onerror=be,n.onabort=be,n.responseType="blob",n.send()}else t.src=o}function M(e){O(f.language.translate("Loading image"));var t=this.status,n=this.response,r=this.responseXML,i=this.responseText;try{if(f.opts.imageUploadToS3)if(201==t){var a=function(e){try{var t=Te(e).find("Location").text(),n=Te(e).find("Key").text();return!1===f.events.trigger("image.uploadedToS3",[t,n,e],!0)?(f.edit.on(),!1):t}catch(r){return _(m,e),!1}}(r);a&&F(a,!1,[],e,n||r)}else _(m,n||r,e);else if(200<=t&&t<300){var o=function(e){try{if(!1===f.events.trigger("image.uploaded",[e],!0))return f.edit.on(),!1;var t=JSON.parse(e);return t.link?t:(_(h,e),!1)}catch(n){return _(m,e),!1}}(i);o&&F(o.link,!1,o,e,n||i)}else _(g,n||i,e)}catch(s){_(m,n||i,e)}}function $(){_(m,this.response||this.responseText||this.responseXML)}function B(e){if(e.lengthComputable){var t=e.loaded/e.total*100|0;O(f.language.translate("Uploading"),t)}}function P(e,t,n){var r,i="";if(t&&void 0!==t)for(r in t)t.hasOwnProperty(r)&&"link"!=r&&(i+=" data-"+r+'="'+t[r]+'"');var a=f.opts.imageDefaultWidth;a&&"auto"!=a&&(a=f.opts.imageResizeWithPercent?"100%":a+"px");var o=Te('<img src="'+e+'"'+i+(a?' style="width: '+a+';"':"")+">");fe(o,f.opts.imageDefaultDisplay,f.opts.imageDefaultAlign),o.on("load",n),o.on("error",n),f.edit.on(),f.events.focus(!0),f.selection.restore(),f.undo.saveStep(),f.opts.imageSplitHTML?f.markers.split():f.markers.insert(),f.html.wrap();var s=f.$el.find(".fr-marker");return s.length?(s.parent().is("hr")&&s.parent().after(s),f.node.isLastSibling(s)&&s.parent().hasClass("fr-deletable")&&s.insertAfter(s.parent()),s.replaceWith(o)):f.$el.append(o),f.selection.clear(),o}function U(){f.edit.on(),w(!0)}function K(e,t){if(void 0!==e&&0<e.length){if(!1===f.events.trigger("image.beforeUpload",[e,t]))return!1;var n,r=e[0];if((null===f.opts.imageUploadURL||f.opts.imageUploadURL==u)&&!f.opts.imageUploadToS3)return o=r,s=t||p,(l=new FileReader).onload=function(){var e=l.result;if(l.result.indexOf("svg+xml")<0){for(var t=atob(l.result.split(",")[1]),n=[],r=0;r<t.length;r++)n.push(t.charCodeAt(r));e=window.URL.createObjectURL(new Blob([new Uint8Array(n)],{type:o.type})),f.image.insert(e,!1,null,s)}},x(),l.readAsDataURL(o),!1;if(r.name||(r.name=(new Date).getTime()+"."+(r.type||"image/jpeg").replace(/image\//g,"")),r.size>f.opts.imageMaxSize)return _(v),!1;if(f.opts.imageAllowedTypes.indexOf(r.type.replace(/image\//g,""))<0)return _(E),!1;if(f.drag_support.formdata&&(n=f.drag_support.formdata?new FormData:null),n){var i;if(!1!==f.opts.imageUploadToS3)for(i in n.append("key",f.opts.imageUploadToS3.keyStart+(new Date).getTime()+"-"+(r.name||"untitled")),n.append("success_action_status","201"),n.append("X-Requested-With","xhr"),n.append("Content-Type",r.type),f.opts.imageUploadToS3.params)f.opts.imageUploadToS3.params.hasOwnProperty(i)&&n.append(i,f.opts.imageUploadToS3.params[i]);for(i in f.opts.imageUploadParams)f.opts.imageUploadParams.hasOwnProperty(i)&&n.append(i,f.opts.imageUploadParams[i]);n.append(f.opts.imageUploadParam,r,r.name);var a=f.opts.imageUploadURL;f.opts.imageUploadToS3&&(a=f.opts.imageUploadToS3.uploadURL?f.opts.imageUploadToS3.uploadURL:"https://"+f.opts.imageUploadToS3.region+".amazonaws.com/"+f.opts.imageUploadToS3.bucket),function(t,n,e,i){function a(){var e=Te(this);e.off("load"),e.addClass("fr-uploading"),e.next().is("br")&&e.next().remove(),f.placeholder.refresh(),k(e),C(),x(),f.edit.off(),t.onload=function(){M.call(t,e)},t.onerror=$,t.upload.onprogress=B,t.onabort=U,e.off("abortUpload").on("abortUpload",function(){4!=t.readyState&&(t.abort(),i?(i.attr("src",i.data("fr-old-src")),i.removeClass("fr-uploading")):e.remove(),se(!0))}),t.send(n)}var o=new FileReader;o.onload=function(){var e=o.result;if(o.result.indexOf("svg+xml")<0){for(var t=atob(o.result.split(",")[1]),n=[],r=0;r<t.length;r++)n.push(t.charCodeAt(r));e=window.URL.createObjectURL(new Blob([new Uint8Array(n)],{type:"image/jpeg"}))}i?(i.on("load",a),i.one("error",a),f.edit.on(),f.undo.saveStep(),i.data("fr-old-src",i.attr("src")),i.attr("src",e)):P(e,null,a)},o.readAsDataURL(e)}(f.core.getXHR(a,f.opts.imageUploadMethod),n,r,t||p)}}var o,s,l}function H(e){if(e.is("img")&&0<e.parents(".fr-img-caption").length)return e.parents(".fr-img-caption")}function W(e){var t=e.originalEvent.dataTransfer;if(t&&t.files&&t.files.length){var n=t.files[0];if(n&&n.type&&-1!==n.type.indexOf("image")&&0<=f.opts.imageAllowedTypes.indexOf(n.type.replace(/image\//g,""))){if(!f.opts.imageUpload)return e.preventDefault(),e.stopPropagation(),!1;f.markers.remove(),f.markers.insertAtPoint(e.originalEvent),f.$el.find(".fr-marker").replaceWith(Te.FE.MARKERS),0===f.$el.find(".fr-marker").length&&f.selection.setAtEnd(f.el),f.popups.hideAll();var r=f.popups.get("image.insert");r||(r=z()),f.popups.setContainer("image.insert",f.$sc);var i=e.originalEvent.pageX,a=e.originalEvent.pageY;return f.opts.iframe&&(a+=f.$iframe.offset().top,i+=f.$iframe.offset().left),f.popups.show("image.insert",i,a),x(),0<=f.opts.imageAllowedTypes.indexOf(n.type.replace(/image\//g,""))?(se(!0),K(t.files)):_(E),e.preventDefault(),e.stopPropagation(),!1}}}function z(e){if(e)return f.popups.onRefresh("image.insert",b),f.popups.onHide("image.insert",T),!0;var t,n,r="";f.opts.imageUpload||-1===f.opts.imageInsertButtons.indexOf("imageUpload")||f.opts.imageInsertButtons.splice(f.opts.imageInsertButtons.indexOf("imageUpload"),1);var i=f.button.buildList(f.opts.imageInsertButtons);""!==i&&(r='<div class="fr-buttons">'+i+"</div>");var a=f.opts.imageInsertButtons.indexOf("imageUpload"),o=f.opts.imageInsertButtons.indexOf("imageByURL"),s="";0<=a&&(t=" fr-active",0<=o&&o<a&&(t=""),s='<div class="fr-image-upload-layer'+t+' fr-layer" id="fr-image-upload-layer-'+f.id+'"><strong>'+f.language.translate("Drop image")+"</strong><br>("+f.language.translate("or click")+')<div class="fr-form"><input type="file" accept="image/'+f.opts.imageAllowedTypes.join(", image/").toLowerCase()+'" tabIndex="-1" aria-labelledby="fr-image-upload-layer-'+f.id+'" role="button"></div></div>');var l="";0<=o&&(t=" fr-active",0<=a&&a<o&&(t=""),l='<div class="fr-image-by-url-layer'+t+' fr-layer" id="fr-image-by-url-layer-'+f.id+'"><div class="fr-input-line"><input id="fr-image-by-url-layer-text-'+f.id+'" type="text" placeholder="http://" tabIndex="1" aria-required="true"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="imageInsertByURL" tabIndex="2" role="button">'+f.language.translate("Insert")+"</button></div></div>");var d,c={buttons:r,upload_layer:s,by_url_layer:l,progress_bar:'<div class="fr-image-progress-bar-layer fr-layer"><h3 tabIndex="-1" class="fr-message">Uploading</h3><div class="fr-loader"><span class="fr-progress"></span></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-dismiss" data-cmd="imageDismissError" tabIndex="2" role="button">OK</button></div></div>'};return 1<=f.opts.imageInsertButtons.length&&(n=f.popups.create("image.insert",c)),f.$wp&&f.events.$on(f.$wp,"scroll",function(){p&&f.popups.isVisible("image.insert")&&he()}),d=n,f.events.$on(d,"dragover dragenter",".fr-image-upload-layer",function(){return Te(this).addClass("fr-drop"),!1},!0),f.events.$on(d,"dragleave dragend",".fr-image-upload-layer",function(){return Te(this).removeClass("fr-drop"),!1},!0),f.events.$on(d,"drop",".fr-image-upload-layer",function(e){e.preventDefault(),e.stopPropagation(),Te(this).removeClass("fr-drop");var t=e.originalEvent.dataTransfer;if(t&&t.files){var n=d.data("instance")||f;n.events.disableBlur(),n.image.upload(t.files),n.events.enableBlur()}},!0),f.helpers.isIOS()&&f.events.$on(d,"touchstart",'.fr-image-upload-layer input[type="file"]',function(){Te(this).trigger("click")},!0),f.events.$on(d,"change",'.fr-image-upload-layer input[type="file"]',function(){if(this.files){var e=d.data("instance")||f;e.events.disableBlur(),d.find("input:focus").blur(),e.events.enableBlur(),e.image.upload(this.files,p)}Te(this).val("")},!0),n}function Y(){p&&f.popups.get("image.alt").find("input").val(p.attr("alt")||"").trigger("change")}function G(){var e=f.popups.get("image.alt");e||(e=V()),w(),f.popups.refresh("image.alt"),f.popups.setContainer("image.alt",f.$sc);var t=ve();Ee()&&(t=t.find(".fr-img-wrap"));var n=t.offset().left+t.outerWidth()/2,r=t.offset().top+t.outerHeight();f.popups.show("image.alt",n,r,t.outerHeight())}function V(e){if(e)return f.popups.onRefresh("image.alt",Y),!0;var t={buttons:'<div class="fr-buttons">'+f.button.buildList(f.opts.imageAltButtons)+"</div>",alt_layer:'<div class="fr-image-alt-layer fr-layer fr-active" id="fr-image-alt-layer-'+f.id+'"><div class="fr-input-line"><input id="fr-image-alt-layer-text-'+f.id+'" type="text" placeholder="'+f.language.translate("Alternative Text")+'" tabIndex="1"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="imageSetAlt" tabIndex="2" role="button">'+f.language.translate("Update")+"</button></div></div>"},n=f.popups.create("image.alt",t);return f.$wp&&f.events.$on(f.$wp,"scroll.image-alt",function(){p&&f.popups.isVisible("image.alt")&&G()}),n}function X(){var e=f.popups.get("image.size");if(p)if(Ee()){var t=p.parent();t.get(0).style.width||(t=p.parent().parent()),e.find('input[name="width"]').val(t.get(0).style.width).trigger("change"),e.find('input[name="height"]').val(t.get(0).style.height).trigger("change")}else e.find('input[name="width"]').val(p.get(0).style.width).trigger("change"),e.find('input[name="height"]').val(p.get(0).style.height).trigger("change")}function q(){var e=f.popups.get("image.size");e||(e=j()),w(),f.popups.refresh("image.size"),f.popups.setContainer("image.size",f.$sc);var t=ve();Ee()&&(t=t.find(".fr-img-wrap"));var n=t.offset().left+t.outerWidth()/2,r=t.offset().top+t.outerHeight();f.popups.show("image.size",n,r,t.outerHeight())}function j(e){if(e)return f.popups.onRefresh("image.size",X),!0;var t={buttons:'<div class="fr-buttons">'+f.button.buildList(f.opts.imageSizeButtons)+"</div>",size_layer:'<div class="fr-image-size-layer fr-layer fr-active" id="fr-image-size-layer-'+f.id+'"><div class="fr-image-group"><div class="fr-input-line"><input id="fr-image-size-layer-width-'+f.id+'" type="text" name="width" placeholder="'+f.language.translate("Width")+'" tabIndex="1"></div><div class="fr-input-line"><input id="fr-image-size-layer-height'+f.id+'" type="text" name="height" placeholder="'+f.language.translate("Height")+'" tabIndex="1"></div></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="imageSetSize" tabIndex="2" role="button">'+f.language.translate("Update")+"</button></div></div>"},n=f.popups.create("image.size",t);return f.$wp&&f.events.$on(f.$wp,"scroll.image-size",function(){p&&f.popups.isVisible("image.size")&&q()}),n}function Q(e,t,n,r){return e.pageX=t,R.call(this,e),e.pageX=e.pageX+n*Math.floor(Math.pow(1.1,r)),y.call(this,e),L.call(this,e),++r}function Z(e){(e=e&&e.get?e:ve())&&e.get&&!1!==f.events.trigger("image.beforeRemove",[e])&&(f.popups.hideAll(),ge(),se(!0),f.undo.canDo()||f.undo.saveStep(),e.get(0)==f.el?e.removeAttr("src"):(e.get(0).parentNode&&"A"==e.get(0).parentNode.tagName?(f.selection.setBefore(e.get(0).parentNode)||f.selection.setAfter(e.get(0).parentNode)||e.parent().after(Te.FE.MARKERS),Te(e.get(0).parentNode).remove()):(f.selection.setBefore(e.get(0))||f.selection.setAfter(e.get(0))||e.after(Te.FE.MARKERS),e.remove()),f.html.fillEmptyBlocks(),f.selection.restore()),f.undo.saveStep())}function J(e){var t=e.which;if(p&&(t==Te.FE.KEYCODE.BACKSPACE||t==Te.FE.KEYCODE.DELETE))return e.preventDefault(),e.stopPropagation(),Z(),!1;if(p&&t==Te.FE.KEYCODE.ESC){var n=p;return se(!0),f.selection.setAfter(n.get(0)),f.selection.restore(),e.preventDefault(),!1}if(p&&(t==Te.FE.KEYCODE.ARROW_LEFT||t==Te.FE.KEYCODE.ARROW_RIGHT)){var r=p.get(0);return se(!0),t==Te.FE.KEYCODE.ARROW_LEFT?f.selection.setBefore(r):f.selection.setAfter(r),f.selection.restore(),e.preventDefault(),!1}return p&&t===Te.FE.KEYCODE.TAB?(e.preventDefault(),e.stopPropagation(),se(!0),!1):p&&t!=Te.FE.KEYCODE.F10&&!f.keys.isBrowserAction(e)?(e.preventDefault(),e.stopPropagation(),!1):void 0}function ee(e){if(e&&"IMG"==e.tagName){if(f.node.hasClass(e,"fr-uploading")||f.node.hasClass(e,"fr-error")?e.parentNode.removeChild(e):f.node.hasClass(e,"fr-draggable")&&e.classList.remove("fr-draggable"),e.parentNode&&e.parentNode.parentNode&&f.node.hasClass(e.parentNode.parentNode,"fr-img-caption")){var t=e.parentNode.parentNode;t.removeAttribute("contenteditable"),t.removeAttribute("draggable"),t.classList.remove("fr-draggable");var n=e.nextSibling;n&&n.removeAttribute("contenteditable")}}else if(e&&e.nodeType==Node.ELEMENT_NODE)for(var r=e.querySelectorAll("img.fr-uploading, img.fr-error, img.fr-draggable"),i=0;i<r.length;i++)ee(r[i])}function te(e){if(!1===f.events.trigger("image.beforePasteUpload",[e]))return!1;p=Te(e),C(),a(),he(),x(),p.one("load",function(){C(),Te(f.popups.get("image.insert").get(0)).find("div.fr-active.fr-error").length<1&&x()});for(var t=Te(e).attr("src").split(","),n=atob(t[1]),r=[],i=0;i<n.length;i++)r.push(n.charCodeAt(i));K([new Blob([new Uint8Array(r)],{type:t[0].replace(/data\:/g,"").replace(/;base64/g,"")})],p)}function ne(){f.opts.imagePaste?f.$el.find("img[data-fr-image-pasted]").each(function(e,r){if(f.opts.imagePasteProcess){var t=f.opts.imageDefaultWidth;t&&"auto"!=t&&(t+=f.opts.imageResizeWithPercent?"%":"px"),Te(r).css("width",t).removeClass("fr-dii fr-dib fr-fir fr-fil"),fe(Te(r),f.opts.imageDefaultDisplay,f.opts.imageDefaultAlign)}if(0===r.src.indexOf("data:"))te(r);else if(0===r.src.indexOf("blob:")||0===r.src.indexOf("http")&&f.opts.imageUploadRemoteUrls&&f.opts.imageCORSProxy){var n=new Image;n.crossOrigin="Anonymous",n.onload=function(){var e,t=f.o_doc.createElement("CANVAS"),n=t.getContext("2d");t.height=this.naturalHeight,t.width=this.naturalWidth,n.drawImage(this,0,0),setTimeout(function(){te(r)},0),e=2e3<this.naturalWidth||1500<this.naturalHeight?"jpeg":"png",r.src=t.toDataURL("image/"+e)},n.src=(0===r.src.indexOf("blob:")?"":f.opts.imageCORSProxy+"/")+r.src}else 0!==r.src.indexOf("http")||0===r.src.indexOf("https://web.archive.org/web/20240606034029/https://mail.google.com/mail")?(f.selection.save(),Te(r).remove(),f.selection.restore()):Te(r).removeAttr("data-fr-image-pasted")}):f.$el.find("img[data-fr-image-pasted]").remove()}function re(e){var t=e.target.result,n=f.opts.imageDefaultWidth;n&&"auto"!=n&&(n+=f.opts.imageResizeWithPercent?"%":"px"),f.undo.saveStep(),f.html.insert('<img data-fr-image-pasted="true" src="'+t+'"'+(n?' style="width: '+n+';"':"")+">");var r=f.$el.find('img[data-fr-image-pasted="true"]');r&&fe(r,f.opts.imageDefaultDisplay,f.opts.imageDefaultAlign),f.events.trigger("paste.after")}function ie(e){if(e&&e.clipboardData&&e.clipboardData.items){var t=null,n=e.clipboardData;if(n.types&&-1!=[].indexOf.call(n.types,"text/rtf")||n.getData("text/rtf"))t=n.items[0].getAsFile();else for(var r=0;r<n.items.length&&!(t=n.items[r].getAsFile());r++);if(t)return i=t,(a=new FileReader).onload=re,a.readAsDataURL(i),!1}var i,a}function ae(e){return e=e.replace(/<img /gi,'<img data-fr-image-pasted="true" ')}function oe(e){if("false"==Te(this).parents("[contenteditable]:not(.fr-element):not(.fr-img-caption):not(body):first").attr("contenteditable"))return!0;if(e&&"touchend"==e.type&&n)return!0;if(e&&f.edit.isDisabled())return e.stopPropagation(),e.preventDefault(),!1;for(var t=0;t<Te.FE.INSTANCES.length;t++)Te.FE.INSTANCES[t]!=f&&Te.FE.INSTANCES[t].events.trigger("image.hideResizer");f.toolbar.disable(),e&&(e.stopPropagation(),e.preventDefault()),f.helpers.isMobile()&&(f.events.disableBlur(),f.$el.blur(),f.events.enableBlur()),f.opts.iframe&&f.size.syncIframe(),p=Te(this),ge(),C(),a(),f.browser.msie?(f.popups.areVisible()&&f.events.disableBlur(),f.win.getSelection&&(f.win.getSelection().removeAllRanges(),f.win.getSelection().addRange(f.doc.createRange()))):f.selection.clear(),f.helpers.isIOS()&&(f.events.disableBlur(),f.$el.blur()),f.button.bulkRefresh(),f.events.trigger("video.hideResizer")}function se(e){p&&(le||!0===e)&&(f.toolbar.enable(),l.removeClass("fr-active"),f.popups.hide("image.edit"),p=null,ce(),d=null,c&&c.hide())}i[r]="Image cannot be loaded from the passed link.",i[h]="No link in upload response.",i[g]="Error during file upload.",i[m]="Parsing response failed.",i[v]="File is too large.",i[E]="Image file type is invalid.",i[7]="Files can be uploaded only to same domain in IE 8 and IE 9.";var le=!(i[8]="Image file is corrupted.");function de(){le=!0}function ce(){le=!1}function fe(e,t,n){!f.opts.htmlUntouched&&f.opts.useClasses?(e.removeClass("fr-fil fr-fir fr-dib fr-dii"),n&&e.addClass("fr-fi"+n[0]),t&&e.addClass("fr-di"+t[0])):"inline"==t?(e.css({display:"inline-block",verticalAlign:"bottom",margin:f.opts.imageDefaultMargin}),"center"==n?e.css({"float":"none",marginBottom:"",marginTop:"",maxWidth:"calc(100% - "+2*f.opts.imageDefaultMargin+"px)",textAlign:"center"}):"left"==n?e.css({"float":"left",marginLeft:0,maxWidth:"calc(100% - "+f.opts.imageDefaultMargin+"px)",textAlign:"left"}):e.css({"float":"right",marginRight:0,maxWidth:"calc(100% - "+f.opts.imageDefaultMargin+"px)",textAlign:"right"})):"block"==t&&(e.css({display:"block","float":"none",verticalAlign:"top",margin:f.opts.imageDefaultMargin+"px auto",textAlign:"center"}),"left"==n?e.css({marginLeft:0,textAlign:"left"}):"right"==n&&e.css({marginRight:0,textAlign:"right"}))}function pe(e){if(void 0===e&&(e=ve()),e){if(e.hasClass("fr-fil"))return"left";if(e.hasClass("fr-fir"))return"right";if(e.hasClass("fr-dib")||e.hasClass("fr-dii"))return"center";var t=e.css("float");if(e.css("float","none"),"block"==e.css("display")){if(e.css("float",""),e.css("float")!=t&&e.css("float",t),0===parseInt(e.css("margin-left"),10))return"left";if(0===parseInt(e.css("margin-right"),10))return"right"}else{if(e.css("float",""),e.css("float")!=t&&e.css("float",t),"left"==e.css("float"))return"left";if("right"==e.css("float"))return"right"}}return"center"}function ue(e){void 0===e&&(e=ve());var t=e.css("float");return e.css("float","none"),"block"==e.css("display")?(e.css("float",""),e.css("float")!=t&&e.css("float",t),"block"):(e.css("float",""),e.css("float")!=t&&e.css("float",t),"inline")}function he(){var e=f.popups.get("image.insert");e||(e=z()),f.popups.isVisible("image.insert")||(w(),f.popups.refresh("image.insert"),f.popups.setContainer("image.insert",f.$sc));var t=ve();Ee()&&(t=t.find(".fr-img-wrap"));var n=t.offset().left+t.outerWidth()/2,r=t.offset().top+t.outerHeight();f.popups.show("image.insert",n,r,t.outerHeight(!0))}function ge(){if(p){f.events.disableBlur(),f.selection.clear();var e=f.doc.createRange();e.selectNode(p.get(0)),f.browser.msie&&e.collapse(!0),f.selection.get().addRange(e),f.events.enableBlur()}}function me(){return p}function ve(){return Ee()?p.parents(".fr-img-caption:first"):p}function Ee(){return!!p&&0<p.parents(".fr-img-caption").length}function be(){_(r)}return{_init:function(){var r;f.events.$on(f.$el,f._mousedown,"IMG"==f.el.tagName?null:'img:not([contenteditable="false"])',function(e){if("false"==Te(this).parents("[contenteditable]:not(.fr-element):not(.fr-img-caption):not(body):first").attr("contenteditable"))return!0;f.helpers.isMobile()||f.selection.clear(),t=!0,f.popups.areVisible()&&f.events.disableBlur(),f.browser.msie&&(f.events.disableBlur(),f.$el.attr("contenteditable",!1)),f.draggable||"touchstart"==e.type||e.preventDefault(),e.stopPropagation()}),f.events.$on(f.$el,f._mousedown,".fr-img-caption .fr-inner",function(e){f.core.hasFocus()||f.events.focus(),e.stopPropagation()}),f.events.$on(f.$el,"paste",".fr-img-caption .fr-inner",function(e){f.toolbar.hide(),e.stopPropagation()}),f.events.$on(f.$el,f._mouseup,"IMG"==f.el.tagName?null:'img:not([contenteditable="false"])',function(e){if("false"==Te(this).parents("[contenteditable]:not(.fr-element):not(.fr-img-caption):not(body):first").attr("contenteditable"))return!0;t&&(t=!1,e.stopPropagation(),f.browser.msie&&(f.$el.attr("contenteditable",!0),f.events.enableBlur()))}),f.events.on("keyup",function(e){if(e.shiftKey&&""===f.selection.text().replace(/\n/g,"")&&f.keys.isArrow(e.which)){var t=f.selection.element(),n=f.selection.endElement();t&&"IMG"==t.tagName?k(Te(t)):n&&"IMG"==n.tagName&&k(Te(n))}},!0),f.events.on("drop",W),f.events.on("element.beforeDrop",H),f.events.on("mousedown window.mousedown",de),f.events.on("window.touchmove",ce),f.events.on("mouseup window.mouseup",function(){if(p)return se(),!1;ce()}),f.events.on("commands.mousedown",function(e){0<e.parents(".fr-toolbar").length&&se()}),f.events.on("image.resizeEnd",function(){f.opts.iframe&&f.size.syncIframe()}),f.events.on("blur image.hideResizer commands.undo commands.redo element.dropped",function(){se(!(t=!1))}),f.events.on("modals.hide",function(){p&&(ge(),f.selection.clear())}),f.events.on("image.resizeEnd",function(){f.win.getSelection&&k(p)}),f.opts.imageAddNewLine&&f.events.on("image.inserted",function(e){var t=e.get(0);for(t.nextSibling&&"BR"===t.nextSibling.tagName&&(t=t.nextSibling);t&&!f.node.isElement(t);)t=f.node.isLastSibling(t)?t.parentNode:null;f.node.isElement(t)&&(f.opts.enter===Te.FE.ENTER_BR?e.after("<br>"):Te(f.node.blockParent(e.get(0))).after("<"+f.html.defaultTag()+"><br></"+f.html.defaultTag()+">"))}),"IMG"==f.el.tagName&&f.$el.addClass("fr-view"),f.events.$on(f.$el,f.helpers.isMobile()&&!f.helpers.isWindowsPhone()?"touchend":"click","IMG"==f.el.tagName?null:'img:not([contenteditable="false"])',oe),f.helpers.isMobile()&&(f.events.$on(f.$el,"touchstart","IMG"==f.el.tagName?null:'img:not([contenteditable="false"])',function(){n=!1}),f.events.$on(f.$el,"touchmove",function(){n=!0})),f.$wp?(f.events.on("window.keydown keydown",J,!0),f.events.on("keyup",function(e){if(p&&e.which==Te.FE.KEYCODE.ENTER)return!1},!0),f.events.$on(f.$el,"keydown",function(){var e=f.selection.element();(e.nodeType===Node.TEXT_NODE||"BR"==e.tagName&&f.node.isLastSibling(e))&&(e=e.parentNode),f.node.hasClass(e,"fr-inner")||(f.node.hasClass(e,"fr-img-caption")||(e=Te(e).parents(".fr-img-caption").get(0)),f.node.hasClass(e,"fr-img-caption")&&(Te(e).after(Te.FE.INVISIBLE_SPACE+Te.FE.MARKERS),f.selection.restore()))})):f.events.$on(f.$win,"keydown",J),f.events.on("toolbar.esc",function(){if(p){if(f.$wp)f.events.disableBlur(),f.events.focus();else{var e=p;se(!0),f.selection.setAfter(e.get(0)),f.selection.restore()}return!1}},!0),f.events.on("toolbar.focusEditor",function(){if(p)return!1},!0),f.events.on("window.cut window.copy",function(e){if(p&&f.popups.isVisible("image.edit")&&!f.popups.get("image.edit").find(":focus").length){var t=ve();Ee()?(t.before(Te.FE.START_MARKER),t.after(Te.FE.END_MARKER),f.selection.restore(),f.paste.saveCopiedText(t.get(0).outerHTML,t.text())):(ge(),f.paste.saveCopiedText(p.get(0).outerHTML,p.attr("alt"))),"copy"==e.type?setTimeout(function(){k(p)}):(se(!0),f.undo.saveStep(),setTimeout(function(){f.undo.saveStep()},0))}},!0),f.browser.msie&&f.events.on("keydown",function(e){if(!f.selection.isCollapsed()||!p)return!0;var t=e.which;t==Te.FE.KEYCODE.C&&f.keys.ctrlKey(e)?f.events.trigger("window.copy"):t==Te.FE.KEYCODE.X&&f.keys.ctrlKey(e)&&f.events.trigger("window.cut")}),f.events.$on(Te(f.o_win),"keydown",function(e){var t=e.which;if(p&&t==Te.FE.KEYCODE.BACKSPACE)return e.preventDefault(),!1}),f.events.$on(f.$win,"keydown",function(e){var t=e.which;p&&p.hasClass("fr-uploading")&&t==Te.FE.KEYCODE.ESC&&p.trigger("abortUpload")}),f.events.on("destroy",function(){p&&p.hasClass("fr-uploading")&&p.trigger("abortUpload")}),f.events.on("paste.before",ie),f.events.on("paste.beforeCleanup",ae),f.events.on("paste.after",ne),f.events.on("html.set",e),f.events.on("html.inserted",e),e(),f.events.on("destroy",function(){s=[]}),f.events.on("html.processGet",ee),f.opts.imageOutputSize&&f.events.on("html.beforeGet",function(){r=f.el.querySelectorAll("img");for(var e=0;e<r.length;e++){var t=r[e].style.width||Te(r[e]).width(),n=r[e].style.height||Te(r[e]).height();t&&r[e].setAttribute("width",(""+t).replace(/px/,"")),n&&r[e].setAttribute("height",(""+n).replace(/px/,""))}}),f.opts.iframe&&f.events.on("image.loaded",f.size.syncIframe),f.$wp&&(A(),f.events.on("contentChanged",A)),f.events.$on(Te(f.o_win),"orientationchange.image",function(){setTimeout(function(){p&&k(p)},100)}),N(!0),z(!0),j(!0),V(!0),f.events.on("node.remove",function(e){if("IMG"==e.get(0).tagName)return Z(e),!1})},showInsertPopup:function(){var e=f.$tb.find('.fr-command[data-cmd="insertImage"]'),t=f.popups.get("image.insert");if(t||(t=z()),w(),!t.hasClass("fr-active"))if(f.popups.refresh("image.insert"),f.popups.setContainer("image.insert",f.$tb),e.is(":visible")){var n=e.offset().left+e.outerWidth()/2,r=f.position.getTbarPupupTop("image.insert",e);f.popups.show("image.insert",n,r,e.outerHeight())}else f.position.forSelection(t),f.popups.show("image.insert")},showLayer:function(e){var t,n,r=f.popups.get("image.insert");if(p||f.opts.toolbarInline){if(p){var i=ve();Ee()&&(i=i.find(".fr-img-wrap")),n=i.offset().top+i.outerHeight(),t=i.offset().left+i.outerWidth()/2}}else{var a=f.$tb.find('.fr-command[data-cmd="insertImage"]');t=a.offset().left+a.outerWidth()/2,n=f.position.getTbarPupupTop("image.insert",a)}!p&&f.opts.toolbarInline&&(n=r.offset().top-f.helpers.getPX(r.css("margin-top")),r.hasClass("fr-above")&&(n+=r.outerHeight())),r.find(".fr-layer").removeClass("fr-active"),r.find(".fr-"+e+"-layer").addClass("fr-active"),f.popups.show("image.insert",t,n,p?p.outerHeight():0),f.accessibility.focusPopup(r)},refreshUploadButton:function(e){f.popups.get("image.insert").find(".fr-image-upload-layer").hasClass("fr-active")&&e.addClass("fr-active").attr("aria-pressed",!0)},refreshByURLButton:function(e){f.popups.get("image.insert").find(".fr-image-by-url-layer").hasClass("fr-active")&&e.addClass("fr-active").attr("aria-pressed",!0)},upload:K,insertByURL:function(){var e=f.popups.get("image.insert").find(".fr-image-by-url-layer input");if(0<e.val().length){x(),O(f.language.translate("Loading image"));var t=e.val().trim();if(f.opts.imageUploadRemoteUrls&&f.opts.imageCORSProxy&&f.opts.imageUpload){var n=new XMLHttpRequest;n.onload=function(){200==this.status?K([new Blob([this.response],{type:this.response.type||"image/png"})],p):_(r)},n.onerror=function(){F(t,!0,[],p)},n.open("GET",f.opts.imageCORSProxy+"/"+t,!0),n.responseType="blob",n.send()}else F(t,!0,[],p);e.val(""),e.blur()}},align:function(e){var t=ve();t.removeClass("fr-fir fr-fil"),!f.opts.htmlUntouched&&f.opts.useClasses?"left"==e?t.addClass("fr-fil"):"right"==e&&t.addClass("fr-fir"):fe(t,ue(),e),ge(),C(),a(),f.selection.clear()},refreshAlign:function(e){p&&e.find("> *:first").replaceWith(f.icon.create("image-align-"+pe()))},refreshAlignOnShow:function(e,t){p&&t.find('.fr-command[data-param1="'+pe()+'"]').addClass("fr-active").attr("aria-selected",!0)},display:function(e){var t=ve();t.removeClass("fr-dii fr-dib"),!f.opts.htmlUntouched&&f.opts.useClasses?"inline"==e?t.addClass("fr-dii"):"block"==e&&t.addClass("fr-dib"):fe(t,e,pe()),ge(),C(),a(),f.selection.clear()},refreshDisplayOnShow:function(e,t){p&&t.find('.fr-command[data-param1="'+ue()+'"]').addClass("fr-active").attr("aria-selected",!0)},replace:he,back:function(){p?(f.events.disableBlur(),Te(".fr-popup input:focus").blur(),k(p)):(f.events.disableBlur(),f.selection.restore(),f.events.enableBlur(),f.popups.hide("image.insert"),f.toolbar.showInline())},get:me,getEl:ve,insert:F,showProgressBar:x,remove:Z,hideProgressBar:w,applyStyle:function(e,t,n){if(void 0===t&&(t=f.opts.imageStyles),void 0===n&&(n=f.opts.imageMultipleStyles),!p)return!1;var r=ve();if(!n){var i=Object.keys(t);i.splice(i.indexOf(e),1),r.removeClass(i.join(" "))}"object"==typeof t[e]?(r.removeAttr("style"),r.css(t[e].style)):r.toggleClass(e),k(p)},showAltPopup:G,showSizePopup:q,setAlt:function(e){if(p){var t=f.popups.get("image.alt");p.attr("alt",e||t.find("input").val()||""),t.find("input:focus").blur(),k(p)}},setSize:function(e,t){if(p){var n=f.popups.get("image.size");e=e||n.find('input[name="width"]').val()||"",t=t||n.find('input[name="height"]').val()||"";var r=/^[\d]+((px)|%)*$/g;p.removeAttr("width").removeAttr("height"),e.match(r)?p.css("width",e):p.css("width",""),t.match(r)?p.css("height",t):p.css("height",""),Ee()&&(p.parents(".fr-img-caption").removeAttr("width").removeAttr("height"),e.match(r)?p.parents(".fr-img-caption").css("width",e):p.parents(".fr-img-caption").css("width",""),t.match(r)?p.parents(".fr-img-caption").css("height",t):p.parents(".fr-img-caption").css("height","")),n&&n.find("input:focus").blur(),k(p)}},toggleCaption:function(){var e,t=p.parentsUntil(f.$el,"li");if(p&&!Ee()){var n,r;e=p,f.browser.safari&&t.length&&(t[0].style.listStylePosition="initial"),p.parent().is("a")&&(e=p.parent()),e.attr("style")&&(r=-1<(n=e.attr("style").split(":")).indexOf("width")?n[n.indexOf("width")+1].replace(";",""):"");var i=f.opts.imageResizeWithPercent?(-1<r.indexOf("px")?null:r)||"100%":p.width()+"px";e.wrap("<span "+(f.browser.mozilla?"":'contenteditable="false"')+'class="fr-img-caption '+p.attr("class")+'" style="'+(f.opts.useClasses?"":e.attr("style"))+'" draggable="false"></span>'),e.wrap('<span class="fr-img-wrap"></span>'),p.after('<span class="fr-inner"'+(f.browser.mozilla?"":' contenteditable="true"')+">"+Te.FE.START_MARKER+f.language.translate("Image Caption")+Te.FE.END_MARKER+"</span>"),p.removeAttr("class").removeAttr("style").removeAttr("width"),p.parents(".fr-img-caption").css("width",i),se(!0),f.selection.restore()}else f.browser.safari&&t.length&&(t[0].style.listStylePosition=""),e=ve(),p.insertAfter(e),p.attr("class",e.attr("class").replace("fr-img-caption","")).attr("style",e.attr("style")),e.remove(),k(p)},hasCaption:Ee,exitEdit:se,edit:k}},Te.FE.DefineIcon("insertImage",{NAME:"image"}),Te.FE.RegisterShortcut(Te.FE.KEYCODE.P,"insertImage",null,"P"),Te.FE.RegisterCommand("insertImage",{title:"Insert Image",undo:!1,focus:!0,refreshAfterCallback:!1,popup:!0,callback:function(){this.popups.isVisible("image.insert")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("image.insert")):this.image.showInsertPopup()},plugin:"image"}),Te.FE.DefineIcon("imageUpload",{NAME:"upload"}),Te.FE.RegisterCommand("imageUpload",{title:"Upload Image",undo:!1,focus:!1,toggle:!0,callback:function(){this.image.showLayer("image-upload")},refresh:function(e){this.image.refreshUploadButton(e)}}),Te.FE.DefineIcon("imageByURL",{NAME:"link"}),Te.FE.RegisterCommand("imageByURL",{title:"By URL",undo:!1,focus:!1,toggle:!0,callback:function(){this.image.showLayer("image-by-url")},refresh:function(e){this.image.refreshByURLButton(e)}}),Te.FE.RegisterCommand("imageInsertByURL",{title:"Insert Image",undo:!0,refreshAfterCallback:!1,callback:function(){this.image.insertByURL()},refresh:function(e){this.image.get()?e.text(this.language.translate("Replace")):e.text(this.language.translate("Insert"))}}),Te.FE.DefineIcon("imageDisplay",{NAME:"star"}),Te.FE.RegisterCommand("imageDisplay",{title:"Display",type:"dropdown",options:{inline:"Inline",block:"Break Text"},callback:function(e,t){this.image.display(t)},refresh:function(e){this.opts.imageTextNear||e.addClass("fr-hidden")},refreshOnShow:function(e,t){this.image.refreshDisplayOnShow(e,t)}}),Te.FE.DefineIcon("image-align",{NAME:"align-left"}),Te.FE.DefineIcon("image-align-left",{NAME:"align-left"}),Te.FE.DefineIcon("image-align-right",{NAME:"align-right"}),Te.FE.DefineIcon("image-align-center",{NAME:"align-justify"}),Te.FE.DefineIcon("imageAlign",{NAME:"align-justify"}),Te.FE.RegisterCommand("imageAlign",{type:"dropdown",title:"Align",options:{left:"Align Left",center:"None",right:"Align Right"},html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=Te.FE.COMMANDS.imageAlign.options;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command fr-title" tabIndex="-1" role="option" data-cmd="imageAlign" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.icon.create("image-align-"+n)+'<span class="fr-sr-only">'+this.language.translate(t[n])+"</span></a></li>");return e+="</ul>"},callback:function(e,t){this.image.align(t)},refresh:function(e){this.image.refreshAlign(e)},refreshOnShow:function(e,t){this.image.refreshAlignOnShow(e,t)}}),Te.FE.DefineIcon("imageReplace",{NAME:"exchange",FA5NAME:"exchange-alt"}),Te.FE.RegisterCommand("imageReplace",{title:"Replace",undo:!1,focus:!1,popup:!0,refreshAfterCallback:!1,callback:function(){this.image.replace()}}),Te.FE.DefineIcon("imageRemove",{NAME:"trash"}),Te.FE.RegisterCommand("imageRemove",{title:"Remove",callback:function(){this.image.remove()}}),Te.FE.DefineIcon("imageBack",{NAME:"arrow-left"}),Te.FE.RegisterCommand("imageBack",{title:"Back",undo:!1,focus:!1,back:!0,callback:function(){this.image.back()},refresh:function(e){this.image.get()||this.opts.toolbarInline?(e.removeClass("fr-hidden"),e.next(".fr-separator").removeClass("fr-hidden")):(e.addClass("fr-hidden"),e.next(".fr-separator").addClass("fr-hidden"))}}),Te.FE.RegisterCommand("imageDismissError",{title:"OK",undo:!1,callback:function(){this.image.hideProgressBar(!0)}}),Te.FE.DefineIcon("imageStyle",{NAME:"magic"}),Te.FE.RegisterCommand("imageStyle",{title:"Style",type:"dropdown",html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.imageStyles;for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];"object"==typeof r&&(r=r.title),e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="imageStyle" data-param1="'+n+'">'+this.language.translate(r)+"</a></li>"}return e+="</ul>"},callback:function(e,t){this.image.applyStyle(t)},refreshOnShow:function(e,t){var n=this.image.getEl();n&&t.find(".fr-command").each(function(){var e=Te(this).data("param1"),t=n.hasClass(e);Te(this).toggleClass("fr-active",t).attr("aria-selected",t)})}}),Te.FE.DefineIcon("imageAlt",{NAME:"info"}),Te.FE.RegisterCommand("imageAlt",{undo:!1,focus:!1,popup:!0,title:"Alternative Text",callback:function(){this.image.showAltPopup()}}),Te.FE.RegisterCommand("imageSetAlt",{undo:!0,focus:!1,title:"Update",refreshAfterCallback:!1,callback:function(){this.image.setAlt()}}),Te.FE.DefineIcon("imageSize",{NAME:"arrows-alt"}),Te.FE.RegisterCommand("imageSize",{undo:!1,focus:!1,popup:!0,title:"Change Size",callback:function(){this.image.showSizePopup()}}),Te.FE.RegisterCommand("imageSetSize",{undo:!0,focus:!1,title:"Update",refreshAfterCallback:!1,callback:function(){this.image.setSize()}}),Te.FE.DefineIcon("imageCaption",{NAME:"commenting",FA5NAME:"comment-alt"}),Te.FE.RegisterCommand("imageCaption",{undo:!0,focus:!1,title:"Image Caption",refreshAfterCallback:!0,callback:function(){this.image.toggleCaption()},refresh:function(e){this.image.get()&&e.toggleClass("fr-active",this.image.hasCaption())}}),Te.extend(Te.FE.DEFAULTS,{imageManagerLoadURL:"https://web.archive.org/web/20240606034029/https://i.froala.com/load-files",imageManagerLoadMethod:"get",imageManagerLoadParams:{},imageManagerPreloader:null,imageManagerDeleteURL:"",imageManagerDeleteMethod:"post",imageManagerDeleteParams:{},imageManagerPageSize:12,imageManagerScrollOffset:20,imageManagerToggleTags:!0}),Te.FE.PLUGINS.imageManager=function(s){var l,d,r,i,a,c,o,f,p,u,h,g="image_manager",e=10,m=11,v=12,E=13,b=14,T=15,A=21,C=22,n={};function S(){var e=Te(window).outerWidth();return e<768?2:e<1200?3:4}function R(){a.empty();for(var e=0;e<h;e++)a.append('<div class="fr-list-column"></div>')}function y(){if(p<o.length&&(a.outerHeight()<=r.outerHeight()+s.opts.imageManagerScrollOffset||r.scrollTop()+s.opts.imageManagerScrollOffset>a.outerHeight()-r.outerHeight())){f++;for(var e=s.opts.imageManagerPageSize*(f-1);e<Math.min(o.length,s.opts.imageManagerPageSize*f);e++)t(o[e])}}function t(i){var a=new Image,o=Te('<div class="fr-image-container fr-empty fr-image-'+u+++'" data-loading="'+s.language.translate("Loading")+'.." data-deleting="'+s.language.translate("Deleting")+'..">');x(!1),a.onload=function(){o.height(Math.floor(o.width()/a.width*a.height));var n=Te("<img/>");if(i.thumb)n.attr("src",i.thumb);else{if(k(b,i),!i.url)return k(T,i),!1;n.attr("src",i.url)}if(i.url&&n.attr("data-url",i.url),i.tag)if(d.find(".fr-modal-more.fr-not-available").removeClass("fr-not-available"),d.find(".fr-modal-tags").show(),0<=i.tag.indexOf(",")){for(var e=i.tag.split(","),t=0;t<e.length;t++)e[t]=e[t].trim(),0===c.find('a[title="'+e[t]+'"]').length&&c.append('<a role="button" title="'+e[t]+'">'+e[t]+"</a>");n.attr("data-tag",e.join())}else 0===c.find('a[title="'+i.tag.trim()+'"]').length&&c.append('<a role="button" title="'+i.tag.trim()+'">'+i.tag.trim()+"</a>"),n.attr("data-tag",i.tag.trim());for(var r in i.name&&n.attr("alt",i.name),i)i.hasOwnProperty(r)&&"thumb"!=r&&"url"!=r&&"tag"!=r&&n.attr("data-"+r,i[r]);o.append(n).append(Te(s.icon.create("imageManagerDelete")).addClass("fr-delete-img").attr("title",s.language.translate("Delete"))).append(Te(s.icon.create("imageManagerInsert")).addClass("fr-insert-img").attr("title",s.language.translate("Insert"))),c.find(".fr-selected-tag").each(function(e,t){$(n,t.text)||o.hide()}),n.on("load",function(){o.removeClass("fr-empty"),o.height("auto"),p++,N(_(parseInt(n.parent().attr("class").match(/fr-image-(\d+)/)[1],10)+1)),x(!1),p%s.opts.imageManagerPageSize==0&&y()}),s.events.trigger("imageManager.imageLoaded",[n])},a.onerror=function(){p++,o.remove(),N(_(parseInt(o.attr("class").match(/fr-image-(\d+)/)[1],10)+1)),k(e,i),p%s.opts.imageManagerPageSize==0&&y()},a.src=i.thumb||i.url,L().append(o)}function L(){var r,i;return a.find(".fr-list-column").each(function(e,t){var n=Te(t);0===e?(i=n.outerHeight(),r=n):n.outerHeight()<i&&(i=n.outerHeight(),r=n)}),r}function _(e){e===undefined&&(e=0);for(var t=[],n=u-1;e<=n;n--){var r=a.find(".fr-image-"+n);r.length&&(t.push(r),Te('<div id="fr-image-hidden-container">').append(r),a.find(".fr-image-"+n).remove())}return t}function N(e){for(var t=e.length-1;0<=t;t--)L().append(e[t])}function x(e){if(e===undefined&&(e=!0),!l.is(":visible"))return!0;var t=S();if(t!=h){h=t;var n=_();R(),N(n)}s.modals.resize(g),e&&y()}function w(e){var t={},n=e.data();for(var r in n)Te(n).attr(r)&&"url"!=r&&"tag"!=r&&(t[r]=n[r]);return t}function O(e){var t=Te(e.currentTarget).siblings("img"),n=l.data("instance")||s,r=l.data("current-image");if(s.modals.hide(g),n.image.showProgressBar(),r)r.data("fr-old-src",r.attr("src")),r.trigger("click");else{n.events.focus(!0),n.selection.restore();var i=n.position.getBoundingRect(),a=i.left+i.width/2+Te(s.doc).scrollLeft(),o=i.top+i.height+Te(s.doc).scrollTop();n.popups.setContainer("image.insert",s.$sc),n.popups.show("image.insert",a,o)}n.image.insert(t.data("url"),!1,w(t),r)}function I(e){var n=Te(e.currentTarget).siblings("img"),t=s.language.translate("Are you sure? Image will be deleted.");confirm(t)&&(s.opts.imageManagerDeleteURL?!1!==s.events.trigger("imageManager.beforeDeleteImage",[n])&&(n.parent().addClass("fr-image-deleting"),Te.ajax({method:s.opts.imageManagerDeleteMethod,url:s.opts.imageManagerDeleteURL,data:Te.extend(Te.extend({src:n.attr("src")},w(n)),s.opts.imageManagerDeleteParams),crossDomain:s.opts.requestWithCORS,xhrFields:{withCredentials:s.opts.requestWithCredentials},headers:s.opts.requestHeaders}).done(function(e){s.events.trigger("imageManager.imageDeleted",[e]);var t=_(parseInt(n.parent().attr("class").match(/fr-image-(\d+)/)[1],10)+1);n.parent().remove(),N(t),l.find("#fr-modal-tags > a").each(function(){0===l.find('#fr-image-list [data-tag*="'+Te(this).text()+'"]').length&&Te(this).removeClass("fr-selected-tag").hide()}),F(),x(!0)}).fail(function(e){k(A,e.response||e.responseText)})):k(C))}function k(e,t){10<=e&&e<20?i.hide():20<=e&&e<30&&Te(".fr-image-deleting").removeClass("fr-image-deleting"),s.events.trigger("imageManager.error",[{code:e,message:n[e]},t])}function D(){var e=d.find(".fr-modal-head-line").outerHeight(),t=c.outerHeight();d.toggleClass("fr-show-tags"),d.hasClass("fr-show-tags")?(d.css("height",e+t),c.find("a").css("opacity",1)):(d.css("height",e),c.find("a").css("opacity",0))}function F(){var e=c.find(".fr-selected-tag");0<e.length?(a.find("img").parent().show(),e.each(function(e,r){a.find("img").each(function(e,t){var n=Te(t);$(n,r.text)||n.parent().hide()})})):a.find("img").parent().show(),N(_()),y()}function M(e){e.preventDefault();var t=Te(e.currentTarget);t.toggleClass("fr-selected-tag"),s.opts.imageManagerToggleTags&&t.siblings("a").removeClass("fr-selected-tag"),F()}function $(e,t){for(var n=(e.attr("data-tag")||"").split(","),r=0;r<n.length;r++)if(n[r]==t)return!0;return!1}return n[e]="Image cannot be loaded from the passed link.",n[m]="Error during load images request.",n[v]="Missing imageManagerLoadURL option.",n[E]="Parsing load response failed.",n[b]="Missing image thumb.",n[T]="Missing image URL.",n[A]="Error during delete image request.",n[C]="Missing imageManagerDeleteURL option.",{require:["image"],_init:function(){if(!s.$wp&&"IMG"!=s.el.tagName)return!1},show:function(){if(!l){var e,t='<div class="fr-modal-head-line"><i class="fa fa-bars fr-modal-more fr-not-available" id="fr-modal-more-'+s.sid+'" title="'+s.language.translate("Tags")+'"></i><h4 data-text="true">'+s.language.translate("Manage Images")+"</h4></div>";t+='<div class="fr-modal-tags" id="fr-modal-tags"></div>',e=s.opts.imageManagerPreloader?'<img class="fr-preloader" id="fr-preloader" alt="'+s.language.translate("Loading")+'.." src="'+s.opts.imageManagerPreloader+'" style="display: none;">':'<span class="fr-preloader" id="fr-preloader" style="display: none;">'+s.language.translate("Loading")+"</span>",e+='<div class="fr-image-list" id="fr-image-list"></div>';var n=s.modals.create(g,t,e);l=n.$modal,d=n.$head,r=n.$body}l.data("current-image",s.image.get()),s.modals.show(g),i||(i=l.find("#fr-preloader"),a=l.find("#fr-image-list"),c=l.find("#fr-modal-tags"),h=S(),R(),d.css("height",d.find(".fr-modal-head-line").outerHeight()),s.events.$on(Te(s.o_win),"resize",function(){x(!!o)}),s.helpers.isMobile()&&(s.events.bindClick(a,"div.fr-image-container",function(e){l.find(".fr-mobile-selected").removeClass("fr-mobile-selected"),Te(e.currentTarget).addClass("fr-mobile-selected")}),l.on(s._mousedown,function(){l.find(".fr-mobile-selected").removeClass("fr-mobile-selected")})),s.events.bindClick(a,".fr-insert-img",O),s.events.bindClick(a,".fr-delete-img",I),l.on(s._mousedown+" "+s._mouseup,function(e){e.stopPropagation()}),l.on(s._mousedown,"*",function(){s.events.disableBlur()}),r.on("scroll",y),s.events.bindClick(l,"#fr-modal-more-"+s.sid,D),s.events.bindClick(c,"a",M)),i.show(),a.find(".fr-list-column").empty(),s.opts.imageManagerLoadURL?Te.ajax({url:s.opts.imageManagerLoadURL,method:s.opts.imageManagerLoadMethod,data:s.opts.imageManagerLoadParams,dataType:"json",crossDomain:s.opts.requestWithCORS,xhrFields:{withCredentials:s.opts.requestWithCredentials},headers:s.opts.requestHeaders}).done(function(e,t,n){s.events.trigger("imageManager.imagesLoaded",[e]),function(e,t){try{a.find(".fr-list-column").empty(),u=p=f=0,o=e,y()}catch(n){k(E,t)}}(e,n.response),i.hide()}).fail(function(){var e=this.xhr();k(m,e.response||e.responseText)}):k(v)},hide:function(){s.modals.hide(g)}}},!Te.FE.PLUGINS.image)throw new Error("Image manager plugin requires image plugin.");Te.FE.DEFAULTS.imageInsertButtons.push("imageManager"),Te.FE.RegisterCommand("imageManager",{title:"Browse",undo:!1,focus:!1,modal:!0,callback:function(){this.imageManager.show()},plugin:"imageManager"}),Te.FE.DefineIcon("imageManager",{NAME:"folder"}),Te.FE.DefineIcon("imageManagerInsert",{NAME:"plus"}),Te.FE.DefineIcon("imageManagerDelete",{NAME:"trash"}),Te.extend(Te.FE.DEFAULTS,{inlineClasses:{"fr-class-code":"Code","fr-class-highlighted":"Highlighted","fr-class-transparency":"Transparent"}}),Te.FE.PLUGINS.inlineClass=function(n){return{apply:function(e){n.format.toggle("span",{"class":e})},refreshOnShow:function(e,t){t.find(".fr-command").each(function(){var e=Te(this).data("param1"),t=n.format.is("span",{"class":e});Te(this).toggleClass("fr-active",t).attr("aria-selected",t)})}}},Te.FE.RegisterCommand("inlineClass",{type:"dropdown",title:"Inline Class",html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.inlineClasses;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="inlineClass" data-param1="'+n+'" title="'+t[n]+'">'+t[n]+"</a></li>");return e+="</ul>"},callback:function(e,t){this.inlineClass.apply(t)},refreshOnShow:function(e,t){this.inlineClass.refreshOnShow(e,t)},plugin:"inlineClass"}),Te.FE.DefineIcon("inlineClass",{NAME:"tag"}),Te.extend(Te.FE.DEFAULTS,{inlineStyles:{"Big Red":"font-size: 20px; color: red;","Small Blue":"font-size: 14px; color: blue;"}}),Te.FE.PLUGINS.inlineStyle=function(i){return{apply:function(e){for(var t=e.split(";"),n=0;n<t.length;n++){var r=t[n].split(":");t[n].length&&2==r.length&&i.format.applyStyle(r[0].trim(),r[1].trim())}}}},Te.FE.RegisterCommand("inlineStyle",{type:"dropdown",html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.inlineStyles;for(var n in t){if(t.hasOwnProperty(n))e+='<li role="presentation"><span style="'+(t[n]+(-1===t[n].indexOf("display:block;")?" display:block;":""))+'" role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="inlineStyle" data-param1="'+t[n]+'" title="'+this.language.translate(n)+'">'+this.language.translate(n)+"</a></span></li>"}return e+="</ul>"},title:"Inline Style",callback:function(e,t){this.inlineStyle.apply(t)},plugin:"inlineStyle"}),Te.FE.DefineIcon("inlineStyle",{NAME:"paint-brush"}),Te.extend(Te.FE.DEFAULTS,{lineBreakerTags:["table","hr","form","dl","span.fr-video",".fr-embedly","img"],lineBreakerOffset:15,lineBreakerHorizontalOffset:10}),Te.FE.PLUGINS.lineBreaker=function(p){var u,t,i;function s(e,t){var n,r,i,a,o,s,l,d;if(null==e)o=(a=t.parent()).offset().top,n=(l=t.offset().top)-Math.min((l-o)/2,p.opts.lineBreakerOffset),i=a.outerWidth(),r=a.offset().left;else if(null==t)(s=(a=e.parent()).offset().top+a.outerHeight())<(d=e.offset().top+e.outerHeight())&&(s=(a=Te(a).parent()).offset().top+a.outerHeight()),n=d+Math.min(Math.abs(s-d)/2,p.opts.lineBreakerOffset),i=a.outerWidth(),r=a.offset().left;else{a=e.parent();var c=e.offset().top+e.height(),f=t.offset().top;if(f<c)return!1;n=(c+f)/2,i=a.outerWidth(),r=a.offset().left}p.opts.iframe&&(r+=p.$iframe.offset().left-p.helpers.scrollLeft(),n+=p.$iframe.offset().top-p.helpers.scrollTop()),p.$box.append(u),u.css("top",n-p.win.pageYOffset),u.css("left",r-p.win.pageXOffset),u.css("width",i),u.data("tag1",e),u.data("tag2",t),u.addClass("fr-visible").data("instance",p)}function l(e){if(e){var t=Te(e);if(0===p.$el.find(t).length)return null;if(e.nodeType!=Node.TEXT_NODE&&t.is(p.opts.lineBreakerTags.join(",")))return t;if(0<t.parents(p.opts.lineBreakerTags.join(",")).length)return e=t.parents(p.opts.lineBreakerTags.join(",")).get(0),0!==p.$el.find(e).length&&Te(e).is(p.opts.lineBreakerTags.join(","))?Te(e):null}return null}function a(e,t){var n=p.doc.elementFromPoint(e,t);return n&&!Te(n).closest(".fr-line-breaker").length&&!p.node.isElement(n)&&n!=p.$wp.get(0)&&function(e){if("undefined"!=typeof e.inFroalaWrapper)return e.inFroalaWrapper;for(var t=e;e.parentNode&&e.parentNode!==p.$wp.get(0);)e=e.parentNode;return t.inFroalaWrapper=e.parentNode==p.$wp.get(0),t.inFroalaWrapper}(n)?n:null}function o(e,t,n){for(var r=n,i=null;r<=p.opts.lineBreakerOffset&&!i;)(i=a(e,t-r))||(i=a(e,t+r)),r+=n;return i}function d(e,t,n){for(var r=null,i=100;!r&&e>p.$box.offset().left&&e<p.$box.offset().left+p.$box.outerWidth()&&0<i;)(r=a(e,t))||(r=o(e,t,5)),"left"==n?e-=p.opts.lineBreakerHorizontalOffset:e+=p.opts.lineBreakerHorizontalOffset,i-=p.opts.lineBreakerHorizontalOffset;return r}function n(e){var t=i=null,n=null,r=p.doc.elementFromPoint(e.pageX-p.win.pageXOffset,e.pageY-p.win.pageYOffset);r&&("HTML"==r.tagName||"BODY"==r.tagName||p.node.isElement(r)||0<=(r.getAttribute("class")||"").indexOf("fr-line-breaker"))?((n=o(e.pageX-p.win.pageXOffset,e.pageY-p.win.pageYOffset,1))||(n=d(e.pageX-p.win.pageXOffset-p.opts.lineBreakerHorizontalOffset,e.pageY-p.win.pageYOffset,"left")),n||(n=d(e.pageX-p.win.pageXOffset+p.opts.lineBreakerHorizontalOffset,e.pageY-p.win.pageYOffset,"right")),t=l(n)):t=l(r),t?function(e,t){var n,r,i=e.offset().top,a=e.offset().top+e.outerHeight();if(Math.abs(a-t)<=p.opts.lineBreakerOffset||Math.abs(t-i)<=p.opts.lineBreakerOffset)if(Math.abs(a-t)<Math.abs(t-i)){for(var o=(r=e.get(0)).nextSibling;o&&o.nodeType==Node.TEXT_NODE&&0===o.textContent.length;)o=o.nextSibling;if(!o)return s(e,null);if(n=l(o))return s(e,n)}else{if(!(r=e.get(0)).previousSibling)return s(null,e);if(n=l(r.previousSibling))return s(n,e)}u.removeClass("fr-visible").removeData("instance")}(t,e.pageY):p.core.sameInstance(u)&&u.removeClass("fr-visible").removeData("instance")}function e(e){return!(u.hasClass("fr-visible")&&!p.core.sameInstance(u))&&(p.popups.areVisible()||p.el.querySelector(".fr-selected-cell")?(u.removeClass("fr-visible"),!0):void(!1!==t||p.edit.isDisabled()||(i&&clearTimeout(i),i=setTimeout(n,30,e))))}function r(){i&&clearTimeout(i),u&&u.hasClass("fr-visible")&&u.removeClass("fr-visible").removeData("instance")}function c(){t=!0,r()}function f(){t=!1}function h(e){e.preventDefault();var t=u.data("instance")||p;u.removeClass("fr-visible").removeData("instance");var n=u.data("tag1"),r=u.data("tag2"),i=p.html.defaultTag();null==n?i&&"TD"!=r.parent().get(0).tagName&&0===r.parents(i).length?r.before("<"+i+">"+Te.FE.MARKERS+"<br></"+i+">"):r.before(Te.FE.MARKERS+"<br>"):i&&"TD"!=n.parent().get(0).tagName&&0===n.parents(i).length?n.after("<"+i+">"+Te.FE.MARKERS+"<br></"+i+">"):n.after(Te.FE.MARKERS+"<br>"),t.selection.restore(),p.toolbar.enable()}return{_init:function(){if(!p.$wp)return!1;p.shared.$line_breaker||(p.shared.$line_breaker=Te('<div class="fr-line-breaker"><a class="fr-floating-btn" role="button" tabIndex="-1" title="'+p.language.translate("Break")+'"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="21" y="11" width="2" height="8"/><rect x="14" y="17" width="7" height="2"/><path d="M14.000,14.000 L14.000,22.013 L9.000,18.031 L14.000,14.000 Z"/></svg></a></div>')),u=p.shared.$line_breaker,p.events.on("shared.destroy",function(){u.html("").removeData().remove(),u=null},!0),p.events.on("destroy",function(){u.removeData("instance").removeClass("fr-visible").appendTo("body:first"),clearTimeout(i)},!0),p.events.$on(u,"mousemove",function(e){e.stopPropagation()},!0),p.events.bindClick(u,"a",h),t=!1,p.events.$on(p.$win,"mousemove",e),p.events.$on(Te(p.win),"scroll",r),p.events.on("popups.show.table.edit",r),p.events.on("commands.after",r),p.events.$on(Te(p.win),"mousedown",c),p.events.$on(Te(p.win),"mouseup",f)}}},Te.extend(Te.FE.DEFAULTS,{lineHeights:{Default:"",Single:"1",1.15:"1.15",1.5:"1.5",Double:"2"}}),Te.FE.PLUGINS.lineHeight=function(i){return{_init:function(){},apply:function(e){i.selection.save(),i.html.wrap(!0,!0,!0,!0),i.selection.restore();var t=i.selection.blocks();t.length&&Te(t[0]).parent().is("td")&&i.format.applyStyle("line-height",e.toString()),i.selection.save();for(var n=0;n<t.length;n++)Te(t[n]).css("line-height",e),""===Te(t[n]).attr("style")&&Te(t[n]).removeAttr("style");i.html.unwrap(),i.selection.restore()},refreshOnShow:function(e,t){var n=i.selection.blocks();if(n.length){var r=Te(n[0]);t.find(".fr-command").each(function(){var e=Te(this).data("param1"),t=0<=(r.attr("style")||"").indexOf("line-height: "+e+";");Te(this).toggleClass("fr-active",t).attr("aria-selected",t)})}}}},Te.FE.RegisterCommand("lineHeight",{type:"dropdown",html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.lineHeights;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command '+n+'" tabIndex="-1" role="option" data-cmd="lineHeight" data-param1="'+t[n]+'" title="'+this.language.translate(n)+'">'+this.language.translate(n)+"</a></li>");return e+="</ul>"},title:"Line Height",callback:function(e,t){this.lineHeight.apply(t)},refreshOnShow:function(e,t){this.lineHeight.refreshOnShow(e,t)},plugin:"lineHeight"}),Te.FE.DefineIcon("lineHeight",{NAME:"arrows-v",FA5NAME:"arrows-alt-v"}),Te.extend(Te.FE.POPUP_TEMPLATES,{"link.edit":"[_BUTTONS_]","link.insert":"[_BUTTONS_][_INPUT_LAYER_]"}),Te.extend(Te.FE.DEFAULTS,{linkEditButtons:["linkOpen","linkStyle","linkEdit","linkRemove"],linkInsertButtons:["linkBack","|","linkList"],linkAttributes:{},linkAutoPrefix:"http://",linkStyles:{"fr-green":"Green","fr-strong":"Thick"},linkMultipleStyles:!0,linkConvertEmailAddress:!0,linkAlwaysBlank:!1,linkAlwaysNoFollow:!1,linkNoOpener:!0,linkNoReferrer:!0,linkList:[{text:"Froala",href:"https://web.archive.org/web/20240606034029/https://froala.com",target:"_blank"},{text:"Google",href:"https://web.archive.org/web/20240606034029/https://google.com",target:"_blank"},{displayText:"Facebook",href:"https://web.archive.org/web/20240606034029/https://facebook.com"}],linkText:!0}),Te.FE.PLUGINS.link=function(f){function p(){var e=f.image?f.image.get():null;if(!e&&f.$wp){var t=f.selection.ranges(0).commonAncestorContainer;try{t&&(t.contains&&t.contains(f.el)||!f.el.contains(t)||f.el==t)&&(t=null)}catch(i){t=null}if(t&&"A"===t.tagName)return t;var n=f.selection.element(),r=f.selection.endElement();"A"==n.tagName||f.node.isElement(n)||(n=Te(n).parentsUntil(f.$el,"a:first").get(0)),"A"==r.tagName||f.node.isElement(r)||(r=Te(r).parentsUntil(f.$el,"a:first").get(0));try{r&&(r.contains&&r.contains(f.el)||!f.el.contains(r)||f.el==r)&&(r=null)}catch(i){r=null}try{n&&(n.contains&&n.contains(f.el)||!f.el.contains(n)||f.el==n)&&(n=null)}catch(i){n=null}return r&&r==n&&"A"==r.tagName?(f.browser.msie||f.helpers.isMobile())&&(f.selection.info(n).atEnd||f.selection.info(n).atStart)?null:n:null}return"A"==f.el.tagName?f.el:e&&e.get(0).parentNode&&"A"==e.get(0).parentNode.tagName?e.get(0).parentNode:void 0}function u(){var e,t,n,r,i=f.image?f.image.get():null,a=[];if(i)"A"==i.get(0).parentNode.tagName&&a.push(i.get(0).parentNode);else if(f.win.getSelection){var o=f.win.getSelection();if(o.getRangeAt&&o.rangeCount){r=f.doc.createRange();for(var s=0;s<o.rangeCount;++s)if((t=(e=o.getRangeAt(s)).commonAncestorContainer)&&1!=t.nodeType&&(t=t.parentNode),t&&"a"==t.nodeName.toLowerCase())a.push(t);else{n=t.getElementsByTagName("a");for(var l=0;l<n.length;++l)r.selectNodeContents(n[l]),r.compareBoundaryPoints(e.END_TO_START,e)<1&&-1<r.compareBoundaryPoints(e.START_TO_END,e)&&a.push(n[l])}}}else if(f.doc.selection&&"Control"!=f.doc.selection.type)if("a"==(t=(e=f.doc.selection.createRange()).parentElement()).nodeName.toLowerCase())a.push(t);else{n=t.getElementsByTagName("a"),r=f.doc.body.createTextRange();for(var d=0;d<n.length;++d)r.moveToElementText(n[d]),-1<r.compareEndPoints("StartToEnd",e)&&r.compareEndPoints("EndToStart",e)<1&&a.push(n[d])}return a}function h(i){if(f.core.hasFocus()){if(o(),i&&"keyup"===i.type&&(i.altKey||i.which==Te.FE.KEYCODE.ALT))return!0;setTimeout(function(){if(!i||i&&(1==i.which||"mouseup"!=i.type)){var e=p(),t=f.image?f.image.get():null;if(e&&!t){if(f.image){var n=f.node.contents(e);if(1==n.length&&"IMG"==n[0].tagName){var r=f.selection.ranges(0);return 0===r.startOffset&&0===r.endOffset?Te(e).before(Te.FE.MARKERS):Te(e).after(Te.FE.MARKERS),f.selection.restore(),!1}}i&&i.stopPropagation(),a(e)}}},f.helpers.isIOS()?100:0)}}function a(e){var t=f.popups.get("link.edit");t||(t=function(){var e="";1<=f.opts.linkEditButtons.length&&("A"==f.el.tagName&&0<=f.opts.linkEditButtons.indexOf("linkRemove")&&f.opts.linkEditButtons.splice(f.opts.linkEditButtons.indexOf("linkRemove"),1),e='<div class="fr-buttons">'+f.button.buildList(f.opts.linkEditButtons)+"</div>");var t={buttons:e},n=f.popups.create("link.edit",t);f.$wp&&f.events.$on(f.$wp,"scroll.link-edit",function(){p()&&f.popups.isVisible("link.edit")&&a(p())});return n}());var n=Te(e);f.popups.isVisible("link.edit")||f.popups.refresh("link.edit"),f.popups.setContainer("link.edit",f.$sc);var r=n.offset().left+Te(e).outerWidth()/2,i=n.offset().top+n.outerHeight();f.popups.show("link.edit",r,i,n.outerHeight())}function o(){f.popups.hide("link.edit")}function l(){}function d(){var e=f.popups.get("link.insert"),t=p();if(t){var n,r,i=Te(t),a=e.find('input.fr-link-attr[type="text"]'),o=e.find('input.fr-link-attr[type="checkbox"]');for(n=0;n<a.length;n++)(r=Te(a[n])).val(i.attr(r.attr("name")||""));for(o.prop("checked",!1),n=0;n<o.length;n++)r=Te(o[n]),i.attr(r.attr("name"))==r.data("checked")&&r.prop("checked",!0);e.find('input.fr-link-attr[type="text"][name="text"]').val(i.text())}else e.find('input.fr-link-attr[type="text"]').val(""),e.find('input.fr-link-attr[type="checkbox"]').prop("checked",!1),e.find('input.fr-link-attr[type="text"][name="text"]').val(f.selection.text());e.find("input.fr-link-attr").trigger("change"),(f.image?f.image.get():null)?e.find('.fr-link-attr[name="text"]').parent().hide():e.find('.fr-link-attr[name="text"]').parent().show()}function s(e){if(e)return f.popups.onRefresh("link.insert",d),f.popups.onHide("link.insert",l),!0;var t="";1<=f.opts.linkInsertButtons.length&&(t='<div class="fr-buttons">'+f.button.buildList(f.opts.linkInsertButtons)+"</div>");var n="",r=0;for(var i in n='<div class="fr-link-insert-layer fr-layer fr-active" id="fr-link-insert-layer-'+f.id+'">',n+='<div class="fr-input-line"><input id="fr-link-insert-layer-url-'+f.id+'" name="href" type="text" class="fr-link-attr" placeholder="'+f.language.translate("URL")+'" tabIndex="'+ ++r+'"></div>',f.opts.linkText&&(n+='<div class="fr-input-line"><input id="fr-link-insert-layer-text-'+f.id+'" name="text" type="text" class="fr-link-attr" placeholder="'+f.language.translate("Text")+'" tabIndex="'+ ++r+'"></div>'),f.opts.linkAttributes)if(f.opts.linkAttributes.hasOwnProperty(i)){var a=f.opts.linkAttributes[i];n+='<div class="fr-input-line"><input name="'+i+'" type="text" class="fr-link-attr" placeholder="'+f.language.translate(a)+'" tabIndex="'+ ++r+'"></div>'}f.opts.linkAlwaysBlank||(n+='<div class="fr-checkbox-line"><span class="fr-checkbox"><input name="target" class="fr-link-attr" data-checked="_blank" type="checkbox" id="fr-link-target-'+f.id+'" tabIndex="'+ ++r+'"><span><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="10" viewBox="0 0 32 32"><path d="M27 4l-15 15-7-7-5 5 12 12 20-20z" fill="#FFF"></path></svg></span></span><label for="fr-link-target-'+f.id+'">'+f.language.translate("Open in new tab")+"</label></div>");var o={buttons:t,input_layer:n+='<div class="fr-action-buttons"><button class="fr-command fr-submit" role="button" data-cmd="linkInsert" href="#" tabIndex="'+ ++r+'" type="button">'+f.language.translate("Insert")+"</button></div></div>"},s=f.popups.create("link.insert",o);return f.$wp&&f.events.$on(f.$wp,"scroll.link-insert",function(){(f.image?f.image.get():null)&&f.popups.isVisible("link.insert")&&m(),f.popups.isVisible("link.insert")&&g()}),s}function c(e,t,n){if(void 0===n&&(n={}),!1===f.events.trigger("link.beforeInsert",[e,t,n]))return!1;var r=f.image?f.image.get():null;r||"A"==f.el.tagName?"A"==f.el.tagName&&f.$el.focus():(f.selection.restore(),f.popups.hide("link.insert"));var i=e;f.opts.linkConvertEmailAddress&&f.helpers.isEmail(e)&&!/^mailto:.*/i.test(e)&&(e="mailto:"+e);if(""===f.opts.linkAutoPrefix||new RegExp("^("+Te.FE.LinkProtocols.join("|")+"):.","i").test(e)||/^data:image.*/i.test(e)||/^(https?:|ftps?:|file:|)\/\//i.test(e)||/^([A-Za-z]:(\\){1,2}|[A-Za-z]:((\\){1,2}[^\\]+)+)(\\)?$/i.test(e)||["/","{","[","#","(","."].indexOf((e||"")[0])<0&&(e=f.opts.linkAutoPrefix+f.helpers.sanitizeURL(e)),e=f.helpers.sanitizeURL(e),f.opts.linkAlwaysBlank&&(n.target="_blank"),f.opts.linkAlwaysNoFollow&&(n.rel="nofollow"),f.helpers.isEmail(i)&&(n.target=null,n.rel=null),"_blank"==n.target?(f.opts.linkNoOpener&&(n.rel?n.rel+=" noopener":n.rel="noopener"),f.opts.linkNoReferrer&&(n.rel?n.rel+=" noreferrer":n.rel="noreferrer")):null==n.target&&(n.rel?n.rel=n.rel.replace(/noopener/,"").replace(/noreferrer/,""):n.rel=null),t=t||"",e===f.opts.linkAutoPrefix)return f.popups.get("link.insert").find('input[name="href"]').addClass("fr-error"),f.events.trigger("link.bad",[i]),!1;var a,o=p();if(o){if((a=Te(o)).attr("href",e),0<t.length&&a.text()!=t&&!r){for(var s=a.get(0);1===s.childNodes.length&&s.childNodes[0].nodeType==Node.ELEMENT_NODE;)s=s.childNodes[0];Te(s).text(t)}r||a.prepend(Te.FE.START_MARKER).append(Te.FE.END_MARKER),a.attr(n),r||f.selection.restore()}else{r?(r.wrap('<a href="'+e+'"></a>'),f.image.hasCaption()&&r.parent().append(r.parents(".fr-img-caption").find(".fr-inner"))):(f.format.remove("a"),f.selection.isCollapsed()?(t=0===t.length?i:t,f.html.insert('<a href="'+e+'">'+Te.FE.START_MARKER+t.replace(/&/g,"&amp;").replace(/</,"&lt;",">","&gt;")+Te.FE.END_MARKER+"</a>"),f.selection.restore()):0<t.length&&t!=f.selection.text().replace(/\n/g,"")?(f.selection.remove(),f.html.insert('<a href="'+e+'">'+Te.FE.START_MARKER+t.replace(/&/g,"&amp;")+Te.FE.END_MARKER+"</a>"),f.selection.restore()):(!function(){if(!f.selection.isCollapsed()){f.selection.save();for(var e=f.$el.find(".fr-marker").addClass("fr-unprocessed").toArray();e.length;){var t=Te(e.pop());t.removeClass("fr-unprocessed");var n=f.node.deepestParent(t.get(0));if(n){for(var r=t.get(0),i="",a="";r=r.parentNode,f.node.isBlock(r)||(i+=f.node.closeTagString(r),a=f.node.openTagString(r)+a),r!=n;);var o=f.node.openTagString(t.get(0))+t.html()+f.node.closeTagString(t.get(0));t.replaceWith('<span id="fr-break"></span>');var s=n.outerHTML;s=(s=s.replace(/<span id="fr-break"><\/span>/g,i+o+a)).replace(a+i,""),n.outerHTML=s}e=f.$el.find(".fr-marker.fr-unprocessed").toArray()}f.html.cleanEmptyTags(),f.selection.restore()}}(),f.format.apply("a",{href:e})));for(var l=u(),d=0;d<l.length;d++)(a=Te(l[d])).attr(n),a.removeAttr("_moz_dirty");1==l.length&&f.$wp&&!r&&(Te(l[0]).prepend(Te.FE.START_MARKER).append(Te.FE.END_MARKER),f.selection.restore())}if(r){var c=f.popups.get("link.insert");c&&c.find("input:focus").blur(),f.image.edit(r)}else h()}function g(){o();var e=p();if(e){var t=f.popups.get("link.insert");t||(t=s()),f.popups.isVisible("link.insert")||(f.popups.refresh("link.insert"),f.selection.save(),f.helpers.isMobile()&&(f.events.disableBlur(),f.$el.blur(),f.events.enableBlur())),f.popups.setContainer("link.insert",f.$sc);var n=(f.image?f.image.get():null)||Te(e),r=n.offset().left+n.outerWidth()/2,i=n.offset().top+n.outerHeight();f.popups.show("link.insert",r,i,n.outerHeight())}}function m(){var e=f.image?f.image.getEl():null;if(e){var t=f.popups.get("link.insert");f.image.hasCaption()&&(e=e.find(".fr-img-wrap")),t||(t=s()),d(),f.popups.setContainer("link.insert",f.$sc);var n=e.offset().left+e.outerWidth()/2,r=e.offset().top+e.outerHeight();f.popups.show("link.insert",n,r,e.outerHeight())}}return{_init:function(){f.events.on("keyup",function(e){e.which!=Te.FE.KEYCODE.ESC&&h(e)}),f.events.on("window.mouseup",h),f.events.$on(f.$el,"click","a",function(e){f.edit.isDisabled()&&e.preventDefault()}),f.helpers.isMobile()&&f.events.$on(f.$doc,"selectionchange",h),s(!0),"A"==f.el.tagName&&f.$el.addClass("fr-view"),f.events.on("toolbar.esc",function(){if(f.popups.isVisible("link.edit"))return f.events.disableBlur(),f.events.focus(),!1},!0)},remove:function(){var e=p(),t=f.image?f.image.get():null;if(!1===f.events.trigger("link.beforeRemove",[e]))return!1;t&&e?(t.unwrap(),f.image.edit(t)):e&&(f.selection.save(),Te(e).replaceWith(Te(e).html()),f.selection.restore(),o())},showInsertPopup:function(){var e=f.$tb.find('.fr-command[data-cmd="insertLink"]'),t=f.popups.get("link.insert");if(t||(t=s()),!t.hasClass("fr-active"))if(f.popups.refresh("link.insert"),f.popups.setContainer("link.insert",f.$tb||f.$sc),e.is(":visible")){var n=e.offset().left+e.outerWidth()/2,r=f.position.getTbarPupupTop("link.insert",e);f.popups.show("link.insert",n,r,e.outerHeight())}else f.position.forSelection(t),f.popups.show("link.insert")},usePredefined:function(e){var t,n,r=f.opts.linkList[e],i=f.popups.get("link.insert"),a=i.find('input.fr-link-attr[type="text"]'),o=i.find('input.fr-link-attr[type="checkbox"]');for(r.rel&&(i.rel=r.rel),n=0;n<a.length;n++)r[(t=Te(a[n])).attr("name")]?t.val(r[t.attr("name")]):"text"!=t.attr("name")&&t.val("");for(n=0;n<o.length;n++)(t=Te(o[n])).prop("checked",t.data("checked")==r[t.attr("name")]);f.accessibility.focusPopup(i)},insertCallback:function(){var e,t,n=f.popups.get("link.insert"),r=n.find('input.fr-link-attr[type="text"]'),i=n.find('input.fr-link-attr[type="checkbox"]'),a=(r.filter('[name="href"]').val()||"").trim(),o=r.filter('[name="text"]').val(),s={};for(t=0;t<r.length;t++)e=Te(r[t]),["href","text"].indexOf(e.attr("name"))<0&&(s[e.attr("name")]=e.val());for(t=0;t<i.length;t++)(e=Te(i[t])).is(":checked")?s[e.attr("name")]=e.data("checked"):s[e.attr("name")]=e.data("unchecked")||null;n.rel&&(s.rel=n.rel);var l=f.helpers.scrollTop();c(a,o,s),Te(f.o_win).scrollTop(l)},insert:c,update:g,get:p,allSelected:u,back:function(){f.image&&f.image.get()?f.image.back():(f.events.disableBlur(),f.selection.restore(),f.events.enableBlur(),p()&&f.$wp?(f.selection.restore(),o(),h()):"A"==f.el.tagName?(f.$el.focus(),h()):(f.popups.hide("link.insert"),f.toolbar.showInline()))},imageLink:m,applyStyle:function(e,t,n){void 0===n&&(n=f.opts.linkMultipleStyles),void 0===t&&(t=f.opts.linkStyles);var r=p();if(!r)return!1;if(!n){var i=Object.keys(t);i.splice(i.indexOf(e),1),Te(r).removeClass(i.join(" "))}Te(r).toggleClass(e),h()}}},Te.FE.DefineIcon("insertLink",{NAME:"link"}),Te.FE.RegisterShortcut(Te.FE.KEYCODE.K,"insertLink",null,"K"),Te.FE.RegisterCommand("insertLink",{title:"Insert Link",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("link.insert")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("link.insert")):this.link.showInsertPopup()},plugin:"link"}),Te.FE.DefineIcon("linkOpen",{NAME:"external-link",FA5NAME:"external-link-alt"}),Te.FE.RegisterCommand("linkOpen",{title:"Open Link",undo:!1,refresh:function(e){this.link.get()?e.removeClass("fr-hidden"):e.addClass("fr-hidden")},callback:function(){var e=this.link.get();e&&(-1!==e.href.indexOf("mailto:")?this.o_win.open(e.href).close():this.o_win.open(e.href,"_blank","noopener"),this.popups.hide("link.edit"))},plugin:"link"}),Te.FE.DefineIcon("linkEdit",{NAME:"edit"}),Te.FE.RegisterCommand("linkEdit",{title:"Edit Link",undo:!1,refreshAfterCallback:!1,popup:!0,callback:function(){this.link.update()},refresh:function(e){this.link.get()?e.removeClass("fr-hidden"):e.addClass("fr-hidden")},plugin:"link"}),Te.FE.DefineIcon("linkRemove",{NAME:"unlink"}),Te.FE.RegisterCommand("linkRemove",{title:"Unlink",callback:function(){this.link.remove()},refresh:function(e){this.link.get()?e.removeClass("fr-hidden"):e.addClass("fr-hidden")},plugin:"link"}),Te.FE.DefineIcon("linkBack",{NAME:"arrow-left"}),Te.FE.RegisterCommand("linkBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.link.back()},refresh:function(e){var t=this.link.get()&&this.doc.hasFocus();(this.image?this.image.get():null)||t||this.opts.toolbarInline?(e.removeClass("fr-hidden"),e.next(".fr-separator").removeClass("fr-hidden")):(e.addClass("fr-hidden"),e.next(".fr-separator").addClass("fr-hidden"))},plugin:"link"}),Te.FE.DefineIcon("linkList",{NAME:"search"}),Te.FE.RegisterCommand("linkList",{title:"Choose Link",type:"dropdown",focus:!1,undo:!1,refreshAfterCallback:!1,html:function(){for(var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.linkList,n=0;n<t.length;n++)e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="linkList" data-param1="'+n+'">'+(t[n].displayText||t[n].text)+"</a></li>";return e+="</ul>"},callback:function(e,t){this.link.usePredefined(t)},plugin:"link"}),Te.FE.RegisterCommand("linkInsert",{focus:!1,refreshAfterCallback:!1,callback:function(){this.link.insertCallback()},refresh:function(e){this.link.get()?e.text(this.language.translate("Update")):e.text(this.language.translate("Insert"))},plugin:"link"}),Te.FE.DefineIcon("imageLink",{NAME:"link"}),Te.FE.RegisterCommand("imageLink",{title:"Insert Link",undo:!1,focus:!1,popup:!0,callback:function(){this.link.imageLink()},refresh:function(e){var t;this.link.get()?((t=e.prev()).hasClass("fr-separator")&&t.removeClass("fr-hidden"),e.addClass("fr-hidden")):((t=e.prev()).hasClass("fr-separator")&&t.addClass("fr-hidden"),e.removeClass("fr-hidden"))},plugin:"link"}),Te.FE.DefineIcon("linkStyle",{NAME:"magic"}),Te.FE.RegisterCommand("linkStyle",{title:"Style",type:"dropdown",html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.linkStyles;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="linkStyle" data-param1="'+n+'">'+this.language.translate(t[n])+"</a></li>");return e+="</ul>"},callback:function(e,t){this.link.applyStyle(t)},refreshOnShow:function(e,t){var n=this.link.get();if(n){var r=Te(n);t.find(".fr-command").each(function(){var e=Te(this).data("param1"),t=r.hasClass(e);Te(this).toggleClass("fr-active",t).attr("aria-selected",t)})}},refresh:function(e){this.link.get()?e.removeClass("fr-hidden"):e.addClass("fr-hidden")},plugin:"link"}),Te.extend(Te.FE.DEFAULTS,{listAdvancedTypes:!0}),Te.FE.PLUGINS.lists=function(f){function p(e){return'<span class="fr-open-'+e.toLowerCase()+'"></span>'}function u(e){return'<span class="fr-close-'+e.toLowerCase()+'"></span>'}function i(e,t){!function(e,t){for(var n=[],r=0;r<e.length;r++){var i=e[r].parentNode;"LI"==e[r].tagName&&i.tagName!=t&&n.indexOf(i)<0&&n.push(i)}for(r=n.length-1;0<=r;r--){var a=Te(n[r]);a.replaceWith("<"+t.toLowerCase()+" "+f.node.attributes(a.get(0))+">"+a.html()+"</"+t.toLowerCase()+">")}}(e,t);var n,r=f.html.defaultTag(),i=null;e.length&&(n="rtl"==f.opts.direction||"rtl"==Te(e[0]).css("direction")?"margin-right":"margin-left");for(var a=0;a<e.length;a++)if("TD"!=e[a].tagName&&"TH"!=e[a].tagName&&"LI"!=e[a].tagName){var o=f.helpers.getPX(Te(e[a]).css(n))||0;(e[a].style.marginLeft=null)===i&&(i=o);var s=0<i?"<"+t+' style="'+n+": "+i+'px;">':"<"+t+">",l="</"+t+">";for(o-=i;0<o/f.opts.indentMargin;)s+="<"+t+">",l+=l,o-=f.opts.indentMargin;r&&e[a].tagName.toLowerCase()==r?Te(e[a]).replaceWith(s+"<li"+f.node.attributes(e[a])+">"+Te(e[a]).html()+"</li>"+l):Te(e[a]).wrap(s+"<li></li>"+l)}f.clean.lists()}function a(e){var t,n;for(t=e.length-1;0<=t;t--)for(n=t-1;0<=n;n--)if(Te(e[n]).find(e[t]).length||e[n]==e[t]){e.splice(t,1);break}var r=[];for(t=0;t<e.length;t++){var i=Te(e[t]),a=e[t].parentNode,o=i.attr("class");if(i.before(u(a.tagName)),"LI"==a.parentNode.tagName)i.before(u("LI")),i.after(p("LI"));else{var s="";o&&(s+=' class="'+o+'"');var l="rtl"==f.opts.direction||"rtl"==i.css("direction")?"margin-right":"margin-left";f.helpers.getPX(Te(a).css(l))&&0<=(Te(a).attr("style")||"").indexOf(l+":")&&(s+=' style="'+l+":"+f.helpers.getPX(Te(a).css(l))+'px;"'),f.html.defaultTag()&&0===i.find(f.html.blockTagsQuery()).length&&i.wrapInner("<"+f.html.defaultTag()+s+"></"+f.html.defaultTag()+">"),f.node.isEmpty(i.get(0),!0)||0!==i.find(f.html.blockTagsQuery()).length||i.append("<br>"),i.append(p("LI")),i.prepend(u("LI"))}i.after(p(a.tagName)),"LI"==a.parentNode.tagName&&(a=a.parentNode.parentNode),r.indexOf(a)<0&&r.push(a)}for(t=0;t<r.length;t++){var d=Te(r[t]),c=d.html();c=(c=c.replace(/<span class="fr-close-([a-z]*)"><\/span>/g,"</$1>")).replace(/<span class="fr-open-([a-z]*)"><\/span>/g,"<$1>"),d.replaceWith(f.node.openTagString(d.get(0))+c+f.node.closeTagString(d.get(0)))}f.$el.find("li:empty").remove(),f.$el.find("ul:empty, ol:empty").remove(),f.clean.lists(),f.html.wrap()}function o(e){f.selection.save();for(var t=0;t<e.length;t++){var n=e[t].previousSibling;if(n){var r=Te(e[t]).find("> ul, > ol").last().get(0);if(r){for(var i=Te("<li>").prependTo(Te(r)),a=f.node.contents(e[t])[0];a&&!f.node.isList(a);){var o=a.nextSibling;i.append(a),a=o}Te(n).append(Te(r)),Te(e[t]).remove()}else{var s=Te(n).find("> ul, > ol").last().get(0);if(s)Te(s).append(Te(e[t]));else{var l=Te("<"+e[t].parentNode.tagName+">");Te(n).append(l),l.append(Te(e[t]))}}}}f.clean.lists(),f.selection.restore()}function s(e){f.selection.save(),a(e),f.selection.restore()}function e(e){if("indent"==e||"outdent"==e){var t=!1,n=f.selection.blocks(),r=[],i=n[0].previousSibling||n[0].parentElement;if("outdent"==e){if("LI"==i.tagName||"LI"!=i.parentNode.tagName)return}else if(!n[0].previousSibling||"LI"!=n[0].previousSibling.tagName)return;for(var a=0;a<n.length;a++)"LI"==n[a].tagName?(t=!0,r.push(n[a])):"LI"==n[a].parentNode.tagName&&(t=!0,r.push(n[a].parentNode));t&&("indent"==e?o(r):s(r))}}return{_init:function(){f.events.on("commands.after",e),f.events.on("keydown",function(e){if(e.which==Te.FE.KEYCODE.TAB){for(var t=f.selection.blocks(),n=[],r=0;r<t.length;r++)"LI"==t[r].tagName?n.push(t[r]):"LI"==t[r].parentNode.tagName&&n.push(t[r].parentNode);if(1<n.length||n.length&&(f.selection.info(n[0]).atStart||f.node.isEmpty(n[0])))return e.preventDefault(),e.stopPropagation(),e.shiftKey?s(n):o(n),!1}},!0)},format:function(e,t){var n,r;for(f.selection.save(),f.html.wrap(!0,!0,!0,!0),f.selection.restore(),r=f.selection.blocks(),n=0;n<r.length;n++)"LI"!=r[n].tagName&&"LI"==r[n].parentNode.tagName&&(r[n]=r[n].parentNode);if(f.selection.save(),function(e,t){for(var n=!0,r=0;r<e.length;r++){if("LI"!=e[r].tagName)return!1;e[r].parentNode.tagName!=t&&(n=!1)}return n}(r,e)?t||a(r):i(r,e),f.html.unwrap(),f.selection.restore(),t=t||"default"){for(r=f.selection.blocks(),n=0;n<r.length;n++)"LI"!=r[n].tagName&&"LI"==r[n].parentNode.tagName&&(r[n]=r[n].parentNode);for(n=0;n<r.length;n++)"LI"==r[n].tagName&&(Te(r[n].parentNode).css("list-style-type","default"===t?"":t),0===(Te(r[n].parentNode).attr("style")||"").length&&Te(r[n].parentNode).removeAttr("style"))}},refresh:function(e,t){var n=Te(f.selection.element());if(n.get(0)!=f.el){var r=n.get(0);(r="LI"!=r.tagName&&r.firstElementChild&&"LI"!=r.firstElementChild.tagName?n.parents("li").get(0):"LI"==r.tagName||r.firstElementChild?r.firstElementChild&&"LI"==r.firstElementChild.tagName?n.get(0).firstChild:n.get(0):n.parents("li").get(0))&&r.parentNode.tagName==t&&f.el.contains(r.parentNode)&&e.addClass("fr-active")}}}},Te.FE.RegisterCommand("formatUL",{title:"Unordered List",type:"button",hasOptions:function(){return this.opts.listAdvancedTypes},options:{"default":"Default",circle:"Circle",disc:"Disc",square:"Square"},refresh:function(e){this.lists.refresh(e,"UL")},callback:function(e,t){this.lists.format("UL",t)},plugin:"lists"}),Te.FE.RegisterCommand("formatOL",{title:"Ordered List",hasOptions:function(){return this.opts.listAdvancedTypes},options:{"default":"Default","lower-alpha":"Lower Alpha","lower-greek":"Lower Greek","lower-roman":"Lower Roman","upper-alpha":"Upper Alpha","upper-roman":"Upper Roman"},refresh:function(e){this.lists.refresh(e,"OL")},callback:function(e,t){this.lists.format("OL",t)},plugin:"lists"}),Te.FE.DefineIcon("formatUL",{NAME:"list-ul"}),Te.FE.DefineIcon("formatOL",{NAME:"list-ol"}),Te.extend(Te.FE.DEFAULTS,{paragraphFormat:{N:"Normal",H1:"Heading 1",H2:"Heading 2",H3:"Heading 3",H4:"Heading 4",PRE:"Code"},paragraphFormatSelection:!1,paragraphDefaultSelection:"Paragraph Format"}),Te.FE.PLUGINS.paragraphFormat=function(p){function u(e,t){var n=p.html.defaultTag();if(t&&t.toLowerCase()!=n)if(0<e.find("ul, ol").length){var r=Te("<"+t+">");e.prepend(r);for(var i=p.node.contents(e.get(0))[0];i&&["UL","OL"].indexOf(i.tagName)<0;){var a=i.nextSibling;r.append(i),i=a}}else e.html("<"+t+">"+e.html()+"</"+t+">")}return{apply:function(e){"N"==e&&(e=p.html.defaultTag()),p.selection.save(),p.html.wrap(!0,!0,!p.opts.paragraphFormat.BLOCKQUOTE,!0,!0),p.selection.restore();var t,n,r,i,a,o,s,l,d=p.selection.blocks();p.selection.save(),p.$el.find("pre").attr("skip",!0);for(var c=0;c<d.length;c++)if(d[c].tagName!=e&&!p.node.isList(d[c])){var f=Te(d[c]);"LI"==d[c].tagName?u(f,e):"LI"==d[c].parentNode.tagName&&d[c]?(o=f,s=e,l=p.html.defaultTag(),s&&s.toLowerCase()!=l||(s='div class="fr-temp-div"'),o.replaceWith(Te("<"+s+">").html(o.html()))):0<=["TD","TH"].indexOf(d[c].parentNode.tagName)?(r=f,i=e,a=p.html.defaultTag(),i||(i='div class="fr-temp-div"'+(p.node.isEmpty(r.get(0),!0)?' data-empty="true"':"")),i.toLowerCase()==a?(p.node.isEmpty(r.get(0),!0)||r.append("<br/>"),r.replaceWith(r.html())):r.replaceWith(Te("<"+i+">").html(r.html()))):(t=f,(n=e)||(n='div class="fr-temp-div"'+(p.node.isEmpty(t.get(0),!0)?' data-empty="true"':"")),t.replaceWith(Te("<"+n+" "+p.node.attributes(t.get(0))+">").html(t.html()).removeAttr("data-empty")))}p.$el.find('pre:not([skip="true"]) + pre:not([skip="true"])').each(function(){Te(this).prev().append("<br>"+Te(this).html()),Te(this).remove()}),p.$el.find("pre").removeAttr("skip"),p.html.unwrap(),p.selection.restore()},refreshOnShow:function(e,t){var n=p.selection.blocks();if(n.length){var r=n[0],i="N",a=p.html.defaultTag();r.tagName.toLowerCase()!=a&&r!=p.el&&(i=r.tagName),t.find('.fr-command[data-param1="'+i+'"]').addClass("fr-active").attr("aria-selected",!0)}else t.find('.fr-command[data-param1="N"]').addClass("fr-active").attr("aria-selected",!0)},refresh:function(e){if(p.opts.paragraphFormatSelection){var t=p.selection.blocks();if(t.length){var n=t[0],r="N",i=p.html.defaultTag();n.tagName.toLowerCase()!=i&&n!=p.el&&(r=n.tagName),0<=["LI","TD","TH"].indexOf(r)&&(r="N"),e.find("> span").text(p.language.translate(p.opts.paragraphFormat[r]))}else e.find("> span").text(p.language.translate(p.opts.paragraphFormat.N))}}}},Te.FE.RegisterCommand("paragraphFormat",{type:"dropdown",displaySelection:function(e){return e.opts.paragraphFormatSelection},defaultSelection:function(e){return e.language.translate(e.opts.paragraphDefaultSelection)},displaySelectionWidth:125,html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.paragraphFormat;for(var n in t)if(t.hasOwnProperty(n)){var r=this.shortcuts.get("paragraphFormat."+n);r=r?'<span class="fr-shortcut">'+r+"</span>":"",e+='<li role="presentation"><'+("N"==n?this.html.defaultTag()||"DIV":n)+' style="padding: 0 !important; margin: 0 !important;" role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="paragraphFormat" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.language.translate(t[n])+"</a></"+("N"==n?this.html.defaultTag()||"DIV":n)+"></li>"}return e+="</ul>"},title:"Paragraph Format",callback:function(e,t){this.paragraphFormat.apply(t)},refresh:function(e){this.paragraphFormat.refresh(e)},refreshOnShow:function(e,t){this.paragraphFormat.refreshOnShow(e,t)},plugin:"paragraphFormat"}),Te.FE.DefineIcon("paragraphFormat",{NAME:"paragraph"}),Te.extend(Te.FE.DEFAULTS,{paragraphStyles:{"fr-text-gray":"Gray","fr-text-bordered":"Bordered","fr-text-spaced":"Spaced","fr-text-uppercase":"Uppercase"},paragraphMultipleStyles:!0}),Te.FE.PLUGINS.paragraphStyle=function(s){return{_init:function(){},apply:function(e,t,n){void 0===t&&(t=s.opts.paragraphStyles),void 0===n&&(n=s.opts.paragraphMultipleStyles);var r="";n||((r=Object.keys(t)).splice(r.indexOf(e),1),r=r.join(" ")),s.selection.save(),s.html.wrap(!0,!0,!0,!0),s.selection.restore();var i=s.selection.blocks();s.selection.save();for(var a=Te(i[0]).hasClass(e),o=0;o<i.length;o++)Te(i[o]).removeClass(r).toggleClass(e,!a),Te(i[o]).hasClass("fr-temp-div")&&Te(i[o]).removeClass("fr-temp-div"),""===Te(i[o]).attr("class")&&Te(i[o]).removeAttr("class");s.html.unwrap(),s.selection.restore()},refreshOnShow:function(e,t){var n=s.selection.blocks();if(n.length){var r=Te(n[0]);t.find(".fr-command").each(function(){var e=Te(this).data("param1"),t=r.hasClass(e);Te(this).toggleClass("fr-active",t).attr("aria-selected",t)})}}}},Te.FE.RegisterCommand("paragraphStyle",{type:"dropdown",html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.paragraphStyles;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command '+n+'" tabIndex="-1" role="option" data-cmd="paragraphStyle" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.language.translate(t[n])+"</a></li>");return e+="</ul>"},title:"Paragraph Style",callback:function(e,t){this.paragraphStyle.apply(t)},refreshOnShow:function(e,t){this.paragraphStyle.refreshOnShow(e,t)},plugin:"paragraphStyle"}),Te.FE.DefineIcon("paragraphStyle",{NAME:"magic"}),Te.extend(Te.FE.DEFAULTS,{html2pdf:window.html2pdf}),Te.FE.PLUGINS.print=function(s){return{run:function(){!function(e){var t=s.$el.html(),n=null;s.shared.print_iframe?n=s.shared.print_iframe:((n=document.createElement("iframe")).name="fr-print",n.style.position="fixed",n.style.top="0",n.style.left="-9999px",n.style.height="100%",n.style.width="0",n.style.overflow="hidden",n.style["z-index"]="2147483647",n.style.tabIndex="-1",s.events.on("shared.destroy",function(){n.remove()}),s.shared.print_iframe=n);try{document.body.removeChild(n)}catch(o){}document.body.appendChild(n);var r=function(){e(),n.removeEventListener("load",r)};n.addEventListener("load",r);var i=n.contentWindow;i.document.open(),i.document.write("<!DOCTYPE html><html "+(s.opts.documentReady?'style="margin: 0; padding: 0;"':"")+"><head><title>"+document.title+"</title>"),Array.prototype.forEach.call(document.querySelectorAll("style"),function(e){e=e.cloneNode(!0),i.document.write(e.outerHTML)});var a=document.querySelectorAll("link[rel=stylesheet]");Array.prototype.forEach.call(a,function(e){var t=document.createElement("link");t.rel=e.rel,t.href=e.href,t.media="print",t.type="text/css",t.media="all",i.document.write(t.outerHTML)}),i.document.write('</head><body style="height:auto;text-align: '+("rtl"==s.opts.direction?"right":"left")+"; direction: "+s.opts.direction+"; "+(s.opts.documentReady?" padding: 2cm; width: 17cm; margin: 0;":"")+'"><div class="fr-view">'),i.document.write(t),i.document.write("</div></body></html>"),i.document.close()}(function(){setTimeout(function(){s.events.disableBlur(),window.frames["fr-print"].focus(),window.frames["fr-print"].print(),s.$win.get(0).focus(),s.events.disableBlur(),s.events.focus()},0)})},toPDF:function(){s.opts.html2pdf&&(s.$el.css("text-align","left"),s.opts.html2pdf().set({margin:[10,20],html2canvas:{useCORS:!0}}).from(s.el).save(),setTimeout(function(){s.$el.css("text-align","")},100))}}},Te.FE.DefineIcon("print",{NAME:"print"}),Te.FE.RegisterCommand("print",{title:"Print",undo:!1,focus:!1,plugin:"print",callback:function(){this.print.run()}}),Te.FE.DefineIcon("getPDF",{NAME:"file-pdf-o",FA5NAME:"file-pdf"}),Te.FE.RegisterCommand("getPDF",{title:"Download PDF",type:"button",focus:!1,undo:!1,callback:function(){this.print.toPDF()}}),Te.extend(Te.FE.DEFAULTS,{quickInsertButtons:["image","video","embedly","table","ul","ol","hr"],quickInsertTags:["p","div","h1","h2","h3","h4","h5","h6","pre","blockquote"],quickInsertEnabled:!0}),Te.FE.QUICK_INSERT_BUTTONS={},Te.FE.DefineIcon("quickInsert",{PATH:'<path d="M22,16.75 L16.75,16.75 L16.75,22 L15.25,22.000 L15.25,16.75 L10,16.75 L10,15.25 L15.25,15.25 L15.25,10 L16.75,10 L16.75,15.25 L22,15.25 L22,16.75 Z"/>',template:"svg"}),Te.FE.RegisterQuickInsertButton=function(e,t){Te.FE.QUICK_INSERT_BUTTONS[e]=Te.extend({undo:!0},t)},Te.FE.RegisterQuickInsertButton("image",{icon:"insertImage",requiredPlugin:"image",title:"Insert Image",undo:!1,callback:function(){var e=this;e.shared.$qi_image_input||(e.shared.$qi_image_input=Te('<input accept="image/'+e.opts.imageAllowedTypes.join(", image/").toLowerCase()+'" name="quickInsertImage'+this.id+'" style="display: none;" type="file">'),Te("body:first").append(e.shared.$qi_image_input),e.events.$on(e.shared.$qi_image_input,"change",function(){var e=Te(this).data("inst");this.files&&(e.quickInsert.hide(),e.image.upload(this.files)),Te(this).val("")},!0)),e.$qi_image_input=e.shared.$qi_image_input,e.helpers.isMobile()&&e.selection.save(),e.events.disableBlur(),e.$qi_image_input.data("inst",e).trigger("click")}}),Te.FE.RegisterQuickInsertButton("video",{icon:"insertVideo",requiredPlugin:"video",title:"Insert Video",undo:!1,callback:function(){var e=prompt(this.language.translate("Paste the URL of the video you want to insert."));e&&this.video.insertByURL(e)}}),Te.FE.RegisterQuickInsertButton("embedly",{icon:"embedly",requiredPlugin:"embedly",title:"Embed URL",undo:!1,callback:function(){var e=prompt(this.language.translate("Paste the URL of any web content you want to insert."));e&&this.embedly.add(e)}}),Te.FE.RegisterQuickInsertButton("table",{icon:"insertTable",requiredPlugin:"table",title:"Insert Table",callback:function(){this.table.insert(2,2)}}),Te.FE.RegisterQuickInsertButton("ol",{icon:"formatOL",requiredPlugin:"lists",title:"Ordered List",callback:function(){this.lists.format("OL")}}),Te.FE.RegisterQuickInsertButton("ul",{icon:"formatUL",requiredPlugin:"lists",title:"Unordered List",callback:function(){this.lists.format("UL")}}),Te.FE.RegisterQuickInsertButton("hr",{icon:"insertHR",title:"Insert Horizontal Line",callback:function(){this.commands.insertHR()}}),Te.FE.PLUGINS.quickInsert=function(o){var s,l;function t(e){var t,n,r;t=e.offset().top-o.$box.offset().top,n=(o.$iframe&&o.$iframe.offset().left||0)+e.offset().left<s.outerWidth()?e.offset().left+s.outerWidth():0-s.outerWidth(),o.opts.enter!=Te.FE.ENTER_BR?r=(s.outerHeight()-e.outerHeight())/2:(Te("<span>"+Te.FE.INVISIBLE_SPACE+"</span>").insertAfter(e),r=(s.outerHeight()-e.next().outerHeight())/2,e.next().remove()),o.opts.iframe&&(t+=o.$iframe.offset().top),s.hasClass("fr-on")&&0<=t&&l.css("top",t-r),0<=t&&t-Math.abs(r)<=o.$box.outerHeight()-e.outerHeight()?(s.hasClass("fr-hidden")&&(s.hasClass("fr-on")&&a(),s.removeClass("fr-hidden")),s.css("top",t-r)):s.hasClass("fr-visible")&&(s.addClass("fr-hidden"),d()),s.css("left",n)}function n(e){s||function(){o.shared.$quick_insert||(o.shared.$quick_insert=Te('<div class="fr-quick-insert"><a class="fr-floating-btn" role="button" tabIndex="-1" title="'+o.language.translate("Quick Insert")+'">'+o.icon.create("quickInsert")+"</a></div>"));s=o.shared.$quick_insert,o.tooltip.bind(o.$box,".fr-quick-insert > a.fr-floating-btn"),o.events.on("destroy",function(){s.removeClass("fr-on").appendTo(Te("body:first")).css("left",-9999).css("top",-9999),l&&(d(),l.appendTo(Te("body:first")))},!0),o.events.on("shared.destroy",function(){s.html("").removeData().remove(),s=null,l&&(l.html("").removeData().remove(),l=null)},!0),o.events.on("commands.before",i),o.events.on("commands.after",function(){o.popups.areVisible()||r()}),o.events.bindClick(o.$box,".fr-quick-insert > a",a),o.events.bindClick(o.$box,".fr-qi-helper > a.fr-btn",function(e){var t=Te(e.currentTarget).data("cmd");if(!1===o.events.trigger("quickInsert.commands.before",[t]))return!1;Te.FE.QUICK_INSERT_BUTTONS[t].callback.apply(o,[e.currentTarget]),Te.FE.QUICK_INSERT_BUTTONS[t].undo&&o.undo.saveStep(),o.events.trigger("quickInsert.commands.after",[t]),o.quickInsert.hide()}),o.events.$on(o.$wp,"scroll",function(){s.hasClass("fr-visible")&&t(s.data("tag"))})}(),s.hasClass("fr-on")&&d(),o.$box.append(s),t(e),s.data("tag",e),s.addClass("fr-visible")}function r(){if(o.core.hasFocus()){var e=o.selection.element();if(o.opts.enter==Te.FE.ENTER_BR||o.node.isBlock(e)||(e=o.node.blockParent(e)),o.opts.enter==Te.FE.ENTER_BR&&!o.node.isBlock(e)){var t=o.node.deepestParent(e);t&&(e=t)}e&&(o.opts.enter!=Te.FE.ENTER_BR&&o.node.isEmpty(e)&&0<=o.opts.quickInsertTags.indexOf(e.tagName.toLowerCase())||o.opts.enter==Te.FE.ENTER_BR&&("BR"==e.tagName&&(!e.previousSibling||"BR"==e.previousSibling.tagName||o.node.isBlock(e.previousSibling))||o.node.isEmpty(e)&&(!e.previousSibling||"BR"==e.previousSibling.tagName||o.node.isBlock(e.previousSibling))&&(!e.nextSibling||"BR"==e.nextSibling.tagName||o.node.isBlock(e.nextSibling))))?s&&s.data("tag").is(Te(e))&&s.hasClass("fr-on")?d():o.selection.isCollapsed()&&n(Te(e)):i()}}function i(){s&&(s.hasClass("fr-on")&&d(),s.removeClass("fr-visible fr-on"),s.css("left",-9999).css("top",-9999))}function a(e){if(e&&e.preventDefault(),s.hasClass("fr-on")&&!s.hasClass("fr-hidden"))d();else{if(!o.shared.$qi_helper){for(var t=o.opts.quickInsertButtons,n='<div class="fr-qi-helper">',r=0,i=0;i<t.length;i++){var a=Te.FE.QUICK_INSERT_BUTTONS[t[i]];a&&(!a.requiredPlugin||Te.FE.PLUGINS[a.requiredPlugin]&&0<=o.opts.pluginsEnabled.indexOf(a.requiredPlugin))&&(n+='<a class="fr-btn fr-floating-btn" role="button" title="'+o.language.translate(a.title)+'" tabIndex="-1" data-cmd="'+t[i]+'" style="transition-delay: '+.025*r+++'s;">'+o.icon.create(a.icon)+"</a>")}n+="</div>",o.shared.$qi_helper=Te(n),o.tooltip.bind(o.shared.$qi_helper,"> a.fr-btn"),o.events.$on(o.shared.$qi_helper,"mousedown",function(e){e.preventDefault()},!0)}(l=o.shared.$qi_helper).appendTo(o.$box),setTimeout(function(){l.css("top",parseFloat(s.css("top"))),l.css("left",parseFloat(s.css("left"))+s.outerWidth()),l.find("a").addClass("fr-size-1"),s.addClass("fr-on")},10)}}function d(){var e=o.$box.find(".fr-qi-helper");e.length&&(e.find("a").removeClass("fr-size-1"),e.css("left",-9999),s.hasClass("fr-hidden")||s.removeClass("fr-on"))}return{_init:function(){if(!o.$wp||!o.opts.quickInsertEnabled)return!1;o.popups.onShow("image.edit",i),o.events.on("mouseup",r),o.helpers.isMobile()&&o.events.$on(Te(o.o_doc),"selectionchange",r),o.events.on("blur",i),o.events.on("keyup",r),o.events.on("keydown",function(){setTimeout(function(){r()},0)})},hide:i}},Te.FE.PLUGINS.quote=function(r){function i(e){for(;e.parentNode&&e.parentNode!=r.el;)e=e.parentNode;return e}return{apply:function(e){r.selection.save(),r.html.wrap(!0,!0,!0,!0),r.selection.restore(),"increase"==e?function(){var e,t=r.selection.blocks();for(e=0;e<t.length;e++)t[e]=i(t[e]);r.selection.save();var n=Te("<blockquote>");for(n.insertBefore(t[0]),e=0;e<t.length;e++)n.append(t[e]);r.html.unwrap(),r.selection.restore()}():"decrease"==e&&function(){var e,t=r.selection.blocks();for(e=0;e<t.length;e++)"BLOCKQUOTE"!=t[e].tagName&&(t[e]=Te(t[e]).parentsUntil(r.$el,"BLOCKQUOTE").get(0));for(r.selection.save(),e=0;e<t.length;e++)t[e]&&Te(t[e]).replaceWith(t[e].innerHTML);r.html.unwrap(),r.selection.restore()}()}}},Te.FE.RegisterShortcut(Te.FE.KEYCODE.SINGLE_QUOTE,"quote","increase","'"),Te.FE.RegisterShortcut(Te.FE.KEYCODE.SINGLE_QUOTE,"quote","decrease","'",!0),Te.FE.RegisterCommand("quote",{title:"Quote",type:"dropdown",html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t={increase:"Increase",decrease:"Decrease"};for(var n in t)if(t.hasOwnProperty(n)){var r=this.shortcuts.get("quote."+n);e+='<li role="presentation"><a class="fr-command fr-active '+n+'" tabIndex="-1" role="option" data-cmd="quote" data-param1="'+n+'" title="'+t[n]+'">'+this.language.translate(t[n])+(r?'<span class="fr-shortcut">'+r+"</span>":"")+"</a></li>"}return e+="</ul>"},callback:function(e,t){this.quote.apply(t)},plugin:"quote"}),Te.FE.DefineIcon("quote",{NAME:"quote-left"}),Te.extend(Te.FE.DEFAULTS,{saveInterval:1e4,saveURL:null,saveParams:{},saveParam:"body",saveMethod:"POST"}),Te.FE.PLUGINS.save=function(s){var e=null,l=null,t=!1,d=1,c=2,n={};function f(e,t){s.events.trigger("save.error",[{code:e,message:n[e]},t])}function r(e){void 0===e&&(e=s.html.get());var t=e,n=s.events.trigger("save.before",[e]);if(!1===n)return!1;if("string"==typeof n&&(e=n),s.opts.saveURL){var r={};for(var i in s.opts.saveParams)if(s.opts.saveParams.hasOwnProperty(i)){var a=s.opts.saveParams[i];r[i]="function"==typeof a?a.call(this):a}var o={};o[s.opts.saveParam]=e,Te.ajax({type:s.opts.saveMethod,url:s.opts.saveURL,data:Te.extend(o,r),crossDomain:s.opts.requestWithCORS,xhrFields:{withCredentials:s.opts.requestWithCredentials},headers:s.opts.requestHeaders}).done(function(e){l=t,s.events.trigger("save.after",[e])}).fail(function(e){f(c,e.response||e.responseText)})}else f(d)}function i(){clearTimeout(e),e=setTimeout(function(){var e=s.html.get();(l!=e||t)&&(t=!1,r(l=e))},s.opts.saveInterval)}return n[d]="Missing saveURL option.",n[c]="Something went wrong during save.",{_init:function(){s.opts.saveInterval&&(l=s.html.get(),s.events.on("contentChanged",i),s.events.on("keydown destroy",function(){clearTimeout(e)}))},save:r,reset:function(){i(),t=!1},force:function(){t=!0}}},Te.FE.DefineIcon("save",{NAME:"floppy-o",FA5NAME:"save"}),Te.FE.RegisterCommand("save",{title:"Save",undo:!1,focus:!1,refreshAfterCallback:!1,callback:function(){this.save.save()},plugin:"save"}),Te.extend(Te.FE.DEFAULTS,{specialCharactersSets:[{title:"Latin",list:[{"char":"&iexcl;",desc:"INVERTED EXCLAMATION MARK"},{"char":"&cent;",desc:"CENT SIGN"},{"char":"&pound;",desc:"POUND SIGN"},{"char":"&curren;",desc:"CURRENCY SIGN"},{"char":"&yen;",desc:"YEN SIGN"},{"char":"&brvbar;",desc:"BROKEN BAR"},{"char":"&sect;",desc:"SECTION SIGN"},{"char":"&uml;",desc:"DIAERESIS"},{"char":"&copy;",desc:"COPYRIGHT SIGN"},{"char":"&trade;",desc:"TRADEMARK SIGN"},{"char":"&ordf;",desc:"FEMININE ORDINAL INDICATOR"},{"char":"&laquo;",desc:"LEFT-POINTING DOUBLE ANGLE QUOTATION MARK"},{"char":"&not;",desc:"NOT SIGN"},{"char":"&reg;",desc:"REGISTERED SIGN"},{"char":"&macr;",desc:"MACRON"},{"char":"&deg;",desc:"DEGREE SIGN"},{"char":"&plusmn;",desc:"PLUS-MINUS SIGN"},{"char":"&sup2;",desc:"SUPERSCRIPT TWO"},{"char":"&sup3;",desc:"SUPERSCRIPT THREE"},{"char":"&acute;",desc:"ACUTE ACCENT"},{"char":"&micro;",desc:"MICRO SIGN"},{"char":"&para;",desc:"PILCROW SIGN"},{"char":"&middot;",desc:"MIDDLE DOT"},{"char":"&cedil;",desc:"CEDILLA"},{"char":"&sup1;",desc:"SUPERSCRIPT ONE"},{"char":"&ordm;",desc:"MASCULINE ORDINAL INDICATOR"},{"char":"&raquo;",desc:"RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK"},{"char":"&frac14;",desc:"VULGAR FRACTION ONE QUARTER"},{"char":"&frac12;",desc:"VULGAR FRACTION ONE HALF"},{"char":"&frac34;",desc:"VULGAR FRACTION THREE QUARTERS"},{"char":"&iquest;",desc:"INVERTED QUESTION MARK"},{"char":"&Agrave;",desc:"LATIN CAPITAL LETTER A WITH GRAVE"},{"char":"&Aacute;",desc:"LATIN CAPITAL LETTER A WITH ACUTE"},{"char":"&Acirc;",desc:"LATIN CAPITAL LETTER A WITH CIRCUMFLEX"},{"char":"&Atilde;",desc:"LATIN CAPITAL LETTER A WITH TILDE"},{"char":"&Auml;",desc:"LATIN CAPITAL LETTER A WITH DIAERESIS "},{"char":"&Aring;",desc:"LATIN CAPITAL LETTER A WITH RING ABOVE"},{"char":"&AElig;",desc:"LATIN CAPITAL LETTER AE"},{"char":"&Ccedil;",desc:"LATIN CAPITAL LETTER C WITH CEDILLA"},{"char":"&Egrave;",desc:"LATIN CAPITAL LETTER E WITH GRAVE"},{"char":"&Eacute;",desc:"LATIN CAPITAL LETTER E WITH ACUTE"},{"char":"&Ecirc;",desc:"LATIN CAPITAL LETTER E WITH CIRCUMFLEX"},{"char":"&Euml;",desc:"LATIN CAPITAL LETTER E WITH DIAERESIS"},{"char":"&Igrave;",desc:"LATIN CAPITAL LETTER I WITH GRAVE"},{"char":"&Iacute;",desc:"LATIN CAPITAL LETTER I WITH ACUTE"},{"char":"&Icirc;",desc:"LATIN CAPITAL LETTER I WITH CIRCUMFLEX"},{"char":"&Iuml;",desc:"LATIN CAPITAL LETTER I WITH DIAERESIS"},{"char":"&ETH;",desc:"LATIN CAPITAL LETTER ETH"},{"char":"&Ntilde;",desc:"LATIN CAPITAL LETTER N WITH TILDE"},{"char":"&Ograve;",desc:"LATIN CAPITAL LETTER O WITH GRAVE"},{"char":"&Oacute;",desc:"LATIN CAPITAL LETTER O WITH ACUTE"},{"char":"&Ocirc;",desc:"LATIN CAPITAL LETTER O WITH CIRCUMFLEX"},{"char":"&Otilde;",desc:"LATIN CAPITAL LETTER O WITH TILDE"},{"char":"&Ouml;",desc:"LATIN CAPITAL LETTER O WITH DIAERESIS"},{"char":"&times;",desc:"MULTIPLICATION SIGN"},{"char":"&Oslash;",desc:"LATIN CAPITAL LETTER O WITH STROKE"},{"char":"&Ugrave;",desc:"LATIN CAPITAL LETTER U WITH GRAVE"},{"char":"&Uacute;",desc:"LATIN CAPITAL LETTER U WITH ACUTE"},{"char":"&Ucirc;",desc:"LATIN CAPITAL LETTER U WITH CIRCUMFLEX"},{"char":"&Uuml;",desc:"LATIN CAPITAL LETTER U WITH DIAERESIS"},{"char":"&Yacute;",desc:"LATIN CAPITAL LETTER Y WITH ACUTE"},{"char":"&THORN;",desc:"LATIN CAPITAL LETTER THORN"},{"char":"&szlig;",desc:"LATIN SMALL LETTER SHARP S"},{"char":"&agrave;",desc:"LATIN SMALL LETTER A WITH GRAVE"},{"char":"&aacute;",desc:"LATIN SMALL LETTER A WITH ACUTE "},{"char":"&acirc;",desc:"LATIN SMALL LETTER A WITH CIRCUMFLEX"},{"char":"&atilde;",desc:"LATIN SMALL LETTER A WITH TILDE"},{"char":"&auml;",desc:"LATIN SMALL LETTER A WITH DIAERESIS"},{"char":"&aring;",desc:"LATIN SMALL LETTER A WITH RING ABOVE"},{"char":"&aelig;",desc:"LATIN SMALL LETTER AE"},{"char":"&ccedil;",desc:"LATIN SMALL LETTER C WITH CEDILLA"},{"char":"&egrave;",desc:"LATIN SMALL LETTER E WITH GRAVE"},{"char":"&eacute;",desc:"LATIN SMALL LETTER E WITH ACUTE"},{"char":"&ecirc;",desc:"LATIN SMALL LETTER E WITH CIRCUMFLEX"},{"char":"&euml;",desc:"LATIN SMALL LETTER E WITH DIAERESIS"},{"char":"&igrave;",desc:"LATIN SMALL LETTER I WITH GRAVE"},{"char":"&iacute;",desc:"LATIN SMALL LETTER I WITH ACUTE"},{"char":"&icirc;",desc:"LATIN SMALL LETTER I WITH CIRCUMFLEX"},{"char":"&iuml;",desc:"LATIN SMALL LETTER I WITH DIAERESIS"},{"char":"&eth;",desc:"LATIN SMALL LETTER ETH"},{"char":"&ntilde;",desc:"LATIN SMALL LETTER N WITH TILDE"},{"char":"&ograve;",desc:"LATIN SMALL LETTER O WITH GRAVE"},{"char":"&oacute;",desc:"LATIN SMALL LETTER O WITH ACUTE"},{"char":"&ocirc;",desc:"LATIN SMALL LETTER O WITH CIRCUMFLEX"},{"char":"&otilde;",desc:"LATIN SMALL LETTER O WITH TILDE"},{"char":"&ouml;",desc:"LATIN SMALL LETTER O WITH DIAERESIS"},{"char":"&divide;",desc:"DIVISION SIGN"},{"char":"&oslash;",desc:"LATIN SMALL LETTER O WITH STROKE"},{"char":"&ugrave;",desc:"LATIN SMALL LETTER U WITH GRAVE"},{"char":"&uacute;",desc:"LATIN SMALL LETTER U WITH ACUTE"},{"char":"&ucirc;",desc:"LATIN SMALL LETTER U WITH CIRCUMFLEX"},{"char":"&uuml;",desc:"LATIN SMALL LETTER U WITH DIAERESIS"},{"char":"&yacute;",desc:"LATIN SMALL LETTER Y WITH ACUTE"},{"char":"&thorn;",desc:"LATIN SMALL LETTER THORN"},{"char":"&yuml;",desc:"LATIN SMALL LETTER Y WITH DIAERESIS"}]},{title:"Greek",list:[{"char":"&Alpha;",desc:"GREEK CAPITAL LETTER ALPHA"},{"char":"&Beta;",desc:"GREEK CAPITAL LETTER BETA"},{"char":"&Gamma;",desc:"GREEK CAPITAL LETTER GAMMA"},{"char":"&Delta;",desc:"GREEK CAPITAL LETTER DELTA"},{"char":"&Epsilon;",desc:"GREEK CAPITAL LETTER EPSILON"},{"char":"&Zeta;",desc:"GREEK CAPITAL LETTER ZETA"},{"char":"&Eta;",desc:"GREEK CAPITAL LETTER ETA"},{"char":"&Theta;",desc:"GREEK CAPITAL LETTER THETA"},{"char":"&Iota;",desc:"GREEK CAPITAL LETTER IOTA"},{"char":"&Kappa;",desc:"GREEK CAPITAL LETTER KAPPA"},{"char":"&Lambda;",desc:"GREEK CAPITAL LETTER LAMBDA"},{"char":"&Mu;",desc:"GREEK CAPITAL LETTER MU"},{"char":"&Nu;",desc:"GREEK CAPITAL LETTER NU"},{"char":"&Xi;",desc:"GREEK CAPITAL LETTER XI"},{"char":"&Omicron;",desc:"GREEK CAPITAL LETTER OMICRON"},{"char":"&Pi;",desc:"GREEK CAPITAL LETTER PI"},{"char":"&Rho;",desc:"GREEK CAPITAL LETTER RHO"},{"char":"&Sigma;",desc:"GREEK CAPITAL LETTER SIGMA"},{"char":"&Tau;",desc:"GREEK CAPITAL LETTER TAU"},{"char":"&Upsilon;",desc:"GREEK CAPITAL LETTER UPSILON"},{"char":"&Phi;",desc:"GREEK CAPITAL LETTER PHI"},{"char":"&Chi;",desc:"GREEK CAPITAL LETTER CHI"},{"char":"&Psi;",desc:"GREEK CAPITAL LETTER PSI"},{"char":"&Omega;",desc:"GREEK CAPITAL LETTER OMEGA"},{"char":"&alpha;",desc:"GREEK SMALL LETTER ALPHA"},{"char":"&beta;",desc:"GREEK SMALL LETTER BETA"},{"char":"&gamma;",desc:"GREEK SMALL LETTER GAMMA"},{"char":"&delta;",desc:"GREEK SMALL LETTER DELTA"},{"char":"&epsilon;",desc:"GREEK SMALL LETTER EPSILON"},{"char":"&zeta;",desc:"GREEK SMALL LETTER ZETA"},{"char":"&eta;",desc:"GREEK SMALL LETTER ETA"},{"char":"&theta;",desc:"GREEK SMALL LETTER THETA"},{"char":"&iota;",desc:"GREEK SMALL LETTER IOTA"},{"char":"&kappa;",desc:"GREEK SMALL LETTER KAPPA"},{"char":"&lambda;",desc:"GREEK SMALL LETTER LAMBDA"},{"char":"&mu;",desc:"GREEK SMALL LETTER MU"},{"char":"&nu;",desc:"GREEK SMALL LETTER NU"},{"char":"&xi;",desc:"GREEK SMALL LETTER XI"},{"char":"&omicron;",desc:"GREEK SMALL LETTER OMICRON"},{"char":"&pi;",desc:"GREEK SMALL LETTER PI"},{"char":"&rho;",desc:"GREEK SMALL LETTER RHO"},{"char":"&sigmaf;",desc:"GREEK SMALL LETTER FINAL SIGMA"},{"char":"&sigma;",desc:"GREEK SMALL LETTER SIGMA"},{"char":"&tau;",desc:"GREEK SMALL LETTER TAU"},{"char":"&upsilon;",desc:"GREEK SMALL LETTER UPSILON"},{"char":"&phi;",desc:"GREEK SMALL LETTER PHI"},{"char":"&chi;",desc:"GREEK SMALL LETTER CHI"},{"char":"&psi;",desc:"GREEK SMALL LETTER PSI"},{"char":"&omega;",desc:"GREEK SMALL LETTER OMEGA"},{"char":"&thetasym;",desc:"GREEK THETA SYMBOL"},{"char":"&upsih;",desc:"GREEK UPSILON WITH HOOK SYMBOL"},{"char":"&straightphi;",desc:"GREEK PHI SYMBOL"},{"char":"&piv;",desc:"GREEK PI SYMBOL"},{"char":"&Gammad;",desc:"GREEK LETTER DIGAMMA"},{"char":"&gammad;",desc:"GREEK SMALL LETTER DIGAMMA"},{"char":"&varkappa;",desc:"GREEK KAPPA SYMBOL"},{"char":"&varrho;",desc:"GREEK RHO SYMBOL"},{"char":"&straightepsilon;",desc:"GREEK LUNATE EPSILON SYMBOL"},{"char":"&backepsilon;",desc:"GREEK REVERSED LUNATE EPSILON SYMBOL"}]},{title:"Cyrillic",list:[{"char":"&#x400",desc:"CYRILLIC CAPITAL LETTER IE WITH GRAVE"},{"char":"&#x401",desc:"CYRILLIC CAPITAL LETTER IO"},{"char":"&#x402",desc:"CYRILLIC CAPITAL LETTER DJE"},{"char":"&#x403",desc:"CYRILLIC CAPITAL LETTER GJE"},{"char":"&#x404",desc:"CYRILLIC CAPITAL LETTER UKRAINIAN IE"},{"char":"&#x405",desc:"CYRILLIC CAPITAL LETTER DZE"},{"char":"&#x406",desc:"CYRILLIC CAPITAL LETTER BYELORUSSIAN-UKRAINIAN I"},{"char":"&#x407",desc:"CYRILLIC CAPITAL LETTER YI"},{"char":"&#x408",desc:"CYRILLIC CAPITAL LETTER JE"},{"char":"&#x409",desc:"CYRILLIC CAPITAL LETTER LJE"},{"char":"&#x40A",desc:"CYRILLIC CAPITAL LETTER NJE"},{"char":"&#x40B",desc:"CYRILLIC CAPITAL LETTER TSHE"},{"char":"&#x40C",desc:"CYRILLIC CAPITAL LETTER KJE"},{"char":"&#x40D",desc:"CYRILLIC CAPITAL LETTER I WITH GRAVE"},{"char":"&#x40E",desc:"CYRILLIC CAPITAL LETTER SHORT U"},{"char":"&#x40F",desc:"CYRILLIC CAPITAL LETTER DZHE"},{"char":"&#x410",desc:"CYRILLIC CAPITAL LETTER A"},{"char":"&#x411",desc:"CYRILLIC CAPITAL LETTER BE"},{"char":"&#x412",desc:"CYRILLIC CAPITAL LETTER VE"},{"char":"&#x413",desc:"CYRILLIC CAPITAL LETTER GHE"},{"char":"&#x414",desc:"CYRILLIC CAPITAL LETTER DE"},{"char":"&#x415",desc:"CYRILLIC CAPITAL LETTER IE"},{"char":"&#x416",desc:"CYRILLIC CAPITAL LETTER ZHE"},{"char":"&#x417",desc:"CYRILLIC CAPITAL LETTER ZE"},{"char":"&#x418",desc:"CYRILLIC CAPITAL LETTER I"},{"char":"&#x419",desc:"CYRILLIC CAPITAL LETTER SHORT I"},{"char":"&#x41A",desc:"CYRILLIC CAPITAL LETTER KA"},{"char":"&#x41B",desc:"CYRILLIC CAPITAL LETTER EL"},{"char":"&#x41C",desc:"CYRILLIC CAPITAL LETTER EM"},{"char":"&#x41D",desc:"CYRILLIC CAPITAL LETTER EN"},{"char":"&#x41E",desc:"CYRILLIC CAPITAL LETTER O"},{"char":"&#x41F",desc:"CYRILLIC CAPITAL LETTER PE"},{"char":"&#x420",desc:"CYRILLIC CAPITAL LETTER ER"},{"char":"&#x421",desc:"CYRILLIC CAPITAL LETTER ES"},{"char":"&#x422",desc:"CYRILLIC CAPITAL LETTER TE"},{"char":"&#x423",desc:"CYRILLIC CAPITAL LETTER U"},{"char":"&#x424",desc:"CYRILLIC CAPITAL LETTER EF"},{"char":"&#x425",desc:"CYRILLIC CAPITAL LETTER HA"},{"char":"&#x426",desc:"CYRILLIC CAPITAL LETTER TSE"},{"char":"&#x427",desc:"CYRILLIC CAPITAL LETTER CHE"},{"char":"&#x428",desc:"CYRILLIC CAPITAL LETTER SHA"},{"char":"&#x429",desc:"CYRILLIC CAPITAL LETTER SHCHA"},{"char":"&#x42A",desc:"CYRILLIC CAPITAL LETTER HARD SIGN"},{"char":"&#x42B",desc:"CYRILLIC CAPITAL LETTER YERU"},{"char":"&#x42C",desc:"CYRILLIC CAPITAL LETTER SOFT SIGN"},{"char":"&#x42D",desc:"CYRILLIC CAPITAL LETTER E"},{"char":"&#x42E",desc:"CYRILLIC CAPITAL LETTER YU"},{"char":"&#x42F",desc:"CYRILLIC CAPITAL LETTER YA"},{"char":"&#x430",desc:"CYRILLIC SMALL LETTER A"},{"char":"&#x431",desc:"CYRILLIC SMALL LETTER BE"},{"char":"&#x432",desc:"CYRILLIC SMALL LETTER VE"},{"char":"&#x433",desc:"CYRILLIC SMALL LETTER GHE"},{"char":"&#x434",desc:"CYRILLIC SMALL LETTER DE"},{"char":"&#x435",desc:"CYRILLIC SMALL LETTER IE"},{"char":"&#x436",desc:"CYRILLIC SMALL LETTER ZHE"},{"char":"&#x437",desc:"CYRILLIC SMALL LETTER ZE"},{"char":"&#x438",desc:"CYRILLIC SMALL LETTER I"},{"char":"&#x439",desc:"CYRILLIC SMALL LETTER SHORT I"},{"char":"&#x43A",desc:"CYRILLIC SMALL LETTER KA"},{"char":"&#x43B",desc:"CYRILLIC SMALL LETTER EL"},{"char":"&#x43C",desc:"CYRILLIC SMALL LETTER EM"},{"char":"&#x43D",desc:"CYRILLIC SMALL LETTER EN"},{"char":"&#x43E",desc:"CYRILLIC SMALL LETTER O"},{"char":"&#x43F",desc:"CYRILLIC SMALL LETTER PE"},{"char":"&#x440",desc:"CYRILLIC SMALL LETTER ER"},{"char":"&#x441",desc:"CYRILLIC SMALL LETTER ES"},{"char":"&#x442",desc:"CYRILLIC SMALL LETTER TE"},{"char":"&#x443",desc:"CYRILLIC SMALL LETTER U"},{"char":"&#x444",desc:"CYRILLIC SMALL LETTER EF"},{"char":"&#x445",desc:"CYRILLIC SMALL LETTER HA"},{"char":"&#x446",desc:"CYRILLIC SMALL LETTER TSE"},{"char":"&#x447",desc:"CYRILLIC SMALL LETTER CHE"},{"char":"&#x448",desc:"CYRILLIC SMALL LETTER SHA"},{"char":"&#x449",desc:"CYRILLIC SMALL LETTER SHCHA"},{"char":"&#x44A",desc:"CYRILLIC SMALL LETTER HARD SIGN"},{"char":"&#x44B",desc:"CYRILLIC SMALL LETTER YERU"},{"char":"&#x44C",desc:"CYRILLIC SMALL LETTER SOFT SIGN"},{"char":"&#x44D",desc:"CYRILLIC SMALL LETTER E"},{"char":"&#x44E",desc:"CYRILLIC SMALL LETTER YU"},{"char":"&#x44F",desc:"CYRILLIC SMALL LETTER YA"},{"char":"&#x450",desc:"CYRILLIC SMALL LETTER IE WITH GRAVE"},{"char":"&#x451",desc:"CYRILLIC SMALL LETTER IO"},{"char":"&#x452",desc:"CYRILLIC SMALL LETTER DJE"},{"char":"&#x453",desc:"CYRILLIC SMALL LETTER GJE"},{"char":"&#x454",desc:"CYRILLIC SMALL LETTER UKRAINIAN IE"},{"char":"&#x455",desc:"CYRILLIC SMALL LETTER DZE"},{"char":"&#x456",desc:"CYRILLIC SMALL LETTER BYELORUSSIAN-UKRAINIAN I"},{"char":"&#x457",desc:"CYRILLIC SMALL LETTER YI"},{"char":"&#x458",desc:"CYRILLIC SMALL LETTER JE"},{"char":"&#x459",desc:"CYRILLIC SMALL LETTER LJE"},{"char":"&#x45A",desc:"CYRILLIC SMALL LETTER NJE"},{"char":"&#x45B",desc:"CYRILLIC SMALL LETTER TSHE"},{"char":"&#x45C",desc:"CYRILLIC SMALL LETTER KJE"},{"char":"&#x45D",desc:"CYRILLIC SMALL LETTER I WITH GRAVE"},{"char":"&#x45E",desc:"CYRILLIC SMALL LETTER SHORT U"},{"char":"&#x45F",desc:"CYRILLIC SMALL LETTER DZHE"}]},{title:"Punctuation",list:[{"char":"&ndash;",desc:"EN DASH"},{"char":"&mdash;",desc:"EM DASH"},{"char":"&lsquo;",desc:"LEFT SINGLE QUOTATION MARK"},{"char":"&rsquo;",desc:"RIGHT SINGLE QUOTATION MARK"},{"char":"&sbquo;",desc:"SINGLE LOW-9 QUOTATION MARK"},{"char":"&ldquo;",desc:"LEFT DOUBLE QUOTATION MARK"},{"char":"&rdquo;",desc:"RIGHT DOUBLE QUOTATION MARK"},{"char":"&bdquo;",desc:"DOUBLE LOW-9 QUOTATION MARK"},{"char":"&dagger;",desc:"DAGGER"},{"char":"&Dagger;",desc:"DOUBLE DAGGER"},{"char":"&bull;",desc:"BULLET"},{"char":"&hellip;",desc:"HORIZONTAL ELLIPSIS"},{"char":"&permil;",desc:"PER MILLE SIGN"},{"char":"&prime;",desc:"PRIME"},{"char":"&Prime;",desc:"DOUBLE PRIME"},{"char":"&lsaquo;",desc:"SINGLE LEFT-POINTING ANGLE QUOTATION MARK"},{"char":"&rsaquo;",desc:"SINGLE RIGHT-POINTING ANGLE QUOTATION MARK"},{"char":"&oline;",desc:"OVERLINE"},{"char":"&frasl;",desc:"FRACTION SLASH"}]},{title:"Currency",list:[{"char":"&#x20A0",desc:"EURO-CURRENCY SIGN"},{"char":"&#x20A1",desc:"COLON SIGN"},{"char":"&#x20A2",desc:"CRUZEIRO SIGN"},{"char":"&#x20A3",desc:"FRENCH FRANC SIGN"},{"char":"&#x20A4",desc:"LIRA SIGN"},{"char":"&#x20A5",desc:"MILL SIGN"},{"char":"&#x20A6",desc:"NAIRA SIGN"},{"char":"&#x20A7",desc:"PESETA SIGN"},{"char":"&#x20A8",desc:"RUPEE SIGN"},{"char":"&#x20A9",desc:"WON SIGN"},{"char":"&#x20AA",desc:"NEW SHEQEL SIGN"},{"char":"&#x20AB",desc:"DONG SIGN"},{"char":"&#x20AC",desc:"EURO SIGN"},{"char":"&#x20AD",desc:"KIP SIGN"},{"char":"&#x20AE",desc:"TUGRIK SIGN"},{"char":"&#x20AF",desc:"DRACHMA SIGN"},{"char":"&#x20B0",desc:"GERMAN PENNY SYMBOL"},{"char":"&#x20B1",desc:"PESO SIGN"},{"char":"&#x20B2",desc:"GUARANI SIGN"},{"char":"&#x20B3",desc:"AUSTRAL SIGN"},{"char":"&#x20B4",desc:"HRYVNIA SIGN"},{"char":"&#x20B5",desc:"CEDI SIGN"},{"char":"&#x20B6",desc:"LIVRE TOURNOIS SIGN"},{"char":"&#x20B7",desc:"SPESMILO SIGN"},{"char":"&#x20B8",desc:"TENGE SIGN"},{"char":"&#x20B9",desc:"INDIAN RUPEE SIGN"}]},{title:"Arrows",list:[{"char":"&#x2190",desc:"LEFTWARDS ARROW"},{"char":"&#x2191",desc:"UPWARDS ARROW"},{"char":"&#x2192",desc:"RIGHTWARDS ARROW"},{"char":"&#x2193",desc:"DOWNWARDS ARROW"},{"char":"&#x2194",desc:"LEFT RIGHT ARROW"},{"char":"&#x2195",desc:"UP DOWN ARROW"},{"char":"&#x2196",desc:"NORTH WEST ARROW"},{"char":"&#x2197",desc:"NORTH EAST ARROW"},{"char":"&#x2198",desc:"SOUTH EAST ARROW"},{"char":"&#x2199",desc:"SOUTH WEST ARROW"},{"char":"&#x219A",desc:"LEFTWARDS ARROW WITH STROKE"},{"char":"&#x219B",desc:"RIGHTWARDS ARROW WITH STROKE"},{"char":"&#x219C",desc:"LEFTWARDS WAVE ARROW"},{"char":"&#x219D",desc:"RIGHTWARDS WAVE ARROW"},{"char":"&#x219E",desc:"LEFTWARDS TWO HEADED ARROW"},{"char":"&#x219F",desc:"UPWARDS TWO HEADED ARROW"},{"char":"&#x21A0",desc:"RIGHTWARDS TWO HEADED ARROW"},{"char":"&#x21A1",desc:"DOWNWARDS TWO HEADED ARROW"},{"char":"&#x21A2",desc:"LEFTWARDS ARROW WITH TAIL"},{"char":"&#x21A3",desc:"RIGHTWARDS ARROW WITH TAIL"},{"char":"&#x21A4",desc:"LEFTWARDS ARROW FROM BAR"},{"char":"&#x21A5",desc:"UPWARDS ARROW FROM BAR"},{"char":"&#x21A6",desc:"RIGHTWARDS ARROW FROM BAR"},{"char":"&#x21A7",desc:"DOWNWARDS ARROW FROM BAR"},{"char":"&#x21A8",desc:"UP DOWN ARROW WITH BASE"},{"char":"&#x21A9",desc:"LEFTWARDS ARROW WITH HOOK"},{"char":"&#x21AA",desc:"RIGHTWARDS ARROW WITH HOOK"},{"char":"&#x21AB",desc:"LEFTWARDS ARROW WITH LOOP"},{"char":"&#x21AC",desc:"RIGHTWARDS ARROW WITH LOOP"},{"char":"&#x21AD",desc:"LEFT RIGHT WAVE ARROW"},{"char":"&#x21AE",desc:"LEFT RIGHT ARROW WITH STROKE"},{"char":"&#x21AF",desc:"DOWNWARDS ZIGZAG ARROW"},{"char":"&#x21B0",desc:"UPWARDS ARROW WITH TIP LEFTWARDS"},{"char":"&#x21B1",desc:"UPWARDS ARROW WITH TIP RIGHTWARDS"},{"char":"&#x21B2",desc:"DOWNWARDS ARROW WITH TIP LEFTWARDS"},{"char":"&#x21B3",desc:"DOWNWARDS ARROW WITH TIP RIGHTWARDS"},{"char":"&#x21B4",desc:"RIGHTWARDS ARROW WITH CORNER DOWNWARDS"},{"char":"&#x21B5",desc:"DOWNWARDS ARROW WITH CORNER LEFTWARDS"},{"char":"&#x21B6",desc:"ANTICLOCKWISE TOP SEMICIRCLE ARROW"},{"char":"&#x21B7",desc:"CLOCKWISE TOP SEMICIRCLE ARROW"},{"char":"&#x21B8",desc:"NORTH WEST ARROW TO LONG BAR"},{"char":"&#x21B9",desc:"LEFTWARDS ARROW TO BAR OVER RIGHTWARDS ARROW TO BAR"},{"char":"&#x21BA",desc:"ANTICLOCKWISE OPEN CIRCLE ARROW"},{"char":"&#x21BB",desc:"CLOCKWISE OPEN CIRCLE ARROW"},{"char":"&#x21BC",desc:"LEFTWARDS HARPOON WITH BARB UPWARDS"},{"char":"&#x21BD",desc:"LEFTWARDS HARPOON WITH BARB DOWNWARDS"},{"char":"&#x21BE",desc:"UPWARDS HARPOON WITH BARB RIGHTWARDS"},{"char":"&#x21BF",desc:"UPWARDS HARPOON WITH BARB LEFTWARDS"},{"char":"&#x21C0",desc:"RIGHTWARDS HARPOON WITH BARB UPWARDS"},{"char":"&#x21C1",desc:"RIGHTWARDS HARPOON WITH BARB DOWNWARDS"},{"char":"&#x21C2",desc:"DOWNWARDS HARPOON WITH BARB RIGHTWARDS"},{"char":"&#x21C3",desc:"DOWNWARDS HARPOON WITH BARB LEFTWARDS"},{"char":"&#x21C4",desc:"RIGHTWARDS ARROW OVER LEFTWARDS ARROW"},{"char":"&#x21C5",desc:"UPWARDS ARROW LEFTWARDS OF DOWNWARDS ARROW"},{"char":"&#x21C6",desc:"LEFTWARDS ARROW OVER RIGHTWARDS ARROW"},{"char":"&#x21C7",desc:"LEFTWARDS PAIRED ARROWS"},{"char":"&#x21C8",desc:"UPWARDS PAIRED ARROWS"},{"char":"&#x21C9",desc:"RIGHTWARDS PAIRED ARROWS"},{"char":"&#x21CA",desc:"DOWNWARDS PAIRED ARROWS"},{"char":"&#x21CB",desc:"LEFTWARDS HARPOON OVER RIGHTWARDS HARPOON"},{"char":"&#x21CC",desc:"RIGHTWARDS HARPOON OVER LEFTWARDS HARPOON"},{"char":"&#x21CD",desc:"LEFTWARDS DOUBLE ARROW WITH STROKE"},{"char":"&#x21CE",desc:"LEFT RIGHT DOUBLE ARROW WITH STROKE"},{"char":"&#x21CF",desc:"RIGHTWARDS DOUBLE ARROW WITH STROKE"},{"char":"&#x21D0",desc:"LEFTWARDS DOUBLE ARROW"},{"char":"&#x21D1",desc:"UPWARDS DOUBLE ARROW"},{"char":"&#x21D2",desc:"RIGHTWARDS DOUBLE ARROW"},{"char":"&#x21D3",desc:"DOWNWARDS DOUBLE ARROW"},{"char":"&#x21D4",desc:"LEFT RIGHT DOUBLE ARROW"},{"char":"&#x21D5",desc:"UP DOWN DOUBLE ARROW"},{"char":"&#x21D6",desc:"NORTH WEST DOUBLE ARROW"},{"char":"&#x21D7",desc:"NORTH EAST DOUBLE ARROW"},{"char":"&#x21D8",desc:"SOUTH EAST DOUBLE ARROW"},{"char":"&#x21D9",desc:"SOUTH WEST DOUBLE ARROW"},{"char":"&#x21DA",desc:"LEFTWARDS TRIPLE ARROW"},{"char":"&#x21DB",desc:"RIGHTWARDS TRIPLE ARROW"},{"char":"&#x21DC",desc:"LEFTWARDS SQUIGGLE ARROW"},{"char":"&#x21DD",desc:"RIGHTWARDS SQUIGGLE ARROW"},{"char":"&#x21DE",desc:"UPWARDS ARROW WITH DOUBLE STROKE"},{"char":"&#x21DF",desc:"DOWNWARDS ARROW WITH DOUBLE STROKE"},{"char":"&#x21E0",desc:"LEFTWARDS DASHED ARROW"},{"char":"&#x21E1",desc:"UPWARDS DASHED ARROW"},{"char":"&#x21E2",desc:"RIGHTWARDS DASHED ARROW"},{"char":"&#x21E3",desc:"DOWNWARDS DASHED ARROW"},{"char":"&#x21E4",desc:"LEFTWARDS ARROW TO BAR"},{"char":"&#x21E5",desc:"RIGHTWARDS ARROW TO BAR"},{"char":"&#x21E6",desc:"LEFTWARDS WHITE ARROW"},{"char":"&#x21E7",desc:"UPWARDS WHITE ARROW"},{"char":"&#x21E8",desc:"RIGHTWARDS WHITE ARROW"},{"char":"&#x21E9",desc:"DOWNWARDS WHITE ARROW"},{"char":"&#x21EA",desc:"UPWARDS WHITE ARROW FROM BAR"},{"char":"&#x21EB",desc:"UPWARDS WHITE ARROW ON PEDESTAL"},{"char":"&#x21EC",desc:"UPWARDS WHITE ARROW ON PEDESTAL WITH HORIZONTAL BAR"},{"char":"&#x21ED",desc:"UPWARDS WHITE ARROW ON PEDESTAL WITH VERTICAL BAR"},{"char":"&#x21EE",desc:"UPWARDS WHITE DOUBLE ARROW"},{"char":"&#x21EF",desc:"UPWARDS WHITE DOUBLE ARROW ON PEDESTAL"},{"char":"&#x21F0",desc:"RIGHTWARDS WHITE ARROW FROM WALL"},{"char":"&#x21F1",desc:"NORTH WEST ARROW TO CORNER"},{"char":"&#x21F2",desc:"SOUTH EAST ARROW TO CORNER"},{"char":"&#x21F3",desc:"UP DOWN WHITE ARROW"},{"char":"&#x21F4",desc:"RIGHT ARROW WITH SMALL CIRCLE"},{"char":"&#x21F5",desc:"DOWNWARDS ARROW LEFTWARDS OF UPWARDS ARROW"},{"char":"&#x21F6",desc:"THREE RIGHTWARDS ARROWS"},{"char":"&#x21F7",desc:"LEFTWARDS ARROW WITH VERTICAL STROKE"},{"char":"&#x21F8",desc:"RIGHTWARDS ARROW WITH VERTICAL STROKE"},{"char":"&#x21F9",desc:"LEFT RIGHT ARROW WITH VERTICAL STROKE"},{"char":"&#x21FA",desc:"LEFTWARDS ARROW WITH DOUBLE VERTICAL STROKE"},{"char":"&#x21FB",desc:"RIGHTWARDS ARROW WITH DOUBLE VERTICAL STROKE"},{"char":"&#x21FC",desc:"LEFT RIGHT ARROW WITH DOUBLE VERTICAL STROKE"},{"char":"&#x21FD",desc:"LEFTWARDS OPEN-HEADED ARROW"},{"char":"&#x21FE",desc:"RIGHTWARDS OPEN-HEADED ARROW"},{"char":"&#x21FF",desc:"LEFT RIGHT OPEN-HEADED ARROW"}]},{title:"Math",list:[{"char":"&forall;",desc:"FOR ALL"},{"char":"&part;",desc:"PARTIAL DIFFERENTIAL"},{"char":"&exist;",desc:"THERE EXISTS"},{"char":"&empty;",desc:"EMPTY SET"},{"char":"&nabla;",desc:"NABLA"},{"char":"&isin;",desc:"ELEMENT OF"},{"char":"&notin;",desc:"NOT AN ELEMENT OF"},{"char":"&ni;",desc:"CONTAINS AS MEMBER"},{"char":"&prod;",desc:"N-ARY PRODUCT"},{"char":"&sum;",desc:"N-ARY SUMMATION"},{"char":"&minus;",desc:"MINUS SIGN"},{"char":"&lowast;",desc:"ASTERISK OPERATOR"},{"char":"&radic;",desc:"SQUARE ROOT"},{"char":"&prop;",desc:"PROPORTIONAL TO"},{"char":"&infin;",desc:"INFINITY"},{"char":"&ang;",desc:"ANGLE"},{"char":"&and;",desc:"LOGICAL AND"},{"char":"&or;",desc:"LOGICAL OR"},{"char":"&cap;",desc:"INTERSECTION"},{"char":"&cup;",desc:"UNION"},{"char":"&int;",desc:"INTEGRAL"},{"char":"&there4;",desc:"THEREFORE"},{"char":"&sim;",desc:"TILDE OPERATOR"},{"char":"&cong;",desc:"APPROXIMATELY EQUAL TO"},{"char":"&asymp;",desc:"ALMOST EQUAL TO"},{"char":"&ne;",desc:"NOT EQUAL TO"},{"char":"&equiv;",desc:"IDENTICAL TO"},{"char":"&le;",desc:"LESS-THAN OR EQUAL TO"},{"char":"&ge;",desc:"GREATER-THAN OR EQUAL TO"},{"char":"&sub;",desc:"SUBSET OF"},{"char":"&sup;",desc:"SUPERSET OF"},{"char":"&nsub;",desc:"NOT A SUBSET OF"},{"char":"&sube;",desc:"SUBSET OF OR EQUAL TO"},{"char":"&supe;",desc:"SUPERSET OF OR EQUAL TO"},{"char":"&oplus;",desc:"CIRCLED PLUS"},{"char":"&otimes;",desc:"CIRCLED TIMES"},{"char":"&perp;",desc:"UP TACK"}]},{title:"Misc",list:[{"char":"&spades;",desc:"BLACK SPADE SUIT"},{"char":"&clubs;",desc:"BLACK CLUB SUIT"},{"char":"&hearts;",desc:"BLACK HEART SUIT"},{"char":"&diams;",desc:"BLACK DIAMOND SUIT"},{"char":"&#x2669",desc:"QUARTER NOTE"},{"char":"&#x266A",desc:"EIGHTH NOTE"},{"char":"&#x266B",desc:"BEAMED EIGHTH NOTES"},{"char":"&#x266C",desc:"BEAMED SIXTEENTH NOTES"},{"char":"&#x266D",desc:"MUSIC FLAT SIGN"},{"char":"&#x266E",desc:"MUSIC NATURAL SIGN"},{"char":"&#x2600",desc:"BLACK SUN WITH RAYS"},{"char":"&#x2601",desc:"CLOUD"},{"char":"&#x2602",desc:"UMBRELLA"},{"char":"&#x2603",desc:"SNOWMAN"},{"char":"&#x2615",desc:"HOT BEVERAGE"},{"char":"&#x2618",desc:"SHAMROCK"},{"char":"&#x262F",desc:"YIN YANG"},{"char":"&#x2714",desc:"HEAVY CHECK MARK"},{"char":"&#x2716",desc:"HEAVY MULTIPLICATION X"},{"char":"&#x2744",desc:"SNOWFLAKE"},{"char":"&#x275B",desc:"HEAVY SINGLE TURNED COMMA QUOTATION MARK ORNAMENT"},{"char":"&#x275C",desc:"HEAVY SINGLE COMMA QUOTATION MARK ORNAMENT"},{"char":"&#x275D",desc:"HEAVY DOUBLE TURNED COMMA QUOTATION MARK ORNAMENT"},{"char":"&#x275E",desc:"HEAVY DOUBLE COMMA QUOTATION MARK ORNAMENT"},{"char":"&#x2764",desc:"HEAVY BLACK HEART"}]}]}),Te.FE.PLUGINS.specialCharacters=function(s){var o,l,r="special_characters";function d(e,t){s.events.disableBlur(),e.focus(),t.preventDefault(),t.stopPropagation()}return{_init:function(){},show:function(){if(!o){var e="<h4>"+s.language.translate("Special Characters")+"</h4>",t=function(){for(var e='<div class="fr-special-characters-modal">',t=0;t<s.opts.specialCharactersSets.length;t++){for(var n=s.opts.specialCharactersSets[t],r=n.list,i='<div class="fr-special-characters-list"><p class="fr-special-characters-title">'+s.language.translate(n.title)+"</p>",a=0;a<r.length;a++){var o=r[a];i+='<span class="fr-command fr-special-character" tabIndex="-1" role="button" value="'+o["char"]+'" title="'+o.desc+'">'+o["char"]+'<span class="fr-sr-only">'+s.language.translate(o.desc)+"&nbsp;&nbsp;&nbsp;</span></span>"}e+=i+"</div>"}return e+="</div>"}(),n=s.modals.create(r,e,t);o=n.$modal,n.$head,l=n.$body,s.events.$on(Te(s.o_win),"resize",function(){(o.data("instance")||s).modals.resize(r)}),s.events.bindClick(l,".fr-special-character",function(e){var t=o.data("instance")||s,n=Te(e.currentTarget);t.specialCharacters.insert(n)}),s.events.$on(l,"keydown",function(e){var t=e.which,n=l.find("span.fr-special-character:focus:first");if(!(n.length||t!=Te.FE.KEYCODE.F10||s.keys.ctrlKey(e)||e.shiftKey)&&e.altKey)return d(l.find("span.fr-special-character:first"),e),!1;if(t==Te.FE.KEYCODE.TAB||t==Te.FE.KEYCODE.ARROW_LEFT||t==Te.FE.KEYCODE.ARROW_RIGHT){var r=null,i=null,a=!1;return t==Te.FE.KEYCODE.ARROW_LEFT||t==Te.FE.KEYCODE.ARROW_RIGHT?(i=t==Te.FE.KEYCODE.ARROW_RIGHT,a=!0):i=!e.shiftKey,n.length?(a&&(r=i?n.nextAll("span.fr-special-character:first"):n.prevAll("span.fr-special-character:first")),r&&r.length||(r=i?n.parent().next().find("span.fr-special-character:first"):n.parent().prev().find("span.fr-special-character:"+(a?"last":"first"))).length||(r=l.find("span.fr-special-character:"+(i?"first":"last")))):r=l.find("span.fr-special-character:"+(i?"first":"last")),d(r,e),!1}if(t!=Te.FE.KEYCODE.ENTER||!n.length)return!0;(o.data("instance")||s).specialCharacters.insert(n)},!0)}s.modals.show(r),s.modals.resize(r)},hide:function(){s.modals.hide(r)},insert:function(e){s.specialCharacters.hide(),s.undo.saveStep(),s.html.insert(e.attr("value"),!0),s.undo.saveStep()}}},Te.FroalaEditor.DefineIcon("specialCharacters",{template:"text",NAME:"&#937;"}),Te.FE.RegisterCommand("specialCharacters",{title:"Special Characters",icon:"specialCharacters",undo:!1,focus:!1,modal:!0,callback:function(){this.specialCharacters.show()},plugin:"specialCharacters",showOnMobile:!0}),Te.extend(Te.FE.POPUP_TEMPLATES,{"table.insert":"[_BUTTONS_][_ROWS_COLUMNS_]","table.edit":"[_BUTTONS_]","table.colors":"[_BUTTONS_][_COLORS_][_CUSTOM_COLOR_]"}),Te.extend(Te.FE.DEFAULTS,{tableInsertMaxSize:10,tableEditButtons:["tableHeader","tableRemove","|","tableRows","tableColumns","tableStyle","-","tableCells","tableCellBackground","tableCellVerticalAlign","tableCellHorizontalAlign","tableCellStyle"],tableInsertButtons:["tableBack","|"],tableResizer:!0,tableDefaultWidth:"100%",tableResizerOffset:5,tableResizingLimit:30,tableColorsButtons:["tableBack","|"],tableColors:["#61BD6D","#1ABC9C","#54ACD2","#2C82C9","#9365B8","#475577","#CCCCCC","#41A85F","#00A885","#3D8EB9","#2969B0","#553982","#28324E","#000000","#F7DA64","#FBA026","#EB6B56","#E25041","#A38F84","#EFEFEF","#FFFFFF","#FAC51C","#F37934","#D14841","#B8312F","#7C706B","#D1D5D8","REMOVE"],tableColorsStep:7,tableCellStyles:{"fr-highlighted":"Highlighted","fr-thick":"Thick"},tableStyles:{"fr-dashed-borders":"Dashed Borders","fr-alternate-rows":"Alternate Rows"},tableCellMultipleStyles:!0,tableMultipleStyles:!0,tableInsertHelper:!0,tableInsertHelperOffset:15}),Te.FE.PLUGINS.table=function(T){var A,s,i,a,r,o,b;function u(){var e=S();if(e){var t=T.popups.get("table.edit");if(t||(t=p()),t){T.popups.setContainer("table.edit",T.$sc);var n=w(e),r=(n.left+n.right)/2,i=n.bottom;T.popups.show("table.edit",r,i,n.bottom-n.top),T.edit.isDisabled()&&(1<Q().length&&T.toolbar.disable(),T.$el.removeClass("fr-no-selection"),T.edit.on(),T.button.bulkRefresh(),T.selection.setAtEnd(T.$el.find(".fr-selected-cell:last").get(0)),T.selection.restore())}}}function d(){var e,t,n,r,i=S();if(i){var a=T.popups.get("table.colors");a||(a=function(){var e="";0<T.opts.tableColorsButtons.length&&(e='<div class="fr-buttons fr-table-colors-buttons">'+T.button.buildList(T.opts.tableColorsButtons)+"</div>");var t="";T.opts.colorsHEXInput&&(t='<div class="fr-table-colors-hex-layer fr-active fr-layer" id="fr-table-colors-hex-layer-'+T.id+'"><div class="fr-input-line"><input maxlength="7" id="fr-table-colors-hex-layer-text-'+T.id+'" type="text" placeholder="'+T.language.translate("HEX Color")+'" tabIndex="1" aria-required="true"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="tableCellBackgroundCustomColor" tabIndex="2" role="button">'+T.language.translate("OK")+"</button></div></div>");var n={buttons:e,colors:function(){for(var e='<div class="fr-table-colors">',t=0;t<T.opts.tableColors.length;t++)0!==t&&t%T.opts.tableColorsStep==0&&(e+="<br>"),"REMOVE"!=T.opts.tableColors[t]?e+='<span class="fr-command" style="background: '+T.opts.tableColors[t]+';" tabIndex="-1" role="button" data-cmd="tableCellBackgroundColor" data-param1="'+T.opts.tableColors[t]+'"><span class="fr-sr-only">'+T.language.translate("Color")+" "+T.opts.tableColors[t]+"&nbsp;&nbsp;&nbsp;</span></span>":e+='<span class="fr-command" data-cmd="tableCellBackgroundColor" tabIndex="-1" role="button" data-param1="REMOVE" title="'+T.language.translate("Clear Formatting")+'">'+T.icon.create("tableColorRemove")+'<span class="fr-sr-only">'+T.language.translate("Clear Formatting")+"</span></span>";return e+="</div>"}(),custom_color:t},r=T.popups.create("table.colors",n);return T.events.$on(T.$wp,"scroll.table-colors",function(){T.popups.isVisible("table.colors")&&d()}),h=r,T.events.on("popup.tab",function(e){var t=Te(e.currentTarget);if(!T.popups.isVisible("table.colors")||!t.is("span"))return!0;var n=e.which,r=!0;if(Te.FE.KEYCODE.TAB==n){var i=h.find(".fr-buttons");r=!T.accessibility.focusToolbar(i,!!e.shiftKey)}else if(Te.FE.KEYCODE.ARROW_UP==n||Te.FE.KEYCODE.ARROW_DOWN==n||Te.FE.KEYCODE.ARROW_LEFT==n||Te.FE.KEYCODE.ARROW_RIGHT==n){var a=t.parent().find("span.fr-command"),o=a.index(t),s=T.opts.colorsStep,l=Math.floor(a.length/s),d=o%s,c=Math.floor(o/s),f=c*s+d,p=l*s;Te.FE.KEYCODE.ARROW_UP==n?f=((f-s)%p+p)%p:Te.FE.KEYCODE.ARROW_DOWN==n?f=(f+s)%p:Te.FE.KEYCODE.ARROW_LEFT==n?f=((f-1)%p+p)%p:Te.FE.KEYCODE.ARROW_RIGHT==n&&(f=(f+1)%p);var u=Te(a.get(f));T.events.disableBlur(),u.focus(),r=!1}else Te.FE.KEYCODE.ENTER==n&&(T.button.exec(t),r=!1);return!1===r&&(e.preventDefault(),e.stopPropagation()),r},!0),r;var h}()),T.popups.setContainer("table.colors",T.$sc);var o=w(i),s=(o.left+o.right)/2,l=o.bottom;e=T.popups.get("table.colors"),t=T.$el.find(".fr-selected-cell:first"),n=T.helpers.RGBToHex(t.css("background-color")),r=e.find(".fr-table-colors-hex-layer input"),e.find(".fr-selected-color").removeClass("fr-selected-color fr-active-item"),e.find('span[data-param1="'+n+'"]').addClass("fr-selected-color fr-active-item"),r.val(n).trigger("change"),T.popups.show("table.colors",s,l,o.bottom-o.top)}}function l(){0===Q().length&&T.toolbar.enable()}function c(e){if(e)return T.popups.onHide("table.insert",function(){T.popups.get("table.insert").find('.fr-table-size .fr-select-table-size > span[data-row="1"][data-col="1"]').trigger("mouseenter")}),!0;var t="";0<T.opts.tableInsertButtons.length&&(t='<div class="fr-buttons">'+T.button.buildList(T.opts.tableInsertButtons)+"</div>");var n,r={buttons:t,rows_columns:function(){for(var e='<div class="fr-table-size"><div class="fr-table-size-info">1 &times; 1</div><div class="fr-select-table-size">',t=1;t<=T.opts.tableInsertMaxSize;t++){for(var n=1;n<=T.opts.tableInsertMaxSize;n++){var r="inline-block";2<t&&!T.helpers.isMobile()&&(r="none");var i="fr-table-cell ";1==t&&1==n&&(i+=" hover"),e+='<span class="fr-command '+i+'" tabIndex="-1" data-cmd="tableInsert" data-row="'+t+'" data-col="'+n+'" data-param1="'+t+'" data-param2="'+n+'" style="display: '+r+';" role="button"><span></span><span class="fr-sr-only">'+t+" &times; "+n+"&nbsp;&nbsp;&nbsp;</span></span>"}e+='<div class="new-line"></div>'}return e+="</div></div>"}()},i=T.popups.create("table.insert",r);return T.events.$on(i,"mouseenter",".fr-table-size .fr-select-table-size .fr-table-cell",function(e){f(Te(e.currentTarget))},!0),n=i,T.events.$on(n,"focus","[tabIndex]",function(e){var t=Te(e.currentTarget);f(t)}),T.events.on("popup.tab",function(e){var t=Te(e.currentTarget);if(!T.popups.isVisible("table.insert")||!t.is("span, a"))return!0;var n,r=e.which;if(Te.FE.KEYCODE.ARROW_UP==r||Te.FE.KEYCODE.ARROW_DOWN==r||Te.FE.KEYCODE.ARROW_LEFT==r||Te.FE.KEYCODE.ARROW_RIGHT==r){if(t.is("span.fr-table-cell")){var i=t.parent().find("span.fr-table-cell"),a=i.index(t),o=T.opts.tableInsertMaxSize,s=a%o,l=Math.floor(a/o);Te.FE.KEYCODE.ARROW_UP==r?l=Math.max(0,l-1):Te.FE.KEYCODE.ARROW_DOWN==r?l=Math.min(T.opts.tableInsertMaxSize-1,l+1):Te.FE.KEYCODE.ARROW_LEFT==r?s=Math.max(0,s-1):Te.FE.KEYCODE.ARROW_RIGHT==r&&(s=Math.min(T.opts.tableInsertMaxSize-1,s+1));var d=l*o+s,c=Te(i.get(d));f(c),T.events.disableBlur(),c.focus(),n=!1}}else Te.FE.KEYCODE.ENTER==r&&(T.button.exec(t),n=!1);return!1===n&&(e.preventDefault(),e.stopPropagation()),n},!0),i}function f(e){var t=e.data("row"),n=e.data("col"),r=e.parent();r.siblings(".fr-table-size-info").html(t+" &times; "+n),r.find("> span").removeClass("hover fr-active-item");for(var i=1;i<=T.opts.tableInsertMaxSize;i++)for(var a=0;a<=T.opts.tableInsertMaxSize;a++){var o=r.find('> span[data-row="'+i+'"][data-col="'+a+'"]');i<=t&&a<=n?o.addClass("hover"):i<=t+1||i<=2&&!T.helpers.isMobile()?o.css("display","inline-block"):2<i&&!T.helpers.isMobile()&&o.css("display","none")}e.addClass("fr-active-item")}function p(e){if(e)return T.popups.onHide("table.edit",l),!0;if(0<T.opts.tableEditButtons.length){var t={buttons:'<div class="fr-buttons">'+T.button.buildList(T.opts.tableEditButtons)+"</div>"},n=T.popups.create("table.edit",t);return T.events.$on(T.$wp,"scroll.table-edit",function(){T.popups.isVisible("table.edit")&&u()}),n}return!1}function h(){if(0<Q().length){var e=Z();T.selection.setBefore(e.get(0))||T.selection.setAfter(e.get(0)),T.selection.restore(),T.popups.hide("table.edit"),e.remove(),T.toolbar.enable()}}function g(e){var t=Z();if(0<t.length){if(0<T.$el.find("th.fr-selected-cell").length&&"above"==e)return;var n,r,i,a=S(),o=x(a);r="above"==e?o.min_i:o.max_i;var s="<tr>";for(n=0;n<a[r].length;n++){if("below"==e&&r<a.length-1&&a[r][n]==a[r+1][n]||"above"==e&&0<r&&a[r][n]==a[r-1][n]){if(0===n||0<n&&a[r][n]!=a[r][n-1]){var l=Te(a[r][n]);l.attr("rowspan",parseInt(l.attr("rowspan"),10)+1)}}else s+='<td style="'+Te(a[r][n]).attr("style")+'" ><br></td>'}s+="</tr>",i=0<T.$el.find("th.fr-selected-cell").length&&"below"==e?Te(t.find("tbody").not(t.find("table tbody"))):Te(t.find("tr").not(t.find("table tr")).get(r)),"below"==e?"TBODY"==i.prop("tagName")?i.prepend(s):i.after(s):"above"==e&&(i.before(s),T.popups.isVisible("table.edit")&&u())}}function m(e,t,n){var r,i,a,o,s,l=0,d=S(n);if(e<(t=Math.min(t,d[0].length-1)))for(i=e;i<=t;i++)if(!(e<i&&d[0][i]==d[0][i-1])&&1<(o=Math.min(parseInt(d[0][i].getAttribute("colspan"),10)||1,t-e+1))&&d[0][i]==d[0][i+1])for(l=o-1,r=1;r<d.length;r++)if(d[r][i]!=d[r-1][i]){for(a=i;a<i+o;a++)if(1<(s=parseInt(d[r][a].getAttribute("colspan"),10)||1)&&d[r][a]==d[r][a+1])a+=l=Math.min(l,s-1);else if(!(l=Math.max(0,l-1)))break;if(!l)break}l&&E(d,l,"colspan",0,d.length-1,e,t)}function v(e,t,n){var r,i,a,o,s,l=0,d=S(n);if(e<(t=Math.min(t,d.length-1)))for(r=e;r<=t;r++)if(!(e<r&&d[r][0]==d[r-1][0])&&1<(o=Math.min(parseInt(d[r][0].getAttribute("rowspan"),10)||1,t-e+1))&&d[r][0]==d[r+1][0])for(l=o-1,i=1;i<d[0].length;i++)if(d[r][i]!=d[r][i-1]){for(a=r;a<r+o;a++)if(1<(s=parseInt(d[a][i].getAttribute("rowspan"),10)||1)&&d[a][i]==d[a+1][i])a+=l=Math.min(l,s-1);else if(!(l=Math.max(0,l-1)))break;if(!l)break}l&&E(d,l,"rowspan",e,t,0,d[0].length-1)}function E(e,t,n,r,i,a,o){var s,l,d;for(s=r;s<=i;s++)for(l=a;l<=o;l++)r<s&&e[s][l]==e[s-1][l]||a<l&&e[s][l]==e[s][l-1]||1<(d=parseInt(e[s][l].getAttribute(n),10)||1)&&(1<d-t?e[s][l].setAttribute(n,d-t):e[s][l].removeAttribute(n))}function C(e,t,n,r,i){v(e,t,i),m(n,r,i)}function t(e){var t=T.$el.find(".fr-selected-cell");"REMOVE"!=e?t.css("background-color",T.helpers.HEXtoRGB(e)):t.css("background-color",""),u()}function S(e){var d=[];return null==(e=e||null)&&0<Q().length&&(e=Z()),e&&e.find("tr:visible").not(e.find("table tr")).each(function(s,e){var t=Te(e),l=0;t.find("> th, > td").each(function(e,t){for(var n=Te(t),r=parseInt(n.attr("colspan"),10)||1,i=parseInt(n.attr("rowspan"),10)||1,a=s;a<s+i;a++)for(var o=l;o<l+r;o++)d[a]||(d[a]=[]),d[a][o]?l++:d[a][o]=t;l+=r})}),d}function R(e,t){for(var n=0;n<t.length;n++)for(var r=0;r<t[n].length;r++)if(t[n][r]==e)return{row:n,col:r}}function y(e,t,n){for(var r=e+1,i=t+1;r<n.length;){if(n[r][t]!=n[e][t]){r--;break}r++}for(r==n.length&&r--;i<n[e].length;){if(n[e][i]!=n[e][t]){i--;break}i++}return i==n[e].length&&i--,{row:r,col:i}}function L(){T.el.querySelector(".fr-cell-fixed")&&T.el.querySelector(".fr-cell-fixed").classList.remove("fr-cell-fixed"),T.el.querySelector(".fr-cell-handler")&&T.el.querySelector(".fr-cell-handler").classList.remove("fr-cell-handler")}function _(){var e=T.$el.find(".fr-selected-cell");0<e.length&&e.each(function(){var e=Te(this);e.removeClass("fr-selected-cell"),""===e.attr("class")&&e.removeAttr("class")}),L()}function N(){T.events.disableBlur(),T.selection.clear(),T.$el.addClass("fr-no-selection"),T.$el.blur(),T.events.enableBlur()}function x(e){var t=T.$el.find(".fr-selected-cell");if(0<t.length){var n,r=e.length,i=0,a=e[0].length,o=0;for(n=0;n<t.length;n++){var s=R(t[n],e),l=y(s.row,s.col,e);r=Math.min(s.row,r),i=Math.max(l.row,i),a=Math.min(s.col,a),o=Math.max(l.col,o)}return{min_i:r,max_i:i,min_j:a,max_j:o}}return null}function w(e){var t=x(e),n=Te(e[t.min_i][t.min_j]),r=Te(e[t.min_i][t.max_j]),i=Te(e[t.max_i][t.min_j]);return{left:n.length&&n.offset().left,right:r.length&&r.offset().left+r.outerWidth(),top:n.length&&n.offset().top,bottom:i.length&&i.offset().top+i.outerHeight()}}function O(t,n){if(Te(t).is(n))_(),Te(t).addClass("fr-selected-cell");else{N(),T.edit.off();var r=S(),i=R(t,r),a=R(n,r),o=function e(t,n,r,i,a){var o,s,l,d,c=t,f=n,p=r,u=i;for(o=c;o<=f;o++)(1<(parseInt(Te(a[o][p]).attr("rowspan"),10)||1)||1<(parseInt(Te(a[o][p]).attr("colspan"),10)||1))&&(d=y((l=R(a[o][p],a)).row,l.col,a),c=Math.min(l.row,c),f=Math.max(d.row,f),p=Math.min(l.col,p),u=Math.max(d.col,u)),(1<(parseInt(Te(a[o][u]).attr("rowspan"),10)||1)||1<(parseInt(Te(a[o][u]).attr("colspan"),10)||1))&&(d=y((l=R(a[o][u],a)).row,l.col,a),c=Math.min(l.row,c),f=Math.max(d.row,f),p=Math.min(l.col,p),u=Math.max(d.col,u));for(s=p;s<=u;s++)(1<(parseInt(Te(a[c][s]).attr("rowspan"),10)||1)||1<(parseInt(Te(a[c][s]).attr("colspan"),10)||1))&&(d=y((l=R(a[c][s],a)).row,l.col,a),c=Math.min(l.row,c),f=Math.max(d.row,f),p=Math.min(l.col,p),u=Math.max(d.col,u)),(1<(parseInt(Te(a[f][s]).attr("rowspan"),10)||1)||1<(parseInt(Te(a[f][s]).attr("colspan"),10)||1))&&(d=y((l=R(a[f][s],a)).row,l.col,a),c=Math.min(l.row,c),f=Math.max(d.row,f),p=Math.min(l.col,p),u=Math.max(d.col,u));return c==t&&f==n&&p==r&&u==i?{min_i:t,max_i:n,min_j:r,max_j:i}:e(c,f,p,u,a)}(Math.min(i.row,a.row),Math.max(i.row,a.row),Math.min(i.col,a.col),Math.max(i.col,a.col),r);_(),t.classList.add("fr-cell-fixed"),n.classList.add("fr-cell-handler");for(var s=o.min_i;s<=o.max_i;s++)for(var l=o.min_j;l<=o.max_j;l++)Te(r[s][l]).addClass("fr-selected-cell")}}function I(e){var t=null,n=Te(e.target);return"TD"==e.target.tagName||"TH"==e.target.tagName?t=e.target:0<n.closest("td",n.closest("tr")[0]).length?t=n.closest("td",n.closest("tr")[0]).get(0):0<n.closest("th",n.closest("thead")[0]).length&&(t=n.closest("th",n.closest("thead")[0]).get(0)),0===T.$el.find(t).length?null:t}function k(){_(),T.popups.hide("table.edit")}function e(e){var t=I(e);if("false"==Te(t).parents("[contenteditable]:not(.fr-element):not(.fr-img-caption):not(body):first").attr("contenteditable"))return!0;if(0<Q().length&&!t&&k(),!T.edit.isDisabled()||T.popups.isVisible("table.edit"))if(1!=e.which||1==e.which&&T.helpers.isMac()&&e.ctrlKey)(3==e.which||1==e.which&&T.helpers.isMac()&&e.ctrlKey)&&t&&k();else if(a=!0,t){0<Q().length&&!e.shiftKey&&k(),e.stopPropagation(),T.events.trigger("image.hideResizer"),T.events.trigger("video.hideResizer"),i=!0;var n=t.tagName.toLowerCase();e.shiftKey&&0<T.$el.find(n+".fr-selected-cell").length?Te(T.$el.find(n+".fr-selected-cell").closest("table")).is(Te(t).closest("table"))?O(r,t):N():((T.keys.ctrlKey(e)||e.shiftKey)&&(1<Q().length||0===Te(t).find(T.selection.element()).length&&!Te(t).is(T.selection.element()))&&N(),r=t,0<T.opts.tableEditButtons.length&&O(r,r))}}function n(e){if(T.popups.areVisible())return!0;if(i||T.$tb.is(e.target)||T.$tb.is(Te(e.target).closest(T.$tb.get(0)))||(0<Q().length&&T.toolbar.enable(),_()),!(1!=e.which||1==e.which&&T.helpers.isMac()&&e.ctrlKey)){if(a=!1,i)i=!1,I(e)||1!=Q().length?0<Q().length&&(T.selection.isCollapsed()?u():(_(),T.edit.on())):(_(),T.edit.on());if(b){b=!1,A.removeClass("fr-moving"),T.$el.removeClass("fr-no-selection"),T.edit.on();var t=parseFloat(A.css("left"))+T.opts.tableResizerOffset+T.$wp.offset().left;T.opts.iframe&&(t-=T.$iframe.offset().left),A.data("release-position",t),A.removeData("max-left"),A.removeData("max-right"),function(){var e=A.data("origin"),t=A.data("release-position");if(e!==t){var n=A.data("first"),r=A.data("second"),i=A.data("table"),a=i.outerWidth();if(T.undo.canDo()||T.undo.saveStep(),null!==n&&null!==r){var o,s,l,d=S(i),c=[],f=[],p=[],u=[];for(o=0;o<d.length;o++)s=Te(d[o][n]),l=Te(d[o][r]),c[o]=s.outerWidth(),p[o]=l.outerWidth(),f[o]=c[o]/a*100,u[o]=p[o]/a*100;for(o=0;o<d.length;o++)if(s=Te(d[o][n]),l=Te(d[o][r]),d[o][n]!=d[o][r]){var h=(f[o]*(c[o]+t-e)/c[o]).toFixed(4);s.css("width",h+"%"),l.css("width",(f[o]+u[o]-h).toFixed(4)+"%")}}else{var g,m=i.parent(),v=a/m.width()*100,E=(parseInt(i.css("margin-left"),10)||0)/m.width()*100,b=(parseInt(i.css("margin-right"),10)||0)/m.width()*100;"rtl"==T.opts.direction&&0===r||"rtl"!=T.opts.direction&&0!==r?(g=(a+t-e)/a*v,i.css("margin-right","calc(100% - "+Math.round(g).toFixed(4)+"% - "+Math.round(E).toFixed(4)+"%)")):("rtl"==T.opts.direction&&0!==r||"rtl"!=T.opts.direction&&0===r)&&(g=(a-t+e)/a*v,i.css("margin-left","calc(100% - "+Math.round(g).toFixed(4)+"% - "+Math.round(b).toFixed(4)+"%)")),i.css("width",Math.round(g).toFixed(4)+"%")}T.selection.restore(),T.undo.saveStep(),T.events.trigger("table.resized",[i.get(0)])}A.removeData("origin"),A.removeData("release-position"),A.removeData("first"),A.removeData("second"),A.removeData("table")}(),B()}}}function D(e){if(!0===i&&0<T.opts.tableEditButtons.length){if(Te(e.currentTarget).closest("table").is(Z())){if("TD"==e.currentTarget.tagName&&0===T.$el.find("th.fr-selected-cell").length)return void O(r,e.currentTarget);if("TH"==e.currentTarget.tagName&&0===T.$el.find("td.fr-selected-cell").length)return void O(r,e.currentTarget)}N()}}function F(e,t,n,r){for(var i,a=t;a!=T.el&&"TD"!=a.tagName&&"TH"!=a.tagName&&("up"==r?i=a.previousElementSibling:"down"==r&&(i=a.nextElementSibling),!i);)a=a.parentNode;"TD"==a.tagName||"TH"==a.tagName?function(e,t){for(var n=e;n&&"TABLE"!=n.tagName&&n.parentNode!=T.el;)n=n.parentNode;if(n&&"TABLE"==n.tagName){var r=S(Te(n));"up"==t?M(R(e,r),n,r):"down"==t&&$(R(e,r),n,r)}}(a,r):i&&("up"==r&&T.selection.setAtEnd(i),"down"==r&&T.selection.setAtStart(i))}function M(e,t,n){0<e.row?T.selection.setAtEnd(n[e.row-1][e.col]):F(0,t,0,"up")}function $(e,t,n){var r=parseInt(n[e.row][e.col].getAttribute("rowspan"),10)||1;e.row<n.length-r?T.selection.setAtStart(n[e.row+r][e.col]):F(0,t,0,"down")}function B(){A&&(A.find("div").css("opacity",0),A.css("top",0),A.css("left",0),A.css("height",0),A.find("div").css("height",0),A.hide())}function P(){s&&s.removeClass("fr-visible").css("left","-9999px")}function U(e,t){var n=Te(t),r=n.closest("table"),i=r.parent();if(t&&"TD"!=t.tagName&&"TH"!=t.tagName&&(0<n.closest("td").length?t=n.closest("td"):0<n.closest("th").length&&(t=n.closest("th"))),!t||"TD"!=t.tagName&&"TH"!=t.tagName)A&&n.get(0)!=A.get(0)&&n.parent().get(0)!=A.get(0)&&T.core.sameInstance(A)&&B();else{if(n=Te(t),0===T.$el.find(n).length)return!1;var a=n.offset().left-1,o=a+n.outerWidth();if(Math.abs(e.pageX-a)<=T.opts.tableResizerOffset||Math.abs(o-e.pageX)<=T.opts.tableResizerOffset){var s,l,d,c,f,p=S(r),u=R(t,p),h=y(u.row,u.col,p),g=r.offset().top,m=r.outerHeight()-1;"rtl"!=T.opts.direction?e.pageX-a<=T.opts.tableResizerOffset?(d=a,0<u.col?(c=a-Y(u.col-1,p)+T.opts.tableResizingLimit,f=a+Y(u.col,p)-T.opts.tableResizingLimit,s=u.col-1,l=u.col):(s=null,l=0,c=r.offset().left-1-parseInt(r.css("margin-left"),10),f=r.offset().left-1+r.width()-p[0].length*T.opts.tableResizingLimit)):o-e.pageX<=T.opts.tableResizerOffset&&(d=o,h.col<p[h.row].length&&p[h.row][h.col+1]?(c=o-Y(h.col,p)+T.opts.tableResizingLimit,f=o+Y(h.col+1,p)-T.opts.tableResizingLimit,s=h.col,l=h.col+1):(s=h.col,l=null,c=r.offset().left-1+p[0].length*T.opts.tableResizingLimit,f=i.offset().left-1+i.width()+parseFloat(i.css("padding-left")))):o-e.pageX<=T.opts.tableResizerOffset?(d=o,0<u.col?(c=o-Y(u.col,p)+T.opts.tableResizingLimit,f=o+Y(u.col-1,p)-T.opts.tableResizingLimit,s=u.col,l=u.col-1):(s=null,l=0,c=r.offset().left+p[0].length*T.opts.tableResizingLimit,f=i.offset().left-1+i.width()+parseFloat(i.css("padding-left")))):e.pageX-a<=T.opts.tableResizerOffset&&(d=a,h.col<p[h.row].length&&p[h.row][h.col+1]?(c=a-Y(h.col+1,p)+T.opts.tableResizingLimit,f=a+Y(h.col,p)-T.opts.tableResizingLimit,s=h.col+1,l=h.col):(s=h.col,l=null,c=i.offset().left+parseFloat(i.css("padding-left")),f=r.offset().left-1+r.width()-p[0].length*T.opts.tableResizingLimit)),A||(T.shared.$table_resizer||(T.shared.$table_resizer=Te('<div class="fr-table-resizer"><div></div></div>')),A=T.shared.$table_resizer,T.events.$on(A,"mousedown",function(e){return!T.core.sameInstance(A)||(0<Q().length&&k(),1==e.which?(T.selection.save(),b=!0,A.addClass("fr-moving"),N(),T.edit.off(),A.find("div").css("opacity",1),!1):void 0)}),T.events.$on(A,"mousemove",function(e){if(!T.core.sameInstance(A))return!0;b&&(T.opts.iframe&&(e.pageX-=T.$iframe.offset().left),V(e))}),T.events.on("shared.destroy",function(){A.html("").removeData().remove(),A=null},!0),T.events.on("destroy",function(){T.$el.find(".fr-selected-cell").removeClass("fr-selected-cell"),A.hide().appendTo(Te("body:first"))},!0)),A.data("table",r),A.data("first",s),A.data("second",l),A.data("instance",T),T.$wp.append(A);var v=d-T.win.pageXOffset-T.opts.tableResizerOffset-T.$wp.offset().left,E=g-T.$wp.offset().top+T.$wp.scrollTop();T.opts.iframe&&(v+=T.$iframe.offset().left,E+=T.$iframe.offset().top,c+=T.$iframe.offset().left,f+=T.$iframe.offset().left),A.data("max-left",c),A.data("max-right",f),A.data("origin",d-T.win.pageXOffset),A.css("top",E),A.css("left",v),A.css("height",m),A.find("div").css("height",m),A.css("padding-left",T.opts.tableResizerOffset),A.css("padding-right",T.opts.tableResizerOffset),A.show()}else T.core.sameInstance(A)&&B()}}function K(e,t){if(T.$box.find(".fr-line-breaker").is(":visible"))return!1;s||q(),T.$box.append(s),s.data("instance",T);var n,r=Te(t).find("tr:first"),i=e.pageX,a=0,o=0;T.opts.iframe&&(a+=T.$iframe.offset().left-T.helpers.scrollLeft(),o+=T.$iframe.offset().top-T.helpers.scrollTop()),r.find("th, td").each(function(){var e=Te(this);return e.offset().left<=i&&i<e.offset().left+e.outerWidth()/2?(n=parseInt(s.find("a").css("width"),10),s.css("top",o+e.offset().top-T.$box.offset().top-n-5),s.css("left",a+e.offset().left-T.$box.offset().left-n/2),s.data("selected-cell",e),s.data("position","before"),s.addClass("fr-visible"),!1):e.offset().left+e.outerWidth()/2<=i&&i<e.offset().left+e.outerWidth()?(n=parseInt(s.find("a").css("width"),10),s.css("top",o+e.offset().top-T.$box.offset().top-n-5),s.css("left",a+e.offset().left-T.$box.offset().left+e.outerWidth()-n/2),s.data("selected-cell",e),s.data("position","after"),s.addClass("fr-visible"),!1):void 0})}function H(e,t){if(T.$box.find(".fr-line-breaker").is(":visible"))return!1;s||q(),T.$box.append(s),s.data("instance",T);var n,r=Te(t),i=e.pageY,a=0,o=0;T.opts.iframe&&(a+=T.$iframe.offset().left-T.helpers.scrollLeft(),o+=T.$iframe.offset().top-T.helpers.scrollTop()),r.find("tr").each(function(){var e=Te(this);return e.offset().top<=i&&i<e.offset().top+e.outerHeight()/2?(n=parseInt(s.find("a").css("width"),10),s.css("top",o+e.offset().top-T.$box.offset().top-n/2),s.css("left",a+e.offset().left-T.$box.offset().left-n-5),s.data("selected-cell",e.find("td:first")),s.data("position","above"),s.addClass("fr-visible"),!1):e.offset().top+e.outerHeight()/2<=i&&i<e.offset().top+e.outerHeight()?(n=parseInt(s.find("a").css("width"),10),s.css("top",o+e.offset().top-T.$box.offset().top+e.outerHeight()-n/2),s.css("left",a+e.offset().left-T.$box.offset().left-n-5),s.data("selected-cell",e.find("td:first")),s.data("position","below"),s.addClass("fr-visible"),!1):void 0})}function W(e){o=null;var t=T.doc.elementFromPoint(e.pageX-T.win.pageXOffset,e.pageY-T.win.pageYOffset);T.opts.tableResizer&&(!T.popups.areVisible()||T.popups.areVisible()&&T.popups.isVisible("table.edit"))&&U(e,t),!T.opts.tableInsertHelper||T.popups.areVisible()||T.$tb.hasClass("fr-inline")&&T.$tb.is(":visible")||function(e,t){if(0===Q().length){var n,r,i;if(t&&("HTML"==t.tagName||"BODY"==t.tagName||T.node.isElement(t)))for(n=1;n<=T.opts.tableInsertHelperOffset;n++){if(r=T.doc.elementFromPoint(e.pageX-T.win.pageXOffset,e.pageY-T.win.pageYOffset+n),Te(r).hasClass("fr-tooltip"))return;if(r&&("TH"==r.tagName||"TD"==r.tagName||"TABLE"==r.tagName)&&(Te(r).parents(".fr-wrapper").length||T.opts.iframe)&&"false"!=Te(r).closest("table").attr("contenteditable"))return K(e,Te(r).closest("table"));if(i=T.doc.elementFromPoint(e.pageX-T.win.pageXOffset+n,e.pageY-T.win.pageYOffset),Te(i).hasClass("fr-tooltip"))return;if(i&&("TH"==i.tagName||"TD"==i.tagName||"TABLE"==i.tagName)&&(Te(i).parents(".fr-wrapper").length||T.opts.iframe)&&"false"!=Te(i).closest("table").attr("contenteditable"))return H(e,Te(i).closest("table"))}T.core.sameInstance(s)&&P()}}(e,t)}function z(){if(b){var e=A.data("table").offset().top-T.win.pageYOffset;T.opts.iframe&&(e+=T.$iframe.offset().top-T.helpers.scrollTop()),A.css("top",e)}}function Y(e,t){var n,r=Te(t[0][e]).outerWidth();for(n=1;n<t.length;n++)r=Math.min(r,Te(t[n][e]).outerWidth());return r}function G(e,t,n){var r,i=0;for(r=e;r<=t;r++)i+=Y(r,n);return i}function V(e){if(1<Q().length&&a&&N(),!1===a&&!1===i&&!1===b)o&&clearTimeout(o),T.edit.isDisabled()&&!T.popups.isVisible("table.edit")||(o=setTimeout(W,30,e));else if(b){var t=e.pageX-T.win.pageXOffset;T.opts.iframe&&(t+=T.$iframe.offset().left);var n=A.data("max-left"),r=A.data("max-right");n<=t&&t<=r?A.css("left",t-T.opts.tableResizerOffset-T.$wp.offset().left):t<n&&parseFloat(A.css("left"),10)>n-T.opts.tableResizerOffset?A.css("left",n-T.opts.tableResizerOffset-T.$wp.offset().left):r<t&&parseFloat(A.css("left"),10)<r-T.opts.tableResizerOffset&&A.css("left",r-T.opts.tableResizerOffset-T.$wp.offset().left)}else a&&P()}function X(e){T.node.isEmpty(e.get(0))?e.prepend(Te.FE.MARKERS):e.prepend(Te.FE.START_MARKER).append(Te.FE.END_MARKER)}function q(){T.shared.$ti_helper||(T.shared.$ti_helper=Te('<div class="fr-insert-helper"><a class="fr-floating-btn" role="button" tabIndex="-1" title="'+T.language.translate("Insert")+'"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M22,16.75 L16.75,16.75 L16.75,22 L15.25,22.000 L15.25,16.75 L10,16.75 L10,15.25 L15.25,15.25 L15.25,10 L16.75,10 L16.75,15.25 L22,15.25 L22,16.75 Z"/></svg></a></div>'),T.events.bindClick(T.shared.$ti_helper,"a",function(){var e=s.data("selected-cell"),t=s.data("position"),n=s.data("instance")||T;"before"==t?(T.undo.saveStep(),e.addClass("fr-selected-cell"),n.table.insertColumn(t),e.removeClass("fr-selected-cell"),T.undo.saveStep()):"after"==t?(T.undo.saveStep(),e.addClass("fr-selected-cell"),n.table.insertColumn(t),e.removeClass("fr-selected-cell"),T.undo.saveStep()):"above"==t?(T.undo.saveStep(),e.addClass("fr-selected-cell"),n.table.insertRow(t),e.removeClass("fr-selected-cell"),T.undo.saveStep()):"below"==t&&(T.undo.saveStep(),e.addClass("fr-selected-cell"),n.table.insertRow(t),e.removeClass("fr-selected-cell"),T.undo.saveStep()),P()}),T.events.on("shared.destroy",function(){T.shared.$ti_helper.html("").removeData().remove(),T.shared.$ti_helper=null},!0),T.events.$on(T.shared.$ti_helper,"mousemove",function(e){e.stopPropagation()},!0),T.events.$on(Te(T.o_win),"scroll",function(){P()},!0),T.events.$on(T.$wp,"scroll",function(){P()},!0)),s=T.shared.$ti_helper,T.events.on("destroy",function(){s=null}),T.tooltip.bind(T.$box,".fr-insert-helper > a.fr-floating-btn")}function j(){r=null,clearTimeout(o)}function Q(){return T.el.querySelectorAll(".fr-selected-cell")}function Z(){var e=Q();if(e.length){for(var t=e[0];t&&"TABLE"!=t.tagName&&t.parentNode!=T.el;)t=t.parentNode;return t&&"TABLE"==t.tagName?Te(t):Te([])}return Te([])}return{_init:function(){if(!T.$wp)return!1;if(!T.helpers.isMobile()){b=i=a=!1,T.events.$on(T.$el,"mousedown",e),T.popups.onShow("image.edit",function(){_(),i=a=!1}),T.popups.onShow("link.edit",function(){_(),i=a=!1}),T.events.on("commands.mousedown",function(e){0<e.parents(".fr-toolbar").length&&_()}),T.events.$on(T.$el,"mouseenter","th, td",D),T.events.$on(T.$win,"mouseup",n),T.opts.iframe&&T.events.$on(Te(T.o_win),"mouseup",n),T.events.$on(T.$win,"mousemove",V),T.events.$on(Te(T.o_win),"scroll",z),T.events.on("contentChanged",function(){0<Q().length&&(u(),T.$el.find("img").on("load.selected-cells",function(){Te(this).off("load.selected-cells"),0<Q().length&&u()}))}),T.events.$on(Te(T.o_win),"resize",function(){_()}),T.events.on("toolbar.esc",function(){if(0<Q().length)return T.events.disableBlur(),T.events.focus(),!1},!0),T.events.$on(Te(T.o_win),"keydown",function(){a&&i&&(i=a=!1,T.$el.removeClass("fr-no-selection"),T.edit.on(),T.selection.setAtEnd(T.$el.find(".fr-selected-cell:last").get(0)),T.selection.restore(),_())}),T.events.$on(T.$el,"keydown",function(e){e.shiftKey?!1===function(e){var t=Q();if(0<t.length){var n,r,i=S(),a=e.which;1==t.length?r=n=t[0]:(n=T.el.querySelector(".fr-cell-fixed"),r=T.el.querySelector(".fr-cell-handler"));var o=R(r,i);if(Te.FE.KEYCODE.ARROW_RIGHT==a){if(o.col<i[0].length-1)return O(n,i[o.row][o.col+1]),!1}else if(Te.FE.KEYCODE.ARROW_DOWN==a){if(o.row<i.length-1)return O(n,i[o.row+1][o.col]),!1}else if(Te.FE.KEYCODE.ARROW_LEFT==a){if(0<o.col)return O(n,i[o.row][o.col-1]),!1}else if(Te.FE.KEYCODE.ARROW_UP==a&&0<o.row)return O(n,i[o.row-1][o.col]),!1}}(e)&&setTimeout(function(){u()},0):function(e){var t=e.which,n=T.selection.blocks();if(n.length&&("TD"==(n=n[0]).tagName||"TH"==n.tagName)){for(var r=n;r&&"TABLE"!=r.tagName&&r.parentNode!=T.el;)r=r.parentNode;if(r&&"TABLE"==r.tagName&&(Te.FE.KEYCODE.ARROW_LEFT==t||Te.FE.KEYCODE.ARROW_UP==t||Te.FE.KEYCODE.ARROW_RIGHT==t||Te.FE.KEYCODE.ARROW_DOWN==t)&&(0<Q().length&&k(),T.browser.webkit&&(Te.FE.KEYCODE.ARROW_UP==t||Te.FE.KEYCODE.ARROW_DOWN==t))){var i=T.selection.ranges(0).startContainer;if(i.nodeType==Node.TEXT_NODE&&(Te.FE.KEYCODE.ARROW_UP==t&&(i.previousSibling&&"BR"!==i.previousSibling.tagName||i.previousSibling&&"BR"===i.previousSibling.tagName&&i.previousSibling.previousSibling)||Te.FE.KEYCODE.ARROW_DOWN==t&&(i.nextSibling&&"BR"!==i.nextSibling.tagName||i.nextSibling&&"BR"===i.nextSibling.tagName&&i.nextSibling.nextSibling)))return;e.preventDefault(),e.stopPropagation();var a=S(Te(r)),o=R(n,a);Te.FE.KEYCODE.ARROW_UP==t?M(o,r,a):Te.FE.KEYCODE.ARROW_DOWN==t&&$(o,r,a),T.selection.restore()}}}(e)}),T.events.on("keydown",function(e){if(!1===function(e){if(e.which==Te.FE.KEYCODE.TAB){var t;if(0<Q().length)t=T.$el.find(".fr-selected-cell:last");else{var n=T.selection.element();"TD"==n.tagName||"TH"==n.tagName?t=Te(n):n!=T.el&&(0<Te(n).parentsUntil(T.$el,"td").length?t=Te(n).parents("td:first"):0<Te(n).parentsUntil(T.$el,"th").length&&(t=Te(n).parents("th:first")))}if(t)return e.preventDefault(),!!(0===T.selection.get().focusOffset&&0<Te(T.selection.element()).parentsUntil(T.$el,"ol, ul").length&&(0<Te(T.selection.element()).closest("li").prev().length||Te(T.selection.element()).is("li")&&0<Te(T.selection.element()).prev().length))||(k(),e.shiftKey?0<t.prev().length?X(t.prev()):0<t.closest("tr").length&&0<t.closest("tr").prev().length?X(t.closest("tr").prev().find("td:last")):0<t.closest("tbody").length&&0<t.closest("table").find("thead tr").length&&X(t.closest("table").find("thead tr th:last")):0<t.next().length?X(t.next()):0<t.closest("tr").length&&0<t.closest("tr").next().length?X(t.closest("tr").next().find("td:first")):0<t.closest("thead").length&&0<t.closest("table").find("tbody tr").length?X(t.closest("table").find("tbody tr td:first")):(t.addClass("fr-selected-cell"),g("below"),_(),X(t.closest("tr").next().find("td:first"))),T.selection.restore(),!1)}}(e))return!1;var t=Q();if(0<t.length){if(0<t.length&&T.keys.ctrlKey(e)&&e.which==Te.FE.KEYCODE.A)return _(),T.popups.isVisible("table.edit")&&T.popups.hide("table.edit"),t=[],!0;if(e.which==Te.FE.KEYCODE.ESC&&T.popups.isVisible("table.edit"))return _(),T.popups.hide("table.edit"),e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),!(t=[]);if(1<t.length&&(e.which==Te.FE.KEYCODE.BACKSPACE||e.which==Te.FE.KEYCODE.DELETE)){T.undo.saveStep();for(var n=0;n<t.length;n++)Te(t[n]).html("<br>"),n==t.length-1&&Te(t[n]).prepend(Te.FE.MARKERS);return T.selection.restore(),T.undo.saveStep(),!(t=[])}if(1<t.length&&e.which!=Te.FE.KEYCODE.F10&&!T.keys.isBrowserAction(e))return e.preventDefault(),!(t=[])}else if(!(t=[])===function(e){if(e.altKey&&e.which==Te.FE.KEYCODE.SPACE){var t,n=T.selection.element();if("TD"==n.tagName||"TH"==n.tagName?t=n:0<Te(n).closest("td").length?t=Te(n).closest("td").get(0):0<Te(n).closest("th").length&&(t=Te(n).closest("th").get(0)),t)return e.preventDefault(),O(t,t),u(),!1}}(e))return!1},!0);var t=[];T.events.on("html.beforeGet",function(){t=Q();for(var e=0;e<t.length;e++)t[e].className=(t[e].className||"").replace(/fr-selected-cell/g,"")}),T.events.on("html.afterGet",function(){for(var e=0;e<t.length;e++)t[e].className=(t[e].className?t[e].className.trim()+" ":"")+"fr-selected-cell";t=[]}),c(!0),p(!0)}T.events.on("destroy",j)},insert:function(e,t){var n,r,i="<table "+(T.opts.tableDefaultWidth?'style="width: '+T.opts.tableDefaultWidth+';" ':"")+'class="fr-inserted-table"><tbody>',a=100/t;for(n=0;n<e;n++){for(i+="<tr>",r=0;r<t;r++)i+="<td"+(T.opts.tableDefaultWidth?' style="width: '+a.toFixed(4)+'%;"':"")+">",0===n&&0===r&&(i+=Te.FE.MARKERS),i+="<br></td>";i+="</tr>"}i+="</tbody></table>",T.html.insert(i),T.selection.restore();var o=T.$el.find(".fr-inserted-table");o.removeClass("fr-inserted-table"),T.events.trigger("table.inserted",[o.get(0)])},remove:h,insertRow:g,deleteRow:function(){var e=Z();if(0<e.length){var t,n,r,i=S(),a=x(i);if(0===a.min_i&&a.max_i==i.length-1)h();else{for(t=a.max_i;t>=a.min_i;t--){for(r=Te(e.find("tr").not(e.find("table tr")).get(t)),n=0;n<i[t].length;n++)if(0===n||i[t][n]!=i[t][n-1]){var o=Te(i[t][n]);if(1<parseInt(o.attr("rowspan"),10)){var s=parseInt(o.attr("rowspan"),10)-1;1==s?o.removeAttr("rowspan"):o.attr("rowspan",s)}if(t<i.length-1&&i[t][n]==i[t+1][n]&&(0===t||i[t][n]!=i[t-1][n])){for(var l=i[t][n],d=n;0<d&&i[t][d]==i[t][d-1];)d--;0===d?Te(e.find("tr").not(e.find("table tr")).get(t+1)).prepend(l):Te(i[t+1][d-1]).after(l)}}var c=r.parent();r.remove(),0===c.find("tr").length&&c.remove(),i=S(e)}C(0,i.length-1,0,i[0].length-1,e),0<a.min_i?T.selection.setAtEnd(i[a.min_i-1][0]):T.selection.setAtEnd(i[0][0]),T.selection.restore(),T.popups.hide("table.edit")}}},insertColumn:function(l){var e=Z();if(0<e.length){var d,c=S(),t=x(c);d="before"==l?t.min_j:t.max_j;var n,f=100/c[0].length,p=100/(c[0].length+1);e.find("th, td").each(function(){(n=Te(this)).data("old-width",n.outerWidth()/e.outerWidth()*100)}),e.find("tr").not(e.find("table tr")).each(function(e){for(var t,n=Te(this),r=0,i=0;r-1<d;){if(!(t=n.find("> th, > td").get(i))){t=null;break}t==c[e][r]?(r+=parseInt(Te(t).attr("colspan"),10)||1,i++):(r+=parseInt(Te(c[e][r]).attr("colspan"),10)||1,"after"==l&&(t=0===i?-1:n.find("> th, > td").get(i-1)))}var a,o=Te(t);if("after"==l&&d<r-1||"before"==l&&0<d&&c[e][d]==c[e][d-1]){if(0===e||0<e&&c[e][d]!=c[e-1][d]){var s=parseInt(o.attr("colspan"),10)+1;o.attr("colspan",s),o.css("width",(o.data("old-width")*p/f+p).toFixed(4)+"%"),o.removeData("old-width")}}else a=0<n.find("th").length?'<th style="width: '+p.toFixed(4)+'%;"><br></th>':'<td style="width: '+p.toFixed(4)+'%;"><br></td>',-1==t?n.prepend(a):null==t?n.append(a):"before"==l?o.before(a):"after"==l&&o.after(a)}),e.find("th, td").each(function(){(n=Te(this)).data("old-width")&&(n.css("width",(n.data("old-width")*p/f).toFixed(4)+"%"),n.removeData("old-width"))}),T.popups.isVisible("table.edit")&&u()}},deleteColumn:function(){var e=Z();if(0<e.length){var t,n,r,i=S(),a=x(i);if(0===a.min_j&&a.max_j==i[0].length-1)h();else{var o=0;for(t=0;t<i.length;t++)for(n=0;n<i[0].length;n++)(r=Te(i[t][n])).hasClass("fr-selected-cell")||(r.data("old-width",r.outerWidth()/e.outerWidth()*100),(n<a.min_j||n>a.max_j)&&(o+=r.outerWidth()/e.outerWidth()*100));for(o/=i.length,n=a.max_j;n>=a.min_j;n--)for(t=0;t<i.length;t++)if(0===t||i[t][n]!=i[t-1][n])if(r=Te(i[t][n]),1<(parseInt(r.attr("colspan"),10)||1)){var s=parseInt(r.attr("colspan"),10)-1;1==s?r.removeAttr("colspan"):r.attr("colspan",s),r.css("width",(100*(r.data("old-width")-Y(n,i))/o).toFixed(4)+"%"),r.removeData("old-width")}else{var l=Te(r.parent().get(0));r.remove(),0===l.find("> th, > td").length&&(0===l.prev().length||0===l.next().length||l.prev().find("> th[rowspan], > td[rowspan]").length<l.prev().find("> th, > td").length)&&l.remove()}C(0,i.length-1,0,i[0].length-1,e),0<a.min_j?T.selection.setAtEnd(i[a.min_i][a.min_j-1]):T.selection.setAtEnd(i[a.min_i][0]),T.selection.restore(),T.popups.hide("table.edit"),e.find("th, td").each(function(){(r=Te(this)).data("old-width")&&(r.css("width",(100*r.data("old-width")/o).toFixed(4)+"%"),r.removeData("old-width"))})}}},mergeCells:function(){if(1<Q().length&&(0===T.$el.find("th.fr-selected-cell").length||0===T.$el.find("td.fr-selected-cell").length)){L();var e,t,n=x(S()),r=T.$el.find(".fr-selected-cell"),i=Te(r[0]),a=i.parent().find(".fr-selected-cell"),o=i.closest("table"),s=i.html(),l=0;for(e=0;e<a.length;e++)l+=Te(a[e]).outerWidth();for(i.css("width",Math.min(100,l/o.outerWidth()*100).toFixed(4)+"%"),n.min_j<n.max_j&&i.attr("colspan",n.max_j-n.min_j+1),n.min_i<n.max_i&&i.attr("rowspan",n.max_i-n.min_i+1),e=1;e<r.length;e++)"<br>"!=(t=Te(r[e])).html()&&""!==t.html()&&(s+="<br>"+t.html()),t.remove();i.html(s),T.selection.setAtEnd(i.get(0)),T.selection.restore(),T.toolbar.enable(),v(n.min_i,n.max_i,o);var d=o.find("tr:empty");for(e=d.length-1;0<=e;e--)Te(d[e]).remove();m(n.min_j,n.max_j,o),u()}},splitCellVertically:function(){if(1==Q().length){var e=T.$el.find(".fr-selected-cell"),t=parseInt(e.attr("colspan"),10)||1,n=e.parent().outerWidth(),r=e.outerWidth(),i=e.clone().html("<br>"),a=S(),o=R(e.get(0),a);if(1<t){var s=Math.ceil(t/2);r=G(o.col,o.col+s-1,a)/n*100;var l=G(o.col+s,o.col+t-1,a)/n*100;1<s?e.attr("colspan",s):e.removeAttr("colspan"),1<t-s?i.attr("colspan",t-s):i.removeAttr("colspan"),e.css("width",r.toFixed(4)+"%"),i.css("width",l.toFixed(4)+"%")}else{var d;for(d=0;d<a.length;d++)if(0===d||a[d][o.col]!=a[d-1][o.col]){var c=Te(a[d][o.col]);if(!c.is(e)){var f=(parseInt(c.attr("colspan"),10)||1)+1;c.attr("colspan",f)}}r=r/n*100/2,e.css("width",r.toFixed(4)+"%"),i.css("width",r.toFixed(4)+"%")}e.after(i),_(),T.popups.hide("table.edit")}},splitCellHorizontally:function(){if(1==Q().length){var e=T.$el.find(".fr-selected-cell"),t=e.parent(),n=e.closest("table"),r=parseInt(e.attr("rowspan"),10),i=S(),a=R(e.get(0),i),o=e.clone().html("<br>");if(1<r){var s=Math.ceil(r/2);1<s?e.attr("rowspan",s):e.removeAttr("rowspan"),1<r-s?o.attr("rowspan",r-s):o.removeAttr("rowspan");for(var l=a.row+s,d=0===a.col?a.col:a.col-1;0<=d&&(i[l][d]==i[l][d-1]||0<l&&i[l][d]==i[l-1][d]);)d--;-1==d?Te(n.find("tr").not(n.find("table tr")).get(l)).prepend(o):Te(i[l][d]).after(o)}else{var c,f=Te("<tr>").append(o);for(c=0;c<i[0].length;c++)if(0===c||i[a.row][c]!=i[a.row][c-1]){var p=Te(i[a.row][c]);p.is(e)||p.attr("rowspan",(parseInt(p.attr("rowspan"),10)||1)+1)}t.after(f)}_(),T.popups.hide("table.edit")}},addHeader:function(){var e=Z();if(0<e.length&&0===e.find("th").length){var t,n="<thead><tr>",r=0;for(e.find("tr:first > td").each(function(){var e=Te(this);r+=parseInt(e.attr("colspan"),10)||1}),t=0;t<r;t++)n+="<th><br></th>";n+="</tr></thead>",e.prepend(n),u()}},removeHeader:function(){var e=Z(),t=e.find("thead");if(0<t.length)if(0===e.find("tbody tr").length)h();else if(t.remove(),0<Q().length)u();else{T.popups.hide("table.edit");var n=e.find("tbody tr:first td:first").get(0);n&&(T.selection.setAtEnd(n),T.selection.restore())}},setBackground:t,showInsertPopup:function(){var e=T.$tb.find('.fr-command[data-cmd="insertTable"]'),t=T.popups.get("table.insert");if(t||(t=c()),!t.hasClass("fr-active")){T.popups.refresh("table.insert"),T.popups.setContainer("table.insert",T.$tb);var n=e.offset().left+e.outerWidth()/2,r=T.position.getTbarPupupTop("table.insert",e);T.popups.show("table.insert",n,r,e.outerHeight())}},showEditPopup:u,showColorsPopup:d,back:function(){0<Q().length?u():(T.popups.hide("table.insert"),T.toolbar.showInline())},verticalAlign:function(e){T.$el.find(".fr-selected-cell").css("vertical-align",e)},horizontalAlign:function(e){T.$el.find(".fr-selected-cell").css("text-align",e)},applyStyle:function(e,t,n,r){if(0<t.length){if(!n){var i=Object.keys(r);i.splice(i.indexOf(e),1),t.removeClass(i.join(" "))}t.toggleClass(e)}},selectedTable:Z,selectedCells:Q,customColor:function(){var e=T.popups.get("table.colors").find(".fr-table-colors-hex-layer input");e.length&&t(e.val())},selectCells:O}},Te.FE.DefineIcon("insertTable",{NAME:"table"}),Te.FE.RegisterCommand("insertTable",{title:"Insert Table",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("table.insert")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("table.insert")):this.table.showInsertPopup()},plugin:"table"}),Te.FE.RegisterCommand("tableInsert",{callback:function(e,t,n){this.table.insert(t,n),this.popups.hide("table.insert")}}),Te.FE.DefineIcon("tableHeader",{NAME:"header",FA5NAME:"heading"}),Te.FE.RegisterCommand("tableHeader",{title:"Table Header",focus:!1,toggle:!0,callback:function(){this.popups.get("table.edit").find('.fr-command[data-cmd="tableHeader"]').hasClass("fr-active")?this.table.removeHeader():this.table.addHeader()},refresh:function(e){var t=this.table.selectedTable();0<t.length&&(0===t.find("th").length?e.removeClass("fr-active").attr("aria-pressed",!1):e.addClass("fr-active").attr("aria-pressed",!0))}}),Te.FE.DefineIcon("tableRows",{NAME:"bars"}),Te.FE.RegisterCommand("tableRows",{type:"dropdown",focus:!1,title:"Row",options:{above:"Insert row above",below:"Insert row below","delete":"Delete row"},html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=Te.FE.COMMANDS.tableRows.options;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableRows" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.language.translate(t[n])+"</a></li>");return e+="</ul>"},callback:function(e,t){"above"==t||"below"==t?this.table.insertRow(t):this.table.deleteRow()}}),Te.FE.DefineIcon("tableColumns",{NAME:"bars fa-rotate-90"}),Te.FE.RegisterCommand("tableColumns",{type:"dropdown",focus:!1,title:"Column",options:{before:"Insert column before",after:"Insert column after","delete":"Delete column"},html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=Te.FE.COMMANDS.tableColumns.options;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableColumns" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.language.translate(t[n])+"</a></li>");return e+="</ul>"},callback:function(e,t){"before"==t||"after"==t?this.table.insertColumn(t):this.table.deleteColumn()}}),Te.FE.DefineIcon("tableCells",{NAME:"square-o",FA5NAME:"square"}),Te.FE.RegisterCommand("tableCells",{type:"dropdown",focus:!1,title:"Cell",options:{merge:"Merge cells","vertical-split":"Vertical split","horizontal-split":"Horizontal split"},html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=Te.FE.COMMANDS.tableCells.options;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableCells" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.language.translate(t[n])+"</a></li>");return e+="</ul>"},callback:function(e,t){"merge"==t?this.table.mergeCells():"vertical-split"==t?this.table.splitCellVertically():this.table.splitCellHorizontally()},refreshOnShow:function(e,t){1<this.$el.find(".fr-selected-cell").length?(t.find('a[data-param1="vertical-split"]').addClass("fr-disabled").attr("aria-disabled",!0),t.find('a[data-param1="horizontal-split"]').addClass("fr-disabled").attr("aria-disabled",!0),t.find('a[data-param1="merge"]').removeClass("fr-disabled").attr("aria-disabled",!1)):(t.find('a[data-param1="merge"]').addClass("fr-disabled").attr("aria-disabled",!0),t.find('a[data-param1="vertical-split"]').removeClass("fr-disabled").attr("aria-disabled",!1),t.find('a[data-param1="horizontal-split"]').removeClass("fr-disabled").attr("aria-disabled",!1))}}),Te.FE.DefineIcon("tableRemove",{NAME:"trash"}),Te.FE.RegisterCommand("tableRemove",{title:"Remove Table",focus:!1,callback:function(){this.table.remove()}}),Te.FE.DefineIcon("tableStyle",{NAME:"paint-brush"}),Te.FE.RegisterCommand("tableStyle",{title:"Table Style",type:"dropdown",focus:!1,html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.tableStyles;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableStyle" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.language.translate(t[n])+"</a></li>");return e+="</ul>"},callback:function(e,t){this.table.applyStyle(t,this.$el.find(".fr-selected-cell").closest("table"),this.opts.tableMultipleStyles,this.opts.tableStyles)},refreshOnShow:function(e,t){var n=this.$el.find(".fr-selected-cell").closest("table");n&&t.find(".fr-command").each(function(){var e=Te(this).data("param1"),t=n.hasClass(e);Te(this).toggleClass("fr-active",t).attr("aria-selected",t)})}}),Te.FE.DefineIcon("tableCellBackground",{NAME:"tint"}),Te.FE.RegisterCommand("tableCellBackground",{title:"Cell Background",focus:!1,popup:!0,callback:function(){this.table.showColorsPopup()}}),Te.FE.RegisterCommand("tableCellBackgroundColor",{undo:!0,focus:!1,callback:function(e,t){this.table.setBackground(t)}}),Te.FE.DefineIcon("tableBack",{NAME:"arrow-left"}),Te.FE.RegisterCommand("tableBack",{title:"Back",undo:!1,focus:!1,back:!0,callback:function(){this.table.back()},refresh:function(e){0!==this.table.selectedCells().length||this.opts.toolbarInline?(e.removeClass("fr-hidden"),e.next(".fr-separator").removeClass("fr-hidden")):(e.addClass("fr-hidden"),e.next(".fr-separator").addClass("fr-hidden"))}}),Te.FE.DefineIcon("tableCellVerticalAlign",{NAME:"arrows-v",FA5NAME:"arrows-alt-v"}),Te.FE.RegisterCommand("tableCellVerticalAlign",{type:"dropdown",focus:!1,title:"Vertical Align",options:{Top:"Align Top",Middle:"Align Middle",Bottom:"Align Bottom"},html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=Te.FE.COMMANDS.tableCellVerticalAlign.options;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableCellVerticalAlign" data-param1="'+n.toLowerCase()+'" title="'+this.language.translate(t[n])+'">'+this.language.translate(n)+"</a></li>");return e+="</ul>"},callback:function(e,t){this.table.verticalAlign(t)},refreshOnShow:function(e,t){t.find('.fr-command[data-param1="'+this.$el.find(".fr-selected-cell").css("vertical-align")+'"]').addClass("fr-active").attr("aria-selected",!0)}}),Te.FE.DefineIcon("tableCellHorizontalAlign",{NAME:"align-left"}),Te.FE.DefineIcon("align-left",{NAME:"align-left"}),Te.FE.DefineIcon("align-right",{NAME:"align-right"}),Te.FE.DefineIcon("align-center",{NAME:"align-center"}),Te.FE.DefineIcon("align-justify",{NAME:"align-justify"}),Te.FE.RegisterCommand("tableCellHorizontalAlign",{type:"dropdown",focus:!1,title:"Horizontal Align",options:{left:"Align Left",center:"Align Center",right:"Align Right",justify:"Align Justify"},html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=Te.FE.COMMANDS.tableCellHorizontalAlign.options;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command fr-title" tabIndex="-1" role="option" data-cmd="tableCellHorizontalAlign" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.icon.create("align-"+n)+'<span class="fr-sr-only">'+this.language.translate(t[n])+"</span></a></li>");return e+="</ul>"},callback:function(e,t){this.table.horizontalAlign(t)},refresh:function(e){var t=this.table.selectedCells();t.length&&e.find("> *:first").replaceWith(this.icon.create("align-"+this.helpers.getAlignment(Te(t[0]))))},refreshOnShow:function(e,t){t.find('.fr-command[data-param1="'+this.helpers.getAlignment(this.$el.find(".fr-selected-cell:first"))+'"]').addClass("fr-active").attr("aria-selected",!0)}}),Te.FE.DefineIcon("tableCellStyle",{NAME:"magic"}),Te.FE.RegisterCommand("tableCellStyle",{title:"Cell Style",type:"dropdown",focus:!1,html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=this.opts.tableCellStyles;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="tableCellStyle" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.language.translate(t[n])+"</a></li>");return e+="</ul>"},callback:function(e,t){this.table.applyStyle(t,this.$el.find(".fr-selected-cell"),this.opts.tableCellMultipleStyles,this.opts.tableCellStyles)},refreshOnShow:function(e,t){var n=this.$el.find(".fr-selected-cell:first");n&&t.find(".fr-command").each(function(){var e=Te(this).data("param1"),t=n.hasClass(e);Te(this).toggleClass("fr-active",t).attr("aria-selected",t)})}}),Te.FE.RegisterCommand("tableCellBackgroundCustomColor",{title:"OK",undo:!0,callback:function(){this.table.customColor()}}),Te.FE.DefineIcon("tableColorRemove",{NAME:"eraser"}),Te.FE.URLRegEx="(^| |\\u00A0)("+Te.FE.LinkRegEx+"|([a-z0-9+-_.]{1,}@[a-z0-9+-_.]{1,}\\.[a-z0-9+-_]{1,}))$",Te.FE.PLUGINS.url=function(a){var o=null;function t(e,t,n){for(var r="";n.length&&"."==n[n.length-1];)r+=".",n=n.substring(0,n.length-1);var i=n;if(a.opts.linkConvertEmailAddress)a.helpers.isEmail(i)&&!/^mailto:.*/i.test(i)&&(i="mailto:"+i);else if(a.helpers.isEmail(i))return t+n;return/^((http|https|ftp|ftps|mailto|tel|sms|notes|data)\:)/i.test(i)||(i="//"+i),(t||"")+"<a"+(a.opts.linkAlwaysBlank?' target="_blank"':"")+(o?' rel="'+o+'"':"")+' data-fr-linked="true" href="'+i+'">'+n.replace(/&amp;/g,"&").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")+"</a>"+r}function s(){return new RegExp(Te.FE.URLRegEx,"gi")}function l(e){return a.opts.linkAlwaysNoFollow&&(o="nofollow"),a.opts.linkAlwaysBlank&&(a.opts.linkNoOpener&&(o?o+=" noopener":o="noopener"),a.opts.linkNoReferrer&&(o?o+=" noreferrer":o="noreferrer")),e.replace(s(),t)}function d(e){var t=e.split(" ");return t[t.length-1]}function n(){var t=a.selection.ranges(0),n=t.startContainer;if(!n||n.nodeType!==Node.TEXT_NODE||t.startOffset!==(n.textContent||"").length)return!1;if(function e(t){return!!t&&("A"===t.tagName||!(!t.parentNode||t.parentNode==a.el)&&e(t.parentNode))}(n))return!1;if(s().test(d(n.textContent))){Te(n).before(l(n.textContent));var r=Te(n.parentNode).find("a[data-fr-linked]");r.removeAttr("data-fr-linked"),n.parentNode.removeChild(n),a.events.trigger("url.linked",[r.get(0)])}else if(n.textContent.split(" ").length<=2&&n.previousSibling&&"A"===n.previousSibling.tagName){var i=n.previousSibling.innerText+n.textContent;s().test(d(i))&&(Te(n.previousSibling).replaceWith(l(i)),n.parentNode.removeChild(n))}}return{_init:function(){a.events.on("keypress",function(e){!a.selection.isCollapsed()||"."!=e.key&&")"!=e.key&&"("!=e.key||n()},!0),a.events.on("keydown",function(e){var t=e.which;!a.selection.isCollapsed()||t!=Te.FE.KEYCODE.ENTER&&t!=Te.FE.KEYCODE.SPACE||n()},!0),a.events.on("paste.beforeCleanup",function(e){if(a.helpers.isURL(e)){var t=null;return a.opts.linkAlwaysBlank&&(a.opts.linkNoOpener&&(t?t+=" noopener":t="noopener"),a.opts.linkNoReferrer&&(t?t+=" noreferrer":t="noreferrer")),"<a"+(a.opts.linkAlwaysBlank?' target="_blank"':"")+(t?' rel="'+t+'"':"")+' href="'+e+'" >'+e+"</a>"}})}}},Te.extend(Te.FE.POPUP_TEMPLATES,{"video.insert":"[_BUTTONS_][_BY_URL_LAYER_][_EMBED_LAYER_][_UPLOAD_LAYER_][_PROGRESS_BAR_]","video.edit":"[_BUTTONS_]","video.size":"[_BUTTONS_][_SIZE_LAYER_]"}),Te.extend(Te.FE.DEFAULTS,{videoAllowedTypes:["mp4","webm","ogg"],videoAllowedProviders:[".*"],videoDefaultAlign:"center",videoDefaultDisplay:"block",videoDefaultWidth:600,videoEditButtons:["videoReplace","videoRemove","|","videoDisplay","videoAlign","videoSize"],videoInsertButtons:["videoBack","|","videoByURL","videoEmbed","videoUpload"],videoMaxSize:52428800,videoMove:!0,videoResize:!0,videoResponsive:!1,videoSizeButtons:["videoBack","|"],videoSplitHTML:!1,videoTextNear:!0,videoUpload:!0,videoUploadMethod:"POST",videoUploadParam:"file",videoUploadParams:{},videoUploadToS3:!1,videoUploadURL:null}),Te.FE.VIDEO_PROVIDERS=[{test_regex:/^.*((youtu.be)|(youtube.com))\/((v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))?\??v?=?([^#\&\?]*).*/,url_regex:/(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/)?([0-9a-zA-Z_\-]+)(.+)?/g,url_text:"https://web.archive.org/web/20240606034029/https://www.youtube.com/embed/$1?$2",html:'<iframe width="640" height="360" src="{url}&wmode=opaque" frameborder="0" allowfullscreen></iframe>',provider:"youtube"},{test_regex:/^.*(?:vimeo.com)\/(?:channels(\/\w+\/)?|groups\/*\/videos\/\u200b\d+\/|video\/|)(\d+)(?:$|\/|\?)/,url_regex:/(?:https?:\/\/)?(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?(\/[a-zA-Z0-9_\-]+)?/i,url_text:"https://web.archive.org/web/20240606034029/https://player.vimeo.com/video/$1",html:'<iframe width="640" height="360" src="{url}" frameborder="0" allowfullscreen></iframe>',provider:"vimeo"},{test_regex:/^.+(dailymotion.com|dai.ly)\/(video|hub)?\/?([^_]+)[^#]*(#video=([^_&]+))?/,url_regex:/(?:https?:\/\/)?(?:www\.)?(?:dailymotion\.com|dai\.ly)\/(?:video|hub)?\/?(.+)/g,url_text:"https://web.archive.org/web/20240606034029/https://www.dailymotion.com/embed/video/$1",html:'<iframe width="640" height="360" src="{url}" frameborder="0" allowfullscreen></iframe>',provider:"dailymotion"},{test_regex:/^.+(screen.yahoo.com)\/[^_&]+/,url_regex:"",url_text:"",html:'<iframe width="640" height="360" src="{url}?format=embed" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allowtransparency="true"></iframe>',provider:"yahoo"},{test_regex:/^.+(rutube.ru)\/[^_&]+/,url_regex:/(?:https?:\/\/)?(?:www\.)?(?:rutube\.ru)\/(?:video)?\/?(.+)/g,url_text:"https://web.archive.org/web/20240606034029/https://rutube.ru/play/embed/$1",html:'<iframe width="640" height="360" src="{url}" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allowtransparency="true"></iframe>',provider:"rutube"},{test_regex:/^(?:.+)vidyard.com\/(?:watch)?\/?([^.&/]+)\/?(?:[^_.&]+)?/,url_regex:/^(?:.+)vidyard.com\/(?:watch)?\/?([^.&/]+)\/?(?:[^_.&]+)?/g,url_text:"https://web.archive.org/web/20240606034029/https://play.vidyard.com/$1",html:'<iframe width="640" height="360" src="{url}" frameborder="0" allowfullscreen></iframe>',provider:"vidyard"},{test_regex:/^(http(s)?:\/\/|www\.).*(\.mp4|\.mkv|\.mpg|\.mp2|\.mpeg|\.mpv|\.m4p|\.m4v|\.webm|\.ogg|\.ogv|\.avi|\.wmv|\.mov|\.flv|\.swf)$/,url_regex:"",url_text:"",html:'<video width="640" height="360" controls><source src="{url}"></video>',provider:"unknown"}],Te.FE.VIDEO_EMBED_REGEX=/^\W*((<iframe(.|\n)*>(\s|\n)*<\/iframe>)|(<embed(.|\n)*>))\W*$/i,Te.FE.PLUGINS.video=function(p){var s,c,f,u,r,n,l="https://web.archive.org/web/20240606034029/https://i.froala.com/upload",d=2,h=3,g=4,m=5,v=6,i={};function E(){var e=p.popups.get("video.insert");e.find(".fr-video-by-url-layer input").val("").trigger("change");var t=e.find(".fr-video-embed-layer textarea");t.val("").trigger("change"),(t=e.find(".fr-video-upload-layer input")).val("").trigger("change")}function a(){var e=p.popups.get("video.edit");if(e||(e=function(){var e="";if(0<p.opts.videoEditButtons.length){p.opts.videoResponsive&&(-1<p.opts.videoEditButtons.indexOf("videoSize")&&p.opts.videoEditButtons.splice(p.opts.videoEditButtons.indexOf("videoSize"),1),-1<p.opts.videoEditButtons.indexOf("videoDisplay")&&p.opts.videoEditButtons.splice(p.opts.videoEditButtons.indexOf("videoDisplay"),1),-1<p.opts.videoEditButtons.indexOf("videoAlign")&&p.opts.videoEditButtons.splice(p.opts.videoEditButtons.indexOf("videoAlign"),1)),e+='<div class="fr-buttons">',e+=p.button.buildList(p.opts.videoEditButtons);var t={buttons:e+="</div>"},n=p.popups.create("video.edit",t);return p.events.$on(p.$wp,"scroll.video-edit",function(){u&&p.popups.isVisible("video.edit")&&(p.events.disableBlur(),L(u))}),n}return!1}()),e){p.popups.setContainer("video.edit",p.$sc),p.popups.refresh("video.edit");var t=u.find("iframe, embed, video"),n=t.offset().left+t.outerWidth()/2,r=t.offset().top+t.outerHeight();p.popups.show("video.edit",n,r,t.outerHeight())}}function o(e){if(e)return p.popups.onRefresh("video.insert",E),p.popups.onHide("image.insert",X),!0;var t="";p.opts.videoUpload||-1===p.opts.videoInsertButtons.indexOf("videoUpload")||p.opts.videoInsertButtons.splice(p.opts.videoInsertButtons.indexOf("videoUpload"),1);var n=p.button.buildList(p.opts.videoInsertButtons);""!==n&&(t='<div class="fr-buttons">'+n+"</div>");var r,i="",a=p.opts.videoInsertButtons.indexOf("videoUpload"),o=p.opts.videoInsertButtons.indexOf("videoByURL"),s=p.opts.videoInsertButtons.indexOf("videoEmbed");0<=o&&(r=" fr-active",(a<o&&0<=a||s<o&&0<=s)&&(r=""),i='<div class="fr-video-by-url-layer fr-layer'+r+'" id="fr-video-by-url-layer-'+p.id+'"><div class="fr-input-line"><input id="fr-video-by-url-layer-text-'+p.id+'" type="text" placeholder="'+p.language.translate("Paste in a video URL")+'" tabIndex="1" aria-required="true"></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="videoInsertByURL" tabIndex="2" role="button">'+p.language.translate("Insert")+"</button></div></div>");var l="";0<=s&&(r=" fr-active",(a<s&&0<=a||o<s&&0<=o)&&(r=""),l='<div class="fr-video-embed-layer fr-layer'+r+'" id="fr-video-embed-layer-'+p.id+'"><div class="fr-input-line"><textarea id="fr-video-embed-layer-text'+p.id+'" type="text" placeholder="'+p.language.translate("Embedded Code")+'" tabIndex="1" aria-required="true" rows="5"></textarea></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="videoInsertEmbed" tabIndex="2" role="button">'+p.language.translate("Insert")+"</button></div></div>");var d="";0<=a&&(r=" fr-active",(s<a&&0<=s||o<a&&0<=o)&&(r=""),d='<div class="fr-video-upload-layer fr-layer'+r+'" id="fr-video-upload-layer-'+p.id+'"><strong>'+p.language.translate("Drop video")+"</strong><br>("+p.language.translate("or click")+')<div class="fr-form"><input type="file" accept="video/'+p.opts.videoAllowedTypes.join(", video/").toLowerCase()+'" tabIndex="-1" aria-labelledby="fr-video-upload-layer-'+p.id+'" role="button"></div></div>');var c={buttons:t,by_url_layer:i,embed_layer:l,upload_layer:d,progress_bar:'<div class="fr-video-progress-bar-layer fr-layer"><h3 tabIndex="-1" class="fr-message">Uploading</h3><div class="fr-loader"><span class="fr-progress"></span></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-dismiss" data-cmd="videoDismissError" tabIndex="2" role="button">OK</button></div></div>'},f=p.popups.create("video.insert",c);return function(r){p.events.$on(r,"dragover dragenter",".fr-video-upload-layer",function(){return Te(this).addClass("fr-drop"),!1},!0),p.events.$on(r,"dragleave dragend",".fr-video-upload-layer",function(){return Te(this).removeClass("fr-drop"),!1},!0),p.events.$on(r,"drop",".fr-video-upload-layer",function(e){e.preventDefault(),e.stopPropagation(),Te(this).removeClass("fr-drop");var t=e.originalEvent.dataTransfer;if(t&&t.files){var n=r.data("instance")||p;n.events.disableBlur(),n.video.upload(t.files),n.events.enableBlur()}},!0),p.helpers.isIOS()&&p.events.$on(r,"touchstart",'.fr-video-upload-layer input[type="file"]',function(){Te(this).trigger("click")},!0);p.events.$on(r,"change",'.fr-video-upload-layer input[type="file"]',function(){if(this.files){var e=r.data("instance")||p;e.events.disableBlur(),r.find("input:focus").blur(),e.events.enableBlur(),e.video.upload(this.files)}Te(this).val("")},!0)}(f),f}function b(e){p.events.focus(!0),p.selection.restore();var t=!1;u&&(V(),t=!0),p.html.insert('<span contenteditable="false" draggable="true" class="fr-jiv fr-video fr-deletable">'+e+"</span>",!1,p.opts.videoSplitHTML),p.popups.hide("video.insert");var n=p.$el.find(".fr-jiv");n.removeClass("fr-jiv"),n.toggleClass("fr-rv",p.opts.videoResponsive),q(n,p.opts.videoDefaultDisplay,p.opts.videoDefaultAlign),n.toggleClass("fr-draggable",p.opts.videoMove),p.events.trigger(t?"video.replaced":"video.inserted",[n])}function T(){var e=Te(this);p.popups.hide("video.insert"),e.removeClass("fr-uploading"),e.parent().next().is("br")&&e.parent().next().remove(),L(e.parent()),p.events.trigger("video.loaded",[e.parent()])}function A(s,e,l,d,c){p.edit.off(),R("Loading video"),e&&(s=p.helpers.sanitizeURL(s));C("Loading video"),function(){var e,t;if(d){p.undo.canDo()||d.find("video").hasClass("fr-uploading")||p.undo.saveStep();var n=d.find("video").data("fr-old-src"),r=d.data("fr-replaced");d.data("fr-replaced",!1),p.$wp?((e=d.clone()).find("video").removeData("fr-old-src").removeClass("fr-uploading"),e.find("video").off("canplay"),n&&d.find("video").attr("src",n),d.replaceWith(e)):e=d;for(var i=e.find("video").get(0).attributes,a=0;a<i.length;a++){var o=i[a];0===o.nodeName.indexOf("data-")&&e.find("video").removeAttr(o.nodeName)}if(void 0!==l)for(t in l)l.hasOwnProperty(t)&&"link"!=t&&e.find("video").attr("data-"+t,l[t]);e.find("video").on("canplay",T),e.find("video").attr("src",s),p.edit.on(),F(),p.undo.saveStep(),p.$el.blur(),p.events.trigger(r?"video.replaced":"video.inserted",[e,c])}else e=function(e,t,n){var r,i="";if(t&&void 0!==t)for(r in t)t.hasOwnProperty(r)&&"link"!=r&&(i+=" data-"+r+'="'+t[r]+'"');var a=p.opts.videoDefaultWidth;a&&"auto"!=a&&(a+="px");var o=Te('<span contenteditable="false" draggable="true" class="fr-video fr-dv'+p.opts.videoDefaultDisplay[0]+("center"!=p.opts.videoDefaultAlign?" fr-fv"+p.opts.videoDefaultAlign[0]:"")+'"><video src="'+e+'" '+i+(a?' style="width: '+a+';" ':"")+" controls>"+p.language.translate("Your browser does not support HTML5 video.")+"</video></span>");o.toggleClass("fr-draggable",p.opts.videoMove),p.edit.on(),p.events.focus(!0),p.selection.restore(),p.undo.saveStep(),p.opts.videoSplitHTML?p.markers.split():p.markers.insert(),p.html.wrap();var s=p.$el.find(".fr-marker");return p.node.isLastSibling(s)&&s.parent().hasClass("fr-deletable")&&s.insertAfter(s.parent()),s.replaceWith(o),p.selection.clear(),o.find("video").get(0).readyState>o.find("video").get(0).HAVE_FUTURE_DATA||p.helpers.isIOS()?n.call(o.find("video").get(0)):o.find("video").on("canplaythrough load",n),o}(s,l,T),F(),p.undo.saveStep(),p.events.trigger("video.inserted",[e,c])}()}function C(e){var t=p.popups.get("video.insert");if(t||(t=o()),t.find(".fr-layer.fr-active").removeClass("fr-active").addClass("fr-pactive"),t.find(".fr-video-progress-bar-layer").addClass("fr-active"),t.find(".fr-buttons").hide(),u){var n=u.find("video");p.popups.setContainer("video.insert",p.$sc);var r=n.offset().left+n.width()/2,i=n.offset().top+n.height();p.popups.show("video.insert",r,i,n.outerHeight())}void 0===e&&R(p.language.translate("Uploading"),0)}function S(e){var t=p.popups.get("video.insert");if(t&&(t.find(".fr-layer.fr-pactive").addClass("fr-active").removeClass("fr-pactive"),t.find(".fr-video-progress-bar-layer").removeClass("fr-active"),t.find(".fr-buttons").show(),e||p.$el.find("video.fr-error").length)){if(p.events.focus(),p.$el.find("video.fr-error").length&&(p.$el.find("video.fr-error").parent().remove(),p.undo.saveStep(),p.undo.run(),p.undo.dropRedo()),!p.$wp&&u){var n=u;B(!0),p.selection.setAfter(n.find("video").get(0)),p.selection.restore()}p.popups.hide("video.insert")}}function R(e,t){var n=p.popups.get("video.insert");if(n){var r=n.find(".fr-video-progress-bar-layer");r.find("h3").text(e+(t?" "+t+"%":"")),r.removeClass("fr-error"),t?(r.find("div").removeClass("fr-indeterminate"),r.find("div > span").css("width",t+"%")):r.find("div").addClass("fr-indeterminate")}}function y(e){C();var t=p.popups.get("video.insert").find(".fr-video-progress-bar-layer");t.addClass("fr-error");var n=t.find("h3");n.text(e),p.events.disableBlur(),n.focus()}function L(e){$.call(e.get(0))}function _(e){R("Loading video");var t=this.status,n=this.response,r=this.responseXML,i=this.responseText;try{if(p.opts.videoUploadToS3)if(201==t){var a=function(e){try{var t=Te(e).find("Location").text(),n=Te(e).find("Key").text();return!1===p.events.trigger("video.uploadedToS3",[t,n,e],!0)?(p.edit.on(),!1):t}catch(r){return H(g,e),!1}}(r);a&&A(a,!1,[],e,n||r)}else H(g,n||r);else if(200<=t&&t<300){var o=function(e){try{if(!1===p.events.trigger("video.uploaded",[e],!0))return p.edit.on(),!1;var t=JSON.parse(e);return t.link?t:(H(d,e),!1)}catch(n){return H(g,e),!1}}(i);o&&A(o.link,!1,o,e,n||i)}else H(h,n||i)}catch(s){H(g,n||i)}}function N(){H(g,this.response||this.responseText||this.responseXML)}function x(e){if(e.lengthComputable){var t=e.loaded/e.total*100|0;R(p.language.translate("Uploading"),t)}}function w(){p.edit.on(),S(!0)}function O(e){if(!p.core.sameInstance(f))return!0;e.preventDefault(),e.stopPropagation();var t=e.pageX||(e.originalEvent.touches?e.originalEvent.touches[0].pageX:null),n=e.pageY||(e.originalEvent.touches?e.originalEvent.touches[0].pageY:null);if(!t||!n)return!1;if("mousedown"==e.type){var r=p.$oel.get(0).ownerDocument,i=r.defaultView||r.parentWindow,a=!1;try{a=i.location!=i.parent.location&&!(i.$&&i.$.FE)}catch(o){}a&&i.frameElement&&(t+=p.helpers.getPX(Te(i.frameElement).offset().left)+i.frameElement.clientLeft,n=e.clientY+p.helpers.getPX(Te(i.frameElement).offset().top)+i.frameElement.clientTop)}p.undo.canDo()||p.undo.saveStep(),(c=Te(this)).data("start-x",t),c.data("start-y",n),s.show(),p.popups.hideAll(),P()}function I(e){if(!p.core.sameInstance(f))return!0;if(c){e.preventDefault();var t=e.pageX||(e.originalEvent.touches?e.originalEvent.touches[0].pageX:null),n=e.pageY||(e.originalEvent.touches?e.originalEvent.touches[0].pageY:null);if(!t||!n)return!1;var r=c.data("start-x"),i=c.data("start-y");c.data("start-x",t),c.data("start-y",n);var a=t-r,o=n-i,s=u.find("iframe, embed, video"),l=s.width(),d=s.height();(c.hasClass("fr-hnw")||c.hasClass("fr-hsw"))&&(a=0-a),(c.hasClass("fr-hnw")||c.hasClass("fr-hne"))&&(o=0-o),s.css("width",l+a),s.css("height",d+o),s.removeAttr("width"),s.removeAttr("height"),M()}}function k(e){if(!p.core.sameInstance(f))return!0;c&&u&&(e&&e.stopPropagation(),c=null,s.hide(),M(),a(),p.undo.saveStep())}function t(e){return'<div class="fr-handler fr-h'+e+'"></div>'}function D(e,t,n,r){return e.pageX=t,e.pageY=t,O.call(this,e),e.pageX=e.pageX+n*Math.floor(Math.pow(1.1,r)),e.pageY=e.pageY+n*Math.floor(Math.pow(1.1,r)),I.call(this,e),k.call(this,e),++r}function F(){var e,t=Array.prototype.slice.call(p.el.querySelectorAll("video, .fr-video > *")),n=[];for(e=0;e<t.length;e++)n.push(t[e].getAttribute("src")),Te(t[e]).toggleClass("fr-draggable",p.opts.videoMove),""===t[e].getAttribute("class")&&t[e].removeAttribute("class"),""===t[e].getAttribute("style")&&t[e].removeAttribute("style");if(r)for(e=0;e<r.length;e++)n.indexOf(r[e].getAttribute("src"))<0&&p.events.trigger("video.removed",[Te(r[e])]);r=t}function M(){f||function(){var e;if(p.shared.$video_resizer?(f=p.shared.$video_resizer,s=p.shared.$vid_overlay,p.events.on("destroy",function(){f.removeClass("fr-active").appendTo(Te("body:first"))},!0)):(p.shared.$video_resizer=Te('<div class="fr-video-resizer"></div>'),f=p.shared.$video_resizer,p.events.$on(f,"mousedown",function(e){e.stopPropagation()},!0),p.opts.videoResize&&(f.append(t("nw")+t("ne")+t("sw")+t("se")),p.shared.$vid_overlay=Te('<div class="fr-video-overlay"></div>'),s=p.shared.$vid_overlay,e=f.get(0).ownerDocument,Te(e).find("body:first").append(s))),p.events.on("shared.destroy",function(){f.html("").removeData().remove(),f=null,p.opts.videoResize&&(s.remove(),s=null)},!0),p.helpers.isMobile()||p.events.$on(Te(p.o_win),"resize.video",function(){B(!0)}),p.opts.videoResize){e=f.get(0).ownerDocument,p.events.$on(f,p._mousedown,".fr-handler",O),p.events.$on(Te(e),p._mousemove,I),p.events.$on(Te(e.defaultView||e.parentWindow),p._mouseup,k),p.events.$on(s,"mouseleave",k);var r=1,i=null,a=0;p.events.on("keydown",function(e){if(u){var t=-1!=navigator.userAgent.indexOf("Mac OS X")?e.metaKey:e.ctrlKey,n=e.which;(n!==i||200<e.timeStamp-a)&&(r=1),(n==Te.FE.KEYCODE.EQUALS||p.browser.mozilla&&n==Te.FE.KEYCODE.FF_EQUALS)&&t&&!e.altKey?r=D.call(this,e,1,1,r):(n==Te.FE.KEYCODE.HYPHEN||p.browser.mozilla&&n==Te.FE.KEYCODE.FF_HYPHEN)&&t&&!e.altKey&&(r=D.call(this,e,2,-1,r)),i=n,a=e.timeStamp}}),p.events.on("keyup",function(){r=1})}}(),(p.$wp||p.$sc).append(f),f.data("instance",p);var e=u.find("iframe, embed, video");f.css("top",(p.opts.iframe?e.offset().top-1:e.offset().top-p.$wp.offset().top-1)+p.$wp.scrollTop()).css("left",(p.opts.iframe?e.offset().left-1:e.offset().left-p.$wp.offset().left-1)+p.$wp.scrollLeft()).css("width",e.get(0).getBoundingClientRect().width).css("height",e.get(0).getBoundingClientRect().height).addClass("fr-active")}function $(e){if(e&&"touchend"==e.type&&n)return!0;if(e&&p.edit.isDisabled())return e.stopPropagation(),e.preventDefault(),!1;if(p.edit.isDisabled())return!1;for(var t=0;t<Te.FE.INSTANCES.length;t++)Te.FE.INSTANCES[t]!=p&&Te.FE.INSTANCES[t].events.trigger("video.hideResizer");p.toolbar.disable(),p.helpers.isMobile()&&(p.events.disableBlur(),p.$el.blur(),p.events.enableBlur()),p.$el.find(".fr-video.fr-active").removeClass("fr-active"),(u=Te(this)).addClass("fr-active"),p.opts.iframe&&p.size.syncIframe(),Q(),M(),a(),p.selection.clear(),p.button.bulkRefresh(),p.events.trigger("image.hideResizer")}function B(e){u&&(p.shared.vid_exit_flag||!0===e)&&(f.removeClass("fr-active"),p.toolbar.enable(),u.removeClass("fr-active"),u=null,P())}function e(){p.shared.vid_exit_flag=!0}function P(){p.shared.vid_exit_flag=!1}function U(e){var t=e.originalEvent.dataTransfer;if(t&&t.files&&t.files.length){var n=t.files[0];if(n&&n.type&&-1!==n.type.indexOf("video")){if(!p.opts.videoUpload)return e.preventDefault(),e.stopPropagation(),!1;p.markers.remove(),p.markers.insertAtPoint(e.originalEvent),p.$el.find(".fr-marker").replaceWith(Te.FE.MARKERS),p.popups.hideAll();var r=p.popups.get("video.insert");return r||(r=o()),p.popups.setContainer("video.insert",p.$sc),p.popups.show("video.insert",e.originalEvent.pageX,e.originalEvent.pageY),C(),0<=p.opts.videoAllowedTypes.indexOf(n.type.replace(/video\//g,""))?K(t.files):H(v),e.preventDefault(),e.stopPropagation(),!1}}}function K(e){if(void 0!==e&&0<e.length){if(!1===p.events.trigger("video.beforeUpload",[e]))return!1;var t,n=e[0];if(n.size>p.opts.videoMaxSize)return H(m),!1;if(p.opts.videoAllowedTypes.indexOf(n.type.replace(/video\//g,""))<0)return H(v),!1;if((null===p.opts.videoUploadURL||p.opts.videoUploadURL==l)&&!p.opts.videoUploadToS3)return function(t){u&&u.find("iframe")&&u.find("iframe").length&&V();var n=new FileReader;n.onload=function(){var e=n.result;A(e=window.URL.createObjectURL(new Blob([e],{type:t.type})),!1,null,u)},C(),n.readAsArrayBuffer(t)}(n),!1;if(p.drag_support.formdata&&(t=p.drag_support.formdata?new FormData:null),t){var r;if(!1!==p.opts.videoUploadToS3)for(r in t.append("key",p.opts.videoUploadToS3.keyStart+(new Date).getTime()+"-"+(n.name||"untitled")),t.append("success_action_status","201"),t.append("X-Requested-With","xhr"),t.append("Content-Type",n.type),p.opts.videoUploadToS3.params)p.opts.videoUploadToS3.params.hasOwnProperty(r)&&t.append(r,p.opts.videoUploadToS3.params[r]);for(r in p.opts.videoUploadParams)p.opts.videoUploadParams.hasOwnProperty(r)&&t.append(r,p.opts.videoUploadParams[r]);t.append(p.opts.videoUploadParam,n);var i=p.opts.videoUploadURL;p.opts.videoUploadToS3&&(i=p.opts.videoUploadToS3.uploadURL?p.opts.videoUploadToS3.uploadURL:"https://"+p.opts.videoUploadToS3.region+".amazonaws.com/"+p.opts.videoUploadToS3.bucket);var a=p.core.getXHR(i,p.opts.videoUploadMethod);a.onload=function(){_.call(a,u)},a.onerror=N,a.upload.onprogress=x,a.onabort=w,C(),p.events.disableBlur(),p.edit.off(),p.events.enableBlur();var o=p.popups.get("video.insert");o&&o.off("abortUpload").on("abortUpload",function(){4!=a.readyState&&a.abort()}),a.send(t)}}}function H(e,t){p.edit.on(),u&&u.find("video").addClass("fr-error"),y(p.language.translate("Something went wrong. Please try again.")),p.events.trigger("video.error",[{code:e,message:i[e]},t])}function W(){if(u){var e=p.popups.get("video.size"),t=u.find("iframe, embed, video");e.find('input[name="width"]').val(t.get(0).style.width||t.attr("width")).trigger("change"),e.find('input[name="height"]').val(t.get(0).style.height||t.attr("height")).trigger("change")}}function z(e){if(e)return p.popups.onRefresh("video.size",W),!0;var t={buttons:'<div class="fr-buttons">'+p.button.buildList(p.opts.videoSizeButtons)+"</div>",size_layer:'<div class="fr-video-size-layer fr-layer fr-active" id="fr-video-size-layer-'+p.id+'"><div class="fr-video-group"><div class="fr-input-line"><input id="fr-video-size-layer-width-'+p.id+'" type="text" name="width" placeholder="'+p.language.translate("Width")+'" tabIndex="1"></div><div class="fr-input-line"><input id="fr-video-size-layer-height-'+p.id+'" type="text" name="height" placeholder="'+p.language.translate("Height")+'" tabIndex="1"></div></div><div class="fr-action-buttons"><button type="button" class="fr-command fr-submit" data-cmd="videoSetSize" tabIndex="2" role="button">'+p.language.translate("Update")+"</button></div></div>"},n=p.popups.create("video.size",t);return p.events.$on(p.$wp,"scroll",function(){u&&p.popups.isVisible("video.size")&&(p.events.disableBlur(),L(u))}),n}function Y(e){if(void 0===e&&(e=u),e){if(e.hasClass("fr-fvl"))return"left";if(e.hasClass("fr-fvr"))return"right";if(e.hasClass("fr-dvb")||e.hasClass("fr-dvi"))return"center";if("block"==e.css("display")){if("left"==e.css("text-algin"))return"left";if("right"==e.css("text-align"))return"right"}else{if("left"==e.css("float"))return"left";if("right"==e.css("float"))return"right"}}return"center"}function G(e){void 0===e&&(e=u);var t=e.css("float");return e.css("float","none"),"block"==e.css("display")?(e.css("float",""),e.css("float")!=t&&e.css("float",t),"block"):(e.css("float",""),e.css("float")!=t&&e.css("float",t),"inline")}function V(){if(u&&!1!==p.events.trigger("video.beforeRemove",[u])){var e=u;p.popups.hideAll(),B(!0),p.selection.setBefore(e.get(0))||p.selection.setAfter(e.get(0)),e.remove(),p.selection.restore(),p.html.fillEmptyBlocks()}}function X(){S()}function q(e,t,n){!p.opts.htmlUntouched&&p.opts.useClasses?(e.removeClass("fr-fvl fr-fvr fr-dvb fr-dvi"),e.addClass("fr-fv"+n[0]+" fr-dv"+t[0])):"inline"==t?(e.css({display:"inline-block"}),"center"==n?e.css({"float":"none"}):"left"==n?e.css({"float":"left"}):e.css({"float":"right"})):(e.css({display:"block",clear:"both"}),"left"==n?e.css({textAlign:"left"}):"right"==n?e.css({textAlign:"right"}):e.css({textAlign:"center"}))}function j(){p.$el.find("video").filter(function(){return 0===Te(this).parents("span.fr-video").length}).wrap('<span class="fr-video fr-deletable" contenteditable="false"></span>'),p.$el.find("embed, iframe").filter(function(){if(p.browser.safari&&this.getAttribute("src")&&this.setAttribute("src",this.src),0<Te(this).parents("span.fr-video").length)return!1;for(var e=Te(this).attr("src"),t=0;t<Te.FE.VIDEO_PROVIDERS.length;t++){var n=Te.FE.VIDEO_PROVIDERS[t];if(n.test_regex.test(e)&&new RegExp(p.opts.videoAllowedProviders.join("|")).test(n.provider))return!0}return!1}).map(function(){return 0===Te(this).parents("object").length?this:Te(this).parents("object").get(0)}).wrap('<span class="fr-video" contenteditable="false"></span>');for(var e,t,n=p.$el.find("span.fr-video, video"),r=0;r<n.length;r++){var i=Te(n[r]);!p.opts.htmlUntouched&&p.opts.useClasses?((t=i).hasClass("fr-dvi")||t.hasClass("fr-dvb")||(t.addClass("fr-fv"+Y(t)[0]),t.addClass("fr-dv"+G(t)[0])),p.opts.videoTextNear||i.removeClass("fr-dvi").addClass("fr-dvb")):p.opts.htmlUntouched||p.opts.useClasses||(q(e=i,e.hasClass("fr-dvb")?"block":e.hasClass("fr-dvi")?"inline":null,e.hasClass("fr-fvl")?"left":e.hasClass("fr-fvr")?"right":Y(e)),e.removeClass("fr-dvb fr-dvi fr-fvr fr-fvl"))}n.toggleClass("fr-draggable",p.opts.videoMove)}function Q(){if(u){p.selection.clear();var e=p.doc.createRange();e.selectNode(u.get(0)),p.selection.get().addRange(e)}}return i[1]="Video cannot be loaded from the passed link.",i[d]="No link in upload response.",i[h]="Error during file upload.",i[g]="Parsing response failed.",i[m]="File is too large.",i[v]="Video file type is invalid.",i[7]="Files can be uploaded only to same domain in IE 8 and IE 9.",p.shared.vid_exit_flag=!1,{_init:function(){p.opts.videoResponsive&&(p.opts.videoResize=!1),p.events.on("drop",U,!0),p.events.on("mousedown window.mousedown",e),p.events.on("window.touchmove",P),p.events.on("mouseup window.mouseup",B),p.events.on("commands.mousedown",function(e){0<e.parents(".fr-toolbar").length&&B()}),p.events.on("video.hideResizer commands.undo commands.redo element.dropped",function(){B(!0)}),p.helpers.isMobile()&&(p.events.$on(p.$el,"touchstart","span.fr-video",function(){n=!1}),p.events.$on(p.$el,"touchmove",function(){n=!0})),p.events.on("html.set",j),j(),p.events.$on(p.$el,"mousedown","span.fr-video",function(e){e.stopPropagation(),(p.browser.msie||p.browser.edge)&&(e.target.dragDrop(),$.call(this,e))}),p.events.$on(p.$el,"click touchend","span.fr-video",function(e){if("false"==Te(this).parents("[contenteditable]:not(.fr-element):not(.fr-img-caption):not(body):first").attr("contenteditable"))return!0;$.call(this,e)}),p.events.on("keydown",function(e){var t=e.which;return!u||t!=Te.FE.KEYCODE.BACKSPACE&&t!=Te.FE.KEYCODE.DELETE?u&&t==Te.FE.KEYCODE.ESC?(B(!0),e.preventDefault(),!1):u&&t!=Te.FE.KEYCODE.F10&&!p.keys.isBrowserAction(e)?(e.preventDefault(),!1):void 0:(e.preventDefault(),V(),p.undo.saveStep(),!1)},!0),p.events.on("toolbar.esc",function(){if(u)return p.events.disableBlur(),p.events.focus(),!1},!0),p.events.on("toolbar.focusEditor",function(){if(u)return!1},!0),p.events.on("keydown",function(){p.$el.find("span.fr-video:empty").remove()}),p.$wp&&(F(),p.events.on("contentChanged",F)),o(!0),z(!0)},showInsertPopup:function(){var e=p.$tb.find('.fr-command[data-cmd="insertVideo"]'),t=p.popups.get("video.insert");if(t||(t=o()),S(),!t.hasClass("fr-active"))if(p.popups.refresh("video.insert"),p.popups.setContainer("video.insert",p.$tb),e.is(":visible")){var n=e.offset().left+e.outerWidth()/2,r=p.position.getTbarPupupTop("video.insert",e);p.popups.show("video.insert",n,r,e.outerHeight())}else p.position.forSelection(t),p.popups.show("video.insert")},showLayer:function(e){var t,n,r=p.popups.get("video.insert");if(!u&&!p.opts.toolbarInline){var i=p.$tb.find('.fr-command[data-cmd="insertVideo"]');t=i.offset().left+i.outerWidth()/2,n=p.position.getTbarPupupTop("video.insert",i)}p.opts.toolbarInline&&(n=r.offset().top-p.helpers.getPX(r.css("margin-top")),r.hasClass("fr-above")&&(n+=r.outerHeight())),r.find(".fr-layer").removeClass("fr-active"),r.find(".fr-"+e+"-layer").addClass("fr-active"),p.popups.show("video.insert",t,n,0),p.accessibility.focusPopup(r)},refreshByURLButton:function(e){p.popups.get("video.insert").find(".fr-video-by-url-layer").hasClass("fr-active")&&e.addClass("fr-active").attr("aria-pressed",!0)},refreshEmbedButton:function(e){p.popups.get("video.insert").find(".fr-video-embed-layer").hasClass("fr-active")&&e.addClass("fr-active").attr("aria-pressed",!0)},refreshUploadButton:function(e){p.popups.get("video.insert").find(".fr-video-upload-layer").hasClass("fr-active")&&e.addClass("fr-active").attr("aria-pressed",!0)},upload:K,insertByURL:function(e){void 0===e&&(e=(p.popups.get("video.insert").find('.fr-video-by-url-layer input[type="text"]').val()||"").trim());var t=null;if(/^http/.test(e)||(e="https://"+e),p.helpers.isURL(e))for(var n=0;n<Te.FE.VIDEO_PROVIDERS.length;n++){var r=Te.FE.VIDEO_PROVIDERS[n];if(r.test_regex.test(e)&&new RegExp(p.opts.videoAllowedProviders.join("|")).test(r.provider)){t=e.replace(r.url_regex,r.url_text),t=r.html.replace(/\{url\}/,t);break}}t?b(t):(y(p.language.translate("Something went wrong. Please try again.")),p.events.trigger("video.linkError",[e]))},insertEmbed:function(e){void 0===e&&(e=p.popups.get("video.insert").find(".fr-video-embed-layer textarea").val()||""),0!==e.length&&Te.FE.VIDEO_EMBED_REGEX.test(e)?b(e):(y(p.language.translate("Something went wrong. Please try again.")),p.events.trigger("video.codeError",[e]))},insert:b,align:function(e){u.removeClass("fr-fvr fr-fvl"),!p.opts.htmlUntouched&&p.opts.useClasses?"left"==e?u.addClass("fr-fvl"):"right"==e&&u.addClass("fr-fvr"):q(u,G(),e),Q(),M(),a(),p.selection.clear()},refreshAlign:function(e){if(!u)return!1;e.find("> *:first").replaceWith(p.icon.create("video-align-"+Y()))},refreshAlignOnShow:function(e,t){u&&t.find('.fr-command[data-param1="'+Y()+'"]').addClass("fr-active").attr("aria-selected",!0)},display:function(e){u.removeClass("fr-dvi fr-dvb"),!p.opts.htmlUntouched&&p.opts.useClasses?"inline"==e?u.addClass("fr-dvi"):"block"==e&&u.addClass("fr-dvb"):q(u,e,Y()),Q(),M(),a(),p.selection.clear()},refreshDisplayOnShow:function(e,t){u&&t.find('.fr-command[data-param1="'+G()+'"]').addClass("fr-active").attr("aria-selected",!0)},remove:V,hideProgressBar:S,showSizePopup:function(){var e=p.popups.get("video.size");e||(e=z()),S(),p.popups.refresh("video.size"),p.popups.setContainer("video.size",p.$sc);var t=u.find("iframe, embed, video"),n=t.offset().left+t.width()/2,r=t.offset().top+t.height();p.popups.show("video.size",n,r,t.height())},replace:function(){var e=p.popups.get("video.insert");e||(e=o()),p.popups.isVisible("video.insert")||(S(),p.popups.refresh("video.insert"),p.popups.setContainer("video.insert",p.$sc));var t=u.offset().left+u.width()/2,n=u.offset().top+u.height();p.popups.show("video.insert",t,n,u.outerHeight())},back:function(){u?(p.events.disableBlur(),u.trigger("click")):(p.events.disableBlur(),p.selection.restore(),p.events.enableBlur(),p.popups.hide("video.insert"),p.toolbar.showInline())},setSize:function(e,t){if(u){var n=p.popups.get("video.size"),r=u.find("iframe, embed, video");r.css("width",e||n.find('input[name="width"]').val()),r.css("height",t||n.find('input[name="height"]').val()),r.get(0).style.width&&r.removeAttr("width"),r.get(0).style.height&&r.removeAttr("height"),n.find("input:focus").blur(),setTimeout(function(){u.trigger("click")},p.helpers.isAndroid()?50:0)}},get:function(){return u},showProgressBar:C}},Te.FE.RegisterCommand("insertVideo",{title:"Insert Video",undo:!1,focus:!0,refreshAfterCallback:!1,popup:!0,callback:function(){this.popups.isVisible("video.insert")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("video.insert")):this.video.showInsertPopup()},plugin:"video"}),Te.FE.DefineIcon("insertVideo",{NAME:"video-camera",FA5NAME:"camera"}),Te.FE.DefineIcon("videoByURL",{NAME:"link"}),Te.FE.RegisterCommand("videoByURL",{title:"By URL",undo:!1,focus:!1,toggle:!0,callback:function(){this.video.showLayer("video-by-url")},refresh:function(e){this.video.refreshByURLButton(e)}}),Te.FE.DefineIcon("videoEmbed",{NAME:"code"}),Te.FE.RegisterCommand("videoEmbed",{title:"Embedded Code",undo:!1,focus:!1,toggle:!0,callback:function(){this.video.showLayer("video-embed")},refresh:function(e){this.video.refreshEmbedButton(e)}}),Te.FE.DefineIcon("videoUpload",{NAME:"upload"}),Te.FE.RegisterCommand("videoUpload",{title:"Upload Video",undo:!1,focus:!1,toggle:!0,callback:function(){this.video.showLayer("video-upload")},refresh:function(e){this.video.refreshUploadButton(e)}}),Te.FE.RegisterCommand("videoInsertByURL",{undo:!0,focus:!0,callback:function(){this.video.insertByURL()}}),Te.FE.RegisterCommand("videoInsertEmbed",{undo:!0,focus:!0,callback:function(){this.video.insertEmbed()}}),Te.FE.DefineIcon("videoDisplay",{NAME:"star"}),Te.FE.RegisterCommand("videoDisplay",{title:"Display",type:"dropdown",options:{inline:"Inline",block:"Break Text"},callback:function(e,t){this.video.display(t)},refresh:function(e){this.opts.videoTextNear||e.addClass("fr-hidden")},refreshOnShow:function(e,t){this.video.refreshDisplayOnShow(e,t)}}),Te.FE.DefineIcon("video-align",{NAME:"align-left"}),Te.FE.DefineIcon("video-align-left",{NAME:"align-left"}),Te.FE.DefineIcon("video-align-right",{NAME:"align-right"}),Te.FE.DefineIcon("video-align-center",{NAME:"align-justify"}),Te.FE.DefineIcon("videoAlign",{NAME:"align-center"}),Te.FE.RegisterCommand("videoAlign",{type:"dropdown",title:"Align",options:{left:"Align Left",center:"None",right:"Align Right"},html:function(){var e='<ul class="fr-dropdown-list" role="presentation">',t=Te.FE.COMMANDS.videoAlign.options;for(var n in t)t.hasOwnProperty(n)&&(e+='<li role="presentation"><a class="fr-command fr-title" tabIndex="-1" role="option" data-cmd="videoAlign" data-param1="'+n+'" title="'+this.language.translate(t[n])+'">'+this.icon.create("video-align-"+n)+'<span class="fr-sr-only">'+this.language.translate(t[n])+"</span></a></li>");return e+="</ul>"},callback:function(e,t){this.video.align(t)},refresh:function(e){this.video.refreshAlign(e)},refreshOnShow:function(e,t){this.video.refreshAlignOnShow(e,t)}}),Te.FE.DefineIcon("videoReplace",{NAME:"exchange",FA5NAME:"exchange-alt"}),Te.FE.RegisterCommand("videoReplace",{title:"Replace",undo:!1,focus:!1,popup:!0,refreshAfterCallback:!1,callback:function(){this.video.replace()}}),Te.FE.DefineIcon("videoRemove",{NAME:"trash"}),Te.FE.RegisterCommand("videoRemove",{title:"Remove",callback:function(){this.video.remove()}}),Te.FE.DefineIcon("videoSize",{NAME:"arrows-alt"}),Te.FE.RegisterCommand("videoSize",{undo:!1,focus:!1,popup:!0,title:"Change Size",callback:function(){this.video.showSizePopup()}}),Te.FE.DefineIcon("videoBack",{NAME:"arrow-left"}),Te.FE.RegisterCommand("videoBack",{title:"Back",undo:!1,focus:!1,back:!0,callback:function(){this.video.back()},refresh:function(e){this.video.get()||this.opts.toolbarInline?(e.removeClass("fr-hidden"),e.next(".fr-separator").removeClass("fr-hidden")):(e.addClass("fr-hidden"),e.next(".fr-separator").addClass("fr-hidden"))}}),Te.FE.RegisterCommand("videoDismissError",{title:"OK",undo:!1,callback:function(){this.video.hideProgressBar(!0)}}),Te.FE.RegisterCommand("videoSetSize",{undo:!0,focus:!1,title:"Update",refreshAfterCallback:!1,callback:function(){this.video.setSize()}}),Te.extend(Te.FE.DEFAULTS,{wordDeniedTags:[],wordDeniedAttrs:[],wordAllowedStyleProps:["font-family","font-size","background","color","width","text-align","vertical-align","background-color","padding","margin","height","margin-top","margin-left","margin-right","margin-bottom","text-decoration","font-weight","font-style","text-indent","border","border-.*","line-height","list-style-type"],wordPasteModal:!0,wordPasteKeepFormatting:!0}),Te.FE.PLUGINS.wordPaste=function(T){var a,r,o="word_paste";function t(e){var t=T.opts.wordAllowedStyleProps;e||(T.opts.wordAllowedStyleProps=[]),0===r.indexOf("<colgroup>")&&(r="<table>"+r+"</table>"),r=function(e,t){0<=e.indexOf("<html")&&(e=e.replace(/[.\s\S\w\W<>]*(<html[^>]*>[.\s\S\w\W<>]*<\/html>)[.\s\S\w\W<>]*/i,"$1"));!function(e){for(var t=e.split("v:shape"),n=1;n<t.length;n++){var r=t[n],i=r.split(' id="')[1];if(i&&1<i.length){i=i.split('"')[0];var a=r.split(' o:spid="')[1];a&&1<a.length&&(a=a.split('"')[0],h[i]=a)}}}(e);var n=(new DOMParser).parseFromString(e,"text/html"),r=n.head,i=n.body,s=function(e){var t={},n=e.getElementsByTagName("style");if(n.length){var r=n[0],i=r.innerHTML.match(/[\S ]+\s+{[\s\S]+?}/gi);if(i)for(var a=0;a<i.length;a++){var o=i[a],s=o.replace(/([\S ]+\s+){[\s\S]+?}/gi,"$1"),l=o.replace(/[\S ]+\s+{([\s\S]+?)}/gi,"$1");s=s.replace(/^[\s]|[\s]$/gm,""),l=l.replace(/^[\s]|[\s]$/gm,""),s=s.replace(/\n|\r|\n\r/g,""),l=l.replace(/\n|\r|\n\r/g,"");for(var d=s.split(", "),c=0;c<d.length;c++)t[d[c]]=l}}return t}(r);c(i,function(e){if(e.nodeType==Node.TEXT_NODE&&/\n|\u00a0|\r/.test(e.data)){if(!/\S| /.test(e.data)&&!/[\u00a0]+/.test(e.data))return e.data==Te.FE.UNICODE_NBSP?(e.data="\u200b",!0):1==e.data.length&&10==e.data.charCodeAt(0)?(e.data=" ",!0):(A(e),!1);e.data=e.data.replace(/\n|\r/gi," ")}return!0}),c(i,function(e){return e.nodeType!=Node.ELEMENT_NODE||"V:IMAGEDATA"!=e.tagName&&"IMG"!=e.tagName||function(e,t){if(!t)return;var n;if("IMG"==e.tagName){var r=e.getAttribute("src");if(!r||-1==r.indexOf("file://"))return;if(0===r.indexOf("file://")&&T.helpers.isURL(e.getAttribute("alt")))return e.setAttribute("src",e.getAttribute("alt"));(n=h[e.getAttribute("v:shapes")])||(n=e.getAttribute("v:shapes"),e.parentNode&&e.parentNode.parentNode&&0<=e.parentNode.parentNode.innerHTML.indexOf("msEquation")&&(n=null))}else n=e.parentNode.getAttribute("o:spid");if(e.removeAttribute("height"),!n)return;i=t,u={},f(i,"i","\\shppict"),f(i,"s","\\shp{");var i;var a=u[n.substring(7)];if(a){var o=function(e){for(var t=e.match(/[0-9a-f]{2}/gi),n=[],r=0;r<t.length;r++)n.push(String.fromCharCode(parseInt(t[r],16)));var i=n.join("");return btoa(i)}(a.image_hex),s="data:"+a.image_type+";base64,"+o;"IMG"===e.tagName?(e.src=s,e.setAttribute("data-fr-image-pasted",!0)):Te(e.parentNode).before('<img data-fr-image-pasted="true" src="'+s+'" style="'+e.parentNode.getAttribute("style")+'">').remove()}}(e,t),!0});for(var a=i.querySelectorAll("ul > ul, ul > ol, ol > ul, ol > ol"),o=a.length-1;0<=o;o--)a[o].previousElementSibling&&"LI"===a[o].previousElementSibling.tagName&&a[o].previousElementSibling.appendChild(a[o]);c(i,function(t){if(t.nodeType==Node.TEXT_NODE)return t.data=t.data.replace(/<br>(\n|\r)/gi,"<br>"),!1;if(t.nodeType==Node.ELEMENT_NODE){if(S(t)){var n=t.parentNode,r=t.previousSibling,i=function e(t,n,r){t.firstElementChild.innerHTML=t.firstElementChild&&t.firstElementChild.innerHTML.replace(/\r?\n|\r/g,"");var i=/[0-9a-zA-Z\\xa7\s]/gi;var a=!1;var o=t.querySelector('span[style="mso-list:Ignore"]');var s;var l;var d;var c;var f;var p;var u;var h=navigator.userAgent.toLowerCase();var g;var m="";var v;-1!=h.indexOf("safari")&&(h=-1<h.indexOf("chrome")?1:"safari");null==o&&"safari"==h&&(o=t.querySelector('span[lang="PT-BR"]'));o&&(a=a||i.test(o.textContent));null!==o&&(g=o.textContent.trim().split(".")[0]);1==a?("1"==g?u="decimal;":"i"==g?u="lower-roman;":"I"==g?u="upper-roman;":"o"==g?u="circle;":"\xa7"==g?u="square;":g.match(/^v$/)||(g.match(/^[a-z]$/)||g.match(/^[a-z]\)$/)?u="lower-alpha;":(g.match(/^[A-Z]$/)||g.match(/^[A-Z]\)$/))&&(u="upper-alpha;")),u="list-style-type: "+u,p="ol"):p="ul";o==undefined||o.textContent==undefined||isNaN(parseInt(o.textContent.trim().split(".")[1],10))||(m=' class="decimal_type" ');var E;"list-style-type: upper-alpha;"==u?(E=g.charCodeAt(0)-64,v=u?"<"+p+m+' style = "'+u+'" start="'+E+'">':"<"+p+">"):"list-style-type: lower-alpha;"==u?(E=g.charCodeAt(0)-96,v=u?"<"+p+m+' style = "'+u+'" start="'+E+'">':"<"+p+">"):v=u?"<"+p+m+' style = "'+u+'">':"<"+p+">";for(;t;){if(!S(t)){if(t.outerHTML&&0<t.outerHTML.indexOf("mso-bookmark")&&0===(t.textContent||"").length){t=t.nextElementSibling;continue}break}var b=t.getAttribute("style").replace(/\n/gi,"").replace(/.*level([0-9]+?).*/gi,"$1");if((r=r||b)<b)f=e(t,n,b),v+=f.el.outerHTML,t=f.currentNode;else{if(b<r)break;t.firstElementChild&&t.firstElementChild.firstElementChild&&t.firstElementChild.firstElementChild.firstChild&&(i.lastIndex=0,l=i.test(t.firstElementChild.firstElementChild.firstChild.data||t.firstElementChild.firstElementChild.firstChild.firstChild&&t.firstElementChild.firstElementChild.firstChild.firstChild.data||"")),s&&s.firstElementChild&&s.firstElementChild.firstElementChild&&s.firstElementChild.firstElementChild.firstChild&&(i.lastIndex=0,d=i.test(s.firstElementChild.firstElementChild.firstChild.data||s.firstElementChild.firstElementChild.firstChild.firstChild&&s.firstElementChild.firstElementChild.firstChild.firstChild.data||"")),d===undefined||d===l?(c=R(t,n),v+="<li>"+c+"</li>"):(f=e(t,n,b),v+=f.el.outerHTML,t=f.currentNode);var T=t&&t.nextElementSibling;T&&(s=T.previousElementSibling),t&&t.parentNode&&t.parentNode.removeChild(t),t=T}}v+="</"+p+">";var A=document.createElement("div");A.innerHTML=v;var C=A.firstElementChild;return{el:C,currentNode:t}}(t,s).el,a=null;return(a=r?r.nextSibling:n.firstChild)?n.insertBefore(i,a):n.appendChild(i),!1}return"FONT"===t.tagName&&s["."+t.getAttribute("class")]&&(t=v(t,"span")),p(t,s)}if(t.nodeType==Node.COMMENT_NODE){if(-1<t.data.indexOf("[if !supportLineBreakNewLine]"))for(var o=t.nextSibling;o;)(o=t.nextSibling)&&A(o),o.data&&-1<o.data.indexOf("[endif]")&&(o=null);return A(t),!1}return!0}),c(i,function(e){if(e.nodeType==Node.ELEMENT_NODE){var t=e.tagName;if(!e.innerHTML&&-1==["BR","IMG"].indexOf(t)){for(var n=e.parentNode;n&&(A(e),!(e=n).innerHTML);)n=e.parentNode;return!1}!function(e){var t=e.getAttribute("style");if(!t)return;(t=y(t))&&";"!=t.slice(-1)&&(t+=";");var n=t.match(/(^|\S+?):.+?;{1,1}/gi);if(!n)return;for(var r={},i=0;i<n.length;i++){var a=n[i],o=a.split(":");2==o.length&&("text-align"==o[0]&&"SPAN"==e.tagName||(r[o[0]]=o[1]))}var s="";for(var l in r)if(r.hasOwnProperty(l)){if("font-size"==l&&"pt;"==r[l].slice(-3)){var d=null;try{d=parseFloat(r[l].slice(0,-3),10)}catch(c){}d&&(d=Math.round(1.33*d),r[l]=d+"px;")}s+=l+":"+r[l]}s&&e.setAttribute("style",s)}(e)}return!0}),c(i,function(e){if(e&&"A"===e.nodeName&&""===e.href){for(var t=document.createDocumentFragment();e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e)}return!0});var l=i.outerHTML,d=T.opts.htmlAllowedStyleProps;return T.opts.htmlAllowedStyleProps=T.opts.wordAllowedStyleProps,l=T.clean.html(l,T.opts.wordDeniedTags,T.opts.wordDeniedAttrs,!1),T.opts.htmlAllowedStyleProps=d,l}(r=r.replace(/<span[\n\r ]*style='mso-spacerun:yes'>([\r\n\u00a0 ]*)<\/span>/g,function(e,t){for(var n="",r=0;r++<t.length;)n+="&nbsp;";return n}),T.paste.getRtfClipboard());var n=T.doc.createElement("DIV");n.innerHTML=r,T.html.cleanBlankSpaces(n),r=n.innerHTML,r=(r=T.paste.cleanEmptyTagsAndDivs(r)).replace(/\u200b/g,""),T.modals.hide(o),T.paste.clean(r,!0,!0,!0),T.opts.wordAllowedStyleProps=t}function A(e){e.parentNode&&e.parentNode.removeChild(e)}function c(e,t){if(t(e))for(var n=e.firstChild;n;){var r=n,i=n.previousSibling;n=n.nextSibling,c(r,t),r.previousSibling||r.nextSibling||r.parentNode||!n||i==n.previousSibling||!n.parentNode?r.previousSibling||r.nextSibling||r.parentNode||!n||n.previousSibling||n.nextSibling||n.parentNode||(i?n=i.nextSibling?i.nextSibling.nextSibling:null:e.firstChild&&(n=e.firstChild.nextSibling)):n=i?i.nextSibling:e.firstChild}}function S(e){if(!e.getAttribute("style")||!/mso-list:[\s]*l/gi.test(e.getAttribute("style").replace(/\n/gi,"")))return!1;try{if(!e.querySelector('[style="mso-list:Ignore"]'))return!!(e.outerHTML&&0<=e.outerHTML.indexOf("\x3c!--[if !supportLists]--\x3e"))}catch(t){return!1}return!0}function R(e,i){var t=e.cloneNode(!0);if(-1!=["H1","H2","H3","H4","H5","H6"].indexOf(e.tagName)){var n=document.createElement(e.tagName.toLowerCase());n.setAttribute("style",e.getAttribute("style")),n.innerHTML=t.innerHTML,t.innerHTML=n.outerHTML}c(t,function(e){if(e.nodeType==Node.COMMENT_NODE&&(T.browser.msie||T.browser.safari||T.browser.edge))try{if("[if !supportLists]"===e.data){for(e=e.nextSibling;e&&e.nodeType!==Node.COMMENT_NODE;){var t=e.nextSibling;e.parentNode.removeChild(e),e=t}e&&e.nodeType==Node.COMMENT_NODE&&e.parentNode.removeChild(e)}}catch(r){}if(e.nodeType==Node.ELEMENT_NODE){var n=e.getAttribute("style");n&&"mso-list:Ignore"==n.replace(/\r?\n|\r/g,"")&&e.parentNode.removeChild(e),e.setAttribute("style",function(e){var n="",r=e.getAttribute("style");r&&["line-height","font-family","font-size","color","background"].forEach(function(e){var t=r.match(new RegExp(e+":.*;"));t&&(n+=t[0]+";")});return n}(e)),p(e,i)}return!0});var r=t.innerHTML;return r=r.replace(/<!--[\s\S]*?-->/gi,"")}function v(e,t){for(var n=document.createElement(t),r=0;r<e.attributes.length;r++){var i=e.attributes[r].name;n.setAttribute(i,e.getAttribute(i))}return n.innerHTML=e.innerHTML,e.parentNode.replaceChild(n,e),n}function C(e){var t=e.getAttribute("align");t&&(e.style["text-align"]=t,e.removeAttribute("align"))}function y(e){return e.replace(/\n|\r|\n\r|&quot;/g,"")}function L(e,t,n){if(t){var r=e.getAttribute("style");r&&";"!=r.slice(-1)&&(r+=";"),t&&";"!=t.slice(-1)&&(t+=";"),t=t.replace(/\n/gi,"");var i=null;i=n?(r||"")+t:t+(r||""),e.setAttribute("style",i)}}var u=null;function f(e,t,n){for(var r=e.split(n),i=1;i<r.length;i++){var a=r[i];if(1<(a=a.split("shplid")).length){a=a[1];for(var o="",s=0;s<a.length&&"\\"!=a[s]&&"{"!=a[s]&&" "!=a[s]&&"\r"!=a[s]&&"\n"!=a[s];)o+=a[s],s++;var l=a.split("bliptag");if(l&&l.length<2)continue;var d=null;if(-1!=l[0].indexOf("pngblip")?d="image/png":-1!=l[0].indexOf("jpegblip")&&(d="image/jpeg"),!d)continue;var c,f=l[1].split("}");if(f&&f.length<2)continue;if(2<f.length&&-1!=f[0].indexOf("blipuid"))c=f[1].split(" ");else{if((c=f[0].split(" "))&&c.length<2)continue;c.shift()}var p=c.join("");u[t+o]={image_hex:p,image_type:d}}}}function p(e,t){var n=e.tagName,r=n.toLowerCase();e.firstElementChild&&("I"==e.firstElementChild.tagName?v(e.firstElementChild,"em"):"B"==e.firstElementChild.tagName&&v(e.firstElementChild,"strong"));if(-1!=["SCRIPT","APPLET","EMBED","NOFRAMES","NOSCRIPT"].indexOf(n))return A(e),!1;var i=-1,a=["META","LINK","XML","ST1:","O:","W:","FONT"];for(i=0;i<a.length;i++)if(-1!=n.indexOf(a[i]))return e.innerHTML&&(e.outerHTML=e.innerHTML),A(e),!1;if("TD"!=n){var o=e.getAttribute("class")||"MsoNormal";if(t&&o){var s=(o=y(o)).split(" ");for(i=0;i<s.length;i++){var l=[],d="."+s[i];l.push(d),d=r+d,l.push(d);for(var c=0;c<l.length;c++)t[l[c]]&&L(e,t[l[c]])}e.removeAttribute("class")}t&&t[r]&&L(e,t[r])}if(-1!=["P","H1","H2","H3","H4","H5","H6","PRE"].indexOf(n)){var f=e.getAttribute("class");if(f&&(t&&t[n.toLowerCase()+"."+f]&&L(e,t[n.toLowerCase()+"."+f]),-1!=f.toLowerCase().indexOf("mso"))){var p=y(f);(p=p.replace(/[0-9a-z-_]*mso[0-9a-z-_]*/gi,""))?e.setAttribute("class",p):e.removeAttribute("class")}var u=e.getAttribute("style");if(u){var h=u.match(/text-align:.+?[; "]{1,1}/gi);h&&h[h.length-1].replace(/(text-align:.+?[; "]{1,1})/gi,"$1")}C(e)}if("TR"==n&&function(e,t){T.node.clearAttributes(e);for(var n=e.firstElementChild,r=0,i=!1,a=null;n;){n.firstElementChild&&-1!=n.firstElementChild.tagName.indexOf("W:")&&(n.innerHTML=n.firstElementChild.innerHTML),(a=n.getAttribute("width"))||i||(i=!0),r+=parseInt(a,10),(!n.firstChild||n.firstChild&&n.firstChild.data==Te.FE.UNICODE_NBSP)&&(n.firstChild&&A(n.firstChild),n.innerHTML="<br>");for(var o=n.firstElementChild,s=1==n.children.length;o;)"P"!=o.tagName||S(o)||s&&C(o),o=o.nextElementSibling;if(t){var l=n.getAttribute("class");if(l){var d=(l=y(l)).match(/xl[0-9]+/gi);if(d){var c="."+d[0];t[c]&&("TD"===n.tagName&&(t[c]=t[c].replace(/(border[^:]*:)(\d*\.\d*)(pt)/g,function(e,t,n,r){return[t,Math.round(2*parseFloat(n)),r].join("")})),L(n,t[c]))}}t.td&&L(n,t.td)}var f=n.getAttribute("style");f&&(f=y(f))&&";"!=f.slice(-1)&&(f+=";");var p=n.getAttribute("valign");if(!p&&f){var u=f.match(/vertical-align:.+?[; "]{1,1}/gi);u&&(p=u[u.length-1].replace(/vertical-align:(.+?)[; "]{1,1}/gi,"$1"))}var h=null;if(f){var g=f.match(/text-align:.+?[; "]{1,1}/gi);g&&(h=g[g.length-1].replace(/text-align:(.+?)[; "]{1,1}/gi,"$1")),"general"==h&&(h=null)}var m=null;if(f){var v=f.match(/background:.+?[; "]{1,1}/gi);v&&(m=v[v.length-1].replace(/background:(.+?)[; "]{1,1}/gi,"$1"))}var E=n.getAttribute("colspan"),b=n.getAttribute("rowspan");E&&n.setAttribute("colspan",E),b&&n.setAttribute("rowspan",b),p&&(n.style["vertical-align"]=p),h&&(n.style["text-align"]=h),m&&(n.style["background-color"]=m),a&&n.setAttribute("width",a),n=n.nextElementSibling}for(n=e.firstElementChild;n;)a=n.getAttribute("width"),i?n.removeAttribute("width"):n.setAttribute("width",100*parseInt(a,10)/r+"%"),n=n.nextElementSibling}(e,t),"A"!=n||e.attributes.getNamedItem("href")||e.attributes.getNamedItem("name")||!e.innerHTML||(e.outerHTML=e.innerHTML),"A"==n&&e.getAttribute("href")&&e.querySelector("img")){var g=e.querySelectorAll("span");for(i=0;i<g.length;i++)g[i].innerText||(g[i].outerHTML=g[i].innerHTML)}if("TD"!=n&&"TH"!=n||e.innerHTML||(e.innerHTML="<br>"),"TABLE"==n&&(e.style.width=e.style.width),e.getAttribute("lang")&&e.removeAttribute("lang"),e.getAttribute("style")&&-1!=e.getAttribute("style").toLowerCase().indexOf("mso")){var m=y(e.getAttribute("style"));(m=m.replace(/[0-9a-z-_]*mso[0-9a-z-_]*:.+?(;{1,1}|$)/gi,""))?e.setAttribute("style",m):e.removeAttribute("style")}return!0}var h={};return{_init:function(){T.events.on("paste.wordPaste",function(e){return r=e,T.opts.wordPasteModal?function(){if(!a){var e='<h4><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.95 73.23" style="height: 25px; vertical-align: text-bottom; margin-right: 5px; display: inline-block"><defs><style>.a{fill:#2a5699;}.b{fill:#fff;}</style></defs><path class="a" d="M615.15,827.22h5.09V834c9.11.05,18.21-.09,27.32.05a2.93,2.93,0,0,1,3.29,3.25c.14,16.77,0,33.56.09,50.33-.09,1.72.17,3.63-.83,5.15-1.24.89-2.85.78-4.3.84-8.52,0-17,0-25.56,0v6.81h-5.32c-13-2.37-26-4.54-38.94-6.81q0-29.8,0-59.59c13.05-2.28,26.11-4.5,39.17-6.83Z" transform="translate(-575.97 -827.22)"/><path class="b" d="M620.24,836.59h28.1v54.49h-28.1v-6.81h22.14v-3.41H620.24v-4.26h22.14V873.2H620.24v-4.26h22.14v-3.41H620.24v-4.26h22.14v-3.41H620.24v-4.26h22.14v-3.41H620.24V846h22.14v-3.41H620.24Zm-26.67,15c1.62-.09,3.24-.16,4.85-.25,1.13,5.75,2.29,11.49,3.52,17.21,1-5.91,2-11.8,3.06-17.7,1.7-.06,3.41-.15,5.1-.26-1.92,8.25-3.61,16.57-5.71,24.77-1.42.74-3.55,0-5.24.09-1.13-5.64-2.45-11.24-3.47-16.9-1,5.5-2.29,10.95-3.43,16.42q-2.45-.13-4.92-.3c-1.41-7.49-3.07-14.93-4.39-22.44l4.38-.18c.88,5.42,1.87,10.82,2.64,16.25,1.2-5.57,2.43-11.14,3.62-16.71Z" transform="translate(-575.97 -827.22)"/></svg> '+T.language.translate("Word Paste Detected")+"</h4>",t=(i='<div class="fr-word-paste-modal" style="padding: 20px 20px 10px 20px;">',i+='<p style="text-align: left;">'+T.language.translate("The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?")+"</p>",i+='<div style="text-align: right; margin-top: 50px;"><button class="fr-remove-word fr-command">'+T.language.translate("Clean")+'</button> <button class="fr-keep-word fr-command">'+T.language.translate("Keep")+"</button></div>",i+="</div>"),n=T.modals.create(o,e,t),r=n.$body;a=n.$modal,n.$modal.addClass("fr-middle"),T.events.bindClick(r,"button.fr-remove-word",function(){var e=a.data("instance")||T;e.wordPaste.clean()}),T.events.bindClick(r,"button.fr-keep-word",function(){var e=a.data("instance")||T;e.wordPaste.clean(!0)}),T.events.$on(Te(T.o_win),"resize",function(){T.modals.resize(o)})}var i;T.modals.show(o),T.modals.resize(o)}():t(T.opts.wordPasteKeepFormatting),!1})},clean:t}}});
;/*!
 * froala_editor v2.9.8 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                }
                else {
                    jQuery = require('jquery')(root);
                }
            }
            return factory(jQuery);
        };
    } else {
        // Browser globals
        factory(window.jQuery);
    }
}(function ($) {
/**
* Spanish
*/

$.FE.LANGUAGE['es'] = {
  translation: {
    // Place holder
    "Type something": "Escriba algo",

    // Basic formatting
    "Bold": "Negrita",
    "Italic": "It\u00e1lica",
    "Underline": "Subrayado",
    "Strikethrough": "Tachado",

    // Main buttons
    "Insert": "Insertar",
    "Delete": "Borrar",
    "Cancel": "Cancelar",
    "OK": "Ok",
    "Back": "Atr\u00e1s",
    "Remove": "Quitar",
    "More": "M\u00e1s",
    "Update": "Actualizaci\u00f3n",
    "Style": "Estilo",

    // Font
    "Font Family": "Familia de fuentes",
    "Font Size": "Tama\u00f1o de fuente",

    // Colors
    "Colors": "Colores",
    "Background": "Fondo",
    "Text": "Texto",
    "HEX Color": "Color hexadecimal",

    // Paragraphs
    "Paragraph Format": "Formato de p\u00e1rrafo",
    "Normal": "Normal",
    "Code": "C\u00f3digo",
    "Heading 1": "Encabezado 1",
    "Heading 2": "Encabezado 2",
    "Heading 3": "Encabezado 3",
    "Heading 4": "Encabezado 4",

    // Style
    "Paragraph Style": "Estilo de p\u00e1rrafo",
    "Inline Style": "Estilo en l\u00ednea",

    // Alignment
    "Align": "Alinear",
    "Align Left": "Alinear a la izquierda",
    "Align Center": "Alinear al centro",
    "Align Right": "Alinear a la derecha",
    "Align Justify": "Justificar",
    "None": "Ninguno",

    // Lists
    "Ordered List": "Lista ordenada",
    "Unordered List": "Lista desordenada",
    "Default": "Defecto",

    // Ordered lists
    "Lower Alpha": "Alfa inferior",
    "Lower Greek": "Griego inferior",
    "Lower Roman": "Bajo romano",
    "Upper Alpha": "Alfa superior",
    "Upper Roman": "Alto romano",

    // Unordered lists
    "Circle": "Circulo",
    "Disc": "Dto",
    "Square": "Cuadrado",

    // Indent
    "Decrease Indent": "Reducir sangr\u00eda",
    "Increase Indent": "Aumentar sangr\u00eda",

    // Links
    "Insert Link": "Insertar enlace",
    "Open in new tab": "Abrir en una nueva pesta\u00F1a",
    "Open Link": "Abrir enlace",
    "Edit Link": "Editar enlace",
    "Unlink": "Quitar enlace",
    "Choose Link": "Elegir enlace",

    // Images
    "Insert Image": "Insertar imagen",
    "Upload Image": "Cargar imagen",
    "By URL": "Por URL",
    "Browse": "Examinar",
    "Drop image": "Soltar la imagen",
    "or click": "o haga clic en",
    "Manage Images": "Administrar im\u00e1genes",
    "Loading": "Cargando",
    "Deleting": "Borrado",
    "Tags": "Etiquetas",
    "Are you sure? Image will be deleted.": "\u00bfEst\u00e1 seguro? La imagen ser\u00e1 borrada.",
    "Replace": "Reemplazar",
    "Uploading": "Carga",
    "Loading image": "Cargando imagen",
    "Display": "Mostrar",
    "Inline": "En l\u00ednea",
    "Break Text": "Romper texto",
    "Alternative Text": "Texto alternativo",
    "Change Size": "Cambiar tama\u00f1o",
    "Width": "Ancho",
    "Height": "Altura",
    "Something went wrong. Please try again.": "Algo sali\u00f3 mal. Por favor, vuelva a intentarlo.",
    "Image Caption": "Captura de imagen",
    "Advanced Edit": "Edición avanzada",

    // Video
    "Insert Video": "Insertar video",
    "Embedded Code": "C\u00f3digo incrustado",
    "Paste in a video URL": "Pegar en una URL de video",
    "Drop video": "Soltar video",
    "Your browser does not support HTML5 video.": "Su navegador no es compatible con video html5.",
    "Upload Video": "Subir video",

    // Tables
    "Insert Table": "Insertar tabla",
    "Table Header": "Encabezado de la tabla",
    "Remove Table": "Retire la tabla",
    "Table Style": "Estilo de tabla",
    "Horizontal Align": "Alinear horizontal",
    "Row": "Fila",
    "Insert row above": "Insertar fila antes",
    "Insert row below": "Insertar fila despu\u00e9s",
    "Delete row": "Eliminar fila",
    "Column": "Columna",
    "Insert column before": "Insertar columna antes",
    "Insert column after": "Insertar columna despu\u00e9s",
    "Delete column": "Eliminar columna",
    "Cell": "Celda",
    "Merge cells": "Combinar celdas",
    "Horizontal split": "Divisi\u00f3n horizontal",
    "Vertical split": "Divisi\u00f3n vertical",
    "Cell Background": "Fondo de la celda",
    "Vertical Align": "Alinear vertical",
    "Top": "Cima",
    "Middle": "Medio",
    "Bottom": "Del fondo",
    "Align Top": "Alinear a la parte superior",
    "Align Middle": "Alinear media",
    "Align Bottom": "Alinear abajo",
    "Cell Style": "Estilo de celda",

    // Files
    "Upload File": "Subir archivo",
    "Drop file": "Soltar archivo",

    // Emoticons
    "Emoticons": "Emoticonos",
    "Grinning face": "Cara sonriendo",
    "Grinning face with smiling eyes": "Cara sonriendo con ojos sonrientes",
    "Face with tears of joy": "Cara con l\u00e1grimas de alegr\u00eda",
    "Smiling face with open mouth": "Cara sonriente con la boca abierta",
    "Smiling face with open mouth and smiling eyes": "Cara sonriente con la boca abierta y los ojos sonrientes",
    "Smiling face with open mouth and cold sweat": "Cara sonriente con la boca abierta y el sudor fr\u00edo",
    "Smiling face with open mouth and tightly-closed eyes": "Cara sonriente con la boca abierta y los ojos fuertemente cerrados",
    "Smiling face with halo": "Cara sonriente con halo",
    "Smiling face with horns": "Cara sonriente con cuernos",
    "Winking face": "Gui\u00f1o de la cara",
    "Smiling face with smiling eyes": "Cara sonriente con ojos sonrientes",
    "Face savoring delicious food": "Cara de saborear una deliciosa comida",
    "Relieved face": "Cara Aliviado",
    "Smiling face with heart-shaped eyes": "Cara sonriente con los ojos en forma de coraz\u00f3n",
    "Smiling face with sunglasses": "Cara sonriente con gafas de sol",
    "Smirking face": "Sonriendo cara",
    "Neutral face": "Cara neutral",
    "Expressionless face": "Rostro inexpresivo",
    "Unamused face": "Cara aburrida",
    "Face with cold sweat": "Cara con sudor fr\u00edo",
    "Pensive face": "Rostro pensativo",
    "Confused face": "Cara confusa",
    "Confounded face": "Cara aturdida",
    "Kissing face": "Cara besando",
    "Face throwing a kiss": "Cara lanzando un beso",
    "Kissing face with smiling eyes": "Cara besando con ojos sonrientes",
    "Kissing face with closed eyes": "Cara besando con los ojos cerrados",
    "Face with stuck out tongue": "Cara con la lengua pegada",
    "Face with stuck out tongue and winking eye": "Cara con la lengua pegada y el ojo parpadeante",
    "Face with stuck out tongue and tightly-closed eyes": "Cara con la lengua pegada y los ojos fuertemente cerrados",
    "Disappointed face": "Cara de decepcionado",
    "Worried face": "Cara de preocupaci\u00f3n",
    "Angry face": "Cara enojada",
    "Pouting face": "Que pone mala cara",
    "Crying face": "Cara llorando",
    "Persevering face": "Cara de perseverancia",
    "Face with look of triumph": "Cara con expresi\u00f3n de triunfo",
    "Disappointed but relieved face": "Decepcionado pero el rostro aliviado",
    "Frowning face with open mouth": "Cara con la boca abierta con el ce\u00f1o fruncido",
    "Anguished face": "Rostro angustiado",
    "Fearful face": "Cara temerosa",
    "Weary face": "Rostro cansado",
    "Sleepy face": "Rostro somnoliento",
    "Tired face": "Rostro cansado",
    "Grimacing face": "Cara haciendo una mueca",
    "Loudly crying face": "Cara llorando en voz alta",
    "Face with open mouth": "Cara con la boca abierta",
    "Hushed face": "Cara callada",
    "Face with open mouth and cold sweat": "Cara con la boca abierta y el sudor frío",
    "Face screaming in fear": "Cara gritando de miedo",
    "Astonished face": "Cara asombrosa",
    "Flushed face": "Cara enrojecida",
    "Sleeping face": "Rostro dormido",
    "Dizzy face": "Cara mareada",
    "Face without mouth": "Cara sin boca",
    "Face with medical mask": "Cara con la m\u00e1scara m\u00e9dica",

    // Line breaker
    "Break": "Romper",

    // Math
    "Subscript": "Sub\u00edndice",
    "Superscript": "Super\u00edndice",

    // Full screen
    "Fullscreen": "Pantalla completa",

    // Horizontal line
    "Insert Horizontal Line": "Insertar l\u00ednea horizontal",

    // Clear formatting
    "Clear Formatting": "Quitar el formato",

    // Undo, redo
    "Undo": "Deshacer",
    "Redo": "Rehacer",

    // Select all
    "Select All": "Seleccionar todo",

    // Code view
    "Code View": "Vista de c\u00f3digo",

    // Quote
    "Quote": "Cita",
    "Increase": "Aumentar",
    "Decrease": "Disminuci\u00f3n",

    // Quick Insert
    "Quick Insert": "Inserci\u00f3n r\u00e1pida",

    // Spcial Characters
    "Special Characters": "Caracteres especiales",
    "Latin": "Latín",
    "Greek": "Griego",
    "Cyrillic": "Cirílico",
    "Punctuation": "Puntuación",
    "Currency": "Moneda",
    "Arrows": "Flechas",
    "Math": "Mates",
    "Misc": "Misc",

    // Print.
    "Print": "Impresión",

    // Spell Checker.
    "Spell Checker": "Corrector ortográfico",

    // Help
    "Help": "Ayuda",
    "Shortcuts": "Atajos",
    "Inline Editor": "Editor en línea",
    "Show the editor": "Mostrar al editor",
    "Common actions": "Acciones comunes",
    "Copy": "Copiar",
    "Cut": "Cortar",
    "Paste": "Pegar",
    "Basic Formatting": "Formato básico",
    "Increase quote level": "Aumentar el nivel de cotización",
    "Decrease quote level": "Disminuir el nivel de cotización",
    "Image / Video": "Imagen / video",
    "Resize larger": "Redimensionar más grande",
    "Resize smaller": "Redimensionar más pequeño",
    "Table": "Mesa",
    "Select table cell": "Celda de tabla select",
    "Extend selection one cell": "Ampliar la selección una celda",
    "Extend selection one row": "Ampliar la selección una fila",
    "Navigation": "Navegación",
    "Focus popup / toolbar": "Focus popup / toolbar",
    "Return focus to previous position": "Volver al foco a la posición anterior",

    // Embed.ly
    "Embed URL": "URL de inserción",
    "Paste in a URL to embed": "Pegar en una url para incrustar",

    // Word Paste.
    "The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?": "El contenido pegado viene de un documento de Microsoft Word. ¿Quieres mantener el formato o limpiarlo?",
    "Keep": "Guardar",
    "Clean": "Limpiar",
    "Word Paste Detected": "Palabra detectada",

    //PDF
    "Download PDF": "Descargar PDF",

    "Inline Class": "Clase en línea",

    //Line height
    "Line Height": "Interlineado",
    "Single": "Soltera",
    "Double": "Doble",

  },
  direction: "ltr"
};

}));

;;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory();
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define([], factory);
	}
	else {
		// Global (browser)
		root.CryptoJS = factory();
	}
}(this, function () {

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {
	    /*
	     * Local polyfil of Object.create
	     */
	    var create = Object.create || (function () {
	        function F() {};

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }())

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var i = 0; i < thatSigBytes; i += 4) {
	                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            var r = (function (m_w) {
	                var m_w = m_w;
	                var m_z = 0x3ade68b1;
	                var mask = 0xffffffff;

	                return function () {
	                    m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
	                    m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
	                    var result = ((m_z << 0x10) + m_w) & mask;
	                    result /= 0x100000000;
	                    result += 0.5;
	                    return result * (Math.random() > .5 ? 1 : -1);
	                }
	            });

	            for (var i = 0, rcache; i < nBytes; i += 4) {
	                var _r = r((rcache || Math.random()) * 0x100000000);

	                rcache = _r() * 0x3ade67b7;
	                words.push((_r() * 0x100000000) | 0);
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                var processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * Base64 encoding strategy.
	     */
	    var Base64 = C_enc.Base64 = {
	        /**
	         * Converts a word array to a Base64 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Base64 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;
	            var map = this._map;

	            // Clamp excess bits
	            wordArray.clamp();

	            // Convert
	            var base64Chars = [];
	            for (var i = 0; i < sigBytes; i += 3) {
	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
	                }
	            }

	            // Add padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                while (base64Chars.length % 4) {
	                    base64Chars.push(paddingChar);
	                }
	            }

	            return base64Chars.join('');
	        },

	        /**
	         * Converts a Base64 string to a word array.
	         *
	         * @param {string} base64Str The Base64 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
	         */
	        parse: function (base64Str) {
	            // Shortcuts
	            var base64StrLength = base64Str.length;
	            var map = this._map;
	            var reverseMap = this._reverseMap;

	            if (!reverseMap) {
	                    reverseMap = this._reverseMap = [];
	                    for (var j = 0; j < map.length; j++) {
	                        reverseMap[map.charCodeAt(j)] = j;
	                    }
	            }

	            // Ignore padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                var paddingIndex = base64Str.indexOf(paddingChar);
	                if (paddingIndex !== -1) {
	                    base64StrLength = paddingIndex;
	                }
	            }

	            // Convert
	            return parseLoop(base64Str, base64StrLength, reverseMap);

	        },

	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
	    };

	    function parseLoop(base64Str, base64StrLength, reverseMap) {
	      var words = [];
	      var nBytes = 0;
	      for (var i = 0; i < base64StrLength; i++) {
	          if (i % 4) {
	              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
	              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
	              words[nBytes >>> 2] |= (bits1 | bits2) << (24 - (nBytes % 4) * 8);
	              nBytes++;
	          }
	      }
	      return WordArray.create(words, nBytes);
	    }
	}());


	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var T = [];

	    // Compute constants
	    (function () {
	        for (var i = 0; i < 64; i++) {
	            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
	        }
	    }());

	    /**
	     * MD5 hash algorithm.
	     */
	    var MD5 = C_algo.MD5 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }

	            // Shortcuts
	            var H = this._hash.words;

	            var M_offset_0  = M[offset + 0];
	            var M_offset_1  = M[offset + 1];
	            var M_offset_2  = M[offset + 2];
	            var M_offset_3  = M[offset + 3];
	            var M_offset_4  = M[offset + 4];
	            var M_offset_5  = M[offset + 5];
	            var M_offset_6  = M[offset + 6];
	            var M_offset_7  = M[offset + 7];
	            var M_offset_8  = M[offset + 8];
	            var M_offset_9  = M[offset + 9];
	            var M_offset_10 = M[offset + 10];
	            var M_offset_11 = M[offset + 11];
	            var M_offset_12 = M[offset + 12];
	            var M_offset_13 = M[offset + 13];
	            var M_offset_14 = M[offset + 14];
	            var M_offset_15 = M[offset + 15];

	            // Working varialbes
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];

	            // Computation
	            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
	            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
	            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
	            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
	            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
	            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
	            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
	            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
	            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
	            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
	            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
	            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
	            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
	            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
	            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
	            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

	            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
	            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
	            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
	            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
	            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
	            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
	            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
	            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
	            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
	            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
	            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
	            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
	            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
	            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
	            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
	            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

	            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
	            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
	            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
	            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
	            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
	            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
	            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
	            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
	            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
	            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
	            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
	            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
	            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
	            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
	            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
	            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

	            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
	            d = II(d, a, b, c, M_offset_7,  10, T[49]);
	            c = II(c, d, a, b, M_offset_14, 15, T[50]);
	            b = II(b, c, d, a, M_offset_5,  21, T[51]);
	            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
	            d = II(d, a, b, c, M_offset_3,  10, T[53]);
	            c = II(c, d, a, b, M_offset_10, 15, T[54]);
	            b = II(b, c, d, a, M_offset_1,  21, T[55]);
	            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
	            d = II(d, a, b, c, M_offset_15, 10, T[57]);
	            c = II(c, d, a, b, M_offset_6,  15, T[58]);
	            b = II(b, c, d, a, M_offset_13, 21, T[59]);
	            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
	            d = II(d, a, b, c, M_offset_11, 10, T[61]);
	            c = II(c, d, a, b, M_offset_2,  15, T[62]);
	            b = II(b, c, d, a, M_offset_9,  21, T[63]);

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

	            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
	            var nBitsTotalL = nBitsTotal;
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
	                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
	            );
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
	            );

	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                // Shortcut
	                var H_i = H[i];

	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    function FF(a, b, c, d, x, s, t) {
	        var n = a + ((b & c) | (~b & d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function GG(a, b, c, d, x, s, t) {
	        var n = a + ((b & d) | (c & ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function HH(a, b, c, d, x, s, t) {
	        var n = a + (b ^ c ^ d) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function II(a, b, c, d, x, s, t) {
	        var n = a + (c ^ (b | ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.MD5('message');
	     *     var hash = CryptoJS.MD5(wordArray);
	     */
	    C.MD5 = Hasher._createHelper(MD5);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacMD5(message, key);
	     */
	    C.HmacMD5 = Hasher._createHmacHelper(MD5);
	}(Math));


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-1 hash algorithm.
	     */
	    var SHA1 = C_algo.SHA1 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476,
	                0xc3d2e1f0
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];

	            // Computation
	            for (var i = 0; i < 80; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
	                    W[i] = (n << 1) | (n >>> 31);
	                }

	                var t = ((a << 5) | (a >>> 27)) + e + W[i];
	                if (i < 20) {
	                    t += ((b & c) | (~b & d)) + 0x5a827999;
	                } else if (i < 40) {
	                    t += (b ^ c ^ d) + 0x6ed9eba1;
	                } else if (i < 60) {
	                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
	                } else /* if (i < 80) */ {
	                    t += (b ^ c ^ d) - 0x359d3e2a;
	                }

	                e = d;
	                d = c;
	                c = (b << 30) | (b >>> 2);
	                b = a;
	                a = t;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA1('message');
	     *     var hash = CryptoJS.SHA1(wordArray);
	     */
	    C.SHA1 = Hasher._createHelper(SHA1);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA1(message, key);
	     */
	    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
	}());


	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Initialization and round constants tables
	    var H = [];
	    var K = [];

	    // Compute constants
	    (function () {
	        function isPrime(n) {
	            var sqrtN = Math.sqrt(n);
	            for (var factor = 2; factor <= sqrtN; factor++) {
	                if (!(n % factor)) {
	                    return false;
	                }
	            }

	            return true;
	        }

	        function getFractionalBits(n) {
	            return ((n - (n | 0)) * 0x100000000) | 0;
	        }

	        var n = 2;
	        var nPrime = 0;
	        while (nPrime < 64) {
	            if (isPrime(n)) {
	                if (nPrime < 8) {
	                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
	                }
	                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

	                nPrime++;
	            }

	            n++;
	        }
	    }());

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-256 hash algorithm.
	     */
	    var SHA256 = C_algo.SHA256 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init(H.slice(0));
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];
	            var f = H[5];
	            var g = H[6];
	            var h = H[7];

	            // Computation
	            for (var i = 0; i < 64; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var gamma0x = W[i - 15];
	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
	                                   (gamma0x >>> 3);

	                    var gamma1x = W[i - 2];
	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
	                                   (gamma1x >>> 10);

	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
	                }

	                var ch  = (e & f) ^ (~e & g);
	                var maj = (a & b) ^ (a & c) ^ (b & c);

	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

	                var t1 = h + sigma1 + ch + K[i] + W[i];
	                var t2 = sigma0 + maj;

	                h = g;
	                g = f;
	                f = e;
	                e = (d + t1) | 0;
	                d = c;
	                c = b;
	                b = a;
	                a = (t1 + t2) | 0;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	            H[5] = (H[5] + f) | 0;
	            H[6] = (H[6] + g) | 0;
	            H[7] = (H[7] + h) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */
	    C.SHA256 = Hasher._createHelper(SHA256);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */
	    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
	}(Math));


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * UTF-16 BE encoding strategy.
	     */
	    var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
	        /**
	         * Converts a word array to a UTF-16 BE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 BE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var utf16Chars = [];
	            for (var i = 0; i < sigBytes; i += 2) {
	                var codePoint = (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff;
	                utf16Chars.push(String.fromCharCode(codePoint));
	            }

	            return utf16Chars.join('');
	        },

	        /**
	         * Converts a UTF-16 BE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 BE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
	         */
	        parse: function (utf16Str) {
	            // Shortcut
	            var utf16StrLength = utf16Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < utf16StrLength; i++) {
	                words[i >>> 1] |= utf16Str.charCodeAt(i) << (16 - (i % 2) * 16);
	            }

	            return WordArray.create(words, utf16StrLength * 2);
	        }
	    };

	    /**
	     * UTF-16 LE encoding strategy.
	     */
	    C_enc.Utf16LE = {
	        /**
	         * Converts a word array to a UTF-16 LE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 LE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var utf16Chars = [];
	            for (var i = 0; i < sigBytes; i += 2) {
	                var codePoint = swapEndian((words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff);
	                utf16Chars.push(String.fromCharCode(codePoint));
	            }

	            return utf16Chars.join('');
	        },

	        /**
	         * Converts a UTF-16 LE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 LE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
	         */
	        parse: function (utf16Str) {
	            // Shortcut
	            var utf16StrLength = utf16Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < utf16StrLength; i++) {
	                words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << (16 - (i % 2) * 16));
	            }

	            return WordArray.create(words, utf16StrLength * 2);
	        }
	    };

	    function swapEndian(word) {
	        return ((word << 8) & 0xff00ff00) | ((word >>> 8) & 0x00ff00ff);
	    }
	}());


	(function () {
	    // Check if typed arrays are supported
	    if (typeof ArrayBuffer != 'function') {
	        return;
	    }

	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;

	    // Reference original init
	    var superInit = WordArray.init;

	    // Augment WordArray.init to handle typed arrays
	    var subInit = WordArray.init = function (typedArray) {
	        // Convert buffers to uint8
	        if (typedArray instanceof ArrayBuffer) {
	            typedArray = new Uint8Array(typedArray);
	        }

	        // Convert other array views to uint8
	        if (
	            typedArray instanceof Int8Array ||
	            (typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray) ||
	            typedArray instanceof Int16Array ||
	            typedArray instanceof Uint16Array ||
	            typedArray instanceof Int32Array ||
	            typedArray instanceof Uint32Array ||
	            typedArray instanceof Float32Array ||
	            typedArray instanceof Float64Array
	        ) {
	            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
	        }

	        // Handle Uint8Array
	        if (typedArray instanceof Uint8Array) {
	            // Shortcut
	            var typedArrayByteLength = typedArray.byteLength;

	            // Extract bytes
	            var words = [];
	            for (var i = 0; i < typedArrayByteLength; i++) {
	                words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
	            }

	            // Initialize this word array
	            superInit.call(this, words, typedArrayByteLength);
	        } else {
	            // Else call normal init
	            superInit.apply(this, arguments);
	        }
	    };

	    subInit.prototype = WordArray;
	}());


	/** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var _zl = WordArray.create([
	        0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
	        7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
	        3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
	        1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
	        4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13]);
	    var _zr = WordArray.create([
	        5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
	        6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
	        15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
	        8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
	        12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11]);
	    var _sl = WordArray.create([
	         11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
	        7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
	        11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
	          11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
	        9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ]);
	    var _sr = WordArray.create([
	        8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
	        9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
	        9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
	        15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
	        8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ]);

	    var _hl =  WordArray.create([ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
	    var _hr =  WordArray.create([ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

	    /**
	     * RIPEMD160 hash algorithm.
	     */
	    var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
	        _doReset: function () {
	            this._hash  = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
	        },

	        _doProcessBlock: function (M, offset) {

	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                // Swap
	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }
	            // Shortcut
	            var H  = this._hash.words;
	            var hl = _hl.words;
	            var hr = _hr.words;
	            var zl = _zl.words;
	            var zr = _zr.words;
	            var sl = _sl.words;
	            var sr = _sr.words;

	            // Working variables
	            var al, bl, cl, dl, el;
	            var ar, br, cr, dr, er;

	            ar = al = H[0];
	            br = bl = H[1];
	            cr = cl = H[2];
	            dr = dl = H[3];
	            er = el = H[4];
	            // Computation
	            var t;
	            for (var i = 0; i < 80; i += 1) {
	                t = (al +  M[offset+zl[i]])|0;
	                if (i<16){
		            t +=  f1(bl,cl,dl) + hl[0];
	                } else if (i<32) {
		            t +=  f2(bl,cl,dl) + hl[1];
	                } else if (i<48) {
		            t +=  f3(bl,cl,dl) + hl[2];
	                } else if (i<64) {
		            t +=  f4(bl,cl,dl) + hl[3];
	                } else {// if (i<80) {
		            t +=  f5(bl,cl,dl) + hl[4];
	                }
	                t = t|0;
	                t =  rotl(t,sl[i]);
	                t = (t+el)|0;
	                al = el;
	                el = dl;
	                dl = rotl(cl, 10);
	                cl = bl;
	                bl = t;

	                t = (ar + M[offset+zr[i]])|0;
	                if (i<16){
		            t +=  f5(br,cr,dr) + hr[0];
	                } else if (i<32) {
		            t +=  f4(br,cr,dr) + hr[1];
	                } else if (i<48) {
		            t +=  f3(br,cr,dr) + hr[2];
	                } else if (i<64) {
		            t +=  f2(br,cr,dr) + hr[3];
	                } else {// if (i<80) {
		            t +=  f1(br,cr,dr) + hr[4];
	                }
	                t = t|0;
	                t =  rotl(t,sr[i]) ;
	                t = (t+er)|0;
	                ar = er;
	                er = dr;
	                dr = rotl(cr, 10);
	                cr = br;
	                br = t;
	            }
	            // Intermediate hash value
	            t    = (H[1] + cl + dr)|0;
	            H[1] = (H[2] + dl + er)|0;
	            H[2] = (H[3] + el + ar)|0;
	            H[3] = (H[4] + al + br)|0;
	            H[4] = (H[0] + bl + cr)|0;
	            H[0] =  t;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
	            );
	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 5; i++) {
	                // Shortcut
	                var H_i = H[i];

	                // Swap
	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });


	    function f1(x, y, z) {
	        return ((x) ^ (y) ^ (z));

	    }

	    function f2(x, y, z) {
	        return (((x)&(y)) | ((~x)&(z)));
	    }

	    function f3(x, y, z) {
	        return (((x) | (~(y))) ^ (z));
	    }

	    function f4(x, y, z) {
	        return (((x) & (z)) | ((y)&(~(z))));
	    }

	    function f5(x, y, z) {
	        return ((x) ^ ((y) |(~(z))));

	    }

	    function rotl(x,n) {
	        return (x<<n) | (x>>>(32-n));
	    }


	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.RIPEMD160('message');
	     *     var hash = CryptoJS.RIPEMD160(wordArray);
	     */
	    C.RIPEMD160 = Hasher._createHelper(RIPEMD160);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
	     */
	    C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
	}(Math));


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var C_enc = C.enc;
	    var Utf8 = C_enc.Utf8;
	    var C_algo = C.algo;

	    /**
	     * HMAC algorithm.
	     */
	    var HMAC = C_algo.HMAC = Base.extend({
	        /**
	         * Initializes a newly created HMAC.
	         *
	         * @param {Hasher} hasher The hash algorithm to use.
	         * @param {WordArray|string} key The secret key.
	         *
	         * @example
	         *
	         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
	         */
	        init: function (hasher, key) {
	            // Init hasher
	            hasher = this._hasher = new hasher.init();

	            // Convert string to WordArray, else assume WordArray already
	            if (typeof key == 'string') {
	                key = Utf8.parse(key);
	            }

	            // Shortcuts
	            var hasherBlockSize = hasher.blockSize;
	            var hasherBlockSizeBytes = hasherBlockSize * 4;

	            // Allow arbitrary length keys
	            if (key.sigBytes > hasherBlockSizeBytes) {
	                key = hasher.finalize(key);
	            }

	            // Clamp excess bits
	            key.clamp();

	            // Clone key for inner and outer pads
	            var oKey = this._oKey = key.clone();
	            var iKey = this._iKey = key.clone();

	            // Shortcuts
	            var oKeyWords = oKey.words;
	            var iKeyWords = iKey.words;

	            // XOR keys with pad constants
	            for (var i = 0; i < hasherBlockSize; i++) {
	                oKeyWords[i] ^= 0x5c5c5c5c;
	                iKeyWords[i] ^= 0x36363636;
	            }
	            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this HMAC to its initial state.
	         *
	         * @example
	         *
	         *     hmacHasher.reset();
	         */
	        reset: function () {
	            // Shortcut
	            var hasher = this._hasher;

	            // Reset
	            hasher.reset();
	            hasher.update(this._iKey);
	        },

	        /**
	         * Updates this HMAC with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {HMAC} This HMAC instance.
	         *
	         * @example
	         *
	         *     hmacHasher.update('message');
	         *     hmacHasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            this._hasher.update(messageUpdate);

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the HMAC computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The HMAC.
	         *
	         * @example
	         *
	         *     var hmac = hmacHasher.finalize();
	         *     var hmac = hmacHasher.finalize('message');
	         *     var hmac = hmacHasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Shortcut
	            var hasher = this._hasher;

	            // Compute HMAC
	            var innerHash = hasher.finalize(messageUpdate);
	            hasher.reset();
	            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

	            return hmac;
	        }
	    });
	}());


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var SHA1 = C_algo.SHA1;
	    var HMAC = C_algo.HMAC;

	    /**
	     * Password-Based Key Derivation Function 2 algorithm.
	     */
	    var PBKDF2 = C_algo.PBKDF2 = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hasher to use. Default: SHA1
	         * @property {number} iterations The number of iterations to perform. Default: 1
	         */
	        cfg: Base.extend({
	            keySize: 128/32,
	            hasher: SHA1,
	            iterations: 1
	        }),

	        /**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.PBKDF2.create();
	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
	         */
	        init: function (cfg) {
	            this.cfg = this.cfg.extend(cfg);
	        },

	        /**
	         * Computes the Password-Based Key Derivation Function 2.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */
	        compute: function (password, salt) {
	            // Shortcut
	            var cfg = this.cfg;

	            // Init HMAC
	            var hmac = HMAC.create(cfg.hasher, password);

	            // Initial values
	            var derivedKey = WordArray.create();
	            var blockIndex = WordArray.create([0x00000001]);

	            // Shortcuts
	            var derivedKeyWords = derivedKey.words;
	            var blockIndexWords = blockIndex.words;
	            var keySize = cfg.keySize;
	            var iterations = cfg.iterations;

	            // Generate key
	            while (derivedKeyWords.length < keySize) {
	                var block = hmac.update(salt).finalize(blockIndex);
	                hmac.reset();

	                // Shortcuts
	                var blockWords = block.words;
	                var blockWordsLength = blockWords.length;

	                // Iterations
	                var intermediate = block;
	                for (var i = 1; i < iterations; i++) {
	                    intermediate = hmac.finalize(intermediate);
	                    hmac.reset();

	                    // Shortcut
	                    var intermediateWords = intermediate.words;

	                    // XOR intermediate with block
	                    for (var j = 0; j < blockWordsLength; j++) {
	                        blockWords[j] ^= intermediateWords[j];
	                    }
	                }

	                derivedKey.concat(block);
	                blockIndexWords[0]++;
	            }
	            derivedKey.sigBytes = keySize * 4;

	            return derivedKey;
	        }
	    });

	    /**
	     * Computes the Password-Based Key Derivation Function 2.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.PBKDF2(password, salt);
	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
	     */
	    C.PBKDF2 = function (password, salt, cfg) {
	        return PBKDF2.create(cfg).compute(password, salt);
	    };
	}());


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var MD5 = C_algo.MD5;

	    /**
	     * This key derivation function is meant to conform with EVP_BytesToKey.
	     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
	     */
	    var EvpKDF = C_algo.EvpKDF = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
	         * @property {number} iterations The number of iterations to perform. Default: 1
	         */
	        cfg: Base.extend({
	            keySize: 128/32,
	            hasher: MD5,
	            iterations: 1
	        }),

	        /**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.EvpKDF.create();
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
	         */
	        init: function (cfg) {
	            this.cfg = this.cfg.extend(cfg);
	        },

	        /**
	         * Derives a key from a password.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */
	        compute: function (password, salt) {
	            // Shortcut
	            var cfg = this.cfg;

	            // Init hasher
	            var hasher = cfg.hasher.create();

	            // Initial values
	            var derivedKey = WordArray.create();

	            // Shortcuts
	            var derivedKeyWords = derivedKey.words;
	            var keySize = cfg.keySize;
	            var iterations = cfg.iterations;

	            // Generate key
	            while (derivedKeyWords.length < keySize) {
	                if (block) {
	                    hasher.update(block);
	                }
	                var block = hasher.update(password).finalize(salt);
	                hasher.reset();

	                // Iterations
	                for (var i = 1; i < iterations; i++) {
	                    block = hasher.finalize(block);
	                    hasher.reset();
	                }

	                derivedKey.concat(block);
	            }
	            derivedKey.sigBytes = keySize * 4;

	            return derivedKey;
	        }
	    });

	    /**
	     * Derives a key from a password.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.EvpKDF(password, salt);
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
	     */
	    C.EvpKDF = function (password, salt, cfg) {
	        return EvpKDF.create(cfg).compute(password, salt);
	    };
	}());


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var SHA256 = C_algo.SHA256;

	    /**
	     * SHA-224 hash algorithm.
	     */
	    var SHA224 = C_algo.SHA224 = SHA256.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
	                0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4
	            ]);
	        },

	        _doFinalize: function () {
	            var hash = SHA256._doFinalize.call(this);

	            hash.sigBytes -= 4;

	            return hash;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA224('message');
	     *     var hash = CryptoJS.SHA224(wordArray);
	     */
	    C.SHA224 = SHA256._createHelper(SHA224);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA224(message, key);
	     */
	    C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
	}());


	(function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var X32WordArray = C_lib.WordArray;

	    /**
	     * x64 namespace.
	     */
	    var C_x64 = C.x64 = {};

	    /**
	     * A 64-bit word.
	     */
	    var X64Word = C_x64.Word = Base.extend({
	        /**
	         * Initializes a newly created 64-bit word.
	         *
	         * @param {number} high The high 32 bits.
	         * @param {number} low The low 32 bits.
	         *
	         * @example
	         *
	         *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
	         */
	        init: function (high, low) {
	            this.high = high;
	            this.low = low;
	        }

	        /**
	         * Bitwise NOTs this word.
	         *
	         * @return {X64Word} A new x64-Word object after negating.
	         *
	         * @example
	         *
	         *     var negated = x64Word.not();
	         */
	        // not: function () {
	            // var high = ~this.high;
	            // var low = ~this.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise ANDs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to AND with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ANDing.
	         *
	         * @example
	         *
	         *     var anded = x64Word.and(anotherX64Word);
	         */
	        // and: function (word) {
	            // var high = this.high & word.high;
	            // var low = this.low & word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise ORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to OR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ORing.
	         *
	         * @example
	         *
	         *     var ored = x64Word.or(anotherX64Word);
	         */
	        // or: function (word) {
	            // var high = this.high | word.high;
	            // var low = this.low | word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise XORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to XOR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after XORing.
	         *
	         * @example
	         *
	         *     var xored = x64Word.xor(anotherX64Word);
	         */
	        // xor: function (word) {
	            // var high = this.high ^ word.high;
	            // var low = this.low ^ word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Shifts this word n bits to the left.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftL(25);
	         */
	        // shiftL: function (n) {
	            // if (n < 32) {
	                // var high = (this.high << n) | (this.low >>> (32 - n));
	                // var low = this.low << n;
	            // } else {
	                // var high = this.low << (n - 32);
	                // var low = 0;
	            // }

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Shifts this word n bits to the right.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftR(7);
	         */
	        // shiftR: function (n) {
	            // if (n < 32) {
	                // var low = (this.low >>> n) | (this.high << (32 - n));
	                // var high = this.high >>> n;
	            // } else {
	                // var low = this.high >>> (n - 32);
	                // var high = 0;
	            // }

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Rotates this word n bits to the left.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotL(25);
	         */
	        // rotL: function (n) {
	            // return this.shiftL(n).or(this.shiftR(64 - n));
	        // },

	        /**
	         * Rotates this word n bits to the right.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotR(7);
	         */
	        // rotR: function (n) {
	            // return this.shiftR(n).or(this.shiftL(64 - n));
	        // },

	        /**
	         * Adds this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to add with this word.
	         *
	         * @return {X64Word} A new x64-Word object after adding.
	         *
	         * @example
	         *
	         *     var added = x64Word.add(anotherX64Word);
	         */
	        // add: function (word) {
	            // var low = (this.low + word.low) | 0;
	            // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
	            // var high = (this.high + word.high + carry) | 0;

	            // return X64Word.create(high, low);
	        // }
	    });

	    /**
	     * An array of 64-bit words.
	     *
	     * @property {Array} words The array of CryptoJS.x64.Word objects.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var X64WordArray = C_x64.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create();
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ]);
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ], 10);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 8;
	            }
	        },

	        /**
	         * Converts this 64-bit word array to a 32-bit word array.
	         *
	         * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
	         *
	         * @example
	         *
	         *     var x32WordArray = x64WordArray.toX32();
	         */
	        toX32: function () {
	            // Shortcuts
	            var x64Words = this.words;
	            var x64WordsLength = x64Words.length;

	            // Convert
	            var x32Words = [];
	            for (var i = 0; i < x64WordsLength; i++) {
	                var x64Word = x64Words[i];
	                x32Words.push(x64Word.high);
	                x32Words.push(x64Word.low);
	            }

	            return X32WordArray.create(x32Words, this.sigBytes);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {X64WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = x64WordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);

	            // Clone "words" array
	            var words = clone.words = this.words.slice(0);

	            // Clone each X64Word object
	            var wordsLength = words.length;
	            for (var i = 0; i < wordsLength; i++) {
	                words[i] = words[i].clone();
	            }

	            return clone;
	        }
	    });
	}());


	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var C_algo = C.algo;

	    // Constants tables
	    var RHO_OFFSETS = [];
	    var PI_INDEXES  = [];
	    var ROUND_CONSTANTS = [];

	    // Compute Constants
	    (function () {
	        // Compute rho offset constants
	        var x = 1, y = 0;
	        for (var t = 0; t < 24; t++) {
	            RHO_OFFSETS[x + 5 * y] = ((t + 1) * (t + 2) / 2) % 64;

	            var newX = y % 5;
	            var newY = (2 * x + 3 * y) % 5;
	            x = newX;
	            y = newY;
	        }

	        // Compute pi index constants
	        for (var x = 0; x < 5; x++) {
	            for (var y = 0; y < 5; y++) {
	                PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
	            }
	        }

	        // Compute round constants
	        var LFSR = 0x01;
	        for (var i = 0; i < 24; i++) {
	            var roundConstantMsw = 0;
	            var roundConstantLsw = 0;

	            for (var j = 0; j < 7; j++) {
	                if (LFSR & 0x01) {
	                    var bitPosition = (1 << j) - 1;
	                    if (bitPosition < 32) {
	                        roundConstantLsw ^= 1 << bitPosition;
	                    } else /* if (bitPosition >= 32) */ {
	                        roundConstantMsw ^= 1 << (bitPosition - 32);
	                    }
	                }

	                // Compute next LFSR
	                if (LFSR & 0x80) {
	                    // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
	                    LFSR = (LFSR << 1) ^ 0x71;
	                } else {
	                    LFSR <<= 1;
	                }
	            }

	            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
	        }
	    }());

	    // Reusable objects for temporary values
	    var T = [];
	    (function () {
	        for (var i = 0; i < 25; i++) {
	            T[i] = X64Word.create();
	        }
	    }());

	    /**
	     * SHA-3 hash algorithm.
	     */
	    var SHA3 = C_algo.SHA3 = Hasher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} outputLength
	         *   The desired number of bits in the output hash.
	         *   Only values permitted are: 224, 256, 384, 512.
	         *   Default: 512
	         */
	        cfg: Hasher.cfg.extend({
	            outputLength: 512
	        }),

	        _doReset: function () {
	            var state = this._state = []
	            for (var i = 0; i < 25; i++) {
	                state[i] = new X64Word.init();
	            }

	            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcuts
	            var state = this._state;
	            var nBlockSizeLanes = this.blockSize / 2;

	            // Absorb
	            for (var i = 0; i < nBlockSizeLanes; i++) {
	                // Shortcuts
	                var M2i  = M[offset + 2 * i];
	                var M2i1 = M[offset + 2 * i + 1];

	                // Swap endian
	                M2i = (
	                    (((M2i << 8)  | (M2i >>> 24)) & 0x00ff00ff) |
	                    (((M2i << 24) | (M2i >>> 8))  & 0xff00ff00)
	                );
	                M2i1 = (
	                    (((M2i1 << 8)  | (M2i1 >>> 24)) & 0x00ff00ff) |
	                    (((M2i1 << 24) | (M2i1 >>> 8))  & 0xff00ff00)
	                );

	                // Absorb message into state
	                var lane = state[i];
	                lane.high ^= M2i1;
	                lane.low  ^= M2i;
	            }

	            // Rounds
	            for (var round = 0; round < 24; round++) {
	                // Theta
	                for (var x = 0; x < 5; x++) {
	                    // Mix column lanes
	                    var tMsw = 0, tLsw = 0;
	                    for (var y = 0; y < 5; y++) {
	                        var lane = state[x + 5 * y];
	                        tMsw ^= lane.high;
	                        tLsw ^= lane.low;
	                    }

	                    // Temporary values
	                    var Tx = T[x];
	                    Tx.high = tMsw;
	                    Tx.low  = tLsw;
	                }
	                for (var x = 0; x < 5; x++) {
	                    // Shortcuts
	                    var Tx4 = T[(x + 4) % 5];
	                    var Tx1 = T[(x + 1) % 5];
	                    var Tx1Msw = Tx1.high;
	                    var Tx1Lsw = Tx1.low;

	                    // Mix surrounding columns
	                    var tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
	                    var tLsw = Tx4.low  ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
	                    for (var y = 0; y < 5; y++) {
	                        var lane = state[x + 5 * y];
	                        lane.high ^= tMsw;
	                        lane.low  ^= tLsw;
	                    }
	                }

	                // Rho Pi
	                for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
	                    // Shortcuts
	                    var lane = state[laneIndex];
	                    var laneMsw = lane.high;
	                    var laneLsw = lane.low;
	                    var rhoOffset = RHO_OFFSETS[laneIndex];

	                    // Rotate lanes
	                    if (rhoOffset < 32) {
	                        var tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
	                        var tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
	                    } else /* if (rhoOffset >= 32) */ {
	                        var tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
	                        var tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
	                    }

	                    // Transpose lanes
	                    var TPiLane = T[PI_INDEXES[laneIndex]];
	                    TPiLane.high = tMsw;
	                    TPiLane.low  = tLsw;
	                }

	                // Rho pi at x = y = 0
	                var T0 = T[0];
	                var state0 = state[0];
	                T0.high = state0.high;
	                T0.low  = state0.low;

	                // Chi
	                for (var x = 0; x < 5; x++) {
	                    for (var y = 0; y < 5; y++) {
	                        // Shortcuts
	                        var laneIndex = x + 5 * y;
	                        var lane = state[laneIndex];
	                        var TLane = T[laneIndex];
	                        var Tx1Lane = T[((x + 1) % 5) + 5 * y];
	                        var Tx2Lane = T[((x + 2) % 5) + 5 * y];

	                        // Mix rows
	                        lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
	                        lane.low  = TLane.low  ^ (~Tx1Lane.low  & Tx2Lane.low);
	                    }
	                }

	                // Iota
	                var lane = state[0];
	                var roundConstant = ROUND_CONSTANTS[round];
	                lane.high ^= roundConstant.high;
	                lane.low  ^= roundConstant.low;;
	            }
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;
	            var blockSizeBits = this.blockSize * 32;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - nBitsLeft % 32);
	            dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var state = this._state;
	            var outputLengthBytes = this.cfg.outputLength / 8;
	            var outputLengthLanes = outputLengthBytes / 8;

	            // Squeeze
	            var hashWords = [];
	            for (var i = 0; i < outputLengthLanes; i++) {
	                // Shortcuts
	                var lane = state[i];
	                var laneMsw = lane.high;
	                var laneLsw = lane.low;

	                // Swap endian
	                laneMsw = (
	                    (((laneMsw << 8)  | (laneMsw >>> 24)) & 0x00ff00ff) |
	                    (((laneMsw << 24) | (laneMsw >>> 8))  & 0xff00ff00)
	                );
	                laneLsw = (
	                    (((laneLsw << 8)  | (laneLsw >>> 24)) & 0x00ff00ff) |
	                    (((laneLsw << 24) | (laneLsw >>> 8))  & 0xff00ff00)
	                );

	                // Squeeze state to retrieve hash
	                hashWords.push(laneLsw);
	                hashWords.push(laneMsw);
	            }

	            // Return final computed hash
	            return new WordArray.init(hashWords, outputLengthBytes);
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);

	            var state = clone._state = this._state.slice(0);
	            for (var i = 0; i < 25; i++) {
	                state[i] = state[i].clone();
	            }

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA3('message');
	     *     var hash = CryptoJS.SHA3(wordArray);
	     */
	    C.SHA3 = Hasher._createHelper(SHA3);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA3(message, key);
	     */
	    C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
	}(Math));


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Hasher = C_lib.Hasher;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var X64WordArray = C_x64.WordArray;
	    var C_algo = C.algo;

	    function X64Word_create() {
	        return X64Word.create.apply(X64Word, arguments);
	    }

	    // Constants
	    var K = [
	        X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd),
	        X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc),
	        X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019),
	        X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118),
	        X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe),
	        X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2),
	        X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1),
	        X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694),
	        X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3),
	        X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65),
	        X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483),
	        X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5),
	        X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210),
	        X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4),
	        X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725),
	        X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70),
	        X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926),
	        X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df),
	        X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8),
	        X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b),
	        X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001),
	        X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30),
	        X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910),
	        X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8),
	        X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53),
	        X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8),
	        X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb),
	        X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3),
	        X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60),
	        X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec),
	        X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9),
	        X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b),
	        X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207),
	        X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178),
	        X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6),
	        X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b),
	        X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493),
	        X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c),
	        X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a),
	        X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)
	    ];

	    // Reusable objects
	    var W = [];
	    (function () {
	        for (var i = 0; i < 80; i++) {
	            W[i] = X64Word_create();
	        }
	    }());

	    /**
	     * SHA-512 hash algorithm.
	     */
	    var SHA512 = C_algo.SHA512 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new X64WordArray.init([
	                new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b),
	                new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1),
	                new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f),
	                new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcuts
	            var H = this._hash.words;

	            var H0 = H[0];
	            var H1 = H[1];
	            var H2 = H[2];
	            var H3 = H[3];
	            var H4 = H[4];
	            var H5 = H[5];
	            var H6 = H[6];
	            var H7 = H[7];

	            var H0h = H0.high;
	            var H0l = H0.low;
	            var H1h = H1.high;
	            var H1l = H1.low;
	            var H2h = H2.high;
	            var H2l = H2.low;
	            var H3h = H3.high;
	            var H3l = H3.low;
	            var H4h = H4.high;
	            var H4l = H4.low;
	            var H5h = H5.high;
	            var H5l = H5.low;
	            var H6h = H6.high;
	            var H6l = H6.low;
	            var H7h = H7.high;
	            var H7l = H7.low;

	            // Working variables
	            var ah = H0h;
	            var al = H0l;
	            var bh = H1h;
	            var bl = H1l;
	            var ch = H2h;
	            var cl = H2l;
	            var dh = H3h;
	            var dl = H3l;
	            var eh = H4h;
	            var el = H4l;
	            var fh = H5h;
	            var fl = H5l;
	            var gh = H6h;
	            var gl = H6l;
	            var hh = H7h;
	            var hl = H7l;

	            // Rounds
	            for (var i = 0; i < 80; i++) {
	                // Shortcut
	                var Wi = W[i];

	                // Extend message
	                if (i < 16) {
	                    var Wih = Wi.high = M[offset + i * 2]     | 0;
	                    var Wil = Wi.low  = M[offset + i * 2 + 1] | 0;
	                } else {
	                    // Gamma0
	                    var gamma0x  = W[i - 15];
	                    var gamma0xh = gamma0x.high;
	                    var gamma0xl = gamma0x.low;
	                    var gamma0h  = ((gamma0xh >>> 1) | (gamma0xl << 31)) ^ ((gamma0xh >>> 8) | (gamma0xl << 24)) ^ (gamma0xh >>> 7);
	                    var gamma0l  = ((gamma0xl >>> 1) | (gamma0xh << 31)) ^ ((gamma0xl >>> 8) | (gamma0xh << 24)) ^ ((gamma0xl >>> 7) | (gamma0xh << 25));

	                    // Gamma1
	                    var gamma1x  = W[i - 2];
	                    var gamma1xh = gamma1x.high;
	                    var gamma1xl = gamma1x.low;
	                    var gamma1h  = ((gamma1xh >>> 19) | (gamma1xl << 13)) ^ ((gamma1xh << 3) | (gamma1xl >>> 29)) ^ (gamma1xh >>> 6);
	                    var gamma1l  = ((gamma1xl >>> 19) | (gamma1xh << 13)) ^ ((gamma1xl << 3) | (gamma1xh >>> 29)) ^ ((gamma1xl >>> 6) | (gamma1xh << 26));

	                    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
	                    var Wi7  = W[i - 7];
	                    var Wi7h = Wi7.high;
	                    var Wi7l = Wi7.low;

	                    var Wi16  = W[i - 16];
	                    var Wi16h = Wi16.high;
	                    var Wi16l = Wi16.low;

	                    var Wil = gamma0l + Wi7l;
	                    var Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
	                    var Wil = Wil + gamma1l;
	                    var Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
	                    var Wil = Wil + Wi16l;
	                    var Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);

	                    Wi.high = Wih;
	                    Wi.low  = Wil;
	                }

	                var chh  = (eh & fh) ^ (~eh & gh);
	                var chl  = (el & fl) ^ (~el & gl);
	                var majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
	                var majl = (al & bl) ^ (al & cl) ^ (bl & cl);

	                var sigma0h = ((ah >>> 28) | (al << 4))  ^ ((ah << 30)  | (al >>> 2)) ^ ((ah << 25) | (al >>> 7));
	                var sigma0l = ((al >>> 28) | (ah << 4))  ^ ((al << 30)  | (ah >>> 2)) ^ ((al << 25) | (ah >>> 7));
	                var sigma1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((eh << 23) | (el >>> 9));
	                var sigma1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((el << 23) | (eh >>> 9));

	                // t1 = h + sigma1 + ch + K[i] + W[i]
	                var Ki  = K[i];
	                var Kih = Ki.high;
	                var Kil = Ki.low;

	                var t1l = hl + sigma1l;
	                var t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
	                var t1l = t1l + chl;
	                var t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
	                var t1l = t1l + Kil;
	                var t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
	                var t1l = t1l + Wil;
	                var t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);

	                // t2 = sigma0 + maj
	                var t2l = sigma0l + majl;
	                var t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);

	                // Update working variables
	                hh = gh;
	                hl = gl;
	                gh = fh;
	                gl = fl;
	                fh = eh;
	                fl = el;
	                el = (dl + t1l) | 0;
	                eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
	                dh = ch;
	                dl = cl;
	                ch = bh;
	                cl = bl;
	                bh = ah;
	                bl = al;
	                al = (t1l + t2l) | 0;
	                ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
	            }

	            // Intermediate hash value
	            H0l = H0.low  = (H0l + al);
	            H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
	            H1l = H1.low  = (H1l + bl);
	            H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
	            H2l = H2.low  = (H2l + cl);
	            H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
	            H3l = H3.low  = (H3l + dl);
	            H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
	            H4l = H4.low  = (H4l + el);
	            H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
	            H5l = H5.low  = (H5l + fl);
	            H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
	            H6l = H6.low  = (H6l + gl);
	            H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
	            H7l = H7.low  = (H7l + hl);
	            H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Convert hash to 32-bit word array before returning
	            var hash = this._hash.toX32();

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        },

	        blockSize: 1024/32
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA512('message');
	     *     var hash = CryptoJS.SHA512(wordArray);
	     */
	    C.SHA512 = Hasher._createHelper(SHA512);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA512(message, key);
	     */
	    C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
	}());


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var X64WordArray = C_x64.WordArray;
	    var C_algo = C.algo;
	    var SHA512 = C_algo.SHA512;

	    /**
	     * SHA-384 hash algorithm.
	     */
	    var SHA384 = C_algo.SHA384 = SHA512.extend({
	        _doReset: function () {
	            this._hash = new X64WordArray.init([
	                new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507),
	                new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939),
	                new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511),
	                new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)
	            ]);
	        },

	        _doFinalize: function () {
	            var hash = SHA512._doFinalize.call(this);

	            hash.sigBytes -= 16;

	            return hash;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA384('message');
	     *     var hash = CryptoJS.SHA384(wordArray);
	     */
	    C.SHA384 = SHA512._createHelper(SHA384);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA384(message, key);
	     */
	    C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
	}());


	/**
	 * Cipher core components.
	 */
	CryptoJS.lib.Cipher || (function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
	    var C_enc = C.enc;
	    var Utf8 = C_enc.Utf8;
	    var Base64 = C_enc.Base64;
	    var C_algo = C.algo;
	    var EvpKDF = C_algo.EvpKDF;

	    /**
	     * Abstract base cipher template.
	     *
	     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
	     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
	     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
	     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
	     */
	    var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {WordArray} iv The IV to use for this operation.
	         */
	        cfg: Base.extend(),

	        /**
	         * Creates this cipher in encryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
	         */
	        createEncryptor: function (key, cfg) {
	            return this.create(this._ENC_XFORM_MODE, key, cfg);
	        },

	        /**
	         * Creates this cipher in decryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
	         */
	        createDecryptor: function (key, cfg) {
	            return this.create(this._DEC_XFORM_MODE, key, cfg);
	        },

	        /**
	         * Initializes a newly created cipher.
	         *
	         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
	         */
	        init: function (xformMode, key, cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Store transform mode and key
	            this._xformMode = xformMode;
	            this._key = key;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this cipher to its initial state.
	         *
	         * @example
	         *
	         *     cipher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-cipher logic
	            this._doReset();
	        },

	        /**
	         * Adds data to be encrypted or decrypted.
	         *
	         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.process('data');
	         *     var encrypted = cipher.process(wordArray);
	         */
	        process: function (dataUpdate) {
	            // Append
	            this._append(dataUpdate);

	            // Process available blocks
	            return this._process();
	        },

	        /**
	         * Finalizes the encryption or decryption process.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after final processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.finalize();
	         *     var encrypted = cipher.finalize('data');
	         *     var encrypted = cipher.finalize(wordArray);
	         */
	        finalize: function (dataUpdate) {
	            // Final data update
	            if (dataUpdate) {
	                this._append(dataUpdate);
	            }

	            // Perform concrete-cipher logic
	            var finalProcessedData = this._doFinalize();

	            return finalProcessedData;
	        },

	        keySize: 128/32,

	        ivSize: 128/32,

	        _ENC_XFORM_MODE: 1,

	        _DEC_XFORM_MODE: 2,

	        /**
	         * Creates shortcut functions to a cipher's object interface.
	         *
	         * @param {Cipher} cipher The cipher to create a helper for.
	         *
	         * @return {Object} An object with encrypt and decrypt shortcut functions.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
	         */
	        _createHelper: (function () {
	            function selectCipherStrategy(key) {
	                if (typeof key == 'string') {
	                    return PasswordBasedCipher;
	                } else {
	                    return SerializableCipher;
	                }
	            }

	            return function (cipher) {
	                return {
	                    encrypt: function (message, key, cfg) {
	                        return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
	                    },

	                    decrypt: function (ciphertext, key, cfg) {
	                        return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
	                    }
	                };
	            };
	        }())
	    });

	    /**
	     * Abstract base stream cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
	     */
	    var StreamCipher = C_lib.StreamCipher = Cipher.extend({
	        _doFinalize: function () {
	            // Process partial blocks
	            var finalProcessedBlocks = this._process(!!'flush');

	            return finalProcessedBlocks;
	        },

	        blockSize: 1
	    });

	    /**
	     * Mode namespace.
	     */
	    var C_mode = C.mode = {};

	    /**
	     * Abstract base block cipher mode template.
	     */
	    var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
	        /**
	         * Creates this mode for encryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
	         */
	        createEncryptor: function (cipher, iv) {
	            return this.Encryptor.create(cipher, iv);
	        },

	        /**
	         * Creates this mode for decryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
	         */
	        createDecryptor: function (cipher, iv) {
	            return this.Decryptor.create(cipher, iv);
	        },

	        /**
	         * Initializes a newly created mode.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
	         */
	        init: function (cipher, iv) {
	            this._cipher = cipher;
	            this._iv = iv;
	        }
	    });

	    /**
	     * Cipher Block Chaining mode.
	     */
	    var CBC = C_mode.CBC = (function () {
	        /**
	         * Abstract base CBC mode.
	         */
	        var CBC = BlockCipherMode.extend();

	        /**
	         * CBC encryptor.
	         */
	        CBC.Encryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // XOR and encrypt
	                xorBlock.call(this, words, offset, blockSize);
	                cipher.encryptBlock(words, offset);

	                // Remember this block to use with next block
	                this._prevBlock = words.slice(offset, offset + blockSize);
	            }
	        });

	        /**
	         * CBC decryptor.
	         */
	        CBC.Decryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // Remember this block to use with next block
	                var thisBlock = words.slice(offset, offset + blockSize);

	                // Decrypt and XOR
	                cipher.decryptBlock(words, offset);
	                xorBlock.call(this, words, offset, blockSize);

	                // This block becomes the previous block
	                this._prevBlock = thisBlock;
	            }
	        });

	        function xorBlock(words, offset, blockSize) {
	            // Shortcut
	            var iv = this._iv;

	            // Choose mixing block
	            if (iv) {
	                var block = iv;

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            } else {
	                var block = this._prevBlock;
	            }

	            // XOR blocks
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= block[i];
	            }
	        }

	        return CBC;
	    }());

	    /**
	     * Padding namespace.
	     */
	    var C_pad = C.pad = {};

	    /**
	     * PKCS #5/7 padding strategy.
	     */
	    var Pkcs7 = C_pad.Pkcs7 = {
	        /**
	         * Pads data using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to pad.
	         * @param {number} blockSize The multiple that the data should be padded to.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
	         */
	        pad: function (data, blockSize) {
	            // Shortcut
	            var blockSizeBytes = blockSize * 4;

	            // Count padding bytes
	            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

	            // Create padding word
	            var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;

	            // Create padding
	            var paddingWords = [];
	            for (var i = 0; i < nPaddingBytes; i += 4) {
	                paddingWords.push(paddingWord);
	            }
	            var padding = WordArray.create(paddingWords, nPaddingBytes);

	            // Add padding
	            data.concat(padding);
	        },

	        /**
	         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to unpad.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
	         */
	        unpad: function (data) {
	            // Get number of padding bytes from last byte
	            var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	            // Remove padding
	            data.sigBytes -= nPaddingBytes;
	        }
	    };

	    /**
	     * Abstract base block cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
	     */
	    var BlockCipher = C_lib.BlockCipher = Cipher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {Mode} mode The block mode to use. Default: CBC
	         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
	         */
	        cfg: Cipher.cfg.extend({
	            mode: CBC,
	            padding: Pkcs7
	        }),

	        reset: function () {
	            // Reset cipher
	            Cipher.reset.call(this);

	            // Shortcuts
	            var cfg = this.cfg;
	            var iv = cfg.iv;
	            var mode = cfg.mode;

	            // Reset block mode
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                var modeCreator = mode.createEncryptor;
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                var modeCreator = mode.createDecryptor;
	                // Keep at least one block in the buffer for unpadding
	                this._minBufferSize = 1;
	            }

	            if (this._mode && this._mode.__creator == modeCreator) {
	                this._mode.init(this, iv && iv.words);
	            } else {
	                this._mode = modeCreator.call(mode, this, iv && iv.words);
	                this._mode.__creator = modeCreator;
	            }
	        },

	        _doProcessBlock: function (words, offset) {
	            this._mode.processBlock(words, offset);
	        },

	        _doFinalize: function () {
	            // Shortcut
	            var padding = this.cfg.padding;

	            // Finalize
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                // Pad data
	                padding.pad(this._data, this.blockSize);

	                // Process final blocks
	                var finalProcessedBlocks = this._process(!!'flush');
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                // Process final blocks
	                var finalProcessedBlocks = this._process(!!'flush');

	                // Unpad data
	                padding.unpad(finalProcessedBlocks);
	            }

	            return finalProcessedBlocks;
	        },

	        blockSize: 128/32
	    });

	    /**
	     * A collection of cipher parameters.
	     *
	     * @property {WordArray} ciphertext The raw ciphertext.
	     * @property {WordArray} key The key to this ciphertext.
	     * @property {WordArray} iv The IV used in the ciphering operation.
	     * @property {WordArray} salt The salt used with a key derivation function.
	     * @property {Cipher} algorithm The cipher algorithm.
	     * @property {Mode} mode The block mode used in the ciphering operation.
	     * @property {Padding} padding The padding scheme used in the ciphering operation.
	     * @property {number} blockSize The block size of the cipher.
	     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
	     */
	    var CipherParams = C_lib.CipherParams = Base.extend({
	        /**
	         * Initializes a newly created cipher params object.
	         *
	         * @param {Object} cipherParams An object with any of the possible cipher parameters.
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.lib.CipherParams.create({
	         *         ciphertext: ciphertextWordArray,
	         *         key: keyWordArray,
	         *         iv: ivWordArray,
	         *         salt: saltWordArray,
	         *         algorithm: CryptoJS.algo.AES,
	         *         mode: CryptoJS.mode.CBC,
	         *         padding: CryptoJS.pad.PKCS7,
	         *         blockSize: 4,
	         *         formatter: CryptoJS.format.OpenSSL
	         *     });
	         */
	        init: function (cipherParams) {
	            this.mixIn(cipherParams);
	        },

	        /**
	         * Converts this cipher params object to a string.
	         *
	         * @param {Format} formatter (Optional) The formatting strategy to use.
	         *
	         * @return {string} The stringified cipher params.
	         *
	         * @throws Error If neither the formatter nor the default formatter is set.
	         *
	         * @example
	         *
	         *     var string = cipherParams + '';
	         *     var string = cipherParams.toString();
	         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
	         */
	        toString: function (formatter) {
	            return (formatter || this.formatter).stringify(this);
	        }
	    });

	    /**
	     * Format namespace.
	     */
	    var C_format = C.format = {};

	    /**
	     * OpenSSL formatting strategy.
	     */
	    var OpenSSLFormatter = C_format.OpenSSL = {
	        /**
	         * Converts a cipher params object to an OpenSSL-compatible string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The OpenSSL-compatible string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
	         */
	        stringify: function (cipherParams) {
	            // Shortcuts
	            var ciphertext = cipherParams.ciphertext;
	            var salt = cipherParams.salt;

	            // Format
	            if (salt) {
	                var wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
	            } else {
	                var wordArray = ciphertext;
	            }

	            return wordArray.toString(Base64);
	        },

	        /**
	         * Converts an OpenSSL-compatible string to a cipher params object.
	         *
	         * @param {string} openSSLStr The OpenSSL-compatible string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
	         */
	        parse: function (openSSLStr) {
	            // Parse base64
	            var ciphertext = Base64.parse(openSSLStr);

	            // Shortcut
	            var ciphertextWords = ciphertext.words;

	            // Test for salt
	            if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
	                // Extract salt
	                var salt = WordArray.create(ciphertextWords.slice(2, 4));

	                // Remove salt from ciphertext
	                ciphertextWords.splice(0, 4);
	                ciphertext.sigBytes -= 16;
	            }

	            return CipherParams.create({ ciphertext: ciphertext, salt: salt });
	        }
	    };

	    /**
	     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
	     */
	    var SerializableCipher = C_lib.SerializableCipher = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
	         */
	        cfg: Base.extend({
	            format: OpenSSLFormatter
	        }),

	        /**
	         * Encrypts a message.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
	        encrypt: function (cipher, message, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Encrypt
	            var encryptor = cipher.createEncryptor(key, cfg);
	            var ciphertext = encryptor.finalize(message);

	            // Shortcut
	            var cipherCfg = encryptor.cfg;

	            // Create and return serializable cipher params
	            return CipherParams.create({
	                ciphertext: ciphertext,
	                key: key,
	                iv: cipherCfg.iv,
	                algorithm: cipher,
	                mode: cipherCfg.mode,
	                padding: cipherCfg.padding,
	                blockSize: cipher.blockSize,
	                formatter: cfg.format
	            });
	        },

	        /**
	         * Decrypts serialized ciphertext.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
	        decrypt: function (cipher, ciphertext, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Decrypt
	            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);

	            return plaintext;
	        },

	        /**
	         * Converts serialized ciphertext to CipherParams,
	         * else assumed CipherParams already and returns ciphertext unchanged.
	         *
	         * @param {CipherParams|string} ciphertext The ciphertext.
	         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
	         *
	         * @return {CipherParams} The unserialized ciphertext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
	         */
	        _parse: function (ciphertext, format) {
	            if (typeof ciphertext == 'string') {
	                return format.parse(ciphertext, this);
	            } else {
	                return ciphertext;
	            }
	        }
	    });

	    /**
	     * Key derivation function namespace.
	     */
	    var C_kdf = C.kdf = {};

	    /**
	     * OpenSSL key derivation function.
	     */
	    var OpenSSLKdf = C_kdf.OpenSSL = {
	        /**
	         * Derives a key and IV from a password.
	         *
	         * @param {string} password The password to derive from.
	         * @param {number} keySize The size in words of the key to generate.
	         * @param {number} ivSize The size in words of the IV to generate.
	         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
	         *
	         * @return {CipherParams} A cipher params object with the key, IV, and salt.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
	         */
	        execute: function (password, keySize, ivSize, salt) {
	            // Generate random salt
	            if (!salt) {
	                salt = WordArray.random(64/8);
	            }

	            // Derive key and IV
	            var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);

	            // Separate key and IV
	            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
	            key.sigBytes = keySize * 4;

	            // Return params
	            return CipherParams.create({ key: key, iv: iv, salt: salt });
	        }
	    };

	    /**
	     * A serializable cipher wrapper that derives the key from a password,
	     * and returns ciphertext as a serializable cipher params object.
	     */
	    var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
	         */
	        cfg: SerializableCipher.cfg.extend({
	            kdf: OpenSSLKdf
	        }),

	        /**
	         * Encrypts a message using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
	         */
	        encrypt: function (cipher, message, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Encrypt
	            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

	            // Mix in derived params
	            ciphertext.mixIn(derivedParams);

	            return ciphertext;
	        },

	        /**
	         * Decrypts serialized ciphertext using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
	         */
	        decrypt: function (cipher, ciphertext, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Decrypt
	            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);

	            return plaintext;
	        }
	    });
	}());


	/**
	 * Cipher Feedback block mode.
	 */
	CryptoJS.mode.CFB = (function () {
	    var CFB = CryptoJS.lib.BlockCipherMode.extend();

	    CFB.Encryptor = CFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher;
	            var blockSize = cipher.blockSize;

	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

	            // Remember this block to use with next block
	            this._prevBlock = words.slice(offset, offset + blockSize);
	        }
	    });

	    CFB.Decryptor = CFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher;
	            var blockSize = cipher.blockSize;

	            // Remember this block to use with next block
	            var thisBlock = words.slice(offset, offset + blockSize);

	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

	            // This block becomes the previous block
	            this._prevBlock = thisBlock;
	        }
	    });

	    function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
	        // Shortcut
	        var iv = this._iv;

	        // Generate keystream
	        if (iv) {
	            var keystream = iv.slice(0);

	            // Remove IV for subsequent blocks
	            this._iv = undefined;
	        } else {
	            var keystream = this._prevBlock;
	        }
	        cipher.encryptBlock(keystream, 0);

	        // Encrypt
	        for (var i = 0; i < blockSize; i++) {
	            words[offset + i] ^= keystream[i];
	        }
	    }

	    return CFB;
	}());


	/**
	 * Electronic Codebook block mode.
	 */
	CryptoJS.mode.ECB = (function () {
	    var ECB = CryptoJS.lib.BlockCipherMode.extend();

	    ECB.Encryptor = ECB.extend({
	        processBlock: function (words, offset) {
	            this._cipher.encryptBlock(words, offset);
	        }
	    });

	    ECB.Decryptor = ECB.extend({
	        processBlock: function (words, offset) {
	            this._cipher.decryptBlock(words, offset);
	        }
	    });

	    return ECB;
	}());


	/**
	 * ANSI X.923 padding strategy.
	 */
	CryptoJS.pad.AnsiX923 = {
	    pad: function (data, blockSize) {
	        // Shortcuts
	        var dataSigBytes = data.sigBytes;
	        var blockSizeBytes = blockSize * 4;

	        // Count padding bytes
	        var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;

	        // Compute last byte position
	        var lastBytePos = dataSigBytes + nPaddingBytes - 1;

	        // Pad
	        data.clamp();
	        data.words[lastBytePos >>> 2] |= nPaddingBytes << (24 - (lastBytePos % 4) * 8);
	        data.sigBytes += nPaddingBytes;
	    },

	    unpad: function (data) {
	        // Get number of padding bytes from last byte
	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	        // Remove padding
	        data.sigBytes -= nPaddingBytes;
	    }
	};


	/**
	 * ISO 10126 padding strategy.
	 */
	CryptoJS.pad.Iso10126 = {
	    pad: function (data, blockSize) {
	        // Shortcut
	        var blockSizeBytes = blockSize * 4;

	        // Count padding bytes
	        var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

	        // Pad
	        data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).
	             concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
	    },

	    unpad: function (data) {
	        // Get number of padding bytes from last byte
	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	        // Remove padding
	        data.sigBytes -= nPaddingBytes;
	    }
	};


	/**
	 * ISO/IEC 9797-1 Padding Method 2.
	 */
	CryptoJS.pad.Iso97971 = {
	    pad: function (data, blockSize) {
	        // Add 0x80 byte
	        data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));

	        // Zero pad the rest
	        CryptoJS.pad.ZeroPadding.pad(data, blockSize);
	    },

	    unpad: function (data) {
	        // Remove zero padding
	        CryptoJS.pad.ZeroPadding.unpad(data);

	        // Remove one more byte -- the 0x80 byte
	        data.sigBytes--;
	    }
	};


	/**
	 * Output Feedback block mode.
	 */
	CryptoJS.mode.OFB = (function () {
	    var OFB = CryptoJS.lib.BlockCipherMode.extend();

	    var Encryptor = OFB.Encryptor = OFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var keystream = this._keystream;

	            // Generate keystream
	            if (iv) {
	                keystream = this._keystream = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }
	            cipher.encryptBlock(keystream, 0);

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    OFB.Decryptor = Encryptor;

	    return OFB;
	}());


	/**
	 * A noop padding strategy.
	 */
	CryptoJS.pad.NoPadding = {
	    pad: function () {
	    },

	    unpad: function () {
	    }
	};


	(function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var CipherParams = C_lib.CipherParams;
	    var C_enc = C.enc;
	    var Hex = C_enc.Hex;
	    var C_format = C.format;

	    var HexFormatter = C_format.Hex = {
	        /**
	         * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The hexadecimally encoded string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
	         */
	        stringify: function (cipherParams) {
	            return cipherParams.ciphertext.toString(Hex);
	        },

	        /**
	         * Converts a hexadecimally encoded ciphertext string to a cipher params object.
	         *
	         * @param {string} input The hexadecimally encoded string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
	         */
	        parse: function (input) {
	            var ciphertext = Hex.parse(input);
	            return CipherParams.create({ ciphertext: ciphertext });
	        }
	    };
	}());


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    // Lookup tables
	    var SBOX = [];
	    var INV_SBOX = [];
	    var SUB_MIX_0 = [];
	    var SUB_MIX_1 = [];
	    var SUB_MIX_2 = [];
	    var SUB_MIX_3 = [];
	    var INV_SUB_MIX_0 = [];
	    var INV_SUB_MIX_1 = [];
	    var INV_SUB_MIX_2 = [];
	    var INV_SUB_MIX_3 = [];

	    // Compute lookup tables
	    (function () {
	        // Compute double table
	        var d = [];
	        for (var i = 0; i < 256; i++) {
	            if (i < 128) {
	                d[i] = i << 1;
	            } else {
	                d[i] = (i << 1) ^ 0x11b;
	            }
	        }

	        // Walk GF(2^8)
	        var x = 0;
	        var xi = 0;
	        for (var i = 0; i < 256; i++) {
	            // Compute sbox
	            var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
	            sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
	            SBOX[x] = sx;
	            INV_SBOX[sx] = x;

	            // Compute multiplication
	            var x2 = d[x];
	            var x4 = d[x2];
	            var x8 = d[x4];

	            // Compute sub bytes, mix columns tables
	            var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
	            SUB_MIX_0[x] = (t << 24) | (t >>> 8);
	            SUB_MIX_1[x] = (t << 16) | (t >>> 16);
	            SUB_MIX_2[x] = (t << 8)  | (t >>> 24);
	            SUB_MIX_3[x] = t;

	            // Compute inv sub bytes, inv mix columns tables
	            var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
	            INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
	            INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
	            INV_SUB_MIX_2[sx] = (t << 8)  | (t >>> 24);
	            INV_SUB_MIX_3[sx] = t;

	            // Compute next counter
	            if (!x) {
	                x = xi = 1;
	            } else {
	                x = x2 ^ d[d[d[x8 ^ x2]]];
	                xi ^= d[d[xi]];
	            }
	        }
	    }());

	    // Precomputed Rcon lookup
	    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

	    /**
	     * AES block cipher algorithm.
	     */
	    var AES = C_algo.AES = BlockCipher.extend({
	        _doReset: function () {
	            // Skip reset of nRounds has been set before and key did not change
	            if (this._nRounds && this._keyPriorReset === this._key) {
	                return;
	            }

	            // Shortcuts
	            var key = this._keyPriorReset = this._key;
	            var keyWords = key.words;
	            var keySize = key.sigBytes / 4;

	            // Compute number of rounds
	            var nRounds = this._nRounds = keySize + 6;

	            // Compute number of key schedule rows
	            var ksRows = (nRounds + 1) * 4;

	            // Compute key schedule
	            var keySchedule = this._keySchedule = [];
	            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
	                if (ksRow < keySize) {
	                    keySchedule[ksRow] = keyWords[ksRow];
	                } else {
	                    var t = keySchedule[ksRow - 1];

	                    if (!(ksRow % keySize)) {
	                        // Rot word
	                        t = (t << 8) | (t >>> 24);

	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];

	                        // Mix Rcon
	                        t ^= RCON[(ksRow / keySize) | 0] << 24;
	                    } else if (keySize > 6 && ksRow % keySize == 4) {
	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
	                    }

	                    keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
	                }
	            }

	            // Compute inv key schedule
	            var invKeySchedule = this._invKeySchedule = [];
	            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
	                var ksRow = ksRows - invKsRow;

	                if (invKsRow % 4) {
	                    var t = keySchedule[ksRow];
	                } else {
	                    var t = keySchedule[ksRow - 4];
	                }

	                if (invKsRow < 4 || ksRow <= 4) {
	                    invKeySchedule[invKsRow] = t;
	                } else {
	                    invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
	                                               INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
	                }
	            }
	        },

	        encryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
	        },

	        decryptBlock: function (M, offset) {
	            // Swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;

	            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

	            // Inv swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;
	        },

	        _doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
	            // Shortcut
	            var nRounds = this._nRounds;

	            // Get input, add round key
	            var s0 = M[offset]     ^ keySchedule[0];
	            var s1 = M[offset + 1] ^ keySchedule[1];
	            var s2 = M[offset + 2] ^ keySchedule[2];
	            var s3 = M[offset + 3] ^ keySchedule[3];

	            // Key schedule row counter
	            var ksRow = 4;

	            // Rounds
	            for (var round = 1; round < nRounds; round++) {
	                // Shift rows, sub bytes, mix columns, add round key
	                var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
	                var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
	                var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
	                var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

	                // Update state
	                s0 = t0;
	                s1 = t1;
	                s2 = t2;
	                s3 = t3;
	            }

	            // Shift rows, sub bytes, add round key
	            var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
	            var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
	            var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
	            var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

	            // Set output
	            M[offset]     = t0;
	            M[offset + 1] = t1;
	            M[offset + 2] = t2;
	            M[offset + 3] = t3;
	        },

	        keySize: 256/32
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
	     */
	    C.AES = BlockCipher._createHelper(AES);
	}());


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    // Permuted Choice 1 constants
	    var PC1 = [
	        57, 49, 41, 33, 25, 17, 9,  1,
	        58, 50, 42, 34, 26, 18, 10, 2,
	        59, 51, 43, 35, 27, 19, 11, 3,
	        60, 52, 44, 36, 63, 55, 47, 39,
	        31, 23, 15, 7,  62, 54, 46, 38,
	        30, 22, 14, 6,  61, 53, 45, 37,
	        29, 21, 13, 5,  28, 20, 12, 4
	    ];

	    // Permuted Choice 2 constants
	    var PC2 = [
	        14, 17, 11, 24, 1,  5,
	        3,  28, 15, 6,  21, 10,
	        23, 19, 12, 4,  26, 8,
	        16, 7,  27, 20, 13, 2,
	        41, 52, 31, 37, 47, 55,
	        30, 40, 51, 45, 33, 48,
	        44, 49, 39, 56, 34, 53,
	        46, 42, 50, 36, 29, 32
	    ];

	    // Cumulative bit shift constants
	    var BIT_SHIFTS = [1,  2,  4,  6,  8,  10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

	    // SBOXes and round permutation constants
	    var SBOX_P = [
	        {
	            0x0: 0x808200,
	            0x10000000: 0x8000,
	            0x20000000: 0x808002,
	            0x30000000: 0x2,
	            0x40000000: 0x200,
	            0x50000000: 0x808202,
	            0x60000000: 0x800202,
	            0x70000000: 0x800000,
	            0x80000000: 0x202,
	            0x90000000: 0x800200,
	            0xa0000000: 0x8200,
	            0xb0000000: 0x808000,
	            0xc0000000: 0x8002,
	            0xd0000000: 0x800002,
	            0xe0000000: 0x0,
	            0xf0000000: 0x8202,
	            0x8000000: 0x0,
	            0x18000000: 0x808202,
	            0x28000000: 0x8202,
	            0x38000000: 0x8000,
	            0x48000000: 0x808200,
	            0x58000000: 0x200,
	            0x68000000: 0x808002,
	            0x78000000: 0x2,
	            0x88000000: 0x800200,
	            0x98000000: 0x8200,
	            0xa8000000: 0x808000,
	            0xb8000000: 0x800202,
	            0xc8000000: 0x800002,
	            0xd8000000: 0x8002,
	            0xe8000000: 0x202,
	            0xf8000000: 0x800000,
	            0x1: 0x8000,
	            0x10000001: 0x2,
	            0x20000001: 0x808200,
	            0x30000001: 0x800000,
	            0x40000001: 0x808002,
	            0x50000001: 0x8200,
	            0x60000001: 0x200,
	            0x70000001: 0x800202,
	            0x80000001: 0x808202,
	            0x90000001: 0x808000,
	            0xa0000001: 0x800002,
	            0xb0000001: 0x8202,
	            0xc0000001: 0x202,
	            0xd0000001: 0x800200,
	            0xe0000001: 0x8002,
	            0xf0000001: 0x0,
	            0x8000001: 0x808202,
	            0x18000001: 0x808000,
	            0x28000001: 0x800000,
	            0x38000001: 0x200,
	            0x48000001: 0x8000,
	            0x58000001: 0x800002,
	            0x68000001: 0x2,
	            0x78000001: 0x8202,
	            0x88000001: 0x8002,
	            0x98000001: 0x800202,
	            0xa8000001: 0x202,
	            0xb8000001: 0x808200,
	            0xc8000001: 0x800200,
	            0xd8000001: 0x0,
	            0xe8000001: 0x8200,
	            0xf8000001: 0x808002
	        },
	        {
	            0x0: 0x40084010,
	            0x1000000: 0x4000,
	            0x2000000: 0x80000,
	            0x3000000: 0x40080010,
	            0x4000000: 0x40000010,
	            0x5000000: 0x40084000,
	            0x6000000: 0x40004000,
	            0x7000000: 0x10,
	            0x8000000: 0x84000,
	            0x9000000: 0x40004010,
	            0xa000000: 0x40000000,
	            0xb000000: 0x84010,
	            0xc000000: 0x80010,
	            0xd000000: 0x0,
	            0xe000000: 0x4010,
	            0xf000000: 0x40080000,
	            0x800000: 0x40004000,
	            0x1800000: 0x84010,
	            0x2800000: 0x10,
	            0x3800000: 0x40004010,
	            0x4800000: 0x40084010,
	            0x5800000: 0x40000000,
	            0x6800000: 0x80000,
	            0x7800000: 0x40080010,
	            0x8800000: 0x80010,
	            0x9800000: 0x0,
	            0xa800000: 0x4000,
	            0xb800000: 0x40080000,
	            0xc800000: 0x40000010,
	            0xd800000: 0x84000,
	            0xe800000: 0x40084000,
	            0xf800000: 0x4010,
	            0x10000000: 0x0,
	            0x11000000: 0x40080010,
	            0x12000000: 0x40004010,
	            0x13000000: 0x40084000,
	            0x14000000: 0x40080000,
	            0x15000000: 0x10,
	            0x16000000: 0x84010,
	            0x17000000: 0x4000,
	            0x18000000: 0x4010,
	            0x19000000: 0x80000,
	            0x1a000000: 0x80010,
	            0x1b000000: 0x40000010,
	            0x1c000000: 0x84000,
	            0x1d000000: 0x40004000,
	            0x1e000000: 0x40000000,
	            0x1f000000: 0x40084010,
	            0x10800000: 0x84010,
	            0x11800000: 0x80000,
	            0x12800000: 0x40080000,
	            0x13800000: 0x4000,
	            0x14800000: 0x40004000,
	            0x15800000: 0x40084010,
	            0x16800000: 0x10,
	            0x17800000: 0x40000000,
	            0x18800000: 0x40084000,
	            0x19800000: 0x40000010,
	            0x1a800000: 0x40004010,
	            0x1b800000: 0x80010,
	            0x1c800000: 0x0,
	            0x1d800000: 0x4010,
	            0x1e800000: 0x40080010,
	            0x1f800000: 0x84000
	        },
	        {
	            0x0: 0x104,
	            0x100000: 0x0,
	            0x200000: 0x4000100,
	            0x300000: 0x10104,
	            0x400000: 0x10004,
	            0x500000: 0x4000004,
	            0x600000: 0x4010104,
	            0x700000: 0x4010000,
	            0x800000: 0x4000000,
	            0x900000: 0x4010100,
	            0xa00000: 0x10100,
	            0xb00000: 0x4010004,
	            0xc00000: 0x4000104,
	            0xd00000: 0x10000,
	            0xe00000: 0x4,
	            0xf00000: 0x100,
	            0x80000: 0x4010100,
	            0x180000: 0x4010004,
	            0x280000: 0x0,
	            0x380000: 0x4000100,
	            0x480000: 0x4000004,
	            0x580000: 0x10000,
	            0x680000: 0x10004,
	            0x780000: 0x104,
	            0x880000: 0x4,
	            0x980000: 0x100,
	            0xa80000: 0x4010000,
	            0xb80000: 0x10104,
	            0xc80000: 0x10100,
	            0xd80000: 0x4000104,
	            0xe80000: 0x4010104,
	            0xf80000: 0x4000000,
	            0x1000000: 0x4010100,
	            0x1100000: 0x10004,
	            0x1200000: 0x10000,
	            0x1300000: 0x4000100,
	            0x1400000: 0x100,
	            0x1500000: 0x4010104,
	            0x1600000: 0x4000004,
	            0x1700000: 0x0,
	            0x1800000: 0x4000104,
	            0x1900000: 0x4000000,
	            0x1a00000: 0x4,
	            0x1b00000: 0x10100,
	            0x1c00000: 0x4010000,
	            0x1d00000: 0x104,
	            0x1e00000: 0x10104,
	            0x1f00000: 0x4010004,
	            0x1080000: 0x4000000,
	            0x1180000: 0x104,
	            0x1280000: 0x4010100,
	            0x1380000: 0x0,
	            0x1480000: 0x10004,
	            0x1580000: 0x4000100,
	            0x1680000: 0x100,
	            0x1780000: 0x4010004,
	            0x1880000: 0x10000,
	            0x1980000: 0x4010104,
	            0x1a80000: 0x10104,
	            0x1b80000: 0x4000004,
	            0x1c80000: 0x4000104,
	            0x1d80000: 0x4010000,
	            0x1e80000: 0x4,
	            0x1f80000: 0x10100
	        },
	        {
	            0x0: 0x80401000,
	            0x10000: 0x80001040,
	            0x20000: 0x401040,
	            0x30000: 0x80400000,
	            0x40000: 0x0,
	            0x50000: 0x401000,
	            0x60000: 0x80000040,
	            0x70000: 0x400040,
	            0x80000: 0x80000000,
	            0x90000: 0x400000,
	            0xa0000: 0x40,
	            0xb0000: 0x80001000,
	            0xc0000: 0x80400040,
	            0xd0000: 0x1040,
	            0xe0000: 0x1000,
	            0xf0000: 0x80401040,
	            0x8000: 0x80001040,
	            0x18000: 0x40,
	            0x28000: 0x80400040,
	            0x38000: 0x80001000,
	            0x48000: 0x401000,
	            0x58000: 0x80401040,
	            0x68000: 0x0,
	            0x78000: 0x80400000,
	            0x88000: 0x1000,
	            0x98000: 0x80401000,
	            0xa8000: 0x400000,
	            0xb8000: 0x1040,
	            0xc8000: 0x80000000,
	            0xd8000: 0x400040,
	            0xe8000: 0x401040,
	            0xf8000: 0x80000040,
	            0x100000: 0x400040,
	            0x110000: 0x401000,
	            0x120000: 0x80000040,
	            0x130000: 0x0,
	            0x140000: 0x1040,
	            0x150000: 0x80400040,
	            0x160000: 0x80401000,
	            0x170000: 0x80001040,
	            0x180000: 0x80401040,
	            0x190000: 0x80000000,
	            0x1a0000: 0x80400000,
	            0x1b0000: 0x401040,
	            0x1c0000: 0x80001000,
	            0x1d0000: 0x400000,
	            0x1e0000: 0x40,
	            0x1f0000: 0x1000,
	            0x108000: 0x80400000,
	            0x118000: 0x80401040,
	            0x128000: 0x0,
	            0x138000: 0x401000,
	            0x148000: 0x400040,
	            0x158000: 0x80000000,
	            0x168000: 0x80001040,
	            0x178000: 0x40,
	            0x188000: 0x80000040,
	            0x198000: 0x1000,
	            0x1a8000: 0x80001000,
	            0x1b8000: 0x80400040,
	            0x1c8000: 0x1040,
	            0x1d8000: 0x80401000,
	            0x1e8000: 0x400000,
	            0x1f8000: 0x401040
	        },
	        {
	            0x0: 0x80,
	            0x1000: 0x1040000,
	            0x2000: 0x40000,
	            0x3000: 0x20000000,
	            0x4000: 0x20040080,
	            0x5000: 0x1000080,
	            0x6000: 0x21000080,
	            0x7000: 0x40080,
	            0x8000: 0x1000000,
	            0x9000: 0x20040000,
	            0xa000: 0x20000080,
	            0xb000: 0x21040080,
	            0xc000: 0x21040000,
	            0xd000: 0x0,
	            0xe000: 0x1040080,
	            0xf000: 0x21000000,
	            0x800: 0x1040080,
	            0x1800: 0x21000080,
	            0x2800: 0x80,
	            0x3800: 0x1040000,
	            0x4800: 0x40000,
	            0x5800: 0x20040080,
	            0x6800: 0x21040000,
	            0x7800: 0x20000000,
	            0x8800: 0x20040000,
	            0x9800: 0x0,
	            0xa800: 0x21040080,
	            0xb800: 0x1000080,
	            0xc800: 0x20000080,
	            0xd800: 0x21000000,
	            0xe800: 0x1000000,
	            0xf800: 0x40080,
	            0x10000: 0x40000,
	            0x11000: 0x80,
	            0x12000: 0x20000000,
	            0x13000: 0x21000080,
	            0x14000: 0x1000080,
	            0x15000: 0x21040000,
	            0x16000: 0x20040080,
	            0x17000: 0x1000000,
	            0x18000: 0x21040080,
	            0x19000: 0x21000000,
	            0x1a000: 0x1040000,
	            0x1b000: 0x20040000,
	            0x1c000: 0x40080,
	            0x1d000: 0x20000080,
	            0x1e000: 0x0,
	            0x1f000: 0x1040080,
	            0x10800: 0x21000080,
	            0x11800: 0x1000000,
	            0x12800: 0x1040000,
	            0x13800: 0x20040080,
	            0x14800: 0x20000000,
	            0x15800: 0x1040080,
	            0x16800: 0x80,
	            0x17800: 0x21040000,
	            0x18800: 0x40080,
	            0x19800: 0x21040080,
	            0x1a800: 0x0,
	            0x1b800: 0x21000000,
	            0x1c800: 0x1000080,
	            0x1d800: 0x40000,
	            0x1e800: 0x20040000,
	            0x1f800: 0x20000080
	        },
	        {
	            0x0: 0x10000008,
	            0x100: 0x2000,
	            0x200: 0x10200000,
	            0x300: 0x10202008,
	            0x400: 0x10002000,
	            0x500: 0x200000,
	            0x600: 0x200008,
	            0x700: 0x10000000,
	            0x800: 0x0,
	            0x900: 0x10002008,
	            0xa00: 0x202000,
	            0xb00: 0x8,
	            0xc00: 0x10200008,
	            0xd00: 0x202008,
	            0xe00: 0x2008,
	            0xf00: 0x10202000,
	            0x80: 0x10200000,
	            0x180: 0x10202008,
	            0x280: 0x8,
	            0x380: 0x200000,
	            0x480: 0x202008,
	            0x580: 0x10000008,
	            0x680: 0x10002000,
	            0x780: 0x2008,
	            0x880: 0x200008,
	            0x980: 0x2000,
	            0xa80: 0x10002008,
	            0xb80: 0x10200008,
	            0xc80: 0x0,
	            0xd80: 0x10202000,
	            0xe80: 0x202000,
	            0xf80: 0x10000000,
	            0x1000: 0x10002000,
	            0x1100: 0x10200008,
	            0x1200: 0x10202008,
	            0x1300: 0x2008,
	            0x1400: 0x200000,
	            0x1500: 0x10000000,
	            0x1600: 0x10000008,
	            0x1700: 0x202000,
	            0x1800: 0x202008,
	            0x1900: 0x0,
	            0x1a00: 0x8,
	            0x1b00: 0x10200000,
	            0x1c00: 0x2000,
	            0x1d00: 0x10002008,
	            0x1e00: 0x10202000,
	            0x1f00: 0x200008,
	            0x1080: 0x8,
	            0x1180: 0x202000,
	            0x1280: 0x200000,
	            0x1380: 0x10000008,
	            0x1480: 0x10002000,
	            0x1580: 0x2008,
	            0x1680: 0x10202008,
	            0x1780: 0x10200000,
	            0x1880: 0x10202000,
	            0x1980: 0x10200008,
	            0x1a80: 0x2000,
	            0x1b80: 0x202008,
	            0x1c80: 0x200008,
	            0x1d80: 0x0,
	            0x1e80: 0x10000000,
	            0x1f80: 0x10002008
	        },
	        {
	            0x0: 0x100000,
	            0x10: 0x2000401,
	            0x20: 0x400,
	            0x30: 0x100401,
	            0x40: 0x2100401,
	            0x50: 0x0,
	            0x60: 0x1,
	            0x70: 0x2100001,
	            0x80: 0x2000400,
	            0x90: 0x100001,
	            0xa0: 0x2000001,
	            0xb0: 0x2100400,
	            0xc0: 0x2100000,
	            0xd0: 0x401,
	            0xe0: 0x100400,
	            0xf0: 0x2000000,
	            0x8: 0x2100001,
	            0x18: 0x0,
	            0x28: 0x2000401,
	            0x38: 0x2100400,
	            0x48: 0x100000,
	            0x58: 0x2000001,
	            0x68: 0x2000000,
	            0x78: 0x401,
	            0x88: 0x100401,
	            0x98: 0x2000400,
	            0xa8: 0x2100000,
	            0xb8: 0x100001,
	            0xc8: 0x400,
	            0xd8: 0x2100401,
	            0xe8: 0x1,
	            0xf8: 0x100400,
	            0x100: 0x2000000,
	            0x110: 0x100000,
	            0x120: 0x2000401,
	            0x130: 0x2100001,
	            0x140: 0x100001,
	            0x150: 0x2000400,
	            0x160: 0x2100400,
	            0x170: 0x100401,
	            0x180: 0x401,
	            0x190: 0x2100401,
	            0x1a0: 0x100400,
	            0x1b0: 0x1,
	            0x1c0: 0x0,
	            0x1d0: 0x2100000,
	            0x1e0: 0x2000001,
	            0x1f0: 0x400,
	            0x108: 0x100400,
	            0x118: 0x2000401,
	            0x128: 0x2100001,
	            0x138: 0x1,
	            0x148: 0x2000000,
	            0x158: 0x100000,
	            0x168: 0x401,
	            0x178: 0x2100400,
	            0x188: 0x2000001,
	            0x198: 0x2100000,
	            0x1a8: 0x0,
	            0x1b8: 0x2100401,
	            0x1c8: 0x100401,
	            0x1d8: 0x400,
	            0x1e8: 0x2000400,
	            0x1f8: 0x100001
	        },
	        {
	            0x0: 0x8000820,
	            0x1: 0x20000,
	            0x2: 0x8000000,
	            0x3: 0x20,
	            0x4: 0x20020,
	            0x5: 0x8020820,
	            0x6: 0x8020800,
	            0x7: 0x800,
	            0x8: 0x8020000,
	            0x9: 0x8000800,
	            0xa: 0x20800,
	            0xb: 0x8020020,
	            0xc: 0x820,
	            0xd: 0x0,
	            0xe: 0x8000020,
	            0xf: 0x20820,
	            0x80000000: 0x800,
	            0x80000001: 0x8020820,
	            0x80000002: 0x8000820,
	            0x80000003: 0x8000000,
	            0x80000004: 0x8020000,
	            0x80000005: 0x20800,
	            0x80000006: 0x20820,
	            0x80000007: 0x20,
	            0x80000008: 0x8000020,
	            0x80000009: 0x820,
	            0x8000000a: 0x20020,
	            0x8000000b: 0x8020800,
	            0x8000000c: 0x0,
	            0x8000000d: 0x8020020,
	            0x8000000e: 0x8000800,
	            0x8000000f: 0x20000,
	            0x10: 0x20820,
	            0x11: 0x8020800,
	            0x12: 0x20,
	            0x13: 0x800,
	            0x14: 0x8000800,
	            0x15: 0x8000020,
	            0x16: 0x8020020,
	            0x17: 0x20000,
	            0x18: 0x0,
	            0x19: 0x20020,
	            0x1a: 0x8020000,
	            0x1b: 0x8000820,
	            0x1c: 0x8020820,
	            0x1d: 0x20800,
	            0x1e: 0x820,
	            0x1f: 0x8000000,
	            0x80000010: 0x20000,
	            0x80000011: 0x800,
	            0x80000012: 0x8020020,
	            0x80000013: 0x20820,
	            0x80000014: 0x20,
	            0x80000015: 0x8020000,
	            0x80000016: 0x8000000,
	            0x80000017: 0x8000820,
	            0x80000018: 0x8020820,
	            0x80000019: 0x8000020,
	            0x8000001a: 0x8000800,
	            0x8000001b: 0x0,
	            0x8000001c: 0x20800,
	            0x8000001d: 0x820,
	            0x8000001e: 0x20020,
	            0x8000001f: 0x8020800
	        }
	    ];

	    // Masks that select the SBOX input
	    var SBOX_MASK = [
	        0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000,
	        0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f
	    ];

	    /**
	     * DES block cipher algorithm.
	     */
	    var DES = C_algo.DES = BlockCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;

	            // Select 56 bits according to PC1
	            var keyBits = [];
	            for (var i = 0; i < 56; i++) {
	                var keyBitPos = PC1[i] - 1;
	                keyBits[i] = (keyWords[keyBitPos >>> 5] >>> (31 - keyBitPos % 32)) & 1;
	            }

	            // Assemble 16 subkeys
	            var subKeys = this._subKeys = [];
	            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
	                // Create subkey
	                var subKey = subKeys[nSubKey] = [];

	                // Shortcut
	                var bitShift = BIT_SHIFTS[nSubKey];

	                // Select 48 bits according to PC2
	                for (var i = 0; i < 24; i++) {
	                    // Select from the left 28 key bits
	                    subKey[(i / 6) | 0] |= keyBits[((PC2[i] - 1) + bitShift) % 28] << (31 - i % 6);

	                    // Select from the right 28 key bits
	                    subKey[4 + ((i / 6) | 0)] |= keyBits[28 + (((PC2[i + 24] - 1) + bitShift) % 28)] << (31 - i % 6);
	                }

	                // Since each subkey is applied to an expanded 32-bit input,
	                // the subkey can be broken into 8 values scaled to 32-bits,
	                // which allows the key to be used without expansion
	                subKey[0] = (subKey[0] << 1) | (subKey[0] >>> 31);
	                for (var i = 1; i < 7; i++) {
	                    subKey[i] = subKey[i] >>> ((i - 1) * 4 + 3);
	                }
	                subKey[7] = (subKey[7] << 5) | (subKey[7] >>> 27);
	            }

	            // Compute inverse subkeys
	            var invSubKeys = this._invSubKeys = [];
	            for (var i = 0; i < 16; i++) {
	                invSubKeys[i] = subKeys[15 - i];
	            }
	        },

	        encryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._subKeys);
	        },

	        decryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._invSubKeys);
	        },

	        _doCryptBlock: function (M, offset, subKeys) {
	            // Get input
	            this._lBlock = M[offset];
	            this._rBlock = M[offset + 1];

	            // Initial permutation
	            exchangeLR.call(this, 4,  0x0f0f0f0f);
	            exchangeLR.call(this, 16, 0x0000ffff);
	            exchangeRL.call(this, 2,  0x33333333);
	            exchangeRL.call(this, 8,  0x00ff00ff);
	            exchangeLR.call(this, 1,  0x55555555);

	            // Rounds
	            for (var round = 0; round < 16; round++) {
	                // Shortcuts
	                var subKey = subKeys[round];
	                var lBlock = this._lBlock;
	                var rBlock = this._rBlock;

	                // Feistel function
	                var f = 0;
	                for (var i = 0; i < 8; i++) {
	                    f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
	                }
	                this._lBlock = rBlock;
	                this._rBlock = lBlock ^ f;
	            }

	            // Undo swap from last round
	            var t = this._lBlock;
	            this._lBlock = this._rBlock;
	            this._rBlock = t;

	            // Final permutation
	            exchangeLR.call(this, 1,  0x55555555);
	            exchangeRL.call(this, 8,  0x00ff00ff);
	            exchangeRL.call(this, 2,  0x33333333);
	            exchangeLR.call(this, 16, 0x0000ffff);
	            exchangeLR.call(this, 4,  0x0f0f0f0f);

	            // Set output
	            M[offset] = this._lBlock;
	            M[offset + 1] = this._rBlock;
	        },

	        keySize: 64/32,

	        ivSize: 64/32,

	        blockSize: 64/32
	    });

	    // Swap bits across the left and right words
	    function exchangeLR(offset, mask) {
	        var t = ((this._lBlock >>> offset) ^ this._rBlock) & mask;
	        this._rBlock ^= t;
	        this._lBlock ^= t << offset;
	    }

	    function exchangeRL(offset, mask) {
	        var t = ((this._rBlock >>> offset) ^ this._lBlock) & mask;
	        this._lBlock ^= t;
	        this._rBlock ^= t << offset;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
	     */
	    C.DES = BlockCipher._createHelper(DES);

	    /**
	     * Triple-DES block cipher algorithm.
	     */
	    var TripleDES = C_algo.TripleDES = BlockCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;

	            // Create DES instances
	            this._des1 = DES.createEncryptor(WordArray.create(keyWords.slice(0, 2)));
	            this._des2 = DES.createEncryptor(WordArray.create(keyWords.slice(2, 4)));
	            this._des3 = DES.createEncryptor(WordArray.create(keyWords.slice(4, 6)));
	        },

	        encryptBlock: function (M, offset) {
	            this._des1.encryptBlock(M, offset);
	            this._des2.decryptBlock(M, offset);
	            this._des3.encryptBlock(M, offset);
	        },

	        decryptBlock: function (M, offset) {
	            this._des3.decryptBlock(M, offset);
	            this._des2.encryptBlock(M, offset);
	            this._des1.decryptBlock(M, offset);
	        },

	        keySize: 192/32,

	        ivSize: 64/32,

	        blockSize: 64/32
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
	     */
	    C.TripleDES = BlockCipher._createHelper(TripleDES);
	}());


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    /**
	     * RC4 stream cipher algorithm.
	     */
	    var RC4 = C_algo.RC4 = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;
	            var keySigBytes = key.sigBytes;

	            // Init sbox
	            var S = this._S = [];
	            for (var i = 0; i < 256; i++) {
	                S[i] = i;
	            }

	            // Key setup
	            for (var i = 0, j = 0; i < 256; i++) {
	                var keyByteIndex = i % keySigBytes;
	                var keyByte = (keyWords[keyByteIndex >>> 2] >>> (24 - (keyByteIndex % 4) * 8)) & 0xff;

	                j = (j + S[i] + keyByte) % 256;

	                // Swap
	                var t = S[i];
	                S[i] = S[j];
	                S[j] = t;
	            }

	            // Counters
	            this._i = this._j = 0;
	        },

	        _doProcessBlock: function (M, offset) {
	            M[offset] ^= generateKeystreamWord.call(this);
	        },

	        keySize: 256/32,

	        ivSize: 0
	    });

	    function generateKeystreamWord() {
	        // Shortcuts
	        var S = this._S;
	        var i = this._i;
	        var j = this._j;

	        // Generate keystream word
	        var keystreamWord = 0;
	        for (var n = 0; n < 4; n++) {
	            i = (i + 1) % 256;
	            j = (j + S[i]) % 256;

	            // Swap
	            var t = S[i];
	            S[i] = S[j];
	            S[j] = t;

	            keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
	        }

	        // Update counters
	        this._i = i;
	        this._j = j;

	        return keystreamWord;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
	     */
	    C.RC4 = StreamCipher._createHelper(RC4);

	    /**
	     * Modified RC4 stream cipher algorithm.
	     */
	    var RC4Drop = C_algo.RC4Drop = RC4.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} drop The number of keystream words to drop. Default 192
	         */
	        cfg: RC4.cfg.extend({
	            drop: 192
	        }),

	        _doReset: function () {
	            RC4._doReset.call(this);

	            // Drop
	            for (var i = this.cfg.drop; i > 0; i--) {
	                generateKeystreamWord.call(this);
	            }
	        }
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
	     */
	    C.RC4Drop = StreamCipher._createHelper(RC4Drop);
	}());


	/** @preserve
	 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
	 * derived from CryptoJS.mode.CTR
	 * Jan Hruby jhruby.web@gmail.com
	 */
	CryptoJS.mode.CTRGladman = (function () {
	    var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();

		function incWord(word)
		{
			if (((word >> 24) & 0xff) === 0xff) { //overflow
			var b1 = (word >> 16)&0xff;
			var b2 = (word >> 8)&0xff;
			var b3 = word & 0xff;

			if (b1 === 0xff) // overflow b1
			{
			b1 = 0;
			if (b2 === 0xff)
			{
				b2 = 0;
				if (b3 === 0xff)
				{
					b3 = 0;
				}
				else
				{
					++b3;
				}
			}
			else
			{
				++b2;
			}
			}
			else
			{
			++b1;
			}

			word = 0;
			word += (b1 << 16);
			word += (b2 << 8);
			word += b3;
			}
			else
			{
			word += (0x01 << 24);
			}
			return word;
		}

		function incCounter(counter)
		{
			if ((counter[0] = incWord(counter[0])) === 0)
			{
				// encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
				counter[1] = incWord(counter[1]);
			}
			return counter;
		}

	    var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var counter = this._counter;

	            // Generate keystream
	            if (iv) {
	                counter = this._counter = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }

				incCounter(counter);

				var keystream = counter.slice(0);
	            cipher.encryptBlock(keystream, 0);

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    CTRGladman.Decryptor = Encryptor;

	    return CTRGladman;
	}());




	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    // Reusable objects
	    var S  = [];
	    var C_ = [];
	    var G  = [];

	    /**
	     * Rabbit stream cipher algorithm
	     */
	    var Rabbit = C_algo.Rabbit = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var K = this._key.words;
	            var iv = this.cfg.iv;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                K[i] = (((K[i] << 8)  | (K[i] >>> 24)) & 0x00ff00ff) |
	                       (((K[i] << 24) | (K[i] >>> 8))  & 0xff00ff00);
	            }

	            // Generate initial state values
	            var X = this._X = [
	                K[0], (K[3] << 16) | (K[2] >>> 16),
	                K[1], (K[0] << 16) | (K[3] >>> 16),
	                K[2], (K[1] << 16) | (K[0] >>> 16),
	                K[3], (K[2] << 16) | (K[1] >>> 16)
	            ];

	            // Generate initial counter values
	            var C = this._C = [
	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
	            ];

	            // Carry bit
	            this._b = 0;

	            // Iterate the system four times
	            for (var i = 0; i < 4; i++) {
	                nextState.call(this);
	            }

	            // Modify the counters
	            for (var i = 0; i < 8; i++) {
	                C[i] ^= X[(i + 4) & 7];
	            }

	            // IV setup
	            if (iv) {
	                // Shortcuts
	                var IV = iv.words;
	                var IV_0 = IV[0];
	                var IV_1 = IV[1];

	                // Generate four subvectors
	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

	                // Modify counter values
	                C[0] ^= i0;
	                C[1] ^= i1;
	                C[2] ^= i2;
	                C[3] ^= i3;
	                C[4] ^= i0;
	                C[5] ^= i1;
	                C[6] ^= i2;
	                C[7] ^= i3;

	                // Iterate the system four times
	                for (var i = 0; i < 4; i++) {
	                    nextState.call(this);
	                }
	            }
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var X = this._X;

	            // Iterate the system
	            nextState.call(this);

	            // Generate four keystream words
	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

	            for (var i = 0; i < 4; i++) {
	                // Swap endian
	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

	                // Encrypt
	                M[offset + i] ^= S[i];
	            }
	        },

	        blockSize: 128/32,

	        ivSize: 64/32
	    });

	    function nextState() {
	        // Shortcuts
	        var X = this._X;
	        var C = this._C;

	        // Save old counter values
	        for (var i = 0; i < 8; i++) {
	            C_[i] = C[i];
	        }

	        // Calculate new counter values
	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

	        // Calculate the g-values
	        for (var i = 0; i < 8; i++) {
	            var gx = X[i] + C[i];

	            // Construct high and low argument for squaring
	            var ga = gx & 0xffff;
	            var gb = gx >>> 16;

	            // Calculate high and low result of squaring
	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

	            // High XOR low
	            G[i] = gh ^ gl;
	        }

	        // Calculate new state values
	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
	     */
	    C.Rabbit = StreamCipher._createHelper(Rabbit);
	}());


	/**
	 * Counter block mode.
	 */
	CryptoJS.mode.CTR = (function () {
	    var CTR = CryptoJS.lib.BlockCipherMode.extend();

	    var Encryptor = CTR.Encryptor = CTR.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var counter = this._counter;

	            // Generate keystream
	            if (iv) {
	                counter = this._counter = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }
	            var keystream = counter.slice(0);
	            cipher.encryptBlock(keystream, 0);

	            // Increment counter
	            counter[blockSize - 1] = (counter[blockSize - 1] + 1) | 0

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    CTR.Decryptor = Encryptor;

	    return CTR;
	}());


	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    // Reusable objects
	    var S  = [];
	    var C_ = [];
	    var G  = [];

	    /**
	     * Rabbit stream cipher algorithm.
	     *
	     * This is a legacy version that neglected to convert the key to little-endian.
	     * This error doesn't affect the cipher's security,
	     * but it does affect its compatibility with other implementations.
	     */
	    var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var K = this._key.words;
	            var iv = this.cfg.iv;

	            // Generate initial state values
	            var X = this._X = [
	                K[0], (K[3] << 16) | (K[2] >>> 16),
	                K[1], (K[0] << 16) | (K[3] >>> 16),
	                K[2], (K[1] << 16) | (K[0] >>> 16),
	                K[3], (K[2] << 16) | (K[1] >>> 16)
	            ];

	            // Generate initial counter values
	            var C = this._C = [
	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
	            ];

	            // Carry bit
	            this._b = 0;

	            // Iterate the system four times
	            for (var i = 0; i < 4; i++) {
	                nextState.call(this);
	            }

	            // Modify the counters
	            for (var i = 0; i < 8; i++) {
	                C[i] ^= X[(i + 4) & 7];
	            }

	            // IV setup
	            if (iv) {
	                // Shortcuts
	                var IV = iv.words;
	                var IV_0 = IV[0];
	                var IV_1 = IV[1];

	                // Generate four subvectors
	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

	                // Modify counter values
	                C[0] ^= i0;
	                C[1] ^= i1;
	                C[2] ^= i2;
	                C[3] ^= i3;
	                C[4] ^= i0;
	                C[5] ^= i1;
	                C[6] ^= i2;
	                C[7] ^= i3;

	                // Iterate the system four times
	                for (var i = 0; i < 4; i++) {
	                    nextState.call(this);
	                }
	            }
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var X = this._X;

	            // Iterate the system
	            nextState.call(this);

	            // Generate four keystream words
	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

	            for (var i = 0; i < 4; i++) {
	                // Swap endian
	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

	                // Encrypt
	                M[offset + i] ^= S[i];
	            }
	        },

	        blockSize: 128/32,

	        ivSize: 64/32
	    });

	    function nextState() {
	        // Shortcuts
	        var X = this._X;
	        var C = this._C;

	        // Save old counter values
	        for (var i = 0; i < 8; i++) {
	            C_[i] = C[i];
	        }

	        // Calculate new counter values
	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

	        // Calculate the g-values
	        for (var i = 0; i < 8; i++) {
	            var gx = X[i] + C[i];

	            // Construct high and low argument for squaring
	            var ga = gx & 0xffff;
	            var gb = gx >>> 16;

	            // Calculate high and low result of squaring
	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

	            // High XOR low
	            G[i] = gh ^ gl;
	        }

	        // Calculate new state values
	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
	     */
	    C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
	}());


	/**
	 * Zero padding strategy.
	 */
	CryptoJS.pad.ZeroPadding = {
	    pad: function (data, blockSize) {
	        // Shortcut
	        var blockSizeBytes = blockSize * 4;

	        // Pad
	        data.clamp();
	        data.sigBytes += blockSizeBytes - ((data.sigBytes % blockSizeBytes) || blockSizeBytes);
	    },

	    unpad: function (data) {
	        // Shortcut
	        var dataWords = data.words;

	        // Unpad
	        var i = data.sigBytes - 1;
	        while (!((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
	            i--;
	        }
	        data.sigBytes = i + 1;
	    }
	};


	return CryptoJS;

}));
;
//# sourceMappingURL=scripts.js.map

}
/*
     FILE ARCHIVED ON 03:40:29 Jun 06, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:36:23 Apr 13, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.465
  exclusion.robots: 0.015
  exclusion.robots.policy: 0.007
  esindex: 0.011
  cdx.remote: 64.652
  LoadShardBlock: 453.533 (3)
  PetaboxLoader3.datanode: 574.772 (5)
  PetaboxLoader3.resolve: 603.011 (4)
  load_resource: 780.562 (2)
*/