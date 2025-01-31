// LoginPage.ts
import { Locator, Page } from '@playwright/test';
import { fixtureSaucedemo } from '../utils_ts/fixtureSaucedemo';

export class LoginPagesaucedemo {
  private page: Page;
  private usernameField: Locator;
  private passwordField: Locator;
  private loginButton: Locator;
  private errorMessage: Locator;
 

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator('[data-test="username"]');
    this.passwordField = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async navigateToLogin(fixtureSaucedemo: { website: string }): Promise<void> {
    await this.page.goto(fixtureSaucedemo.website);
}
  

  async enterUsername(fixtureSaucedemo: {username: string}): Promise<void> {
    await this.usernameField.click();
    await this.usernameField.fill(fixtureSaucedemo.username);
  }

  async enterPassword(fixtureSaucedemo: {password: string}): Promise<void> {
    await this.passwordField.click();
    await this.passwordField.fill(fixtureSaucedemo.password);
  }

  async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
  }

  async enterUsernameInv(fixtureSaucedemo: {usernameInv: string}): Promise<void> {
    await this.usernameField.click();
    await this.usernameField.fill(fixtureSaucedemo.usernameInv);
  }

  async enterPasswordInv(fixtureSaucedemo: {passwordInv: string}): Promise<void> {
    await this.passwordField.click();
    await this.passwordField.fill(fixtureSaucedemo.passwordInv);
  }

  get errorMessageDisplay() {
    return this.errorMessage;
  }

  /*async login(username: string, password: string): Promise<void> {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }*/
}
