import { test, expect } from '../playwright/fixtures';

test('Change greeting on button click', async ({ context, extensionId }) => {
  const page = await context.newPage();
  // Access the extension's popup
  await page.goto(`chrome-extension://${extensionId}/index.html`);

  // Ensure the initial greeting is correct
  const initialGreeting = await page.textContent('#greeting');
  expect(initialGreeting).toBe('Welcome to Quick Notes Test Extension!');

  // Click the button to change the greeting
  await page.click('#changeGreetingBtn');
  
  // Ensure the greeting changes
  const changedGreeting = await page.textContent('#greeting');
  expect(changedGreeting).toBe('Testing with Playwright!');
});

