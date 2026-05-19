import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async addBackpackToCart() {
    await this.page
      .locator('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click();
  }

  async goToCart() {
    await this.page
      .locator('[data-test="shopping-cart-link"]')
      .click();
  }
}