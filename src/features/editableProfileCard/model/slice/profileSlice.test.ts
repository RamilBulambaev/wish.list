import { UnknownAction } from "@reduxjs/toolkit";

import { ECountry } from "@/entities/Country";
import { ECurrency } from "@/entities/Currency";

import { profileActions, profileReducer } from "./profileSlice";
import { EValidateProfileError } from "../consts/consts";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import { IProfileSchema } from "../types/editableProfileCardSchema";


const data = {
  username: "Ramil",
  first: "Ramil",
  lastname: "Bulambaev",
  age: 28,
  city: "Omsk",
  country: ECountry.Russia,
  currency: ECurrency.RUB,
};

describe("profileSlice.test", () => {
  test("test set readonly", () => {
    const state: DeepPartial<IProfileSchema> = { readonly: false };
    expect(
      profileReducer(state as IProfileSchema, profileActions.setReadonly(true))
    ).toEqual({ readonly: true });
  });

  test("test cancelEdit", () => {
    const state: DeepPartial<IProfileSchema> = {
      readonly: false,
      validateErrors: [EValidateProfileError.INCORRECT_AGE],
      form: {
        ...data,
        age: 0,
      },
    };
    expect(
      profileReducer(state as IProfileSchema, profileActions.cancelEdit())
    ).toEqual({ readonly: true, validateErrors: undefined, form: undefined });
  });

  test("test updateProfile", () => {
    const state: DeepPartial<IProfileSchema> = {
      form: data,
    };
    expect(
      profileReducer(
        state as IProfileSchema,
        profileActions.updateProfile({ age: 22 })
      )
    ).toEqual({
      form: {
        ...data,
        age: 22,
      },
    });
  });

  test("test updateProfile service pending", () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: false,
      validateErrors: [EValidateProfileError.SERVER_ERROR],
    };

    const action: UnknownAction = updateProfileData.pending(
      "requestId",
      undefined
    );

    expect(profileReducer(state as IProfileSchema, action)).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test("test updateProfile service fullfield", () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: true,
    };

    const action: UnknownAction = updateProfileData.fulfilled(data, "");

    expect(profileReducer(state as IProfileSchema, action)).toEqual({
      isLoading: false,
      data: data,
      form: data,
      readonly: true,
      validateErrors: undefined,
    });
  });
});
