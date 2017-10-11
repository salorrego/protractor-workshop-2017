import { $$, ElementFinder, ElementArrayFinder, promise } from 'protractor';

export class ProductListPage {
  private get productContainerList(): ElementArrayFinder {
    return $$('.product-container');
  }

  private findByProduct(name: string): ElementFinder {
    let element;
    element = this.productContainerList.filter(product => 
      product.$('a.product_img_link').then((title) => {
        return title.getAttribute('title') === name;
      }));
    return element.first();
  }
    
  public goToProductDetail(name: string): promise.Promise<void> {
    return this.findByProduct(name).click();
  }
}
