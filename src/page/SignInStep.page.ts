import { $, ElementFinder, promise } from 'protractor';

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

  public sendUser(user: string): promise.Promise<void> {
    return this.usernameField.sendKeys(user);
  }

  public sendPass(password: string): promise.Promise<void> {
    return this.passwordField.sendKeys(password);
  }

  public logIn(): promise.Promise<void> {
    return this.signInButton.click();
  }
}
