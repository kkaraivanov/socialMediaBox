import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

const PublicRoute = () => {
    const { isLogedIn } = useSelector((state) => state.auth);
    const location = useLocation();

    return (
        !isLogedIn
            ? <Outlet />
            : <Navigate to="/" state={{ from: location }} replace />
    )
}

export default PublicRoute