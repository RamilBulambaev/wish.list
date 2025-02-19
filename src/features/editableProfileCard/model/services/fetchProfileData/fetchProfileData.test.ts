import axios from "axios";

import { ECountry } from "@/entities/Country";
import { ECurrency } from "@/entities/Currency";
import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

import { fetchProfileData } from "./fetchProfileData";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, { shallow: false });

const data = {
  username: "Ramil",
  first: "Ramil",
  lastname: "Bulambaev",
  age: 28,
  city: "Omsk",
  country: ECountry.Russia,
  currency: ECurrency.RUB,
};

describe("fetchProfileData.test", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: data }));
    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("error loading", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk("1");

    expect(result.meta.requestStatus).toBe("rejected");
  });
});
