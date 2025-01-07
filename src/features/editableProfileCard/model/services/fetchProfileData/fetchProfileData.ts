import { IThunkConfig } from "@/app/providers/StoreProvider";
import { IProfile } from "@/entities/Profile";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProfileData = createAsyncThunk<
  IProfile,
  string,
  IThunkConfig<string>
>("profile/fetchProfileData", async (profileId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;
  try {
    const response = await extra.api.get<IProfile>(`/profile/${profileId}`);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue("error");
  }
});
