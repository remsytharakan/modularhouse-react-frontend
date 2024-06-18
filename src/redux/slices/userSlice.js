import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload;
        },
        unsetUser: (state) => {
            state.value = null;
        },
    },
});

export const { setUser, unsetUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
