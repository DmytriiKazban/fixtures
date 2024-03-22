import { expect, type Locator, type Page } from '@playwright/test';

export class mainPage {
  readonly page: Page;
  readonly selectSoruceLanguage: Locator;
  readonly selectTargetLanguage: Locator;
  readonly Eng: Locator;
  readonly Ukr: Locator;
  readonly sourceLangTypeField: Locator;
  readonly targetLangTypeField: Locator;

  constructor(page: Page) {
    this.page = page;

    this.selectSoruceLanguage = page.getByTestId('translator-source-lang-btn');
    this.selectTargetLanguage = page.getByTestId('translator-target-lang-btn');
    this.Eng = page.getByTestId('translator-lang-option-en-US');
    this.Ukr = page.getByTestId('translator-lang-option-uk');
    this.sourceLangTypeField = page.getByTestId('translator-source-input').getByLabel('Source text');
    this.targetLangTypeField = page.getByTestId('translator-target-input').getByLabel('Translation results');
  }

  async goTo() {
    await this.page.goto('https://www.deepl.com/translator');
  }
}