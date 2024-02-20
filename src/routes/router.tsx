import { Navigate, createBrowserRouter } from "react-router-dom";
import AdminBasic from "../layouts/AdminBasic";
import A from "../pages/admin/comm/A";
import B from "../pages/admin/comm/B";
import C from "../pages/admin/comm/C";
import MainAdmin from "../pages/admin/main/MainAdmin";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Member from "../pages/members/Member";
import { ItemMain } from "../pages/admin/item/ItemMain";
import productAdmin from "./product";

export const routerAdmin = createBrowserRouter([
  { path: "", element: <Navigate to="/Admin" />, errorElement: <ErrorPage /> },
  {
    path: "/Admin",
    element: <AdminBasic />,
    children: [
      {
        index: true,
        element: <MainAdmin />,
      },
      {
        path: "item",
        element: <ItemMain />,
        children: productAdmin.children,
      },
      {
        path: "member",
        element: <Member />,
        children: [
          { path: "a", element: <A /> },
          { path: "b", element: <B /> },
          { path: "c", element: <C /> },
        ],
      },
    ],
  },
]);
