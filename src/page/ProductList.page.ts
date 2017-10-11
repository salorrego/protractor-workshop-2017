import { $$, ElementFinder, ElementArrayFinder, promise } from 'protractor';

export class ProductListPage {
  private get productContainerList(): ElementArrayFinder {
    return $$('.product_List > li');
  }

  private findByProduct(name: string): ElementFinder {
    return this.productContainerList.filter((product) => {
      return product.$('a.product_img_link').then((productLink) => {
        return productLink.getAttribute('title') === name;
      });
    }).first();
  }
    
  public goToProductDetail(name: string): promise.Promise<void> {
    return this.findByProduct(name).$('img').click();
  }
}
