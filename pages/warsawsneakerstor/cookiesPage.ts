import { expect, type Locator, type Page } from '@playwright/test';

export class acceptCookies {
  readonly page: Page;
  readonly acceptCookiesBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.acceptCookiesBtn = page.getByRole('button', { name: 'I agree' })
  }
}