const {test, expect} = require('@playwright/test');

//Negative Functional Test 01 - Complex sentence
test('Neg_Fun_0001 - Complex sentence', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputNegative = page.locator('textarea');

  
  await singlishInputNegative.fill('Adha mama pothak liyanna kiyala hitiye, mokadha naeththam mata wena welawak hambuwenne nathi wei oya tika liyala iwara karanna. mata oyaagee adhahas thiyanawanm liyala ewanna. Heta mama balanna oni ewath ekka liyanna widhihak.');
  await expect(page.locator('body')).toContainText('වේලාවක්');
});

//Negative Functional Test 02 - Sentence without spacing
test('Neg_Fun_0002 - Sentence without spacing', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputNegative = page.locator('textarea');

  
  await singlishInputNegative.fill('Matamalvavannaaasayi');
  await expect(page.locator('body')).toContainText('මට මල් වවන්න ආසයි');
});

//Negative Functional Test 03 - Joined informal question
test('Neg_Fun_0003 - Joined informal question', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputNegative = page.locator('textarea');

  
  await singlishInputNegative.fill('bathkatakkanavadha?');
  await expect(page.locator('body')).toContainText('බත් කටක් කනවද?');
});

//Negative Functional Test 04 - Mixed-language with multi-sentence input
test('Neg_Fun_0004 - Mixed-language with multi-sentence input', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputNegative = page.locator('textarea');

  
  await singlishInputNegative.fill('Oyage CPU eka mata vikunanna puluvandha? Mage parana Laptop eka kaduna hadissiyeema, reason ekak dhanne nam naehae. Karala dhiyan puluvannam.');
  const body = page.locator('body');    
    await expect(body).toContainText('මගේ');
    await expect(body).toContainText('කරලා');
});

//Negative Functional Test 05 - Phases with currancies, dates and measures and without spacing
test('Neg_Fun_0005 - Phases with currancies, dates and measures and without spacing', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputNegative = page.locator('textarea');

  
  await singlishInputNegative.fill('mama dhesaembar25 dhavaseedhi rs3500gevvaa saha 5kg bath gaththaa');
  const body = page.locator('body');    
    await expect(body).toContainText('rs. 3500 ගෙව්වා');
    await expect(body).toContainText('දෙසැම්බර් 25'); 
});

//Negative Functional Test 06 - Major typographical errors
test('Neg_Fun_0006 - Major typographical errors', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputNegative = page.locator('textarea');

  
  await singlishInputNegative.fill('mmaa gddhara yannvvaa kiylaa kivvva, nmuth hri amruyi');
  const body = page.locator('body');    
    await expect(body).toContainText('ගෙදර');
    await expect(body).toContainText('නමුත්');
    await expect(body).toContainText('අමාරුයි');
});

//Negative Functional Test 07 - Chained multi-word expressions
test('Neg_Fun_0007 - Chained multi-word expressions', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputNegative = page.locator('textarea');

  
  await singlishInputNegative.fill('mata oona gihin enna poddak inna hariyata vaeda karanna.');
  const body = page.locator('body');    
    await expect(body).toContainText('ගිහිං එන්න,');
});

//Negative Functional Test 08 - Sentence with brand names which embedded with Singlish
test('Neg_Fun_0008 - Sentence with brand names which embedded with Singlish', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputNegative = page.locator('textarea');

  
  await singlishInputNegative.fill('mama adha WhatsAppekata Zoommeeting ekak join kalaa saha LinkedInprofil eka update kalaa.');
  const body = page.locator('body');    
    await expect(body).toContainText('WhatsApp එකට');
    await expect(body).toContainText('Zoom meeting එකක්');
    await expect(body).toContainText('LinkedIn profile එක');
    await expect(body).toContainText('update කළා');
});

//Negative Functional Test 09 - Sentence with common English words and without spacing
test('Neg_Fun_0009 - Sentence with common English words and without spacing', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputNegative = page.locator('textarea');

  
  await singlishInputNegative.fill('me Saturdaymama concertekakata yanna inne. Oyaalatath enna puluvan. ee unaata Ticketsganna onaa');
  const body = page.locator('body');    
    await expect(body).toContainText('Saturday මම');
    await expect(body).toContainText('concert එකකට');
    await expect(body).toContainText('tickets ගන්න ඕනා');
});

//Negative Functional Test 10 - Simple sentence with an English short form, without spacing
test('Neg_Fun_0010 - imple sentence with an English short form, without spacing', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputNegative = page.locator('textarea');

  
  await singlishInputNegative.fill('OTPeka kiyanna');
  const body = page.locator('body');    
    await expect(body).toContainText('OTP එක');
});