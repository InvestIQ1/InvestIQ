import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {authFireBase} from "../../firebase/firebase";
interface CreateUserPayload {
  email: string;
  password: string;
}
export const createUser = createAsyncThunk(
  'auth/createUser',
  async ({ email, password }: CreateUserPayload) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(authFireBase, email, password);
      console.log(userCredential.user);
      return {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        createdAt: new Date(userCredential.user.metadata.creationTime),
      };
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }
);