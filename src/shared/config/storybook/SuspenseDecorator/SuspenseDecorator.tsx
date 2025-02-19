import { StoryFn } from "@storybook/react";
import { Suspense } from "react";

import { Loader } from "@/shared/ui/Loader";

export const SuspenseDecorator = (StoryComponent: StoryFn) => {
  return (
    <Suspense fallback={<Loader />}>
      <StoryComponent />
    </Suspense>
  );
};
