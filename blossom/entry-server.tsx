import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Site, { pageInfo, parsePath } from './Site';
export { languages, paths, localePath } from './content';

export function render(url: string) {
  const {lang,path} = parsePath(url);
  return {
    html: renderToString(<StaticRouter location={url}><Site/></StaticRouter>),
    info: pageInfo(path,lang),
    lang: lang==='zh'?'zh-Hans':lang,
  };
}
