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
        case 'set_state_false':
            return {
                ...state,
                state: false
            }
        case 'set_default_cookie':
            if (action.setCookie) {
                const setDefaultCookie = cookies['_desc_'];
                Cookies.set(setDefaultCookie.name, setDefaultCookie.value, setDefaultCookie.options)
                return {
                    ...state,
                    sesion: false,
                    cookie: Cookies.get()
                }
            }
        default: return state;
    }
}
const init = {
    state: true,
    sesion: false,
    cookie: Cookies.get()
}

export default function AppContext({ children }) {
    const [state, dispatch] = useReducer(stateReducer, init);
    
    async function initialise() {
        const setCookie = !state.cookies || state.cookies['_desc_'] == undefined;
         
        try {
            await axios.get('/');
            dispatch({ type: 'set_default_cookie', setCookie });
        } catch (error) {
            dispatch({ type: 'set_state_false' });
        }
    }

    useEffect(() => {
        initialise()
    }, []);

    return (
        <>
            <appContect.Provider value={
                {
                    context: state,
                }
            }>
                {children}
            </appContect.Provider>
        </>
    )
}

export const useAppContext = () => {
    const { context } = useContext(appContect);

    return { context }
}