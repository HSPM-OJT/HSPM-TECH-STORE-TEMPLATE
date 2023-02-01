import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const GET_ALL_PRODUCTS = "http://localhost:8383/api/product/all"
const ADD_NEW_PRODUCTS = "http://localhost:8383/api/product/create"

export const fetchProducts = createAsyncThunk('products/fetchProducts', async ()=>{
    const response = await axios.get(GET_ALL_PRODUCTS)
    return response.data
})

export const addNewProduct = createAsyncThunk('products/addNewProduct', async(initialProduct)=>{
    const response = await axios.post(ADD_NEW_PRODUCTS,initialProduct)
    return response.data
}
)




const initialState = {
    products:[],
    status:'idle',
    error :null

}
 

export const productSlice = createSlice ({
    name:'products',
    initialState,
    reducers:{
        addProduct:{
            reducer(state,action){
            state.push(action.payload);
        },
        prepare(image,productName,price,productCode,quantity,description,expireDate){
            return{
            payload:{
                productName,
                productCode,
                price,
                quantity,
                description,
                expireDate,
                image,

            }
        }
        }
    }

    },
    extraReducers(builder){
        builder
        .addCase(fetchProducts.pending,(state,action)=>{
            state.status = 'loading'
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status = 'succeed'
            state.products = action.payload
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(addNewProduct.fulfilled,(state,action)=>{
            state.status = 'succeed'
            state.products.push(action.payload)
        })
        .addCase(addNewProduct.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.error.message
        })
    }

})

export const selectAllProduct = (state)=>state.products.products
export const getProductStatus = (state)=>state.products.status
export const getProductError = (state)=>state.products.error

export const { addProduct } = productSlice.actions

export default productSlice.reducer