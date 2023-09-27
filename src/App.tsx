import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { HelmetProvider } from "react-helmet-async";
import { AxiosError } from "axios";
import Home from "./pages/home/page";
import PointsManager from "./pages/points-manager/page";
import Login from "./pages/login/page";
import { RequireAuth } from "./components/require-auth";
import { ErrorFallback } from "./components/error-fallback";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <RequireAuth>
          <Home />
        </RequireAuth>
      ),
      errorElement: <ErrorFallback />,
    },
    {
      path: "/points",
      element: (
        <RequireAuth>
          <PointsManager />
        </RequireAuth>
      ),
      errorElement: <ErrorFallback />,
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorFallback />,
    },
  ]);

  const useErrorBoundary = (error: unknown) => {
    return Boolean(
      error instanceof AxiosError &&
        error.response &&
        error.response?.status >= 500,
    );
  };

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        useErrorBoundary,
        refetchOnWindowFocus: false,
      },
      mutations: {
        useErrorBoundary,
      },
    },
  });

  return (
    <div className="w-full font-iranyekan">
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
