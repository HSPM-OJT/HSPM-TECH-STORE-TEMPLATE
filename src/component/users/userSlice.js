import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const CREATE_USER = 'http://localhost:8383/api/user/create'
const GET_USER = 'http://localhost:8383/api/user/all'
const DELETE_USER = 'http://localhost:8383/api/user/email/'
const UPDATE_USER = 'http://localhost:8383/api/user/update'

export const createUser = createAsyncThunk('users/createUser', async (user)=>{
    const response = await axios.post(CREATE_USER,user)
    return response.data
})
export const fetchUser = createAsyncThunk('users/fetchUser',async()=>{
    const response = await axios.get(GET_USER)
    return response.data
})
export const deleteUser = createAsyncThunk('users/deleteUser',async(user)=>{
    const response = await axios.delete(`${DELETE_USER}${user.email}`)
    return response.data
})
export const editUser = createAsyncThunk('users/editUser', async (user)=>{
    const response = await axios.post(UPDATE_USER,user)
    return response.data
})

const initialState = {
    users:{},
    status:'idle',
    error:null
}

export const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        prepare(
            id,
            fname,
            lname,
            email,
            phoneNumber,
            status,
            createdAt,
            updatedAt
            ){
            return {
                payload:{
                id,
                fname,
                lname,
                email,
                phoneNumber,
                status,
                createdAt,
                updatedAt,
             }
            }
        },
    
},
    extraReducers(builder){
        builder
            .addCase(createUser.fulfilled,(state,actions)=>{
                const user = actions.payload
                state.users = user
                //state.user.push(actions.payload)
            })
            .addCase(fetchUser.pending,(state,actions) => {
                state.status = 'loading';
            })
            .addCase(fetchUser.fulfilled,(state,actions)=>{
                state.status = 'succeeded';
                const user = actions.payload
                state.users = user
            })
            .addCase(fetchUser.rejected,(state,actions)=>{
                state.status = 'failed';
                console.error(actions.error.message)
            })
            .addCase(deleteUser.fulfilled,(state,actions)=>{
                console.log(actions.payload)
                const user = state.users.filter(p => p.email !== String(actions.payload))
                state.users = user
            })
            
            .addCase(editUser.fulfilled,(state,actions)=>{
                const user = actions.payload
                console.log(actions.payload)
                const users = state.users.filter(u => u.id !== user.id)

                state.users = [user,...users]
            })
            .addCase(editUser.rejected,(state,actions)=>{
                state.status = 'failed';
                console.error(actions.error.message)
            })
    }
        
})
export const getUserStatus = (state) => state.users.status;
export const selectAllUser = (state)=>state.users.users;
export const getUserError = (state)=> state.users.error;

export const selectUserById = (state,userId) => state.users.users.find(user => user.id === userId);


export default userSlice.reducer