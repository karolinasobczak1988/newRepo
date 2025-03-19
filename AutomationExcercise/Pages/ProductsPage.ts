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
  public viewCardButton: Locator;
  public productName: Locator;
  public productQuantity: Locator;




  constructor(page: Page) {
    this.page = page;
    this.continueShoppingButton = this.page.getByRole('button', { name: 'Continue Shopping' });
    this.productA = this.page.getByRole('heading', { name: data.products.product1 }).first();
    this.productB = this.page.locator('div.productinfo h2', { hasText: data.products.product2 });
    this.viewCardButton = this.page.getByRole('link', { name: 'View Cart' });
    this.productName = this.page.locator('tr#product-18 td.cart_description h4 a');
    this.productQuantity = this.page.locator('tr#product-18 td.cart_quantity button.disabled');
  
  }



  
  async orderProducts() {
    // Step 1: Locate the product by its name "Little Girls Mr. Panda Shirt"
    const productCard = this.page.locator('div.productinfo.text-center p:has-text("Little Girls Mr. Panda Shirt")');
  
    // Debug: Verify that the product was located
    console.log("Product located: ", await productCard.isVisible());
  
    // Step 2: Hover over the "Rs. 1200" price, which is within the same product card
   // const priceElement = productCard.locator('h2:has-text("Rs. 1200")');
    await productCard.click();
    // Step 3: Wait for the overlay to appear after hovering
    //const overlay = productCard.locator('.product-overlay');
    //await overlay.waitFor({ state: 'visible', timeout: 10000 });
  
    // Step 4: Locate the "Add to Cart" button within the overlay
    const addToCartButton = this.page.locator('div:nth-child(17) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn')

    await addToCartButton.click();
  
   
  }
  
  
  
  
  
  
  
  
  
  
  

  
get orderConfirmation() {
  return this.page.getByText('Your product has been added to cart. View Cart');
}
async continueShopping() {
  await this.continueShoppingButton.click()
}
  
    

  async goToCart() {
    await this.viewCardButton.click();
  }

  async checkCart() {
    await expect(this.productName).toHaveText(data.products.product1);
    await expect(this.productQuantity).toHaveText('2');

    await expect(this.productName).toHaveText(data.products.product2);
    await expect(this.productQuantity).toHaveText('1');

  }

  
  }

