import React from "react";
import { Link, Navigate, useRoutes } from "react-router-dom";
import { useSelector } from 'react-redux';
import { config } from "./config";
import { useEffect } from "react";
import { AcceptCookie } from "../components";
import { routes } from "./routes";
import { ServerOfline } from '../pages'

const getMenuRoutes = (props = 'public') => Object.entries(routes)
    .filter(el => el[1].layout == props)
    .map(x => {
        return { name: x[1].name, path: x[1].path }
    })

const PublicLayout = () => {
    const publicRoutes = useRoutes(config.routes());
    const menuRoutes = getMenuRoutes();

    return (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            justifyItems: 'center'
        }}>
            {<RouteValidator route={publicRoutes} />}
        </div>
    )
};

const PrivateLayout = () => {
    const privateRoutes = useRoutes(config.routes('private'));

    return <RouteValidator route={privateRoutes} />
};

const Layout = () => {
    const { isLogedIn } = useSelector((state) => state.auth);
    useEffect(() => {

    }, [isLogedIn])

    return !isLogedIn
        ? <PublicLayout />
        : <PrivateLayout />
}

const RouteValidator = ({ route }) => {
    return (
        route
            ? route
            : <Navigate to={routes.NOT_FOUND} replace />
    )
}

const RouteRender = () => {
    const { status, isLoading } = useSelector((state) => state.app);

    useEffect(() => {

    }, [status, isLoading])

    if (!status) return <ServerOfline />

    return (
        <React.Fragment>
            <Layout />
            <AcceptCookie />
        </React.Fragment>
    )
}

export default RouteRender