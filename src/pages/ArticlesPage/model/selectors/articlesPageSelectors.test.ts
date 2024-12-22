import { StateSchema } from "@/app/providers/StoreProvider";
import {
  getArticlesPageError,
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageView,
} from "./articlesPageSelectors";
import { EArticleView } from "@/entities/Article";

describe("articlesPageSelectors.test", () => {
  test("should return isLoading", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        isLoading: true,
      },
    };
    expect(getArticlesPageIsLoading(state as StateSchema)).toBe(true);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageIsLoading(state as StateSchema)).toBe(false);
  });

  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        error: "error",
      },
    };
    expect(getArticlesPageError(state as StateSchema)).toBe("error");
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageError(state as StateSchema)).toBe(undefined);
  });

  test("should return view", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        view: EArticleView.BIG,
      },
    };
    expect(getArticlesPageView(state as StateSchema)).toBe(EArticleView.BIG);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageView(state as StateSchema)).toBe(EArticleView.SMALL);
  });

  test("should return page num", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        page: 5,
      },
    };
    expect(getArticlesPageNum(state as StateSchema)).toBe(5);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageNum(state as StateSchema)).toBe(1);
  });

  test("should return page limit", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        limit: 6,
      },
    };
    expect(getArticlesPageLimit(state as StateSchema)).toBe(6);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageLimit(state as StateSchema)).toBe(9);
  });

  test("should return has more", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        hasMore: true,
      },
    };
    expect(getArticlesPageHasMore(state as StateSchema)).toBe(true);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageHasMore(state as StateSchema)).toBe(undefined);
  });
});
