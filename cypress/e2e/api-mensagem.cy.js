describe("Api Adopet", () => {
  it("Mensagens da API", () => {
    cy.request({
      method: "GET",
      url: "https://adopet-api-i8qu.onrender.com/mensagem/b3a8d526-3d73-43d7-a627-98986f0c5630",
      headers: Cypress.env(),
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property("msg");
    });
  });
});
