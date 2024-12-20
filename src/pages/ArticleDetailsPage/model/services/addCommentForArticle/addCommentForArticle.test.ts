import axios from "axios";
import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { addCommentForArticle } from "./addCommentForArticle";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, { shallow: false });

const data = {
  articleId: "1",
  userId: "2",
  text: "Test",
};

const articleDetailsData = {
  id: "1",
  title: "title",
  subtitle: "subtitle",
  img: "",
  views: 1,
  createdAt: "",
  type: [],
  blocks: [],
};

const userData = {
  id: "2",
  username: "makvoi",
  avatar: "",
};

describe("addCommentForArticle.test", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      ArticleDetails: {
        data: articleDetailsData,
      },
      user: {
        authData: userData,
      },
    });
    thunk.api.post.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk(data.text);
    console.log(result);

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("error ", async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      ArticleDetails: {
        data: articleDetailsData,
      },
      user: {
        authData: userData,
      },
    });
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk("Test");

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("error");
  });

  test("error: no userData", async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      ArticleDetails: {
        data: articleDetailsData,
      },
      user: {
        authData: undefined,
      },
    });

    const result = await thunk.callThunk(data.text);

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("no data");
  });

  test("error: no article", async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      ArticleDetails: {
        data: undefined,
      },
      user: {
        authData: userData,
      },
    });

    const result = await thunk.callThunk(data.text);

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("no data");
  });

  test("error: no article", async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      ArticleDetails: {
        data: articleDetailsData,
      },
      user: {
        authData: userData,
      },
    });

    const result = await thunk.callThunk("");

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("no data");
  });
});
