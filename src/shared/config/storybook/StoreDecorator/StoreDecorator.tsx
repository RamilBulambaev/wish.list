import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";

export const StoreDecorator = (state: DeepPartial<StateSchema>) => {
  const decorator = (StoryComponent: StoryFn) => (
    <StoreProvider initialState={state}>
      <StoryComponent />
    </StoreProvider>
  );

  decorator.displayName = "StoreDecorator";

  return decorator;
};
