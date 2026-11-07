import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Site from './blossom/Site';
import '@fontsource-variable/noto-serif-thai/wght.css';
import '@fontsource-variable/noto-sans-thai/wght.css';
import './blossom/theme.css';

const root = document.getElementById('root');
if (!root) throw new Error('Missing application root');
const site = <BrowserRouter><Site/></BrowserRouter>;
if (root.hasChildNodes() && !root.hasAttribute('data-not-found')) hydrateRoot(root,site);
else createRoot(root).render(site);

if (import.meta.env.VITE_ENABLE_GA === 'true') {
  const measurement = 'G-48H7DXEZ20';
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurement;
  document.head.append(script);
  const analytics = window as Window & { dataLayer?: IArguments[] };
  analytics.dataLayer ??= [];
  function gtag(..._args: unknown[]) { analytics.dataLayer!.push(arguments); }
  gtag('js',new Date());
  gtag('config',measurement);
}
