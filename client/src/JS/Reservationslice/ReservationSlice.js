import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

export const getreservations = createAsyncThunk("reservation/get", async () => {
  try {
    let result= axios.get("http://localhost:5000/reservation/");
    return result;
    
  } catch (error) {
    console.log(error)
    
  }

});
 export const addreservation = createAsyncThunk("reservation/add", async (reservation) => {
  try {
    let result= axios.post("http://localhost:5000/reservation/add",reservation);
    return result;
    
  } catch (error) {
    console.log(error)
    
  }

}); 

export const deletereservation = createAsyncThunk("reservation/delete", async (id) => {
  try {
    let result= axios.delete(`http://localhost:5000/reservation/${id}`);
    return result;
    
  } catch (error) {
    console.log(error)
    
  }

});

/* export const updatereservation = createAsyncThunk("reservation/update", async ({id,edited}) => {
  try {
    let result= axios.put(`http://localhost:5000/voyage/${id}`,edited);
    return result;
    
  } catch (error) {
    console.log(error)
    
  }

}); */
const initialState = {
    reservations: null,
    status:null,
}

export const ReservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {},
  extraReducers:{
  [getreservations.pending]:(state)=>{
    state.status = "pending";

  },
  [getreservations.fulfilled]:(state,action)=>{
    state.status = "fulfilled";
    state.reservations = action.payload.data.reservation;
    
  },
  [getreservations.rejected]:(state)=>{
    state.status = "rejected";
    
  },
 
  [addreservation.pending]:(state)=>{
    state.status = "pending";

  },
  [addreservation.fulfilled]:(state)=>{
    state.status = "fulfilled";
   
    
  },
  [addreservation.rejected]:(state)=>{
    state.status = "rejected";
    
  }, 

  [deletereservation.pending]:(state)=>{
    state.status = "pending";

  },
  [deletereservation.fulfilled]:(state)=>{
    state.status = "fulfilled";
   
    
  },
  [deletereservation.rejected]:(state)=>{
    state.status = "rejected";
    
  },
//   [updatereservation.pending]:(state)=>{
//     state.status = "pending";

//   },
//   [updatereservation.fulfilled]:(state)=>{
//     state.status = "fulfilled";
   
    
//   },
//   [updatereservation.rejected]:(state)=>{
//     state.status = "rejected";
    
//   },
},
})



export default ReservationSlice.reducer;