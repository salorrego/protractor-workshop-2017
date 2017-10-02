import { $, ElementFinder, promise } from 'protractor';

export class ProductListPage {
  private get procceedToCheckoutButton(): ElementFinder {
    return $('.button-container > a');
  }
    
  public productListCheckout(): promise.Promise<void> {
    return this.procceedToCheckoutButton.click();
  }
}
