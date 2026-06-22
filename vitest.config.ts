import { defineConfig, coverageConfigDefaults } from "vitest/config";

export default defineConfig({
  resolve: {
    tsconfigPaths: true, // configure your tsconfig.json aliases
  },
  test: {
    globals: true,
    environment: "node",
    setupFiles: ["./test/setupTest.ts"],
    include: ["test/**/*.spec.{js,ts}"],
    reporters: process.env.GITHUB_ACTIONS ? ["github-actions"] : ["dot"],
    coverage: {
      provider: "v8",
      reportsDirectory: "coverage",
      reporter: ['json', 'json-summary', 'text'],
      thresholds: { statements: 90, branches: 90, functions: 90, lines: 90 },
      include: ["lib/**/*.{js,ts}"],
      exclude: [
        "*.config.*",
        "**/index.ts",
        // more non-testable files here...
        ...coverageConfigDefaults.exclude,
      ],
    },
  },
});
