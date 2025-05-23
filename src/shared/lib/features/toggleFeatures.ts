import { FeatureFlags } from "@/shared/types/featureFlags";

import { getFeatureFlags } from "./setGetFeatures";

interface ToggleFeaturesOptions<T> {
  name: keyof FeatureFlags;
  on: () => T;
  off: () => T;
}

export function toggleFeatures<T>({
  off,
  on,
  name,
}: ToggleFeaturesOptions<T>): T {
  if (getFeatureFlags(name)) {
    return on();
  }

  return off();
}
