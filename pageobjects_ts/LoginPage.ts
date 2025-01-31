import { Locator, Page } from '@playwright/test';

export class LoginPage {
  private page: Page;
  private customerLoginButton: Locator;
 

  constructor(page: Page) {
    this.page = page;
    this.customerLoginButton = page.getByRole('button', { name: 'Customer Login' });
  }

  async navigateTo(): Promise<void> {
    await this.page.goto('https://www.way2automation.com/angularjs-protractor/banking/#/login');
  }

  async clickCustomerLoginButton(): Promise<void> {
    await this.customerLoginButton.click();
  }
}
