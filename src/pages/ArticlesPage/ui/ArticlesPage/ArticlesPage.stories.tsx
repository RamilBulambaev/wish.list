import { Meta, StoryObj } from "@storybook/react";
import ArticlesPage from "./ArticlesPage";
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
  {
    id: "3",
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
  {
    id: "4",
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
  {
    id: "5",
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
  {
    id: "6",
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
  {
    id: "7",
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
  {
    id: "8",
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
  {
    id: "9",
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
  {
    id: "10",
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
        "3": data[2],
        "4": data[3],
        "5": data[4],
        "6": data[5],
        "7": data[6],
        "8": data[7],
        "9": data[8],
        "10": data[9],
      },
      ids: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    },
  }),
};

export const Loading: Story = {
  args: {},
  decorators: StoreDecorator({
    articlesPage: {
      entities: {},
      ids: [],
      isLoading: true,
    },
  }),
};

export const Error: Story = {
  args: {},
  decorators: StoreDecorator({
    articlesPage: {
      entities: {
        "1": data[0],
        "2": data[1],
        "3": data[2],
        "4": data[3],
        "5": data[4],
        "6": data[5],
        "7": data[6],
        "8": data[7],
        "9": data[8],
        "10": data[9],
      },
      ids: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      error: "error",
    },
  }),
};
