import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { render, languages, paths, localePath } from '../.ssr/entry-server.js';

const template=await readFile('dist/index.html','utf8');
const origin='https://tangchinhua.netlify.app';
const preview=Boolean(process.env.CONTEXT && process.env.CONTEXT!=='production');
const locales={th:'th',en:'en',zh:'zh-Hans'};
const escape=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const urls=[];
for(const path of paths) {
  for(const lang of languages) {
    const url=localePath(lang,path);
    const {html,info,lang:htmlLang}=render(url);
    const canonical=origin+url;
    const alternates=languages.map(code=>'<link rel="alternate" hreflang="'+locales[code]+'" href="'+origin+localePath(code,path)+'">');
    const hidden=path==='/cart';
    const metadata=[
      '<link rel="canonical" href="'+canonical+'">',
      ...alternates,
      '<link rel="alternate" hreflang="x-default" href="'+origin+path+'">',
      '<meta property="og:site_name" content="Tang Chin Hua">',
      '<meta property="og:title" content="'+escape(info.title)+'">',
      '<meta property="og:description" content="'+escape(info.description)+'">',
      '<meta property="og:url" content="'+canonical+'">',
      '<meta property="og:image" content="'+origin+'/media/hero-960.webp">',
      '<meta property="og:type" content="'+(path.startsWith('/blog/')?'article':'website')+'">',
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
    if(!hidden)urls.push('<url><loc>'+canonical+'</loc>'+languages.map(code=>'<xhtml:link rel="alternate" hreflang="'+locales[code]+'" href="'+origin+localePath(code,path)+'"/>').join('')+'<xhtml:link rel="alternate" hreflang="x-default" href="'+origin+path+'"/></url>');
  }
}
const missing=render('/404');
await writeFile('dist/404.html',template.replace('<title>Tang Chin Hua</title>','<title>ไม่พบหน้านี้ | Tang Chin Hua</title>').replace('<!-- page-metadata -->','<meta name="robots" content="noindex, follow">').replace('<div id="root"></div>',()=>'<div id="root" data-not-found>'+missing.html+'</div>'));
await writeFile('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'+urls.join('\n')+'\n</urlset>\n');
await writeFile('dist/robots.txt',preview?'User-agent: *\nAllow: /\n':'User-agent: *\nAllow: /\nSitemap: '+origin+'/sitemap.xml\n');
console.log('Prerendered '+paths.length*languages.length+' locale routes');
