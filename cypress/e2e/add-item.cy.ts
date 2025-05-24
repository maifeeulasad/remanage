describe('seed test', () => {
    it('tests opening modal on add item click', () => {
        cy.visit('http://localhost:4173/remanage')
        cy.wait(2000)
        cy.get("[data-cy='add-item-modal']").should('not.exist')
        cy.get("[data-cy='add-item']").click()
        cy.get("[data-cy='add-item-modal']")
    })
    it('tests opened modal closing on outside click', () => {
        cy.visit('http://localhost:4173/remanage')
        cy.wait(2000)
        cy.get("[data-cy='add-item-modal']").should('not.exist')
        cy.get("[data-cy='add-item']").click()
        cy.get("[data-cy='add-item-modal']")
        cy.get('body').click(0, 0)
        cy.get("[data-cy='add-item-modal']").should('not.visible')
    })
})

Cypress.on("window:before:load", win => {
    win.indexedDB.deleteDatabase("kanban");
});