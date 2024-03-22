import { expect, type Locator, type Page } from '@playwright/test';

export class login {
  readonly page: Page;
  readonly signInBtn: Locator;
  readonly emailField: Locator;
  readonly logInField: Locator;
  readonly logInBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.signInBtn = page.locator('//*[@class="auth__register_button button button--underline"]')
    this.emailField = page.locator('//*[@id="email"]')
    this.logInField = page.locator('//*[@id="password"]')
    this.logInBtn = page.locator('//*[@class="button button--cta button--warning"]')
  }
}