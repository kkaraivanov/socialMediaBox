import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { storage } from '../../utill'
import { appService } from '../../api/axios'

const INITIAL_STATE = {
    status: false,
    acceptCookieExist: true,
    isLoading: false,
    toggle: false,
}

const slice = {
    name: 'app',
    initialState: INITIAL_STATE,
    reducers: {
        setOffline: (state) => {
            state.status = false;
        },
        setOnline: (state) => {
            state.status = true;
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
                const { acceptCookie, status } = action.payload;
                state.isLoading = false
                state.status = status
                state.acceptCookieExist = acceptCookie
            })
            .addCase(load.rejected, (state, action) => {
                state.isLoading = false
                state.status = action.payload
                state.manager = null
            })
            .addCase(setAcceptCookie.fulfilled, (state, action) => {
                state.acceptCookieExist = action.payload
            })
            .addCase(setAcceptCookie.rejected, (state, action) => {
                state.status = action.payload
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