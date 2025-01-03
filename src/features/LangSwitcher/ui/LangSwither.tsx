import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";

interface LangSwitherProps {
  className?: string;
  short?: boolean;
}

export const LangSwither = memo(({ className, short }: LangSwitherProps) => {
  const { t, i18n } = useTranslation();

  const onTranslate = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={onTranslate}
      className={classNames("", {}, [className])}
    >
      {t(short ? "Короткий язык" : "Язык")}
    </Button>
  );
});

LangSwither.displayName = "LangSwither";
