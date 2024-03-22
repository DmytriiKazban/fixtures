import { expect, type Locator, type Page } from '@playwright/test';

export class cookiesModal {
  readonly page: Page;

  readonly : Locator;
  readonly acceptCookies: Locator;
  readonly onlyNecessaryCookies: Locator;

  constructor(page: Page) {
    this.page = page;

    this.acceptCookies = page.getByTestId('cookie-banner-strict-accept-all');
    this.onlyNecessaryCookies = page.getByTestId('cookie-banner-strict-accept-selected');

  }
}