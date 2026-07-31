import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { authFireBase } from "../../firebase/firebase";

type AuthPayload = {
  email: string;
  password: string;
};

export interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const loginWithGoogle = createAsyncThunk<AuthUser>(
  "auth/loginWithGoogle",
  async () => {
    const result = await signInWithPopup(
      authFireBase,
      googleProvider
    );

    return {
      uid: result.user.uid,
      email: result.user.email,
      displayName: result.user.displayName,
      photoURL: result.user.photoURL,
    };
  }
);

export const loginWithGitHub = createAsyncThunk<AuthUser>(
  "auth/loginWithGitHub",
  async () => {
    const result = await signInWithPopup(
      authFireBase,
      githubProvider
    );

    return {
      uid: result.user.uid,
      email: result.user.email,
      displayName: result.user.displayName,
      photoURL: result.user.photoURL,
    };
  }
);

export const createUser = createAsyncThunk<AuthUser, AuthPayload>(
  "auth/createUser",
  async ({ email, password }) => {
    const userCredential = await createUserWithEmailAndPassword(
      authFireBase,
      email,
      password
    );

    return {
      uid: userCredential.user.uid,
      email: userCredential.user.email,
      displayName: userCredential.user.displayName,
      photoURL: userCredential.user.photoURL,
    };
  }
);

export const loginUser = createAsyncThunk<AuthUser, AuthPayload>(
  "auth/loginUser",
  async ({ email, password }) => {
    const userCredential = await signInWithEmailAndPassword(
      authFireBase,
      email,
      password
    );

    return {
      uid: userCredential.user.uid,
      email: userCredential.user.email,
      displayName: userCredential.user.displayName,
      photoURL: userCredential.user.photoURL,
    };
  }
);

export const checkAuth = createAsyncThunk<AuthUser | null>(
  "auth/checkAuth",
  async () => {
    return new Promise((resolve) => {
      onAuthStateChanged(authFireBase, (user) => {
        if(user){
          resolve({
            uid:user.uid,
            email:user.email,
            displayName:user.displayName,
            photoURL:user.photoURL,
          });
        }else{
          resolve(null);
        }
      });
    });
  }
);