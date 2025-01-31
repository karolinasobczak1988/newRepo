// LoginTest.spec.ts
import { expect } from '@playwright/test';
import { LoginSaucedemoPage } from '../pageobjects_ts/LoginSaucedemoPage';  // Correct import for named export
import { test } from '../utils_ts/fixtureSauce';  // Extended test with fixture

test.describe('Login tests', () => {
  test('User can log in with valid credentials', async ({ page, username, password }) => {
    const loginSaucedemoPage = new LoginSaucedemoPage(page);  // Using 'new' keyword to instantiate
    await loginSaucedemoPage.navigate();
    await loginSaucedemoPage.enterUsernameAndPass(username, password);
    await loginSaucedemoPage.submitLogin();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });
});
