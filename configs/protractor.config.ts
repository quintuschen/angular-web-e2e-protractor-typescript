import {Config} from 'protractor';
import {SpecReporter} from "jasmine-spec-reporter";
import {GLOBAL_SETTINGS} from "../e2e/support/constants";
import * as protractorConf from "./protractor.config.json";
import * as htmlReportConf from "./htmlReporter.config.json";
import * as junitReportConf from "./junitReporter.config.json";
import * as webDriverConf from "../node_modules/protractor/node_modules/webdriver-manager/selenium/update-config.json";

const HtmlReporter = require('protractor-beautiful-reporter');
const JasmineReporters = require('jasmine-reporters');

let _config: Config = {
    seleniumServerJar: (<any>webDriverConf).standalone.last,
    chromeDriver: (<any>webDriverConf)['chrome'].last,
    onPrepare: () => {
        jasmine.getEnv().addReporter(new SpecReporter());
        jasmine.getEnv().addReporter(new JasmineReporters.JUnitXmlReporter(junitReportConf));
        // Add a screen shot reporter:
        jasmine.getEnv().addReporter(new HtmlReporter(htmlReportConf).getJasmine2Reporter());

        let globals = require('protractor');
        // Maximising the window is currently disabled due to similar issue: https://github.com/angular/protractor/issues/4407
        // browser.manage().window().maximize();
        globals.browser.manage().timeouts().implicitlyWait(GLOBAL_SETTINGS.WAITING_TIME_FOR_ELEMENTS);
    },
};

export let config: Config = Object.assign({}, _config, protractorConf);