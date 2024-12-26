import { IThunkConfig } from "@/app/providers/StoreProvider";
import { IArticle } from "@/entities/Article";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchArticleRecommendations = createAsyncThunk<
  IArticle[],
  void,
  IThunkConfig<string>
>(
  "articleDetailsPage/fetchArticleRecommendationsProps",
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<IArticle[]>(`/articles`, {
        params: {
          _limit: 8,
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);
