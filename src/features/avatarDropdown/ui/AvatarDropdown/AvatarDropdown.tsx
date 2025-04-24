import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from "@/entities/User";
import { getRouteAdmin, getRouteProfile } from "@/shared/const/router";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Avatar } from "@/shared/ui/Avatar";
import { Dropdown } from "@/shared/ui/Popups";

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
      className={className}
      items={[
        ...(isAdminPanelAviable
          ? [{ content: t("Админка"), href: getRouteAdmin() }]
          : []),
        { content: t("Профиль"), href: getRouteProfile(authData.id) },
        { content: t("Выйти"), onClick: onLogout },
      ]}
      trigger={<Avatar fallbackInverted src={authData.avatar} size={40} />}
      direction="bottom left"
    />
  );
});
AvatarDropdown.displayName = "AvatarDropdown";
