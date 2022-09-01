import { Navigate, Outlet, useLocation } from "react-router-dom";
import useInitialize from "../hooks/useInitialize"


const PublicRoute = () => {
    const { sesion } = useInitialize();
    const location = useLocation()
    
    return (
        !sesion
            ? <Outlet />
            : <Navigate to="/dashboard" state={{ from: location }} replace />
    )
}

export default PublicRoute