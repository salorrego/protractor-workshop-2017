import { browser, Config } from 'protractor';
import { reporter }   from './helpers/reporter';

export let config: Config = {
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['disable-infobars=true --window-size=800,600'],
      prefs: { credentials_enable_service: false }
    }
  },
  framework: 'jasmine',
  SELENIUM_PROMISE_MANAGER: false,
  specs: ['../test/**/*.spec.js'],
  getPageTimeout: 30000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  noGlobals: true,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(0),
    reporter();
  }
};
