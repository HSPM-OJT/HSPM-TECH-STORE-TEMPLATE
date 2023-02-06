import { configureStore } from "@reduxjs/toolkit";
import orderReducer from '../component/order/orderSlice'

export const store = configureStore({
    reducer:{
        orders:orderReducer,
    }
})