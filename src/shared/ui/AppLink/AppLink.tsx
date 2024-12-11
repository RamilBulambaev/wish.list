import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { memo } from "react";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  RED = "red",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink = memo(
  ({
    className,
    theme = AppLinkTheme.PRIMARY,
    children,
    to,
    ...otherProps
  }: AppLinkProps) => {
    return (
      <Link
        to={to}
        className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }
);

AppLink.displayName = "AppLink";
