import { UnknownAction } from "@reduxjs/toolkit";
import { IArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentsSchema";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { IComment } from "@/entities/Comment";

const data = [
  {
    user: {
      username: "Makvoi",
      id: "1",
    },
    id: "1",
    text: "Comment",
  },
  {
    user: {
      username: "Ramil",
      id: "2",
    },
    id: "2",
    text: "Comment2",
  },
] as IComment[];

describe("articleDetailsCommentsSlice.test", () => {
  test("test articleDetailsCommentsSlice service pending", () => {
    const state: DeepPartial<IArticleDetailsCommentsSchema> = {
      isLoading: false,
    };

    const action: UnknownAction = fetchCommentsByArticleId.pending(
      "1",
      "requestId"
    );

    expect(
      articleDetailsCommentsReducer(
        state as IArticleDetailsCommentsSchema,
        action
      )
    ).toEqual({
      error: undefined,
      isLoading: true,
    });
  });

  test("test articleDetailsCommentsSlice service fullfield", () => {
    const state: DeepPartial<IArticleDetailsCommentsSchema> = {
      isLoading: true,
    };

    const action: UnknownAction = fetchCommentsByArticleId.fulfilled(
      data,
      "1",
      "fulfield"
    );

    expect(
      articleDetailsCommentsReducer(
        state as IArticleDetailsCommentsSchema,
        action
      )
    ).toEqual({
      isLoading: false,
      entities: {
        "1": data[0],
        "2": data[1],
      },
      ids: ["1", "2"],
    });
  });

  test("test articleDetailsCommentsSlice service rejected", () => {
    const state: DeepPartial<IArticleDetailsCommentsSchema> = {
      isLoading: true,
      error: undefined,
    };

    const error = "Network Error";

    const action: UnknownAction = fetchCommentsByArticleId.rejected(
      new Error(error),
      "rejected",
      undefined
    );

    expect(
      articleDetailsCommentsReducer(
        state as IArticleDetailsCommentsSchema,
        action
      )
    ).toEqual({
      isLoading: false,
      error: error,
    });
  });
});
