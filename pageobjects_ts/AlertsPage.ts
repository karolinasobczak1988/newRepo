import { expect, Locator, Page } from '@playwright/test';

export class AlertsPage {
  readonly page: Page;
  readonly alertButton: Locator;
  readonly buttonToSeeAlert: Locator;
  readonly alertButtonText: Locator;
  readonly alertsBanner: Locator;
  readonly buttonToSeeAlert5sec: Locator;
  readonly buttonToSeePrompt: Locator;
  readonly promptDialogAssertion: Locator;

  constructor(page: Page) {
    this.page = page;
    this.alertButton = page.locator('li').filter({ hasText: 'Alerts' });
    this.buttonToSeeAlert = page.locator('#alertButton');
    this.alertButtonText = page.locator('div:has-text("Click Button to see alert Click me")').first();
    this.alertsBanner = page.getByRole('heading', { name: 'Alerts' });
    this.buttonToSeeAlert5sec = page.locator('#timerAlertButton');
    this.buttonToSeePrompt = page.locator('#promtButton');
    this.promptDialogAssertion = page.locator('#promptResult');
    
  }

  async clickOnAlert(): Promise<void> {
    await this.alertButton.waitFor({ state: 'visible' });
    await this.alertButton.click({ timeout: 5000 });
  }

  async dialogAlert(): Promise<void> {
    const dialogPromise = new Promise<void>((resolve) => {
      this.page.once('dialog', async (dialog) => {
        // Log the alert message to the console
        console.log('Alert dialog message:', dialog.message());
  
        // Assert the dialog type and message
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('You clicked a button');
  
        // Accept the dialog
        await dialog.accept();
        resolve();
      });
    });
  
    await this.buttonToSeeAlert.click();
    await dialogPromise;
  }

  async dialogAlert5sec(): Promise<void> {
  const dialogPromise = new Promise<void>((resolve) => {
      this.page.once('dialog', async (dialog) => {
        console.log('Alert dialog message:', dialog.message());
      //  await this.page.screenshot({ path: 'alert-5sec.png' });
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('This alert appeared after 5 seconds');
        await dialog.accept();
        resolve();
      });
    });
  
    await this.buttonToSeeAlert5sec.click();
    await dialogPromise;
  }

  async dialogPrompt(): Promise<void> {
    const dialogPromise = new Promise<void>((resolve) => {
        this.page.once('dialog', async (dialog) => {
          console.log('Alert dialog message:', dialog.message());
          expect(dialog.type()).toBe('prompt');
          expect(dialog.message()).toBe('Please enter your name');
          await dialog.accept('MyName');
          resolve();
        });
      });
    
      await this.buttonToSeePrompt.click();
      await dialogPromise;
      await expect(this.promptDialogAssertion).toHaveText('You entered MyName');


      
  }}