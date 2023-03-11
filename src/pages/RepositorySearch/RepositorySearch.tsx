import React, { useMemo, useState } from "react";

import Styles from "./RepositorySearch.styles";
import InformationCard from "../../components/InformationCard/InformationCard";
import Operations from "../../components/Operations/Operations";
import useDebounce from "../../hooks/useDebounce/useDebounce";
import useRepositorySearch from "../../hooks/useRepositorySearch/useRepositorySearch";
import { QueryType } from "../../hooks/useRepositorySearch/useRepositorySearch.types";
import SpinnerImage from "../../assets/images/spinner.gif";

function RepositorySearch() {
  const [query, setQuery] = useState<QueryType>({
    search: "",
    sort: "stars",
    order: "desc",
  });

  const debouncedQuery = useDebounce(query);
  const { isLoading, isError, data } = useRepositorySearch(debouncedQuery);

  const displayData = useMemo(() => {
    if (query.search === "") {
      return <Styles.Message>Start Searching...</Styles.Message>;
    }

    if (isLoading) return <Styles.Spinner src={SpinnerImage} />;

    if (isError) {
      return (
        <Styles.Message>
          Something went wrong. Please try again...
        </Styles.Message>
      );
    }

    if (data?.data.total_count === 0) {
      return <Styles.Message>No records found</Styles.Message>;
    }

    return (
      <Styles.RepositoryList>
        {data?.data.items.map((item) => (
          <InformationCard key={item.id} item={item} />
        ))}
      </Styles.RepositoryList>
    );
  }, [isLoading, isError, query.search, data]);

  return (
    <main>
      <Styles.Container>
        <Styles.Heading>Repositories</Styles.Heading>
        <Operations query={query} setQuery={setQuery} />
        {displayData}
      </Styles.Container>
    </main>
  );
}

export default RepositorySearch;
