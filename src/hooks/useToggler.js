import { useAppContext } from "../contexts/AppContext";

const useToggler = () => {
    const { context, toggled } = useAppContext();
    // console.log('Click')
    return { toggle: context.toggle, toggled: toggled }
}

export default useToggler