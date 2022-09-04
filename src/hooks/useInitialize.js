import { useAppContext } from "../contexts/AppContext";

const useInitialize = () => {
    const { context } = useAppContext();

    return { 
        state: context.state, 
        sesion: context.sesion,
        acceptCookies: context.acceptCookies
    }
}

export default useInitialize