import { createSlice } from "@reduxjs/toolkit";
import {
  addTransaction,
  getTransactions,
  removeTransaction,
} from "./transactionOparation.ts";

interface Transaction {
  id: string;
  category: string;
  descr: string;
  sum: number;
  date: string;
}

interface TransactionState {
  transactions: Transaction[];
  loading: boolean;
  error: string | null;
}

const initialState: TransactionState = {
  transactions: [],
  loading: false,
  error: null,
};

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
      state.transactions.push(action.payload);
    });
    builder.addCase(addTransaction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    builder.addCase(getTransactions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTransactions.fulfilled, (state, action) => {
      state.loading = false;
      state.transactions = action.payload;
    });
    builder.addCase(getTransactions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    builder.addCase(removeTransaction.fulfilled, (state, action) => {
      state.transactions = state.transactions.filter(
        (t) => t.id !== action.payload,
      );
    });
  },
});

export const transactionReducer = transactionSlice.reducer;
