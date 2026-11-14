# Tang Chin Hua · Blossom Season

Thai-first catalogue and Messenger enquiry site. Main sections are Home, Sets, Catalogue, Ceremony planner, Journal, About, FAQ and Contact. React Router handles interaction after hydration. Vite also writes complete HTML for all known routes in Thai, English and Simplified Chinese, including all 24 existing product IDs. Netlify serves actual pages and a themed 404 for missing URLs.

## Local preview

Requires Node 22+.

```sh
npm ci
CONTEXT=deploy-preview npm run build
npm run preview
```

Use `npm run dev` when developing components. Run `npx tsc --noEmit` for the TypeScript check.

## Sources and publishing

- `blossom/content.ts` has the groom’s, bride’s and pair offer from the shop’s public Facebook post. The original artwork is displayed in the sets page. Confirm the offer and fulfilment before publishing. Generated WebP still lifes are editorial; they are not used as exact item photographs.
- `services/data.ts` keeps the existing product catalogue and translations. Product inquiries ask the shop to verify current prices and availability. Earlier cart records can be viewed at `/cart`.
- The enquiry page creates a copyable message in the browser. Sending takes place in Messenger. No form or personal data is transmitted by the site.
- Netlify deploy previews use `CONTEXT=deploy-preview` and page-level noindex. GA4 is enabled by `VITE_ENABLE_GA=true` in production only. No server secrets or extra environment variables are required. Production canonical URL is the Netlify hostname requested for this project.
- Rollback after a release uses a revert on the production branch and a fresh build. Validate a direct product URL, all locale roots and 404 behaviour after deploying.

## Before release

Verify prices and item counts against Facebook, test the Messenger destination with a signed-in phone, confirm stock photography when available, and check GA4/GSC at the production hostname.

## Product illustrations

Each physical product has SKU-matched 480 px and 960 px WebP illustrations in `public/media/products`. The catalogue and product detail pages label them as AI illustrations. The artwork from the Facebook offer and the request for an exact item photo remain separate. Service entries use editorial category imagery. When replacing an illustration with a verified stock photo, update the two files and the corresponding caption before publishing.

Visual references used for garment construction and ceremony objects

- [Hong Kong Intangible Cultural Heritage Office — Cheongsam and Kwan Kwa](https://www.icho.hk/en/web/icho/representative_list_cheongsam_kwan_kwa.html)
- [The Chinese Wedding Shop — Betrothal baskets and ceremony candles](https://www.thechineseweddingshop.com.sg/guo-da-li/1659-127-guo-da-li-betrothal-package)
- [Vows.sg — The four components of Si Dian Jin](https://www.vows.sg/guides/si-dian-jin-singapore-guide)

### Search content and contact measurement

The engagement quantities, posted prices and source link live in
`blossom/content.ts` alongside the localized ceremony checklist and guide metadata.
Use the same quantities in all locales. Keep prices attributed to the shop’s
public post until the shop confirms current offers.

The build checks localized titles and descriptions for duplicates and validates
static links against generated routes or published assets. Canonical URLs,
language alternates and the sitemap use the same route inventory.

Production uses `VITE_ENABLE_GA=true`. The `messenger_click` and `maps_click`
events report the path and language. They measure a click, and a shop would
need its own records to count sent messages, visits or orders. For rollback,
revert the release commit on `main` and let Netlify rebuild.


## GA4 QA and domain recovery (2026-11-14)

GA4 keeps measurement ID `G-48H7DXEZ20`. Initialization runs before React
hydration and only when `VITE_ENABLE_GA=true` on the exact production hostnames
`tangchinhua.netlify.app`, `www.chinesewedding.shop`, or `chinesewedding.shop`.
Preview and branch hostnames cannot send analytics even if the build flag is set.
Use `?ga_debug=1` for a marked QA session; the flag persists in sessionStorage
through navigation/reloads in that tab. Use `?ga_debug=0` to clear it. Ordinary
traffic does not set debug_mode. Keep the GA4 Developer QA exclusion in Testing
until the marked events and ordinary controls are confirmed in processed reports.
Existing automatic page-view behavior is unchanged; no second manual page view
is emitted. Contact clicks remain intent signals, not completed enquiries.

The production domain was shown as expired on October 17 in Netlify on November
14. Google ownership verification and the custom hostname currently fail. Keep
the reachable Netlify canonical origin until registration/DNS are restored;
then change `scripts/prerender.mjs` origin to `https://www.chinesewedding.shop`,
rebuild, verify all locale canonicals/hreflang/sitemaps, and submit its sitemap.
The Google-provided verification file `public/googleaa0c747b7e073694.html`
is retained in deployments for that future verification. Keep the existing
verification meta tag for the legacy property as well.

Rollback: revert this tracking change on main and rebuild via Netlify CI.
Do not change measurement IDs or delete historical properties to recover.
