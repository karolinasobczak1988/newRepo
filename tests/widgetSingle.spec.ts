import { test, expect } from '@playwright/test';
import { WidgetSinglePage } from '../pageobjects_ts/WidgetSinglePage';
import AxeBuilder from '@axe-core/playwright';

test.describe('Practicing locating autocomplete widgets', () => {
  test('User can select color names from widget', async ({ page }) => {
    // Navigate to the homepage and verify the URL
    await page.goto('https://demoqa.com/widgets');
    await expect(page).toHaveURL('https://demoqa.com/widgets');
    
    const widgetSinglePage = new WidgetSinglePage(page);
    await widgetSinglePage.selectTypeWidget();
  

    const selectedOptions = await widgetSinglePage.getSelectedOptions();
    expect(selectedOptions).toContain('Green');

  
  });test('Check accessibility', async ({ page }) => {
    await page.goto('https://example.com');
  
    const results = await new AxeBuilder({ page }).analyze();
    console.log(results.violations);
  
    expect(results.violations).toEqual([]);
  });

});
