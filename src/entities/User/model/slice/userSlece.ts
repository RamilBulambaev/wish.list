import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
import { setFeatureFlags } from "@/shared/lib/features";

import { initAuthData } from "../services/initAuthData";
import { saveJsonSettings } from "../services/saveJsonSettings";
import { JsonSettings } from "../types/jsonSettings";
import { User, UserSchema } from "../types/user";

const initialState: UserSchema = {
  _inited: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, actions: PayloadAction<User>) => {
      state.authData = actions.payload;
      setFeatureFlags(actions.payload.features);
      localStorage.setItem(USER_LOCALSTORAGE_KEY, actions.payload.id);
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      saveJsonSettings.fulfilled,
      (state, { payload }: PayloadAction<JsonSettings>) => {
        if (state.authData) {
          state.authData.jsonSettings = payload;
        }
      }
    );
    builder.addCase(
      initAuthData.fulfilled,
      (state, { payload }: PayloadAction<User>) => {
        state.authData = payload;
        setFeatureFlags(payload.features);
        state._inited = true;
      }
    );
    builder.addCase(initAuthData.rejected, (state) => {
      state._inited = true;
    });
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
