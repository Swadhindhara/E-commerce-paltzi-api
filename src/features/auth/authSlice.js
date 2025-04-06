import { toast } from "sonner";
import authAPI from "./authAPI";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Get token from localStorage if available
const storedToken = localStorage.getItem("token");

// Async thunk for login
export const login = createAsyncThunk("auth/login", async (userData, thunkAPI) => {
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

// Async thunk for user creation
export const createUser = createAsyncThunk("auth/createUser", async (data, thunkAPI) => {
    try {
        const response = await authAPI.createProfile(data);
        // Automatically log in after successful registration
        await thunkAPI.dispatch(login({ email: data.email, password: data.password }));
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message || "Failed to create user");
    }
});

// Initial auth state
const initialState = {
    user: null,
    token: storedToken ? JSON.parse(storedToken) : null,
    isAuthenticated: !!storedToken,
    isLoading: false,
    isError: false,
    errorMessage: "",
};

// Auth slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.token = null;
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem("token");
            authAPI.logout();
        },
    },
    extraReducers: (builder) => {
        builder
            // Login cases
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.errorMessage = "";
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.token = action.payload;
                toast.success("Successfully logged in!");
                window.location.href = "/"; 
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.payload || "Login failed";
                toast.error("Invalid credentials");
            })

            // User registration cases
            .addCase(createUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.errorMessage = "";
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                toast.success("User created successfully");
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.payload || "Failed to create user";
                toast.error("Failed to create user");
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
