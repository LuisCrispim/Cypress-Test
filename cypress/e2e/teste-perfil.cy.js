describe("Api Adopet", () => {
  const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiM2E4ZDUyNi0zZDczLTQzZDctYTYyNy05ODk4NmYwYzU2MzAiLCJhZG9wdGVyTmFtZSI6Ikx1w61zIENyaXNwaW0iLCJpYXQiOjE3MjAwMjg4MzMsImV4cCI6MTcyMDI4ODAzM30.dvUVXhDRd-FfXsHlt_m3q5ioG11hJmC5nQ4ZV7yQXoQ`;

  it("Nome do perfil", () => {
    cy.request({
      method: "GET",
      url: "https://adopet-api-i8qu.onrender.com/adotante/perfil/b3a8d526-3d73-43d7-a627-98986f0c5630",
      headers: { authorization },
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property("perfil");
      expect(res.body.perfil.nome).to.be.equal("Luís Crispim");
    });
  });
});
