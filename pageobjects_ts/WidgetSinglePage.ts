import { expect, Locator, Page } from '@playwright/test';

export class WidgetSinglePage {
  readonly page: Page;
  readonly singleColorWidget: Locator;
  readonly suggestionList: Locator;
  readonly selectedValues: Locator;
  readonly greenValue: Locator;
  readonly automcompleteButton: Locator

  constructor(page: Page) {
    this.page = page;
    this.singleColorWidget = page.locator('#autoCompleteSingleInput');
    this.automcompleteButton = page.getByText('Auto Complete');
    this.suggestionList = page.locator('.auto-complete__menu');
    this.selectedValues = page.locator('.auto-complete__single-value');
    //auto-complete__multi-value__label
    this.greenValue = page.locator(`.auto-complete__option:text("${'Green'}")`);
   // this.blackValue = page.locator(`.auto-complete__option:text("${'Black'}")`);

  }

  async selectTypeWidget(): Promise<void> {
    await this.automcompleteButton.click();
    await this.singleColorWidget.click();
    await this.singleColorWidget.fill('gr');
    await this.suggestionList.waitFor();
    await expect(this.suggestionList).toBeVisible();

    await this.greenValue.click();
    
  }
  
  async getSelectedOptions() {
    return await this.selectedValues.allTextContents();
  }
  }