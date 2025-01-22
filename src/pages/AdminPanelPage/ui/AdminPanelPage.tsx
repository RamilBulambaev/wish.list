import { Page } from "@/widgets/Page/Page";
import { useTranslation } from "react-i18next";

function AdminPanelPage() {
  const { t } = useTranslation("admin");
  return <Page>{t("Админ панель")}</Page>;
}

export default AdminPanelPage;
