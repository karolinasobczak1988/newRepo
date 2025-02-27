import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageobjects_ts/LoginPage';
import { CustomerPage } from '../pageobjects_ts/CustomerPage';
import { AccountPage } from '../pageobjects_ts/AccountPage';

test.describe('Login Tests', () => {
  test('login and select Hermione', async ({page}) => {
  //  let loginPage = LoginPage;
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo();
    await loginPage.clickCustomerLoginButton();
    await expect(page).toHaveURL('https://www.way2automation.com/angularjs-protractor/banking/#/customer');

    const customerPage = new CustomerPage(page);
    await customerPage.selectUserDropdown();
    await customerPage.clickLogin();
    await expect(page).toHaveURL('https://www.way2automation.com/angularjs-protractor/banking/#/account');
  

    const accountPage = new AccountPage(page);
    await accountPage.clickDeposit();

    const MessageIsDisplayed = accountPage.MessageIsDisplayed
    await expect(MessageIsDisplayed).toBeVisible();
   // await MessageIsDisplayed.screenshot({path:'bankmanagerScreenshot.png'});
   // expect(await page.screenshot()).toMatchSnapshot('bankmanagerScreenshot.png');
   // await page.screenshot({path:'bankmanagerwholescreen.png'});
    
  });
});
