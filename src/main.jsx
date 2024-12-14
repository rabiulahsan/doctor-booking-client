import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <SkeletonTheme baseColor="#313131" highlightColor="#525252"> */}
    <RouterProvider router={router}></RouterProvider>
    {/* </SkeletonTheme> */}
  </StrictMode>
);
