import { IArticle } from "@/entities/Article";
import { EArticleView } from "@/entities/Article/model/types/article";
import { EntityState } from "@reduxjs/toolkit";

export interface IArticlesPageSchema extends EntityState<IArticle, string> {
  isLoading?: boolean;
  error?: string;

  view: EArticleView;
}
