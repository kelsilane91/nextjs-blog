describe("Navigation", () => {
  it("should navigate a blog page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000");

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="posts/ssg-ssr"]').click();

    // The new url should include "/about"
    cy.url().should("include", "/posts/ssg-ssr");

    // The new page should contain an h1 with "About page"
    cy.get("h1").contains("When to Use Static Generation");
  });
});
