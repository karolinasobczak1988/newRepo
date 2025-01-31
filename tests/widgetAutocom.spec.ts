import { test, expect } from '@playwright/test';
import { WidgetAutocomPage } from '../pageobjects_ts/WidgetAutocomPage';


test.describe('Practicing locating autocomplete widgets', () => {
  test('User can select color names from widget', async ({ page }) => {
    // Navigate to the homepage and verify the URL
    await page.goto('https://demoqa.com/widgets');
    await expect(page).toHaveURL('https://demoqa.com/widgets');
    
    const widgetAutocomPage = new WidgetAutocomPage(page);
    await widgetAutocomPage.selectTypeWidget();
    await widgetAutocomPage.selectTypeWidget2();

    const selectedOptions = await widgetAutocomPage.getSelectedOptions();
    expect(selectedOptions).toContain('Black');
    expect(selectedOptions).toContain('Blue');
    //'Black', 'Blue'


  
  });
});
