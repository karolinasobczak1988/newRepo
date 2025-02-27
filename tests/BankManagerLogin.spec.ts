import { test, expect } from '@playwright/test';
import { BankManagerPage } from '../pageobjects_ts/BankManagerPage';
import { BankManagerCustomerPage  } from '../pageobjects_ts/BankManagerCustomerPage';
import { AccountPage } from '../pageobjects_ts/AccountPage';

test.describe('Login Tests', () => {
  test('login and select Hermione', async ({page}) => {
  //  let bankManagerPage = LoginPage;
    const bankManagerPage = new BankManagerPage(page);
    await bankManagerPage.navigateTo();
    await bankManagerPage.clickCustomerLoginButton();
    await expect(page).toHaveURL('https://www.way2automation.com/angularjs-protractor/banking/#/manager');

    const bankManagerCustomerPage = new BankManagerCustomerPage(page);
    await bankManagerCustomerPage.clickAddCustomer();
    await bankManagerCustomerPage.fillAddCustomer();
  //  await bankManagerCustomerPage.
  
  /*

    const accountPage = new AccountPage(page);
    await accountPage.clickDeposit();

    const MessageIsDisplayed = accountPage.MessageIsDisplayed
    await expect(MessageIsDisplayed).toBeVisible();*/
  });
});
