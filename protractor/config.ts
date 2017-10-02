import { browser, Config } from 'protractor';
import { reporter }   from './helpers/reporter';

export let config: Config = {
  framework: 'jasmine',
  SELENIUM_PROMISE_MANAGER: false,
  specs: ['../test/**/*.spec.js'],
  getPageTimeout: 1000,
  noGlobals: true,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
  }
};
