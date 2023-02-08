import { configureStore } from "@reduxjs/toolkit";
import orderReducer from '../component/order/orderSlice'
import authReducer from '../component/auth/authSlice'
import userReducer from '../component/users/userSlice'
import productReducer from '../component/product/productSlice'

export const store = configureStore({
    reducer:{
        orders:orderReducer,
        users:userReducer,
        auths:authReducer,
        products:productReducer
    }
})