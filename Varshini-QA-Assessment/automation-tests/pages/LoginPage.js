const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username, password) {
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('button[type="submit"]');
  }

  async expectLoginSuccess() {
    await expect(this.page).toHaveURL(/dashboard/);
  }

  async expectLoginFailure() {
    await expect(this.page.locator('.oxd-alert-content-text')).toHaveText(/Invalid credentials/);
  }
}