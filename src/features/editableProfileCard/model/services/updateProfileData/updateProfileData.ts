import { createAsyncThunk } from "@reduxjs/toolkit";

import { IThunkConfig } from "@/app/providers/StoreProvider";
import { IProfile } from "@/entities/Profile";

import { EValidateProfileError } from "../../consts/consts";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { validateProfileData } from "../validateProfileData/validateProfileData";


export const updateProfileData = createAsyncThunk<
  IProfile,
  void,
  IThunkConfig<EValidateProfileError[]>
>("profile/updateProfileData", async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  const formData = getProfileForm(getState());

  const errors = validateProfileData(formData);

  if (errors.length) {
    return rejectWithValue(errors);
  }

  try {
    const response = await extra.api.put<IProfile>(
      `/profile/${formData?.id}`,
      formData
    );

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue([EValidateProfileError.SERVER_ERROR]);
  }
});
