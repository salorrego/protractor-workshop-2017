import { browser } from 'protractor';
import { MenuContentPage,
  ProductDetailPage,
  ProductAddedModalPage,
  ProductListPage,
  SummaryStepPage,
  SignInPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  OrderResumePage
} from '../src/page';

describe('Given the page for buying', () => {

  beforeEach(async () => {
    await browser.get('http://automationpractice.com/');
  });

  describe('When buying a T-Shirt', () => {
    const menuContentPage: MenuContentPage = new MenuContentPage();
    const productDetail: ProductDetailPage = new ProductDetailPage();
    const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
    const productListPage: ProductListPage = new ProductListPage();
    const summaryStepPage: SummaryStepPage = new SummaryStepPage();

    beforeEach(async () => {
      await menuContentPage.goToTShirtMenu();
      await productDetail.goToProductDetail();
      await productAddedModalPage.addToCart();
      await productListPage.productListCheckout();
      await summaryStepPage.proceedToCheckout();
    });

    describe('And signing-in', () => {
      const signInPage: SignInPage = new SignInPage();
      const user = 'aperdomobo@gmail.com';
      const pass = 'WorkshopProtractor';

      beforeEach(async () => {
        await signInPage.logIn(user, pass);
      });

      describe('And choosing the address by default', () => {
        const addressStepPage: AddressStepPage = new AddressStepPage();
        const shippingStepPage: ShippingStepPage = new ShippingStepPage();

        beforeEach(async () => {
          await addressStepPage.proceedToCheckout();
          await shippingStepPage.agreeTermsOfService();
          await shippingStepPage.proceedToCheckout();
        });

        describe('And paying with bank account', () => {
          const paymentStepPage: PaymentStepPage = new PaymentStepPage();
          const orderResumePage: OrderResumePage = new OrderResumePage();

          beforeEach(async () => {
            await paymentStepPage.pay();
            await paymentStepPage.confirmOrder();
          });
        
          it('Then the order should be confirmed', async () => {
            await expect(orderResumePage.getResumeText())
             .toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
