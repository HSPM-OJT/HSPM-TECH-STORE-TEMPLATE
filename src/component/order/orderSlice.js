import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_ALL_ORDER = 'http://localhost:8383/api/order/all';
const POST_NEW_ORDER = 'http://localhost:8383/api/order/create';

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async (token) => {
    const response = await axios.get(GET_ALL_ORDER,{
        headers:{
            'Authorization':token,
        }
    });
    return response.data
});


export const addNewOrder = createAsyncThunk('orders/addNewOrder', async (order) => {
    const response = await axios.post(POST_NEW_ORDER,order,{
        headers:{
            'Content-Type':'application/json',
            'Authorization':order.token,
        }, 
    })
    return response.data
})

const initialState = {
    orders:[],
    status:'idle',
    error:null
}

export const orderSlice = createSlice({
    name:'orders',
    initialState,
    reducers:{
        addOrder:{
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(
                productName,
                price,
                quantity,
                subTotal,
                shippingCost,
                grandTotal,
                orderDate,
                customerName,
                email,
                phone,
                ){
                    return {
                        payload:{
                            productName,
                            price,
                            quantity,
                            subTotal,
                            shippingCost,
                            grandTotal,
                            orderDate,
                            customerName,
                            email,
                            phone,
                        }
                    }
                },
        }

    },
    extraReducers(builder){
        builder
        .addCase(fetchOrders.pending,(state,action) => {
            state.status = 'loading'
        })
        .addCase(fetchOrders.fulfilled,(state,action) => {
            state.status = 'succeeded'
            // state.orders = state.orders.concat(action.payload)
            state.orders = action.payload
        })
        .addCase(fetchOrders.rejected,(state,action) => {
            state.status = 'failded'

            state.error = action.error.message
        })
        .addCase(addNewOrder.fulfilled,(state,action) => {
            state.orders.push(action.payload)
        })
    }
})

export const selectAllOrders = (state) => state.orders.orders
export const getOrderStatus = (state) => state.orders.status
export const getOrderError = (state) => state.orders.error
export const selectOrderById = (state,orderId) => state.orders.orders.find(order => order.id)


export const { addOrder } = orderSlice.actions

export default orderSlice.reducer