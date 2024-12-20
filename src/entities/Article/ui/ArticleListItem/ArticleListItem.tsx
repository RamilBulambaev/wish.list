import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleListItem.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import {
  EArticleBlockType,
  EArticleView,
  IArticle,
} from "../../model/types/article";
import { Text } from "@/shared/ui/Text/Text";
import IconEye from "@/shared/assets/icons/eye-20-20.svg";
import { Icon } from "@/shared/ui/Icon/Icon";
import { Card } from "@/shared/ui/Card/Card";
import { useHover } from "@/shared/lib/hooks/useHover/useHover";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";

interface ArticleListItemProps {
  className?: string;
  article: IArticle;
  view: EArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view } = props;
  const { t } = useTranslation("articles");
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id);
  }, [navigate, article.id]);

  const types = <Text text={article.type.join(", ")} className={cls.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={cls.view} />
      <Icon Svg={IconEye} />
    </>
  );

  if (view === EArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === EArticleBlockType.TEXT
    );

    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          <img src={article.img} alt={article.title} className={cls.img} />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
          )}
          <div className={cls.footer}>
            <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
              {t("Читать далее...")}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card onClick={onOpenArticle} className={cls.card}>
        <div className={cls.imageWrapper}>
          <img src={article.img} alt={article.title} className={cls.img} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </div>
  );
});
ArticleListItem.displayName = "ArticleListItem";
