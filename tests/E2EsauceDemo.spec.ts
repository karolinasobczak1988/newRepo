import { test, expect } from '@playwright/test';
import { E2EsauceDemoPage } from '../pageobjects_ts/E2EsauceDemoPage';
import { fixtureSaucedemo, fixtureSaucedemoInventory } from '../utils_ts/fixtureSaucedemo';
import { E2EsauceInventoryPage } from '../pageobjects_ts/E2EsauceInventoryPage';

test.describe('Login beforeAll and buy something', () => {
  let e2EsauceDemoPage: E2EsauceDemoPage;
  let e2EsauceInventoryPage: E2EsauceInventoryPage;

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    e2EsauceDemoPage = new E2EsauceDemoPage(page);

    await e2EsauceDemoPage.login(fixtureSaucedemo);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await context.storageState({ path: 'session.json' });
    console.log('Session storage saved with storageState:', await context.storageState());

    await context.close();
  });

  test('e2e test', async ({ browser }) => {
    const context = await browser.newContext({
      storageState: 'session.json',  // Load the session from the saved file
    });
    const page = await context.newPage();
    
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    e2EsauceInventoryPage = new E2EsauceInventoryPage(page);
    const basketIsFull = e2EsauceInventoryPage.basketIsFull

    await basketIsFull.screenshot({path:'basketIsEmptyScreenshot.png'});
    await e2EsauceInventoryPage.selectOptionDropdown(fixtureSaucedemoInventory);
    await e2EsauceInventoryPage.selectFirstItemTop();
    await basketIsFull.screenshot({path:'basketIsFullScreenshot.png'});
   
    expect(await page.screenshot()).toMatchSnapshot('basketIsFullScreenshot.png');
    await e2EsauceInventoryPage.removeItem();
    await basketIsFull.screenshot({path:'basketIsEmptyNowScreenshot.png'});
    expect(await page.screenshot()).toMatchSnapshot('basketIsEmptyScreenshot.png');
   // await page.screenshot({path:'bankmanagerwholescreen.png'});

   
     
  });
});
