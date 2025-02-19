import { EntityState } from "@reduxjs/toolkit";

import { IArticle } from "@/entities/Article";

export interface articleDetailsRecomendationsSchema
  extends EntityState<IArticle, string> {
  isLoading?: boolean;
  error?: string;
}
