import { Contact, Dashboard, Home, Test } from '../pages';
import { routes } from './routes';

const commonRoutes = [
    {
        path: routes.TEST,
        element: <Test />,
    },
]

const publicRoutes = [
    {
        path: routes.DEFAULT,
        element: <Home />,
    },
    {
        path: routes.CONTACT,
        element: <Contact />,
    },
    ...commonRoutes
];

const privateRoutes = [
    {
        path: routes.DEFAULT,
        element: <Dashboard />,
    },
    ...commonRoutes
];

export const config = {
    publicRoutes,
    privateRoutes
}