const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  reporter: [['html', { outputFolder: 'report' }]],
  use: {
    browserName: 'chromium',
    headless: true,
    baseURL: 'https://opensource-demo.orangehrmlive.com/',
    screenshot: 'only-on-failure'
  },
});