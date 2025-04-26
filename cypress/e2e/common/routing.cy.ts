import { selectByTestId } from "cypress/helpers/selectByTesrId";

describe("Роутинг", () => {
  describe("Пользователь не авторизован", () => {
    it("Переход на главную страницу", () => {
      cy.visit("/");
      cy.get(selectByTestId("MainPage")).should("exist");
    });
    it("Переход открывает страницу пользователя", () => {
      cy.visit("/profile/1");
      cy.get(selectByTestId("MainPage")).should("exist");
    });
    it("Переход на несуществующий маршрут", () => {
      cy.visit("/dsfsdgdfsgdfs");
      cy.get(selectByTestId("NotFoundPage")).should("exist");
    });
  });
  describe("Пользователь авторизован", () => {
    beforeEach(() => {
      cy.login();
    });
    it("Переход открывает страницу пользователя", () => {
      cy.visit("/profile/1");
      cy.get(selectByTestId("ProfilePage")).should("exist");
    });
    it("Переход открывает страницу статей", () => {
      cy.visit("/articles");
      cy.get(selectByTestId("ArticlesPage")).should("exist");
    });
  });
});
