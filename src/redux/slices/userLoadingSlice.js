import { createSlice } from '@reduxjs/toolkit';

export const userLoadingSlice = createSlice({
    name: 'userLoading',
    initialState: {
        value: true,
    },
    reducers: {
        startLoadingUser: (state) => {
            state.value = true;
        },
        finishLoadingUser: (state) => {
            state.value = false;
        },
    },
});

export const { startLoadingUser, finishLoadingUser } = userLoadingSlice.actions;

export const userLoadingReducer = userLoadingSlice.reducer;