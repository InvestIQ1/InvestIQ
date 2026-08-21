import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./Auth/AuthSlice";
import { transactionReducer } from "./Transaction/transactionSlice";
import { categoryReducer } from "./Category/categorySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    transaction: transactionReducer,
    category: categoryReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;