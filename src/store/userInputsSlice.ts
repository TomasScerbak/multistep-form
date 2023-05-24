import { createSlice } from "@reduxjs/toolkit";

type UserInputTypes = {
  username: string;
  email: string;
  phoneNumber: string;
  plan: {};
  addon: {};
};

const initialState: UserInputTypes = {
  username: "",
  email: "",
  phoneNumber: "",
  plan: {
    type: "",
    payment: "",
  },
  addon: {
    type: "",
    payment: "",
  },
};

export const userInputsSlice = createSlice({
  name: "userInputs",
  initialState,
  reducers: {
    saveUserInputs: (state, action) => {
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
      };
    },
  },
});

export const { saveUserInputs } = userInputsSlice.actions;

export default userInputsSlice;
