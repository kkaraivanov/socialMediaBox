import { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Navbar, Navigation } from "../components";
import useInitialize from "../hooks/useInitialize"
import useToggler from "../hooks/useToggler";


const PrivateRoute = () => {
    const { sesion } = useInitialize();
    const location = useLocation()
    const { toggle } = useToggler();
    const [user, setUser] = useState(null);
    const togglerCss = (str) => toggle ? str + ' open' : str;

    return (
        sesion
            ? (
                <div className='container-fluid position-relative d-flex p-0'>
                    <div className={togglerCss('sidebar pe-4 pb-3')}>
                        <Navigation user={user} />
                    </div>
                    <div className={togglerCss('content')}>
                        <Navbar />
                        <div className='container-fluid pt-4 px-4'>
                            <Outlet />
                        </div>
                    </div>
                </div>

            )
            : <Navigate to="/" state={{ from: location }} replace />
    )
}

export default PrivateRoute