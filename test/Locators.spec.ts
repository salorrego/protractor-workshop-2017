import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Given the page to form fill', () => {
  const urlBase = 'http://toolsqa.com/automation-practice-form/';

  beforeEach(async () => {
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
        'WebElement Commands']
    };

    beforeEach(async () => {
      await personalInformationPage.fillForm(form);
    });

    describe('and I hit the button submit', () => {
      const expectedTitle = 'Practice Automation Form';
      let titleText;

      beforeEach(async () => {
        await personalInformationPage.submitForm();
        titleText = personalInformationPage.getTitle();
      });

      it(`then the title "${expectedTitle}" must be on screen`, async () => {
        await expect(await titleText).toBe(expectedTitle);
      });
    });
  });
});
