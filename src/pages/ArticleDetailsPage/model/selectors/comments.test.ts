import { StateSchema } from "@/app/providers/StoreProvider";
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from "./comments";

describe("comments.test", () => {
  test("should return isLoading", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        isLoading: true,
      },
    };
    expect(getArticleCommentsIsLoading(state as StateSchema)).toBe(true);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleCommentsIsLoading(state as StateSchema)).toBe(undefined);
  });

  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        error: "error",
      },
    };
    expect(getArticleCommentsError(state as StateSchema)).toEqual("error");
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleCommentsError(state as StateSchema)).toBe(undefined);
  });
});
