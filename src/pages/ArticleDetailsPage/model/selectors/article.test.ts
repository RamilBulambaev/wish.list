import { StateSchema } from "@/app/providers/StoreProvider";
import { getCanEditArticle } from "./article";

describe("article.test", () => {
  test("should return true", () => {
    const state: DeepPartial<StateSchema> = {
      ArticleDetails: {
        data: {
          id: "1",
          title: "subtitle",
          user: {
            id: "1",
          },
        },
      },
      user: {
        _inited: true,
        authData: {
          id: "1",
          username: "user",
        },
      },
    };
    expect(getCanEditArticle(state as StateSchema)).toBe(true);
  });
  test("Checking with different IDs", () => {
    const state: DeepPartial<StateSchema> = {
      ArticleDetails: {
        data: {
          id: "1",
          title: "subtitle",
          user: {
            id: "1",
          },
        },
      },
      user: {
        _inited: true,
        authData: {
          id: "2",
          username: "user",
        },
      },
    };
    expect(getCanEditArticle(state as StateSchema)).toBe(false);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {
      ArticleDetails: {},
      user: {
        _inited: false,
        authData: {},
      },
    };
    expect(getCanEditArticle(state as StateSchema)).toBe(false);
  });
});
