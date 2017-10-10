import { $, ElementFinder, promise } from 'protractor';

export class ProductAddedModalPage {
  private get productAddedModal(): ElementFinder {
    return $('button[name="Submit"]');
  }
    
  public addToCart(): promise.Promise<void> {
    return this.productAddedModal.click();
  }
}
