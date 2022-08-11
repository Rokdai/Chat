import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: {
    open: false,
    closed: false,
    error: false,
  },
  userName: "",
  messages: [],
};

export const webSocketSlice = createSlice({
  name: "webSocket",
  initialState,
  reducers: {
    setStatusOpen: (state) => {
      state.status.open = true;
      state.status.closed = false;
      state.status.error = false;
    },
    setStatusClosed: (state) => {
      state.status.open = false;
      state.status.closed = true;
      state.status.error = false;
    },
    setStatusErrod: (state) => {
      state.status.open = false;
      state.status.closed = false;
      state.status.error = true;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = [...state.messages, action.payload];
    },
  },
});

//Selectors
export const selectStatus = (state) => state.webSocket.status;
export const selectUserName = (state) => state.webSocket.userName;
export const selectMessages = (state) => state.webSocket.messages;

//Reducers&Actions
export const {
  setStatusOpen,
  setStatusClosed,
  setStatusErrod,
  setUserName,
  setMessages,
} = webSocketSlice.actions;

export default webSocketSlice.reducer;
