import axios from "axios";
import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { ECountry } from "@/entities/Country";
import { ECurrency } from "@/entities/Currency";
import { fetchCommentsByArticleId } from "./fetchCommentsByArticleId";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, { shallow: false });

const data = {
  id: "1",
  user: { id: "1", username: "Makvoi" },
  text: "text",
};

describe("fetchCommentsByArticleId.test", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: data }));
    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("error loading", async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk("1");

    expect(result.meta.requestStatus).toBe("rejected");
  });
});
