import { StateSchema } from "@/app/providers/StoreProvider";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
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
});
