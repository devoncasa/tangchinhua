import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Site, { pageInfo, parsePath } from './Site';
import { brand, ceremonyChecklist, ceremonyGuideTitle, facebook, localePath, storeMap } from './content';
export { languages, paths, localePath } from './content';

export function render(url: string, origin: string) {
  const {lang,path} = parsePath(url);
  const info = pageInfo(path,lang);
  const htmlLang = lang === 'zh' ? 'zh-Hans' : lang;
  const schema: Record<string, unknown>[] = [];
  const canonical = origin + localePath(lang,path);
  const store = {
    '@type': 'Store',
    '@id': origin + '/#store',
    name: brand,
    alternateName: 'ตั้งจิ้นฮั้ว',
    url: origin + '/',
    logo: origin + '/media/emblem-160.webp',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '482, 484 ถนนมิตรพันธ์ แขวงป้อมปราบ',
      addressLocality: 'เขตป้อมปราบศัตรูพ่าย',
      addressRegion: 'กรุงเทพมหานคร',
      postalCode: '10100',
      addressCountry: 'TH',
    },
    hasMap: storeMap,
    sameAs: [facebook],
  };

  if (path === '/') {
    schema.push({'@type':'WebSite','@id':origin+'/#website',name:brand,alternateName:'ตั้งจิ้นฮั้ว',url:origin+'/'});
  } else if (path !== '/404' && path !== '/cart') {
    const parents: Record<string,string> = {product:'/shop',packages:'/packages',shop:'/shop',blog:'/blog'};
    const [,section,child] = path.split('/');
    const parent = child ? parents[section] : undefined;
    const trail = parent ? ['/',parent,path] : ['/',path];
    schema.push({'@type':'BreadcrumbList',itemListElement:trail.map((item, index)=>({
      '@type':'ListItem',position:index+1,
      name:item==='/'?brand:pageInfo(item,lang).label,
      item:origin+localePath(lang,item),
    }))});
  }
  if (path === '/contact') schema.push(store);
  if (path === '/traditions') {
    schema.push({
      '@type': 'ItemList',
      name: ceremonyGuideTitle[lang],
      itemListElement: ceremonyChecklist.map((ceremony, index) => ({
        '@type': 'ListItem', position: index + 1,
        name: ceremony.title[lang], url: canonical + '#' + ceremony.id,
      })),
    });
  }
  if (path.startsWith('/blog/') && info.image) {
    schema.push({
      '@type':'Article',headline:info.label,description:info.description,image:origin+info.image,
      inLanguage:htmlLang,mainEntityOfPage:canonical,
      publisher:{'@type':'Organization',name:brand,url:origin+'/',logo:origin+'/media/emblem-160.webp'},
    });
  }
  return {
    html: renderToString(<StaticRouter location={url}><Site/></StaticRouter>),
    info,
    lang: htmlLang,
    schema,
  };
}
