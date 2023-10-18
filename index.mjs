// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-remove-punctuation@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/nlp-tokenize@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-replace@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-uppercase@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-lowercase@v0.2.1-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.1-esm/index.mjs";import{factory as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-contains@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import{primitives as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@v0.1.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-empty-array@v0.1.1-esm/index.mjs";function p(s,e){return m(e)?!d(e,"stopwords")||(s.stopwords=e.stopwords,a(s.stopwords)||l(s.stopwords))?null:new TypeError(h("invalid option. `%s` option must be an array of strings. Option: `%s`.","stopwords",s.stopwords)):new TypeError(h("invalid argument. Options argument must be an object. Value: `%s`.",e))}var g=["a","all","also","although","an","and","any","are","as","at","b","be","been","but","by","c","could","d","e","each","eg","either","even","ever","ex","except","f","far","few","for","from","further","g","get","gets","given","gives","go","going","got","h","had","has","have","having","he","her","here","herself","him","himself","his","how","i","ie","if","in","into","is","it","its","itself","j","just","k","l","less","let","m","many","may","me","might","must","my","myself","n","need","needs","next","no","non","not","now","o","of","off","old","on","once","only","or","our","out","p","per","put","q","r","s","same","shall","she","should","since","so","such","sure","t","than","that","the","their","them","then","there","these","they","this","those","though","thus","to","too","u","us","v","w","was","we","well","went","were","what","when","where","which","who","whose","why","will","would","x","y","yet","z"],j=/-/g;function v(m,d){var a,l,v,u,f,w;if(!i(m))throw new TypeError(h("invalid argument. First argument must be a string. Value: `%s`.",m));if(v={},arguments.length>1&&(u=p(v,d)))throw u;for(a=o(v.stopwords||g),m=s(m),m=t(m,j," "),l=e(m),f="",w=0;w<l.length;w++)!1===a(n(l[w]))&&(f+=r(l[w].charAt(0)));return f}export{v as default};
//# sourceMappingURL=index.mjs.map
