type AnalyticsWindow = Window & { dataLayer?: IArguments[] };
const measurement = 'G-48H7DXEZ20';
const productionHosts = new Set(['tangchinhua.netlify.app', 'www.chinesewedding.shop', 'chinesewedding.shop']);
let initialized = false;

export function gtag(..._args: unknown[]) {
  const analytics = window as AnalyticsWindow;
  (analytics.dataLayer ??= []).push(arguments);
}

export function initAnalytics(enabled: boolean) {
  if (initialized || !enabled || !productionHosts.has(window.location.hostname)) return;
  initialized = true;
  const flag = new URLSearchParams(window.location.search).get('ga_debug');
  let debug = flag === '1';
  try {
    if (flag === '1') sessionStorage.setItem('ga_debug', '1');
    if (flag === '0') sessionStorage.removeItem('ga_debug');
    debug = sessionStorage.getItem('ga_debug') === '1';
  } catch { /* QA still works for this page when browser storage is unavailable. */ }
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurement;
  gtag('js', new Date());
  gtag('config', measurement, {
    ...(debug ? { debug_mode: true } : {}),
  });
  document.head.append(script);
}

export function trackContactClick(event: 'whatsapp_click' | 'maps_click') {
  if (!initialized) return;
  const { origin, pathname } = window.location;
  gtag('event', event, {
    page_location: origin + pathname,
    content_language: document.documentElement.lang,
  });
}
