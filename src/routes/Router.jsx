import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>error 404</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
