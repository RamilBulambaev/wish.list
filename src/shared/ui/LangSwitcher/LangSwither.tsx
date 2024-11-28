import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "../Button/Button";

interface LangSwitherProps {
  className?: string;
}

export const LangSwither = ({ className }: LangSwitherProps) => {
  const { t, i18n } = useTranslation();

  const onTranslate = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={onTranslate}
      className={classNames("", {}, [className])}
    >
      {t("Язык")}
    </Button>
  );
};
