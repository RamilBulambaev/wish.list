import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { HStack } from "@/shared/ui/Stack";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileReadOnly } from "../../model/selectors/getProfileReadOnly/getProfileReadOnly";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";
import { profileActions } from "../../model/slice/profileSlice";
import { Text } from "@/shared/ui/Text";

interface EditableProfileHeaderProps {
  className?: string;
}

export const EditableProfileHeader = memo(
  ({ className }: EditableProfileHeaderProps) => {
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
      <HStack max justify="between" className={classNames("", {}, [className])}>
        <Text title={t("Профиль")} />
        {canEdit && (
          <>
            {readonly ? (
              <div>
                <Button
                  theme={ButtonTheme.OUTLINE}
                  onClick={onEdit}
                  data-testid={"EditableProfileHeader.EditButton"}
                >
                  {t("Редактировать")}
                </Button>
              </div>
            ) : (
              <HStack gap={"8"}>
                <Button
                  theme={ButtonTheme.OUTLINE_RED}
                  onClick={onCancelEdit}
                  data-testid={"EditableProfileHeader.CalncelButton"}
                >
                  {t("Отменить")}
                </Button>
                <Button
                  theme={ButtonTheme.OUTLINE}
                  onClick={onSave}
                  data-testid={"EditableProfileHeader.SaveButton"}
                >
                  {t("Сохранить")}
                </Button>
              </HStack>
            )}
          </>
        )}
      </HStack>
    );
  }
);
EditableProfileHeader.displayName = "EditableProfileHeader";
