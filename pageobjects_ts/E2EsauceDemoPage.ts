// LoginPage.ts
import { Locator, Page } from '@playwright/test';
import { fixtureSaucedemo } from '../utils_ts/fixtureSaucedemo';

export class E2EsauceDemoPage {
  readonly page: Page;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  
 

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator('[data-test="username"]');
    this.passwordField = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
  }

  async navigateToLogin(fixtureSaucedemo: { website: string }): Promise<void> {
    await this.page.goto(fixtureSaucedemo.website);
}
  

  async enterUsername(fixtureSaucedemo: { username: string }): Promise<void> {
    await this.usernameField.click();
    await this.usernameField.fill(fixtureSaucedemo.username);
  }

  async enterPassword(fixtureSaucedemo: { password: string }): Promise<void> {
    await this.passwordField.click();
    await this.passwordField.fill(fixtureSaucedemo.password);
  }

  async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
  }
  
  async login(fixtureSaucedemo: { website: string; username: string; password: string }): Promise<void> {
    await this.navigateToLogin(fixtureSaucedemo);
    await this.enterUsername(fixtureSaucedemo);
    await this.enterPassword(fixtureSaucedemo);
    await this.clickLoginButton();
  }
}
