/// <reference types="cypress"/>
describe("Habit Dashbaord", () => {
    beforeEach(() => {
        cy.visit("/habits")
    })

    it("Verify modal is display, when clicking on add button", () => {
        cy.get("#habit-add-btn").click()
        cy.contains("Add a new habit").should("be.visible")
    })

    it("Verify Empty field validation for Add a new habit", () => {
        cy.contains("button", "Add").click()
        cy.get("input[placeholder='Habit']").type(" ")
        cy.contains("Save Changes").click()
        cy.contains("Add a new habit").should("be.visible")
    })

    it("Verify Close button is working properly or not", () => {
        cy.contains("button", "Add").click()
        cy.contains("button","Close").click()
        cy.contains("h2","Habit Checklist").should("be.visible")
    })

    it("Verify habit card is display when new habit is added", () => {
        cy.contains("button", "Add").click()
        cy.get("input[placeholder='Habit']").type("Playing TT")
        cy.contains("Save Changes").click()
        cy.contains("Playing TT").should("be.visible").and("have.class", "HabitCard__habit-container")
    })
    it("Verify toggle icon is update when habit card is clicked", () => {
        cy.contains("button", "Add").click()
        cy.get("input[placeholder='Habit']").type("Playing TT")
        cy.contains("Save Changes").click()
        cy.get("[src='/static/media/close.fa7e5ead.svg']").should("be.visible")
        cy.contains("Playing TT").click()
        cy.get("[src='/static/media/check.9e8832df.svg']").should("be.visible")


    })


})