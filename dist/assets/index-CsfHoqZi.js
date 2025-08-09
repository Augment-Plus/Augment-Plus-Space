const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Admin-CqM7i6DL.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/404-hqtUBbJg.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Fi(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const se={},wn=[],Ze=()=>{},qf=()=>!1,ls=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),$i=e=>e.startsWith("onUpdate:"),_e=Object.assign,Bi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},zf=Object.prototype.hasOwnProperty,Z=(e,t)=>zf.call(e,t),B=Array.isArray,En=e=>ur(e)==="[object Map]",us=e=>ur(e)==="[object Set]",No=e=>ur(e)==="[object Date]",V=e=>typeof e=="function",de=e=>typeof e=="string",st=e=>typeof e=="symbol",ie=e=>e!==null&&typeof e=="object",Rc=e=>(ie(e)||V(e))&&V(e.then)&&V(e.catch),Ac=Object.prototype.toString,ur=e=>Ac.call(e),Kf=e=>ur(e).slice(8,-1),Cc=e=>ur(e)==="[object Object]",Hi=e=>de(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Hn=Fi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fs=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Gf=/-(\w)/g,Be=fs(e=>e.replace(Gf,(t,n)=>n?n.toUpperCase():"")),Jf=/\B([A-Z])/g,fn=fs(e=>e.replace(Jf,"-$1").toLowerCase()),ds=fs(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ms=fs(e=>e?`on${ds(e)}`:""),Ft=(e,t)=>!Object.is(e,t),Pr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ci=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Hr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Do;const hs=()=>Do||(Do=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ji(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=de(r)?Zf(r):ji(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(de(e)||ie(e))return e}const Yf=/;(?![^(]*\))/g,Xf=/:([^]+)/,Qf=/\/\*[^]*?\*\//g;function Zf(e){const t={};return e.replace(Qf,"").split(Yf).forEach(n=>{if(n){const r=n.split(Xf);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Vi(e){let t="";if(de(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const r=Vi(e[n]);r&&(t+=r+" ")}else if(ie(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ed="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",td=Fi(ed);function Pc(e){return!!e||e===""}function nd(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ps(e[r],t[r]);return n}function ps(e,t){if(e===t)return!0;let n=No(e),r=No(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=st(e),r=st(t),n||r)return e===t;if(n=B(e),r=B(t),n||r)return n&&r?nd(e,t):!1;if(n=ie(e),r=ie(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const o in e){const a=e.hasOwnProperty(o),c=t.hasOwnProperty(o);if(a&&!c||!a&&c||!ps(e[o],t[o]))return!1}}return String(e)===String(t)}function rd(e,t){return e.findIndex(n=>ps(n,t))}const Oc=e=>!!(e&&e.__v_isRef===!0),sd=e=>de(e)?e:e==null?"":B(e)||ie(e)&&(e.toString===Ac||!V(e.toString))?Oc(e)?sd(e.value):JSON.stringify(e,kc,2):String(e),kc=(e,t)=>Oc(t)?kc(e,t.value):En(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Us(r,i)+" =>"]=s,n),{})}:us(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Us(n))}:st(t)?Us(t):ie(t)&&!B(t)&&!Cc(t)?String(t):t,Us=(e,t="")=>{var n;return st(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pe;class xc{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=pe,!t&&pe&&(this.index=(pe.scopes||(pe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=pe;try{return pe=this,t()}finally{pe=n}}}on(){++this._on===1&&(this.prevScope=pe,pe=this)}off(){this._on>0&&--this._on===0&&(pe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Nc(e){return new xc(e)}function Wi(){return pe}function Dc(e,t=!1){pe&&pe.cleanups.push(e)}let ae;const Fs=new WeakSet;class Lc{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,pe&&pe.active&&pe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Fs.has(this)&&(Fs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Uc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Lo(this),Fc(this);const t=ae,n=je;ae=this,je=!0;try{return this.fn()}finally{$c(this),ae=t,je=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ki(t);this.deps=this.depsTail=void 0,Lo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Fs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){li(this)&&this.run()}get dirty(){return li(this)}}let Mc=0,jn,Vn;function Uc(e,t=!1){if(e.flags|=8,t){e.next=Vn,Vn=e;return}e.next=jn,jn=e}function qi(){Mc++}function zi(){if(--Mc>0)return;if(Vn){let t=Vn;for(Vn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;jn;){let t=jn;for(jn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Fc(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function $c(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ki(r),id(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function li(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Bc(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Bc(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===er)||(e.globalVersion=er,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!li(e))))return;e.flags|=2;const t=e.dep,n=ae,r=je;ae=e,je=!0;try{Fc(e);const s=e.fn(e._value);(t.version===0||Ft(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ae=n,je=r,$c(e),e.flags&=-3}}function Ki(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ki(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function id(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let je=!0;const Hc=[];function _t(){Hc.push(je),je=!1}function bt(){const e=Hc.pop();je=e===void 0?!0:e}function Lo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ae;ae=void 0;try{t()}finally{ae=n}}}let er=0;class od{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ms{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ae||!je||ae===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ae)n=this.activeLink=new od(ae,this),ae.deps?(n.prevDep=ae.depsTail,ae.depsTail.nextDep=n,ae.depsTail=n):ae.deps=ae.depsTail=n,jc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ae.depsTail,n.nextDep=void 0,ae.depsTail.nextDep=n,ae.depsTail=n,ae.deps===n&&(ae.deps=r)}return n}trigger(t){this.version++,er++,this.notify(t)}notify(t){qi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{zi()}}}function jc(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)jc(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const jr=new WeakMap,Zt=Symbol(""),ui=Symbol(""),tr=Symbol("");function me(e,t,n){if(je&&ae){let r=jr.get(e);r||jr.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new ms),s.map=r,s.key=n),s.track()}}function ht(e,t,n,r,s,i){const o=jr.get(e);if(!o){er++;return}const a=c=>{c&&c.trigger()};if(qi(),t==="clear")o.forEach(a);else{const c=B(e),l=c&&Hi(n);if(c&&n==="length"){const u=Number(r);o.forEach((f,d)=>{(d==="length"||d===tr||!st(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(tr)),t){case"add":c?l&&a(o.get("length")):(a(o.get(Zt)),En(e)&&a(o.get(ui)));break;case"delete":c||(a(o.get(Zt)),En(e)&&a(o.get(ui)));break;case"set":En(e)&&a(o.get(Zt));break}}zi()}function ad(e,t){const n=jr.get(e);return n&&n.get(t)}function mn(e){const t=Y(e);return t===e?t:(me(t,"iterate",tr),$e(e)?t:t.map(he))}function gs(e){return me(e=Y(e),"iterate",tr),e}const cd={__proto__:null,[Symbol.iterator](){return $s(this,Symbol.iterator,he)},concat(...e){return mn(this).concat(...e.map(t=>B(t)?mn(t):t))},entries(){return $s(this,"entries",e=>(e[1]=he(e[1]),e))},every(e,t){return lt(this,"every",e,t,void 0,arguments)},filter(e,t){return lt(this,"filter",e,t,n=>n.map(he),arguments)},find(e,t){return lt(this,"find",e,t,he,arguments)},findIndex(e,t){return lt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return lt(this,"findLast",e,t,he,arguments)},findLastIndex(e,t){return lt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return lt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Bs(this,"includes",e)},indexOf(...e){return Bs(this,"indexOf",e)},join(e){return mn(this).join(e)},lastIndexOf(...e){return Bs(this,"lastIndexOf",e)},map(e,t){return lt(this,"map",e,t,void 0,arguments)},pop(){return Mn(this,"pop")},push(...e){return Mn(this,"push",e)},reduce(e,...t){return Mo(this,"reduce",e,t)},reduceRight(e,...t){return Mo(this,"reduceRight",e,t)},shift(){return Mn(this,"shift")},some(e,t){return lt(this,"some",e,t,void 0,arguments)},splice(...e){return Mn(this,"splice",e)},toReversed(){return mn(this).toReversed()},toSorted(e){return mn(this).toSorted(e)},toSpliced(...e){return mn(this).toSpliced(...e)},unshift(...e){return Mn(this,"unshift",e)},values(){return $s(this,"values",he)}};function $s(e,t,n){const r=gs(e),s=r[t]();return r!==e&&!$e(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const ld=Array.prototype;function lt(e,t,n,r,s,i){const o=gs(e),a=o!==e&&!$e(e),c=o[t];if(c!==ld[t]){const f=c.apply(e,i);return a?he(f):f}let l=n;o!==e&&(a?l=function(f,d){return n.call(this,he(f),d,e)}:n.length>2&&(l=function(f,d){return n.call(this,f,d,e)}));const u=c.call(o,l,r);return a&&s?s(u):u}function Mo(e,t,n,r){const s=gs(e);let i=n;return s!==e&&($e(e)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,e)}):i=function(o,a,c){return n.call(this,o,he(a),c,e)}),s[t](i,...r)}function Bs(e,t,n){const r=Y(e);me(r,"iterate",tr);const s=r[t](...n);return(s===-1||s===!1)&&Xi(n[0])?(n[0]=Y(n[0]),r[t](...n)):s}function Mn(e,t,n=[]){_t(),qi();const r=Y(e)[t].apply(e,n);return zi(),bt(),r}const ud=Fi("__proto__,__v_isRef,__isVue"),Vc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(st));function fd(e){st(e)||(e=String(e));const t=Y(this);return me(t,"has",e),t.hasOwnProperty(e)}class Wc{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Ed:Gc:i?Kc:zc).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=B(t);if(!s){let c;if(o&&(c=cd[n]))return c;if(n==="hasOwnProperty")return fd}const a=Reflect.get(t,n,ue(t)?t:r);return(st(n)?Vc.has(n):ud(n))||(s||me(t,"get",n),i)?a:ue(a)?o&&Hi(n)?a:a.value:ie(a)?s?Ji(a):$t(a):a}}class qc extends Wc{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=Vt(i);if(!$e(r)&&!Vt(r)&&(i=Y(i),r=Y(r)),!B(t)&&ue(i)&&!ue(r))return c?!1:(i.value=r,!0)}const o=B(t)&&Hi(n)?Number(n)<t.length:Z(t,n),a=Reflect.set(t,n,r,ue(t)?t:s);return t===Y(s)&&(o?Ft(r,i)&&ht(t,"set",n,r):ht(t,"add",n,r)),a}deleteProperty(t,n){const r=Z(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&ht(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!st(n)||!Vc.has(n))&&me(t,"has",n),r}ownKeys(t){return me(t,"iterate",B(t)?"length":Zt),Reflect.ownKeys(t)}}class dd extends Wc{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const hd=new qc,pd=new dd,md=new qc(!0);const fi=e=>e,Sr=e=>Reflect.getPrototypeOf(e);function gd(e,t,n){return function(...r){const s=this.__v_raw,i=Y(s),o=En(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?fi:t?Vr:he;return!t&&me(i,"iterate",c?ui:Zt),{next(){const{value:f,done:d}=l.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Tr(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function yd(e,t){const n={get(s){const i=this.__v_raw,o=Y(i),a=Y(s);e||(Ft(s,a)&&me(o,"get",s),me(o,"get",a));const{has:c}=Sr(o),l=t?fi:e?Vr:he;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!e&&me(Y(s),"iterate",Zt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Y(i),a=Y(s);return e||(Ft(s,a)&&me(o,"has",s),me(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Y(a),l=t?fi:e?Vr:he;return!e&&me(c,"iterate",Zt),a.forEach((u,f)=>s.call(i,l(u),l(f),o))}};return _e(n,e?{add:Tr("add"),set:Tr("set"),delete:Tr("delete"),clear:Tr("clear")}:{add(s){!t&&!$e(s)&&!Vt(s)&&(s=Y(s));const i=Y(this);return Sr(i).has.call(i,s)||(i.add(s),ht(i,"add",s,s)),this},set(s,i){!t&&!$e(i)&&!Vt(i)&&(i=Y(i));const o=Y(this),{has:a,get:c}=Sr(o);let l=a.call(o,s);l||(s=Y(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?Ft(i,u)&&ht(o,"set",s,i):ht(o,"add",s,i),this},delete(s){const i=Y(this),{has:o,get:a}=Sr(i);let c=o.call(i,s);c||(s=Y(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&ht(i,"delete",s,void 0),l},clear(){const s=Y(this),i=s.size!==0,o=s.clear();return i&&ht(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=gd(s,e,t)}),n}function Gi(e,t){const n=yd(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(Z(n,s)&&s in r?n:r,s,i)}const _d={get:Gi(!1,!1)},bd={get:Gi(!1,!0)},wd={get:Gi(!0,!1)};const zc=new WeakMap,Kc=new WeakMap,Gc=new WeakMap,Ed=new WeakMap;function vd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Id(e){return e.__v_skip||!Object.isExtensible(e)?0:vd(Kf(e))}function $t(e){return Vt(e)?e:Yi(e,!1,hd,_d,zc)}function Jc(e){return Yi(e,!1,md,bd,Kc)}function Ji(e){return Yi(e,!0,pd,wd,Gc)}function Yi(e,t,n,r,s){if(!ie(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=Id(e);if(i===0)return e;const o=s.get(e);if(o)return o;const a=new Proxy(e,i===2?r:n);return s.set(e,a),a}function Bt(e){return Vt(e)?Bt(e.__v_raw):!!(e&&e.__v_isReactive)}function Vt(e){return!!(e&&e.__v_isReadonly)}function $e(e){return!!(e&&e.__v_isShallow)}function Xi(e){return e?!!e.__v_raw:!1}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function Qi(e){return!Z(e,"__v_skip")&&Object.isExtensible(e)&&ci(e,"__v_skip",!0),e}const he=e=>ie(e)?$t(e):e,Vr=e=>ie(e)?Ji(e):e;function ue(e){return e?e.__v_isRef===!0:!1}function fr(e){return Xc(e,!1)}function Yc(e){return Xc(e,!0)}function Xc(e,t){return ue(e)?e:new Sd(e,t)}class Sd{constructor(t,n){this.dep=new ms,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Y(t),this._value=n?t:he(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||$e(t)||Vt(t);t=r?t:Y(t),Ft(t,n)&&(this._rawValue=t,this._value=r?t:he(t),this.dep.trigger())}}function en(e){return ue(e)?e.value:e}function Zi(e){return V(e)?e():en(e)}const Td={get:(e,t,n)=>t==="__v_raw"?e:en(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Qc(e){return Bt(e)?e:new Proxy(e,Td)}class Rd{constructor(t){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new ms,{get:r,set:s}=t(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(t){this._set(t)}}function Ad(e){return new Rd(e)}function Cd(e){const t=B(e)?new Array(e.length):{};for(const n in e)t[n]=Zc(e,n);return t}class Pd{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return ad(Y(this._object),this._key)}}class Od{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function kd(e,t,n){return ue(e)?e:V(e)?new Od(e):ie(e)&&arguments.length>1?Zc(e,t,n):fr(e)}function Zc(e,t,n){const r=e[t];return ue(r)?r:new Pd(e,t,n)}class xd{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new ms(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=er-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ae!==this)return Uc(this,!0),!0}get value(){const t=this.dep.track();return Bc(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Nd(e,t,n=!1){let r,s;return V(e)?r=e:(r=e.get,s=e.set),new xd(r,s,n)}const Rr={},Wr=new WeakMap;let Gt;function Dd(e,t=!1,n=Gt){if(n){let r=Wr.get(n);r||Wr.set(n,r=[]),r.push(e)}}function Ld(e,t,n=se){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=D=>s?D:$e(D)||s===!1||s===0?pt(D,1):pt(D);let u,f,d,m,y=!1,b=!1;if(ue(e)?(f=()=>e.value,y=$e(e)):Bt(e)?(f=()=>l(e),y=!0):B(e)?(b=!0,y=e.some(D=>Bt(D)||$e(D)),f=()=>e.map(D=>{if(ue(D))return D.value;if(Bt(D))return l(D);if(V(D))return c?c(D,2):D()})):V(e)?t?f=c?()=>c(e,2):e:f=()=>{if(d){_t();try{d()}finally{bt()}}const D=Gt;Gt=u;try{return c?c(e,3,[m]):e(m)}finally{Gt=D}}:f=Ze,t&&s){const D=f,F=s===!0?1/0:s;f=()=>pt(D(),F)}const S=Wi(),A=()=>{u.stop(),S&&S.active&&Bi(S.effects,u)};if(i&&t){const D=t;t=(...F)=>{D(...F),A()}}let R=b?new Array(e.length).fill(Rr):Rr;const O=D=>{if(!(!(u.flags&1)||!u.dirty&&!D))if(t){const F=u.run();if(s||y||(b?F.some((te,G)=>Ft(te,R[G])):Ft(F,R))){d&&d();const te=Gt;Gt=u;try{const G=[F,R===Rr?void 0:b&&R[0]===Rr?[]:R,m];R=F,c?c(t,3,G):t(...G)}finally{Gt=te}}}else u.run()};return a&&a(O),u=new Lc(f),u.scheduler=o?()=>o(O,!1):O,m=D=>Dd(D,!1,u),d=u.onStop=()=>{const D=Wr.get(u);if(D){if(c)c(D,4);else for(const F of D)F();Wr.delete(u)}},t?r?O(!0):R=u.run():o?o(O.bind(null,!0),!0):u.run(),A.pause=u.pause.bind(u),A.resume=u.resume.bind(u),A.stop=A,A}function pt(e,t=1/0,n){if(t<=0||!ie(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,ue(e))pt(e.value,t,n);else if(B(e))for(let r=0;r<e.length;r++)pt(e[r],t,n);else if(us(e)||En(e))e.forEach(r=>{pt(r,t,n)});else if(Cc(e)){for(const r in e)pt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&pt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function dr(e,t,n,r){try{return r?e(...r):e()}catch(s){ys(s,t,n)}}function it(e,t,n,r){if(V(e)){const s=dr(e,t,n,r);return s&&Rc(s)&&s.catch(i=>{ys(i,t,n)}),s}if(B(e)){const s=[];for(let i=0;i<e.length;i++)s.push(it(e[i],t,n,r));return s}}function ys(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||se;if(t){let a=t.parent;const c=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,c,l)===!1)return}a=a.parent}if(i){_t(),dr(i,null,10,[e,c,l]),bt();return}}Md(e,n,s,r,o)}function Md(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const Ee=[];let Xe=-1;const vn=[];let kt=null,yn=0;const el=Promise.resolve();let qr=null;function _s(e){const t=qr||el;return e?t.then(this?e.bind(this):e):t}function Ud(e){let t=Xe+1,n=Ee.length;for(;t<n;){const r=t+n>>>1,s=Ee[r],i=nr(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function eo(e){if(!(e.flags&1)){const t=nr(e),n=Ee[Ee.length-1];!n||!(e.flags&2)&&t>=nr(n)?Ee.push(e):Ee.splice(Ud(t),0,e),e.flags|=1,tl()}}function tl(){qr||(qr=el.then(rl))}function Fd(e){B(e)?vn.push(...e):kt&&e.id===-1?kt.splice(yn+1,0,e):e.flags&1||(vn.push(e),e.flags|=1),tl()}function Uo(e,t,n=Xe+1){for(;n<Ee.length;n++){const r=Ee[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Ee.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function nl(e){if(vn.length){const t=[...new Set(vn)].sort((n,r)=>nr(n)-nr(r));if(vn.length=0,kt){kt.push(...t);return}for(kt=t,yn=0;yn<kt.length;yn++){const n=kt[yn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}kt=null,yn=0}}const nr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function rl(e){try{for(Xe=0;Xe<Ee.length;Xe++){const t=Ee[Xe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),dr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Xe<Ee.length;Xe++){const t=Ee[Xe];t&&(t.flags&=-2)}Xe=-1,Ee.length=0,nl(),qr=null,(Ee.length||vn.length)&&rl()}}let Le=null,sl=null;function zr(e){const t=Le;return Le=e,sl=e&&e.type.__scopeId||null,t}function $d(e,t=Le,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Ko(-1);const i=zr(t);let o;try{o=e(...s)}finally{zr(i),r._d&&Ko(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Av(e,t){if(Le===null)return e;const n=vs(Le),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,a,c=se]=t[s];i&&(V(i)&&(i={mounted:i,updated:i}),i.deep&&pt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function zt(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(_t(),it(c,n,8,[e.el,a,e,t]),bt())}}const Bd=Symbol("_vte"),Hd=e=>e.__isTeleport;function to(e,t){e.shapeFlag&6&&e.component?(e.transition=t,to(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function il(e,t){return V(e)?_e({name:e.name},t,{setup:e}):e}function ol(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Wn(e,t,n,r,s=!1){if(B(e)){e.forEach((y,b)=>Wn(y,t&&(B(t)?t[b]:t),n,r,s));return}if(qn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Wn(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?vs(r.component):r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===se?a.refs={}:a.refs,f=a.setupState,d=Y(f),m=f===se?()=>!1:y=>Z(d,y);if(l!=null&&l!==c&&(de(l)?(u[l]=null,m(l)&&(f[l]=null)):ue(l)&&(l.value=null)),V(c))dr(c,a,12,[o,u]);else{const y=de(c),b=ue(c);if(y||b){const S=()=>{if(e.f){const A=y?m(c)?f[c]:u[c]:c.value;s?B(A)&&Bi(A,i):B(A)?A.includes(i)||A.push(i):y?(u[c]=[i],m(c)&&(f[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else y?(u[c]=o,m(c)&&(f[c]=o)):b&&(c.value=o,e.k&&(u[e.k]=o))};o?(S.id=-1,De(S,n)):S()}}}hs().requestIdleCallback;hs().cancelIdleCallback;const qn=e=>!!e.type.__asyncLoader,al=e=>e.type.__isKeepAlive;function jd(e,t){cl(e,"a",t)}function Vd(e,t){cl(e,"da",t)}function cl(e,t,n=ge){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(bs(t,r,n),n){let s=n.parent;for(;s&&s.parent;)al(s.parent.vnode)&&Wd(r,t,n,s),s=s.parent}}function Wd(e,t,n,r){const s=bs(t,e,r,!0);ul(()=>{Bi(r[t],s)},n)}function bs(e,t,n=ge,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{_t();const a=hr(n),c=it(t,n,e,o);return a(),bt(),c});return r?s.unshift(i):s.push(i),i}}const St=e=>(t,n=ge)=>{(!sr||e==="sp")&&bs(e,(...r)=>t(...r),n)},qd=St("bm"),ll=St("m"),zd=St("bu"),Kd=St("u"),Gd=St("bum"),ul=St("um"),Jd=St("sp"),Yd=St("rtg"),Xd=St("rtc");function Qd(e,t=ge){bs("ec",e,t)}const Zd="components";function eh(e,t){return nh(Zd,e,!0,t)||e}const th=Symbol.for("v-ndc");function nh(e,t,n=!0,r=!1){const s=Le||ge;if(s){const i=s.type;{const a=Wh(i,!1);if(a&&(a===t||a===Be(t)||a===ds(Be(t))))return i}const o=Fo(s[e]||i[e],t)||Fo(s.appContext[e],t);return!o&&r?i:o}}function Fo(e,t){return e&&(e[t]||e[Be(t)]||e[ds(Be(t))])}function Cv(e,t,n,r){let s;const i=n,o=B(e);if(o||de(e)){const a=o&&Bt(e);let c=!1,l=!1;a&&(c=!$e(e),l=Vt(e),e=gs(e)),s=new Array(e.length);for(let u=0,f=e.length;u<f;u++)s[u]=t(c?l?Vr(he(e[u])):he(e[u]):e[u],u,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,i)}else if(ie(e))if(e[Symbol.iterator])s=Array.from(e,(a,c)=>t(a,c,void 0,i));else{const a=Object.keys(e);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];s[c]=t(e[u],u,c,i)}}else s=[];return s}const di=e=>e?Nl(e)?vs(e):di(e.parent):null,zn=_e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>di(e.parent),$root:e=>di(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>dl(e),$forceUpdate:e=>e.f||(e.f=()=>{eo(e.update)}),$nextTick:e=>e.n||(e.n=_s.bind(e.proxy)),$watch:e=>Sh.bind(e)}),Hs=(e,t)=>e!==se&&!e.__isScriptSetup&&Z(e,t),rh={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Hs(r,t))return o[t]=1,r[t];if(s!==se&&Z(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&Z(l,t))return o[t]=3,i[t];if(n!==se&&Z(n,t))return o[t]=4,n[t];hi&&(o[t]=0)}}const u=zn[t];let f,d;if(u)return t==="$attrs"&&me(e.attrs,"get",""),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==se&&Z(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,Z(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Hs(s,t)?(s[t]=n,!0):r!==se&&Z(r,t)?(r[t]=n,!0):Z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==se&&Z(e,o)||Hs(t,o)||(a=i[0])&&Z(a,o)||Z(r,o)||Z(zn,o)||Z(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function $o(e){return B(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let hi=!0;function sh(e){const t=dl(e),n=e.proxy,r=e.ctx;hi=!1,t.beforeCreate&&Bo(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:y,activated:b,deactivated:S,beforeDestroy:A,beforeUnmount:R,destroyed:O,unmounted:D,render:F,renderTracked:te,renderTriggered:G,errorCaptured:q,serverPrefetch:K,expose:le,inheritAttrs:be,components:xe,directives:Ie,filters:qt}=t;if(l&&ih(l,r,null),o)for(const z in o){const X=o[z];V(X)&&(r[z]=X.bind(n))}if(s){const z=s.call(n,n);ie(z)&&(e.data=$t(z))}if(hi=!0,i)for(const z in i){const X=i[z],ct=V(X)?X.bind(n,n):V(X.get)?X.get.bind(n,n):Ze,At=!V(X)&&V(X.set)?X.set.bind(n):Ze,qe=Ae({get:ct,set:At});Object.defineProperty(r,z,{enumerable:!0,configurable:!0,get:()=>qe.value,set:Se=>qe.value=Se})}if(a)for(const z in a)fl(a[z],r,n,z);if(c){const z=V(c)?c.call(n):c;Reflect.ownKeys(z).forEach(X=>{Or(X,z[X])})}u&&Bo(u,e,"c");function ce(z,X){B(X)?X.forEach(ct=>z(ct.bind(n))):X&&z(X.bind(n))}if(ce(qd,f),ce(ll,d),ce(zd,m),ce(Kd,y),ce(jd,b),ce(Vd,S),ce(Qd,q),ce(Xd,te),ce(Yd,G),ce(Gd,R),ce(ul,D),ce(Jd,K),B(le))if(le.length){const z=e.exposed||(e.exposed={});le.forEach(X=>{Object.defineProperty(z,X,{get:()=>n[X],set:ct=>n[X]=ct,enumerable:!0})})}else e.exposed||(e.exposed={});F&&e.render===Ze&&(e.render=F),be!=null&&(e.inheritAttrs=be),xe&&(e.components=xe),Ie&&(e.directives=Ie),K&&ol(e)}function ih(e,t,n=Ze){B(e)&&(e=pi(e));for(const r in e){const s=e[r];let i;ie(s)?"default"in s?i=et(s.from||r,s.default,!0):i=et(s.from||r):i=et(s),ue(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Bo(e,t,n){it(B(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function fl(e,t,n,r){let s=r.includes(".")?Tl(n,r):()=>n[r];if(de(e)){const i=t[e];V(i)&&nn(s,i)}else if(V(e))nn(s,e.bind(n));else if(ie(e))if(B(e))e.forEach(i=>fl(i,t,n,r));else{const i=V(e.handler)?e.handler.bind(n):t[e.handler];V(i)&&nn(s,i,e)}}function dl(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>Kr(c,l,o,!0)),Kr(c,t,o)),ie(t)&&i.set(t,c),c}function Kr(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Kr(e,i,n,!0),s&&s.forEach(o=>Kr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=oh[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const oh={data:Ho,props:jo,emits:jo,methods:Bn,computed:Bn,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:Bn,directives:Bn,watch:ch,provide:Ho,inject:ah};function Ho(e,t){return t?e?function(){return _e(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function ah(e,t){return Bn(pi(e),pi(t))}function pi(e){if(B(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function we(e,t){return e?[...new Set([].concat(e,t))]:t}function Bn(e,t){return e?_e(Object.create(null),e,t):t}function jo(e,t){return e?B(e)&&B(t)?[...new Set([...e,...t])]:_e(Object.create(null),$o(e),$o(t??{})):t}function ch(e,t){if(!e)return t;if(!t)return e;const n=_e(Object.create(null),e);for(const r in t)n[r]=we(e[r],t[r]);return n}function hl(){return{app:null,config:{isNativeTag:qf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lh=0;function uh(e,t){return function(r,s=null){V(r)||(r=_e({},r)),s!=null&&!ie(s)&&(s=null);const i=hl(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:lh++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:zh,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&V(u.install)?(o.add(u),u.install(l,...f)):V(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,d){if(!c){const m=l._ceVNode||Ce(r,s);return m.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),e(m,u,d),c=!0,l._container=u,u.__vue_app__=l,vs(m.component)}},onUnmount(u){a.push(u)},unmount(){c&&(it(a,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=tn;tn=l;try{return u()}finally{tn=f}}};return l}}let tn=null;function Or(e,t){if(ge){let n=ge.provides;const r=ge.parent&&ge.parent.provides;r===n&&(n=ge.provides=Object.create(r)),n[e]=t}}function et(e,t,n=!1){const r=io();if(r||tn){let s=tn?tn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&V(t)?t.call(r&&r.proxy):t}}function fh(){return!!(io()||tn)}const pl={},ml=()=>Object.create(pl),gl=e=>Object.getPrototypeOf(e)===pl;function dh(e,t,n,r=!1){const s={},i=ml();e.propsDefaults=Object.create(null),yl(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Jc(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function hh(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=Y(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(ws(e.emitsOptions,d))continue;const m=t[d];if(c)if(Z(i,d))m!==i[d]&&(i[d]=m,l=!0);else{const y=Be(d);s[y]=mi(c,a,y,m,e,!1)}else m!==i[d]&&(i[d]=m,l=!0)}}}else{yl(e,t,s,i)&&(l=!0);let u;for(const f in a)(!t||!Z(t,f)&&((u=fn(f))===f||!Z(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=mi(c,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!Z(t,f))&&(delete i[f],l=!0)}l&&ht(e.attrs,"set","")}function yl(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Hn(c))continue;const l=t[c];let u;s&&Z(s,u=Be(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ws(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Y(n),l=a||se;for(let u=0;u<i.length;u++){const f=i[u];n[f]=mi(s,c,f,l[f],e,!Z(l,f))}}return o}function mi(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=Z(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&V(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=hr(s);r=l[n]=c.call(null,t),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===fn(n))&&(r=!0))}return r}const ph=new WeakMap;function _l(e,t,n=!1){const r=n?ph:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!V(e)){const u=f=>{c=!0;const[d,m]=_l(f,t,!0);_e(o,d),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return ie(e)&&r.set(e,wn),wn;if(B(i))for(let u=0;u<i.length;u++){const f=Be(i[u]);Vo(f)&&(o[f]=se)}else if(i)for(const u in i){const f=Be(u);if(Vo(f)){const d=i[u],m=o[f]=B(d)||V(d)?{type:d}:_e({},d),y=m.type;let b=!1,S=!0;if(B(y))for(let A=0;A<y.length;++A){const R=y[A],O=V(R)&&R.name;if(O==="Boolean"){b=!0;break}else O==="String"&&(S=!1)}else b=V(y)&&y.name==="Boolean";m[0]=b,m[1]=S,(b||Z(m,"default"))&&a.push(f)}}const l=[o,a];return ie(e)&&r.set(e,l),l}function Vo(e){return e[0]!=="$"&&!Hn(e)}const no=e=>e==="_"||e==="__"||e==="_ctx"||e==="$stable",ro=e=>B(e)?e.map(Qe):[Qe(e)],mh=(e,t,n)=>{if(t._n)return t;const r=$d((...s)=>ro(t(...s)),n);return r._c=!1,r},bl=(e,t,n)=>{const r=e._ctx;for(const s in e){if(no(s))continue;const i=e[s];if(V(i))t[s]=mh(s,i,r);else if(i!=null){const o=ro(i);t[s]=()=>o}}},wl=(e,t)=>{const n=ro(t);e.slots.default=()=>n},El=(e,t,n)=>{for(const r in t)(n||!no(r))&&(e[r]=t[r])},gh=(e,t,n)=>{const r=e.slots=ml();if(e.vnode.shapeFlag&32){const s=t.__;s&&ci(r,"__",s,!0);const i=t._;i?(El(r,t,n),n&&ci(r,"_",i,!0)):bl(t,r)}else t&&wl(e,t)},yh=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=se;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:El(s,t,n):(i=!t.$stable,bl(t,s)),o=t}else t&&(wl(e,t),o={default:1});if(i)for(const a in s)!no(a)&&o[a]==null&&delete s[a]},De=kh;function _h(e){return bh(e)}function bh(e,t){const n=hs();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=Ze,insertStaticContent:y}=e,b=(h,p,g,w=null,I=null,v=null,k=void 0,P=null,C=!!p.dynamicChildren)=>{if(h===p)return;h&&!Un(h,p)&&(w=E(h),Se(h,I,v,!0),h=null),p.patchFlag===-2&&(C=!1,p.dynamicChildren=null);const{type:T,ref:$,shapeFlag:N}=p;switch(T){case Es:S(h,p,g,w);break;case Wt:A(h,p,g,w);break;case kr:h==null&&R(p,g,w,k);break;case dt:xe(h,p,g,w,I,v,k,P,C);break;default:N&1?F(h,p,g,w,I,v,k,P,C):N&6?Ie(h,p,g,w,I,v,k,P,C):(N&64||N&128)&&T.process(h,p,g,w,I,v,k,P,C,M)}$!=null&&I?Wn($,h&&h.ref,v,p||h,!p):$==null&&h&&h.ref!=null&&Wn(h.ref,null,v,h,!0)},S=(h,p,g,w)=>{if(h==null)r(p.el=a(p.children),g,w);else{const I=p.el=h.el;p.children!==h.children&&l(I,p.children)}},A=(h,p,g,w)=>{h==null?r(p.el=c(p.children||""),g,w):p.el=h.el},R=(h,p,g,w)=>{[h.el,h.anchor]=y(h.children,p,g,w,h.el,h.anchor)},O=({el:h,anchor:p},g,w)=>{let I;for(;h&&h!==p;)I=d(h),r(h,g,w),h=I;r(p,g,w)},D=({el:h,anchor:p})=>{let g;for(;h&&h!==p;)g=d(h),s(h),h=g;s(p)},F=(h,p,g,w,I,v,k,P,C)=>{p.type==="svg"?k="svg":p.type==="math"&&(k="mathml"),h==null?te(p,g,w,I,v,k,P,C):K(h,p,I,v,k,P,C)},te=(h,p,g,w,I,v,k,P)=>{let C,T;const{props:$,shapeFlag:N,transition:U,dirs:j}=h;if(C=h.el=o(h.type,v,$&&$.is,$),N&8?u(C,h.children):N&16&&q(h.children,C,null,w,I,js(h,v),k,P),j&&zt(h,null,w,"created"),G(C,h,h.scopeId,k,w),$){for(const oe in $)oe!=="value"&&!Hn(oe)&&i(C,oe,null,$[oe],v,w);"value"in $&&i(C,"value",null,$.value,v),(T=$.onVnodeBeforeMount)&&Je(T,w,h)}j&&zt(h,null,w,"beforeMount");const J=wh(I,U);J&&U.beforeEnter(C),r(C,p,g),((T=$&&$.onVnodeMounted)||J||j)&&De(()=>{T&&Je(T,w,h),J&&U.enter(C),j&&zt(h,null,w,"mounted")},I)},G=(h,p,g,w,I)=>{if(g&&m(h,g),w)for(let v=0;v<w.length;v++)m(h,w[v]);if(I){let v=I.subTree;if(p===v||Al(v.type)&&(v.ssContent===p||v.ssFallback===p)){const k=I.vnode;G(h,k,k.scopeId,k.slotScopeIds,I.parent)}}},q=(h,p,g,w,I,v,k,P,C=0)=>{for(let T=C;T<h.length;T++){const $=h[T]=P?xt(h[T]):Qe(h[T]);b(null,$,p,g,w,I,v,k,P)}},K=(h,p,g,w,I,v,k)=>{const P=p.el=h.el;let{patchFlag:C,dynamicChildren:T,dirs:$}=p;C|=h.patchFlag&16;const N=h.props||se,U=p.props||se;let j;if(g&&Kt(g,!1),(j=U.onVnodeBeforeUpdate)&&Je(j,g,p,h),$&&zt(p,h,g,"beforeUpdate"),g&&Kt(g,!0),(N.innerHTML&&U.innerHTML==null||N.textContent&&U.textContent==null)&&u(P,""),T?le(h.dynamicChildren,T,P,g,w,js(p,I),v):k||X(h,p,P,null,g,w,js(p,I),v,!1),C>0){if(C&16)be(P,N,U,g,I);else if(C&2&&N.class!==U.class&&i(P,"class",null,U.class,I),C&4&&i(P,"style",N.style,U.style,I),C&8){const J=p.dynamicProps;for(let oe=0;oe<J.length;oe++){const ee=J[oe],Te=N[ee],Re=U[ee];(Re!==Te||ee==="value")&&i(P,ee,Te,Re,I,g)}}C&1&&h.children!==p.children&&u(P,p.children)}else!k&&T==null&&be(P,N,U,g,I);((j=U.onVnodeUpdated)||$)&&De(()=>{j&&Je(j,g,p,h),$&&zt(p,h,g,"updated")},w)},le=(h,p,g,w,I,v,k)=>{for(let P=0;P<p.length;P++){const C=h[P],T=p[P],$=C.el&&(C.type===dt||!Un(C,T)||C.shapeFlag&198)?f(C.el):g;b(C,T,$,null,w,I,v,k,!0)}},be=(h,p,g,w,I)=>{if(p!==g){if(p!==se)for(const v in p)!Hn(v)&&!(v in g)&&i(h,v,p[v],null,I,w);for(const v in g){if(Hn(v))continue;const k=g[v],P=p[v];k!==P&&v!=="value"&&i(h,v,P,k,I,w)}"value"in g&&i(h,"value",p.value,g.value,I)}},xe=(h,p,g,w,I,v,k,P,C)=>{const T=p.el=h?h.el:a(""),$=p.anchor=h?h.anchor:a("");let{patchFlag:N,dynamicChildren:U,slotScopeIds:j}=p;j&&(P=P?P.concat(j):j),h==null?(r(T,g,w),r($,g,w),q(p.children||[],g,$,I,v,k,P,C)):N>0&&N&64&&U&&h.dynamicChildren?(le(h.dynamicChildren,U,g,I,v,k,P),(p.key!=null||I&&p===I.subTree)&&vl(h,p,!0)):X(h,p,g,$,I,v,k,P,C)},Ie=(h,p,g,w,I,v,k,P,C)=>{p.slotScopeIds=P,h==null?p.shapeFlag&512?I.ctx.activate(p,g,w,k,C):qt(p,g,w,I,v,k,C):Rt(h,p,C)},qt=(h,p,g,w,I,v,k)=>{const P=h.component=$h(h,w,I);if(al(h)&&(P.ctx.renderer=M),Bh(P,!1,k),P.asyncDep){if(I&&I.registerDep(P,ce,k),!h.el){const C=P.subTree=Ce(Wt);A(null,C,p,g),h.placeholder=C.el}}else ce(P,h,p,g,I,v,k)},Rt=(h,p,g)=>{const w=p.component=h.component;if(Ph(h,p,g))if(w.asyncDep&&!w.asyncResolved){z(w,p,g);return}else w.next=p,w.update();else p.el=h.el,w.vnode=p},ce=(h,p,g,w,I,v,k)=>{const P=()=>{if(h.isMounted){let{next:N,bu:U,u:j,parent:J,vnode:oe}=h;{const Ke=Il(h);if(Ke){N&&(N.el=oe.el,z(h,N,k)),Ke.asyncDep.then(()=>{h.isUnmounted||P()});return}}let ee=N,Te;Kt(h,!1),N?(N.el=oe.el,z(h,N,k)):N=oe,U&&Pr(U),(Te=N.props&&N.props.onVnodeBeforeUpdate)&&Je(Te,J,N,oe),Kt(h,!0);const Re=qo(h),ze=h.subTree;h.subTree=Re,b(ze,Re,f(ze.el),E(ze),h,I,v),N.el=Re.el,ee===null&&Oh(h,Re.el),j&&De(j,I),(Te=N.props&&N.props.onVnodeUpdated)&&De(()=>Je(Te,J,N,oe),I)}else{let N;const{el:U,props:j}=p,{bm:J,m:oe,parent:ee,root:Te,type:Re}=h,ze=qn(p);Kt(h,!1),J&&Pr(J),!ze&&(N=j&&j.onVnodeBeforeMount)&&Je(N,ee,p),Kt(h,!0);{Te.ce&&Te.ce._def.shadowRoot!==!1&&Te.ce._injectChildStyle(Re);const Ke=h.subTree=qo(h);b(null,Ke,g,w,h,I,v),p.el=Ke.el}if(oe&&De(oe,I),!ze&&(N=j&&j.onVnodeMounted)){const Ke=p;De(()=>Je(N,ee,Ke),I)}(p.shapeFlag&256||ee&&qn(ee.vnode)&&ee.vnode.shapeFlag&256)&&h.a&&De(h.a,I),h.isMounted=!0,p=g=w=null}};h.scope.on();const C=h.effect=new Lc(P);h.scope.off();const T=h.update=C.run.bind(C),$=h.job=C.runIfDirty.bind(C);$.i=h,$.id=h.uid,C.scheduler=()=>eo($),Kt(h,!0),T()},z=(h,p,g)=>{p.component=h;const w=h.vnode.props;h.vnode=p,h.next=null,hh(h,p.props,w,g),yh(h,p.children,g),_t(),Uo(h),bt()},X=(h,p,g,w,I,v,k,P,C=!1)=>{const T=h&&h.children,$=h?h.shapeFlag:0,N=p.children,{patchFlag:U,shapeFlag:j}=p;if(U>0){if(U&128){At(T,N,g,w,I,v,k,P,C);return}else if(U&256){ct(T,N,g,w,I,v,k,P,C);return}}j&8?($&16&&Fe(T,I,v),N!==T&&u(g,N)):$&16?j&16?At(T,N,g,w,I,v,k,P,C):Fe(T,I,v,!0):($&8&&u(g,""),j&16&&q(N,g,w,I,v,k,P,C))},ct=(h,p,g,w,I,v,k,P,C)=>{h=h||wn,p=p||wn;const T=h.length,$=p.length,N=Math.min(T,$);let U;for(U=0;U<N;U++){const j=p[U]=C?xt(p[U]):Qe(p[U]);b(h[U],j,g,null,I,v,k,P,C)}T>$?Fe(h,I,v,!0,!1,N):q(p,g,w,I,v,k,P,C,N)},At=(h,p,g,w,I,v,k,P,C)=>{let T=0;const $=p.length;let N=h.length-1,U=$-1;for(;T<=N&&T<=U;){const j=h[T],J=p[T]=C?xt(p[T]):Qe(p[T]);if(Un(j,J))b(j,J,g,null,I,v,k,P,C);else break;T++}for(;T<=N&&T<=U;){const j=h[N],J=p[U]=C?xt(p[U]):Qe(p[U]);if(Un(j,J))b(j,J,g,null,I,v,k,P,C);else break;N--,U--}if(T>N){if(T<=U){const j=U+1,J=j<$?p[j].el:w;for(;T<=U;)b(null,p[T]=C?xt(p[T]):Qe(p[T]),g,J,I,v,k,P,C),T++}}else if(T>U)for(;T<=N;)Se(h[T],I,v,!0),T++;else{const j=T,J=T,oe=new Map;for(T=J;T<=U;T++){const Ne=p[T]=C?xt(p[T]):Qe(p[T]);Ne.key!=null&&oe.set(Ne.key,T)}let ee,Te=0;const Re=U-J+1;let ze=!1,Ke=0;const Ln=new Array(Re);for(T=0;T<Re;T++)Ln[T]=0;for(T=j;T<=N;T++){const Ne=h[T];if(Te>=Re){Se(Ne,I,v,!0);continue}let Ge;if(Ne.key!=null)Ge=oe.get(Ne.key);else for(ee=J;ee<=U;ee++)if(Ln[ee-J]===0&&Un(Ne,p[ee])){Ge=ee;break}Ge===void 0?Se(Ne,I,v,!0):(Ln[Ge-J]=T+1,Ge>=Ke?Ke=Ge:ze=!0,b(Ne,p[Ge],g,null,I,v,k,P,C),Te++)}const Oo=ze?Eh(Ln):wn;for(ee=Oo.length-1,T=Re-1;T>=0;T--){const Ne=J+T,Ge=p[Ne],ko=p[Ne+1],xo=Ne+1<$?ko.el||ko.placeholder:w;Ln[T]===0?b(null,Ge,g,xo,I,v,k,P,C):ze&&(ee<0||T!==Oo[ee]?qe(Ge,g,xo,2):ee--)}}},qe=(h,p,g,w,I=null)=>{const{el:v,type:k,transition:P,children:C,shapeFlag:T}=h;if(T&6){qe(h.component.subTree,p,g,w);return}if(T&128){h.suspense.move(p,g,w);return}if(T&64){k.move(h,p,g,M);return}if(k===dt){r(v,p,g);for(let N=0;N<C.length;N++)qe(C[N],p,g,w);r(h.anchor,p,g);return}if(k===kr){O(h,p,g);return}if(w!==2&&T&1&&P)if(w===0)P.beforeEnter(v),r(v,p,g),De(()=>P.enter(v),I);else{const{leave:N,delayLeave:U,afterLeave:j}=P,J=()=>{h.ctx.isUnmounted?s(v):r(v,p,g)},oe=()=>{N(v,()=>{J(),j&&j()})};U?U(v,J,oe):oe()}else r(v,p,g)},Se=(h,p,g,w=!1,I=!1)=>{const{type:v,props:k,ref:P,children:C,dynamicChildren:T,shapeFlag:$,patchFlag:N,dirs:U,cacheIndex:j}=h;if(N===-2&&(I=!1),P!=null&&(_t(),Wn(P,null,g,h,!0),bt()),j!=null&&(p.renderCache[j]=void 0),$&256){p.ctx.deactivate(h);return}const J=$&1&&U,oe=!qn(h);let ee;if(oe&&(ee=k&&k.onVnodeBeforeUnmount)&&Je(ee,p,h),$&6)Ir(h.component,g,w);else{if($&128){h.suspense.unmount(g,w);return}J&&zt(h,null,p,"beforeUnmount"),$&64?h.type.remove(h,p,g,M,w):T&&!T.hasOnce&&(v!==dt||N>0&&N&64)?Fe(T,p,g,!1,!0):(v===dt&&N&384||!I&&$&16)&&Fe(C,p,g),w&&hn(h)}(oe&&(ee=k&&k.onVnodeUnmounted)||J)&&De(()=>{ee&&Je(ee,p,h),J&&zt(h,null,p,"unmounted")},g)},hn=h=>{const{type:p,el:g,anchor:w,transition:I}=h;if(p===dt){pn(g,w);return}if(p===kr){D(h);return}const v=()=>{s(g),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(h.shapeFlag&1&&I&&!I.persisted){const{leave:k,delayLeave:P}=I,C=()=>k(g,v);P?P(h.el,v,C):C()}else v()},pn=(h,p)=>{let g;for(;h!==p;)g=d(h),s(h),h=g;s(p)},Ir=(h,p,g)=>{const{bum:w,scope:I,job:v,subTree:k,um:P,m:C,a:T,parent:$,slots:{__:N}}=h;Wo(C),Wo(T),w&&Pr(w),$&&B(N)&&N.forEach(U=>{$.renderCache[U]=void 0}),I.stop(),v&&(v.flags|=8,Se(k,h,p,g)),P&&De(P,p),De(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Fe=(h,p,g,w=!1,I=!1,v=0)=>{for(let k=v;k<h.length;k++)Se(h[k],p,g,w,I)},E=h=>{if(h.shapeFlag&6)return E(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const p=d(h.anchor||h.el),g=p&&p[Bd];return g?d(g):p};let L=!1;const x=(h,p,g)=>{h==null?p._vnode&&Se(p._vnode,null,null,!0):b(p._vnode||null,h,p,null,null,null,g),p._vnode=h,L||(L=!0,Uo(),nl(),L=!1)},M={p:b,um:Se,m:qe,r:hn,mt:qt,mc:q,pc:X,pbc:le,n:E,o:e};return{render:x,hydrate:void 0,createApp:uh(x)}}function js({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Kt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function wh(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function vl(e,t,n=!1){const r=e.children,s=t.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=xt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&vl(o,a)),a.type===Es&&(a.el=o.el),a.type===Wt&&!a.el&&(a.el=o.el)}}function Eh(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Il(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Il(t)}function Wo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const vh=Symbol.for("v-scx"),Ih=()=>et(vh);function nn(e,t,n){return Sl(e,t,n)}function Sl(e,t,n=se){const{immediate:r,deep:s,flush:i,once:o}=n,a=_e({},n),c=t&&r||!t&&i!=="post";let l;if(sr){if(i==="sync"){const m=Ih();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Ze,m.resume=Ze,m.pause=Ze,m}}const u=ge;a.call=(m,y,b)=>it(m,u,y,b);let f=!1;i==="post"?a.scheduler=m=>{De(m,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(m,y)=>{y?m():eo(m)}),a.augmentJob=m=>{t&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const d=Ld(e,t,a);return sr&&(l?l.push(d):c&&d()),d}function Sh(e,t,n){const r=this.proxy,s=de(e)?e.includes(".")?Tl(r,e):()=>r[e]:e.bind(r,r);let i;V(t)?i=t:(i=t.handler,n=t);const o=hr(this),a=Sl(s,i.bind(r),n);return o(),a}function Tl(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Th=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Be(t)}Modifiers`]||e[`${fn(t)}Modifiers`];function Rh(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||se;let s=n;const i=t.startsWith("update:"),o=i&&Th(r,t.slice(7));o&&(o.trim&&(s=n.map(u=>de(u)?u.trim():u)),o.number&&(s=n.map(Hr)));let a,c=r[a=Ms(t)]||r[a=Ms(Be(t))];!c&&i&&(c=r[a=Ms(fn(t))]),c&&it(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,it(l,e,6,s)}}function Rl(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!V(e)){const c=l=>{const u=Rl(l,t,!0);u&&(a=!0,_e(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(ie(e)&&r.set(e,null),null):(B(i)?i.forEach(c=>o[c]=null):_e(o,i),ie(e)&&r.set(e,o),o)}function ws(e,t){return!e||!ls(t)?!1:(t=t.slice(2).replace(/Once$/,""),Z(e,t[0].toLowerCase()+t.slice(1))||Z(e,fn(t))||Z(e,t))}function qo(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:d,setupState:m,ctx:y,inheritAttrs:b}=e,S=zr(e);let A,R;try{if(n.shapeFlag&4){const D=s||r,F=D;A=Qe(l.call(F,D,u,f,m,d,y)),R=a}else{const D=t;A=Qe(D.length>1?D(f,{attrs:a,slots:o,emit:c}):D(f,null)),R=t.props?a:Ah(a)}}catch(D){Kn.length=0,ys(D,e,1),A=Ce(Wt)}let O=A;if(R&&b!==!1){const D=Object.keys(R),{shapeFlag:F}=O;D.length&&F&7&&(i&&D.some($i)&&(R=Ch(R,i)),O=An(O,R,!1,!0))}return n.dirs&&(O=An(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&to(O,n.transition),A=O,zr(S),A}const Ah=e=>{let t;for(const n in e)(n==="class"||n==="style"||ls(n))&&((t||(t={}))[n]=e[n]);return t},Ch=(e,t)=>{const n={};for(const r in e)(!$i(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ph(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?zo(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==r[d]&&!ws(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?zo(r,o,l):!0:!!o;return!1}function zo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!ws(n,i))return!0}return!1}function Oh({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Al=e=>e.__isSuspense;function kh(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):Fd(e)}const dt=Symbol.for("v-fgt"),Es=Symbol.for("v-txt"),Wt=Symbol.for("v-cmt"),kr=Symbol.for("v-stc"),Kn=[];let Me=null;function Cl(e=!1){Kn.push(Me=e?null:[])}function xh(){Kn.pop(),Me=Kn[Kn.length-1]||null}let rr=1;function Ko(e,t=!1){rr+=e,e<0&&Me&&t&&(Me.hasOnce=!0)}function Pl(e){return e.dynamicChildren=rr>0?Me||wn:null,xh(),rr>0&&Me&&Me.push(e),e}function Pv(e,t,n,r,s,i){return Pl(xl(e,t,n,r,s,i,!0))}function Ol(e,t,n,r,s){return Pl(Ce(e,t,n,r,s,!0))}function Gr(e){return e?e.__v_isVNode===!0:!1}function Un(e,t){return e.type===t.type&&e.key===t.key}const kl=({key:e})=>e??null,xr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?de(e)||ue(e)||V(e)?{i:Le,r:e,k:t,f:!!n}:e:null);function xl(e,t=null,n=null,r=0,s=null,i=e===dt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&kl(t),ref:t&&xr(t),scopeId:sl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Le};return a?(so(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=de(n)?8:16),rr>0&&!o&&Me&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Me.push(c),c}const Ce=Nh;function Nh(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===th)&&(e=Wt),Gr(e)){const a=An(e,t,!0);return n&&so(a,n),rr>0&&!i&&Me&&(a.shapeFlag&6?Me[Me.indexOf(e)]=a:Me.push(a)),a.patchFlag=-2,a}if(qh(e)&&(e=e.__vccOpts),t){t=Dh(t);let{class:a,style:c}=t;a&&!de(a)&&(t.class=Vi(a)),ie(c)&&(Xi(c)&&!B(c)&&(c=_e({},c)),t.style=ji(c))}const o=de(e)?1:Al(e)?128:Hd(e)?64:ie(e)?4:V(e)?2:0;return xl(e,t,n,r,s,o,i,!0)}function Dh(e){return e?Xi(e)||gl(e)?_e({},e):e:null}function An(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=e,l=t?Mh(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&kl(l),ref:t&&t.ref?n&&i?B(i)?i.concat(xr(t)):[i,xr(t)]:xr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==dt?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&An(e.ssContent),ssFallback:e.ssFallback&&An(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&to(u,c.clone(u)),u}function Lh(e=" ",t=0){return Ce(Es,null,e,t)}function Ov(e,t){const n=Ce(kr,null,e);return n.staticCount=t,n}function kv(e="",t=!1){return t?(Cl(),Ol(Wt,null,e)):Ce(Wt,null,e)}function Qe(e){return e==null||typeof e=="boolean"?Ce(Wt):B(e)?Ce(dt,null,e.slice()):Gr(e)?xt(e):Ce(Es,null,String(e))}function xt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:An(e)}function so(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(B(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),so(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!gl(t)?t._ctx=Le:s===3&&Le&&(Le.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:Le},n=32):(t=String(t),r&64?(n=16,t=[Lh(t)]):n=8);e.children=t,e.shapeFlag|=n}function Mh(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Vi([t.class,r.class]));else if(s==="style")t.style=ji([t.style,r.style]);else if(ls(s)){const i=t[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Je(e,t,n,r=null){it(e,t,7,[n,r])}const Uh=hl();let Fh=0;function $h(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Uh,i={uid:Fh++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_l(r,s),emitsOptions:Rl(r,s),emit:null,emitted:null,propsDefaults:se,inheritAttrs:r.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Rh.bind(null,i),e.ce&&e.ce(i),i}let ge=null;const io=()=>ge||Le;let Jr,gi;{const e=hs(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Jr=t("__VUE_INSTANCE_SETTERS__",n=>ge=n),gi=t("__VUE_SSR_SETTERS__",n=>sr=n)}const hr=e=>{const t=ge;return Jr(e),e.scope.on(),()=>{e.scope.off(),Jr(t)}},Go=()=>{ge&&ge.scope.off(),Jr(null)};function Nl(e){return e.vnode.shapeFlag&4}let sr=!1;function Bh(e,t=!1,n=!1){t&&gi(t);const{props:r,children:s}=e.vnode,i=Nl(e);dh(e,r,i,t),gh(e,s,n||t);const o=i?Hh(e,t):void 0;return t&&gi(!1),o}function Hh(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,rh);const{setup:r}=n;if(r){_t();const s=e.setupContext=r.length>1?Vh(e):null,i=hr(e),o=dr(r,e,0,[e.props,s]),a=Rc(o);if(bt(),i(),(a||e.sp)&&!qn(e)&&ol(e),a){if(o.then(Go,Go),t)return o.then(c=>{Jo(e,c)}).catch(c=>{ys(c,e,0)});e.asyncDep=o}else Jo(e,o)}else Dl(e)}function Jo(e,t,n){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ie(t)&&(e.setupState=Qc(t)),Dl(e)}function Dl(e,t,n){const r=e.type;e.render||(e.render=r.render||Ze);{const s=hr(e);_t();try{sh(e)}finally{bt(),s()}}}const jh={get(e,t){return me(e,"get",""),e[t]}};function Vh(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,jh),slots:e.slots,emit:e.emit,expose:t}}function vs(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Qc(Qi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in zn)return zn[n](e)},has(t,n){return n in t||n in zn}})):e.proxy}function Wh(e,t=!0){return V(e)?e.displayName||e.name:e.name||t&&e.__name}function qh(e){return V(e)&&"__vccOpts"in e}const Ae=(e,t)=>Nd(e,t,sr);function Ll(e,t,n){const r=arguments.length;return r===2?ie(t)&&!B(t)?Gr(t)?Ce(e,null,[t]):Ce(e,t):Ce(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Gr(n)&&(n=[n]),Ce(e,t,n))}const zh="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yi;const Yo=typeof window<"u"&&window.trustedTypes;if(Yo)try{yi=Yo.createPolicy("vue",{createHTML:e=>e})}catch{}const Ml=yi?e=>yi.createHTML(e):e=>e,Kh="http://www.w3.org/2000/svg",Gh="http://www.w3.org/1998/Math/MathML",ft=typeof document<"u"?document:null,Xo=ft&&ft.createElement("template"),Jh={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?ft.createElementNS(Kh,e):t==="mathml"?ft.createElementNS(Gh,e):n?ft.createElement(e,{is:n}):ft.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>ft.createTextNode(e),createComment:e=>ft.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ft.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Xo.innerHTML=Ml(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=Xo.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Yh=Symbol("_vtc");function Xh(e,t,n){const r=e[Yh];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Qo=Symbol("_vod"),Qh=Symbol("_vsh"),Zh=Symbol(""),ep=/(^|;)\s*display\s*:/;function tp(e,t,n){const r=e.style,s=de(n);let i=!1;if(n&&!s){if(t)if(de(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Nr(r,a,"")}else for(const o in t)n[o]==null&&Nr(r,o,"");for(const o in n)o==="display"&&(i=!0),Nr(r,o,n[o])}else if(s){if(t!==n){const o=r[Zh];o&&(n+=";"+o),r.cssText=n,i=ep.test(n)}}else t&&e.removeAttribute("style");Qo in e&&(e[Qo]=i?r.display:"",e[Qh]&&(r.display="none"))}const Zo=/\s*!important$/;function Nr(e,t,n){if(B(n))n.forEach(r=>Nr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=np(e,t);Zo.test(n)?e.setProperty(fn(r),n.replace(Zo,""),"important"):e[r]=n}}const ea=["Webkit","Moz","ms"],Vs={};function np(e,t){const n=Vs[t];if(n)return n;let r=Be(t);if(r!=="filter"&&r in e)return Vs[t]=r;r=ds(r);for(let s=0;s<ea.length;s++){const i=ea[s]+r;if(i in e)return Vs[t]=i}return t}const ta="http://www.w3.org/1999/xlink";function na(e,t,n,r,s,i=td(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ta,t.slice(6,t.length)):e.setAttributeNS(ta,t,n):n==null||i&&!Pc(n)?e.removeAttribute(t):e.setAttribute(t,i?"":st(n)?String(n):n)}function ra(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Ml(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Pc(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function Yt(e,t,n,r){e.addEventListener(t,n,r)}function rp(e,t,n,r){e.removeEventListener(t,n,r)}const sa=Symbol("_vei");function sp(e,t,n,r,s=null){const i=e[sa]||(e[sa]={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=ip(t);if(r){const l=i[t]=cp(r,s);Yt(e,a,l,c)}else o&&(rp(e,a,o,c),i[t]=void 0)}}const ia=/(?:Once|Passive|Capture)$/;function ip(e){let t;if(ia.test(e)){t={};let r;for(;r=e.match(ia);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):fn(e.slice(2)),t]}let Ws=0;const op=Promise.resolve(),ap=()=>Ws||(op.then(()=>Ws=0),Ws=Date.now());function cp(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;it(lp(r,n.value),t,5,[r])};return n.value=e,n.attached=ap(),n}function lp(e,t){if(B(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const oa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,up=(e,t,n,r,s,i)=>{const o=s==="svg";t==="class"?Xh(e,r,o):t==="style"?tp(e,n,r):ls(t)?$i(t)||sp(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):fp(e,t,r,o))?(ra(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&na(e,t,r,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!de(r))?ra(e,Be(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),na(e,t,r,o))};function fp(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&oa(t)&&V(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return oa(t)&&de(n)?!1:t in e}const Yr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return B(t)?n=>Pr(t,n):t};function dp(e){e.target.composing=!0}function aa(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const In=Symbol("_assign"),xv={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[In]=Yr(s);const i=r||s.props&&s.props.type==="number";Yt(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=Hr(a)),e[In](a)}),n&&Yt(e,"change",()=>{e.value=e.value.trim()}),t||(Yt(e,"compositionstart",dp),Yt(e,"compositionend",aa),Yt(e,"change",aa))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(e[In]=Yr(o),e.composing)return;const a=(i||e.type==="number")&&!/^0\d/.test(e.value)?Hr(e.value):e.value,c=t??"";a!==c&&(document.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===c)||(e.value=c))}},Nv={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const s=us(t);Yt(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?Hr(Xr(o)):Xr(o));e[In](e.multiple?s?new Set(i):i:i[0]),e._assigning=!0,_s(()=>{e._assigning=!1})}),e[In]=Yr(r)},mounted(e,{value:t}){ca(e,t)},beforeUpdate(e,t,n){e[In]=Yr(n)},updated(e,{value:t}){e._assigning||ca(e,t)}};function ca(e,t){const n=e.multiple,r=B(t);if(!(n&&!r&&!us(t))){for(let s=0,i=e.options.length;s<i;s++){const o=e.options[s],a=Xr(o);if(n)if(r){const c=typeof a;c==="string"||c==="number"?o.selected=t.some(l=>String(l)===String(a)):o.selected=rd(t,a)>-1}else o.selected=t.has(a);else if(ps(Xr(o),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Xr(e){return"_value"in e?e._value:e.value}const hp=_e({patchProp:up},Jh);let la;function pp(){return la||(la=_h(hp))}const mp=(...e)=>{const t=pp().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=yp(r);if(!s)return;const i=t._component;!V(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,gp(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function gp(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function yp(e){return de(e)?document.querySelector(e):e}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Ul;const Is=e=>Ul=e,Fl=Symbol();function _i(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Gn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Gn||(Gn={}));function _p(){const e=Nc(!0),t=e.run(()=>fr({}));let n=[],r=[];const s=Qi({install(i){Is(s),s._a=i,i.provide(Fl,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const $l=()=>{};function ua(e,t,n,r=$l){e.push(t);const s=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&Wi()&&Dc(s),s}function gn(e,...t){e.slice().forEach(n=>{n(...t)})}const bp=e=>e(),fa=Symbol(),qs=Symbol();function bi(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,r)=>e.set(r,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];_i(s)&&_i(r)&&e.hasOwnProperty(n)&&!ue(r)&&!Bt(r)?e[n]=bi(s,r):e[n]=r}return e}const wp=Symbol();function Ep(e){return!_i(e)||!Object.prototype.hasOwnProperty.call(e,wp)}const{assign:Ot}=Object;function vp(e){return!!(ue(e)&&e.effect)}function Ip(e,t,n,r){const{state:s,actions:i,getters:o}=t,a=n.state.value[e];let c;function l(){a||(n.state.value[e]=s?s():{});const u=Cd(n.state.value[e]);return Ot(u,i,Object.keys(o||{}).reduce((f,d)=>(f[d]=Qi(Ae(()=>{Is(n);const m=n._s.get(e);return o[d].call(m,m)})),f),{}))}return c=Bl(e,l,t,n,r,!0),c}function Bl(e,t,n={},r,s,i){let o;const a=Ot({actions:{}},n),c={deep:!0};let l,u,f=[],d=[],m;const y=r.state.value[e];!i&&!y&&(r.state.value[e]={}),fr({});let b;function S(q){let K;l=u=!1,typeof q=="function"?(q(r.state.value[e]),K={type:Gn.patchFunction,storeId:e,events:m}):(bi(r.state.value[e],q),K={type:Gn.patchObject,payload:q,storeId:e,events:m});const le=b=Symbol();_s().then(()=>{b===le&&(l=!0)}),u=!0,gn(f,K,r.state.value[e])}const A=i?function(){const{state:K}=n,le=K?K():{};this.$patch(be=>{Ot(be,le)})}:$l;function R(){o.stop(),f=[],d=[],r._s.delete(e)}const O=(q,K="")=>{if(fa in q)return q[qs]=K,q;const le=function(){Is(r);const be=Array.from(arguments),xe=[],Ie=[];function qt(z){xe.push(z)}function Rt(z){Ie.push(z)}gn(d,{args:be,name:le[qs],store:F,after:qt,onError:Rt});let ce;try{ce=q.apply(this&&this.$id===e?this:F,be)}catch(z){throw gn(Ie,z),z}return ce instanceof Promise?ce.then(z=>(gn(xe,z),z)).catch(z=>(gn(Ie,z),Promise.reject(z))):(gn(xe,ce),ce)};return le[fa]=!0,le[qs]=K,le},D={_p:r,$id:e,$onAction:ua.bind(null,d),$patch:S,$reset:A,$subscribe(q,K={}){const le=ua(f,q,K.detached,()=>be()),be=o.run(()=>nn(()=>r.state.value[e],xe=>{(K.flush==="sync"?u:l)&&q({storeId:e,type:Gn.direct,events:m},xe)},Ot({},c,K)));return le},$dispose:R},F=$t(D);r._s.set(e,F);const G=(r._a&&r._a.runWithContext||bp)(()=>r._e.run(()=>(o=Nc()).run(()=>t({action:O}))));for(const q in G){const K=G[q];if(ue(K)&&!vp(K)||Bt(K))i||(y&&Ep(K)&&(ue(K)?K.value=y[q]:bi(K,y[q])),r.state.value[e][q]=K);else if(typeof K=="function"){const le=O(K,q);G[q]=le,a.actions[q]=K}}return Ot(F,G),Ot(Y(F),G),Object.defineProperty(F,"$state",{get:()=>r.state.value[e],set:q=>{S(K=>{Ot(K,q)})}}),r._p.forEach(q=>{Ot(F,o.run(()=>q({store:F,app:r._a,pinia:r,options:a})))}),y&&i&&n.hydrate&&n.hydrate(F.$state,y),l=!0,u=!0,F}/*! #__NO_SIDE_EFFECTS__ */function Sp(e,t,n){let r;const s=typeof t=="function";r=s?n:t;function i(o,a){const c=fh();return o=o||(c?et(Fl,null):null),o&&Is(o),o=Ul,o._s.has(e)||(s?Bl(e,t,r,o):Ip(e,r,o)),o._s.get(e)}return i.$id=e,i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp=()=>{};var da={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Rp=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},jl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(d=64)),r.push(n[u],n[f],n[d],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Hl(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Rp(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new Ap;const d=i<<2|a>>4;if(r.push(d),l!==64){const m=a<<4&240|l>>2;if(r.push(m),f!==64){const y=l<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ap extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cp=function(e){const t=Hl(e);return jl.encodeByteArray(t,!0)},Vl=function(e){return Cp(e).replace(/\./g,"")},Wl=function(e){try{return jl.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=()=>Pp().__FIREBASE_DEFAULTS__,kp=()=>{if(typeof process>"u"||typeof da>"u")return;const e=da.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},xp=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Wl(e[1]);return t&&JSON.parse(t)},oo=()=>{try{return Tp()||Op()||kp()||xp()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Np=e=>oo()?.emulatorHosts?.[e],ql=()=>oo()?.config,zl=e=>oo()?.[`_${e}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Lp(e){return(await fetch(e,{credentials:"include"})).ok}const Jn={};function Mp(){const e={prod:[],emulator:[]};for(const t of Object.keys(Jn))Jn[t]?e.emulator.push(t):e.prod.push(t);return e}function Up(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let ha=!1;function Fp(e,t){if(typeof window>"u"||typeof document>"u"||!Ss(window.location.host)||Jn[e]===t||Jn[e]||ha)return;Jn[e]=t;function n(d){return`__firebase__banner__${d}`}const r="__firebase__banner",i=Mp().prod.length>0;function o(){const d=document.getElementById(r);d&&d.remove()}function a(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function c(d,m){d.setAttribute("width","24"),d.setAttribute("id",m),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function l(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{ha=!0,o()},d}function u(d,m){d.setAttribute("id",m),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function f(){const d=Up(r),m=n("text"),y=document.getElementById(m)||document.createElement("span"),b=n("learnmore"),S=document.getElementById(b)||document.createElement("a"),A=n("preprendIcon"),R=document.getElementById(A)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const O=d.element;a(O),u(S,b);const D=l();c(R,A),O.append(R,y,S,D),document.body.appendChild(O)}i?(y.innerText="Preview backend disconnected.",R.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(R.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,y.innerText="Preview backend running in this workspace."),y.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $p(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function Bp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Kl(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Hp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jp(){const e=ve();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Gl(){try{return typeof indexedDB=="object"}catch{return!1}}function Jl(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(n){t(n)}})}function Vp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp="FirebaseError";class at extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Wp,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dn.prototype.create)}}class dn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?qp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new at(s,a,r)}}function qp(e,t){return e.replace(zp,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const zp=/\{\$([^}]+)}/g;function Kp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function on(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(pa(i)&&pa(o)){if(!on(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function pa(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Gp(e,t){const n=new Jp(e,t);return n.subscribe.bind(n)}class Jp{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Yp(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=zs),s.error===void 0&&(s.error=zs),s.complete===void 0&&(s.complete=zs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yp(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function zs(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=1e3,Qp=2,Zp=14400*1e3,em=.5;function ma(e,t=Xp,n=Qp){const r=t*Math.pow(n,e),s=Math.round(em*r*(Math.random()-.5)*2);return Math.min(Zp,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(e){return e&&e._delegate?e._delegate:e}class ot{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Dp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(rm(t))try{this.getOrInitializeService({instanceIdentifier:Jt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Jt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Jt){return this.instances.has(t)}getOptions(t=Jt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nm(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Jt){return this.component?this.component.multipleInstances?t:Jt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nm(e){return e===Jt?void 0:e}function rm(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new tm(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(re||(re={}));const im={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},om=re.INFO,am={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},cm=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=am[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ao{constructor(t){this.name=t,this._logLevel=om,this._logHandler=cm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in re))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?im[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...t),this._logHandler(this,re.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...t),this._logHandler(this,re.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,re.INFO,...t),this._logHandler(this,re.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,re.WARN,...t),this._logHandler(this,re.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...t),this._logHandler(this,re.ERROR,...t)}}const lm=(e,t)=>t.some(n=>e instanceof n);let ga,ya;function um(){return ga||(ga=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fm(){return ya||(ya=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yl=new WeakMap,wi=new WeakMap,Xl=new WeakMap,Ks=new WeakMap,co=new WeakMap;function dm(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Ht(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Yl.set(n,e)}).catch(()=>{}),co.set(t,e),t}function hm(e){if(wi.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});wi.set(e,t)}let Ei={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return wi.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Xl.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ht(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function pm(e){Ei=e(Ei)}function mm(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Gs(this),t,...n);return Xl.set(r,t.sort?t.sort():[t]),Ht(r)}:fm().includes(e)?function(...t){return e.apply(Gs(this),t),Ht(Yl.get(this))}:function(...t){return Ht(e.apply(Gs(this),t))}}function gm(e){return typeof e=="function"?mm(e):(e instanceof IDBTransaction&&hm(e),lm(e,um())?new Proxy(e,Ei):e)}function Ht(e){if(e instanceof IDBRequest)return dm(e);if(Ks.has(e))return Ks.get(e);const t=gm(e);return t!==e&&(Ks.set(e,t),co.set(t,e)),t}const Gs=e=>co.get(e);function Ql(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Ht(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ht(o.result),c.oldVersion,c.newVersion,Ht(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const ym=["get","getKey","getAll","getAllKeys","count"],_m=["put","add","delete","clear"],Js=new Map;function _a(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Js.get(t))return Js.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=_m.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ym.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Js.set(t,i),i}pm(e=>({...e,get:(t,n,r)=>_a(t,n)||e.get(t,n,r),has:(t,n)=>!!_a(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wm(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wm(e){return e.getComponent()?.type==="VERSION"}const vi="@firebase/app",ba="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=new ao("@firebase/app"),Em="@firebase/app-compat",vm="@firebase/analytics-compat",Im="@firebase/analytics",Sm="@firebase/app-check-compat",Tm="@firebase/app-check",Rm="@firebase/auth",Am="@firebase/auth-compat",Cm="@firebase/database",Pm="@firebase/data-connect",Om="@firebase/database-compat",km="@firebase/functions",xm="@firebase/functions-compat",Nm="@firebase/installations",Dm="@firebase/installations-compat",Lm="@firebase/messaging",Mm="@firebase/messaging-compat",Um="@firebase/performance",Fm="@firebase/performance-compat",$m="@firebase/remote-config",Bm="@firebase/remote-config-compat",Hm="@firebase/storage",jm="@firebase/storage-compat",Vm="@firebase/firestore",Wm="@firebase/ai",qm="@firebase/firestore-compat",zm="firebase",Km="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii="[DEFAULT]",Gm={[vi]:"fire-core",[Em]:"fire-core-compat",[Im]:"fire-analytics",[vm]:"fire-analytics-compat",[Tm]:"fire-app-check",[Sm]:"fire-app-check-compat",[Rm]:"fire-auth",[Am]:"fire-auth-compat",[Cm]:"fire-rtdb",[Pm]:"fire-data-connect",[Om]:"fire-rtdb-compat",[km]:"fire-fn",[xm]:"fire-fn-compat",[Nm]:"fire-iid",[Dm]:"fire-iid-compat",[Lm]:"fire-fcm",[Mm]:"fire-fcm-compat",[Um]:"fire-perf",[Fm]:"fire-perf-compat",[$m]:"fire-rc",[Bm]:"fire-rc-compat",[Hm]:"fire-gcs",[jm]:"fire-gcs-compat",[Vm]:"fire-fst",[qm]:"fire-fst-compat",[Wm]:"fire-vertex","fire-js":"fire-js",[zm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new Map,Jm=new Map,Si=new Map;function wa(e,t){try{e.container.addComponent(t)}catch(n){wt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Et(e){const t=e.name;if(Si.has(t))return wt.debug(`There were multiple attempts to register component ${t}.`),!1;Si.set(t,e);for(const n of Qr.values())wa(n,e);for(const n of Jm.values())wa(n,e);return!0}function kn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function mt(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jt=new dn("app","Firebase",Ym);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=Km;function Zl(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:Ii,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw jt.create("bad-app-name",{appName:String(s)});if(n||(n=ql()),!n)throw jt.create("no-options");const i=Qr.get(s);if(i){if(on(n,i.options)&&on(r,i.config))return i;throw jt.create("duplicate-app",{appName:s})}const o=new sm(s);for(const c of Si.values())o.addComponent(c);const a=new Xm(n,r,o);return Qr.set(s,a),a}function eu(e=Ii){const t=Qr.get(e);if(!t&&e===Ii&&ql())return Zl();if(!t)throw jt.create("no-app",{appName:e});return t}function tt(e,t,n){let r=Gm[e]??e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${t}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),wt.warn(o.join(" "));return}Et(new ot(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm="firebase-heartbeat-database",Zm=1,ir="firebase-heartbeat-store";let Ys=null;function tu(){return Ys||(Ys=Ql(Qm,Zm,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ir)}catch(n){console.warn(n)}}}}).catch(e=>{throw jt.create("idb-open",{originalErrorMessage:e.message})})),Ys}async function eg(e){try{const n=(await tu()).transaction(ir),r=await n.objectStore(ir).get(nu(e));return await n.done,r}catch(t){if(t instanceof at)wt.warn(t.message);else{const n=jt.create("idb-get",{originalErrorMessage:t?.message});wt.warn(n.message)}}}async function Ea(e,t){try{const r=(await tu()).transaction(ir,"readwrite");await r.objectStore(ir).put(t,nu(e)),await r.done}catch(n){if(n instanceof at)wt.warn(n.message);else{const r=jt.create("idb-set",{originalErrorMessage:n?.message});wt.warn(r.message)}}}function nu(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=1024,ng=30;class rg{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ig(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=va();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>ng){const s=og(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){wt.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=va(),{heartbeatsToSend:n,unsentEntries:r}=sg(this._heartbeatsCache.heartbeats),s=Vl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return wt.warn(t),""}}}function va(){return new Date().toISOString().substring(0,10)}function sg(e,t=tg){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ia(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ia(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ig{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gl()?Jl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eg(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ea(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ea(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Ia(e){return Vl(JSON.stringify({version:2,heartbeats:e})).length}function og(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(e){Et(new ot("platform-logger",t=>new bm(t),"PRIVATE")),Et(new ot("heartbeat",t=>new rg(t),"PRIVATE")),tt(vi,ba,e),tt(vi,ba,"esm2020"),tt("fire-js","")}ag("");var cg="firebase",lg="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tt(cg,lg,"app");function ru(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ug=ru,su=new dn("auth","Firebase",ru());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=new ao("@firebase/auth");function fg(e,...t){Zr.logLevel<=re.WARN&&Zr.warn(`Auth (${mr}): ${e}`,...t)}function Dr(e,...t){Zr.logLevel<=re.ERROR&&Zr.error(`Auth (${mr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(e,...t){throw lo(e,...t)}function nt(e,...t){return lo(e,...t)}function iu(e,t,n){const r={...ug(),[t]:n};return new dn("auth","Firebase",r).create(t,{appName:e.name})}function rn(e){return iu(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lo(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return su.create(e,...t)}function H(e,t,...n){if(!e)throw lo(t,...n)}function gt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Dr(t),new Error(t)}function It(e,t){e||gt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(){return typeof self<"u"&&self.location?.href||""}function dg(){return Sa()==="http:"||Sa()==="https:"}function Sa(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dg()||Kl()||"connection"in navigator)?navigator.onLine:!0}function pg(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,n){this.shortDelay=t,this.longDelay=n,It(n>t,"Short delay should be less than long delay!"),this.isMobile=$p()||Hp()}get(){return hg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(e,t){It(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yg=new gr(3e4,6e4);function fo(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function xn(e,t,n,r,s={}){return au(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=pr({key:e.config.apiKey,...o}).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const l={method:t,headers:c,...i};return Bp()||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&Ss(e.emulatorConfig.host)&&(l.credentials="include"),ou.fetch()(await cu(e,e.config.apiHost,n,a),l)})}async function au(e,t,n){e._canInitEmulator=!1;const r={...mg,...t};try{const s=new bg(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ar(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ar(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ar(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ar(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw iu(e,u,l);vt(e,u)}}catch(s){if(s instanceof at)throw s;vt(e,"network-request-failed",{message:String(s)})}}async function _g(e,t,n,r,s={}){const i=await xn(e,t,n,r,s);return"mfaPendingCredential"in i&&vt(e,"multi-factor-auth-required",{_serverResponse:i}),i}async function cu(e,t,n,r){const s=`${t}${n}?${r}`,i=e,o=i.config.emulator?uo(e.config,s):`${e.config.apiScheme}://${s}`;return gg.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class bg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),yg.get())})}}function Ar(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=nt(e,t,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wg(e,t){return xn(e,"POST","/v1/accounts:delete",t)}async function es(e,t){return xn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Eg(e,t=!1){const n=Tt(e),r=await n.getIdToken(t),s=ho(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Yn(Xs(s.auth_time)),issuedAtTime:Yn(Xs(s.iat)),expirationTime:Yn(Xs(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Xs(e){return Number(e)*1e3}function ho(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Dr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Wl(n);return s?JSON.parse(s):(Dr("Failed to decode base64 JWT payload"),null)}catch(s){return Dr("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Ta(e){const t=ho(e);return H(t,"internal-error"),H(typeof t.exp<"u","internal-error"),H(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function or(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof at&&vg(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function vg({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yn(this.lastLoginAt),this.creationTime=Yn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(e){const t=e.auth,n=await e.getIdToken(),r=await or(e,es(t,{idToken:n}));H(r?.users.length,t,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const i=s.providerUserInfo?.length?lu(s.providerUserInfo):[],o=Tg(e.providerData,i),a=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!o?.length,l=a?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ri(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,u)}async function Sg(e){const t=Tt(e);await ts(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Tg(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function lu(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rg(e,t){const n=await au(e,{},async()=>{const r=pr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=await cu(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return e.emulatorConfig&&Ss(e.emulatorConfig.host)&&(c.credentials="include"),ou.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ag(e,t){return xn(e,"POST","/v2/accounts:revokeToken",fo(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){H(t.idToken,"internal-error"),H(typeof t.idToken<"u","internal-error"),H(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Ta(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){H(t.length!==0,"internal-error");const n=Ta(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Rg(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Sn;return r&&(H(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Sn,this.toJSON())}_performRefresh(){return gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e,t){H(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class He{constructor({uid:t,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Ig(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ri(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await or(this,this.stsTokenManager.getToken(this.auth,t));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Eg(this,t)}reload(){return Sg(this)}_assign(t){this!==t&&(H(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new He({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ts(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(rn(this.auth));const t=await this.getIdToken();return await or(this,wg(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,l=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:f,emailVerified:d,isAnonymous:m,providerData:y,stsTokenManager:b}=n;H(f&&b,t,"internal-error");const S=Sn.fromJSON(this.name,b);H(typeof f=="string",t,"internal-error"),Ct(r,t.name),Ct(s,t.name),H(typeof d=="boolean",t,"internal-error"),H(typeof m=="boolean",t,"internal-error"),Ct(i,t.name),Ct(o,t.name),Ct(a,t.name),Ct(c,t.name),Ct(l,t.name),Ct(u,t.name);const A=new He({uid:f,auth:t,email:s,emailVerified:d,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:S,createdAt:l,lastLoginAt:u});return y&&Array.isArray(y)&&(A.providerData=y.map(R=>({...R}))),c&&(A._redirectEventId=c),A}static async _fromIdTokenResponse(t,n,r=!1){const s=new Sn;s.updateFromServerResponse(n);const i=new He({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await ts(i),i}static async _fromGetAccountInfoResponse(t,n,r){const s=n.users[0];H(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?lu(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new Sn;a.updateFromIdToken(r);const c=new He({uid:s.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ri(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=new Map;function yt(e){It(e instanceof Function,"Expected a class definition");let t=Ra.get(e);return t?(It(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ra.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}uu.type="NONE";const Aa=uu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(e,t,n){return`firebase:${e}:${t}:${n}`}class Tn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Lr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Lr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await es(this.auth,{idToken:t}).catch(()=>{});return n?He._fromGetAccountInfoResponse(this.auth,n,t):null}return He._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Tn(yt(Aa),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||yt(Aa);const o=Lr(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){let f;if(typeof u=="string"){const d=await es(t,{idToken:u}).catch(()=>{});if(!d)break;f=await He._fromGetAccountInfoResponse(t,d,u)}else f=He._fromJSON(t,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Tn(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Tn(i,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pu(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(fu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(gu(t))return"Blackberry";if(yu(t))return"Webos";if(du(t))return"Safari";if((t.includes("chrome/")||hu(t))&&!t.includes("edge/"))return"Chrome";if(mu(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if(r?.length===2)return r[1]}return"Other"}function fu(e=ve()){return/firefox\//i.test(e)}function du(e=ve()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function hu(e=ve()){return/crios\//i.test(e)}function pu(e=ve()){return/iemobile/i.test(e)}function mu(e=ve()){return/android/i.test(e)}function gu(e=ve()){return/blackberry/i.test(e)}function yu(e=ve()){return/webos/i.test(e)}function po(e=ve()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Cg(e=ve()){return po(e)&&!!window.navigator?.standalone}function Pg(){return jp()&&document.documentMode===10}function _u(e=ve()){return po(e)||mu(e)||yu(e)||gu(e)||/windows phone/i.test(e)||pu(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(e,t=[]){let n;switch(e){case"Browser":n=Ca(ve());break;case"Worker":n=`${Ca(ve())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${mr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kg(e,t={}){return xn(e,"GET","/v2/passwordPolicy",fo(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=6;class Ng{constructor(t){const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??xg,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pa(this),this.idTokenSubscription=new Pa(this),this.beforeStateQueue=new Og(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=su,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=yt(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Tn.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await es(this,{idToken:t}),r=await He._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(mt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(t);(!i||i===o)&&a?.user&&(r=a.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ts(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=pg()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(mt(this.app))return Promise.reject(rn(this));const n=t?Tt(t):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&H(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return mt(this.app)?Promise.reject(rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await kg(this),n=new Ng(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new dn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ag(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&yt(t)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await Tn.create(this,[yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=bu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){if(mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&fg(`Error while retrieving App Check token: ${t.error}`),t?.token}}function mo(e){return Tt(e)}class Pa{constructor(t){this.auth=t,this.observer=null,this.addObserver=Gp(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let go={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Lg(e){go=e}function Mg(e){return go.loadJS(e)}function Ug(){return go.gapiScript}function Fg(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(e,t){const n=kn(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(on(i,t??{}))return s;vt(s,"already-initialized")}return n.initialize({options:t})}function Bg(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(yt);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}function Hg(e,t,n){const r=mo(e);H(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=wu(t),{host:o,port:a}=jg(t),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){H(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),H(on(l,r.config.emulator)&&on(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,Ss(o)?(Lp(`${i}//${o}${c}`),Fp("Auth",!0)):Vg()}function wu(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function jg(e){const t=wu(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Oa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Oa(o)}}}function Oa(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Vg(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return gt("not implemented")}_getIdTokenResponse(t){return gt("not implemented")}_linkToIdToken(t,n){return gt("not implemented")}_getReauthenticationResolver(t){return gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(e,t){return _g(e,"POST","/v1/accounts:signInWithIdp",fo(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="http://localhost";class an extends Eu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new an(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new an(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Rn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Rn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Rn(t,n)}buildRequest(){const t={requestUri:Wg,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=pr(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends vu{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends yr{constructor(){super("facebook.com")}static credential(t){return an._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Dt.credentialFromTaggedObject(t)}static credentialFromError(t){return Dt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Dt.credential(t.oauthAccessToken)}catch{return null}}}Dt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends yr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return an._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Lt.credentialFromTaggedObject(t)}static credentialFromError(t){return Lt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Lt.credential(n,r)}catch{return null}}}Lt.GOOGLE_SIGN_IN_METHOD="google.com";Lt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends yr{constructor(){super("github.com")}static credential(t){return an._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Mt.credentialFromTaggedObject(t)}static credentialFromError(t){return Mt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Mt.credential(t.oauthAccessToken)}catch{return null}}}Mt.GITHUB_SIGN_IN_METHOD="github.com";Mt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends yr{constructor(){super("twitter.com")}static credential(t,n){return an._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ut.credentialFromTaggedObject(t)}static credentialFromError(t){return Ut.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ut.credential(n,r)}catch{return null}}}Ut.TWITTER_SIGN_IN_METHOD="twitter.com";Ut.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await He._fromIdTokenResponse(t,r,s),o=ka(r);return new Cn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=ka(r);return new Cn({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function ka(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends at{constructor(t,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ns.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new ns(t,n,r,s)}}function Iu(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ns._fromErrorAndOperation(e,i,t,r):i})}async function qg(e,t,n=!1){const r=await or(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Cn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zg(e,t,n=!1){const{auth:r}=e;if(mt(r.app))return Promise.reject(rn(r));const s="reauthenticate";try{const i=await or(e,Iu(r,s,t,e),n);H(i.idToken,r,"internal-error");const o=ho(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(e.uid===a,r,"user-mismatch"),Cn._forOperation(e,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&vt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kg(e,t,n=!1){if(mt(e.app))return Promise.reject(rn(e));const r="signIn",s=await Iu(e,r,t),i=await Cn._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}function Gg(e,t,n,r){return Tt(e).onIdTokenChanged(t,n,r)}function Jg(e,t,n){return Tt(e).beforeAuthStateChanged(t,n)}function Yg(e,t,n,r){return Tt(e).onAuthStateChanged(t,n,r)}const rs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rs,"1"),this.storage.removeItem(rs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=1e3,Qg=10;class Tu extends Su{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_u(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Pg()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,Qg):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Xg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Tu.type="LOCAL";const Zg=Tu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru extends Su{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Ru.type="SESSION";const Au=Ru;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new Ts(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await ey(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ts.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=yo("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const d=f;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}function ny(e){rt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function ry(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sy(){return navigator?.serviceWorker?.controller||null}function iy(){return Cu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu="firebaseLocalStorageDb",oy=1,ss="firebaseLocalStorage",Ou="fbase_key";class _r{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rs(e,t){return e.transaction([ss],t?"readwrite":"readonly").objectStore(ss)}function ay(){const e=indexedDB.deleteDatabase(Pu);return new _r(e).toPromise()}function Ai(){const e=indexedDB.open(Pu,oy);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ss,{keyPath:Ou})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ss)?t(r):(r.close(),await ay(),t(await Ai()))})})}async function xa(e,t,n){const r=Rs(e,!0).put({[Ou]:t,value:n});return new _r(r).toPromise()}async function cy(e,t){const n=Rs(e,!1).get(t),r=await new _r(n).toPromise();return r===void 0?null:r.value}function Na(e,t){const n=Rs(e,!0).delete(t);return new _r(n).toPromise()}const ly=800,uy=3;class ku{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ai(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>uy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ts._getInstance(iy()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await ry(),!this.activeServiceWorker)return;this.sender=new ty(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||sy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ai();return await xa(t,rs,"1"),await Na(t,rs),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xa(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>cy(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Na(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=Rs(s,!1).getAll();return new _r(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ly)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ku.type="LOCAL";const fy=ku;new gr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(e,t){return t?yt(t):(H(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o extends Eu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Rn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Rn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Rn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function hy(e){return Kg(e.auth,new _o(e),e.bypassAuthState)}function py(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),zg(n,new _o(e),e.bypassAuthState)}async function my(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),qg(n,new _o(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return hy;case"linkViaPopup":case"linkViaRedirect":return my;case"reauthViaPopup":case"reauthViaRedirect":return py;default:vt(this.auth,"internal-error")}}resolve(t){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=new gr(2e3,1e4);class bn extends xu{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,bn.currentPopupAction&&bn.currentPopupAction.cancel(),bn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return H(t,this.auth,"internal-error"),t}async onExecution(){It(this.filter.length===1,"Popup operations only handle one event");const t=yo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bn.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,gy.get())};t()}}bn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy="pendingRedirect",Mr=new Map;class _y extends xu{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Mr.get(this.auth._key());if(!t){try{const r=await by(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Mr.set(this.auth._key(),t)}return this.bypassAuthState||Mr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function by(e,t){const n=vy(t),r=Ey(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function wy(e,t){Mr.set(e._key(),t)}function Ey(e){return yt(e._redirectPersistence)}function vy(e){return Lr(yy,e.config.apiKey,e.name)}async function Iy(e,t,n=!1){if(mt(e.app))return Promise.reject(rn(e));const r=mo(e),s=dy(r,t),o=await new _y(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=600*1e3;class Ty{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Ry(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){if(t.error&&!Nu(t)){const r=t.error.code?.split("auth/")[1]||"internal-error";n.onError(nt(this.auth,r))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Sy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Da(t))}saveEventToCache(t){this.cachedEventUids.add(Da(t)),this.lastProcessedEventTime=Date.now()}}function Da(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Nu({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function Ry(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nu(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ay(e,t={}){return xn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Py=/^https?/;async function Oy(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Ay(e);for(const n of t)try{if(ky(n))return}catch{}vt(e,"unauthorized-domain")}function ky(e){const t=Ti(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Py.test(n))return!1;if(Cy.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=new gr(3e4,6e4);function La(){const e=rt().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Ny(e){return new Promise((t,n)=>{function r(){La(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{La(),n(nt(e,"network-request-failed"))},timeout:xy.get()})}if(rt().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(rt().gapi?.load)r();else{const s=Fg("iframefcb");return rt()[s]=()=>{gapi.load?r():n(nt(e,"network-request-failed"))},Mg(`${Ug()}?onload=${s}`).catch(i=>n(i))}}).catch(t=>{throw Ur=null,t})}let Ur=null;function Dy(e){return Ur=Ur||Ny(e),Ur}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=new gr(5e3,15e3),My="__/auth/iframe",Uy="emulator/auth/iframe",Fy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$y=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function By(e){const t=e.config;H(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?uo(t,Uy):`https://${e.config.authDomain}/${My}`,r={apiKey:t.apiKey,appName:e.name,v:mr},s=$y.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${pr(r).slice(1)}`}async function Hy(e){const t=await Dy(e),n=rt().gapi;return H(n,e,"internal-error"),t.open({where:document.body,url:By(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fy,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=nt(e,"network-request-failed"),a=rt().setTimeout(()=>{i(o)},Ly.get());function c(){rt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vy=500,Wy=600,qy="_blank",zy="http://localhost";class Ma{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ky(e,t,n,r=Vy,s=Wy){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c={...jy,width:r.toString(),height:s.toString(),top:i,left:o},l=ve().toLowerCase();n&&(a=hu(l)?qy:n),fu(l)&&(t=t||zy,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(Cg(l)&&a!=="_self")return Gy(t||"",a),new Ma(null);const f=window.open(t||"",a,u);H(f,e,"popup-blocked");try{f.focus()}catch{}return new Ma(f)}function Gy(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy="__/auth/handler",Yy="emulator/auth/handler",Xy=encodeURIComponent("fac");async function Ua(e,t,n,r,s,i){H(e.config.authDomain,e,"auth-domain-config-required"),H(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:mr,eventId:s};if(t instanceof vu){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Kp(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(t instanceof yr){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${Xy}=${encodeURIComponent(c)}`:"";return`${Qy(e)}?${pr(a).slice(1)}${l}`}function Qy({config:e}){return e.emulator?uo(e,Yy):`https://${e.authDomain}/${Jy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="webStorageSupport";class Zy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Au,this._completeRedirectFn=Iy,this._overrideRedirectResult=wy}async _openPopup(t,n,r,s){It(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Ua(t,n,r,Ti(),s);return Ky(t,i,yo())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await Ua(t,n,r,Ti(),s);return ny(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(It(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Hy(t),r=new Ty(t);return n.register("authEvent",s=>(H(s?.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Qs,{type:Qs},s=>{const i=s?.[0]?.[Qs];i!==void 0&&n(!!i),vt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Oy(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return _u()||du()||po()}}const e_=Zy;var Fa="@firebase/auth",$a="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function r_(e){Et(new ot("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bu(e)},l=new Dg(r,s,i,c);return Bg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Et(new ot("auth-internal",t=>{const n=mo(t.getProvider("auth").getImmediate());return(r=>new t_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tt(Fa,$a,n_(e)),tt(Fa,$a,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=300,i_=zl("authIdTokenMaxAge")||s_;let Ba=null;const o_=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>i_)return;const s=n?.token;Ba!==s&&(Ba=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function a_(e=eu()){const t=kn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=$g(e,{popupRedirectResolver:e_,persistence:[fy,Zg,Au]}),r=zl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=o_(i.toString());Jg(n,o,()=>o(n.currentUser)),Gg(n,a=>o(a))}}const s=Np("auth");return s&&Hg(n,`http://${s}`),n}function c_(){return document.getElementsByTagName("head")?.[0]??document}Lg({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=nt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",c_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});r_("Browser");const Du="@firebase/installations",bo="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=1e4,Mu=`w:${bo}`,Uu="FIS_v2",l_="https://firebaseinstallations.googleapis.com/v1",u_=3600*1e3,f_="installations",d_="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},cn=new dn(f_,d_,h_);function Fu(e){return e instanceof at&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u({projectId:e}){return`${l_}/projects/${e}/installations`}function Bu(e){return{token:e.token,requestStatus:2,expiresIn:m_(e.expiresIn),creationTime:Date.now()}}async function Hu(e,t){const r=(await t.json()).error;return cn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ju({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function p_(e,{refreshToken:t}){const n=ju(e);return n.append("Authorization",g_(t)),n}async function Vu(e){const t=await e();return t.status>=500&&t.status<600?e():t}function m_(e){return Number(e.replace("s","000"))}function g_(e){return`${Uu} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y_({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=$u(e),s=ju(e),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Uu,appId:e.appId,sdkVersion:Mu},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Vu(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Bu(l.authToken)}}else throw await Hu("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=/^[cdef][\w-]{21}$/,Ci="";function w_(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=E_(e);return b_.test(n)?n:Ci}catch{return Ci}}function E_(e){return __(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=new Map;function zu(e,t){const n=As(e);Ku(n,t),v_(n,t)}function Ku(e,t){const n=qu.get(e);if(n)for(const r of n)r(t)}function v_(e,t){const n=I_();n&&n.postMessage({key:e,fid:t}),S_()}let Xt=null;function I_(){return!Xt&&"BroadcastChannel"in self&&(Xt=new BroadcastChannel("[Firebase] FID Change"),Xt.onmessage=e=>{Ku(e.data.key,e.data.fid)}),Xt}function S_(){qu.size===0&&Xt&&(Xt.close(),Xt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_="firebase-installations-database",R_=1,ln="firebase-installations-store";let Zs=null;function wo(){return Zs||(Zs=Ql(T_,R_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ln)}}})),Zs}async function is(e,t){const n=As(e),s=(await wo()).transaction(ln,"readwrite"),i=s.objectStore(ln),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&zu(e,t.fid),t}async function Gu(e){const t=As(e),r=(await wo()).transaction(ln,"readwrite");await r.objectStore(ln).delete(t),await r.done}async function Cs(e,t){const n=As(e),s=(await wo()).transaction(ln,"readwrite"),i=s.objectStore(ln),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&zu(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(e){let t;const n=await Cs(e.appConfig,r=>{const s=A_(r),i=C_(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===Ci?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function A_(e){const t=e||{fid:w_(),registrationStatus:0};return Ju(t)}function C_(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(cn.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=P_(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:O_(e)}:{installationEntry:t}}async function P_(e,t){try{const n=await y_(e,t);return is(e.appConfig,n)}catch(n){throw Fu(n)&&n.customData.serverCode===409?await Gu(e.appConfig):await is(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function O_(e){let t=await Ha(e.appConfig);for(;t.registrationStatus===1;)await Wu(100),t=await Ha(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Eo(e);return r||n}return t}function Ha(e){return Cs(e,t=>{if(!t)throw cn.create("installation-not-found");return Ju(t)})}function Ju(e){return k_(e)?{fid:e.fid,registrationStatus:0}:e}function k_(e){return e.registrationStatus===1&&e.registrationTime+Lu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x_({appConfig:e,heartbeatServiceProvider:t},n){const r=N_(e,n),s=p_(e,n),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Mu,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Vu(()=>fetch(r,a));if(c.ok){const l=await c.json();return Bu(l)}else throw await Hu("Generate Auth Token",c)}function N_(e,{fid:t}){return`${$u(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(e,t=!1){let n;const r=await Cs(e.appConfig,i=>{if(!Yu(i))throw cn.create("not-registered");const o=i.authToken;if(!t&&M_(o))return i;if(o.requestStatus===1)return n=D_(e,t),i;{if(!navigator.onLine)throw cn.create("app-offline");const a=F_(i);return n=L_(e,a),a}});return n?await n:r.authToken}async function D_(e,t){let n=await ja(e.appConfig);for(;n.authToken.requestStatus===1;)await Wu(100),n=await ja(e.appConfig);const r=n.authToken;return r.requestStatus===0?vo(e,t):r}function ja(e){return Cs(e,t=>{if(!Yu(t))throw cn.create("not-registered");const n=t.authToken;return $_(n)?{...t,authToken:{requestStatus:0}}:t})}async function L_(e,t){try{const n=await x_(e,t),r={...t,authToken:n};return await is(e.appConfig,r),n}catch(n){if(Fu(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Gu(e.appConfig);else{const r={...t,authToken:{requestStatus:0}};await is(e.appConfig,r)}throw n}}function Yu(e){return e!==void 0&&e.registrationStatus===2}function M_(e){return e.requestStatus===2&&!U_(e)}function U_(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+u_}function F_(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function $_(e){return e.requestStatus===1&&e.requestTime+Lu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B_(e){const t=e,{installationEntry:n,registrationPromise:r}=await Eo(t);return r?r.catch(console.error):vo(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H_(e,t=!1){const n=e;return await j_(n),(await vo(n,t)).token}async function j_(e){const{registrationPromise:t}=await Eo(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(e){if(!e||!e.options)throw ei("App Configuration");if(!e.name)throw ei("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ei(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ei(e){return cn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu="installations",W_="installations-internal",q_=e=>{const t=e.getProvider("app").getImmediate(),n=V_(t),r=kn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},z_=e=>{const t=e.getProvider("app").getImmediate(),n=kn(t,Xu).getImmediate();return{getId:()=>B_(n),getToken:s=>H_(n,s)}};function K_(){Et(new ot(Xu,q_,"PUBLIC")),Et(new ot(W_,z_,"PRIVATE"))}K_();tt(Du,bo);tt(Du,bo,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="analytics",G_="firebase_id",J_="origin",Y_=60*1e3,X_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Io="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=new ao("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ue=new dn("analytics","Analytics",Q_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(e){if(!e.startsWith(Io)){const t=Ue.create("invalid-gtag-resource",{gtagURL:e});return Pe.warn(t.message),""}return e}function Qu(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function eb(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function tb(e,t){const n=eb("firebase-js-sdk-policy",{createScriptURL:Z_}),r=document.createElement("script"),s=`${Io}?l=${e}&id=${t}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function nb(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function rb(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const c=(await Qu(n)).find(l=>l.measurementId===s);c&&await t[c.appId]}}catch(a){Pe.error(a)}e("config",s,i)}async function sb(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Qu(n);for(const c of o){const l=a.find(f=>f.measurementId===c),u=l&&t[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){Pe.error(i)}}function ib(e,t,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await sb(e,t,n,a,c)}else if(i==="config"){const[a,c]=o;await rb(e,t,n,r,a,c)}else if(i==="consent"){const[a,c]=o;e("consent",a,c)}else if(i==="get"){const[a,c,l]=o;e("get",a,c,l)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){Pe.error(a)}}return s}function ob(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=ib(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function ab(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Io)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb=30,lb=1e3;class ub{constructor(t={},n=lb){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Zu=new ub;function fb(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function db(e){const{appId:t,apiKey:n}=e,r={method:"GET",headers:fb(n)},s=X_.replace("{app-id}",t),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let o="";try{const a=await i.json();a.error?.message&&(o=a.error.message)}catch{}throw Ue.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function hb(e,t=Zu,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw Ue.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Ue.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new gb;return setTimeout(async()=>{a.abort()},Y_),ef({appId:r,apiKey:s,measurementId:i},o,a,t)}async function ef(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=Zu){const{appId:i,measurementId:o}=e;try{await pb(r,t)}catch(a){if(o)return Pe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a?.message}]`),{appId:i,measurementId:o};throw a}try{const a=await db(e);return s.deleteThrottleMetadata(i),a}catch(a){const c=a;if(!mb(c)){if(s.deleteThrottleMetadata(i),o)return Pe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:i,measurementId:o};throw a}const l=Number(c?.customData?.httpStatus)===503?ma(n,s.intervalMillis,cb):ma(n,s.intervalMillis),u={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return s.setThrottleMetadata(i,u),Pe.debug(`Calling attemptFetch again in ${l} millis`),ef(e,u,r,s)}}function pb(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(Ue.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function mb(e){if(!(e instanceof at)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class gb{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function yb(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o={...r,send_to:i};e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _b(){if(Gl())try{await Jl()}catch(e){return Pe.warn(Ue.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}else return Pe.warn(Ue.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function bb(e,t,n,r,s,i,o){const a=hb(e);a.then(d=>{n[d.measurementId]=d.appId,e.options.measurementId&&d.measurementId!==e.options.measurementId&&Pe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>Pe.error(d)),t.push(a);const c=_b().then(d=>{if(d)return r.getId()}),[l,u]=await Promise.all([a,c]);ab(i)||tb(i,l.measurementId),s("js",new Date);const f=o?.config??{};return f[J_]="firebase",f.update=!0,u!=null&&(f[G_]=u),s("config",l.measurementId,f),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(t){this.app=t}_delete(){return delete Xn[this.app.options.appId],Promise.resolve()}}let Xn={},Va=[];const Wa={};let ti="dataLayer",Eb="gtag",qa,tf,za=!1;function vb(){const e=[];if(Kl()&&e.push("This is a browser extension environment."),Vp()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Ue.create("invalid-analytics-context",{errorInfo:t});Pe.warn(n.message)}}function Ib(e,t,n){vb();const r=e.options.appId;if(!r)throw Ue.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Pe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ue.create("no-api-key");if(Xn[r]!=null)throw Ue.create("already-exists",{id:r});if(!za){nb(ti);const{wrappedGtag:i,gtagCore:o}=ob(Xn,Va,Wa,ti,Eb);tf=i,qa=o,za=!0}return Xn[r]=bb(e,Va,Wa,t,qa,ti,n),new wb(e)}function Sb(e=eu()){e=Tt(e);const t=kn(e,os);return t.isInitialized()?t.getImmediate():Tb(e)}function Tb(e,t={}){const n=kn(e,os);if(n.isInitialized()){const s=n.getImmediate();if(on(t,n.getOptions()))return s;throw Ue.create("already-initialized")}return n.initialize({options:t})}function Rb(e,t,n,r){e=Tt(e),yb(tf,Xn[e.app.options.appId],t,n,r).catch(s=>Pe.error(s))}const Ka="@firebase/analytics",Ga="0.10.18";function Ab(){Et(new ot(os,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Ib(r,s,n)},"PUBLIC")),Et(new ot("analytics-internal",e,"PRIVATE")),tt(Ka,Ga),tt(Ka,Ga,"esm2020");function e(t){try{const n=t.getProvider(os).getImmediate();return{logEvent:(r,s,i)=>Rb(n,r,s,i)}}catch(n){throw Ue.create("interop-component-reg-failed",{reason:n})}}}Ab();const Cb={apiKey:"AIzaSyDXi5V3gKUWj6UW1hDLjVWlfPwxWkLUq4s",authDomain:"augment-plus.firebaseapp.com",projectId:"augment-plus",storageBucket:"augment-plus.firebasestorage.app",messagingSenderId:"140434207409",appId:"1:140434207409:web:a00c7629a4a38dce676890",measurementId:"G-S5KT24KKEJ"},nf=Zl(Cb);Sb(nf);const Pb=a_(nf);function rf(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ob}=Object.prototype,{getPrototypeOf:So}=Object,{iterator:Ps,toStringTag:sf}=Symbol,Os=(e=>t=>{const n=Ob.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),We=e=>(e=e.toLowerCase(),t=>Os(t)===e),ks=e=>t=>typeof t===e,{isArray:Nn}=Array,ar=ks("undefined");function br(e){return e!==null&&!ar(e)&&e.constructor!==null&&!ar(e.constructor)&&Oe(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const of=We("ArrayBuffer");function kb(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&of(e.buffer),t}const xb=ks("string"),Oe=ks("function"),af=ks("number"),wr=e=>e!==null&&typeof e=="object",Nb=e=>e===!0||e===!1,Fr=e=>{if(Os(e)!=="object")return!1;const t=So(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(sf in e)&&!(Ps in e)},Db=e=>{if(!wr(e)||br(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Lb=We("Date"),Mb=We("File"),Ub=We("Blob"),Fb=We("FileList"),$b=e=>wr(e)&&Oe(e.pipe),Bb=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Oe(e.append)&&((t=Os(e))==="formdata"||t==="object"&&Oe(e.toString)&&e.toString()==="[object FormData]"))},Hb=We("URLSearchParams"),[jb,Vb,Wb,qb]=["ReadableStream","Request","Response","Headers"].map(We),zb=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Er(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),Nn(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{if(br(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let a;for(r=0;r<o;r++)a=i[r],t.call(null,e[a],a,e)}}function cf(e,t){if(br(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Qt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,lf=e=>!ar(e)&&e!==Qt;function Pi(){const{caseless:e}=lf(this)&&this||{},t={},n=(r,s)=>{const i=e&&cf(t,s)||s;Fr(t[i])&&Fr(r)?t[i]=Pi(t[i],r):Fr(r)?t[i]=Pi({},r):Nn(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Er(arguments[r],n);return t}const Kb=(e,t,n,{allOwnKeys:r}={})=>(Er(t,(s,i)=>{n&&Oe(s)?e[i]=rf(s,n):e[i]=s},{allOwnKeys:r}),e),Gb=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Jb=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Yb=(e,t,n,r)=>{let s,i,o;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=n!==!1&&So(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Xb=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Qb=e=>{if(!e)return null;if(Nn(e))return e;let t=e.length;if(!af(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Zb=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&So(Uint8Array)),ew=(e,t)=>{const r=(e&&e[Ps]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},tw=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},nw=We("HTMLFormElement"),rw=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Ja=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),sw=We("RegExp"),uf=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Er(n,(s,i)=>{let o;(o=t(s,i,e))!==!1&&(r[i]=o||s)}),Object.defineProperties(e,r)},iw=e=>{uf(e,(t,n)=>{if(Oe(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Oe(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ow=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Nn(e)?r(e):r(String(e).split(t)),n},aw=()=>{},cw=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function lw(e){return!!(e&&Oe(e.append)&&e[sf]==="FormData"&&e[Ps])}const uw=e=>{const t=new Array(10),n=(r,s)=>{if(wr(r)){if(t.indexOf(r)>=0)return;if(br(r))return r;if(!("toJSON"in r)){t[s]=r;const i=Nn(r)?[]:{};return Er(r,(o,a)=>{const c=n(o,s+1);!ar(c)&&(i[a]=c)}),t[s]=void 0,i}}return r};return n(e,0)},fw=We("AsyncFunction"),dw=e=>e&&(wr(e)||Oe(e))&&Oe(e.then)&&Oe(e.catch),ff=((e,t)=>e?setImmediate:t?((n,r)=>(Qt.addEventListener("message",({source:s,data:i})=>{s===Qt&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),Qt.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Oe(Qt.postMessage)),hw=typeof queueMicrotask<"u"?queueMicrotask.bind(Qt):typeof process<"u"&&process.nextTick||ff,pw=e=>e!=null&&Oe(e[Ps]),_={isArray:Nn,isArrayBuffer:of,isBuffer:br,isFormData:Bb,isArrayBufferView:kb,isString:xb,isNumber:af,isBoolean:Nb,isObject:wr,isPlainObject:Fr,isEmptyObject:Db,isReadableStream:jb,isRequest:Vb,isResponse:Wb,isHeaders:qb,isUndefined:ar,isDate:Lb,isFile:Mb,isBlob:Ub,isRegExp:sw,isFunction:Oe,isStream:$b,isURLSearchParams:Hb,isTypedArray:Zb,isFileList:Fb,forEach:Er,merge:Pi,extend:Kb,trim:zb,stripBOM:Gb,inherits:Jb,toFlatObject:Yb,kindOf:Os,kindOfTest:We,endsWith:Xb,toArray:Qb,forEachEntry:ew,matchAll:tw,isHTMLForm:nw,hasOwnProperty:Ja,hasOwnProp:Ja,reduceDescriptors:uf,freezeMethods:iw,toObjectSet:ow,toCamelCase:rw,noop:aw,toFiniteNumber:cw,findKey:cf,global:Qt,isContextDefined:lf,isSpecCompliantForm:lw,toJSONObject:uw,isAsyncFn:fw,isThenable:dw,setImmediate:ff,asap:hw,isIterable:pw};function W(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}_.inherits(W,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.status}}});const df=W.prototype,hf={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{hf[e]={value:e}});Object.defineProperties(W,hf);Object.defineProperty(df,"isAxiosError",{value:!0});W.from=(e,t,n,r,s,i)=>{const o=Object.create(df);return _.toFlatObject(e,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),W.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const mw=null;function Oi(e){return _.isPlainObject(e)||_.isArray(e)}function pf(e){return _.endsWith(e,"[]")?e.slice(0,-2):e}function Ya(e,t,n){return e?e.concat(t).map(function(s,i){return s=pf(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function gw(e){return _.isArray(e)&&!e.some(Oi)}const yw=_.toFlatObject(_,{},null,function(t){return/^is[A-Z]/.test(t)});function xs(e,t,n){if(!_.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=_.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,S){return!_.isUndefined(S[b])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(t);if(!_.isFunction(s))throw new TypeError("visitor must be a function");function l(y){if(y===null)return"";if(_.isDate(y))return y.toISOString();if(_.isBoolean(y))return y.toString();if(!c&&_.isBlob(y))throw new W("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(y)||_.isTypedArray(y)?c&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function u(y,b,S){let A=y;if(y&&!S&&typeof y=="object"){if(_.endsWith(b,"{}"))b=r?b:b.slice(0,-2),y=JSON.stringify(y);else if(_.isArray(y)&&gw(y)||(_.isFileList(y)||_.endsWith(b,"[]"))&&(A=_.toArray(y)))return b=pf(b),A.forEach(function(O,D){!(_.isUndefined(O)||O===null)&&t.append(o===!0?Ya([b],D,i):o===null?b:b+"[]",l(O))}),!1}return Oi(y)?!0:(t.append(Ya(S,b,i),l(y)),!1)}const f=[],d=Object.assign(yw,{defaultVisitor:u,convertValue:l,isVisitable:Oi});function m(y,b){if(!_.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+b.join("."));f.push(y),_.forEach(y,function(A,R){(!(_.isUndefined(A)||A===null)&&s.call(t,A,_.isString(R)?R.trim():R,b,d))===!0&&m(A,b?b.concat(R):[R])}),f.pop()}}if(!_.isObject(e))throw new TypeError("data must be an object");return m(e),t}function Xa(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function To(e,t){this._pairs=[],e&&xs(e,this,t)}const mf=To.prototype;mf.append=function(t,n){this._pairs.push([t,n])};mf.toString=function(t){const n=t?function(r){return t.call(this,r,Xa)}:Xa;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function _w(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function gf(e,t,n){if(!t)return e;const r=n&&n.encode||_w;_.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(s?i=s(t,n):i=_.isURLSearchParams(t)?t.toString():new To(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Qa{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){_.forEach(this.handlers,function(r){r!==null&&t(r)})}}const yf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},bw=typeof URLSearchParams<"u"?URLSearchParams:To,ww=typeof FormData<"u"?FormData:null,Ew=typeof Blob<"u"?Blob:null,vw={isBrowser:!0,classes:{URLSearchParams:bw,FormData:ww,Blob:Ew},protocols:["http","https","file","blob","url","data"]},Ro=typeof window<"u"&&typeof document<"u",ki=typeof navigator=="object"&&navigator||void 0,Iw=Ro&&(!ki||["ReactNative","NativeScript","NS"].indexOf(ki.product)<0),Sw=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Tw=Ro&&window.location.href||"http://localhost",Rw=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ro,hasStandardBrowserEnv:Iw,hasStandardBrowserWebWorkerEnv:Sw,navigator:ki,origin:Tw},Symbol.toStringTag,{value:"Module"})),ye={...Rw,...vw};function Aw(e,t){return xs(e,new ye.classes.URLSearchParams,{visitor:function(n,r,s,i){return ye.isNode&&_.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}function Cw(e){return _.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Pw(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function _f(e){function t(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&_.isArray(s)?s.length:o,c?(_.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!_.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&_.isArray(s[o])&&(s[o]=Pw(s[o])),!a)}if(_.isFormData(e)&&_.isFunction(e.entries)){const n={};return _.forEachEntry(e,(r,s)=>{t(Cw(r),s,n,0)}),n}return null}function Ow(e,t,n){if(_.isString(e))try{return(t||JSON.parse)(e),_.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const vr={transitional:yf,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=_.isObject(t);if(i&&_.isHTMLForm(t)&&(t=new FormData(t)),_.isFormData(t))return s?JSON.stringify(_f(t)):t;if(_.isArrayBuffer(t)||_.isBuffer(t)||_.isStream(t)||_.isFile(t)||_.isBlob(t)||_.isReadableStream(t))return t;if(_.isArrayBufferView(t))return t.buffer;if(_.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Aw(t,this.formSerializer).toString();if((a=_.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return xs(a?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Ow(t)):t}],transformResponse:[function(t){const n=this.transitional||vr.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(_.isResponse(t)||_.isReadableStream(t))return t;if(t&&_.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(a){if(o)throw a.name==="SyntaxError"?W.from(a,W.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ye.classes.FormData,Blob:ye.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};_.forEach(["delete","get","head","post","put","patch"],e=>{vr.headers[e]={}});const kw=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),xw=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&kw[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Za=Symbol("internals");function Fn(e){return e&&String(e).trim().toLowerCase()}function $r(e){return e===!1||e==null?e:_.isArray(e)?e.map($r):String(e)}function Nw(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Dw=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ni(e,t,n,r,s){if(_.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!_.isString(t)){if(_.isString(r))return t.indexOf(r)!==-1;if(_.isRegExp(r))return r.test(t)}}function Lw(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Mw(e,t){const n=_.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}let ke=class{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(a,c,l){const u=Fn(c);if(!u)throw new Error("header name must be a non-empty string");const f=_.findKey(s,u);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||c]=$r(a))}const o=(a,c)=>_.forEach(a,(l,u)=>i(l,u,c));if(_.isPlainObject(t)||t instanceof this.constructor)o(t,n);else if(_.isString(t)&&(t=t.trim())&&!Dw(t))o(xw(t),n);else if(_.isObject(t)&&_.isIterable(t)){let a={},c,l;for(const u of t){if(!_.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[l=u[0]]=(c=a[l])?_.isArray(c)?[...c,u[1]]:[c,u[1]]:u[1]}o(a,n)}else t!=null&&i(n,t,r);return this}get(t,n){if(t=Fn(t),t){const r=_.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Nw(s);if(_.isFunction(n))return n.call(this,s,r);if(_.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Fn(t),t){const r=_.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ni(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=Fn(o),o){const a=_.findKey(r,o);a&&(!n||ni(r,r[a],a,n))&&(delete r[a],s=!0)}}return _.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||ni(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return _.forEach(this,(s,i)=>{const o=_.findKey(r,i);if(o){n[o]=$r(s),delete n[i];return}const a=t?Lw(i):String(i).trim();a!==i&&delete n[i],n[a]=$r(s),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return _.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&_.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Za]=this[Za]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Fn(o);r[a]||(Mw(s,o),r[a]=!0)}return _.isArray(t)?t.forEach(i):i(t),this}};ke.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.reduceDescriptors(ke.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});_.freezeMethods(ke);function ri(e,t){const n=this||vr,r=t||n,s=ke.from(r.headers);let i=r.data;return _.forEach(e,function(a){i=a.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function bf(e){return!!(e&&e.__CANCEL__)}function Dn(e,t,n){W.call(this,e??"canceled",W.ERR_CANCELED,t,n),this.name="CanceledError"}_.inherits(Dn,W,{__CANCEL__:!0});function wf(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new W("Request failed with status code "+n.status,[W.ERR_BAD_REQUEST,W.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Uw(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Fw(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let f=i,d=0;for(;f!==s;)d+=n[f++],f=f%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),l-o<t)return;const m=u&&l-u;return m?Math.round(d*1e3/m):void 0}}function $w(e,t){let n=0,r=1e3/t,s,i;const o=(l,u=Date.now())=>{n=u,s=null,i&&(clearTimeout(i),i=null),e(...l)};return[(...l)=>{const u=Date.now(),f=u-n;f>=r?o(l,u):(s=l,i||(i=setTimeout(()=>{i=null,o(s)},r-f)))},()=>s&&o(s)]}const as=(e,t,n=3)=>{let r=0;const s=Fw(50,250);return $w(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,c=o-r,l=s(c),u=o<=a;r=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:i,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(f)},n)},ec=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},tc=e=>(...t)=>_.asap(()=>e(...t)),Bw=ye.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,ye.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(ye.origin),ye.navigator&&/(msie|trident)/i.test(ye.navigator.userAgent)):()=>!0,Hw=ye.hasStandardBrowserEnv?{write(e,t,n,r,s,i){const o=[e+"="+encodeURIComponent(t)];_.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),_.isString(r)&&o.push("path="+r),_.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function jw(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Vw(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ef(e,t,n){let r=!jw(t);return e&&(r||n==!1)?Vw(e,t):t}const nc=e=>e instanceof ke?{...e}:e;function un(e,t){t=t||{};const n={};function r(l,u,f,d){return _.isPlainObject(l)&&_.isPlainObject(u)?_.merge.call({caseless:d},l,u):_.isPlainObject(u)?_.merge({},u):_.isArray(u)?u.slice():u}function s(l,u,f,d){if(_.isUndefined(u)){if(!_.isUndefined(l))return r(void 0,l,f,d)}else return r(l,u,f,d)}function i(l,u){if(!_.isUndefined(u))return r(void 0,u)}function o(l,u){if(_.isUndefined(u)){if(!_.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,f){if(f in t)return r(l,u);if(f in e)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u,f)=>s(nc(l),nc(u),f,!0)};return _.forEach(Object.keys({...e,...t}),function(u){const f=c[u]||s,d=f(e[u],t[u],u);_.isUndefined(d)&&f!==a||(n[u]=d)}),n}const vf=e=>{const t=un({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:a}=t;t.headers=o=ke.from(o),t.url=gf(Ef(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let c;if(_.isFormData(n)){if(ye.hasStandardBrowserEnv||ye.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((c=o.getContentType())!==!1){const[l,...u]=c?c.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([l||"multipart/form-data",...u].join("; "))}}if(ye.hasStandardBrowserEnv&&(r&&_.isFunction(r)&&(r=r(t)),r||r!==!1&&Bw(t.url))){const l=s&&i&&Hw.read(i);l&&o.set(s,l)}return t},Ww=typeof XMLHttpRequest<"u",qw=Ww&&function(e){return new Promise(function(n,r){const s=vf(e);let i=s.data;const o=ke.from(s.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:l}=s,u,f,d,m,y;function b(){m&&m(),y&&y(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let S=new XMLHttpRequest;S.open(s.method.toUpperCase(),s.url,!0),S.timeout=s.timeout;function A(){if(!S)return;const O=ke.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),F={data:!a||a==="text"||a==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:O,config:e,request:S};wf(function(G){n(G),b()},function(G){r(G),b()},F),S=null}"onloadend"in S?S.onloadend=A:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout(A)},S.onabort=function(){S&&(r(new W("Request aborted",W.ECONNABORTED,e,S)),S=null)},S.onerror=function(){r(new W("Network Error",W.ERR_NETWORK,e,S)),S=null},S.ontimeout=function(){let D=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const F=s.transitional||yf;s.timeoutErrorMessage&&(D=s.timeoutErrorMessage),r(new W(D,F.clarifyTimeoutError?W.ETIMEDOUT:W.ECONNABORTED,e,S)),S=null},i===void 0&&o.setContentType(null),"setRequestHeader"in S&&_.forEach(o.toJSON(),function(D,F){S.setRequestHeader(F,D)}),_.isUndefined(s.withCredentials)||(S.withCredentials=!!s.withCredentials),a&&a!=="json"&&(S.responseType=s.responseType),l&&([d,y]=as(l,!0),S.addEventListener("progress",d)),c&&S.upload&&([f,m]=as(c),S.upload.addEventListener("progress",f),S.upload.addEventListener("loadend",m)),(s.cancelToken||s.signal)&&(u=O=>{S&&(r(!O||O.type?new Dn(null,e,S):O),S.abort(),S=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const R=Uw(s.url);if(R&&ye.protocols.indexOf(R)===-1){r(new W("Unsupported protocol "+R+":",W.ERR_BAD_REQUEST,e));return}S.send(i||null)})},zw=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const i=function(l){if(!s){s=!0,a();const u=l instanceof Error?l:this.reason;r.abort(u instanceof W?u:new Dn(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{o=null,i(new W(`timeout ${t} of ms exceeded`,W.ETIMEDOUT))},t);const a=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(i):l.removeEventListener("abort",i)}),e=null)};e.forEach(l=>l.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>_.asap(a),c}},Kw=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},Gw=async function*(e,t){for await(const n of Jw(e))yield*Kw(n,t)},Jw=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},rc=(e,t,n,r)=>{const s=Gw(e,t);let i=0,o,a=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:l,value:u}=await s.next();if(l){a(),c.close();return}let f=u.byteLength;if(n){let d=i+=f;n(d)}c.enqueue(new Uint8Array(u))}catch(l){throw a(l),l}},cancel(c){return a(c),s.return()}},{highWaterMark:2})},Ns=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",If=Ns&&typeof ReadableStream=="function",Yw=Ns&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Sf=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Xw=If&&Sf(()=>{let e=!1;const t=new Request(ye.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),sc=64*1024,xi=If&&Sf(()=>_.isReadableStream(new Response("").body)),cs={stream:xi&&(e=>e.body)};Ns&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!cs[t]&&(cs[t]=_.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new W(`Response type '${t}' is not supported`,W.ERR_NOT_SUPPORT,r)})})})(new Response);const Qw=async e=>{if(e==null)return 0;if(_.isBlob(e))return e.size;if(_.isSpecCompliantForm(e))return(await new Request(ye.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(_.isArrayBufferView(e)||_.isArrayBuffer(e))return e.byteLength;if(_.isURLSearchParams(e)&&(e=e+""),_.isString(e))return(await Yw(e)).byteLength},Zw=async(e,t)=>{const n=_.toFiniteNumber(e.getContentLength());return n??Qw(t)},eE=Ns&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:c,responseType:l,headers:u,withCredentials:f="same-origin",fetchOptions:d}=vf(e);l=l?(l+"").toLowerCase():"text";let m=zw([s,i&&i.toAbortSignal()],o),y;const b=m&&m.unsubscribe&&(()=>{m.unsubscribe()});let S;try{if(c&&Xw&&n!=="get"&&n!=="head"&&(S=await Zw(u,r))!==0){let F=new Request(t,{method:"POST",body:r,duplex:"half"}),te;if(_.isFormData(r)&&(te=F.headers.get("content-type"))&&u.setContentType(te),F.body){const[G,q]=ec(S,as(tc(c)));r=rc(F.body,sc,G,q)}}_.isString(f)||(f=f?"include":"omit");const A="credentials"in Request.prototype;y=new Request(t,{...d,signal:m,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:A?f:void 0});let R=await fetch(y,d);const O=xi&&(l==="stream"||l==="response");if(xi&&(a||O&&b)){const F={};["status","statusText","headers"].forEach(K=>{F[K]=R[K]});const te=_.toFiniteNumber(R.headers.get("content-length")),[G,q]=a&&ec(te,as(tc(a),!0))||[];R=new Response(rc(R.body,sc,G,()=>{q&&q(),b&&b()}),F)}l=l||"text";let D=await cs[_.findKey(cs,l)||"text"](R,e);return!O&&b&&b(),await new Promise((F,te)=>{wf(F,te,{data:D,headers:ke.from(R.headers),status:R.status,statusText:R.statusText,config:e,request:y})})}catch(A){throw b&&b(),A&&A.name==="TypeError"&&/Load failed|fetch/i.test(A.message)?Object.assign(new W("Network Error",W.ERR_NETWORK,e,y),{cause:A.cause||A}):W.from(A,A&&A.code,e,y)}}),Ni={http:mw,xhr:qw,fetch:eE};_.forEach(Ni,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const ic=e=>`- ${e}`,tE=e=>_.isFunction(e)||e===null||e===!1,Tf={getAdapter:e=>{e=_.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let i=0;i<t;i++){n=e[i];let o;if(r=n,!tE(n)&&(r=Ni[(o=String(n)).toLowerCase()],r===void 0))throw new W(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=t?i.length>1?`since :
`+i.map(ic).join(`
`):" "+ic(i[0]):"as no adapter specified";throw new W("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Ni};function si(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Dn(null,e)}function oc(e){return si(e),e.headers=ke.from(e.headers),e.data=ri.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Tf.getAdapter(e.adapter||vr.adapter)(e).then(function(r){return si(e),r.data=ri.call(e,e.transformResponse,r),r.headers=ke.from(r.headers),r},function(r){return bf(r)||(si(e),r&&r.response&&(r.response.data=ri.call(e,e.transformResponse,r.response),r.response.headers=ke.from(r.response.headers))),Promise.reject(r)})}const Rf="1.11.0",Ds={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ds[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ac={};Ds.transitional=function(t,n,r){function s(i,o){return"[Axios v"+Rf+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(t===!1)throw new W(s(o," has been removed"+(n?" in "+n:"")),W.ERR_DEPRECATED);return n&&!ac[o]&&(ac[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,a):!0}};Ds.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function nE(e,t,n){if(typeof e!="object")throw new W("options must be an object",W.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const a=e[i],c=a===void 0||o(a,i,e);if(c!==!0)throw new W("option "+i+" must be "+c,W.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new W("Unknown option "+i,W.ERR_BAD_OPTION)}}const Br={assertOptions:nE,validators:Ds},Ye=Br.validators;let sn=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Qa,response:new Qa}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=un(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Br.assertOptions(r,{silentJSONParsing:Ye.transitional(Ye.boolean),forcedJSONParsing:Ye.transitional(Ye.boolean),clarifyTimeoutError:Ye.transitional(Ye.boolean)},!1),s!=null&&(_.isFunction(s)?n.paramsSerializer={serialize:s}:Br.assertOptions(s,{encode:Ye.function,serialize:Ye.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Br.assertOptions(n,{baseUrl:Ye.spelling("baseURL"),withXsrfToken:Ye.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&_.merge(i.common,i[n.method]);i&&_.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=ke.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(c=c&&b.synchronous,a.unshift(b.fulfilled,b.rejected))});const l=[];this.interceptors.response.forEach(function(b){l.push(b.fulfilled,b.rejected)});let u,f=0,d;if(!c){const y=[oc.bind(this),void 0];for(y.unshift(...a),y.push(...l),d=y.length,u=Promise.resolve(n);f<d;)u=u.then(y[f++],y[f++]);return u}d=a.length;let m=n;for(f=0;f<d;){const y=a[f++],b=a[f++];try{m=y(m)}catch(S){b.call(this,S);break}}try{u=oc.call(this,m)}catch(y){return Promise.reject(y)}for(f=0,d=l.length;f<d;)u=u.then(l[f++],l[f++]);return u}getUri(t){t=un(this.defaults,t);const n=Ef(t.baseURL,t.url,t.allowAbsoluteUrls);return gf(n,t.params,t.paramsSerializer)}};_.forEach(["delete","get","head","options"],function(t){sn.prototype[t]=function(n,r){return this.request(un(r||{},{method:t,url:n,data:(r||{}).data}))}});_.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,a){return this.request(un(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}sn.prototype[t]=n(),sn.prototype[t+"Form"]=n(!0)});let rE=class Af{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,a){r.reason||(r.reason=new Dn(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Af(function(s){t=s}),cancel:t}}};function sE(e){return function(n){return e.apply(null,n)}}function iE(e){return _.isObject(e)&&e.isAxiosError===!0}const Di={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Di).forEach(([e,t])=>{Di[t]=e});function Cf(e){const t=new sn(e),n=rf(sn.prototype.request,t);return _.extend(n,sn.prototype,t,{allOwnKeys:!0}),_.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Cf(un(e,s))},n}const fe=Cf(vr);fe.Axios=sn;fe.CanceledError=Dn;fe.CancelToken=rE;fe.isCancel=bf;fe.VERSION=Rf;fe.toFormData=xs;fe.AxiosError=W;fe.Cancel=fe.CanceledError;fe.all=function(t){return Promise.all(t)};fe.spread=sE;fe.isAxiosError=iE;fe.mergeConfig=un;fe.AxiosHeaders=ke;fe.formToJSON=e=>_f(_.isHTMLForm(e)?new FormData(e):e);fe.getAdapter=Tf.getAdapter;fe.HttpStatusCode=Di;fe.default=fe;const{Axios:Mv,AxiosError:Uv,CanceledError:Fv,isCancel:$v,CancelToken:Bv,VERSION:Hv,all:jv,Cancel:Vv,isAxiosError:Wv,spread:qv,toFormData:zv,AxiosHeaders:Kv,HttpStatusCode:Gv,formToJSON:Jv,getAdapter:Yv,mergeConfig:Xv}=fe,oE=fe.create({baseURL:`https://${window.location.hostname}/api`,timeout:15e3,headers:{"Content-Type":"application/json",Accept:"application/json","X-Requested-With":"XMLHttpRequest","Cache-Control":"no-cache",Pragma:"no-cache"}}),aE=Sp("main",()=>{const e=$t({}),t=$t({isInitialized:!1}),n=$t({uid:null}),r={};async function s(){t.isInitialized=!0,console.info("Store initialized"),await i()}async function i(){try{let c=await oE.get(`/domain/info?domain=${window.location.hostname}&user=${n.uid}`);Object.assign(e,c.data)}catch(c){console.error("Error Fetching Domain Data:",c)}}function o(c){n.uid=c}function a(){}return{...r,init:s,setUser:o,clearUser:a}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const _n=typeof document<"u";function Pf(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function cE(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Pf(e.default)}const Q=Object.assign;function ii(e,t){const n={};for(const r in t){const s=t[r];n[r]=Ve(s)?s.map(e):e(s)}return n}const Qn=()=>{},Ve=Array.isArray,Of=/#/g,lE=/&/g,uE=/\//g,fE=/=/g,dE=/\?/g,kf=/\+/g,hE=/%5B/g,pE=/%5D/g,xf=/%5E/g,mE=/%60/g,Nf=/%7B/g,gE=/%7C/g,Df=/%7D/g,yE=/%20/g;function Ao(e){return encodeURI(""+e).replace(gE,"|").replace(hE,"[").replace(pE,"]")}function _E(e){return Ao(e).replace(Nf,"{").replace(Df,"}").replace(xf,"^")}function Li(e){return Ao(e).replace(kf,"%2B").replace(yE,"+").replace(Of,"%23").replace(lE,"%26").replace(mE,"`").replace(Nf,"{").replace(Df,"}").replace(xf,"^")}function bE(e){return Li(e).replace(fE,"%3D")}function wE(e){return Ao(e).replace(Of,"%23").replace(dE,"%3F")}function EE(e){return e==null?"":wE(e).replace(uE,"%2F")}function cr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const vE=/\/$/,IE=e=>e.replace(vE,"");function oi(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=AE(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:cr(o)}}function SE(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function cc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function TE(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Pn(t.matched[r],n.matched[s])&&Lf(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Pn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Lf(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!RE(e[n],t[n]))return!1;return!0}function RE(e,t){return Ve(e)?lc(e,t):Ve(t)?lc(t,e):e===t}function lc(e,t){return Ve(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function AE(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Pt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var lr;(function(e){e.pop="pop",e.push="push"})(lr||(lr={}));var Zn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Zn||(Zn={}));function CE(e){if(!e)if(_n){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),IE(e)}const PE=/^[^#]+#/;function OE(e,t){return e.replace(PE,"#")+t}function kE(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Ls=()=>({left:window.scrollX,top:window.scrollY});function xE(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=kE(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function uc(e,t){return(history.state?history.state.position-t:-1)+e}const Mi=new Map;function NE(e,t){Mi.set(e,t)}function DE(e){const t=Mi.get(e);return Mi.delete(e),t}let LE=()=>location.protocol+"//"+location.host;function Mf(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),cc(c,"")}return cc(n,e)+r+s}function ME(e,t,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const m=Mf(e,location),y=n.value,b=t.value;let S=0;if(d){if(n.value=m,t.value=d,o&&o===y){o=null;return}S=b?d.position-b.position:0}else r(m);s.forEach(A=>{A(n.value,y,{delta:S,type:lr.pop,direction:S?S>0?Zn.forward:Zn.back:Zn.unknown})})};function c(){o=n.value}function l(d){s.push(d);const m=()=>{const y=s.indexOf(d);y>-1&&s.splice(y,1)};return i.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(Q({},d.state,{scroll:Ls()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function fc(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Ls():null}}function UE(e){const{history:t,location:n}=window,r={value:Mf(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:LE()+e+c;try{t[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(c,l){const u=Q({},t.state,fc(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Q({},s.value,t.state,{forward:c,scroll:Ls()});i(u.current,u,!0);const f=Q({},fc(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function FE(e){e=CE(e);const t=UE(e),n=ME(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Q({location:"",base:e,go:r,createHref:OE.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function $E(e){return typeof e=="string"||e&&typeof e=="object"}function Uf(e){return typeof e=="string"||typeof e=="symbol"}const Ff=Symbol("");var dc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(dc||(dc={}));function On(e,t){return Q(new Error,{type:e,[Ff]:!0},t)}function ut(e,t){return e instanceof Error&&Ff in e&&(t==null||!!(e.type&t))}const hc="[^/]+?",BE={sensitive:!1,strict:!1,start:!0,end:!0},HE=/[.+*?^${}()[\]/\\]/g;function jE(e,t){const n=Q({},BE,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const d=l[f];let m=40+(n.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(HE,"\\$&"),m+=40;else if(d.type===1){const{value:y,repeatable:b,optional:S,regexp:A}=d;i.push({name:y,repeatable:b,optional:S});const R=A||hc;if(R!==hc){m+=10;try{new RegExp(`(${R})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${y}" (${R}): `+D.message)}}let O=b?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;f||(O=S&&l.length<2?`(?:/${O})`:"/"+O),S&&(O+="?"),s+=O,m+=20,S&&(m+=-8),b&&(m+=-20),R===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",y=i[d-1];f[y.name]=m&&y.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const d of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:y,repeatable:b,optional:S}=m,A=y in l?l[y]:"";if(Ve(A)&&!b)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const R=Ve(A)?A.join("/"):A;if(!R)if(S)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);u+=R}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function VE(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function $f(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=VE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(pc(r))return 1;if(pc(s))return-1}return s.length-r.length}function pc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const WE={type:0,value:""},qE=/[a-zA-Z0-9_]/;function zE(e){if(!e)return[[]];if(e==="/")return[[WE]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:qE.test(c)?d():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function KE(e,t,n){const r=jE(zE(e.path),n),s=Q(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function GE(e,t){const n=[],r=new Map;t=_c({strict:!1,end:!0,sensitive:!1},t);function s(f){return r.get(f)}function i(f,d,m){const y=!m,b=gc(f);b.aliasOf=m&&m.record;const S=_c(t,f),A=[b];if("alias"in f){const D=typeof f.alias=="string"?[f.alias]:f.alias;for(const F of D)A.push(gc(Q({},b,{components:m?m.record.components:b.components,path:F,aliasOf:m?m.record:b})))}let R,O;for(const D of A){const{path:F}=D;if(d&&F[0]!=="/"){const te=d.record.path,G=te[te.length-1]==="/"?"":"/";D.path=d.record.path+(F&&G+F)}if(R=KE(D,d,S),m?m.alias.push(R):(O=O||R,O!==R&&O.alias.push(R),y&&f.name&&!yc(R)&&o(f.name)),Bf(R)&&c(R),b.children){const te=b.children;for(let G=0;G<te.length;G++)i(te[G],R,m&&m.children[G])}m=m||R}return O?()=>{o(O)}:Qn}function o(f){if(Uf(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const d=XE(f,n);n.splice(d,0,f),f.record.name&&!yc(f)&&r.set(f.record.name,f)}function l(f,d){let m,y={},b,S;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw On(1,{location:f});S=m.record.name,y=Q(mc(d.params,m.keys.filter(O=>!O.optional).concat(m.parent?m.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),f.params&&mc(f.params,m.keys.map(O=>O.name))),b=m.stringify(y)}else if(f.path!=null)b=f.path,m=n.find(O=>O.re.test(b)),m&&(y=m.parse(b),S=m.record.name);else{if(m=d.name?r.get(d.name):n.find(O=>O.re.test(d.path)),!m)throw On(1,{location:f,currentLocation:d});S=m.record.name,y=Q({},d.params,f.params),b=m.stringify(y)}const A=[];let R=m;for(;R;)A.unshift(R.record),R=R.parent;return{name:S,path:b,params:y,matched:A,meta:YE(A)}}e.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function mc(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function gc(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:JE(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function JE(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function yc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function YE(e){return e.reduce((t,n)=>Q(t,n.meta),{})}function _c(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function XE(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;$f(e,t[i])<0?r=i:n=i+1}const s=QE(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function QE(e){let t=e;for(;t=t.parent;)if(Bf(t)&&$f(e,t)===0)return t}function Bf({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ZE(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(kf," "),o=i.indexOf("="),a=cr(o<0?i:i.slice(0,o)),c=o<0?null:cr(i.slice(o+1));if(a in t){let l=t[a];Ve(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function bc(e){let t="";for(let n in e){const r=e[n];if(n=bE(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ve(r)?r.map(i=>i&&Li(i)):[r&&Li(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function ev(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ve(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const tv=Symbol(""),wc=Symbol(""),Co=Symbol(""),Hf=Symbol(""),Ui=Symbol("");function $n(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Nt(e,t,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=d=>{d===!1?c(On(4,{from:n,to:t})):d instanceof Error?c(d):$E(d)?c(On(2,{from:t,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>e.call(r&&r.instances[s],t,n,l));let f=Promise.resolve(u);e.length<3&&(f=f.then(l)),f.catch(d=>c(d))})}function ai(e,t,n,r,s=i=>i()){const i=[];for(const o of e)for(const a in o.components){let c=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Pf(c)){const u=(c.__vccOpts||c)[t];u&&i.push(Nt(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=cE(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const m=(f.__vccOpts||f)[t];return m&&Nt(m,n,r,o,a,s)()}))}}return i}function Ec(e){const t=et(Co),n=et(Hf),r=Ae(()=>{const c=en(e.to);return t.resolve(c)}),s=Ae(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Pn.bind(null,u));if(d>-1)return d;const m=vc(c[l-2]);return l>1&&vc(u)===m&&f[f.length-1].path!==m?f.findIndex(Pn.bind(null,c[l-2])):d}),i=Ae(()=>s.value>-1&&ov(n.params,r.value.params)),o=Ae(()=>s.value>-1&&s.value===n.matched.length-1&&Lf(n.params,r.value.params));function a(c={}){if(iv(c)){const l=t[en(e.replace)?"replace":"push"](en(e.to)).catch(Qn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:Ae(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function nv(e){return e.length===1?e[0]:e}const rv=il({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ec,setup(e,{slots:t}){const n=$t(Ec(e)),{options:r}=et(Co),s=Ae(()=>({[Ic(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ic(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&nv(t.default(n));return e.custom?i:Ll("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),sv=rv;function iv(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ov(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ve(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function vc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ic=(e,t,n)=>e??t??n,av=il({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=et(Ui),s=Ae(()=>e.route||r.value),i=et(wc,0),o=Ae(()=>{let l=en(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Ae(()=>s.value.matched[o.value]);Or(wc,Ae(()=>o.value+1)),Or(tv,a),Or(Ui,s);const c=fr();return nn(()=>[c.value,a.value,e.name],([l,u,f],[d,m,y])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!Pn(u,m)||!d)&&(u.enterCallbacks[f]||[]).forEach(b=>b(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,f=a.value,d=f&&f.components[u];if(!d)return Sc(n.default,{Component:d,route:l});const m=f.props[u],y=m?m===!0?l.params:typeof m=="function"?m(l):m:null,S=Ll(d,Q({},y,t,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Sc(n.default,{Component:S,route:l})||S}}});function Sc(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const cv=av;function lv(e){const t=GE(e.routes,e),n=e.parseQuery||ZE,r=e.stringifyQuery||bc,s=e.history,i=$n(),o=$n(),a=$n(),c=Yc(Pt);let l=Pt;_n&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ii.bind(null,E=>""+E),f=ii.bind(null,EE),d=ii.bind(null,cr);function m(E,L){let x,M;return Uf(E)?(x=t.getRecordMatcher(E),M=L):M=E,t.addRoute(M,x)}function y(E){const L=t.getRecordMatcher(E);L&&t.removeRoute(L)}function b(){return t.getRoutes().map(E=>E.record)}function S(E){return!!t.getRecordMatcher(E)}function A(E,L){if(L=Q({},L||c.value),typeof E=="string"){const g=oi(n,E,L.path),w=t.resolve({path:g.path},L),I=s.createHref(g.fullPath);return Q(g,w,{params:d(w.params),hash:cr(g.hash),redirectedFrom:void 0,href:I})}let x;if(E.path!=null)x=Q({},E,{path:oi(n,E.path,L.path).path});else{const g=Q({},E.params);for(const w in g)g[w]==null&&delete g[w];x=Q({},E,{params:f(g)}),L.params=f(L.params)}const M=t.resolve(x,L),ne=E.hash||"";M.params=u(d(M.params));const h=SE(r,Q({},E,{hash:_E(ne),path:M.path})),p=s.createHref(h);return Q({fullPath:h,hash:ne,query:r===bc?ev(E.query):E.query||{}},M,{redirectedFrom:void 0,href:p})}function R(E){return typeof E=="string"?oi(n,E,c.value.path):Q({},E)}function O(E,L){if(l!==E)return On(8,{from:L,to:E})}function D(E){return G(E)}function F(E){return D(Q(R(E),{replace:!0}))}function te(E){const L=E.matched[E.matched.length-1];if(L&&L.redirect){const{redirect:x}=L;let M=typeof x=="function"?x(E):x;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=R(M):{path:M},M.params={}),Q({query:E.query,hash:E.hash,params:M.path!=null?{}:E.params},M)}}function G(E,L){const x=l=A(E),M=c.value,ne=E.state,h=E.force,p=E.replace===!0,g=te(x);if(g)return G(Q(R(g),{state:typeof g=="object"?Q({},ne,g.state):ne,force:h,replace:p}),L||x);const w=x;w.redirectedFrom=L;let I;return!h&&TE(r,M,x)&&(I=On(16,{to:w,from:M}),qe(M,M,!0,!1)),(I?Promise.resolve(I):le(w,M)).catch(v=>ut(v)?ut(v,2)?v:At(v):X(v,w,M)).then(v=>{if(v){if(ut(v,2))return G(Q({replace:p},R(v.to),{state:typeof v.to=="object"?Q({},ne,v.to.state):ne,force:h}),L||w)}else v=xe(w,M,!0,p,ne);return be(w,M,v),v})}function q(E,L){const x=O(E,L);return x?Promise.reject(x):Promise.resolve()}function K(E){const L=pn.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(E):E()}function le(E,L){let x;const[M,ne,h]=uv(E,L);x=ai(M.reverse(),"beforeRouteLeave",E,L);for(const g of M)g.leaveGuards.forEach(w=>{x.push(Nt(w,E,L))});const p=q.bind(null,E,L);return x.push(p),Fe(x).then(()=>{x=[];for(const g of i.list())x.push(Nt(g,E,L));return x.push(p),Fe(x)}).then(()=>{x=ai(ne,"beforeRouteUpdate",E,L);for(const g of ne)g.updateGuards.forEach(w=>{x.push(Nt(w,E,L))});return x.push(p),Fe(x)}).then(()=>{x=[];for(const g of h)if(g.beforeEnter)if(Ve(g.beforeEnter))for(const w of g.beforeEnter)x.push(Nt(w,E,L));else x.push(Nt(g.beforeEnter,E,L));return x.push(p),Fe(x)}).then(()=>(E.matched.forEach(g=>g.enterCallbacks={}),x=ai(h,"beforeRouteEnter",E,L,K),x.push(p),Fe(x))).then(()=>{x=[];for(const g of o.list())x.push(Nt(g,E,L));return x.push(p),Fe(x)}).catch(g=>ut(g,8)?g:Promise.reject(g))}function be(E,L,x){a.list().forEach(M=>K(()=>M(E,L,x)))}function xe(E,L,x,M,ne){const h=O(E,L);if(h)return h;const p=L===Pt,g=_n?history.state:{};x&&(M||p?s.replace(E.fullPath,Q({scroll:p&&g&&g.scroll},ne)):s.push(E.fullPath,ne)),c.value=E,qe(E,L,x,p),At()}let Ie;function qt(){Ie||(Ie=s.listen((E,L,x)=>{if(!Ir.listening)return;const M=A(E),ne=te(M);if(ne){G(Q(ne,{replace:!0,force:!0}),M).catch(Qn);return}l=M;const h=c.value;_n&&NE(uc(h.fullPath,x.delta),Ls()),le(M,h).catch(p=>ut(p,12)?p:ut(p,2)?(G(Q(R(p.to),{force:!0}),M).then(g=>{ut(g,20)&&!x.delta&&x.type===lr.pop&&s.go(-1,!1)}).catch(Qn),Promise.reject()):(x.delta&&s.go(-x.delta,!1),X(p,M,h))).then(p=>{p=p||xe(M,h,!1),p&&(x.delta&&!ut(p,8)?s.go(-x.delta,!1):x.type===lr.pop&&ut(p,20)&&s.go(-1,!1)),be(M,h,p)}).catch(Qn)}))}let Rt=$n(),ce=$n(),z;function X(E,L,x){At(E);const M=ce.list();return M.length?M.forEach(ne=>ne(E,L,x)):console.error(E),Promise.reject(E)}function ct(){return z&&c.value!==Pt?Promise.resolve():new Promise((E,L)=>{Rt.add([E,L])})}function At(E){return z||(z=!E,qt(),Rt.list().forEach(([L,x])=>E?x(E):L()),Rt.reset()),E}function qe(E,L,x,M){const{scrollBehavior:ne}=e;if(!_n||!ne)return Promise.resolve();const h=!x&&DE(uc(E.fullPath,0))||(M||!x)&&history.state&&history.state.scroll||null;return _s().then(()=>ne(E,L,h)).then(p=>p&&xE(p)).catch(p=>X(p,E,L))}const Se=E=>s.go(E);let hn;const pn=new Set,Ir={currentRoute:c,listening:!0,addRoute:m,removeRoute:y,clearRoutes:t.clearRoutes,hasRoute:S,getRoutes:b,resolve:A,options:e,push:D,replace:F,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ce.add,isReady:ct,install(E){const L=this;E.component("RouterLink",sv),E.component("RouterView",cv),E.config.globalProperties.$router=L,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>en(c)}),_n&&!hn&&c.value===Pt&&(hn=!0,D(s.location).catch(ne=>{}));const x={};for(const ne in Pt)Object.defineProperty(x,ne,{get:()=>c.value[ne],enumerable:!0});E.provide(Co,L),E.provide(Hf,Jc(x)),E.provide(Ui,c);const M=E.unmount;pn.add(E),E.unmount=function(){pn.delete(E),pn.size<1&&(l=Pt,Ie&&Ie(),Ie=null,c.value=Pt,hn=!1,z=!1),M()}}};function Fe(E){return E.reduce((L,x)=>L.then(()=>K(x)),Promise.resolve())}return Ir}function uv(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>Pn(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>Pn(l,c))||s.push(c))}return[n,r,s]}const fv="modulepreload",dv=function(e){return"/"+e},Tc={},Cr=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let c=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");s=c(n.map(l=>{if(l=dv(l),l in Tc)return;Tc[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":fv,u||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),u)return new Promise((m,y)=>{d.addEventListener("load",m),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})},hv=[{path:"/",redirect:"/home",children:[{name:"home",path:"home",component:()=>Cr(()=>import("./Home-D0iyHjiQ.js"),[])},{name:"admin",path:"admin",component:()=>Cr(()=>import("./Admin-CqM7i6DL.js"),__vite__mapDeps([0,1]))}]},{path:"/register/domain",name:"register-domain",component:()=>Cr(()=>import("./Domain-DxoUonOB.js"),[])},{path:"/:catchAll(.*)",name:"404",component:()=>Cr(()=>import("./404-hqtUBbJg.js"),__vite__mapDeps([2,1]))}],jf=lv({history:FE(),routes:hv});function Vf(e){return Wi()?(Dc(e),!0):!1}const Wf=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const pv=e=>e!=null,mv=()=>{};function gv(...e){if(e.length!==1)return kd(...e);const t=e[0];return typeof t=="function"?Ji(Ad(()=>({get:t,set:mv}))):fr(t)}function yv(e){return Array.isArray(e)?e:[e]}const _v=Wf?window:void 0,bv=Wf?window.document:void 0;function wv(e){var t;const n=Zi(e);return(t=n?.$el)!=null?t:n}function Ev(){const e=Yc(!1),t=io();return t&&ll(()=>{e.value=!0},t),e}function vv(e){const t=Ev();return Ae(()=>(t.value,!!e()))}function Iv(e,t,n={}){const{window:r=_v,...s}=n;let i;const o=vv(()=>r&&"MutationObserver"in r),a=()=>{i&&(i.disconnect(),i=void 0)},c=Ae(()=>{const d=Zi(e),m=yv(d).map(wv).filter(pv);return new Set(m)}),l=nn(()=>c.value,d=>{a(),o.value&&d.size&&(i=new MutationObserver(t),d.forEach(m=>i.observe(m,s)))},{immediate:!0,flush:"post"}),u=()=>i?.takeRecords(),f=()=>{l(),a()};return Vf(f),{isSupported:o,stop:f,takeRecords:u}}function Sv(e=null,t={}){var n,r,s;const{document:i=bv,restoreOnUnmount:o=f=>f}=t,a=(n=i?.title)!=null?n:"",c=gv((r=e??i?.title)!=null?r:null),l=!!(e&&typeof e=="function");function u(f){if(!("titleTemplate"in t))return f;const d=t.titleTemplate||"%s";return typeof d=="function"?d(f):Zi(d).replace(/%s/g,f)}return nn(c,(f,d)=>{f!==d&&i&&(i.title=u(f??""))},{immediate:!0}),t.observe&&!t.titleTemplate&&i&&!l&&Iv((s=i.head)==null?void 0:s.querySelector("title"),()=>{i&&i.title!==c.value&&(c.value=u(i.title))},{childList:!0}),Vf(()=>{if(o){const f=o(a,c.value||"");f!=null&&i&&(i.title=f)}}),c}const Tv={},Rv={__name:"App",setup(e){return Sv(Tv.appName),(t,n)=>{const r=eh("router-view");return Cl(),Ol(r)}}},Po=mp(Rv);Po.use(_p());Po.use(jf);jf.isReady().then(async()=>{console.info("Router is ready, booting application..."),Yg(Pb,async e=>{console.info("User Auth State Changed:",e?e.uid:"No User");const t=aE();e?await t.setUser(e.uid):t.clearUser(),await t.init()}),Po.mount("#app")});export{dt as F,fr as a,Pv as b,Ae as c,xl as d,Ov as e,kv as f,Cv as g,Lh as h,Ce as i,$d as j,eh as k,xv as l,Cl as o,$t as r,sd as t,aE as u,Nv as v,Av as w};
