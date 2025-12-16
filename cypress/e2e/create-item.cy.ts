describe('create item test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/remanage')
        cy.wait(2000)
        // Load seed data first
        cy.get("[data-cy='add-seed']").click()
        cy.wait(1000)
    })

    // Handle uncaught exceptions from validation
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Ignore validation errors
        if (err.message.includes('Cannot read properties of undefined')) {
            return false
        }
        return true
    })

    it('should create a new item in existing column', () => {
        const itemTitle = 'Test Task ' + Date.now()
        const itemDetails = 'Test Details'
        const itemMetadata = 'Test Metadata'
        
        // Open modal
        cy.get("[data-cy='add-item']").click()
        cy.get('.ant-modal').should('be.visible')
        
        // Fill form with existing column
        cy.get('.ant-modal').within(() => {
            // Select existing column from dropdown
            cy.get('.ant-select').click()
        })
        cy.wait(200)
        cy.get('.ant-select-dropdown').should('be.visible')
        cy.get('.ant-select-item').first().click()
        
        cy.get('.ant-modal').within(() => {
            cy.get('input[placeholder="Title"]').type(itemTitle)
            cy.get('input[placeholder="Details"]').type(itemDetails)
            cy.get('textarea[placeholder="Metadata"]').type(itemMetadata)
            
            // Submit form
            cy.get('.ant-btn-primary').contains('OK').click()
        })
        
        // Verify item was created
        cy.wait(500)
        cy.contains("[data-cy='kanban-card']", itemTitle).should('exist')
        cy.contains(itemDetails).should('exist')
    })

    it('should create multiple items', () => {
        const itemTitle = 'Multi Task ' + Date.now()
        const itemDetails = 'Multiple task details'
        
        // Create first item
        cy.get("[data-cy='add-item']").click()
        cy.wait(500)
        
        cy.get('.ant-modal').within(() => {
            cy.get('.ant-select').click()
        })
        cy.wait(200)
        cy.get('.ant-select-item').last().click()
        
        cy.get('.ant-modal').within(() => {
            cy.get('input[placeholder="Title"]').type(itemTitle)
            cy.get('input[placeholder="Details"]').type(itemDetails)
            cy.get('.ant-btn-primary').contains('OK').click()
        })
        
        // Verify item was created
        cy.wait(1000)
        cy.contains("[data-cy='kanban-card']", itemTitle).should('exist')
    })

    it('should show modal with all form fields', () => {
        // Open modal
        cy.get("[data-cy='add-item']").click()
        cy.wait(500)
        
        cy.get('.ant-modal').within(() => {
            // Verify all form fields exist
            cy.get('.ant-select').should('exist')
            cy.get('input[placeholder="Title"]').should('exist')
            cy.get('input[placeholder="Details"]').should('exist')
            cy.get('textarea[placeholder="Metadata"]').should('exist')
            cy.get('.ant-btn-primary').contains('OK').should('exist')
            cy.get('.ant-btn').contains('Cancel').should('exist')
        })
    })

    it('should clear form after successful submission', () => {
        const itemTitle = 'Clear Test ' + Date.now()
        
        // Open modal and fill form
        cy.get("[data-cy='add-item']").click()
        cy.wait(500)
        
        cy.get('.ant-modal').within(() => {
            cy.get('.ant-select').click()
        })
        cy.wait(200)
        cy.get('.ant-select-item').first().click()
        
        cy.get('.ant-modal').within(() => {
            cy.get('input[placeholder="Title"]').type(itemTitle)
            cy.get('input[placeholder="Details"]').type('Details')
            cy.get('.ant-btn-primary').contains('OK').click()
        })
        
        // Open modal again and verify form is cleared
        cy.wait(1000)
        cy.get("[data-cy='add-item']").click()
        cy.wait(500)
        
        cy.get('.ant-modal').within(() => {
            cy.get('input[placeholder="Title"]').should('have.value', '')
            cy.get('input[placeholder="Details"]').should('have.value', '')
        })
    })
})

Cypress.on("window:before:load", win => {
    win.indexedDB.deleteDatabase("kanban");
});
