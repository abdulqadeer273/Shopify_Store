import { useLocation, Navigate, Outlet } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";
import { useContext } from "react";

const RequiredAuth = () => {
    const { state } = useContext(GlobalContext);
    const { auth } = state;
    const location = useLocation();
    return (
        auth && auth.token
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequiredAuth;
