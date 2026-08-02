import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./Auth/AuthSlice";
import { transactionReducer } from "./Transaction/transactionSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    transaction: transactionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;