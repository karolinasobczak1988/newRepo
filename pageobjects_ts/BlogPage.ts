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
    this.continueButton = page.locator('a[aria-label="Continue"]:not(:has(img))');
    this.saveButton = page.getByRole('link', { name: 'Save' });
    this.slider = page.locator('label.switch[data-original-title="Published blog posts are visible for everyone"] input[type="checkbox"]');
    this.textPublished = page.locator(
      'text="Grumpy Cat, was an American internet celebrity cat. She was known for her permanently \\"grumpy\\" facial appearance."'
    );
  }

  async addText(): Promise<void> {
    await this.textField.click();
    await this.textField.fill(
      'Grumpy Cat, was an American internet celebrity cat. She was known for her permanently "grumpy" facial appearance.'
    );
    await this.contentField.click();
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
    await this.page.waitForLoadState('load');

    // Scroll the Continue button into view
    await this.continueButton.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(500); // Allow any UI transitions to complete

    // Click only on the left (text) portion of the button
    await this.clickContinueTextPortion();
  }

  /**
   * Clicks on the left portion of the Continue button (where "Con" is visible)
   * to avoid triggering any widget associated with the right side.
   */
  async clickContinueTextPortion(): Promise<void> {
    const box = await this.continueButton.boundingBox();
    if (!box) {
      console.error('Could not determine bounding box for the Continue button.');
      return;
    }

    // Calculate coordinates for a click near the left edge.
    // Adjust the offset value (here 10px) as needed.
    const offsetX = box.x + 10;
    const offsetY = box.y + box.height / 2;
    console.log(`Clicking at offset (x: ${offsetX}, y: ${offsetY}) within the Continue button.`);

    await this.continueButton.click({ position: { x: offsetX - box.x, y: offsetY - box.y } });
    // Note: The position option is relative to the element's top-left corner.
  }

  async toggleSlider(): Promise<void> {
    const isChecked = await this.slider.isChecked();
    if (!isChecked) {
      console.log("Slider is on 'No', toggling to 'Yes'...");
      const sliderLabel = this.slider.locator('..');
      await sliderLabel.click();
      await this.page.waitForTimeout(500);
    } else {
      console.log("Slider is already on 'Yes'.");
    }
  }

  async clickAddBlogPostButton(): Promise<void> {
    await this.saveButton.click();
  }

  get postPublished() {
    return this.textPublished;
  }

  async blogAll(): Promise<void> {
    await this.addText();
    await this.uploadImage();
    await this.toggleSlider();
    await this.clickAddBlogPostButton();
  }
}
