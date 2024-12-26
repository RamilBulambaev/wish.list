import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Card.module.scss";
import React, { HTMLAttributes, memo } from "react";

export enum CardTheme {
  NORMAL = "normal",
  OUTLINED = "outlined",
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  theme?: CardTheme;
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    theme = CardTheme.NORMAL,
    ...otherProps
  } = props;
  return (
    <div
      {...otherProps}
      className={classNames(cls.Card, {}, [className, cls[theme]])}
    >
      {children}
    </div>
  );
});
Card.displayName = "Card";
