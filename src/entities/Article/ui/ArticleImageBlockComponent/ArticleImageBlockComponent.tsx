import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleImageBlockComponent.module.scss";
import { memo } from "react";
import { IArticleImageBlock } from "../../model/types/article";
import { Text, TextAlighn } from "@/shared/ui/Text";

interface ArticleImageBlockComponentProps {
  className?: string;
  block: IArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
  ({ className, block }: ArticleImageBlockComponentProps) => {
    return (
      <div
        className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
      >
        <img src={block.src} className={cls.img} alt={block.title} />
        {block.title && <Text text={block.title} alighn={TextAlighn.CENTER} />}
      </div>
    );
  }
);

ArticleImageBlockComponent.displayName = "ArticleImageBlockComponent";
