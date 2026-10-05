<script lang="ts">
  import { SignedIn, SignedOut, getUser } from '@atlasauth/svelte';

  const user = getUser();
</script>

<main style="max-width: 560px; margin: 3rem auto; font-family: system-ui, sans-serif;">
  <h1>atlas-sveltekit-quickstart</h1>
  <p>A starter SvelteKit app wired up with Atlas auth.</p>

  <SignedOut>
    <p>You are signed out. <a href="/sign-in">Sign in</a> to continue.</p>
  </SignedOut>

  <SignedIn>
    <p>Signed in as {$user.user?.first_name ?? $user.user?.id}.</p>
    <p><a href="/dashboard">Go to your dashboard</a></p>
  </SignedIn>
</main>
