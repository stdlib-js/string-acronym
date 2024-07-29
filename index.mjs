// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-remove-punctuation@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/nlp-tokenize@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-replace@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-uppercase@v1.0.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-lowercase@v0.4.0-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import{factory as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-contains@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import{primitives as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-empty-array@v0.2.2-esm/index.mjs";var p=["a","all","also","although","an","and","any","are","as","at","b","be","been","but","by","c","could","d","e","each","eg","either","even","ever","ex","except","f","far","few","for","from","further","g","get","gets","given","gives","go","going","got","h","had","has","have","having","he","her","here","herself","him","himself","his","how","i","ie","if","in","into","is","it","its","itself","j","just","k","l","less","let","m","many","may","me","might","must","my","myself","n","need","needs","next","no","non","not","now","o","of","off","old","on","once","only","or","our","out","p","per","put","q","r","s","same","shall","she","should","since","so","such","sure","t","than","that","the","their","them","then","there","these","they","this","those","though","thus","to","too","u","us","v","w","was","we","well","went","were","what","when","where","which","who","whose","why","will","would","x","y","yet","z"],j=/-/g;function g(g,v){var f,w,c,u,b,y;if(!n(g))throw new TypeError(h("1ON3F",g));if(c={},arguments.length>1&&(u=function(s,e){return d(e)?!m(e,"stopwords")||(s.stopwords=e.stopwords,l(s.stopwords)||a(s.stopwords))?null:new TypeError(h("1ONAJ","stopwords",s.stopwords)):new TypeError(h("1ON2V",e))}(c,v),u))throw u;for(f=i(c.stopwords||p),g=s(g),g=t(g,j," "),w=e(g),b="",y=0;y<w.length;y++)!1===f(o(w[y]))&&(b+=r(w[y].charAt(0)));return b}export{g as default};
//# sourceMappingURL=index.mjs.map
