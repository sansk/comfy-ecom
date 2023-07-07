import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// will remove later
// import { useUserContext } from "../context/user_context";

const PrivateRoute = () => {
  const { user } = useAuth0();

  return <>{user ? <Outlet /> : <Navigate to="/" />}</>;
};
export default PrivateRoute;
