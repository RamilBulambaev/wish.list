import { Meta, StoryObj } from "@storybook/react";
import ArticlesPage from "./ArticlesPage";
import {
  EArticleBlockType,
  EArticleType,
  IArticle,
} from "@/entities/Article/model/types/article";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

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
    title: "React news",
    subtitle: "Что нового в React за 2022 год?",
    img: "",
    views: 1022,
    createdAt: "26.02.2022",
    type: [EArticleType.IT],
    user: {
      id: "2",
      username: "Ramil",
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

const meta: Meta<typeof ArticlesPage> = {
  title: "pages/ArticlesPage",
  component: ArticlesPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Common: Story = {
  args: {},
  decorators: StoreDecorator({
    articlesPage: {
      entities: {
        "1": data[0],
        "2": data[1],
      },
      ids: ["1", "2"],
    },
  }),
};

export const Loading: Story = {
  args: {},
  decorators: StoreDecorator({
    articlesPage: {
      entities: {
        "1": data[0],
        "2": data[1],
      },
      ids: ["1", "2"],
      isLoading: true,
    },
  }),
};
