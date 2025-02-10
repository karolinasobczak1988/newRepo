import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageobjects_ts/LoginPage';
import { HomePage } from '../pageobjects_ts/HomePage';
import { BlogPage } from '../pageobjects_ts/blogPage';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from testData.env
////dotenv.config({ path: path.resolve(__dirname, '..', 'utils_ts', 'testData.env') });

// Path to the existing state.json file
//const storageStatePath = path.resolve('C:/Users/karol/Downloads/PlayWrightAutomation/PlayWrightAutomation/state.json');

// Use the storage state for tests
//test.use({ storageState: storageStatePath });

test.setTimeout(60000);  // Extend the test timeout to 60 seconds

test('Create and verify a blog post', async ({ browser, page }) => {
  // Create a new browser context for the login
  const context = await browser.newContext();

  // Use the page from the test context (no need to redeclare it)
  const loginPage = new LoginPage(page);

  // Log in by calling loginAll and wait for page load
  const loginPromise = loginPage.loginAll();
  const navigationPromise = page.waitForLoadState('load');  // Wait for page to load after login

  // Wait for both login and page load to complete
  await Promise.all([loginPromise, navigationPromise]);

  // Ensure we are on the correct page after login
//  await expect(page).toHaveURL('https://jamesroberts-trial.interactgo.com/#home');

  // Continue with the blog post creation
  const homePage = new HomePage(page);

  // Navigate to the post creation page
  await homePage.goToAddPost();
  const blogPage = new BlogPage(page);
  await blogPage.blogAll();
  // Create the post
  // await blogPage.createPost('My Automated Blog', 'path/to/image.jpg');

  // Publish the post
  // await blogPage.publishPost();

  // Verify the post was created
  // await blogPage.verifyPost('My Automated Blog');
});
