import { Locator, Page } from '@playwright/test';

export class BankManagerPage {
  private page: Page;
  private customerLoginButton: Locator;
 

  constructor(page: Page) {
    this.page = page;
    this.customerLoginButton = page.getByRole('button', { name: 'Bank Manager Login' });
  }

  async navigateTo(): Promise<void> {
    await this.page.goto('https://www.way2automation.com/angularjs-protractor/banking/#/login');
  }

  async clickCustomerLoginButton(): Promise<void> {
    await this.customerLoginButton.click();
  }
}
