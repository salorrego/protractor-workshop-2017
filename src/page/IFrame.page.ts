import { browser, by, element, ElementFinder, promise } from 'protractor';

export class IFramePage {
  public get framePage(): ElementFinder {
    return element(by.id('IF1'));
  }

  public async changeHeight(newHeight: string): Promise<void> {
    await browser.executeScript(
      `document.getElementById('IF1').style.height = '${newHeight}';`);
  }

  public getNewHeight(): promise.Promise<string> {
    return this.framePage.getCssValue('height');
  }
}
