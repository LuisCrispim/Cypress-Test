describe("Fluxo de Login", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
  });
  it("Clica no ícone para login", () => {
    cy.get(".header__message").click();
    cy.get('[data-test="input-loginEmail"]').type("luis@email.com");
    cy.get('[data-test="input-loginPassword"]').type("Senha123");
    cy.get('[data-test="submit-button"]').click();
  });
});
