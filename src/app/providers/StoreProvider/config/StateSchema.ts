import { IArticleDetailsSchema } from "@/entities/Article";
import { CounterSchema } from "@/entities/Counter";
import { IProfileSchema } from "@/entities/Profile";
import { UserSchema } from "@/entities/User";
import { IAddCommentFormSchema } from "@/features/addCommentForm";
import { LoginSchema } from "@/features/AuthByUsername";
import { UISchema } from "@/features/UI";
import { IArticleDetailsCommentsSchema } from "@/pages/ArticleDetailsPage";
import { IArticlesPageSchema } from "@/pages/ArticlesPage";
import {
  EnhancedStore,
  Reducer,
  ReducersMapObject,
  UnknownAction,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  ui: UISchema;

  //Асинхронные редюсеры
  login?: LoginSchema;
  profile?: IProfileSchema;
  ArticleDetails?: IArticleDetailsSchema;
  articleDetailsComments?: IArticleDetailsCommentsSchema;
  addCommentForm?: IAddCommentFormSchema;
  articlesPage?: IArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: UnknownAction) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface IThunkExtraArg {
  api: AxiosInstance;
}

export interface IThunkConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArg;
  state: StateSchema;
}
