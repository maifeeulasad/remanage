describe('ui test', () => {
  it('loads remanage', () => {
    cy.visit('http://localhost:4173/remanage')
  })
})

Cypress.on("window:before:load", win => {
  win.indexedDB.deleteDatabase("kanban");
});