import { StateSchema } from "@/app/providers/StoreProvider";
import { EArticleView } from "@/entities/Article";

export const getArticlesPageIsLoading = (state: StateSchema) =>
  state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) =>
  state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) =>
  state.articlesPage?.view || EArticleView.SMALL;
