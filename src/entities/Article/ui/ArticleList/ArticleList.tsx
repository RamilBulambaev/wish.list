import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleList.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { EArticleView, IArticle } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItem.skeleton";
import { Text, TextSize, TextTheme } from "@/shared/ui/Text/Text";

interface ArticleListProps {
  className?: string;
  articles: IArticle[];
  isLoading?: boolean;
  view?: EArticleView;
}

const getSkeletons = (view: EArticleView) => {
  return new Array(view === EArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton view={view} key={index} className={cls.card} />
    ));
};

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, articles, isLoading, view = EArticleView.SMALL } = props;
  const { t } = useTranslation("articles");

  const renderArticle = (article: IArticle) => {
    return (
      <ArticleListItem
        article={article}
        view={view}
        className={cls.card}
        key={article.id}
      />
    );
  };

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t("Статьи не найденны")} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
ArticleList.displayName = "ArticleList";
