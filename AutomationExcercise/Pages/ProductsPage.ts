import { expect, Locator, Page } from '@playwright/test';
import data from '../test data/data.json';
import { af_ZA } from '@faker-js/faker';

export class ProductsPage {
  private page: Page;


  public emailSignupTextbox: Locator;
  public signupButton: Locator;
  public emailLoginTextbox: Locator;
  public passwordLoginTextbox: Locator;
  public loginButton: Locator;
  public productA: Locator;
  public continueShoppingButton: Locator;
  public productB: Locator;
  public viewCartButton: Locator;
  public productLocator: Locator;
  public productLocator2: Locator;
  public productQuantity: Locator;
  public product2DeleteButton: Locator;
  public checkoutButton: Locator;
  public placeOrder: Locator;
  public productCart: Locator;
  public addToCartButton: Locator;
  public productCart2: Locator;
  public addToCartButton2: Locator;
  //filters locators
  public categoryWomen: Locator;
  public dressCategory: Locator;
  public categoryProductsTable: Locator;
  public kookieKidsCategory: Locator;
  public kookieKidsProductsTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.continueShoppingButton = this.page.getByRole('button', { name: 'Continue Shopping' });
    this.productA = this.page.getByRole('heading', { name: data.products.product1 }).first();
    this.productB = this.page.locator('div.productinfo h2', { hasText: data.products.product2 });
    this.viewCartButton = this.page.locator('.modal-body p.text-center a');
    this.productQuantity = this.page.locator('tr#product-18 td.cart_quantity button.disabled');
    this.productLocator = this.page.locator('tr#product-18 td.cart_description h4 a');
    this.productLocator2 = this.page.locator('tr#product-16 td.cart_description h4 a');
    this.product2DeleteButton = this.page.locator('tr#product-16 td.cart_delete a.cart_quantity_delete');
    this.checkoutButton = page.locator('a.btn.btn-default.check_out');
    this.placeOrder = page.locator('a.btn.btn-default.check_out[href="/payment"]');
    this.productCart = this.page.locator('div.productinfo.text-center p:has-text("Little Girls Mr. Panda Shirt")');
    this.addToCartButton = this.page.locator('div:nth-child(17) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn');
    this.productCart2 = this.page.locator('div.productinfo.text-center p:has-text("Sleeves Top and Short - Blue & Pink")');
    this.addToCartButton2 = this.page.locator('div:nth-child(16) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn');
    //filters
    this.categoryWomen = this.page.locator('div.panel-heading h4.panel-title >> text=Women');
    //locator('#accordian div').filter({ hasText: 'Women' }).nth(1);
    this.dressCategory = this.page.locator('#Women .panel-body ul li >> text=Dress');
    this.categoryProductsTable = this.page.locator('div.features_items p');
    this.kookieKidsCategory = this.page.getByRole('link', { name: '(3) Kookie Kids' });
    this.kookieKidsProductsTable = this.page.locator('div.features_items .productinfo p');
  }
  
  async orderProducts() {
    
    console.log("Product located: ", await this.productCart.isVisible());
    await this.productCart.click();
    await this.page.pause(); 
    await this.addToCartButton.click();
  }
  async orderProducts2() {
 
    console.log("Product2 located: ", await this.productCart2.isVisible());
    await this.productCart2.click();
    await this.addToCartButton2.click();
  }
  
  get orderConfirmation() {
  return this.page.getByText('Your product has been added to cart. View Cart');
  }
  async continueShopping() {
  await this.continueShoppingButton.click()
  }

  async filterWomenCategory() {
  await this.categoryWomen.click();
  await this.dressCategory.waitFor();
  await this.dressCategory.click();
  await expect(this.categoryProductsTable).toContainText([
    data.products.product3, data.products.product4, data.products.product5]);
  }

  async filterKookieKidsCategory() {
    await this.kookieKidsCategory.click();
    await expect(this.kookieKidsProductsTable).toContainText([
      data.products.product6, data.products.product7, data.products.product8]);
    }
   
}