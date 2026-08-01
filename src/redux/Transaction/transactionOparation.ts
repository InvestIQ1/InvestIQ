// import { log } from 'firebase/firestore/pipelines';
// import { dataBaseDB } from '../../firebase/firebase.ts'
// import { authFireBase } from '../../firebase/firebase.ts'
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { collection, addDoc } from 'firebase/firestore';
import axios from "axios";

interface Transaction {
  category: string;
  date: string;
  descr: string;
  sum: number;
}

const baseUrl = "https://6a3ab4a0917c7b14c74dfcfa.mockapi.io/te";

export const addTransaction = createAsyncThunk(
  "transaction/addTransaction",
  async (transData: Transaction, thunkAPI) => {
    try {
      // const fetchData = collection(dataBaseDB,"transaction", "1")
      const fetchData = await axios.post(`${baseUrl}/transactions`, transData);
      const data = fetchData.data;
      console.log(fetchData);
      return data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return thunkAPI.rejectWithValue(err.message);
      }

      return thunkAPI.rejectWithValue("Unknown error");
    }
  },
);
