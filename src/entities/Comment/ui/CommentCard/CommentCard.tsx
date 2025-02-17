import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./CommentCard.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { IComment } from "../../model/types/comment";
import { Avatar } from "@/shared/ui/Avatar";
import { Text } from "@/shared/ui/Text";
import { Skeleton } from "@/shared/ui/Skeleton";
import { AppLink } from "@/shared/ui/AppLink";
import { RoutePath } from "@/shared/const/router";
import { VStack } from "@/shared/ui/Stack";

interface CommentCardProps {
  className?: string;
  comment?: IComment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack
        gap={"8"}
        max
        className={classNames(cls.CommentCard, {}, [className, cls.loading])}
      >
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={16} className={cls.username} />
        </div>
        <Skeleton width={"100%"} height={50} className={cls.text} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack
      max
      gap="8"
      className={classNames(cls.CommentCard, {}, [className])}
    >
      <AppLink
        to={`${RoutePath.profile}${comment.user.id}`}
        className={cls.header}
      >
        {comment.user.avatar ? (
          <Avatar size={30} src={comment.user.avatar} />
        ) : null}
        <Text className={cls.username} title={comment.user.username} />
      </AppLink>
      <Text text={comment.text} className={cls.text} />
    </VStack>
  );
});
CommentCard.displayName = "CommentCard";
