import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: "user",
    initialState: {
        userId: '',
        userName: '',
        isSignIn: false
    },
    reducers: {
        signIn: (state, action)=> {
            state.userId = action.payload.userId;
            state.userName = action.payload.userName;
            state.isSignIn = action.payload.status;
        }
    }
})