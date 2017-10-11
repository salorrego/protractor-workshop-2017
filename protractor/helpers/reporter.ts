import { DisplayProcessor, SpecReporter } from 'jasmine-spec-reporter';
import { AwesomeReport } from 'jasmine-awesome-report';

const config = {
  fullPath: 'reports',
  fileName: 'report-awesome',
  merge: true
};

export let reporter = () => {
  jasmine.getEnv().addReporter(AwesomeReport.getReport(config));
  jasmine.getEnv().addReporter(new SpecReporter({
    customProcessors: [DisplayProcessor],
  }));
};
