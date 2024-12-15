import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import DoctorsPage from "../Pages/DoctorsPage/DoctorsPage";
import CreateAccount from "../Pages/LoginFunction/CreateAccount/CreateAccount";
import PatientLogin from "../Pages/LoginFunction/PatientLogin/PatientLogin";
import PatientSignup from "../Pages/LoginFunction/PatientLogin/PatientSignup";
import DoctorSignup from "../Pages/LoginFunction/DoctorLogin/DoctorSignup";
import DoctorLogin from "../Pages/LoginFunction/DoctorLogin/DoctorLogin";

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
      {
        path: "/create-account",
        element: <CreateAccount></CreateAccount>,
      },
      {
        path: "/patient/login",
        element: <PatientLogin></PatientLogin>,
      },
      {
        path: "/patient/signup",
        element: <PatientSignup></PatientSignup>,
      },
      {
        path: "/doctor/signup",
        element: <DoctorSignup></DoctorSignup>,
      },
      {
        path: "/doctor/login",
        element: <DoctorLogin></DoctorLogin>,
      },
    ],
  },
]);
