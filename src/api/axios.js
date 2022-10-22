import axios from "axios";
import { BASE_SERVER_URL } from '../utill'

const BASE_URL = `${BASE_SERVER_URL}/api`;
const isToken = true;
const axioService = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

if (isToken) {
    // TODO: set refresh jwt token
    axioService.defaults.headers.common['Authorization-Token'] = 'Test Authorization Token'
}

const get = async (path = '/') => {
    const { data } = await axioService.get(path);

    return data
}

const post = async (path = '/', obj) => {
    const { data } = await axioService.post(path, obj);

    return data
}

export const appService = {
    getStatus: async () => {
        const { allowSesion, acceptCookie, jwt } = await get();

        return { acceptCookie, status: allowSesion, jwt };
    },
    setAcceptCookie: async (value) => {
        const { acceptCookie } = await post('/', { value });

        return acceptCookie;
    }
}