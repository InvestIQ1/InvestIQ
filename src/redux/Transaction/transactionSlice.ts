import { createSlice } from "@reduxjs/toolkit";
import { addTransaction } from "./transactionOparation.ts";

const initialState = {
  transaction: null,
  loading: false,
  error: null,
};

// interface Transaction {
//   transaction: null,
//   loading: boolean,
//   error: string | undefined 
// }

const transactionSlice = createSlice({
  name: "Transaction",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(addTransaction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addTransaction.fulfilled, (state, action) => {
      state.loading = false;
      state.transaction = action.payload;
    });
    builder.addCase(addTransaction.rejected, (state) => {
      state.loading = false;
      // state.error = action.payload;
    });
  },
});

export const transactionReducer = transactionSlice.reducer;
