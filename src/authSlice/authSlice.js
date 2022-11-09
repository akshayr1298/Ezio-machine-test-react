import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "userauth",
  initailState: {
    name: "",
    number: "",
    email: "",
    password: "",
  },

  reducer: {
    authName: (state, action) => {
      state.base = action.payload;
    },
    authNumber:(state,action)=>{
        state.base = action.payload
    },
    authEmail:(state,action)=>{
        state.base = action.payload
    },
    authPassword:(state,action)=>{
        state.base = action.payload
    }
  },
});

export const reducer = authSlice.reducer
export const {authName,authNumber,authEmail,authPassword} = authSlice.actions
