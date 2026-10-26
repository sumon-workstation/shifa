# Development plan and coding guide

## Implemented milestone: responsive website demo

Stack: semantic HTML, CSS tokens, JavaScript ES modules, browser localStorage. Node.js is used only for the local server. Sites static hosting needs no build dependencies. This choice delivers the requested website immediately; Flutter is not installed here and no pre-existing Flutter project exists.

1. Run `node --check dist/app.js` and `node --check server.mjs`.
2. Run `node server.mjs` and visit http://127.0.0.1:4173.
3. Edit dist/style.css for centralized design tokens and responsive styling.
4. Edit dist/app.js for demo repositories, rendering, state and interactions.
5. Search by specialty/city/fee; open a doctor, select a date/time, review and confirm.
6. Verify reload persistence, duplicate-slot disabling, cancellation/rebooking and rescheduling.
7. Check phone and desktop layouts, keyboard focus, dialog close behavior and empty states.

## Next: live service integration

Required information: Supabase project URL and publishable client key, authorized project access for migrations, approved doctor/clinic/fee/schedule data, cancellation policy, retention/deletion policy, and legal/privacy review contacts. Never send a service-role key for inclusion in the website.

1. Introduce a repository boundary and Supabase client with explicit demo/live mode.
2. Create migrations for profiles, doctors, specialties, doctor_specialties, clinics, doctor_clinics, availability_rules, availability_exceptions, appointments, notifications, verification_records and audit_logs.
3. Add foreign keys and indexes, trusted roles, RLS, private storage policies, and development-only seed safeguards.
4. Implement authenticated atomic booking/cancellation/rescheduling RPC with idempotency and overlap constraints.
5. Add RLS and concurrency integration tests against a real test database.
6. Add password registration/login/reset and authenticated deletion request flow.
7. Replace demo portals with backend-authorized doctor/admin actions.
8. Add notification outbox/delivery, full Bangla translations and accessibility review.
9. Complete reference comparison after supplied media; preserve working booking operations.

## Native apps

Install Flutter stable and Android Studio/SDK, run `flutter doctor`, then create a separate Flutter client using Riverpod, GoRouter, Material 3 and ARB localization against the same verified Supabase API. Use macOS/Xcode for iOS validation. No Android APK or iOS build has been produced.

## Privacy and deployment limits

This demo is not production-ready or an emergency service. It does not diagnose or provide medical advice. Collect minimum data, omit patient data from logs, define retention and audit policy, review applicable Bangladesh requirements professionally, and do not claim legal compliance. Hosting/service free-tier limits and native distribution expenses must be checked before launch.
