import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/compile', // Directory for test files
  retries: 1,
  workers: 3,
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },

  // ✅ REPORT CONFIGURATION: Playwright will generate HTML + JUnit reports
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }], // HTML report for manual review
    ['junit', { outputFile: 'playwright-report/results.xml' }], // JUnit XML for Jenkins
  ],

  projects: [
    {
      name: 'safari',
      use: {
        browserName: 'webkit',
        headless: true,
        screenshot: 'off',
        trace: 'on',
        ...devices['iPhone 11'],
      },
    },
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        video: 'retain-on-failure',
        ignoreHttpsErrors: true,
        permissions: ['geolocation'],
        trace: 'on',
      },
    },
    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
        headless: false, // headless: false to see the UI
        screenshot: 'on',
        trace: 'on',
      },
    },
  ],
});
