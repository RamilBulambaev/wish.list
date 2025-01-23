import { Loader } from "@/shared/ui/Loader/Loader";
import { StoryFn } from "@storybook/react";
import { Suspense } from "react";

export const SuspenseDecorator = (StoryComponent: StoryFn) => {
  return (
    <Suspense fallback={<Loader />}>
      <StoryComponent />
    </Suspense>
  );
};
