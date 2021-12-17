describe("Pizza App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  const nameInput = () => cy.get("input[name=name]");
  const checkboxInput = () => cy.get("input[type=checkbox]");
  const submitButton = () => cy.get('button[id="order-button"]');

  it("add text to text box", () => {
    nameInput()
      .should("have.value", "")
      .type("Dave")
      .should("have.value", "Dave");
  });

  it("check all of the checkboxes", () => {
    checkboxInput.check();
  });

  it("submit form", () => {
    nameInput.type("Dave");
    submitButton().click();
  });
});
