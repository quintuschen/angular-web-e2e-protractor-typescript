angular-web-e2e-protractor-typescript
=====================================
This is a working solution for Angular web application E2E testing using Protractor with TypeScript.

What it can do
--------------

- Test cases can run in parallel
- Test cases can run in different browsers
- Test results have JUnit reports for Jenkins integration
- Test results have HTML reports for better reporting
- Failed test cases will have screenshots for reference
- Test cases can run in command line with minimal configuration

Requirements
------------
- node.js
- Java Development Kit

How to Setup the Environment
----------------------------

    > git clone
    > npm install
    > npm run prepareWebDriver
    
You will need to setup the system under test in the `baseUrl` field of `protractor.config.json`.
    
How to Run
----------
You can run all the test simply using the following npm script:
 
    > npm test

This script will first transpile your TypeScript files to JavaScript (ES6) and execute 
the test cases by using protractor. 

You can run a specified suite (defined in `protractor.config.json`)

    > ./node_modules/.bin/protractor configs/protractor.conf.js --suite=<suiteName>

You can also run a list of specs separated by comma.

    > ./node_modules/.bin/protractor configs/protractor.conf.js --specs <spec_1>, <spec_2>, ..., <spec_n>
 
Test Results
------------
After running the test cases, by default you will have the test results in the folder `./results`
As we've added reporters for HTML report and JUnit report, they will reside in `./results/html` and 
`./results/junit`, respectively.

For HTML report, you can simply open `report.html` for reviewing, by default it will capture screenshots
for failed cases, which could be very helpful when debugging test cases.

    
Structure
---------

The folder structure for the project is shown in the following:

    <project_directory>
        |
        `--configs
        |     |
        |     `--protractor.config.ts
        |     |
        |     `--protractor.config.json
        |     |
        |     `--htmlReporter.config.json
        |     |
        |     `--junitReporter.config.json
        |     |
        |     `--config.d.ts
        |
        `----e2e
        |     |
        |     `--common
        |     |     |
        |     |     `--page_objects
        |     |             |
        |     |             `--base.page.ts
        |     |             |
        |     |             `--<other_base_classes>
        |     `--<page_0>
        |     |     |
        |     |     `--page_objects
        |     |     |       |
        |     |     |       `--<page>.page.ts
        |     |     `--specs
        |     |            |
        |     |            `--*.spec.ts
        |     `--<page_n>
        |     |     |
        |     |     `--page_objects
        |     |     |       |
        |     |     |       `--<page>.page.ts
        |     |     `--specs
        |     |            |
        |     |            `--*.spec.ts
        |     |
        |     `--support
        |           |
        |           `--constants.ts
        |           |
        |           `--html5.helper.ts
        |           |
        |           `--<helper_classes>
        |
        `----results
        |     |
        |     `--html
        |     |
        |     `--junit
        |
        `----tsconfig.json
        |
        `----package.json