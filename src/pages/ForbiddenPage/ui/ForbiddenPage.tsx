import { Page } from "@/widgets/Page/Page";
import { useTranslation } from "react-i18next";

function ForbiddenPage() {
  const { t } = useTranslation("forbidden");
  return <Page>{t("У вас нет доступа к этой странице")}</Page>;
}

export default ForbiddenPage;
