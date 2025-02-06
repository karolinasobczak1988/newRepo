import { test, expect } from '@playwright/test';

test('should visit the page and check title', async ({ page }) => {
    await page.goto('http://localhost:3000/'); // Your Express app URL
    await page.waitForLoadState('load'); // Wait for the page to load
    const textElement = await page.locator('text=Hello World'); // Find the element containing "Hello World"
    
    // Extract the text content of the element
    const textContent = await textElement.textContent();

    // Compare the extracted text with the expected value
    expect(textContent).toBe('Hello World');
});