import { test, expect } from '@playwright/test';

test('loop through buttons and click each one', async ({ page }) => {
  // Go to the website you want to test
  await page.goto('https://demoqa.com/'); // Replace with the URL of the website you want to test

  // Find all buttons or links on the page (let's assume they have a class 'btn')
  const buttons = await page.locator('.btn'); // Replace '.btn' with the actual selector for the buttons on your page

  // Get the total number of buttons
  const numberOfButtons = await buttons.count();
  console.log(`Found ${numberOfButtons} buttons.`); // Print the number of buttons to the console

  // Loop through each button and click it
  for (let i = 0; i < numberOfButtons; i++) {
  //  const button = buttons.nth(i);  // Get the i-th button in the list
 //   await button.click();           // Click the button
    console.log(`Clicked button ${i + 1}`); // Log to track which button was clicked
  }
});
