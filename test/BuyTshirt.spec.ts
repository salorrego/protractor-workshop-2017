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

describe('Buy a t-shirt', () => {

  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productDetail: ProductDetailPage = new ProductDetailPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const productListPage: ProductListPage = new ProductListPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInPage: SignInPage = new SignInPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const orderResumePage: OrderResumePage = new OrderResumePage();

  it('then should be bought a t-shirt', async () => {
    const user = 'aperdomobo@gmail.com';
    const pass = 'WorkshopProtractor';

    await browser.get('http://automationpractice.com/');

    await menuContentPage.goToTShirtMenu();

    await productDetail.goToProductDetail();

    await productAddedModalPage.addToCart();

    await productListPage.productListCheckout();

    await summaryStepPage.proceedToCheckout();

    await signInPage.logIn(user, pass);

    await addressStepPage.proceedToCheckout();

    await shippingStepPage.agreeTermsOfService();

    await shippingStepPage.proceedToCheckout();

    await paymentStepPage.pay();

    await paymentStepPage.confirmOrder();

    await expect(orderResumePage.getResumeText())
     .toBe('Your order on My Store is complete.');
  });
});
