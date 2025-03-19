import { test, expect } from '@playwright/test'; 
import { LoginPage, HomePage, ProductsPage } from '../Pages';
import data from '../test data/data.json'

test('buy something', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  
  // navigate to Signup/Login 
  await homePage.navigate();
  await homePage.acceptCookies();
  await homePage.goToSignupLogin();
  await expect(page).toHaveURL(data.url.loginSignupUrl);

  //login as a user and confirm
  await loginPage.validUserLogin();
  await loginPage.loginConfirmation.waitFor({ state: 'visible' });
  await expect(loginPage.loginConfirmation).toBeVisible();

  //go to products and buy smth
  await homePage.goToProducts();
  await expect(page).toHaveURL(data.url.productsUrl);
  await productsPage.orderProducts();
  await expect(productsPage.orderConfirmation).toBeVisible();
  await productsPage.continueShopping();

 //order a different product
  await productsPage.orderProducts2();
  await expect(productsPage.orderConfirmation).toBeVisible();

  //go to cart and check the products
  await productsPage.goToCart();
  await expect(page).toHaveURL(data.url.viewCartUrl);
  await productsPage.checkCart(); 

  //remove one product and check again
  await productsPage.deleteProductCheck();
  
})



