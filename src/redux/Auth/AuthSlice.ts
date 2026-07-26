import {createSlice} from "@reduxjs/toolkit";
import {createUser} from "./authOperation";
import type { User } from "firebase/auth/web-extension";

const initialState: AuthState = {
    user: null,
    isLoading: false,
    error: null,
};
interface AuthState {
    user: User | null;
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
            });
        },
    });

export default authSlice.reducer;