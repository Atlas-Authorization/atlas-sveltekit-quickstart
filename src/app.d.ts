import type { ServerAuth } from '@atlasauth/svelte/server';

declare global {
  namespace App {
    interface Locals {
      auth: ServerAuth;
    }
  }
}

export {};
