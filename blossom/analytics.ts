type AnalyticsWindow = Window & { dataLayer?: IArguments[] };

export function gtag(..._args: unknown[]) {
  const analytics = window as AnalyticsWindow;
  (analytics.dataLayer ??= []).push(arguments);
}

export function trackContactClick(event: 'whatsapp_click' | 'maps_click') {
  if (import.meta.env.VITE_ENABLE_GA !== 'true') return;

  const { origin, pathname } = window.location;
  gtag('event', event, {
    page_location: origin + pathname,
    content_language: document.documentElement.lang,
  });
}
