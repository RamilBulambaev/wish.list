import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "@/app/providers/StoreProvider";

import { setJsonSettingsMutation } from "../../api/userApi";
import { getUserAuthData } from "../selector/getUserAuthData/getUserAuthData";
import { getJsonSettings } from "../selector/jsonSettings";
import { JsonSettings } from "../types/jsonSettings";

export const saveJsonSettings = createAsyncThunk<
  JsonSettings,
  JsonSettings,
  IThunkConfig<string>
>("user/saveJsonSettings", async (newJsonSettings, thunkApi) => {
  const { rejectWithValue, getState, dispatch } = thunkApi;
  const userData = getUserAuthData(getState());
  const currentSettings = getJsonSettings(getState());

  if (!userData) {
    return rejectWithValue("");
  }

  try {
    const response = await dispatch(
      setJsonSettingsMutation({
        userId: userData.id,
        jsonSettings: {
          ...currentSettings,
          ...newJsonSettings,
        },
      })
    ).unwrap();

    if (!response.jsonSettings) {
      return rejectWithValue("");
    }

    return response.jsonSettings;
  } catch (error) {
    console.log(error);
    return rejectWithValue("");
  }
});
