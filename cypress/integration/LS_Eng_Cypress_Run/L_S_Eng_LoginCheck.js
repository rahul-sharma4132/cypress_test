/// <reference types='cypress' />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const url = 'https://lsengineers.m2.s.ayko.com/';

Given('User logins in with given creds', () => {

    cy.visit(url);
    cy.fixture("lasTestData.json").then(lasTestData => {
        const siteURL = lasTestData.url+"customer/account/login/"
        cy.intercept({
            method:'GET',
            url: '/customer/account/login'
        }).as('loginWait')
        cy.visit(siteURL);
        cy.wait('@loginWait').then( (interception) => {
            assert.equal(interception.response.statusCode, 200)
        } );
        const username = lasTestData.email
        cy.get("input#email").type(username);
        const password = lasTestData.pwd
        cy.get("input#pass[name='login[password]']").type(password);
        cy.intercept({
            method:'GET',
            url: '/customer/account'
        }).as('account')
    })
        cy.get("button#send2.primary").click();
        cy.wait('@account').then((interception) => {
            assert.equal(interception.response.statusCode, 200)
        } )

} )

let txt='';

When("User Checks the Welcome Text", () => {

    cy.get("p.welcome-message__name").then(($p) => {
        txt = $p.text();
    } );
} )

Then("User should be able to see their Full Name", () => {
    cy.fixture("lasTestData.json").then(lasTestData => {
        const testName = lasTestData.name;
        expect(txt).to.include(testName);
    })
})