export type SortOptionsType =
  | "stars"
  | "watchers"
  | "score"
  | "name"
  | "created"
  | "updated";

export type OrderByOptionsType = "asc" | "desc";

export type QueryType = {
  search: string;
  sort: SortOptionsType;
  order: OrderByOptionsType;
};

export type ItemType = {
  id: number;
  owner: {
    avatar_url: string;
  };
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  html_url: string;
};

export type SearchRepoResponseType = {
  total_count: number;
  incomplete_results: boolean;
  items: ItemType[];
};
