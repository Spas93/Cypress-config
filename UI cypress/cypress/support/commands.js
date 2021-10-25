const assert = require('assert');


module.exports = {

     /**
     * click on element
     * @param {string} selector - element path
     */
    clickElement: (selector) => {
         
        cy.get(selector).then((element) => {

            return cy.wrap(element).click();

        });

    },

    /**
     * type in input field
     * @param {string} selector - element path
     * @param {string} text - text
     */
         typeInField: (selector, text) => {
            
            cy.get(selector).then((element) => {
    
               return cy.wrap(element).type(text);
    
            });
    
        },

    /**
     * check for text
     * @param {string} selector
     * @param {string} text - text
     */
    assertTextOnPage: (selector, text) => {
        
        cy.get(selector).then((element) => {

            return cy.wrap(element).should('have.text', text);

        });

    },
    
    /**
     * navigate browser to URL
     * @param {string} selector
     * @param {string} text - text
     */
         containsTextOnPage: (selector, text) => {
        
            cy.get(selector).then((element) => {
    
                return cy.wrap(element).contains(text)
    
            });
    
        },
    
    /**
     * element should be visible
     * @param {string} selector
     */
    waitForElementToBeVisible: (selector) => {
        
        cy.get(selector).then((element) => {

            return cy.wrap(element).should('be.visible')

        });

    }

}