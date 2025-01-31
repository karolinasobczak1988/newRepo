import { Locator, Page } from '@playwright/test';
import { faker } from '@faker-js/faker/locale/en';

export class BankManagerCustomerPage {
  private page: Page;
  private addCustomerButton: Locator;
  private firstName: Locator;
  private lastName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addCustomerButton = page.getByRole('button', { name: 'Add Customer' });
    this.firstName = page.getByPlaceholder('First Name');
    this.lastName = page.getByPlaceholder('Last Name');
  }

  async clickAddCustomer(): Promise<void> {
    await this.addCustomerButton.click();
  }

  async fillAddCustomer(): Promise<void> {
    // Generate random first name and last name
    const randomFirstName = faker.person.firstName();
    const randomLastName = faker.person.lastName();

    // Click the 'Add Customer' button
  //  await this.addCustomerButton.click();

    // Fill in the generated names
    await this.firstName.fill(randomFirstName);
    await this.lastName.fill(randomLastName);
  }
}
