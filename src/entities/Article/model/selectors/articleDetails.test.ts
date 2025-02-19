import { StateSchema } from "@/app/providers/StoreProvider";

import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from "./articleDetails";

describe("articleDetails.test", () => {
  test("should return data", () => {
    const data = {
      id: "1",
      title: "subtitle",
    };
    const state: DeepPartial<StateSchema> = {
      ArticleDetails: {
        data: data,
      },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });

  test("should return IsLoading", () => {
    const state: DeepPartial<StateSchema> = {
      ArticleDetails: {
        isLoading: true,
      },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(true);
  });
  test("should work with empty state isLoading", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(false);
  });

  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      ArticleDetails: {
        error: "error",
      },
    };
    expect(getArticleDetailsError(state as StateSchema)).toBe("error");
  });
  test("should work with empty state error", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsError(state as StateSchema)).toBe(undefined);
  });
});
