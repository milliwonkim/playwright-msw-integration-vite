import { expect, test } from "@playwright/test";

test("타이핑 한 내용이 보이는지 확인", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("button", { name: "Open form dialog" }).click();
  await page.getByLabel("Email Address").click();
  await page.getByLabel("Email Address").fill("test");
  await page.getByRole("button", { name: "Subscribe" }).click();
  await expect(page.getByRole("heading", { name: "test" })).toBeVisible();
});

test("테이블 테스트", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await expect(
    page.getByRole("button", { name: "Dessert (100g serving)" })
  ).toBeVisible();
  await page.getByLabel("Go to next page").click();
  await page.getByLabel("Go to next page").click();
  await page.getByLabel("Go to previous page").click();
  await page.getByLabel("Go to previous page").click();
  await expect(
    page.getByRole("button", { name: "Dessert (100g serving)" })
  ).toBeVisible();
});
