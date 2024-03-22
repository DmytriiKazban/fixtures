import { expect, type Locator, type Page } from '@playwright/test';

export class proPlan {
  readonly page: Page;
  readonly testProPlanBtn: Locator;
  readonly advancedPlanBtn: Locator;
  readonly contactForm: Locator;
  readonly contactSalesBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.testProPlanBtn = page.getByRole('button', { name: 'Try Pro for 30 days free' });
    this.contactForm = page.locator('.contactUsFormFrame-module--formWrapper--vFbUC');
    this.contactSalesBtn = page.getByRole('link', { name: 'Contact Sales' }).first();
  }
}
