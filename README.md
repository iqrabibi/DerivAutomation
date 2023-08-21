# DerivAutomation
This repository contains the UI automation code. It has Tas 1 of UI Automation(3 scenarios in it). I used Cypress with Mocha to complete this task.
Assignment Link : https://github.com/iqrabibi/DerivAutomation

## Prerequisites:
The things you need to run the test cases.

* Any IDE Like(VS Code)
* Node.js

## Technology Stack Used: 
Tools used to complete the tasks.

* Cypress
* MochaAwesome Report
* Mocha
* VS Code 

## Folder Structure:
I used POM style to automate the cases and hence the structure is like : 
* cypress/e2e/pageObjects : This folder have all file containing locators and low-level functions.
* cypress/e2e/endToEnd.js : This file have actual test cases.
* cypress/fixture : This folder have json data file.
* cypress/support : All configuration files.

Once we execute the test case following folders will automatically generate:
* cypress/screenshot/ : This will have screenshots in case of  failure.
* cypress/video : video of the complete flow after execution
* cypress/reports : generate HTML report after execution.

## Execution:
For test case execution , run below commands

    git clone https://github.com/iqrabibi/DerivAutomation.git
    Open the cloned project in any IDE
    Run >  npm install
    Run > npm run test_execution 

## Contact :
In case of any questions, please contact: 
* Iqra Bibi : iqrabibi25@yahoo.com

## Sample Execution Image :






