import { $, ElementFinder, promise } from 'protractor';

export class AddressStepPage {
  private get addressProceedToCheckout(): ElementFinder {
    return $('button[name="processAddress"]');
  }

  public proceedToCheckout(): promise.Promise<void> {
    return this.addressProceedToCheckout.click();
  }
}
