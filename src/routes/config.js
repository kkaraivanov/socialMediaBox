import {
    Abault,
    Contact,
    Dashboard,
    Home,
    Login,
    NotFound,
    Register,
    Service,
    Test
} from '../pages';
import { routes } from './routes';

const commonRoutes = [
    {
        path: routes.NOT_FOUND,
        element: <NotFound />,
    },
]

const routesArray = [
    {
        ...routes.HOME,
        element: <Home />,
    },
    {
        ...routes.ABAULT,
        element: <Abault />,
    },
    {
        ...routes.CONTACT,
        element: <Contact />,
    },
    {
        ...routes.SERVICE,
        element: <Service />,
    },
    {
        ...routes.REGISTER,
        element: <Register />,
    },
    {
        ...routes.LOGIN,
        element: <Login />,
    },
    {
        ...routes.DASHBOARD,
        element: <Dashboard />,
    },
    ...commonRoutes
];

const getRoutes = (props = 'public') => routesArray.filter(el => el.layout == props || el.layout == undefined);

export const config = {
    routes: getRoutes
}