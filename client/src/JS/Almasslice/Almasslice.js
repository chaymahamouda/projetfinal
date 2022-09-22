import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

export const getvoyages = createAsyncThunk("voyage/get", async () => {
  try {
    let result= axios.get("http://localhost:5000/voyage/");
    return result;
    
  } catch (error) {
    console.log(error)
    
  }

});
export const addvoyage = createAsyncThunk("voyage/add", async (voyage) => {
  try {
    let result= axios.post("http://localhost:5000/voyage/add",voyage);
    return result;
    
  } catch (error) {
    console.log(error)
    
  }

});

export const deletevoyage = createAsyncThunk("voyage/delete", async (id) => {
  try {
    let result= axios.delete(`http://localhost:5000/voyage/${id}`);
    return result;
    
  } catch (error) {
    console.log(error)
    
  }

});

export const updatevoyage = createAsyncThunk("voyage/update", async ({id,edited}) => {
  try {
    let result= axios.put(`http://localhost:5000/voyage/${id}`,edited);
    return result;
    
  } catch (error) {
    console.log(error)
    
  }

});
const initialState = {
    voyages: null,
    status:null,
}

export const Almasslice = createSlice({
  name: 'voyage',
  initialState,
  reducers: {},
  extraReducers:{
  [getvoyages.pending]:(state)=>{
    state.status = "pending";

  },
  [getvoyages.fulfilled]:(state,action)=>{
    state.status = "fulfilled";
    state.voyages = action.payload.data.voyage;
    
  },
  [getvoyages.rejected]:(state)=>{
    state.status = "rejected";
    
  },

  [addvoyage.pending]:(state)=>{
    state.status = "pending";

  },
  [addvoyage.fulfilled]:(state)=>{
    state.status = "fulfilled";
   
    
  },
  [addvoyage.rejected]:(state)=>{
    state.status = "rejected";
    
  },

  [deletevoyage.pending]:(state)=>{
    state.status = "pending";

  },
  [deletevoyage.fulfilled]:(state)=>{
    state.status = "fulfilled";
   
    
  },
  [deletevoyage.rejected]:(state)=>{
    state.status = "rejected";
    
  },
  [updatevoyage.pending]:(state)=>{
    state.status = "pending";

  },
  [updatevoyage.fulfilled]:(state)=>{
    state.status = "fulfilled";
   
    
  },
  [updatevoyage.rejected]:(state)=>{
    state.status = "rejected";
    
  },
},
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = Almasslice.actions

export default Almasslice.reducer;