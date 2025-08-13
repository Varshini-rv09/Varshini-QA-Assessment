const { expect } = require('@playwright/test');

exports.AdminPage = class AdminPage {
  constructor(page) {
    this.page = page;
  }

  async gotoUsers() {
    await this.page.click('a:has-text("Admin")');
    await this.page.click('a:has-text("User Management")');
    await this.page.click('a:has-text("Users")');
  }

  async addUser(username, password) {
    await this.page.click('button:has-text("Add")');
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.fill('input[name="confirmPassword"]', password);
    await this.page.click('button:has-text("Save")');
  }

  async verifyUserExists(username) {
    await expect(this.page.locator(`text=${username}`)).toBeVisible();
  }
}