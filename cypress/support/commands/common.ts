// eslint-disable-next-line import/order
import { selectByTestId } from "../../helpers/selectByTestId";

import { User } from "@/entities/User";
/* eslint-disable @typescript-eslint/no-namespace */
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";

export const login = (
  username: string = "testuser",
  password: string = "123"
) => {
  return cy
    .request({
      method: "POST",
      url: `http://localhost:8000/login`,
      body: {
        username,
        password,
      },
    })
    .then(({ body }) => {
      window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));

      return body;
    });
};

export const getByTestId = (testId: string) => {
  return cy.get(selectByTestId(testId));
};

declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<User>;
      getByTestId(testId: string): ReturnType<typeof cy.get>;
    }
  }
}
