import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { ListBox } from "@/shared/ui/Popups";

import { ECountry } from "../../model/types/country";

interface CountrySelectProps {
  className?: string;
  value?: ECountry;
  onChange?: (value: ECountry) => void;
  readonly?: boolean;
}

const options = [
  { value: ECountry.Armenia, content: ECountry.Armenia },
  { value: ECountry.Belarus, content: ECountry.Belarus },
  { value: ECountry.Kazakhstan, content: ECountry.Kazakhstan },
  { value: ECountry.Russia, content: ECountry.Russia },
  { value: ECountry.Ukraine, content: ECountry.Ukraine },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, value, onChange, readonly } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as ECountry);
    },
    [onChange]
  );

  return (
    <ListBox
      onChange={onChangeHandler}
      value={value}
      items={options}
      defaultValue={t("Укажите страну")}
      label={t("Укажите страну")}
      className={classNames("", {}, [className])}
      readonly={readonly}
      direction="top right"
    />
  );
});

CountrySelect.displayName = "CountrySelect";
