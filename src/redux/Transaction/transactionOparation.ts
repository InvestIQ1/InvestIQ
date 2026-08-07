import { dataBaseDB } from "../../firebase/firebase.ts";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import axios from "axios";
import type { RootState } from "../store.ts";
import { nanoid } from "nanoid";

interface Transaction {
  id: string;
  category: string;
  descr: string;
  sum: number;
  date: string;
}
type NewTransaction = Omit<Transaction, "id" | "date">;

export const addTransaction = createAsyncThunk(
  "transaction/addTransaction",
  async (transData: NewTransaction, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    if (state.auth.user === null) {
      throw new Error("Користувач не знайден");
    }
    try {
      const userDocRef = doc(dataBaseDB, "transaction", state.auth.user.uid);
      const newTransaction: Transaction = {
        ...transData,
        id: nanoid(),
        date: new Date().toLocaleDateString("uk-UA"),
      };
      await updateDoc(userDocRef, { transaction: arrayUnion(newTransaction) });
      return newTransaction;
    } catch (err: unknown) {
      console.log(err);

      if (axios.isAxiosError(err)) {
        return thunkAPI.rejectWithValue(err.message);
      }

      return thunkAPI.rejectWithValue("Unknown error");
    }
  },
);

export const removeTransaction = createAsyncThunk(
  "transaction/removeTransaction",
  async (id: string, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    if (state.auth.user === null) {
      throw new Error("Користувач не знайден");
    }
    try {
      const userDocRef = doc(dataBaseDB, "transaction", state.auth.user.uid);
      const collection = await getDoc(userDocRef);
      if (collection.exists()) {
        const collData: Transaction[] = collection.data().transaction;
        const filteredCollection = collData.filter((trans) => trans.id !== id);
        await updateDoc(userDocRef, { transaction: filteredCollection });
      }

      return id;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return thunkAPI.rejectWithValue(err.message);
      }

      return thunkAPI.rejectWithValue("Unknown error");
    }
  },
);

export const getTransactions = createAsyncThunk<
  Transaction[],
  void,
  { rejectWithValue: string; state: RootState }
>("transactions/getTransactions", async (_, { rejectWithValue, getState }) => {
  const state = getState();

  try {
    if (state.auth.user === null) {
      throw new Error("Користувач не знайден");
    }

    const userDocRef = doc(dataBaseDB, "transaction", state.auth.user.uid);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      return docSnap.data().transaction || [];
    } else {
      await setDoc(userDocRef, { transaction: [] });
      return [];
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});
