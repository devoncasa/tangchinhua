import assert from 'node:assert/strict';
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { render, languages, paths, localePath } from '../.ssr/entry-server.js';

const template=await readFile('dist/index.html','utf8');
const origin='https://tangchinhua.netlify.app';
const preview=Boolean(process.env.CONTEXT && process.env.CONTEXT!=='production');
const locales={th:'th',en:'en',zh:'zh-Hans'};
const escape=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const urls=[];
const knownRoutes=new Set(paths.flatMap(path=>languages.map(lang=>localePath(lang,path))));
const checkedAssetLinks=new Set();
const titleByLanguage=new Map();
const descriptionByLanguage=new Map();

function assertUnique(values, lang, value, label, url) {
  assert(value.trim(), `Missing ${label} at ${url}`);
  const key=lang+':'+value.trim().toLocaleLowerCase();
  assert(!values.has(key), `Duplicate ${label} at ${url} and ${values.get(key)}`);
  values.set(key,url);
}
for(const path of paths) {
  for(const lang of languages) {
    const url=localePath(lang,path);
    const {html,info,lang:htmlLang,schema}=render(url,origin);
    const canonical=origin+url;
    const alternates=languages.map(code=>'<link rel="alternate" hreflang="'+locales[code]+'" href="'+origin+localePath(code,path)+'">');
    const hidden=path==='/cart';
    if(!hidden) {
      assertUnique(titleByLanguage,lang,info.title,'title',url);
      assertUnique(descriptionByLanguage,lang,info.description,'description',url);
    }
    for(const [,href] of html.matchAll(/<a\b[^>]*?\shref="(\/(?!\/)[^"]*)"/g)) {
      const target=new URL(href,origin);
      if(knownRoutes.has(target.pathname) || checkedAssetLinks.has(target.pathname)) continue;
      const asset=await stat(join('dist',target.pathname.slice(1))).catch(error=>{
        if(error.code==='ENOENT') return null;
        throw error;
      });
      assert(asset?.isFile(), `Unrecognized internal link ${href} on ${url}`);
      checkedAssetLinks.add(target.pathname);
    }
    const shareImage=origin+(info.image??'/media/hero-960.webp');
    const metadata=[
      '<link rel="canonical" href="'+canonical+'">',
      ...alternates,
      '<link rel="alternate" hreflang="x-default" href="'+origin+localePath('th',path)+'">',
      '<meta property="og:site_name" content="Tang Chin Hua">',
      '<meta property="og:title" content="'+escape(info.title)+'">',
      '<meta property="og:description" content="'+escape(info.description)+'">',
      '<meta property="og:url" content="'+canonical+'">',
      '<meta property="og:image" content="'+shareImage+'">',
      '<meta property="og:type" content="'+(path.startsWith('/blog/')?'article':'website')+'">',
      '<meta name="twitter:card" content="summary_large_image">',
      '<meta name="twitter:title" content="'+escape(info.title)+'">',
      '<meta name="twitter:description" content="'+escape(info.description)+'">',
      '<meta name="twitter:image" content="'+shareImage+'">',
      schema.length ? '<script type="application/ld+json">'+JSON.stringify({'@context':'https://schema.org','@graph':schema}).replace(/</g,'\\u003c')+'</script>' : '',
      preview||hidden?'<meta name="robots" content="noindex, follow">':'',
    ].join('\n');
    const page=template.replace('<html lang="th">','<html lang="'+htmlLang+'">')
      .replace(/<title>.*?<\/title>/,()=>'<title>'+escape(info.title)+'</title>')
      .replace(/<meta name="description" content="[^"]*">/,()=>'<meta name="description" content="'+escape(info.description)+'">')
      .replace('<!-- page-metadata -->',()=>metadata)
      .replace('<div id="root"></div>',()=>'<div id="root">'+html+'</div>');
    const file=join('dist',url.replace(/^\//,''),'index.html');
    await mkdir(dirname(file),{recursive:true});
    await writeFile(file,page);
    if(!hidden)urls.push('<url><loc>'+canonical+'</loc>'+languages.map(code=>'<xhtml:link rel="alternate" hreflang="'+locales[code]+'" href="'+origin+localePath(code,path)+'"/>').join('')+'<xhtml:link rel="alternate" hreflang="x-default" href="'+origin+localePath('th',path)+'"/></url>');
  }
}
const missing=render('/404',origin);
await writeFile('dist/404.html',template.replace('<title>Tang Chin Hua</title>','<title>ไม่พบหน้านี้ | Tang Chin Hua</title>').replace('<!-- page-metadata -->','<meta name="robots" content="noindex, follow">').replace('<div id="root"></div>',()=>'<div id="root" data-not-found>'+missing.html+'</div>'));
await writeFile('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'+urls.join('\n')+'\n</urlset>\n');
await writeFile('dist/robots.txt',preview?'User-agent: *\nAllow: /\n':'User-agent: *\nAllow: /\nSitemap: '+origin+'/sitemap.xml\n');
console.log('Prerendered '+paths.length*languages.length+' locale routes');
