import { ReactNode, useCallback } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Tabs.module.scss";
import { Card, CardTheme } from "../Card/Card";

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: TabItem<T>[];
  value: string;
  onTabClick: (tab: T) => void;
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
  const { className, tabs, value, onTabClick } = props;

  const clickHandle = useCallback(
    (tab: TabItem<T>) => () => {
      onTabClick(tab.value);
    },
    [onTabClick]
  );

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          data-testid={`ArticleTypeTabs.${tab.value}`}
          key={tab.value}
          className={cls.tab}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
