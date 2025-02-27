import { Locator, Page } from '@playwright/test';
import { fixtureBank } from '../utils_ts/fixtureBank';

export class CustomerPage {
  private page: Page;
  private dropdown: Locator;
  private loginButton: Locator;
 

  constructor(page: Page) {
    this.page = page;
    this.dropdown = page.locator('#userSelect');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async selectUserDropdown(): Promise<void> {
    await this.dropdown.click()
    //fixtureBank
    await this.dropdown.selectOption(fixtureBank.option1);
  }

  async clickLogin(): Promise<void> {
    await this.loginButton.click();
  }


  

  /*async clickCustomerLoginButton(): Promise<void> {
    await this.customerLoginButton.click();
  }*/
}
