import axios from "axios";
import { useQuery } from "react-query";

import { QueryType, SearchRepoResponseType } from "./useRepositorySearch.types";

function searchRepos({ search, sort, order }: QueryType) {
  return axios.get<SearchRepoResponseType>(
    `https://api.github.com/search/repositories?q=${search}&sort=${sort}&order=${order}`
  );
}

const useRepositorySearch = (query: QueryType) =>
  useQuery(["repositories", query], () => searchRepos(query), {
    enabled: !!query.search,
    refetchOnWindowFocus: false,
  });

export default useRepositorySearch;
