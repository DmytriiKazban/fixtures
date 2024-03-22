import { expect, type Locator, type Page } from '@playwright/test';

export class whyDeepl {
  readonly page: Page;
  readonly whyDeeplMenuBtn: Locator;
  readonly featuresMenuBtn: Locator;
  readonly featurePage: Locator;
  readonly tailorFeature: Locator;

  constructor(page: Page) {
    this.page = page;

    this.whyDeeplMenuBtn = page.getByRole('button',{name: 'Why DeepL?'});
    this.featuresMenuBtn = page.getByTestId('whyDeeplFlyoutFeatures');
    this.tailorFeature = page.getByRole('heading', { name: 'Tailor translations to fit' });
  }
}