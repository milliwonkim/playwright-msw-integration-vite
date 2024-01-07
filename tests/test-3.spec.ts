import { expect, test } from "@playwright/test";

// test.beforeAll(async ({ browser }) => {
//   worker.start();
// });

test.beforeEach(async ({ page }) => {
  // Inject the PLAYWRIGHT_TEST_MODE variable into the page
  await page.addInitScript(() => {
    window["PLAYWRIGHT_TEST_MODE"] = true;
  });
});

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page
    .locator("div")
    .filter({ hasText: /^CFLCanadian Football LeagueAmerican Football$/ })
    .locator("div")
    .nth(2)
    .click();
  await page.getByText("NCAAF", { exact: true }).click();

  expect(page.getByRole("heading", { name: "NCAAF" }));
});
