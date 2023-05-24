import { createSlice } from "@reduxjs/toolkit";

type UserPlanSelection = {
  plan: {};
};

const initialState: UserPlanSelection = {
  plan: {
    type: "",
    payment: null,
  },
};

export const userPlanSelection = createSlice({
  name: "userPlanSelection",
  initialState,
  reducers: {
    saveUserPlanSelection: (state, action) => {
      return {
        ...state,
        plan: {
          type: action.payload.type,
          payment: action.payload.payment,
        },
      };
    },
  },
});

export const { saveUserPlanSelection } = userPlanSelection.actions;

export default userPlanSelection;
