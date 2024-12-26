import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import cls from "./Select.module.scss";
import { ChangeEvent, memo, useMemo } from "react";

export interface SelectOptions<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOptions<T>[];
  value?: T;
  readonly?: boolean;
  onChange?: (value: T) => void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, label, options, value, readonly, onChange } = props;
  const mods: Mods = {};

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  const optionsList = useMemo(() => {
    return options?.map((opt) => (
      <option key={opt.value} className={cls.option} value={opt.value}>
        {opt.content}
      </option>
    ));
  }, [options]);

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <select
        disabled={readonly}
        value={value}
        onChange={onChangeHandler}
        className={cls.select}
      >
        {optionsList}
      </select>
    </div>
  );
};
