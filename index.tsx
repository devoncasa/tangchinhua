import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Site from './blossom/Site';
import { initAnalytics } from './blossom/analytics';
import '@fontsource-variable/noto-serif-thai/wght.css';
import '@fontsource-variable/noto-sans-thai/wght.css';
import './blossom/theme.css';

initAnalytics(import.meta.env.VITE_ENABLE_GA === 'true');

const root = document.getElementById('root');
if (!root) throw new Error('Missing application root');
const site = <BrowserRouter><Site/></BrowserRouter>;
if (root.hasChildNodes() && !root.hasAttribute('data-not-found')) hydrateRoot(root,site);
else createRoot(root).render(site);
