import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/page";
import PointsManager from "./pages/points-manager/page";
import Login from "./pages/login/page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/points",
      element: <PointsManager />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div className="w-full font-iranyekan">
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </div>
  );
}

export default App;
