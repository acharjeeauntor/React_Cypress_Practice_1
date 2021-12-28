/// <reference types="cypress"/>

describe("Accomplishment dashboard", () => {
    beforeEach(() => {
        cy.visit("/accomplishments")
    })

    it("Verify error message is showing when uncheck This accomplishment is valid option",()=>{
        cy.get("[data-cy='accomplishment-title-input']").type("This is accomplishment title")
        cy.get("[data-cy='accomplishment-input']").type("This is accomplishment Elements")
        cy.contains("button","Submit Accomplishment").click()
        cy.contains("Complete the items above to continue").should("be.visible")
    })

    it("Verify validation component message is showing when enter all valid information",()=>{
        cy.get("[data-cy='accomplishment-title-input']").type("This is accomplishment title")
        cy.get("[data-cy='accomplishment-input']").type("This is accomplishment Elements")
        cy.get("[data-cy='accomplishment-checkbox']").click()
        cy.contains("button","Submit Accomplishment").click()
        cy.contains("This Accomplisment was Successfully Submitted").should("be.visible",{timeout:2000})
    })

    it("Verify return back to accomplishment dashboard with empty inputs when 'Go Back' button is clicked",()=>{
        cy.get("[data-cy='accomplishment-title-input']").type("This is accomplishment title")
        cy.get("[data-cy='accomplishment-input']").type("This is accomplishment Elements")
        cy.get("[data-cy='accomplishment-checkbox']").click()
        cy.contains("button","Submit Accomplishment").click()
        cy.contains("button","Go Back").click()
        cy.get("[data-cy='accomplishment-title-input']").should("be.empty")
        cy.get("[data-cy='accomplishment-input']").should("be.empty")
        cy.get("[data-cy='accomplishment-checkbox']").should("not.be.checked")
    })



})
