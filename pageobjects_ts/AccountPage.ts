import { Locator, Page } from '@playwright/test';
import { fixtureBank } from '../utils_ts/fixtureBank';

export class AccountPage {
  private page: Page;
  private depositButton: Locator;
  private amountField: Locator;
  private placeDeposit: Locator;
  private messageDisplayed: Locator;
  
 

  constructor(page: Page) {
    this.page = page;
    this.depositButton = page.getByRole('button', { name: 'Deposit' });
    this.amountField = page.getByPlaceholder('amount');
    this.placeDeposit = page.getByRole('form').getByRole('button', { name: 'Deposit' });
    this.messageDisplayed = page.getByText('Deposit Successful');
  }

  async clickDeposit(): Promise<void> {
    await this.depositButton.click();
    await this.amountField.click();
    await this.amountField.fill('10');
    await this.placeDeposit.click();
  }
   
  get MessageIsDisplayed() {
    return this.messageDisplayed;
  }
  

  /*async clickCustomerLoginButton(): Promise<void> {
    await this.customerLoginButton.click();
  }*/
}
