import { browser, ElementFinder, promise, by, element, ExpectedConditions } from 'protractor';

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
  
  private chooseProfession(profession): void {
    profession.forEach(async (element) => {
      await element(by.css(`input[value="${element}"]`)).click();
    });
  }
  
  private chooseTools(tools): void {
    tools.forEach(async (element) => {
      await element(by.css(`input[value="${element}"]`)).click();
    });
  }

  private clickCommands(commands): void {
    const commandsSelect = element(by.id('selenium_commands'));
    commands.forEach(async (element) => {
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

  private sexField(sex): ElementFinder {
    return element(by.css(`input[value="${sex}"]`));
  }
  
  public async getTitle(): Promise<string> {
    const until = ExpectedConditions;
    await browser.wait(until.presenceOf(this.title));
    return this.title.getText();
  }

  public async fillForm(form): Promise<void> {
    await this.firstNameField.sendKeys(form.firstName);
    await this.lastNameField.sendKeys(form.lastName);
    await this.sexField(form.sex).click();
    await this.experience(form.experience).click();
    this.chooseProfession(form.profession);
    this.chooseTools(form.tools);
    this.continentChoose(form.continent).click();
    this.clickCommands(form.commands);
  }

  public submitForm(): promise.Promise<void> {
    return this.buttonSubmit.click();
  }
}
