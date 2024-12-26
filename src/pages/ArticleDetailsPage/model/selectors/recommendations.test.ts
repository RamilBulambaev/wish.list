import { StateSchema } from "@/app/providers/StoreProvider";
import {
  getArticleRecommendationsError,
  getArticleRecommendationsIsLoading,
} from "./recommendations";

describe("recommendations.test", () => {
  test("should return isLoading", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        recommendations: {
          isLoading: true,
        },
      },
    };
    expect(getArticleRecommendationsIsLoading(state as StateSchema)).toBe(true);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleRecommendationsIsLoading(state as StateSchema)).toBe(
      undefined
    );
  });

  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        recommendations: {
          error: "error",
        },
      },
    };
    expect(getArticleRecommendationsError(state as StateSchema)).toEqual(
      "error"
    );
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleRecommendationsError(state as StateSchema)).toBe(
      undefined
    );
  });
});
