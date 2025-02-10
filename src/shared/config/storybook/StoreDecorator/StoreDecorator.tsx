import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { loginReducer } from "@/features/AuthByUsername/testing";
import { ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "@/entities/Article/testing";
import { addCommentFormReducer } from "@/features/addCommentForm/testing";
import { articlesPageReducer } from "@/pages/ArticlesPage/testing";
import { articleDetailsPageReducer } from "@/pages/ArticleDetailsPage/testing";
import { profileReducer } from "@/features/editableProfileCard";

const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer,
  ArticleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articlesPage: articlesPageReducer,
  articleDetailsPage: articleDetailsPageReducer,
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
