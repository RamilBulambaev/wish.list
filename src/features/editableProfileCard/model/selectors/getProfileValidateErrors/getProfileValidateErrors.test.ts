import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileValidateErrors } from "./getProfileValidateErrors";
import { EValidateProfileError } from "../../types/editableProfileCardSchema";

describe("getProfileValidateErrors.test", () => {
  test("should return validateErrors", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [
          EValidateProfileError.INCORRECT_AGE,
          EValidateProfileError.INCORRECT_COUNTRY,
        ],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      EValidateProfileError.INCORRECT_AGE,
      EValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toBe(undefined);
  });
});
