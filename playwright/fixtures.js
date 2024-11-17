/* fixtures : modification for Playwright to work with Chrome Extensions - 
dynamically extracts extension ID */

import { chromium, test as base } from '@playwright/test';
import path from 'path';

export const test = base.extend({
  // eslint-disable-next-line no-empty-pattern
  context: async ({}, use) => {
    const pathToExtension = path.resolve(__dirname, '../');
    const context = await chromium.launchPersistentContext('', {
      headless: false,
      args: [
        process.env.CI ? `--headless=new` : '',
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
      ],
    });

    await use(context);
    await context.close();
  },
  extensionId: async ({ context }, use) => {
    // for manifest v3:
    let [background] = context.serviceWorkers();
    if (!background) {
      background = await context.waitForEvent('serviceworker');
    }

    const extensionId = background.url().split('/')[2];
    await use(extensionId);
  },
});

export const expect = test.expect;
