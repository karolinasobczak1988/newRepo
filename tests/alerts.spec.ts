import { test, expect } from '@playwright/test';
import { AlertsHomePage } from '../pageobjects_ts/AlertsHomePage';
import { AlertsPage } from '../pageobjects_ts/AlertsPage';

test.describe('Practicing locating alerts', () => {
  test('User can navigate around alerts', async ({ page }) => {
    // Navigate to the homepage and verify the URL
    await page.goto('https://demoqa.com/');
    await expect(page).toHaveURL('https://demoqa.com/');

    // Initialize and use the AlertsHomePage object
    const alertsHomePage = new AlertsHomePage(page);
    await alertsHomePage.navigateToAlerts();
    await expect(page).toHaveURL('https://demoqa.com/alertsWindows');

    // Initialize and use the AlertsPage object
    const alertsPage = new AlertsPage(page);
    await alertsPage.clickOnAlert();
    await alertsPage.dialogAlert();
    await alertsPage.dialogAlert5sec();
    await alertsPage.dialogPrompt();

  
  });
});
