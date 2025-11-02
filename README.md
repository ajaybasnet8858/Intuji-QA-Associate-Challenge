# Intuji-QA-Associate-Challenge

## Automation Exercise Website Cypress Automation Test with Test Case of Automation

**Project Description**

This project contains end-to-end Cypress tests for an e-commerce website. It covers:

1. User registration and login (positive & negative scenarios)

2. Product browsing, filtering and cart operations

3. Checkout and quantity management

4. Payment using Faker.js

6. API verification

The tests follow the Page Object Model (POM) structure for maintainability and reusability.
Also, Test Case of Test Automation is added on docs folder.               

**Setup Steps**

1. Clone the repository:
  
   git clone https://github.com/ajaybasnet8858/Intuji-QA-Associate-Challenge.git

2. Navigate to the project folder:

   cd Intuji-QA-Associate-Challenge

3. Install dependencies:
   
   npm install

4. Install Cypress as a dev dependency:
   
   npm install cypress --save-dev

5. Install required plugins (Faker, xpath, Image Snopshot)
    
   npm install @faker-js/faker --save-dev 

   npm install cypress-xpath --legacy-peer-deps

6. Verify Cypress installation:

   npx cypress verify

**How to Run Tests**

1. Open Cypress Test Runner (interactive mode):
  
   npx cypress open

2. Run all tests in headless mode:

   npx cypress run

- When Cypress is run on headless mode a video record of the test will be created on cypress/videos folder.

**Tools and Plugins Used**

- Faker.js - Generates fake test data.
- POM for better readability, maintainability and reusability.
- XPath
- Fixtures - Stores the test data in JSON file format which can be reusable.
- Screenshot On Test Failure

**Known Limitations**

- Certain dynamic elements may require explicit waits if the page is slow to load.
- Screenshots are only captured on test failure.
- Video recording option is on headless mode only.
- There is no frontend validation on form regarding data type. (Eg. Alphabetical number can be written on numerical type.)

