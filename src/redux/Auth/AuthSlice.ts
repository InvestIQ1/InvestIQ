import { createSlice } from "@reduxjs/toolkit";
import {
  checkAuth,
  loginUser,
  createUser,
  loginWithGitHub,
  loginWithGoogle,
  logoutUser,
  type AuthUser,
} from "./authOperation";

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};
interface AuthState {
  user: AuthUser | null;
  isLoading: boolean;
  error: string | undefined | null;
}
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(loginWithGoogle.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "Помилка входу через Google";
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      .addCase(loginWithGitHub.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginWithGitHub.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginWithGitHub.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "Помилка входу через GitHub";
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload;
        console.log(state.user);
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;
