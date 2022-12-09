import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sessionTime:25,
  brakeTime:5,
  stage:"session",
  start:false,
}

const timesSlice = createSlice({
  name:"times",
  initialState,
  reducers:{
    upDateSessionTime(state,action){
      state.sessionTime = action.payload
    },
    upDateBreakTime(state,action){
      // alert(action.payload)
      state.brakeTime = action.payload
    },
    upDateStage(state,action){
      state.stage = action.payload
    },
    upDateStart(state,action){
      state.start = action.payload
    },
  }
})

export const {upDateBreakTime,upDateSessionTime,upDateStage,upDateStart} = timesSlice.actions
export default timesSlice.reducer