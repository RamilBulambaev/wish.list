import { createReduxStore, AppDispatch, RootState } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";
import type {
  StateSchema,
  ReduxStoreWithManager,
  IThunkExtraArg,
  IThunkConfig,
} from "./config/StateSchema";

export { StoreProvider, createReduxStore };

export type {
  StateSchema,
  ReduxStoreWithManager,
  AppDispatch,
  RootState,
  IThunkExtraArg,
  IThunkConfig,
};
