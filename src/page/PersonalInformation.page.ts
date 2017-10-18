import { 
  browser,
  ElementFinder,
  by,
  element,
  ExpectedConditions,
} from 'protractor';

import { resolve } from 'path';

export class PersonalInformationPage {
  private get buttonSubmit(): ElementFinder {
    return element(by.id('submit'));
  }

  private get firstNameField(): ElementFinder {
    return element(by.css('input[name="firstname"]'));
  }

  private get lastNameField(): ElementFinder {
    return element(by.css('input[name="lastname"]'));
  }

  private get title(): ElementFinder {
    return element(by.id('content')).element(by.tagName('h1'));
  }

  private get uploadInput(): ElementFinder {
    return element(by.id('photo'));
  }
  
  private async chooseProfession(profession): Promise<void> {
    await profession.forEach(async (element) => {
      await element(by.css(`input[value="${element}"]`)).click();
    });
  }
  
  private async chooseTools(tools): Promise<void> {
    await tools.forEach(async (element) => {
      await element(by.css(`input[value="${element}"]`)).click();
    });
  }

  private async clickCommands(commands): Promise<void> {
    const commandsSelect = element(by.id('selenium_commands'));
    await commands.forEach(async (element) => {
      await commandsSelect.element(by.cssContainingText('option', element)).click();
    });
  }

  private continentChoose(continent): ElementFinder {
    return element(by.id('continents'))
      .element(by.cssContainingText('option', continent));
  }

  private experience(exp): ElementFinder {
    return element(by.id(`exp-${exp - 1}`));
  }

  private async fillForm(form): Promise<void> {
    await this.firstNameField.sendKeys(form.firstName);
    await this.lastNameField.sendKeys(form.lastName);
    await this.sexField(form.sex).click();
    await this.experience(form.experience).click();
    await this.uploadFile(form.file);
    await this.chooseProfession(form.profession);
    await this.chooseTools(form.tools);
    await this.continentChoose(form.continent).click();
    await this.clickCommands(form.commands);
  }

  private sexField(sex): ElementFinder {
    return element(by.css(`input[value="${sex}"]`));
  }

  private async uploadFile(filePath: string): Promise<void> {
    const absolutePath = resolve(__dirname, filePath);
    await this.uploadInput.sendKeys(absolutePath);
  }
  
  public async getTitle(): Promise<string> {
    const until = ExpectedConditions;
    await browser.wait(until.presenceOf(this.title));
    return this.title.getText();
  }

  public async submit(form): Promise<void> {
    await this.fillForm(form);
    return await this.buttonSubmit.click();
  }
}
