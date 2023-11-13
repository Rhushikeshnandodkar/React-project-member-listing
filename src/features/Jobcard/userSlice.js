import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { url } from "../../components/common/api";
import { useRouteLoaderData } from "react-router-dom";
import axios from "axios"

export const userLogin = createAsyncThunk("user/login", async(data, thunkAPI) => {
    console.log(data)
   const config = {
    method: 'post',
    url: `https://siaserver.pythonanywhere.com/login/api/token/`,
    headers : {
        'Authorization': '',
        'Content-Type': 'application/json'
    },
    data
   }
   const response = await axios(config).then(function(response){
    console.log(JSON.stringify(response.data))
    localStorage.setItem("userToken", response.data.access)
    const {dispatch} = thunkAPI;
    dispatch(getUser())
   })
   .catch(function(error){
    console.log(error)
   })
   return response.data
})

export const getUser = createAsyncThunk('api/account/me', async(_, thunkAPI) =>{
    try{
        const res = await fetch(`${url}/api/yourprofile`, {
            method: "GET",
            headers : {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                Accept: "application/json",
            }
        })
        const data = await res.json()
        localStorage.setItem('user', JSON.stringify({...data}))
        console.log("getuser", data)
        if(res.status == 200){
            return {...data}
        }else{
            return thunkAPI.rejectWithValue(data)
        }
    }catch(err){
        return thunkAPI.rejectWithValue(err.response.data)
    }
})

export const resetPassword = createAsyncThunk('api/account/resetpassword', async(email, thunkAPI) =>{
    const config = {
        headers: {
            "Content-Type" : "application/json",
        },
    }
    const body = JSON.stringify({email})
    console.log(body)
    try{
        const response = await axios.post(`${url}/login/resetpass`,
        body,
        config
        )
        console.log(response)
        if(response.status == 200){
            console.log(response.status)
            return response.data
        }else{
            console.log(response.status)
            return thunkAPI.rejectWithValue(response.data)
        }
    }catch(error){
        return thunkAPI.rejectWithValue(error) 
    }
})

export const resetPasswordConfirm = createAsyncThunk('api/account/resetpassword', async(data, thunkAPI) => {
    const config = {
        headers : {
            "Content-Type": "application/json"
        }
    }
    const {uid, token} = data
    console.log(uid, token)
    try{
        const response = await axios.post(`${url}/login/resetpass/${uid}/${token}`,
        data,
        config
        )
        console.log(response)
    }catch{

    }
})

const initialState = {
    isLoading : true,
    user : null,
    userToken : localStorage.getItem("userToken"),
    success : false,
    isAuthenticated : false,
    error : null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(userLogin.pending, (state, action) =>{
            state.isLoading = true;
        })
        .addCase(userLogin.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.userToken = payload.userToken
            state.isAuthenticated = true;
        })
        .addCase(userLogin.rejected, (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        })
        .addCase(getUser.pending, (state, action) =>{
            state.isLoading = true;
        })
        .addCase(getUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
            state.isAuthenticated = true;
        })
        .addCase(getUser.rejected, (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        })
        .addCase(resetPassword.pending, (state, action) =>{
            state.isLoading = true;
            state.success = false
        })
        .addCase(resetPassword.fulfilled, (state, action) => {
            state.isLoading = false
            state.success = true
        })
        .addCase(resetPassword.rejected, (state, {payload}) => {
            state.isLoading = false
            state.success = false
            state.error = true
        })
    }
})
export default userSlice.reducer