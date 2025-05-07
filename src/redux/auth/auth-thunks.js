import { createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

import { registerUserApi, loginUserApi } from "../../shared/api/auth-api";

export const registerUser = createAsyncThunk(
    "auth/register",
    async (payload, { rejectWithValue }) => {
        const { data, error } = await registerUserApi(payload);
        if (data) return data;
        return rejectWithValue(error?.response?.data?.message);
    }
);

export const loginUser = createAsyncThunk(
    "auth/login",
    async (payload, { rejectWithValue }) => {
        const { data, error } = await loginUserApi(payload);
        if (data) {
            const { user } = jwtDecode(data.token);
            return {
                user,
                ...data,
            };
        };
        return rejectWithValue(error?.response?.data?.message);
    }
);

export const logoutUser = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            localStorage.removeItem("token");
            return;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);