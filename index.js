// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).acronym=t()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,l=n.__lookupGetter__,s=n.__lookupSetter__;t=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var u,c,h,d;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(l.call(e,t)||s.call(e,t)?(u=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=u):e[t]=r.value),h="get"in r,d="set"in r,c&&(h||d))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return h&&i&&i.call(e,t,r.get),d&&a&&a.call(e,t,r.set),e};var u=t;function c(e,t,r){u(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function h(e){return"string"==typeof e}var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return d&&"symbol"==typeof Symbol.toStringTag}var f=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;function w(e,t){return null!=e&&p.call(e,t)}var g="function"==typeof Symbol?Symbol.toStringTag:"";var y=v()?function(e){var t,r,n;if(null==e)return f.call(e);r=e[g],t=w(e,g);try{e[g]=void 0}catch(t){return f.call(e)}return n=f.call(e),t?e[g]=r:delete e[g],n}:function(e){return f.call(e)},m=String.prototype.valueOf;var b=v();function _(e){return"object"==typeof e&&(e instanceof String||(b?function(e){try{return m.call(e),!0}catch(e){return!1}}(e):"[object String]"===y(e)))}function E(e){return h(e)||_(e)}function S(e){return"number"==typeof e}function j(e){var t,r="";for(t=0;t<e;t++)r+="0";return r}function C(e,t,r){var n=!1,o=t-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=r?e+j(o):j(o)+e,n&&(e="-"+e)),e}c(E,"isPrimitive",h),c(E,"isObject",_);var I=String.prototype.toLowerCase,T=String.prototype.toUpperCase;function A(e){var t,r,n;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(r=e.arg,n=parseInt(r,10),!isFinite(n)){if(!S(r))throw new Error("invalid integer. Value: "+r);n=0}return n<0&&("u"===e.specifier||10!==t)&&(n=4294967295+n+1),n<0?(r=(-n).toString(t),e.precision&&(r=C(r,e.precision,e.padRight)),r="-"+r):(r=n.toString(t),n||e.precision?e.precision&&(r=C(r,e.precision,e.padRight)):r="",e.sign&&(r=e.sign+r)),16===t&&(e.alternate&&(r="0x"+r),r=e.specifier===T.call(e.specifier)?T.call(r):I.call(r)),8===t&&e.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}function O(e){return"string"==typeof e}var x=Math.abs,M=String.prototype.toLowerCase,D=String.prototype.toUpperCase,P=String.prototype.replace,V=/e\+(\d)$/,k=/e-(\d)$/,N=/^(\d+)$/,Y=/^(\d+)e/,R=/\.0$/,B=/\.0*e/,F=/(\..*[^0])0*e/;function W(e){var t,r,n=parseFloat(e.arg);if(!isFinite(n)){if(!S(e.arg))throw new Error("invalid floating-point number. Value: "+r);n=e.arg}switch(e.specifier){case"e":case"E":r=n.toExponential(e.precision);break;case"f":case"F":r=n.toFixed(e.precision);break;case"g":case"G":x(n)<1e-4?((t=e.precision)>0&&(t-=1),r=n.toExponential(t)):r=n.toPrecision(e.precision),e.alternate||(r=P.call(r,F,"$1e"),r=P.call(r,B,"e"),r=P.call(r,R,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return r=P.call(r,V,"e+0$1"),r=P.call(r,k,"e-0$1"),e.alternate&&(r=P.call(r,N,"$1."),r=P.call(r,Y,"$1.e")),n>=0&&e.sign&&(r=e.sign+r),r=e.specifier===D.call(e.specifier)?D.call(r):M.call(r)}function $(e){var t,r="";for(t=0;t<e;t++)r+=" ";return r}function G(e,t,r){var n=t-e.length;return n<0?e:e=r?e+$(n):$(n)+e}var L=String.fromCharCode,J=isNaN,K=Array.isArray;function U(e){var t={};return t.specifier=e.specifier,t.precision=void 0===e.precision?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function Z(e){var t,r,n,o,i,a,l,s,u;if(!K(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",l=1,s=0;s<e.length;s++)if(O(n=e[s]))a+=n;else{if(t=void 0!==n.precision,!(n=U(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),r=n.flags,u=0;u<r.length;u++)switch(o=r.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,J(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,J(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=A(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!J(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=J(i)?String(n.arg):L(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=W(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=C(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=G(n.arg,n.width,n.padRight)),a+=n.arg||"",l+=1}return a}var z=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function H(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(t.precision="1"),t}function X(e){var t,r,n,o;for(r=[],o=0,n=z.exec(e);n;)(t=e.slice(o,z.lastIndex-n[0].length)).length&&r.push(t),r.push(H(n)),o=z.lastIndex,n=z.exec(e);return(t=e.slice(o)).length&&r.push(t),r}function q(e){return"string"==typeof e}function Q(e){var t,r,n;if(!q(e))throw new TypeError(Q("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=X(e),(r=new Array(arguments.length))[0]=t,n=1;n<r.length;n++)r[n]=arguments[n];return Z.apply(null,r)}var ee=/[-\/\\^$*+?.()|[\]{}]/g;var te=/./;function re(e){return"boolean"==typeof e}var ne=Boolean.prototype.toString;var oe=v();function ie(e){return"object"==typeof e&&(e instanceof Boolean||(oe?function(e){try{return ne.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===y(e)))}function ae(e){return re(e)||ie(e)}function le(){return new Function("return this;")()}c(ae,"isPrimitive",re),c(ae,"isObject",ie);var se="object"==typeof self?self:null,ue="object"==typeof window?window:null,ce="object"==typeof global?global:null;var he=function(e){if(arguments.length){if(!re(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return le()}if(se)return se;if(ue)return ue;if(ce)return ce;throw new Error("unexpected error. Unable to resolve global object.")}(),de=he.document&&he.document.childNodes,ve=Int8Array;function fe(){return/^\s*function\s*([^(]*)/i}var pe=/^\s*function\s*([^(]*)/i;c(fe,"REGEXP",pe);var we=Array.isArray?Array.isArray:function(e){return"[object Array]"===y(e)};function ge(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!we(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}function ye(e){return null!==e&&"object"==typeof e}function me(e){var t,r,n,o;if(("Object"===(r=y(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=pe.exec(n.toString()))return t[1]}return ye(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}c(ye,"isObjectLikeArray",ge(ye));var be="function"==typeof te||"object"==typeof ve||"function"==typeof de?function(e){return me(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?me(e).toLowerCase():t};function _e(e){return"function"===be(e)}var Ee=RegExp.prototype.exec;var Se=v();function je(e){return"object"==typeof e&&(e instanceof RegExp||(Se?function(e){try{return Ee.call(e),!0}catch(e){return!1}}(e):"[object RegExp]"===y(e)))}function Ce(e,t,r){if(!h(e))throw new TypeError(Q("invalid argument. First argument must be a string. Value: `%s`.",e));if(h(t))t=function(e){var t,r;if(!h(e))throw new TypeError(Q("invalid argument. Must provide a regular expression string. Value: `%s`.",e));if("/"===e[0])for(r=e.length-1;r>=0&&"/"!==e[r];r--);return void 0===r||r<=0?e.replace(ee,"\\$&"):(t=(t=e.substring(1,r)).replace(ee,"\\$&"),e=e[0]+t+e.substring(r))}(t),t=new RegExp(t,"g");else if(!je(t))throw new TypeError(Q("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",t));if(!h(r)&&!_e(r))throw new TypeError(Q("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",r));return e.replace(t,r)}var Ie=/[!"'(),–.:;<>?`{}|~\/\\\[\]]/g;function Te(e){if(!h(e))throw new TypeError(Q("invalid argument. Must provide a string. Value: `%s`.",e));return Ce(e,Ie,"")}var Ae={"i.e.":["i.e."],"I.e.":["I.e."],"I.E.":["I.E."],"e.g.":["e.g."],"E.g.":["E.g."],"E.G.":["E.G."],"et al.":["et al."],"etc.":["etc."],"vs.":["vs."],"A.S.A.P":["A.S.A.P"],"E.T.A.":["E.T.A."],"D.I.Y":["D.I.Y"],"R.S.V.P":["R.S.V.P"],"P.S.":["P.S."],"B.Y.O.B":["B.Y.O.B"],"Ms.":["Ms."],"Mr.":["Mr."],"Dr.":["Dr."],"Prof.":["Prof."],"Mrs.":["Mrs."],"Messrs.":["Messrs."],"Gov.":["Gov."],"Gen.":["Gen."],"Lt.":["Lt."],"Col.":["Col."],"Mt.":["Mt."],"Bros.":["Bros."],"Corp.":["Corp."],"Co.":["Co."],"co.":["co."],"Inc.":["Inc."],"Ltd.":["Ltd."],"Rep.":["Rep."],"Sen.":["Sen."],"Jr.":["Jr."],"Sr.":["Sr."],"Ph.D.":["Ph.D."],"J.D.":["J.D."],"M.D.":["M.D."],"Rev.":["Rev."],"Adm.":["Adm."],"St.":["St."],"a.m.":["a.m."],"p.m.":["p.m."],"b.c.":["b.c."],"B.C.":["B.C."],"a.d.":["a.d."],"A.D.":["A.D."],"b.c.e.":["b.c.e."],"B.C.E.":["B.C.E."],"Jan.":["Jan."],"Feb.":["Feb."],"Mar.":["Mar."],"Apr.":["Apr."],"May.":["May."],"Jun.":["Jun."],"Jul.":["Jul."],"Aug.":["Aug."],"Sep.":["Sep."],"Sept.":["Sept."],"Oct.":["Oct."],"Nov.":["Nov."],"Dec.":["Dec."],"Ala.":["Ala."],"Ariz.":["Ariz."],"Ark.":["Ark."],"Calif.":["Calif."],"Colo.":["Colo."],"Conn.":["Conn."],"Del.":["Del."],"D.C.":["D.C."],"Fla.":["Fla."],"Ga.":["Ga."],"Ill.":["Ill."],"Ind.":["Ind."],"Kans.":["Kans."],"Kan.":["Kan."],"Ky.":["Ky."],"La.":["La."],"Md.":["Md."],"Mass.":["Mass."],"Mich.":["Mich."],"Minn.":["Minn."],"Miss.":["Miss."],"Mo.":["Mo."],"Mont.":["Mont."],"Nebr.":["Nebr."],"Neb.":["Neb."],"Nev.":["Nev."],"N.H.":["N.H."],"N.J.":["N.J."],"N.M.":["N.M."],"N.Y.":["N.Y."],"N.C.":["N.C."],"N.D.":["N.D."],"Okla.":["Okla."],"Ore.":["Ore."],"Pa.":["Pa."],"Tenn.":["Tenn."],"Va.":["Va."],"Wash.":["Wash."],"Wis.":["Wis."]},Oe={"^_^":["^_^"],"=D":["=D"],";-p":[";-p"],":O":[":O"],":-/":[":-/"],xD:["xD"],V_V:["V_V"],";(":[";("],"(:":["(:"],'")':['")'],":Y":[":Y"],":]":[":]"],":3":[":3"],":(":[":("],":-)":[":-)"],"=3":["=3"],":))":[":))"],":>":[":>"],";p":[";p"],":p":[":p"],"=[[":["=[["],xDD:["xDD"],"<333":["<333"],"<33":["<33"],":P":[":P"],"o.O":["o.O"],"<3":["<3"],";-)":[";-)"],":)":[":)"],"-_-":["-_-"],":')":[":')"],o_O:["o_O"],";)":[";)"],"=]":["=]"],"(=":["(="],"-__-":["-__-"],":/":[":/"],":0":[":0"],"(^_^)":["(^_^)"],";D":[";D"],o_o:["o_o"],":((":[":(("],"=)":["=)"]},xe={"'s":["'s"],"'S":["'S"],"ain't":["ai","n't"],aint:["ai","nt"],"Ain't":["Ai","n't"],"aren't":["are","n't"],arent:["are","nt"],"Aren't":["Are","n't"],"can't":["ca","n't"],cant:["ca","nt"],"Can't":["Ca","n't"],"can't've":["ca","n't","'ve"],"'cause":["'cause'"],cannot:["can","not"],Cannot:["Can","not"],"could've":["could","'ve"],couldve:["could","ve"],"Could've":["Could","'ve"],"couldn't":["could","n't"],couldnt:["could","nt"],"Couldn't":["Could","n't"],"couldn't've":["could","n't","'ve"],couldntve:["could","nt","ve"],"Couldn't've":["Could","n't","'ve"],"didn't":["did","n't"],didnt:["did","nt"],"Didn't":["Did","n't"],"doesn't":["does","n't"],doesnt:["does","nt"],"Doesn't":["Does","n't"],"don't":["do","n't"],dont:["do","nt"],"Don't":["Do","n't"],"hadn't":["had","n't"],hadnt:["had","nt"],"Hadn't":["Had","n't"],"hadn't've":["had","n't","'ve"],"hasn't":["has","n't"],hasnt:["has","nt"],"haven't":["have","n't"],havent:["have","nt"],"he'd":["he","'d"],hed:["he","d"],"he'd've":["he","'d","'ve"],hedve:["he","d","ve"],"he'll":["he","'ll"],"he'll've":["he","'ll","'ve"],"he's":["he","'s"],hes:["he","s"],"how'd":["how","'d"],howd:["how","d"],"how'd'y":["how","'d","'y"],"how'll":["how","'ll"],howll:["how","ll"],"how's":["how","'s"],hows:["how","s"],"I'd":["I","'d"],"I'd've":["I","'d","'ve"],"I'll":["I","'ll"],"i'll":["i","'ll"],"I'll've":["I","'ll","'ve"],"i'll've":["i","'ll","'ve"],"I'm":["I","'m"],"i'm":["i","'m"],Im:["I","m"],im:["i","m"],"I'ma":["I","'ma"],"i'ma":["i","'ma"],"I've":["I","'ve"],"i've":["i","'ve"],"isn't":["is","n't"],isnt:["is","nt"],"Isn't":["Is","n't"],"It'd":["It","'d"],"it'd":["it","'d"],"it'd've":["it","'d","'ve"],"it'll've":["it","'ll","'ve"],"it'll":["it","'ll"],itll:["it","ll"],"it's":["it","'s"],"let's":["let","'s"],lets:["let","s"],"ma'am":["ma'am"],"mayn't":["may","n't"],"mightn't":["might","n't"],"mightn't've":["might","n't","'ve"],"might've":["might","'ve"],"mustn't":["must","n't"],"mustn't've":["must","n't","'ve"],"must've":["must","'ve"],"needn't":["need","n't"],"needn't've":["need","n't","'ve"],"not've":["not","'ve"],"o'clock":["o'clock"],"oughtn't":["ought","n't"],"oughtn't've":["ought","n't","'ve"],"so've":["so","'ve"],"so's":["so","'s"],"shan't":["sha","n't"],"sha'n't":["sha'","n't"],"shan't've":["sha","n't","'ve"],"she'd":["she","'d"],"she'd've":["she","'d","'ve"],"she'll":["she","'ll"],"she'll've":["she","'ll","'ve"],"she's":["she","'s"],"should've":["should","'ve"],"shouldn't":["should","n't"],"shouldn't've":["should","n't","'ve"],"that'd":["that","'d"],"that'd've":["that","'d","'ve"],"that's":["that","'s"],thats:["that","s"],"there'd":["there","'d"],"there'd've":["there","'d","'ve"],"there's":["there","'s"],"they'd":["they","'d"],"They'd":["They","'d"],"they'd've":["they","'d","'ve"],"They'd've":["They","'d","'ve"],"they'll":["they","'ll"],"They'll":["They","'ll"],"they'll've":["they","'ll","'ve"],"They'll've":["They","'ll","'ve"],"they're":["they","'re"],"They're":["They","'re"],"they've":["they","'ve"],"They've":["They","'ve"],"to've":["to","'ve"],"wasn't":["was","n't"],"we'd":["we","'d"],"We'd":["We","'d"],"we'd've":["we","'d","'ve"],"we'll":["we","'ll"],"We'll":["We","'ll"],"we'll've":["we","'ll","'ve"],"We'll've":["We","'ll","'ve"],"we're":["we","'re"],"We're":["We","'re"],"we've":["we","'ve"],"We've":["We","'ve"],"weren't":["were","n't"],"what'll":["what","'ll"],"what'll've":["what","'ll","'ve"],"what're":["what","'re"],"what's":["what","'s"],"what've":["what","'ve"],"when's":["when","'s"],"when've":["when","'ve"],"where'd":["where","'d"],"where's":["where","'s"],"where've":["where","'ve"],"who'd":["who","'d"],"who'll":["who","'ll"],"who'll've":["who","'ll'","'ve'"],"who're":["who","'re"],"who's":["who","'s"],"who've":["who","'ve"],"why've":["why","'ve"],"why'll":["why","'ll"],"why're":["why","'re"],"why's":["why","'s"],"will've":["will","'ve"],"won't":["wo","n't"],wont:["wo","nt"],"won't've":["wo","n't","'ve"],"would've":["would","'ve"],"wouldn't":["would","n't"],"wouldn't've":["would","n't","'ve"],"y'all":["y'","all"],"y'all'd":["y'","all","'d"],"y'all'd've":["y'","all","'d","'ve"],"y'all're":["y'","all","'re'"],"y'all've":["y'","all","ve"],"you'd":["you","'d"],"You'd":["You","'d"],"you'd've":["you","'d","'ve"],"You'd've":["You","'d","'ve"],"you'll":["you","'ll"],"You'll":["You","'ll"],"you'll've":["you","'ll","'ve"],"You'll've":["You","'ll","'ve"],"you're":["you","'re"],"You're":["You","'re"],"you've":["you","'ve"],"You've":["You","'ve"]},Me=/^([,([{*<"“'`‘.])/gi,De=/([,.!?%*>:;"'”`)\]}])$/gi;function Pe(e,t){var r;for(r=0;r<t.length;r++)e.push(t[r]);return e}function Ve(e){var t,r,n,o=[],i=[];do{Oe[e]||Ae[e]||xe[e]?r=!0:(t=e.split(Me)).length>1?(o.push(t[1]),e=t[2]):(t=e.split(De)).length>1?(e=t[0],i.push(t[1])):r=!0}while(!r);return(n=o).push(e),Pe(n,i),n}function ke(e,t){var r,n,o,i,a,l;if(!h(e))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>1&&!re(t))throw new TypeError("invalid argument. Second argument must be a boolean primitive. Value: `"+t+"`.");if(!e)return[];for(n=t?e.split(/(\s+)/):e.split(/\s+/),a={},o=[],l=0;l<n.length;l++)w(a,i=n[l])?Pe(o,a[i]):(Pe(o,r=Ve(i)),a[i]=r);return o}function Ne(e,t,r){return e.replace(t,r)}function Ye(e){return e.toUpperCase()}function Re(e){return e.toLowerCase()}function Be(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}var Fe,We=Object.getPrototypeOf;Fe=_e(Object.getPrototypeOf)?We:function(e){var t=function(e){return e.__proto__}(e);return t||null===t?t:"[object Function]"===y(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var $e=Fe;var Ge=Object.prototype;function Le(e){var t;return!!function(e){return"object"==typeof e&&null!==e&&!we(e)}(e)&&(t=function(e){return null==e?null:(e=Object(e),$e(e))}(e),!t||!w(e,"constructor")&&w(t,"constructor")&&_e(t.constructor)&&"[object Function]"===y(t.constructor)&&w(t,"isPrototypeOf")&&_e(t.isPrototypeOf)&&(t===Ge||function(e){var t;for(t in e)if(!w(e,t))return!1;return!0}(e)))}var Je=ge(E.isPrimitive),Ke=ge(E.isObject),Ue=ge(E);function Ze(e,t){return Le(t)?!w(t,"stopwords")||(e.stopwords=t.stopwords,Je(e.stopwords)||(r=e.stopwords,we(r)&&0===r.length))?null:new TypeError(Be("0h5B1","stopwords",e.stopwords)):new TypeError(Be("0h52h",t));var r}c(Ue,"primitives",Je),c(Ue,"objects",Ke);var ze=["a","all","also","although","an","and","any","are","as","at","b","be","been","but","by","c","could","d","e","each","eg","either","even","ever","ex","except","f","far","few","for","from","further","g","get","gets","given","gives","go","going","got","h","had","has","have","having","he","her","here","herself","him","himself","his","how","i","ie","if","in","into","is","it","its","itself","j","just","k","l","less","let","m","many","may","me","might","must","my","myself","n","need","needs","next","no","non","not","now","o","of","off","old","on","once","only","or","our","out","p","per","put","q","r","s","same","shall","she","should","since","so","such","sure","t","than","that","the","their","them","then","there","these","they","this","those","though","thus","to","too","u","us","v","w","was","we","well","went","were","what","when","where","which","who","whose","why","will","would","x","y","yet","z"],He=/-/g;return function(e,t){var r,n,o,i,a,l;if(!h(e))throw new TypeError(Be("0h53R",e));if(o={},arguments.length>1&&(i=Ze(o,t)))throw i;for(r=o.stopwords||ze,n=ke(e=Ne(e=Te(e),He," ")),a="",l=0;l<n.length;l++)-1===r.indexOf(Re(n[l]))&&(a+=Ye(n[l].charAt(0)));return a}}));
//# sourceMappingURL=index.js.map
