import { $, ElementFinder, promise } from 'protractor';

export class PaymentStepPage {
  private get payByBankButton(): ElementFinder {
      return $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  private get confirmOrderButton(): ElementFinder {
    return $('#cart_navigation > button > span');
  }
    
  public pay(): promise.Promise<void> {
    return this.payByBankButton.click();
  }

  public confirmOrder(): promise.Promise<void> {
      return this.confirmOrderButton.click();
  }
}
