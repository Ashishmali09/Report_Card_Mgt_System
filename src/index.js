import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login, { getLoaderData } from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './components/AdminDashboard';
import Standards from './components/admin/Standards';
import Division from './components/admin/Division';
import Roles from './components/admin/Roles';
import UserRoles from './components/admin/UserRoles';
import Grades from './components/admin/Grades';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "login/:role",
        element: <Login />,
        loader: getLoaderData,
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "admin",
        element: <ProtectedRoute><AdminDashboard /></ProtectedRoute>,
        children: [
          {
            path: "standards",
            element: <Standards />
          },
          {
            path: "division",
            element: <Division />
          },
          {
            path: "roles",
            element: <Roles />
          },
          {
            path: "userroles",
            element: <UserRoles />
          },
          {
            path: "grades",
            element: <Grades />
          },
        ]
      }
    ]
  },


])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
