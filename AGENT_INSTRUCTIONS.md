# AI Agent Instructions

Welcome! If you are an AI coding assistant (like Antigravity, Cursor, Cline, Windsurf, GitHub Copilot, Claude, or Gemini) reading this, please adhere to the following project standards and context when writing code for this repository.

## Project Context

- **Framework**: [Astro](https://astro.build/) (Server-Side Rendered)
- **UI Components**: Primarily `.astro` components. [React 19](https://react.dev/) is available but should ONLY be used for components requiring client-side interactivity.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Deployment**: [Cloudflare](https://developers.cloudflare.com/pages/) Edge environment (`@astrojs/cloudflare` adapter)
- **Package Manager**: `npm`

## Code Conventions & Rules

### 1. Component Strategy

- **Default to Astro**: Write all structural and static layout components as `.astro` files.
- **React for Interactivity**: If a component needs complex state (`useState`), lifecycle (`useEffect`), or browser-only APIs, use `.tsx`.
- **Hydration**: When using React components inside Astro files, remember to explicitly define the hydration strategy (e.g., `<MyReactComponent client:load />` or `client:visible`).

### 2. Styling

- Use Tailwind CSS utility classes exclusively.
- Avoid writing custom CSS in `<style>` blocks unless absolutely necessary for complex animations or pseudo-elements not covered by Tailwind.

### 3. Edge Compatibility (Cloudflare)

- This site runs on Cloudflare Workers/Pages edge network.
- **DO NOT** use Node.js specific modules (like `fs`, `path`, `worker_threads`, or `child_process`) in your application code, as they will crash the Edge runtime.

### 4. Testing & Coverage

- **Vitest** is our test runner.
- We enforce **100% test coverage** on `src/components/` and utility functions.
- If you modify or create a component, you MUST create or update its corresponding `.test.ts` or `.test.tsx` file.
- Use `astro/container` for unit testing Astro components.
- Run `npm run test:coverage` to verify your changes.

### 5. Linting & Formatting

- We use **Oxlint** for ultra-fast linting and **Prettier** for formatting.
- Ensure your code has no lint warnings before committing.
- Run `npm run lint` to verify. (Pre-commit hooks will automatically format your code with Prettier).

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
