import { expect, type Locator, type Page } from '@playwright/test';

export class signIn {
  readonly page: Page;
  readonly signinEmailField: Locator;
  readonly signinNameField: Locator;
  readonly signinPasswordField: Locator;
  readonly signinSubmitBtn: Locator;
  readonly emailAlreadyExists: Locator;
  
  
  
  constructor(page: Page) {
    this.page = page;

    this.signinEmailField = page.getByPlaceholder('Adres e-mail');
    this.signinNameField = page.getByPlaceholder('Imię');
    this.signinPasswordField = page.getByPlaceholder('Twoje hasło');
    this.signinSubmitBtn = page.getByRole('button', { name: 'Utwórz konto Partners Club' });
    this.emailAlreadyExists = page.getByText('Istnieje już konto z takim');
  }
}