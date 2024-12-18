/* eslint-disable i18next/no-literal-string */
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { memo, useMemo, useState } from "react";
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher";
import { LangSwither } from "@/shared/ui/LangSwitcher/LangSwither";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button/Button";
import { SidebarItemsList } from "../../modul/items";
import { SidebarItem } from "../SidebarItem/SidebarItem";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemList = useMemo(
    () =>
      SidebarItemsList.map((item) => (
        <SidebarItem item={item} collapsed={collapsed} key={item.path} />
      )),
    [collapsed]
  );

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={cls.items}>
        {SidebarItemsList.map((item) => (
          <SidebarItem item={item} collapsed={collapsed} key={item.path} />
        ))}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwither short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
});

Sidebar.displayName = "Sidebar";
