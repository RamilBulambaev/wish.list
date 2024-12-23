import { Page } from "@/widgets/Page/Page";
import { useTranslation } from "react-i18next";

function MainPage() {
  const { t } = useTranslation("main");
  return <Page>{t("Главная страница")}</Page>;
}

export default MainPage;
