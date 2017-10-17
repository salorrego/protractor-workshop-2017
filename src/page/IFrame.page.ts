import { browser, by, element, ElementFinder, promise } from 'protractor';

export class IFramePage {
  private get framePage(): ElementFinder {
    return element(by.id('IF1'));
  }

  private get titleOfPage(): ElementFinder {
    return element(by.id('content')).element(by.tagName('h1'));
  }

  public async changeHeight(newHeight: string): Promise<void> {
    await browser.executeScript(
      `document.getElementById('IF1').style.height = '${newHeight}';`);
  }

  public getNewHeight(): promise.Promise<string> {
    return this.framePage.getCssValue('height');
  }

  public getTitle(): promise.Promise<string> {
    return this.titleOfPage.getText();
  }
  
  public moveToDefaultPage(): promise.Promise<void> {
    return browser.switchTo().defaultContent();
  }

  public moveToIFrame(): promise.Promise<void> {
    return browser.switchTo().frame(this.framePage.getWebElement());
  }
}
