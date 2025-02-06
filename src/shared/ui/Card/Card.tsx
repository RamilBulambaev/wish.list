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
  max?: boolean;
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    theme = CardTheme.NORMAL,
    max,
    ...otherProps
  } = props;
  return (
    <div
      {...otherProps}
      className={classNames(cls.Card, { [cls.max]: max }, [
        className,
        cls[theme],
      ])}
    >
      {children}
    </div>
  );
});
Card.displayName = "Card";
