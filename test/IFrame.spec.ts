import { browser } from 'protractor';
import { IFramePage, PersonalInformationPage } from '../src/page';

describe('Given the iFrame page', () => {
  const urlBase = 'http://toolsqa.com/iframe-practice-page/';
  
  const iFramePage: IFramePage = new IFramePage;

  beforeAll(async () => {
    await browser.get(urlBase);
  });

  describe('when the iFrame height is changed', () => {
    const newHeigth = '800px';

    beforeAll(async () => {
      await iFramePage.changeHeight(newHeigth);
    });

    it(`then the iFrame height should be: ${newHeigth}`, async () => {
      await expect(iFramePage.getNewHeight()).toBe(newHeigth);
    });

    describe('when the page is loaded', () => {
      const title = 'Sample Iframe page';
      let titleOfDefaultPage;
  
      beforeAll(async () => {
        titleOfDefaultPage = await iFramePage.getTitle();
      });
  
      it(`then the title of the page should be '${title}'`, async () => {
        await expect(titleOfDefaultPage).toMatch(title);
      });
  
      describe('and I change to the iframe', () => {
        const personalInformationPage = new PersonalInformationPage();
        const titleName = 'Practice Automation Form';
        let titleOfIFrame;
  
        beforeAll(async () => {
          await iFramePage.moveToIFrame();
          titleOfIFrame = await personalInformationPage.getTitle();
        });
    
        it(`then the title of the page should be '${titleName}'`, async () => {
          expect(titleOfIFrame).toMatch(titleName);
        });

        describe('and I change to the default page', () => {
    
          beforeAll(async () => {
            await iFramePage.moveToDefaultPage();
            titleOfDefaultPage = await iFramePage.getTitle();
          });
      
          it(`then the title of the default page should be '${title}'`, async () => {
            expect(titleOfDefaultPage).toMatch(title);
          });
        });
      });
    });
  });
});
