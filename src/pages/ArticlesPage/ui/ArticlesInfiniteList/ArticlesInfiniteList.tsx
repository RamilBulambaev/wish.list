import { memo } from "react";
import { ArticleList } from "@/entities/Article";
import { useSelector } from "react-redux";
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors";
import { getArticles } from "../../model/slices/articlesPageSlice";
import { useTranslation } from "react-i18next";
import { Text, TextTheme } from "@/shared/ui/Text";

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
