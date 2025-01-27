import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleList.module.scss";
import { useTranslation } from "react-i18next";
import { HTMLAttributeAnchorTarget, memo } from "react";
import { IArticle } from "../../model/types/article";
import { EArticleView } from "../../model/consts/articleConsts";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItem.skeleton";
import { Text, TextSize } from "@/shared/ui/Text/Text";
import { List, ListRowProps, WindowScroller } from "react-virtualized";
import { PAGE_ID } from "@/widgets/Page/Page";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";

interface ArticleListProps {
  className?: string;
  articles: IArticle[];
  isLoading?: boolean;
  view?: EArticleView;
  target?: HTMLAttributeAnchorTarget;
  virtualized?: boolean;
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
    virtualized = true,
  } = props;
  const { t } = useTranslation("articles");

  const isBig = view === EArticleView.BIG;

  const itemPerRow = isBig ? 1 : 6;
  const rowCount = isBig
    ? articles.length
    : Math.ceil(articles.length / itemPerRow);

  const rowRender = ({ index, isScrolling, key, style }: ListRowProps) => {
    const items = [];
    const fromIndex = index * itemPerRow;
    const toIndex = Math.min(fromIndex + itemPerRow, articles.length);

    for (let i = fromIndex; i < toIndex; i++) {
      items.push(
        <ArticleListItem
          target={target}
          article={articles[i]}
          view={view}
          className={cls.card}
          key={"str" + i}
        />
      );
    }

    return (
      <div key={key} style={style} className={cls.row}>
        {items}
      </div>
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
    <WindowScroller scrollElement={document.getElementById(PAGE_ID) as Element}>
      {({
        height,
        width,
        registerChild,
        onChildScroll,
        isScrolling,
        scrollTop,
      }) => (
        <div
          ref={registerChild as React.LegacyRef<HTMLDivElement>}
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
          {virtualized ? (
            <List
              height={height ?? 700}
              rowCount={rowCount}
              rowHeight={isBig ? 700 : 330}
              rowRenderer={rowRender}
              width={width ? width - 80 : 700}
              autoHeight
              onScroll={onChildScroll}
              isScrolling={isScrolling}
              scrollTop={scrollTop}
            />
          ) : (
            articles.map((item) => (
              <ArticleListItem
                article={item}
                view={view}
                target={target}
                key={item.id}
                className={cls.card}
              />
            ))
          )}

          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>
  );
});
ArticleList.displayName = "ArticleList";
