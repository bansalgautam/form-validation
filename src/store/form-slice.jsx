import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  mobileNo: "",
  email: "",
  subject: "",
  address: "",
  city: "",
  state: "",
  pinCode: "",
  country: "",
  corporateIdentity: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateData(state, action) {
      state[action.payload.name] = action.payload.value;
    },
    handleSubmit(state, action) {
      const payloadObject = action.payload;
      return payloadObject;
    },
  },
});

export const formActions = formSlice.actions;

export default formSlice;
