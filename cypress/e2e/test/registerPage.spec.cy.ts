describe("Register", () => {

  it("Create Company Account", () => {
    cy.visit("https://hcmatrix-saas.netlify.app/register"), cy.get('[alt="logo"]').click().should("exist");
    cy.fixture("registerSelectors").then((create) => {
      cy.get(create.fullName).type(create.create.fName);
      cy.get(create.organization).click().type(create.organ);
      cy.get(create.industry).click();
      cy.get(create.industryOption).click();
      cy.get(create.email).click().type(create.userEmail);
      cy.get(create.phone_number).click().type(create.phNum);
      cy.get(create.password).click().type(create.fPassword);
      cy.get(create.cPassword).click().type(create.confirmPassword);
      cy.get(create.selectors.recaptcha).click().type(create.recaptcha);
      cy.get(create.authBtn).click();
      cy.get(create.successNotification).should(
        "contain.text",
        "Company created successfully"
      );
    });
  });
});
