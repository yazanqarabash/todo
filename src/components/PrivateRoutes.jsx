import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoutes = () => {
  const { user } = useAuth();

  console.log("in private", user);

  return Object.keys(user).length !== 0 ? <Outlet /> : <></>;
};

export default PrivateRoutes;
