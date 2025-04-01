import authAPI from "./authAPI";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const storedToken = localStorage.getItem("token");

export const login = createAsyncThunk("auth/loginRequest", async (userData, thunkAPI) => {
    try {
        const response = await authAPI.loginUser(userData);
        if (response) {
            localStorage.setItem("token", JSON.stringify(response));
        }
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message || "Login failed");
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: storedToken ? JSON.parse(storedToken) : null,
        isAuthenticated: !!storedToken,
        isLoading: false,
        isError: null,
    },
    reducers: {
        logout: (state) => {
            state.token = null;
            state.isAuthenticated = false;
            state.isError = null;
            localStorage.removeItem("token");
            authAPI.logout();
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.isError = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.token = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload || "Login failed";
            });
    },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
