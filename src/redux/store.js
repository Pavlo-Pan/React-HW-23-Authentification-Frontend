import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/auth-slise";

const store = configureStore({
    reducer: {
        auth: authReducer
    }
});

export default store;