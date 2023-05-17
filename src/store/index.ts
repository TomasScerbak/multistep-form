import { configureStore } from "@reduxjs/toolkit";

import userInputsReducer from "./userInputsSlice";

const store = configureStore({
  reducer: {
    userInputs: userInputsReducer.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
