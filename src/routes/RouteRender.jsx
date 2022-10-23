import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { config } from "./config";
import { useEffect } from "react";
import { AcceptCookie, Spinner } from "../components";
import { routes } from "./routes";
import { ServerOfline } from '../pages'
import { setOffline, load } from '../app/slices/appSlice'

import io from "socket.io-client";
import { BASE_SERVER_URL } from "../utill";

const getMenuRoutes = (props = 'public') => Object.entries(routes)
    .filter(el => el[1].layout === props)
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

const socket = io(BASE_SERVER_URL, {
    autoConnect: false
});
const Layout = ({ children }) => {
    const { isLogedIn } = useSelector((state) => state.auth);
    const { status, isLoading } = useSelector((state) => state.app);
    const dispatch = useDispatch();

    const ws = () => {
        socket.on('connect', function () {
            if (!status) dispatch(load());
        });
        socket.on('disconnect', function () {
            dispatch(setOffline());
        });
    }

    useEffect(() => {
        socket.connect();
        setTimeout(() => {
            ws();
        }, 2000);
        
        return () => {
            socket.close();
        }
    }, [socket, dispatch])

    if (isLoading) return <Spinner />

    if (!status) return <ServerOfline />

    return children(isLogedIn)
}

const RouteValidator = ({ route }) => {
    return (
        route
            ? route
            : <Navigate to={routes.NOT_FOUND} replace />
    )
}

const RouteRender = () => {
    return (
        <React.Fragment>
            <Layout>
                {
                    (isLogedIn) => {
                        if (isLogedIn) return <PrivateLayout />;
                        return <PublicLayout />
                    }
                }
            </Layout>
            <AcceptCookie />
        </React.Fragment>
    )
}

export default RouteRender