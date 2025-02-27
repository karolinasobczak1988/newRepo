import { Locator, Page } from '@playwright/test';
import { fixtureSaucedemo } from '../utils_ts/fixtureSaucedemo';

export class E2EsauceInventoryPage {
  readonly page: Page;
  readonly dropdown: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  readonly firstItemTop: Locator;
  readonly basketFull: Locator;
  readonly removeButton: Locator;



  constructor(page: Page) {
    this.page = page;
    this.dropdown = page.locator('[data-test="product-sort-container"]');
    this.passwordField = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.firstItemTop = page.getByText('Add to cart').first();
    this.basketFull =  page.locator('.shopping_cart_container');
    this.removeButton = page.getByText('Remove');
  }

//select price from High to Low
  async selectOptionDropdown(fixtureSaucedemoInventory: { priceDropdown: string }): Promise<void> {
    await this.dropdown.click();
    await this.dropdown.selectOption(fixtureSaucedemoInventory.priceDropdown);
  }

  async selectFirstItemTop(): Promise<void> {
      await this.firstItemTop.click();
    }

  get basketIsFull() {
     return this.basketFull;
 
  }

  async removeItem(): Promise<void> {
    await this.removeButton.click();
  }}
  /*
  async login(fixtureSaucedemo: { website: string; username: string; password: string }): Promise<void> {
    await this.navigateToLogin(fixtureSaucedemo);
    await this.enterUsername(fixtureSaucedemo);
    await this.enterPassword(fixtureSaucedemo);
    await this.clickLoginButton();
    */