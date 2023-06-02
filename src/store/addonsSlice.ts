import { createSlice } from "@reduxjs/toolkit";

type addonCheckbox = {
  addons: [{ id: number; type: string; payment: number }];
};

const initialState: addonCheckbox = {
  addons: [
    {
      id: 0,
      type: "",
      payment: 0,
    },
  ],
};

export const addonsSlice = createSlice({
  name: "addons",
  initialState,
  reducers: {
    saveAddons: (state, action) => {
      const newAddon = action.payload;
      const existingAddon = state.addons.map(
        (addon) => addon.id === newAddon.id
      );

      if (!existingAddon) {
        state.addons.push(newAddon);
      }
    },
  },
});

export const { saveAddons } = addonsSlice.actions;

export default addonsSlice;
