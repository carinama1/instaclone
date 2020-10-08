import React from "react";
import { Navigate } from "react-router-dom";
// import DashboardLayout from "src/layouts/DashboardLayout";
import MainLayout from "./layouts/MainLayout";
// import AccountView from "src/views/account/AccountView";
import HomeView from "./views/HomeView";
// import CustomerListView from "src/views/customer/CustomerListView";
// import DashboardView from "src/views/reports/DashboardView";
// import LoginView from "src/views/auth/LoginView";
// import NotFoundView from "src/views/errors/NotFoundView";
// import ProductListView from "src/views/product/ProductListView";
// import RegisterView from "src/views/auth/RegisterView";
// import SettingsView from "src/views/settings/SettingsView";

const routes = [
  //   {
  //     path: "app",
  //     element: <DashboardLayout />,
  //     children: [
  //       {
  //         path: "account",
  //         element: <AccountView />,
  //       },
  //     ],
  //   },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      //   {
      //     path: 'login',
      //     element: <LoginView />
      //   },
      //   {
      //     path: 'register',
      //     element: <RegisterView />
      //   },
      {
        path: "404",
        element: <div>Not Found</div>,
      },
      {
        path: "/",
        element: <HomeView />,
      },
      {
        path: "*",
        element: <Navigate to="/404" />,
      },
    ],
  },
];

export default routes;
