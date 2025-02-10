import { Locator, Page } from '@playwright/test';

export class HomePage {
  private page: Page;
  private profileSettings: Locator;
  private profileOptions: Locator;
  private addBlogPostButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileSettings = page.getByRole('button', { name: 'Your profile and settings QA' });
   

    //('img[alt="QA Tester"]');
   // this.profileOptions = page.locator('a', { hasText: 'Profile Options' });
    this.addBlogPostButton = page.locator('a[href="/blog/post/create/342"]');
  }

  async goToAddPost(): Promise<void> {
    await this.profileSettings.click();
  //  await this.profileOptions.click();
    await this.addBlogPostButton.click();
  }
/*
  async enterPassword(): Promise<void> {
    await this.passwordField.click();
    await this.passwordField.fill(process.env.PASSWORD!);
  }

  async login(): Promise<void> {
    await this.loginButton.click();
  } 
}
//await page.locator('img[alt="QA Tester"]'); */
}