import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileData } from "./getProfileData";
import { ECountry } from "@/entities/Country";
import { ECurrency } from "@/entities/Currency";

describe("getProfileData.test", () => {
  test("should return data", () => {
    const data = {
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
        data: data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
