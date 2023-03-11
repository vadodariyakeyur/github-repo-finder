import { useCallback, useState } from "react";
import { useQuery } from "react-query";

import Styles from "./RepositorySearch.styles";
import { searchRepos } from "../../api/searchRepos/searchRepos";
import { RepositoryInfo } from "../../components/RepositoryInfo/RepositoryInfo";
import { useDebounce } from "../../hooks/useDebounce";
import {
  OrderByOptionsType,
  SortOptionsType,
} from "../../api/searchRepos/searchRepos.types";
import SpinnerImage from "../../assets/images/spinner.gif";

function RepositorySearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortValue, setSortValue] = useState<SortOptionsType>("stars");
  const [orderByValue, setOrderByValue] = useState<OrderByOptionsType>("desc");
  const debouncedSearchQuery = useDebounce(searchQuery);

  const { isLoading, data } = useQuery(
    ["repositories", debouncedSearchQuery, sortValue, orderByValue],
    () => searchRepos(debouncedSearchQuery, sortValue, orderByValue),
    {
      enabled: !!debouncedSearchQuery,
      refetchOnWindowFocus: false,
    }
  );

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    },
    []
  );

  const handleSortChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSortValue(event.target.value as SortOptionsType);
    },
    []
  );

  const handleOrderChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setOrderByValue(event.target.value as OrderByOptionsType);
    },
    []
  );

  return (
    <main>
      <Styles.Container>
        <Styles.H1>Repositories</Styles.H1>
        <Styles.Input
          type="text"
          placeholder="Search..."
          autoFocus
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Styles.SortContainer>
          <span>Sort by: &nbsp;</span>
          <Styles.Select value={sortValue} onChange={handleSortChange}>
            <option value="stars">Stars</option>
            <option value="watchers">Watchers</option>
            <option value="score">Score</option>
            <option value="name">Name</option>
            <option value="created">Created</option>
            <option value="updated">Updated</option>
          </Styles.Select>
          &nbsp;&nbsp;&nbsp;
          <span>Order by: &nbsp;</span>
          <Styles.Select value={orderByValue} onChange={handleOrderChange}>
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
          </Styles.Select>
        </Styles.SortContainer>
        {isLoading ? (
          <Styles.Spinner src={SpinnerImage} />
        ) : (
          <Styles.RepositoryList>
            {data?.data.items.map((item) => (
              <RepositoryInfo
                key={item.id}
                avatar={item.owner.avatar_url}
                name={item.name}
                description={item.description}
                language={item.language}
                stars={item.stargazers_count}
              />
            ))}
          </Styles.RepositoryList>
        )}
      </Styles.Container>
    </main>
  );
}

export default RepositorySearch;
