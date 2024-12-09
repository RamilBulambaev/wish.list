import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "../Button/Button";

interface LangSwitherProps {
  className?: string;
  short?: boolean;
}

export const LangSwither = ({ className, short }: LangSwitherProps) => {
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
};
