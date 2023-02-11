import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const GET_ALL_PRODUCTS = "http://localhost:8383/api/product/all"
const ADD_NEW_PRODUCTS = "http://localhost:8383/api/product/create"
const DELETE_PRODUCTS = "http://localhost:8383/api/product/id/"

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (token)=>{
    const response = await axios.get(GET_ALL_PRODUCTS,{
        headers:{
            'Authorization':token,
        }
    });
    return response.data
});
export const deleteProducts = createAsyncThunk('products/deleteProducts', async (product)=>{
    const response = await axios.delete(`${DELETE_PRODUCTS}${product.id}`,{
        headers:{
            'Authorization':product.token,
        }
    });
    return response.data
});

export const addNewProduct = createAsyncThunk('products/addNewProduct', async(initialProduct)=>{
    const response = await axios.post(ADD_NEW_PRODUCTS,initialProduct,{
        headers:{
            'Content-Type':'application/json',
            'Authorization':initialProduct.token,
        }, 
    });
    return response.data
});

export const editProduct = createAsyncThunk('products/editProduct', async(updatedProduct)=>{
    const response = await axios.post(ADD_NEW_PRODUCTS,updatedProduct,{
        headers:{
            'Content-Type':'application/json',
            'Authorization':updatedProduct.token,
        },
    });
    return response.data
});




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
        .addCase(editProduct.fulfilled,(state,action)=>{
            const product = action.payload
            const products = state.products.filter(p => p.id !== product.id)

            state.products = [product,...products]
        })
        .addCase(deleteProducts.fulfilled,(state,action)=>{
            console.log(action.payload)
            const products = state.products.filter(p => p.id !== Number(action.payload)) 
            state.products = products
        })
    }

})

export const selectAllProduct = (state)=>state.products.products
export const getProductStatus = (state)=>state.products.status
export const getProductError = (state)=>state.products.error

export const selectProductById = (state,productId) => state.products.products.find( product => product.id === productId )

export const { addProduct } = productSlice.actions

export default productSlice.reducer