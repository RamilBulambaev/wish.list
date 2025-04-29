/* eslint-disable @typescript-eslint/no-namespace */

import { IArticle } from "@/entities/Article";

const defaultArticle = {
  title: "ТЕСТОВАЯ СТАТЬЯ",
  subtitle: "ТЕСТ",
  img: "https://www.mirea.ru/upload/iblock/7cf/vvp_rf2018_1.jpg",
  views: 1022,
  createdAt: "26.02.2022",
  userId: "1",
  type: ["ECONOMICS"],
  blocks: [],
};

export const createArticle = (article?: IArticle) => {
  return cy
    .request({
      method: "POST",
      url: `http://localhost:8000/articles`,
      headers: { Authorization: "aasdfas" },
      body: article ?? defaultArticle,
    })
    .then((resp) => resp.body);
};

export const removeArticle = (articleId: string) => {
  return cy.request({
    method: "DELETE",
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: "aasdfas" },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: IArticle): Chainable<IArticle>;
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
