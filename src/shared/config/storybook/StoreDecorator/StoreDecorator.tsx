import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { loginReducer } from "@/features/AuthByUsername/model/slice/loginSlice";
import { profileReducer } from "@/entities/Profile";
import { ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "@/entities/Article/model/slice/articleDetailsSlice";

const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer,
  ArticleDetails: articleDetailsReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList
) => {
  const decorator = (StoryComponent: StoryFn) => (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <StoryComponent />
    </StoreProvider>
  );

  decorator.displayName = "StoreDecorator";

  return decorator;
};
