import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ProfilePageHeader.module.scss";
import { useTranslation } from "react-i18next";
import { Text } from "@/shared/ui/Text/Text";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { useSelector } from "react-redux";
import {
  getProfileData,
  getProfileReadOnly,
  profileActions,
  updateProfileData,
} from "@/entities/Profile";
import { useCallback } from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserAuthData } from "@/entities/User";

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation("profile");
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const readonly = useSelector(getProfileReadOnly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t("Профиль")} />
      {canEdit && (
        <div className={cls.btnsWrapper}>
          {readonly ? (
            <div className={cls.buttonWrapper}>
              <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.editBtn}
                onClick={onEdit}
              >
                {t("Редактировать")}
              </Button>
            </div>
          ) : (
            <div className={cls.buttonWrapper}>
              <Button
                theme={ButtonTheme.OUTLINE_RED}
                className={cls.editBtn}
                onClick={onCancelEdit}
              >
                {t("Отменить")}
              </Button>
              <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.editBtn}
                onClick={onSave}
              >
                {t("Сохранить")}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
