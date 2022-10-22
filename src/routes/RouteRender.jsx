import { useRoutes } from "react-router-dom";
import { useSelector } from 'react-redux';
import { config } from "./config";
import { useEffect } from "react";

const PublicLayout = () => {
    const publicRoutes = useRoutes(config.publicRoutes);
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            justifyItem: 'center'
        }}>{publicRoutes}</div>
    )
};

const PrivateLayout = () => {
    const privateRoutes = useRoutes(config.privateRoutes);
    return privateRoutes
};

const Layout = ({ isAuth }) => {
    const { status, isLoading } = useSelector((state) => state.app);
    useEffect(() => {
        
    }, [status, isLoading])

    if(!status) {
        return <h1 style={{textAlign: 'center'}}>Server is down</h1>
    }
    return !isAuth ? <PublicLayout /> : <PrivateLayout />
}

const RouteRender = () => {
    const { isLogedIn } = useSelector((state) => state.auth);
    useEffect(() => {
        
    }, [isLogedIn])
    return <Layout isAuth={isLogedIn} />
}

export default RouteRender