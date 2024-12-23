import { StateSchema } from "@/app/providers/StoreProvider";
import { EArticleView, IArticle } from "@/entities/Article";
import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { IArticlesPageSchema } from "../types/articlesPageSchema";
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList";
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";

const articlesAdapter = createEntityAdapter({
  selectId: (article: IArticle) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
  name: "articlesPageSlice",
  initialState: articlesAdapter.getInitialState<IArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: EArticleView.SMALL,
    page: 1,
    hasMore: true,
    _inited: false,
  }),
  reducers: {
    setView: (state, action: PayloadAction<EArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(
        ARTICLES_VIEW_LOCALSTORAGE_KEY
      ) as EArticleView;
      state.view = view;
      state.limit = view === EArticleView.BIG ? 4 : 9;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticlesList.fulfilled,
        (state, action: PayloadAction<IArticle[]>) => {
          state.isLoading = false;
          articlesAdapter.addMany(state, action.payload);
          state.hasMore = action.payload.length > 0;
        }
      )
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { reducer: articlesPageReducer, actions: articlesPageActions } =
  articlesPageSlice;
