import { getServerAuth } from '@atlasauth/svelte/server';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

/**
 * A protected page. The server `load` reads the session that `handleAtlas`
 * verified (via `getServerAuth`) and redirects a signed-out visitor to sign-in
 * before the page renders.
 */
export const load: PageServerLoad = (event) => {
  const { userId, orgId } = getServerAuth(event);
  if (!userId) throw redirect(302, '/sign-in');
  return { userId, orgId };
};
