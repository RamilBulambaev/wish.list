import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { IComment } from "../../model/types/comment";
import { Text } from "@/shared/ui/Text/Text";
import { CommentCard } from "../CommentCard/CommentCard";
import { VStack } from "@/shared/ui/Stack";

interface CommentsListProps {
  className?: string;
  comments?: IComment[];
  isLoading?: boolean;
}

export const CommentsList = memo((props: CommentsListProps) => {
  const { t } = useTranslation();
  const { className, comments, isLoading } = props;

  if (isLoading) {
    return (
      <VStack gap="16" max className={classNames("", {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }

  return (
    <VStack gap="16" max className={classNames("", {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            isLoading={isLoading}
            comment={comment}
            key={comment.id}
          />
        ))
      ) : (
        <Text text={t("Комментарии отсутствуют")} />
      )}
    </VStack>
  );
});
CommentsList.displayName = "CommentsList";
