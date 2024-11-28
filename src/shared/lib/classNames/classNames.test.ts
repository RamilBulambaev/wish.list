import { classNames } from "./classNames";

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("with additional class", () => {
    const expected = "someClass additClass1 additClass2";
    expect(classNames("someClass", {}, ["additClass1", "additClass2"])).toBe(
      expected
    );
  });

  test("with mods", () => {
    const expected = "someClass additClass1 additClass2 hovered scrollable";
    expect(
      classNames("someClass", { hovered: true, scrollable: true }, [
        "additClass1",
        "additClass2",
      ])
    ).toBe(expected);
  });

  test("with mods false", () => {
    const expected = "someClass additClass1 additClass2 hovered";
    expect(
      classNames("someClass", { hovered: true, scrollable: false }, [
        "additClass1",
        "additClass2",
      ])
    ).toBe(expected);
  });

  test("with mods undefined", () => {
    const expected = "someClass additClass1 additClass2 hovered";
    expect(
      classNames("someClass", { hovered: true, scrollable: undefined }, [
        "additClass1",
        "additClass2",
      ])
    ).toBe(expected);
  });
});
