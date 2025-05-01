/* eslint-disable i18next/no-literal-string */
import { useTranslation } from "react-i18next";

import { Page } from "@/widgets/Page";

function MainPage() {
  const { t } = useTranslation("main");
  return (
    <Page dataTestId="MainPage">
      <div>Очень главная страница</div>
      {t("Главная страница")}
    </Page>
  );
}

export default MainPage;
