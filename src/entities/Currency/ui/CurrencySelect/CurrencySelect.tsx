import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { ECurrency } from "../../model/types/currency";
import { memo, useCallback } from "react";
import { ListBox } from "@/shared/ui/Popups";

interface CurrencySelectProps {
  className?: string;
  value?: ECurrency;
  onChange?: (value: ECurrency) => void;
  readonly?: boolean;
}

const options = [
  { value: ECurrency.RUB, content: ECurrency.RUB },
  { value: ECurrency.USD, content: ECurrency.USD },
  { value: ECurrency.EUR, content: ECurrency.EUR },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { className, value, onChange, readonly } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as ECurrency);
    },
    [onChange]
  );

  return (
    <ListBox
      onChange={onChangeHandler}
      value={value}
      items={options}
      defaultValue={t("Укажите валюту")}
      label={t("Укажите валюту")}
      className={classNames("", {}, [className])}
      readonly={readonly}
      direction="top right"
    />
  );
});

CurrencySelect.displayName = "CurrencySelect";
