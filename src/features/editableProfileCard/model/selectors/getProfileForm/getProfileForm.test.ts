import { StateSchema } from "@/app/providers/StoreProvider";
import { ECountry } from "@/entities/Country";
import { ECurrency } from "@/entities/Currency";

import { getProfileForm } from "./getProfileForm";

describe("getProfileForm.test", () => {
  test("should return form", () => {
    const form = {
      username: "Ramil",
      first: "Ramil",
      lastname: "Bulambaev",
      age: 28,
      city: "Omsk",
      country: ECountry.Russia,
      currency: ECurrency.RUB,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: form,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
