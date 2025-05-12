import { memo } from "react";
import { useParams } from "react-router-dom";

import { ArticleDetails } from "@/entities/Article";
import { ArticleRating } from "@/features/articleRating";
import { ArticleRecommendationsList } from "@/features/articleRecommendationsList";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { getFeatureFlags, toggleFeatures } from "@/shared/lib/features";
import { Card } from "@/shared/ui/Card";
import { VStack } from "@/shared/ui/Stack";
import { Page } from "@/widgets/Page";

import cls from "./ArticleDetailsPage.module.scss";
import { articleDetailsPageReducer } from "../../model/slices";
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams<{ id: string }>();
  const isArticleRatingEnabled = getFeatureFlags("isArticleRatingEnabled");

  if (!id) {
    return "error";
  }

  const articleRatingCard = toggleFeatures({
    name: "isArticleRatingEnabled",
    on: () => <ArticleRating articleId={id} />,
    // eslint-disable-next-line i18next/no-literal-string
    off: () => <Card>Оценка статей скоро появится</Card>,
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <VStack gap="16">
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          {articleRatingCard}
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
