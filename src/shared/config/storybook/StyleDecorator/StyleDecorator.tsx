import { StoryFn } from "@storybook/react";
// eslint-disable-next-line plugin-path-checker-fsd-r/layer-imports
import "@/app/styles/index.scss";

export const StyleDecorator = (StoryComponent: StoryFn) => {
  return <StoryComponent />;
};
