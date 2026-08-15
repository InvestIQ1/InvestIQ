import type { RootState } from "../store";

export const selectTransactions = (state: RootState) =>
  state.transaction.transactions;

export const selectLoading = (state: RootState) => state.transaction.loading;

export const selectBalance = (state: RootState) =>
  state.transaction.transactions.reduce((acc, t) => acc + t.sum, 0);

export const selectExpense = (state: RootState) =>
  state.transaction.transactions.reduce((acc, t) => acc + (t.type === "expense" ? t.sum : 0), 0);

export const selectIncome = (state: RootState) =>
  state.transaction.transactions.reduce((acc, t) => acc + (t.type === "income" ? t.sum : 0), 0);

export const selectNeededExpense = (state: RootState) =>
  state.transaction.transactions.filter(t => t.type === "expense")

export const selectNeededIncome = (state: RootState) =>
  state.transaction.transactions.filter(t => t.type === "income")
