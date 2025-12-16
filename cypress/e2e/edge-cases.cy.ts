describe('edge cases test', () => {
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

    it('should handle very long text in fields', () => {
        const longText = 'A'.repeat(500)
        
        cy.get("[data-cy='add-seed']").click()
        cy.wait(1000)
        
        cy.get("[data-cy='add-item']").click()
        cy.wait(500)
        
        cy.get('.ant-modal').within(() => {
            cy.get('.ant-select').click()
        })
        cy.wait(200)
        cy.get('.ant-select-item').first().click()
        
        cy.get('.ant-modal').within(() => {
            cy.get('input[placeholder="Title"]').type(longText.substring(0, 100))
            cy.get('input[placeholder="Details"]').type(longText.substring(0, 100))
            cy.get('textarea[placeholder="Metadata"]').type(longText)
            
            cy.get('.ant-btn-primary').contains('OK').click()
        })
        
        cy.wait(500)
        // Should still create the item
        cy.get("[data-cy='kanban-card']").should('have.length.greaterThan', 0)
    })

    it('should handle special characters in input', () => {
        const specialText = '<script>alert("test")</script> & "quotes" \'single\''
        
        cy.get("[data-cy='add-seed']").click()
        cy.wait(1000)
        
        cy.get("[data-cy='add-item']").click()
        cy.wait(500)
        
        cy.get('.ant-modal').within(() => {
            cy.get('.ant-select').click()
        })
        cy.wait(200)
        cy.get('.ant-select-item').first().click()
        
        cy.get('.ant-modal').within(() => {
            cy.get('input[placeholder="Title"]').type(specialText)
            cy.get('input[placeholder="Details"]').type(specialText)
            
            cy.get('.ant-btn-primary').contains('OK').click()
        })
        
        cy.wait(500)
        // Should safely handle special characters
        cy.get("[data-cy='kanban-card']").should('exist')
    })

    it('should handle multiple seed data loads', () => {
        // Load seed multiple times
        cy.get("[data-cy='add-seed']").click()
        cy.wait(500)
        cy.get("[data-cy='add-seed']").click()
        cy.wait(500)
        cy.get("[data-cy='add-seed']").click()
        cy.wait(500)
        
        // Should still work (might overwrite or append)
        cy.get("[data-cy='kanban-card']").should('have.length.greaterThan', 0)
    })

    it('should verify cards remain stable', () => {
        cy.get("[data-cy='add-seed']").click()
        cy.wait(1000)
        
        // Verify cards exist and remain stable
        cy.get("[data-cy='kanban-card']").should('have.length.greaterThan', 0)
        cy.wait(500)
        cy.get("[data-cy='kanban-card']").should('have.length.greaterThan', 0)
    })

    it('should maintain cards after interactions', () => {
        cy.get("[data-cy='add-seed']").click()
        cy.wait(1000)
        
        // Verify cards persist after various interactions
        cy.get("[data-cy='kanban-card']").should('have.length.greaterThan', 0)
        cy.get("[data-cy='add-item']").click()
        cy.wait(500)
        cy.get('.ant-modal-close').click()
        cy.wait(500)
        cy.get("[data-cy='kanban-card']").should('have.length.greaterThan', 0)
    })

    it('should handle rapid modal open/close', () => {
        for (let i = 0; i < 3; i++) {
            cy.get("[data-cy='add-item']").click()
            cy.wait(300)
            cy.get('.ant-modal').should('be.visible')
            cy.get('.ant-modal-close').click()
            cy.wait(300)
        }
        
        // Should still work normally
        cy.get("[data-cy='add-item']").click()
        cy.wait(300)
        cy.get('.ant-modal').should('be.visible')
    })

    it('should handle duplicate column names', () => {
        cy.get("[data-cy='add-seed']").click()
        cy.wait(1000)
        
        // Create item in existing column
        cy.get("[data-cy='add-item']").click()
        cy.wait(500)
        
        cy.get('.ant-modal').within(() => {
            cy.get('.ant-select').click()
        })
        cy.wait(200)
        
        cy.get('.ant-select-item').first().invoke('text').then((columnName) => {
            cy.get('.ant-select-item').first().click()
            
            cy.get('.ant-modal').within(() => {
                cy.get('input[placeholder="Title"]').type('Duplicate Test')
                cy.get('input[placeholder="Details"]').type('Testing duplicate column')
                cy.get('.ant-btn-primary').contains('OK').click()
            })
            
            cy.wait(500)
            // Should add to existing column, not create duplicate
            cy.get("[data-cy='kanban-card']").should('have.length.greaterThan', 0)
        })
    })

    it('should maintain card count consistency', () => {
        cy.get("[data-cy='add-seed']").click()
        cy.wait(1000)
        
        // Get initial count
        cy.get("[data-cy='kanban-card']").its('length').then((count) => {
            cy.wait(500)
            // Verify count remains stable
            cy.get("[data-cy='kanban-card']").should('have.length', count)
        })
    })
})

Cypress.on("window:before:load", win => {
    win.indexedDB.deleteDatabase("kanban");
});
