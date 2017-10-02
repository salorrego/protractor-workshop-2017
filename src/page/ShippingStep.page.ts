import { $, ElementFinder, promise } from 'protractor';

export class ShippingStepPage {
  private get checkButtonTermsOfService(): ElementFinder {
    return $('#cgv');
  }

  private get proceedToCheckoutButton(): ElementFinder {
    return $('#form > p > button > span');
  }
    
  public agreeTermsOfService(): promise.Promise<void> {
    return this.checkButtonTermsOfService.click();
  }
    
  public proceedToCheckout(): promise.Promise<void> {
    return this.proceedToCheckoutButton.click();
  }
}
