import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import { path } from "@/utils/path";
import { BoardPage, Home, Login, Workspace } from "./pages";

// toast container
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./route/PrivateRoute";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: path.home,
    element: <PrivateRoute component={<Home />} />,
  },
  {
    path: path.workspace,
    element: <PrivateRoute component={<Workspace />} />,
  },
  {
    path: path.board,
    element: <PrivateRoute component={<BoardPage />} />,
  },
  {
    path: path.login,
    element: <Login />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
