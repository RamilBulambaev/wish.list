import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "@/app/providers/StoreProvider";
import { ArticleSortField } from "@/entities/Article";
import { EArticleType } from "@/entities/Article";
import { SortOrder } from "@/shared/types/sort";

import { getArticlesPageInited } from "../../selectors/articlesPageSelectors";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  IThunkConfig<string>
>("articlesPage/initArticlesPage", async (searchParams, thunkApi) => {
  const { getState, dispatch } = thunkApi;
  const inited = getArticlesPageInited(getState());
  if (!inited) {
    const orderFromUrl = searchParams.get("oreder") as SortOrder;
    const sortFromUrl = searchParams.get("sort") as ArticleSortField;
    const searchFromUrl = searchParams.get("search");
    const typeFromUrl = searchParams.get("type") as EArticleType;

    if (orderFromUrl) {
      dispatch(articlesPageActions.setOrder(orderFromUrl));
    }

    if (sortFromUrl) {
      dispatch(articlesPageActions.setSort(sortFromUrl));
    }

    if (searchFromUrl) {
      dispatch(articlesPageActions.setSearch(searchFromUrl));
    }

    if (typeFromUrl) {
      dispatch(articlesPageActions.setType(typeFromUrl));
    }

    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({}));
  }
});
