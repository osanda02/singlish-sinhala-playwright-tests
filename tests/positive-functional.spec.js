const {test, expect} = require('@playwright/test');

//Postive Functional Test 01 - Short greeting
test('Pos_Fun_0001 - Short greeting', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputPositive = page.locator('textarea');

  await singlishInputPositive.fill('suba raathriyak obata');
  await expect(page.locator('body')).toContainText('සුබ රාත්‍රියක් ඔබට');
});

//Postive Functional Test 02 - Compound sentence
test('Pos_Fun_0002 - Compound sentence', async ({ page }) => {


  await page.goto('https://www.swifttranslator.com/');
  const singlishInputPositive = page.locator('textarea');

  await singlishInputPositive.fill('Adha mama panthi yanna thamai hithaa gena inne. Eka nisaa mata enna vena ekak nae.');

  const body = page.locator('body');        
    await expect(body).toContainText('අද');
    await expect(body).toContainText('පන්ති');
    await expect(body).toContainText('එක නිසා');

});

//Postive Functional Test 03 - Small interrogative sentence
test('Pos_Fun_0003 - Small interrogative sentence', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputPositive = page.locator('textarea');

  
  await singlishInputPositive.fill('oyaa adha yanne naedhdha?');

  await expect(page.locator('body')).toContainText('නැද්ද?');
});

//Postive Functional Test 04 - Converting a informal phrase
test('Pos_Fun_0004 - Converting a informal phrase', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputPositive = page.locator('textarea');

  
  await singlishInputPositive.fill('Mehaata enavakoo.');

  await expect(page.locator('body')).toContainText('එනවකෝ.');
});

//Postive Functional Test 05 - Sentence with  positive and conditional tone
test('Pos_Fun_0005 - Sentence with  positive and conditional tone', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputPositive = page.locator('textarea');

  
  await singlishInputPositive.fill('Mama anivaaryayenma eka karala dhennam. dhavasak nam nam oona habaeyi.');
  const body = page.locator('body');    
    await expect(body).toContainText('දෙන්නම්');
    await expect(body).toContainText('හබැයි');
  
});

//Postive Functional Test 06 - Imperative sentence with embedded English
test('Pos_Fun_0006 - Imperative sentence with embedded English', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputPositive = page.locator('textarea');

  await singlishInputPositive.fill('ispirithaalayee thunduva mata WhatsApp karanna.');
  const body = page.locator('body');    
    await expect(body).toContainText('WhatsApp');
    await expect(body).toContainText('ඉස්පිරිතාලයේ');
    await expect(body).toContainText('මට');
});

//Postive Functional Test 07 - past-tense sentence with embedded English place name
test('Pos_Fun_0007 - Past-tense sentence with embedded English place name', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputPositive = page.locator('textarea');

  await singlishInputPositive.fill('Eyaagee flight eka heta Toronto valata baanavaa kivvaa.');
  await expect(page.locator('body')).toContainText('Toronto');
});

//Postive Functional Test 08 - Mixed-language sentence
test('Pos_Fun_0008 - Mixed-language sentence', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputPositive = page.locator('textarea');

  await singlishInputPositive.fill('Mata adha oyage NIC ekee saha, Passport number ekee photos dhaalaa thiyanna. Heta mama printout gannam.');
  const body = page.locator('body');    
    await expect(body).toContainText('NIC');
    await expect(body).toContainText('photos');
    await expect(body).toContainText('printout');
});

//Postive Functional Test 09 -  Long paragraph with complex sentences
test('Pos_Fun_0009 - Long paragraph with complex sentences', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputPositive = page.locator('textarea');

  await singlishInputPositive.fill('mama adha udheema friends laa ekka cricket match ekak balanna stadium yanna plan kalaa. tickets online gaththaa, passe traffic eka nisaa tikak parakku vunaath api hariyata match eka patan gannata kalin stadium eka athulata giyaa. crowd eka godak hitiyaa, flags thiyenavaa, cheers gahanavaa, saha players la warm-up karanavaa balanna puluvan vunaa. match eka athara thibba rain break ekath ekka api snacks gaththaa, photos gaththaa, saha memorable experience ekak labuna kiyalaa hithenavaa.');
  const body = page.locator('body');    
    await expect(body).toContainText('උදේම');
    await expect(body).toContainText('stadium');
    await expect(body).toContainText('ගන්නට');
    await expect(body).toContainText('photos');
    await expect(body).toContainText('එකක්');
});

//Postive Functional Test 10 - Input containing punctuation marks 
test('Pos_Fun_0010 - Input containing punctuation marks ', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputPositive = page.locator('textarea');

  await singlishInputPositive.fill('Code eka mata evvadha? number eka (NHUIQ) dha? kalin thibune "NHUIP". ');
  const body = page.locator('body');    
    await expect(body).toContainText('(NHUIQ)');
    await expect(body).toContainText('"NHUIP".');
});

//Postive Functional Test 11 - Phrases with heavy numbering 
test('Pos_Fun_0011 - Phrases with heavy numbering', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputPositive = page.locator('textarea');

  await singlishInputPositive.fill('dhurakathana aQQkaya - +94 71 222 6666');
  const body = page.locator('body');    
    await expect(body).toContainText('+94 71 222 6666');
});

