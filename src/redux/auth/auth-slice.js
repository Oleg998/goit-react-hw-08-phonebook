import { createSlice } from "@reduxjs/toolkit";
import {signup} from "../auth/auth-operation"

const initialState = {
    user:{},
    token : "",
    isLogin :false,
    isLoading : false,
    error:null , 

}
const statusPending = state =>{
    state.isLoading=true;
    state.error=null
  }
  
  const statusRejected = (state , {payload})=>{
    state.isLoading=false;
    state.error=payload
  }

const authSlice = createSlice ({
    name :"auth",
    initialState,
    extraReducers: builder => {
        builder
          .addCase(signup.pending, statusPending)
    
          .addCase(signup.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            state.user = payload.user;
            state.token = payload.token;
            state.isLogin=true;
          })
          .addCase(signup.rejected, statusRejected)
}})

export default authSlice.reducer