import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "@/app/providers/StoreProvider";

import { IArticle } from "../../types/article";

export const fetchArticleById = createAsyncThunk<
  IArticle,
  string | undefined,
  IThunkConfig<string>
>("articleDetails/fetchArticleById", async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;
  try {
    if (!articleId) {
      throw new Error("");
    }

    const response = await extra.api.get<IArticle>(`/articles/${articleId}`, {
      params: {
        _expand: "user",
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue("error");
  }
});
