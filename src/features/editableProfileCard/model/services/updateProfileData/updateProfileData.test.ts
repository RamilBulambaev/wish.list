import axios from "axios";
import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { ECountry } from "@/entities/Country";
import { ECurrency } from "@/entities/Currency";
import { updateProfileData } from "./updateProfileData";
import { EValidateProfileError } from "../../consts/consts";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, { shallow: false });

const data = {
  id: "1",
  username: "Ramil",
  first: "Ramil",
  lastname: "Bulambaev",
  age: 28,
  city: "Omsk",
  country: ECountry.Russia,
  currency: ECurrency.RUB,
};

describe("updateProfileData.test", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data: data }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("error ", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([EValidateProfileError.SERVER_ERROR]);
  });

  test("validate error ", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, first: "" },
      },
    });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([EValidateProfileError.INCORRECT_USER_DATA]);
  });
});
