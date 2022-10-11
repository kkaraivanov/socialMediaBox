import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { storage } from '../storageService'
import { appService } from '../../api/axios'

const INITIAL_STATE = {
    appState: false,
    acceptCookieExist: false,
    isLoading: false,
    toggle: false,
}

const slice = {
    name: 'app',
    initialState: INITIAL_STATE,
    reducers: {
        setOffline: (state) => {
            state.appState = false;
        },
        setOnline: (state) => {
            state.appState = true;
        },
        toggled: (state) => {
            state.toggle = !state.toggle
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(load.pending, (state) => {
                state.isLoading = true
            })
            .addCase(load.fulfilled, (state, action) => {
                const { acceptCookie, appState } = action.payload;
                state.isLoading = false
                state.appState = appState
                state.acceptCookieExist = acceptCookie
            })
            .addCase(load.rejected, (state, action) => {
                state.isLoading = false
                state.appState = action.payload
                state.manager = null
            })
            .addCase(setAcceptCookie.fulfilled, (state, action) => {
                state.acceptCookieExist = action.payload
            })
            .addCase(setAcceptCookie.rejected, (state, action) => {
                state.appState = action.payload
            })
    }
}

export const load = createAsyncThunk(
    'app/load',
    async (_, thunkAPI) => {
        try {
            const result = await appService.getStatus();
            const isLogedIn = thunkAPI.getState().auth.isLogedIn;
            const { jwt } = result;

            if (jwt !== undefined && isLogedIn == true) {
                storage.removeUser();
            }

            return result
        } catch (error) {
            return thunkAPI.rejectWithValue(false)
        }
    }
);

export const setAcceptCookie = createAsyncThunk(
    'app/set',
    async (value, thunkAPI) => {
        try {
            return await appService.setAcceptCookie(value);
        } catch (error) {
            return thunkAPI.rejectWithValue(false)
        }
    }
)


const loadAppSlice = createSlice(slice);
export const { setOffline, setOnline, toggled } = loadAppSlice.actions;
export default loadAppSlice.reducer;