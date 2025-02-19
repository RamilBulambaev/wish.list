import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { TabItem, Tabs } from "@/shared/ui/Tabs";

import { EArticleType } from "../../model/consts/articleConsts";

interface ArticleTypeTabsProps {
  className?: string;
  value: EArticleType;
  onChangeType: (type: EArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation("articles");

  const typeTabs = useMemo<TabItem<EArticleType>[]>(
    () => [
      {
        value: EArticleType.ALL,
        content: t("Все"),
      },
      {
        value: EArticleType.IT,
        content: t("Айти"),
      },
      {
        value: EArticleType.ECONOMICS,
        content: t("Экономика"),
      },
      {
        value: EArticleType.SCIENCE,
        content: t("Наука"),
      },
    ],
    [t]
  );

  return (
    <Tabs<EArticleType>
      onTabClick={onChangeType}
      tabs={typeTabs}
      value={value}
      className={classNames("", {}, [className])}
    />
  );
});
ArticleTypeTabs.displayName = "ArticleTypeTabs";
