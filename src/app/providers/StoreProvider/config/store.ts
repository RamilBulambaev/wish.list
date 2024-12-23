import { loginReducer } from "@/features/AuthByUsername/model/slice/loginSlice";
import {
  configureStore,
  ReducersMapObject,
  ThunkMiddleware,
} from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "@/entities/Counter";
import { userReducer } from "@/entities/User";
import { createReducerManager } from "./reducerManager";
import { $api } from "@/shared/api/api";
import { NavigateFunction } from "react-router-dom";

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    //@ts-ignore
    reducer: reducerManager.reduce as ReducersMapObject<StateSchema>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
          },
        },
      }),
  });
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

// Создаём глобальный объект store для использования в приложении
export const store = createReduxStore();

// Экспортируем типы для `RootState` и `AppDispatch`
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
