import { useTranslation } from "react-i18next";

function MainPage() {
  const { t, i18n } = useTranslation("main");
  return <div>{t("Главная страница")}</div>;
}

export default MainPage;
