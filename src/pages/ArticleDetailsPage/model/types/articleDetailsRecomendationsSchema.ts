import { IArticle } from "@/entities/Article";
import { EntityState } from "@reduxjs/toolkit";

export interface articleDetailsRecomendationsSchema
  extends EntityState<IArticle, string> {
  isLoading?: boolean;
  error?: string;
}
