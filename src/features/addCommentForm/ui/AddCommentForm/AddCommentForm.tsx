import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { classNames } from "@/shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { HStack } from "@/shared/ui/Stack";

import cls from "./AddCommentForm.module.scss";
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from "../../model/selectors/addCommentFormSelectors";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "../../model/slices/addCommentFormSlice";

interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(
  ({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
      (value: string) => {
        dispatch(addCommentFormActions.setText(value));
      },
      [dispatch]
    );

    const onSendHandler = useCallback(() => {
      onSendComment(text || "");
      onCommentTextChange("");
    }, [onSendComment, onCommentTextChange, text]);

    return (
      <DynamicModuleLoader reducers={reducers}>
        <HStack
          justify="between"
          max
          className={classNames(cls.AddCommentForm, {}, [className])}
          data-testid={"AddCommentForm"}
        >
          <Input
            data-testid={"AddCommentForm.Input"}
            className={cls.input}
            placeholder={t("Введите текст комментария")}
            value={text}
            onChange={onCommentTextChange}
          />
          <Button data-testid={"AddCommentForm.Button"} onClick={onSendHandler}>
            {t("Отправить")}
          </Button>
        </HStack>
      </DynamicModuleLoader>
    );
  }
);
AddCommentForm.displayName = "AddCommentForm";

export default AddCommentForm;
