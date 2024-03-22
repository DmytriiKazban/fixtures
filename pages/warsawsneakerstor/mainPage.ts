import { expect, type Locator, type Page } from '@playwright/test';

export class mainPage {
  readonly page: Page;
  readonly loginBtn: Locator;
  readonly completeSignIntxt: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginBtn = page.locator('//*[@id="header-login-modal-button"]');
    this.completeSignIntxt = page.getByText('Aby dokończyć proces zakł');
  }

  async goTo() {
    await this.page.goto('https://warsawsneakerstore.com/');
  }
}