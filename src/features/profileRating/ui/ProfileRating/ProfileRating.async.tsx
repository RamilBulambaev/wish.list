import { lazy, Suspense } from "react";

import { Skeleton } from "@/shared/ui/Skeleton";

import { ProfileRatingProps } from "./ProfileRating";

export const ProfileRatingLazy = lazy(() => import("./ProfileRating"));

export const ProfileRatingAsync = (props: ProfileRatingProps) => {

  return (
    <Suspense fallback={<Skeleton width={"100%"} height={120} />}>
      <ProfileRatingLazy {...props} />
    </Suspense>
  );
};
