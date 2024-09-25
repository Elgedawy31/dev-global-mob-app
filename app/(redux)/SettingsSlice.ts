import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  isCamDefault: boolean;
} = {
  isCamDefault: false,
};
const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeCamValue(state, action) {
      state.isCamDefault = action?.payload;
    },
  },
});

export const { changeCamValue } = settingsSlice.actions;
const settingsReducer = settingsSlice.reducer;

export default settingsReducer;
