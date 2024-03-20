import{d as Ie,o as b,c as w,a as m,t as V,n as xe,r as j,b as Xr,m as Bt,u as Je,w as xn,v as Jr,e as Zr,f as ui,g as eo,F as pe,h as me,i as to,j as di,k as Ge,l as W,p as G,q as no,s as so,x as fs,y as re,z as io,A as ro,B as oo,C as ao,D as lo,E as co}from"./index-a5eKN8i6.js";const ho={class:"truncate"},uo=Ie({__name:"ItemButton",props:{title:{},active:{type:Boolean}},setup(n){return(e,t)=>(b(),w("button",{class:xe(["px-5 py-2.5 hover:bg-btn rounded text-base text-white flex items-center",e.active?"bg-btn":"bg-gradient-to-r from-grad-1 to-grad-2 hover:from-btn"])},[m("p",ho,V(e.title),1)],2))}}),fo=m("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},[m("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),m("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1),_o=[fo],po=Ie({__name:"BaseModal",setup(n,{expose:e}){const t=j(),s=()=>{t.value&&t.value.showModal()},i=()=>{t.value&&t.value.close()};return e({open:s,close:i}),(r,o)=>(b(),w("dialog",{ref_key:"dialog",ref:t,class:"dark:bg-dark-2 bg-light-2 w-full mx-auto lg:h-auto h-full"},[m("header",null,[m("button",{class:"fixed top-4 right-4 z-10",onClick:i},_o)]),Xr(r.$slots,"default")],512))}}),mo={class:"relative"},_s=Ie({__name:"BaseInput",props:Bt({placeholder:{},position:{}},{value:{},valueModifiers:{}}),emits:["update:value"],setup(n){const e=Je(n,"value");return(t,s)=>(b(),w("label",mo,[xn(m("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>e.value=i),class:xe(["py-3 px-4 text-sm text-light-3 border w-full",[{"rounded-l-2xl":t.position==="left"},{"rounded-r-2xl":t.position==="right"},{"rounded-2xl":!t.position}]])},null,2),[[Jr,e.value]]),m("span",{class:xe(["absolute text-light-3 inset-3 ml-1 transition-all pointer-events-none text-sm",{"text-xs top-0":e.value}])},V(t.placeholder),3)]))}}),go={class:"inline-flex items-center cursor-pointer w-fit"},yo=m("div",{class:"relative w-11 h-6 dark:bg-dark-3 bg-light-3 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"},null,-1),vo={class:"ms-3 text-sm font-medium text-dark-1 dark:text-light-1"},ps=Ie({__name:"BaseToggle",props:Bt({label:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const e=Je(n,"modelValue");return(t,s)=>(b(),w("label",go,[xn(m("input",{type:"checkbox","onUpdate:modelValue":s[0]||(s[0]=i=>e.value=i),class:"sr-only peer"},null,512),[[Zr,e.value]]),yo,m("span",vo,V(t.label),1)]))}}),Co={selected:""},Eo=["value"],bo=Ie({__name:"BaseSelect",props:Bt({list:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const e=Je(n,"modelValue"),t=j();return ui(()=>{t.value=e.value}),(s,i)=>xn((b(),w("select",{"onUpdate:modelValue":i[0]||(i[0]=r=>e.value=r),id:"countries",class:"dark:bg-dark-3 bg-light-2 text-dark-1 dark:text-light-1 border border-light-3 text-sm rounded-lg block w-full p-2.5"},[m("option",Co,V(t.value),1),(b(!0),w(pe,null,me(s.list,r=>(b(),w("option",{value:r},V(r),9,Eo))),256))],512)),[[eo,e.value]])}});class ms extends Error{constructor(e,t,s){const i=e.status||e.status===0?e.status:"",r=e.statusText||"",o=`${i} ${r}`.trim(),a=o?`status code ${o}`:"an unknown error";super(`Request failed with ${a}`),Object.defineProperty(this,"response",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"request",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name="HTTPError",this.response=e,this.request=t,this.options=s}}class fi extends Error{constructor(e){super("Request timed out"),Object.defineProperty(this,"request",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name="TimeoutError",this.request=e}}const vt=n=>n!==null&&typeof n=="object",mt=(...n)=>{for(const e of n)if((!vt(e)||Array.isArray(e))&&e!==void 0)throw new TypeError("The `options` argument must be an object");return An({},...n)},_i=(n={},e={})=>{const t=new globalThis.Headers(n),s=e instanceof globalThis.Headers,i=new globalThis.Headers(e);for(const[r,o]of i.entries())s&&o==="undefined"||o===void 0?t.delete(r):t.set(r,o);return t},An=(...n)=>{let e={},t={};for(const s of n)if(Array.isArray(s))Array.isArray(e)||(e=[]),e=[...e,...s];else if(vt(s)){for(let[i,r]of Object.entries(s))vt(r)&&i in e&&(r=An(e[i],r)),e={...e,[i]:r};vt(s.headers)&&(t=_i(t,s.headers),e.headers=t)}return e},wo=(()=>{let n=!1,e=!1;const t=typeof globalThis.ReadableStream=="function",s=typeof globalThis.Request=="function";return t&&s&&(e=new globalThis.Request("https://empty.invalid",{body:new globalThis.ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type")),n&&!e})(),Io=typeof globalThis.AbortController=="function",To=typeof globalThis.ReadableStream=="function",So=typeof globalThis.FormData=="function",pi=["get","post","put","patch","head","delete"],Ro={json:"application/json",text:"text/*",formData:"multipart/form-data",arrayBuffer:"*/*",blob:"*/*"},Kt=2147483647,mi=Symbol("stop"),No={json:!0,parseJson:!0,searchParams:!0,prefixUrl:!0,retry:!0,timeout:!0,hooks:!0,throwHttpErrors:!0,onDownloadProgress:!0,fetch:!0},ko={method:!0,headers:!0,body:!0,mode:!0,credentials:!0,cache:!0,redirect:!0,referrer:!0,referrerPolicy:!0,integrity:!0,keepalive:!0,signal:!0,window:!0,dispatcher:!0,duplex:!0},xo=n=>pi.includes(n)?n.toUpperCase():n,Ao=["get","put","head","delete","options","trace"],Do=[408,413,429,500,502,503,504],gi=[413,429,503],gs={limit:2,methods:Ao,statusCodes:Do,afterStatusCodes:gi,maxRetryAfter:Number.POSITIVE_INFINITY,backoffLimit:Number.POSITIVE_INFINITY,delay:n=>.3*2**(n-1)*1e3},Po=(n={})=>{if(typeof n=="number")return{...gs,limit:n};if(n.methods&&!Array.isArray(n.methods))throw new Error("retry.methods must be an array");if(n.statusCodes&&!Array.isArray(n.statusCodes))throw new Error("retry.statusCodes must be an array");return{...gs,...n,afterStatusCodes:gi}};async function Oo(n,e,t,s){return new Promise((i,r)=>{const o=setTimeout(()=>{t&&t.abort(),r(new fi(n))},s.timeout);s.fetch(n,e).then(i).catch(r).then(()=>{clearTimeout(o)})})}async function Mo(n,{signal:e}){return new Promise((t,s)=>{e&&(e.throwIfAborted(),e.addEventListener("abort",i,{once:!0}));function i(){clearTimeout(r),s(e.reason)}const r=setTimeout(()=>{e==null||e.removeEventListener("abort",i),t()},n)})}const Lo=(n,e)=>{const t={};for(const s in e)!(s in ko)&&!(s in No)&&!(s in n)&&(t[s]=e[s]);return t};class Ct{static create(e,t){const s=new Ct(e,t),i=async()=>{if(typeof s._options.timeout=="number"&&s._options.timeout>Kt)throw new RangeError(`The \`timeout\` option cannot be greater than ${Kt}`);await Promise.resolve();let a=await s._fetch();for(const l of s._options.hooks.afterResponse){const c=await l(s.request,s._options,s._decorateResponse(a.clone()));c instanceof globalThis.Response&&(a=c)}if(s._decorateResponse(a),!a.ok&&s._options.throwHttpErrors){let l=new ms(a,s.request,s._options);for(const c of s._options.hooks.beforeError)l=await c(l);throw l}if(s._options.onDownloadProgress){if(typeof s._options.onDownloadProgress!="function")throw new TypeError("The `onDownloadProgress` option must be a function");if(!To)throw new Error("Streams are not supported in your environment. `ReadableStream` is missing.");return s._stream(a.clone(),s._options.onDownloadProgress)}return a},o=s._options.retry.methods.includes(s.request.method.toLowerCase())?s._retry(i):i();for(const[a,l]of Object.entries(Ro))o[a]=async()=>{s.request.headers.set("accept",s.request.headers.get("accept")||l);const h=(await o).clone();if(a==="json"){if(h.status===204||(await h.clone().arrayBuffer()).byteLength===0)return"";if(t.parseJson)return t.parseJson(await h.text())}return h[a]()};return o}constructor(e,t={}){if(Object.defineProperty(this,"request",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"abortController",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_retryCount",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_input",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_options",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this._input=e,this._options={credentials:this._input.credentials||"same-origin",...t,headers:_i(this._input.headers,t.headers),hooks:An({beforeRequest:[],beforeRetry:[],beforeError:[],afterResponse:[]},t.hooks),method:xo(t.method??this._input.method),prefixUrl:String(t.prefixUrl||""),retry:Po(t.retry),throwHttpErrors:t.throwHttpErrors!==!1,timeout:t.timeout??1e4,fetch:t.fetch??globalThis.fetch.bind(globalThis)},typeof this._input!="string"&&!(this._input instanceof URL||this._input instanceof globalThis.Request))throw new TypeError("`input` must be a string, URL, or Request");if(this._options.prefixUrl&&typeof this._input=="string"){if(this._input.startsWith("/"))throw new Error("`input` must not begin with a slash when using `prefixUrl`");this._options.prefixUrl.endsWith("/")||(this._options.prefixUrl+="/"),this._input=this._options.prefixUrl+this._input}if(Io){if(this.abortController=new globalThis.AbortController,this._options.signal){const s=this._options.signal;this._options.signal.addEventListener("abort",()=>{this.abortController.abort(s.reason)})}this._options.signal=this.abortController.signal}if(wo&&(this._options.duplex="half"),this.request=new globalThis.Request(this._input,this._options),this._options.searchParams){const i="?"+(typeof this._options.searchParams=="string"?this._options.searchParams.replace(/^\?/,""):new URLSearchParams(this._options.searchParams).toString()),r=this.request.url.replace(/(?:\?.*?)?(?=#|$)/,i);(So&&this._options.body instanceof globalThis.FormData||this._options.body instanceof URLSearchParams)&&!(this._options.headers&&this._options.headers["content-type"])&&this.request.headers.delete("content-type"),this.request=new globalThis.Request(new globalThis.Request(r,{...this.request}),this._options)}this._options.json!==void 0&&(this._options.body=JSON.stringify(this._options.json),this.request.headers.set("content-type",this._options.headers.get("content-type")??"application/json"),this.request=new globalThis.Request(this.request,{body:this._options.body}))}_calculateRetryDelay(e){if(this._retryCount++,this._retryCount<=this._options.retry.limit&&!(e instanceof fi)){if(e instanceof ms){if(!this._options.retry.statusCodes.includes(e.response.status))return 0;const s=e.response.headers.get("Retry-After");if(s&&this._options.retry.afterStatusCodes.includes(e.response.status)){let i=Number(s);return Number.isNaN(i)?i=Date.parse(s)-Date.now():i*=1e3,this._options.retry.maxRetryAfter!==void 0&&i>this._options.retry.maxRetryAfter?0:i}if(e.response.status===413)return 0}const t=this._options.retry.delay(this._retryCount);return Math.min(this._options.retry.backoffLimit,t)}return 0}_decorateResponse(e){return this._options.parseJson&&(e.json=async()=>this._options.parseJson(await e.text())),e}async _retry(e){try{return await e()}catch(t){const s=Math.min(this._calculateRetryDelay(t),Kt);if(s!==0&&this._retryCount>0){await Mo(s,{signal:this._options.signal});for(const i of this._options.hooks.beforeRetry)if(await i({request:this.request,options:this._options,error:t,retryCount:this._retryCount})===mi)return;return this._retry(e)}throw t}}async _fetch(){for(const t of this._options.hooks.beforeRequest){const s=await t(this.request,this._options);if(s instanceof Request){this.request=s;break}if(s instanceof Response)return s}const e=Lo(this.request,this._options);return this._options.timeout===!1?this._options.fetch(this.request.clone(),e):Oo(this.request.clone(),e,this.abortController,this._options)}_stream(e,t){const s=Number(e.headers.get("content-length"))||0;let i=0;return e.status===204?(t&&t({percent:1,totalBytes:s,transferredBytes:i},new Uint8Array),new globalThis.Response(null,{status:e.status,statusText:e.statusText,headers:e.headers})):new globalThis.Response(new globalThis.ReadableStream({async start(r){const o=e.body.getReader();t&&t({percent:0,transferredBytes:0,totalBytes:s},new Uint8Array);async function a(){const{done:l,value:c}=await o.read();if(l){r.close();return}if(t){i+=c.byteLength;const h=s===0?0:i/s;t({percent:h,transferredBytes:i,totalBytes:s},c)}r.enqueue(c),await a()}await a()}}),{status:e.status,statusText:e.statusText,headers:e.headers})}}/*! MIT License © Sindre Sorhus */const ln=n=>{const e=(t,s)=>Ct.create(t,mt(n,s));for(const t of pi)e[t]=(s,i)=>Ct.create(s,mt(n,i,{method:t}));return e.create=t=>ln(mt(t)),e.extend=t=>ln(mt(n,t)),e.stop=mi,e},Fo=ln();Fo.create({prefixUrl:"http://localhost:1337/api"});var ys={};/**
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
 */const yi={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const f=function(n,e){if(!n)throw We(e)},We=function(n){return new Error("Firebase Database ("+yi.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const vi=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Bo=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Dn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(d=64)),s.push(t[h],t[u],t[d],t[_])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(vi(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Bo(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||u==null)throw new Uo;const d=r<<2|a>>4;if(s.push(d),c!==64){const _=a<<4&240|c>>2;if(s.push(_),u!==64){const p=c<<6&192|u;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Uo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ci=function(n){const e=vi(n);return Dn.encodeByteArray(e,!0)},Et=function(n){return Ci(n).replace(/\./g,"")},cn=function(n){try{return Dn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Wo(n){return Ei(void 0,n)}function Ei(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Vo(t)||(n[t]=Ei(n[t],e[t]));return n}function Vo(n){return n!=="__proto__"}/**
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
 */function Ho(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $o=()=>Ho().__FIREBASE_DEFAULTS__,qo=()=>{if(typeof process>"u"||typeof ys>"u")return;const n=ys.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},jo=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&cn(n[1]);return e&&JSON.parse(e)},bi=()=>{try{return $o()||qo()||jo()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},zo=n=>{var e,t;return(t=(e=bi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Go=n=>{const e=zo(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},wi=()=>{var n;return(n=bi())===null||n===void 0?void 0:n.config};/**
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
 */class Pn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Yo(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Et(JSON.stringify(t)),Et(JSON.stringify(o)),""].join(".")}/**
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
 */function Ko(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ii(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ko())}function Qo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ti(){return yi.NODE_ADMIN===!0}function Xo(){try{return typeof indexedDB=="object"}catch{return!1}}function Jo(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const Zo="FirebaseError";class ct extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Zo,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Si.prototype.create)}}class Si{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ea(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ct(i,a,s)}}function ea(n,e){return n.replace(ta,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ta=/\{\$([^}]+)}/g;/**
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
 */function Ze(n){return JSON.parse(n)}function F(n){return JSON.stringify(n)}/**
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
 */const Ri=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Ze(cn(r[0])||""),t=Ze(cn(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},na=function(n){const e=Ri(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},sa=function(n){const e=Ri(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function se(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Le(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function vs(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function bt(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function hn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Cs(r)&&Cs(o)){if(!hn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Cs(n){return n!==null&&typeof n=="object"}/**
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
 */function ia(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class ra{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)s[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const d=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const d=(i<<5|i>>>27)+c+l+h+s[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Ni(n,e){return`${n} failed: ${e} argument `}/**
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
 */const oa=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,f(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ut=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Wt(n){return n&&n._delegate?n._delegate:n}class et{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fe="[DEFAULT]";/**
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
 */class aa{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Pn;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ca(e))try{this.getOrInitializeService({instanceIdentifier:fe})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=fe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fe){return this.instances.has(e)}getOptions(e=fe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:la(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=fe){return this.component?this.component.multipleInstances?e:fe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function la(n){return n===fe?void 0:n}function ca(n){return n.instantiationMode==="EAGER"}/**
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
 */class ha{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new aa(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var k;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(k||(k={}));const ua={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},da=k.INFO,fa={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},_a=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=fa[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ki{constructor(e){this.name=e,this._logLevel=da,this._logHandler=_a,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in k))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ua[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...e),this._logHandler(this,k.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...e),this._logHandler(this,k.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,k.INFO,...e),this._logHandler(this,k.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,k.WARN,...e),this._logHandler(this,k.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...e),this._logHandler(this,k.ERROR,...e)}}const pa=(n,e)=>e.some(t=>n instanceof t);let Es,bs;function ma(){return Es||(Es=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ga(){return bs||(bs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xi=new WeakMap,un=new WeakMap,Ai=new WeakMap,Qt=new WeakMap,On=new WeakMap;function ya(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(oe(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&xi.set(t,n)}).catch(()=>{}),On.set(e,n),e}function va(n){if(un.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});un.set(n,e)}let dn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return un.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ai.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return oe(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ca(n){dn=n(dn)}function Ea(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Xt(this),e,...t);return Ai.set(s,e.sort?e.sort():[e]),oe(s)}:ga().includes(n)?function(...e){return n.apply(Xt(this),e),oe(xi.get(this))}:function(...e){return oe(n.apply(Xt(this),e))}}function ba(n){return typeof n=="function"?Ea(n):(n instanceof IDBTransaction&&va(n),pa(n,ma())?new Proxy(n,dn):n)}function oe(n){if(n instanceof IDBRequest)return ya(n);if(Qt.has(n))return Qt.get(n);const e=ba(n);return e!==n&&(Qt.set(n,e),On.set(e,n)),e}const Xt=n=>On.get(n);function wa(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=oe(o);return s&&o.addEventListener("upgradeneeded",l=>{s(oe(o.result),l.oldVersion,l.newVersion,oe(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Ia=["get","getKey","getAll","getAllKeys","count"],Ta=["put","add","delete","clear"],Jt=new Map;function ws(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Jt.get(e))return Jt.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Ta.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ia.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return Jt.set(e,r),r}Ca(n=>({...n,get:(e,t,s)=>ws(e,t)||n.get(e,t,s),has:(e,t)=>!!ws(e,t)||n.has(e,t)}));/**
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
 */class Sa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ra(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Ra(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fn="@firebase/app",Is="0.9.28";/**
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
 */const ve=new ki("@firebase/app"),Na="@firebase/app-compat",ka="@firebase/analytics-compat",xa="@firebase/analytics",Aa="@firebase/app-check-compat",Da="@firebase/app-check",Pa="@firebase/auth",Oa="@firebase/auth-compat",Ma="@firebase/database",La="@firebase/database-compat",Fa="@firebase/functions",Ba="@firebase/functions-compat",Ua="@firebase/installations",Wa="@firebase/installations-compat",Va="@firebase/messaging",Ha="@firebase/messaging-compat",$a="@firebase/performance",qa="@firebase/performance-compat",ja="@firebase/remote-config",za="@firebase/remote-config-compat",Ga="@firebase/storage",Ya="@firebase/storage-compat",Ka="@firebase/firestore",Qa="@firebase/firestore-compat",Xa="firebase",Ja="10.8.1";/**
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
 */const _n="[DEFAULT]",Za={[fn]:"fire-core",[Na]:"fire-core-compat",[xa]:"fire-analytics",[ka]:"fire-analytics-compat",[Da]:"fire-app-check",[Aa]:"fire-app-check-compat",[Pa]:"fire-auth",[Oa]:"fire-auth-compat",[Ma]:"fire-rtdb",[La]:"fire-rtdb-compat",[Fa]:"fire-fn",[Ba]:"fire-fn-compat",[Ua]:"fire-iid",[Wa]:"fire-iid-compat",[Va]:"fire-fcm",[Ha]:"fire-fcm-compat",[$a]:"fire-perf",[qa]:"fire-perf-compat",[ja]:"fire-rc",[za]:"fire-rc-compat",[Ga]:"fire-gcs",[Ya]:"fire-gcs-compat",[Ka]:"fire-fst",[Qa]:"fire-fst-compat","fire-js":"fire-js",[Xa]:"fire-js-all"};/**
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
 */const wt=new Map,pn=new Map;function el(n,e){try{n.container.addComponent(e)}catch(t){ve.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function It(n){const e=n.name;if(pn.has(e))return ve.debug(`There were multiple attempts to register component ${e}.`),!1;pn.set(e,n);for(const t of wt.values())el(t,n);return!0}function tl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const nl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ae=new Si("app","Firebase",nl);/**
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
 */class sl{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ae.create("app-deleted",{appName:this._name})}}/**
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
 */const il=Ja;function Di(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:_n,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ae.create("bad-app-name",{appName:String(i)});if(t||(t=wi()),!t)throw ae.create("no-options");const r=wt.get(i);if(r){if(hn(t,r.options)&&hn(s,r.config))return r;throw ae.create("duplicate-app",{appName:i})}const o=new ha(i);for(const l of pn.values())o.addComponent(l);const a=new sl(t,s,o);return wt.set(i,a),a}function rl(n=_n){const e=wt.get(n);if(!e&&n===_n&&wi())return Di();if(!e)throw ae.create("no-app",{appName:n});return e}function Ae(n,e,t){var s;let i=(s=Za[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ve.warn(a.join(" "));return}It(new et(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ol="firebase-heartbeat-database",al=1,tt="firebase-heartbeat-store";let Zt=null;function Pi(){return Zt||(Zt=wa(ol,al,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(tt)}catch(t){console.warn(t)}}}}).catch(n=>{throw ae.create("idb-open",{originalErrorMessage:n.message})})),Zt}async function ll(n){try{const t=(await Pi()).transaction(tt),s=await t.objectStore(tt).get(Oi(n));return await t.done,s}catch(e){if(e instanceof ct)ve.warn(e.message);else{const t=ae.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ve.warn(t.message)}}}async function Ts(n,e){try{const s=(await Pi()).transaction(tt,"readwrite");await s.objectStore(tt).put(e,Oi(n)),await s.done}catch(t){if(t instanceof ct)ve.warn(t.message);else{const s=ae.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ve.warn(s.message)}}}function Oi(n){return`${n.name}!${n.options.appId}`}/**
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
 */const cl=1024,hl=30*24*60*60*1e3;class ul{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fl(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ss();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=hl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ss(),{heartbeatsToSend:s,unsentEntries:i}=dl(this._heartbeatsCache.heartbeats),r=Et(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ss(){return new Date().toISOString().substring(0,10)}function dl(n,e=cl){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Rs(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Rs(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class fl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xo()?Jo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ll(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ts(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ts(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Rs(n){return Et(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function _l(n){It(new et("platform-logger",e=>new Sa(e),"PRIVATE")),It(new et("heartbeat",e=>new ul(e),"PRIVATE")),Ae(fn,Is,n),Ae(fn,Is,"esm2017"),Ae("fire-js","")}_l("");var pl="firebase",ml="10.8.1";/**
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
 */Ae(pl,ml,"app");var Ns={};const ks="@firebase/database",xs="1.0.3";/**
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
 */let Mi="";function gl(n){Mi=n}/**
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
 */class yl{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),F(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ze(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class vl{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return se(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Li=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new yl(e)}}catch{}return new vl},ge=Li("localStorage"),mn=Li("sessionStorage");/**
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
 */const De=new ki("@firebase/database"),Cl=function(){let n=1;return function(){return n++}}(),Fi=function(n){const e=oa(n),t=new ra;t.update(e);const s=t.digest();return Dn.encodeByteArray(s)},ht=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ht.apply(null,s):typeof s=="object"?e+=F(s):e+=s,e+=" "}return e};let ye=null,As=!0;const El=function(n,e){f(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(De.logLevel=k.VERBOSE,ye=De.log.bind(De),e&&mn.set("logging_enabled",!0)):typeof n=="function"?ye=n:(ye=null,mn.remove("logging_enabled"))},B=function(...n){if(As===!0&&(As=!1,ye===null&&mn.get("logging_enabled")===!0&&El(!0)),ye){const e=ht.apply(null,n);ye(e)}},ut=function(n){return function(...e){B(n,...e)}},gn=function(...n){const e="FIREBASE INTERNAL ERROR: "+ht(...n);De.error(e)},ne=function(...n){const e=`FIREBASE FATAL ERROR: ${ht(...n)}`;throw De.error(e),new Error(e)},z=function(...n){const e="FIREBASE WARNING: "+ht(...n);De.warn(e)},bl=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&z("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Bi=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},wl=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Fe="[MIN_NAME]",Ce="[MAX_NAME]",Ve=function(n,e){if(n===e)return 0;if(n===Fe||e===Ce)return-1;if(e===Fe||n===Ce)return 1;{const t=Ds(n),s=Ds(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Il=function(n,e){return n===e?0:n<e?-1:1},$e=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+F(e))},Mn=function(n){if(typeof n!="object"||n===null)return F(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=F(e[s]),t+=":",t+=Mn(n[e[s]]);return t+="}",t},Ui=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function q(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Wi=function(n){f(!Bi(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},Tl=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Sl=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Rl(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Nl=new RegExp("^-?(0*)\\d{1,10}$"),kl=-2147483648,xl=2147483647,Ds=function(n){if(Nl.test(n)){const e=Number(n);if(e>=kl&&e<=xl)return e}return null},dt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw z("Exception was thrown by user callback.",t),e},Math.floor(0))}},Al=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ye=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Dl{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){z(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Pl{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(B("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',z(e)}}class Pe{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Pe.OWNER="owner";/**
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
 */const Ln="5",Vi="v",Hi="s",$i="r",qi="f",ji=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,zi="ls",Gi="p",yn="ac",Yi="websocket",Ki="long_polling";/**
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
 */class Qi{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ge.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ge.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Ol(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Xi(n,e,t){f(typeof e=="string","typeof type must == string"),f(typeof t=="object","typeof params must == object");let s;if(e===Yi)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Ki)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ol(n)&&(t.ns=n.namespace);const i=[];return q(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Ml{constructor(){this.counters_={}}incrementCounter(e,t=1){se(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Wo(this.counters_)}}/**
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
 */const en={},tn={};function Fn(n){const e=n.toString();return en[e]||(en[e]=new Ml),en[e]}function Ll(n,e){const t=n.toString();return tn[t]||(tn[t]=e()),tn[t]}/**
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
 */class Fl{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&dt(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ps="start",Bl="close",Ul="pLPCommand",Wl="pRTLPCB",Ji="id",Zi="pw",er="ser",Vl="cb",Hl="seg",$l="ts",ql="d",jl="dframe",tr=1870,nr=30,zl=tr-nr,Gl=25e3,Yl=3e4;class Ne{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ut(e),this.stats_=Fn(t),this.urlFn=l=>(this.appCheckToken&&(l[yn]=this.appCheckToken),Xi(t,Ki,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Fl(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Yl)),wl(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Bn((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ps)this.id=a,this.password=l;else if(o===Bl)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ps]="t",s[er]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Vl]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Vi]=Ln,this.transportSessionId&&(s[Hi]=this.transportSessionId),this.lastSessionId&&(s[zi]=this.lastSessionId),this.applicationId&&(s[Gi]=this.applicationId),this.appCheckToken&&(s[yn]=this.appCheckToken),typeof location<"u"&&location.hostname&&ji.test(location.hostname)&&(s[$i]=qi);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ne.forceAllow_=!0}static forceDisallow(){Ne.forceDisallow_=!0}static isAvailable(){return Ne.forceAllow_?!0:!Ne.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Tl()&&!Sl()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=F(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ci(t),i=Ui(s,zl);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[jl]="t",s[Ji]=e,s[Zi]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=F(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Bn{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Cl(),window[Ul+this.uniqueCallbackIdentifier]=e,window[Wl+this.uniqueCallbackIdentifier]=t,this.myIFrame=Bn.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){B("frame writing exception"),a.stack&&B(a.stack),B(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||B("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ji]=this.myID,e[Zi]=this.myPW,e[er]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+nr+s.length<=tr;){const o=this.pendingSegs.shift();s=s+"&"+Hl+i+"="+o.seg+"&"+$l+i+"="+o.ts+"&"+ql+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Gl)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{B("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Kl=16384,Ql=45e3;let Tt=null;typeof MozWebSocket<"u"?Tt=MozWebSocket:typeof WebSocket<"u"&&(Tt=WebSocket);class Y{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ut(this.connId),this.stats_=Fn(t),this.connURL=Y.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Vi]=Ln,typeof location<"u"&&location.hostname&&ji.test(location.hostname)&&(o[$i]=qi),t&&(o[Hi]=t),s&&(o[zi]=s),i&&(o[yn]=i),r&&(o[Gi]=r),Xi(e,Yi,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ge.set("previous_websocket_failure",!0);try{let s;Ti(),this.mySock=new Tt(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Y.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Tt!==null&&!Y.forceDisallow_}static previouslyFailed(){return ge.isInMemoryStorage||ge.get("previous_websocket_failure")===!0}markConnectionHealthy(){ge.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Ze(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(f(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=F(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ui(t,Kl);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ql))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Y.responsesRequiredToBeHealthy=2;Y.healthyTimeout=3e4;/**
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
 */class nt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ne,Y]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Y&&Y.isAvailable();let s=t&&!Y.previouslyFailed();if(e.webSocketOnly&&(t||z("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Y];else{const i=this.transports_=[];for(const r of nt.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);nt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}nt.globalTransportInitialized_=!1;/**
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
 */const Xl=6e4,Jl=5e3,Zl=10*1024,ec=100*1024,nn="t",Os="d",tc="s",Ms="r",nc="e",Ls="o",Fs="a",Bs="n",Us="p",sc="h";class ic{constructor(e,t,s,i,r,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ut("c:"+this.id+":"),this.transportManager_=new nt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ye(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ec?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Zl?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(nn in e){const t=e[nn];t===Fs?this.upgradeIfSecondaryHealthy_():t===Ms?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Ls&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=$e("t",e),s=$e("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Us,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Fs,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Bs,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=$e("t",e),s=$e("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=$e(nn,e);if(Os in e){const s=e[Os];if(t===sc){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Bs){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===tc?this.onConnectionShutdown_(s):t===Ms?this.onReset_(s):t===nc?gn("Server Error: "+s):t===Ls?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):gn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ln!==s&&z("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Ye(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Xl))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ye(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Jl))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Us,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ge.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class sr{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class ir{constructor(e){this.allowedEvents_=e,this.listeners_={},f(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){f(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class St extends ir{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ii()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new St}getInitialEvent(e){return f(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ws=32,Vs=768;class R{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function I(){return new R("")}function C(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ce(n){return n.pieces_.length-n.pieceNum_}function x(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new R(n.pieces_,e)}function rr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function rc(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function or(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function ar(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new R(e,0)}function O(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof R)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new R(t,0)}function E(n){return n.pieceNum_>=n.pieces_.length}function H(n,e){const t=C(n),s=C(e);if(t===null)return e;if(t===s)return H(x(n),x(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Un(n,e){if(ce(n)!==ce(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function K(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(ce(n)>ce(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class oc{constructor(e,t){this.errorPrefix_=t,this.parts_=or(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ut(this.parts_[s]);lr(this)}}function ac(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ut(e),lr(n)}function lc(n){const e=n.parts_.pop();n.byteLength_-=Ut(e),n.parts_.length>0&&(n.byteLength_-=1)}function lr(n){if(n.byteLength_>Vs)throw new Error(n.errorPrefix_+"has a key path longer than "+Vs+" bytes ("+n.byteLength_+").");if(n.parts_.length>Ws)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ws+") or object contains a cycle "+_e(n))}function _e(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Wn extends ir{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Wn}getInitialEvent(e){return f(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const qe=1e3,cc=60*5*1e3,Hs=30*1e3,hc=1.3,uc=3e4,dc="server_kill",$s=3;class te extends sr{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=te.nextPersistentConnectionId_++,this.log_=ut("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=qe,this.maxReconnectDelay_=cc,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Ti())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wn.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&St.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(F(r)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Pn,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;te.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&se(e,"w")){const s=Le(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();z(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||sa(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Hs)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=na(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+F(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):gn("Unrecognized action received from server: "+F(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=qe,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=qe,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>uc&&(this.reconnectDelay_=qe),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*hc)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+te.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(u){f(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?B("getToken() completed but was canceled"):(B("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new ic(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,_=>{z(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(dc)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&z(u),l())}}}interrupt(e){B("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){B("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vs(this.interruptReasons_)&&(this.reconnectDelay_=qe,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Mn(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new R(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){B("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=$s&&(this.reconnectDelay_=Hs,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){B("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=$s&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Mi.replace(/\./g,"-")]=1,Ii()?e["framework.cordova"]=1:Qo()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=St.getInstance().currentlyOnline();return vs(this.interruptReasons_)&&e}}te.nextPersistentConnectionId_=0;te.nextConnectionId_=0;/**
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
 */class v{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new v(e,t)}}/**
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
 */class Vt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new v(Fe,e),i=new v(Fe,t);return this.compare(s,i)!==0}minPost(){return v.MIN}}/**
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
 */let gt;class cr extends Vt{static get __EMPTY_NODE(){return gt}static set __EMPTY_NODE(e){gt=e}compare(e,t){return Ve(e.name,t.name)}isDefinedOn(e){throw We("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return v.MIN}maxPost(){return new v(Ce,gt)}makePost(e,t){return f(typeof e=="string","KeyIndex indexValue must always be a string."),new v(e,gt)}toString(){return".key"}}const Oe=new cr;/**
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
 */class yt{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class L{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??L.RED,this.left=i??$.EMPTY_NODE,this.right=r??$.EMPTY_NODE}copy(e,t,s,i,r){return new L(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return $.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return $.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,L.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,L.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}L.RED=!0;L.BLACK=!1;class fc{copy(e,t,s,i,r){return this}insert(e,t,s){return new L(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ${constructor(e,t=$.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new $(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,L.BLACK,null,null))}remove(e){return new $(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,L.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new yt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new yt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new yt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new yt(this.root_,null,this.comparator_,!0,e)}}$.EMPTY_NODE=new fc;/**
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
 */function _c(n,e){return Ve(n.name,e.name)}function Vn(n,e){return Ve(n,e)}/**
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
 */let vn;function pc(n){vn=n}const hr=function(n){return typeof n=="number"?"number:"+Wi(n):"string:"+n},ur=function(n){if(n.isLeafNode()){const e=n.val();f(typeof e=="string"||typeof e=="number"||typeof e=="object"&&se(e,".sv"),"Priority must be a string or number.")}else f(n===vn||n.isEmpty(),"priority of unexpected type.");f(n===vn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let qs;class M{constructor(e,t=M.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ur(this.priorityNode_)}static set __childrenNodeConstructor(e){qs=e}static get __childrenNodeConstructor(){return qs}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new M(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:M.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return E(e)?this:C(e)===".priority"?this.priorityNode_:M.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:M.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=C(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(f(s!==".priority"||ce(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,M.__childrenNodeConstructor.EMPTY_NODE.updateChild(x(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+hr(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Wi(this.value_):e+=this.value_,this.lazyHash_=Fi(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===M.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof M.__childrenNodeConstructor?-1:(f(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=M.VALUE_TYPE_ORDER.indexOf(t),r=M.VALUE_TYPE_ORDER.indexOf(s);return f(i>=0,"Unknown leaf type: "+t),f(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}M.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let dr,fr;function mc(n){dr=n}function gc(n){fr=n}class yc extends Vt{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Ve(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return v.MIN}maxPost(){return new v(Ce,new M("[PRIORITY-POST]",fr))}makePost(e,t){const s=dr(e);return new v(t,new M("[PRIORITY-POST]",s))}toString(){return".priority"}}const D=new yc;/**
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
 */const vc=Math.log(2);class Cc{constructor(e){const t=r=>parseInt(Math.log(r)/vc,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Rt=function(n,e,t,s){n.sort(e);const i=function(l,c){const h=c-l;let u,d;if(h===0)return null;if(h===1)return u=n[l],d=t?t(u):u,new L(d,u.node,L.BLACK,null,null);{const _=parseInt(h/2,10)+l,p=i(l,_),T=i(_+1,c);return u=n[_],d=t?t(u):u,new L(d,u.node,L.BLACK,p,T)}},r=function(l){let c=null,h=null,u=n.length;const d=function(p,T){const P=u-p,J=u;u-=p;const ue=i(P+1,J),Z=n[P],N=t?t(Z):Z;_(new L(N,Z.node,T,null,ue))},_=function(p){c?(c.left=p,c=p):(h=p,c=p)};for(let p=0;p<l.count;++p){const T=l.nextBitIsOne(),P=Math.pow(2,l.count-(p+1));T?d(P,L.BLACK):(d(P,L.BLACK),d(P,L.RED))}return h},o=new Cc(n.length),a=r(o);return new $(s||e,a)};/**
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
 */let sn;const Re={};class ee{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return f(Re&&D,"ChildrenNode.ts has not been loaded"),sn=sn||new ee({".priority":Re},{".priority":D}),sn}get(e){const t=Le(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof $?t:null}hasIndex(e){return se(this.indexSet_,e.toString())}addIndex(e,t){f(e!==Oe,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(v.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Rt(s,e.getCompare()):a=Re;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new ee(h,c)}addToIndexes(e,t){const s=bt(this.indexes_,(i,r)=>{const o=Le(this.indexSet_,r);if(f(o,"Missing index implementation for "+r),i===Re)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(v.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Rt(a,o.getCompare())}else return Re;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new v(e.name,a))),l.insert(e,e.node)}});return new ee(s,this.indexSet_)}removeFromIndexes(e,t){const s=bt(this.indexes_,i=>{if(i===Re)return i;{const r=t.get(e.name);return r?i.remove(new v(e.name,r)):i}});return new ee(s,this.indexSet_)}}/**
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
 */let je;class g{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ur(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return je||(je=new g(new $(Vn),null,ee.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||je}updatePriority(e){return this.children_.isEmpty()?this:new g(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?je:t}}getChild(e){const t=C(e);return t===null?this:this.getImmediateChild(t).getChild(x(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(f(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new v(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?je:this.priorityNode_;return new g(i,o,r)}}updateChild(e,t){const s=C(e);if(s===null)return t;{f(C(e)!==".priority"||ce(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(x(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(D,(o,a)=>{t[o]=a.val(e),s++,r&&g.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+hr(this.getPriority().val())+":"),this.forEachChild(D,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Fi(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new v(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new v(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new v(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,v.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,v.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ft?-1:0}withIndex(e){if(e===Oe||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new g(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Oe||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(D),i=t.getIterator(D);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Oe?null:this.indexMap_.get(e.toString())}}g.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ec extends g{constructor(){super(new $(Vn),g.EMPTY_NODE,ee.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return g.EMPTY_NODE}isEmpty(){return!1}}const ft=new Ec;Object.defineProperties(v,{MIN:{value:new v(Fe,g.EMPTY_NODE)},MAX:{value:new v(Ce,ft)}});cr.__EMPTY_NODE=g.EMPTY_NODE;M.__childrenNodeConstructor=g;pc(ft);gc(ft);/**
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
 */const bc=!0;function U(n,e=null){if(n===null)return g.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),f(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new M(t,U(e))}if(!(n instanceof Array)&&bc){const t=[];let s=!1;if(q(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=U(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new v(o,l)))}}),t.length===0)return g.EMPTY_NODE;const r=Rt(t,_c,o=>o.name,Vn);if(s){const o=Rt(t,D.getCompare());return new g(r,U(e),new ee({".priority":o},{".priority":D}))}else return new g(r,U(e),ee.Default)}else{let t=g.EMPTY_NODE;return q(n,(s,i)=>{if(se(n,s)&&s.substring(0,1)!=="."){const r=U(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(U(e))}}mc(U);/**
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
 */class wc extends Vt{constructor(e){super(),this.indexPath_=e,f(!E(e)&&C(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Ve(e.name,t.name):r}makePost(e,t){const s=U(e),i=g.EMPTY_NODE.updateChild(this.indexPath_,s);return new v(t,i)}maxPost(){const e=g.EMPTY_NODE.updateChild(this.indexPath_,ft);return new v(Ce,e)}toString(){return or(this.indexPath_,0).join("/")}}/**
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
 */class Ic extends Vt{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Ve(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return v.MIN}maxPost(){return v.MAX}makePost(e,t){const s=U(e);return new v(t,s)}toString(){return".value"}}const Tc=new Ic;/**
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
 */function _r(n){return{type:"value",snapshotNode:n}}function Be(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function st(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function it(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Sc(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Hn{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){f(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(st(t,a)):f(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Be(t,s)):o.trackChildChange(it(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(D,(i,r)=>{t.hasChild(i)||s.trackChildChange(st(i,r))}),t.isLeafNode()||t.forEachChild(D,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(it(i,r,o))}else s.trackChildChange(Be(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?g.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class rt{constructor(e){this.indexedFilter_=new Hn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=rt.getStartPost_(e),this.endPost_=rt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new v(t,s))||(s=g.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=g.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(g.EMPTY_NODE);const r=this;return t.forEachChild(D,(o,a)=>{r.matches(new v(o,a))||(i=i.updateImmediateChild(o,g.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Rc{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new rt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new v(t,s))||(s=g.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=g.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=g.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(g.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,g.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,_)=>u(_,d)}else o=this.index_.getCompare();const a=e;f(a.numChildren()===this.limit_,"");const l=new v(t,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const u=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(h&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(it(t,s,u)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(st(t,u));const T=a.updateImmediateChild(t,g.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Be(d.name,d.node)),T.updateImmediateChild(d.name,d.node)):T}}else return s.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(st(c.name,c.node)),r.trackChildChange(Be(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(c.name,g.EMPTY_NODE)):e}}/**
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
 */class $n{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=D}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Fe}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ce}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===D}copy(){const e=new $n;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Nc(n){return n.loadsAllData()?new Hn(n.getIndex()):n.hasLimit()?new Rc(n):new rt(n)}function js(n){const e={};if(n.isDefault())return e;let t;if(n.index_===D?t="$priority":n.index_===Tc?t="$value":n.index_===Oe?t="$key":(f(n.index_ instanceof wc,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=F(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=F(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+F(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=F(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+F(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function zs(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==D&&(e.i=n.index_.toString()),e}/**
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
 */class Nt extends sr{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ut("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(f(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Nt.getListenId_(e,s),a={};this.listens_[o]=a;const l=js(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,s),Le(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=Nt.getListenId_(e,t);delete this.listens_[s]}get(e){const t=js(e._queryParams),s=e._path.toString(),i=new Pn;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ia(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ze(a.responseText)}catch{z("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&z("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class kc{constructor(){this.rootNode_=g.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function kt(){return{value:null,children:new Map}}function pr(n,e,t){if(E(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=C(e);n.children.has(s)||n.children.set(s,kt());const i=n.children.get(s);e=x(e),pr(i,e,t)}}function Cn(n,e,t){n.value!==null?t(e,n.value):xc(n,(s,i)=>{const r=new R(e.toString()+"/"+s);Cn(i,r,t)})}function xc(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class Ac{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&q(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const Gs=10*1e3,Dc=30*1e3,Pc=5*60*1e3;class Oc{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Ac(e);const s=Gs+(Dc-Gs)*Math.random();Ye(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;q(e,(i,r)=>{r>0&&se(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Ye(this.reportStats_.bind(this),Math.floor(Math.random()*2*Pc))}}/**
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
 */var Q;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Q||(Q={}));function mr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function qn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function jn(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class xt{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Q.ACK_USER_WRITE,this.source=mr()}operationForChild(e){if(E(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new R(e));return new xt(I(),t,this.revert)}}else return f(C(this.path)===e,"operationForChild called for unrelated child."),new xt(x(this.path),this.affectedTree,this.revert)}}/**
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
 */class ot{constructor(e,t){this.source=e,this.path=t,this.type=Q.LISTEN_COMPLETE}operationForChild(e){return E(this.path)?new ot(this.source,I()):new ot(this.source,x(this.path))}}/**
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
 */class Ee{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Q.OVERWRITE}operationForChild(e){return E(this.path)?new Ee(this.source,I(),this.snap.getImmediateChild(e)):new Ee(this.source,x(this.path),this.snap)}}/**
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
 */class at{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Q.MERGE}operationForChild(e){if(E(this.path)){const t=this.children.subtree(new R(e));return t.isEmpty()?null:t.value?new Ee(this.source,I(),t.value):new at(this.source,I(),t)}else return f(C(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new at(this.source,x(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class be{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(E(e))return this.isFullyInitialized()&&!this.filtered_;const t=C(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Mc{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Lc(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Sc(o.childName,o.snapshotNode))}),ze(n,i,"child_removed",e,s,t),ze(n,i,"child_added",e,s,t),ze(n,i,"child_moved",r,s,t),ze(n,i,"child_changed",e,s,t),ze(n,i,"value",e,s,t),i}function ze(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>Bc(n,a,l)),o.forEach(a=>{const l=Fc(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Fc(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Bc(n,e,t){if(e.childName==null||t.childName==null)throw We("Should only compare child_ events.");const s=new v(e.childName,e.snapshotNode),i=new v(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function Ht(n,e){return{eventCache:n,serverCache:e}}function Ke(n,e,t,s){return Ht(new be(e,t,s),n.serverCache)}function gr(n,e,t,s){return Ht(n.eventCache,new be(e,t,s))}function En(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function we(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let rn;const Uc=()=>(rn||(rn=new $(Il)),rn);class A{constructor(e,t=Uc()){this.value=e,this.children=t}static fromObject(e){let t=new A(null);return q(e,(s,i)=>{t=t.set(new R(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:I(),value:this.value};if(E(e))return null;{const s=C(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(x(e),t);return r!=null?{path:O(new R(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(E(e))return this;{const t=C(e),s=this.children.get(t);return s!==null?s.subtree(x(e)):new A(null)}}set(e,t){if(E(e))return new A(t,this.children);{const s=C(e),r=(this.children.get(s)||new A(null)).set(x(e),t),o=this.children.insert(s,r);return new A(this.value,o)}}remove(e){if(E(e))return this.children.isEmpty()?new A(null):new A(null,this.children);{const t=C(e),s=this.children.get(t);if(s){const i=s.remove(x(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new A(null):new A(this.value,r)}else return this}}get(e){if(E(e))return this.value;{const t=C(e),s=this.children.get(t);return s?s.get(x(e)):null}}setTree(e,t){if(E(e))return t;{const s=C(e),r=(this.children.get(s)||new A(null)).setTree(x(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new A(this.value,o)}}fold(e){return this.fold_(I(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(O(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,I(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(E(e))return null;{const r=C(e),o=this.children.get(r);return o?o.findOnPath_(x(e),O(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,I(),t)}foreachOnPath_(e,t,s){if(E(e))return this;{this.value&&s(t,this.value);const i=C(e),r=this.children.get(i);return r?r.foreachOnPath_(x(e),O(t,i),s):new A(null)}}foreach(e){this.foreach_(I(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(O(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class X{constructor(e){this.writeTree_=e}static empty(){return new X(new A(null))}}function Qe(n,e,t){if(E(e))return new X(new A(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=H(i,e);return r=r.updateChild(o,t),new X(n.writeTree_.set(i,r))}else{const i=new A(t),r=n.writeTree_.setTree(e,i);return new X(r)}}}function Ys(n,e,t){let s=n;return q(t,(i,r)=>{s=Qe(s,O(e,i),r)}),s}function Ks(n,e){if(E(e))return X.empty();{const t=n.writeTree_.setTree(e,new A(null));return new X(t)}}function bn(n,e){return Te(n,e)!=null}function Te(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(H(t.path,e)):null}function Qs(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(D,(s,i)=>{e.push(new v(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new v(s,i.value))}),e}function le(n,e){if(E(e))return n;{const t=Te(n,e);return t!=null?new X(new A(t)):new X(n.writeTree_.subtree(e))}}function wn(n){return n.writeTree_.isEmpty()}function Ue(n,e){return yr(I(),n.writeTree_,e)}function yr(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(f(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=yr(O(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(O(n,".priority"),s)),t}}/**
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
 */function zn(n,e){return br(e,n)}function Wc(n,e,t,s,i){f(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Qe(n.visibleWrites,e,t)),n.lastWriteId=s}function Vc(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Hc(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);f(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&$c(a,s.path)?i=!1:K(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return qc(n),!0;if(s.snap)n.visibleWrites=Ks(n.visibleWrites,s.path);else{const a=s.children;q(a,l=>{n.visibleWrites=Ks(n.visibleWrites,O(s.path,l))})}return!0}else return!1}function $c(n,e){if(n.snap)return K(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&K(O(n.path,t),e))return!0;return!1}function qc(n){n.visibleWrites=vr(n.allWrites,jc,I()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function jc(n){return n.visible}function vr(n,e,t){let s=X.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)K(t,o)?(a=H(t,o),s=Qe(s,a,r.snap)):K(o,t)&&(a=H(o,t),s=Qe(s,I(),r.snap.getChild(a)));else if(r.children){if(K(t,o))a=H(t,o),s=Ys(s,a,r.children);else if(K(o,t))if(a=H(o,t),E(a))s=Ys(s,I(),r.children);else{const l=Le(r.children,C(a));if(l){const c=l.getChild(x(a));s=Qe(s,I(),c)}}}else throw We("WriteRecord should have .snap or .children")}}return s}function Cr(n,e,t,s,i){if(!s&&!i){const r=Te(n.visibleWrites,e);if(r!=null)return r;{const o=le(n.visibleWrites,e);if(wn(o))return t;if(t==null&&!bn(o,I()))return null;{const a=t||g.EMPTY_NODE;return Ue(o,a)}}}else{const r=le(n.visibleWrites,e);if(!i&&wn(r))return t;if(!i&&t==null&&!bn(r,I()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(K(c.path,e)||K(e,c.path))},a=vr(n.allWrites,o,e),l=t||g.EMPTY_NODE;return Ue(a,l)}}}function zc(n,e,t){let s=g.EMPTY_NODE;const i=Te(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(D,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=le(n.visibleWrites,e);return t.forEachChild(D,(o,a)=>{const l=Ue(le(r,new R(o)),a);s=s.updateImmediateChild(o,l)}),Qs(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=le(n.visibleWrites,e);return Qs(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Gc(n,e,t,s,i){f(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=O(e,t);if(bn(n.visibleWrites,r))return null;{const o=le(n.visibleWrites,r);return wn(o)?i.getChild(t):Ue(o,i.getChild(t))}}function Yc(n,e,t,s){const i=O(e,t),r=Te(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=le(n.visibleWrites,i);return Ue(o,s.getNode().getImmediateChild(t))}else return null}function Kc(n,e){return Te(n.visibleWrites,e)}function Qc(n,e,t,s,i,r,o){let a;const l=le(n.visibleWrites,e),c=Te(l,I());if(c!=null)a=c;else if(t!=null)a=Ue(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=d.getNext();for(;_&&h.length<i;)u(_,s)!==0&&h.push(_),_=d.getNext();return h}else return[]}function Xc(){return{visibleWrites:X.empty(),allWrites:[],lastWriteId:-1}}function At(n,e,t,s){return Cr(n.writeTree,n.treePath,e,t,s)}function Gn(n,e){return zc(n.writeTree,n.treePath,e)}function Xs(n,e,t,s){return Gc(n.writeTree,n.treePath,e,t,s)}function Dt(n,e){return Kc(n.writeTree,O(n.treePath,e))}function Jc(n,e,t,s,i,r){return Qc(n.writeTree,n.treePath,e,t,s,i,r)}function Yn(n,e,t){return Yc(n.writeTree,n.treePath,e,t)}function Er(n,e){return br(O(n.treePath,e),n.writeTree)}function br(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Zc{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;f(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),f(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,it(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,st(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Be(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,it(s,e.snapshotNode,i.oldSnap));else throw We("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class eh{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const wr=new eh;class Kn{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new be(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yn(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:we(this.viewCache_),r=Jc(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function th(n){return{filter:n}}function nh(n,e){f(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),f(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function sh(n,e,t,s,i){const r=new Zc;let o,a;if(t.type===Q.OVERWRITE){const c=t;c.source.fromUser?o=In(n,e,c.path,c.snap,s,i,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!E(c.path),o=Pt(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===Q.MERGE){const c=t;c.source.fromUser?o=rh(n,e,c.path,c.children,s,i,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Tn(n,e,c.path,c.children,s,i,a,r))}else if(t.type===Q.ACK_USER_WRITE){const c=t;c.revert?o=lh(n,e,c.path,s,i,r):o=oh(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===Q.LISTEN_COMPLETE)o=ah(n,e,t.path,s,r);else throw We("Unknown operation type: "+t.type);const l=r.getChanges();return ih(e,o,l),{viewCache:o,changes:l}}function ih(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=En(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(_r(En(e)))}}function Ir(n,e,t,s,i,r){const o=e.eventCache;if(Dt(s,t)!=null)return e;{let a,l;if(E(t))if(f(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=we(e),h=c instanceof g?c:g.EMPTY_NODE,u=Gn(s,h);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=At(s,we(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=C(t);if(c===".priority"){f(ce(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=Xs(s,t,h,l);u!=null?a=n.filter.updatePriority(h,u):a=o.getNode()}else{const h=x(t);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Xs(s,t,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=Yn(s,c,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),c,u,h,i,r):a=o.getNode()}}return Ke(e,a,o.isFullyInitialized()||E(t),n.filter.filtersNodes())}}function Pt(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const h=o?n.filter:n.filter.getIndexedFilter();if(E(t))c=h.updateFullNode(l.getNode(),s,null);else if(h.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(t,s);c=h.updateFullNode(l.getNode(),_,null)}else{const _=C(t);if(!l.isCompleteForPath(t)&&ce(t)>1)return e;const p=x(t),P=l.getNode().getImmediateChild(_).updateChild(p,s);_===".priority"?c=h.updatePriority(l.getNode(),P):c=h.updateChild(l.getNode(),_,P,p,wr,null)}const u=gr(e,c,l.isFullyInitialized()||E(t),h.filtersNodes()),d=new Kn(i,u,r);return Ir(n,u,t,i,d,a)}function In(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const h=new Kn(i,e,r);if(E(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ke(e,c,!0,n.filter.filtersNodes());else{const u=C(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=Ke(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=x(t),_=a.getNode().getImmediateChild(u);let p;if(E(d))p=s;else{const T=h.getCompleteChild(u);T!=null?rr(d)===".priority"&&T.getChild(ar(d)).isEmpty()?p=T:p=T.updateChild(d,s):p=g.EMPTY_NODE}if(_.equals(p))l=e;else{const T=n.filter.updateChild(a.getNode(),u,p,d,h,o);l=Ke(e,T,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Js(n,e){return n.eventCache.isCompleteForChild(e)}function rh(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const h=O(t,l);Js(e,C(h))&&(a=In(n,a,h,c,i,r,o))}),s.foreach((l,c)=>{const h=O(t,l);Js(e,C(h))||(a=In(n,a,h,c,i,r,o))}),a}function Zs(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Tn(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;E(t)?c=s:c=new A(null).setTree(t,s);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const _=e.serverCache.getNode().getImmediateChild(u),p=Zs(n,_,d);l=Pt(n,l,new R(u),p,i,r,o,a)}}),c.children.inorderTraversal((u,d)=>{const _=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!_){const p=e.serverCache.getNode().getImmediateChild(u),T=Zs(n,p,d);l=Pt(n,l,new R(u),T,i,r,o,a)}}),l}function oh(n,e,t,s,i,r,o){if(Dt(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(E(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Pt(n,e,t,l.getNode().getChild(t),i,r,a,o);if(E(t)){let c=new A(null);return l.getNode().forEachChild(Oe,(h,u)=>{c=c.set(new R(h),u)}),Tn(n,e,t,c,i,r,a,o)}else return e}else{let c=new A(null);return s.foreach((h,u)=>{const d=O(t,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),Tn(n,e,t,c,i,r,a,o)}}function ah(n,e,t,s,i){const r=e.serverCache,o=gr(e,r.getNode(),r.isFullyInitialized()||E(t),r.isFiltered());return Ir(n,o,t,s,wr,i)}function lh(n,e,t,s,i,r){let o;if(Dt(s,t)!=null)return e;{const a=new Kn(s,e,i),l=e.eventCache.getNode();let c;if(E(t)||C(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=At(s,we(e));else{const u=e.serverCache.getNode();f(u instanceof g,"serverChildren would be complete if leaf node"),h=Gn(s,u)}h=h,c=n.filter.updateFullNode(l,h,r)}else{const h=C(t);let u=Yn(s,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=n.filter.updateChild(l,h,u,x(t),a,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,g.EMPTY_NODE,x(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=At(s,we(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Dt(s,I())!=null,Ke(e,c,o,n.filter.filtersNodes())}}/**
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
 */class ch{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Hn(s.getIndex()),r=Nc(s);this.processor_=th(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(g.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(g.EMPTY_NODE,a.getNode(),null),h=new be(l,o.isFullyInitialized(),i.filtersNodes()),u=new be(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ht(u,h),this.eventGenerator_=new Mc(this.query_)}get query(){return this.query_}}function hh(n){return n.viewCache_.serverCache.getNode()}function uh(n,e){const t=we(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!E(e)&&!t.getImmediateChild(C(e)).isEmpty())?t.getChild(e):null}function ei(n){return n.eventRegistrations_.length===0}function dh(n,e){n.eventRegistrations_.push(e)}function ti(n,e,t){const s=[];if(t){f(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function ni(n,e,t,s){e.type===Q.MERGE&&e.source.queryId!==null&&(f(we(n.viewCache_),"We should always have a full cache before handling merges"),f(En(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=sh(n.processor_,i,e,t,s);return nh(n.processor_,r.viewCache),f(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Tr(n,r.changes,r.viewCache.eventCache.getNode(),null)}function fh(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(D,(r,o)=>{s.push(Be(r,o))}),t.isFullyInitialized()&&s.push(_r(t.getNode())),Tr(n,s,t.getNode(),e)}function Tr(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Lc(n.eventGenerator_,e,t,i)}/**
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
 */let Ot;class _h{constructor(){this.views=new Map}}function ph(n){f(!Ot,"__referenceConstructor has already been defined"),Ot=n}function mh(){return f(Ot,"Reference.ts has not been loaded"),Ot}function gh(n){return n.views.size===0}function Qn(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return f(r!=null,"SyncTree gave us an op for an invalid query."),ni(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(ni(o,e,t,s));return r}}function yh(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=At(t,i?s:null),l=!1;a?l=!0:s instanceof g?(a=Gn(t,s),l=!1):(a=g.EMPTY_NODE,l=!1);const c=Ht(new be(a,l,!1),new be(s,i,!1));return new ch(e,c)}return o}function vh(n,e,t,s,i,r){const o=yh(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),dh(o,t),fh(o,t)}function Ch(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=he(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(ti(c,t,s)),ei(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(ti(l,t,s)),ei(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!he(n)&&r.push(new(mh())(e._repo,e._path)),{removed:r,events:o}}function Sr(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Me(n,e){let t=null;for(const s of n.views.values())t=t||uh(s,e);return t}function Rr(n,e){if(e._queryParams.loadsAllData())return $t(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Nr(n,e){return Rr(n,e)!=null}function he(n){return $t(n)!=null}function $t(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Mt;function Eh(n){f(!Mt,"__referenceConstructor has already been defined"),Mt=n}function bh(){return f(Mt,"Reference.ts has not been loaded"),Mt}let wh=1;class si{constructor(e){this.listenProvider_=e,this.syncPointTree_=new A(null),this.pendingWriteTree_=Xc(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ih(n,e,t,s,i){return Wc(n.pendingWriteTree_,e,t,s,i),i?_t(n,new Ee(mr(),e,t)):[]}function ke(n,e,t=!1){const s=Vc(n.pendingWriteTree_,e);if(Hc(n.pendingWriteTree_,e)){let r=new A(null);return s.snap!=null?r=r.set(I(),!0):q(s.children,o=>{r=r.set(new R(o),!0)}),_t(n,new xt(s.path,r,t))}else return[]}function qt(n,e,t){return _t(n,new Ee(qn(),e,t))}function Th(n,e,t){const s=A.fromObject(t);return _t(n,new at(qn(),e,s))}function Sh(n,e){return _t(n,new ot(qn(),e))}function Rh(n,e,t){const s=Xn(n,t);if(s){const i=Jn(s),r=i.path,o=i.queryId,a=H(r,e),l=new ot(jn(o),a);return Zn(n,r,l)}else return[]}function Sn(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Nr(o,e))){const l=Ch(o,e,t,s);gh(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(d,_)=>he(_));if(h&&!u){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=xh(d);for(let p=0;p<_.length;++p){const T=_[p],P=T.query,J=Dr(n,T);n.listenProvider_.startListening(Xe(P),Lt(n,P),J.hashFn,J.onComplete)}}}!u&&c.length>0&&!s&&(h?n.listenProvider_.stopListening(Xe(e),null):c.forEach(d=>{const _=n.queryToTagMap.get(jt(d));n.listenProvider_.stopListening(Xe(d),_)}))}Ah(n,c)}return a}function Nh(n,e,t,s){const i=Xn(n,s);if(i!=null){const r=Jn(i),o=r.path,a=r.queryId,l=H(o,e),c=new Ee(jn(a),l,t);return Zn(n,o,c)}else return[]}function kh(n,e,t,s){const i=Xn(n,s);if(i){const r=Jn(i),o=r.path,a=r.queryId,l=H(o,e),c=A.fromObject(t),h=new at(jn(a),l,c);return Zn(n,o,h)}else return[]}function ii(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,_)=>{const p=H(d,i);r=r||Me(_,p),o=o||he(_)});let a=n.syncPointTree_.get(i);a?(o=o||he(a),r=r||Me(a,I())):(a=new _h,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=g.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((_,p)=>{const T=Me(p,I());T&&(r=r.updateImmediateChild(_,T))}));const c=Nr(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=jt(e);f(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=Dh();n.queryToTagMap.set(d,_),n.tagToQueryMap.set(_,d)}const h=zn(n.pendingWriteTree_,i);let u=vh(a,e,t,h,r,l);if(!c&&!o&&!s){const d=Rr(a,e);u=u.concat(Ph(n,e,d))}return u}function kr(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=H(o,e),c=Me(a,l);if(c)return c});return Cr(i,e,r,t,!0)}function _t(n,e){return xr(e,n.syncPointTree_,null,zn(n.pendingWriteTree_,I()))}function xr(n,e,t,s){if(E(n.path))return Ar(n,e,t,s);{const i=e.get(I());t==null&&i!=null&&(t=Me(i,I()));let r=[];const o=C(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,h=Er(s,o);r=r.concat(xr(a,l,c,h))}return i&&(r=r.concat(Qn(i,n,s,t))),r}}function Ar(n,e,t,s){const i=e.get(I());t==null&&i!=null&&(t=Me(i,I()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Er(s,o),h=n.operationForChild(o);h&&(r=r.concat(Ar(h,a,l,c)))}),i&&(r=r.concat(Qn(i,n,s,t))),r}function Dr(n,e){const t=e.query,s=Lt(n,t);return{hashFn:()=>(hh(e)||g.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Rh(n,t._path,s):Sh(n,t._path);{const r=Rl(i,t);return Sn(n,t,null,r)}}}}function Lt(n,e){const t=jt(e);return n.queryToTagMap.get(t)}function jt(n){return n._path.toString()+"$"+n._queryIdentifier}function Xn(n,e){return n.tagToQueryMap.get(e)}function Jn(n){const e=n.indexOf("$");return f(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new R(n.substr(0,e))}}function Zn(n,e,t){const s=n.syncPointTree_.get(e);f(s,"Missing sync point for query tag that we're tracking");const i=zn(n.pendingWriteTree_,e);return Qn(s,t,i,null)}function xh(n){return n.fold((e,t,s)=>{if(t&&he(t))return[$t(t)];{let i=[];return t&&(i=Sr(t)),q(s,(r,o)=>{i=i.concat(o)}),i}})}function Xe(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(bh())(n._repo,n._path):n}function Ah(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=jt(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Dh(){return wh++}function Ph(n,e,t){const s=e._path,i=Lt(n,e),r=Dr(n,t),o=n.listenProvider_.startListening(Xe(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)f(!he(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,u)=>{if(!E(c)&&h&&he(h))return[$t(h).query];{let d=[];return h&&(d=d.concat(Sr(h).map(_=>_.query))),q(u,(_,p)=>{d=d.concat(p)}),d}});for(let c=0;c<l.length;++c){const h=l[c];n.listenProvider_.stopListening(Xe(h),Lt(n,h))}}return o}/**
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
 */class es{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new es(t)}node(){return this.node_}}class ts{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=O(this.path_,e);return new ts(this.syncTree_,t)}node(){return kr(this.syncTree_,this.path_)}}const Oh=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ri=function(n,e,t){if(!n||typeof n!="object")return n;if(f(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Mh(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Lh(n[".sv"],e);f(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Mh=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:f(!1,"Unexpected server value: "+n)}},Lh=function(n,e,t){n.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&f(!1,"Unexpected increment value: "+s);const i=e.node();if(f(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Fh=function(n,e,t,s){return ns(e,new ts(t,n),s)},Bh=function(n,e,t){return ns(n,new es(e),t)};function ns(n,e,t){const s=n.getPriority().val(),i=ri(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=ri(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new M(a,U(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new M(i))),o.forEachChild(D,(a,l)=>{const c=ns(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class ss{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function is(n,e){let t=e instanceof R?e:new R(e),s=n,i=C(t);for(;i!==null;){const r=Le(s.node.children,i)||{children:{},childCount:0};s=new ss(i,s,r),t=x(t),i=C(t)}return s}function He(n){return n.node.value}function Pr(n,e){n.node.value=e,Rn(n)}function Or(n){return n.node.childCount>0}function Uh(n){return He(n)===void 0&&!Or(n)}function zt(n,e){q(n.node.children,(t,s)=>{e(new ss(t,n,s))})}function Mr(n,e,t,s){t&&!s&&e(n),zt(n,i=>{Mr(i,e,!0,s)}),t&&s&&e(n)}function Wh(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function pt(n){return new R(n.parent===null?n.name:pt(n.parent)+"/"+n.name)}function Rn(n){n.parent!==null&&Vh(n.parent,n.name,n)}function Vh(n,e,t){const s=Uh(t),i=se(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Rn(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Rn(n))}/**
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
 */const Hh=/[\[\].#$\/\u0000-\u001F\u007F]/,$h=/[\[\].#$\u0000-\u001F\u007F]/,on=10*1024*1024,Lr=function(n){return typeof n=="string"&&n.length!==0&&!Hh.test(n)},Fr=function(n){return typeof n=="string"&&n.length!==0&&!$h.test(n)},qh=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Fr(n)},Br=function(n,e,t){const s=t instanceof R?new oc(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+_e(s));if(typeof e=="function")throw new Error(n+"contains a function "+_e(s)+" with contents = "+e.toString());if(Bi(e))throw new Error(n+"contains "+e.toString()+" "+_e(s));if(typeof e=="string"&&e.length>on/3&&Ut(e)>on)throw new Error(n+"contains a string greater than "+on+" utf8 bytes "+_e(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(q(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Lr(o)))throw new Error(n+" contains an invalid key ("+o+") "+_e(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ac(s,o),Br(n,a,s),lc(s)}),i&&r)throw new Error(n+' contains ".value" child '+_e(s)+" in addition to actual children.")}},Ur=function(n,e,t,s){if(!(s&&t===void 0)&&!Fr(t))throw new Error(Ni(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},jh=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ur(n,e,t,s)},zh=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Lr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!qh(t))throw new Error(Ni(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Gh{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Wr(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Un(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Vr(n,e,t){Wr(n,t),Hr(n,s=>Un(s,e))}function Se(n,e,t){Wr(n,t),Hr(n,s=>K(s,e)||K(e,s))}function Hr(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Yh(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Yh(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();ye&&B("event: "+t.toString()),dt(s)}}}/**
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
 */const Kh="repo_interrupt",Qh=25;class Xh{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Gh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=kt(),this.transactionQueueTree_=new ss,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Jh(n,e,t){if(n.stats_=Fn(n.repoInfo_),n.forceRestClient_||Al())n.server_=new Nt(n.repoInfo_,(s,i,r,o)=>{oi(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ai(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{F(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new te(n.repoInfo_,e,(s,i,r,o)=>{oi(n,s,i,r,o)},s=>{ai(n,s)},s=>{eu(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Ll(n.repoInfo_,()=>new Oc(n.stats_,n.server_)),n.infoData_=new kc,n.infoSyncTree_=new si({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=qt(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),rs(n,"connected",!1),n.serverSyncTree_=new si({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Se(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Zh(n){const t=n.infoData_.getNode(new R(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function $r(n){return Oh({timestamp:Zh(n)})}function oi(n,e,t,s,i){n.dataUpdateCount++;const r=new R(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=bt(t,c=>U(c));o=kh(n.serverSyncTree_,r,l,i)}else{const l=U(t);o=Nh(n.serverSyncTree_,r,l,i)}else if(s){const l=bt(t,c=>U(c));o=Th(n.serverSyncTree_,r,l)}else{const l=U(t);o=qt(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=as(n,r)),Se(n.eventQueue_,a,o)}function ai(n,e){rs(n,"connected",e),e===!1&&nu(n)}function eu(n,e){q(e,(t,s)=>{rs(n,t,s)})}function rs(n,e,t){const s=new R("/.info/"+e),i=U(t);n.infoData_.updateSnapshot(s,i);const r=qt(n.infoSyncTree_,s,i);Se(n.eventQueue_,s,r)}function tu(n){return n.nextWriteId_++}function nu(n){qr(n,"onDisconnectEvents");const e=$r(n),t=kt();Cn(n.onDisconnect_,I(),(i,r)=>{const o=Fh(i,r,n.serverSyncTree_,e);pr(t,i,o)});let s=[];Cn(t,I(),(i,r)=>{s=s.concat(qt(n.serverSyncTree_,i,r));const o=au(n,i);as(n,o)}),n.onDisconnect_=kt(),Se(n.eventQueue_,I(),s)}function su(n,e,t){let s;C(e._path)===".info"?s=ii(n.infoSyncTree_,e,t):s=ii(n.serverSyncTree_,e,t),Vr(n.eventQueue_,e._path,s)}function li(n,e,t){let s;C(e._path)===".info"?s=Sn(n.infoSyncTree_,e,t):s=Sn(n.serverSyncTree_,e,t),Vr(n.eventQueue_,e._path,s)}function iu(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Kh)}function qr(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),B(t,...e)}function jr(n,e,t){return kr(n.serverSyncTree_,e,t)||g.EMPTY_NODE}function os(n,e=n.transactionQueueTree_){if(e||Gt(n,e),He(e)){const t=Gr(n,e);f(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&ru(n,pt(e),t)}else Or(e)&&zt(e,t=>{os(n,t)})}function ru(n,e,t){const s=t.map(c=>c.currentWriteId),i=jr(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const h=t[c];f(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=H(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{qr(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<t.length;d++)t[d].status=2,h=h.concat(ke(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&u.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Gt(n,is(n.transactionQueueTree_,e)),os(n,n.transactionQueueTree_),Se(n.eventQueue_,e,h);for(let d=0;d<u.length;d++)dt(u[d])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{z("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}as(n,e)}},o)}function as(n,e){const t=zr(n,e),s=pt(t),i=Gr(n,t);return ou(n,i,s),s}function ou(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=H(t,l.path);let h=!1,u;if(f(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,i=i.concat(ke(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Qh)h=!0,u="maxretry",i=i.concat(ke(n.serverSyncTree_,l.currentWriteId,!0));else{const d=jr(n,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){Br("transaction failed: Data returned ",_,l.path);let p=U(_);typeof _=="object"&&_!=null&&se(_,".priority")||(p=p.updatePriority(d.getPriority()));const P=l.currentWriteId,J=$r(n),ue=Bh(p,d,J);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=ue,l.currentWriteId=tu(n),o.splice(o.indexOf(P),1),i=i.concat(Ih(n.serverSyncTree_,l.path,ue,l.currentWriteId,l.applyLocally)),i=i.concat(ke(n.serverSyncTree_,P,!0))}else h=!0,u="nodata",i=i.concat(ke(n.serverSyncTree_,l.currentWriteId,!0))}Se(n.eventQueue_,t,i),i=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(u),!1,null))))}Gt(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)dt(s[a]);os(n,n.transactionQueueTree_)}function zr(n,e){let t,s=n.transactionQueueTree_;for(t=C(e);t!==null&&He(s)===void 0;)s=is(s,t),e=x(e),t=C(e);return s}function Gr(n,e){const t=[];return Yr(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Yr(n,e,t){const s=He(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);zt(e,i=>{Yr(n,i,t)})}function Gt(n,e){const t=He(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Pr(e,t.length>0?t:void 0)}zt(e,s=>{Gt(n,s)})}function au(n,e){const t=pt(zr(n,e)),s=is(n.transactionQueueTree_,e);return Wh(s,i=>{an(n,i)}),an(n,s),Mr(s,i=>{an(n,i)}),t}function an(n,e){const t=He(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(f(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(f(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(ke(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Pr(e,void 0):t.length=r+1,Se(n.eventQueue_,pt(e),i);for(let o=0;o<s.length;o++)dt(s[o])}}/**
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
 */function lu(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function cu(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):z(`Invalid query segment '${t}' in query '${n}'`)}return e}const ci=function(n,e){const t=hu(n),s=t.namespace;t.domain==="firebase.com"&&ne(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&ne("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||bl();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Qi(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new R(t.pathString)}},hu=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(h,u)),h<u&&(i=lu(n.substring(h,u)));const d=cu(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")t="localhost";else if(_.split(".").length<=2)t=_;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class Kr{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+F(this.snapshot.exportVal())}}class Qr{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class uu{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return f(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ls{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return E(this._path)?null:rr(this._path)}get ref(){return new ie(this._repo,this._path)}get _queryIdentifier(){const e=zs(this._queryParams),t=Mn(e);return t==="{}"?"default":t}get _queryObject(){return zs(this._queryParams)}isEqual(e){if(e=Wt(e),!(e instanceof ls))return!1;const t=this._repo===e._repo,s=Un(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+rc(this._path)}}class ie extends ls{constructor(e,t){super(e,t,new $n,!1)}get parent(){const e=ar(this._path);return e===null?null:new ie(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class lt{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new R(e),s=Ft(this.ref,e);return new lt(this._node.getChild(t),s,D)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new lt(i,Ft(this.ref,s),D)))}hasChild(e){const t=new R(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function du(n,e){return n=Wt(n),n._checkNotDeleted("ref"),e!==void 0?Ft(n._root,e):n._root}function Ft(n,e){return n=Wt(n),C(n._path)===null?jh("child","path",e,!1):Ur("child","path",e,!1),new ie(n._repo,O(n._path,e))}class cs{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Kr("value",this,new lt(e.snapshotNode,new ie(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Qr(this,e,t):null}matches(e){return e instanceof cs?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class hs{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Qr(this,e,t):null}createEvent(e,t){f(e.childName!=null,"Child events should have a childName.");const s=Ft(new ie(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Kr(e.type,this,new lt(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof hs?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function fu(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=t,c=(h,u)=>{li(n._repo,n,a),l(h,u)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new uu(t,r||void 0),a=e==="value"?new cs(o):new hs(e,o);return su(n._repo,n,a),()=>li(n._repo,n,a)}function _u(n,e,t,s){return fu(n,"value",e,t,s)}ph(ie);Eh(ie);/**
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
 */const pu="FIREBASE_DATABASE_EMULATOR_HOST",Nn={};let mu=!1;function gu(n,e,t,s){n.repoInfo_=new Qi(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function yu(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||ne("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),B("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=ci(r,i),a=o.repoInfo,l,c;typeof process<"u"&&Ns&&(c=Ns[pu]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=ci(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const h=i&&l?new Pe(Pe.OWNER):new Pl(n.name,n.options,e);zh("Invalid Firebase Database URL",o),E(o.path)||ne("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Cu(a,n,h,new Dl(n.name,t));return new Eu(u,n)}function vu(n,e){const t=Nn[e];(!t||t[n.key]!==n)&&ne(`Database ${e}(${n.repoInfo_}) has already been deleted.`),iu(n),delete t[n.key]}function Cu(n,e,t,s){let i=Nn[e.name];i||(i={},Nn[e.name]=i);let r=i[n.toURLString()];return r&&ne("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Xh(n,mu,t,s),i[n.toURLString()]=r,r}class Eu{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Jh(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ie(this._repo,I())),this._rootInternal}_delete(){return this._rootInternal!==null&&(vu(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ne("Cannot call "+e+" on a deleted database.")}}function bu(n=rl(),e){const t=tl(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Go("database");s&&wu(t,...s)}return t}function wu(n,e,t,s={}){n=Wt(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&ne("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&ne('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Pe(Pe.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Yo(s.mockUserToken,n.app.options.projectId);r=new Pe(o)}gu(i,e,t,r)}/**
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
 */function Iu(n){gl(il),It(new et("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return yu(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Ae(ks,xs,n),Ae(ks,xs,"esm2017")}te.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};te.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Iu();const Tu={apiKey:"AIzaSyAcdizRPIeFx-2YOreONXcsVVr6TCzAzXQ",authDomain:"tcom-659a5.firebaseapp.com",databaseURL:"https://tcom-659a5-default-rtdb.europe-west1.firebasedatabase.app",projectId:"tcom-659a5",storageBucket:"tcom-659a5.appspot.com",messagingSenderId:"228852455401",appId:"1:228852455401:web:3d1ca90f59c238aa4a9d78"},Su=Di(Tu),Ru=bu(Su),kn=to({items:[],async setItems(){const n=du(Ru,"items");_u(n,async e=>{this.items=await e.val()})}}),Nu={class:"dark:bg-dark-2 bg-light-2 mx-4 lg:mx-0"},ku={key:0,class:"rounded w-full overflow-auto md:h-full pt-10 md:mt-0 h-full px-2"},xu={class:"flex justify-between items-center"},Au={class:"text-lg gradient-text"},Du=m("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"transform scale-75"},[m("rect",{width:"48",height:"48"}),m("path",{d:"M12.3638 8L5.99981 14.364L12.3638 20.7279",class:"dark:stroke-dark-3 stroke-light-3","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}),m("path",{d:"M6 14.364L28.6722 14.364C35.557 14.364 41.2122 19.8028 41.4805 26.6824V26.6824C41.7641 33.952 35.9474 40 28.6722 40H12",class:"dark:stroke-dark-3 stroke-light-3","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Pu=[Du],Ou={class:"md:px-4 scrollbar-thin scrollbar-custom md:py-4 lg:h-auto h-[calc(100vh-128px)] lg:overflow-auto overflow-y-auto"},Mu=["innerHTML"],Lu={key:0,class:"my-4 text-dark-1 dark:text-light-1"},Fu={class:"text-warcraft"},Bu={class:"md:px-2 flex flex-col gap-2"},Uu={key:0},Wu=m("span",{class:"uppercase text-light-3"},"Из чего скрафтить:",-1),Vu=["onClick"],Hu={class:"ml-2 text-right"},$u={key:0},qu={key:1},ju=m("span",{class:"uppercase text-light-3"},"Создается из",-1),zu={class:"text-warcraft cursor-pointer w-full flex justify-between"},Gu=["onClick"],Yu={class:"ml-2 text-right"},Ku={key:2},Qu=m("span",{class:"uppercase text-light-3"},"Используется в:",-1),Xu={class:"w-full flex justify-between"},Ju=["onClick"],Zu={class:"ml-2 text-right"},ed={key:3},td=m("span",{class:"uppercase text-light-3"},"Можно апнуть в кузнице в:",-1),nd={class:"w-full flex justify-between"},sd=["onClick"],id={class:"ml-2 text-right"},hi=Ie({__name:"ItemInfo",props:Bt({activeItem:{}},{name:{},nameModifiers:{},boss:{},bossModifiers:{}}),emits:["update:name","update:boss"],setup(n){Je(n,"name"),Je(n,"boss");const e=di(),t=Ge(()=>kn.items),s=Ge(()=>t.value.filter(o=>{var a;return(a=o.craft)==null?void 0:a.some(l=>l.items.find(c=>c.id===n.activeItem.id))})),i=Ge(()=>t.value.filter(o=>{var a;return(a=o.gems)==null?void 0:a.find(l=>l.id===n.activeItem.id)})),r=o=>{e.push({query:{item:o}})};return(o,a)=>{var l,c;return b(),w("div",Nu,[o.activeItem?(b(),w("div",ku,[m("div",xu,[m("div",Au,V(o.activeItem.name),1),String(W(e).options.history.state.back).startsWith("/?item=")?(b(),w("button",{key:0,onClick:a[0]||(a[0]=(...h)=>W(e).back&&W(e).back(...h)),class:"text-4xl cursor-pointer"},Pu)):G("",!0)]),m("div",Ou,[m("article",{class:"mb-2",innerHTML:o.activeItem.description},null,8,Mu),o.activeItem.loot?(b(),w("div",Lu,[no(" Где достать: "),m("span",Fu,V(o.activeItem.loot),1)])):G("",!0),m("div",Bu,[(l=o.activeItem.craft)!=null&&l.length?(b(),w("div",Uu,[Wu,m("article",null,[(b(!0),w(pe,null,me(o.activeItem.craft,(h,u)=>(b(),w("ul",{key:h.id,class:"w-full"},[(b(!0),w(pe,null,me(h.items,(d,_)=>(b(),w("li",{key:d.id,class:"cursor-pointer w-full flex justify-between"},[m("button",{onClick:p=>r(d.id),class:"text-left text-warcraft"},V(d.name),9,Vu),m("span",Hu,"("+V(d.loot)+")",1)]))),128)),u+1<o.activeItem.craft.length?(b(),w("span",$u,"или")):G("",!0)]))),128))])])):G("",!0),(c=o.activeItem.gems)!=null&&c.length?(b(),w("div",qu,[ju,m("article",null,[(b(!0),w(pe,null,me(o.activeItem.gems,h=>(b(),w("ul",{key:h.id,class:"w-full"},[m("li",zu,[m("button",{onClick:u=>r(h.id),class:"text-left"},V(h.name),9,Gu),m("span",Yu,"("+V(h.loot||"?")+")",1)])]))),128))])])):G("",!0),s.value.length?(b(),w("div",Ku,[Qu,m("article",null,[(b(!0),w(pe,null,me(s.value,h=>(b(),w("ul",{key:h.id,class:"w-full"},[m("li",Xu,[m("button",{onClick:u=>r(h.id),class:"cursor-pointer text-left text-warcraft"},V(h.name),9,Ju),m("span",Zu," ("+V(h.loot||"?")+") ",1)])]))),128))])])):G("",!0),i.value.length?(b(),w("div",ed,[td,m("article",null,[(b(!0),w(pe,null,me(i.value,h=>(b(),w("ul",{key:h.id,class:"w-full"},[m("li",nd,[m("button",{onClick:u=>r(h.id),class:"cursor-pointer text-warcraft text-left"},V(h.name),9,sd),m("span",id," ("+V(h.loot||"?")+") ",1)])]))),128))])])):G("",!0)])])])):G("",!0)])}}}),rd={key:0},od={key:0,class:"w-1/2 lg:min-w-96 lg:mx-2 mb-4"},ad=m("g",null,[m("path",{d:"m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"})],-1),ld=[ad],cd={class:"flex flex-wrap mb-2"},hd={class:"flex flex-col gap-2"},dd=Ie({__name:"HomeView",setup(n){const e=di(),t=lo(),s=Ge(()=>kn.items),i=j(""),r=j(""),o=j(!1),a=j(!1),l=j("Тип предмета"),c=Ge(()=>{let N=s.value;return i.value&&(N=N.filter(y=>y.name.toLowerCase().includes(i.value.toLowerCase()))),r.value&&(N=N.filter(y=>{var S;return(S=y.loot)==null?void 0:S.toLowerCase().includes(r.value.toLocaleLowerCase())})),o.value&&(N=N.filter(y=>y.description.includes("одавляющ"))),a.value&&(N=N.filter(y=>y.description.includes("крит навыкам")||y.description.includes("крита навыкам"))),l.value&&l.value!=="Тип предмета"&&(l.value==="Реликвия"?N=N.filter(y=>y.name.includes(l.value)):N=N.filter(y=>y.description.includes(l.value))),N.sort((y,S)=>{var de,Yt,us,ds;return((de=y.craft)==null?void 0:de.length)<((Yt=S.craft)==null?void 0:Yt.length)||y.name.startsWith("II")?1:((us=y.craft)==null?void 0:us.length)>((ds=S.craft)==null?void 0:ds.length)?-1:0})}),{list:h,containerProps:u,wrapperProps:d,scrollTo:_}=so(c,{itemHeight:22}),p=j(null);ui(async()=>{await kn.setItems()}),fs(s,()=>{t.query.item&&P(+t.query.item),console.log(s.value.map(N=>N.id))});const T=j(),P=N=>{var y,S;e.push({query:{item:N}}),p.value=s.value.find(de=>de.id===N)||p.value,T.value&&((y=T.value)==null?void 0:y.clientWidth)<768&&((S=J.value)==null||S.open())};fs(()=>t.query.item,async N=>{N&&(p.value=s.value.find(y=>y.id===+N)||p.value)}),j(!1);const J=j(null);j();const ue=(N,y)=>{i.value=N,r.value=y,_(0)},Z=j(!1);return(N,y)=>(b(),w("main",{class:"flex relative flex-wrap md:flex-row flex-col-reverse lg:mx-4 gap-2 overflow-x-hidden",ref_key:"main",ref:T},[re(W(po),{ref_key:"modal",ref:J,class:"md:hidden md:pointer-events-none"},{default:io(()=>[p.value?(b(),co(W(hi),{key:0,class:"w-11/12",activeItem:p.value,onSearch:ue},null,8,["activeItem"])):G("",!0)]),_:1},512),(b(),w("div",{class:"lg:w-fit w-full block-gradient lg:px-8 px-4 rounded-3xl md:max-w-[380px]",key:c.value.length},[c.value.length?G("",!0):(b(),w("div",rd,"Предметов не найдено")),m("div",ao(W(u),{class:"w-full md:w-[340px] scrollbar-custom overflow-y-scroll md:h-[calc(100vh-230px)] h-[calc(100vh-96px)] mb-4"}),[m("div",ro(oo(W(d))),[(b(!0),w(pe,null,me(W(h),S=>{var de;return b(),w("div",{key:S.index,style:{height:"32px"},class:"mb-2 flex gap-2 w-fit"},[re(W(uo),{title:S.data.name,onClick:Yt=>P(S.data.id),active:S.data.id===((de=p.value)==null?void 0:de.id),class:"w max-w-80"},null,8,["title","onClick","active"])])}),128))],16)],16)])),p.value?(b(),w("div",od,[re(W(hi),{activeItem:p.value,onSearch:ue,name:i.value,"onUpdate:name":y[0]||(y[0]=S=>i.value=S),boss:r.value,"onUpdate:boss":y[1]||(y[1]=S=>r.value=S),class:"md:block hidden block-gradient md:p-8 px-2 rounded-3xl"},null,8,["activeItem","name","boss"])])):G("",!0),m("div",{class:xe(["md:block dark:bg-dark-2 bg-light-2 mb-5 rounded-3xl w-fit md:p-8 p-6 ml-auto h-fit fixed top-36 right-0 transition-all border-2 border-light-3 z-10",{"translate-x-full mr-4":!Z.value}])},[m("button",{class:xe(["absolute top-0 bottom-0 w-10",Z.value?"-left-3":"-left-[29px]"]),onClick:y[2]||(y[2]=S=>Z.value=!Z.value)},[(b(),w("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 129 129",class:xe(["fill-light-3",Z.value?"":"rotate-180"])},ld,2))],2),m("div",cd,[re(W(_s),{value:i.value,"onUpdate:value":y[3]||(y[3]=S=>i.value=S),placeholder:"Поиск по названию",position:"left",class:"max-w-40"},null,8,["value"]),re(W(_s),{value:r.value,"onUpdate:value":y[4]||(y[4]=S=>r.value=S),placeholder:"Поиск по боссу",position:"right",class:"max-w-40"},null,8,["value"])]),m("div",hd,[re(W(ps),{modelValue:o.value,"onUpdate:modelValue":y[5]||(y[5]=S=>o.value=S),label:"Подавляющий крит"},null,8,["modelValue"]),re(W(ps),{modelValue:a.value,"onUpdate:modelValue":y[6]||(y[6]=S=>a.value=S),label:"Крит навыками"},null,8,["modelValue"]),re(W(bo),{class:"w-fit",modelValue:l.value,"onUpdate:modelValue":y[7]||(y[7]=S=>l.value=S),list:["Граальный артефакт","Реликвия","Сокровище","Bloody Item","Black Item","Aqua","Жертвенный","Материал"]},null,8,["modelValue"])])],2)],512))}});export{dd as default};
