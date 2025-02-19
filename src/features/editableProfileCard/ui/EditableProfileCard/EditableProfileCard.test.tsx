import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ECountry } from "@/entities/Country";
import { ECurrency } from "@/entities/Currency";
import { IProfile } from "@/entities/Profile";
import { $api } from "@/shared/api/api";
import { componentRender } from "@/shared/lib/tests/componentRender/componentRender";

import { EditableProfileCard } from "./EditableProfileCard";
import { profileReducer } from "../../model/slice/profileSlice";



const profile: IProfile = {
  id: "1",
  first: "admin",
  lastname: "admin",
  age: 465,
  currency: ECurrency.USD,
  country: ECountry.Kazakhstan,
  city: "Moscow",
  username: "admin123",
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: { id: "1", username: "admin" },
    },
  },
  asyncReducers: { profile: profileReducer },
};

describe("features/editableProfileCard", () => {
  test("Режим рид онли должен переключится", async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileHeader.EditButton")
    );
    expect(
      screen.getByTestId("EditableProfileHeader.CalncelButton")
    ).toBeInTheDocument();
  });

  test("При отмене значения должны обнулятся", async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileHeader.EditButton")
    );
    await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));
    await userEvent.clear(screen.getByTestId("ProfileCard.lastname"));

    await userEvent.type(screen.getByTestId("ProfileCard.firstname"), "user");
    await userEvent.type(screen.getByTestId("ProfileCard.lastname"), "user");

    expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("user");
    expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("user");

    await userEvent.click(
      screen.getByTestId("EditableProfileHeader.CalncelButton")
    );

    expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("admin");
    expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("admin");
  });

  test("Должна появляться ошибка валидации", async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileHeader.EditButton")
    );

    await userEvent.clear(screen.getByTestId("ProfileCard.firstname"));

    await userEvent.click(
      screen.getByTestId("EditableProfileHeader.SaveButton")
    );

    expect(
      screen.getByTestId("EditableProfileCard.Error.Paragraph")
    ).toBeInTheDocument();
  });

  test("Если нет ошибок на сервер должен уйти PUT запрос", async () => {
    const mockPutReq = jest.spyOn($api, "put");
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileHeader.EditButton")
    );

    await userEvent.type(screen.getByTestId("ProfileCard.firstname"), "user");

    await userEvent.click(
      screen.getByTestId("EditableProfileHeader.SaveButton")
    );

    expect(mockPutReq).toHaveBeenCalled();
  });
});
