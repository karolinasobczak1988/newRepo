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
  public productName: Locator;
  public productQuantity: Locator;




  constructor(page: Page) {
    this.page = page;
    this.continueShoppingButton = this.page.getByRole('button', { name: 'Continue Shopping' });
    this.productA = this.page.getByRole('heading', { name: data.products.product1 }).first();
    this.productB = this.page.locator('div.productinfo h2', { hasText: data.products.product2 });
    this.viewCartButton = this.page.locator('.modal-body p.text-center a');
    this.productName = this.page.locator('tr#product-18 td.cart_description h4 a');
    this.productQuantity = this.page.locator('tr#product-18 td.cart_quantity button.disabled');
  
  }



  
  async orderProducts() {

    const productCard = this.page.locator('div.productinfo.text-center p:has-text("Little Girls Mr. Panda Shirt")');

    console.log("Product located: ", await productCard.isVisible());
  
    await productCard.click();
    await this.page.pause(); 
   
    const addToCartButton = this.page.locator('div:nth-child(17) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn')

    await addToCartButton.click();

  
   
  }
  async orderProducts2() {
 
  
    const productCard = this.page.locator('div.productinfo.text-center p:has-text("Sleeves Top and Short - Blue & Pink")');

    console.log("Product located: ", await productCard.isVisible());
  
    await productCard.click();
   
    const addToCartButton = this.page.locator('div:nth-child(16) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn')

    await addToCartButton.click();
  
   
  }

  
get orderConfirmation() {
  return this.page.getByText('Your product has been added to cart. View Cart');
}
async continueShopping() {
  await this.continueShoppingButton.click()
}
  
    

  async goToCart() {
    await this.page.pause(); 
    await this.viewCartButton.click();
  
  }

  async checkCart() {
    await expect(this.productName).toHaveText(data.products.product1);
    await expect(this.productQuantity).toHaveText('2');

    await expect(this.productName).toHaveText(data.products.product2);
    await expect(this.productQuantity).toHaveText('1');
    
  }

  
  }

