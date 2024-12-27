import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Text.module.scss";
import { memo } from "react";

export enum TextTheme {
  PRIMARY = "pimary",
  INVERTED = "inverted",
  ERROR = "error",
}

export enum TextAlighn {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}

export enum TextSize {
  M = "size_m",
  L = "size_l",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  alighn?: TextAlighn;
  size?: TextSize;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    alighn = TextAlighn.LEFT,
    size = TextSize.M,
  } = props;

  return (
    <div
      className={classNames(cls.Text, {}, [
        className,
        cls[theme],
        cls[alighn],
        cls[size],
      ])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});

Text.displayName = "Text";
