import { memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useStore } from "react-redux";
import cls from "./LoginForm.module.scss";
import { useAppDispatch } from "@/shared/lib/store/useAppDispatch/useAppDispatch";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUserName } from "../../model/services/loginByUserName/loginByUserName";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text, TextTheme } from "@/shared/ui/Text/Text";
import { Input } from "@/shared/ui/Input/Input";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { ReduxStoreWithManager } from "@/app/providers/StoreProvider";
import { getLoginUsername } from "../../model/selectors/getLoginUsernames/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  login: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  // const { username, password, error, isLoading } = useSelector(getLoginState);
  const username = useSelector(getLoginUsername);
  console.log(username);

  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUserName({ username, password }));
  }, [dispatch, username, password]);

  return (
    <DynamicModuleLoader removeAfterUnmount={true} reducers={initialReducers}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t("Форма авторизации")} />
        {error && (
          <Text
            text={t("Вы ввели неверный логин или пароль")}
            theme={TextTheme.ERROR}
          />
        )}
        <Input
          type="text"
          className={cls.input}
          placeholder={t("Введите username")}
          autofocus
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          type="text"
          className={cls.input}
          placeholder={t("Введите пароль")}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          className={cls.loginBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t("Войти")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

LoginForm.displayName = "LoginForm";

export default LoginForm;
