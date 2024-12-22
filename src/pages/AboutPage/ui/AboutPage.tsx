import { Page } from "@/shared/ui/Page/Page";
import { useTranslation } from "react-i18next";

function AboutPage() {
  const { t } = useTranslation("about");
  return <Page>{t("О сайте")}</Page>;
}

export default AboutPage;
