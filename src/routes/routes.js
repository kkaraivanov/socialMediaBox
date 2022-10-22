export const routes = {
    // public routes
    HOME: {path: '/', layout: 'public', name: 'Home'},
    ABAULT: {path: '/abault', layout: 'public', name: 'Abault'},
    CONTACT: {path: '/contact', layout: 'public', name: 'Contact'},
    SERVICE: {path: '/service', layout: 'public', name: 'Service'},
    REGISTER: {path: '/register', layout: 'public', name: 'Register'},
    LOGIN: {path: '/login', layout: 'public', name: 'Login'},
    // private routes
    DASHBOARD: {path: '/', layout: 'private', name: 'Dashboard'},
    // common routes
    NOT_FOUND: '/not-found',
    TEST: '/test',
}