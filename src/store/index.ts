import { configureStore } from "@reduxjs/toolkit";

import userPersonalDataReducer from "./userPersonalDataSlice";

const store = configureStore({
  reducer: {
    userInputs: userPersonalDataReducer.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
