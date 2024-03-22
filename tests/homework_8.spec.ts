import { test, chromium} from './fixture';
import { expect } from '@playwright/test';
import { mainPage } from '../pages/page1';
import { cookiesModal } from '../pages/page2';
import { whyDeepl } from '../pages/page3';
import { proPlan } from '../pages/page4';


test.beforeEach('tests',async ({page}) => {
    const mainpage = new mainPage(page);
    await mainpage.goTo();
})

test('accept all cookies',async ({modalWindow}) => {
    await modalWindow.acceptCookies.click();
})

test('accept only neccessary', async ({modalWindow}) => {
    await modalWindow.onlyNecessaryCookies.click();
})

test('transalte from Eng to Ukr', async ({modalWindow, homePage}) => {

    await modalWindow.acceptCookies.click();
    await homePage.selectSoruceLanguage.click();
    await homePage.Ukr.click();
    await homePage.selectTargetLanguage.click();
    await homePage.Eng.click();
    await homePage.sourceLangTypeField.fill("Привіт всім!");
    
    const targetText = (await homePage.targetLangTypeField.innerText());
    await expect(targetText).toContain("Hello, everyone!");
})

test('Feature page check', async ({deeplePlan}) => {

    await deeplePlan.whyDeeplMenuBtn.click();
    await deeplePlan.featuresMenuBtn.click();

    await expect(deeplePlan.tailorFeature).toBeVisible()
})

test('Contact Sales', async ({modalWindow, professionalPlan}) => {
    
    await modalWindow.acceptCookies.click();
    await professionalPlan.testProPlanBtn.click();
    await professionalPlan.contactSalesBtn.click()
    await expect(professionalPlan.contactForm).toBeVisible()
})

