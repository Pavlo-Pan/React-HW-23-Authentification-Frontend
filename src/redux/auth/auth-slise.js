import { createSlice } from "@reduxjs/toolkit";

import { pending, rejected } from "../../shared/lib/redux";

import { registerUser, loginUser, logoutUser } from "./auth-thunks";

const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null,
    success: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(registerUser.pending, pending)
            .addCase(registerUser.rejected, rejected)
            .addCase(registerUser.fulfilled, (store) => {
                store.loading = true;
                store.success = true;
            })
            .addCase(loginUser.pending, pending)
            .addCase(loginUser.rejected, rejected)
            .addCase(loginUser.fulfilled, (store, { payload }) => {
                store.loading = true;
                store.success = true;
                store.token = payload.token;
                store.user = payload.user;
            })
            .addCase(logoutUser.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logoutUser.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(logoutUser.fulfilled, state => {
                state.loading = false;
                state.success = false;
                state.token = null;
                state.user = null;
            });
    }
});

export default authSlice.reducer;