import { IArticleDetailsCommentsSchema } from "./ArticleDetailsCommentsSchema";
import { articleDetailsRecomendationsSchema } from "./articleDetailsRecomendationsSchema";

export interface ArticleDetailsPageSchema {
  comments: IArticleDetailsCommentsSchema;
  recommendations: articleDetailsRecomendationsSchema;
}
