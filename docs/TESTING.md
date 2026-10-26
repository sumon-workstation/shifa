# Verification

Executed on 26 October 2026:

- `node --check dist/app.js`: passed.
- Browser preview rendered at http://127.0.0.1:4173.
- Responsive narrow layout visually inspected: header, hero, search, specialty grid, fixed bottom navigation.
- Doctor profile opened with demo disclosure, fee, location and qualifications.
- Booking date defaulted to tomorrow in Asia/Dhaka; review was disabled until time selection.
- Selected 09:00, reviewed details, confirmed; unique booking reference displayed.
- Booking appeared in upcoming appointments and survived browser reload.
- Rescheduled to 09:30; upcoming list showed the replacement time.
- Cancelled replacement; upcoming list showed the empty state.

Not verified: database concurrency/RLS (no database exists), real authentication, native platform builds, push delivery, full Bangla localization, or exact Reel matching. Local storage is not a transactional multi-user database. Remote photo availability depends on external hosts.
