import type { RootState } from "../store";

export const selectTransactions = (state: RootState) =>
  state.transaction.transactions;

export const selectLoading = (state: RootState) => state.transaction.loading;

export const selectBalance = (state: RootState) =>
  state.transaction.transactions.reduce((acc, t) => acc + t.sum, 0);
