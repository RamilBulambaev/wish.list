import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleList.module.scss";
import { useTranslation } from "react-i18next";
import { HTMLAttributeAnchorTarget, memo } from "react";
import { IArticle } from "../../model/types/article";
import { EArticleView } from "../../model/consts/articleConsts";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItem.skeleton";
import { Text, TextSize } from "@/shared/ui/Text/Text";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

interface ArticleListProps {
  className?: string;
  articles: IArticle[];
  isLoading?: boolean;
  view?: EArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: EArticleView) => {
  return new Array(view === EArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((_, index) => (
      <ArticleListItemSkeleton view={view} key={index} className={cls.card} />
    ));
};

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = EArticleView.SMALL,
    target,
  } = props;
  const { t } = useTranslation("articles");

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t("Статьи не найденны")} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.map((item) => (
        <ArticleListItem
          article={item}
          view={view}
          target={target}
          key={item.id}
          className={cls.card}
        />
      ))}

      {isLoading && getSkeletons(view)}
    </div>
  );
});
ArticleList.displayName = "ArticleList";
