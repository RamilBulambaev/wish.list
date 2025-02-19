import { memo } from "react";
import { useTranslation } from "react-i18next";


import ListIcon from "@/shared/assets/icons/list-24-24.svg";
import TitledIcon from "@/shared/assets/icons/tiled-24-24.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Icon } from "@/shared/ui/Icon";

import cls from "./ArticleViewSelector.module.scss";
import { EArticleView } from "../../model/consts/articleConsts";

interface ArticleViewSelectorProps {
  className?: string;
  view: EArticleView;
  onViewClick?: (view: EArticleView) => void;
}

const viewTypes = [
  {
    view: EArticleView.SMALL,
    icon: TitledIcon,
  },
  {
    view: EArticleView.BIG,
    icon: ListIcon,
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;
  const { t } = useTranslation();

  const onClick = (newView: EArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
          key={viewType.view}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames("", {
              [cls.notSelected]: viewType.view !== view,
            })}
          />
        </Button>
      ))}
    </div>
  );
});
ArticleViewSelector.displayName = "ArticleViewSelector";
