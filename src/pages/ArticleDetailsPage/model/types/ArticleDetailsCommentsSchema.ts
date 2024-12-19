import { IComment } from "@/entities/Comment";
import { EntityState } from "@reduxjs/toolkit";

export interface IArticleDetailsCommentsSchema
  extends EntityState<IComment, string> {
  isLoading?: boolean;
  error?: string;
}
