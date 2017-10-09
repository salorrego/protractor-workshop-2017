import { $, ElementFinder, promise } from 'protractor';

export class ProductDetailPage {
  private get productDetail(): ElementFinder {
    return $('[title="Faded Short Sleeve T-shirts"] > img');
  }
    
  public goToProductDetail(): promise.Promise<void> {
    return this.productDetail.click();
  }
}
