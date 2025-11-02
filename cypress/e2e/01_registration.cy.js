import HeaderNav from "../POM/HeaderNav";
const { faker } = require("@faker-js/faker");

const userData = {
  name: faker.person.firstName() + " " + faker.person.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  address: faker.location.streetAddress(),
  city: faker.location.city(),
  state: faker.location.state(),
  zipcode: faker.location.zipCode(),
  phone: faker.phone.number()
};

describe("User Registration & Session Handling", () => {
  before(() => {
    cy.writeFile("cypress/fixtures/testUser.json", userData);
  });

  beforeEach(() => {
    cy.login(userData);
    cy.visit("/");
  });

  it("Register a new user and create session", () => {
    HeaderNav.verifyUserLoggedIn(userData.name);
  });

  it("Check if the created user is logged in", () => {
    HeaderNav.verifyUserLoggedIn(userData.name);
  });
});
