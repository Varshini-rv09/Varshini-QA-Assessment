const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { AdminPage } = require('../pages/AdminPage');

test('Add new user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const adminPage = new AdminPage(page);

  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');
  await loginPage.expectLoginSuccess();

  await adminPage.gotoUsers();
  await adminPage.addUser('testuser123', 'Password@123');
  await adminPage.verifyUserExists('testuser123');
});