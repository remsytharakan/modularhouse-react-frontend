import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './slices/userSlice';
import { userLoadingReducer } from './slices/userLoadingSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        userLoading: userLoadingReducer,
    },
});

export default store;