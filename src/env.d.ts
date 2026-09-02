// Lets plain `tsc` (used by `npm run check`) resolve `.astro` imports in
// test files. The Astro language server provides richer types in editors.
declare module '*.astro' {
  import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
  const component: AstroComponentFactory;
  export default component;
}
