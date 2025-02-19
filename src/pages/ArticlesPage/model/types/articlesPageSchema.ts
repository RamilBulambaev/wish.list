import { EntityState } from "@reduxjs/toolkit";

import {
  ArticleSortField,
  EArticleType,
  EArticleView,
  IArticle,
} from "@/entities/Article";
import { SortOrder } from "@/shared/types";

export interface IArticlesPageSchema extends EntityState<IArticle, string> {
  isLoading?: boolean;
  error?: string;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;

  // filters
  view: EArticleView;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: EArticleType;

  _inited: boolean;
}
