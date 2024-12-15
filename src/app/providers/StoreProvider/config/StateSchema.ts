import { CounterSchema } from "@/entities/Counter";
import { IProfileSchema } from "@/entities/Profile";
import { UserSchema } from "@/entities/User";
import { LoginSchema } from "@/features/AuthByUsername";
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
