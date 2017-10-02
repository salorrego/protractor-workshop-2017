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
 
 beforeEach(() => {
   jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
 });

 it('then should be bought a t-shirt', async () => {
   const user = 'aperdomobo@gmail.com';
   const pass = 'WorkshopProtractor';

   await browser.get('http://automationpractice.com/');
   await(browser.sleep(10000));

   await menuContentPage.goToTShirtMenu();
   await(browser.sleep(3000));

   await productDetail.goToProductDetail();
   await(browser.sleep(3000));

   await productAddedModalPage.addToCart();
   await(browser.sleep(3000));

   await productListPage.productListCheckout();
   await(browser.sleep(3000));

   await summaryStepPage.proceedToCheckout();
   await(browser.sleep(3000));

   await signInPage.logIn(user, pass);
   await(browser.sleep(3000));

   await addressStepPage.proceedToCheckout();
   await(browser.sleep(5000));

   await shippingStepPage.agreeTermsOfService();
   await(browser.sleep(3000));

   await shippingStepPage.proceedToCheckout();
   await(browser.sleep(3000));

   await paymentStepPage.pay();
   await(browser.sleep(3000));

   await paymentStepPage.confirmOrder();
   await(browser.sleep(3000));

   await expect(orderResumePage.getResumeText())
     .toBe('Your order on My Store is complete.');
 });
});
