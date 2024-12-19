import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./CommentsList.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { IComment } from "../../model/types/comment";
import { Text } from "@/shared/ui/Text/Text";
import { CommentCard } from "../CommentCard/CommentCard";

interface CommentsListProps {
  className?: string;
  comments?: IComment[];
  isLoading?: boolean;
}

export const CommentsList = memo((props: CommentsListProps) => {
  const { t } = useTranslation();
  const { className, comments, isLoading } = props;

  return (
    <div className={classNames(cls.CommentsList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            isLoading={isLoading}
            comment={comment}
            key={comment.id}
            className={cls.comment}
          />
        ))
      ) : (
        <Text text={t("Комментарии отсутствуют")} />
      )}
    </div>
  );
});
CommentsList.displayName = "CommentsList";
