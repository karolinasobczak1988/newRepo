import { expect, Locator, Page } from '@playwright/test';

export class WidgetAutocomPage {
  readonly page: Page;
  readonly multipleColorWidget: Locator;
  readonly suggestionList: Locator;
  readonly selectedValues: Locator;
  readonly blueValue: Locator;
  readonly blackValue: Locator;
  readonly automcompleteButton: Locator

  constructor(page: Page) {
    this.page = page;
    this.multipleColorWidget = page.locator('#autoCompleteMultipleInput');
    //locator('.auto-complete__value-container').first();
    //('#autoCompleteMultipleContainer');
    this.automcompleteButton = page.getByText('Auto Complete');
    this.suggestionList = page.locator('.auto-complete__menu');
    this.selectedValues = page.locator('.auto-complete__multi-value__label');
    this.blueValue = page.locator(`.auto-complete__option:text("${'Blue'}")`);
    this.blackValue = page.locator(`.auto-complete__option:text("${'Black'}")`);

  }

  async selectTypeWidget(): Promise<void> {
    await this.automcompleteButton.click();
    await this.multipleColorWidget.click();
    await this.multipleColorWidget.fill('bl');
    await this.suggestionList.waitFor();
    await expect(this.suggestionList).toBeVisible();

    await this.blueValue.click();
    
  }

  async selectTypeWidget2(): Promise<void> {
    await this.multipleColorWidget.click();
    await this.multipleColorWidget.fill('bl');
    await this.suggestionList.waitFor();
    await expect(this.suggestionList).toBeVisible();

    await this.blackValue.click();
   
  }
  
  async getSelectedOptions() {
    return await this.selectedValues.allTextContents();
  }
  }