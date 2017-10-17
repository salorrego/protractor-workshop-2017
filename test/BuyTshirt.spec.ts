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

  beforeAll(async () => {
    await browser.get('http://automationpractice.com/');
  });

  describe('when buying a T-Shirt', () => {
    const menuContentPage: MenuContentPage = new MenuContentPage();
    const productDetail: ProductDetailPage = new ProductDetailPage();
    const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
    const productListPage: ProductListPage = new ProductListPage();
    const summaryStepPage: SummaryStepPage = new SummaryStepPage();

    const name = 'Faded Short Sleeve T-shirts';

    beforeAll(async () => {
      await menuContentPage.goToTShirtMenu();
      await productListPage.goToProductDetail(name);
      await productDetail.addToCart();
      await productAddedModalPage.productAddedModalCheckout();
      await summaryStepPage.proceedToCheckout();
    });

    describe('and signing-in', () => {
      const signInPage: SignInPage = new SignInPage();
      const user = 'aperdomobo@gmail.com';
      const pass = 'WorkshopProtractor';

      beforeAll(async () => {
        await signInPage.logIn(user, pass);
      });

      describe('and choosing the address by default', () => {
        const addressStepPage: AddressStepPage = new AddressStepPage();
        const shippingStepPage: ShippingStepPage = new ShippingStepPage();

        beforeAll(async () => {
          await addressStepPage.proceedToCheckout();
          await shippingStepPage.agreeTermsOfService();
          await shippingStepPage.proceedToCheckout();
        });

        describe('and paying with bank account', () => {
          const paymentStepPage: PaymentStepPage = new PaymentStepPage();
          const orderResumePage: OrderResumePage = new OrderResumePage();

          beforeAll(async () => {
            await paymentStepPage.pay();
            await paymentStepPage.confirmOrder();
          });
        
          it('then the order should be confirmed', async () => {
            await expect(orderResumePage.getResumeText())
             .toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
