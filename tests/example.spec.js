// @ts-check
import { test, expect } from "@playwright/test";

const HOME = "http://localhost:3000/";

test("renders homepage", async ({ page }) => {
  await page.goto(HOME);
  await expect(page.getByText("Simple Todo App")).toBeVisible();
  expect(await page.screenshot()).toMatchSnapshot("landing-page.png");
});

test("completes tasks", async ({ page }) => {
  await page.goto(HOME);

  await expect(page.getByText("Setup development environment")).toHaveCSS(
    "text-decoration-line",
    "line-through"
  );

  const firstItem = page.locator(".todo-item").nth(0);
  await firstItem.getByRole("checkbox").uncheck();

  await expect(page.getByText("Setup development environment")).not.toHaveCSS(
    "text-decoration-line",
    "line-through"
  );

  const secondItem = page.locator(".todo-item").nth(1);
  await secondItem.getByRole("checkbox").check();

  await expect(page.getByText("Develop website and add content")).toHaveCSS(
    "text-decoration-line",
    "line-through"
  );
});
