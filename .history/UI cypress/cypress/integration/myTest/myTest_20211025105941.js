const { describe } = require("mocha");
const helpers = require('../../support/commands');
const loginElements = require('../../page-objects/loginElements/loginElements');

const url = 'https://test-url.com'; //not a real URL, just for the sake of the example for the code structure and config

describe('First test', () => {

    it('First', () => {
        
        cy.visit(url);
        
        helpers.typeInField(loginElements.loginElems.emailField, 'johndoe@test.com');
        helpers.typeInField(loginElements.loginElems.passwordField, 'test');
        helpers.clickElement(loginElements.loginElems.signInButton);
        helpers.containsTextOnPage(loginElements.loginElems.form, 'Select');
        helpers.assertTextOnPage(loginElements.loginElems.form, 'Select');

    });

});