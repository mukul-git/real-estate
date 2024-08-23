import { useEffect } from "react";
import { fetchProperties } from "./redux/actions/fetchProperties";
import { useDispatch } from "react-redux";
import Properties from "./components/Properties";
import "./App.css";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "/",
          element: <Properties />,
        },
        {
          path: "property/:id",
          element: <DetailsPage />,
        },
      ],
    },
  ]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}
export default App;
