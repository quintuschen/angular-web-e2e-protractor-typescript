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

How to Run
----------

    > git clone
    > npm install
    > ./node_modules/.bin/webdriver-manager update
    > npm test
    
Structure
---------

The folder structure for the project is shown in the following:

    <project_directory>
        |
        `--configs
        |     |
        |     `--protractor.conf.local.ts
        |     |
        |     `--protractor.conf.remote.ts
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
        |           `--<helper_classes>
        |
        `------tsconfig.json