import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timeTrigger: null,
};

export const timeTriggerSlice = createSlice({
  name: "timeTrigger",
  initialState,
  reducers: {
    setTime: (state, action) => {
      state.timeTrigger = action.payload;
    },
  },
});

//Selectors
export const selectTimeTrigger = (state) => state.timeTrigger.timeTrigger;

// Reducers&Actions
export const { setTime } = timeTriggerSlice.actions;

export default timeTriggerSlice.reducer;
