import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,  // Run in UI mode for debugging
    viewport: { width: 1280, height: 720 },
    baseURL: 'https://www.saucedemo.com',  // Change this URL if needed
  },
});
