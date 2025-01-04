import {
  Listbox as HListBox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { Fragment, ReactNode, useState } from "react";
import cls from "./ListBox.module.scss";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import { Button } from "../Button/Button";
import { HStack } from "../Stack";

export interface ListBoxItems {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

type DropdownDirection = "top" | "bottom";

interface ListBoxProps {
  items?: ListBoxItems[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  bottom: cls.optionsBottom,
  top: cls.optionsTop,
};

export function ListBox(props: ListBoxProps) {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = "bottom",
    label,
  } = props;

  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <HStack gap="4">
      {label && (
        <span
          className={classNames("", { [cls.disabled]: readonly })}
        >{`${label}>`}</span>
      )}
      <HListBox
        disabled={readonly}
        as={"div"}
        className={classNames(cls.ListBox, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <ListboxButton disabled={readonly} className={cls.trigger}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </ListboxButton>
        <ListboxOptions className={classNames(cls.options, {}, optionsClasses)}>
          {items?.map((item) => (
            <ListboxOption
              key={item.value}
              value={item.value}
              as={Fragment}
              disabled={item.disabled}
            >
              {({ focus, selected }) => (
                <li
                  className={classNames(
                    cls.item,
                    {
                      [cls.focus]: focus,
                      [cls.disabled]: item.disabled,
                    },
                    []
                  )}
                >
                  {item.content}
                </li>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </HListBox>
    </HStack>
  );
}
