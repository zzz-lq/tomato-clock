import { configureStore } from "@reduxjs/toolkit";
import timesReducer from "../features/times/timesSlice";

const store = configureStore({
  reducer:{
    times:timesReducer,
  }
})

export default store