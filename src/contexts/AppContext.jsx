import { createContext, useContext, useEffect, useReducer } from 'react'
import Cookies from 'js-cookie';
import axios from '../api/axios';

const appContect = createContext();
const cookies = {
    _desc_: {
        name: '_desc_',
        value: 0,
        options: {
            expires: 0.1,
            domain: 'localhost'
        }
    }
};
const stateReducer = (state, action) => {
    switch (action.type) {
        case 'set_state':
            return {
                ...state,
                state: action.state
            }
        case 'toggled':
            return {
                ...state,
                toggle: !state.toggle
            }
        case 'set_accept_cookie':
            return {
                ...state,
                acceptCookies: action.setCookie,
            }
        default: return state;
    }
}
const init = {
    state: true,
    sesion: false,
    toggle: false,
    acceptCookies: false
}

export default function AppContext({ children }) {
    const [state, dispatch] = useReducer(stateReducer, init);

    async function initialise() {
        try {
            const res = await axios.get('/');
            dispatch({ type: 'set_state', state: res.data.allowSesion });
            setAcceptCookie()
        } catch (error) {
            dispatch({ type: 'set_state', state: false });
        }
    }

    function checkAcceptCookie() {
        const acceptCookiesExist = Cookies.get('accept-cookies');

        return acceptCookiesExist == 1;
    }

    function setAcceptCookie(e, value = 1) {
        if (e) {
            e.preventDefault();

            if (value == 0) {
                dispatch({ type: 'set_accept_cookie', setCookie: true });
                return
            }

            Cookies.set('accept-cookies', value, {
                domain: 'localhost',
                secure: true,
                sameSite: 'None',
                expires: 0.1 // TODO: set expire 365 day in production
            });
        }

        dispatch({ type: 'set_accept_cookie', setCookie: checkAcceptCookie() });
    }

    function toggled(e) {
        e.preventDefault();
        dispatch({ type: 'toggled' });
    }

    useEffect(() => {
        initialise()
    }, []);

    return (
        <>
            <appContect.Provider value={
                {
                    setAcceptCookie,
                    context: state,
                    toggled,
                }
            }>
                {children}
            </appContect.Provider>
        </>
    )
}

export const useAcceptCookie = () => {
    const { setAcceptCookie } = useContext(appContect);

    return { setAcceptCookie: setAcceptCookie }
}

export const useAppContext = () => {
    const { context, toggled } = useContext(appContect);

    return { context, toggled }
}