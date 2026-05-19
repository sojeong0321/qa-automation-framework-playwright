import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

import { loginData } from '../test-data/loginData';
import { checkoutData } from '../test-data/checkoutData';

test.describe('Checkout 테스트', () => {
  test('상품 주문 완료 테스트', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();

    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password
    );

    await inventoryPage.addBackpackToCart();

    await inventoryPage.goToCart();

    await checkoutPage.startCheckout();

    await checkoutPage.fillCheckoutInfo(
      checkoutData.userInfo.firstName,
      checkoutData.userInfo.lastName,
      checkoutData.userInfo.postalCode
    );

    await checkoutPage.finishCheckout();

    await checkoutPage.verifyOrderComplete();
  });
});