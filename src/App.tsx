import React from "react";
import "./App.css";
import Route1 from "./pages/MaktabRoute";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Route1 />
    </QueryClientProvider>
  );
}

export default App;
