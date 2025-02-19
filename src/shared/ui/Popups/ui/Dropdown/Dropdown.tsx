import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ReactNode } from "react";
import { Fragment } from "react/jsx-runtime";

import { classNames } from "@/shared/lib/classNames/classNames";
import { DropdownDirection } from "@/shared/types/ui";

import cls from "./Dropdown.module.scss";
import { AppLink } from "../../../AppLink/AppLink";
import { mapDirectionClass } from "../../styles/consts";
import popupCls from "../../styles/popup.module.scss";

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

export function Dropdown(props: DropdownProps) {
  const { className, items, trigger, direction = "bottom left" } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu
      as={"div"}
      className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}
    >
      <MenuButton className={popupCls.trigger}>{trigger}</MenuButton>
      <MenuItems className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item, index) => {
          const content = ({ focus }: { focus: boolean }) => (
            <button
              disabled={item.disabled}
              type={"button"}
              onClick={item.onClick}
              className={classNames(cls.item, { [popupCls.focus]: focus }, [])}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <MenuItem
                key={item.href || `dropdown-item-${index}`}
                disabled={item.disabled}
                as={AppLink}
                to={item.href}
              >
                {content}
              </MenuItem>
            );
          }

          return (
            <MenuItem
              key={item.href || `dropdown-item-${index}`}
              disabled={item.disabled}
              as={Fragment}
            >
              {content}
            </MenuItem>
          );
        })}
      </MenuItems>
    </Menu>
  );
}
