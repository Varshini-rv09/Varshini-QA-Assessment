const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Valid login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');
  await loginPage.expectLoginSuccess();
});

test('Invalid login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('Admin', 'wrongpass');
  await loginPage.expectLoginFailure();
});