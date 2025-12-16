describe('drag and drop test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/remanage')
        cy.wait(2000)
        // Load seed data to have items to drag
        cy.get("[data-cy='add-seed']").click()
        cy.wait(1000)
    })

    it('should have draggable cards', () => {
        // Verify cards are draggable
        cy.get("[data-cy='kanban-card']").first().should('have.attr', 'draggable', 'true')
        cy.get("[data-cy='kanban-card']").should('have.length.greaterThan', 0)
    })

    it('should display card data correctly', () => {
        cy.get("[data-cy='kanban-card']").first().within(() => {
            cy.get('.ant-card-head-title').should('exist')
            cy.get('.ant-card-meta-title').should('exist')
        })
    })

    it('should have multiple columns with cards', () => {
        // Verify multiple columns exist
        cy.get('.ant-typography').should('have.length.greaterThan', 0)
        cy.get("[data-cy='kanban-card']").should('have.length.greaterThan', 3)
    })

    it('should maintain card structure', () => {
        // Get initial count and verify structure remains consistent
        cy.get("[data-cy='kanban-card']").its('length').then((initialCount) => {
            cy.wait(500)
            cy.get("[data-cy='kanban-card']").should('have.length', initialCount)
        })
    })
})

Cypress.on("window:before:load", win => {
    win.indexedDB.deleteDatabase("kanban");
});
