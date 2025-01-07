import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Text, TextSize } from "@/shared/ui/Text/Text";
import { AddCommentForm } from "@/features/addCommentForm";
import { CommentsList } from "@/entities/Comment";
import { useSelector } from "react-redux";
import { getArticleComments } from "../../model/slices/articleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { VStack } from "@/shared/ui/Stack";

interface ArticleDetailsCommentsProps {
  className?: string;
  id: string;
}

export const ArticleDetailsComments = memo(
  ({ className, id }: ArticleDetailsCommentsProps) => {
    const { t } = useTranslation("article-details");
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();

    const onSendComment = useCallback(
      (text: string) => {
        dispatch(addCommentForArticle(text));
      },
      [dispatch]
    );

    useInitialEffect(() => {
      dispatch(fetchCommentsByArticleId(id));
    });

    return (
      <VStack gap="8" max className={classNames("", {}, [className])}>
        <Text size={TextSize.L} title={t("Комментарии")} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentsList comments={comments} isLoading={commentsIsLoading} />
      </VStack>
    );
  }
);
ArticleDetailsComments.displayName = "ArticleDetailsComments";
