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
