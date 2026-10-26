# SHIFA — care, closer to you

A responsive healthcare discovery and appointment booking **demo** for Bangladesh. Built with HTML, CSS and JavaScript. No backend, external API credentials, framework installation, or paid services are required to run this demo.

## Run locally

Use Node.js 22 or newer:

```sh
npm run dev
```

Open http://127.0.0.1:4173. No `npm install` step is needed because there are no dependencies.

```sh
npm run check
npm run build
```

The build command verifies the existing static site; the deployable files are already in `dist/`.

## Deploy this repository on Vercel

1. In Vercel, choose **Add New → Project** and import `sumon-workstation/shifa`.
2. Use the repository root (`./`) as the Root Directory.
3. Use the **Other** framework preset.
4. Keep the repository's configuration: Build Command `npm run build`, Output Directory `dist`.
5. No environment variables are required. Deploy.

`vercel.json` declares the build command and output directory, so dashboard overrides are unnecessary. The local Node server is not deployed as a Vercel function. Navigation uses URL hashes (`#doctors`, `#appointments`), so no SPA rewrite is required.

Official configuration reference: https://vercel.com/docs/project-configuration

## Demo features

- Responsive overview and specialty cards
- Doctor search by name, specialty and clinic
- City, specialty and fee filters; fee/experience sorting
- Doctor profiles with explicit fictional/demo labels
- Date/time selection, review and booking confirmation
- Upcoming, past and cancelled appointments
- Cancellation and rescheduling
- Browser-local patient profile and booking persistence
- Booking notification view
- Demo doctor schedule exceptions and admin overview
- Partial Bangla navigation, localized dates and BDT formatting

## Important demo limits

**No real appointment is made. All practitioners, clinics, qualifications, fees and schedules are fictional demonstration content.** Photographs are illustrative stock images loaded from Unsplash; Google Fonts are loaded remotely. Their availability depends on those hosts.

Data is stored only in localStorage on the current browser and origin. Moving from the earlier preview to Vercel starts a separate demo data store. Use fictional patient details only. Browser-local conflict checks do not provide transaction-safe bookings across devices/users.

Doctor/admin screens are explicitly demo views, not authenticated or authorized staff tools. Real login, shared availability, database/RLS policies, doctor verification, push/email delivery and native Flutter apps are not implemented. English/Bangla localization is partial. SHIFA is not an emergency service or diagnosis system.

## Project structure

```text
dist/             Static website: index.html, style.css, app.js
docs/             Feature specification, reference report, roadmap and checks
scripts/check.mjs Deployment file/configuration checks
server.mjs        Local preview server only
vercel.json       Vercel static deployment configuration
package.json      Development and verification commands, no dependencies
```

The original Facebook Reel was not viewed and no reference media was provided. The current interface is an original provisional SHIFA design. See `docs/REFERENCE_ANALYSIS.md` for pending reference review and `docs/DEVELOPMENT_PLAN.md` for future Supabase/native milestones.

No credentials or previous Sites hosting identity are included in this repository.
