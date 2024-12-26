import { SortOrder } from "./../../../../shared/types/index";
import {
  ArticleSortField,
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
  {
    id: "2",
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
  {
    id: "3",
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
  {
    id: "4",
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

  test("test set order", () => {
    const state: DeepPartial<IArticlesPageSchema> = {
      order: "asc",
    };
    expect(
      articlesPageReducer(
        state as IArticlesPageSchema,
        articlesPageActions.setOrder("desc")
      )
    ).toEqual({
      order: "desc",
    });
  });

  test("test set sort", () => {
    const state: DeepPartial<IArticlesPageSchema> = {
      sort: ArticleSortField.CREATED,
    };
    expect(
      articlesPageReducer(
        state as IArticlesPageSchema,
        articlesPageActions.setSort(ArticleSortField.VIEWS)
      )
    ).toEqual({
      sort: ArticleSortField.VIEWS,
    });
  });

  test("test set sort", () => {
    const state: DeepPartial<IArticlesPageSchema> = {
      search: "",
    };
    expect(
      articlesPageReducer(
        state as IArticlesPageSchema,
        articlesPageActions.setSearch("hello")
      )
    ).toEqual({
      search: "hello",
    });
  });

  test("test set sort", () => {
    const state: DeepPartial<IArticlesPageSchema> = {
      type: EArticleType.ECONOMICS,
    };
    expect(
      articlesPageReducer(
        state as IArticlesPageSchema,
        articlesPageActions.setType(EArticleType.SCIENCE)
      )
    ).toEqual({
      type: EArticleType.SCIENCE,
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
      error: "Some error",
    };

    const action: UnknownAction = fetchArticlesList.pending("requestId", {
      replace: true,
    });

    expect(articlesPageReducer(state as IArticlesPageSchema, action)).toEqual({
      error: undefined,
      isLoading: true,
      entities: {},
      ids: [],
    });
  });

  test("test articlesPageSlice service fullfield with replace", () => {
    const state: DeepPartial<IArticlesPageSchema> = {
      isLoading: true,
      entities: { "1": data[0], "2": data[1], "3": data[2], "4": data[3] },
      ids: ["1", "2", "3", "4"],
      limit: 1,
    };

    const action: UnknownAction = fetchArticlesList.fulfilled(
      data,
      "fulfield",
      { replace: true }
    );

    expect(articlesPageReducer(state as IArticlesPageSchema, action)).toEqual({
      isLoading: false,
      entities: {
        "1": data[0],
        "2": data[1],
        "3": data[2],
        "4": data[3],
      },
      ids: ["1", "2", "3", "4"],
      hasMore: true,
      limit: 1,
    });
  });

  test("test articlesPageSlice service fullfield without replace", () => {
    const state: DeepPartial<IArticlesPageSchema> = {
      isLoading: true,
      entities: { "1": data[0], "2": data[1], "3": data[2], "4": data[3] },
      ids: ["1", "2", "3", "4"],
      limit: 1,
    };

    const newData = [
      {
        id: "5",
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

    const action: UnknownAction = fetchArticlesList.fulfilled(
      newData,
      "fulfield",
      { replace: false }
    );

    expect(articlesPageReducer(state as IArticlesPageSchema, action)).toEqual({
      ...state,
      isLoading: false,
      entities: {
        "1": data[0],
        "2": data[1],
        "3": data[2],
        "4": data[3],
        "5": newData[0],
      },
      ids: ["1", "2", "3", "4", "5"],
      hasMore: true,
      limit: 1,
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
      {},
      undefined
    );

    expect(articlesPageReducer(state as IArticlesPageSchema, action)).toEqual({
      isLoading: false,
      error: error,
    });
  });
});
