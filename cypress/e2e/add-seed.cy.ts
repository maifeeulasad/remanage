describe('seed test', () => {
    it('tests loading seed data on add seed click', () => {
        cy.visit('http://localhost:5173/remanage')
        cy.wait(2000)
        cy.get("[data-cy='kanban-card']").should('not.exist')
        cy.get("[data-cy='add-seed']").click()
        cy.get("[data-cy='kanban-card']")
    })
})

Cypress.on("window:before:load", win => {
    win.indexedDB.deleteDatabase("kanban");
});