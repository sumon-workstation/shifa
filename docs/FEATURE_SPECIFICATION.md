# Feature specification

## Current website

Patient navigation: Overview, Find a doctor, Appointments, My profile. Desktop navigation also exposes explicitly labeled demo doctor/admin workspaces; these are not secure role-based tools.

Discovery searches names, specialties, and clinics; filters city/specialty/maximum fee and sorts fee or experience. All doctors, qualifications, clinics, and fees are fictional. Portraits are illustrative.

Booking selects a single doctor-specific clinic, in-person consultation, date within tomorrow through 60 days, and a 30-minute demo slot. Review shows fee and patient. Confirmation stores a UUID-derived reference. Active duplicate times are rejected in the current browser; rescheduling cancels the original only when the replacement is saved. Cancelled times are released. Schedule exceptions affect Dr. Farhana Ahmed. Existing bookings on blocked days remain visible.

Profile changes and appointments persist in localStorage. Notifications are derived from stored booking status. No real accounts, delivery services, payment, medical records, or actual bookings exist. Partial Bangla support is explicitly labeled.

## Production acceptance criteria

Use Supabase Auth and PostgreSQL; enforce RLS and trusted roles. Store UTC-aware appointment times and fee/location snapshots. Atomic RPC validates schedule, exceptions, duration, policy and idempotency. Database overlap constraints must prevent doctor conflicts across clinics. Test simultaneous requests and unauthorized direct writes. Real notification delivery must be independent of successful booking transactions.

Real doctor onboarding requires credential verification; never derive verified status from a client flag. Account deletion and retention require an approved policy and authenticated workflow. Do not use localStorage for sensitive patient records.
