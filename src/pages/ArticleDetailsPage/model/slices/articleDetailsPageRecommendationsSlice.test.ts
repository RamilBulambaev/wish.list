import { IArticle } from "@/entities/Article";
import { UnknownAction } from "@reduxjs/toolkit";
import { articleDetailsRecomendationsSchema } from "../types/articleDetailsRecomendationsSchema";
import { fetchArticleRecommendations } from "../services/fetchArticleRecommendations/fetchArticleRecommendations";
import { articleDetailsPageRecommendationsReducer } from "./articleDetailsPageRecommendationsSlice";
import { EArticleBlockType, EArticleType } from "@/entities/Article";

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

describe("articleDetailsPageRecommendationsSlice.test", () => {
  test("test articleDetailsPageRecommendationsSlice service pending", () => {
    const state: DeepPartial<articleDetailsRecomendationsSchema> = {
      isLoading: false,
      error: "Some error",
    };

    const action: UnknownAction =
      fetchArticleRecommendations.pending("requestId");

    expect(
      articleDetailsPageRecommendationsReducer(
        state as articleDetailsRecomendationsSchema,
        action
      )
    ).toEqual({
      error: undefined,
      isLoading: true,
    });
  });

  test("test articleDetailsPageRecommendationsSlice service fullfield with replace", () => {
    const state: DeepPartial<articleDetailsRecomendationsSchema> = {
      isLoading: true,
      entities: { "1": data[0], "2": data[1], "3": data[2], "4": data[3] },
      ids: ["1", "2", "3", "4"],
    };

    const action: UnknownAction = fetchArticleRecommendations.fulfilled(
      data,
      "fulfield"
    );

    expect(
      articleDetailsPageRecommendationsReducer(
        state as articleDetailsRecomendationsSchema,
        action
      )
    ).toEqual({
      isLoading: false,
      entities: {
        "1": data[0],
        "2": data[1],
        "3": data[2],
        "4": data[3],
      },
      ids: ["1", "2", "3", "4"],
    });
  });

  test("test articleDetailsPageRecommendationsSlice service rejected", () => {
    const state: DeepPartial<articleDetailsRecomendationsSchema> = {
      isLoading: true,
      error: undefined,
    };

    const error = "Network Error";

    const action: UnknownAction = fetchArticleRecommendations.rejected(
      new Error(error),
      "rejected",
      undefined,
      undefined
    );

    expect(
      articleDetailsPageRecommendationsReducer(
        state as articleDetailsRecomendationsSchema,
        action
      )
    ).toEqual({
      isLoading: false,
      error: error,
    });
  });
});
