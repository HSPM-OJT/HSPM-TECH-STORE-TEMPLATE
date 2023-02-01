import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../component/product/productSlice"

export const store = configureStore({
    reducer:{
        products:productReducer,
    }
})