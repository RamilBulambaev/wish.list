import { StateSchema } from "@/app/providers/StoreProvider";

import { getLoginUsername } from "./getLoginUsername";

describe("getLoginUsername.test", () => {
  test("should return value", () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: "12345",
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual("12345");
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual("");
  });
});
