import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Select } from "@/shared/ui/Select/Select";
import { ECurrency } from "../../model/types/currency";
import { memo, useCallback } from "react";

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
    <Select
      className={classNames("", {}, [className])}
      label={t("Укажите валюту")}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});

CurrencySelect.displayName = "CurrencySelect";
