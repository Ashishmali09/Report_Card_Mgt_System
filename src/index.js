import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login, { getLoaderData } from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./components/AdminDashboard";
import Standards from "./components/admin/Standards";
import AddStandard, { standardLoader } from "./components/admin/StandardForm";
import Division from "./components/admin/Division";
import Roles from "./components/admin/Roles";
import UserRoles from "./components/admin/UserRoles";
import Grades from "./components/admin/Grades";
import ClassTeacherDashboard from "./components/ClassTeacherDashBoard";
import Students from "./components/classTeacher/Students";
import AddStudent, {
  studentLoader,
} from "./components/classTeacher/StudentForm";
import store from "./store";
import { Provider } from "react-redux";
import AddRole from "./components/admin/RoleForm";
import AddGrade from "./components/admin/gradeFrom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login/:role",
        element: <Login />,
        loader: getLoaderData,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "admin",
        element: (
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "standards",
            element: <Standards />,
          },
          {
            path: "standards/add_standard",
            element: <AddStandard />,
          },
          {
            path: "standards/:standardId",
            element: <AddStandard />,
            loader: standardLoader,
          },
          // {
          //   path: "standards/standardForm",
          //   element: <standardForm />,
          // },
          {
            path: "division",
            element: <Division />,
          },
          {
            path: "roles",
            element: <Roles />,
          },
          {
            path: "roles/add_role",
            element: <AddRole />,
          },
          {
            path: "userroles",
            element: <UserRoles />,
          },
          {
            path: "grades",
            element: <Grades />,
          },
          {
            path: "grades/addgrade",
            element: <AddGrade />,
          },
        ],
      },
      {
        path: "classteacher",
        element: (
          <ProtectedRoute>
            <ClassTeacherDashboard />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "students",
            element: <Students />,
          },
          {
            path: "students/addstudent",
            element: <AddStudent />,
          },
          {
            path: "students/:studentId",
            element: <AddStudent />,
            loader: studentLoader,
          },
          // {
          //   path: "reports",
          //   element: <Reports />,
          // },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
