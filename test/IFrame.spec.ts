import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Given the iFrame page', () => {
  const urlBase = 'http://toolsqa.com/iframe-practice-page/';
  
  const iFramePage: IFramePage = new IFramePage;

  beforeAll(async () => {
    await browser.get(urlBase);
  });

  describe('when the iFrame height is changed', () => {
    const newHeigth = '800px';

    beforeEach(async () => {
      await iFramePage.changeHeight(newHeigth);
    });

    it(`then the iFrame height should be: ${newHeigth}`, async () => {
      await expect(iFramePage.getNewHeight()).toBe(newHeigth);
    });
  });
});
