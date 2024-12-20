import { IArticleDetailsSchema } from "@/entities/Article";
import { CounterSchema } from "@/entities/Counter";
import { IProfileSchema } from "@/entities/Profile";
import { UserSchema } from "@/entities/User";
import { IAddCommentFormSchema } from "@/features/addCommentForm";
import { LoginSchema } from "@/features/AuthByUsername";
import { IArticleDetailsCommentsSchema } from "@/pages/ArticleDetailsPage";
import {
  EnhancedStore,
  Reducer,
  ReducersMapObject,
  UnknownAction,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { NavigateFunction } from "react-router-dom";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  //Асинхронные редюсеры
  login?: LoginSchema;
  profile?: IProfileSchema;
  ArticleDetails?: IArticleDetailsSchema;
  articleDetailsComments?: IArticleDetailsCommentsSchema;
  addCommentForm?: IAddCommentFormSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: UnknownAction) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface IThunkExtraArg {
  api: AxiosInstance;
  navigate?: NavigateFunction;
}

export interface IThunkConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArg;
  state: StateSchema;
}
