import { test, expect } from '@playwright/test'; 
import { DqaHomePage } from '../Pages/DqaHomePage';

test('Double-click test', async ({ page }) => {
  const dqaHomePage = new DqaHomePage(page);
  
  await dqaHomePage.navigate();
  await dqaHomePage.doubleClick();

  // Perform the assertion on the text locator
  await expect(dqaHomePage.doubleClickAssertion).toBeVisible();
});
