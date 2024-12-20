import { IAddCommentFormSchema } from "../types/addCommentForm";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "./addCommentFormSlice";

describe("addCommentFormSlice.test", () => {
  test("test set text", () => {
    const state: DeepPartial<IAddCommentFormSchema> = { text: "Text" };
    expect(
      addCommentFormReducer(
        state as IAddCommentFormSchema,
        addCommentFormActions.setText("Text1")
      )
    ).toEqual({ text: "Text1" });
  });
});
