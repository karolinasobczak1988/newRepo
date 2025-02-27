import { Locator, Page } from '@playwright/test';
import path from 'path';

export class BlogPage {
  private page: Page;
  private textField: Locator;
  private fileInput: Locator;
  private continueButton: Locator;
  private saveButton: Locator;
  private slider: Locator;
  private textPublished: Locator;
  private contentField: Locator;
  private postSummary: Locator;

  constructor(page: Page) {
    this.page = page;
    this.textField = page.locator('[aria-label="Post title"]');
    this.fileInput = page.locator('input[name="qqfile"]');
    this.contentField = page.locator('#blogPostBodyContent');
    this.postSummary = page.locator('div.editable-wrapper p[contenteditable="true"]');
    this.continueButton = page.locator('a[aria-label="Continue"]');;
    this.saveButton = page.locator('role=link[name="Save"]');
    this.slider = page.locator('label.switch[data-original-title="Published blog posts are visible for everyone"] input[type="checkbox"]');
    this.textPublished = page.locator('text="Grumpy Cat, was an American internet celebrity cat. She was known for her permanently \\"grumpy\\" facial appearance."');
  }

  async addText(): Promise<void> {
    await this.textField.click();
    await this.textField.fill(
      'Grumpy Cat, was an American internet celebrity cat. She was known for her permanently "grumpy" facial appearance.'
    );
    await this.contentField.click();
    await this.contentField.fill('Grumpy Cat Limited held eight trademarks in August 2018 registered with the United States Patent and Trademark Office');
    await this.postSummary.click();
    await this.postSummary.fill('American internet celebrity cat');
  }

  async uploadImage(): Promise<void> {
    const filePath = path.resolve(
      'C:/Users/karol/Downloads/PlayWrightAutomation/PlayWrightAutomation/tests/test files/grumpy.jpg'
    );
    await this.fileInput.setInputFiles(filePath);
    // Removed unnecessary waitForLoadState here
  }
  async hideWidget(): Promise<void> {
    await this.page.evaluate(() => {
        document.querySelector('.personalisation-trigger')?.remove();
        
    });
}
async clickContinue(): Promise<void> {
  await this.continueButton.click();
}


  async toggleSlider(): Promise<void> {
    const isChecked = await this.slider.isChecked();
    if (!isChecked) {
      console.log("Slider is on 'No', toggling to 'Yes'...");
      await this.slider.click({ force: true });  // Direct click to toggle the slider
      await this.page.waitForTimeout(500);
    } else {
      console.log("Slider is already on 'Yes'.");
    }
  }

  async clickAddBlogPostButton(): Promise<void> {
    await this.page.waitForLoadState('load');
    await this.saveButton.click();
    await this.page.waitForLoadState('load');
  }

  get postPublished() {
    return this.textPublished;
  }

  async blogAll(): Promise<void> {
    await this.uploadImage();
    await this.addText();
    await this.hideWidget();
    await this.clickContinue();
    await this.toggleSlider();
    await this.clickAddBlogPostButton();
  }
}
