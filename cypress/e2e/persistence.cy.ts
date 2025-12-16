describe('data persistence test', () => {
    // Remove database deletion to allow persistence testing
    beforeEach(() => {
        cy.visit('http://localhost:5173/remanage')
        cy.wait(2000)
    })

    it('should persist data after page reload', () => {
        // Add seed data
        cy.get("[data-cy='add-seed']").click()
        cy.wait(1000)
        
        // Verify cards exist before reload
        cy.get("[data-cy='kanban-card']").should('have.length.greaterThan', 0)
        
        // Get count of cards
        cy.get("[data-cy='kanban-card']").its('length').then((count) => {
            // Reload page
            cy.reload()
            cy.wait(2000)
            
            // Verify cards are still there
            cy.get("[data-cy='kanban-card']").should('have.length', count)
        })
    })

    it('should start fresh after database clear', () => {
        // After database clear, should have no cards initially
        cy.get("[data-cy='kanban-card']").should('not.exist')
        
        // Add seed data
        cy.get("[data-cy='add-seed']").click()
        cy.wait(1000)
        
        // Now cards should exist
        cy.get("[data-cy='kanban-card']").should('have.length.greaterThan', 0)
    })

    it('should maintain data after adding seed', () => {
        // Add seed data
        cy.get("[data-cy='add-seed']").click()
        cy.wait(1000)
        
        cy.get("[data-cy='kanban-card']").should('have.length.greaterThan', 0)
        
        // Verify card structure is intact
        cy.get("[data-cy='kanban-card']").first().within(() => {
            cy.get('.ant-card-head-title').should('exist')
            cy.get('.ant-card-meta-title').should('exist')
        })
        
        // Reload and verify persistence
        cy.reload()
        cy.wait(2000)
        cy.get("[data-cy='kanban-card']").should('have.length.greaterThan', 0)
    })
})

Cypress.on("window:before:load", win => {
    // Only delete database once at the very beginning
    if (!win.sessionStorage.getItem('dbCleared')) {
        win.indexedDB.deleteDatabase("kanban");
        win.sessionStorage.setItem('dbCleared', 'true');
    }
});
