import React, { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../../pages/shared/Loading/Loading";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [isAdmin,isAdminLoading] = useAdmin(user?.email);
  if (loading || isAdminLoading) {
    return <Loading/>
  }

  if (user && isAdmin) {
    return children;
  }
  <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
