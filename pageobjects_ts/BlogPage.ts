import { Locator, Page } from '@playwright/test';
import path from 'path';

export class BlogPage {
  private page: Page;
  private textField: Locator;
  private fileInput: Locator;  // Locator for file input
  private continueButton: Locator;  // Locator for "Add Blog Post" button (optional)
  private saveButton: Locator;
  private slider: Locator;

  constructor(page: Page) {
    this.page = page;
    this.textField = page.locator('[aria-label="Post title"]');  // Locator for the post title text field
    this.fileInput = page.locator('input[name="qqfile"]');  // Locator for the file input element
    this.continueButton = page.locator('a[aria-label="Continue"]');
    this.saveButton = page.locator('a.button.is-medium-button.btn-block.xs-mt-4.is-inverted');
    this.slider = page.locator('label.switch[data-original-title="Published blog posts are visible for everyone"]');
  }

  async addText(): Promise<void> {
    await this.textField.click();
    await this.textField.fill('Grumpy Cat, was an American internet celebrity cat. She was known for her permanently "grumpy" facial appearance.');
  }

  async uploadImage(): Promise<void> {
    // Define the image file path (absolute path on your local machine)
    const filePath = path.resolve('C:/Users/karol/Downloads/PlayWrightAutomation/PlayWrightAutomation/tests/test files/grumpy.jpg');
    
    await this.fileInput.click();
    await this.fileInput.setInputFiles(filePath);
  }
   
  async toggleSlider(): Promise<void> {
    // This will click on the checkbox and toggle it
    await this.slider.click();
  }

  async clickAddBlogPostButton(): Promise<void> {
    // Click the "Add Blog Post" button
    await this.continueButton.click();
    await this.saveButton.click();
  }
  
  async blogAll(): Promise<void> {
    await this.addText();
    await this.uploadImage();
    await this.toggleSlider();
    await this.clickAddBlogPostButton();
    
   
  }
}
