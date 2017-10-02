import { $, ElementFinder } from 'protractor';

export class SignInPage {
  private get usernameField(): ElementFinder {
    return $('#email');
  }

  private get passwordField(): ElementFinder {
    return $('#passwd');
  }

  private get signInButton(): ElementFinder {
    return $('#SubmitLogin > span');
  }
     
  public async logIn(user: string, password:string): Promise<void> {
    await this.usernameField.sendKeys(user);
    await this.passwordField.sendKeys(password);
    return this.signInButton.click();
  }
}
