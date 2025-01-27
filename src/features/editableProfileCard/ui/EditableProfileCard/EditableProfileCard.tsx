import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useEffect } from "react";
import { ECountry } from "@/entities/Country";
import { ECurrency } from "@/entities/Currency";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useSelector } from "react-redux";
import { Text, TextTheme } from "@/shared/ui/Text/Text";
import { getProfileValidateErrors } from "../../model/selectors/getProfileValidateErrors/getProfileValidateErrors";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileReadOnly } from "../../model/selectors/getProfileReadOnly/getProfileReadOnly";
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData";
import { EValidateProfileError } from "../../model/consts/consts";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { profileActions, profileReducer } from "../../model/slice/profileSlice";
import { ProfileCard } from "@/entities/Profile";
import { EditableProfileHeader } from "../EditableProfileHeader/EditableProfileHeader";
import { VStack } from "@/shared/ui/Stack";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface EditableProfileCardProps {
  className?: string;
  id?: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props;
  const { t } = useTranslation("profile");
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadOnly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslates = {
    [EValidateProfileError.SERVER_ERROR]: t("Серверная ошибка при сохранении"),
    [EValidateProfileError.INCORRECT_AGE]: t("Некорректный возраст"),
    [EValidateProfileError.INCORRECT_COUNTRY]: t("Некорректный регион"),
    [EValidateProfileError.INCORRECT_USER_DATA]: t("Имя и фамилия обязательны"),
    [EValidateProfileError.NO_DATA]: t("Данные не указаны"),
  };

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ first: value || "" }));
    },
    [dispatch]
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || "" }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value: string) => {
      if (value === "") {
        dispatch(profileActions.updateProfile({ age: 0 }));
        return;
      }

      const isNumeric = /^[0-9]+$/.test(value);
      if (isNumeric) {
        dispatch(profileActions.updateProfile({ age: Number(value) }));
      }
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || "" }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || "" }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || "" }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (currency?: ECurrency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (country?: ECountry) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack max gap="8" className={classNames("", {}, [className])}>
        <EditableProfileHeader />
        {validateErrors?.length &&
          validateErrors.map((err) => (
            <Text
              text={validateErrorTranslates[err]}
              key={err}
              theme={TextTheme.ERROR}
              data-testid={"EditableProfileCard.Error"}
            />
          ))}
        <ProfileCard
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
        />
      </VStack>
    </DynamicModuleLoader>
  );
});
EditableProfileCard.displayName = "EditableProfileCard";
