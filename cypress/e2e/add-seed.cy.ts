describe('seed test', () => {
    it('tests loading seed data', () => {
      cy.visit('http://localhost:3000/remanage')
      cy.wait(2000)
      cy.get("[data-cy='kanban-card']").should('not.exist')
      cy.get("[data-cy='add-seed']").click()
      cy.get("[data-cy='kanban-card']")
    })
  })