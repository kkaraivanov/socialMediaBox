import { Outlet } from "react-router-dom";
import useInitialize from "../hooks/useInitialize"
import { Error500 } from "../pages";


const AppRouter = () => {
    const { state } = useInitialize();
    
    return (
        state
            ? <Outlet />
            : <Error500 />
    )
}

export default AppRouter