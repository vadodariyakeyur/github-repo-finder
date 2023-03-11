import axios from "axios";

import {
  OrderByOptionsType,
  SearchRepoResponseType,
  SortOptionsType,
} from "./searchRepos.types";

export function searchRepos(
  searchQuery: string,
  sortOption: SortOptionsType,
  order: OrderByOptionsType
) {
  return axios.get<SearchRepoResponseType>(
    `https://api.github.com/search/repositories?q=${searchQuery}&sort=${sortOption}&order=${order}`
  );
}
