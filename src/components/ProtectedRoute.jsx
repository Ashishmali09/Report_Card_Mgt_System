import React from "react";
// import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  //   const token = useSelector((state) => state.loginReducer.token);
  const token = "sss";
  if (token) {
    return children;
  }

  return <Navigate to={"/"} />;
};

export default ProtectedRoute;
