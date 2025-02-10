import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./AvatarDropdown.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useEffect } from "react";
import { Dropdown } from "@/shared/ui/Popups";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { RoutePath } from "@/shared/const/router";
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const authData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAviable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      className={classNames(cls.AvatarDropdown, {}, [className])}
      items={[
        ...(isAdminPanelAviable
          ? [{ content: t("Админка"), href: RoutePath.admin_panel }]
          : []),
        { content: t("Профиль"), href: RoutePath.profile + authData.id },
        { content: t("Выйти"), onClick: onLogout },
      ]}
      trigger={<Avatar src={authData.avatar} size={40} />}
      direction="bottom left"
    />
  );
});
AvatarDropdown.displayName = "AvatarDropdown";
