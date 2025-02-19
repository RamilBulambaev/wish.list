import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { ArticleList } from "@/entities/Article";
import { Text, TextTheme } from "@/shared/ui/Text";

import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { getArticles } from "../../model/slices/articlesPageSlice";



interface ArticlesInfiniteListProps {
  className?: string;
}

export const ArticlesInfiniteList = memo(
  ({ className }: ArticlesInfiniteListProps) => {
    const { t } = useTranslation("articles");
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);

    if (error) {
      return (
        <Text title={"Ошибка при загрузке данных"} theme={TextTheme.ERROR} />
      );
    }

    return (
      <ArticleList
        view={view}
        articles={articles}
        isLoading={isLoading}
        className={className}
      />
    );
  }
);
ArticlesInfiniteList.displayName = "ArticlesInfiniteList";
