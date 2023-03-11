import React, { useCallback } from "react";

import Styles from "./Operations.styles";
import { OperationsProps } from "./Operations.types";

function Operations(props: OperationsProps) {
  const { query, setQuery } = props;

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setQuery((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    },

    [setQuery]
  );

  return (
    <>
      <Styles.Input
        type="text"
        name="search"
        placeholder="Search..."
        autoFocus
        value={query.search}
        onChange={handleChange}
      />
      <Styles.Action>
        <span>Sort by:</span>
        <Styles.Select name="sort" value={query.sort} onChange={handleChange}>
          <option value="stars">Stars</option>
          <option value="watchers">Watchers</option>
          <option value="score">Score</option>
          <option value="name">Name</option>
          <option value="created">Created</option>
          <option value="updated">Updated</option>
        </Styles.Select>
      </Styles.Action>
      <Styles.Action>
        <span>Order by:</span>
        <Styles.Select name="order" value={query.order} onChange={handleChange}>
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </Styles.Select>
      </Styles.Action>
    </>
  );
}

export default Operations;
