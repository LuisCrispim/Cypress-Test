describe("Api Adopet", () => {
  const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiM2E4ZDUyNi0zZDczLTQzZDctYTYyNy05ODk4NmYwYzU2MzAiLCJhZG9wdGVyTmFtZSI6Ikx1w61zIENyaXNwaW0iLCJpYXQiOjE3MTk5NTIxMjAsImV4cCI6MTcyMDIxMTMyMH0.jSi48WrCBSWhDllcgMLMrVxOGtGKoZw7uJEMQSsp8Ws`;

  it("Mensagens da API", () => {
    cy.request({
      method: "GET",
      url: "https://adopet-api-i8qu.onrender.com/mensagem/b3a8d526-3d73-43d7-a627-98986f0c5630",
      headers: { authorization },
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property("msg");
    });
  });
});
