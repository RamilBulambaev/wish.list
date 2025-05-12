import { StoryFn } from "@storybook/react/*";

import { setFeatureFlags } from "@/shared/lib/features";
import { FeatureFlags } from "@/shared/types/featureFlags";

/**
 * Декоратор, который устанавливает флаги фич для Storybook.
 * Используется перед StoreDecorator, чтобы флаги были доступны вовремя.
 */
export const FeatureFlagsDecorator = (featureFlags: FeatureFlags) => {
  const decorator = (StoryComponent: StoryFn) => {
    setFeatureFlags(featureFlags);
    return <StoryComponent />;
  };

  return decorator;
};
