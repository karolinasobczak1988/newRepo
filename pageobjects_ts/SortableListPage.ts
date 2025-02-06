import { Page, Locator } from '@playwright/test';

export class SortableListPage {
  readonly page: Page;
  readonly listContainer: Locator;
  readonly listItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.listContainer = page.locator('.vertical-list-container.mt-4');
    this.listItems = this.listContainer.locator('.list-group-item');
  }

  async sortList() {
    // Fetch all items initially
    let items = await this.listItems.all();

    // Define the desired sorted order
    const sortedOrder = ['Six', 'Five', 'Four', 'Three', 'Two', 'One'];

    // Extract text content of each list item
    let itemsText = await Promise.all(items.map(async (item) => (await item.textContent())?.trim()));

    // Perform sorting based on the defined order
    for (let i = 0; i < sortedOrder.length; i++) {
      const currentItemIndex = itemsText.findIndex(text => text === sortedOrder[i]);

      if (currentItemIndex !== -1 && currentItemIndex !== i) {
        const currentItem = items[currentItemIndex];
        const targetItem = items[i];

        // Ensure the item is visible and ready for dragging
        await currentItem.scrollIntoViewIfNeeded();
        await currentItem.hover();  // Hover before dragging
        await currentItem.dragTo(targetItem, { timeout: 60000 });

        // Add a small delay to stabilize the drag operation
        await this.page.waitForTimeout(500);

        // Refresh the item array after the drag operation to reflect changes
        items = await this.listItems.all();
        itemsText = await Promise.all(items.map(async (item) => (await item.textContent())?.trim()));
      }
    }
  }
}
