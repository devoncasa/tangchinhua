import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
const source = ts.transpileModule(readFileSync('blossom/analytics.ts','utf8'), {compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
function session(host, search='', saved=null, storageFails=false) {
  const data=new Map(saved ? [['ga_debug',saved]] : []), scripts=[];
  const window={location:{hostname:host,origin:'https://'+host,pathname:'/zh/contact/',search}};
  const context={exports:{},URLSearchParams,window,document:{documentElement:{lang:'zh-Hans'},createElement:()=>({}),head:{append:s=>scripts.push(s)}},sessionStorage:{getItem:k=>{if(storageFails)throw Error();return data.get(k)},setItem:(k,v)=>{if(storageFails)throw Error();data.set(k,v)},removeItem:k=>data.delete(k)}};
  vm.runInNewContext(source,context);
  return {api:context.exports,window,scripts,data,events:()=>window.dataLayer?.map(x=>Array.from(x))??[]};
}
for(const host of ['localhost','deploy-preview-6--tangchinhua.netlify.app','main--tangchinhua.netlify.app','tangchinhua.netlify.app.evil.example']) {
 const s=session(host);s.api.initAnalytics(true);s.api.trackContactClick('whatsapp_click');assert.equal(s.events().length,0);assert.equal(s.scripts.length,0);
}
for(const host of ['tangchinhua.netlify.app','www.chinesewedding.shop','chinesewedding.shop']) {
 const s=session(host);s.api.initAnalytics(true);s.api.initAnalytics(true);assert.equal(s.scripts.length,1);assert.equal(s.events().filter(x=>x[0]==='config').length,1);assert(!('debug_mode' in s.events()[1][2]));assert(!('content_language' in s.events()[1][2]), 'do not persist a stale language on automatic SPA pageviews');
 s.api.trackContactClick('whatsapp_click');assert.equal(s.events()[2][2].content_language,'zh-Hans');assert.equal(s.events()[2][2].page_location,'https://'+host+'/zh/contact/');
 assert(!s.events().some(x=>x[1]==='page_view'),'must not duplicate automatic pageviews');
}
for(const args of [['?ga_debug=1',null,false],['','1',false],['?ga_debug=1',null,true]]) {
 const s=session('tangchinhua.netlify.app',...args);s.api.initAnalytics(true);assert.equal(s.events()[1][2].debug_mode,true);
}
const off=session('tangchinhua.netlify.app','?ga_debug=0','1');off.api.initAnalytics(true);assert(!('debug_mode' in off.events()[1][2]));
const disabled=session('tangchinhua.netlify.app');disabled.api.initAnalytics(false);assert.equal(disabled.events().length,0);
console.log('PASS: host guards, disabled previews, idempotent initialization, QA persistence/reset/storage failure, localized contact events, no extra pageviews');
