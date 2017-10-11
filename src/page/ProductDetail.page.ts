import { $, ElementFinder, promise } from 'protractor';

export class ProductDetailPage {
  private get productToAdd(): ElementFinder {
    return $('button[name="Submit"]');
  }
    
  public addToCart(): promise.Promise<void> {
    return this.productToAdd.click();
  }
}
