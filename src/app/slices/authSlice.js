import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { storage } from '../../utill'

let user = JSON.parse(storage.getUser());
const INITIAL_STATE = {
    user: user ? user : null,
    isLogedIn: false, //user ? true : false,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
};

const slice = {
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
    }
}

const authSlice = createSlice(slice);
export const { reset } = authSlice.actions;
export default authSlice.reducer;