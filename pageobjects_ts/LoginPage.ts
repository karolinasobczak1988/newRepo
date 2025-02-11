import { Locator, Page } from '@playwright/test';

export class LoginPage {
  private page: Page;
  private usernameField: Locator;
  private passwordField: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator('#Username');
    this.passwordField = page.locator('#Password');
    this.loginButton = page.locator('#loginbtn');
  }

  async navigateTo(): Promise<void> {
    await this.page.goto(process.env.BLOG_URL!);
  }

  async enterUsername(): Promise<void> {
    await this.usernameField.click();
    await this.usernameField.fill(process.env.USERNAMEQA!);
  }

  async enterPassword(): Promise<void> {
    await this.passwordField.click();
    await this.passwordField.fill(process.env.PASSWORD!);
  }

  async login(): Promise<void> {
    await this.loginButton.click();
  }

  async loginAll(): Promise<void> {
    await this.navigateTo();
    await this.enterUsername();
    await this.enterPassword();
    await this.login();
  }
}
