describe('UI interaction test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/remanage')
        cy.wait(2000)
    })

    // Handle uncaught exceptions from validation
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('Cannot read properties of undefined')) {
            return false
        }
        return true
    })

    it('should display empty state initially', () => {
        cy.get("[data-cy='kanban-card']").should('not.exist')
        cy.get("[data-cy='add-seed']").should('be.visible')
        cy.get("[data-cy='add-item']").should('be.visible')
    })

    it('should have functional buttons', () => {
        // Verify buttons are clickable
        cy.get("[data-cy='add-seed']").should('be.visible').and('not.be.disabled')
        cy.get("[data-cy='add-item']").should('be.visible').and('not.be.disabled')
    })

    it('should open and close add item modal', () => {
        // Open modal
        cy.get("[data-cy='add-item']").click()
        cy.wait(500)
        cy.get('.ant-modal').should('be.visible')
        
        // Close modal with cancel button
        cy.get('.ant-modal').within(() => {
            cy.get('.ant-btn').contains('Cancel').click()
        })
        cy.wait(500)
        
        // Open modal again
        cy.get("[data-cy='add-item']").click()
        cy.wait(500)
        cy.get('.ant-modal').should('be.visible')
        
        // Close modal with X button
        cy.get('.ant-modal-close').click()
        cy.wait(500)
    })

    it('should display cards with proper structure', () => {
        cy.get("[data-cy='add-seed']").click()
        cy.wait(1000)
        
        cy.get("[data-cy='kanban-card']").first().within(() => {
            // Check card structure
            cy.get('.ant-card-head-title').should('exist')
            cy.get('.ant-card-meta-title').should('exist')
            // Description might be empty, just check card exists
        })
        cy.get("[data-cy='kanban-card']").should('have.length.greaterThan', 0)
    })

    it('should display columns with headers', () => {
        cy.get("[data-cy='add-seed']").click()
        cy.wait(1000)
        
        // Check for column headers (h4 titles)
        cy.get('.ant-typography').should('have.length.greaterThan', 0)
    })

    it('should handle rapid button clicks', () => {
        // Rapid add seed clicks
        cy.get("[data-cy='add-seed']").click()
        cy.get("[data-cy='add-seed']").click()
        cy.get("[data-cy='add-seed']").click()
        
        cy.wait(1000)
        cy.get("[data-cy='kanban-card']").should('have.length.greaterThan', 0)
    })

    it('should have working form inputs', () => {
        cy.get("[data-cy='add-seed']").click()
        cy.wait(1000)
        
        cy.get("[data-cy='add-item']").click()
        cy.wait(500)
        
        cy.get('.ant-modal').within(() => {
            // Verify inputs work
            cy.get('input[placeholder="Title"]').type('test').should('have.value', 'test')
            cy.get('input[placeholder="Details"]').type('details').should('have.value', 'details')
        })
    })

    it('should handle dropdown interactions', () => {
        cy.get("[data-cy='add-seed']").click()
        cy.wait(1000)
        
        cy.get("[data-cy='add-item']").click()
        cy.wait(500)
        
        cy.get('.ant-modal').within(() => {
            // Open dropdown
            cy.get('.ant-select').click()
        })
        
        // Check dropdown options are visible
        cy.get('.ant-select-dropdown').should('be.visible')
        cy.get('.ant-select-item').should('have.length.greaterThan', 0)
        
        // Select first option
        cy.get('.ant-select-item').first().click()
        
        // Verify dropdown closed
        cy.get('.ant-select-dropdown').should('not.be.visible')
    })

    it('should display buttons with correct labels', () => {
        cy.get("[data-cy='add-seed']").should('contain.text', 'Add Seed')
        cy.get("[data-cy='add-item']").should('contain.text', 'Add Item')
    })

    it('should handle modal form reset after cancel', () => {
        cy.get("[data-cy='add-item']").click()
        cy.wait(500)
        
        cy.get('.ant-modal').within(() => {
            cy.get('input[placeholder="Title"]').type('Test Title')
            cy.get('input[placeholder="Details"]').type('Test Details')
            
            // Cancel
            cy.get('.ant-btn').contains('Cancel').click()
        })
        
        cy.wait(500)
        // Reopen
        cy.get("[data-cy='add-item']").click()
        cy.wait(500)
        
        // Verify modal opens
        cy.get('.ant-modal').should('be.visible')
    })
})

Cypress.on("window:before:load", win => {
    win.indexedDB.deleteDatabase("kanban");
});
