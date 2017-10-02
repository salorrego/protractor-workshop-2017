import { $, ElementFinder, promise } from 'protractor';

export class OrderResumePage {
  private get resume(): ElementFinder {
      return $('#center_column > div > p > strong');
  }

  public getResumeText(): promise.Promise<string> {
      return this.resume.getText();
  }

}
