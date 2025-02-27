import { Locator, Page } from '@playwright/test';


export class AlertsHomePage {
  readonly page: Page;
  readonly alertsFrameWindows: Locator;
  //readonly passwordField: Locator;
//  readonly loginButton: Locator;
  
 

  constructor(page: Page) {
    this.page = page;
    this.alertsFrameWindows = page.getByRole('heading', { name: 'Alerts, Frame & Windows' });
  //  this.passwordField = page.locator('[data-test="password"]');
    //this.loginButton = page.locator('[data-test="login-button"]');
  }

  async navigateToAlerts(): Promise<void> {
    await this.alertsFrameWindows.click();
}
  

 /* async enterUsername(fixtureSaucedemo: { username: string }): Promise<void> {
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
  }*/
}
