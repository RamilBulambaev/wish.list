import { StoryFn } from "@storybook/react";
// TODO
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
// eslint-disable-next-line plugin-path-checker-fsd-r/public-api-imports
import { loginReducer } from "@/features/AuthByUsername/model/slice/loginSlice";
import { ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
// eslint-disable-next-line plugin-path-checker-fsd-r/public-api-imports
import { articleDetailsReducer } from "@/entities/Article/model/slice/articleDetailsSlice";
// eslint-disable-next-line plugin-path-checker-fsd-r/public-api-imports
import { addCommentFormReducer } from "@/features/addCommentForm/model/slices/addCommentFormSlice";
// eslint-disable-next-line plugin-path-checker-fsd-r/public-api-imports
import { articlesPageReducer } from "@/pages/ArticlesPage/model/slices/articlesPageSlice";
// eslint-disable-next-line plugin-path-checker-fsd-r/public-api-imports
import { articleDetailsPageReducer } from "@/pages/ArticleDetailsPage/model/slices";
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
