import {
  EArticleBlockType,
  EArticleType,
  EArticleView,
  IArticle,
} from "@/entities/Article/model/types/article";
import { UnknownAction } from "@reduxjs/toolkit";
import { IArticlesPageSchema } from "../types/articlesPageSchema";
import { articlesPageActions, articlesPageReducer } from "./articlesPageSlice";
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList";

const data = [
  {
    id: "1",
    title: "Javascript news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "",
    views: 1022,
    createdAt: "26.02.2022",
    type: [EArticleType.IT],
    user: {
      id: "1",
      username: "Makvoi",
    },
    blocks: [
      {
        id: "1",
        type: EArticleBlockType.TEXT,
        title: "Заголовок этого блока",
        paragraphs: [
          "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
        ],
      },
      {
        id: "4",
        type: EArticleBlockType.CODE,
        code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>',
      },
    ],
  },
] as IArticle[];

describe("articlesPageSlice.test", () => {
  test("test set view", () => {
    const state: DeepPartial<IArticlesPageSchema> = {
      view: EArticleView.SMALL,
    };
    expect(
      articlesPageReducer(
        state as IArticlesPageSchema,
        articlesPageActions.setView(EArticleView.BIG)
      )
    ).toEqual({
      view: EArticleView.BIG,
    });
  });

  test("initState action", () => {
    localStorage.setItem("ARTICLES_VIEW_LOCALSTORAGE_KEY", EArticleView.BIG);

    const state: DeepPartial<IArticlesPageSchema> = {
      view: EArticleView.SMALL,
    };

    const result = articlesPageReducer(
      state as IArticlesPageSchema,
      articlesPageActions.initState()
    );

    expect(result.view).toBe(EArticleView.BIG);
  });

  test("test articlesPageSlice service pending", () => {
    const state: DeepPartial<IArticlesPageSchema> = {
      isLoading: false,
    };

    const action: UnknownAction = fetchArticlesList.pending("requestId");

    expect(articlesPageReducer(state as IArticlesPageSchema, action)).toEqual({
      error: undefined,
      isLoading: true,
    });
  });

  test("test articlesPageSlice service fullfield", () => {
    const state: DeepPartial<IArticlesPageSchema> = {
      isLoading: true,
    };

    const action: UnknownAction = fetchArticlesList.fulfilled(data, "fulfield");

    expect(articlesPageReducer(state as IArticlesPageSchema, action)).toEqual({
      isLoading: false,
      entities: {
        "1": data[0],
      },
      ids: ["1"],
    });
  });

  test("test articlesPageSlice service rejected", () => {
    const state: DeepPartial<IArticlesPageSchema> = {
      isLoading: true,
      error: undefined,
    };

    const error = "Network Error";

    const action: UnknownAction = fetchArticlesList.rejected(
      new Error(error),
      "rejected",
      undefined
    );

    expect(articlesPageReducer(state as IArticlesPageSchema, action)).toEqual({
      isLoading: false,
      error: error,
    });
  });
});
