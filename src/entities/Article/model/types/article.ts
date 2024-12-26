import { User } from "@/entities/User";

export enum ArticleSortField {
  VIEWS = "views",
  TITLE = "title",
  CREATED = "createAt",
}

export enum EArticleBlockType {
  CODE = "CODE",
  IMAGE = "IMAGE",
  TEXT = "TEXT",
}

export interface IArticleBlockBase {
  id: string;
  type: EArticleBlockType;
}

export interface IArticleCodeBlock extends IArticleBlockBase {
  type: EArticleBlockType.CODE;
  code: string;
}
export interface IArticleImageBlock extends IArticleBlockBase {
  type: EArticleBlockType.IMAGE;
  src: string;
  title: string;
}

export interface IArticleTextBlock extends IArticleBlockBase {
  type: EArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}

export type TArticleBlock =
  | IArticleCodeBlock
  | IArticleImageBlock
  | IArticleTextBlock;

export enum EArticleType {
  ALL = "ALL",
  IT = "IT",
  SCIENCE = "SCIENCE",
  ECONOMICS = "ECONOMICS",
}

export enum EArticleView {
  BIG = "BIG",
  SMALL = "SMALL",
}

export interface IArticle {
  id: string;
  title: string;
  user: User;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: EArticleType[];
  blocks: TArticleBlock[];
}
