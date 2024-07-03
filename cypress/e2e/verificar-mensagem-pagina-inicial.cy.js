describe("Página Inicial", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/");
  });
  it('Verificar título com texto "AdoPet', () => {
    cy.title().should("eq", "AdoPet");
  });
  it("Vericar mensagem de texto", () => {
    cy.contains("p", "Quem ama adota!").should("be.visible");
    cy.contains(
      "p",
      "Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!"
    ).should("be.visible");
  });
});
