import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./RatingCard.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import { Card } from "@/shared/ui/Card/Card";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text/Text";
import { StarRating } from "@/shared/ui/StarRating/StarRating";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Input } from "@/shared/ui/Input/Input";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button/Button";
import { BrowserView, MobileView } from "react-device-detect";
import { Drawer } from "@/shared/ui/Drawer/Drawer";

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const { className, title, feedbackTitle, hasFeedback, onAccept, onCancel } =
    props;
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(0);
  const [feedback, setFeedback] = useState("");

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept]
  );

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [starsCount, feedback, onAccept]);

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [starsCount, onCancel]);

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input
        value={feedback}
        onChange={setFeedback}
        placeholder={t("Ваш отзыв")}
      />
    </>
  );

  return (
    <Card className={classNames(cls.RatingCard, {}, [className])}>
      <VStack align="center" gap="8">
        <Text title={title} />
        <StarRating size={40} onSelect={onSelectStars} />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap="32">
            {modalContent}
            <HStack max gap="16" justify="end">
              <Button onClick={cancelHandler} theme={ButtonTheme.OUTLINE_RED}>
                {t("Закрыть")}
              </Button>
              <Button onClick={acceptHandler}>{t("Отправить")}</Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <VStack gap="32">
          <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
            {modalContent}
            <Button fullWidth onClick={acceptHandler} size={ButtonSize.L}>
              {t("Отправить")}
            </Button>
          </Drawer>
        </VStack>
      </MobileView>
    </Card>
  );
});
RatingCard.displayName = "RatingCard";
