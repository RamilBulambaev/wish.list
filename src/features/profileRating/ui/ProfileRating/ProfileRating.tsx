import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { RatingCard } from "@/entities/Rating";
import { getUserAuthData } from "@/entities/User";
// eslint-disable-next-line plugin-path-checker-fsd-r/layer-imports
import { getProfileData } from "@/features/editableProfileCard";
import { Skeleton } from "@/shared/ui/Skeleton";

import {
  useGetProfileRating,
  useRateProfile,
} from "../../api/profileRatingApi";

export interface ProfileRatingProps {
  className?: string;
}

const ProfileRating = memo(({ className }: ProfileRatingProps) => {
  const { t } = useTranslation("profile");
  const userData = useSelector(getUserAuthData);
  const profileId = useSelector(getProfileData)?.id;

  const { data, isLoading } = useGetProfileRating({
    userId: userData?.id ?? "",
    profileId: profileId ?? "",
  });

  const [rateProfileMutation] = useRateProfile();

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateProfileMutation({
          userId: userData?.id ?? "",
          profileId: profileId ?? "",
          rate: starsCount,
          feedback,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [rateProfileMutation, userData?.id, profileId]
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount);
    },
    [handleRateArticle]
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle]
  );

  if (isLoading) {
    return <Skeleton width={"100%"} height={120} />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      onCancel={onCancel}
      onAccept={onAccept}
      rate={rating?.rate}
      className={className}
      title={t("Оцените профиль")}
      feedbackTitle={t(
        "Оставьте свой отзыв о профиле, это поможет улучшить качество"
      )}
      hasFeedback
    />
  );
});
ProfileRating.displayName = "ProfileRating";

export default ProfileRating;
