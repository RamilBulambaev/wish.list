import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { ArticleSortField } from "@/entities/Article";
import { classNames } from "@/shared/lib/classNames/classNames";
import { SortOrder } from "@/shared/types";
import { Select, SelectOptions } from "@/shared/ui/Select";

import cls from "./ArticleSortSelector.module.scss";


interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { className, sort, order, onChangeOrder, onChangeSort } = props;
  const { t } = useTranslation("articles");

  const orderOprions = useMemo<SelectOptions<SortOrder>[]>(
    () => [
      {
        value: "asc",
        content: t("возрастанию"),
      },
      {
        value: "desc",
        content: t("убыванию"),
      },
    ],
    [t]
  );

  const sortFieldOprions = useMemo<SelectOptions<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t("дате создания"),
      },
      {
        value: ArticleSortField.TITLE,
        content: t("названию"),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t("просмотрам"),
      },
    ],
    [t]
  );

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select<ArticleSortField>
        options={sortFieldOprions}
        label={t("Сортировать ПО")}
        value={sort}
        onChange={onChangeSort}
      />
      <Select<SortOrder>
        options={orderOprions}
        label={t("ПО")}
        value={order}
        onChange={onChangeOrder}
        className={cls.order}
      />
    </div>
  );
});
ArticleSortSelector.displayName = "ArticleSortSelector";
