import { IThunkConfig } from "@/app/providers/StoreProvider";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getArticlesPageInited } from "../../selectors/articlesPageSelectors";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  IThunkConfig<string>
>("articlesPage/initArticlesPage", async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi;
  const inited = getArticlesPageInited(getState());
  if (!inited) {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({ page: 1 }));
  }
});
