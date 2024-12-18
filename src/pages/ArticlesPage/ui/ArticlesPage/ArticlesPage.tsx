import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticlesPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation("articles");

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      Articles Page
    </div>
  );
};

export default memo(ArticlesPage);
