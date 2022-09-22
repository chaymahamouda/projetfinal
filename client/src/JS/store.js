import { configureStore } from '@reduxjs/toolkit'
import Almasslice from './Almasslice/Almasslice'
import ReservationSlice from './Reservationslice/ReservationSlice'
import userSlice from './userSlice/userSlice'


export const store = configureStore({
  reducer: {
    user:userSlice,
    voyage: Almasslice,
    reservation: ReservationSlice,
  },
})