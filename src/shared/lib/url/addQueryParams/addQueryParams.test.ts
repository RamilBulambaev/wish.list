import { getQueryParams } from "./addQueryParams";

describe("shared/lib/url/addQueryParams", function () {
  test("test with one params", () => {
    const params = getQueryParams({
      test: "value",
    });
    expect(params).toBe("?test=value");
  });
  test("test with multiple params", () => {
    const params = getQueryParams({
      test: "value",
      seconsd: "2",
    });
    expect(params).toBe("?test=value&seconsd=2");
  });
  test("test with undefined", () => {
    const params = getQueryParams({});
    expect(params).toBe("?");
  });
});
