import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Outlet, useNavigate } from "react-router-dom";

function ProtectedRoute() {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !isLoading) navigate("/login");
  }, [user, navigate, isLoading]);

  if (user) return <Outlet />;
}

export default ProtectedRoute;
