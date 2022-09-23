import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addCustomer, importCustomers } from "./actions";

export const createCustomer = createAsyncThunk(
  "customer/addCustomer", 
  async (payload) => addCustomer(payload)
);
//
export const importMultipleCustomers = createAsyncThunk(
  "customer/importCustomers", 
  async (payload) => importCustomers(payload)
);
const initialState = {
  customer : null,
  refresher: 0,
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCustomer.fulfilled, (state, action) => {
        state.customer = action.payload;
      })
      .addCase(importMultipleCustomers.fulfilled, (state, action) => {
        state.refresher++;
      });
  },
});

// export const {  } = customerSlice.actions;
export default customerSlice.reducer;
