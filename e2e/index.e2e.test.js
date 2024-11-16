import { test, expect } from '../playwright/fixtures'; 

test('E2E Test: Open extension popup, display greeting, and modify it on button click', async ({ context, extensionId }) => {
  const page = await context.newPage();

  // Open the extension popup using the dynamic extension ID
  await page.goto(`chrome-extension://${extensionId}/index.html`);

  // Find the greeting text and the greet button
  const greetButton = page.locator('#changeGreetingBtn');
  const greetingText = page.locator('#greeting');

  await expect(greetingText).toHaveText('Welcome to Quick Notes Test Extension!');

  // Click the greet button
  await greetButton.click();

  await expect(greetingText).toHaveText('Testing with Playwright!');
});