//Postive Functional Test 12 - Phases with currancies, dates and measures 
test('Pos_Fun_0012 - Phases with currancies, dates and measures', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputPositive = page.locator('textarea');

  await singlishInputPositive.fill('mama 2026-04-29 dhavasedhi Rs. 3500 gevvaa saha kg 5k maalu gaththaa.');
  const body = page.locator('body');    
    await expect(body).toContainText('2026-04-29');
    await expect(body).toContainText('Rs. 3500');
    await expect(body).toContainText('kg 5k');
});

//Postive Functional Test 13 - sentence with negation and repeated words used for emphasis 
test('Pos_Fun_0013 - sentence with negation and repeated words used for emphasis', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputPositive = page.locator('textarea');

  await singlishInputPositive.fill('mama kivvane, baee kivvoth baee baee ma thamaa.');
  const body = page.locator('body');    
    await expect(body).toContainText('බෑ බෑ');
});

//Postive Functional Test 14 - Combined senetence with singular and plural variations 
test('Pos_Fun_0014 - Combined senetence with singular and plural variations', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputPositive = page.locator('textarea');

  await singlishInputPositive.fill('Mama mee fan eka hadanna yannee. Onee nam oyath enna. Api hadhamu.');
  const body = page.locator('body');    
    await expect(body).toContainText('එන්න');
    await expect(body).toContainText('අපි');
    await expect(body).toContainText('හදමු');
});

//Postive Functional Test 15 - Minor typographical error 
test('Pos_Fun_0015 - Minor typographical error', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputPositive = page.locator('textarea');

  await singlishInputPositive.fill('mama gedhara yannavaa kiyalaa kivvaa, namuth podi late vuna');
  const body = page.locator('body');    
    await expect(body).toContainText('පොඩි');
    await expect(body).toContainText('late');
});

//Postive Functional Test 16 - Multiple spaces 
test('Pos_Fun_0016 - Multiple spaces', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputPositive = page.locator('textarea');

  await singlishInputPositive.fill('Apee     gedhara TV            eka');
  const body = page.locator('body');    
    await expect(body).toContainText('            එක');
});

//Postive Functional Test 17 - Multiple spaces including line breaks  
test('Pos_Fun_0017 - Multiple spaces including line breaks', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputPositive = page.locator('textarea');

  await singlishInputPositive.fill('Apee gedhara TV eka                                                                         hadhaa   ganna            oonaa');
  const body = page.locator('body');    
    await expect(body).toContainText('එක                                                                         හදා');
});

//Postive Functional Test 18 - Informal Phasing with punctuation marks 
test('Pos_Fun_0018 - Informal Phasing with punctuation marks', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputPositive = page.locator('textarea');

  await singlishInputPositive.fill('"eeyi! mata oya bag eka evanna."');
  const body = page.locator('body');    
    await expect(body).toContainText('ඒයි!');
    await expect(body).toContainText('එවන්න."');
});

//Postive Functional Test 19 - polite request form 
test('Pos_Fun_0019 - polite request form', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputPositive = page.locator('textarea');

  await singlishInputPositive.fill('karuNaakara eeka dhenavadha? puLuvannam mata eka kiyvanna evannA');
  const body = page.locator('body');    
    await expect(body).toContainText('කරුණාකර');
    await expect(body).toContainText('දෙනවද?');
});

//Postive Functional Test 20 - Negative sentence forms 
test('Pos_Fun_0020 - Negative sentence forms', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputPositive = page.locator('textarea');

  await singlishInputPositive.fill('mata baehae maagee computer eka dhenna');
  const body = page.locator('body');
    await expect(body).toContainText('බැහැ');  
});

//Postive Functional Test 21 - Correctly spaced sentence 
test('Pos_Fun_0021 - Correctly spaced sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');

  await input.fill('Mata mal vavanna aasayi');
  await expect(page.locator('body')).toContainText('මට මල් වවන්න ආසයි');
});

//Postive Functional Test 22 - Tense Variations (Present) 
test('Pos_Fun_0022 - Tense Variations (Present)', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputPositive = page.locator('textarea');

  await singlishInputPositive.fill('ara restaurant eka nam niyamayi!');
  const body = page.locator('body');    
    await expect(body).toContainText('නියමයි!');
    await expect(body).toContainText('restaurant');
});

//Postive Functional Test 23 - Tense Variations (Past) 
test('Pos_Fun_0023 - Tense Variations (Past)', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputPositive = page.locator('textarea');

  await singlishInputPositive.fill('giya sathiyee thamayi mata vaeda tika ivara kara ganna puluvan vunee');
  const body = page.locator('body');    
    await expect(body).toContainText('ගිය සතියේ');
    await expect(body).toContainText('වුනේ');
});

//Postive Functional Test 24 - Tense Variations (Future) + Pronoun variation 
test('Pos_Fun_0024 - Tense Variations (Future) + Pronoun variation', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/');
  const singlishInputPositive = page.locator('textarea');

  await singlishInputPositive.fill('labana april vala api vacation ekak yanna inne');
  const body = page.locator('body');    
    await expect(body).toContainText('ලබන');
    await expect(body).toContainText('ඉන්නේ');
});