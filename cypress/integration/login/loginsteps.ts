import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
import { when } from "cypress/types/jquery";
import { homePage } from "../Pages/loginPage";

let objHomePage = new homePage();

Given('abrir la pagina automation', () => {
  cy.visit('/')
})

When('click en login', () => {
  objHomePage.clickLogin();
}) 

And('cliente ingresa su usuario {string} y la contraseña {string}', (user,password) => {

  objHomePage.typeUsername(user);
  objHomePage.typePassword(password);
  cy.screenshot();

})

And('cliente click en el boton login', () => {
objHomePage.clickButton();
})

Then('cliente se logea', () => {
 objHomePage.titlePage();
})

Then('cliente no se logea', () => {
  objHomePage.titlePageNoLogin();
})