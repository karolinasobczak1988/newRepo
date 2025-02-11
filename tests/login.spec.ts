import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageobjects_ts/LoginPage';
import { HomePage } from '../pageobjects_ts/HomePage';
import { BlogPage } from '../pageobjects_ts/BlogPage';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '..', 'utils_ts', 'testData.env') });

test.setTimeout(300000);  

test('Create and verify a blog post', async ({ browser }) => {
  
  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/', 
      size: { width: 1280, height: 720 },  
    },
  });

  const page = await context.newPage();

  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const blogPage = new BlogPage(page);

  // Log in
  await loginPage.loginAll();
  await page.waitForLoadState('load');
  
  // Ensure the user is redirected to the correct page
  await expect(page).toHaveURL('https://jamesroberts-trial.interactgo.com/#home');

  // Navigate to add blog post
  await homePage.goToAddPost();
  
  // Perform actions to create a blog post
  await blogPage.blogAll();
  
  // Wait for the page to load after blog creation
  await page.waitForLoadState('load');
  
  // Assert that the post is published and the "Published" label is visible
  await page.waitForLoadState('load');
  await expect(blogPage.postPublished).toBeVisible();
 
  // Close the context after the test
  await context.close();
});
