import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

export const userRegister= createAsyncThunk("user/register",async(user) =>{
    try {
    let response = await axios.post("http://localhost:5000/user/register", user );
    return await response;
    } catch (error) {
        console.log(error);
          }  
});
export const userLogin = createAsyncThunk("user/login", async (user) => {
  try {
    let result = await axios.post("http://localhost:5000/user/login", user);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    let result = await axios.get("http://localhost:5000/user/current",{headers:{
      Authorization:localStorage.getItem("token"),
    }});
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const getUsers = createAsyncThunk("user/get", async () => {
  try {
    let result= axios.get("http://localhost:5000/user/");
    return result;
    
  } catch (error) {
    console.log(error)
    
  }

});
export const useredit =  createAsyncThunk("user/edit", async ({id,edited})=> {
  try {
    let result= axios.put(`http://localhost:5000/user/${id}`,edited);
    return result;
    
  } catch (error) {
    console.log(error)
    
  }
});
export const userdelete = createAsyncThunk("user/delete", async (id) => {
  try {
    let result= axios.delete(`http://localhost:5000/user/${id}`);
    return result;
    
  } catch (error) {
    console.log(error)
    
  }

});

const initialState = {
 user: null,
 users:null,
 status:null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout:(state,action)=>{
      state.user=null;
      localStorage.removeItem("token")
    }
  },
  extraReducers:{
   [userRegister.pending]:(state)=>{
    state.status = "pending";
   },
   [userRegister.fulfilled]:(state, action)=>{
    state.status = "success";
    state.user = action.payload.data.newUserToken;
    localStorage.setItem("token", action.payload.data.token);
   },
   [userRegister.rejected]:(state)=>{
    state.status = "failed";
   },  
    [getUsers.pending]:(state)=>{
    state.status = "pending";

  },
  [getUsers.fulfilled]:(state,action)=>{
    state.status = "fulfilled";
    state.users = action.payload.data.user;
    
  },
  [getUsers.rejected]:(state)=>{
    state.status = "rejected";
    
  },

  [userLogin.pending]:(state)=>{
    state.status="pending";
  },
  [userLogin.fulfilled]:(state,action)=>{
    state.status="fullfilled";
    state.user=action.payload.data.user;
    localStorage.setItem("token",action.payload.data.token)

  },
  [userLogin.rejected]:(state)=>{
    state.status="rejected";
  },
  [userCurrent.pending]:(state)=>{
    state.status="pending";
  },
  [userCurrent.fulfilled]:(state,action)=>{
    state.status="fullfilled";
    state.user=action.payload?.data.user;
  },
  [userCurrent.rejected]:(state)=>{
    state.status="rejected";
  },
  [useredit.pending]:(state)=>{
    state.status="pending";
  },
  [useredit.fulfilled]:(state)=>{
    state.status="fulfilled";
  },
  [useredit.rejected]:(state)=>{
    state.status="rejected";
  },
  [userdelete.pending]:(state)=>{
    state.status = "pending";

  },
  [userdelete.fulfilled]:(state)=>{
    state.status = "fulfilled";
   
    
  },
  [userdelete.rejected]:(state)=>{
    state.status = "rejected";
    
  },
},
});


// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = userSlice.actions
export const {logout} = userSlice.actions;
export default userSlice.reducer