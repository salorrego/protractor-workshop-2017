import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ProductListPage {
  private until = ExpectedConditions;

  private get procceedToCheckoutButton(): ElementFinder {
    return $('[style*="display: block;"] .button-container > a');
  }
    
  public async productListCheckout(): Promise<void> {
    await browser.wait(this.until.visibilityOf(this.procceedToCheckoutButton));
    return this.procceedToCheckoutButton.click();
  }
}
