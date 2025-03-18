import { Locator, Page } from '@playwright/test';

export class DqaHomePage {
  private page: Page;
  public doubleClickButton: Locator;
  public doubleClickText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.doubleClickButton = this.page.getByRole('button', { name: 'Double Click Me' });
    this.doubleClickText = this.page.getByText('You have done a double click');
  }

  async navigate() {
    await this.page.goto('https://demoqa.com/buttons');
  }

  async doubleClick() {
    await this.doubleClickButton.dblclick();
  }

  // Remove the call and just return the locator directly
  get doubleClickAssertion() {
    return this.doubleClickText;
  }
}
