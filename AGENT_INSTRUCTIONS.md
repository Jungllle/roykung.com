# AI Agent Instructions

Welcome! If you are an AI coding assistant (like Antigravity, Cursor, Cline, Windsurf, GitHub Copilot, Claude, or Gemini) reading this, please adhere to the following project standards and context when writing code for this repository.

## Project Context

- **Framework**: [Astro](https://astro.build/) (fully static output, every page is prerendered at build time)
- **UI Components**: `.astro` components only. No UI framework (React, Vue, etc.) is installed; the site is fully static.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Deployment**: [Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/) — `wrangler deploy` uploads `dist/`; there is no server-side Worker code.
- **Package Manager**: `npm`

## Code Conventions & Rules

### 1. Component Strategy

- **Astro only**: Write all components as `.astro` files.
- **Interactivity**: For small client-side behaviour, use a plain `<script>` block inside the `.astro` component. Do not add a UI framework integration without discussing it first.

### 2. Styling

- Use Tailwind CSS utility classes exclusively.
- Avoid writing custom CSS in `<style>` blocks unless absolutely necessary for complex animations or pseudo-elements not covered by Tailwind.

### 3. Static Output (Cloudflare)

- The site is built to static HTML and served from Cloudflare Workers Static Assets. There is no request-time server code.
- **DO NOT** add SSR-only features (`Astro.request` body parsing, cookies, API routes with `POST`, `export const prerender = false`). If a feature truly needs a runtime, discuss re-adding an adapter first.
- Custom headers and redirects go in `public/_headers` and `public/_redirects`.

### 4. Testing & Coverage

- **Vitest** is our test runner.
- We enforce **100% test coverage** on `src/components/` and utility functions.
- If you modify or create a component, you MUST create or update its corresponding `.test.ts` or `.test.tsx` file.
- Use `astro/container` for unit testing Astro components.
- Run `npm run test:coverage` to verify your changes.

### 5. Linting & Formatting

- We use **Oxlint** for ultra-fast linting and **Oxfmt** for formatting (JS/TS, JSON, Markdown, YAML, CSS).
- `.astro` files are still formatted by **Prettier** with `prettier-plugin-astro`, because Oxfmt does not support Astro yet.
- Ensure your code has no lint warnings before committing.
- Run `npm run lint` and `npm run format:check` to verify. (Pre-commit hooks will automatically format staged files).

### 6. Git & Commits

- We use **Semantic Release** and **Renovate**.
- All commit messages MUST follow the Conventional Commits specification.
  - Correct: `feat: add dark mode toggle`
  - Correct: `fix: resolve hydration mismatch in header`
  - Correct: `chore: update dependencies`
  - Incorrect: `added new component`

## Your Workflow

When given a task:

1. Search and read existing components before creating new ones.
2. Implement the change.
3. Write/update tests.
4. Run `npm run lint` and `npm run test:coverage`.
5. Provide a semantic commit message.
