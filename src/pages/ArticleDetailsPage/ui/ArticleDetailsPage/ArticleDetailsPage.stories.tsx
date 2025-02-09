import { Meta, StoryObj } from "@storybook/react";
import ArticleDetailsPage from "./ArticleDetailsPage";
import { IArticle } from "@/entities/Article";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { EArticleBlockType, EArticleType } from "@/entities/Article";

const data = [
  {
    id: "1",
    title: "Javascript news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "",
    views: 1022,
    createdAt: "26.02.2022",
    type: [EArticleType.IT],
    user: {
      id: "1",
      username: "Makvoi",
    },
    blocks: [
      {
        id: "1",
        type: EArticleBlockType.TEXT,
        title: "Заголовок этого блока",
        paragraphs: [
          "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
        ],
      },
      {
        id: "4",
        type: EArticleBlockType.CODE,
        code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>',
      },
    ],
  },
  {
    id: "2",
    title: "Javascript news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "",
    views: 1022,
    createdAt: "26.02.2022",
    type: [EArticleType.IT],
    user: {
      id: "1",
      username: "Makvoi",
    },
    blocks: [
      {
        id: "1",
        type: EArticleBlockType.TEXT,
        title: "Заголовок этого блока",
        paragraphs: [
          "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
        ],
      },
      {
        id: "4",
        type: EArticleBlockType.CODE,
        code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>',
      },
    ],
  },
  {
    id: "3",
    title: "Javascript news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "",
    views: 1022,
    createdAt: "26.02.2022",
    type: [EArticleType.IT],
    user: {
      id: "1",
      username: "Makvoi",
    },
    blocks: [
      {
        id: "1",
        type: EArticleBlockType.TEXT,
        title: "Заголовок этого блока",
        paragraphs: [
          "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
        ],
      },
      {
        id: "4",
        type: EArticleBlockType.CODE,
        code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>',
      },
    ],
  },
  {
    id: "4",
    title: "Javascript news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "",
    views: 1022,
    createdAt: "26.02.2022",
    type: [EArticleType.IT],
    user: {
      id: "1",
      username: "Makvoi",
    },
    blocks: [
      {
        id: "1",
        type: EArticleBlockType.TEXT,
        title: "Заголовок этого блока",
        paragraphs: [
          "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
        ],
      },
      {
        id: "4",
        type: EArticleBlockType.CODE,
        code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>',
      },
    ],
  },
] as IArticle[];

const meta: Meta<typeof ArticleDetailsPage> = {
  title: "pages/ArticleDetailsPage",
  component: ArticleDetailsPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof ArticleDetailsPage>;

export const Common: Story = {
  args: {},
  decorators: StoreDecorator({
    ArticleDetails: { data: data[0] },
    articleDetailsPage: {
      comments: {
        ids: ["1", "2"],
        entities: {
          "1": {
            id: "1",
            text: "Комментарий 1",
            user: { id: "1", username: "User1" },
          },
          "2": {
            id: "2",
            text: "Комментарий 2",
            user: { id: "2", username: "User2" },
          },
        },
        isLoading: false,
        error: undefined,
      },
      recommendations: {
        isLoading: false,
        entities: {
          "1": data[0],
          "2": data[1],
          "3": data[2],
          "4": data[3],
        },
        ids: ["1", "2", "3", "4"],
      },
    },
  }),
};

export const Edit: Story = {
  args: {},
  decorators: StoreDecorator({
    ArticleDetails: { data: data[0] },
    user: {
      _inited: true,
      authData: {
        id: "1",
        username: "user",
      },
    },
    articleDetailsPage: {
      comments: {
        ids: ["1", "2"],
        entities: {
          "1": {
            id: "1",
            text: "Комментарий 1",
            user: { id: "1", username: "User1" },
          },
          "2": {
            id: "2",
            text: "Комментарий 2",
            user: { id: "2", username: "User2" },
          },
        },
        isLoading: false,
        error: undefined,
      },
      recommendations: {
        isLoading: false,
        entities: {
          "1": data[0],
          "2": data[1],
          "3": data[2],
          "4": data[3],
        },
        ids: ["1", "2", "3", "4"],
      },
    },
  }),
};
