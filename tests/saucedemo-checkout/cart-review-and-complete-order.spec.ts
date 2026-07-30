import { test, expect } from '@playwright/test';

const USERNAME = 'standard_user';
const PASSWORD = 'secret_sauce';

async function login(page: Parameters<typeof test>[0]['page']) {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill(USERNAME);
  await page.locator('[data-test="password"]').fill(PASSWORD);
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL(/inventory/);
}

test('completes the checkout flow from cart review to confirmation', async ({ page }) => {
  await login(page);

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();

  await expect(page).toHaveURL(/cart/);
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
  await expect(page.locator('.cart_list')).toContainText('Sauce Labs Backpack');

  await page.locator('[data-test="checkout"]').click();
  await expect(page).toHaveURL(/checkout-step-one/);

  await page.locator('[data-test="firstName"]').fill('Jane');
  await page.locator('[data-test="lastName"]').fill('Doe');
  await page.locator('[data-test="postalCode"]').fill('12345');
  await page.locator('[data-test="continue"]').click();

  await expect(page).toHaveURL(/checkout-step-two/);
  await expect(page.getByText('Payment Information')).toBeVisible();
  await page.locator('[data-test="finish"]').click();

  await expect(page).toHaveURL(/checkout-complete/);
  await expect(page.getByText('Thank you for your order!')).toBeVisible();
  await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
});
