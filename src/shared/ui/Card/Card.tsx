import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Card.module.scss";
import { useTranslation } from "react-i18next";
import React, { HTMLAttributes, memo } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const Card = memo((props: CardProps) => {
  const { className, children, ...otherProps } = props;
  return (
    <div {...otherProps} className={classNames(cls.Card, {}, [className])}>
      {children}
    </div>
  );
});
Card.displayName = "Card";
