import { memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";
import { Drawer } from "@/shared/ui/Drawer";
import { Input } from "@/shared/ui/Input";
import { Modal } from "@/shared/ui/Modal";
import { HStack, VStack } from "@/shared/ui/Stack";
import { StarRating } from "@/shared/ui/StarRating";
import { Text } from "@/shared/ui/Text";

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onAccept,
    onCancel,
    rate = 0,
  } = props;
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
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
        data-testid={"RatingCard.Input"}
        value={feedback}
        onChange={setFeedback}
        placeholder={t("Ваш отзыв")}
      />
    </>
  );

  return (
    <Card
      className={classNames("", {}, [className])}
      max
      data-testid={"RatingCard"}
    >
      <VStack align="center" gap="8" max>
        <Text title={starsCount ? t("Спасибо за оценку") : title} />
        <StarRating
          selectedStars={starsCount}
          size={40}
          onSelect={onSelectStars}
        />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap="32">
            {modalContent}
            <HStack max gap="16" justify="end">
              <Button
                data-testid={"RatingCard.Close"}
                onClick={cancelHandler}
                theme={ButtonTheme.OUTLINE_RED}
              >
                {t("Закрыть")}
              </Button>
              <Button data-testid={"RatingCard.Send"} onClick={acceptHandler}>
                {t("Отправить")}
              </Button>
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
