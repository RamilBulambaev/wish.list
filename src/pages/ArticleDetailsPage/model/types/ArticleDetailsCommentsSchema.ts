import { EntityState } from "@reduxjs/toolkit";

import { IComment } from "@/entities/Comment";

export interface IArticleDetailsCommentsSchema
  extends EntityState<IComment, string> {
  isLoading?: boolean;
  error?: string;
}
