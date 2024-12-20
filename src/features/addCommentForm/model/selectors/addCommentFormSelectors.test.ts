import { StateSchema } from "@/app/providers/StoreProvider";
import { getAddCommentFormError, getAddCommentFormText } from "./addCommentFormSelectors";

describe("addCommentFormSelectors.test", () => {
  test("should return text", () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        text: "Text",
      },
    };
    expect(getAddCommentFormText(state as StateSchema)).toBe("Text");
  });
  test("should work with empty text", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommentFormText(state as StateSchema)).toBe(undefined);
  });

  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        error: "error",
      },
    };
    expect(getAddCommentFormError(state as StateSchema)).toBe("error");
  });
  test("should work with empty error", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommentFormError(state as StateSchema)).toBe(undefined);
  });
});
