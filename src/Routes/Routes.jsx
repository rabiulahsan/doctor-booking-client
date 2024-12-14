import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import DoctorsPage from "../Pages/DoctorsPage/DoctorsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement:
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      { path: "/doctors", element: <DoctorsPage></DoctorsPage> },
    ],
  },
]);
