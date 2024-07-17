import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // baseUrl: "https://hcmatrix-saas.netlify.app/register",
    defaultCommandTimeout: 10000,
    viewportHeight: 900,
    viewportWidth: 1400,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
