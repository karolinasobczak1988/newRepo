import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 1,
  workers: 3,
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  use: {
    video: 'on', // 'on', 'retain-on-failure', or 'off'
    headless: false, // Runs in headed mode
  },



  projects: [
    {
      name: 'safari',
      use: {
        browserName: 'webkit',
        headless: false,
        screenshot: 'on',
        video: 'retain-on-failure',
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
