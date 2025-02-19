import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Text } from "@/shared/ui/Text";

import cls from "./ArticleTextBlockComponent.module.scss";
import { IArticleTextBlock } from "../../model/types/article";


interface ArticleTextBlockComponentProps {
  className?: string;
  block: IArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  ({ className, block }: ArticleTextBlockComponentProps) => {
    const { t } = useTranslation();

    return (
      <div
        className={classNames(cls.ArticleTextBlockComponent, {}, [className])}
      >
        {block.title && <Text title={block.title} className={cls.title} />}
        {block.paragraphs.map((paragraph) => (
          <Text text={paragraph} key={paragraph} className={cls.paragrapg}/>
        ))}
      </div>
    );
  }
);

ArticleTextBlockComponent.displayName = "ArticleTextBlockComponent";
