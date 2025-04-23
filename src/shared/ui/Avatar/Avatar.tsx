import { CSSProperties, useMemo } from "react";

import { classNames, Mods } from "@/shared/lib/classNames/classNames";

import cls from "./Avatar.module.scss";
import UserIcon from "../../assets/icons/user-filled.svg";
import { AppImage } from "../AppImage";
import { Icon } from "../Icon";
import { Skeleton } from "../Skeleton";

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
  fallbackInverted?: boolean;
}

export const Avatar = (props: AvatarProps) => {
  const { className, src, alt, size = 100, fallbackInverted } = props;
  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);

  const fallback = <Skeleton width={size} height={size} border={"50%"} />;
  const errorFallback = (
    <Icon
      inverted={fallbackInverted}
      width={size}
      height={size}
      Svg={UserIcon}
    />
  );

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.Avatar, mods, [className])}
    />
  );
};
