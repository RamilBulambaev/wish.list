import { StateSchema } from "@/app/providers/StoreProvider";
import {
  getArticlesPageError,
  getArticlesPageHasMore,
  getArticlesPageInited,
  getArticlesPageIsLoading,
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from "./articlesPageSelectors";
import {
  ArticleSortField,
  EArticleType,
  EArticleView,
} from "@/entities/Article";

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

  test("should return _inited", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        _inited: false,
      },
    };
    expect(getArticlesPageInited(state as StateSchema)).toBe(false);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageInited(state as StateSchema)).toBe(undefined);
  });

  test("should return order", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        order: "desc",
      },
    };
    expect(getArticlesPageOrder(state as StateSchema)).toBe("desc");
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageOrder(state as StateSchema)).toBe("asc");
  });

  test("should return sort", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        sort: ArticleSortField.TITLE,
      },
    };
    expect(getArticlesPageSort(state as StateSchema)).toBe(
      ArticleSortField.TITLE
    );
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageSort(state as StateSchema)).toBe(
      ArticleSortField.CREATED
    );
  });

  test("should return search", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        search: "Hello",
      },
    };
    expect(getArticlesPageSearch(state as StateSchema)).toBe("Hello");
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageSearch(state as StateSchema)).toBe("");
  });

  test("should return type", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        type: EArticleType.ECONOMICS,
      },
    };
    expect(getArticlesPageType(state as StateSchema)).toBe(
      EArticleType.ECONOMICS
    );
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageType(state as StateSchema)).toBe(EArticleType.ALL);
  });
});
