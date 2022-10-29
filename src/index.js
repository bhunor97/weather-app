import React from "react";
import ReactDOM from "react-dom/client";
// CSS
import "./index.css";
// COMPONENTS
import App from "./App";
// REDUX TOOLKIT
import { store } from "./redux-toolkit/store";
import { Provider } from "react-redux";
// REACT QUERY
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
);
