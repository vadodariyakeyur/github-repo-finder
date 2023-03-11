import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import GlobalStyles from "./App.styles";
import RepositorySearch from "./pages/RepositorySearch/RepositorySearch";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <RepositorySearch />
    </QueryClientProvider>
  );
}

export default App;
