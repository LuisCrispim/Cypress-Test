describe("Página de login", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
    cy.get('[data-test="login-button"]').click();
  });

  it("Deve preencher os campos de login corretamente e autenticar o usuário na página", () => {
    cy.login("luis@gmail.com", "Senha123");
  });
});
