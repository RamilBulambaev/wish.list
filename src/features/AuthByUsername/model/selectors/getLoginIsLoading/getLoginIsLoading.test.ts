import { StateSchema } from "@/app/providers/StoreProvider";

import { getLoginIsLoading } from "./getLoginIsLoading";

describe("getLoginLoading.test", () => {
  test("should return true", () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
