import { $, ElementFinder, promise, by, browser, ExpectedConditions } from 'protractor';

export class PersonalInformationPage {
  private get buttonSubmit(): ElementFinder {
    return $('#submit');
  }

  private get firstNameField(): ElementFinder {
    return $('input[name="firstname"]');
  }

  private get lastNameField(): ElementFinder {
    return $('input[name="lastname"]');
  }

  private get title(): ElementFinder {
    return $('#content > h1');
  }
  
  private chooseProfession(profession): void {
    profession.forEach(async (element) => {
      await $(`input[value="${element}"]`).click();
    });
  }
  
  private chooseTools(tools): void {
    tools.forEach(async (element) => {
      await $(`input[value="${element}"]`).click();
    });
  }

  private clickCommands(commands): void {
    const commandsSelect = $('#selenium_commands');
    commands.forEach(async (element) => {
      await commandsSelect.element(by.cssContainingText('option', element)).click();
    });
  }

  private continentChoose(continent): ElementFinder {
    return $(`#continents`).element(by.cssContainingText('option', continent));
  }

  private experience(exp): ElementFinder {
    return $(`#exp-${exp - 1}`);
  }

  private sexField(sex): ElementFinder {
    return $(`input[value="${sex}"]`);
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
