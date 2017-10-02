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
     
  public logIn(user: string, password:string): promise.Promise<void> {
    this.usernameField.sendKeys(user);
    this.passwordField.sendKeys(password);
    return this.signInButton.click();
  }
}
