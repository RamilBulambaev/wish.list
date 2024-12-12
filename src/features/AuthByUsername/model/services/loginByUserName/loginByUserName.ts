import { IThunkConfig } from "@/app/providers/StoreProvider";
import { User, userActions } from "@/entities/User";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface loginByUserNameProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<
  User,
  loginByUserNameProps,
  IThunkConfig<string>
>("login/loginByUserName", async (authData, thunkApi) => {
  const { dispatch, extra, rejectWithValue } = thunkApi;
  try {
    const response = await extra.api.post<User>("/login", authData);

    if (!response.data) {
      throw new Error();
    }
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    dispatch(userActions.setAuthData(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue("error");
  }
});
