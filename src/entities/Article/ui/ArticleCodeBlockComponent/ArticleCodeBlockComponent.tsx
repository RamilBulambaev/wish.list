import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Code } from "@/shared/ui/Code";

import cls from "./ArticleCodeBlockComponent.module.scss";
import { IArticleCodeBlock } from "../../model/types/article";


interface ArticleCodeBlockComponentProps {
  className?: string;
  block: IArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
  ({ className, block }: ArticleCodeBlockComponentProps) => {
    return (
      <div
        className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}
      >
        <Code text={block.code} />
      </div>
    );
  }
);

ArticleCodeBlockComponent.displayName = "ArticleCodeBlockComponent";
