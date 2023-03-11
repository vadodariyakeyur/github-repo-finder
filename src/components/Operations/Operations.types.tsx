import { Dispatch, SetStateAction } from "react";

import { QueryType } from "../../hooks/useRepositorySearch/useRepositorySearch.types";

export type OperationsProps = {
  query: QueryType;
  setQuery: Dispatch<SetStateAction<QueryType>>;
};
