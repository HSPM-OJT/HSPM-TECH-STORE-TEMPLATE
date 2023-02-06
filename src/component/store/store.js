import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../auth/authSlice'
import userReducer from '../users/userSlice'

export const store = configureStore({
    reducer:{
        users:userReducer,
        auths:authReducer,
    }
})