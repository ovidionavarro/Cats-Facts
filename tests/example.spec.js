// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL='http://localhost:5173/'

test('app show ramdon fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  // Expect a title "to contain" a substring.
  const text=await page.getByRole('paragraph');
  const image=await page.getByRole('img');

  const textContent= await text.textContent()
  const img_src=await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
});


