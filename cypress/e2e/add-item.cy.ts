describe('add item modal test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/remanage')
        cy.wait(2000)
    })

    it('should open modal on add item click', () => {
        cy.get('.ant-modal').should('not.exist')
        cy.get("[data-cy='add-item']").click()
        cy.wait(500)
        cy.get('.ant-modal').should('be.visible')
    })

    it('should close modal on outside click', () => {
        cy.get("[data-cy='add-item']").click()
        cy.wait(500)
        cy.get('.ant-modal').should('be.visible')
        cy.get('body').click(0, 0)
        cy.wait(500)
    })
})

Cypress.on("window:before:load", win => {
    win.indexedDB.deleteDatabase("kanban");
});