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

  test("test set page", () => {
    const state: DeepPartial<IArticlesPageSchema> = {
      page: 1,
    };
    expect(
      articlesPageReducer(
        state as IArticlesPageSchema,
        articlesPageActions.setPage(2)
      )
    ).toEqual({
      page: 2,
    });
  });

  test("initState action view big", () => {
    localStorage.setItem("articles_view", EArticleView.BIG);

    const state: DeepPartial<IArticlesPageSchema> = {
      view: EArticleView.BIG,
    };

    const result = articlesPageReducer(
      state as IArticlesPageSchema,
      articlesPageActions.initState()
    );

    expect(result.view).toBe(EArticleView.BIG);
    expect(result.limit).toBe(4);
  });

  test("initState action view small", () => {
    localStorage.setItem("articles_view", EArticleView.SMALL);

    const state: DeepPartial<IArticlesPageSchema> = {
      view: EArticleView.BIG,
    };

    const result = articlesPageReducer(
      state as IArticlesPageSchema,
      articlesPageActions.initState()
    );

    expect(result.view).toBe(EArticleView.SMALL);
    expect(result.limit).toBe(9);
  });

  test("test articlesPageSlice service pending", () => {
    const state: DeepPartial<IArticlesPageSchema> = {
      isLoading: false,
    };

    const action: UnknownAction = fetchArticlesList.pending("requestId", {
      page: 1,
    });

    expect(articlesPageReducer(state as IArticlesPageSchema, action)).toEqual({
      error: undefined,
      isLoading: true,
    });
  });

  test("test articlesPageSlice service fullfield", () => {
    const state: DeepPartial<IArticlesPageSchema> = {
      isLoading: true,
      entities: {},
      ids: [],
    };

    const action: UnknownAction = fetchArticlesList.fulfilled(
      data,
      "fulfield",
      { page: 1 }
    );

    expect(articlesPageReducer(state as IArticlesPageSchema, action)).toEqual({
      isLoading: false,
      entities: {
        "1": data[0],
      },
      ids: ["1"],
      hasMore: true,
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
      { page: 1 },
      undefined
    );

    expect(articlesPageReducer(state as IArticlesPageSchema, action)).toEqual({
      isLoading: false,
      error: error,
    });
  });
});
