import { handleAtlas } from '@atlasauth/svelte/server';
import { env } from '$env/dynamic/private';

/**
 * Resolve and verify the session once per request and stash it on
 * `event.locals.auth`, so every `load` and endpoint reads a verified session
 * without re-verifying. Verification is local (JWKS cached in-process) and never
 * throws on a bad token — it degrades to signed-out.
 */
export const handle = handleAtlas({
  jwksUrl: env.ATLAS_JWKS_URL ?? '',
  issuer: env.ATLAS_ISSUER ?? '',
});
