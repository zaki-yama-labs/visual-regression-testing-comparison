// @ts-check
const { test, expect } = require("@playwright/test");

test("Snapshot test for index", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(page).toHaveScreenshot();
});
