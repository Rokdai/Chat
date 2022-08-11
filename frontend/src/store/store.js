import { configureStore } from "@reduxjs/toolkit";

import webSocketReducer from "./slices/webSocket/webSocket";
import timeTriggerReducer from "./slices/timeTrigger/timeTrigger";

export const store = configureStore({
  reducer: {
    webSocket: webSocketReducer,
    timeTrigger: timeTriggerReducer,
  },
});
