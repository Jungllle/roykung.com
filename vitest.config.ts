import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    environment: "node",
    include: ["src/**/*.test.{ts,tsx}"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["src/**/*.{ts,tsx,astro}"],
      exclude: [
        "src/**/*.test.{ts,tsx}",
        "src/pages/**", // Out of scope: E2E territory
        "src/layouts/**", // Out of scope: Wrappers/HTML boilerplate
        "src/content/**", // Out of scope: Data collections
        "src/content.config.ts", // Out of scope: Astro configuration
      ],
      all: true,
    },
  },
});
