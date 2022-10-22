const STORAGE_USER_KEY = 'user_data';

const getUser = () => localStorage.getItem(STORAGE_USER_KEY);
const setUser = (user) => localStorage.setItem(STORAGE_USER_KEY, user);
const removeUser = () => localStorage.removeItem(STORAGE_USER_KEY);

export const storageService = { 
    getUser,
    setUser,
    removeUser,
}