import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import CookieAlert from "../components/cookies/CookieAlert";
import useInitialize from "../hooks/useInitialize"
import { Error500 } from "../pages";


const AppRouter = () => {
    const { state } = useInitialize();

    return (
        state
            ? (
                <>
                    <Cookies />
                    <Outlet />
                </>
            )
            : <Error500 />
    )
}

const Cookies = () => {
    const { acceptCookies } = useInitialize();
    useEffect(() => {

    }, [acceptCookies])

    return (
        !acceptCookies
            ? <CookieAlert />
            : null
    )
}

export default AppRouter