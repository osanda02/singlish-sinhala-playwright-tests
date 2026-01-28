const { test, expect } = require('@playwright/test');

test('Pos_UI_0001 - Sinhala output updates automatically in real-time while typing', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');  // open the web app i want to test

  const singlishInputUITest = page.locator('textarea');   // Find the Singlish input box

  await singlishInputUITest.type('Mata oyaagee phone eka genalla dhenna ikmanata', { delay: 150 });

  // Check if Sinhala output appears automatically
  await expect(page.locator('body')).toContainText('මට');

});

