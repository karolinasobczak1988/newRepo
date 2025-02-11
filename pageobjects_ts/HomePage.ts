import { Locator, Page } from '@playwright/test';

export class HomePage {
  private page: Page;
  private goToprofile: Locator;
  private profileOptions: Locator;
  private addBlogPostButton: Locator;
  postPublished: any;

  constructor(page: Page) {
    this.page = page;
    this.goToprofile = page.locator('div').filter({ hasText: /^Your profile and settings$/ });
    this.profileOptions = page.locator('div.options:has(a:has-text("Profile Options"))');
    this.addBlogPostButton = page.locator('a[href="/blog/post/create/342"]');
  }

  async goToAddPost(): Promise<void> {
    await this.goToprofile.click();

    // Check if 'Profile Options' button is visible, and click it if it is
    if (await this.profileOptions.isVisible()) {
      console.log('Profile Options button found, clicking it...');
      await this.profileOptions.click();
    }

    // Check if 'Add Blog Post' button is visible, and click it if it is
    if (await this.addBlogPostButton.isVisible()) {
      console.log('Add Blog Post button found, clicking it...');
      await this.addBlogPostButton.click();
    }
  }
}
