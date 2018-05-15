import {Config} from 'protractor';
import {SpecReporter} from "jasmine-spec-reporter";

const HtmlReporter = require('protractor-beautiful-reporter');
const path = require('path');


export let config: Config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumServerJar: '../node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.12.0.jar',
    chromeDriver: '../node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.38',
    // System under test
    baseUrl: 'http://localhost:8080/',
    allScriptsTimeout: 60000,
    capabilities: {
        browserName: 'chrome',
        maxInstances: 20,
        shardTestFiles: true,
        chromeOptions: {
            args: ['--no-sandbox', '--disable-extensions', '--start-maximized'],
            'prefs': {
                'credentials_enable_service': false,
                'profile': {
                    'password_manager_enabled': false,
                }
            }
        }
    },
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
    },
    specs: ['../e2e/**/*.spec.js'],
    onPrepare: () => {
        jasmine.getEnv().addReporter(new SpecReporter());

        // Add a screen shot reporter:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'results',
            docTitle: `VizFlow UI E2E Test Results - ${new Date()}`,
            preserveDirectory: false,
            takeScreenShotsOnlyForFailedSpecs: true,
            screenshotsSubfolder: 'images',
            jsonsSubfolder: 'jsons',
            pathBuilder: (spec: any, descriptions: any, results: any, capabilities: any) => {
                // Return '<30-12-2016>/<browser>/<specname>' as path for screenshots:
                // Example: '30-12-2016/firefox/list-should work'.
                let currentDate = new Date(),
                    day = currentDate.getDate(),
                    month = currentDate.getMonth() + 1,
                    year = currentDate.getFullYear();

                let validDescriptions = descriptions.map((description: string) => {
                    return description.replace('/', '@');
                });

                return path.join(
                    day + "-" + month + "-" + year,
                    // capabilities.get('browserName'),
                    validDescriptions.join('-'));
            }
        }).getJasmine2Reporter());

        let globals = require('protractor');
        let browser = globals.browser;
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
    },
};