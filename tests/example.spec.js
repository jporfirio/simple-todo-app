// @ts-check
import { test, expect } from "@playwright/test";

test("get started link", async ({ page }) => {
  await page.goto("http://localhost:3000//");
  await expect(page.getByText("Simple Todo App")).toBeVisible();
  expect(await page.screenshot()).toMatchSnapshot("landing-page.png");
});
