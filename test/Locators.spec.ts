import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

fdescribe('Given the page to form fill', () => {
  const urlBase = 'http://toolsqa.com/automation-practice-form/';

  beforeAll(async () => {
    await browser.get(urlBase);
  });

  describe('when I fill the form', () => {
    const personalInformationPage: PersonalInformationPage = new PersonalInformationPage;

    const form = {
      firstName: 'Alejandro',
      lastName: 'Perdomo',
      sex: 'Male',
      experience: 7,
      profession: ['Automation Tester'],
      tools: ['Selenium Webdriver'],
      continent: 'South America',
      commands: [
        'Browser Commands',
        'Navigation Commands',
        'Switch Commands',
        'Wait Commands',
        'WebElement Commands'],
      file: '../../../resources/jpg_for_upload.jpg',
    };

    beforeAll(async () => {
      await personalInformationPage.submit(form);
    });

    describe('and I hit the button submit', () => {
      const expectedTitle = 'Practice Automation Form';
      let titleText;

      beforeAll(async () => {
        titleText = personalInformationPage.getTitle();
      });

      it(`then the title "${expectedTitle}" must be on screen`, async () => {
        expect(titleText).toBe(expectedTitle);
      });
    });
  });
});
