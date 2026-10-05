<script lang="ts">
  import { AtlasProvider, SignedIn, SignedOut, UserButton } from '@atlasauth/svelte';
  import { env } from '$env/dynamic/public';

  let { children } = $props();
</script>

<AtlasProvider
  publishableKey={env.PUBLIC_ATLAS_PUBLISHABLE_KEY ?? ''}
  frontendApi={env.PUBLIC_ATLAS_FRONTEND_API}
>
  <header
    style="max-width: 560px; margin: 1.5rem auto 0; display: flex; gap: 1rem; align-items: center; font-family: system-ui, sans-serif;"
  >
    <a href="/">Home</a>
    <a href="/dashboard">Dashboard</a>
    <span style="margin-left: auto">
      <SignedOut><a href="/sign-in">Sign in</a></SignedOut>
      <SignedIn><UserButton /></SignedIn>
    </span>
  </header>

  {@render children()}
</AtlasProvider>
