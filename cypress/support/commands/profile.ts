/* eslint-disable @typescript-eslint/no-namespace */

export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId("EditableProfileHeader.EditButton").click();
  cy.getByTestId("ProfileCard.firstname").clear().type(firstname);
  cy.getByTestId("ProfileCard.lastname").clear().type(lastname);
  cy.getByTestId("EditableProfileHeader.SaveButton").click();
};

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: "PUT",
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: "aasdfas" },
    body: {
      id: "4",
      first: "testuser",
      lastname: "test",
      age: 55,
      currency: "EUR",
      country: "Belarus",
      city: "Moscow",
      username: "testuser",
      avatar:
        "https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg",
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
