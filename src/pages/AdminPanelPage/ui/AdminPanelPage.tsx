import { useTranslation } from "react-i18next";

import { Page } from "@/widgets/Page";

function AdminPanelPage() {
  const { t } = useTranslation("admin");
  return <Page dataTestId="AdminPanelPage">{t("Админ панель")}</Page>;
}

export default AdminPanelPage;
