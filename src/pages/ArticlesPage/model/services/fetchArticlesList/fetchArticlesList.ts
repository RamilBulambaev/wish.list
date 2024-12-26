import { getArticlesPageType } from "./../../selectors/articlesPageSelectors";
import { IThunkConfig } from "@/app/providers/StoreProvider";
import { EArticleType, IArticle } from "@/entities/Article";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
} from "../../selectors/articlesPageSelectors";
import { addQueryParams } from "@/shared/lib/url/addQueryParams/addQueryParams";

interface FetchArticlesListProps {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  IArticle[],
  FetchArticlesListProps,
  IThunkConfig<string>
>("articlesPage/fetchArticlesList", async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const sort = getArticlesPageSort(getState());
  const order = getArticlesPageOrder(getState());
  const search = getArticlesPageSearch(getState());
  const page = getArticlesPageNum(getState());
  const limit = getArticlesPageLimit(getState());
  const type = getArticlesPageType(getState());

  try {
    addQueryParams({
      sort,
      order,
      search,
      type,
    });
    const response = await extra.api.get<IArticle[]>(`/articles`, {
      params: {
        _expand: "user",
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: order,
        q: search,
        type: type === EArticleType.ALL ? undefined : type,
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return rejectWithValue("error");
  }
});
