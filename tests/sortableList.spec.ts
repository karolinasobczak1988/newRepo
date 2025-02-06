import { test, expect } from '@playwright/test';
import { SortableListPage } from '../pageobjects_ts/SortableListPage';

test('should sort list items correctly', async ({ page }) => {
  const sortableListPage = new SortableListPage(page);

  await page.goto('https://demoqa.com/sortable');

  // Perform the sort operation
  await sortableListPage.sortList();

  // Wait for the list to stabilize
  await page.waitForSelector('.vertical-list-container.mt-4 .list-group-item');

  // Verify that the list is now sorted
  const sortedItems = await sortableListPage.listItems.allTextContents();
  console.log(sortedItems);  // Log the final order to debug
  expect(sortedItems).toEqual(['Six', 'Five', 'Four', 'Three', 'Two', 'One']);
});
