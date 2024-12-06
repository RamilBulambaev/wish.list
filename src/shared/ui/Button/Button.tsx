import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes } from "react";

export enum ButtonTheme {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button = ({
  className,
  children,
  theme,
  square,
  size = ButtonSize.M,
  ...otherProps
}: ButtonProps) => {
  const mods = {
    [cls.square]: square,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [
        className,
        cls[theme],
        cls[size],
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
