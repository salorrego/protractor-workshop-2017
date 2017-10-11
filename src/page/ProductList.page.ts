import { $$, ElementFinder, ElementArrayFinder, promise } from 'protractor';

export class ProductListPage {
  private get productContainerList(): ElementArrayFinder {
    return $$('.product-container');
  }

  private findByProduct(name: string): ElementFinder {
    let element;
    element = this.productContainerList.find(product => 
      product.$('a').getAttribute('title') === name);
    return element;
  }
    
  public goToProductDetail(name: string): promise.Promise<void> {
    return this.findByProduct(name).click();
  }
}
