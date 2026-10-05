<script lang="ts">
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<main style="max-width: 560px; margin: 3rem auto; font-family: system-ui, sans-serif;">
  <h1>Dashboard</h1>
  <p>This page is only reachable when you are signed in.</p>
  <p>
    Your user id is <code>{data.userId}</code>{#if data.orgId} (org <code>{data.orgId}</code>){/if}.
  </p>
</main>
