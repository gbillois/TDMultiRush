const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests/e2e",
  timeout: 45_000,
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: "http://127.0.0.1:8000",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  },
  webServer: {
    command: "python3 -m http.server 8000",
    url: "http://127.0.0.1:8000",
    timeout: 120_000,
    reuseExistingServer: !process.env.CI,
    cwd: __dirname
  },
  projects: [
    {
      name: "web-classic",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 900 }
      }
    },
    {
      name: "iphone",
      use: {
        ...devices["iPhone 14"],
        browserName: "webkit"
      }
    },
    {
      name: "ipad",
      use: {
        ...devices["iPad Pro 11"],
        browserName: "webkit"
      }
    }
  ]
});
