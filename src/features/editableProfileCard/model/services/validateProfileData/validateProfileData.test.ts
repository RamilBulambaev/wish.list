import axios from "axios";
import { ECountry } from "@/entities/Country";
import { ECurrency } from "@/entities/Currency";
import { validateProfileData } from "./validateProfileData";
import { EValidateProfileError } from "../../types/editableProfileCardSchema";

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

describe("validateProfileData.test", () => {
  test("success", () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test("width first and last name", () => {
    const result = validateProfileData({ ...data, first: "", lastname: "" });

    expect(result).toEqual([EValidateProfileError.INCORRECT_USER_DATA]);
  });

  test("incorrect age", () => {
    const result = validateProfileData({ ...data, age: 0 });

    expect(result).toEqual([EValidateProfileError.INCORRECT_AGE]);
  });

  test("incorrect country", () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([EValidateProfileError.INCORRECT_COUNTRY]);
  });

  test("incorrect country, age, firstname, lastname", () => {
    const result = validateProfileData({
      ...data,
      lastname: "",
      first: "",
      age: 0,
      country: undefined,
    });

    expect(result).toEqual([
      EValidateProfileError.INCORRECT_USER_DATA,
      EValidateProfileError.INCORRECT_AGE,
      EValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
