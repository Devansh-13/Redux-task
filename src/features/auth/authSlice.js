import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const loginUser = createAsyncThunk("auth/loginUser",async (creds) =>{
    const response = await axios.get("http://localhost:5000/users",{params:creds});
    // Check if user exists
  if (response.data.length === 0) {
    throw new Error('Invalid username or password');
  }

  const user = response.data[0]; // Get the first user (because JSON server returns an array)
  return { user, token: user.token };
   // {user,token}

})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user:null,
        token:null,
        loading:false,
        error:null
    },
    reducers:{
        logout:(state)=>{
            state.user=null
            state.token=null
        },
    },
    extraReducers:(builder) =>{
        builder
        .addCase(loginUser.pending,(state)=>{
            state.loading=true
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;

        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.loading = false;
            state.error  = action.error.message;
        })
    }
})

export const {logout} = authSlice.actions;

export default authSlice.reducer;