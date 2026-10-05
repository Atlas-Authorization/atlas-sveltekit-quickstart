# atlas-sveltekit-quickstart

A minimal SvelteKit app pre-wired with [Atlas](https://atlasauth.net) auth,
using `@atlasauth/svelte` (client components + stores) and
`@atlasauth/svelte/server` (SvelteKit `handle` + `getServerAuth`).

## What it shows

- `src/hooks.server.ts` — `handleAtlas(...)` verifies the `__session` JWT
  locally and attaches the auth state to `event.locals.auth`.
- `src/routes/+layout.svelte` — `<AtlasProvider>` wrapping the app, with a
  `<SignedIn>` / `<SignedOut>` + `<UserButton>` header.
- `src/routes/+page.svelte` — a public home page using the `getUser()` store.
- `src/routes/sign-in/+page.svelte` — the `<SignIn>` flow.
- `src/routes/dashboard/+page.server.ts` — a protected `load` using
  `getServerAuth(event)` that redirects signed-out visitors to `/sign-in`.

## Run it

1. `npm install`
2. `cp .env.example .env`, then set `PUBLIC_ATLAS_PUBLISHABLE_KEY`,
   `PUBLIC_ATLAS_FRONTEND_API`, `ATLAS_JWKS_URL`, and `ATLAS_ISSUER` to the
   values from [atlasauth.net](https://atlasauth.net).
3. `npm run dev`

Open http://localhost:5173. Visit `/dashboard` to see server-side protection.
