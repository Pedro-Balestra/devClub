import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { ListUsers } from "../pages/ListUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/lista-de-usuarios",
    element: <ListUsers />,
  },
]);
